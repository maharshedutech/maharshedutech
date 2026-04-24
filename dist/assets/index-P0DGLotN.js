function ju(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Fu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vs={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr=Symbol.for("react.element"),Wu=Symbol.for("react.portal"),Bu=Symbol.for("react.fragment"),Uu=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),$u=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),Gu=Symbol.for("react.memo"),Ku=Symbol.for("react.lazy"),Zo=Symbol.iterator;function Xu(e){return e===null||typeof e!="object"?null:(e=Zo&&e[Zo]||e["@@iterator"],typeof e=="function"?e:null)}var ys={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xs=Object.assign,ws={};function fn(e,t,n){this.props=e,this.context=t,this.refs=ws,this.updater=n||ys}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Es(){}Es.prototype=fn.prototype;function to(e,t,n){this.props=e,this.context=t,this.refs=ws,this.updater=n||ys}var no=to.prototype=new Es;no.constructor=to;xs(no,fn.prototype);no.isPureReactComponent=!0;var qo=Array.isArray,bs=Object.prototype.hasOwnProperty,ro={current:null},ks={key:!0,ref:!0,__self:!0,__source:!0};function Ss(e,t,n){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)bs.call(t,r)&&!ks.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];a.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:rr,type:e,key:i,ref:l,props:a,_owner:ro.current}}function Ju(e,t){return{$$typeof:rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ao(e){return typeof e=="object"&&e!==null&&e.$$typeof===rr}function Zu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var el=/\/+/g;function _a(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zu(""+e.key):t.toString(36)}function Pr(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case rr:case Wu:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+_a(l,0):r,qo(a)?(n="",e!=null&&(n=e.replace(el,"$&/")+"/"),Pr(a,t,n,"",function(d){return d})):a!=null&&(ao(a)&&(a=Ju(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(el,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",qo(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+_a(i,s);l+=Pr(i,t,n,c,a)}else if(c=Xu(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+_a(i,s++),l+=Pr(i,t,n,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ur(e,t,n){if(e==null)return e;var r=[],a=0;return Pr(e,r,"","",function(i){return t.call(n,i,a++)}),r}function qu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Tr={transition:null},ed={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:ro};function Ns(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:ur,forEach:function(e,t,n){ur(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ur(e,function(){t++}),t},toArray:function(e){return ur(e,function(t){return t})||[]},only:function(e){if(!ao(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=fn;M.Fragment=Bu;M.Profiler=Vu;M.PureComponent=to;M.StrictMode=Uu;M.Suspense=Yu;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed;M.act=Ns;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xs({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ro.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)bs.call(t,c)&&!ks.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:rr,type:e.type,key:a,ref:i,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:$u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hu,_context:e},e.Consumer=e};M.createElement=Ss;M.createFactory=function(e){var t=Ss.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Qu,render:e}};M.isValidElement=ao;M.lazy=function(e){return{$$typeof:Ku,_payload:{_status:-1,_result:e},_init:qu}};M.memo=function(e,t){return{$$typeof:Gu,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};M.unstable_act=Ns;M.useCallback=function(e,t){return se.current.useCallback(e,t)};M.useContext=function(e){return se.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return se.current.useDeferredValue(e)};M.useEffect=function(e,t){return se.current.useEffect(e,t)};M.useId=function(){return se.current.useId()};M.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return se.current.useMemo(e,t)};M.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};M.useRef=function(e){return se.current.useRef(e)};M.useState=function(e){return se.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return se.current.useTransition()};M.version="18.3.1";vs.exports=M;var C=vs.exports;const o=Fu(C),td=ju({__proto__:null,default:o},[C]);var oi={},Cs={exports:{}},we={},zs={exports:{}},Ps={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,I){var L=N.length;N.push(I);e:for(;0<L;){var $=L-1>>>1,X=N[$];if(0<a(X,I))N[$]=I,N[L]=X,L=$;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],L=N.pop();if(L!==I){N[0]=L;e:for(var $=0,X=N.length,sr=X>>>1;$<sr;){var kt=2*($+1)-1,Ma=N[kt],St=kt+1,cr=N[St];if(0>a(Ma,L))St<X&&0>a(cr,Ma)?(N[$]=cr,N[St]=L,$=St):(N[$]=Ma,N[kt]=L,$=kt);else if(St<X&&0>a(cr,L))N[$]=cr,N[St]=L,$=St;else break e}}return I}function a(N,I){var L=N.sortIndex-I.sortIndex;return L!==0?L:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],d=[],g=1,m=null,h=3,x=!1,w=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(N){for(var I=n(d);I!==null;){if(I.callback===null)r(d);else if(I.startTime<=N)r(d),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(d)}}function v(N){if(E=!1,f(N),!w)if(n(c)!==null)w=!0,Ia(b);else{var I=n(d);I!==null&&La(v,I.startTime-N)}}function b(N,I){w=!1,E&&(E=!1,p(T),T=-1),x=!0;var L=h;try{for(f(I),m=n(c);m!==null&&(!(m.expirationTime>I)||N&&!Te());){var $=m.callback;if(typeof $=="function"){m.callback=null,h=m.priorityLevel;var X=$(m.expirationTime<=I);I=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(c)&&r(c),f(I)}else r(c);m=n(c)}if(m!==null)var sr=!0;else{var kt=n(d);kt!==null&&La(v,kt.startTime-I),sr=!1}return sr}finally{m=null,h=L,x=!1}}var z=!1,P=null,T=-1,H=5,_=-1;function Te(){return!(e.unstable_now()-_<H)}function gn(){if(P!==null){var N=e.unstable_now();_=N;var I=!0;try{I=P(!0,N)}finally{I?vn():(z=!1,P=null)}}else z=!1}var vn;if(typeof u=="function")vn=function(){u(gn)};else if(typeof MessageChannel<"u"){var Jo=new MessageChannel,Du=Jo.port2;Jo.port1.onmessage=gn,vn=function(){Du.postMessage(null)}}else vn=function(){S(gn,0)};function Ia(N){P=N,z||(z=!0,vn())}function La(N,I){T=S(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,Ia(b))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var L=h;h=I;try{return N()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return I()}finally{h=L}},e.unstable_scheduleCallback=function(N,I,L){var $=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?$+L:$):L=$,N){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=L+X,N={id:g++,callback:I,priorityLevel:N,startTime:L,expirationTime:X,sortIndex:-1},L>$?(N.sortIndex=L,t(d,N),n(c)===null&&N===n(d)&&(E?(p(T),T=-1):E=!0,La(v,L-$))):(N.sortIndex=X,t(c,N),w||x||(w=!0,Ia(b))),N},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(N){var I=h;return function(){var L=h;h=I;try{return N.apply(this,arguments)}finally{h=L}}}})(Ps);zs.exports=Ps;var nd=zs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=C,xe=nd;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ts=new Set,Wn={};function Dt(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Wn[e]=t,e=0;e<t.length;e++)Ts.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),li=Object.prototype.hasOwnProperty,ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tl={},nl={};function id(e){return li.call(nl,e)?!0:li.call(tl,e)?!1:ad.test(e)?nl[e]=!0:(tl[e]=!0,!1)}function od(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ld(e,t,n,r){if(t===null||typeof t>"u"||od(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var io=/[\-:]([a-z])/g;function oo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(io,oo);te[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(io,oo);te[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(io,oo);te[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function lo(e,t,n,r){var a=te.hasOwnProperty(t)?te[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ld(t,n,a,r)&&(n=null),r||a===null?id(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),so=Symbol.for("react.strict_mode"),si=Symbol.for("react.profiler"),Is=Symbol.for("react.provider"),Ls=Symbol.for("react.context"),co=Symbol.for("react.forward_ref"),ci=Symbol.for("react.suspense"),ui=Symbol.for("react.suspense_list"),uo=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),Ms=Symbol.for("react.offscreen"),rl=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=rl&&e[rl]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Aa;function Cn(e){if(Aa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Aa=t&&t[1]||""}return`
`+Aa+e}var Ra=!1;function Oa(e,t){if(!e||Ra)return"";Ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,s=i.length-1;1<=l&&0<=s&&a[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(a[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||a[l]!==i[s]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{Ra=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cn(e):""}function sd(e){switch(e.tag){case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 2:case 15:return e=Oa(e.type,!1),e;case 11:return e=Oa(e.type.render,!1),e;case 1:return e=Oa(e.type,!0),e;default:return""}}function di(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Wt:return"Portal";case si:return"Profiler";case so:return"StrictMode";case ci:return"Suspense";case ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ls:return(e.displayName||"Context")+".Consumer";case Is:return(e._context.displayName||"Context")+".Provider";case co:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uo:return t=e.displayName||null,t!==null?t:di(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return di(e(t))}catch{}}return null}function cd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return di(t);case 8:return t===so?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _s(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ud(e){var t=_s(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pr(e){e._valueTracker||(e._valueTracker=ud(e))}function As(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_s(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pi(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function al(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rs(e,t){t=t.checked,t!=null&&lo(e,"checked",t,!1)}function fi(e,t){Rs(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mi(e,t.type,n):t.hasOwnProperty("defaultValue")&&mi(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function il(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mi(e,t,n){(t!=="number"||Wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ol(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(zn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Os(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ll(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ds(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ds(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fr,js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dd=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){dd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Fs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Ws(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Fs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var pd=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(e,t){if(t){if(pd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function yi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,qt=null,en=null;function sl(e){if(e=or(e)){if(typeof wi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ga(t),wi(e.stateNode,e.type,t))}}function Bs(e){qt?en?en.push(e):en=[e]:qt=e}function Us(){if(qt){var e=qt,t=en;if(en=qt=null,sl(e),t)for(e=0;e<t.length;e++)sl(t[e])}}function Vs(e,t){return e(t)}function Hs(){}var Da=!1;function $s(e,t,n){if(Da)return e(t,n);Da=!0;try{return Vs(e,t,n)}finally{Da=!1,(qt!==null||en!==null)&&(Hs(),Us())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=ga(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Ei=!1;if(Ke)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{Ei=!1}function fd(e,t,n,r,a,i,l,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Mn=!1,Br=null,Ur=!1,bi=null,md={onError:function(e){Mn=!0,Br=e}};function hd(e,t,n,r,a,i,l,s,c){Mn=!1,Br=null,fd.apply(md,arguments)}function gd(e,t,n,r,a,i,l,s,c){if(hd.apply(this,arguments),Mn){if(Mn){var d=Br;Mn=!1,Br=null}else throw Error(y(198));Ur||(Ur=!0,bi=d)}}function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cl(e){if(jt(e)!==e)throw Error(y(188))}function vd(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return cl(a),e;if(i===r)return cl(a),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ys(e){return e=vd(e),e!==null?Gs(e):null}function Gs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gs(e);if(t!==null)return t;e=e.sibling}return null}var Ks=xe.unstable_scheduleCallback,ul=xe.unstable_cancelCallback,yd=xe.unstable_shouldYield,xd=xe.unstable_requestPaint,Q=xe.unstable_now,wd=xe.unstable_getCurrentPriorityLevel,fo=xe.unstable_ImmediatePriority,Xs=xe.unstable_UserBlockingPriority,Vr=xe.unstable_NormalPriority,Ed=xe.unstable_LowPriority,Js=xe.unstable_IdlePriority,pa=null,Ue=null;function bd(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(pa,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:Nd,kd=Math.log,Sd=Math.LN2;function Nd(e){return e>>>=0,e===0?32:31-(kd(e)/Sd|0)|0}var mr=64,hr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~a;s!==0?r=Pn(s):(i&=l,i!==0&&(r=Pn(i)))}else l=n&~a,l!==0?r=Pn(l):i!==0&&(r=Pn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),a=1<<n,r|=e[n],t&=~a;return r}function Cd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Re(i),s=1<<l,c=a[l];c===-1?(!(s&n)||s&r)&&(a[l]=Cd(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zs(){var e=mr;return mr<<=1,!(mr&4194240)&&(mr=64),e}function ja(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function Pd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Re(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function mo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var R=0;function qs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ec,ho,tc,nc,rc,Si=!1,gr=[],ut=null,dt=null,pt=null,Vn=new Map,Hn=new Map,it=[],Td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dl(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function wn(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=or(t),t!==null&&ho(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Id(e,t,n,r,a){switch(t){case"focusin":return ut=wn(ut,e,t,n,r,a),!0;case"dragenter":return dt=wn(dt,e,t,n,r,a),!0;case"mouseover":return pt=wn(pt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Vn.set(i,wn(Vn.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Hn.set(i,wn(Hn.get(i)||null,e,t,n,r,a)),!0}return!1}function ac(e){var t=zt(e.target);if(t!==null){var n=jt(t);if(n!==null){if(t=n.tag,t===13){if(t=Qs(n),t!==null){e.blockedOn=t,rc(e.priority,function(){tc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ni(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xi=r,n.target.dispatchEvent(r),xi=null}else return t=or(n),t!==null&&ho(t),e.blockedOn=n,!1;t.shift()}return!0}function pl(e,t,n){Ir(e)&&n.delete(t)}function Ld(){Si=!1,ut!==null&&Ir(ut)&&(ut=null),dt!==null&&Ir(dt)&&(dt=null),pt!==null&&Ir(pt)&&(pt=null),Vn.forEach(pl),Hn.forEach(pl)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Si||(Si=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,Ld)))}function $n(e){function t(a){return En(a,e)}if(0<gr.length){En(gr[0],e);for(var n=1;n<gr.length;n++){var r=gr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&En(ut,e),dt!==null&&En(dt,e),pt!==null&&En(pt,e),Vn.forEach(t),Hn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)ac(n),n.blockedOn===null&&it.shift()}var tn=qe.ReactCurrentBatchConfig,$r=!0;function Md(e,t,n,r){var a=R,i=tn.transition;tn.transition=null;try{R=1,go(e,t,n,r)}finally{R=a,tn.transition=i}}function _d(e,t,n,r){var a=R,i=tn.transition;tn.transition=null;try{R=4,go(e,t,n,r)}finally{R=a,tn.transition=i}}function go(e,t,n,r){if($r){var a=Ni(e,t,n,r);if(a===null)Ga(e,t,r,Qr,n),dl(e,r);else if(Id(a,e,t,n,r))r.stopPropagation();else if(dl(e,r),t&4&&-1<Td.indexOf(e)){for(;a!==null;){var i=or(a);if(i!==null&&ec(i),i=Ni(e,t,n,r),i===null&&Ga(e,t,r,Qr,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Ga(e,t,r,null,n)}}var Qr=null;function Ni(e,t,n,r){if(Qr=null,e=po(r),e=zt(e),e!==null)if(t=jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qr=e,null}function ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wd()){case fo:return 1;case Xs:return 4;case Vr:case Ed:return 16;case Js:return 536870912;default:return 16}default:return 16}}var lt=null,vo=null,Lr=null;function oc(){if(Lr)return Lr;var e,t=vo,n=t.length,r,a="value"in lt?lt.value:lt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[i-r];r++);return Lr=a.slice(e,1<r?1-r:void 0)}function Mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vr(){return!0}function fl(){return!1}function Ee(e){function t(n,r,a,i,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vr:fl,this.isPropagationStopped=fl,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vr)},persist:function(){},isPersistent:vr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yo=Ee(mn),ir=U({},mn,{view:0,detail:0}),Ad=Ee(ir),Fa,Wa,bn,fa=U({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(Fa=e.screenX-bn.screenX,Wa=e.screenY-bn.screenY):Wa=Fa=0,bn=e),Fa)},movementY:function(e){return"movementY"in e?e.movementY:Wa}}),ml=Ee(fa),Rd=U({},fa,{dataTransfer:0}),Od=Ee(Rd),Dd=U({},ir,{relatedTarget:0}),Ba=Ee(Dd),jd=U({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=Ee(jd),Wd=U({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bd=Ee(Wd),Ud=U({},mn,{data:0}),hl=Ee(Ud),Vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$d[e])?!!t[e]:!1}function xo(){return Qd}var Yd=U({},ir,{key:function(e){if(e.key){var t=Vd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xo,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gd=Ee(Yd),Kd=U({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gl=Ee(Kd),Xd=U({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xo}),Jd=Ee(Xd),Zd=U({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qd=Ee(Zd),ep=U({},fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=Ee(ep),np=[9,13,27,32],wo=Ke&&"CompositionEvent"in window,_n=null;Ke&&"documentMode"in document&&(_n=document.documentMode);var rp=Ke&&"TextEvent"in window&&!_n,lc=Ke&&(!wo||_n&&8<_n&&11>=_n),vl=" ",yl=!1;function sc(e,t){switch(e){case"keyup":return np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function ap(e,t){switch(e){case"compositionend":return cc(t);case"keypress":return t.which!==32?null:(yl=!0,vl);case"textInput":return e=t.data,e===vl&&yl?null:e;default:return null}}function ip(e,t){if(Ut)return e==="compositionend"||!wo&&sc(e,t)?(e=oc(),Lr=vo=lt=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lc&&t.locale!=="ko"?null:t.data;default:return null}}var op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!op[e.type]:t==="textarea"}function uc(e,t,n,r){Bs(r),t=Yr(t,"onChange"),0<t.length&&(n=new yo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Qn=null;function lp(e){Ec(e,0)}function ma(e){var t=$t(e);if(As(t))return e}function sp(e,t){if(e==="change")return t}var dc=!1;if(Ke){var Ua;if(Ke){var Va="oninput"in document;if(!Va){var wl=document.createElement("div");wl.setAttribute("oninput","return;"),Va=typeof wl.oninput=="function"}Ua=Va}else Ua=!1;dc=Ua&&(!document.documentMode||9<document.documentMode)}function El(){An&&(An.detachEvent("onpropertychange",pc),Qn=An=null)}function pc(e){if(e.propertyName==="value"&&ma(Qn)){var t=[];uc(t,Qn,e,po(e)),$s(lp,t)}}function cp(e,t,n){e==="focusin"?(El(),An=t,Qn=n,An.attachEvent("onpropertychange",pc)):e==="focusout"&&El()}function up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ma(Qn)}function dp(e,t){if(e==="click")return ma(t)}function pp(e,t){if(e==="input"||e==="change")return ma(t)}function fp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:fp;function Yn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!li.call(t,a)||!De(e[a],t[a]))return!1}return!0}function bl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kl(e,t){var n=bl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bl(n)}}function fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mc(){for(var e=window,t=Wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function Eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mp(e){var t=mc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fc(n.ownerDocument.documentElement,n)){if(r!==null&&Eo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=kl(n,i);var l=kl(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hp=Ke&&"documentMode"in document&&11>=document.documentMode,Vt=null,Ci=null,Rn=null,zi=!1;function Sl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||Vt==null||Vt!==Wr(r)||(r=Vt,"selectionStart"in r&&Eo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Yn(Rn,r)||(Rn=r,r=Yr(Ci,"onSelect"),0<r.length&&(t=new yo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ht={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},Ha={},hc={};Ke&&(hc=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function ha(e){if(Ha[e])return Ha[e];if(!Ht[e])return e;var t=Ht[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hc)return Ha[e]=t[n];return e}var gc=ha("animationend"),vc=ha("animationiteration"),yc=ha("animationstart"),xc=ha("transitionend"),wc=new Map,Nl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){wc.set(e,t),Dt(t,[e])}for(var $a=0;$a<Nl.length;$a++){var Qa=Nl[$a],gp=Qa.toLowerCase(),vp=Qa[0].toUpperCase()+Qa.slice(1);wt(gp,"on"+vp)}wt(gc,"onAnimationEnd");wt(vc,"onAnimationIteration");wt(yc,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(xc,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function Cl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gd(r,t,void 0,e),e.currentTarget=null}function Ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==i&&a.isPropagationStopped())break e;Cl(a,s,d),i=c}else for(l=0;l<r.length;l++){if(s=r[l],c=s.instance,d=s.currentTarget,s=s.listener,c!==i&&a.isPropagationStopped())break e;Cl(a,s,d),i=c}}}if(Ur)throw e=bi,Ur=!1,bi=null,e}function D(e,t){var n=t[Mi];n===void 0&&(n=t[Mi]=new Set);var r=e+"__bubble";n.has(r)||(bc(t,e,2,!1),n.add(r))}function Ya(e,t,n){var r=0;t&&(r|=4),bc(n,e,r,t)}var xr="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[xr]){e[xr]=!0,Ts.forEach(function(n){n!=="selectionchange"&&(yp.has(n)||Ya(n,!1,e),Ya(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xr]||(t[xr]=!0,Ya("selectionchange",!1,t))}}function bc(e,t,n,r){switch(ic(t)){case 1:var a=Md;break;case 4:a=_d;break;default:a=go}n=a.bind(null,t,n,e),a=void 0,!Ei||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ga(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;s!==null;){if(l=zt(s),l===null)return;if(c=l.tag,c===5||c===6){r=i=l;continue e}s=s.parentNode}}r=r.return}$s(function(){var d=i,g=po(n),m=[];e:{var h=wc.get(e);if(h!==void 0){var x=yo,w=e;switch(e){case"keypress":if(Mr(n)===0)break e;case"keydown":case"keyup":x=Gd;break;case"focusin":w="focus",x=Ba;break;case"focusout":w="blur",x=Ba;break;case"beforeblur":case"afterblur":x=Ba;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ml;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Jd;break;case gc:case vc:case yc:x=Fd;break;case xc:x=qd;break;case"scroll":x=Ad;break;case"wheel":x=tp;break;case"copy":case"cut":case"paste":x=Bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=gl}var E=(t&4)!==0,S=!E&&e==="scroll",p=E?h!==null?h+"Capture":null:h;E=[];for(var u=d,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=Un(u,p),v!=null&&E.push(Kn(u,v,f)))),S)break;u=u.return}0<E.length&&(h=new x(h,w,null,n,g),m.push({event:h,listeners:E}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==xi&&(w=n.relatedTarget||n.fromElement)&&(zt(w)||w[Xe]))break e;if((x||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=d,w=w?zt(w):null,w!==null&&(S=jt(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=d),x!==w)){if(E=ml,v="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(E=gl,v="onPointerLeave",p="onPointerEnter",u="pointer"),S=x==null?h:$t(x),f=w==null?h:$t(w),h=new E(v,u+"leave",x,n,g),h.target=S,h.relatedTarget=f,v=null,zt(g)===d&&(E=new E(p,u+"enter",w,n,g),E.target=f,E.relatedTarget=S,v=E),S=v,x&&w)t:{for(E=x,p=w,u=0,f=E;f;f=Ft(f))u++;for(f=0,v=p;v;v=Ft(v))f++;for(;0<u-f;)E=Ft(E),u--;for(;0<f-u;)p=Ft(p),f--;for(;u--;){if(E===p||p!==null&&E===p.alternate)break t;E=Ft(E),p=Ft(p)}E=null}else E=null;x!==null&&zl(m,h,x,E,!1),w!==null&&S!==null&&zl(m,S,w,E,!0)}}e:{if(h=d?$t(d):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var b=sp;else if(xl(h))if(dc)b=pp;else{b=up;var z=cp}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=dp);if(b&&(b=b(e,d))){uc(m,b,n,g);break e}z&&z(e,h,d),e==="focusout"&&(z=h._wrapperState)&&z.controlled&&h.type==="number"&&mi(h,"number",h.value)}switch(z=d?$t(d):window,e){case"focusin":(xl(z)||z.contentEditable==="true")&&(Vt=z,Ci=d,Rn=null);break;case"focusout":Rn=Ci=Vt=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Sl(m,n,g);break;case"selectionchange":if(hp)break;case"keydown":case"keyup":Sl(m,n,g)}var P;if(wo)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ut?sc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(lc&&n.locale!=="ko"&&(Ut||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ut&&(P=oc()):(lt=g,vo="value"in lt?lt.value:lt.textContent,Ut=!0)),z=Yr(d,T),0<z.length&&(T=new hl(T,e,null,n,g),m.push({event:T,listeners:z}),P?T.data=P:(P=cc(n),P!==null&&(T.data=P)))),(P=rp?ap(e,n):ip(e,n))&&(d=Yr(d,"onBeforeInput"),0<d.length&&(g=new hl("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:d}),g.data=P))}Ec(m,t)})}function Kn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Un(e,n),i!=null&&r.unshift(Kn(e,i,a)),i=Un(e,t),i!=null&&r.push(Kn(e,i,a))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zl(e,t,n,r,a){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&d!==null&&(s=d,a?(c=Un(n,i),c!=null&&l.unshift(Kn(n,c,s))):a||(c=Un(n,i),c!=null&&l.push(Kn(n,c,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var xp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function Pl(e){return(typeof e=="string"?e:""+e).replace(xp,`
`).replace(wp,"")}function wr(e,t,n){if(t=Pl(t),Pl(e)!==t&&n)throw Error(y(425))}function Gr(){}var Pi=null,Ti=null;function Ii(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Li=typeof setTimeout=="function"?setTimeout:void 0,Ep=typeof clearTimeout=="function"?clearTimeout:void 0,Tl=typeof Promise=="function"?Promise:void 0,bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Tl<"u"?function(e){return Tl.resolve(null).then(e).catch(kp)}:Li;function kp(e){setTimeout(function(){throw e})}function Ka(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);$n(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Il(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Be="__reactFiber$"+hn,Xn="__reactProps$"+hn,Xe="__reactContainer$"+hn,Mi="__reactEvents$"+hn,Sp="__reactListeners$"+hn,Np="__reactHandles$"+hn;function zt(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Il(e);e!==null;){if(n=e[Be])return n;e=Il(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[Be]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ga(e){return e[Xn]||null}var _i=[],Qt=-1;function Et(e){return{current:e}}function j(e){0>Qt||(e.current=_i[Qt],_i[Qt]=null,Qt--)}function O(e,t){Qt++,_i[Qt]=e.current,e.current=t}var xt={},ie=Et(xt),pe=Et(!1),Mt=xt;function ln(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function fe(e){return e=e.childContextTypes,e!=null}function Kr(){j(pe),j(ie)}function Ll(e,t,n){if(ie.current!==xt)throw Error(y(168));O(ie,t),O(pe,n)}function kc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(y(108,cd(e)||"Unknown",a));return U({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Mt=ie.current,O(ie,e),O(pe,pe.current),!0}function Ml(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=kc(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,j(pe),j(ie),O(ie,e)):j(pe),O(pe,n)}var $e=null,va=!1,Xa=!1;function Sc(e){$e===null?$e=[e]:$e.push(e)}function Cp(e){va=!0,Sc(e)}function bt(){if(!Xa&&$e!==null){Xa=!0;var e=0,t=R;try{var n=$e;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,va=!1}catch(a){throw $e!==null&&($e=$e.slice(e+1)),Ks(fo,bt),a}finally{R=t,Xa=!1}}return null}var Yt=[],Gt=0,Jr=null,Zr=0,ke=[],Se=0,_t=null,Qe=1,Ye="";function Nt(e,t){Yt[Gt++]=Zr,Yt[Gt++]=Jr,Jr=e,Zr=t}function Nc(e,t,n){ke[Se++]=Qe,ke[Se++]=Ye,ke[Se++]=_t,_t=e;var r=Qe;e=Ye;var a=32-Re(r)-1;r&=~(1<<a),n+=1;var i=32-Re(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Qe=1<<32-Re(t)+a|n<<a|r,Ye=i+e}else Qe=1<<i|n<<a|r,Ye=e}function bo(e){e.return!==null&&(Nt(e,1),Nc(e,1,0))}function ko(e){for(;e===Jr;)Jr=Yt[--Gt],Yt[Gt]=null,Zr=Yt[--Gt],Yt[Gt]=null;for(;e===_t;)_t=ke[--Se],ke[Se]=null,Ye=ke[--Se],ke[Se]=null,Qe=ke[--Se],ke[Se]=null}var ye=null,ve=null,F=!1,Ae=null;function Cc(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _l(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:Qe,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function Ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ri(e){if(F){var t=ve;if(t){var n=t;if(!_l(e,t)){if(Ai(e))throw Error(y(418));t=ft(n.nextSibling);var r=ye;t&&_l(e,t)?Cc(r,n):(e.flags=e.flags&-4097|2,F=!1,ye=e)}}else{if(Ai(e))throw Error(y(418));e.flags=e.flags&-4097|2,F=!1,ye=e}}}function Al(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function Er(e){if(e!==ye)return!1;if(!F)return Al(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ii(e.type,e.memoizedProps)),t&&(t=ve)){if(Ai(e))throw zc(),Error(y(418));for(;t;)Cc(e,t),t=ft(t.nextSibling)}if(Al(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?ft(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=ve;e;)e=ft(e.nextSibling)}function sn(){ve=ye=null,F=!1}function So(e){Ae===null?Ae=[e]:Ae.push(e)}var zp=qe.ReactCurrentBatchConfig;function kn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=a.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rl(e){var t=e._init;return t(e._payload)}function Pc(e){function t(p,u){if(e){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function a(p,u){return p=vt(p,u),p.index=0,p.sibling=null,p}function i(p,u,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=2,u):f):(p.flags|=2,u)):(p.flags|=1048576,u)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,u,f,v){return u===null||u.tag!==6?(u=ri(f,p.mode,v),u.return=p,u):(u=a(u,f),u.return=p,u)}function c(p,u,f,v){var b=f.type;return b===Bt?g(p,u,f.props.children,v,f.key):u!==null&&(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===rt&&Rl(b)===u.type)?(v=a(u,f.props),v.ref=kn(p,u,f),v.return=p,v):(v=Fr(f.type,f.key,f.props,null,p.mode,v),v.ref=kn(p,u,f),v.return=p,v)}function d(p,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=ai(f,p.mode,v),u.return=p,u):(u=a(u,f.children||[]),u.return=p,u)}function g(p,u,f,v,b){return u===null||u.tag!==7?(u=Lt(f,p.mode,v,b),u.return=p,u):(u=a(u,f),u.return=p,u)}function m(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ri(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case dr:return f=Fr(u.type,u.key,u.props,null,p.mode,f),f.ref=kn(p,null,u),f.return=p,f;case Wt:return u=ai(u,p.mode,f),u.return=p,u;case rt:var v=u._init;return m(p,v(u._payload),f)}if(zn(u)||yn(u))return u=Lt(u,p.mode,f,null),u.return=p,u;br(p,u)}return null}function h(p,u,f,v){var b=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return b!==null?null:s(p,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case dr:return f.key===b?c(p,u,f,v):null;case Wt:return f.key===b?d(p,u,f,v):null;case rt:return b=f._init,h(p,u,b(f._payload),v)}if(zn(f)||yn(f))return b!==null?null:g(p,u,f,v,null);br(p,f)}return null}function x(p,u,f,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,s(u,p,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case dr:return p=p.get(v.key===null?f:v.key)||null,c(u,p,v,b);case Wt:return p=p.get(v.key===null?f:v.key)||null,d(u,p,v,b);case rt:var z=v._init;return x(p,u,f,z(v._payload),b)}if(zn(v)||yn(v))return p=p.get(f)||null,g(u,p,v,b,null);br(u,v)}return null}function w(p,u,f,v){for(var b=null,z=null,P=u,T=u=0,H=null;P!==null&&T<f.length;T++){P.index>T?(H=P,P=null):H=P.sibling;var _=h(p,P,f[T],v);if(_===null){P===null&&(P=H);break}e&&P&&_.alternate===null&&t(p,P),u=i(_,u,T),z===null?b=_:z.sibling=_,z=_,P=H}if(T===f.length)return n(p,P),F&&Nt(p,T),b;if(P===null){for(;T<f.length;T++)P=m(p,f[T],v),P!==null&&(u=i(P,u,T),z===null?b=P:z.sibling=P,z=P);return F&&Nt(p,T),b}for(P=r(p,P);T<f.length;T++)H=x(P,p,T,f[T],v),H!==null&&(e&&H.alternate!==null&&P.delete(H.key===null?T:H.key),u=i(H,u,T),z===null?b=H:z.sibling=H,z=H);return e&&P.forEach(function(Te){return t(p,Te)}),F&&Nt(p,T),b}function E(p,u,f,v){var b=yn(f);if(typeof b!="function")throw Error(y(150));if(f=b.call(f),f==null)throw Error(y(151));for(var z=b=null,P=u,T=u=0,H=null,_=f.next();P!==null&&!_.done;T++,_=f.next()){P.index>T?(H=P,P=null):H=P.sibling;var Te=h(p,P,_.value,v);if(Te===null){P===null&&(P=H);break}e&&P&&Te.alternate===null&&t(p,P),u=i(Te,u,T),z===null?b=Te:z.sibling=Te,z=Te,P=H}if(_.done)return n(p,P),F&&Nt(p,T),b;if(P===null){for(;!_.done;T++,_=f.next())_=m(p,_.value,v),_!==null&&(u=i(_,u,T),z===null?b=_:z.sibling=_,z=_);return F&&Nt(p,T),b}for(P=r(p,P);!_.done;T++,_=f.next())_=x(P,p,T,_.value,v),_!==null&&(e&&_.alternate!==null&&P.delete(_.key===null?T:_.key),u=i(_,u,T),z===null?b=_:z.sibling=_,z=_);return e&&P.forEach(function(gn){return t(p,gn)}),F&&Nt(p,T),b}function S(p,u,f,v){if(typeof f=="object"&&f!==null&&f.type===Bt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case dr:e:{for(var b=f.key,z=u;z!==null;){if(z.key===b){if(b=f.type,b===Bt){if(z.tag===7){n(p,z.sibling),u=a(z,f.props.children),u.return=p,p=u;break e}}else if(z.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===rt&&Rl(b)===z.type){n(p,z.sibling),u=a(z,f.props),u.ref=kn(p,z,f),u.return=p,p=u;break e}n(p,z);break}else t(p,z);z=z.sibling}f.type===Bt?(u=Lt(f.props.children,p.mode,v,f.key),u.return=p,p=u):(v=Fr(f.type,f.key,f.props,null,p.mode,v),v.ref=kn(p,u,f),v.return=p,p=v)}return l(p);case Wt:e:{for(z=f.key;u!==null;){if(u.key===z)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(p,u.sibling),u=a(u,f.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=ai(f,p.mode,v),u.return=p,p=u}return l(p);case rt:return z=f._init,S(p,u,z(f._payload),v)}if(zn(f))return w(p,u,f,v);if(yn(f))return E(p,u,f,v);br(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(p,u.sibling),u=a(u,f),u.return=p,p=u):(n(p,u),u=ri(f,p.mode,v),u.return=p,p=u),l(p)):n(p,u)}return S}var cn=Pc(!0),Tc=Pc(!1),qr=Et(null),ea=null,Kt=null,No=null;function Co(){No=Kt=ea=null}function zo(e){var t=qr.current;j(qr),e._currentValue=t}function Oi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){ea=e,No=Kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(No!==e)if(e={context:e,memoizedValue:t,next:null},Kt===null){if(ea===null)throw Error(y(308));Kt=e,ea.dependencies={lanes:0,firstContext:e}}else Kt=Kt.next=e;return t}var Pt=null;function Po(e){Pt===null?Pt=[e]:Pt.push(e)}function Ic(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Po(t)):(n.next=a.next,a.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function To(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Je(e,n)}return a=r.interleaved,a===null?(t.next=t,Po(r)):(t.next=a.next,a.next=t),r.interleaved=t,Je(e,n)}function _r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mo(e,n)}}function Ol(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ta(e,t,n,r){var a=e.updateQueue;at=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,d=c.next;c.next=null,l===null?i=d:l.next=d,l=c;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==l&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=c))}if(i!==null){var m=a.baseState;l=0,g=d=c=null,s=i;do{var h=s.lane,x=s.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,E=s;switch(h=t,x=n,E.tag){case 1:if(w=E.payload,typeof w=="function"){m=w.call(x,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=E.payload,h=typeof w=="function"?w.call(x,m,h):w,h==null)break e;m=U({},m,h);break e;case 2:at=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[s]:h.push(s))}else x={eventTime:x,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=x,c=m):g=g.next=x,l|=h;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;h=s,s=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(g===null&&(c=m),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=g,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Rt|=l,e.lanes=l,e.memoizedState=m}}function Dl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(y(191,a));a.call(r)}}}var lr={},Ve=Et(lr),Jn=Et(lr),Zn=Et(lr);function Tt(e){if(e===lr)throw Error(y(174));return e}function Io(e,t){switch(O(Zn,t),O(Jn,e),O(Ve,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gi(t,e)}j(Ve),O(Ve,t)}function un(){j(Ve),j(Jn),j(Zn)}function Mc(e){Tt(Zn.current);var t=Tt(Ve.current),n=gi(t,e.type);t!==n&&(O(Jn,e),O(Ve,n))}function Lo(e){Jn.current===e&&(j(Ve),j(Jn))}var W=Et(0);function na(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ja=[];function Mo(){for(var e=0;e<Ja.length;e++)Ja[e]._workInProgressVersionPrimary=null;Ja.length=0}var Ar=qe.ReactCurrentDispatcher,Za=qe.ReactCurrentBatchConfig,At=0,B=null,G=null,J=null,ra=!1,On=!1,qn=0,Pp=0;function ne(){throw Error(y(321))}function _o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Ao(e,t,n,r,a,i){if(At=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ar.current=e===null||e.memoizedState===null?Mp:_p,e=n(r,a),On){i=0;do{if(On=!1,qn=0,25<=i)throw Error(y(301));i+=1,J=G=null,t.updateQueue=null,Ar.current=Ap,e=n(r,a)}while(On)}if(Ar.current=aa,t=G!==null&&G.next!==null,At=0,J=G=B=null,ra=!1,t)throw Error(y(300));return e}function Ro(){var e=qn!==0;return qn=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?B.memoizedState=J=e:J=J.next=e,J}function Pe(){if(G===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?B.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(y(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?B.memoizedState=J=e:J=J.next=e}return J}function er(e,t){return typeof t=="function"?t(e):t}function qa(e){var t=Pe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=G,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=l=null,c=null,d=i;do{var g=d.lane;if((At&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var m={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=m,l=r):c=c.next=m,B.lanes|=g,Rt|=g}d=d.next}while(d!==null&&d!==i);c===null?l=r:c.next=s,De(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,B.lanes|=i,Rt|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ei(e){var t=Pe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);De(i,t.memoizedState)||(de=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _c(){}function Ac(e,t){var n=B,r=Pe(),a=t(),i=!De(r.memoizedState,a);if(i&&(r.memoizedState=a,de=!0),r=r.queue,Oo(Dc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,tr(9,Oc.bind(null,n,r,a,t),void 0,null),Z===null)throw Error(y(349));At&30||Rc(n,t,a)}return a}function Rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Oc(e,t,n,r){t.value=n,t.getSnapshot=r,jc(t)&&Fc(e)}function Dc(e,t,n){return n(function(){jc(t)&&Fc(e)})}function jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Fc(e){var t=Je(e,1);t!==null&&Oe(t,e,1,-1)}function jl(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},t.queue=e,e=e.dispatch=Lp.bind(null,B,e),[t.memoizedState,e]}function tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wc(){return Pe().memoizedState}function Rr(e,t,n,r){var a=We();B.flags|=e,a.memoizedState=tr(1|t,n,void 0,r===void 0?null:r)}function ya(e,t,n,r){var a=Pe();r=r===void 0?null:r;var i=void 0;if(G!==null){var l=G.memoizedState;if(i=l.destroy,r!==null&&_o(r,l.deps)){a.memoizedState=tr(t,n,i,r);return}}B.flags|=e,a.memoizedState=tr(1|t,n,i,r)}function Fl(e,t){return Rr(8390656,8,e,t)}function Oo(e,t){return ya(2048,8,e,t)}function Bc(e,t){return ya(4,2,e,t)}function Uc(e,t){return ya(4,4,e,t)}function Vc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hc(e,t,n){return n=n!=null?n.concat([e]):null,ya(4,4,Vc.bind(null,t,e),n)}function Do(){}function $c(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qc(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_o(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yc(e,t,n){return At&21?(De(n,t)||(n=Zs(),B.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function Tp(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Za.transition;Za.transition={};try{e(!1),t()}finally{R=n,Za.transition=r}}function Gc(){return Pe().memoizedState}function Ip(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kc(e))Xc(t,n);else if(n=Ic(e,t,n,r),n!==null){var a=le();Oe(n,e,r,a),Jc(n,t,r)}}function Lp(e,t,n){var r=gt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kc(e))Xc(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(a.hasEagerState=!0,a.eagerState=s,De(s,l)){var c=t.interleaved;c===null?(a.next=a,Po(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=Ic(e,t,a,r),n!==null&&(a=le(),Oe(n,e,r,a),Jc(n,t,r))}}function Kc(e){var t=e.alternate;return e===B||t!==null&&t===B}function Xc(e,t){On=ra=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mo(e,n)}}var aa={readContext:ze,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},Mp={readContext:ze,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Fl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rr(4194308,4,Vc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ip.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:jl,useDebugValue:Do,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=jl(!1),t=e[0];return e=Tp.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,a=We();if(F){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),Z===null)throw Error(y(349));At&30||Rc(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Fl(Dc.bind(null,r,i,e),[e]),r.flags|=2048,tr(9,Oc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=We(),t=Z.identifierPrefix;if(F){var n=Ye,r=Qe;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_p={readContext:ze,useCallback:$c,useContext:ze,useEffect:Oo,useImperativeHandle:Hc,useInsertionEffect:Bc,useLayoutEffect:Uc,useMemo:Qc,useReducer:qa,useRef:Wc,useState:function(){return qa(er)},useDebugValue:Do,useDeferredValue:function(e){var t=Pe();return Yc(t,G.memoizedState,e)},useTransition:function(){var e=qa(er)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:_c,useSyncExternalStore:Ac,useId:Gc,unstable_isNewReconciler:!1},Ap={readContext:ze,useCallback:$c,useContext:ze,useEffect:Oo,useImperativeHandle:Hc,useInsertionEffect:Bc,useLayoutEffect:Uc,useMemo:Qc,useReducer:ei,useRef:Wc,useState:function(){return ei(er)},useDebugValue:Do,useDeferredValue:function(e){var t=Pe();return G===null?t.memoizedState=e:Yc(t,G.memoizedState,e)},useTransition:function(){var e=ei(er)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:_c,useSyncExternalStore:Ac,useId:Gc,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Di(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xa={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=le(),a=gt(e),i=Ge(r,a);i.payload=t,n!=null&&(i.callback=n),t=mt(e,i,a),t!==null&&(Oe(t,e,a,r),_r(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=le(),a=gt(e),i=Ge(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=mt(e,i,a),t!==null&&(Oe(t,e,a,r),_r(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=le(),r=gt(e),a=Ge(n,r);a.tag=2,t!=null&&(a.callback=t),t=mt(e,a,r),t!==null&&(Oe(t,e,r,n),_r(t,e,r))}};function Wl(e,t,n,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(a,i):!0}function Zc(e,t,n){var r=!1,a=xt,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(a=fe(t)?Mt:ie.current,r=t.contextTypes,i=(r=r!=null)?ln(e,a):xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Bl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xa.enqueueReplaceState(t,t.state,null)}function ji(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},To(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=ze(i):(i=fe(t)?Mt:ie.current,a.context=ln(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Di(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&xa.enqueueReplaceState(a,a.state,null),ta(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=sd(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function ti(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rp=typeof WeakMap=="function"?WeakMap:Map;function qc(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oa||(oa=!0,Ki=r),Fi(e,t)},n}function eu(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Fi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Fi(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ul(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Kp.bind(null,e,t,n),t.then(e,e))}function Vl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hl(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e)}var Op=qe.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?Tc(t,null,n,r):cn(t,e.child,n,r)}function $l(e,t,n,r,a){n=n.render;var i=t.ref;return nn(t,a),r=Ao(e,t,n,r,i,a),n=Ro(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ze(e,t,a)):(F&&n&&bo(t),t.flags|=1,oe(e,t,r,a),t.child)}function Ql(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!$o(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,tu(e,t,i,r,a)):(e=Fr(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(l,r)&&e.ref===t.ref)return Ze(e,t,a)}return t.flags|=1,e=vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function tu(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Yn(i,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ze(e,t,a)}return Wi(e,t,n,r,a)}function nu(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Jt,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Jt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(Jt,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(Jt,ge),ge|=r;return oe(e,t,a,n),t.child}function ru(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wi(e,t,n,r,a){var i=fe(n)?Mt:ie.current;return i=ln(t,i),nn(t,a),n=Ao(e,t,n,r,i,a),r=Ro(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ze(e,t,a)):(F&&r&&bo(t),t.flags|=1,oe(e,t,n,a),t.child)}function Yl(e,t,n,r,a){if(fe(n)){var i=!0;Xr(t)}else i=!1;if(nn(t,a),t.stateNode===null)Or(e,t),Zc(t,n,r),ji(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=fe(n)?Mt:ie.current,d=ln(t,d));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||c!==d)&&Bl(t,l,r,d),at=!1;var h=t.memoizedState;l.state=h,ta(t,r,l,a),c=t.memoizedState,s!==r||h!==c||pe.current||at?(typeof g=="function"&&(Di(t,n,g,r),c=t.memoizedState),(s=at||Wl(t,n,s,r,h,c,d))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Lc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Me(t.type,s),l.props=d,m=t.pendingProps,h=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=ze(c):(c=fe(n)?Mt:ie.current,c=ln(t,c));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||h!==c)&&Bl(t,l,r,c),at=!1,h=t.memoizedState,l.state=h,ta(t,r,l,a);var w=t.memoizedState;s!==m||h!==w||pe.current||at?(typeof x=="function"&&(Di(t,n,x,r),w=t.memoizedState),(d=at||Wl(t,n,d,r,h,w,c)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Bi(e,t,n,r,i,a)}function Bi(e,t,n,r,a,i){ru(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&Ml(t,n,!1),Ze(e,t,i);r=t.stateNode,Op.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=cn(t,e.child,null,i),t.child=cn(t,null,s,i)):oe(e,t,s,i),t.memoizedState=r.state,a&&Ml(t,n,!0),t.child}function au(e){var t=e.stateNode;t.pendingContext?Ll(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ll(e,t.context,!1),Io(e,t.containerInfo)}function Gl(e,t,n,r,a){return sn(),So(a),t.flags|=256,oe(e,t,n,r),t.child}var Ui={dehydrated:null,treeContext:null,retryLane:0};function Vi(e){return{baseLanes:e,cachePool:null,transitions:null}}function iu(e,t,n){var r=t.pendingProps,a=W.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),O(W,a&1),e===null)return Ri(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ba(l,r,0,null),e=Lt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Vi(n),t.memoizedState=Ui,e):jo(t,l));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return Dp(e,t,l,r,s,a,n);if(i){i=r.fallback,l=t.mode,a=e.child,s=a.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=vt(a,c),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=vt(s,i):(i=Lt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Vi(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ui,r}return i=e.child,e=i.sibling,r=vt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jo(e,t){return t=ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kr(e,t,n,r){return r!==null&&So(r),cn(t,e.child,null,n),e=jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dp(e,t,n,r,a,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ti(Error(y(422))),kr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=ba({mode:"visible",children:r.children},a,0,null),i=Lt(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cn(t,e.child,null,l),t.child.memoizedState=Vi(l),t.memoizedState=Ui,i);if(!(t.mode&1))return kr(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(y(419)),r=ti(i,r,void 0),kr(e,t,l,r)}if(s=(l&e.childLanes)!==0,de||s){if(r=Z,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Je(e,a),Oe(r,e,a,-1))}return Ho(),r=ti(Error(y(421))),kr(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Xp.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ve=ft(a.nextSibling),ye=t,F=!0,Ae=null,e!==null&&(ke[Se++]=Qe,ke[Se++]=Ye,ke[Se++]=_t,Qe=e.id,Ye=e.overflow,_t=t),t=jo(t,r.children),t.flags|=4096,t)}function Kl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oi(e.return,t,n)}function ni(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function ou(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kl(e,n,t);else if(e.tag===19)Kl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(W,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&na(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ni(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&na(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ni(t,!0,n,null,i);break;case"together":ni(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Or(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jp(e,t,n){switch(t.tag){case 3:au(t),sn();break;case 5:Mc(t);break;case 1:fe(t.type)&&Xr(t);break;case 4:Io(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;O(qr,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?iu(e,t,n):(O(W,W.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);O(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ou(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),O(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,nu(e,t,n)}return Ze(e,t,n)}var lu,Hi,su,cu;lu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hi=function(){};su=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Tt(Ve.current);var i=null;switch(n){case"input":a=pi(e,a),r=pi(e,r),i=[];break;case"select":a=U({},a,{value:void 0}),r=U({},r,{value:void 0}),i=[];break;case"textarea":a=hi(e,a),r=hi(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gr)}vi(n,r);var l;n=null;for(d in a)if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var s=a[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Wn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(s=a!=null?a[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&D("scroll",e),i||s===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};cu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fp(e,t,n){var r=t.pendingProps;switch(ko(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return fe(t.type)&&Kr(),re(t),null;case 3:return r=t.stateNode,un(),j(pe),j(ie),Mo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Zi(Ae),Ae=null))),Hi(e,t),re(t),null;case 5:Lo(t);var a=Tt(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)su(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return re(t),null}if(e=Tt(Ve.current),Er(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Be]=t,r[Xn]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(a=0;a<Tn.length;a++)D(Tn[a],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":al(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":ol(r,i),D("invalid",r)}vi(n,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&wr(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&wr(r.textContent,s,e),a=["children",""+s]):Wn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&D("scroll",r)}switch(n){case"input":pr(r),il(r,i,!0);break;case"textarea":pr(r),ll(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Gr)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ds(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Be]=t,e[Xn]=r,lu(e,t,!1,!1),t.stateNode=e;e:{switch(l=yi(n,r),n){case"dialog":D("cancel",e),D("close",e),a=r;break;case"iframe":case"object":case"embed":D("load",e),a=r;break;case"video":case"audio":for(a=0;a<Tn.length;a++)D(Tn[a],e);a=r;break;case"source":D("error",e),a=r;break;case"img":case"image":case"link":D("error",e),D("load",e),a=r;break;case"details":D("toggle",e),a=r;break;case"input":al(e,r),a=pi(e,r),D("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=U({},r,{value:void 0}),D("invalid",e);break;case"textarea":ol(e,r),a=hi(e,r),D("invalid",e);break;default:a=r}vi(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?Ws(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&js(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Bn(e,c):typeof c=="number"&&Bn(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wn.hasOwnProperty(i)?c!=null&&i==="onScroll"&&D("scroll",e):c!=null&&lo(e,i,c,l))}switch(n){case"input":pr(e),il(e,r,!1);break;case"textarea":pr(e),ll(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Gr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)cu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Tt(Zn.current),Tt(Ve.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return re(t),null;case 13:if(j(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ve!==null&&t.mode&1&&!(t.flags&128))zc(),sn(),t.flags|=98560,i=!1;else if(i=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Be]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),i=!1}else Ae!==null&&(Zi(Ae),Ae=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?K===0&&(K=3):Ho())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return un(),Hi(e,t),e===null&&Gn(t.stateNode.containerInfo),re(t),null;case 10:return zo(t.type._context),re(t),null;case 17:return fe(t.type)&&Kr(),re(t),null;case 19:if(j(W),i=t.memoizedState,i===null)return re(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Sn(i,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=na(e),l!==null){for(t.flags|=128,Sn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(W,W.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>pn&&(t.flags|=128,r=!0,Sn(i,!1),t.lanes=4194304)}else{if(!r)if(e=na(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!F)return re(t),null}else 2*Q()-i.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,Sn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=W.current,O(W,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Vo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Wp(e,t){switch(ko(t),t.tag){case 1:return fe(t.type)&&Kr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),j(pe),j(ie),Mo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lo(t),null;case 13:if(j(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(W),null;case 4:return un(),null;case 10:return zo(t.type._context),null;case 22:case 23:return Vo(),null;case 24:return null;default:return null}}var Sr=!1,ae=!1,Bp=typeof WeakSet=="function"?WeakSet:Set,k=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function $i(e,t,n){try{n()}catch(r){V(e,t,r)}}var Xl=!1;function Up(e,t){if(Pi=$r,e=mc(),Eo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,c=-1,d=0,g=0,m=e,h=null;t:for(;;){for(var x;m!==n||a!==0&&m.nodeType!==3||(s=l+a),m!==i||r!==0&&m.nodeType!==3||(c=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)h=m,m=x;for(;;){if(m===e)break t;if(h===n&&++d===a&&(s=l),h===i&&++g===r&&(c=l),(x=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=x}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ti={focusedElem:e,selectionRange:n},$r=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var E=w.memoizedProps,S=w.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?E:Me(t.type,E),S);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return w=Xl,Xl=!1,w}function Dn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&$i(t,n,i)}a=a.next}while(a!==r)}}function wa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uu(e){var t=e.alternate;t!==null&&(e.alternate=null,uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Xn],delete t[Mi],delete t[Sp],delete t[Np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function du(e){return e.tag===5||e.tag===3||e.tag===4}function Jl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gr));else if(r!==4&&(e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}var q=null,_e=!1;function et(e,t,n){for(n=n.child;n!==null;)pu(e,t,n),n=n.sibling}function pu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(pa,n)}catch{}switch(n.tag){case 5:ae||Xt(n,t);case 6:var r=q,a=_e;q=null,et(e,t,n),q=r,_e=a,q!==null&&(_e?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(_e?(e=q,n=n.stateNode,e.nodeType===8?Ka(e.parentNode,n):e.nodeType===1&&Ka(e,n),$n(e)):Ka(q,n.stateNode));break;case 4:r=q,a=_e,q=n.stateNode.containerInfo,_e=!0,et(e,t,n),q=r,_e=a;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&$i(n,t,l),a=a.next}while(a!==r)}et(e,t,n);break;case 1:if(!ae&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){V(n,t,s)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,et(e,t,n),ae=r):et(e,t,n);break;default:et(e,t,n)}}function Zl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bp),t.forEach(function(r){var a=Jp.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,_e=!1;break e;case 3:q=s.stateNode.containerInfo,_e=!0;break e;case 4:q=s.stateNode.containerInfo,_e=!0;break e}s=s.return}if(q===null)throw Error(y(160));pu(i,l,a),q=null,_e=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){V(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fu(t,e),t=t.sibling}function fu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),je(e),r&4){try{Dn(3,e,e.return),wa(3,e)}catch(E){V(e,e.return,E)}try{Dn(5,e,e.return)}catch(E){V(e,e.return,E)}}break;case 1:Ie(t,e),je(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(Ie(t,e),je(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var a=e.stateNode;try{Bn(a,"")}catch(E){V(e,e.return,E)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Rs(a,i),yi(s,l);var d=yi(s,i);for(l=0;l<c.length;l+=2){var g=c[l],m=c[l+1];g==="style"?Ws(a,m):g==="dangerouslySetInnerHTML"?js(a,m):g==="children"?Bn(a,m):lo(a,g,m,d)}switch(s){case"input":fi(a,i);break;case"textarea":Os(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Zt(a,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?Zt(a,!!i.multiple,i.defaultValue,!0):Zt(a,!!i.multiple,i.multiple?[]:"",!1))}a[Xn]=i}catch(E){V(e,e.return,E)}}break;case 6:if(Ie(t,e),je(e),r&4){if(e.stateNode===null)throw Error(y(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(E){V(e,e.return,E)}}break;case 3:if(Ie(t,e),je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(E){V(e,e.return,E)}break;case 4:Ie(t,e),je(e);break;case 13:Ie(t,e),je(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Bo=Q())),r&4&&Zl(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(d=ae)||g,Ie(t,e),ae=d):Ie(t,e),je(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(k=e,g=e.child;g!==null;){for(m=k=g;k!==null;){switch(h=k,x=h.child,h.tag){case 0:case 11:case 14:case 15:Dn(4,h,h.return);break;case 1:Xt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(E){V(r,n,E)}}break;case 5:Xt(h,h.return);break;case 22:if(h.memoizedState!==null){es(m);continue}}x!==null?(x.return=h,k=x):es(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{a=m.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,c=m.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Fs("display",l))}catch(E){V(e,e.return,E)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(E){V(e,e.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ie(t,e),je(e),r&4&&Zl(e);break;case 21:break;default:Ie(t,e),je(e)}}function je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(du(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Bn(a,""),r.flags&=-33);var i=Jl(e);Gi(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Jl(e);Yi(e,s,l);break;default:throw Error(y(161))}}catch(c){V(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vp(e,t,n){k=e,mu(e)}function mu(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var a=k,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||Sr;if(!l){var s=a.alternate,c=s!==null&&s.memoizedState!==null||ae;s=Sr;var d=ae;if(Sr=l,(ae=c)&&!d)for(k=a;k!==null;)l=k,c=l.child,l.tag===22&&l.memoizedState!==null?ts(a):c!==null?(c.return=l,k=c):ts(a);for(;i!==null;)k=i,mu(i),i=i.sibling;k=a,Sr=s,ae=d}ql(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,k=i):ql(e)}}function ql(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||wa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Dl(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dl(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&$n(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ae||t.flags&512&&Qi(t)}catch(h){V(t,t.return,h)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function es(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function ts(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wa(4,t)}catch(c){V(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){V(t,a,c)}}var i=t.return;try{Qi(t)}catch(c){V(t,i,c)}break;case 5:var l=t.return;try{Qi(t)}catch(c){V(t,l,c)}}}catch(c){V(t,t.return,c)}if(t===e){k=null;break}var s=t.sibling;if(s!==null){s.return=t.return,k=s;break}k=t.return}}var Hp=Math.ceil,ia=qe.ReactCurrentDispatcher,Fo=qe.ReactCurrentOwner,Ce=qe.ReactCurrentBatchConfig,A=0,Z=null,Y=null,ee=0,ge=0,Jt=Et(0),K=0,nr=null,Rt=0,Ea=0,Wo=0,jn=null,ue=null,Bo=0,pn=1/0,He=null,oa=!1,Ki=null,ht=null,Nr=!1,st=null,la=0,Fn=0,Xi=null,Dr=-1,jr=0;function le(){return A&6?Q():Dr!==-1?Dr:Dr=Q()}function gt(e){return e.mode&1?A&2&&ee!==0?ee&-ee:zp.transition!==null?(jr===0&&(jr=Zs()),jr):(e=R,e!==0||(e=window.event,e=e===void 0?16:ic(e.type)),e):1}function Oe(e,t,n,r){if(50<Fn)throw Fn=0,Xi=null,Error(y(185));ar(e,n,r),(!(A&2)||e!==Z)&&(e===Z&&(!(A&2)&&(Ea|=n),K===4&&ot(e,ee)),me(e,r),n===1&&A===0&&!(t.mode&1)&&(pn=Q()+500,va&&bt()))}function me(e,t){var n=e.callbackNode;zd(e,t);var r=Hr(e,e===Z?ee:0);if(r===0)n!==null&&ul(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ul(n),t===1)e.tag===0?Cp(ns.bind(null,e)):Sc(ns.bind(null,e)),bp(function(){!(A&6)&&bt()}),n=null;else{switch(qs(r)){case 1:n=fo;break;case 4:n=Xs;break;case 16:n=Vr;break;case 536870912:n=Js;break;default:n=Vr}n=bu(n,hu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hu(e,t){if(Dr=-1,jr=0,A&6)throw Error(y(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Hr(e,e===Z?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sa(e,r);else{t=r;var a=A;A|=2;var i=vu();(Z!==e||ee!==t)&&(He=null,pn=Q()+500,It(e,t));do try{Yp();break}catch(s){gu(e,s)}while(!0);Co(),ia.current=i,A=a,Y!==null?t=0:(Z=null,ee=0,t=K)}if(t!==0){if(t===2&&(a=ki(e),a!==0&&(r=a,t=Ji(e,a))),t===1)throw n=nr,It(e,0),ot(e,r),me(e,Q()),n;if(t===6)ot(e,r);else{if(a=e.current.alternate,!(r&30)&&!$p(a)&&(t=sa(e,r),t===2&&(i=ki(e),i!==0&&(r=i,t=Ji(e,i))),t===1))throw n=nr,It(e,0),ot(e,r),me(e,Q()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:Ct(e,ue,He);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=Bo+500-Q(),10<t)){if(Hr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Li(Ct.bind(null,e,ue,He),t);break}Ct(e,ue,He);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-Re(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hp(r/1960))-r,10<r){e.timeoutHandle=Li(Ct.bind(null,e,ue,He),r);break}Ct(e,ue,He);break;case 5:Ct(e,ue,He);break;default:throw Error(y(329))}}}return me(e,Q()),e.callbackNode===n?hu.bind(null,e):null}function Ji(e,t){var n=jn;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=sa(e,t),e!==2&&(t=ue,ue=n,t!==null&&Zi(t)),e}function Zi(e){ue===null?ue=e:ue.push.apply(ue,e)}function $p(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!De(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~Wo,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function ns(e){if(A&6)throw Error(y(327));rn();var t=Hr(e,0);if(!(t&1))return me(e,Q()),null;var n=sa(e,t);if(e.tag!==0&&n===2){var r=ki(e);r!==0&&(t=r,n=Ji(e,r))}if(n===1)throw n=nr,It(e,0),ot(e,t),me(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ct(e,ue,He),me(e,Q()),null}function Uo(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(pn=Q()+500,va&&bt())}}function Ot(e){st!==null&&st.tag===0&&!(A&6)&&rn();var t=A;A|=1;var n=Ce.transition,r=R;try{if(Ce.transition=null,R=1,e)return e()}finally{R=r,Ce.transition=n,A=t,!(A&6)&&bt()}}function Vo(){ge=Jt.current,j(Jt)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ep(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(ko(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kr();break;case 3:un(),j(pe),j(ie),Mo();break;case 5:Lo(r);break;case 4:un();break;case 13:j(W);break;case 19:j(W);break;case 10:zo(r.type._context);break;case 22:case 23:Vo()}n=n.return}if(Z=e,Y=e=vt(e.current,null),ee=ge=t,K=0,nr=null,Wo=Ea=Rt=0,ue=jn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}n.pending=r}Pt=null}return e}function gu(e,t){do{var n=Y;try{if(Co(),Ar.current=aa,ra){for(var r=B.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ra=!1}if(At=0,J=G=B=null,On=!1,qn=0,Fo.current=null,n===null||n.return===null){K=1,nr=t,Y=null;break}e:{var i=e,l=n.return,s=n,c=t;if(t=ee,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Vl(l);if(x!==null){x.flags&=-257,Hl(x,l,s,i,t),x.mode&1&&Ul(i,d,t),t=x,c=d;var w=t.updateQueue;if(w===null){var E=new Set;E.add(c),t.updateQueue=E}else w.add(c);break e}else{if(!(t&1)){Ul(i,d,t),Ho();break e}c=Error(y(426))}}else if(F&&s.mode&1){var S=Vl(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Hl(S,l,s,i,t),So(dn(c,s));break e}}i=c=dn(c,s),K!==4&&(K=2),jn===null?jn=[i]:jn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=qc(i,c,t);Ol(i,p);break e;case 1:s=c;var u=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ht===null||!ht.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=eu(i,s,t);Ol(i,v);break e}}i=i.return}while(i!==null)}xu(n)}catch(b){t=b,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function vu(){var e=ia.current;return ia.current=aa,e===null?aa:e}function Ho(){(K===0||K===3||K===2)&&(K=4),Z===null||!(Rt&268435455)&&!(Ea&268435455)||ot(Z,ee)}function sa(e,t){var n=A;A|=2;var r=vu();(Z!==e||ee!==t)&&(He=null,It(e,t));do try{Qp();break}catch(a){gu(e,a)}while(!0);if(Co(),A=n,ia.current=r,Y!==null)throw Error(y(261));return Z=null,ee=0,K}function Qp(){for(;Y!==null;)yu(Y)}function Yp(){for(;Y!==null&&!yd();)yu(Y)}function yu(e){var t=Eu(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?xu(e):Y=t,Fo.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,Y=null;return}}else if(n=Fp(n,t,ge),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);K===0&&(K=5)}function Ct(e,t,n){var r=R,a=Ce.transition;try{Ce.transition=null,R=1,Gp(e,t,n,r)}finally{Ce.transition=a,R=r}return null}function Gp(e,t,n,r){do rn();while(st!==null);if(A&6)throw Error(y(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Pd(e,i),e===Z&&(Y=Z=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nr||(Nr=!0,bu(Vr,function(){return rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var l=R;R=1;var s=A;A|=4,Fo.current=null,Up(e,n),fu(n,e),mp(Ti),$r=!!Pi,Ti=Pi=null,e.current=n,Vp(n),xd(),A=s,R=l,Ce.transition=i}else e.current=n;if(Nr&&(Nr=!1,st=e,la=a),i=e.pendingLanes,i===0&&(ht=null),bd(n.stateNode),me(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(oa)throw oa=!1,e=Ki,Ki=null,e;return la&1&&e.tag!==0&&rn(),i=e.pendingLanes,i&1?e===Xi?Fn++:(Fn=0,Xi=e):Fn=0,bt(),null}function rn(){if(st!==null){var e=qs(la),t=Ce.transition,n=R;try{if(Ce.transition=null,R=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,la=0,A&6)throw Error(y(331));var a=A;for(A|=4,k=e.current;k!==null;){var i=k,l=i.child;if(k.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(k=d;k!==null;){var g=k;switch(g.tag){case 0:case 11:case 15:Dn(8,g,i)}var m=g.child;if(m!==null)m.return=g,k=m;else for(;k!==null;){g=k;var h=g.sibling,x=g.return;if(uu(g),g===d){k=null;break}if(h!==null){h.return=x,k=h;break}k=x}}}var w=i.alternate;if(w!==null){var E=w.child;if(E!==null){w.child=null;do{var S=E.sibling;E.sibling=null,E=S}while(E!==null)}}k=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,k=l;else e:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Dn(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,k=p;break e}k=i.return}}var u=e.current;for(k=u;k!==null;){l=k;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,k=f;else e:for(l=u;k!==null;){if(s=k,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:wa(9,s)}}catch(b){V(s,s.return,b)}if(s===l){k=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,k=v;break e}k=s.return}}if(A=a,bt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(pa,e)}catch{}r=!0}return r}finally{R=n,Ce.transition=t}}return!1}function rs(e,t,n){t=dn(n,t),t=qc(e,t,1),e=mt(e,t,1),t=le(),e!==null&&(ar(e,1,t),me(e,t))}function V(e,t,n){if(e.tag===3)rs(e,e,n);else for(;t!==null;){if(t.tag===3){rs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=dn(n,e),e=eu(t,e,1),t=mt(t,e,1),e=le(),t!==null&&(ar(t,1,e),me(t,e));break}}t=t.return}}function Kp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(ee&n)===n&&(K===4||K===3&&(ee&130023424)===ee&&500>Q()-Bo?It(e,0):Wo|=n),me(e,t)}function wu(e,t){t===0&&(e.mode&1?(t=hr,hr<<=1,!(hr&130023424)&&(hr=4194304)):t=1);var n=le();e=Je(e,t),e!==null&&(ar(e,t,n),me(e,n))}function Xp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wu(e,n)}function Jp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),wu(e,n)}var Eu;Eu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,jp(e,t,n);de=!!(e.flags&131072)}else de=!1,F&&t.flags&1048576&&Nc(t,Zr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Or(e,t),e=t.pendingProps;var a=ln(t,ie.current);nn(t,n),a=Ao(null,t,r,e,a,n);var i=Ro();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(i=!0,Xr(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,To(t),a.updater=xa,t.stateNode=a,a._reactInternals=t,ji(t,r,e,n),t=Bi(null,t,r,!0,i,n)):(t.tag=0,F&&i&&bo(t),oe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Or(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=qp(r),e=Me(r,e),a){case 0:t=Wi(null,t,r,e,n);break e;case 1:t=Yl(null,t,r,e,n);break e;case 11:t=$l(null,t,r,e,n);break e;case 14:t=Ql(null,t,r,Me(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),Wi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),Yl(e,t,r,a,n);case 3:e:{if(au(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Lc(e,t),ta(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=dn(Error(y(423)),t),t=Gl(e,t,r,n,a);break e}else if(r!==a){a=dn(Error(y(424)),t),t=Gl(e,t,r,n,a);break e}else for(ve=ft(t.stateNode.containerInfo.firstChild),ye=t,F=!0,Ae=null,n=Tc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===a){t=Ze(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return Mc(t),e===null&&Ri(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,Ii(r,a)?l=null:i!==null&&Ii(r,i)&&(t.flags|=32),ru(e,t),oe(e,t,l,n),t.child;case 6:return e===null&&Ri(t),null;case 13:return iu(e,t,n);case 4:return Io(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),$l(e,t,r,a,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,O(qr,r._currentValue),r._currentValue=l,i!==null)if(De(i.value,l)){if(i.children===a.children&&!pe.current){t=Ze(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ge(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Oi(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(y(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Oi(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}oe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,nn(t,n),a=ze(a),r=r(a),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,a=Me(r,t.pendingProps),a=Me(r.type,a),Ql(e,t,r,a,n);case 15:return tu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Me(r,a),Or(e,t),t.tag=1,fe(r)?(e=!0,Xr(t)):e=!1,nn(t,n),Zc(t,r,a),ji(t,r,a,n),Bi(null,t,r,!0,e,n);case 19:return ou(e,t,n);case 22:return nu(e,t,n)}throw Error(y(156,t.tag))};function bu(e,t){return Ks(e,t)}function Zp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Zp(e,t,n,r)}function $o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qp(e){if(typeof e=="function")return $o(e)?1:0;if(e!=null){if(e=e.$$typeof,e===co)return 11;if(e===uo)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fr(e,t,n,r,a,i){var l=2;if(r=e,typeof e=="function")$o(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Bt:return Lt(n.children,a,i,t);case so:l=8,a|=8;break;case si:return e=Ne(12,n,t,a|2),e.elementType=si,e.lanes=i,e;case ci:return e=Ne(13,n,t,a),e.elementType=ci,e.lanes=i,e;case ui:return e=Ne(19,n,t,a),e.elementType=ui,e.lanes=i,e;case Ms:return ba(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Is:l=10;break e;case Ls:l=9;break e;case co:l=11;break e;case uo:l=14;break e;case rt:l=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ne(l,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Lt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function ba(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Ms,e.lanes=n,e.stateNode={isHidden:!1},e}function ri(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function ai(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ef(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ja(0),this.expirationTimes=ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ja(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Qo(e,t,n,r,a,i,l,s,c){return e=new ef(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},To(i),e}function tf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ku(e){if(!e)return xt;e=e._reactInternals;e:{if(jt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(fe(n))return kc(e,n,t)}return t}function Su(e,t,n,r,a,i,l,s,c){return e=Qo(n,r,!0,e,a,i,l,s,c),e.context=ku(null),n=e.current,r=le(),a=gt(n),i=Ge(r,a),i.callback=t??null,mt(n,i,a),e.current.lanes=a,ar(e,a,r),me(e,r),e}function ka(e,t,n,r){var a=t.current,i=le(),l=gt(a);return n=ku(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(a,t,l),e!==null&&(Oe(e,a,l,i),_r(e,a,l)),l}function ca(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yo(e,t){as(e,t),(e=e.alternate)&&as(e,t)}function nf(){return null}var Nu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Go(e){this._internalRoot=e}Sa.prototype.render=Go.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));ka(e,t,null,null)};Sa.prototype.unmount=Go.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){ka(null,e,null,null)}),t[Xe]=null}};function Sa(e){this._internalRoot=e}Sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=nc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&ac(e)}};function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function is(){}function rf(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var d=ca(l);i.call(d)}}var l=Su(t,r,e,0,null,!1,!1,"",is);return e._reactRootContainer=l,e[Xe]=l.current,Gn(e.nodeType===8?e.parentNode:e),Ot(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var d=ca(c);s.call(d)}}var c=Qo(e,0,!1,null,null,!1,!1,"",is);return e._reactRootContainer=c,e[Xe]=c.current,Gn(e.nodeType===8?e.parentNode:e),Ot(function(){ka(t,c,n,r)}),c}function Ca(e,t,n,r,a){var i=n._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var s=a;a=function(){var c=ca(l);s.call(c)}}ka(t,l,e,a)}else l=rf(n,t,e,a,r);return ca(l)}ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(mo(t,n|1),me(t,Q()),!(A&6)&&(pn=Q()+500,bt()))}break;case 13:Ot(function(){var r=Je(e,1);if(r!==null){var a=le();Oe(r,e,1,a)}}),Yo(e,1)}};ho=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=le();Oe(t,e,134217728,n)}Yo(e,134217728)}};tc=function(e){if(e.tag===13){var t=gt(e),n=Je(e,t);if(n!==null){var r=le();Oe(n,e,t,r)}Yo(e,t)}};nc=function(){return R};rc=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};wi=function(e,t,n){switch(t){case"input":if(fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ga(r);if(!a)throw Error(y(90));As(r),fi(r,a)}}}break;case"textarea":Os(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Vs=Uo;Hs=Ot;var af={usingClientEntryPoint:!1,Events:[or,$t,ga,Bs,Us,Uo]},Nn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},of={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ys(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cr.isDisabled&&Cr.supportsFiber)try{pa=Cr.inject(of),Ue=Cr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ko(t))throw Error(y(200));return tf(e,t,null,n)};we.createRoot=function(e,t){if(!Ko(e))throw Error(y(299));var n=!1,r="",a=Nu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Qo(e,1,!1,null,null,n,!1,r,a),e[Xe]=t.current,Gn(e.nodeType===8?e.parentNode:e),new Go(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ys(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Ot(e)};we.hydrate=function(e,t,n){if(!Na(t))throw Error(y(200));return Ca(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Ko(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",l=Nu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Su(t,null,e,1,n??null,a,!1,i,l),e[Xe]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Sa(t)};we.render=function(e,t,n){if(!Na(t))throw Error(y(200));return Ca(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!Na(e))throw Error(y(40));return e._reactRootContainer?(Ot(function(){Ca(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};we.unstable_batchedUpdates=Uo;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Na(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Ca(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function Cu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cu)}catch(e){console.error(e)}}Cu(),Cs.exports=we;var lf=Cs.exports,os=lf;oi.createRoot=os.createRoot,oi.hydrateRoot=os.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ua.apply(this,arguments)}var ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ct||(ct={}));const ls="popstate";function sf(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:l,hash:s}=r.location;return qi("",{pathname:i,search:l,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Pu(a)}return uf(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cf(){return Math.random().toString(36).substr(2,8)}function ss(e,t){return{usr:e.state,key:e.key,idx:t}}function qi(e,t,n,r){return n===void 0&&(n=null),ua({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?za(t):t,{state:n,key:t&&t.key||r||cf()})}function Pu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function za(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function uf(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,s=ct.Pop,c=null,d=g();d==null&&(d=0,l.replaceState(ua({},l.state,{idx:d}),""));function g(){return(l.state||{idx:null}).idx}function m(){s=ct.Pop;let S=g(),p=S==null?null:S-d;d=S,c&&c({action:s,location:E.location,delta:p})}function h(S,p){s=ct.Push;let u=qi(E.location,S,p);d=g()+1;let f=ss(u,d),v=E.createHref(u);try{l.pushState(f,"",v)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;a.location.assign(v)}i&&c&&c({action:s,location:E.location,delta:1})}function x(S,p){s=ct.Replace;let u=qi(E.location,S,p);d=g();let f=ss(u,d),v=E.createHref(u);l.replaceState(f,"",v),i&&c&&c({action:s,location:E.location,delta:0})}function w(S){let p=a.location.origin!=="null"?a.location.origin:a.location.href,u=typeof S=="string"?S:Pu(S);return u=u.replace(/ $/,"%20"),he(p,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,p)}let E={get action(){return s},get location(){return e(a,l)},listen(S){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(ls,m),c=S,()=>{a.removeEventListener(ls,m),c=null}},createHref(S){return t(a,S)},createURL:w,encodeLocation(S){let p=w(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:x,go(S){return l.go(S)}};return E}var cs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cs||(cs={}));function df(e,t,n){return n===void 0&&(n="/"),pf(e,t,n)}function pf(e,t,n,r){let a=typeof t=="string"?za(t):t,i=Lu(a.pathname||"/",n);if(i==null)return null;let l=Tu(e);ff(l);let s=null;for(let c=0;s==null&&c<l.length;++c){let d=Nf(i);s=bf(l[c],d)}return s}function Tu(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,l,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};c.relativePath.startsWith("/")&&(he(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=an([r,c.relativePath]),g=n.concat(c);i.children&&i.children.length>0&&(he(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Tu(i.children,t,g,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:wf(d,i.index),routesMeta:g})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,l);else for(let c of Iu(i.path))a(i,l,c)}),t}function Iu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let l=Iu(r.join("/")),s=[];return s.push(...l.map(c=>c===""?i:[i,c].join("/"))),a&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function ff(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ef(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mf=/^:[\w-]+$/,hf=3,gf=2,vf=1,yf=10,xf=-2,us=e=>e==="*";function wf(e,t){let n=e.split("/"),r=n.length;return n.some(us)&&(r+=xf),t&&(r+=gf),n.filter(a=>!us(a)).reduce((a,i)=>a+(mf.test(i)?hf:i===""?vf:yf),r)}function Ef(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function bf(e,t,n){let{routesMeta:r}=e,a={},i="/",l=[];for(let s=0;s<r.length;++s){let c=r[s],d=s===r.length-1,g=i==="/"?t:t.slice(i.length)||"/",m=kf({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},g),h=c.route;if(!m)return null;Object.assign(a,m.params),l.push({params:a,pathname:an([i,m.pathname]),pathnameBase:Cf(an([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=an([i,m.pathnameBase]))}return l}function kf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Sf(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((d,g,m)=>{let{paramName:h,isOptional:x}=g;if(h==="*"){let E=s[m]||"";l=i.slice(0,i.length-E.length).replace(/(.)\/+$/,"$1")}const w=s[m];return x&&!w?d[h]=void 0:d[h]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:e}}function Sf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Nf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return zu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Lu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const an=e=>e.join("/").replace(/\/\/+/g,"/"),Cf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function zf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Mu=["post","put","patch","delete"];new Set(Mu);const Pf=["get",...Mu];new Set(Pf);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},da.apply(this,arguments)}const Tf=C.createContext(null),If=C.createContext(null),_u=C.createContext(null),Pa=C.createContext(null),Ta=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Au=C.createContext(null);function Xo(){return C.useContext(Pa)!=null}function Lf(){return Xo()||he(!1),C.useContext(Pa).location}function Mf(e,t){return _f(e,t)}function _f(e,t,n,r){Xo()||he(!1);let{navigator:a}=C.useContext(_u),{matches:i}=C.useContext(Ta),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Lf(),g;if(t){var m;let S=typeof t=="string"?za(t):t;c==="/"||(m=S.pathname)!=null&&m.startsWith(c)||he(!1),g=S}else g=d;let h=g.pathname||"/",x=h;if(c!=="/"){let S=c.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let w=df(e,{pathname:x}),E=jf(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:an([c,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:an([c,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&E?C.createElement(Pa.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ct.Pop}},E):E}function Af(){let e=Uf(),t=zf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:a},n):null,null)}const Rf=C.createElement(Af,null);class Of extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Ta.Provider,{value:this.props.routeContext},C.createElement(Au.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Df(e){let{routeContext:t,match:n,children:r}=e,a=C.useContext(Tf);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Ta.Provider,{value:t},r)}function jf(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let g=l.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);g>=0||he(!1),l=l.slice(0,Math.min(l.length,g+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<l.length;g++){let m=l[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=g),m.route.id){let{loaderData:h,errors:x}=n,w=m.route.loader&&h[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||w){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((g,m,h)=>{let x,w=!1,E=null,S=null;n&&(x=s&&m.route.id?s[m.route.id]:void 0,E=m.route.errorElement||Rf,c&&(d<0&&h===0?(Vf("route-fallback"),w=!0,S=null):d===h&&(w=!0,S=m.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,h+1)),u=()=>{let f;return x?f=E:w?f=S:m.route.Component?f=C.createElement(m.route.Component,null):m.route.element?f=m.route.element:f=g,C.createElement(Df,{match:m,routeContext:{outlet:g,matches:p,isDataRoute:n!=null},children:f})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?C.createElement(Of,{location:n.location,revalidation:n.revalidation,component:E,error:x,children:u(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):u()},null)}var Ru=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ru||{});function Ff(e){let t=C.useContext(If);return t||he(!1),t}function Wf(e){let t=C.useContext(Ta);return t||he(!1),t}function Bf(e){let t=Wf(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function Uf(){var e;let t=C.useContext(Au),n=Ff(Ru.UseRouteError),r=Bf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}const ds={};function Vf(e,t,n){ds[e]||(ds[e]=!0)}function Hf(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function In(e){he(!1)}function $f(e){let{basename:t="/",children:n=null,location:r,navigationType:a=ct.Pop,navigator:i,static:l=!1,future:s}=e;Xo()&&he(!1);let c=t.replace(/^\/*/,"/"),d=C.useMemo(()=>({basename:c,navigator:i,static:l,future:da({v7_relativeSplatPath:!1},s)}),[c,s,i,l]);typeof r=="string"&&(r=za(r));let{pathname:g="/",search:m="",hash:h="",state:x=null,key:w="default"}=r,E=C.useMemo(()=>{let S=Lu(g,c);return S==null?null:{location:{pathname:S,search:m,hash:h,state:x,key:w},navigationType:a}},[c,g,m,h,x,w,a]);return E==null?null:C.createElement(_u.Provider,{value:d},C.createElement(Pa.Provider,{children:n,value:E}))}function Qf(e){let{children:t,location:n}=e;return Mf(eo(t),n)}new Promise(()=>{});function eo(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,a)=>{if(!C.isValidElement(r))return;let i=[...t,a];if(r.type===C.Fragment){n.push.apply(n,eo(r.props.children,i));return}r.type!==In&&he(!1),!r.props.index||!r.props.children||he(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=eo(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Yf="6";try{window.__reactRouterVersion=Yf}catch{}const Gf="startTransition",ps=td[Gf];function Kf(e){let{basename:t,children:n,future:r,window:a}=e,i=C.useRef();i.current==null&&(i.current=sf({window:a,v5Compat:!0}));let l=i.current,[s,c]=C.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},g=C.useCallback(m=>{d&&ps?ps(()=>c(m)):c(m)},[c,d]);return C.useLayoutEffect(()=>l.listen(g),[l,g]),C.useEffect(()=>Hf(r),[r]),C.createElement($f,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}var fs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fs||(fs={}));var ms;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ms||(ms={}));function Xf(){const[e,t]=C.useState(!1);return o.createElement("header",{style:{position:"sticky",top:0,zIndex:50,width:"100%",margin:0,padding:0}},o.createElement("style",null,`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Outfit:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .mhdr * { box-sizing: border-box; }
        .mhdr {
          --bg: #1a1a1a;
          --bg-dark: #111111;
          --bg-light: #242424;
          --gold: #c9a227;
          --gold-light: #e0b93a;
          --text: #ffffff;
          --text-muted: rgba(255,255,255,0.55);
          font-family: 'Outfit', sans-serif;
          width: 100%;
          display: block;
        }

        .mhdr-top {
          background: var(--bg-dark);
          border-bottom: 1px solid rgba(201,162,39,0.25);
          height: 56px;
          display: flex;
          align-items: center;
          padding: 0 32px;
          justify-content: space-between;
          width: 100%;
        }

        .mhdr-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; }

        .mhdr-logo-wrap {
          width: 42px; height: 42px; border-radius: 8px;
          background: white; display: flex; align-items: center; justify-content: center;
          border: 1.5px solid var(--gold); overflow: hidden; flex-shrink: 0;
        }
        .mhdr-logo-wrap img { width: 38px; height: 38px; object-fit: contain; }

        .mhdr-logo-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 20px; font-weight: 700; color: var(--text); letter-spacing: 0.04em; line-height: 1;
        }
        .mhdr-logo-name span { color: var(--gold); }

        .mhdr-logo-sub {
          font-size: 9px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold); line-height: 1; margin-top: 2px;
        }

        .mhdr-nav { display: flex; align-items: center; gap: 4px; }

        .mhdr-nav a {
          font-size: 13px; font-weight: 500; color: var(--text-muted);
          text-decoration: none; padding: 6px 14px; border-radius: 6px;
          letter-spacing: 0.03em; transition: all 0.2s;
        }
        .mhdr-nav a:hover { color: var(--text); background: rgba(255,255,255,0.07); }

        .mhdr-cta {
          font-size: 12px; font-weight: 600; background: var(--gold); color: #111111;
          border: none; padding: 7px 16px; border-radius: 6px; cursor: pointer;
          letter-spacing: 0.05em; text-transform: uppercase; transition: background 0.2s; text-decoration: none;
        }
        .mhdr-cta:hover { background: var(--gold-light); }

        .mhdr-ham {
          display: none; background: none; border: 1px solid rgba(255,255,255,0.2);
          border-radius: 6px; color: var(--text); cursor: pointer; padding: 6px 8px;
        }

        .mhdr-mobile {
          background: var(--bg); border-bottom: 2px solid var(--gold); padding: 12px 20px 16px;
          width: 100%;
        }
        .mhdr-mobile a {
          display: block; font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.75);
          text-decoration: none; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.2s;
        }
        .mhdr-mobile a:last-child { border-bottom: none; }
        .mhdr-mobile a:hover { color: var(--gold); }

        .mhdr-ticker-bar {
          background: var(--bg);
          border-bottom: 2px solid var(--gold);
          height: 32px; overflow: hidden; display: flex; align-items: center;
          width: 100%;
        }
        .mhdr-ticker-label {
          background: var(--gold); color: #111111; font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; padding: 0 14px;
          height: 100%; display: flex; align-items: center; flex-shrink: 0;
        }
        .mhdr-ticker-scroll { flex: 1; overflow: hidden; }
        .mhdr-ticker-track {
          display: flex; animation: mhdr-scroll 40s linear infinite; white-space: nowrap;
        }
        .mhdr-ticker-track:hover { animation-play-state: paused; }
        @keyframes mhdr-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mhdr-ticker-item {
          display: inline-flex; align-items: center; gap: 8px; padding: 0 24px;
          font-size: 11.5px; font-weight: 500; color: rgba(255,255,255,0.85);
          letter-spacing: 0.04em; flex-shrink: 0;
        }
        .mhdr-ticker-sep {
          width: 5px; height: 5px; border-radius: 50%; background: var(--gold);
          flex-shrink: 0; opacity: 0.7;
        }
        .mhdr-ticker-badge {
          background: var(--gold); color: #111111; font-size: 9px; font-weight: 700;
          letter-spacing: 0.12em; padding: 2px 7px; border-radius: 3px; text-transform: uppercase;
        }

        @media (max-width: 640px) {
          .mhdr-top { padding: 0 16px; }
          .mhdr-nav { display: none; }
          .mhdr-cta { display: none; }
          .mhdr-ham { display: block; }
          .mhdr-logo-sub { display: none; }
        }
      `),o.createElement("div",{className:"mhdr"},o.createElement("div",{className:"mhdr-top"},o.createElement("a",{href:"/",className:"mhdr-brand"},o.createElement("div",{className:"mhdr-logo-wrap"},o.createElement("img",{src:"/public/src/assets/FinalRoundlogo.png",alt:"Maharsh Edutech"})),o.createElement("div",null,o.createElement("div",{className:"mhdr-logo-name"},"Maharsh ",o.createElement("span",null,"Edutech")),o.createElement("div",{className:"mhdr-logo-sub"},"Pvt Ltd"))),o.createElement("nav",{className:"mhdr-nav"},o.createElement("a",{href:"/"},"Home"),o.createElement("a",{href:"/about"},"About"),o.createElement("a",{href:"/services"},"Services"),o.createElement("a",{href:"/contact"},"Contact")),o.createElement("a",{href:"/contact",className:"mhdr-cta"},"Free Counseling"),o.createElement("button",{className:"mhdr-ham",onClick:()=>t(!e),"aria-label":"Toggle menu"},o.createElement("svg",{width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24"},e?o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}):o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})))),e&&o.createElement("div",{className:"mhdr-mobile"},o.createElement("a",{href:"/"},"Home"),o.createElement("a",{href:"/about"},"About"),o.createElement("a",{href:"/services"},"Services"),o.createElement("a",{href:"/contact"},"Contact"),o.createElement("a",{href:"/counseling",style:{color:"#c9a227",fontWeight:600}},"Free Counseling →")),o.createElement("div",{className:"mhdr-ticker-bar"},o.createElement("div",{className:"mhdr-ticker-label"},"Latest"),o.createElement("div",{className:"mhdr-ticker-scroll"},o.createElement("div",{className:"mhdr-ticker-track"},[...Array(2)].map((n,r)=>o.createElement("span",{key:r,style:{display:"inline-flex",alignItems:"center"}},o.createElement("span",{className:"mhdr-ticker-item"},"Admissions Open 2026 ",o.createElement("span",{className:"mhdr-ticker-badge"},"Apply Now")),o.createElement("span",{className:"mhdr-ticker-sep"}),o.createElement("span",{className:"mhdr-ticker-item"},"Free Career Counseling Available Now"),o.createElement("span",{className:"mhdr-ticker-sep"}),o.createElement("span",{className:"mhdr-ticker-item"},"India & Abroad Admissions Support"),o.createElement("span",{className:"mhdr-ticker-sep"}),o.createElement("span",{className:"mhdr-ticker-item"},"Get Education Loan Assistance Easily ",o.createElement("span",{className:"mhdr-ticker-badge"},"New")),o.createElement("span",{className:"mhdr-ticker-sep"}),o.createElement("span",{className:"mhdr-ticker-item"},"After 10th | 12th | Graduation – We Guide You"),o.createElement("span",{className:"mhdr-ticker-sep"}),o.createElement("span",{className:"mhdr-ticker-item"},"Limited Slots – Book Now ",o.createElement("span",{className:"mhdr-ticker-badge"},"Limited")),o.createElement("span",{className:"mhdr-ticker-sep"}),o.createElement("span",{className:"mhdr-ticker-item"},"Start Your Career Journey with Maharsh Edutech"),o.createElement("span",{className:"mhdr-ticker-sep"}))))))))}const Jf=[{label:"Services",href:"/services"},{label:"Counseling",href:"/counseling"},{label:"Admissions",href:"/admissions"},{label:"Loan Assistance",href:"/loans"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}],Zf=[{label:"Instagram",href:"https://instagram.com",icon:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),o.createElement("circle",{cx:"12",cy:"12",r:"4"}),o.createElement("circle",{cx:"17.5",cy:"6.5",r:"0.8",fill:"currentColor",stroke:"none"}))},{label:"WhatsApp",href:"https://wa.me/917337267648",icon:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor"},o.createElement("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"}))},{label:"YouTube",href:"https://youtube.com",icon:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"}),o.createElement("polygon",{points:"9.75 15.02 15.5 12 9.75 8.98 9.75 15.02",fill:"currentColor",stroke:"none"}))},{label:"LinkedIn",href:"https://linkedin.com",icon:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),o.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),o.createElement("circle",{cx:"4",cy:"4",r:"2"}))}];function qf(){return o.createElement(o.Fragment,null,o.createElement("style",null,`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500;600&display=swap');

        .ft {
          font-family: 'DM Sans', sans-serif;
          background: #080808;
          border-top: 1px solid rgba(201,168,76,0.18);
          color: rgba(255,255,255,0.88);
          line-height: 1;
        }
        .ft * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Top strip ── */
        .ft-top {
          display: flex; align-items: center; justify-content: space-between;
          padding: 28px 64px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          gap: 24px; flex-wrap: wrap;
        }

        /* Wordmark */
        .ft-wordmark {
          display: flex; align-items: center; gap: 11px; text-decoration: none;
        }
        .ft-logo-gem {
          width: 28px; height: 28px;
          border: 1px solid rgba(201,168,76,0.45);
          border-radius: 5px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ft-logo-gem svg { width: 15px; height: 15px; }
        .ft-wordmark-text {
          font-family: 'Playfair Display', serif;
          font-size: 15px; font-weight: 700; letter-spacing: 0.01em;
          color: rgba(255,255,255,0.85);
        }
        .ft-wordmark-text span { color: #C9A84C; font-style: italic; }

        /* Nav links */
        .ft-nav {
          display: flex; align-items: center; flex-wrap: wrap;
        }
        .ft-nav a {
          font-size: 10.5px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(255,255,255,0.35);
          text-decoration: none; padding: 5px 14px;
          border-right: 1px solid rgba(255,255,255,0.07);
          transition: color 0.2s; white-space: nowrap;
        }
        .ft-nav a:first-child { padding-left: 0; }
        .ft-nav a:last-child { border-right: none; }
        .ft-nav a:hover { color: #C9A84C; }

        /* Socials */
        .ft-socials { display: flex; align-items: center; gap: 7px; }
        .ft-social {
          width: 30px; height: 30px; border-radius: 6px;
          border: 1px solid rgba(201,168,76,0.14);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.32); text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .ft-social svg { width: 12px; height: 12px; }
        .ft-social:hover {
          color: #C9A84C;
          border-color: rgba(201,168,76,0.4);
          background: rgba(201,168,76,0.07);
        }

        /* ── Bottom bar ── */
        .ft-bottom {
          display: flex; align-items: center; justify-content: space-between;
          padding: 15px 64px; gap: 16px; flex-wrap: wrap;
        }
        .ft-copy {
          font-size: 10.5px; color: rgba(255,255,255,0.2);
          letter-spacing: 0.04em; line-height: 1.6;
        }
        .ft-copy strong { color: rgba(255,255,255,0.35); font-weight: 600; }
        .ft-tagline {
          font-size: 10px; color: rgba(201,168,76,0.4);
          letter-spacing: 0.14em; text-transform: uppercase;
          font-style: italic; font-family: 'Playfair Display', serif;
        }
        .ft-contact-pill {
          display: flex; align-items: center; gap: 8px;
          border: 1px solid rgba(201,168,76,0.15); border-radius: 20px;
          padding: 6px 14px 6px 10px; text-decoration: none;
          transition: border-color 0.2s;
        }
        .ft-contact-pill:hover { border-color: rgba(201,168,76,0.4); }
        .ft-contact-pill-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #C9A84C; flex-shrink: 0;
          animation: ft-pulse 2.2s ease-in-out infinite;
        }
        @keyframes ft-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.75); }
        }
        .ft-contact-pill-text {
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.07em;
          color: rgba(255,255,255,0.42);
        }

        @media (max-width: 900px) {
          .ft-top, .ft-bottom { padding-left: 32px; padding-right: 32px; }
          .ft-nav { display: none; }
        }
        @media (max-width: 560px) {
          .ft-top, .ft-bottom { padding-left: 24px; padding-right: 24px; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
          .ft-tagline { display: none; }
        }
      `),o.createElement("footer",{className:"ft"},o.createElement("div",{className:"ft-top"},o.createElement("a",{href:"/",className:"ft-wordmark"},o.createElement("div",{className:"ft-logo-gem"},o.createElement("svg",{viewBox:"0 0 16 16",fill:"none"},o.createElement("polygon",{points:"8,1 15,5 15,11 8,15 1,11 1,5",stroke:"#C9A84C",strokeWidth:"1",fill:"rgba(201,168,76,0.08)"}),o.createElement("polygon",{points:"8,4 12,6.5 12,9.5 8,12 4,9.5 4,6.5",fill:"#C9A84C",opacity:"0.35"}))),o.createElement("span",{className:"ft-wordmark-text"},"Maharsh ",o.createElement("span",null,"Edutech"))),o.createElement("nav",{className:"ft-nav"},Jf.map(e=>o.createElement("a",{key:e.label,href:e.href},e.label))),o.createElement("div",{className:"ft-socials"},Zf.map(e=>o.createElement("a",{key:e.label,href:e.href,className:"ft-social","aria-label":e.label,target:"_blank",rel:"noopener noreferrer"},o.createElement(e.icon,null))))),o.createElement("div",{className:"ft-bottom"},o.createElement("p",{className:"ft-copy"},"© 2026 ",o.createElement("strong",null,"Maharsh Edutech Pvt. Ltd.")," · Hyderabad, Telangana · All rights reserved"),o.createElement("p",{className:"ft-tagline"},"Guiding futures since 2012"),o.createElement("a",{href:"tel:+917337267648",className:"ft-contact-pill"},o.createElement("span",{className:"ft-contact-pill-dot"}),o.createElement("span",{className:"ft-contact-pill-text"},"+91 73372 67648")))))}function em(){const[e,t]=C.useState(!0),n=C.useRef(null),r=[{num:"5000+",label:"Students Guided"},{num:"200+",label:"Colleges"},{num:"15+",label:"Countries"},{num:"98%",label:"Success Rate"}],a=[{label:"After 10th",gold:!0},{label:"After 12th",gold:!0},{label:"After Graduation",gold:!0},{label:"India Admissions",gold:!1},{label:"Abroad Admissions",gold:!1},{label:"Education Loan",gold:!1}],i=()=>{n.current&&(n.current.muted=!e,t(!e))};return o.createElement("section",{style:{position:"relative",minHeight:"100vh",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center"}},o.createElement("style",null,`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,600&family=Outfit:wght@400;500;600;700&display=swap');

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 10px; margin-bottom: 20px;
          animation: fadeUp 0.7s ease both;
        }
        .hero-eyebrow-line { width: 32px; height: 2px; background: #c9a227; flex-shrink: 0; }
        .hero-eyebrow-text {
          font-size: 11px; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; color: #c9a227; font-family: 'Outfit', sans-serif;
        }

        .hero-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 5.5vw, 68px);
          font-weight: 700; color: white; line-height: 1.07;
          margin-bottom: 22px;
          animation: fadeUp 0.7s 0.1s ease both;
        }
        .hero-h1 em { font-style: italic; color: #c9a227; }

        .hero-sub {
          font-family: 'Outfit', sans-serif; font-size: 15.5px;
          color: rgba(255,255,255,0.68); line-height: 1.7;
          max-width: 520px; margin-bottom: 32px;
          animation: fadeUp 0.7s 0.18s ease both;
        }

        .hero-tags {
          display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 38px;
          animation: fadeUp 0.7s 0.26s ease both;
        }
        .hero-tag {
          font-family: 'Outfit', sans-serif; font-size: 11.5px; font-weight: 500;
          color: rgba(255,255,255,0.65); background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1); padding: 5px 13px; border-radius: 4px;
          transition: all 0.2s;
        }
        .hero-tag:hover { background: rgba(255,255,255,0.1); color: white; }
        .hero-tag.gold {
          color: #c9a227; background: rgba(201,162,39,0.1);
          border-color: rgba(201,162,39,0.3);
        }
        .hero-tag.gold:hover { background: rgba(201,162,39,0.18); }

        .hero-btns {
          display: flex; gap: 12px; flex-wrap: wrap; align-items: center;
          animation: fadeUp 0.7s 0.34s ease both;
        }
        .hero-btn-primary {
          font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          background: #c9a227; color: #111111; border: none;
          padding: 13px 30px; border-radius: 6px; cursor: pointer;
          transition: background 0.2s, transform 0.15s; text-decoration: none;
          display: inline-block;
        }
        .hero-btn-primary:hover { background: #e0b93a; transform: translateY(-1px); }
        .hero-btn-outline {
          font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          background: transparent; color: white;
          border: 1.5px solid rgba(255,255,255,0.3);
          padding: 12px 26px; border-radius: 6px; cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.15s; text-decoration: none;
          display: inline-block;
        }
        .hero-btn-outline:hover { border-color: #c9a227; color: #c9a227; transform: translateY(-1px); }

        .hero-trust {
          margin-top: 20px; display: flex; align-items: center; gap: 10px;
          font-family: 'Outfit', sans-serif; font-size: 12px; color: rgba(255,255,255,0.4);
          letter-spacing: 0.06em; animation: fadeUp 0.7s 0.42s ease both;
          flex-wrap: wrap;
        }
        .hero-trust-dot { width: 4px; height: 4px; border-radius: 50%; background: #c9a227; opacity: 0.6; }

        .hero-stats-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          display: flex; border-top: 1px solid rgba(201,162,39,0.25);
          background: rgba(17,17,17,0.82);
          backdrop-filter: blur(12px);
          animation: fadeUp 0.7s 0.5s ease both;
        }
        .hero-stat {
          flex: 1; padding: 18px 0; text-align: center;
          border-right: 1px solid rgba(201,162,39,0.12);
          transition: background 0.2s;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat:hover { background: rgba(201,162,39,0.05); }
        .hero-stat-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 28px; font-weight: 700; color: #c9a227; line-height: 1; margin-bottom: 4px;
        }
        .hero-stat-label {
          font-family: 'Outfit', sans-serif; font-size: 10px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.45);
        }

        /* Audio toggle */
        .hero-audio-btn {
          position: absolute; bottom: 90px; right: 32px; z-index: 4;
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(17,17,17,0.7); border: 1px solid rgba(201,162,39,0.4);
          color: white; cursor: pointer; display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(8px); transition: border-color 0.2s, background 0.2s;
          animation: fadeUp 0.7s 0.55s ease both;
        }
        .hero-audio-btn:hover { background: rgba(201,162,39,0.15); border-color: #c9a227; }
        .hero-audio-btn svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }

        /* Scroll hint — shifted left to make room for audio btn */
        .hero-scroll {
          position: absolute; bottom: 90px; right: 84px; z-index: 2;
          display: flex; flex-direction: column; align-items: center; gap: 6px; opacity: 0.35;
        }
        .hero-scroll-line {
          width: 1px; height: 44px; background: white;
          animation: spulse 2s ease-in-out infinite;
        }
        @keyframes spulse {
          0%,100%{opacity:.3;transform:scaleY(.55)} 50%{opacity:.9;transform:scaleY(1)}
        }
        .hero-scroll-text {
          font-family: 'Outfit', sans-serif; font-size: 9px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase; color: white;
          writing-mode: vertical-lr;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero-content { padding: 60px 24px 100px !important; }
          .hero-scroll { display: none; }
          .hero-audio-btn { bottom: 86px; right: 16px; }
          .hero-stat-num { font-size: 22px; }
          .hero-stat { padding: 14px 8px; }
          .hero-stat-label { font-size: 9px; }
        }
        @media (max-width: 480px) {
          .hero-btns { flex-direction: column; align-items: flex-start; }
          .hero-btn-primary, .hero-btn-outline { width: 100%; text-align: center; }
        }
      `),o.createElement("video",{ref:n,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:0},src:"public/src/assets/bgvideo.mp4"}),o.createElement("div",{style:{position:"absolute",inset:0,background:"rgba(10,10,10,0.68)",zIndex:1}}),o.createElement("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:"#c9a227",zIndex:3}}),o.createElement("div",{className:"hero-content",style:{position:"relative",zIndex:2,padding:"80px 72px 100px",width:"100%",maxWidth:"860px"}},o.createElement("div",{className:"hero-eyebrow"},o.createElement("div",{className:"hero-eyebrow-line"}),o.createElement("span",{className:"hero-eyebrow-text"},"Free Career Counseling — 2026")),o.createElement("h1",{className:"hero-h1"},"Confused About",o.createElement("br",null),"Your ",o.createElement("em",null,"Career Path?")),o.createElement("p",{className:"hero-sub"},"We help students after 10th, 12th, and graduation discover the right opportunities and achieve their goals with expert guidance."),o.createElement("div",{className:"hero-tags"},a.map(l=>o.createElement("span",{key:l.label,className:`hero-tag${l.gold?" gold":""}`},l.label))),o.createElement("div",{className:"hero-btns"},o.createElement("a",{href:"/counseling",className:"hero-btn-primary"},"Talk to an Expert"),o.createElement("a",{href:"/services",className:"hero-btn-outline"},"Explore Services"),o.createElement("a",{href:"/admissions",className:"hero-btn-outline"},"View Admissions")),o.createElement("div",{className:"hero-trust"},o.createElement("span",null,"Trusted by 5000+ students"),o.createElement("div",{className:"hero-trust-dot"}),o.createElement("span",null,"India & Abroad"),o.createElement("div",{className:"hero-trust-dot"}),o.createElement("span",null,"No hidden fees"))),o.createElement("div",{className:"hero-stats-bar"},r.map(l=>o.createElement("div",{key:l.label,className:"hero-stat"},o.createElement("div",{className:"hero-stat-num"},l.num),o.createElement("div",{className:"hero-stat-label"},l.label)))),o.createElement("div",{className:"hero-scroll"},o.createElement("div",{className:"hero-scroll-line"}),o.createElement("span",{className:"hero-scroll-text"},"Scroll")),o.createElement("button",{className:"hero-audio-btn",onClick:i,"aria-label":e?"Unmute video":"Mute video",title:e?"Unmute":"Mute"},e?o.createElement("svg",{viewBox:"0 0 24 24"},o.createElement("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),o.createElement("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),o.createElement("line",{x1:"17",y1:"9",x2:"23",y2:"15"})):o.createElement("svg",{viewBox:"0 0 24 24"},o.createElement("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),o.createElement("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),o.createElement("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"}))))}function tm(e=.1){const t=C.useRef(null),[n,r]=C.useState(!1);return C.useEffect(()=>{const a=t.current;if(!a)return;const i=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),i.disconnect())},{threshold:e});return i.observe(a),()=>i.disconnect()},[]),[t,n]}function Fe({children:e,className:t="",style:n={},delay:r=0}){const[a,i]=tm();return o.createElement("div",{ref:a,className:t,style:{opacity:i?1:0,transform:i?"translateY(0)":"translateY(48px)",transition:`opacity 0.85s cubic-bezier(.22,1,.36,1) ${r}ms, transform 0.85s cubic-bezier(.22,1,.36,1) ${r}ms`,...n}},e)}const tt={CompassRose:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}),o.createElement("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"})),ScrollDoc:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),o.createElement("polyline",{points:"14 2 14 8 20 8"}),o.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),o.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),o.createElement("polyline",{points:"10 9 9 9 8 9"})),GlobePin:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.createElement("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),o.createElement("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})),CreditCard:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),o.createElement("line",{x1:"1",y1:"10",x2:"23",y2:"10"})),Check:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("polyline",{points:"20 6 9 17 4 12"})),Star:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"currentColor"},o.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})),Quote:()=>o.createElement("svg",{viewBox:"0 0 40 30",fill:"currentColor"},o.createElement("path",{d:"M0 30V18C0 7.6 5.6 1.6 16.8 0l2.4 4C13.2 5.2 10 8.8 10 14v1.5H18V30H0zm22 0V18C22 7.6 27.6 1.6 38.8 0l2.4 4c-6 1.2-9.2 4.8-9.2 10V15.5H40V30H22z"})),Phone:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"})),Mail:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),o.createElement("polyline",{points:"22,6 12,13 2,6"})),MapPin:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.createElement("circle",{cx:"12",cy:"10",r:"3"})),ArrowRight:()=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),o.createElement("polyline",{points:"12 5 19 12 12 19"}))},nm=[{name:"JNTU Hyderabad",short:"JNTU",state:"TS",image:"/images/colleges/jntu.png"},{name:"Osmania University",short:"OU",state:"TS",image:"/images/colleges/osmania.png"},{name:"University of Hyderabad",short:"UoH",state:"TS",image:"/images/colleges/uoh.png"},{name:"BITS Pilani Hyderabad",short:"BITS",state:"TS",image:"/images/colleges/bits-hyd.png"},{name:"IIIT Hyderabad",short:"IIITH",state:"TS",image:"/images/colleges/iiit-hyd.png"},{name:"SR Engineering",short:"SREC",state:"TS",image:"/images/colleges/srec.png"},{name:"VNR Vignana Jyothi",short:"VNRVJIET",state:"TS",image:"/images/colleges/vnr.png"},{name:"Mahindra University",short:"MU",state:"TS",image:"/images/colleges/mahindra.png"},{name:"Andhra University",short:"AU",state:"AP",image:"/images/colleges/au.png"},{name:"JNTU Kakinada",short:"JNTUK",state:"AP",image:"/images/colleges/jntuk.png"},{name:"SRM AP",short:"SRMAP",state:"AP",image:"/images/colleges/srmap.png"},{name:"VIT AP",short:"VITAP",state:"AP",image:"/images/colleges/vitap.png"},{name:"Amrita Amaravati",short:"Amrita",state:"AP",image:"/images/colleges/amrita.png"},{name:"RGUKT Basar",short:"RGUKT",state:"TS",image:"/images/colleges/rgukt.png"},{name:"Vignan University",short:"VU",state:"AP",image:"/images/colleges/vignan.png"},{name:"KL University",short:"KLU",state:"AP",image:"/images/colleges/klu.png"}],rm=[{name:"IIT Bombay",short:"IITB",color:"#003366"},{name:"IIT Delhi",short:"IITD",color:"#1a1a6e"},{name:"IIT Madras",short:"IITM",color:"#7b1513"},{name:"AIIMS Delhi",short:"AIIMS",color:"#8b0000"},{name:"IIM Ahmedabad",short:"IIMA",color:"#003d1f"},{name:"NIT Warangal",short:"NITW",color:"#003366"},{name:"BITS Pilani",short:"BITS",color:"#b71c1c"},{name:"Manipal",short:"MU",color:"#2c5f2e"},{name:"Ashoka Univ.",short:"AU",color:"#4a0072"},{name:"VIT Vellore",short:"VIT",color:"#c9a227"}],nt=[{icon:"CompassRose",num:"01",title:"Career Counseling & Guidance",subtitle:"Discover Your True Direction",desc:"Your career is not a guess — it is a discovery. Our certified counselors invest deeply in understanding your psychometric profile, academic trajectory, and long-term aspirations before making a single recommendation. Through structured one-on-one sessions, industry analysis, and scientifically validated assessment tools, we build a career roadmap that is precise, personal, and grounded in real-world employment data. We do not recycle templates. Every roadmap is built from scratch, for you.",detail:"Many students approach us carrying the weight of family expectations, peer comparisons, and social pressure — all pointing in different directions. Our process begins by removing that noise. We work with students from Class 10 onwards, helping them understand not just what they are good at today, but what they are built for in the long run. Our psychometric assessments evaluate aptitude, emotional intelligence, learning style, risk orientation, and career values. The output is a written, detailed report that becomes the foundation of every decision made thereafter.",points:["In-depth psychometric and aptitude assessment","One-on-one 90-minute deep-dive sessions","Written career report with 3 pathway projections","Industry salary benchmarks and growth trajectory data","Post-session follow-up and revision support","Available in Telugu, Tamil, Hindi, Malayalam, Kannada"]},{icon:"ScrollDoc",num:"02",title:"Application Support",subtitle:"Every Document, Perfected",desc:"A great application is a form of storytelling — it shows the institution exactly who you are, why you belong there, and what you will contribute. Our application support team includes former admissions committee members, seasoned SOP writers, and documentation specialists who have helped over 5,000 students craft compelling, distinctive applications across engineering, medicine, management, law, design, and international programs.",detail:"We cover every element of the application process: Statement of Purpose (SOP) writing through four rounds of expert review and revision, Letter of Recommendation (LOR) strategy and drafting, personal essay coaching, extracurricular positioning, resume and CV building, interview preparation with mock sessions and real-time feedback, and the organisation and submission of supporting documents for every institution in your shortlist. For international applications, we align every element with institution-specific evaluation rubrics to maximise your chance of selection.",points:["SOP drafting with 4 rounds of expert review","LOR strategy, structure, and drafting support","Personal essay coaching and positioning","Resume and CV crafting for student profiles","Mock interviews with senior counselors","Document verification and submission support","University-specific application alignment"]},{icon:"GlobePin",num:"03",title:"End-to-End Admission — India & Abroad",subtitle:"From Shortlist to Enrollment",desc:"Admission into the right institution is the culmination of years of effort — and the gateway to everything that follows. We manage the complete admission lifecycle for both domestic Indian institutions and universities across 18 countries, with specialist teams for engineering, medical, management, law, architecture, design, and liberal arts. From the first college shortlist to the final enrollment confirmation, we are accountable for every step.",detail:"For Indian admissions, we navigate the full complexity of JEE, NEET, CLAT, NIFT, NATA, CAT, and state-level entrance counseling processes. We have established relationships with over 250 partner institutions across India and maintain real-time access to seat availability, cutoff trends, and scholarship data. Our counseling teams are present in-person during critical rounds — JOSAA, MCC, state counseling — ensuring students and families never face a high-stakes decision without expert support. For international admissions, our specialist teams have placed students in universities across the USA, UK, Canada, Australia, Germany, Singapore, UAE, Ireland, Netherlands, and New Zealand. We coordinate every element from university shortlisting based on your academic profile and budget, to visa documentation, pre-departure orientation, and post-arrival check-ins.",points:["250+ partner institutions across India","Engineering, Medical, MBA, Law, Design, Architecture","JEE, NEET, CLAT, NIFT, NATA, CAT counseling","18 countries for international placements","Visa documentation and embassy preparation","Scholarship identification and application","Pre-departure briefing and airport assistance","Post-arrival check-in and community connection"]},{icon:"CreditCard",num:"04",title:"Education Loan Assistance",subtitle:"Fund Your Future, Wisely",desc:"The financial dimension of higher education is one of the most anxiety-inducing aspects for families — and also one of the most misunderstood. Our financial counselors demystify the loan process entirely, working with 14 banking and NBFC partners to identify the most advantageous loan structures for your specific profile, institution, and repayment capacity. We do not receive commission from lenders. Our only goal is to help you secure funding on terms that serve your long-term financial health.",detail:"We assess your family's financial eligibility, the institution's lender relationships, collateral options, and interest rate structures across nationalized banks, private banks, and non-banking financial companies. We then build a complete funding plan — combining scholarships, merit awards, institutional fee waivers, and loan amounts — to minimise the total debt burden. Our team handles all documentation, bank liaison, and follow-up, and provides detailed EMI and repayment counseling before any loan is signed. We also advise on tax benefits available under Section 80E of the Income Tax Act.",points:["Tie-ups with 14 nationalized and private lenders","Collateral and non-collateral loan options","Complete funding plan: scholarship + loan combo","Full documentation and bank liaison","EMI calculation and repayment strategy","Section 80E tax benefit advisory","Disbursement tracking and follow-up"]}],am=[{num:"01",title:"Book Your Free Discovery Session",desc:"Begin with a complimentary 30-minute consultation with one of our senior counselors. This is not a sales call — it is an open, honest conversation about where you are in your academic journey, what is worrying you, and what you are hoping to achieve. We listen before we advise.",duration:"30 minutes",mode:"Free"},{num:"02",title:"Psychometric & Aptitude Assessment",desc:"Complete our comprehensive scientifically validated assessment covering aptitude across verbal, logical, numerical, and spatial domains; personality dimensions across the Big Five framework; career values and motivational drivers; risk orientation and decision-making style; and learning modality preferences. The assessment is conducted online or in-person and takes approximately 90 minutes.",duration:"90 minutes",mode:"In-depth"},{num:"03",title:"Personalised Career & College Roadmap",desc:"Within 72 hours of your assessment, we deliver a detailed written roadmap — 20 to 30 pages — covering your psychometric results and interpretation, three career pathway projections with 5-year and 10-year outlooks, a prioritized shortlist of institutions matched to your profile and budget, entrance exam strategy and preparation timeline, and a financial planning overview covering fees, scholarships, and loan options.",duration:"72 hours delivery",mode:"Written Report"},{num:"04",title:"Application Building & Submission",desc:"Our application team takes full ownership of execution. SOP drafting and revision cycles, LOR structure and preparation, university-specific essays and supplemental materials, document authentication and organization, application portal management, and continuous communication with institutional admissions offices — all handled by our specialists while you are kept informed at every milestone.",duration:"4–8 weeks",mode:"Managed Service"},{num:"05",title:"Counseling Rounds & Enrollment",desc:"For Indian entrance counseling — JEE, NEET, state quota, management quota — we are present with you through every round, helping you build data-driven choice-filling strategies and react to real-time seat availability. For international admissions, we coordinate with institutions until your I-20, CAS, or offer letter is confirmed and funds are remitted. We do not consider our job done until you have your institution ID in hand.",duration:"Variable",mode:"In-person"},{num:"06",title:"Post-Enrollment Support",desc:"Our relationship with students continues well beyond enrollment. We provide hostel and accommodation shortlisting, peer community introductions within your institution, semester check-in calls during your first year, mentorship sessions connecting you with alumni in your field, and ongoing career guidance as you approach internship season and placements. You are never alone in the transition.",duration:"First year",mode:"Ongoing"}],im=[{num:"12+",label:"Years of Operation"},{num:"5,000+",label:"Students Guided"},{num:"250+",label:"Partner Institutions"},{num:"18",label:"Countries for Abroad"},{num:"98%",label:"Admission Success Rate"},{num:"14",label:"Loan Partner Banks"}],om=[{num:"01",title:"Certified Career Counselors",desc:"Every counselor holds recognized certifications in career guidance and educational counseling — including NCDA, GCDF, or equivalent Indian credentials — and brings a minimum of five years of hands-on admissions experience across both Indian and international institutions. We do not employ freshers with scripts. We employ practitioners who understand what they are advising."},{num:"02",title:"Zero Commission, Zero Conflict",desc:"We do not receive referral fees, placement commissions, or incentive payments from any college, university, loan provider, or coaching institute. Our only source of revenue is the transparent service fee paid by the student and their family. This structural independence means our advice is aligned entirely with your interests — not ours."},{num:"03",title:"End-to-End Accountability",desc:"You will never be handed off to a junior relationship manager after your initial consultation, or left to navigate a critical application deadline without support. The same senior counselor who conducts your first session owns your file from discovery through enrollment. Accountability is personal at Maharsh Edutech."},{num:"04",title:"Data-Driven Recommendations",desc:"Our counselors are supported by a proprietary database of placement statistics, admission cutoff trends, salary benchmarks, and alumni outcome tracking — updated annually from institutional disclosures, LinkedIn data, and our own longitudinal student tracking. Every recommendation we make is grounded in evidence."},{num:"05",title:"Regional Language Depth",desc:"Career counseling requires nuance, vulnerability, and clear thinking — none of which should be compromised by a language barrier. Our team serves students in Telugu, Tamil, Malayalam, Hindi, Kannada, and Marathi, ensuring that every student can express themselves fully and receive guidance they can genuinely internalize."},{num:"06",title:"Transparent Outcome Tracking",desc:"We publish our admission outcome data annually. Across 5,000+ students counseled, 98% have secured admission into one of their top three institutional choices. We track outcomes, follow up with students after enrollment, and use longitudinal data to continuously refine our counseling methodology. We are accountable to results, not just promises."}],Le=[{name:"Arjun Mehta",institution:"IIT Hyderabad",program:"B.Tech Computer Science, 2024",location:"Hyderabad, Telangana",instColor:"#1a1a6e",instAbbr:"IIT",rating:5,short:"From overwhelmed to IIT Hyderabad in two months",text:"I had absolutely no direction after my 12th results. My parents were anxious, I was overwhelmed by the sheer number of options — JEE counseling, private colleges, management quota, everything. The noise was deafening and every well-meaning relative had a different opinion. Maharsh Edutech cut through all of that within the very first session. My counselor had the extraordinary ability to listen without judgment and then frame the situation with complete clarity. Within 45 minutes, he had already mapped three realistic paths based on my JEE rank, my interests, and my family's financial situation. There was no pressure, no sales language, no manufactured urgency. Just honest, specific, experienced advice. The team then took over my JOSAA documentation and guided me through every round of counseling in real time — they were reachable on the phone even late at night when choices had to be locked. I secured Computer Science at IIT Hyderabad. That felt genuinely impossible two months before."},{name:"Priya Nair",institution:"University of Toronto",program:"MSc Data Science, 2023",location:"Kochi, Kerala",instColor:"#002145",instAbbr:"UoT",rating:5,short:"University of Toronto with a partial scholarship",text:"Studying abroad had always been a distant dream, made more distant by how impossibly complex the process seemed — GRE scores, IELTS, SOPs, LORs, financial proofs, visa interviews, proof of funds, scholarship applications, and deadlines that overlapped in ways I could not track. I approached Maharsh Edutech six months before my target intake and the first thing they did was create a week-by-week execution calendar that made the entire process feel manageable for the first time. My Statement of Purpose went through four rounds of expert review. Each round was not just a grammar pass — they challenged my framing, pushed me to articulate my research interests more specifically, and helped me write something that genuinely sounded like me rather than a template. They identified three scholarship opportunities I had not found despite months of independent research. I was admitted to the University of Toronto with a partial scholarship. What I valued most was the calm, systematic competence of the team — I never once felt lost, even when the process got difficult."},{name:"Rahul Sharma",institution:"AIIMS New Delhi",program:"MBBS, 2023",location:"Jaipur, Rajasthan",instColor:"#8b0000",instAbbr:"AIIMS",rating:5,short:"AIIMS Delhi in Round 1 of NEET counseling",text:"NEET counseling is unlike any other process in Indian education — the stakes are enormous, the window is narrow, and the consequences of a wrong choice can cost a student an entire year. I had a competitive score but absolutely no strategic clarity about how to approach choice-filling across the all-India quota, state quota, deemed university seats, and NRI quota. The counselors at Maharsh Edutech helped me build a choice-filling strategy that was genuinely data-driven — they had historical cutoff data going back multiple years and could tell me, for each institution I was considering, not just the expected cutoff but the risk-adjusted probability of my getting a seat given my category, state domicile, and score. They understood that every choice on that list represented years of my life, not just a number in a box. They also prepared my family for the emotional volatility of watching round results — which matters more than people acknowledge. I got AIIMS Delhi in Round 1. My family and I are forever grateful."},{name:"Sneha Reddy",institution:"Manipal University",program:"BDS + MBA Healthcare track, 2024",location:"Vijayawada, Andhra Pradesh",instColor:"#2c5f2e",instAbbr:"MU",rating:5,short:"Clarity between dentistry and pharmacy — and the loan that made it possible",text:"After my 12th results, I was genuinely torn between pursuing dentistry and pharmacy. Both options had merit and both had strong advocates in my family — my father wanted pharmacy for the entrepreneurship opportunities, my mother wanted dentistry for the patient-facing career. I had no objective input from anyone who understood both fields from a professional and financial perspective. The psychometric assessment at Maharsh Edutech was genuinely eye-opening — not because it gave me a magic answer, but because it helped me see my own tendencies with extraordinary clarity. The results showed a strong orientation toward direct patient care, high conscientiousness in detailed procedural work, and moderate entrepreneurial drive. The counselors then walked me through the realistic career trajectories of both BDS and B.Pharm with actual salary data, scope of practice comparisons, further study options, and industry growth forecasts. The BDS path at Manipal with an eventual MBA in Healthcare Management was the right call. I am absolutely certain about my path now — and the education loan assistance they provided made it financially feasible for my family without unreasonable stress."},{name:"Karthik Iyer",institution:"BITS Pilani — Goa Campus",program:"B.E. Electronics, 2024",location:"Chennai, Tamil Nadu",instColor:"#b71c1c",instAbbr:"BITS",rating:5,short:"The right BITS campus and branch — chosen with data, not prestige bias",text:"I had a strong BITSAT score and was facing the classic dilemma — which campus, which branch, and whether to take a less preferred branch at a more preferred campus or vice versa. The internet was full of conflicting opinions driven by prestige bias and anecdote. What I needed was someone who could show me actual data. Maharsh Edutech gave me a thorough, structured breakdown of placement statistics disaggregated by campus and branch, research publication output, industry partnership quality, alumni network density in my target sector, and branch-specific internship opportunity data. What stood out most was their intellectual honesty — they told me when a choice was not in my best long-term interest, even if it was the more prestigious-sounding option on paper. That kind of honesty is genuinely rare in the education consulting space, where most advisors tell students what they want to hear. I am now at BITS Pilani Goa, in Electronics, with full clarity about what I want to do with these four years."},{name:"Ananya Bose",institution:"ISB Hyderabad",program:"PGP — Post Graduate Programme, 2023",location:"Kolkata, West Bengal",instColor:"#1a1a6e",instAbbr:"ISB",rating:5,short:"From operations professional to ISB — with positioning that actually worked",text:"I was a working professional with three years in supply chain operations, considering whether an MBA was genuinely the right investment for my career goals or whether I was falling into the trap of doing what everyone around me was doing. The counselors at Maharsh Edutech were the first to actually challenge the premise of my question — they asked me to articulate specifically what I expected the MBA to unlock, and whether those outcomes were achievable by other paths. That conversation alone was worth more than any generic admission guidance. After two full sessions analyzing my career history, goals, and positioning, they helped me build a narrative that was honest and distinctive — not the sanitized version that most applicants present. My essays were reviewed by counselors with direct experience of what ISB's admissions committee evaluates. I received offers from three top MBA programs and chose ISB for its industry connections in the operations and consulting sectors. The ROI on this counseling investment has been substantial, and I think of it as the most important professional advice I have ever received."},{name:"Vikram Naidu",institution:"Purdue University",program:"MS Mechanical Engineering, 2024",location:"Guntur, Andhra Pradesh",instColor:"#CEB888",instAbbr:"PU",rating:5,short:"Purdue MS with a university graduate fellowship",text:"I was a final-year engineering student at JNTU Kakinada with a decent CGPA, average GRE scores, and very limited guidance on how to position myself competitively for US graduate admissions. My first instinct was to apply to the top 20 universities in the QS ranking, which my counselor at Maharsh Edutech immediately and gently helped me reconsider. She showed me why program-specific research fit, faculty alignment, and funding availability were far more important than aggregate rankings for MS applicants in engineering. We spent two sessions building a balanced university list — safeties, targets, and reaches — all with credible rationale for why I could be competitive at each. My SOP was rewritten from scratch three times until it clearly articulated my specific research interests and connected them to faculty work at each university. My counselor identified a graduate research assistantship opportunity at Purdue that I had not found. I applied specifically noting the faculty connection in my application, was shortlisted for an interview, and ultimately received a graduate fellowship. I cannot overstate how different this outcome would have been without the expert positioning they provided."},{name:"Divya Krishnamurthy",institution:"NLSIU Bangalore",program:"B.A. LL.B., 2023",location:"Secunderabad, Telangana",instColor:"#003366",instAbbr:"NLS",rating:5,short:"CLAT rank 34 — and knowing exactly what to do with it",text:"I had prepared for CLAT for two years and achieved a rank of 34 in the all-India merit list — a result that any law aspirant would celebrate. But in the days immediately after results, I found myself more anxious than celebratory, because I had no framework for understanding which NLU was right for me and why. The rankings exist but they do not capture clinical legal education quality, research culture, infrastructure for the specific practice area I was interested in, or the placement record in the specific firms I had identified as targets. Maharsh Edutech took all of this seriously. My counselor — who had personally advised students entering NLSIU, NALSAR, and NUJS over several years — walked me through each institution's culture, faculty quality in constitutional and human rights law specifically, moot court opportunities, law review publication norms, and detailed clerkship and firm placement data. The choice of NLSIU was clear and I made it with conviction. That confidence has carried through into my first year in ways I did not expect."}];function lm(){const[e,t]=C.useState(0),[n,r]=C.useState(0),a=C.useRef(null);C.useEffect(()=>(a.current=setInterval(()=>{t(l=>(l+1)%Le.length)},8e3),()=>clearInterval(a.current)),[]);const i=l=>{clearInterval(a.current),t(l)};return o.createElement(o.Fragment,null,o.createElement(em,null),o.createElement("style",null,`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --gold: #C9A84C;
          --gold2: #E2C46B;
          --gold-dim: rgba(201,168,76,0.10);
          --gold-border: rgba(201,168,76,0.20);
          --ink: #0A0A0A;
          --ink2: #121212;
          --ink3: #1A1A1A;
          --ink4: #252525;
          --smoke: rgba(255,255,255,0.85);
          --muted: rgba(255,255,255,0.50);
          --faint: rgba(255,255,255,0.25);
          --hair: rgba(255,255,255,0.07);
          --radius: 3px;
        }

        .h * { box-sizing: border-box; }
        .h { font-family: 'DM Sans', sans-serif; background: var(--ink); color: var(--smoke); line-height: 1; }

        .h-serif { font-family: 'Playfair Display', Georgia, serif; }

        /* ── Ornamental label ── */
        .h-tag {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 10px; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--gold);
        }
        .h-tag-line { height: 1px; width: 32px; background: var(--gold); flex-shrink: 0; }

        /* ══ COLLEGE STRIP ══ */
        .h-strip { background: var(--ink2); border-bottom: 1px solid var(--gold-border); padding: 14px 0; overflow: hidden; position: relative; }
        .h-strip::before, .h-strip::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 120px; z-index: 2; pointer-events: none;
        }
        .h-strip::before { left: 0; background: linear-gradient(to right, var(--ink2), transparent); }
        .h-strip::after { right: 0; background: linear-gradient(to left, var(--ink2), transparent); }
        .h-strip-label {
          position: absolute; left: 24px; top: 50%; transform: translateY(-50%);
          font-size: 9px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--gold); z-index: 3; background: var(--ink2); padding: 0 12px 0 0;
        }
        .h-strip-track {
          display: flex; gap: 0; width: max-content;
          animation: stripScroll 38s linear infinite;
        }
        .h-strip-track:hover { animation-play-state: paused; }
        @keyframes stripScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .h-strip-item {
          display: flex; align-items: center; gap: 10px;
          padding: 0 28px; border-right: 1px solid var(--hair);
          flex-shrink: 0;
        }
        .h-strip-logo {
          width: 34px; height: 34px; border-radius: 5px; flex-shrink: 0;
          overflow: hidden; border: 1px solid var(--hair);
          display: flex; align-items: center; justify-content: center;
          background: var(--ink3);
        }
        .h-strip-logo img {
          width: 100%; height: 100%; object-fit: contain; padding: 4px;
          filter: brightness(0.9) contrast(1.05);
        }
        .h-strip-logo-text {
          font-family: 'Playfair Display', serif; font-size: 9px; font-weight: 700;
          color: var(--gold); letter-spacing: 0.04em;
        }
        .h-strip-name { font-size: 11.5px; font-weight: 500; color: var(--muted); white-space: nowrap; }
        .h-strip-state {
          font-size: 8.5px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--gold); background: var(--gold-dim); padding: 2px 6px; border-radius: 2px;
        }

        /* ══ ABOUT ══ */
        .h-about { padding: 120px 80px; background: var(--ink); position: relative; overflow: hidden; }
        .h-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: start; }
        .h-about-left {}
        .h-about-eyebrow { margin-bottom: 20px; }
        .h-about-h2 {
          font-family: 'Playfair Display', serif; font-size: clamp(36px, 4vw, 58px);
          font-weight: 900; line-height: 1.05; margin: 0 0 28px; color: var(--smoke);
        }
        .h-about-h2 em { font-style: italic; color: var(--gold); }
        .h-about-body {
          font-size: 15px; color: var(--muted); line-height: 1.85; margin: 0 0 20px;
        }
        .h-about-right { padding-top: 12px; }
        .h-stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; border: 1px solid var(--gold-border); border-radius: var(--radius); overflow: hidden; }
        .h-stat-box {
          background: var(--ink2); padding: 32px 24px;
          border-right: 1px solid var(--gold-border);
          border-bottom: 1px solid var(--gold-border);
          position: relative;
        }
        .h-stat-box::after {
          content: ''; position: absolute; bottom: 0; left: 24px;
          width: 0; height: 2px; background: var(--gold);
          transition: width 0.6s ease;
        }
        .h-stat-box:hover::after { width: calc(100% - 48px); }
        .h-stat-num {
          font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 900;
          color: var(--gold); line-height: 1; margin-bottom: 8px;
        }
        .h-stat-label { font-size: 11.5px; color: var(--muted); line-height: 1.5; }
        .h-about-quote {
          margin-top: 40px; padding: 28px 32px;
          border-left: 3px solid var(--gold); background: var(--ink2);
          border-radius: 0 var(--radius) var(--radius) 0;
        }
        .h-about-quote-text {
          font-family: 'Playfair Display', serif; font-size: 16px; font-style: italic;
          color: var(--smoke); line-height: 1.7; margin: 0 0 10px;
        }
        .h-about-quote-attr { font-size: 11px; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; }

        /* ══ WHAT WE DO — Tabbed Services ══ */
        .h-services { padding: 120px 80px; background: var(--ink2); position: relative; }
        .h-services-nav {
          display: flex; gap: 0; border: 1px solid var(--gold-border);
          border-radius: var(--radius); overflow: hidden; margin: 52px 0 0;
        }
        .h-svc-nav-btn {
          flex: 1; padding: 20px 16px; background: var(--ink); cursor: pointer;
          border: none; border-right: 1px solid var(--gold-border);
          display: flex; flex-direction: column; align-items: flex-start; gap: 6px;
          transition: background 0.25s; text-align: left;
        }
        .h-svc-nav-btn:last-child { border-right: none; }
        .h-svc-nav-btn.active { background: var(--gold-dim); }
        .h-svc-nav-num {
          font-family: 'Playfair Display', serif; font-size: 12px; color: var(--gold); font-weight: 700;
        }
        .h-svc-nav-label { font-size: 12px; font-weight: 600; color: var(--muted); line-height: 1.3; }
        .h-svc-nav-btn.active .h-svc-nav-label { color: var(--smoke); }
        .h-svc-nav-bar {
          width: 0; height: 2px; background: var(--gold); margin-top: 4px;
          transition: width 0.4s ease;
        }
        .h-svc-nav-btn.active .h-svc-nav-bar { width: 28px; }
        
        .h-svc-panel {
          border: 1px solid var(--gold-border); border-top: none;
          border-radius: 0 0 var(--radius) var(--radius);
          display: grid; grid-template-columns: 1fr 1fr; min-height: 480px;
        }
        .h-svc-left {
          padding: 56px 52px; border-right: 1px solid var(--gold-border);
        }
        .h-svc-icon {
          width: 52px; height: 52px; border: 1px solid var(--gold-border);
          border-radius: 10px; display: flex; align-items: center; justify-content: center;
          color: var(--gold); margin-bottom: 24px;
        }
        .h-svc-icon svg { width: 22px; height: 22px; }
        .h-svc-title {
          font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700;
          color: var(--smoke); margin: 0 0 6px; line-height: 1.2;
        }
        .h-svc-subtitle {
          font-size: 12px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 24px;
        }
        .h-svc-desc {
          font-size: 14.5px; color: var(--muted); line-height: 1.85; margin: 0 0 16px;
        }
        .h-svc-detail {
          font-size: 13.5px; color: rgba(255,255,255,0.38); line-height: 1.85; margin: 0;
        }
        .h-svc-right {
          padding: 56px 48px; background: var(--ink);
        }
        .h-svc-points-title {
          font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 24px;
        }
        .h-svc-points { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 14px; }
        .h-svc-point {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 13.5px; color: rgba(255,255,255,0.65); line-height: 1.55;
        }
        .h-svc-check {
          width: 18px; height: 18px; flex-shrink: 0; margin-top: 1px;
          border-radius: 50%; border: 1px solid var(--gold-border);
          display: flex; align-items: center; justify-content: center; color: var(--gold);
        }
        .h-svc-check svg { width: 9px; height: 9px; }

        /* ══ PATH — Process ══ */
        .h-process { padding: 120px 80px; background: var(--ink); position: relative; overflow: hidden; }
        .h-process-bg {
          position: absolute; left: 80px; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(to bottom, transparent, var(--gold-border) 15%, var(--gold-border) 85%, transparent);
          pointer-events: none;
        }
        /* SVG curved path behind steps */
        .h-process-svg {
          position: absolute; left: 0; top: 0; width: 100%; height: 100%;
          pointer-events: none; overflow: visible;
        }
        .h-process-inner { position: relative; z-index: 1; }
        .h-process-steps { display: flex; flex-direction: column; gap: 0; margin-top: 64px; }
        .h-pstep {
          display: grid; grid-template-columns: 120px 1fr;
          gap: 0; align-items: stretch;
          padding: 0; position: relative;
        }
        .h-pstep-left {
          display: flex; flex-direction: column; align-items: center; padding-top: 40px;
        }
        .h-pstep-node {
          width: 64px; height: 64px; border-radius: 50%;
          border: 1.5px solid var(--gold-border); background: var(--ink);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700;
          color: var(--gold); transition: all 0.35s; z-index: 2; position: relative;
        }
        .h-pstep:hover .h-pstep-node {
          background: var(--gold); color: var(--ink); border-color: var(--gold);
          box-shadow: 0 0 0 8px var(--gold-dim);
        }
        .h-pstep-connector {
          flex: 1; width: 1.5px; background: var(--gold-border); margin: 8px 0 0;
        }
        .h-pstep:last-child .h-pstep-connector { display: none; }
        .h-pstep-right {
          padding: 40px 0 56px 48px; border-bottom: 1px solid var(--hair);
        }
        .h-pstep:last-child .h-pstep-right { border-bottom: none; }
        .h-pstep-meta { display: flex; gap: 16px; margin-bottom: 14px; }
        .h-pstep-badge {
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--gold); background: var(--gold-dim); border: 1px solid var(--gold-border);
          padding: 3px 10px; border-radius: 2px;
        }
        .h-pstep-title {
          font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700;
          color: var(--smoke); margin: 0 0 14px; line-height: 1.2;
        }
        .h-pstep-desc {
          font-size: 14px; color: var(--muted); line-height: 1.85; margin: 0; max-width: 680px;
        }

        /* ══ WHY US ══ */
        .h-why { padding: 120px 80px; background: var(--ink2); }
        .h-why-header { max-width: 600px; margin-bottom: 64px; }
        .h-why-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 4vw, 52px); font-weight: 900; line-height: 1.05;
          margin: 12px 0 20px;
        }
        .h-why-h2 em { font-style: italic; color: var(--gold); }
        .h-why-lead { font-size: 14.5px; color: var(--muted); line-height: 1.82; }
        .h-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; border: 1px solid var(--gold-border); border-radius: var(--radius); overflow: hidden; }
        .h-why-card {
          background: var(--ink); padding: 44px 36px;
          border-right: 1px solid var(--gold-border); border-bottom: 1px solid var(--gold-border);
          transition: background 0.25s; position: relative;
        }
        .h-why-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--gold); transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .h-why-card:hover::before { transform: scaleX(1); }
        .h-why-card:hover { background: var(--ink3); }
        .h-why-num {
          font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 900;
          color: rgba(201,168,76,0.12); line-height: 1; margin-bottom: 20px;
          letter-spacing: -0.03em;
        }
        .h-why-title {
          font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700;
          color: var(--smoke); margin: 0 0 12px; line-height: 1.3;
        }
        .h-why-desc { font-size: 13px; color: var(--muted); line-height: 1.82; }

        /* ══ TESTIMONIALS ══ */
        .h-testi { padding: 120px 80px; background: var(--ink); }
        .h-testi-header { max-width: 600px; margin-bottom: 64px; }
        .h-testi-layout { display: grid; grid-template-columns: 280px 1fr; gap: 2px; }
        .h-testi-sidebar {
          display: flex; flex-direction: column; gap: 0;
          border: 1px solid var(--gold-border); border-radius: var(--radius) 0 0 var(--radius);
          overflow: hidden;
        }
        .h-testi-item {
          padding: 20px 22px; border-bottom: 1px solid var(--hair);
          cursor: pointer; transition: background 0.2s;
          border-left: 3px solid transparent;
        }
        .h-testi-item:last-child { border-bottom: none; }
        .h-testi-item.active { background: var(--gold-dim); border-left-color: var(--gold); }
        .h-testi-item:hover:not(.active) { background: rgba(255,255,255,0.02); }
        .h-testi-item-name { font-size: 13px; font-weight: 600; color: var(--smoke); margin-bottom: 3px; }
        .h-testi-item-short { font-size: 11px; color: var(--muted); line-height: 1.4; }
        .h-testi-panel {
          border: 1px solid var(--gold-border); border-left: none;
          border-radius: 0 var(--radius) var(--radius) 0;
          background: var(--ink2); padding: 56px 60px;
          display: flex; flex-direction: column;
        }
        .h-testi-quote-mark { color: var(--gold); opacity: 0.18; margin-bottom: 32px; }
        .h-testi-quote-mark svg { width: 40px; height: 30px; }
        .h-testi-text {
          font-family: 'Playfair Display', serif; font-size: clamp(14px, 1.5vw, 18px);
          font-style: italic; font-weight: 400; color: rgba(255,255,255,0.80);
          line-height: 1.9; margin: 0 0 44px; flex: 1;
        }
        .h-testi-footer { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; }
        .h-testi-name-row {}
        .h-testi-name { font-size: 15px; font-weight: 700; color: var(--smoke); margin-bottom: 5px; }
        .h-testi-meta { font-size: 12px; color: var(--muted); line-height: 1.5; }
        .h-testi-stars { display: flex; gap: 2px; margin-top: 8px; }
        .h-testi-stars svg { width: 11px; height: 11px; color: var(--gold); }
        .h-testi-badge {
          display: flex; align-items: center; gap: 10px;
          border: 1px solid var(--gold-border); background: var(--gold-dim);
          padding: 12px 16px; border-radius: 4px; flex-shrink: 0;
        }
        .h-testi-badge-logo {
          width: 34px; height: 34px; border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif; font-size: 9px; font-weight: 700;
          color: white;
        }
        .h-testi-badge-inst { font-size: 13px; font-weight: 600; color: var(--smoke); }
        .h-testi-badge-verified { font-size: 10px; color: var(--muted); margin-top: 2px; }
        .h-testi-dots { display: flex; gap: 6px; margin-top: 28px; }
        .h-testi-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--hair); cursor: pointer; transition: background 0.2s;
          border: 1px solid var(--gold-border);
        }
        .h-testi-dot.active { background: var(--gold); }

        /* ══ CTA ══ */
        .h-cta {
          padding: 140px 80px;
          background: var(--ink);
          border-top: 1px solid var(--gold-border);
          position: relative; overflow: hidden;
        }
        .h-cta::before {
          content: '';
          position: absolute; bottom: -200px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .h-cta-inner { position: relative; max-width: 760px; margin: 0 auto; text-align: center; }
        .h-cta-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 68px); font-weight: 900;
          line-height: 1.05; margin: 16px 0 22px;
        }
        .h-cta-h2 em { font-style: italic; color: var(--gold); }
        .h-cta-sub { font-size: 15px; color: var(--muted); line-height: 1.75; margin: 0 0 48px; }
        .h-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 72px; }
        .h-btn-primary {
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          background: var(--gold); color: var(--ink); border: none;
          padding: 16px 40px; border-radius: 4px; cursor: pointer;
          transition: background 0.2s, transform 0.15s; text-decoration: none; display: inline-block;
        }
        .h-btn-primary:hover { background: var(--gold2); transform: translateY(-2px); }
        .h-btn-outline {
          font-size: 11.5px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          background: transparent; color: var(--smoke);
          border: 1.5px solid rgba(255,255,255,0.2); padding: 15px 36px;
          border-radius: 4px; cursor: pointer;
          transition: border-color 0.2s, color 0.2s; text-decoration: none; display: inline-block;
        }
        .h-btn-outline:hover { border-color: var(--gold); color: var(--gold); }
        .h-contact-strip { display: flex; justify-content: center; gap: 56px; flex-wrap: wrap; padding-top: 48px; border-top: 1px solid var(--hair); }
        .h-contact-item { display: flex; align-items: center; gap: 14px; }
        .h-contact-icon {
          width: 40px; height: 40px; border: 1px solid var(--gold-border); border-radius: 8px;
          display: flex; align-items: center; justify-content: center; color: var(--gold); flex-shrink: 0;
        }
        .h-contact-icon svg { width: 15px; height: 15px; }
        .h-contact-label { font-size: 9px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--faint); margin-bottom: 4px; }
        .h-contact-val { font-size: 13.5px; font-weight: 500; color: var(--muted); }

        /* ── Divider ── */
        .h-rule { border: none; border-top: 1px solid var(--gold-border); margin: 0; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .h-about { padding: 80px 48px; }
          .h-about-grid { grid-template-columns: 1fr; gap: 60px; }
          .h-services, .h-process, .h-why, .h-testi, .h-cta { padding: 80px 40px; }
          .h-svc-panel { grid-template-columns: 1fr; }
          .h-svc-right { border-top: 1px solid var(--gold-border); }
          .h-why-grid { grid-template-columns: repeat(2,1fr); }
          .h-testi-layout { grid-template-columns: 1fr; }
          .h-testi-sidebar { border-radius: var(--radius); }
          .h-testi-panel { border-left: 1px solid var(--gold-border); border-radius: var(--radius); }
          .h-testi-footer { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 640px) {
          .h-about, .h-services, .h-process, .h-why, .h-testi, .h-cta { padding: 64px 24px; }
          .h-stats-grid { grid-template-columns: 1fr 1fr; }
          .h-why-grid { grid-template-columns: 1fr; }
          .h-svc-nav-btn { padding: 14px 10px; }
          .h-svc-nav-label { font-size: 10.5px; }
          .h-pstep { grid-template-columns: 80px 1fr; }
          .h-pstep-node { width: 48px; height: 48px; font-size: 14px; }
          .h-svc-left, .h-svc-right { padding: 36px 28px; }
          .h-contact-strip { gap: 28px; flex-direction: column; align-items: center; }
        }
      `),o.createElement("div",{className:"h"},o.createElement("div",{className:"h-strip"},o.createElement("div",{className:"h-strip-label"},"AP · TS"),o.createElement("div",{className:"h-strip-track"},[...Array(2)].map((l,s)=>nm.map((c,d)=>o.createElement("div",{key:`r-${s}-${d}`,className:"h-strip-item"},o.createElement("div",{className:"h-strip-logo"},o.createElement("img",{src:c.image,alt:c.name,onError:g=>{g.target.style.display="none",g.target.nextSibling.style.display="flex"}}),o.createElement("span",{className:"h-strip-logo-text",style:{display:"none"}},c.short)),o.createElement("span",{className:"h-strip-name"},c.name),o.createElement("span",{className:"h-strip-state"},c.state)))))),o.createElement("div",{className:"h-strip",style:{borderTop:"1px solid var(--gold-border)"}},o.createElement("div",{className:"h-strip-label",style:{color:"var(--faint)"}},"National"),o.createElement("div",{className:"h-strip-track",style:{animationDirection:"reverse",animationDuration:"30s"}},[...Array(2)].map((l,s)=>rm.map((c,d)=>o.createElement("div",{key:`n-${s}-${d}`,className:"h-strip-item"},o.createElement("div",{className:"h-strip-logo",style:{background:c.color+"22",border:`1px solid ${c.color}44`}},o.createElement("span",{className:"h-strip-logo-text",style:{color:c.color,display:"flex"}},c.short)),o.createElement("span",{className:"h-strip-name"},c.name)))))),o.createElement("section",{className:"h-about"},o.createElement(Fe,null,o.createElement("div",{className:"h-about-grid"},o.createElement("div",{className:"h-about-left"},o.createElement("div",{className:"h-about-eyebrow"},o.createElement("div",{className:"h-tag"},o.createElement("div",{className:"h-tag-line"})," About Maharsh Edutech ",o.createElement("div",{className:"h-tag-line"}))),o.createElement("h2",{className:"h-about-h2"},"Andhra Pradesh & Telangana's Most ",o.createElement("em",null,"Trusted")," Education Partner"),o.createElement("p",{className:"h-about-body"},"Maharsh Edutech was founded with a single conviction: that every student in India deserves access to the same quality of education guidance that was previously available only to those with the right connections or the financial means to afford expensive overseas consultants. We are an Andhra Pradesh and Telangana-rooted firm that has grown into a national presence — because the quality of our advice, and the honesty of our model, speaks through the outcomes of our students."),o.createElement("p",{className:"h-about-body"},"Over twelve years, we have guided more than 5,000 students through every major educational transition — from Class 10 stream selection to postgraduate admissions in India and across 18 countries. Our team of 40 certified counselors, application specialists, financial advisors, and visa experts operates as a single integrated unit, collectively accountable for every student's outcome."),o.createElement("p",{className:"h-about-body"},"We do not earn commissions from colleges. We do not receive referral payments from lenders. We do not employ freshers to deliver generic advice from a script. Maharsh Edutech earns its reputation entirely through the quality of the decisions our students make — and the futures those decisions build."),o.createElement("div",{className:"h-about-quote"},o.createElement("p",{className:"h-about-quote-text"},'"We built Maharsh Edutech because we saw too many brilliant students make consequential decisions with the wrong information. We wanted to change that — one student at a time."'),o.createElement("div",{className:"h-about-quote-attr"},"— Founder, Maharsh Edutech · Hyderabad"))),o.createElement("div",{className:"h-about-right"},o.createElement("div",{className:"h-stats-grid"},im.map((l,s)=>o.createElement("div",{key:s,className:"h-stat-box"},o.createElement("div",{className:"h-stat-num"},l.num),o.createElement("div",{className:"h-stat-label"},l.label)))))))),o.createElement("hr",{className:"h-rule"}),o.createElement("section",{className:"h-services"},o.createElement(Fe,null,o.createElement("div",{className:"h-tag"},o.createElement("div",{className:"h-tag-line"})," What We Do"),o.createElement("h2",{style:{fontFamily:"Playfair Display, serif",fontSize:"clamp(32px,4vw,52px)",fontWeight:900,lineHeight:1.05,margin:"14px 0 16px",color:"var(--smoke)"}},"Four Pillars of ",o.createElement("em",{style:{fontStyle:"italic",color:"var(--gold)"}},"Complete Support")),o.createElement("p",{style:{fontSize:"14.5px",color:"var(--muted)",lineHeight:1.82,maxWidth:560,margin:0}},"Every service we offer is designed to address one specific dimension of the complex, multi-stage process of building an educational career. Together, they form a seamless system of support.")),o.createElement(Fe,{delay:120},o.createElement("div",{className:"h-services-nav"},nt.map((l,s)=>o.createElement("button",{key:s,className:`h-svc-nav-btn${n===s?" active":""}`,onClick:()=>r(s)},o.createElement("div",{className:"h-svc-nav-num"},l.num),o.createElement("div",{className:"h-svc-nav-label"},l.title),o.createElement("div",{className:"h-svc-nav-bar"})))),o.createElement("div",{className:"h-svc-panel"},o.createElement("div",{className:"h-svc-left",style:{background:"var(--ink2)"}},o.createElement("div",{className:"h-svc-icon"},tt[nt[n].icon]&&o.createElement(tt[nt[n].icon])),o.createElement("div",{className:"h-svc-subtitle"},nt[n].subtitle),o.createElement("div",{className:"h-svc-title"},nt[n].title),o.createElement("p",{className:"h-svc-desc"},nt[n].desc),o.createElement("p",{className:"h-svc-detail"},nt[n].detail)),o.createElement("div",{className:"h-svc-right"},o.createElement("div",{className:"h-svc-points-title"},"What's Included"),o.createElement("ul",{className:"h-svc-points"},nt[n].points.map((l,s)=>o.createElement("li",{key:s,className:"h-svc-point"},o.createElement("div",{className:"h-svc-check"},o.createElement(tt.Check,null)),l))))))),o.createElement("hr",{className:"h-rule"}),o.createElement("section",{className:"h-process"},o.createElement(Fe,null,o.createElement("div",{className:"h-tag"},o.createElement("div",{className:"h-tag-line"})," How It Works"),o.createElement("h2",{style:{fontFamily:"Playfair Display, serif",fontSize:"clamp(32px,4vw,52px)",fontWeight:900,lineHeight:1.05,margin:"14px 0 16px",color:"var(--smoke)"}},"Your Path, ",o.createElement("em",{style:{fontStyle:"italic",color:"var(--gold)"}},"Step by Step")),o.createElement("p",{style:{fontSize:"14.5px",color:"var(--muted)",lineHeight:1.82,maxWidth:580,margin:0}},"We have designed a six-stage process that provides complete clarity, eliminates guesswork, and ensures no critical decision is made without expert input. Each stage builds on the last — creating a structured journey from first conversation to first day of college.")),o.createElement(Fe,{delay:100},o.createElement("div",{className:"h-process-inner"},o.createElement("div",{className:"h-process-steps"},am.map((l,s)=>o.createElement("div",{key:s,className:"h-pstep"},o.createElement("div",{className:"h-pstep-left"},o.createElement("div",{className:"h-pstep-node"},l.num),o.createElement("div",{className:"h-pstep-connector"})),o.createElement("div",{className:"h-pstep-right"},o.createElement("div",{className:"h-pstep-meta"},o.createElement("span",{className:"h-pstep-badge"},l.mode),o.createElement("span",{className:"h-pstep-badge",style:{background:"transparent",color:"var(--faint)",borderColor:"var(--hair)"}},l.duration)),o.createElement("div",{className:"h-pstep-title"},l.title),o.createElement("p",{className:"h-pstep-desc"},l.desc)))))))),o.createElement("hr",{className:"h-rule"}),o.createElement("section",{className:"h-why"},o.createElement(Fe,null,o.createElement("div",{className:"h-why-header"},o.createElement("div",{className:"h-tag"},o.createElement("div",{className:"h-tag-line"})," Why Maharsh Edutech"),o.createElement("h2",{className:"h-why-h2"},"Built on ",o.createElement("em",null,"Integrity."),o.createElement("br",null),"Delivered with Expertise."),o.createElement("p",{className:"h-why-lead"},"The education consulting industry is crowded with advisors who earn commissions from colleges, offer generic advice recycled from brochures, and vanish after enrollment is confirmed. Maharsh Edutech was built to be the structural opposite of that — in every dimension of how we operate."))),o.createElement(Fe,{delay:100},o.createElement("div",{className:"h-why-grid"},om.map((l,s)=>o.createElement("div",{key:s,className:"h-why-card"},o.createElement("div",{className:"h-why-num"},l.num),o.createElement("div",{className:"h-why-title"},l.title),o.createElement("p",{className:"h-why-desc"},l.desc)))))),o.createElement("hr",{className:"h-rule"}),o.createElement("section",{className:"h-testi"},o.createElement(Fe,null,o.createElement("div",{className:"h-testi-header"},o.createElement("div",{className:"h-tag"},o.createElement("div",{className:"h-tag-line"})," Student Stories"),o.createElement("h2",{style:{fontFamily:"Playfair Display, serif",fontSize:"clamp(32px,4vw,52px)",fontWeight:900,lineHeight:1.05,margin:"14px 0 16px",color:"var(--smoke)"}},"5,000+ Students.",o.createElement("br",null),o.createElement("em",{style:{fontStyle:"italic",color:"var(--gold)"}},"One Consistent Result.")),o.createElement("p",{style:{fontSize:"14.5px",color:"var(--muted)",lineHeight:1.82,margin:0}},"These are unedited accounts from students we have guided across engineering, medicine, management, law, and international programs. Every word is their own."))),o.createElement(Fe,{delay:100},o.createElement("div",{className:"h-testi-layout"},o.createElement("div",{className:"h-testi-sidebar"},Le.map((l,s)=>o.createElement("div",{key:s,className:`h-testi-item${e===s?" active":""}`,onClick:()=>i(s)},o.createElement("div",{className:"h-testi-item-name"},l.name),o.createElement("div",{className:"h-testi-item-short"},l.short)))),o.createElement("div",{className:"h-testi-panel"},o.createElement("div",{className:"h-testi-quote-mark"},o.createElement(tt.Quote,null)),o.createElement("p",{className:"h-testi-text"},Le[e].text),o.createElement("div",{className:"h-testi-footer"},o.createElement("div",{className:"h-testi-name-row"},o.createElement("div",{className:"h-testi-name"},Le[e].name),o.createElement("div",{className:"h-testi-meta"},Le[e].program,o.createElement("br",null),Le[e].location),o.createElement("div",{className:"h-testi-stars"},Array(Le[e].rating).fill(null).map((l,s)=>o.createElement(tt.Star,{key:s})))),o.createElement("div",{className:"h-testi-badge"},o.createElement("div",{className:"h-testi-badge-logo",style:{background:Le[e].instColor}},Le[e].instAbbr),o.createElement("div",null,o.createElement("div",{className:"h-testi-badge-inst"},Le[e].institution),o.createElement("div",{className:"h-testi-badge-verified"},"Verified Admission")))),o.createElement("div",{className:"h-testi-dots"},Le.map((l,s)=>o.createElement("div",{key:s,className:`h-testi-dot${e===s?" active":""}`,onClick:()=>i(s)}))))))),o.createElement("section",{className:"h-cta"},o.createElement(Fe,null,o.createElement("div",{className:"h-cta-inner"},o.createElement("div",{className:"h-tag",style:{justifyContent:"center"}},o.createElement("div",{className:"h-tag-line"})," Take the First Step ",o.createElement("div",{className:"h-tag-line"})),o.createElement("h2",{className:"h-cta-h2"},"Your Career Path Begins",o.createElement("br",null),"with ",o.createElement("em",null,"One Conversation")),o.createElement("p",{className:"h-cta-sub"},"Book a complimentary 30-minute session with a certified counselor. There is no sales pitch, no pressure, and no obligation. Just an honest, informed conversation about your future — and what it takes to get there."),o.createElement("div",{className:"h-cta-btns"},o.createElement("a",{href:"/counseling",className:"h-btn-primary"},"Book Free Counseling"),o.createElement("a",{href:"/services",className:"h-btn-outline"},"Explore All Services")),o.createElement("div",{className:"h-contact-strip"},o.createElement("div",{className:"h-contact-item"},o.createElement("div",{className:"h-contact-icon"},o.createElement(tt.Phone,null)),o.createElement("div",null,o.createElement("div",{className:"h-contact-label"},"Call Us"),o.createElement("div",{className:"h-contact-val"},"+91 7337267648"))),o.createElement("div",{className:"h-contact-item"},o.createElement("div",{className:"h-contact-icon"},o.createElement(tt.Mail,null)),o.createElement("div",null,o.createElement("div",{className:"h-contact-label"},"Email"),o.createElement("div",{className:"h-contact-val"},"maharshedutech@gmail.com"))),o.createElement("div",{className:"h-contact-item"},o.createElement("div",{className:"h-contact-icon"},o.createElement(tt.MapPin,null)),o.createElement("div",null,o.createElement("div",{className:"h-contact-label"},"Office"),o.createElement("div",{className:"h-contact-val"},"Hyderabad, Telangana")))))))))}function sm(e=.08){const t=C.useRef(null),[n,r]=C.useState(!1);return C.useEffect(()=>{const a=t.current;if(!a)return;const i=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),i.disconnect())},{threshold:e});return i.observe(a),()=>i.disconnect()},[]),[t,n]}function be({children:e,delay:t=0,className:n="",style:r={}}){const[a,i]=sm();return o.createElement("div",{ref:a,className:n,style:{opacity:i?1:0,transform:i?"translateY(0)":"translateY(44px)",transition:`opacity 0.9s cubic-bezier(.22,1,.36,1) ${t}ms, transform 0.9s cubic-bezier(.22,1,.36,1) ${t}ms`,...r}},e)}const cm=[{num:"01",title:"Career Counseling & Guidance",caption:"Clarity before commitment",body:["Before a student can choose the right institution, they must understand themselves — their aptitudes, values, learning style, and long-term ambitions. This is where the Maharsh Edutech process begins. Career counseling is not an advisory formality. It is the intellectual core of everything we do.","Our certified counselors conduct psychometric assessments validated against industry employment data, measure aptitude across verbal, logical, numerical, and spatial domains, and evaluate personality dimensions through structured frameworks. The output is a written career report — 20 to 30 pages — that maps the student's profile against real-world career trajectories, salary benchmarks, and growth projections across multiple sectors.","We work with students from Class 10 onwards, helping them navigate stream selection, entrance exam strategy, and the longer-arc question of what profession they are genuinely building towards. Sessions are conducted in Telugu, Tamil, Hindi, Malayalam, Kannada, and Marathi, so every student receives guidance in the language they think most clearly in."],metrics:[{val:"90 min",label:"Deep-dive sessions"},{val:"6",label:"Regional languages"},{val:"3",label:"Pathway projections per student"}]},{num:"02",title:"Application Support",caption:"Every word, every document, every deadline",body:["An exceptional application does not describe a student's academic record — it communicates their intellectual character, their specific ambitions, and the precise reasons why they belong at a particular institution. The difference between a shortlisted and rejected application is often not grades or test scores. It is the quality of the narrative.","Our application support team includes specialists with direct experience of what Indian and international admissions committees evaluate. We draft and refine Statements of Purpose through four rounds of expert review — substantive challenges to framing, specificity, and authenticity. We build Letter of Recommendation strategies that brief referees on what to emphasise. We coach students through personal essays, supplemental materials, and institution-specific questions.","For every application in a student's shortlist, we align the materials to that institution's stated values and evaluation rubrics. We handle document verification, authentication, and submission. We track deadlines across all institutions simultaneously and ensure nothing is missed."],metrics:[{val:"4×",label:"SOP review rounds"},{val:"250+",label:"Partner institutions"},{val:"100%",label:"Deadline compliance"}]},{num:"03",title:"End-to-End Admissions — India & Abroad",caption:"From shortlist to enrollment, we own every step",body:["The admission process in India is one of the most operationally complex in the world. JEE, NEET, CLAT, NIFT, NATA, CAT, and state-level counseling processes each operate on different calendars, quota structures, and choice-filling logic. A student navigating all of this alone — while managing exam preparation — is at a structural disadvantage. We eliminate that disadvantage entirely.","For Indian admissions, our counseling teams are present during every critical round — JOSAA, MCC, DASA, state quota rounds, and management quota processes. We maintain real-time access to seat availability data, historical cutoff trends disaggregated by category and state, and institutional scholarship information. Our choice-filling strategies are data-driven, risk-adjusted, and built around the specific student's rank, category, and goals.","For international admissions, our specialist teams have placed students in universities across 18 countries including the USA, UK, Canada, Australia, Germany, Singapore, Ireland, Netherlands, UAE, and New Zealand. We coordinate university shortlisting, application submission, financial documentation, visa interviews, pre-departure orientation, and post-arrival community connection."],metrics:[{val:"18",label:"Countries for abroad"},{val:"250+",label:"Indian partner institutions"},{val:"98%",label:"Top-3 admission rate"}]},{num:"04",title:"Education Loan Assistance",caption:"The right funding, on the right terms",body:["The financial dimension of higher education is among the most consequential and least well-understood aspects of the process. Many families make loan decisions under time pressure, without adequate comparative information, and without understanding the long-term implications of interest structures, moratorium terms, or collateral requirements.","Our financial advisors assess each family's eligibility profile, the institution's existing lender relationships, and the student's likely post-graduation income trajectory. We then build a comprehensive funding plan combining scholarships, institutional fee waivers, and loan structures across 14 banking and NBFC partners — all selected for that specific student's situation. We do not receive referral commissions from any lender.","Before any loan agreement is signed, our advisors conduct a detailed EMI and repayment counseling session — including the Section 80E income tax benefit available on education loan interest — so families make their decision with complete information."],metrics:[{val:"14",label:"Lending partners"},{val:"₹0",label:"Commission from lenders"},{val:"80E",label:"Tax benefit advisory included"}]}],um=[{letter:"A",title:"Independence",desc:"We accept no commission, referral fee, or incentive payment from any institution, lender, or third party. Our revenue comes entirely from our clients. This structural independence is the foundation of every honest recommendation we make."},{letter:"B",title:"Accountability",desc:"The same senior counselor who conducts your discovery session owns your file through enrollment. We do not hand students off to junior executives at critical moments. Accountability is personal, named, and tracked."},{letter:"C",title:"Evidence",desc:"Every recommendation is grounded in data — placement statistics, admission cutoff trends, salary benchmarks, and alumni outcome tracking, updated annually. We do not advise from intuition or institutional reputation alone."},{letter:"D",title:"Continuity",desc:"Our relationship with students does not end at enrollment. We conduct semester check-in calls, provide mentorship through internship and placement season, and track long-term outcomes. A student who comes to us at 16 may still be in contact with their counselor at 26."}],hs=[{val:"12+",sub:"Years in Operation"},{val:"5,000+",sub:"Students Guided"},{val:"250+",sub:"Partner Institutions"},{val:"18",sub:"Countries"},{val:"98%",sub:"Top-3 Success Rate"},{val:"40+",sub:"Certified Counselors"}],dm=[{title:"A named counselor from day one to enrollment",desc:"You will never be handed off. The same senior counselor who conducts your first session owns your file through every stage of the process."},{title:"Advice that is never influenced by commission",desc:"We earn nothing from colleges, lenders, or third parties. Every recommendation exists solely because it serves your interest."},{title:"Written documentation of every recommendation",desc:"Every career pathway recommendation, college shortlist, and financial plan is provided in writing — so you can review, question, and refer back to it."},{title:"Real-time availability during critical windows",desc:"During JEE, NEET, state counseling rounds, and visa application deadlines, a senior counselor is reachable — not a chatbot, not a junior executive."},{title:"Post-enrollment support through your first year",desc:"Semester check-in calls, mentorship connections, and ongoing career guidance continue well beyond the day you receive your admission letter."},{title:"Transparent outcome data upon request",desc:"We publish our admission outcome statistics annually and share historical placement data for any institution or program you are considering."}];function pm(){const[e,t]=C.useState(null);return o.createElement(o.Fragment,null,o.createElement("style",null,`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Syne:wght@400;500;600;700;800&display=swap');

        :root {
          --g: #C6A84B;
          --g2: #DFC06E;
          --gdim: rgba(198,168,75,0.09);
          --gborder: rgba(198,168,75,0.18);
          --ink: #080808;
          --ink2: #101010;
          --ink3: #181818;
          --smoke: rgba(255,255,255,0.88);
          --muted: rgba(255,255,255,0.48);
          --faint: rgba(255,255,255,0.22);
          --hair: rgba(255,255,255,0.06);
        }

        .ab * { box-sizing: border-box; }
        .ab { font-family: 'Syne', sans-serif; background: var(--ink); color: var(--smoke); line-height: 1; }

        .ab-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 9.5px; font-weight: 700; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--g);
        }
        .ab-tag-line { height: 1px; width: 28px; background: var(--g); flex-shrink: 0; }

        /* ── HERO ── */
        .ab-hero {
          min-height: 92vh; display: grid; grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--gborder); position: relative; overflow: hidden;
        }
        .ab-hero-left {
          padding: 100px 80px; display: flex; flex-direction: column; justify-content: flex-end;
          border-right: 1px solid var(--gborder); position: relative; z-index: 1;
        }
        .ab-hero-right {
          display: flex; flex-direction: column; justify-content: space-between;
          padding: 100px 72px; position: relative; background: var(--ink2);
        }
        .ab-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 80% 40%, rgba(198,168,75,0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        .ab-hero-h1 {
          font-family: 'Cormorant', Georgia, serif;
          font-size: clamp(52px, 7vw, 96px); font-weight: 700;
          line-height: 0.95; margin: 28px 0 36px; letter-spacing: -0.01em;
        }
        .ab-hero-h1 em { font-style: italic; color: var(--g); }
        .ab-hero-lead { font-size: 15px; color: var(--muted); line-height: 1.82; max-width: 480px; margin: 0; }

        .ab-manifesto {
          border-left: 2px solid var(--g); padding: 28px 32px; background: var(--gdim);
        }
        .ab-manifesto-text {
          font-family: 'Cormorant', serif; font-size: 21px; font-style: italic;
          color: var(--smoke); line-height: 1.65; margin: 0;
        }
        .ab-hero-stats { display: flex; flex-direction: column; gap: 0; }
        .ab-hero-stat {
          display: flex; align-items: baseline; gap: 16px; padding: 20px 0;
          border-bottom: 1px solid var(--hair);
        }
        .ab-hero-stat:last-child { border-bottom: none; }
        .ab-hero-stat-val {
          font-family: 'Cormorant', serif; font-size: 36px; font-weight: 700;
          color: var(--g); line-height: 1; flex-shrink: 0; min-width: 80px;
        }
        .ab-hero-stat-label { font-size: 12px; color: var(--muted); }

        /* ── ORIGIN ── */
        .ab-origin {
          padding: 120px 80px; background: var(--ink2);
          display: grid; grid-template-columns: 300px 1fr; gap: 100px;
          border-bottom: 1px solid var(--gborder);
        }
        .ab-origin-h2 {
          font-family: 'Cormorant', serif; font-size: clamp(34px, 3.5vw, 52px);
          font-weight: 700; line-height: 1.08; margin: 14px 0 0;
        }
        .ab-origin-h2 em { font-style: italic; color: var(--g); }
        .ab-origin-paras { display: flex; flex-direction: column; gap: 22px; }
        .ab-origin-para { font-size: 15px; color: var(--muted); line-height: 1.88; margin: 0; }
        .ab-origin-para strong { color: var(--smoke); font-weight: 600; }

        /* ── PILLARS ACCORDION ── */
        .ab-pillars { background: var(--ink); border-bottom: 1px solid var(--gborder); }
        .ab-pillars-header { padding: 100px 80px 0; }
        .ab-pillars-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(32px, 4vw, 54px); font-weight: 700; line-height: 1.05; margin: 14px 0 0;
        }
        .ab-pillars-h2 em { font-style: italic; color: var(--g); }

        .ab-accordion { margin-top: 64px; border-top: 1px solid var(--gborder); }
        .ab-acc-row { border-bottom: 1px solid var(--gborder); overflow: hidden; }
        .ab-acc-trigger {
          width: 100%; padding: 0 80px;
          display: grid; grid-template-columns: 72px 1fr 44px;
          align-items: center; gap: 32px;
          cursor: pointer; background: none; border: none; text-align: left;
          transition: background 0.25s; min-height: 90px;
        }
        .ab-acc-trigger:hover { background: rgba(255,255,255,0.015); }
        .ab-acc-row.open .ab-acc-trigger { background: var(--gdim); }
        .ab-acc-num {
          font-family: 'Cormorant', serif; font-size: 13px; font-weight: 700;
          color: var(--g); letter-spacing: 0.06em;
        }
        .ab-acc-title-wrap {}
        .ab-acc-title {
          font-family: 'Cormorant', serif; font-size: 24px; font-weight: 700;
          color: var(--smoke); line-height: 1.2; margin-bottom: 3px;
        }
        .ab-acc-caption {
          font-size: 10.5px; color: var(--muted); letter-spacing: 0.12em; text-transform: uppercase;
        }
        .ab-acc-icon {
          width: 40px; height: 40px; border: 1px solid var(--gborder); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: all 0.3s;
        }
        .ab-acc-row.open .ab-acc-icon { background: var(--g); border-color: var(--g); transform: rotate(45deg); }
        .ab-acc-icon svg { width: 14px; height: 14px; color: var(--g); }
        .ab-acc-row.open .ab-acc-icon svg { color: var(--ink); }

        .ab-acc-body { max-height: 0; overflow: hidden; transition: max-height 0.65s cubic-bezier(.22,1,.36,1); }
        .ab-acc-row.open .ab-acc-body { max-height: 1400px; }
        .ab-acc-inner {
          padding: 0 80px 64px;
          display: grid; grid-template-columns: 1fr 260px; gap: 80px;
        }
        .ab-acc-paras { display: flex; flex-direction: column; gap: 20px; }
        .ab-acc-para { font-size: 14.5px; color: var(--muted); line-height: 1.88; margin: 0; }
        .ab-acc-para:first-child { color: rgba(255,255,255,0.70); font-size: 15.5px; }
        .ab-metrics { display: flex; flex-direction: column; gap: 1px; align-self: start; }
        .ab-metric {
          border: 1px solid var(--gborder); background: var(--ink2);
          padding: 22px 24px; border-bottom: none;
        }
        .ab-metric:first-child { border-radius: 3px 3px 0 0; }
        .ab-metric:last-child { border-bottom: 1px solid var(--gborder); border-radius: 0 0 3px 3px; }
        .ab-metric-val {
          font-family: 'Cormorant', serif; font-size: 32px; font-weight: 700;
          color: var(--g); line-height: 1; margin-bottom: 6px;
        }
        .ab-metric-label { font-size: 11px; color: var(--muted); }

        /* ── VALUES ── */
        .ab-values { padding: 120px 80px; background: var(--ink2); border-bottom: 1px solid var(--gborder); }
        .ab-values-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(30px,3.5vw,50px); font-weight: 700; line-height:1.05; margin: 14px 0 56px;
        }
        .ab-values-h2 em { font-style: italic; color: var(--g); }
        .ab-values-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
          border: 1px solid var(--gborder); border-radius: 3px; overflow: hidden;
        }
        .ab-value-card {
          background: var(--ink); padding: 44px 32px;
          border-right: 1px solid var(--gborder);
          position: relative; transition: background 0.25s;
        }
        .ab-value-card:hover { background: var(--ink3); }
        .ab-value-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: var(--g); transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .ab-value-card:hover::after { transform: scaleX(1); }
        .ab-value-glyph {
          font-family: 'Cormorant', serif; font-size: 72px; font-weight: 700;
          color: rgba(198,168,75,0.08); line-height: 1; margin-bottom: 20px;
          letter-spacing: -0.04em;
        }
        .ab-value-title {
          font-family: 'Cormorant', serif; font-size: 22px; font-weight: 700;
          color: var(--smoke); margin: 0 0 12px;
        }
        .ab-value-desc { font-size: 13px; color: var(--muted); line-height: 1.82; }

        /* ── COMMITMENT ── */
        .ab-commit {
          padding: 120px 80px; background: var(--ink);
          display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: start;
          border-bottom: 1px solid var(--gborder);
        }
        .ab-commit-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(34px,4vw,56px); font-weight: 700; line-height:1.06; margin:14px 0 24px;
        }
        .ab-commit-h2 em { font-style: italic; color: var(--g); }
        .ab-commit-body { font-size: 14.5px; color: var(--muted); line-height: 1.88; }
        .ab-commit-items { display: flex; flex-direction: column; gap: 1px; }
        .ab-commit-item {
          background: var(--ink2); border: 1px solid var(--gborder); border-bottom: none;
          padding: 22px 26px; display: flex; align-items: flex-start; gap: 18px;
          transition: background 0.2s;
        }
        .ab-commit-item:first-child { border-radius: 3px 3px 0 0; }
        .ab-commit-item:last-child { border-bottom: 1px solid var(--gborder); border-radius: 0 0 3px 3px; }
        .ab-commit-item:hover { background: var(--ink3); }
        .ab-commit-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--g); flex-shrink: 0; margin-top: 7px; }
        .ab-commit-item-title { font-size: 13.5px; font-weight: 600; color: var(--smoke); margin-bottom: 4px; }
        .ab-commit-item-desc { font-size: 12px; color: var(--muted); line-height: 1.72; }

        /* ── STATS STRIP ── */
        .ab-stats-strip {
          background: var(--ink2); border-top: 1px solid var(--gborder);
          display: grid; grid-template-columns: repeat(6,1fr);
        }
        .ab-stat-cell {
          padding: 44px 28px; border-right: 1px solid var(--gborder);
          text-align: center; transition: background 0.2s; position: relative;
        }
        .ab-stat-cell:last-child { border-right: none; }
        .ab-stat-cell::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--g); transform: scaleX(0); transition: transform 0.35s ease;
        }
        .ab-stat-cell:hover::after { transform: scaleX(1); }
        .ab-stat-cell:hover { background: var(--ink3); }
        .ab-stat-val {
          font-family: 'Cormorant', serif; font-size: 38px; font-weight: 700;
          color: var(--g); line-height: 1; margin-bottom: 8px;
        }
        .ab-stat-sub { font-size: 11px; color: var(--muted); line-height: 1.45; }

        /* ── CTA ── */
        .ab-cta {
          padding: 120px 80px; background: var(--ink); text-align: center; position: relative; overflow: hidden;
        }
        .ab-cta::before {
          content: ''; position: absolute; bottom: -160px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse, rgba(198,168,75,0.07) 0%, transparent 68%);
          pointer-events: none;
        }
        .ab-cta-inner { position: relative; max-width: 680px; margin: 0 auto; }
        .ab-cta-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(36px, 5vw, 64px); font-weight: 700; line-height: 1.06; margin: 14px 0 20px;
        }
        .ab-cta-h2 em { font-style: italic; color: var(--g); }
        .ab-cta-sub { font-size: 14.5px; color: var(--muted); line-height: 1.78; margin: 0 0 40px; }
        .ab-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .ab-btn-primary {
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          background: var(--g); color: var(--ink); border: none;
          padding: 16px 40px; border-radius: 4px; cursor: pointer;
          transition: background 0.2s, transform 0.15s; text-decoration: none; display: inline-block;
        }
        .ab-btn-primary:hover { background: var(--g2); transform: translateY(-2px); }
        .ab-btn-outline {
          font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          background: transparent; color: var(--smoke);
          border: 1.5px solid rgba(255,255,255,0.18); padding: 15px 36px;
          border-radius: 4px; cursor: pointer;
          transition: border-color 0.2s, color 0.2s; text-decoration: none; display: inline-block;
        }
        .ab-btn-outline:hover { border-color: var(--g); color: var(--g); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .ab-hero { grid-template-columns: 1fr; min-height: auto; }
          .ab-hero-left { padding: 80px 48px 56px; border-right: none; border-bottom: 1px solid var(--gborder); }
          .ab-hero-right { padding: 56px 48px 80px; }
          .ab-origin { grid-template-columns: 1fr; gap: 48px; padding: 80px 48px; }
          .ab-pillars-header { padding: 80px 48px 0; }
          .ab-acc-trigger { padding: 0 40px; grid-template-columns: 56px 1fr 40px; gap: 20px; }
          .ab-acc-inner { padding: 0 40px 48px; grid-template-columns: 1fr; gap: 36px; }
          .ab-metrics { flex-direction: row; flex-wrap: wrap; gap: 8px; }
          .ab-metric { flex: 1; min-width: 110px; border-radius: 3px !important; border-bottom: 1px solid var(--gborder) !important; }
          .ab-values { padding: 80px 40px; }
          .ab-values-grid { grid-template-columns: 1fr 1fr; }
          .ab-commit { grid-template-columns: 1fr; gap: 48px; padding: 80px 48px; }
          .ab-stats-strip { grid-template-columns: repeat(3,1fr); }
          .ab-stat-cell:nth-child(3n) { border-right: none; }
          .ab-stat-cell { border-bottom: 1px solid var(--gborder); }
          .ab-cta { padding: 80px 40px; }
        }
        @media (max-width: 640px) {
          .ab-hero-left, .ab-hero-right { padding: 60px 28px; }
          .ab-origin { padding: 64px 28px; }
          .ab-pillars-header { padding: 64px 28px 0; }
          .ab-acc-trigger { padding: 0 24px; min-height: 72px; gap: 14px; }
          .ab-acc-inner { padding: 0 24px 40px; }
          .ab-values { padding: 64px 24px; }
          .ab-values-grid { grid-template-columns: 1fr; }
          .ab-commit { padding: 64px 28px; }
          .ab-stats-strip { grid-template-columns: 1fr 1fr; }
          .ab-stat-cell:nth-child(3n) { border-right: 1px solid var(--gborder); }
          .ab-stat-cell:nth-child(2n) { border-right: none; }
          .ab-cta { padding: 64px 28px; }
        }
      `),o.createElement("div",{className:"ab"},o.createElement("section",{className:"ab-hero"},o.createElement("div",{className:"ab-hero-left"},o.createElement(be,null,o.createElement("div",{className:"ab-tag"},o.createElement("div",{className:"ab-tag-line"}),"About Maharsh Edutech"),o.createElement("h1",{className:"ab-hero-h1"},"We Guide",o.createElement("br",null),o.createElement("em",null,"Futures."),o.createElement("br",null),"Not Admissions."),o.createElement("p",{className:"ab-hero-lead"},"Maharsh Edutech is an Andhra Pradesh and Telangana-rooted education counseling firm that has spent twelve years doing one thing: helping students make the most consequential decisions of their early lives with complete clarity, expert guidance, and unwavering integrity. We are not a placement agency. We are a counseling firm — and that distinction defines everything about how we operate."))),o.createElement("div",{className:"ab-hero-right"},o.createElement("div",{className:"ab-hero-bg"}),o.createElement(be,{delay:120},o.createElement("div",{className:"ab-manifesto"},o.createElement("p",{className:"ab-manifesto-text"},'"The education consulting industry in India is full of people who earn money when a student enrolls in a particular college. We earn money only when a student chooses us — and we work to deserve that choice every single time."'))),o.createElement(be,{delay:200},o.createElement("div",{className:"ab-hero-stats"},hs.map((n,r)=>o.createElement("div",{key:r,className:"ab-hero-stat"},o.createElement("div",{className:"ab-hero-stat-val"},n.val),o.createElement("div",{className:"ab-hero-stat-label"},n.sub))))))),o.createElement("section",{className:"ab-origin"},o.createElement(be,null,o.createElement("div",{className:"ab-tag"},o.createElement("div",{className:"ab-tag-line"}),"Our Origin"),o.createElement("h2",{className:"ab-origin-h2"},"Built in",o.createElement("br",null),"Hyderabad.",o.createElement("br",null),o.createElement("em",null,"Trusted"),o.createElement("br",null),"Nationally.")),o.createElement(be,{delay:100},o.createElement("div",{className:"ab-origin-paras"},o.createElement("p",{className:"ab-origin-para"},"Maharsh Edutech was established in Hyderabad with a specific observation: that the quality of education guidance a student receives is overwhelmingly determined by their socioeconomic position, their family's professional network, and their proximity to large urban centres — none of which have any bearing on a student's intelligence, ambition, or potential."),o.createElement("p",{className:"ab-origin-para"},"A student in Vijayawada weighing NEET counseling options, a student in Warangal considering whether to pursue engineering or commerce, a student in Guntur applying to universities in the United Kingdom — each deserves access to the same quality of guidance that affluent families in metropolitan India can purchase from expensive private consultants. That conviction is what Maharsh Edutech was built to act on."),o.createElement("p",{className:"ab-origin-para"},o.createElement("strong",null,"Over twelve years, we have built a team of 40 certified counselors, application specialists, financial advisors, and visa experts")," who operate as an integrated unit — not a collection of siloed departments. Every student file is owned by a named counselor who is accountable for the outcome. Every recommendation is grounded in data. Every process is documented, tracked, and reviewed for quality."),o.createElement("p",{className:"ab-origin-para"},"We serve students across Class 10, Class 12, undergraduate, and postgraduate transitions. We serve families across Telugu, Tamil, Hindi, Malayalam, Kannada, and Marathi-speaking communities. We operate across India and facilitate admissions in 18 countries. But every conversation begins the same way — with listening, without a script, and without a predetermined conclusion."),o.createElement("p",{className:"ab-origin-para"},o.createElement("strong",null,"We do not earn commissions from institutions. We do not earn referral payments from lenders.")," Our only revenue is the transparent service fee paid by the families who trust us with their most important decisions. This is not a marketing statement. It is the structural fact that makes every piece of advice we give genuinely independent.")))),o.createElement("section",{className:"ab-pillars"},o.createElement(be,null,o.createElement("div",{className:"ab-pillars-header"},o.createElement("div",{className:"ab-tag"},o.createElement("div",{className:"ab-tag-line"}),"What We Do"),o.createElement("h2",{className:"ab-pillars-h2"},"Four Services.",o.createElement("br",null),o.createElement("em",null,"One Commitment.")))),o.createElement("div",{className:"ab-accordion"},cm.map((n,r)=>{const a=e===r;return o.createElement("div",{key:r,className:`ab-acc-row${a?" open":""}`},o.createElement("button",{className:"ab-acc-trigger",onClick:()=>t(a?null:r)},o.createElement("div",{className:"ab-acc-num"},n.num),o.createElement("div",{className:"ab-acc-title-wrap"},o.createElement("div",{className:"ab-acc-title"},n.title),o.createElement("div",{className:"ab-acc-caption"},n.caption)),o.createElement("div",{className:"ab-acc-icon"},o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"})))),o.createElement("div",{className:"ab-acc-body"},o.createElement("div",{className:"ab-acc-inner"},o.createElement("div",{className:"ab-acc-paras"},n.body.map((i,l)=>o.createElement("p",{key:l,className:"ab-acc-para"},i))),o.createElement("div",{className:"ab-metrics"},n.metrics.map((i,l)=>o.createElement("div",{key:l,className:"ab-metric"},o.createElement("div",{className:"ab-metric-val"},i.val),o.createElement("div",{className:"ab-metric-label"},i.label)))))))}))),o.createElement("section",{className:"ab-values"},o.createElement(be,null,o.createElement("div",{className:"ab-tag"},o.createElement("div",{className:"ab-tag-line"}),"How We Operate"),o.createElement("h2",{className:"ab-values-h2"},"The Principles That ",o.createElement("em",null,"Define Us"))),o.createElement(be,{delay:100},o.createElement("div",{className:"ab-values-grid"},um.map((n,r)=>o.createElement("div",{key:r,className:"ab-value-card"},o.createElement("div",{className:"ab-value-glyph"},n.letter),o.createElement("div",{className:"ab-value-title"},n.title),o.createElement("p",{className:"ab-value-desc"},n.desc)))))),o.createElement("section",{className:"ab-commit"},o.createElement(be,null,o.createElement("div",null,o.createElement("div",{className:"ab-tag"},o.createElement("div",{className:"ab-tag-line"}),"Our Commitment"),o.createElement("h2",{className:"ab-commit-h2"},"What You Can",o.createElement("br",null),o.createElement("em",null,"Always Expect"),o.createElement("br",null),"From Us"),o.createElement("p",{className:"ab-commit-body"},"Commitments are easy to state. The ones below are structural — meaning they are built into how our business operates, not aspirational values written on a wall. Every student who works with Maharsh Edutech receives these, without exception, regardless of which service tier they engage."))),o.createElement(be,{delay:120},o.createElement("div",{className:"ab-commit-items"},dm.map((n,r)=>o.createElement("div",{key:r,className:"ab-commit-item"},o.createElement("div",{className:"ab-commit-dot"}),o.createElement("div",null,o.createElement("div",{className:"ab-commit-item-title"},n.title),o.createElement("div",{className:"ab-commit-item-desc"},n.desc))))))),o.createElement(be,null,o.createElement("div",{className:"ab-stats-strip"},hs.map((n,r)=>o.createElement("div",{key:r,className:"ab-stat-cell"},o.createElement("div",{className:"ab-stat-val"},n.val),o.createElement("div",{className:"ab-stat-sub"},n.sub))))),o.createElement("section",{className:"ab-cta"},o.createElement(be,null,o.createElement("div",{className:"ab-cta-inner"},o.createElement("div",{className:"ab-tag",style:{justifyContent:"center"}},o.createElement("div",{className:"ab-tag-line"}),"Begin Here",o.createElement("div",{className:"ab-tag-line"})),o.createElement("h2",{className:"ab-cta-h2"},"A Conversation",o.createElement("br",null),"Changes ",o.createElement("em",null,"Everything")),o.createElement("p",{className:"ab-cta-sub"},"Your first session is complimentary, completely without obligation, and entirely focused on understanding your situation — not presenting a package. Book a 30-minute call with a certified counselor and see what genuinely independent guidance feels like."),o.createElement("div",{className:"ab-cta-btns"},o.createElement("a",{href:"/contact",className:"ab-btn-primary"},"Book Free Session"),o.createElement("a",{href:"/services",className:"ab-btn-outline"},"Explore Services")))))))}function Ou(e=.08){const t=C.useRef(null),[n,r]=C.useState(!1);return C.useEffect(()=>{const a=t.current;if(!a)return;const i=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),i.disconnect())},{threshold:e});return i.observe(a),()=>i.disconnect()},[]),[t,n]}function gs({children:e,className:t="",style:n={},delay:r=0}){const[a,i]=Ou();return o.createElement("div",{ref:a,className:t,style:{opacity:i?1:0,transform:i?"translateY(0)":"translateY(52px)",transition:`opacity 0.9s cubic-bezier(.22,1,.36,1) ${r}ms, transform 0.9s cubic-bezier(.22,1,.36,1) ${r}ms`,...n}},e)}const fm=()=>o.createElement("svg",{viewBox:"0 0 48 48",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("circle",{cx:"24",cy:"24",r:"20"}),o.createElement("path",{d:"M24 4 L28 20 L24 24 L20 20 Z",fill:"currentColor",opacity:"0.9",stroke:"none"}),o.createElement("path",{d:"M44 24 L28 28 L24 24 L28 20 Z",fill:"currentColor",opacity:"0.35",stroke:"none"}),o.createElement("path",{d:"M24 44 L20 28 L24 24 L28 28 Z",fill:"currentColor",opacity:"0.55",stroke:"none"}),o.createElement("path",{d:"M4 24 L20 20 L24 24 L20 28 Z",fill:"currentColor",opacity:"0.2",stroke:"none"}),o.createElement("circle",{cx:"24",cy:"24",r:"3",fill:"currentColor",stroke:"none"}),o.createElement("circle",{cx:"24",cy:"24",r:"20",strokeDasharray:"2 4",opacity:"0.3"})),mm=()=>o.createElement("svg",{viewBox:"0 0 48 48",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M10 6 C10 6 8 6 8 10 L8 38 C8 38 8 42 12 42 L38 42 C40 42 40 40 40 38 L40 14 L30 4 L12 4 C10.9 4 10 4.9 10 6Z"}),o.createElement("path",{d:"M30 4 L30 14 L40 14"}),o.createElement("line",{x1:"16",y1:"24",x2:"32",y2:"24",strokeWidth:"1.5"}),o.createElement("line",{x1:"16",y1:"30",x2:"32",y2:"30",strokeWidth:"1.5"}),o.createElement("line",{x1:"16",y1:"18",x2:"24",y2:"18",strokeWidth:"1.5"}),o.createElement("circle",{cx:"13",cy:"12",r:"2",fill:"currentColor",stroke:"none",opacity:"0.5"})),hm=()=>o.createElement("svg",{viewBox:"0 0 48 48",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("circle",{cx:"24",cy:"24",r:"19"}),o.createElement("ellipse",{cx:"24",cy:"24",rx:"9",ry:"19"}),o.createElement("line",{x1:"5",y1:"24",x2:"43",y2:"24"}),o.createElement("line",{x1:"7",y1:"15",x2:"41",y2:"15"}),o.createElement("line",{x1:"7",y1:"33",x2:"41",y2:"33"}),o.createElement("circle",{cx:"36",cy:"13",r:"5",fill:"var(--gold)",stroke:"var(--gold)",strokeWidth:"1"}),o.createElement("line",{x1:"36",y1:"18",x2:"36",y2:"26",stroke:"var(--gold)",strokeWidth:"1.5"})),gm=()=>o.createElement("svg",{viewBox:"0 0 48 48",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("rect",{x:"4",y:"10",width:"40",height:"28",rx:"4"}),o.createElement("line",{x1:"4",y1:"20",x2:"44",y2:"20",strokeWidth:"2"}),o.createElement("rect",{x:"10",y:"28",width:"10",height:"4",rx:"1",fill:"currentColor",opacity:"0.4",stroke:"none"}),o.createElement("circle",{cx:"36",cy:"30",r:"4",opacity:"0.3",fill:"currentColor",stroke:"none"}),o.createElement("circle",{cx:"40",cy:"30",r:"4",opacity:"0.5",fill:"currentColor",stroke:"none"}),o.createElement("line",{x1:"10",y1:"14",x2:"18",y2:"14",opacity:"0.4"})),vm=()=>o.createElement("svg",{viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("polyline",{points:"2.5 8 6.5 12 13.5 4"})),ym=()=>o.createElement("svg",{viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("line",{x1:"3",y1:"10",x2:"17",y2:"10"}),o.createElement("polyline",{points:"11 4 17 10 11 16"})),zr=[{id:"01",icon:fm,label:"Career Counseling",title:"Find the Direction That's Truly Yours",tagline:"Psychometric-led, data-backed, deeply personal",color:"#C9A84C",accentDim:"rgba(201,168,76,0.06)",desc:"Your career is not a guess — it is a discovery. Our certified counselors invest deeply in understanding your psychometric profile, academic trajectory, and long-term aspirations before making a single recommendation. Through structured one-on-one sessions, scientifically validated assessment tools, and real-world employment data, we build a career roadmap that is precise and personal.",detail:"Many students approach us carrying the weight of family expectations, peer comparisons, and social pressure. Our process begins by removing that noise. We work with students from Class 10 onwards, understanding not just what they are good at today, but what they are built for in the long run. Every output is a written, detailed report that becomes the foundation of every decision made thereafter.",points:["In-depth psychometric and aptitude assessment","One-on-one 90-minute deep-dive counseling sessions","Written career report with 3 pathway projections","Industry salary benchmarks and growth trajectory data","Post-session follow-up and revision support","Available in Telugu, Tamil, Hindi, Malayalam, Kannada"],stat:{num:"5,000+",label:"Students Guided"}},{id:"02",icon:mm,label:"Application Support",title:"Every Document, Crafted to Perfection",tagline:"SOP · LOR · Essays · Mock Interviews",color:"#B8966E",accentDim:"rgba(184,150,110,0.06)",desc:"A great application is a form of storytelling — it shows the institution exactly who you are, why you belong there, and what you will contribute. Our application support team includes former admissions committee members, seasoned SOP writers, and documentation specialists who have helped over 5,000 students craft compelling, distinctive applications.",detail:"We cover every element: Statement of Purpose drafting through four rounds of expert review, Letter of Recommendation strategy and drafting, personal essay coaching, extracurricular positioning, resume and CV building, interview preparation with real-time feedback, and complete document organisation for every institution on your shortlist.",points:["SOP drafting with 4 rounds of expert review","LOR strategy, structure, and drafting support","Personal essay coaching and narrative positioning","Resume and CV crafting for student profiles","Mock interviews with senior counselors","Document verification and submission support","University-specific application alignment"],stat:{num:"98%",label:"Top-3 Choice Rate"}},{id:"03",icon:hm,label:"Admissions — India & Abroad",title:"From Shortlist to Enrollment, Completely Managed",tagline:"250+ institutions · 18 countries",color:"#8FA68A",accentDim:"rgba(143,166,138,0.06)",desc:"Admission into the right institution is the culmination of years of effort — and the gateway to everything that follows. We manage the complete admission lifecycle for both domestic Indian institutions and universities across 18 countries, with specialist teams for engineering, medical, management, law, architecture, design, and liberal arts.",detail:"For Indian admissions, we navigate the full complexity of JEE, NEET, CLAT, NIFT, NATA, CAT, and state-level entrance counseling. We have established relationships with 250+ partner institutions. For international admissions, our specialists have placed students in the USA, UK, Canada, Australia, Germany, Singapore, UAE, Ireland, Netherlands, and New Zealand — coordinating everything from shortlisting to visa documentation to post-arrival check-ins.",points:["250+ partner institutions across India","Engineering, Medical, MBA, Law, Design, Architecture streams","JEE, NEET, CLAT, NIFT, NATA, CAT counseling in-person","18 countries for international university placements","Visa documentation and embassy interview preparation","Scholarship identification and application support","Pre-departure briefing and post-arrival check-in"],stat:{num:"18",label:"Countries Abroad"}},{id:"04",icon:gm,label:"Education Loan Assistance",title:"Fund Your Future on the Right Terms",tagline:"14 lender partners · Zero commission",color:"#9B8EC4",accentDim:"rgba(155,142,196,0.06)",desc:"The financial dimension of higher education is one of the most anxiety-inducing aspects for families — and also one of the most misunderstood. Our financial counselors demystify the loan process entirely, working with 14 banking and NBFC partners to identify the most advantageous loan structures for your specific profile, institution, and repayment capacity.",detail:"We assess your family's financial eligibility, the institution's lender relationships, collateral options, and interest rate structures across nationalized banks, private banks, and non-banking financial companies. We build a complete funding plan combining scholarships, merit awards, institutional waivers, and loan amounts to minimise the total debt burden. We also advise on tax benefits available under Section 80E.",points:["Tie-ups with 14 nationalized and private lenders","Collateral and non-collateral loan options explained","Complete funding plan: scholarship + loan combination","Full documentation handling and bank liaison","EMI calculation and long-term repayment strategy","Section 80E Income Tax benefit advisory","Disbursement tracking and follow-up until credited"],stat:{num:"14",label:"Loan Partners"}}];function xm({fromRight:e=!1,color:t="#C9A84C"}){return o.createElement("div",{style:{position:"relative",height:80,overflow:"visible",zIndex:2,margin:"0 0"}},o.createElement("svg",{viewBox:"0 0 1200 80",preserveAspectRatio:"none",style:{width:"100%",height:"100%",display:"block",overflow:"visible"}},o.createElement("defs",null,o.createElement("marker",{id:`arrow-${e?"r":"l"}`,markerWidth:"8",markerHeight:"8",refX:"4",refY:"4",orient:"auto"},o.createElement("path",{d:e?"M8,4 L2,1 L4,4 L2,7Z":"M0,4 L6,1 L4,4 L6,7Z",fill:t,opacity:"0.7"})),o.createElement("filter",{id:"glow"},o.createElement("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),o.createElement("feMerge",null,o.createElement("feMergeNode",{in:"coloredBlur"}),o.createElement("feMergeNode",{in:"SourceGraphic"})))),[200,400,600,800,1e3].map((n,r)=>o.createElement("circle",{key:r,cx:n,cy:e?80-n/1200*40:n/1200*40,r:"2.5",fill:t,opacity:"0.25"})),o.createElement("path",{d:e?"M 1200,0 C 900,0 800,80 600,80 C 400,80 300,0 0,0":"M 0,80 C 300,80 400,0 600,0 C 800,0 900,80 1200,80",fill:"none",stroke:t,strokeWidth:"1.5",strokeDasharray:"6 8",opacity:"0.35",filter:"url(#glow)",markerEnd:e?"url(#arrow-r)":"url(#arrow-l)"}),o.createElement("path",{d:e?"M 1200,0 C 900,0 800,80 600,80 C 400,80 300,0 0,0":"M 0,80 C 300,80 400,0 600,0 C 800,0 900,80 1200,80",fill:"none",stroke:t,strokeWidth:"0.5",opacity:"0.12"})),o.createElement("div",{style:{position:"absolute",left:"50%",top:e?"100%":"0%",transform:"translate(-50%, -50%)",width:12,height:12,borderRadius:"50%",border:`1.5px solid ${t}`,background:"var(--ink)",boxShadow:`0 0 12px ${t}44`,zIndex:3}}))}function wm({svc:e,index:t}){const n=t%2===0,[r,a]=Ou(.06),i=e.icon;return o.createElement("div",{ref:r,style:{opacity:a?1:0,transform:a?"translateY(0)":"translateY(60px)",transition:`opacity 1s cubic-bezier(.22,1,.36,1) ${t*80}ms, transform 1s cubic-bezier(.22,1,.36,1) ${t*80}ms`}},o.createElement("div",{className:`svc-card ${n?"svc-card--normal":"svc-card--flipped"}`,style:{"--accent":e.color,"--accent-dim":e.accentDim}},o.createElement("div",{className:"svc-content"},o.createElement("div",{className:"svc-header"},o.createElement("div",{className:"svc-num-badge"},o.createElement("span",{className:"svc-num"},e.id)),o.createElement("div",{className:"svc-label"},e.label)),o.createElement("h2",{className:"svc-title"},e.title),o.createElement("div",{className:"svc-tagline"},e.tagline),o.createElement("p",{className:"svc-desc"},e.desc),o.createElement("p",{className:"svc-detail"},e.detail),o.createElement("div",{className:"svc-stat-row"},o.createElement("div",{className:"svc-stat"},o.createElement("span",{className:"svc-stat-num"},e.stat.num),o.createElement("span",{className:"svc-stat-label"},e.stat.label)))),o.createElement("div",{className:"svc-divider"},o.createElement("div",{className:"svc-divider-line"}),o.createElement("div",{className:"svc-divider-icon"},o.createElement(i,null)),o.createElement("div",{className:"svc-divider-line"})),o.createElement("div",{className:"svc-points-panel"},o.createElement("div",{className:"svc-points-label"},"What's Included"),o.createElement("ul",{className:"svc-points"},e.points.map((l,s)=>o.createElement("li",{key:s,className:"svc-point",style:{transitionDelay:`${s*60}ms`}},o.createElement("span",{className:"svc-point-check"},o.createElement(vm,null)),o.createElement("span",null,l)))),o.createElement("button",{className:"svc-cta"},o.createElement("span",null,"Book a Free Session"),o.createElement("span",{className:"svc-cta-arrow"},o.createElement(ym,null))))))}function Em(){return o.createElement(o.Fragment,null,o.createElement("style",null,`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        :root {
          --gold: #C9A84C;
          --gold2: #E2C46B;
          --gold-dim: rgba(201,168,76,0.10);
          --gold-border: rgba(201,168,76,0.18);
          --ink: #0A0A0A;
          --ink2: #111111;
          --ink3: #181818;
          --ink4: #202020;
          --smoke: rgba(255,255,255,0.88);
          --muted: rgba(255,255,255,0.52);
          --faint: rgba(255,255,255,0.22);
          --hair: rgba(255,255,255,0.06);
        }

        .sv * { box-sizing: border-box; margin: 0; padding: 0; }
        .sv {
          font-family: 'DM Sans', sans-serif;
          background: var(--ink);
          color: var(--smoke);
          line-height: 1;
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .sv-hero {
          position: relative;
          padding: 140px 80px 80px;
          background: var(--ink);
          overflow: hidden;
          border-bottom: 1px solid var(--gold-border);
        }
        .sv-hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,168,76,0.045) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 20% 80%, rgba(201,168,76,0.03) 0%, transparent 60%);
          pointer-events: none;
        }
        /* Decorative grid lines */
        .sv-hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at center, black 0%, transparent 70%);
        }
        .sv-hero-inner { position: relative; z-index: 1; max-width: 900px; }
        .sv-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 24px;
        }
        .sv-tag-line { height: 1px; width: 28px; background: var(--gold); }
        .sv-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 900; line-height: 1.04;
          color: var(--smoke); margin-bottom: 24px;
          letter-spacing: -0.01em;
        }
        .sv-hero-h1 em { font-style: italic; color: var(--gold); }
        .sv-hero-lead {
          font-size: clamp(14px, 1.5vw, 17px);
          color: var(--muted); line-height: 1.8;
          max-width: 620px; margin-bottom: 48px;
        }
        .sv-hero-pills { display: flex; gap: 10px; flex-wrap: wrap; }
        .sv-pill {
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
          border: 1px solid var(--gold-border); color: var(--gold);
          padding: 7px 16px; border-radius: 2px;
          background: var(--gold-dim);
        }

        /* ── PATH SECTION ── */
        .sv-path {
          padding: 0 80px;
          position: relative;
        }

        /* ── CARD ── */
        .svc-card {
          display: grid;
          grid-template-columns: 1fr 56px 1fr;
          gap: 0;
          border: 1px solid var(--gold-border);
          border-radius: 4px;
          overflow: hidden;
          background: var(--ink2);
          position: relative;
          transition: box-shadow 0.4s ease;
        }
        .svc-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0.6;
        }
        .svc-card:hover {
          box-shadow: 0 0 60px rgba(201,168,76,0.06), 0 20px 60px rgba(0,0,0,0.3);
        }
        .svc-card--flipped { direction: rtl; }
        .svc-card--flipped > * { direction: ltr; }

        /* Content side */
        .svc-content {
          padding: 56px 52px;
          background: var(--ink2);
          display: flex; flex-direction: column; gap: 0;
        }
        .svc-header {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 20px;
        }
        .svc-num-badge {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid var(--accent, var(--gold));
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          background: var(--accent-dim, var(--gold-dim));
        }
        .svc-num {
          font-family: 'Playfair Display', serif;
          font-size: 14px; font-weight: 700;
          color: var(--accent, var(--gold));
        }
        .svc-label {
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.24em;
          text-transform: uppercase; color: var(--accent, var(--gold));
        }
        .svc-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 800; line-height: 1.18;
          color: var(--smoke); margin-bottom: 10px;
        }
        .svc-tagline {
          font-size: 11px; font-weight: 500; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--accent, var(--gold));
          opacity: 0.7; margin-bottom: 24px;
        }
        .svc-desc {
          font-size: 14px; color: var(--muted); line-height: 1.88;
          margin-bottom: 16px;
        }
        .svc-detail {
          font-size: 13px; color: rgba(255,255,255,0.35);
          line-height: 1.85; margin-bottom: 32px;
        }
        .svc-stat-row { margin-top: auto; }
        .svc-stat {
          display: inline-flex; flex-direction: column; gap: 4px;
          padding: 14px 20px;
          border: 1px solid var(--gold-border);
          border-left: 3px solid var(--accent, var(--gold));
          background: var(--ink3);
          border-radius: 0 3px 3px 0;
        }
        .svc-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 28px; font-weight: 900;
          color: var(--accent, var(--gold)); line-height: 1;
        }
        .svc-stat-label {
          font-size: 10px; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted);
        }

        /* Center divider */
        .svc-divider {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 12px;
          background: var(--ink3);
          border-left: 1px solid var(--gold-border);
          border-right: 1px solid var(--gold-border);
          padding: 24px 0;
        }
        .svc-divider-line {
          flex: 1; width: 1px;
          background: linear-gradient(to bottom, transparent, var(--accent, var(--gold)), transparent);
          opacity: 0.3; min-height: 40px;
        }
        .svc-divider-icon {
          width: 44px; height: 44px;
          color: var(--accent, var(--gold));
          flex-shrink: 0;
          opacity: 0.8;
        }
        .svc-divider-icon svg { width: 100%; height: 100%; }

        /* Points side */
        .svc-points-panel {
          padding: 56px 48px;
          background: var(--ink);
          display: flex; flex-direction: column;
        }
        .svc-points-label {
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--accent, var(--gold));
          margin-bottom: 28px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--gold-border);
        }
        .svc-points {
          list-style: none; display: flex; flex-direction: column;
          gap: 0; margin-bottom: 40px; flex: 1;
        }
        .svc-point {
          display: flex; align-items: flex-start; gap: 14px;
          font-size: 13.5px; color: rgba(255,255,255,0.62);
          line-height: 1.6;
          padding: 13px 0;
          border-bottom: 1px solid var(--hair);
        }
        .svc-point:last-child { border-bottom: none; }
        .svc-point-check {
          width: 20px; height: 20px; flex-shrink: 0; margin-top: 1px;
          border-radius: 50%; border: 1px solid var(--accent, var(--gold));
          display: flex; align-items: center; justify-content: center;
          color: var(--accent, var(--gold));
        }
        .svc-point-check svg { width: 9px; height: 9px; }

        .svc-cta {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink); background: var(--accent, var(--gold));
          border: none; padding: 14px 28px; border-radius: 3px;
          cursor: pointer; align-self: flex-start;
          transition: opacity 0.2s, transform 0.2s;
          margin-top: auto;
        }
        .svc-cta:hover { opacity: 0.88; transform: translateY(-2px); }
        .svc-cta-arrow { display: flex; }
        .svc-cta-arrow svg { width: 14px; height: 14px; }

        /* ── CTA SECTION ── */
        .sv-cta {
          padding: 120px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--gold-border);
        }
        .sv-cta::before {
          content: '';
          position: absolute; bottom: -100px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.07), transparent 70%);
          pointer-events: none;
        }
        .sv-cta-inner { position: relative; max-width: 680px; margin: 0 auto; }
        .sv-cta-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 64px); font-weight: 900;
          line-height: 1.06; margin: 16px 0 20px;
        }
        .sv-cta-h2 em { font-style: italic; color: var(--gold); }
        .sv-cta-sub { font-size: 15px; color: var(--muted); line-height: 1.78; margin-bottom: 44px; }
        .sv-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .sv-btn-primary {
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          background: var(--gold); color: var(--ink); border: none;
          padding: 16px 40px; border-radius: 3px; cursor: pointer;
          transition: background 0.2s, transform 0.15s; text-decoration: none;
        }
        .sv-btn-primary:hover { background: var(--gold2); transform: translateY(-2px); }
        .sv-btn-outline {
          font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          background: transparent; color: var(--smoke);
          border: 1.5px solid rgba(255,255,255,0.18); padding: 15px 36px;
          border-radius: 3px; cursor: pointer;
          transition: border-color 0.2s, color 0.2s; text-decoration: none;
        }
        .sv-btn-outline:hover { border-color: var(--gold); color: var(--gold); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .sv-hero, .sv-path, .sv-cta { padding-left: 40px; padding-right: 40px; }
          .svc-card { grid-template-columns: 1fr 1px 1fr; }
          .svc-divider { flex-direction: row; padding: 0 12px; border: none; border-top: 1px solid var(--gold-border); border-bottom: 1px solid var(--gold-border); min-height: 64px; }
          .svc-divider-line { flex: 1; height: 1px; width: auto; min-height: unset; background: linear-gradient(to right, transparent, var(--accent, var(--gold)), transparent); }
          .svc-content { padding: 40px 36px; }
          .svc-points-panel { padding: 40px 36px; }
        }
        @media (max-width: 768px) {
          .sv-hero { padding: 100px 28px 60px; }
          .sv-path { padding: 0 24px; }
          .sv-cta { padding: 80px 28px; }
          .svc-card, .svc-card--flipped {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
          .svc-divider {
            flex-direction: row; min-height: 48px;
            border-left: none; border-right: none;
          }
          .svc-content, .svc-points-panel { padding: 36px 28px; }
          .svc-title { font-size: 22px; }
        }
      `),o.createElement("div",{className:"sv"},o.createElement(gs,null,o.createElement("section",{className:"sv-hero"},o.createElement("div",{className:"sv-hero-bg"}),o.createElement("div",{className:"sv-hero-grid"}),o.createElement("div",{className:"sv-hero-inner"},o.createElement("div",{className:"sv-tag"},o.createElement("div",{className:"sv-tag-line"}),"Our Services",o.createElement("div",{className:"sv-tag-line"})),o.createElement("h1",{className:"sv-hero-h1"},"Four Pillars of",o.createElement("br",null),o.createElement("em",null,"Complete Support")),o.createElement("p",{className:"sv-hero-lead"},"Every service we offer addresses one critical dimension of the complex, multi-stage process of building an educational career. Together, they form a seamless system — from discovering your direction to funding your enrollment."),o.createElement("div",{className:"sv-hero-pills"},zr.map(e=>o.createElement("div",{key:e.id,className:"sv-pill"},e.label)))))),o.createElement("div",{className:"sv-path",style:{paddingTop:72,paddingBottom:72}},zr.map((e,t)=>o.createElement(o.Fragment,{key:e.id},o.createElement(wm,{svc:e,index:t}),t<zr.length-1&&o.createElement(xm,{fromRight:t%2===0,color:zr[t+1].color})))),o.createElement("section",{className:"sv-cta"},o.createElement(gs,null,o.createElement("div",{className:"sv-cta-inner"},o.createElement("div",{className:"sv-tag",style:{justifyContent:"center"}},o.createElement("div",{className:"sv-tag-line"})," Begin Your Journey ",o.createElement("div",{className:"sv-tag-line"})),o.createElement("h2",{className:"sv-cta-h2"},"One Conversation",o.createElement("br",null),"Changes ",o.createElement("em",null,"Everything")),o.createElement("p",{className:"sv-cta-sub"},"Book a complimentary 30-minute session with a certified counselor. No sales pitch. No pressure. Just an honest, informed conversation about your future."),o.createElement("div",{className:"sv-cta-btns"},o.createElement("a",{href:"/contact",className:"sv-btn-primary"},"Book Free Counseling"),o.createElement("a",{href:"/about",className:"sv-btn-outline"},"About Us")))))))}function bm(e=.08){const t=C.useRef(null),[n,r]=C.useState(!1);return C.useEffect(()=>{const a=t.current;if(!a)return;const i=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),i.disconnect())},{threshold:e});return i.observe(a),()=>i.disconnect()},[]),[t,n]}function ii({children:e,style:t={},delay:n=0}){const[r,a]=bm();return o.createElement("div",{ref:r,style:{opacity:a?1:0,transform:a?"translateY(0)":"translateY(48px)",transition:`opacity 0.9s cubic-bezier(.22,1,.36,1) ${n}ms, transform 0.9s cubic-bezier(.22,1,.36,1) ${n}ms`,...t}},e)}const km="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.4389!3d17.4497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e7d7b!2sSanjeev+Reddy+Nagar%2C+Hyderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1700000000000",Sm=[{label:"Mobile",value:"+91 73372 67648",sub:"Mon – Sat, 9 AM – 7 PM IST",href:"tel:+917337267648",cta:"Call Now"},{label:"WhatsApp",value:"+91 73372 67648",sub:"Quick response within minutes",href:"https://wa.me/917337267648",cta:"Message Us",isExternal:!0},{label:"Email",value:"hello@maharshedutech.com",sub:"Response within 24 hours",href:"mailto:hello@maharshedutech.com",cta:"Send Email"}],Nm=["Career Counseling","SOP / LOR","Admissions","Education Loans"];function Cm(){return o.createElement(o.Fragment,null,o.createElement("style",null,`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --gold: #C9A84C;
          --gold2: #E2C46B;
          --gold-border: rgba(201,168,76,0.18);
          --ink: #0A0A0A;
          --ink2: #111111;
          --ink3: #161616;
          --smoke: rgba(255,255,255,0.88);
          --muted: rgba(255,255,255,0.50);
          --faint: rgba(255,255,255,0.28);
        }

        .ct * { box-sizing: border-box; margin: 0; padding: 0; }
        .ct {
          font-family: 'DM Sans', sans-serif;
          background: var(--ink);
          color: var(--smoke);
          line-height: 1;
          overflow-x: hidden;
          border-radius: 12px;
          overflow: hidden;
        }

        /* ══ HERO ══ */
        .ct-hero {
          position: relative;
          border-bottom: 1px solid var(--gold-border);
          overflow: hidden;
        }
        .ct-hero-img {
          width: 100%;
          height: clamp(200px, 30vw, 3000px);
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: brightness(0.55) saturate(0.7);
        }
        .ct-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.72) 100%);
        }
        .ct-hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(ellipse 80% 80% at center, black 0%, transparent 70%);
        }
        .ct-hero-text {
          position: absolute; bottom: 0; left: 0;
          padding: clamp(20px, 4vw, 36px) clamp(24px, 5vw, 52px);
        }
        .ct-eyebrow {
          font-size: 9px; font-weight: 600; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--gold);
          display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
        }
        .ct-eyebrow-line { height: 1px; width: 22px; background: var(--gold); flex-shrink: 0; }
        .ct-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(26px, 5vw, 46px); font-weight: 900;
          line-height: 1.06; color: rgba(255,255,255,0.95);
        }
        .ct-hero-h1 em { font-style: italic; color: var(--gold); }

        /* ══ BODY ══ */
        .ct-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        @media (max-width: 700px) {
          .ct-body { grid-template-columns: 1fr; }
          .ct-left { border-right: none !important; border-bottom: 1px solid var(--gold-border); }
        }

        .ct-left {
          padding: clamp(28px, 4vw, 44px) clamp(24px, 4vw, 40px);
          border-right: 1px solid var(--gold-border);
        }
        .ct-right {
          padding: clamp(28px, 4vw, 44px) clamp(24px, 4vw, 40px);
          background: var(--ink2);
        }

        /* ── Section Label ── */
        .ct-section-label {
          font-size: 9px; font-weight: 600; letter-spacing: 0.26em;
          text-transform: uppercase; color: var(--gold);
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 18px;
        }
        .ct-section-line { height: 1px; flex: 1; background: var(--gold-border); }

        /* ── Contact Items ── */
        .ct-items {
          border: 1px solid var(--gold-border);
          border-radius: 6px; overflow: hidden;
          margin-bottom: 28px;
        }
        .ct-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(201,168,76,0.08);
          background: var(--ink2);
          position: relative; transition: background 0.2s;
        }
        .ct-item:last-child { border-bottom: none; }
        .ct-item:hover { background: var(--ink3); }
        .ct-item::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0;
          width: 2px; background: var(--gold);
          transform: scaleY(0); transform-origin: top;
          transition: transform 0.3s;
        }
        .ct-item:hover::before { transform: scaleY(1); }
        .ct-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--gold); flex-shrink: 0; margin-top: 5px;
        }
        .ct-item-label {
          font-size: 9px; font-weight: 600; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--gold); opacity: 0.7;
          margin-bottom: 4px;
        }
        .ct-item-value {
          font-size: 13.5px; font-weight: 600;
          color: rgba(255,255,255,0.9); line-height: 1.4;
        }
        .ct-item-sub {
          font-size: 11px; color: var(--faint);
          margin-top: 3px; line-height: 1.5;
        }
        .ct-item-cta {
          display: inline-block; margin-top: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold);
          text-decoration: none;
        }

        /* ── Hours ── */
        .ct-hours {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1px;
          border: 1px solid var(--gold-border); border-radius: 6px;
          overflow: hidden; margin-bottom: 28px;
        }
        .ct-hour-cell {
          background: var(--ink2); padding: 16px 18px;
        }
        .ct-hour-day {
          font-size: 9px; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 5px;
        }
        .ct-hour-time { font-size: 13px; font-weight: 500; color: var(--smoke); }

        /* ── Tags ── */
        .ct-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .ct-tag {
          font-size: 10px; font-weight: 500; padding: 5px 12px;
          border: 1px solid rgba(201,168,76,0.22); border-radius: 2px;
          color: var(--muted); letter-spacing: 0.06em;
        }

        /* ── Address Card ── */
        .ct-addr-card {
          border: 1px solid var(--gold-border); border-radius: 6px;
          background: var(--ink2); padding: 22px 22px;
          margin-bottom: 28px;
        }
        .ct-addr-pin {
          display: flex; align-items: center; gap: 6px;
          font-size: 9px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 10px;
        }
        .ct-addr-pin svg { width: 12px; height: 12px; flex-shrink: 0; }
        .ct-addr-name {
          font-family: 'Playfair Display', serif;
          font-size: 17px; font-weight: 700;
          color: rgba(255,255,255,0.95); margin-bottom: 10px;
        }
        .ct-gold-bar {
          width: 32px; height: 2px; background: var(--gold);
          border-radius: 1px; margin-bottom: 14px;
        }
        .ct-addr-line {
          font-size: 13px; color: var(--muted);
          line-height: 1.85;
        }
        .ct-dir-btn {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 16px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--gold);
          text-decoration: none;
          border: 1px solid rgba(201,168,76,0.3); padding: 9px 16px;
          border-radius: 3px; transition: border-color 0.2s, background 0.2s;
        }
        .ct-dir-btn:hover { border-color: var(--gold); background: rgba(201,168,76,0.06); }

        /* ── Map ── */
        .ct-map-wrap {
          border: 1px solid var(--gold-border); border-radius: 6px;
          overflow: hidden; position: relative;
        }
        .ct-map-badge {
          position: absolute; top: 10px; left: 10px; z-index: 2;
          font-size: 8.5px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase;
          background: var(--ink); color: var(--gold);
          border: 1px solid rgba(201,168,76,0.3); padding: 4px 9px; border-radius: 2px;
        }
        .ct-map-wrap iframe {
          width: 100%; height: 260px; border: none; display: block;
          filter: invert(0.9) hue-rotate(180deg) saturate(0.35) brightness(0.88);
        }
      `),o.createElement("div",{className:"ct"},o.createElement(ii,null,o.createElement("section",{className:"ct-hero"},o.createElement("img",{className:"ct-hero-img",src:"public/src/assets/reception.png",alt:"Maharsh Edutech Office Reception"}),o.createElement("div",{className:"ct-hero-overlay"}),o.createElement("div",{className:"ct-hero-grid"}),o.createElement("div",{className:"ct-hero-text"},o.createElement("div",{className:"ct-eyebrow"},o.createElement("div",{className:"ct-eyebrow-line"})," Get In Touch ",o.createElement("div",{className:"ct-eyebrow-line"})),o.createElement("h1",{className:"ct-hero-h1"},"We're Here to ",o.createElement("em",null,"Help You"))))),o.createElement("div",{className:"ct-body"},o.createElement(ii,{delay:60,style:{display:"contents"}},o.createElement("div",{className:"ct-left"},o.createElement("div",{className:"ct-section-label"},"Contact Details ",o.createElement("div",{className:"ct-section-line"})),o.createElement("div",{className:"ct-items"},Sm.map((e,t)=>o.createElement("div",{key:t,className:"ct-item"},o.createElement("div",{className:"ct-dot"}),o.createElement("div",null,o.createElement("div",{className:"ct-item-label"},e.label),o.createElement("div",{className:"ct-item-value"},e.value),o.createElement("div",{className:"ct-item-sub"},e.sub),o.createElement("a",{href:e.href,className:"ct-item-cta",target:e.isExternal?"_blank":void 0,rel:"noopener noreferrer"},e.cta," →"))))),o.createElement("div",{className:"ct-section-label"},"Office Hours ",o.createElement("div",{className:"ct-section-line"})),o.createElement("div",{className:"ct-hours"},o.createElement("div",{className:"ct-hour-cell"},o.createElement("div",{className:"ct-hour-day"},"Mon – Sat"),o.createElement("div",{className:"ct-hour-time"},"9:00 AM – 7:00 PM")),o.createElement("div",{className:"ct-hour-cell"},o.createElement("div",{className:"ct-hour-day"},"Sunday"),o.createElement("div",{className:"ct-hour-time"},"By appointment"))),o.createElement("div",{className:"ct-tags"},Nm.map((e,t)=>o.createElement("span",{key:t,className:"ct-tag"},e))))),o.createElement(ii,{delay:160,style:{display:"contents"}},o.createElement("div",{className:"ct-right"},o.createElement("div",{className:"ct-section-label"},"Our Office ",o.createElement("div",{className:"ct-section-line"})),o.createElement("div",{className:"ct-addr-card"},o.createElement("div",{className:"ct-addr-pin"},o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.createElement("circle",{cx:"12",cy:"10",r:"3"})),"Hyderabad, Telangana"),o.createElement("div",{className:"ct-addr-name"},"Maharsh Edutech Pvt. Ltd."),o.createElement("div",{className:"ct-gold-bar"}),o.createElement("div",{className:"ct-addr-line"},"Flat No. 201, Plot No. 34 East"),o.createElement("div",{className:"ct-addr-line"},"Srinivasa Colony, Sanjeev Reddy Nagar"),o.createElement("div",{className:"ct-addr-line"},"Hyderabad – 500038"),o.createElement("div",{className:"ct-addr-line"},"Telangana, India"),o.createElement("a",{href:"https://maps.google.com/?q=Srinivasa+Colony+Sanjeev+Reddy+Nagar+Hyderabad+500038",target:"_blank",rel:"noopener noreferrer",className:"ct-dir-btn"},"Get Directions →")),o.createElement("div",{className:"ct-section-label"},"Location Map ",o.createElement("div",{className:"ct-section-line"})),o.createElement("div",{className:"ct-map-wrap"},o.createElement("div",{className:"ct-map-badge"},"Sanjeev Reddy Nagar"),o.createElement("iframe",{title:"Maharsh Edutech Location",src:km,allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})))))))}function zm(){return o.createElement(Kf,null,o.createElement(Xf,null),o.createElement(Qf,null,o.createElement(In,{path:"/",element:o.createElement(lm,null)}),o.createElement(In,{path:"/about",element:o.createElement(pm,null)}),o.createElement(In,{path:"/services",element:o.createElement(Em,null)}),o.createElement(In,{path:"/contact",element:o.createElement(Cm,null)})),o.createElement(qf,null))}oi.createRoot(document.getElementById("root")).render(o.createElement(o.StrictMode,null,o.createElement(zm,null)));
