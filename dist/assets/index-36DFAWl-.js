(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Fm={exports:{}},tc={},Om={exports:{}},kt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My;function Bw(){if(My)return kt;My=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(k){return k===null||typeof k!="object"?null:(k=g&&k[g]||k["@@iterator"],typeof k=="function"?k:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(k,j,Fe){this.props=k,this.context=j,this.refs=E,this.updater=Fe||_}x.prototype.isReactComponent={},x.prototype.setState=function(k,j){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,j,"setState")},x.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function y(){}y.prototype=x.prototype;function C(k,j,Fe){this.props=k,this.context=j,this.refs=E,this.updater=Fe||_}var I=C.prototype=new y;I.constructor=C,M(I,x.prototype),I.isPureReactComponent=!0;var A=Array.isArray,D=Object.prototype.hasOwnProperty,P={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function T(k,j,Fe){var Oe,De={},te=null,ge=null;if(j!=null)for(Oe in j.ref!==void 0&&(ge=j.ref),j.key!==void 0&&(te=""+j.key),j)D.call(j,Oe)&&!R.hasOwnProperty(Oe)&&(De[Oe]=j[Oe]);var he=arguments.length-2;if(he===1)De.children=Fe;else if(1<he){for(var Me=Array(he),Xe=0;Xe<he;Xe++)Me[Xe]=arguments[Xe+2];De.children=Me}if(k&&k.defaultProps)for(Oe in he=k.defaultProps,he)De[Oe]===void 0&&(De[Oe]=he[Oe]);return{$$typeof:s,type:k,key:te,ref:ge,props:De,_owner:P.current}}function L(k,j){return{$$typeof:s,type:k.type,key:j,ref:k.ref,props:k.props,_owner:k._owner}}function F(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function B(k){var j={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Fe){return j[Fe]})}var z=/\/+/g;function ne(k,j){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):j.toString(36)}function ie(k,j,Fe,Oe,De){var te=typeof k;(te==="undefined"||te==="boolean")&&(k=null);var ge=!1;if(k===null)ge=!0;else switch(te){case"string":case"number":ge=!0;break;case"object":switch(k.$$typeof){case s:case e:ge=!0}}if(ge)return ge=k,De=De(ge),k=Oe===""?"."+ne(ge,0):Oe,A(De)?(Fe="",k!=null&&(Fe=k.replace(z,"$&/")+"/"),ie(De,j,Fe,"",function(Xe){return Xe})):De!=null&&(F(De)&&(De=L(De,Fe+(!De.key||ge&&ge.key===De.key?"":(""+De.key).replace(z,"$&/")+"/")+k)),j.push(De)),1;if(ge=0,Oe=Oe===""?".":Oe+":",A(k))for(var he=0;he<k.length;he++){te=k[he];var Me=Oe+ne(te,he);ge+=ie(te,j,Fe,Me,De)}else if(Me=m(k),typeof Me=="function")for(k=Me.call(k),he=0;!(te=k.next()).done;)te=te.value,Me=Oe+ne(te,he++),ge+=ie(te,j,Fe,Me,De);else if(te==="object")throw j=String(k),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ge}function X(k,j,Fe){if(k==null)return k;var Oe=[],De=0;return ie(k,Oe,"","",function(te){return j.call(Fe,te,De++)}),Oe}function ee(k){if(k._status===-1){var j=k._result;j=j(),j.then(function(Fe){(k._status===0||k._status===-1)&&(k._status=1,k._result=Fe)},function(Fe){(k._status===0||k._status===-1)&&(k._status=2,k._result=Fe)}),k._status===-1&&(k._status=0,k._result=j)}if(k._status===1)return k._result.default;throw k._result}var W={current:null},H={transition:null},G={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:H,ReactCurrentOwner:P};function U(){throw Error("act(...) is not supported in production builds of React.")}return kt.Children={map:X,forEach:function(k,j,Fe){X(k,function(){j.apply(this,arguments)},Fe)},count:function(k){var j=0;return X(k,function(){j++}),j},toArray:function(k){return X(k,function(j){return j})||[]},only:function(k){if(!F(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},kt.Component=x,kt.Fragment=t,kt.Profiler=r,kt.PureComponent=C,kt.StrictMode=n,kt.Suspense=f,kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,kt.act=U,kt.cloneElement=function(k,j,Fe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Oe=M({},k.props),De=k.key,te=k.ref,ge=k._owner;if(j!=null){if(j.ref!==void 0&&(te=j.ref,ge=P.current),j.key!==void 0&&(De=""+j.key),k.type&&k.type.defaultProps)var he=k.type.defaultProps;for(Me in j)D.call(j,Me)&&!R.hasOwnProperty(Me)&&(Oe[Me]=j[Me]===void 0&&he!==void 0?he[Me]:j[Me])}var Me=arguments.length-2;if(Me===1)Oe.children=Fe;else if(1<Me){he=Array(Me);for(var Xe=0;Xe<Me;Xe++)he[Xe]=arguments[Xe+2];Oe.children=he}return{$$typeof:s,type:k.type,key:De,ref:te,props:Oe,_owner:ge}},kt.createContext=function(k){return k={$$typeof:l,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},kt.createElement=T,kt.createFactory=function(k){var j=T.bind(null,k);return j.type=k,j},kt.createRef=function(){return{current:null}},kt.forwardRef=function(k){return{$$typeof:c,render:k}},kt.isValidElement=F,kt.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:ee}},kt.memo=function(k,j){return{$$typeof:d,type:k,compare:j===void 0?null:j}},kt.startTransition=function(k){var j=H.transition;H.transition={};try{k()}finally{H.transition=j}},kt.unstable_act=U,kt.useCallback=function(k,j){return W.current.useCallback(k,j)},kt.useContext=function(k){return W.current.useContext(k)},kt.useDebugValue=function(){},kt.useDeferredValue=function(k){return W.current.useDeferredValue(k)},kt.useEffect=function(k,j){return W.current.useEffect(k,j)},kt.useId=function(){return W.current.useId()},kt.useImperativeHandle=function(k,j,Fe){return W.current.useImperativeHandle(k,j,Fe)},kt.useInsertionEffect=function(k,j){return W.current.useInsertionEffect(k,j)},kt.useLayoutEffect=function(k,j){return W.current.useLayoutEffect(k,j)},kt.useMemo=function(k,j){return W.current.useMemo(k,j)},kt.useReducer=function(k,j,Fe){return W.current.useReducer(k,j,Fe)},kt.useRef=function(k){return W.current.useRef(k)},kt.useState=function(k){return W.current.useState(k)},kt.useSyncExternalStore=function(k,j,Fe){return W.current.useSyncExternalStore(k,j,Fe)},kt.useTransition=function(){return W.current.useTransition()},kt.version="18.3.1",kt}var Ey;function c0(){return Ey||(Ey=1,Om.exports=Bw()),Om.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function zw(){if(Ty)return tc;Ty=1;var s=c0(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,f,d){var p,g={},m=null,_=null;d!==void 0&&(m=""+d),f.key!==void 0&&(m=""+f.key),f.ref!==void 0&&(_=f.ref);for(p in f)n.call(f,p)&&!a.hasOwnProperty(p)&&(g[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)g[p]===void 0&&(g[p]=f[p]);return{$$typeof:e,type:c,key:m,ref:_,props:g,_owner:r.current}}return tc.Fragment=t,tc.jsx=l,tc.jsxs=l,tc}var wy;function Vw(){return wy||(wy=1,Fm.exports=zw()),Fm.exports}var K=Vw(),ud={},km={exports:{}},tr={},Bm={exports:{}},zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function Hw(){return Ay||(Ay=1,(function(s){function e(H,G){var U=H.length;H.push(G);e:for(;0<U;){var k=U-1>>>1,j=H[k];if(0<r(j,G))H[k]=G,H[U]=j,U=k;else break e}}function t(H){return H.length===0?null:H[0]}function n(H){if(H.length===0)return null;var G=H[0],U=H.pop();if(U!==G){H[0]=U;e:for(var k=0,j=H.length,Fe=j>>>1;k<Fe;){var Oe=2*(k+1)-1,De=H[Oe],te=Oe+1,ge=H[te];if(0>r(De,U))te<j&&0>r(ge,De)?(H[k]=ge,H[te]=U,k=te):(H[k]=De,H[Oe]=U,k=Oe);else if(te<j&&0>r(ge,U))H[k]=ge,H[te]=U,k=te;else break e}}return G}function r(H,G){var U=H.sortIndex-G.sortIndex;return U!==0?U:H.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();s.unstable_now=function(){return l.now()-c}}var f=[],d=[],p=1,g=null,m=3,_=!1,M=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(H){for(var G=t(d);G!==null;){if(G.callback===null)n(d);else if(G.startTime<=H)n(d),G.sortIndex=G.expirationTime,e(f,G);else break;G=t(d)}}function A(H){if(E=!1,I(H),!M)if(t(f)!==null)M=!0,ee(D);else{var G=t(d);G!==null&&W(A,G.startTime-H)}}function D(H,G){M=!1,E&&(E=!1,y(T),T=-1),_=!0;var U=m;try{for(I(G),g=t(f);g!==null&&(!(g.expirationTime>G)||H&&!B());){var k=g.callback;if(typeof k=="function"){g.callback=null,m=g.priorityLevel;var j=k(g.expirationTime<=G);G=s.unstable_now(),typeof j=="function"?g.callback=j:g===t(f)&&n(f),I(G)}else n(f);g=t(f)}if(g!==null)var Fe=!0;else{var Oe=t(d);Oe!==null&&W(A,Oe.startTime-G),Fe=!1}return Fe}finally{g=null,m=U,_=!1}}var P=!1,R=null,T=-1,L=5,F=-1;function B(){return!(s.unstable_now()-F<L)}function z(){if(R!==null){var H=s.unstable_now();F=H;var G=!0;try{G=R(!0,H)}finally{G?ne():(P=!1,R=null)}}else P=!1}var ne;if(typeof C=="function")ne=function(){C(z)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,X=ie.port2;ie.port1.onmessage=z,ne=function(){X.postMessage(null)}}else ne=function(){x(z,0)};function ee(H){R=H,P||(P=!0,ne())}function W(H,G){T=x(function(){H(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){M||_||(M=!0,ee(D))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(H){switch(m){case 1:case 2:case 3:var G=3;break;default:G=m}var U=m;m=G;try{return H()}finally{m=U}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,G){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var U=m;m=H;try{return G()}finally{m=U}},s.unstable_scheduleCallback=function(H,G,U){var k=s.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?k+U:k):U=k,H){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=U+j,H={id:p++,callback:G,priorityLevel:H,startTime:U,expirationTime:j,sortIndex:-1},U>k?(H.sortIndex=U,e(d,H),t(f)===null&&H===t(d)&&(E?(y(T),T=-1):E=!0,W(A,U-k))):(H.sortIndex=j,e(f,H),M||_||(M=!0,ee(D))),H},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(H){var G=m;return function(){var U=m;m=G;try{return H.apply(this,arguments)}finally{m=U}}}})(zm)),zm}var by;function Gw(){return by||(by=1,Bm.exports=Hw()),Bm.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy;function Ww(){if(Cy)return tr;Cy=1;var s=c0(),e=Gw();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function a(i,o){l(i,o),l(i+"Capture",o)}function l(i,o){for(r[i]=o,i=0;i<o.length;i++)n.add(o[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(i){return f.call(g,i)?!0:f.call(p,i)?!1:d.test(i)?g[i]=!0:(p[i]=!0,!1)}function _(i,o,u,h){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:u!==null?!u.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,o,u,h){if(o===null||typeof o>"u"||_(i,o,u,h))return!0;if(h)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(i,o,u,h,v,S,b){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=v,this.mustUseProperty=u,this.propertyName=i,this.type=o,this.sanitizeURL=S,this.removeEmptyString=b}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];x[o]=new E(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function C(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(y,C);x[o]=new E(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(y,C);x[o]=new E(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(y,C);x[o]=new E(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function I(i,o,u,h){var v=x.hasOwnProperty(o)?x[o]:null;(v!==null?v.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(M(o,u,v,h)&&(u=null),h||v===null?m(o)&&(u===null?i.removeAttribute(o):i.setAttribute(o,""+u)):v.mustUseProperty?i[v.propertyName]=u===null?v.type===3?!1:"":u:(o=v.attributeName,h=v.attributeNamespace,u===null?i.removeAttribute(o):(v=v.type,u=v===3||v===4&&u===!0?"":""+u,h?i.setAttributeNS(h,o,u):i.setAttribute(o,u))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),P=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),B=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),H=Symbol.iterator;function G(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var U=Object.assign,k;function j(i){if(k===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);k=o&&o[1]||""}return`
`+k+i}var Fe=!1;function Oe(i,o){if(!i||Fe)return"";Fe=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(pe){var h=pe}Reflect.construct(i,[],o)}else{try{o.call()}catch(pe){h=pe}i.call(o.prototype)}else{try{throw Error()}catch(pe){h=pe}i()}}catch(pe){if(pe&&h&&typeof pe.stack=="string"){for(var v=pe.stack.split(`
`),S=h.stack.split(`
`),b=v.length-1,V=S.length-1;1<=b&&0<=V&&v[b]!==S[V];)V--;for(;1<=b&&0<=V;b--,V--)if(v[b]!==S[V]){if(b!==1||V!==1)do if(b--,V--,0>V||v[b]!==S[V]){var $=`
`+v[b].replace(" at new "," at ");return i.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",i.displayName)),$}while(1<=b&&0<=V);break}}}finally{Fe=!1,Error.prepareStackTrace=u}return(i=i?i.displayName||i.name:"")?j(i):""}function De(i){switch(i.tag){case 5:return j(i.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return i=Oe(i.type,!1),i;case 11:return i=Oe(i.type.render,!1),i;case 1:return i=Oe(i.type,!0),i;default:return""}}function te(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case R:return"Fragment";case P:return"Portal";case L:return"Profiler";case T:return"StrictMode";case ne:return"Suspense";case ie:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case F:return(i._context.displayName||"Context")+".Provider";case z:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case X:return o=i.displayName||null,o!==null?o:te(i.type)||"Memo";case ee:o=i._payload,i=i._init;try{return te(i(o))}catch{}}return null}function ge(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(o);case 8:return o===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function he(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Me(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Xe(i){var o=Me(i)?"checked":"value",u=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var v=u.get,S=u.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return v.call(this)},set:function(b){h=""+b,S.call(this,b)}}),Object.defineProperty(i,o,{enumerable:u.enumerable}),{getValue:function(){return h},setValue:function(b){h=""+b},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function We(i){i._valueTracker||(i._valueTracker=Xe(i))}function pt(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var u=o.getValue(),h="";return i&&(h=Me(i)?i.checked?"true":"false":i.value),i=h,i!==u?(o.setValue(i),!0):!1}function He(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ot(i,o){var u=o.checked;return U({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??i._wrapperState.initialChecked})}function ht(i,o){var u=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;u=he(o.value!=null?o.value:u),i._wrapperState={initialChecked:h,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Qe(i,o){o=o.checked,o!=null&&I(i,"checked",o,!1)}function re(i,o){Qe(i,o);var u=he(o.value),h=o.type;if(u!=null)h==="number"?(u===0&&i.value===""||i.value!=u)&&(i.value=""+u):i.value!==""+u&&(i.value=""+u);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Mt(i,o.type,u):o.hasOwnProperty("defaultValue")&&Mt(i,o.type,he(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function vt(i,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,u||o===i.value||(i.value=o),i.defaultValue=o}u=i.name,u!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,u!==""&&(i.name=u)}function Mt(i,o,u){(o!=="number"||He(i.ownerDocument)!==i)&&(u==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+u&&(i.defaultValue=""+u))}var Lt=Array.isArray;function it(i,o,u,h){if(i=i.options,o){o={};for(var v=0;v<u.length;v++)o["$"+u[v]]=!0;for(u=0;u<i.length;u++)v=o.hasOwnProperty("$"+i[u].value),i[u].selected!==v&&(i[u].selected=v),v&&h&&(i[u].defaultSelected=!0)}else{for(u=""+he(u),o=null,v=0;v<i.length;v++){if(i[v].value===u){i[v].selected=!0,h&&(i[v].defaultSelected=!0);return}o!==null||i[v].disabled||(o=i[v])}o!==null&&(o.selected=!0)}}function Et(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return U({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Y(i,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(Lt(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}i._wrapperState={initialValue:he(u)}}function Gt(i,o){var u=he(o.value),h=he(o.defaultValue);u!=null&&(u=""+u,u!==i.value&&(i.value=u),o.defaultValue==null&&i.defaultValue!==u&&(i.defaultValue=u)),h!=null&&(i.defaultValue=""+h)}function Je(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function O(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?O(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Z,se=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,h,v){MSApp.execUnsafeLocalFunction(function(){return i(o,u,h,v)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Z.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function de(i,o){if(o){var u=i.firstChild;if(u&&u===i.lastChild&&u.nodeType===3){u.nodeValue=o;return}}i.textContent=o}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Te=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(i){Te.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),we[o]=we[i]})});function me(i,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||we.hasOwnProperty(i)&&we[i]?(""+o).trim():o+"px"}function _e(i,o){i=i.style;for(var u in o)if(o.hasOwnProperty(u)){var h=u.indexOf("--")===0,v=me(u,o[u],h);u==="float"&&(u="cssFloat"),h?i.setProperty(u,v):i[u]=v}}var Ie=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(i,o){if(o){if(Ie[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function ke(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ne=null;function Ce(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var rt=null,$e=null,q=null;function Re(i){if(i=zu(i)){if(typeof rt!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Tf(o),rt(i.stateNode,i.type,o))}}function ve(i){$e?q?q.push(i):q=[i]:$e=i}function Ue(){if($e){var i=$e,o=q;if(q=$e=null,Re(i),o)for(i=0;i<o.length;i++)Re(o[i])}}function Ve(i,o){return i(o)}function Ee(){}var ye=!1;function Se(i,o,u){if(ye)return i(o,u);ye=!0;try{return Ve(i,o,u)}finally{ye=!1,($e!==null||q!==null)&&(Ee(),Ue())}}function Le(i,o){var u=i.stateNode;if(u===null)return null;var h=Tf(u);if(h===null)return null;u=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var xe=!1;if(c)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){xe=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{xe=!1}function et(i,o,u,h,v,S,b,V,$){var pe=Array.prototype.slice.call(arguments,3);try{o.apply(u,pe)}catch(be){this.onError(be)}}var gt=!1,mn=null,bt=!1,Qt=null,Hn={onError:function(i){gt=!0,mn=i}};function ln(i,o,u,h,v,S,b,V,$){gt=!1,mn=null,et.apply(Hn,arguments)}function en(i,o,u,h,v,S,b,V,$){if(ln.apply(this,arguments),gt){if(gt){var pe=mn;gt=!1,mn=null}else throw Error(t(198));bt||(bt=!0,Qt=pe)}}function Ct(i){var o=i,u=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(u=o.return),i=o.return;while(i)}return o.tag===3?u:null}function ti(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function tn(i){if(Ct(i)!==i)throw Error(t(188))}function ni(i){var o=i.alternate;if(!o){if(o=Ct(i),o===null)throw Error(t(188));return o!==i?null:i}for(var u=i,h=o;;){var v=u.return;if(v===null)break;var S=v.alternate;if(S===null){if(h=v.return,h!==null){u=h;continue}break}if(v.child===S.child){for(S=v.child;S;){if(S===u)return tn(v),i;if(S===h)return tn(v),o;S=S.sibling}throw Error(t(188))}if(u.return!==h.return)u=v,h=S;else{for(var b=!1,V=v.child;V;){if(V===u){b=!0,u=v,h=S;break}if(V===h){b=!0,h=v,u=S;break}V=V.sibling}if(!b){for(V=S.child;V;){if(V===u){b=!0,u=S,h=v;break}if(V===h){b=!0,h=S,u=v;break}V=V.sibling}if(!b)throw Error(t(189))}}if(u.alternate!==h)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?i:o}function ii(i){return i=ni(i),i!==null?Tn(i):null}function Tn(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Tn(i);if(o!==null)return o;i=i.sibling}return null}var _n=e.unstable_scheduleCallback,Nn=e.unstable_cancelCallback,Rr=e.unstable_shouldYield,uo=e.unstable_requestPaint,Pt=e.unstable_now,wn=e.unstable_getCurrentPriorityLevel,yi=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,Q=e.unstable_NormalPriority,fe=e.unstable_LowPriority,ae=e.unstable_IdlePriority,le=null,Be=null;function Ye(i){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(le,i,void 0,(i.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:Tt,at=Math.log,dt=Math.LN2;function Tt(i){return i>>>=0,i===0?32:31-(at(i)/dt|0)|0}var wt=64,ct=4194304;function qt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function hn(i,o){var u=i.pendingLanes;if(u===0)return 0;var h=0,v=i.suspendedLanes,S=i.pingedLanes,b=u&268435455;if(b!==0){var V=b&~v;V!==0?h=qt(V):(S&=b,S!==0&&(h=qt(S)))}else b=u&~v,b!==0?h=qt(b):S!==0&&(h=qt(S));if(h===0)return 0;if(o!==0&&o!==h&&(o&v)===0&&(v=h&-h,S=o&-o,v>=S||v===16&&(S&4194240)!==0))return o;if((h&4)!==0&&(h|=u&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)u=31-Ge(o),v=1<<u,h|=i[u],o&=~v;return h}function Sn(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nn(i,o){for(var u=i.suspendedLanes,h=i.pingedLanes,v=i.expirationTimes,S=i.pendingLanes;0<S;){var b=31-Ge(S),V=1<<b,$=v[b];$===-1?((V&u)===0||(V&h)!==0)&&(v[b]=Sn(V,o)):$<=o&&(i.expiredLanes|=V),S&=~V}}function Gn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function je(){var i=wt;return wt<<=1,(wt&4194240)===0&&(wt=64),i}function fi(i){for(var o=[],u=0;31>u;u++)o.push(i);return o}function Nt(i,o,u){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-Ge(o),i[o]=u}function $i(i,o){var u=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<u;){var v=31-Ge(u),S=1<<v;o[v]=0,h[v]=-1,i[v]=-1,u&=~S}}function Ki(i,o){var u=i.entangledLanes|=o;for(i=i.entanglements;u;){var h=31-Ge(u),v=1<<h;v&o|i[h]&o&&(i[h]|=o),u&=~v}}var Ot=0;function Us(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Zt,gn,Zr,rn,Jr,ds=!1,ra=[],co=null,fo=null,ho=null,Tu=new Map,wu=new Map,po=[],aT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sv(i,o){switch(i){case"focusin":case"focusout":co=null;break;case"dragenter":case"dragleave":fo=null;break;case"mouseover":case"mouseout":ho=null;break;case"pointerover":case"pointerout":Tu.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":wu.delete(o.pointerId)}}function Au(i,o,u,h,v,S){return i===null||i.nativeEvent!==S?(i={blockedOn:o,domEventName:u,eventSystemFlags:h,nativeEvent:S,targetContainers:[v]},o!==null&&(o=zu(o),o!==null&&gn(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),i)}function lT(i,o,u,h,v){switch(o){case"focusin":return co=Au(co,i,o,u,h,v),!0;case"dragenter":return fo=Au(fo,i,o,u,h,v),!0;case"mouseover":return ho=Au(ho,i,o,u,h,v),!0;case"pointerover":var S=v.pointerId;return Tu.set(S,Au(Tu.get(S)||null,i,o,u,h,v)),!0;case"gotpointercapture":return S=v.pointerId,wu.set(S,Au(wu.get(S)||null,i,o,u,h,v)),!0}return!1}function ov(i){var o=sa(i.target);if(o!==null){var u=Ct(o);if(u!==null){if(o=u.tag,o===13){if(o=ti(u),o!==null){i.blockedOn=o,Jr(i.priority,function(){Zr(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){i.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}i.blockedOn=null}function cf(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var u=up(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(u===null){u=i.nativeEvent;var h=new u.constructor(u.type,u);Ne=h,u.target.dispatchEvent(h),Ne=null}else return o=zu(u),o!==null&&gn(o),i.blockedOn=u,!1;o.shift()}return!0}function av(i,o,u){cf(i)&&u.delete(o)}function uT(){ds=!1,co!==null&&cf(co)&&(co=null),fo!==null&&cf(fo)&&(fo=null),ho!==null&&cf(ho)&&(ho=null),Tu.forEach(av),wu.forEach(av)}function bu(i,o){i.blockedOn===o&&(i.blockedOn=null,ds||(ds=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,uT)))}function Cu(i){function o(v){return bu(v,i)}if(0<ra.length){bu(ra[0],i);for(var u=1;u<ra.length;u++){var h=ra[u];h.blockedOn===i&&(h.blockedOn=null)}}for(co!==null&&bu(co,i),fo!==null&&bu(fo,i),ho!==null&&bu(ho,i),Tu.forEach(o),wu.forEach(o),u=0;u<po.length;u++)h=po[u],h.blockedOn===i&&(h.blockedOn=null);for(;0<po.length&&(u=po[0],u.blockedOn===null);)ov(u),u.blockedOn===null&&po.shift()}var ja=A.ReactCurrentBatchConfig,ff=!0;function cT(i,o,u,h){var v=Ot,S=ja.transition;ja.transition=null;try{Ot=1,lp(i,o,u,h)}finally{Ot=v,ja.transition=S}}function fT(i,o,u,h){var v=Ot,S=ja.transition;ja.transition=null;try{Ot=4,lp(i,o,u,h)}finally{Ot=v,ja.transition=S}}function lp(i,o,u,h){if(ff){var v=up(i,o,u,h);if(v===null)Ap(i,o,h,df,u),sv(i,h);else if(lT(v,i,o,u,h))h.stopPropagation();else if(sv(i,h),o&4&&-1<aT.indexOf(i)){for(;v!==null;){var S=zu(v);if(S!==null&&Zt(S),S=up(i,o,u,h),S===null&&Ap(i,o,h,df,u),S===v)break;v=S}v!==null&&h.stopPropagation()}else Ap(i,o,h,null,u)}}var df=null;function up(i,o,u,h){if(df=null,i=Ce(h),i=sa(i),i!==null)if(o=Ct(i),o===null)i=null;else if(u=o.tag,u===13){if(i=ti(o),i!==null)return i;i=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return df=i,null}function lv(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wn()){case yi:return 1;case N:return 4;case Q:case fe:return 16;case ae:return 536870912;default:return 16}default:return 16}}var mo=null,cp=null,hf=null;function uv(){if(hf)return hf;var i,o=cp,u=o.length,h,v="value"in mo?mo.value:mo.textContent,S=v.length;for(i=0;i<u&&o[i]===v[i];i++);var b=u-i;for(h=1;h<=b&&o[u-h]===v[S-h];h++);return hf=v.slice(i,1<h?1-h:void 0)}function pf(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function mf(){return!0}function cv(){return!1}function fr(i){function o(u,h,v,S,b){this._reactName=u,this._targetInst=v,this.type=h,this.nativeEvent=S,this.target=b,this.currentTarget=null;for(var V in i)i.hasOwnProperty(V)&&(u=i[V],this[V]=u?u(S):S[V]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?mf:cv,this.isPropagationStopped=cv,this}return U(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=mf)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=mf)},persist:function(){},isPersistent:mf}),o}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fp=fr(Za),Ru=U({},Za,{view:0,detail:0}),dT=fr(Ru),dp,hp,Pu,_f=U({},Ru,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mp,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Pu&&(Pu&&i.type==="mousemove"?(dp=i.screenX-Pu.screenX,hp=i.screenY-Pu.screenY):hp=dp=0,Pu=i),dp)},movementY:function(i){return"movementY"in i?i.movementY:hp}}),fv=fr(_f),hT=U({},_f,{dataTransfer:0}),pT=fr(hT),mT=U({},Ru,{relatedTarget:0}),pp=fr(mT),_T=U({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),gT=fr(_T),vT=U({},Za,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),xT=fr(vT),yT=U({},Za,{data:0}),dv=fr(yT),ST={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ET={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TT(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=ET[i])?!!o[i]:!1}function mp(){return TT}var wT=U({},Ru,{key:function(i){if(i.key){var o=ST[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=pf(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?MT[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mp,charCode:function(i){return i.type==="keypress"?pf(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?pf(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),AT=fr(wT),bT=U({},_f,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hv=fr(bT),CT=U({},Ru,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mp}),RT=fr(CT),PT=U({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),DT=fr(PT),LT=U({},_f,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),NT=fr(LT),IT=[9,13,27,32],_p=c&&"CompositionEvent"in window,Du=null;c&&"documentMode"in document&&(Du=document.documentMode);var UT=c&&"TextEvent"in window&&!Du,pv=c&&(!_p||Du&&8<Du&&11>=Du),mv=" ",_v=!1;function gv(i,o){switch(i){case"keyup":return IT.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vv(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ja=!1;function FT(i,o){switch(i){case"compositionend":return vv(o);case"keypress":return o.which!==32?null:(_v=!0,mv);case"textInput":return i=o.data,i===mv&&_v?null:i;default:return null}}function OT(i,o){if(Ja)return i==="compositionend"||!_p&&gv(i,o)?(i=uv(),hf=cp=mo=null,Ja=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return pv&&o.locale!=="ko"?null:o.data;default:return null}}var kT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xv(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!kT[i.type]:o==="textarea"}function yv(i,o,u,h){ve(h),o=Sf(o,"onChange"),0<o.length&&(u=new fp("onChange","change",null,u,h),i.push({event:u,listeners:o}))}var Lu=null,Nu=null;function BT(i){kv(i,0)}function gf(i){var o=il(i);if(pt(o))return i}function zT(i,o){if(i==="change")return o}var Sv=!1;if(c){var gp;if(c){var vp="oninput"in document;if(!vp){var Mv=document.createElement("div");Mv.setAttribute("oninput","return;"),vp=typeof Mv.oninput=="function"}gp=vp}else gp=!1;Sv=gp&&(!document.documentMode||9<document.documentMode)}function Ev(){Lu&&(Lu.detachEvent("onpropertychange",Tv),Nu=Lu=null)}function Tv(i){if(i.propertyName==="value"&&gf(Nu)){var o=[];yv(o,Nu,i,Ce(i)),Se(BT,o)}}function VT(i,o,u){i==="focusin"?(Ev(),Lu=o,Nu=u,Lu.attachEvent("onpropertychange",Tv)):i==="focusout"&&Ev()}function HT(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return gf(Nu)}function GT(i,o){if(i==="click")return gf(o)}function WT(i,o){if(i==="input"||i==="change")return gf(o)}function XT(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Qr=typeof Object.is=="function"?Object.is:XT;function Iu(i,o){if(Qr(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var u=Object.keys(i),h=Object.keys(o);if(u.length!==h.length)return!1;for(h=0;h<u.length;h++){var v=u[h];if(!f.call(o,v)||!Qr(i[v],o[v]))return!1}return!0}function wv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Av(i,o){var u=wv(i);i=0;for(var h;u;){if(u.nodeType===3){if(h=i+u.textContent.length,i<=o&&h>=o)return{node:u,offset:o-i};i=h}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=wv(u)}}function bv(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?bv(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Cv(){for(var i=window,o=He();o instanceof i.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)i=o.contentWindow;else break;o=He(i.document)}return o}function xp(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function YT(i){var o=Cv(),u=i.focusedElem,h=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&bv(u.ownerDocument.documentElement,u)){if(h!==null&&xp(u)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(i,u.value.length);else if(i=(o=u.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var v=u.textContent.length,S=Math.min(h.start,v);h=h.end===void 0?S:Math.min(h.end,v),!i.extend&&S>h&&(v=h,h=S,S=v),v=Av(u,S);var b=Av(u,h);v&&b&&(i.rangeCount!==1||i.anchorNode!==v.node||i.anchorOffset!==v.offset||i.focusNode!==b.node||i.focusOffset!==b.offset)&&(o=o.createRange(),o.setStart(v.node,v.offset),i.removeAllRanges(),S>h?(i.addRange(o),i.extend(b.node,b.offset)):(o.setEnd(b.node,b.offset),i.addRange(o)))}}for(o=[],i=u;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)i=o[u],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var qT=c&&"documentMode"in document&&11>=document.documentMode,Qa=null,yp=null,Uu=null,Sp=!1;function Rv(i,o,u){var h=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Sp||Qa==null||Qa!==He(h)||(h=Qa,"selectionStart"in h&&xp(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Uu&&Iu(Uu,h)||(Uu=h,h=Sf(yp,"onSelect"),0<h.length&&(o=new fp("onSelect","select",null,o,u),i.push({event:o,listeners:h}),o.target=Qa)))}function vf(i,o){var u={};return u[i.toLowerCase()]=o.toLowerCase(),u["Webkit"+i]="webkit"+o,u["Moz"+i]="moz"+o,u}var el={animationend:vf("Animation","AnimationEnd"),animationiteration:vf("Animation","AnimationIteration"),animationstart:vf("Animation","AnimationStart"),transitionend:vf("Transition","TransitionEnd")},Mp={},Pv={};c&&(Pv=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function xf(i){if(Mp[i])return Mp[i];if(!el[i])return i;var o=el[i],u;for(u in o)if(o.hasOwnProperty(u)&&u in Pv)return Mp[i]=o[u];return i}var Dv=xf("animationend"),Lv=xf("animationiteration"),Nv=xf("animationstart"),Iv=xf("transitionend"),Uv=new Map,Fv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _o(i,o){Uv.set(i,o),a(o,[i])}for(var Ep=0;Ep<Fv.length;Ep++){var Tp=Fv[Ep],$T=Tp.toLowerCase(),KT=Tp[0].toUpperCase()+Tp.slice(1);_o($T,"on"+KT)}_o(Dv,"onAnimationEnd"),_o(Lv,"onAnimationIteration"),_o(Nv,"onAnimationStart"),_o("dblclick","onDoubleClick"),_o("focusin","onFocus"),_o("focusout","onBlur"),_o(Iv,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fu));function Ov(i,o,u){var h=i.type||"unknown-event";i.currentTarget=u,en(h,o,void 0,i),i.currentTarget=null}function kv(i,o){o=(o&4)!==0;for(var u=0;u<i.length;u++){var h=i[u],v=h.event;h=h.listeners;e:{var S=void 0;if(o)for(var b=h.length-1;0<=b;b--){var V=h[b],$=V.instance,pe=V.currentTarget;if(V=V.listener,$!==S&&v.isPropagationStopped())break e;Ov(v,V,pe),S=$}else for(b=0;b<h.length;b++){if(V=h[b],$=V.instance,pe=V.currentTarget,V=V.listener,$!==S&&v.isPropagationStopped())break e;Ov(v,V,pe),S=$}}}if(bt)throw i=Qt,bt=!1,Qt=null,i}function vn(i,o){var u=o[Lp];u===void 0&&(u=o[Lp]=new Set);var h=i+"__bubble";u.has(h)||(Bv(o,i,2,!1),u.add(h))}function wp(i,o,u){var h=0;o&&(h|=4),Bv(u,i,h,o)}var yf="_reactListening"+Math.random().toString(36).slice(2);function Ou(i){if(!i[yf]){i[yf]=!0,n.forEach(function(u){u!=="selectionchange"&&(jT.has(u)||wp(u,!1,i),wp(u,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[yf]||(o[yf]=!0,wp("selectionchange",!1,o))}}function Bv(i,o,u,h){switch(lv(o)){case 1:var v=cT;break;case 4:v=fT;break;default:v=lp}u=v.bind(null,o,u,i),v=void 0,!xe||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),h?v!==void 0?i.addEventListener(o,u,{capture:!0,passive:v}):i.addEventListener(o,u,!0):v!==void 0?i.addEventListener(o,u,{passive:v}):i.addEventListener(o,u,!1)}function Ap(i,o,u,h,v){var S=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var b=h.tag;if(b===3||b===4){var V=h.stateNode.containerInfo;if(V===v||V.nodeType===8&&V.parentNode===v)break;if(b===4)for(b=h.return;b!==null;){var $=b.tag;if(($===3||$===4)&&($=b.stateNode.containerInfo,$===v||$.nodeType===8&&$.parentNode===v))return;b=b.return}for(;V!==null;){if(b=sa(V),b===null)return;if($=b.tag,$===5||$===6){h=S=b;continue e}V=V.parentNode}}h=h.return}Se(function(){var pe=S,be=Ce(u),Pe=[];e:{var Ae=Uv.get(i);if(Ae!==void 0){var Ze=fp,st=i;switch(i){case"keypress":if(pf(u)===0)break e;case"keydown":case"keyup":Ze=AT;break;case"focusin":st="focus",Ze=pp;break;case"focusout":st="blur",Ze=pp;break;case"beforeblur":case"afterblur":Ze=pp;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ze=fv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ze=pT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ze=RT;break;case Dv:case Lv:case Nv:Ze=gT;break;case Iv:Ze=DT;break;case"scroll":Ze=dT;break;case"wheel":Ze=NT;break;case"copy":case"cut":case"paste":Ze=xT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ze=hv}var lt=(o&4)!==0,Bn=!lt&&i==="scroll",ue=lt?Ae!==null?Ae+"Capture":null:Ae;lt=[];for(var J=pe,ce;J!==null;){ce=J;var ze=ce.stateNode;if(ce.tag===5&&ze!==null&&(ce=ze,ue!==null&&(ze=Le(J,ue),ze!=null&&lt.push(ku(J,ze,ce)))),Bn)break;J=J.return}0<lt.length&&(Ae=new Ze(Ae,st,null,u,be),Pe.push({event:Ae,listeners:lt}))}}if((o&7)===0){e:{if(Ae=i==="mouseover"||i==="pointerover",Ze=i==="mouseout"||i==="pointerout",Ae&&u!==Ne&&(st=u.relatedTarget||u.fromElement)&&(sa(st)||st[Fs]))break e;if((Ze||Ae)&&(Ae=be.window===be?be:(Ae=be.ownerDocument)?Ae.defaultView||Ae.parentWindow:window,Ze?(st=u.relatedTarget||u.toElement,Ze=pe,st=st?sa(st):null,st!==null&&(Bn=Ct(st),st!==Bn||st.tag!==5&&st.tag!==6)&&(st=null)):(Ze=null,st=pe),Ze!==st)){if(lt=fv,ze="onMouseLeave",ue="onMouseEnter",J="mouse",(i==="pointerout"||i==="pointerover")&&(lt=hv,ze="onPointerLeave",ue="onPointerEnter",J="pointer"),Bn=Ze==null?Ae:il(Ze),ce=st==null?Ae:il(st),Ae=new lt(ze,J+"leave",Ze,u,be),Ae.target=Bn,Ae.relatedTarget=ce,ze=null,sa(be)===pe&&(lt=new lt(ue,J+"enter",st,u,be),lt.target=ce,lt.relatedTarget=Bn,ze=lt),Bn=ze,Ze&&st)t:{for(lt=Ze,ue=st,J=0,ce=lt;ce;ce=tl(ce))J++;for(ce=0,ze=ue;ze;ze=tl(ze))ce++;for(;0<J-ce;)lt=tl(lt),J--;for(;0<ce-J;)ue=tl(ue),ce--;for(;J--;){if(lt===ue||ue!==null&&lt===ue.alternate)break t;lt=tl(lt),ue=tl(ue)}lt=null}else lt=null;Ze!==null&&zv(Pe,Ae,Ze,lt,!1),st!==null&&Bn!==null&&zv(Pe,Bn,st,lt,!0)}}e:{if(Ae=pe?il(pe):window,Ze=Ae.nodeName&&Ae.nodeName.toLowerCase(),Ze==="select"||Ze==="input"&&Ae.type==="file")var ft=zT;else if(xv(Ae))if(Sv)ft=WT;else{ft=HT;var mt=VT}else(Ze=Ae.nodeName)&&Ze.toLowerCase()==="input"&&(Ae.type==="checkbox"||Ae.type==="radio")&&(ft=GT);if(ft&&(ft=ft(i,pe))){yv(Pe,ft,u,be);break e}mt&&mt(i,Ae,pe),i==="focusout"&&(mt=Ae._wrapperState)&&mt.controlled&&Ae.type==="number"&&Mt(Ae,"number",Ae.value)}switch(mt=pe?il(pe):window,i){case"focusin":(xv(mt)||mt.contentEditable==="true")&&(Qa=mt,yp=pe,Uu=null);break;case"focusout":Uu=yp=Qa=null;break;case"mousedown":Sp=!0;break;case"contextmenu":case"mouseup":case"dragend":Sp=!1,Rv(Pe,u,be);break;case"selectionchange":if(qT)break;case"keydown":case"keyup":Rv(Pe,u,be)}var _t;if(_p)e:{switch(i){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Ja?gv(i,u)&&(yt="onCompositionEnd"):i==="keydown"&&u.keyCode===229&&(yt="onCompositionStart");yt&&(pv&&u.locale!=="ko"&&(Ja||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Ja&&(_t=uv()):(mo=be,cp="value"in mo?mo.value:mo.textContent,Ja=!0)),mt=Sf(pe,yt),0<mt.length&&(yt=new dv(yt,i,null,u,be),Pe.push({event:yt,listeners:mt}),_t?yt.data=_t:(_t=vv(u),_t!==null&&(yt.data=_t)))),(_t=UT?FT(i,u):OT(i,u))&&(pe=Sf(pe,"onBeforeInput"),0<pe.length&&(be=new dv("onBeforeInput","beforeinput",null,u,be),Pe.push({event:be,listeners:pe}),be.data=_t))}kv(Pe,o)})}function ku(i,o,u){return{instance:i,listener:o,currentTarget:u}}function Sf(i,o){for(var u=o+"Capture",h=[];i!==null;){var v=i,S=v.stateNode;v.tag===5&&S!==null&&(v=S,S=Le(i,u),S!=null&&h.unshift(ku(i,S,v)),S=Le(i,o),S!=null&&h.push(ku(i,S,v))),i=i.return}return h}function tl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function zv(i,o,u,h,v){for(var S=o._reactName,b=[];u!==null&&u!==h;){var V=u,$=V.alternate,pe=V.stateNode;if($!==null&&$===h)break;V.tag===5&&pe!==null&&(V=pe,v?($=Le(u,S),$!=null&&b.unshift(ku(u,$,V))):v||($=Le(u,S),$!=null&&b.push(ku(u,$,V)))),u=u.return}b.length!==0&&i.push({event:o,listeners:b})}var ZT=/\r\n?/g,JT=/\u0000|\uFFFD/g;function Vv(i){return(typeof i=="string"?i:""+i).replace(ZT,`
`).replace(JT,"")}function Mf(i,o,u){if(o=Vv(o),Vv(i)!==o&&u)throw Error(t(425))}function Ef(){}var bp=null,Cp=null;function Rp(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Pp=typeof setTimeout=="function"?setTimeout:void 0,QT=typeof clearTimeout=="function"?clearTimeout:void 0,Hv=typeof Promise=="function"?Promise:void 0,ew=typeof queueMicrotask=="function"?queueMicrotask:typeof Hv<"u"?function(i){return Hv.resolve(null).then(i).catch(tw)}:Pp;function tw(i){setTimeout(function(){throw i})}function Dp(i,o){var u=o,h=0;do{var v=u.nextSibling;if(i.removeChild(u),v&&v.nodeType===8)if(u=v.data,u==="/$"){if(h===0){i.removeChild(v),Cu(o);return}h--}else u!=="$"&&u!=="$?"&&u!=="$!"||h++;u=v}while(u);Cu(o)}function go(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function Gv(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return i;o--}else u==="/$"&&o++}i=i.previousSibling}return null}var nl=Math.random().toString(36).slice(2),hs="__reactFiber$"+nl,Bu="__reactProps$"+nl,Fs="__reactContainer$"+nl,Lp="__reactEvents$"+nl,nw="__reactListeners$"+nl,iw="__reactHandles$"+nl;function sa(i){var o=i[hs];if(o)return o;for(var u=i.parentNode;u;){if(o=u[Fs]||u[hs]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(i=Gv(i);i!==null;){if(u=i[hs])return u;i=Gv(i)}return o}i=u,u=i.parentNode}return null}function zu(i){return i=i[hs]||i[Fs],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function il(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Tf(i){return i[Bu]||null}var Np=[],rl=-1;function vo(i){return{current:i}}function xn(i){0>rl||(i.current=Np[rl],Np[rl]=null,rl--)}function pn(i,o){rl++,Np[rl]=i.current,i.current=o}var xo={},Si=vo(xo),ji=vo(!1),oa=xo;function sl(i,o){var u=i.type.contextTypes;if(!u)return xo;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var v={},S;for(S in u)v[S]=o[S];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=v),v}function Zi(i){return i=i.childContextTypes,i!=null}function wf(){xn(ji),xn(Si)}function Wv(i,o,u){if(Si.current!==xo)throw Error(t(168));pn(Si,o),pn(ji,u)}function Xv(i,o,u){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return u;h=h.getChildContext();for(var v in h)if(!(v in o))throw Error(t(108,ge(i)||"Unknown",v));return U({},u,h)}function Af(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||xo,oa=Si.current,pn(Si,i),pn(ji,ji.current),!0}function Yv(i,o,u){var h=i.stateNode;if(!h)throw Error(t(169));u?(i=Xv(i,o,oa),h.__reactInternalMemoizedMergedChildContext=i,xn(ji),xn(Si),pn(Si,i)):xn(ji),pn(ji,u)}var Os=null,bf=!1,Ip=!1;function qv(i){Os===null?Os=[i]:Os.push(i)}function rw(i){bf=!0,qv(i)}function yo(){if(!Ip&&Os!==null){Ip=!0;var i=0,o=Ot;try{var u=Os;for(Ot=1;i<u.length;i++){var h=u[i];do h=h(!0);while(h!==null)}Os=null,bf=!1}catch(v){throw Os!==null&&(Os=Os.slice(i+1)),_n(yi,yo),v}finally{Ot=o,Ip=!1}}return null}var ol=[],al=0,Cf=null,Rf=0,Pr=[],Dr=0,aa=null,ks=1,Bs="";function la(i,o){ol[al++]=Rf,ol[al++]=Cf,Cf=i,Rf=o}function $v(i,o,u){Pr[Dr++]=ks,Pr[Dr++]=Bs,Pr[Dr++]=aa,aa=i;var h=ks;i=Bs;var v=32-Ge(h)-1;h&=~(1<<v),u+=1;var S=32-Ge(o)+v;if(30<S){var b=v-v%5;S=(h&(1<<b)-1).toString(32),h>>=b,v-=b,ks=1<<32-Ge(o)+v|u<<v|h,Bs=S+i}else ks=1<<S|u<<v|h,Bs=i}function Up(i){i.return!==null&&(la(i,1),$v(i,1,0))}function Fp(i){for(;i===Cf;)Cf=ol[--al],ol[al]=null,Rf=ol[--al],ol[al]=null;for(;i===aa;)aa=Pr[--Dr],Pr[Dr]=null,Bs=Pr[--Dr],Pr[Dr]=null,ks=Pr[--Dr],Pr[Dr]=null}var dr=null,hr=null,Mn=!1,es=null;function Kv(i,o){var u=Ur(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=i,o=i.deletions,o===null?(i.deletions=[u],i.flags|=16):o.push(u)}function jv(i,o){switch(i.tag){case 5:var u=i.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,dr=i,hr=go(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,dr=i,hr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=aa!==null?{id:ks,overflow:Bs}:null,i.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=Ur(18,null,null,0),u.stateNode=o,u.return=i,i.child=u,dr=i,hr=null,!0):!1;default:return!1}}function Op(i){return(i.mode&1)!==0&&(i.flags&128)===0}function kp(i){if(Mn){var o=hr;if(o){var u=o;if(!jv(i,o)){if(Op(i))throw Error(t(418));o=go(u.nextSibling);var h=dr;o&&jv(i,o)?Kv(h,u):(i.flags=i.flags&-4097|2,Mn=!1,dr=i)}}else{if(Op(i))throw Error(t(418));i.flags=i.flags&-4097|2,Mn=!1,dr=i}}}function Zv(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;dr=i}function Pf(i){if(i!==dr)return!1;if(!Mn)return Zv(i),Mn=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Rp(i.type,i.memoizedProps)),o&&(o=hr)){if(Op(i))throw Jv(),Error(t(418));for(;o;)Kv(i,o),o=go(o.nextSibling)}if(Zv(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="/$"){if(o===0){hr=go(i.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}i=i.nextSibling}hr=null}}else hr=dr?go(i.stateNode.nextSibling):null;return!0}function Jv(){for(var i=hr;i;)i=go(i.nextSibling)}function ll(){hr=dr=null,Mn=!1}function Bp(i){es===null?es=[i]:es.push(i)}var sw=A.ReactCurrentBatchConfig;function Vu(i,o,u){if(i=u.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var h=u.stateNode}if(!h)throw Error(t(147,i));var v=h,S=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===S?o.ref:(o=function(b){var V=v.refs;b===null?delete V[S]:V[S]=b},o._stringRef=S,o)}if(typeof i!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,i))}return i}function Df(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Qv(i){var o=i._init;return o(i._payload)}function ex(i){function o(ue,J){if(i){var ce=ue.deletions;ce===null?(ue.deletions=[J],ue.flags|=16):ce.push(J)}}function u(ue,J){if(!i)return null;for(;J!==null;)o(ue,J),J=J.sibling;return null}function h(ue,J){for(ue=new Map;J!==null;)J.key!==null?ue.set(J.key,J):ue.set(J.index,J),J=J.sibling;return ue}function v(ue,J){return ue=Co(ue,J),ue.index=0,ue.sibling=null,ue}function S(ue,J,ce){return ue.index=ce,i?(ce=ue.alternate,ce!==null?(ce=ce.index,ce<J?(ue.flags|=2,J):ce):(ue.flags|=2,J)):(ue.flags|=1048576,J)}function b(ue){return i&&ue.alternate===null&&(ue.flags|=2),ue}function V(ue,J,ce,ze){return J===null||J.tag!==6?(J=Pm(ce,ue.mode,ze),J.return=ue,J):(J=v(J,ce),J.return=ue,J)}function $(ue,J,ce,ze){var ft=ce.type;return ft===R?be(ue,J,ce.props.children,ze,ce.key):J!==null&&(J.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===ee&&Qv(ft)===J.type)?(ze=v(J,ce.props),ze.ref=Vu(ue,J,ce),ze.return=ue,ze):(ze=td(ce.type,ce.key,ce.props,null,ue.mode,ze),ze.ref=Vu(ue,J,ce),ze.return=ue,ze)}function pe(ue,J,ce,ze){return J===null||J.tag!==4||J.stateNode.containerInfo!==ce.containerInfo||J.stateNode.implementation!==ce.implementation?(J=Dm(ce,ue.mode,ze),J.return=ue,J):(J=v(J,ce.children||[]),J.return=ue,J)}function be(ue,J,ce,ze,ft){return J===null||J.tag!==7?(J=_a(ce,ue.mode,ze,ft),J.return=ue,J):(J=v(J,ce),J.return=ue,J)}function Pe(ue,J,ce){if(typeof J=="string"&&J!==""||typeof J=="number")return J=Pm(""+J,ue.mode,ce),J.return=ue,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return ce=td(J.type,J.key,J.props,null,ue.mode,ce),ce.ref=Vu(ue,null,J),ce.return=ue,ce;case P:return J=Dm(J,ue.mode,ce),J.return=ue,J;case ee:var ze=J._init;return Pe(ue,ze(J._payload),ce)}if(Lt(J)||G(J))return J=_a(J,ue.mode,ce,null),J.return=ue,J;Df(ue,J)}return null}function Ae(ue,J,ce,ze){var ft=J!==null?J.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ft!==null?null:V(ue,J,""+ce,ze);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case D:return ce.key===ft?$(ue,J,ce,ze):null;case P:return ce.key===ft?pe(ue,J,ce,ze):null;case ee:return ft=ce._init,Ae(ue,J,ft(ce._payload),ze)}if(Lt(ce)||G(ce))return ft!==null?null:be(ue,J,ce,ze,null);Df(ue,ce)}return null}function Ze(ue,J,ce,ze,ft){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return ue=ue.get(ce)||null,V(J,ue,""+ze,ft);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case D:return ue=ue.get(ze.key===null?ce:ze.key)||null,$(J,ue,ze,ft);case P:return ue=ue.get(ze.key===null?ce:ze.key)||null,pe(J,ue,ze,ft);case ee:var mt=ze._init;return Ze(ue,J,ce,mt(ze._payload),ft)}if(Lt(ze)||G(ze))return ue=ue.get(ce)||null,be(J,ue,ze,ft,null);Df(J,ze)}return null}function st(ue,J,ce,ze){for(var ft=null,mt=null,_t=J,yt=J=0,oi=null;_t!==null&&yt<ce.length;yt++){_t.index>yt?(oi=_t,_t=null):oi=_t.sibling;var jt=Ae(ue,_t,ce[yt],ze);if(jt===null){_t===null&&(_t=oi);break}i&&_t&&jt.alternate===null&&o(ue,_t),J=S(jt,J,yt),mt===null?ft=jt:mt.sibling=jt,mt=jt,_t=oi}if(yt===ce.length)return u(ue,_t),Mn&&la(ue,yt),ft;if(_t===null){for(;yt<ce.length;yt++)_t=Pe(ue,ce[yt],ze),_t!==null&&(J=S(_t,J,yt),mt===null?ft=_t:mt.sibling=_t,mt=_t);return Mn&&la(ue,yt),ft}for(_t=h(ue,_t);yt<ce.length;yt++)oi=Ze(_t,ue,yt,ce[yt],ze),oi!==null&&(i&&oi.alternate!==null&&_t.delete(oi.key===null?yt:oi.key),J=S(oi,J,yt),mt===null?ft=oi:mt.sibling=oi,mt=oi);return i&&_t.forEach(function(Ro){return o(ue,Ro)}),Mn&&la(ue,yt),ft}function lt(ue,J,ce,ze){var ft=G(ce);if(typeof ft!="function")throw Error(t(150));if(ce=ft.call(ce),ce==null)throw Error(t(151));for(var mt=ft=null,_t=J,yt=J=0,oi=null,jt=ce.next();_t!==null&&!jt.done;yt++,jt=ce.next()){_t.index>yt?(oi=_t,_t=null):oi=_t.sibling;var Ro=Ae(ue,_t,jt.value,ze);if(Ro===null){_t===null&&(_t=oi);break}i&&_t&&Ro.alternate===null&&o(ue,_t),J=S(Ro,J,yt),mt===null?ft=Ro:mt.sibling=Ro,mt=Ro,_t=oi}if(jt.done)return u(ue,_t),Mn&&la(ue,yt),ft;if(_t===null){for(;!jt.done;yt++,jt=ce.next())jt=Pe(ue,jt.value,ze),jt!==null&&(J=S(jt,J,yt),mt===null?ft=jt:mt.sibling=jt,mt=jt);return Mn&&la(ue,yt),ft}for(_t=h(ue,_t);!jt.done;yt++,jt=ce.next())jt=Ze(_t,ue,yt,jt.value,ze),jt!==null&&(i&&jt.alternate!==null&&_t.delete(jt.key===null?yt:jt.key),J=S(jt,J,yt),mt===null?ft=jt:mt.sibling=jt,mt=jt);return i&&_t.forEach(function(kw){return o(ue,kw)}),Mn&&la(ue,yt),ft}function Bn(ue,J,ce,ze){if(typeof ce=="object"&&ce!==null&&ce.type===R&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case D:e:{for(var ft=ce.key,mt=J;mt!==null;){if(mt.key===ft){if(ft=ce.type,ft===R){if(mt.tag===7){u(ue,mt.sibling),J=v(mt,ce.props.children),J.return=ue,ue=J;break e}}else if(mt.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===ee&&Qv(ft)===mt.type){u(ue,mt.sibling),J=v(mt,ce.props),J.ref=Vu(ue,mt,ce),J.return=ue,ue=J;break e}u(ue,mt);break}else o(ue,mt);mt=mt.sibling}ce.type===R?(J=_a(ce.props.children,ue.mode,ze,ce.key),J.return=ue,ue=J):(ze=td(ce.type,ce.key,ce.props,null,ue.mode,ze),ze.ref=Vu(ue,J,ce),ze.return=ue,ue=ze)}return b(ue);case P:e:{for(mt=ce.key;J!==null;){if(J.key===mt)if(J.tag===4&&J.stateNode.containerInfo===ce.containerInfo&&J.stateNode.implementation===ce.implementation){u(ue,J.sibling),J=v(J,ce.children||[]),J.return=ue,ue=J;break e}else{u(ue,J);break}else o(ue,J);J=J.sibling}J=Dm(ce,ue.mode,ze),J.return=ue,ue=J}return b(ue);case ee:return mt=ce._init,Bn(ue,J,mt(ce._payload),ze)}if(Lt(ce))return st(ue,J,ce,ze);if(G(ce))return lt(ue,J,ce,ze);Df(ue,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,J!==null&&J.tag===6?(u(ue,J.sibling),J=v(J,ce),J.return=ue,ue=J):(u(ue,J),J=Pm(ce,ue.mode,ze),J.return=ue,ue=J),b(ue)):u(ue,J)}return Bn}var ul=ex(!0),tx=ex(!1),Lf=vo(null),Nf=null,cl=null,zp=null;function Vp(){zp=cl=Nf=null}function Hp(i){var o=Lf.current;xn(Lf),i._currentValue=o}function Gp(i,o,u){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===u)break;i=i.return}}function fl(i,o){Nf=i,zp=cl=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(Ji=!0),i.firstContext=null)}function Lr(i){var o=i._currentValue;if(zp!==i)if(i={context:i,memoizedValue:o,next:null},cl===null){if(Nf===null)throw Error(t(308));cl=i,Nf.dependencies={lanes:0,firstContext:i}}else cl=cl.next=i;return o}var ua=null;function Wp(i){ua===null?ua=[i]:ua.push(i)}function nx(i,o,u,h){var v=o.interleaved;return v===null?(u.next=u,Wp(o)):(u.next=v.next,v.next=u),o.interleaved=u,zs(i,h)}function zs(i,o){i.lanes|=o;var u=i.alternate;for(u!==null&&(u.lanes|=o),u=i,i=i.return;i!==null;)i.childLanes|=o,u=i.alternate,u!==null&&(u.childLanes|=o),u=i,i=i.return;return u.tag===3?u.stateNode:null}var So=!1;function Xp(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ix(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Vs(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Mo(i,o,u){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Kt&2)!==0){var v=h.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),h.pending=o,zs(i,u)}return v=h.interleaved,v===null?(o.next=o,Wp(h)):(o.next=v.next,v.next=o),h.interleaved=o,zs(i,u)}function If(i,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,u|=h,o.lanes=u,Ki(i,u)}}function rx(i,o){var u=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,u===h)){var v=null,S=null;if(u=u.firstBaseUpdate,u!==null){do{var b={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};S===null?v=S=b:S=S.next=b,u=u.next}while(u!==null);S===null?v=S=o:S=S.next=o}else v=S=o;u={baseState:h.baseState,firstBaseUpdate:v,lastBaseUpdate:S,shared:h.shared,effects:h.effects},i.updateQueue=u;return}i=u.lastBaseUpdate,i===null?u.firstBaseUpdate=o:i.next=o,u.lastBaseUpdate=o}function Uf(i,o,u,h){var v=i.updateQueue;So=!1;var S=v.firstBaseUpdate,b=v.lastBaseUpdate,V=v.shared.pending;if(V!==null){v.shared.pending=null;var $=V,pe=$.next;$.next=null,b===null?S=pe:b.next=pe,b=$;var be=i.alternate;be!==null&&(be=be.updateQueue,V=be.lastBaseUpdate,V!==b&&(V===null?be.firstBaseUpdate=pe:V.next=pe,be.lastBaseUpdate=$))}if(S!==null){var Pe=v.baseState;b=0,be=pe=$=null,V=S;do{var Ae=V.lane,Ze=V.eventTime;if((h&Ae)===Ae){be!==null&&(be=be.next={eventTime:Ze,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var st=i,lt=V;switch(Ae=o,Ze=u,lt.tag){case 1:if(st=lt.payload,typeof st=="function"){Pe=st.call(Ze,Pe,Ae);break e}Pe=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=lt.payload,Ae=typeof st=="function"?st.call(Ze,Pe,Ae):st,Ae==null)break e;Pe=U({},Pe,Ae);break e;case 2:So=!0}}V.callback!==null&&V.lane!==0&&(i.flags|=64,Ae=v.effects,Ae===null?v.effects=[V]:Ae.push(V))}else Ze={eventTime:Ze,lane:Ae,tag:V.tag,payload:V.payload,callback:V.callback,next:null},be===null?(pe=be=Ze,$=Pe):be=be.next=Ze,b|=Ae;if(V=V.next,V===null){if(V=v.shared.pending,V===null)break;Ae=V,V=Ae.next,Ae.next=null,v.lastBaseUpdate=Ae,v.shared.pending=null}}while(!0);if(be===null&&($=Pe),v.baseState=$,v.firstBaseUpdate=pe,v.lastBaseUpdate=be,o=v.shared.interleaved,o!==null){v=o;do b|=v.lane,v=v.next;while(v!==o)}else S===null&&(v.shared.lanes=0);da|=b,i.lanes=b,i.memoizedState=Pe}}function sx(i,o,u){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],v=h.callback;if(v!==null){if(h.callback=null,h=u,typeof v!="function")throw Error(t(191,v));v.call(h)}}}var Hu={},ps=vo(Hu),Gu=vo(Hu),Wu=vo(Hu);function ca(i){if(i===Hu)throw Error(t(174));return i}function Yp(i,o){switch(pn(Wu,o),pn(Gu,i),pn(ps,Hu),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:w(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=w(o,i)}xn(ps),pn(ps,o)}function dl(){xn(ps),xn(Gu),xn(Wu)}function ox(i){ca(Wu.current);var o=ca(ps.current),u=w(o,i.type);o!==u&&(pn(Gu,i),pn(ps,u))}function qp(i){Gu.current===i&&(xn(ps),xn(Gu))}var An=vo(0);function Ff(i){for(var o=i;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var $p=[];function Kp(){for(var i=0;i<$p.length;i++)$p[i]._workInProgressVersionPrimary=null;$p.length=0}var Of=A.ReactCurrentDispatcher,jp=A.ReactCurrentBatchConfig,fa=0,bn=null,$n=null,ri=null,kf=!1,Xu=!1,Yu=0,ow=0;function Mi(){throw Error(t(321))}function Zp(i,o){if(o===null)return!1;for(var u=0;u<o.length&&u<i.length;u++)if(!Qr(i[u],o[u]))return!1;return!0}function Jp(i,o,u,h,v,S){if(fa=S,bn=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Of.current=i===null||i.memoizedState===null?cw:fw,i=u(h,v),Xu){S=0;do{if(Xu=!1,Yu=0,25<=S)throw Error(t(301));S+=1,ri=$n=null,o.updateQueue=null,Of.current=dw,i=u(h,v)}while(Xu)}if(Of.current=Vf,o=$n!==null&&$n.next!==null,fa=0,ri=$n=bn=null,kf=!1,o)throw Error(t(300));return i}function Qp(){var i=Yu!==0;return Yu=0,i}function ms(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ri===null?bn.memoizedState=ri=i:ri=ri.next=i,ri}function Nr(){if($n===null){var i=bn.alternate;i=i!==null?i.memoizedState:null}else i=$n.next;var o=ri===null?bn.memoizedState:ri.next;if(o!==null)ri=o,$n=i;else{if(i===null)throw Error(t(310));$n=i,i={memoizedState:$n.memoizedState,baseState:$n.baseState,baseQueue:$n.baseQueue,queue:$n.queue,next:null},ri===null?bn.memoizedState=ri=i:ri=ri.next=i}return ri}function qu(i,o){return typeof o=="function"?o(i):o}function em(i){var o=Nr(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var h=$n,v=h.baseQueue,S=u.pending;if(S!==null){if(v!==null){var b=v.next;v.next=S.next,S.next=b}h.baseQueue=v=S,u.pending=null}if(v!==null){S=v.next,h=h.baseState;var V=b=null,$=null,pe=S;do{var be=pe.lane;if((fa&be)===be)$!==null&&($=$.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),h=pe.hasEagerState?pe.eagerState:i(h,pe.action);else{var Pe={lane:be,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};$===null?(V=$=Pe,b=h):$=$.next=Pe,bn.lanes|=be,da|=be}pe=pe.next}while(pe!==null&&pe!==S);$===null?b=h:$.next=V,Qr(h,o.memoizedState)||(Ji=!0),o.memoizedState=h,o.baseState=b,o.baseQueue=$,u.lastRenderedState=h}if(i=u.interleaved,i!==null){v=i;do S=v.lane,bn.lanes|=S,da|=S,v=v.next;while(v!==i)}else v===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function tm(i){var o=Nr(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var h=u.dispatch,v=u.pending,S=o.memoizedState;if(v!==null){u.pending=null;var b=v=v.next;do S=i(S,b.action),b=b.next;while(b!==v);Qr(S,o.memoizedState)||(Ji=!0),o.memoizedState=S,o.baseQueue===null&&(o.baseState=S),u.lastRenderedState=S}return[S,h]}function ax(){}function lx(i,o){var u=bn,h=Nr(),v=o(),S=!Qr(h.memoizedState,v);if(S&&(h.memoizedState=v,Ji=!0),h=h.queue,nm(fx.bind(null,u,h,i),[i]),h.getSnapshot!==o||S||ri!==null&&ri.memoizedState.tag&1){if(u.flags|=2048,$u(9,cx.bind(null,u,h,v,o),void 0,null),si===null)throw Error(t(349));(fa&30)!==0||ux(u,o,v)}return v}function ux(i,o,u){i.flags|=16384,i={getSnapshot:o,value:u},o=bn.updateQueue,o===null?(o={lastEffect:null,stores:null},bn.updateQueue=o,o.stores=[i]):(u=o.stores,u===null?o.stores=[i]:u.push(i))}function cx(i,o,u,h){o.value=u,o.getSnapshot=h,dx(o)&&hx(i)}function fx(i,o,u){return u(function(){dx(o)&&hx(i)})}function dx(i){var o=i.getSnapshot;i=i.value;try{var u=o();return!Qr(i,u)}catch{return!0}}function hx(i){var o=zs(i,1);o!==null&&rs(o,i,1,-1)}function px(i){var o=ms();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qu,lastRenderedState:i},o.queue=i,i=i.dispatch=uw.bind(null,bn,i),[o.memoizedState,i]}function $u(i,o,u,h){return i={tag:i,create:o,destroy:u,deps:h,next:null},o=bn.updateQueue,o===null?(o={lastEffect:null,stores:null},bn.updateQueue=o,o.lastEffect=i.next=i):(u=o.lastEffect,u===null?o.lastEffect=i.next=i:(h=u.next,u.next=i,i.next=h,o.lastEffect=i)),i}function mx(){return Nr().memoizedState}function Bf(i,o,u,h){var v=ms();bn.flags|=i,v.memoizedState=$u(1|o,u,void 0,h===void 0?null:h)}function zf(i,o,u,h){var v=Nr();h=h===void 0?null:h;var S=void 0;if($n!==null){var b=$n.memoizedState;if(S=b.destroy,h!==null&&Zp(h,b.deps)){v.memoizedState=$u(o,u,S,h);return}}bn.flags|=i,v.memoizedState=$u(1|o,u,S,h)}function _x(i,o){return Bf(8390656,8,i,o)}function nm(i,o){return zf(2048,8,i,o)}function gx(i,o){return zf(4,2,i,o)}function vx(i,o){return zf(4,4,i,o)}function xx(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function yx(i,o,u){return u=u!=null?u.concat([i]):null,zf(4,4,xx.bind(null,o,i),u)}function im(){}function Sx(i,o){var u=Nr();o=o===void 0?null:o;var h=u.memoizedState;return h!==null&&o!==null&&Zp(o,h[1])?h[0]:(u.memoizedState=[i,o],i)}function Mx(i,o){var u=Nr();o=o===void 0?null:o;var h=u.memoizedState;return h!==null&&o!==null&&Zp(o,h[1])?h[0]:(i=i(),u.memoizedState=[i,o],i)}function Ex(i,o,u){return(fa&21)===0?(i.baseState&&(i.baseState=!1,Ji=!0),i.memoizedState=u):(Qr(u,o)||(u=je(),bn.lanes|=u,da|=u,i.baseState=!0),o)}function aw(i,o){var u=Ot;Ot=u!==0&&4>u?u:4,i(!0);var h=jp.transition;jp.transition={};try{i(!1),o()}finally{Ot=u,jp.transition=h}}function Tx(){return Nr().memoizedState}function lw(i,o,u){var h=Ao(i);if(u={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null},wx(i))Ax(o,u);else if(u=nx(i,o,u,h),u!==null){var v=ki();rs(u,i,h,v),bx(u,o,h)}}function uw(i,o,u){var h=Ao(i),v={lane:h,action:u,hasEagerState:!1,eagerState:null,next:null};if(wx(i))Ax(o,v);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=o.lastRenderedReducer,S!==null))try{var b=o.lastRenderedState,V=S(b,u);if(v.hasEagerState=!0,v.eagerState=V,Qr(V,b)){var $=o.interleaved;$===null?(v.next=v,Wp(o)):(v.next=$.next,$.next=v),o.interleaved=v;return}}catch{}finally{}u=nx(i,o,v,h),u!==null&&(v=ki(),rs(u,i,h,v),bx(u,o,h))}}function wx(i){var o=i.alternate;return i===bn||o!==null&&o===bn}function Ax(i,o){Xu=kf=!0;var u=i.pending;u===null?o.next=o:(o.next=u.next,u.next=o),i.pending=o}function bx(i,o,u){if((u&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,u|=h,o.lanes=u,Ki(i,u)}}var Vf={readContext:Lr,useCallback:Mi,useContext:Mi,useEffect:Mi,useImperativeHandle:Mi,useInsertionEffect:Mi,useLayoutEffect:Mi,useMemo:Mi,useReducer:Mi,useRef:Mi,useState:Mi,useDebugValue:Mi,useDeferredValue:Mi,useTransition:Mi,useMutableSource:Mi,useSyncExternalStore:Mi,useId:Mi,unstable_isNewReconciler:!1},cw={readContext:Lr,useCallback:function(i,o){return ms().memoizedState=[i,o===void 0?null:o],i},useContext:Lr,useEffect:_x,useImperativeHandle:function(i,o,u){return u=u!=null?u.concat([i]):null,Bf(4194308,4,xx.bind(null,o,i),u)},useLayoutEffect:function(i,o){return Bf(4194308,4,i,o)},useInsertionEffect:function(i,o){return Bf(4,2,i,o)},useMemo:function(i,o){var u=ms();return o=o===void 0?null:o,i=i(),u.memoizedState=[i,o],i},useReducer:function(i,o,u){var h=ms();return o=u!==void 0?u(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=lw.bind(null,bn,i),[h.memoizedState,i]},useRef:function(i){var o=ms();return i={current:i},o.memoizedState=i},useState:px,useDebugValue:im,useDeferredValue:function(i){return ms().memoizedState=i},useTransition:function(){var i=px(!1),o=i[0];return i=aw.bind(null,i[1]),ms().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,u){var h=bn,v=ms();if(Mn){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),si===null)throw Error(t(349));(fa&30)!==0||ux(h,o,u)}v.memoizedState=u;var S={value:u,getSnapshot:o};return v.queue=S,_x(fx.bind(null,h,S,i),[i]),h.flags|=2048,$u(9,cx.bind(null,h,S,u,o),void 0,null),u},useId:function(){var i=ms(),o=si.identifierPrefix;if(Mn){var u=Bs,h=ks;u=(h&~(1<<32-Ge(h)-1)).toString(32)+u,o=":"+o+"R"+u,u=Yu++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=ow++,o=":"+o+"r"+u.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},fw={readContext:Lr,useCallback:Sx,useContext:Lr,useEffect:nm,useImperativeHandle:yx,useInsertionEffect:gx,useLayoutEffect:vx,useMemo:Mx,useReducer:em,useRef:mx,useState:function(){return em(qu)},useDebugValue:im,useDeferredValue:function(i){var o=Nr();return Ex(o,$n.memoizedState,i)},useTransition:function(){var i=em(qu)[0],o=Nr().memoizedState;return[i,o]},useMutableSource:ax,useSyncExternalStore:lx,useId:Tx,unstable_isNewReconciler:!1},dw={readContext:Lr,useCallback:Sx,useContext:Lr,useEffect:nm,useImperativeHandle:yx,useInsertionEffect:gx,useLayoutEffect:vx,useMemo:Mx,useReducer:tm,useRef:mx,useState:function(){return tm(qu)},useDebugValue:im,useDeferredValue:function(i){var o=Nr();return $n===null?o.memoizedState=i:Ex(o,$n.memoizedState,i)},useTransition:function(){var i=tm(qu)[0],o=Nr().memoizedState;return[i,o]},useMutableSource:ax,useSyncExternalStore:lx,useId:Tx,unstable_isNewReconciler:!1};function ts(i,o){if(i&&i.defaultProps){o=U({},o),i=i.defaultProps;for(var u in i)o[u]===void 0&&(o[u]=i[u]);return o}return o}function rm(i,o,u,h){o=i.memoizedState,u=u(h,o),u=u==null?o:U({},o,u),i.memoizedState=u,i.lanes===0&&(i.updateQueue.baseState=u)}var Hf={isMounted:function(i){return(i=i._reactInternals)?Ct(i)===i:!1},enqueueSetState:function(i,o,u){i=i._reactInternals;var h=ki(),v=Ao(i),S=Vs(h,v);S.payload=o,u!=null&&(S.callback=u),o=Mo(i,S,v),o!==null&&(rs(o,i,v,h),If(o,i,v))},enqueueReplaceState:function(i,o,u){i=i._reactInternals;var h=ki(),v=Ao(i),S=Vs(h,v);S.tag=1,S.payload=o,u!=null&&(S.callback=u),o=Mo(i,S,v),o!==null&&(rs(o,i,v,h),If(o,i,v))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var u=ki(),h=Ao(i),v=Vs(u,h);v.tag=2,o!=null&&(v.callback=o),o=Mo(i,v,h),o!==null&&(rs(o,i,h,u),If(o,i,h))}};function Cx(i,o,u,h,v,S,b){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,S,b):o.prototype&&o.prototype.isPureReactComponent?!Iu(u,h)||!Iu(v,S):!0}function Rx(i,o,u){var h=!1,v=xo,S=o.contextType;return typeof S=="object"&&S!==null?S=Lr(S):(v=Zi(o)?oa:Si.current,h=o.contextTypes,S=(h=h!=null)?sl(i,v):xo),o=new o(u,S),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Hf,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=v,i.__reactInternalMemoizedMaskedChildContext=S),o}function Px(i,o,u,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,h),o.state!==i&&Hf.enqueueReplaceState(o,o.state,null)}function sm(i,o,u,h){var v=i.stateNode;v.props=u,v.state=i.memoizedState,v.refs={},Xp(i);var S=o.contextType;typeof S=="object"&&S!==null?v.context=Lr(S):(S=Zi(o)?oa:Si.current,v.context=sl(i,S)),v.state=i.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(rm(i,o,S,u),v.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(o=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),o!==v.state&&Hf.enqueueReplaceState(v,v.state,null),Uf(i,u,v,h),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308)}function hl(i,o){try{var u="",h=o;do u+=De(h),h=h.return;while(h);var v=u}catch(S){v=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:o,stack:v,digest:null}}function om(i,o,u){return{value:i,source:null,stack:u??null,digest:o??null}}function am(i,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var hw=typeof WeakMap=="function"?WeakMap:Map;function Dx(i,o,u){u=Vs(-1,u),u.tag=3,u.payload={element:null};var h=o.value;return u.callback=function(){Kf||(Kf=!0,Mm=h),am(i,o)},u}function Lx(i,o,u){u=Vs(-1,u),u.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var v=o.value;u.payload=function(){return h(v)},u.callback=function(){am(i,o)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(u.callback=function(){am(i,o),typeof h!="function"&&(To===null?To=new Set([this]):To.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})}),u}function Nx(i,o,u){var h=i.pingCache;if(h===null){h=i.pingCache=new hw;var v=new Set;h.set(o,v)}else v=h.get(o),v===void 0&&(v=new Set,h.set(o,v));v.has(u)||(v.add(u),i=bw.bind(null,i,o,u),o.then(i,i))}function Ix(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Ux(i,o,u,h,v){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=Vs(-1,1),o.tag=2,Mo(u,o,1))),u.lanes|=1),i):(i.flags|=65536,i.lanes=v,i)}var pw=A.ReactCurrentOwner,Ji=!1;function Oi(i,o,u,h){o.child=i===null?tx(o,null,u,h):ul(o,i.child,u,h)}function Fx(i,o,u,h,v){u=u.render;var S=o.ref;return fl(o,v),h=Jp(i,o,u,h,S,v),u=Qp(),i!==null&&!Ji?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~v,Hs(i,o,v)):(Mn&&u&&Up(o),o.flags|=1,Oi(i,o,h,v),o.child)}function Ox(i,o,u,h,v){if(i===null){var S=u.type;return typeof S=="function"&&!Rm(S)&&S.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=S,kx(i,o,S,h,v)):(i=td(u.type,null,h,o,o.mode,v),i.ref=o.ref,i.return=o,o.child=i)}if(S=i.child,(i.lanes&v)===0){var b=S.memoizedProps;if(u=u.compare,u=u!==null?u:Iu,u(b,h)&&i.ref===o.ref)return Hs(i,o,v)}return o.flags|=1,i=Co(S,h),i.ref=o.ref,i.return=o,o.child=i}function kx(i,o,u,h,v){if(i!==null){var S=i.memoizedProps;if(Iu(S,h)&&i.ref===o.ref)if(Ji=!1,o.pendingProps=h=S,(i.lanes&v)!==0)(i.flags&131072)!==0&&(Ji=!0);else return o.lanes=i.lanes,Hs(i,o,v)}return lm(i,o,u,h,v)}function Bx(i,o,u){var h=o.pendingProps,v=h.children,S=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},pn(ml,pr),pr|=u;else{if((u&1073741824)===0)return i=S!==null?S.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,pn(ml,pr),pr|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=S!==null?S.baseLanes:u,pn(ml,pr),pr|=h}else S!==null?(h=S.baseLanes|u,o.memoizedState=null):h=u,pn(ml,pr),pr|=h;return Oi(i,o,v,u),o.child}function zx(i,o){var u=o.ref;(i===null&&u!==null||i!==null&&i.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function lm(i,o,u,h,v){var S=Zi(u)?oa:Si.current;return S=sl(o,S),fl(o,v),u=Jp(i,o,u,h,S,v),h=Qp(),i!==null&&!Ji?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~v,Hs(i,o,v)):(Mn&&h&&Up(o),o.flags|=1,Oi(i,o,u,v),o.child)}function Vx(i,o,u,h,v){if(Zi(u)){var S=!0;Af(o)}else S=!1;if(fl(o,v),o.stateNode===null)Wf(i,o),Rx(o,u,h),sm(o,u,h,v),h=!0;else if(i===null){var b=o.stateNode,V=o.memoizedProps;b.props=V;var $=b.context,pe=u.contextType;typeof pe=="object"&&pe!==null?pe=Lr(pe):(pe=Zi(u)?oa:Si.current,pe=sl(o,pe));var be=u.getDerivedStateFromProps,Pe=typeof be=="function"||typeof b.getSnapshotBeforeUpdate=="function";Pe||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(V!==h||$!==pe)&&Px(o,b,h,pe),So=!1;var Ae=o.memoizedState;b.state=Ae,Uf(o,h,b,v),$=o.memoizedState,V!==h||Ae!==$||ji.current||So?(typeof be=="function"&&(rm(o,u,be,h),$=o.memoizedState),(V=So||Cx(o,u,V,h,Ae,$,pe))?(Pe||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(o.flags|=4194308)):(typeof b.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=$),b.props=h,b.state=$,b.context=pe,h=V):(typeof b.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{b=o.stateNode,ix(i,o),V=o.memoizedProps,pe=o.type===o.elementType?V:ts(o.type,V),b.props=pe,Pe=o.pendingProps,Ae=b.context,$=u.contextType,typeof $=="object"&&$!==null?$=Lr($):($=Zi(u)?oa:Si.current,$=sl(o,$));var Ze=u.getDerivedStateFromProps;(be=typeof Ze=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(V!==Pe||Ae!==$)&&Px(o,b,h,$),So=!1,Ae=o.memoizedState,b.state=Ae,Uf(o,h,b,v);var st=o.memoizedState;V!==Pe||Ae!==st||ji.current||So?(typeof Ze=="function"&&(rm(o,u,Ze,h),st=o.memoizedState),(pe=So||Cx(o,u,pe,h,Ae,st,$)||!1)?(be||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(h,st,$),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(h,st,$)),typeof b.componentDidUpdate=="function"&&(o.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof b.componentDidUpdate!="function"||V===i.memoizedProps&&Ae===i.memoizedState||(o.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||V===i.memoizedProps&&Ae===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=st),b.props=h,b.state=st,b.context=$,h=pe):(typeof b.componentDidUpdate!="function"||V===i.memoizedProps&&Ae===i.memoizedState||(o.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||V===i.memoizedProps&&Ae===i.memoizedState||(o.flags|=1024),h=!1)}return um(i,o,u,h,S,v)}function um(i,o,u,h,v,S){zx(i,o);var b=(o.flags&128)!==0;if(!h&&!b)return v&&Yv(o,u,!1),Hs(i,o,S);h=o.stateNode,pw.current=o;var V=b&&typeof u.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&b?(o.child=ul(o,i.child,null,S),o.child=ul(o,null,V,S)):Oi(i,o,V,S),o.memoizedState=h.state,v&&Yv(o,u,!0),o.child}function Hx(i){var o=i.stateNode;o.pendingContext?Wv(i,o.pendingContext,o.pendingContext!==o.context):o.context&&Wv(i,o.context,!1),Yp(i,o.containerInfo)}function Gx(i,o,u,h,v){return ll(),Bp(v),o.flags|=256,Oi(i,o,u,h),o.child}var cm={dehydrated:null,treeContext:null,retryLane:0};function fm(i){return{baseLanes:i,cachePool:null,transitions:null}}function Wx(i,o,u){var h=o.pendingProps,v=An.current,S=!1,b=(o.flags&128)!==0,V;if((V=b)||(V=i!==null&&i.memoizedState===null?!1:(v&2)!==0),V?(S=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(v|=1),pn(An,v&1),i===null)return kp(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(b=h.children,i=h.fallback,S?(h=o.mode,S=o.child,b={mode:"hidden",children:b},(h&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=b):S=nd(b,h,0,null),i=_a(i,h,u,null),S.return=o,i.return=o,S.sibling=i,o.child=S,o.child.memoizedState=fm(u),o.memoizedState=cm,i):dm(o,b));if(v=i.memoizedState,v!==null&&(V=v.dehydrated,V!==null))return mw(i,o,b,h,V,v,u);if(S){S=h.fallback,b=o.mode,v=i.child,V=v.sibling;var $={mode:"hidden",children:h.children};return(b&1)===0&&o.child!==v?(h=o.child,h.childLanes=0,h.pendingProps=$,o.deletions=null):(h=Co(v,$),h.subtreeFlags=v.subtreeFlags&14680064),V!==null?S=Co(V,S):(S=_a(S,b,u,null),S.flags|=2),S.return=o,h.return=o,h.sibling=S,o.child=h,h=S,S=o.child,b=i.child.memoizedState,b=b===null?fm(u):{baseLanes:b.baseLanes|u,cachePool:null,transitions:b.transitions},S.memoizedState=b,S.childLanes=i.childLanes&~u,o.memoizedState=cm,h}return S=i.child,i=S.sibling,h=Co(S,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=u),h.return=o,h.sibling=null,i!==null&&(u=o.deletions,u===null?(o.deletions=[i],o.flags|=16):u.push(i)),o.child=h,o.memoizedState=null,h}function dm(i,o){return o=nd({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Gf(i,o,u,h){return h!==null&&Bp(h),ul(o,i.child,null,u),i=dm(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function mw(i,o,u,h,v,S,b){if(u)return o.flags&256?(o.flags&=-257,h=om(Error(t(422))),Gf(i,o,b,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(S=h.fallback,v=o.mode,h=nd({mode:"visible",children:h.children},v,0,null),S=_a(S,v,b,null),S.flags|=2,h.return=o,S.return=o,h.sibling=S,o.child=h,(o.mode&1)!==0&&ul(o,i.child,null,b),o.child.memoizedState=fm(b),o.memoizedState=cm,S);if((o.mode&1)===0)return Gf(i,o,b,null);if(v.data==="$!"){if(h=v.nextSibling&&v.nextSibling.dataset,h)var V=h.dgst;return h=V,S=Error(t(419)),h=om(S,h,void 0),Gf(i,o,b,h)}if(V=(b&i.childLanes)!==0,Ji||V){if(h=si,h!==null){switch(b&-b){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(h.suspendedLanes|b))!==0?0:v,v!==0&&v!==S.retryLane&&(S.retryLane=v,zs(i,v),rs(h,i,v,-1))}return Cm(),h=om(Error(t(421))),Gf(i,o,b,h)}return v.data==="$?"?(o.flags|=128,o.child=i.child,o=Cw.bind(null,i),v._reactRetry=o,null):(i=S.treeContext,hr=go(v.nextSibling),dr=o,Mn=!0,es=null,i!==null&&(Pr[Dr++]=ks,Pr[Dr++]=Bs,Pr[Dr++]=aa,ks=i.id,Bs=i.overflow,aa=o),o=dm(o,h.children),o.flags|=4096,o)}function Xx(i,o,u){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),Gp(i.return,o,u)}function hm(i,o,u,h,v){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:u,tailMode:v}:(S.isBackwards=o,S.rendering=null,S.renderingStartTime=0,S.last=h,S.tail=u,S.tailMode=v)}function Yx(i,o,u){var h=o.pendingProps,v=h.revealOrder,S=h.tail;if(Oi(i,o,h.children,u),h=An.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Xx(i,u,o);else if(i.tag===19)Xx(i,u,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(pn(An,h),(o.mode&1)===0)o.memoizedState=null;else switch(v){case"forwards":for(u=o.child,v=null;u!==null;)i=u.alternate,i!==null&&Ff(i)===null&&(v=u),u=u.sibling;u=v,u===null?(v=o.child,o.child=null):(v=u.sibling,u.sibling=null),hm(o,!1,v,u,S);break;case"backwards":for(u=null,v=o.child,o.child=null;v!==null;){if(i=v.alternate,i!==null&&Ff(i)===null){o.child=v;break}i=v.sibling,v.sibling=u,u=v,v=i}hm(o,!0,u,null,S);break;case"together":hm(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Wf(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function Hs(i,o,u){if(i!==null&&(o.dependencies=i.dependencies),da|=o.lanes,(u&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,u=Co(i,i.pendingProps),o.child=u,u.return=o;i.sibling!==null;)i=i.sibling,u=u.sibling=Co(i,i.pendingProps),u.return=o;u.sibling=null}return o.child}function _w(i,o,u){switch(o.tag){case 3:Hx(o),ll();break;case 5:ox(o);break;case 1:Zi(o.type)&&Af(o);break;case 4:Yp(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,v=o.memoizedProps.value;pn(Lf,h._currentValue),h._currentValue=v;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(pn(An,An.current&1),o.flags|=128,null):(u&o.child.childLanes)!==0?Wx(i,o,u):(pn(An,An.current&1),i=Hs(i,o,u),i!==null?i.sibling:null);pn(An,An.current&1);break;case 19:if(h=(u&o.childLanes)!==0,(i.flags&128)!==0){if(h)return Yx(i,o,u);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),pn(An,An.current),h)break;return null;case 22:case 23:return o.lanes=0,Bx(i,o,u)}return Hs(i,o,u)}var qx,pm,$x,Kx;qx=function(i,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},pm=function(){},$x=function(i,o,u,h){var v=i.memoizedProps;if(v!==h){i=o.stateNode,ca(ps.current);var S=null;switch(u){case"input":v=ot(i,v),h=ot(i,h),S=[];break;case"select":v=U({},v,{value:void 0}),h=U({},h,{value:void 0}),S=[];break;case"textarea":v=Et(i,v),h=Et(i,h),S=[];break;default:typeof v.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Ef)}Ke(u,h);var b;u=null;for(pe in v)if(!h.hasOwnProperty(pe)&&v.hasOwnProperty(pe)&&v[pe]!=null)if(pe==="style"){var V=v[pe];for(b in V)V.hasOwnProperty(b)&&(u||(u={}),u[b]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(r.hasOwnProperty(pe)?S||(S=[]):(S=S||[]).push(pe,null));for(pe in h){var $=h[pe];if(V=v!=null?v[pe]:void 0,h.hasOwnProperty(pe)&&$!==V&&($!=null||V!=null))if(pe==="style")if(V){for(b in V)!V.hasOwnProperty(b)||$&&$.hasOwnProperty(b)||(u||(u={}),u[b]="");for(b in $)$.hasOwnProperty(b)&&V[b]!==$[b]&&(u||(u={}),u[b]=$[b])}else u||(S||(S=[]),S.push(pe,u)),u=$;else pe==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,V=V?V.__html:void 0,$!=null&&V!==$&&(S=S||[]).push(pe,$)):pe==="children"?typeof $!="string"&&typeof $!="number"||(S=S||[]).push(pe,""+$):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(r.hasOwnProperty(pe)?($!=null&&pe==="onScroll"&&vn("scroll",i),S||V===$||(S=[])):(S=S||[]).push(pe,$))}u&&(S=S||[]).push("style",u);var pe=S;(o.updateQueue=pe)&&(o.flags|=4)}},Kx=function(i,o,u,h){u!==h&&(o.flags|=4)};function Ku(i,o){if(!Mn)switch(i.tailMode){case"hidden":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i.tail=null:u.sibling=null;break;case"collapsed":u=i.tail;for(var h=null;u!==null;)u.alternate!==null&&(h=u),u=u.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Ei(i){var o=i.alternate!==null&&i.alternate.child===i.child,u=0,h=0;if(o)for(var v=i.child;v!==null;)u|=v.lanes|v.childLanes,h|=v.subtreeFlags&14680064,h|=v.flags&14680064,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)u|=v.lanes|v.childLanes,h|=v.subtreeFlags,h|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=h,i.childLanes=u,o}function gw(i,o,u){var h=o.pendingProps;switch(Fp(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ei(o),null;case 1:return Zi(o.type)&&wf(),Ei(o),null;case 3:return h=o.stateNode,dl(),xn(ji),xn(Si),Kp(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Pf(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,es!==null&&(wm(es),es=null))),pm(i,o),Ei(o),null;case 5:qp(o);var v=ca(Wu.current);if(u=o.type,i!==null&&o.stateNode!=null)$x(i,o,u,h,v),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Ei(o),null}if(i=ca(ps.current),Pf(o)){h=o.stateNode,u=o.type;var S=o.memoizedProps;switch(h[hs]=o,h[Bu]=S,i=(o.mode&1)!==0,u){case"dialog":vn("cancel",h),vn("close",h);break;case"iframe":case"object":case"embed":vn("load",h);break;case"video":case"audio":for(v=0;v<Fu.length;v++)vn(Fu[v],h);break;case"source":vn("error",h);break;case"img":case"image":case"link":vn("error",h),vn("load",h);break;case"details":vn("toggle",h);break;case"input":ht(h,S),vn("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!S.multiple},vn("invalid",h);break;case"textarea":Y(h,S),vn("invalid",h)}Ke(u,S),v=null;for(var b in S)if(S.hasOwnProperty(b)){var V=S[b];b==="children"?typeof V=="string"?h.textContent!==V&&(S.suppressHydrationWarning!==!0&&Mf(h.textContent,V,i),v=["children",V]):typeof V=="number"&&h.textContent!==""+V&&(S.suppressHydrationWarning!==!0&&Mf(h.textContent,V,i),v=["children",""+V]):r.hasOwnProperty(b)&&V!=null&&b==="onScroll"&&vn("scroll",h)}switch(u){case"input":We(h),vt(h,S,!0);break;case"textarea":We(h),Je(h);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(h.onclick=Ef)}h=v,o.updateQueue=h,h!==null&&(o.flags|=4)}else{b=v.nodeType===9?v:v.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=O(u)),i==="http://www.w3.org/1999/xhtml"?u==="script"?(i=b.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=b.createElement(u,{is:h.is}):(i=b.createElement(u),u==="select"&&(b=i,h.multiple?b.multiple=!0:h.size&&(b.size=h.size))):i=b.createElementNS(i,u),i[hs]=o,i[Bu]=h,qx(i,o,!1,!1),o.stateNode=i;e:{switch(b=ke(u,h),u){case"dialog":vn("cancel",i),vn("close",i),v=h;break;case"iframe":case"object":case"embed":vn("load",i),v=h;break;case"video":case"audio":for(v=0;v<Fu.length;v++)vn(Fu[v],i);v=h;break;case"source":vn("error",i),v=h;break;case"img":case"image":case"link":vn("error",i),vn("load",i),v=h;break;case"details":vn("toggle",i),v=h;break;case"input":ht(i,h),v=ot(i,h),vn("invalid",i);break;case"option":v=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},v=U({},h,{value:void 0}),vn("invalid",i);break;case"textarea":Y(i,h),v=Et(i,h),vn("invalid",i);break;default:v=h}Ke(u,v),V=v;for(S in V)if(V.hasOwnProperty(S)){var $=V[S];S==="style"?_e(i,$):S==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&se(i,$)):S==="children"?typeof $=="string"?(u!=="textarea"||$!=="")&&de(i,$):typeof $=="number"&&de(i,""+$):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(r.hasOwnProperty(S)?$!=null&&S==="onScroll"&&vn("scroll",i):$!=null&&I(i,S,$,b))}switch(u){case"input":We(i),vt(i,h,!1);break;case"textarea":We(i),Je(i);break;case"option":h.value!=null&&i.setAttribute("value",""+he(h.value));break;case"select":i.multiple=!!h.multiple,S=h.value,S!=null?it(i,!!h.multiple,S,!1):h.defaultValue!=null&&it(i,!!h.multiple,h.defaultValue,!0);break;default:typeof v.onClick=="function"&&(i.onclick=Ef)}switch(u){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Ei(o),null;case 6:if(i&&o.stateNode!=null)Kx(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(u=ca(Wu.current),ca(ps.current),Pf(o)){if(h=o.stateNode,u=o.memoizedProps,h[hs]=o,(S=h.nodeValue!==u)&&(i=dr,i!==null))switch(i.tag){case 3:Mf(h.nodeValue,u,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Mf(h.nodeValue,u,(i.mode&1)!==0)}S&&(o.flags|=4)}else h=(u.nodeType===9?u:u.ownerDocument).createTextNode(h),h[hs]=o,o.stateNode=h}return Ei(o),null;case 13:if(xn(An),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Mn&&hr!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Jv(),ll(),o.flags|=98560,S=!1;else if(S=Pf(o),h!==null&&h.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=o.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[hs]=o}else ll(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Ei(o),S=!1}else es!==null&&(wm(es),es=null),S=!0;if(!S)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=u,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(An.current&1)!==0?Kn===0&&(Kn=3):Cm())),o.updateQueue!==null&&(o.flags|=4),Ei(o),null);case 4:return dl(),pm(i,o),i===null&&Ou(o.stateNode.containerInfo),Ei(o),null;case 10:return Hp(o.type._context),Ei(o),null;case 17:return Zi(o.type)&&wf(),Ei(o),null;case 19:if(xn(An),S=o.memoizedState,S===null)return Ei(o),null;if(h=(o.flags&128)!==0,b=S.rendering,b===null)if(h)Ku(S,!1);else{if(Kn!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(b=Ff(i),b!==null){for(o.flags|=128,Ku(S,!1),h=b.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=u,u=o.child;u!==null;)S=u,i=h,S.flags&=14680066,b=S.alternate,b===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=b.childLanes,S.lanes=b.lanes,S.child=b.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=b.memoizedProps,S.memoizedState=b.memoizedState,S.updateQueue=b.updateQueue,S.type=b.type,i=b.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),u=u.sibling;return pn(An,An.current&1|2),o.child}i=i.sibling}S.tail!==null&&Pt()>_l&&(o.flags|=128,h=!0,Ku(S,!1),o.lanes=4194304)}else{if(!h)if(i=Ff(b),i!==null){if(o.flags|=128,h=!0,u=i.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),Ku(S,!0),S.tail===null&&S.tailMode==="hidden"&&!b.alternate&&!Mn)return Ei(o),null}else 2*Pt()-S.renderingStartTime>_l&&u!==1073741824&&(o.flags|=128,h=!0,Ku(S,!1),o.lanes=4194304);S.isBackwards?(b.sibling=o.child,o.child=b):(u=S.last,u!==null?u.sibling=b:o.child=b,S.last=b)}return S.tail!==null?(o=S.tail,S.rendering=o,S.tail=o.sibling,S.renderingStartTime=Pt(),o.sibling=null,u=An.current,pn(An,h?u&1|2:u&1),o):(Ei(o),null);case 22:case 23:return bm(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(pr&1073741824)!==0&&(Ei(o),o.subtreeFlags&6&&(o.flags|=8192)):Ei(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function vw(i,o){switch(Fp(o),o.tag){case 1:return Zi(o.type)&&wf(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return dl(),xn(ji),xn(Si),Kp(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return qp(o),null;case 13:if(xn(An),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));ll()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return xn(An),null;case 4:return dl(),null;case 10:return Hp(o.type._context),null;case 22:case 23:return bm(),null;case 24:return null;default:return null}}var Xf=!1,Ti=!1,xw=typeof WeakSet=="function"?WeakSet:Set,tt=null;function pl(i,o){var u=i.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(h){In(i,o,h)}else u.current=null}function mm(i,o,u){try{u()}catch(h){In(i,o,h)}}var jx=!1;function yw(i,o){if(bp=ff,i=Cv(),xp(i)){if("selectionStart"in i)var u={start:i.selectionStart,end:i.selectionEnd};else e:{u=(u=i.ownerDocument)&&u.defaultView||window;var h=u.getSelection&&u.getSelection();if(h&&h.rangeCount!==0){u=h.anchorNode;var v=h.anchorOffset,S=h.focusNode;h=h.focusOffset;try{u.nodeType,S.nodeType}catch{u=null;break e}var b=0,V=-1,$=-1,pe=0,be=0,Pe=i,Ae=null;t:for(;;){for(var Ze;Pe!==u||v!==0&&Pe.nodeType!==3||(V=b+v),Pe!==S||h!==0&&Pe.nodeType!==3||($=b+h),Pe.nodeType===3&&(b+=Pe.nodeValue.length),(Ze=Pe.firstChild)!==null;)Ae=Pe,Pe=Ze;for(;;){if(Pe===i)break t;if(Ae===u&&++pe===v&&(V=b),Ae===S&&++be===h&&($=b),(Ze=Pe.nextSibling)!==null)break;Pe=Ae,Ae=Pe.parentNode}Pe=Ze}u=V===-1||$===-1?null:{start:V,end:$}}else u=null}u=u||{start:0,end:0}}else u=null;for(Cp={focusedElem:i,selectionRange:u},ff=!1,tt=o;tt!==null;)if(o=tt,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,tt=i;else for(;tt!==null;){o=tt;try{var st=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(st!==null){var lt=st.memoizedProps,Bn=st.memoizedState,ue=o.stateNode,J=ue.getSnapshotBeforeUpdate(o.elementType===o.type?lt:ts(o.type,lt),Bn);ue.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var ce=o.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ze){In(o,o.return,ze)}if(i=o.sibling,i!==null){i.return=o.return,tt=i;break}tt=o.return}return st=jx,jx=!1,st}function ju(i,o,u){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var v=h=h.next;do{if((v.tag&i)===i){var S=v.destroy;v.destroy=void 0,S!==void 0&&mm(o,u,S)}v=v.next}while(v!==h)}}function Yf(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&i)===i){var h=u.create;u.destroy=h()}u=u.next}while(u!==o)}}function _m(i){var o=i.ref;if(o!==null){var u=i.stateNode;switch(i.tag){case 5:i=u;break;default:i=u}typeof o=="function"?o(i):o.current=i}}function Zx(i){var o=i.alternate;o!==null&&(i.alternate=null,Zx(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[hs],delete o[Bu],delete o[Lp],delete o[nw],delete o[iw])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Jx(i){return i.tag===5||i.tag===3||i.tag===4}function Qx(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Jx(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function gm(i,o,u){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(i,o):u.insertBefore(i,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(i,u)):(o=u,o.appendChild(i)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=Ef));else if(h!==4&&(i=i.child,i!==null))for(gm(i,o,u),i=i.sibling;i!==null;)gm(i,o,u),i=i.sibling}function vm(i,o,u){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?u.insertBefore(i,o):u.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(vm(i,o,u),i=i.sibling;i!==null;)vm(i,o,u),i=i.sibling}var di=null,ns=!1;function Eo(i,o,u){for(u=u.child;u!==null;)ey(i,o,u),u=u.sibling}function ey(i,o,u){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(le,u)}catch{}switch(u.tag){case 5:Ti||pl(u,o);case 6:var h=di,v=ns;di=null,Eo(i,o,u),di=h,ns=v,di!==null&&(ns?(i=di,u=u.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)):di.removeChild(u.stateNode));break;case 18:di!==null&&(ns?(i=di,u=u.stateNode,i.nodeType===8?Dp(i.parentNode,u):i.nodeType===1&&Dp(i,u),Cu(i)):Dp(di,u.stateNode));break;case 4:h=di,v=ns,di=u.stateNode.containerInfo,ns=!0,Eo(i,o,u),di=h,ns=v;break;case 0:case 11:case 14:case 15:if(!Ti&&(h=u.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){v=h=h.next;do{var S=v,b=S.destroy;S=S.tag,b!==void 0&&((S&2)!==0||(S&4)!==0)&&mm(u,o,b),v=v.next}while(v!==h)}Eo(i,o,u);break;case 1:if(!Ti&&(pl(u,o),h=u.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=u.memoizedProps,h.state=u.memoizedState,h.componentWillUnmount()}catch(V){In(u,o,V)}Eo(i,o,u);break;case 21:Eo(i,o,u);break;case 22:u.mode&1?(Ti=(h=Ti)||u.memoizedState!==null,Eo(i,o,u),Ti=h):Eo(i,o,u);break;default:Eo(i,o,u)}}function ty(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var u=i.stateNode;u===null&&(u=i.stateNode=new xw),o.forEach(function(h){var v=Rw.bind(null,i,h);u.has(h)||(u.add(h),h.then(v,v))})}}function is(i,o){var u=o.deletions;if(u!==null)for(var h=0;h<u.length;h++){var v=u[h];try{var S=i,b=o,V=b;e:for(;V!==null;){switch(V.tag){case 5:di=V.stateNode,ns=!1;break e;case 3:di=V.stateNode.containerInfo,ns=!0;break e;case 4:di=V.stateNode.containerInfo,ns=!0;break e}V=V.return}if(di===null)throw Error(t(160));ey(S,b,v),di=null,ns=!1;var $=v.alternate;$!==null&&($.return=null),v.return=null}catch(pe){In(v,o,pe)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)ny(o,i),o=o.sibling}function ny(i,o){var u=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(is(o,i),_s(i),h&4){try{ju(3,i,i.return),Yf(3,i)}catch(lt){In(i,i.return,lt)}try{ju(5,i,i.return)}catch(lt){In(i,i.return,lt)}}break;case 1:is(o,i),_s(i),h&512&&u!==null&&pl(u,u.return);break;case 5:if(is(o,i),_s(i),h&512&&u!==null&&pl(u,u.return),i.flags&32){var v=i.stateNode;try{de(v,"")}catch(lt){In(i,i.return,lt)}}if(h&4&&(v=i.stateNode,v!=null)){var S=i.memoizedProps,b=u!==null?u.memoizedProps:S,V=i.type,$=i.updateQueue;if(i.updateQueue=null,$!==null)try{V==="input"&&S.type==="radio"&&S.name!=null&&Qe(v,S),ke(V,b);var pe=ke(V,S);for(b=0;b<$.length;b+=2){var be=$[b],Pe=$[b+1];be==="style"?_e(v,Pe):be==="dangerouslySetInnerHTML"?se(v,Pe):be==="children"?de(v,Pe):I(v,be,Pe,pe)}switch(V){case"input":re(v,S);break;case"textarea":Gt(v,S);break;case"select":var Ae=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!S.multiple;var Ze=S.value;Ze!=null?it(v,!!S.multiple,Ze,!1):Ae!==!!S.multiple&&(S.defaultValue!=null?it(v,!!S.multiple,S.defaultValue,!0):it(v,!!S.multiple,S.multiple?[]:"",!1))}v[Bu]=S}catch(lt){In(i,i.return,lt)}}break;case 6:if(is(o,i),_s(i),h&4){if(i.stateNode===null)throw Error(t(162));v=i.stateNode,S=i.memoizedProps;try{v.nodeValue=S}catch(lt){In(i,i.return,lt)}}break;case 3:if(is(o,i),_s(i),h&4&&u!==null&&u.memoizedState.isDehydrated)try{Cu(o.containerInfo)}catch(lt){In(i,i.return,lt)}break;case 4:is(o,i),_s(i);break;case 13:is(o,i),_s(i),v=i.child,v.flags&8192&&(S=v.memoizedState!==null,v.stateNode.isHidden=S,!S||v.alternate!==null&&v.alternate.memoizedState!==null||(Sm=Pt())),h&4&&ty(i);break;case 22:if(be=u!==null&&u.memoizedState!==null,i.mode&1?(Ti=(pe=Ti)||be,is(o,i),Ti=pe):is(o,i),_s(i),h&8192){if(pe=i.memoizedState!==null,(i.stateNode.isHidden=pe)&&!be&&(i.mode&1)!==0)for(tt=i,be=i.child;be!==null;){for(Pe=tt=be;tt!==null;){switch(Ae=tt,Ze=Ae.child,Ae.tag){case 0:case 11:case 14:case 15:ju(4,Ae,Ae.return);break;case 1:pl(Ae,Ae.return);var st=Ae.stateNode;if(typeof st.componentWillUnmount=="function"){h=Ae,u=Ae.return;try{o=h,st.props=o.memoizedProps,st.state=o.memoizedState,st.componentWillUnmount()}catch(lt){In(h,u,lt)}}break;case 5:pl(Ae,Ae.return);break;case 22:if(Ae.memoizedState!==null){sy(Pe);continue}}Ze!==null?(Ze.return=Ae,tt=Ze):sy(Pe)}be=be.sibling}e:for(be=null,Pe=i;;){if(Pe.tag===5){if(be===null){be=Pe;try{v=Pe.stateNode,pe?(S=v.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(V=Pe.stateNode,$=Pe.memoizedProps.style,b=$!=null&&$.hasOwnProperty("display")?$.display:null,V.style.display=me("display",b))}catch(lt){In(i,i.return,lt)}}}else if(Pe.tag===6){if(be===null)try{Pe.stateNode.nodeValue=pe?"":Pe.memoizedProps}catch(lt){In(i,i.return,lt)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===i)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===i)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===i)break e;be===Pe&&(be=null),Pe=Pe.return}be===Pe&&(be=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:is(o,i),_s(i),h&4&&ty(i);break;case 21:break;default:is(o,i),_s(i)}}function _s(i){var o=i.flags;if(o&2){try{e:{for(var u=i.return;u!==null;){if(Jx(u)){var h=u;break e}u=u.return}throw Error(t(160))}switch(h.tag){case 5:var v=h.stateNode;h.flags&32&&(de(v,""),h.flags&=-33);var S=Qx(i);vm(i,S,v);break;case 3:case 4:var b=h.stateNode.containerInfo,V=Qx(i);gm(i,V,b);break;default:throw Error(t(161))}}catch($){In(i,i.return,$)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function Sw(i,o,u){tt=i,iy(i)}function iy(i,o,u){for(var h=(i.mode&1)!==0;tt!==null;){var v=tt,S=v.child;if(v.tag===22&&h){var b=v.memoizedState!==null||Xf;if(!b){var V=v.alternate,$=V!==null&&V.memoizedState!==null||Ti;V=Xf;var pe=Ti;if(Xf=b,(Ti=$)&&!pe)for(tt=v;tt!==null;)b=tt,$=b.child,b.tag===22&&b.memoizedState!==null?oy(v):$!==null?($.return=b,tt=$):oy(v);for(;S!==null;)tt=S,iy(S),S=S.sibling;tt=v,Xf=V,Ti=pe}ry(i)}else(v.subtreeFlags&8772)!==0&&S!==null?(S.return=v,tt=S):ry(i)}}function ry(i){for(;tt!==null;){var o=tt;if((o.flags&8772)!==0){var u=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Ti||Yf(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Ti)if(u===null)h.componentDidMount();else{var v=o.elementType===o.type?u.memoizedProps:ts(o.type,u.memoizedProps);h.componentDidUpdate(v,u.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var S=o.updateQueue;S!==null&&sx(o,S,h);break;case 3:var b=o.updateQueue;if(b!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}sx(o,b,u)}break;case 5:var V=o.stateNode;if(u===null&&o.flags&4){u=V;var $=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&u.focus();break;case"img":$.src&&(u.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var pe=o.alternate;if(pe!==null){var be=pe.memoizedState;if(be!==null){var Pe=be.dehydrated;Pe!==null&&Cu(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ti||o.flags&512&&_m(o)}catch(Ae){In(o,o.return,Ae)}}if(o===i){tt=null;break}if(u=o.sibling,u!==null){u.return=o.return,tt=u;break}tt=o.return}}function sy(i){for(;tt!==null;){var o=tt;if(o===i){tt=null;break}var u=o.sibling;if(u!==null){u.return=o.return,tt=u;break}tt=o.return}}function oy(i){for(;tt!==null;){var o=tt;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{Yf(4,o)}catch($){In(o,u,$)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var v=o.return;try{h.componentDidMount()}catch($){In(o,v,$)}}var S=o.return;try{_m(o)}catch($){In(o,S,$)}break;case 5:var b=o.return;try{_m(o)}catch($){In(o,b,$)}}}catch($){In(o,o.return,$)}if(o===i){tt=null;break}var V=o.sibling;if(V!==null){V.return=o.return,tt=V;break}tt=o.return}}var Mw=Math.ceil,qf=A.ReactCurrentDispatcher,xm=A.ReactCurrentOwner,Ir=A.ReactCurrentBatchConfig,Kt=0,si=null,Wn=null,hi=0,pr=0,ml=vo(0),Kn=0,Zu=null,da=0,$f=0,ym=0,Ju=null,Qi=null,Sm=0,_l=1/0,Gs=null,Kf=!1,Mm=null,To=null,jf=!1,wo=null,Zf=0,Qu=0,Em=null,Jf=-1,Qf=0;function ki(){return(Kt&6)!==0?Pt():Jf!==-1?Jf:Jf=Pt()}function Ao(i){return(i.mode&1)===0?1:(Kt&2)!==0&&hi!==0?hi&-hi:sw.transition!==null?(Qf===0&&(Qf=je()),Qf):(i=Ot,i!==0||(i=window.event,i=i===void 0?16:lv(i.type)),i)}function rs(i,o,u,h){if(50<Qu)throw Qu=0,Em=null,Error(t(185));Nt(i,u,h),((Kt&2)===0||i!==si)&&(i===si&&((Kt&2)===0&&($f|=u),Kn===4&&bo(i,hi)),er(i,h),u===1&&Kt===0&&(o.mode&1)===0&&(_l=Pt()+500,bf&&yo()))}function er(i,o){var u=i.callbackNode;nn(i,o);var h=hn(i,i===si?hi:0);if(h===0)u!==null&&Nn(u),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(u!=null&&Nn(u),o===1)i.tag===0?rw(ly.bind(null,i)):qv(ly.bind(null,i)),ew(function(){(Kt&6)===0&&yo()}),u=null;else{switch(Us(h)){case 1:u=yi;break;case 4:u=N;break;case 16:u=Q;break;case 536870912:u=ae;break;default:u=Q}u=_y(u,ay.bind(null,i))}i.callbackPriority=o,i.callbackNode=u}}function ay(i,o){if(Jf=-1,Qf=0,(Kt&6)!==0)throw Error(t(327));var u=i.callbackNode;if(gl()&&i.callbackNode!==u)return null;var h=hn(i,i===si?hi:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=ed(i,h);else{o=h;var v=Kt;Kt|=2;var S=cy();(si!==i||hi!==o)&&(Gs=null,_l=Pt()+500,pa(i,o));do try{ww();break}catch(V){uy(i,V)}while(!0);Vp(),qf.current=S,Kt=v,Wn!==null?o=0:(si=null,hi=0,o=Kn)}if(o!==0){if(o===2&&(v=Gn(i),v!==0&&(h=v,o=Tm(i,v))),o===1)throw u=Zu,pa(i,0),bo(i,h),er(i,Pt()),u;if(o===6)bo(i,h);else{if(v=i.current.alternate,(h&30)===0&&!Ew(v)&&(o=ed(i,h),o===2&&(S=Gn(i),S!==0&&(h=S,o=Tm(i,S))),o===1))throw u=Zu,pa(i,0),bo(i,h),er(i,Pt()),u;switch(i.finishedWork=v,i.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:ma(i,Qi,Gs);break;case 3:if(bo(i,h),(h&130023424)===h&&(o=Sm+500-Pt(),10<o)){if(hn(i,0)!==0)break;if(v=i.suspendedLanes,(v&h)!==h){ki(),i.pingedLanes|=i.suspendedLanes&v;break}i.timeoutHandle=Pp(ma.bind(null,i,Qi,Gs),o);break}ma(i,Qi,Gs);break;case 4:if(bo(i,h),(h&4194240)===h)break;for(o=i.eventTimes,v=-1;0<h;){var b=31-Ge(h);S=1<<b,b=o[b],b>v&&(v=b),h&=~S}if(h=v,h=Pt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*Mw(h/1960))-h,10<h){i.timeoutHandle=Pp(ma.bind(null,i,Qi,Gs),h);break}ma(i,Qi,Gs);break;case 5:ma(i,Qi,Gs);break;default:throw Error(t(329))}}}return er(i,Pt()),i.callbackNode===u?ay.bind(null,i):null}function Tm(i,o){var u=Ju;return i.current.memoizedState.isDehydrated&&(pa(i,o).flags|=256),i=ed(i,o),i!==2&&(o=Qi,Qi=u,o!==null&&wm(o)),i}function wm(i){Qi===null?Qi=i:Qi.push.apply(Qi,i)}function Ew(i){for(var o=i;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var h=0;h<u.length;h++){var v=u[h],S=v.getSnapshot;v=v.value;try{if(!Qr(S(),v))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function bo(i,o){for(o&=~ym,o&=~$f,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var u=31-Ge(o),h=1<<u;i[u]=-1,o&=~h}}function ly(i){if((Kt&6)!==0)throw Error(t(327));gl();var o=hn(i,0);if((o&1)===0)return er(i,Pt()),null;var u=ed(i,o);if(i.tag!==0&&u===2){var h=Gn(i);h!==0&&(o=h,u=Tm(i,h))}if(u===1)throw u=Zu,pa(i,0),bo(i,o),er(i,Pt()),u;if(u===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,ma(i,Qi,Gs),er(i,Pt()),null}function Am(i,o){var u=Kt;Kt|=1;try{return i(o)}finally{Kt=u,Kt===0&&(_l=Pt()+500,bf&&yo())}}function ha(i){wo!==null&&wo.tag===0&&(Kt&6)===0&&gl();var o=Kt;Kt|=1;var u=Ir.transition,h=Ot;try{if(Ir.transition=null,Ot=1,i)return i()}finally{Ot=h,Ir.transition=u,Kt=o,(Kt&6)===0&&yo()}}function bm(){pr=ml.current,xn(ml)}function pa(i,o){i.finishedWork=null,i.finishedLanes=0;var u=i.timeoutHandle;if(u!==-1&&(i.timeoutHandle=-1,QT(u)),Wn!==null)for(u=Wn.return;u!==null;){var h=u;switch(Fp(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&wf();break;case 3:dl(),xn(ji),xn(Si),Kp();break;case 5:qp(h);break;case 4:dl();break;case 13:xn(An);break;case 19:xn(An);break;case 10:Hp(h.type._context);break;case 22:case 23:bm()}u=u.return}if(si=i,Wn=i=Co(i.current,null),hi=pr=o,Kn=0,Zu=null,ym=$f=da=0,Qi=Ju=null,ua!==null){for(o=0;o<ua.length;o++)if(u=ua[o],h=u.interleaved,h!==null){u.interleaved=null;var v=h.next,S=u.pending;if(S!==null){var b=S.next;S.next=v,h.next=b}u.pending=h}ua=null}return i}function uy(i,o){do{var u=Wn;try{if(Vp(),Of.current=Vf,kf){for(var h=bn.memoizedState;h!==null;){var v=h.queue;v!==null&&(v.pending=null),h=h.next}kf=!1}if(fa=0,ri=$n=bn=null,Xu=!1,Yu=0,xm.current=null,u===null||u.return===null){Kn=1,Zu=o,Wn=null;break}e:{var S=i,b=u.return,V=u,$=o;if(o=hi,V.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var pe=$,be=V,Pe=be.tag;if((be.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Ae=be.alternate;Ae?(be.updateQueue=Ae.updateQueue,be.memoizedState=Ae.memoizedState,be.lanes=Ae.lanes):(be.updateQueue=null,be.memoizedState=null)}var Ze=Ix(b);if(Ze!==null){Ze.flags&=-257,Ux(Ze,b,V,S,o),Ze.mode&1&&Nx(S,pe,o),o=Ze,$=pe;var st=o.updateQueue;if(st===null){var lt=new Set;lt.add($),o.updateQueue=lt}else st.add($);break e}else{if((o&1)===0){Nx(S,pe,o),Cm();break e}$=Error(t(426))}}else if(Mn&&V.mode&1){var Bn=Ix(b);if(Bn!==null){(Bn.flags&65536)===0&&(Bn.flags|=256),Ux(Bn,b,V,S,o),Bp(hl($,V));break e}}S=$=hl($,V),Kn!==4&&(Kn=2),Ju===null?Ju=[S]:Ju.push(S),S=b;do{switch(S.tag){case 3:S.flags|=65536,o&=-o,S.lanes|=o;var ue=Dx(S,$,o);rx(S,ue);break e;case 1:V=$;var J=S.type,ce=S.stateNode;if((S.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(To===null||!To.has(ce)))){S.flags|=65536,o&=-o,S.lanes|=o;var ze=Lx(S,V,o);rx(S,ze);break e}}S=S.return}while(S!==null)}dy(u)}catch(ft){o=ft,Wn===u&&u!==null&&(Wn=u=u.return);continue}break}while(!0)}function cy(){var i=qf.current;return qf.current=Vf,i===null?Vf:i}function Cm(){(Kn===0||Kn===3||Kn===2)&&(Kn=4),si===null||(da&268435455)===0&&($f&268435455)===0||bo(si,hi)}function ed(i,o){var u=Kt;Kt|=2;var h=cy();(si!==i||hi!==o)&&(Gs=null,pa(i,o));do try{Tw();break}catch(v){uy(i,v)}while(!0);if(Vp(),Kt=u,qf.current=h,Wn!==null)throw Error(t(261));return si=null,hi=0,Kn}function Tw(){for(;Wn!==null;)fy(Wn)}function ww(){for(;Wn!==null&&!Rr();)fy(Wn)}function fy(i){var o=my(i.alternate,i,pr);i.memoizedProps=i.pendingProps,o===null?dy(i):Wn=o,xm.current=null}function dy(i){var o=i;do{var u=o.alternate;if(i=o.return,(o.flags&32768)===0){if(u=gw(u,o,pr),u!==null){Wn=u;return}}else{if(u=vw(u,o),u!==null){u.flags&=32767,Wn=u;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Kn=6,Wn=null;return}}if(o=o.sibling,o!==null){Wn=o;return}Wn=o=i}while(o!==null);Kn===0&&(Kn=5)}function ma(i,o,u){var h=Ot,v=Ir.transition;try{Ir.transition=null,Ot=1,Aw(i,o,u,h)}finally{Ir.transition=v,Ot=h}return null}function Aw(i,o,u,h){do gl();while(wo!==null);if((Kt&6)!==0)throw Error(t(327));u=i.finishedWork;var v=i.finishedLanes;if(u===null)return null;if(i.finishedWork=null,i.finishedLanes=0,u===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=u.lanes|u.childLanes;if($i(i,S),i===si&&(Wn=si=null,hi=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||jf||(jf=!0,_y(Q,function(){return gl(),null})),S=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||S){S=Ir.transition,Ir.transition=null;var b=Ot;Ot=1;var V=Kt;Kt|=4,xm.current=null,yw(i,u),ny(u,i),YT(Cp),ff=!!bp,Cp=bp=null,i.current=u,Sw(u),uo(),Kt=V,Ot=b,Ir.transition=S}else i.current=u;if(jf&&(jf=!1,wo=i,Zf=v),S=i.pendingLanes,S===0&&(To=null),Ye(u.stateNode),er(i,Pt()),o!==null)for(h=i.onRecoverableError,u=0;u<o.length;u++)v=o[u],h(v.value,{componentStack:v.stack,digest:v.digest});if(Kf)throw Kf=!1,i=Mm,Mm=null,i;return(Zf&1)!==0&&i.tag!==0&&gl(),S=i.pendingLanes,(S&1)!==0?i===Em?Qu++:(Qu=0,Em=i):Qu=0,yo(),null}function gl(){if(wo!==null){var i=Us(Zf),o=Ir.transition,u=Ot;try{if(Ir.transition=null,Ot=16>i?16:i,wo===null)var h=!1;else{if(i=wo,wo=null,Zf=0,(Kt&6)!==0)throw Error(t(331));var v=Kt;for(Kt|=4,tt=i.current;tt!==null;){var S=tt,b=S.child;if((tt.flags&16)!==0){var V=S.deletions;if(V!==null){for(var $=0;$<V.length;$++){var pe=V[$];for(tt=pe;tt!==null;){var be=tt;switch(be.tag){case 0:case 11:case 15:ju(8,be,S)}var Pe=be.child;if(Pe!==null)Pe.return=be,tt=Pe;else for(;tt!==null;){be=tt;var Ae=be.sibling,Ze=be.return;if(Zx(be),be===pe){tt=null;break}if(Ae!==null){Ae.return=Ze,tt=Ae;break}tt=Ze}}}var st=S.alternate;if(st!==null){var lt=st.child;if(lt!==null){st.child=null;do{var Bn=lt.sibling;lt.sibling=null,lt=Bn}while(lt!==null)}}tt=S}}if((S.subtreeFlags&2064)!==0&&b!==null)b.return=S,tt=b;else e:for(;tt!==null;){if(S=tt,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:ju(9,S,S.return)}var ue=S.sibling;if(ue!==null){ue.return=S.return,tt=ue;break e}tt=S.return}}var J=i.current;for(tt=J;tt!==null;){b=tt;var ce=b.child;if((b.subtreeFlags&2064)!==0&&ce!==null)ce.return=b,tt=ce;else e:for(b=J;tt!==null;){if(V=tt,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:Yf(9,V)}}catch(ft){In(V,V.return,ft)}if(V===b){tt=null;break e}var ze=V.sibling;if(ze!==null){ze.return=V.return,tt=ze;break e}tt=V.return}}if(Kt=v,yo(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(le,i)}catch{}h=!0}return h}finally{Ot=u,Ir.transition=o}}return!1}function hy(i,o,u){o=hl(u,o),o=Dx(i,o,1),i=Mo(i,o,1),o=ki(),i!==null&&(Nt(i,1,o),er(i,o))}function In(i,o,u){if(i.tag===3)hy(i,i,u);else for(;o!==null;){if(o.tag===3){hy(o,i,u);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(To===null||!To.has(h))){i=hl(u,i),i=Lx(o,i,1),o=Mo(o,i,1),i=ki(),o!==null&&(Nt(o,1,i),er(o,i));break}}o=o.return}}function bw(i,o,u){var h=i.pingCache;h!==null&&h.delete(o),o=ki(),i.pingedLanes|=i.suspendedLanes&u,si===i&&(hi&u)===u&&(Kn===4||Kn===3&&(hi&130023424)===hi&&500>Pt()-Sm?pa(i,0):ym|=u),er(i,o)}function py(i,o){o===0&&((i.mode&1)===0?o=1:(o=ct,ct<<=1,(ct&130023424)===0&&(ct=4194304)));var u=ki();i=zs(i,o),i!==null&&(Nt(i,o,u),er(i,u))}function Cw(i){var o=i.memoizedState,u=0;o!==null&&(u=o.retryLane),py(i,u)}function Rw(i,o){var u=0;switch(i.tag){case 13:var h=i.stateNode,v=i.memoizedState;v!==null&&(u=v.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),py(i,u)}var my;my=function(i,o,u){if(i!==null)if(i.memoizedProps!==o.pendingProps||ji.current)Ji=!0;else{if((i.lanes&u)===0&&(o.flags&128)===0)return Ji=!1,_w(i,o,u);Ji=(i.flags&131072)!==0}else Ji=!1,Mn&&(o.flags&1048576)!==0&&$v(o,Rf,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;Wf(i,o),i=o.pendingProps;var v=sl(o,Si.current);fl(o,u),v=Jp(null,o,h,i,v,u);var S=Qp();return o.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Zi(h)?(S=!0,Af(o)):S=!1,o.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Xp(o),v.updater=Hf,o.stateNode=v,v._reactInternals=o,sm(o,h,i,u),o=um(null,o,h,!0,S,u)):(o.tag=0,Mn&&S&&Up(o),Oi(null,o,v,u),o=o.child),o;case 16:h=o.elementType;e:{switch(Wf(i,o),i=o.pendingProps,v=h._init,h=v(h._payload),o.type=h,v=o.tag=Dw(h),i=ts(h,i),v){case 0:o=lm(null,o,h,i,u);break e;case 1:o=Vx(null,o,h,i,u);break e;case 11:o=Fx(null,o,h,i,u);break e;case 14:o=Ox(null,o,h,ts(h.type,i),u);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:ts(h,v),lm(i,o,h,v,u);case 1:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:ts(h,v),Vx(i,o,h,v,u);case 3:e:{if(Hx(o),i===null)throw Error(t(387));h=o.pendingProps,S=o.memoizedState,v=S.element,ix(i,o),Uf(o,h,null,u);var b=o.memoizedState;if(h=b.element,S.isDehydrated)if(S={element:h,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},o.updateQueue.baseState=S,o.memoizedState=S,o.flags&256){v=hl(Error(t(423)),o),o=Gx(i,o,h,u,v);break e}else if(h!==v){v=hl(Error(t(424)),o),o=Gx(i,o,h,u,v);break e}else for(hr=go(o.stateNode.containerInfo.firstChild),dr=o,Mn=!0,es=null,u=tx(o,null,h,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(ll(),h===v){o=Hs(i,o,u);break e}Oi(i,o,h,u)}o=o.child}return o;case 5:return ox(o),i===null&&kp(o),h=o.type,v=o.pendingProps,S=i!==null?i.memoizedProps:null,b=v.children,Rp(h,v)?b=null:S!==null&&Rp(h,S)&&(o.flags|=32),zx(i,o),Oi(i,o,b,u),o.child;case 6:return i===null&&kp(o),null;case 13:return Wx(i,o,u);case 4:return Yp(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=ul(o,null,h,u):Oi(i,o,h,u),o.child;case 11:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:ts(h,v),Fx(i,o,h,v,u);case 7:return Oi(i,o,o.pendingProps,u),o.child;case 8:return Oi(i,o,o.pendingProps.children,u),o.child;case 12:return Oi(i,o,o.pendingProps.children,u),o.child;case 10:e:{if(h=o.type._context,v=o.pendingProps,S=o.memoizedProps,b=v.value,pn(Lf,h._currentValue),h._currentValue=b,S!==null)if(Qr(S.value,b)){if(S.children===v.children&&!ji.current){o=Hs(i,o,u);break e}}else for(S=o.child,S!==null&&(S.return=o);S!==null;){var V=S.dependencies;if(V!==null){b=S.child;for(var $=V.firstContext;$!==null;){if($.context===h){if(S.tag===1){$=Vs(-1,u&-u),$.tag=2;var pe=S.updateQueue;if(pe!==null){pe=pe.shared;var be=pe.pending;be===null?$.next=$:($.next=be.next,be.next=$),pe.pending=$}}S.lanes|=u,$=S.alternate,$!==null&&($.lanes|=u),Gp(S.return,u,o),V.lanes|=u;break}$=$.next}}else if(S.tag===10)b=S.type===o.type?null:S.child;else if(S.tag===18){if(b=S.return,b===null)throw Error(t(341));b.lanes|=u,V=b.alternate,V!==null&&(V.lanes|=u),Gp(b,u,o),b=S.sibling}else b=S.child;if(b!==null)b.return=S;else for(b=S;b!==null;){if(b===o){b=null;break}if(S=b.sibling,S!==null){S.return=b.return,b=S;break}b=b.return}S=b}Oi(i,o,v.children,u),o=o.child}return o;case 9:return v=o.type,h=o.pendingProps.children,fl(o,u),v=Lr(v),h=h(v),o.flags|=1,Oi(i,o,h,u),o.child;case 14:return h=o.type,v=ts(h,o.pendingProps),v=ts(h.type,v),Ox(i,o,h,v,u);case 15:return kx(i,o,o.type,o.pendingProps,u);case 17:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:ts(h,v),Wf(i,o),o.tag=1,Zi(h)?(i=!0,Af(o)):i=!1,fl(o,u),Rx(o,h,v),sm(o,h,v,u),um(null,o,h,!0,i,u);case 19:return Yx(i,o,u);case 22:return Bx(i,o,u)}throw Error(t(156,o.tag))};function _y(i,o){return _n(i,o)}function Pw(i,o,u,h){this.tag=i,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ur(i,o,u,h){return new Pw(i,o,u,h)}function Rm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Dw(i){if(typeof i=="function")return Rm(i)?1:0;if(i!=null){if(i=i.$$typeof,i===z)return 11;if(i===X)return 14}return 2}function Co(i,o){var u=i.alternate;return u===null?(u=Ur(i.tag,o,i.key,i.mode),u.elementType=i.elementType,u.type=i.type,u.stateNode=i.stateNode,u.alternate=i,i.alternate=u):(u.pendingProps=o,u.type=i.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=i.flags&14680064,u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,o=i.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=i.sibling,u.index=i.index,u.ref=i.ref,u}function td(i,o,u,h,v,S){var b=2;if(h=i,typeof i=="function")Rm(i)&&(b=1);else if(typeof i=="string")b=5;else e:switch(i){case R:return _a(u.children,v,S,o);case T:b=8,v|=8;break;case L:return i=Ur(12,u,o,v|2),i.elementType=L,i.lanes=S,i;case ne:return i=Ur(13,u,o,v),i.elementType=ne,i.lanes=S,i;case ie:return i=Ur(19,u,o,v),i.elementType=ie,i.lanes=S,i;case W:return nd(u,v,S,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case F:b=10;break e;case B:b=9;break e;case z:b=11;break e;case X:b=14;break e;case ee:b=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Ur(b,u,o,v),o.elementType=i,o.type=h,o.lanes=S,o}function _a(i,o,u,h){return i=Ur(7,i,h,o),i.lanes=u,i}function nd(i,o,u,h){return i=Ur(22,i,h,o),i.elementType=W,i.lanes=u,i.stateNode={isHidden:!1},i}function Pm(i,o,u){return i=Ur(6,i,null,o),i.lanes=u,i}function Dm(i,o,u){return o=Ur(4,i.children!==null?i.children:[],i.key,o),o.lanes=u,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function Lw(i,o,u,h,v){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fi(0),this.expirationTimes=fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fi(0),this.identifierPrefix=h,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Lm(i,o,u,h,v,S,b,V,$){return i=new Lw(i,o,u,V,$),o===1?(o=1,S===!0&&(o|=8)):o=0,S=Ur(3,null,null,o),i.current=S,S.stateNode=i,S.memoizedState={element:h,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xp(S),i}function Nw(i,o,u){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:h==null?null:""+h,children:i,containerInfo:o,implementation:u}}function gy(i){if(!i)return xo;i=i._reactInternals;e:{if(Ct(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Zi(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var u=i.type;if(Zi(u))return Xv(i,u,o)}return o}function vy(i,o,u,h,v,S,b,V,$){return i=Lm(u,h,!0,i,v,S,b,V,$),i.context=gy(null),u=i.current,h=ki(),v=Ao(u),S=Vs(h,v),S.callback=o??null,Mo(u,S,v),i.current.lanes=v,Nt(i,v,h),er(i,h),i}function id(i,o,u,h){var v=o.current,S=ki(),b=Ao(v);return u=gy(u),o.context===null?o.context=u:o.pendingContext=u,o=Vs(S,b),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=Mo(v,o,b),i!==null&&(rs(i,v,b,S),If(i,v,b)),b}function rd(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function xy(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var u=i.retryLane;i.retryLane=u!==0&&u<o?u:o}}function Nm(i,o){xy(i,o),(i=i.alternate)&&xy(i,o)}function Iw(){return null}var yy=typeof reportError=="function"?reportError:function(i){console.error(i)};function Im(i){this._internalRoot=i}sd.prototype.render=Im.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));id(i,o,null,null)},sd.prototype.unmount=Im.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;ha(function(){id(null,i,null,null)}),o[Fs]=null}};function sd(i){this._internalRoot=i}sd.prototype.unstable_scheduleHydration=function(i){if(i){var o=rn();i={blockedOn:null,target:i,priority:o};for(var u=0;u<po.length&&o!==0&&o<po[u].priority;u++);po.splice(u,0,i),u===0&&ov(i)}};function Um(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function od(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Sy(){}function Uw(i,o,u,h,v){if(v){if(typeof h=="function"){var S=h;h=function(){var pe=rd(b);S.call(pe)}}var b=vy(o,h,i,0,null,!1,!1,"",Sy);return i._reactRootContainer=b,i[Fs]=b.current,Ou(i.nodeType===8?i.parentNode:i),ha(),b}for(;v=i.lastChild;)i.removeChild(v);if(typeof h=="function"){var V=h;h=function(){var pe=rd($);V.call(pe)}}var $=Lm(i,0,!1,null,null,!1,!1,"",Sy);return i._reactRootContainer=$,i[Fs]=$.current,Ou(i.nodeType===8?i.parentNode:i),ha(function(){id(o,$,u,h)}),$}function ad(i,o,u,h,v){var S=u._reactRootContainer;if(S){var b=S;if(typeof v=="function"){var V=v;v=function(){var $=rd(b);V.call($)}}id(o,b,i,v)}else b=Uw(u,o,i,v,h);return rd(b)}Zt=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var u=qt(o.pendingLanes);u!==0&&(Ki(o,u|1),er(o,Pt()),(Kt&6)===0&&(_l=Pt()+500,yo()))}break;case 13:ha(function(){var h=zs(i,1);if(h!==null){var v=ki();rs(h,i,1,v)}}),Nm(i,1)}},gn=function(i){if(i.tag===13){var o=zs(i,134217728);if(o!==null){var u=ki();rs(o,i,134217728,u)}Nm(i,134217728)}},Zr=function(i){if(i.tag===13){var o=Ao(i),u=zs(i,o);if(u!==null){var h=ki();rs(u,i,o,h)}Nm(i,o)}},rn=function(){return Ot},Jr=function(i,o){var u=Ot;try{return Ot=i,o()}finally{Ot=u}},rt=function(i,o,u){switch(o){case"input":if(re(i,u),o=u.name,u.type==="radio"&&o!=null){for(u=i;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var h=u[o];if(h!==i&&h.form===i.form){var v=Tf(h);if(!v)throw Error(t(90));pt(h),re(h,v)}}}break;case"textarea":Gt(i,u);break;case"select":o=u.value,o!=null&&it(i,!!u.multiple,o,!1)}},Ve=Am,Ee=ha;var Fw={usingClientEntryPoint:!1,Events:[zu,il,Tf,ve,Ue,Am]},ec={findFiberByHostInstance:sa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ow={bundleType:ec.bundleType,version:ec.version,rendererPackageName:ec.rendererPackageName,rendererConfig:ec.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ii(i),i===null?null:i.stateNode},findFiberByHostInstance:ec.findFiberByHostInstance||Iw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ld=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ld.isDisabled&&ld.supportsFiber)try{le=ld.inject(Ow),Be=ld}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fw,tr.createPortal=function(i,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Um(o))throw Error(t(200));return Nw(i,o,null,u)},tr.createRoot=function(i,o){if(!Um(i))throw Error(t(299));var u=!1,h="",v=yy;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),o=Lm(i,1,!1,null,null,u,!1,h,v),i[Fs]=o.current,Ou(i.nodeType===8?i.parentNode:i),new Im(o)},tr.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ii(o),i=i===null?null:i.stateNode,i},tr.flushSync=function(i){return ha(i)},tr.hydrate=function(i,o,u){if(!od(o))throw Error(t(200));return ad(null,i,o,!0,u)},tr.hydrateRoot=function(i,o,u){if(!Um(i))throw Error(t(405));var h=u!=null&&u.hydratedSources||null,v=!1,S="",b=yy;if(u!=null&&(u.unstable_strictMode===!0&&(v=!0),u.identifierPrefix!==void 0&&(S=u.identifierPrefix),u.onRecoverableError!==void 0&&(b=u.onRecoverableError)),o=vy(o,null,i,1,u??null,v,!1,S,b),i[Fs]=o.current,Ou(i),h)for(i=0;i<h.length;i++)u=h[i],v=u._getVersion,v=v(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,v]:o.mutableSourceEagerHydrationData.push(u,v);return new sd(o)},tr.render=function(i,o,u){if(!od(o))throw Error(t(200));return ad(null,i,o,!1,u)},tr.unmountComponentAtNode=function(i){if(!od(i))throw Error(t(40));return i._reactRootContainer?(ha(function(){ad(null,null,i,!1,function(){i._reactRootContainer=null,i[Fs]=null})}),!0):!1},tr.unstable_batchedUpdates=Am,tr.unstable_renderSubtreeIntoContainer=function(i,o,u,h){if(!od(u))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ad(i,o,u,!1,h)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var Ry;function Xw(){if(Ry)return km.exports;Ry=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),km.exports=Ww(),km.exports}var Py;function Yw(){if(Py)return ud;Py=1;var s=Xw();return ud.createRoot=s.createRoot,ud.hydrateRoot=s.hydrateRoot,ud}var qw=Yw(),dn=c0();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const f0="185",$w=0,Dy=1,Kw=2,oh=1,jw=2,gc=3,jo=0,sr=1,Js=2,no=0,jl=1,G_=2,Ly=3,Ny=4,Zw=5,ba=100,Jw=101,Qw=102,eA=103,tA=104,nA=200,iA=201,rA=202,sA=203,W_=204,X_=205,oA=206,aA=207,lA=208,uA=209,cA=210,fA=211,dA=212,hA=213,pA=214,Y_=0,q_=1,$_=2,au=3,K_=4,j_=5,Z_=6,J_=7,OM=0,mA=1,_A=2,Rs=0,kM=1,BM=2,zM=3,VM=4,HM=5,GM=6,WM=7,XM=300,Va=301,lu=302,Vm=303,Hm=304,Qh=306,Q_=1e3,eo=1001,eg=1002,_i=1003,gA=1004,cd=1005,Ni=1006,Gm=1007,Pa=1008,Wr=1009,YM=1010,qM=1011,Hc=1012,d0=1013,Ls=1014,ws=1015,so=1016,h0=1017,p0=1018,Gc=1020,$M=35902,KM=35899,jM=1021,ZM=1022,fs=1023,oo=1026,Da=1027,JM=1028,m0=1029,Ha=1030,_0=1031,g0=1033,ah=33776,lh=33777,uh=33778,ch=33779,tg=35840,ng=35841,ig=35842,rg=35843,sg=36196,og=37492,ag=37496,lg=37488,ug=37489,wh=37490,cg=37491,fg=37808,dg=37809,hg=37810,pg=37811,mg=37812,_g=37813,gg=37814,vg=37815,xg=37816,yg=37817,Sg=37818,Mg=37819,Eg=37820,Tg=37821,wg=36492,Ag=36494,bg=36495,Cg=36283,Rg=36284,Ah=36285,Pg=36286,vA=3200,Iy=0,xA=1,ko="",Br="srgb",bh="srgb-linear",Ch="linear",on="srgb",vl=7680,Uy=519,yA=512,SA=513,MA=514,v0=515,EA=516,TA=517,x0=518,wA=519,Dg=35044,Fy="300 es",As=2e3,Rh=2001;function AA(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ph(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bA(){const s=Ph("canvas");return s.style.display="block",s}const Oy={};function Dh(...s){const e="THREE."+s.shift();console.log(e,...s)}function QM(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xt(...s){s=QM(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function $t(...s){s=QM(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Zl(...s){const e=s.join(" ");e in Oy||(Oy[e]=!0,xt(...s))}function CA(s,e,t){return new Promise(function(n,r){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const RA={[Y_]:q_,[$_]:Z_,[K_]:J_,[au]:j_,[q_]:Y_,[Z_]:$_,[J_]:K_,[j_]:au};class qa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const wi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wm=Math.PI/180,Lg=180/Math.PI;function Xo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wi[s&255]+wi[s>>8&255]+wi[s>>16&255]+wi[s>>24&255]+"-"+wi[e&255]+wi[e>>8&255]+"-"+wi[e>>16&15|64]+wi[e>>24&255]+"-"+wi[t&63|128]+wi[t>>8&255]+"-"+wi[t>>16&255]+wi[t>>24&255]+wi[n&255]+wi[n>>8&255]+wi[n>>16&255]+wi[n>>24&255]).toLowerCase()}function Xt(s,e,t){return Math.max(e,Math.min(t,s))}function PA(s,e){return(s%e+e)%e}function Xm(s,e,t){return(1-t)*s+t*e}function Es(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ev=class ev{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ev.prototype.isVector2=!0;let Ft=ev;class Mu{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let f=n[r+0],d=n[r+1],p=n[r+2],g=n[r+3],m=a[l+0],_=a[l+1],M=a[l+2],E=a[l+3];if(g!==E||f!==m||d!==_||p!==M){let x=f*m+d*_+p*M+g*E;x<0&&(m=-m,_=-_,M=-M,E=-E,x=-x);let y=1-c;if(x<.9995){const C=Math.acos(x),I=Math.sin(C);y=Math.sin(y*C)/I,c=Math.sin(c*C)/I,f=f*y+m*c,d=d*y+_*c,p=p*y+M*c,g=g*y+E*c}else{f=f*y+m*c,d=d*y+_*c,p=p*y+M*c,g=g*y+E*c;const C=1/Math.sqrt(f*f+d*d+p*p+g*g);f*=C,d*=C,p*=C,g*=C}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],f=n[r+1],d=n[r+2],p=n[r+3],g=a[l],m=a[l+1],_=a[l+2],M=a[l+3];return e[t]=c*M+p*g+f*_-d*m,e[t+1]=f*M+p*m+d*g-c*_,e[t+2]=d*M+p*_+c*m-f*g,e[t+3]=p*M-c*g-f*m-d*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,f=Math.sin,d=c(n/2),p=c(r/2),g=c(a/2),m=f(n/2),_=f(r/2),M=f(a/2);switch(l){case"XYZ":this._x=m*p*g+d*_*M,this._y=d*_*g-m*p*M,this._z=d*p*M+m*_*g,this._w=d*p*g-m*_*M;break;case"YXZ":this._x=m*p*g+d*_*M,this._y=d*_*g-m*p*M,this._z=d*p*M-m*_*g,this._w=d*p*g+m*_*M;break;case"ZXY":this._x=m*p*g-d*_*M,this._y=d*_*g+m*p*M,this._z=d*p*M+m*_*g,this._w=d*p*g-m*_*M;break;case"ZYX":this._x=m*p*g-d*_*M,this._y=d*_*g+m*p*M,this._z=d*p*M-m*_*g,this._w=d*p*g+m*_*M;break;case"YZX":this._x=m*p*g+d*_*M,this._y=d*_*g+m*p*M,this._z=d*p*M-m*_*g,this._w=d*p*g-m*_*M;break;case"XZY":this._x=m*p*g-d*_*M,this._y=d*_*g-m*p*M,this._z=d*p*M+m*_*g,this._w=d*p*g+m*_*M;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],f=t[9],d=t[2],p=t[6],g=t[10],m=n+c+g;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-f)*_,this._y=(a-d)*_,this._z=(l-r)*_}else if(n>c&&n>g){const _=2*Math.sqrt(1+n-c-g);this._w=(p-f)/_,this._x=.25*_,this._y=(r+l)/_,this._z=(a+d)/_}else if(c>g){const _=2*Math.sqrt(1+c-n-g);this._w=(a-d)/_,this._x=(r+l)/_,this._y=.25*_,this._z=(f+p)/_}else{const _=2*Math.sqrt(1+g-n-c);this._w=(l-r)/_,this._x=(a+d)/_,this._y=(f+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=n*p+l*c+r*d-a*f,this._y=r*p+l*f+a*c-n*d,this._z=a*p+l*d+n*f-r*c,this._w=l*p-n*c-r*f-a*d,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,l=-l,c=-c);let f=1-t;if(c<.9995){const d=Math.acos(c),p=Math.sin(d);f=Math.sin(f*d)/p,t=Math.sin(t*d)/p,this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tv=class tv{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ky.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ky.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,f=e.w,d=2*(l*r-c*n),p=2*(c*t-a*r),g=2*(a*n-l*t);return this.x=t+f*d+l*g-c*p,this.y=n+f*p+c*d-a*g,this.z=r+f*g+a*p-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this.z=Xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this.z=Xt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,f=t.z;return this.x=r*f-a*c,this.y=a*l-n*f,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ym.copy(this).projectOnVector(e),this.sub(Ym)}reflect(e){return this.sub(Ym.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tv.prototype.isVector3=!0;let oe=tv;const Ym=new oe,ky=new Mu,nv=class nv{constructor(e,t,n,r,a,l,c,f,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,f,d)}set(e,t,n,r,a,l,c,f,d){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=n,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],f=n[6],d=n[1],p=n[4],g=n[7],m=n[2],_=n[5],M=n[8],E=r[0],x=r[3],y=r[6],C=r[1],I=r[4],A=r[7],D=r[2],P=r[5],R=r[8];return a[0]=l*E+c*C+f*D,a[3]=l*x+c*I+f*P,a[6]=l*y+c*A+f*R,a[1]=d*E+p*C+g*D,a[4]=d*x+p*I+g*P,a[7]=d*y+p*A+g*R,a[2]=m*E+_*C+M*D,a[5]=m*x+_*I+M*P,a[8]=m*y+_*A+M*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*l*p-t*c*d-n*a*p+n*c*f+r*a*d-r*l*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8],g=p*l-c*d,m=c*f-p*a,_=d*a-l*f,M=t*g+n*m+r*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(r*d-p*n)*E,e[2]=(c*n-r*l)*E,e[3]=m*E,e[4]=(p*t-r*f)*E,e[5]=(r*a-c*t)*E,e[6]=_*E,e[7]=(n*f-d*t)*E,e[8]=(l*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const f=Math.cos(a),d=Math.sin(a);return this.set(n*f,n*d,-n*(f*l+d*c)+l+e,-r*d,r*f,-r*(-d*l+f*c)+c+t,0,0,1),this}scale(e,t){return Zl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qm.makeScale(e,t)),this}rotate(e){return Zl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qm.makeRotation(-e)),this}translate(e,t){return Zl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nv.prototype.isMatrix3=!0;let At=nv;const qm=new At,By=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zy=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DA(){const s={enabled:!0,workingColorSpace:bh,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===on&&(r.r=io(r.r),r.g=io(r.g),r.b=io(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===on&&(r.r=Jl(r.r),r.g=Jl(r.g),r.b=Jl(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ko?Ch:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Zl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Zl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[bh]:{primaries:e,whitePoint:n,transfer:Ch,toXYZ:By,fromXYZ:zy,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Br},outputColorSpaceConfig:{drawingBufferColorSpace:Br}},[Br]:{primaries:e,whitePoint:n,transfer:on,toXYZ:By,fromXYZ:zy,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Br}}}),s}const Wt=DA();function io(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Jl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xl;class LA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xl===void 0&&(xl=Ph("canvas")),xl.width=e.width,xl.height=e.height;const r=xl.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xl}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ph("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=io(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(io(t[n]/255)*255):t[n]=io(t[n]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NA=0;class y0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NA++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push($m(r[l].image)):a.push($m(r[l]))}else a=$m(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function $m(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?LA.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let IA=0;const Km=new oe;class Ii extends qa{constructor(e=Ii.DEFAULT_IMAGE,t=Ii.DEFAULT_MAPPING,n=eo,r=eo,a=Ni,l=Pa,c=fs,f=Wr,d=Ii.DEFAULT_ANISOTROPY,p=ko){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=Xo(),this.name="",this.source=new y0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Km).x}get height(){return this.source.getSize(Km).y}get depth(){return this.source.getSize(Km).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==XM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Q_:e.x=e.x-Math.floor(e.x);break;case eo:e.x=e.x<0?0:1;break;case eg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Q_:e.y=e.y-Math.floor(e.y);break;case eo:e.y=e.y<0?0:1;break;case eg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ii.DEFAULT_IMAGE=null;Ii.DEFAULT_MAPPING=XM;Ii.DEFAULT_ANISOTROPY=1;const iv=class iv{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,d=f[0],p=f[4],g=f[8],m=f[1],_=f[5],M=f[9],E=f[2],x=f[6],y=f[10];if(Math.abs(p-m)<.01&&Math.abs(g-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+E)<.1&&Math.abs(M+x)<.1&&Math.abs(d+_+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(d+1)/2,A=(_+1)/2,D=(y+1)/2,P=(p+m)/4,R=(g+E)/4,T=(M+x)/4;return I>A&&I>D?I<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(I),r=P/n,a=R/n):A>D?A<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(A),n=P/r,a=T/r):D<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(D),n=R/a,r=T/a),this.set(n,r,a,t),this}let C=Math.sqrt((x-M)*(x-M)+(g-E)*(g-E)+(m-p)*(m-p));return Math.abs(C)<.001&&(C=1),this.x=(x-M)/C,this.y=(g-E)/C,this.z=(m-p)/C,this.w=Math.acos((d+_+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xt(this.x,e.x,t.x),this.y=Xt(this.y,e.y,t.y),this.z=Xt(this.z,e.z,t.z),this.w=Xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xt(this.x,e,t),this.y=Xt(this.y,e,t),this.z=Xt(this.z,e,t),this.w=Xt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};iv.prototype.isVector4=!0;let Fn=iv;class UA extends qa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Fn(0,0,e,t),this.scissorTest=!1,this.viewport=new Fn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new Ii(r),l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new y0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends UA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class e1 extends Ii{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=eo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FA extends Ii{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=eo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jh=class Jh{constructor(e,t,n,r,a,l,c,f,d,p,g,m,_,M,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,f,d,p,g,m,_,M,E,x)}set(e,t,n,r,a,l,c,f,d,p,g,m,_,M,E,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=a,y[5]=l,y[9]=c,y[13]=f,y[2]=d,y[6]=p,y[10]=g,y[14]=m,y[3]=_,y[7]=M,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jh().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/yl.setFromMatrixColumn(e,0).length(),a=1/yl.setFromMatrixColumn(e,1).length(),l=1/yl.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const m=l*p,_=l*g,M=c*p,E=c*g;t[0]=f*p,t[4]=-f*g,t[8]=d,t[1]=_+M*d,t[5]=m-E*d,t[9]=-c*f,t[2]=E-m*d,t[6]=M+_*d,t[10]=l*f}else if(e.order==="YXZ"){const m=f*p,_=f*g,M=d*p,E=d*g;t[0]=m+E*c,t[4]=M*c-_,t[8]=l*d,t[1]=l*g,t[5]=l*p,t[9]=-c,t[2]=_*c-M,t[6]=E+m*c,t[10]=l*f}else if(e.order==="ZXY"){const m=f*p,_=f*g,M=d*p,E=d*g;t[0]=m-E*c,t[4]=-l*g,t[8]=M+_*c,t[1]=_+M*c,t[5]=l*p,t[9]=E-m*c,t[2]=-l*d,t[6]=c,t[10]=l*f}else if(e.order==="ZYX"){const m=l*p,_=l*g,M=c*p,E=c*g;t[0]=f*p,t[4]=M*d-_,t[8]=m*d+E,t[1]=f*g,t[5]=E*d+m,t[9]=_*d-M,t[2]=-d,t[6]=c*f,t[10]=l*f}else if(e.order==="YZX"){const m=l*f,_=l*d,M=c*f,E=c*d;t[0]=f*p,t[4]=E-m*g,t[8]=M*g+_,t[1]=g,t[5]=l*p,t[9]=-c*p,t[2]=-d*p,t[6]=_*g+M,t[10]=m-E*g}else if(e.order==="XZY"){const m=l*f,_=l*d,M=c*f,E=c*d;t[0]=f*p,t[4]=-g,t[8]=d*p,t[1]=m*g+E,t[5]=l*p,t[9]=_*g-M,t[2]=M*g-_,t[6]=c*p,t[10]=E*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OA,e,kA)}lookAt(e,t,n){const r=this.elements;return mr.subVectors(e,t),mr.lengthSq()===0&&(mr.z=1),mr.normalize(),Po.crossVectors(n,mr),Po.lengthSq()===0&&(Math.abs(n.z)===1?mr.x+=1e-4:mr.z+=1e-4,mr.normalize(),Po.crossVectors(n,mr)),Po.normalize(),fd.crossVectors(mr,Po),r[0]=Po.x,r[4]=fd.x,r[8]=mr.x,r[1]=Po.y,r[5]=fd.y,r[9]=mr.y,r[2]=Po.z,r[6]=fd.z,r[10]=mr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],f=n[8],d=n[12],p=n[1],g=n[5],m=n[9],_=n[13],M=n[2],E=n[6],x=n[10],y=n[14],C=n[3],I=n[7],A=n[11],D=n[15],P=r[0],R=r[4],T=r[8],L=r[12],F=r[1],B=r[5],z=r[9],ne=r[13],ie=r[2],X=r[6],ee=r[10],W=r[14],H=r[3],G=r[7],U=r[11],k=r[15];return a[0]=l*P+c*F+f*ie+d*H,a[4]=l*R+c*B+f*X+d*G,a[8]=l*T+c*z+f*ee+d*U,a[12]=l*L+c*ne+f*W+d*k,a[1]=p*P+g*F+m*ie+_*H,a[5]=p*R+g*B+m*X+_*G,a[9]=p*T+g*z+m*ee+_*U,a[13]=p*L+g*ne+m*W+_*k,a[2]=M*P+E*F+x*ie+y*H,a[6]=M*R+E*B+x*X+y*G,a[10]=M*T+E*z+x*ee+y*U,a[14]=M*L+E*ne+x*W+y*k,a[3]=C*P+I*F+A*ie+D*H,a[7]=C*R+I*B+A*X+D*G,a[11]=C*T+I*z+A*ee+D*U,a[15]=C*L+I*ne+A*W+D*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],f=e[9],d=e[13],p=e[2],g=e[6],m=e[10],_=e[14],M=e[3],E=e[7],x=e[11],y=e[15],C=f*_-d*m,I=c*_-d*g,A=c*m-f*g,D=l*_-d*p,P=l*m-f*p,R=l*g-c*p;return t*(E*C-x*I+y*A)-n*(M*C-x*D+y*P)+r*(M*I-E*D+y*R)-a*(M*A-E*P+x*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],l=e[5],c=e[9],f=e[2],d=e[6],p=e[10];return t*(l*p-c*d)-n*(a*p-c*f)+r*(a*d-l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],d=e[7],p=e[8],g=e[9],m=e[10],_=e[11],M=e[12],E=e[13],x=e[14],y=e[15],C=t*c-n*l,I=t*f-r*l,A=t*d-a*l,D=n*f-r*c,P=n*d-a*c,R=r*d-a*f,T=p*E-g*M,L=p*x-m*M,F=p*y-_*M,B=g*x-m*E,z=g*y-_*E,ne=m*y-_*x,ie=C*ne-I*z+A*B+D*F-P*L+R*T;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ie;return e[0]=(c*ne-f*z+d*B)*X,e[1]=(r*z-n*ne-a*B)*X,e[2]=(E*R-x*P+y*D)*X,e[3]=(m*P-g*R-_*D)*X,e[4]=(f*F-l*ne-d*L)*X,e[5]=(t*ne-r*F+a*L)*X,e[6]=(x*A-M*R-y*I)*X,e[7]=(p*R-m*A+_*I)*X,e[8]=(l*z-c*F+d*T)*X,e[9]=(n*F-t*z-a*T)*X,e[10]=(M*P-E*A+y*C)*X,e[11]=(g*A-p*P-_*C)*X,e[12]=(c*L-l*B-f*T)*X,e[13]=(t*B-n*L+r*T)*X,e[14]=(E*I-M*D-x*C)*X,e[15]=(p*D-g*I+m*C)*X,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,f=e.z,d=a*l,p=a*c;return this.set(d*l+n,d*c-r*f,d*f+r*c,0,d*c+r*f,p*c+n,p*f-r*l,0,d*f-r*c,p*f+r*l,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,f=t._w,d=a+a,p=l+l,g=c+c,m=a*d,_=a*p,M=a*g,E=l*p,x=l*g,y=c*g,C=f*d,I=f*p,A=f*g,D=n.x,P=n.y,R=n.z;return r[0]=(1-(E+y))*D,r[1]=(_+A)*D,r[2]=(M-I)*D,r[3]=0,r[4]=(_-A)*P,r[5]=(1-(m+y))*P,r[6]=(x+C)*P,r[7]=0,r[8]=(M+I)*R,r[9]=(x-C)*R,r[10]=(1-(m+E))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let l=yl.set(r[0],r[1],r[2]).length();const c=yl.set(r[4],r[5],r[6]).length(),f=yl.set(r[8],r[9],r[10]).length();a<0&&(l=-l),ss.copy(this);const d=1/l,p=1/c,g=1/f;return ss.elements[0]*=d,ss.elements[1]*=d,ss.elements[2]*=d,ss.elements[4]*=p,ss.elements[5]*=p,ss.elements[6]*=p,ss.elements[8]*=g,ss.elements[9]*=g,ss.elements[10]*=g,t.setFromRotationMatrix(ss),n.x=l,n.y=c,n.z=f,this}makePerspective(e,t,n,r,a,l,c=As,f=!1){const d=this.elements,p=2*a/(t-e),g=2*a/(n-r),m=(t+e)/(t-e),_=(n+r)/(n-r);let M,E;if(f)M=a/(l-a),E=l*a/(l-a);else if(c===As)M=-(l+a)/(l-a),E=-2*l*a/(l-a);else if(c===Rh)M=-l/(l-a),E=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=g,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=As,f=!1){const d=this.elements,p=2/(t-e),g=2/(n-r),m=-(t+e)/(t-e),_=-(n+r)/(n-r);let M,E;if(f)M=1/(l-a),E=l/(l-a);else if(c===As)M=-2/(l-a),E=-(l+a)/(l-a);else if(c===Rh)M=-1/(l-a),E=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=0,d[12]=m,d[1]=0,d[5]=g,d[9]=0,d[13]=_,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Jh.prototype.isMatrix4=!0;let Ln=Jh;const yl=new oe,ss=new Ln,OA=new oe(0,0,0),kA=new oe(1,1,1),Po=new oe,fd=new oe,mr=new oe,Vy=new Ln,Hy=new Mu;class Ga{constructor(e=0,t=0,n=0,r=Ga.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],f=r[1],d=r[5],p=r[9],g=r[2],m=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vy,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hy.setFromEuler(this),this.setFromQuaternion(Hy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ga.DEFAULT_ORDER="XYZ";class t1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BA=0;const Gy=new oe,Sl=new Mu,Ws=new Ln,dd=new oe,nc=new oe,zA=new oe,VA=new Mu,Wy=new oe(1,0,0),Xy=new oe(0,1,0),Yy=new oe(0,0,1),qy={type:"added"},HA={type:"removed"},Ml={type:"childadded",child:null},jm={type:"childremoved",child:null};class Ui extends qa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ui.DEFAULT_UP.clone();const e=new oe,t=new Ga,n=new Mu,r=new oe(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ln},normalMatrix:{value:new At}}),this.matrix=new Ln,this.matrixWorld=new Ln,this.matrixAutoUpdate=Ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sl.setFromAxisAngle(e,t),this.quaternion.multiply(Sl),this}rotateOnWorldAxis(e,t){return Sl.setFromAxisAngle(e,t),this.quaternion.premultiply(Sl),this}rotateX(e){return this.rotateOnAxis(Wy,e)}rotateY(e){return this.rotateOnAxis(Xy,e)}rotateZ(e){return this.rotateOnAxis(Yy,e)}translateOnAxis(e,t){return Gy.copy(e).applyQuaternion(this.quaternion),this.position.add(Gy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wy,e)}translateY(e){return this.translateOnAxis(Xy,e)}translateZ(e){return this.translateOnAxis(Yy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ws.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dd.copy(e):dd.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ws.lookAt(nc,dd,this.up):Ws.lookAt(dd,nc,this.up),this.quaternion.setFromRotationMatrix(Ws),r&&(Ws.extractRotation(r.matrixWorld),Sl.setFromRotationMatrix(Ws),this.quaternion.premultiply(Sl.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qy),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HA),jm.child=e,this.dispatchEvent(jm),jm.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ws.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ws.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ws),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qy),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nc,e,zA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nc,VA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const g=f[d];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];r.animations.push(a(e.animations,f))}}if(t){const c=l(e.geometries),f=l(e.materials),d=l(e.textures),p=l(e.images),g=l(e.shapes),m=l(e.skeletons),_=l(e.animations),M=l(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),M.length>0&&(n.nodes=M)}return n.object=r,n;function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ui.DEFAULT_UP=new oe(0,1,0);Ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vc extends Ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GA={type:"move"};class Zm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),y=this._getHandJoint(d,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],m=p.position.distanceTo(g.position),_=.02,M=.005;d.inputState.pinching&&m>_+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=_-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(GA)))}return c!==null&&(c.visible=r!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const n1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Do={h:0,s:0,l:0},hd={h:0,s:0,l:0};function Jm(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Br){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Wt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Wt.workingColorSpace){if(e=PA(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Jm(l,a,e+1/3),this.g=Jm(l,a,e),this.b=Jm(l,a,e-1/3)}return Wt.colorSpaceToWorking(this,r),this}setStyle(e,t=Br){function n(a){a!==void 0&&parseFloat(a)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Br){const n=n1[e.toLowerCase()];return n!==void 0?this.setHex(n,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}copyLinearToSRGB(e){return this.r=Jl(e.r),this.g=Jl(e.g),this.b=Jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Br){return Wt.workingToColorSpace(Ai.copy(this),e),Math.round(Xt(Ai.r*255,0,255))*65536+Math.round(Xt(Ai.g*255,0,255))*256+Math.round(Xt(Ai.b*255,0,255))}getHexString(e=Br){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(Ai.copy(this),t);const n=Ai.r,r=Ai.g,a=Ai.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let f,d;const p=(c+l)/2;if(c===l)f=0,d=0;else{const g=l-c;switch(d=p<=.5?g/(l+c):g/(2-l-c),l){case n:f=(r-a)/g+(r<a?6:0);break;case r:f=(a-n)/g+2;break;case a:f=(n-r)/g+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(Ai.copy(this),t),e.r=Ai.r,e.g=Ai.g,e.b=Ai.b,e}getStyle(e=Br){Wt.workingToColorSpace(Ai.copy(this),e);const t=Ai.r,n=Ai.g,r=Ai.b;return e!==Br?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Do),this.setHSL(Do.h+e,Do.s+t,Do.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Do),e.getHSL(hd);const n=Xm(Do.h,hd.h,t),r=Xm(Do.s,hd.s,t),a=Xm(Do.l,hd.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ai=new Ht;Ht.NAMES=n1;class S0{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ht(e),this.density=t}clone(){return new S0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class WA extends Ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ga,this.environmentIntensity=1,this.environmentRotation=new Ga,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const os=new oe,Xs=new oe,Qm=new oe,Ys=new oe,El=new oe,Tl=new oe,$y=new oe,e_=new oe,t_=new oe,n_=new oe,i_=new Fn,r_=new Fn,s_=new Fn;class Xr{constructor(e=new oe,t=new oe,n=new oe){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),os.subVectors(e,t),r.cross(os);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){os.subVectors(r,t),Xs.subVectors(n,t),Qm.subVectors(e,t);const l=os.dot(os),c=os.dot(Xs),f=os.dot(Qm),d=Xs.dot(Xs),p=Xs.dot(Qm),g=l*d-c*c;if(g===0)return a.set(0,0,0),null;const m=1/g,_=(d*f-c*p)*m,M=(l*p-c*f)*m;return a.set(1-_-M,M,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ys)===null?!1:Ys.x>=0&&Ys.y>=0&&Ys.x+Ys.y<=1}static getInterpolation(e,t,n,r,a,l,c,f){return this.getBarycoord(e,t,n,r,Ys)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ys.x),f.addScaledVector(l,Ys.y),f.addScaledVector(c,Ys.z),f)}static getInterpolatedAttribute(e,t,n,r,a,l){return i_.setScalar(0),r_.setScalar(0),s_.setScalar(0),i_.fromBufferAttribute(e,t),r_.fromBufferAttribute(e,n),s_.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(i_,a.x),l.addScaledVector(r_,a.y),l.addScaledVector(s_,a.z),l}static isFrontFacing(e,t,n,r){return os.subVectors(n,t),Xs.subVectors(e,t),os.cross(Xs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return os.subVectors(this.c,this.b),Xs.subVectors(this.a,this.b),os.cross(Xs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Xr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Xr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;El.subVectors(r,n),Tl.subVectors(a,n),e_.subVectors(e,n);const f=El.dot(e_),d=Tl.dot(e_);if(f<=0&&d<=0)return t.copy(n);t_.subVectors(e,r);const p=El.dot(t_),g=Tl.dot(t_);if(p>=0&&g<=p)return t.copy(r);const m=f*g-p*d;if(m<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(n).addScaledVector(El,l);n_.subVectors(e,a);const _=El.dot(n_),M=Tl.dot(n_);if(M>=0&&_<=M)return t.copy(a);const E=_*d-f*M;if(E<=0&&d>=0&&M<=0)return c=d/(d-M),t.copy(n).addScaledVector(Tl,c);const x=p*M-_*g;if(x<=0&&g-p>=0&&_-M>=0)return $y.subVectors(a,r),c=(g-p)/(g-p+(_-M)),t.copy(r).addScaledVector($y,c);const y=1/(x+E+m);return l=E*y,c=m*y,t.copy(n).addScaledVector(El,l).addScaledVector(Tl,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class of{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(as.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(as.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=as.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,as):as.fromBufferAttribute(a,l),as.applyMatrix4(e.matrixWorld),this.expandByPoint(as);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pd.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pd.copy(n.boundingBox)),pd.applyMatrix4(e.matrixWorld),this.union(pd)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,as),as.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ic),md.subVectors(this.max,ic),wl.subVectors(e.a,ic),Al.subVectors(e.b,ic),bl.subVectors(e.c,ic),Lo.subVectors(Al,wl),No.subVectors(bl,Al),ga.subVectors(wl,bl);let t=[0,-Lo.z,Lo.y,0,-No.z,No.y,0,-ga.z,ga.y,Lo.z,0,-Lo.x,No.z,0,-No.x,ga.z,0,-ga.x,-Lo.y,Lo.x,0,-No.y,No.x,0,-ga.y,ga.x,0];return!o_(t,wl,Al,bl,md)||(t=[1,0,0,0,1,0,0,0,1],!o_(t,wl,Al,bl,md))?!1:(_d.crossVectors(Lo,No),t=[_d.x,_d.y,_d.z],o_(t,wl,Al,bl,md))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,as).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(as).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qs=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],as=new oe,pd=new of,wl=new oe,Al=new oe,bl=new oe,Lo=new oe,No=new oe,ga=new oe,ic=new oe,md=new oe,_d=new oe,va=new oe;function o_(s,e,t,n,r){for(let a=0,l=s.length-3;a<=l;a+=3){va.fromArray(s,a);const c=r.x*Math.abs(va.x)+r.y*Math.abs(va.y)+r.z*Math.abs(va.z),f=e.dot(va),d=t.dot(va),p=n.dot(va);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const Xn=new oe,gd=new Ft;let XA=0;class Kr extends qa{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dg,this.updateRanges=[],this.gpuType=ws,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gd.fromBufferAttribute(this,t),gd.applyMatrix3(e),this.setXY(t,gd.x,gd.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix3(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array),a=an(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class i1 extends Kr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class r1 extends Kr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kn extends Kr{constructor(e,t,n){super(new Float32Array(e),t,n)}}const YA=new of,rc=new oe,a_=new oe;class af{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):YA.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rc.subVectors(e,this.center);const t=rc.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(rc,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(a_.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rc.copy(e.center).add(a_)),this.expandByPoint(rc.copy(e.center).sub(a_))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qA=0;const Fr=new Ln,l_=new Ui,Cl=new oe,_r=new of,sc=new of,ai=new oe;class xi extends qa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qA++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(AA(e)?r1:i1)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new At().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fr.makeRotationFromQuaternion(e),this.applyMatrix4(Fr),this}rotateX(e){return Fr.makeRotationX(e),this.applyMatrix4(Fr),this}rotateY(e){return Fr.makeRotationY(e),this.applyMatrix4(Fr),this}rotateZ(e){return Fr.makeRotationZ(e),this.applyMatrix4(Fr),this}translate(e,t,n){return Fr.makeTranslation(e,t,n),this.applyMatrix4(Fr),this}scale(e,t,n){return Fr.makeScale(e,t,n),this.applyMatrix4(Fr),this}lookAt(e){return l_.lookAt(e),l_.updateMatrix(),this.applyMatrix4(l_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cl).negate(),this.translate(Cl.x,Cl.y,Cl.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new kn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new of);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(ai.addVectors(this.boundingBox.min,_r.min),this.boundingBox.expandByPoint(ai),ai.addVectors(this.boundingBox.max,_r.max),this.boundingBox.expandByPoint(ai)):(this.boundingBox.expandByPoint(_r.min),this.boundingBox.expandByPoint(_r.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new af);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const n=this.boundingSphere.center;if(_r.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];sc.setFromBufferAttribute(c),this.morphTargetsRelative?(ai.addVectors(_r.min,sc.min),_r.expandByPoint(ai),ai.addVectors(_r.max,sc.max),_r.expandByPoint(ai)):(_r.expandByPoint(sc.min),_r.expandByPoint(sc.max))}_r.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)ai.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(ai));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)ai.fromBufferAttribute(c,d),f&&(Cl.fromBufferAttribute(e,d),ai.add(Cl)),r=Math.max(r,n.distanceToSquared(ai))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;let l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new Kr(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));const c=[],f=[];for(let T=0;T<n.count;T++)c[T]=new oe,f[T]=new oe;const d=new oe,p=new oe,g=new oe,m=new Ft,_=new Ft,M=new Ft,E=new oe,x=new oe;function y(T,L,F){d.fromBufferAttribute(n,T),p.fromBufferAttribute(n,L),g.fromBufferAttribute(n,F),m.fromBufferAttribute(a,T),_.fromBufferAttribute(a,L),M.fromBufferAttribute(a,F),p.sub(d),g.sub(d),_.sub(m),M.sub(m);const B=1/(_.x*M.y-M.x*_.y);isFinite(B)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(g,-_.y).multiplyScalar(B),x.copy(g).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(B),c[T].add(E),c[L].add(E),c[F].add(E),f[T].add(x),f[L].add(x),f[F].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,L=C.length;T<L;++T){const F=C[T],B=F.start,z=F.count;for(let ne=B,ie=B+z;ne<ie;ne+=3)y(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const I=new oe,A=new oe,D=new oe,P=new oe;function R(T){D.fromBufferAttribute(r,T),P.copy(D);const L=c[T];I.copy(L),I.sub(D.multiplyScalar(D.dot(L))).normalize(),A.crossVectors(P,L);const B=A.dot(f[T])<0?-1:1;l.setXYZW(T,I.x,I.y,I.z,B)}for(let T=0,L=C.length;T<L;++T){const F=C[T],B=F.start,z=F.count;for(let ne=B,ie=B+z;ne<ie;ne+=3)R(e.getX(ne+0)),R(e.getX(ne+1)),R(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const r=new oe,a=new oe,l=new oe,c=new oe,f=new oe,d=new oe,p=new oe,g=new oe;if(e)for(let m=0,_=e.count;m<_;m+=3){const M=e.getX(m+0),E=e.getX(m+1),x=e.getX(m+2);r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,x),p.subVectors(l,a),g.subVectors(r,a),p.cross(g),c.fromBufferAttribute(n,M),f.fromBufferAttribute(n,E),d.fromBufferAttribute(n,x),c.add(p),f.add(p),d.add(p),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(E,f.x,f.y,f.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let m=0,_=t.count;m<_;m+=3)r.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),p.subVectors(l,a),g.subVectors(r,a),p.cross(g),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ai.fromBufferAttribute(e,t),ai.normalize(),e.setXYZ(t,ai.x,ai.y,ai.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,g=c.normalized,m=new d.constructor(f.length*p);let _=0,M=0;for(let E=0,x=f.length;E<x;E++){c.isInterleavedBufferAttribute?_=f[E]*c.data.stride+c.offset:_=f[E]*p;for(let y=0;y<p;y++)m[M++]=d[_++]}return new Kr(m,p,g)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,n=this.index.array,r=this.attributes;for(const c in r){const f=r[c],d=e(f,n);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,g=d.length;p<g;p++){const m=d[p],_=e(m,n);f.push(_)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,f=l.length;c<f;c++){const d=l[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const d=n[f];e.data.attributes[f]=d.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let g=0,m=d.length;g<m;g++){const _=d[g];p.push(_.toJSON(e.data))}p.length>0&&(r[f]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const d in r){const p=r[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],g=a[d];for(let m=0,_=g.length;m<_;m++)p.push(g[m].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,p=l.length;d<p;d++){const g=l[d];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $A{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dg,this.updateRanges=[],this.version=0,this.uuid=Xo()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xo()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xo()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bi=new oe;class Lh{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bi.fromBufferAttribute(this,t),Bi.applyMatrix4(e),this.setXYZ(t,Bi.x,Bi.y,Bi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bi.fromBufferAttribute(this,t),Bi.applyNormalMatrix(e),this.setXYZ(t,Bi.x,Bi.y,Bi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bi.fromBufferAttribute(this,t),Bi.transformDirection(e),this.setXYZ(t,Bi.x,Bi.y,Bi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Es(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Es(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Es(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Es(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Es(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array),a=an(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Dh("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new Kr(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Dh("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let KA=0;class $a extends qa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KA++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=jl,this.side=jo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=W_,this.blendDst=X_,this.blendEquation=ba,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vl,this.stencilZFail=vl,this.stencilZPass=vl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jl&&(n.blending=this.blending),this.side!==jo&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==W_&&(n.blendSrc=this.blendSrc),this.blendDst!==X_&&(n.blendDst=this.blendDst),this.blendEquation!==ba&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==au&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uy&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vl&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vl&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vl&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class s1 extends $a{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rl;const oc=new oe,Pl=new oe,Dl=new oe,Ll=new Ft,ac=new Ft,o1=new Ln,vd=new oe,lc=new oe,xd=new oe,Ky=new Ft,u_=new Ft,jy=new Ft;class jA extends Ui{constructor(e=new s1){if(super(),this.isSprite=!0,this.type="Sprite",Rl===void 0){Rl=new xi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $A(t,5);Rl.setIndex([0,1,2,0,2,3]),Rl.setAttribute("position",new Lh(n,3,0,!1)),Rl.setAttribute("uv",new Lh(n,2,3,!1))}this.geometry=Rl,this.material=e,this.center=new Ft(.5,.5),this.count=1}raycast(e,t){e.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pl.setFromMatrixScale(this.matrixWorld),o1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dl.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pl.multiplyScalar(-Dl.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const l=this.center;yd(vd.set(-.5,-.5,0),Dl,l,Pl,r,a),yd(lc.set(.5,-.5,0),Dl,l,Pl,r,a),yd(xd.set(.5,.5,0),Dl,l,Pl,r,a),Ky.set(0,0),u_.set(1,0),jy.set(1,1);let c=e.ray.intersectTriangle(vd,lc,xd,!1,oc);if(c===null&&(yd(lc.set(-.5,.5,0),Dl,l,Pl,r,a),u_.set(0,1),c=e.ray.intersectTriangle(vd,xd,lc,!1,oc),c===null))return;const f=e.ray.origin.distanceTo(oc);f<e.near||f>e.far||t.push({distance:f,point:oc.clone(),uv:Xr.getInterpolation(oc,vd,lc,xd,Ky,u_,jy,new Ft),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function yd(s,e,t,n,r,a){Ll.subVectors(s,t).addScalar(.5).multiply(n),r!==void 0?(ac.x=a*Ll.x-r*Ll.y,ac.y=r*Ll.x+a*Ll.y):ac.copy(Ll),s.copy(e),s.x+=ac.x,s.y+=ac.y,s.applyMatrix4(o1)}const $s=new oe,c_=new oe,Sd=new oe,Io=new oe,f_=new oe,Md=new oe,d_=new oe;class M0{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$s)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$s.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($s.copy(this.origin).addScaledVector(this.direction,t),$s.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){c_.copy(e).add(t).multiplyScalar(.5),Sd.copy(t).sub(e).normalize(),Io.copy(this.origin).sub(c_);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Sd),c=Io.dot(this.direction),f=-Io.dot(Sd),d=Io.lengthSq(),p=Math.abs(1-l*l);let g,m,_,M;if(p>0)if(g=l*f-c,m=l*c-f,M=a*p,g>=0)if(m>=-M)if(m<=M){const E=1/p;g*=E,m*=E,_=g*(g+l*m+2*c)+m*(l*g+m+2*f)+d}else m=a,g=Math.max(0,-(l*m+c)),_=-g*g+m*(m+2*f)+d;else m=-a,g=Math.max(0,-(l*m+c)),_=-g*g+m*(m+2*f)+d;else m<=-M?(g=Math.max(0,-(-l*a+c)),m=g>0?-a:Math.min(Math.max(-a,-f),a),_=-g*g+m*(m+2*f)+d):m<=M?(g=0,m=Math.min(Math.max(-a,-f),a),_=m*(m+2*f)+d):(g=Math.max(0,-(l*a+c)),m=g>0?a:Math.min(Math.max(-a,-f),a),_=-g*g+m*(m+2*f)+d);else m=l>0?-a:a,g=Math.max(0,-(l*m+c)),_=-g*g+m*(m+2*f)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(c_).addScaledVector(Sd,m),_}intersectSphere(e,t){$s.subVectors(e.center,this.origin);const n=$s.dot(this.direction),r=$s.dot($s)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,f=n+l;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,f;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return d>=0?(n=(e.min.x-m.x)*d,r=(e.max.x-m.x)*d):(n=(e.max.x-m.x)*d,r=(e.min.x-m.x)*d),p>=0?(a=(e.min.y-m.y)*p,l=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,l=(e.min.y-m.y)*p),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),g>=0?(c=(e.min.z-m.z)*g,f=(e.max.z-m.z)*g):(c=(e.max.z-m.z)*g,f=(e.min.z-m.z)*g),n>f||c>r)||((c>n||n!==n)&&(n=c),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$s)!==null}intersectTriangle(e,t,n,r,a){f_.subVectors(t,e),Md.subVectors(n,e),d_.crossVectors(f_,Md);let l=this.direction.dot(d_),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;Io.subVectors(this.origin,e);const f=c*this.direction.dot(Md.crossVectors(Io,Md));if(f<0)return null;const d=c*this.direction.dot(f_.cross(Io));if(d<0||f+d>l)return null;const p=-c*Io.dot(d_);return p<0?null:this.at(p/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ca extends $a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ga,this.combine=OM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zy=new Ln,xa=new M0,Ed=new af,Jy=new oe,Td=new oe,wd=new oe,Ad=new oe,h_=new oe,bd=new oe,Qy=new oe,Cd=new oe;class ir extends Ui{constructor(e=new xi,t=new Ca){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){bd.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],g=a[f];p!==0&&(h_.fromBufferAttribute(g,e),l?bd.addScaledVector(h_,p):bd.addScaledVector(h_.sub(t),p))}t.add(bd)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ed.copy(n.boundingSphere),Ed.applyMatrix4(a),xa.copy(e.ray).recast(e.near),!(Ed.containsPoint(xa.origin)===!1&&(xa.intersectSphere(Ed,Jy)===null||xa.origin.distanceToSquared(Jy)>(e.far-e.near)**2))&&(Zy.copy(a).invert(),xa.copy(e.ray).applyMatrix4(Zy),!(n.boundingBox!==null&&xa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xa)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,m=a.groups,_=a.drawRange;if(c!==null)if(Array.isArray(l))for(let M=0,E=m.length;M<E;M++){const x=m[M],y=l[x.materialIndex],C=Math.max(x.start,_.start),I=Math.min(c.count,Math.min(x.start+x.count,_.start+_.count));for(let A=C,D=I;A<D;A+=3){const P=c.getX(A),R=c.getX(A+1),T=c.getX(A+2);r=Rd(this,y,e,n,d,p,g,P,R,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const M=Math.max(0,_.start),E=Math.min(c.count,_.start+_.count);for(let x=M,y=E;x<y;x+=3){const C=c.getX(x),I=c.getX(x+1),A=c.getX(x+2);r=Rd(this,l,e,n,d,p,g,C,I,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let M=0,E=m.length;M<E;M++){const x=m[M],y=l[x.materialIndex],C=Math.max(x.start,_.start),I=Math.min(f.count,Math.min(x.start+x.count,_.start+_.count));for(let A=C,D=I;A<D;A+=3){const P=A,R=A+1,T=A+2;r=Rd(this,y,e,n,d,p,g,P,R,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const M=Math.max(0,_.start),E=Math.min(f.count,_.start+_.count);for(let x=M,y=E;x<y;x+=3){const C=x,I=x+1,A=x+2;r=Rd(this,l,e,n,d,p,g,C,I,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function ZA(s,e,t,n,r,a,l,c){let f;if(e.side===sr?f=n.intersectTriangle(l,a,r,!0,c):f=n.intersectTriangle(r,a,l,e.side===jo,c),f===null)return null;Cd.copy(c),Cd.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(Cd);return d<t.near||d>t.far?null:{distance:d,point:Cd.clone(),object:s}}function Rd(s,e,t,n,r,a,l,c,f,d){s.getVertexPosition(c,Td),s.getVertexPosition(f,wd),s.getVertexPosition(d,Ad);const p=ZA(s,e,t,n,Td,wd,Ad,Qy);if(p){const g=new oe;Xr.getBarycoord(Qy,Td,wd,Ad,g),r&&(p.uv=Xr.getInterpolatedAttribute(r,c,f,d,g,new Ft)),a&&(p.uv1=Xr.getInterpolatedAttribute(a,c,f,d,g,new Ft)),l&&(p.normal=Xr.getInterpolatedAttribute(l,c,f,d,g,new oe),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:c,b:f,c:d,normal:new oe,materialIndex:0};Xr.getNormal(Td,wd,Ad,m.normal),p.face=m,p.barycoord=g}return p}class JA extends Ii{constructor(e=null,t=1,n=1,r,a,l,c,f,d=_i,p=_i,g,m){super(null,l,c,f,d,p,r,a,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const p_=new oe,QA=new oe,eb=new At;class Ea{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=p_.subVectors(n,t).cross(QA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(p_),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eb.getNormalMatrix(e),r=this.coplanarPoint(p_).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ya=new af,tb=new Ft(.5,.5),Pd=new oe;class a1{constructor(e=new Ea,t=new Ea,n=new Ea,r=new Ea,a=new Ea,l=new Ea){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=As,n=!1){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],d=a[3],p=a[4],g=a[5],m=a[6],_=a[7],M=a[8],E=a[9],x=a[10],y=a[11],C=a[12],I=a[13],A=a[14],D=a[15];if(r[0].setComponents(d-l,_-p,y-M,D-C).normalize(),r[1].setComponents(d+l,_+p,y+M,D+C).normalize(),r[2].setComponents(d+c,_+g,y+E,D+I).normalize(),r[3].setComponents(d-c,_-g,y-E,D-I).normalize(),n)r[4].setComponents(f,m,x,A).normalize(),r[5].setComponents(d-f,_-m,y-x,D-A).normalize();else if(r[4].setComponents(d-f,_-m,y-x,D-A).normalize(),t===As)r[5].setComponents(d+f,_+m,y+x,D+A).normalize();else if(t===Rh)r[5].setComponents(f,m,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ya.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ya.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ya)}intersectsSprite(e){ya.center.set(0,0,0);const t=tb.distanceTo(e.center);return ya.radius=.7071067811865476+t,ya.applyMatrix4(e.matrixWorld),this.intersectsSphere(ya)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Pd.x=r.normal.x>0?e.max.x:e.min.x,Pd.y=r.normal.y>0?e.max.y:e.min.y,Pd.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pd)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class l1 extends $a{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nh=new oe,Ih=new oe,eS=new Ln,uc=new M0,Dd=new af,m_=new oe,tS=new oe;class nb extends Ui{constructor(e=new xi,t=new l1){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Nh.fromBufferAttribute(t,r-1),Ih.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Nh.distanceTo(Ih);e.setAttribute("lineDistance",new kn(n,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dd.copy(n.boundingSphere),Dd.applyMatrix4(r),Dd.radius+=a,e.ray.intersectsSphere(Dd)===!1)return;eS.copy(r).invert(),uc.copy(e.ray).applyMatrix4(eS);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const _=Math.max(0,l.start),M=Math.min(p.count,l.start+l.count);for(let E=_,x=M-1;E<x;E+=d){const y=p.getX(E),C=p.getX(E+1),I=Ld(this,e,uc,f,y,C,E);I&&t.push(I)}if(this.isLineLoop){const E=p.getX(M-1),x=p.getX(_),y=Ld(this,e,uc,f,E,x,M-1);y&&t.push(y)}}else{const _=Math.max(0,l.start),M=Math.min(m.count,l.start+l.count);for(let E=_,x=M-1;E<x;E+=d){const y=Ld(this,e,uc,f,E,E+1,E);y&&t.push(y)}if(this.isLineLoop){const E=Ld(this,e,uc,f,M-1,_,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Ld(s,e,t,n,r,a,l){const c=s.geometry.attributes.position;if(Nh.fromBufferAttribute(c,r),Ih.fromBufferAttribute(c,a),t.distanceSqToSegment(Nh,Ih,m_,tS)>n)return;m_.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(m_);if(!(d<e.near||d>e.far))return{distance:d,point:tS.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:s}}const nS=new oe,iS=new oe;class ib extends nb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)nS.fromBufferAttribute(t,r),iS.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+nS.distanceTo(iS);e.setAttribute("lineDistance",new kn(n,1))}else xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u1 extends $a{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rS=new Ln,Ng=new M0,Nd=new af,Id=new oe;class rb extends Ui{constructor(e=new xi,t=new u1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nd.copy(n.boundingSphere),Nd.applyMatrix4(r),Nd.radius+=a,e.ray.intersectsSphere(Nd)===!1)return;rS.copy(r).invert(),Ng.copy(e.ray).applyMatrix4(rS);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,d=n.index,g=n.attributes.position;if(d!==null){const m=Math.max(0,l.start),_=Math.min(d.count,l.start+l.count);for(let M=m,E=_;M<E;M++){const x=d.getX(M);Id.fromBufferAttribute(g,x),sS(Id,x,f,r,e,t,this)}}else{const m=Math.max(0,l.start),_=Math.min(g.count,l.start+l.count);for(let M=m,E=_;M<E;M++)Id.fromBufferAttribute(g,M),sS(Id,M,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function sS(s,e,t,n,r,a,l){const c=Ng.distanceSqToPoint(s);if(c<t){const f=new oe;Ng.closestPointToPoint(s,f),f.applyMatrix4(n);const d=r.ray.origin.distanceTo(f);if(d<r.near||d>r.far)return;a.push({distance:d,distanceToRay:Math.sqrt(c),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class c1 extends Ii{constructor(e=[],t=Va,n,r,a,l,c,f,d,p){super(e,t,n,r,a,l,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sb extends Ii{constructor(e,t,n,r,a,l,c,f,d){super(e,t,n,r,a,l,c,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uu extends Ii{constructor(e,t,n=Ls,r,a,l,c=_i,f=_i,d,p=oo,g=1){if(p!==oo&&p!==Da)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,r,a,l,c,f,p,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new y0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ob extends uu{constructor(e,t=Ls,n=Va,r,a,l=_i,c=_i,f,d=oo){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,n,r,a,l,c,f,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class f1 extends Ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lf extends xi{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const f=[],d=[],p=[],g=[];let m=0,_=0;M("z","y","x",-1,-1,n,t,e,l,a,0),M("z","y","x",1,-1,n,t,-e,l,a,1),M("x","z","y",1,1,e,n,t,r,l,2),M("x","z","y",1,-1,e,n,-t,r,l,3),M("x","y","z",1,-1,e,t,n,r,a,4),M("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new kn(d,3)),this.setAttribute("normal",new kn(p,3)),this.setAttribute("uv",new kn(g,2));function M(E,x,y,C,I,A,D,P,R,T,L){const F=A/R,B=D/T,z=A/2,ne=D/2,ie=P/2,X=R+1,ee=T+1;let W=0,H=0;const G=new oe;for(let U=0;U<ee;U++){const k=U*B-ne;for(let j=0;j<X;j++){const Fe=j*F-z;G[E]=Fe*C,G[x]=k*I,G[y]=ie,d.push(G.x,G.y,G.z),G[E]=0,G[x]=0,G[y]=P>0?1:-1,p.push(G.x,G.y,G.z),g.push(j/R),g.push(1-U/T),W+=1}}for(let U=0;U<T;U++)for(let k=0;k<R;k++){const j=m+k+X*U,Fe=m+k+X*(U+1),Oe=m+(k+1)+X*(U+1),De=m+(k+1)+X*U;f.push(j,Fe,De),f.push(Fe,Oe,De),H+=6}c.addGroup(_,H,L),_+=H,m+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class E0 extends xi{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],l=[],c=[],f=[],d=new oe,p=new Ft;l.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let g=0,m=3;g<=t;g++,m+=3){const _=n+g/t*r;d.x=e*Math.cos(_),d.y=e*Math.sin(_),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(l[m]/e+1)/2,p.y=(l[m+1]/e+1)/2,f.push(p.x,p.y)}for(let g=1;g<=t;g++)a.push(g,g+1,0);this.setIndex(a),this.setAttribute("position",new kn(l,3)),this.setAttribute("normal",new kn(c,3)),this.setAttribute("uv",new kn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new E0(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ep extends xi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),f=Math.floor(r),d=c+1,p=f+1,g=e/c,m=t/f,_=[],M=[],E=[],x=[];for(let y=0;y<p;y++){const C=y*m-l;for(let I=0;I<d;I++){const A=I*g-a;M.push(A,-C,0),E.push(0,0,1),x.push(I/c),x.push(1-y/f)}}for(let y=0;y<f;y++)for(let C=0;C<c;C++){const I=C+d*y,A=C+d*(y+1),D=C+1+d*(y+1),P=C+1+d*y;_.push(I,A,P),_.push(A,D,P)}this.setIndex(_),this.setAttribute("position",new kn(M,3)),this.setAttribute("normal",new kn(E,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.width,e.height,e.widthSegments,e.heightSegments)}}class Uh extends xi{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(l+c,Math.PI);let d=0;const p=[],g=new oe,m=new oe,_=[],M=[],E=[],x=[];for(let y=0;y<=n;y++){const C=[],I=y/n,A=l+I*c,D=e*Math.cos(A),P=Math.sqrt(e*e-D*D);let R=0;y===0&&l===0?R=.5/t:y===n&&f===Math.PI&&(R=-.5/t);for(let T=0;T<=t;T++){const L=T/t,F=r+L*a;g.x=-P*Math.cos(F),g.y=D,g.z=P*Math.sin(F),M.push(g.x,g.y,g.z),m.copy(g).normalize(),E.push(m.x,m.y,m.z),x.push(L+R,1-I),C.push(d++)}p.push(C)}for(let y=0;y<n;y++)for(let C=0;C<t;C++){const I=p[y][C+1],A=p[y][C],D=p[y+1][C],P=p[y+1][C+1];(y!==0||l>0)&&_.push(I,A,P),(y!==n-1||f<Math.PI)&&_.push(A,D,P)}this.setIndex(_),this.setAttribute("position",new kn(M,3)),this.setAttribute("normal",new kn(E,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fh extends xi{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2,l=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a,thetaStart:l,thetaLength:c},n=Math.floor(n),r=Math.floor(r);const f=[],d=[],p=[],g=[],m=new oe,_=new oe,M=new oe;for(let E=0;E<=n;E++){const x=l+E/n*c;for(let y=0;y<=r;y++){const C=y/r*a;_.x=(e+t*Math.cos(x))*Math.cos(C),_.y=(e+t*Math.cos(x))*Math.sin(C),_.z=t*Math.sin(x),d.push(_.x,_.y,_.z),m.x=e*Math.cos(C),m.y=e*Math.sin(C),M.subVectors(_,m).normalize(),p.push(M.x,M.y,M.z),g.push(y/r),g.push(E/n)}}for(let E=1;E<=n;E++)for(let x=1;x<=r;x++){const y=(r+1)*E+x-1,C=(r+1)*(E-1)+x-1,I=(r+1)*(E-1)+x,A=(r+1)*E+x;f.push(y,C,A),f.push(C,I,A)}this.setIndex(f),this.setAttribute("position",new kn(d,3)),this.setAttribute("normal",new kn(p,3)),this.setAttribute("uv",new kn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function cu(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];if(oS(r))r.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(oS(r[0])){const a=[];for(let l=0,c=r.length;l<c;l++)a[l]=r[l].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Hi(s){const e={};for(let t=0;t<s.length;t++){const n=cu(s[t]);for(const r in n)e[r]=n[r]}return e}function oS(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ab(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function d1(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}const lb={clone:cu,merge:Hi};var ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ns extends $a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ub,this.fragmentShader=cb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cu(e.uniforms),this.uniformsGroups=ab(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(r.value);break;case"v3":this.uniforms[n].value=new oe().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Fn().fromArray(r.value);break;case"m3":this.uniforms[n].value=new At().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ln().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class fb extends Ns{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class db extends $a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hb extends $a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ud=new oe,Fd=new Mu,gs=new oe;class h1 extends Ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ln,this.projectionMatrix=new Ln,this.projectionMatrixInverse=new Ln,this.coordinateSystem=As,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ud,Fd,gs),gs.x===1&&gs.y===1&&gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ud,Fd,gs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ud,Fd,gs),gs.x===1&&gs.y===1&&gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ud,Fd,gs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Uo=new oe,aS=new Ft,lS=new Ft;class Vr extends h1{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lg*2*Math.atan(Math.tan(Wm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Uo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Uo.x,Uo.y).multiplyScalar(-e/Uo.z),Uo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Uo.x,Uo.y).multiplyScalar(-e/Uo.z)}getViewSize(e,t){return this.getViewBounds(e,aS,lS),t.subVectors(lS,aS)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wm*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;a+=l.offsetX*r/f,t-=l.offsetY*n/d,r*=l.width/f,n*=l.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class p1 extends h1{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,l=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nl=-90,Il=1;class pb extends Ui{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vr(Nl,Il,e,t);r.layers=this.layers,this.add(r);const a=new Vr(Nl,Il,e,t);a.layers=this.layers,this.add(a);const l=new Vr(Nl,Il,e,t);l.layers=this.layers,this.add(l);const c=new Vr(Nl,Il,e,t);c.layers=this.layers,this.add(c);const f=new Vr(Nl,Il,e,t);f.layers=this.layers,this.add(f);const d=new Vr(Nl,Il,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,f]=t;for(const d of t)this.remove(d);if(e===As)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Rh)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,f,d,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,_),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class mb extends Vr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}let _b=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=gb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function gb(){this._document.hidden===!1&&this.reset()}const rv=class rv{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}};rv.prototype.isMatrix2=!0;let uS=rv;class vb extends ib{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ht(n),r=new Ht(r);const a=t/2,l=e/t,c=e/2,f=[],d=[];for(let m=0,_=0,M=-c;m<=t;m++,M+=l){f.push(-c,0,M,c,0,M),f.push(M,0,-c,M,0,c);const E=m===a?n:r;E.toArray(d,_),_+=3,E.toArray(d,_),_+=3,E.toArray(d,_),_+=3,E.toArray(d,_),_+=3}const p=new xi;p.setAttribute("position",new kn(f,3)),p.setAttribute("color",new kn(d,3));const g=new l1({vertexColors:!0,toneMapped:!1});super(p,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function cS(s,e,t,n){const r=xb(n);switch(t){case jM:return s*e;case JM:return s*e/r.components*r.byteLength;case m0:return s*e/r.components*r.byteLength;case Ha:return s*e*2/r.components*r.byteLength;case _0:return s*e*2/r.components*r.byteLength;case ZM:return s*e*3/r.components*r.byteLength;case fs:return s*e*4/r.components*r.byteLength;case g0:return s*e*4/r.components*r.byteLength;case ah:case lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uh:case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ng:case rg:return Math.max(s,16)*Math.max(e,8)/4;case tg:case ig:return Math.max(s,8)*Math.max(e,8)/2;case sg:case og:case lg:case ug:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ag:case wh:case cg:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fg:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dg:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hg:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case pg:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case mg:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _g:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gg:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vg:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xg:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yg:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sg:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Mg:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Eg:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Tg:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wg:case Ag:case bg:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Cg:case Rg:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ah:case Pg:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xb(s){switch(s){case Wr:case YM:return{byteLength:1,components:1};case Hc:case qM:case so:return{byteLength:2,components:1};case h0:case p0:return{byteLength:2,components:4};case Ls:case d0:case ws:return{byteLength:4,components:1};case $M:case KM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:f0}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=f0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function m1(){let s=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function yb(s){const e=new WeakMap;function t(c,f){const d=c.array,p=c.usage,g=d.byteLength,m=s.createBuffer();s.bindBuffer(f,m),s.bufferData(f,d,p),c.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)_=s.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,f,d){const p=f.array,g=f.updateRanges;if(s.bindBuffer(d,c),g.length===0)s.bufferSubData(d,0,p);else{g.sort((_,M)=>_.start-M.start);let m=0;for(let _=1;_<g.length;_++){const M=g[m],E=g[_];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++m,g[m]=E)}g.length=m+1;for(let _=0,M=g.length;_<M;_++){const E=g[_];s.bufferSubData(d,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(s.deleteBuffer(f.buffer),e.delete(c))}function l(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,t(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,f),d.version=c.version}}return{get:r,remove:a,update:l}}var Sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Pb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Db=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ib=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ub=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_C=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,MC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,TC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,WC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$C=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ZC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_R=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ER=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$R=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:Sb,alphahash_pars_fragment:Mb,alphamap_fragment:Eb,alphamap_pars_fragment:Tb,alphatest_fragment:wb,alphatest_pars_fragment:Ab,aomap_fragment:bb,aomap_pars_fragment:Cb,batching_pars_vertex:Rb,batching_vertex:Pb,begin_vertex:Db,beginnormal_vertex:Lb,bsdfs:Nb,iridescence_fragment:Ib,bumpmap_pars_fragment:Ub,clipping_planes_fragment:Fb,clipping_planes_pars_fragment:Ob,clipping_planes_pars_vertex:kb,clipping_planes_vertex:Bb,color_fragment:zb,color_pars_fragment:Vb,color_pars_vertex:Hb,color_vertex:Gb,common:Wb,cube_uv_reflection_fragment:Xb,defaultnormal_vertex:Yb,displacementmap_pars_vertex:qb,displacementmap_vertex:$b,emissivemap_fragment:Kb,emissivemap_pars_fragment:jb,colorspace_fragment:Zb,colorspace_pars_fragment:Jb,envmap_fragment:Qb,envmap_common_pars_fragment:eC,envmap_pars_fragment:tC,envmap_pars_vertex:nC,envmap_physical_pars_fragment:hC,envmap_vertex:iC,fog_vertex:rC,fog_pars_vertex:sC,fog_fragment:oC,fog_pars_fragment:aC,gradientmap_pars_fragment:lC,lightmap_pars_fragment:uC,lights_lambert_fragment:cC,lights_lambert_pars_fragment:fC,lights_pars_begin:dC,lights_toon_fragment:pC,lights_toon_pars_fragment:mC,lights_phong_fragment:_C,lights_phong_pars_fragment:gC,lights_physical_fragment:vC,lights_physical_pars_fragment:xC,lights_fragment_begin:yC,lights_fragment_maps:SC,lights_fragment_end:MC,lightprobes_pars_fragment:EC,logdepthbuf_fragment:TC,logdepthbuf_pars_fragment:wC,logdepthbuf_pars_vertex:AC,logdepthbuf_vertex:bC,map_fragment:CC,map_pars_fragment:RC,map_particle_fragment:PC,map_particle_pars_fragment:DC,metalnessmap_fragment:LC,metalnessmap_pars_fragment:NC,morphinstance_vertex:IC,morphcolor_vertex:UC,morphnormal_vertex:FC,morphtarget_pars_vertex:OC,morphtarget_vertex:kC,normal_fragment_begin:BC,normal_fragment_maps:zC,normal_pars_fragment:VC,normal_pars_vertex:HC,normal_vertex:GC,normalmap_pars_fragment:WC,clearcoat_normal_fragment_begin:XC,clearcoat_normal_fragment_maps:YC,clearcoat_pars_fragment:qC,iridescence_pars_fragment:$C,opaque_fragment:KC,packing:jC,premultiplied_alpha_fragment:ZC,project_vertex:JC,dithering_fragment:QC,dithering_pars_fragment:eR,roughnessmap_fragment:tR,roughnessmap_pars_fragment:nR,shadowmap_pars_fragment:iR,shadowmap_pars_vertex:rR,shadowmap_vertex:sR,shadowmask_pars_fragment:oR,skinbase_vertex:aR,skinning_pars_vertex:lR,skinning_vertex:uR,skinnormal_vertex:cR,specularmap_fragment:fR,specularmap_pars_fragment:dR,tonemapping_fragment:hR,tonemapping_pars_fragment:pR,transmission_fragment:mR,transmission_pars_fragment:_R,uv_pars_fragment:gR,uv_pars_vertex:vR,uv_vertex:xR,worldpos_vertex:yR,background_vert:SR,background_frag:MR,backgroundCube_vert:ER,backgroundCube_frag:TR,cube_vert:wR,cube_frag:AR,depth_vert:bR,depth_frag:CR,distance_vert:RR,distance_frag:PR,equirect_vert:DR,equirect_frag:LR,linedashed_vert:NR,linedashed_frag:IR,meshbasic_vert:UR,meshbasic_frag:FR,meshlambert_vert:OR,meshlambert_frag:kR,meshmatcap_vert:BR,meshmatcap_frag:zR,meshnormal_vert:VR,meshnormal_frag:HR,meshphong_vert:GR,meshphong_frag:WR,meshphysical_vert:XR,meshphysical_frag:YR,meshtoon_vert:qR,meshtoon_frag:$R,points_vert:KR,points_frag:jR,shadow_vert:ZR,shadow_frag:JR,sprite_vert:QR,sprite_frag:eP},qe={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Ms={basic:{uniforms:Hi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Hi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Hi([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Hi([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Hi([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Hi([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Hi([qe.points,qe.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Hi([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Hi([qe.common,qe.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Hi([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Hi([qe.sprite,qe.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distance:{uniforms:Hi([qe.common,qe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distance_vert,fragmentShader:Dt.distance_frag},shadow:{uniforms:Hi([qe.lights,qe.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Ms.physical={uniforms:Hi([Ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Od={r:0,b:0,g:0},tP=new Ln,_1=new At;_1.set(-1,0,0,0,1,0,0,0,1);function nP(s,e,t,n,r,a){const l=new Ht(0);let c=r===!0?0:1,f,d,p=null,g=0,m=null;function _(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){const A=C.backgroundBlurriness>0;I=e.get(I,A)}return I}function M(C){let I=!1;const A=_(C);A===null?x(l,c):A&&A.isColor&&(x(A,1),I=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(C,I){const A=_(I);A&&(A.isCubeTexture||A.mapping===Qh)?(d===void 0&&(d=new ir(new lf(1,1,1),new Ns({name:"BackgroundCubeMaterial",uniforms:cu(Ms.backgroundCube.uniforms),vertexShader:Ms.backgroundCube.vertexShader,fragmentShader:Ms.backgroundCube.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=A,d.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(tP.makeRotationFromEuler(I.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(_1),d.material.toneMapped=Wt.getTransfer(A.colorSpace)!==on,(p!==A||g!==A.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,p=A,g=A.version,m=s.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(f===void 0&&(f=new ir(new ep(2,2),new Ns({name:"BackgroundMaterial",uniforms:cu(Ms.background.uniforms),vertexShader:Ms.background.vertexShader,fragmentShader:Ms.background.fragmentShader,side:jo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=A,f.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,f.material.toneMapped=Wt.getTransfer(A.colorSpace)!==on,A.matrixAutoUpdate===!0&&A.updateMatrix(),f.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||g!==A.version||m!==s.toneMapping)&&(f.material.needsUpdate=!0,p=A,g=A.version,m=s.toneMapping),f.layers.enableAll(),C.unshift(f,f.geometry,f.material,0,0,null))}function x(C,I){C.getRGB(Od,d1(s)),t.buffers.color.setClear(Od.r,Od.g,Od.b,I,a)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(C,I=1){l.set(C),c=I,x(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,x(l,c)},render:M,addToRenderList:E,dispose:y}}function iP(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=m(null);let a=r,l=!1;function c(B,z,ne,ie,X){let ee=!1;const W=g(B,ie,ne,z);a!==W&&(a=W,d(a.object)),ee=_(B,ie,ne,X),ee&&M(B,ie,ne,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(ee||l)&&(l=!1,A(B,z,ne,ie),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return s.createVertexArray()}function d(B){return s.bindVertexArray(B)}function p(B){return s.deleteVertexArray(B)}function g(B,z,ne,ie){const X=ie.wireframe===!0;let ee=n[z.id];ee===void 0&&(ee={},n[z.id]=ee);const W=B.isInstancedMesh===!0?B.id:0;let H=ee[W];H===void 0&&(H={},ee[W]=H);let G=H[ne.id];G===void 0&&(G={},H[ne.id]=G);let U=G[X];return U===void 0&&(U=m(f()),G[X]=U),U}function m(B){const z=[],ne=[],ie=[];for(let X=0;X<t;X++)z[X]=0,ne[X]=0,ie[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ne,attributeDivisors:ie,object:B,attributes:{},index:null}}function _(B,z,ne,ie){const X=a.attributes,ee=z.attributes;let W=0;const H=ne.getAttributes();for(const G in H)if(H[G].location>=0){const k=X[G];let j=ee[G];if(j===void 0&&(G==="instanceMatrix"&&B.instanceMatrix&&(j=B.instanceMatrix),G==="instanceColor"&&B.instanceColor&&(j=B.instanceColor)),k===void 0||k.attribute!==j||j&&k.data!==j.data)return!0;W++}return a.attributesNum!==W||a.index!==ie}function M(B,z,ne,ie){const X={},ee=z.attributes;let W=0;const H=ne.getAttributes();for(const G in H)if(H[G].location>=0){let k=ee[G];k===void 0&&(G==="instanceMatrix"&&B.instanceMatrix&&(k=B.instanceMatrix),G==="instanceColor"&&B.instanceColor&&(k=B.instanceColor));const j={};j.attribute=k,k&&k.data&&(j.data=k.data),X[G]=j,W++}a.attributes=X,a.attributesNum=W,a.index=ie}function E(){const B=a.newAttributes;for(let z=0,ne=B.length;z<ne;z++)B[z]=0}function x(B){y(B,0)}function y(B,z){const ne=a.newAttributes,ie=a.enabledAttributes,X=a.attributeDivisors;ne[B]=1,ie[B]===0&&(s.enableVertexAttribArray(B),ie[B]=1),X[B]!==z&&(s.vertexAttribDivisor(B,z),X[B]=z)}function C(){const B=a.newAttributes,z=a.enabledAttributes;for(let ne=0,ie=z.length;ne<ie;ne++)z[ne]!==B[ne]&&(s.disableVertexAttribArray(ne),z[ne]=0)}function I(B,z,ne,ie,X,ee,W){W===!0?s.vertexAttribIPointer(B,z,ne,X,ee):s.vertexAttribPointer(B,z,ne,ie,X,ee)}function A(B,z,ne,ie){E();const X=ie.attributes,ee=ne.getAttributes(),W=z.defaultAttributeValues;for(const H in ee){const G=ee[H];if(G.location>=0){let U=X[H];if(U===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(U=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(U=B.instanceColor)),U!==void 0){const k=U.normalized,j=U.itemSize,Fe=e.get(U);if(Fe===void 0)continue;const Oe=Fe.buffer,De=Fe.type,te=Fe.bytesPerElement,ge=De===s.INT||De===s.UNSIGNED_INT||U.gpuType===d0;if(U.isInterleavedBufferAttribute){const he=U.data,Me=he.stride,Xe=U.offset;if(he.isInstancedInterleavedBuffer){for(let We=0;We<G.locationSize;We++)y(G.location+We,he.meshPerAttribute);B.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let We=0;We<G.locationSize;We++)x(G.location+We);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let We=0;We<G.locationSize;We++)I(G.location+We,j/G.locationSize,De,k,Me*te,(Xe+j/G.locationSize*We)*te,ge)}else{if(U.isInstancedBufferAttribute){for(let he=0;he<G.locationSize;he++)y(G.location+he,U.meshPerAttribute);B.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let he=0;he<G.locationSize;he++)x(G.location+he);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let he=0;he<G.locationSize;he++)I(G.location+he,j/G.locationSize,De,k,j*te,j/G.locationSize*he*te,ge)}}else if(W!==void 0){const k=W[H];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(G.location,k);break;case 3:s.vertexAttrib3fv(G.location,k);break;case 4:s.vertexAttrib4fv(G.location,k);break;default:s.vertexAttrib1fv(G.location,k)}}}}C()}function D(){L();for(const B in n){const z=n[B];for(const ne in z){const ie=z[ne];for(const X in ie){const ee=ie[X];for(const W in ee)p(ee[W].object),delete ee[W];delete ie[X]}}delete n[B]}}function P(B){if(n[B.id]===void 0)return;const z=n[B.id];for(const ne in z){const ie=z[ne];for(const X in ie){const ee=ie[X];for(const W in ee)p(ee[W].object),delete ee[W];delete ie[X]}}delete n[B.id]}function R(B){for(const z in n){const ne=n[z];for(const ie in ne){const X=ne[ie];if(X[B.id]===void 0)continue;const ee=X[B.id];for(const W in ee)p(ee[W].object),delete ee[W];delete X[B.id]}}}function T(B){for(const z in n){const ne=n[z],ie=B.isInstancedMesh===!0?B.id:0,X=ne[ie];if(X!==void 0){for(const ee in X){const W=X[ee];for(const H in W)p(W[H].object),delete W[H];delete X[ee]}delete ne[ie],Object.keys(ne).length===0&&delete n[z]}}}function L(){F(),l=!0,a!==r&&(a=r,d(a.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:L,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:x,disableUnusedAttributes:C}}function rP(s,e,t){let n;function r(f){n=f}function a(f,d){s.drawArrays(n,f,d),t.update(d,n,1)}function l(f,d,p){p!==0&&(s.drawArraysInstanced(n,f,d,p),t.update(d,n,p))}function c(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,d,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_];t.update(m,n,1)}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function sP(s,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(R){return!(R!==fs&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(R){const T=R===so&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wr&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ws&&!T)}function f(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=f(d);p!==d&&(xt("WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:A,maxSamples:D,samples:P}}function oP(s){const e=this;let t=null,n=0,r=!1,a=!1;const l=new Ea,c=new At,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const _=g.length!==0||m||n!==0||r;return r=m,n=g.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,_){const M=g.clippingPlanes,E=g.clipIntersection,x=g.clipShadows,y=s.get(g);if(!r||M===null||M.length===0||a&&!x)a?p(null):d();else{const C=a?0:n,I=C*4;let A=y.clippingState||null;f.value=A,A=p(M,m,I,_);for(let D=0;D!==I;++D)A[D]=t[D];y.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,m,_,M){const E=g!==null?g.length:0;let x=null;if(E!==0){if(x=f.value,M!==!0||x===null){const y=_+E*4,C=m.matrixWorldInverse;c.getNormalMatrix(C),(x===null||x.length<y)&&(x=new Float32Array(y));for(let I=0,A=_;I!==E;++I,A+=4)l.copy(g[I]).applyMatrix4(C,c),l.normal.toArray(x,A),x[A+3]=l.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const Bo=4,fS=[.125,.215,.35,.446,.526,.582],Ra=20,aP=256,cc=new p1,dS=new Ht;let __=null,g_=0,v_=0,x_=!1;const lP=new oe;class hS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:l=256,position:c=lP}=a;__=this._renderer.getRenderTarget(),g_=this._renderer.getActiveCubeFace(),v_=this._renderer.getActiveMipmapLevel(),x_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,r,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_S(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(__,g_,v_),this._renderer.xr.enabled=x_,e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Va||e.mapping===lu?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),__=this._renderer.getRenderTarget(),g_=this._renderer.getActiveCubeFace(),v_=this._renderer.getActiveMipmapLevel(),x_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:so,format:fs,colorSpace:bh,depthBuffer:!1},r=pS(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pS(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uP(a)),this._blurMaterial=fP(a,e,t),this._ggxMaterial=cP(a,e,t)}return r}_compileMaterial(e){const t=new ir(new xi,e);this._renderer.compile(t,cc)}_sceneToCubeUV(e,t,n,r,a){const f=new Vr(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,_=g.toneMapping;g.getClearColor(dS),g.toneMapping=Rs,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ir(new lf,new Ca({name:"PMREM.Background",side:sr,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let y=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,y=!0):(x.color.copy(dS),y=!0);for(let I=0;I<6;I++){const A=I%3;A===0?(f.up.set(0,d[I],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[I],a.y,a.z)):A===1?(f.up.set(0,0,d[I]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[I],a.z)):(f.up.set(0,d[I],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[I]));const D=this._cubeSize;Ul(r,A*D,I>2?D:0,D,D),g.setRenderTarget(r),y&&g.render(E,f),g.render(e,f)}g.toneMapping=_,g.autoClear=m,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Va||e.mapping===lu;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_S()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mS());const a=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=a;const c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;Ul(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,cc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const f=l.uniforms,d=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(d*d-p*p),m=0+d*1.25,_=g*m,{_lodMax:M}=this,E=this._sizeLods[n],x=3*E*(n>M-Bo?n-M+Bo:0),y=4*(this._cubeSize-E);f.envMap.value=e.texture,f.roughness.value=_,f.mipInt.value=M-t,Ul(a,x,y,3*E,2*E),r.setRenderTarget(a),r.render(c,cc),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=M-n,Ul(e,x,y,3*E,2*E),r.setRenderTarget(e),r.render(c,cc)}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,c){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&$t("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[r];g.material=d;const m=d.uniforms,_=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Ra-1),E=a/M,x=isFinite(a)?1+Math.floor(p*E):Ra;x>Ra&&xt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ra}`);const y=[];let C=0;for(let R=0;R<Ra;++R){const T=R/E,L=Math.exp(-T*T/2);y.push(L),R===0?C+=L:R<x&&(C+=2*L)}for(let R=0;R<y.length;R++)y[R]=y[R]/C;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=y,m.latitudinal.value=l==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:I}=this;m.dTheta.value=M,m.mipInt.value=I-n;const A=this._sizeLods[r],D=3*A*(r>I-Bo?r-I+Bo:0),P=4*(this._cubeSize-A);Ul(t,D,P,3*A,2*A),f.setRenderTarget(t),f.render(g,cc)}}function uP(s){const e=[],t=[],n=[];let r=s;const a=s-Bo+1+fS.length;for(let l=0;l<a;l++){const c=Math.pow(2,r);e.push(c);let f=1/c;l>s-Bo?f=fS[l-s+Bo-1]:l===0&&(f=0),t.push(f);const d=1/(c-2),p=-d,g=1+d,m=[p,p,g,p,g,g,p,p,g,g,p,g],_=6,M=6,E=3,x=2,y=1,C=new Float32Array(E*M*_),I=new Float32Array(x*M*_),A=new Float32Array(y*M*_);for(let P=0;P<_;P++){const R=P%3*2/3-1,T=P>2?0:-1,L=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];C.set(L,E*M*P),I.set(m,x*M*P);const F=[P,P,P,P,P,P];A.set(F,y*M*P)}const D=new xi;D.setAttribute("position",new Kr(C,E)),D.setAttribute("uv",new Kr(I,x)),D.setAttribute("faceIndex",new Kr(A,y)),n.push(new ir(D,null)),r>Bo&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function pS(s,e,t){const n=new Ps(s,e,t);return n.texture.mapping=Qh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ul(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function cP(s,e,t){return new Ns({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:no,depthTest:!1,depthWrite:!1})}function fP(s,e,t){const n=new Float32Array(Ra),r=new oe(0,1,0);return new Ns({name:"SphericalGaussianBlur",defines:{n:Ra,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:no,depthTest:!1,depthWrite:!1})}function mS(){return new Ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:no,depthTest:!1,depthWrite:!1})}function _S(){return new Ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:no,depthTest:!1,depthWrite:!1})}function tp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class g1 extends Ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new c1(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new lf(5,5,5),a=new Ns({name:"CubemapFromEquirect",uniforms:cu(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sr,blending:no});a.uniforms.tEquirect.value=t;const l=new ir(r,a),c=t.minFilter;return t.minFilter===Pa&&(t.minFilter=Ni),new pb(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}function dP(s){let e=new WeakMap,t=new WeakMap,n=null;function r(m,_=!1){return m==null?null:_?l(m):a(m)}function a(m){if(m&&m.isTexture){const _=m.mapping;if(_===Vm||_===Hm)if(e.has(m)){const M=e.get(m).texture;return c(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const E=new g1(M.height);return E.fromEquirectangularTexture(s,m),e.set(m,E),m.addEventListener("dispose",d),c(E.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){const _=m.mapping,M=_===Vm||_===Hm,E=_===Va||_===lu;if(M||E){let x=t.get(m);const y=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return n===null&&(n=new hS(s)),x=M?n.fromEquirectangular(m,x):n.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),x.texture;if(x!==void 0)return x.texture;{const C=m.image;return M&&C&&C.height>0||E&&C&&f(C)?(n===null&&(n=new hS(s)),x=M?n.fromEquirectangular(m):n.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),m.addEventListener("dispose",p),x.texture):null}}}return m}function c(m,_){return _===Vm?m.mapping=Va:_===Hm&&(m.mapping=lu),m}function f(m){let _=0;const M=6;for(let E=0;E<M;E++)m[E]!==void 0&&_++;return _===M}function d(m){const _=m.target;_.removeEventListener("dispose",d);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(m){const _=m.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function hP(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=s.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Zl("WebGLRenderer: "+n+" extension not supported."),r}}}function pP(s,e,t,n){const r={},a=new WeakMap;function l(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",l),delete r[m.id];const _=a.get(m);_&&(e.remove(_),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(g,m){return r[m.id]===!0||(m.addEventListener("dispose",l),r[m.id]=!0,t.memory.geometries++),m}function f(g){const m=g.attributes;for(const _ in m)e.update(m[_],s.ARRAY_BUFFER)}function d(g){const m=[],_=g.index,M=g.attributes.position;let E=0;if(M===void 0)return;if(_!==null){const C=_.array;E=_.version;for(let I=0,A=C.length;I<A;I+=3){const D=C[I+0],P=C[I+1],R=C[I+2];m.push(D,P,P,R,R,D)}}else{const C=M.array;E=M.version;for(let I=0,A=C.length/3-1;I<A;I+=3){const D=I+0,P=I+1,R=I+2;m.push(D,P,P,R,R,D)}}const x=new(M.count>=65535?r1:i1)(m,1);x.version=E;const y=a.get(g);y&&e.remove(y),a.set(g,x)}function p(g){const m=a.get(g);if(m){const _=g.index;_!==null&&m.version<_.version&&d(g)}else d(g);return a.get(g)}return{get:c,update:f,getWireframeAttribute:p}}function mP(s,e,t){let n;function r(g){n=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function f(g,m){s.drawElements(n,m,a,g*l),t.update(m,n,1)}function d(g,m,_){_!==0&&(s.drawElementsInstanced(n,m,a,g*l,_),t.update(m,n,_))}function p(g,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,g,0,_);let E=0;for(let x=0;x<_;x++)E+=m[x];t.update(E,n,1)}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=p}function _P(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case s.TRIANGLES:t.triangles+=c*(a/3);break;case s.LINES:t.lines+=c*(a/2);break;case s.LINE_STRIP:t.lines+=c*(a-1);break;case s.LINE_LOOP:t.lines+=c*a;break;case s.POINTS:t.points+=c*a;break;default:$t("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function gP(s,e,t){const n=new WeakMap,r=new Fn;function a(l,c,f){const d=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let m=n.get(c);if(m===void 0||m.count!==g){let F=function(){T.dispose(),n.delete(c),c.removeEventListener("dispose",F)};var _=F;m!==void 0&&m.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let A=0;M===!0&&(A=1),E===!0&&(A=2),x===!0&&(A=3);let D=c.attributes.position.count*A,P=1;D>e.maxTextureSize&&(P=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const R=new Float32Array(D*P*4*g),T=new e1(R,D,P,g);T.type=ws,T.needsUpdate=!0;const L=A*4;for(let B=0;B<g;B++){const z=y[B],ne=C[B],ie=I[B],X=D*P*4*B;for(let ee=0;ee<z.count;ee++){const W=ee*L;M===!0&&(r.fromBufferAttribute(z,ee),R[X+W+0]=r.x,R[X+W+1]=r.y,R[X+W+2]=r.z,R[X+W+3]=0),E===!0&&(r.fromBufferAttribute(ne,ee),R[X+W+4]=r.x,R[X+W+5]=r.y,R[X+W+6]=r.z,R[X+W+7]=0),x===!0&&(r.fromBufferAttribute(ie,ee),R[X+W+8]=r.x,R[X+W+9]=r.y,R[X+W+10]=r.z,R[X+W+11]=ie.itemSize===4?r.w:1)}}m={count:g,texture:T,size:new Ft(D,P)},n.set(c,m),c.addEventListener("dispose",F)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let M=0;for(let x=0;x<d.length;x++)M+=d[x];const E=c.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",d)}f.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:a}}function vP(s,e,t,n,r){let a=new WeakMap;function l(d){const p=r.render.frame,g=d.geometry,m=e.get(d,g);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==p&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return m}function c(){a=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const xP={[kM]:"LINEAR_TONE_MAPPING",[BM]:"REINHARD_TONE_MAPPING",[zM]:"CINEON_TONE_MAPPING",[VM]:"ACES_FILMIC_TONE_MAPPING",[GM]:"AGX_TONE_MAPPING",[WM]:"NEUTRAL_TONE_MAPPING",[HM]:"CUSTOM_TONE_MAPPING"};function yP(s,e,t,n,r,a){const l=new Ps(e,t,{type:s,depthBuffer:r,stencilBuffer:a,samples:n?4:0,depthTexture:r?new uu(e,t):void 0}),c=new Ps(e,t,{type:so,depthBuffer:!1,stencilBuffer:!1}),f=new xi;f.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new kn([0,2,0,0,2,0],2));const d=new fb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ir(f,d),g=new p1(-1,1,1,-1,0,1);let m=null,_=null,M=!1,E,x=null,y=[],C=!1;this.setSize=function(I,A){l.setSize(I,A),c.setSize(I,A);for(let D=0;D<y.length;D++){const P=y[D];P.setSize&&P.setSize(I,A)}},this.setEffects=function(I){y=I,C=y.length>0&&y[0].isRenderPass===!0;const A=l.width,D=l.height;for(let P=0;P<y.length;P++){const R=y[P];R.setSize&&R.setSize(A,D)}},this.begin=function(I,A){if(M||I.toneMapping===Rs&&y.length===0)return!1;if(x=A,A!==null){const D=A.width,P=A.height;(l.width!==D||l.height!==P)&&this.setSize(D,P)}return C===!1&&I.setRenderTarget(l),E=I.toneMapping,I.toneMapping=Rs,!0},this.hasRenderPass=function(){return C},this.end=function(I,A){I.toneMapping=E,M=!0;let D=l,P=c;for(let R=0;R<y.length;R++){const T=y[R];if(T.enabled!==!1&&(T.render(I,P,D,A),T.needsSwap!==!1)){const L=D;D=P,P=L}}if(m!==I.outputColorSpace||_!==I.toneMapping){m=I.outputColorSpace,_=I.toneMapping,d.defines={},Wt.getTransfer(m)===on&&(d.defines.SRGB_TRANSFER="");const R=xP[_];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,I.setRenderTarget(x),I.render(p,g),x=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const v1=new Ii,Ig=new uu(1,1),x1=new e1,y1=new FA,S1=new c1,gS=[],vS=[],xS=new Float32Array(16),yS=new Float32Array(9),SS=new Float32Array(4);function Eu(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let a=gS[r];if(a===void 0&&(a=new Float32Array(r),gS[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,s[l].toArray(a,c)}return a}function Qn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ei(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function np(s,e){let t=vS[e];t===void 0&&(t=new Int32Array(e),vS[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function SP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function MP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qn(t,e))return;s.uniform2fv(this.addr,e),ei(t,e)}}function EP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qn(t,e))return;s.uniform3fv(this.addr,e),ei(t,e)}}function TP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qn(t,e))return;s.uniform4fv(this.addr,e),ei(t,e)}}function wP(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ei(t,e)}else{if(Qn(t,n))return;SS.set(n),s.uniformMatrix2fv(this.addr,!1,SS),ei(t,n)}}function AP(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ei(t,e)}else{if(Qn(t,n))return;yS.set(n),s.uniformMatrix3fv(this.addr,!1,yS),ei(t,n)}}function bP(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ei(t,e)}else{if(Qn(t,n))return;xS.set(n),s.uniformMatrix4fv(this.addr,!1,xS),ei(t,n)}}function CP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function RP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qn(t,e))return;s.uniform2iv(this.addr,e),ei(t,e)}}function PP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qn(t,e))return;s.uniform3iv(this.addr,e),ei(t,e)}}function DP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qn(t,e))return;s.uniform4iv(this.addr,e),ei(t,e)}}function LP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function NP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qn(t,e))return;s.uniform2uiv(this.addr,e),ei(t,e)}}function IP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qn(t,e))return;s.uniform3uiv(this.addr,e),ei(t,e)}}function UP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qn(t,e))return;s.uniform4uiv(this.addr,e),ei(t,e)}}function FP(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let a;this.type===s.SAMPLER_2D_SHADOW?(Ig.compareFunction=t.isReversedDepthBuffer()?x0:v0,a=Ig):a=v1,t.setTexture2D(e||a,r)}function OP(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||y1,r)}function kP(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||S1,r)}function BP(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||x1,r)}function zP(s){switch(s){case 5126:return SP;case 35664:return MP;case 35665:return EP;case 35666:return TP;case 35674:return wP;case 35675:return AP;case 35676:return bP;case 5124:case 35670:return CP;case 35667:case 35671:return RP;case 35668:case 35672:return PP;case 35669:case 35673:return DP;case 5125:return LP;case 36294:return NP;case 36295:return IP;case 36296:return UP;case 35678:case 36198:case 36298:case 36306:case 35682:return FP;case 35679:case 36299:case 36307:return OP;case 35680:case 36300:case 36308:case 36293:return kP;case 36289:case 36303:case 36311:case 36292:return BP}}function VP(s,e){s.uniform1fv(this.addr,e)}function HP(s,e){const t=Eu(e,this.size,2);s.uniform2fv(this.addr,t)}function GP(s,e){const t=Eu(e,this.size,3);s.uniform3fv(this.addr,t)}function WP(s,e){const t=Eu(e,this.size,4);s.uniform4fv(this.addr,t)}function XP(s,e){const t=Eu(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function YP(s,e){const t=Eu(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function qP(s,e){const t=Eu(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $P(s,e){s.uniform1iv(this.addr,e)}function KP(s,e){s.uniform2iv(this.addr,e)}function jP(s,e){s.uniform3iv(this.addr,e)}function ZP(s,e){s.uniform4iv(this.addr,e)}function JP(s,e){s.uniform1uiv(this.addr,e)}function QP(s,e){s.uniform2uiv(this.addr,e)}function e2(s,e){s.uniform3uiv(this.addr,e)}function t2(s,e){s.uniform4uiv(this.addr,e)}function n2(s,e,t){const n=this.cache,r=e.length,a=np(t,r);Qn(n,a)||(s.uniform1iv(this.addr,a),ei(n,a));let l;this.type===s.SAMPLER_2D_SHADOW?l=Ig:l=v1;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||l,a[c])}function i2(s,e,t){const n=this.cache,r=e.length,a=np(t,r);Qn(n,a)||(s.uniform1iv(this.addr,a),ei(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||y1,a[l])}function r2(s,e,t){const n=this.cache,r=e.length,a=np(t,r);Qn(n,a)||(s.uniform1iv(this.addr,a),ei(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||S1,a[l])}function s2(s,e,t){const n=this.cache,r=e.length,a=np(t,r);Qn(n,a)||(s.uniform1iv(this.addr,a),ei(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||x1,a[l])}function o2(s){switch(s){case 5126:return VP;case 35664:return HP;case 35665:return GP;case 35666:return WP;case 35674:return XP;case 35675:return YP;case 35676:return qP;case 5124:case 35670:return $P;case 35667:case 35671:return KP;case 35668:case 35672:return jP;case 35669:case 35673:return ZP;case 5125:return JP;case 36294:return QP;case 36295:return e2;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return s2}}class a2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zP(t.type)}}class l2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o2(t.type)}}class u2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const y_=/(\w+)(\])?(\[|\.)?/g;function MS(s,e){s.seq.push(e),s.map[e.id]=e}function c2(s,e,t){const n=s.name,r=n.length;for(y_.lastIndex=0;;){const a=y_.exec(n),l=y_.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&l+2===r){MS(t,d===void 0?new a2(c,s,e):new l2(c,s,e));break}else{let g=t.map[c];g===void 0&&(g=new u2(c),MS(t,g)),t=g}}}class fh{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const c=e.getActiveUniform(t,l),f=e.getUniformLocation(t,c.name);c2(c,f,this)}const r=[],a=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):a.push(l);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function ES(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const f2=37297;let d2=0;function h2(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const TS=new At;function p2(s){Wt._getMatrix(TS,Wt.workingColorSpace,s);const e=`mat3( ${TS.elements.map(t=>t.toFixed(4))} )`;switch(Wt.getTransfer(s)){case Ch:return[e,"LinearTransferOETF"];case on:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wS(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+h2(s.getShaderSource(e),c)}else return a}function m2(s,e){const t=p2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const _2={[kM]:"Linear",[BM]:"Reinhard",[zM]:"Cineon",[VM]:"ACESFilmic",[GM]:"AgX",[WM]:"Neutral",[HM]:"Custom"};function g2(s,e){const t=_2[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kd=new oe;function v2(){Wt.getLuminanceCoefficients(kd);const s=kd.x.toFixed(4),e=kd.y.toFixed(4),t=kd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xc).join(`
`)}function y2(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S2(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=s.getActiveAttrib(e,r),l=a.name;let c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:s.getAttribLocation(e,l),locationSize:c}}return t}function xc(s){return s!==""}function AS(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bS(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ug(s){return s.replace(M2,T2)}const E2=new Map;function T2(s,e){let t=Dt[e];if(t===void 0){const n=E2.get(e);if(n!==void 0)t=Dt[n],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ug(t)}const w2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function CS(s){return s.replace(w2,A2)}function A2(s,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function RS(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const b2={[oh]:"SHADOWMAP_TYPE_PCF",[gc]:"SHADOWMAP_TYPE_VSM"};function C2(s){return b2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R2={[Va]:"ENVMAP_TYPE_CUBE",[lu]:"ENVMAP_TYPE_CUBE",[Qh]:"ENVMAP_TYPE_CUBE_UV"};function P2(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":R2[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const D2={[lu]:"ENVMAP_MODE_REFRACTION"};function L2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":D2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const N2={[OM]:"ENVMAP_BLENDING_MULTIPLY",[mA]:"ENVMAP_BLENDING_MIX",[_A]:"ENVMAP_BLENDING_ADD"};function I2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":N2[s.combine]||"ENVMAP_BLENDING_NONE"}function U2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function F2(s,e,t,n){const r=s.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const f=C2(t),d=P2(t),p=L2(t),g=I2(t),m=U2(t),_=x2(t),M=y2(a),E=r.createProgram();let x,y,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(xc).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(xc).join(`
`),y.length>0&&(y+=`
`)):(x=[RS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xc).join(`
`),y=[RS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rs?"#define TONE_MAPPING":"",t.toneMapping!==Rs?Dt.tonemapping_pars_fragment:"",t.toneMapping!==Rs?g2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,m2("linearToOutputTexel",t.outputColorSpace),v2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xc).join(`
`)),l=Ug(l),l=AS(l,t),l=bS(l,t),c=Ug(c),c=AS(c,t),c=bS(c,t),l=CS(l),c=CS(c),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Fy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=C+x+l,A=C+y+c,D=ES(r,r.VERTEX_SHADER,I),P=ES(r,r.FRAGMENT_SHADER,A);r.attachShader(E,D),r.attachShader(E,P),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function R(B){if(s.debug.checkShaderErrors){const z=r.getProgramInfoLog(E)||"",ne=r.getShaderInfoLog(D)||"",ie=r.getShaderInfoLog(P)||"",X=z.trim(),ee=ne.trim(),W=ie.trim();let H=!0,G=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,E,D,P);else{const U=wS(r,D,"vertex"),k=wS(r,P,"fragment");$t("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+X+`
`+U+`
`+k)}else X!==""?xt("WebGLProgram: Program Info Log:",X):(ee===""||W==="")&&(G=!1);G&&(B.diagnostics={runnable:H,programLog:X,vertexShader:{log:ee,prefix:x},fragmentShader:{log:W,prefix:y}})}r.deleteShader(D),r.deleteShader(P),T=new fh(r,E),L=S2(r,E)}let T;this.getUniforms=function(){return T===void 0&&R(this),T};let L;this.getAttributes=function(){return L===void 0&&R(this),L};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(E,f2)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=P,this}let O2=0;class k2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new B2(e),t.set(e,n)),n}}class B2{constructor(e){this.id=O2++,this.code=e,this.usedTimes=0}}function z2(s){return s===Ha||s===wh||s===Ah}function V2(s,e,t,n,r,a){const l=new t1,c=new k2,f=new Set,d=[],p=new Map,g=n.logarithmicDepthBuffer;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return f.add(T),T===0?"uv":`uv${T}`}function E(T,L,F,B,z,ne){const ie=B.fog,X=z.geometry,ee=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,W=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,H=e.get(T.envMap||ee,W),G=H&&H.mapping===Qh?H.image.height:null,U=_[T.type];T.precision!==null&&(m=n.getMaxPrecision(T.precision),m!==T.precision&&xt("WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const k=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,j=k!==void 0?k.length:0;let Fe=0;X.morphAttributes.position!==void 0&&(Fe=1),X.morphAttributes.normal!==void 0&&(Fe=2),X.morphAttributes.color!==void 0&&(Fe=3);let Oe,De,te,ge;if(U){const Se=Ms[U];Oe=Se.vertexShader,De=Se.fragmentShader}else{Oe=T.vertexShader,De=T.fragmentShader;const Se=c.getVertexShaderStage(T),Le=c.getFragmentShaderStage(T);c.update(T,Se,Le),te=Se.id,ge=Le.id}const he=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Xe=z.isInstancedMesh===!0,We=z.isBatchedMesh===!0,pt=!!T.map,He=!!T.matcap,ot=!!H,ht=!!T.aoMap,Qe=!!T.lightMap,re=!!T.bumpMap&&T.wireframe===!1,vt=!!T.normalMap,Mt=!!T.displacementMap,Lt=!!T.emissiveMap,it=!!T.metalnessMap,Et=!!T.roughnessMap,Y=T.anisotropy>0,Gt=T.clearcoat>0,Je=T.dispersion>0,O=T.iridescence>0,w=T.sheen>0,Z=T.transmission>0,se=Y&&!!T.anisotropyMap,de=Gt&&!!T.clearcoatMap,we=Gt&&!!T.clearcoatNormalMap,Te=Gt&&!!T.clearcoatRoughnessMap,me=O&&!!T.iridescenceMap,_e=O&&!!T.iridescenceThicknessMap,Ie=w&&!!T.sheenColorMap,Ke=w&&!!T.sheenRoughnessMap,ke=!!T.specularMap,Ne=!!T.specularColorMap,Ce=!!T.specularIntensityMap,rt=Z&&!!T.transmissionMap,$e=Z&&!!T.thicknessMap,q=!!T.gradientMap,Re=!!T.alphaMap,ve=T.alphaTest>0,Ue=!!T.alphaHash,Ve=!!T.extensions;let Ee=Rs;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ee=s.toneMapping);const ye={shaderID:U,shaderType:T.type,shaderName:T.name,vertexShader:Oe,fragmentShader:De,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:We,batchingColor:We&&z._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&z.instanceColor!==null,instancingMorph:Xe&&z.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:pt,matcap:He,envMap:ot,envMapMode:ot&&H.mapping,envMapCubeUVHeight:G,aoMap:ht,lightMap:Qe,bumpMap:re,normalMap:vt,displacementMap:Mt,emissiveMap:Lt,normalMapObjectSpace:vt&&T.normalMapType===xA,normalMapTangentSpace:vt&&T.normalMapType===Iy,packedNormalMap:vt&&T.normalMapType===Iy&&z2(T.normalMap.format),metalnessMap:it,roughnessMap:Et,anisotropy:Y,anisotropyMap:se,clearcoat:Gt,clearcoatMap:de,clearcoatNormalMap:we,clearcoatRoughnessMap:Te,dispersion:Je,iridescence:O,iridescenceMap:me,iridescenceThicknessMap:_e,sheen:w,sheenColorMap:Ie,sheenRoughnessMap:Ke,specularMap:ke,specularColorMap:Ne,specularIntensityMap:Ce,transmission:Z,transmissionMap:rt,thicknessMap:$e,gradientMap:q,opaque:T.transparent===!1&&T.blending===jl&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:ve,alphaHash:Ue,combine:T.combine,mapUv:pt&&M(T.map.channel),aoMapUv:ht&&M(T.aoMap.channel),lightMapUv:Qe&&M(T.lightMap.channel),bumpMapUv:re&&M(T.bumpMap.channel),normalMapUv:vt&&M(T.normalMap.channel),displacementMapUv:Mt&&M(T.displacementMap.channel),emissiveMapUv:Lt&&M(T.emissiveMap.channel),metalnessMapUv:it&&M(T.metalnessMap.channel),roughnessMapUv:Et&&M(T.roughnessMap.channel),anisotropyMapUv:se&&M(T.anisotropyMap.channel),clearcoatMapUv:de&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&M(T.sheenRoughnessMap.channel),specularMapUv:ke&&M(T.specularMap.channel),specularColorMapUv:Ne&&M(T.specularColorMap.channel),specularIntensityMapUv:Ce&&M(T.specularIntensityMap.channel),transmissionMapUv:rt&&M(T.transmissionMap.channel),thicknessMapUv:$e&&M(T.thicknessMap.channel),alphaMapUv:Re&&M(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(vt||Y),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(pt||Re),fog:!!ie,useFog:T.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&vt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Me,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Fe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:pt&&T.map.isVideoTexture===!0&&Wt.getTransfer(T.map.colorSpace)===on,decodeVideoTextureEmissive:Lt&&T.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(T.emissiveMap.colorSpace)===on,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Js,flipSided:T.side===sr,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ye.vertexUv1s=f.has(1),ye.vertexUv2s=f.has(2),ye.vertexUv3s=f.has(3),f.clear(),ye}function x(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)L.push(F),L.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(y(L,T),C(L,T),L.push(s.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function y(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){l.disableAll(),L.instancing&&l.enable(0),L.instancingColor&&l.enable(1),L.instancingMorph&&l.enable(2),L.matcap&&l.enable(3),L.envMap&&l.enable(4),L.normalMapObjectSpace&&l.enable(5),L.normalMapTangentSpace&&l.enable(6),L.clearcoat&&l.enable(7),L.iridescence&&l.enable(8),L.alphaTest&&l.enable(9),L.vertexColors&&l.enable(10),L.vertexAlphas&&l.enable(11),L.vertexUv1s&&l.enable(12),L.vertexUv2s&&l.enable(13),L.vertexUv3s&&l.enable(14),L.vertexTangents&&l.enable(15),L.anisotropy&&l.enable(16),L.alphaHash&&l.enable(17),L.batching&&l.enable(18),L.dispersion&&l.enable(19),L.batchingColor&&l.enable(20),L.gradientMap&&l.enable(21),L.packedNormalMap&&l.enable(22),L.vertexNormals&&l.enable(23),T.push(l.mask),l.disableAll(),L.fog&&l.enable(0),L.useFog&&l.enable(1),L.flatShading&&l.enable(2),L.logarithmicDepthBuffer&&l.enable(3),L.reversedDepthBuffer&&l.enable(4),L.skinning&&l.enable(5),L.morphTargets&&l.enable(6),L.morphNormals&&l.enable(7),L.morphColors&&l.enable(8),L.premultipliedAlpha&&l.enable(9),L.shadowMapEnabled&&l.enable(10),L.doubleSided&&l.enable(11),L.flipSided&&l.enable(12),L.useDepthPacking&&l.enable(13),L.dithering&&l.enable(14),L.transmission&&l.enable(15),L.sheen&&l.enable(16),L.opaque&&l.enable(17),L.pointsUvs&&l.enable(18),L.decodeVideoTexture&&l.enable(19),L.decodeVideoTextureEmissive&&l.enable(20),L.alphaToCoverage&&l.enable(21),L.numLightProbeGrids>0&&l.enable(22),L.hasPositionAttribute&&l.enable(23),T.push(l.mask)}function I(T){const L=_[T.type];let F;if(L){const B=Ms[L];F=lb.clone(B.uniforms)}else F=T.uniforms;return F}function A(T,L){let F=p.get(L);return F!==void 0?++F.usedTimes:(F=new F2(s,L,T,r),d.push(F),p.set(L,F)),F}function D(T){if(--T.usedTimes===0){const L=d.indexOf(T);d[L]=d[d.length-1],d.pop(),p.delete(T.cacheKey),T.destroy()}}function P(T){c.remove(T)}function R(){c.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:I,acquireProgram:A,releaseProgram:D,releaseShaderCache:P,programs:d,dispose:R}}function H2(){let s=new WeakMap;function e(l){return s.has(l)}function t(l){let c=s.get(l);return c===void 0&&(c={},s.set(l,c)),c}function n(l){s.delete(l)}function r(l,c,f){s.get(l)[c]=f}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function G2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function PS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function DS(){const s=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function c(m,_,M,E,x,y){let C=s[e];return C===void 0?(C={id:m.id,object:m,geometry:_,material:M,materialVariant:l(m),groupOrder:E,renderOrder:m.renderOrder,z:x,group:y},s[e]=C):(C.id=m.id,C.object=m,C.geometry=_,C.material=M,C.materialVariant=l(m),C.groupOrder=E,C.renderOrder=m.renderOrder,C.z=x,C.group=y),e++,C}function f(m,_,M,E,x,y){const C=c(m,_,M,E,x,y);M.transmission>0?n.push(C):M.transparent===!0?r.push(C):t.push(C)}function d(m,_,M,E,x,y){const C=c(m,_,M,E,x,y);M.transmission>0?n.unshift(C):M.transparent===!0?r.unshift(C):t.unshift(C)}function p(m,_,M){t.length>1&&t.sort(m||G2),n.length>1&&n.sort(_||PS),r.length>1&&r.sort(_||PS),M&&(t.reverse(),n.reverse(),r.reverse())}function g(){for(let m=e,_=s.length;m<_;m++){const M=s[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:f,unshift:d,finish:g,sort:p}}function W2(){let s=new WeakMap;function e(n,r){const a=s.get(n);let l;return a===void 0?(l=new DS,s.set(n,[l])):r>=a.length?(l=new DS,a.push(l)):l=a[r],l}function t(){s=new WeakMap}return{get:e,dispose:t}}function X2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new Ht};break;case"SpotLight":t={position:new oe,direction:new oe,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":t={color:new Ht,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=t,t}}}function Y2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let q2=0;function $2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function K2(s){const e=new X2,t=Y2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new oe);const r=new oe,a=new Ln,l=new Ln;function c(d){let p=0,g=0,m=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let _=0,M=0,E=0,x=0,y=0,C=0,I=0,A=0,D=0,P=0,R=0;d.sort($2);for(let L=0,F=d.length;L<F;L++){const B=d[L],z=B.color,ne=B.intensity,ie=B.distance;let X=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ha?X=B.shadow.map.texture:X=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=z.r*ne,g+=z.g*ne,m+=z.b*ne;else if(B.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(B.sh.coefficients[ee],ne);R++}else if(B.isDirectionalLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const W=B.shadow,H=t.get(B);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[_]=H,n.directionalShadowMap[_]=X,n.directionalShadowMatrix[_]=B.shadow.matrix,C++}n.directional[_]=ee,_++}else if(B.isSpotLight){const ee=e.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy(z).multiplyScalar(ne),ee.distance=ie,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,n.spot[E]=ee;const W=B.shadow;if(B.map&&(n.spotLightMap[D]=B.map,D++,W.updateMatrices(B),B.castShadow&&P++),n.spotLightMatrix[E]=W.matrix,B.castShadow){const H=t.get(B);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[E]=H,n.spotShadowMap[E]=X,A++}E++}else if(B.isRectAreaLight){const ee=e.get(B);ee.color.copy(z).multiplyScalar(ne),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),n.rectArea[x]=ee,x++}else if(B.isPointLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const W=B.shadow,H=t.get(B);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[M]=H,n.pointShadowMap[M]=X,n.pointShadowMatrix[M]=B.shadow.matrix,I++}n.point[M]=ee,M++}else if(B.isHemisphereLight){const ee=e.get(B);ee.skyColor.copy(B.color).multiplyScalar(ne),ee.groundColor.copy(B.groundColor).multiplyScalar(ne),n.hemi[y]=ee,y++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qe.LTC_FLOAT_1,n.rectAreaLTC2=qe.LTC_FLOAT_2):(n.rectAreaLTC1=qe.LTC_HALF_1,n.rectAreaLTC2=qe.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=m;const T=n.hash;(T.directionalLength!==_||T.pointLength!==M||T.spotLength!==E||T.rectAreaLength!==x||T.hemiLength!==y||T.numDirectionalShadows!==C||T.numPointShadows!==I||T.numSpotShadows!==A||T.numSpotMaps!==D||T.numLightProbes!==R)&&(n.directional.length=_,n.spot.length=E,n.rectArea.length=x,n.point.length=M,n.hemi.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=A+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,T.directionalLength=_,T.pointLength=M,T.spotLength=E,T.rectAreaLength=x,T.hemiLength=y,T.numDirectionalShadows=C,T.numPointShadows=I,T.numSpotShadows=A,T.numSpotMaps=D,T.numLightProbes=R,n.version=q2++)}function f(d,p){let g=0,m=0,_=0,M=0,E=0;const x=p.matrixWorldInverse;for(let y=0,C=d.length;y<C;y++){const I=d[y];if(I.isDirectionalLight){const A=n.directional[g];A.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),g++}else if(I.isSpotLight){const A=n.spot[_];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),_++}else if(I.isRectAreaLight){const A=n.rectArea[M];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(x),l.identity(),a.copy(I.matrixWorld),a.premultiply(x),l.extractRotation(a),A.halfWidth.set(I.width*.5,0,0),A.halfHeight.set(0,I.height*.5,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),M++}else if(I.isPointLight){const A=n.point[m];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(x),m++}else if(I.isHemisphereLight){const A=n.hemi[E];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(x),E++}}}return{setup:c,setupView:f,state:n}}function LS(s){const e=new K2(s),t=[],n=[],r=[];function a(m){g.camera=m,t.length=0,n.length=0,r.length=0}function l(m){t.push(m)}function c(m){n.push(m)}function f(m){r.push(m)}function d(){e.setup(t)}function p(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:c,pushLightProbeGrid:f}}function j2(s){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let c;return l===void 0?(c=new LS(s),e.set(r,[c])):a>=l.length?(c=new LS(s),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const Z2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q2=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],e3=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],NS=new Ln,fc=new oe,S_=new oe;function t3(s,e,t){let n=new a1;const r=new Ft,a=new Ft,l=new Fn,c=new db,f=new hb,d={},p=t.maxTextureSize,g={[jo]:sr,[sr]:jo,[Js]:Js},m=new Ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Z2,fragmentShader:J2}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const M=new xi;M.setAttribute("position",new Kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ir(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oh;let y=this.type;this.render=function(P,R,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;this.type===jw&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oh);const L=s.getRenderTarget(),F=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),z=s.state;z.setBlending(no),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const ne=y!==this.type;ne&&R.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(X=>X.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,X=P.length;ie<X;ie++){const ee=P[ie],W=ee.shadow;if(W===void 0){xt("WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const H=W.getFrameExtents();r.multiply(H),a.copy(W.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/H.x),r.x=a.x*H.x,W.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/H.y),r.y=a.y*H.y,W.mapSize.y=a.y));const G=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=G,W.map===null||ne===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===gc){if(ee.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ps(r.x,r.y,{format:Ha,type:so,minFilter:Ni,magFilter:Ni,generateMipmaps:!1}),W.map.texture.name=ee.name+".shadowMap",W.map.depthTexture=new uu(r.x,r.y,ws),W.map.depthTexture.name=ee.name+".shadowMapDepth",W.map.depthTexture.format=oo,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=_i,W.map.depthTexture.magFilter=_i}else ee.isPointLight?(W.map=new g1(r.x),W.map.depthTexture=new ob(r.x,Ls)):(W.map=new Ps(r.x,r.y),W.map.depthTexture=new uu(r.x,r.y,Ls)),W.map.depthTexture.name=ee.name+".shadowMap",W.map.depthTexture.format=oo,this.type===oh?(W.map.depthTexture.compareFunction=G?x0:v0,W.map.depthTexture.minFilter=Ni,W.map.depthTexture.magFilter=Ni):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=_i,W.map.depthTexture.magFilter=_i);W.camera.updateProjectionMatrix()}const U=W.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<U;k++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,k),s.clear();else{k===0&&(s.setRenderTarget(W.map),s.clear());const j=W.getViewport(k);l.set(a.x*j.x,a.y*j.y,a.x*j.z,a.y*j.w),z.viewport(l)}if(ee.isPointLight){const j=W.camera,Fe=W.matrix,Oe=ee.distance||j.far;Oe!==j.far&&(j.far=Oe,j.updateProjectionMatrix()),fc.setFromMatrixPosition(ee.matrixWorld),j.position.copy(fc),S_.copy(j.position),S_.add(Q2[k]),j.up.copy(e3[k]),j.lookAt(S_),j.updateMatrixWorld(),Fe.makeTranslation(-fc.x,-fc.y,-fc.z),NS.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W._frustum.setFromProjectionMatrix(NS,j.coordinateSystem,j.reversedDepth)}else W.updateMatrices(ee);n=W.getFrustum(),A(R,T,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===gc&&C(W,T),W.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(L,F,B)};function C(P,R){const T=e.update(E);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ps(r.x,r.y,{format:Ha,type:so})),m.uniforms.shadow_pass.value=P.map.depthTexture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(R,null,T,m,E,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(R,null,T,_,E,null)}function I(P,R,T,L){let F=null;const B=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)F=B;else if(F=T.isPointLight===!0?f:c,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=F.uuid,ne=R.uuid;let ie=d[z];ie===void 0&&(ie={},d[z]=ie);let X=ie[ne];X===void 0&&(X=F.clone(),ie[ne]=X,R.addEventListener("dispose",D)),F=X}if(F.visible=R.visible,F.wireframe=R.wireframe,L===gc?F.side=R.shadowSide!==null?R.shadowSide:R.side:F.side=R.shadowSide!==null?R.shadowSide:g[R.side],F.alphaMap=R.alphaMap,F.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,F.map=R.map,F.clipShadows=R.clipShadows,F.clippingPlanes=R.clippingPlanes,F.clipIntersection=R.clipIntersection,F.displacementMap=R.displacementMap,F.displacementScale=R.displacementScale,F.displacementBias=R.displacementBias,F.wireframeLinewidth=R.wireframeLinewidth,F.linewidth=R.linewidth,T.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const z=s.properties.get(F);z.light=T}return F}function A(P,R,T,L,F){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&F===gc)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ne=e.update(P),ie=P.material;if(Array.isArray(ie)){const X=ne.groups;for(let ee=0,W=X.length;ee<W;ee++){const H=X[ee],G=ie[H.materialIndex];if(G&&G.visible){const U=I(P,G,L,F);P.onBeforeShadow(s,P,R,T,ne,U,H),s.renderBufferDirect(T,null,ne,U,P,H),P.onAfterShadow(s,P,R,T,ne,U,H)}}}else if(ie.visible){const X=I(P,ie,L,F);P.onBeforeShadow(s,P,R,T,ne,X,null),s.renderBufferDirect(T,null,ne,X,P,null),P.onAfterShadow(s,P,R,T,ne,X,null)}}const z=P.children;for(let ne=0,ie=z.length;ne<ie;ne++)A(z[ne],R,T,L,F)}function D(P){P.target.removeEventListener("dispose",D);for(const T in d){const L=d[T],F=P.target.uuid;F in L&&(L[F].dispose(),delete L[F])}}}function n3(s,e){function t(){let q=!1;const Re=new Fn;let ve=null;const Ue=new Fn(0,0,0,0);return{setMask:function(Ve){ve!==Ve&&!q&&(s.colorMask(Ve,Ve,Ve,Ve),ve=Ve)},setLocked:function(Ve){q=Ve},setClear:function(Ve,Ee,ye,Se,Le){Le===!0&&(Ve*=Se,Ee*=Se,ye*=Se),Re.set(Ve,Ee,ye,Se),Ue.equals(Re)===!1&&(s.clearColor(Ve,Ee,ye,Se),Ue.copy(Re))},reset:function(){q=!1,ve=null,Ue.set(-1,0,0,0)}}}function n(){let q=!1,Re=!1,ve=null,Ue=null,Ve=null;return{setReversed:function(Ee){if(Re!==Ee){const ye=e.get("EXT_clip_control");Ee?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Re=Ee;const Se=Ve;Ve=null,this.setClear(Se)}},getReversed:function(){return Re},setTest:function(Ee){Ee?he(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(Ee){ve!==Ee&&!q&&(s.depthMask(Ee),ve=Ee)},setFunc:function(Ee){if(Re&&(Ee=RA[Ee]),Ue!==Ee){switch(Ee){case Y_:s.depthFunc(s.NEVER);break;case q_:s.depthFunc(s.ALWAYS);break;case $_:s.depthFunc(s.LESS);break;case au:s.depthFunc(s.LEQUAL);break;case K_:s.depthFunc(s.EQUAL);break;case j_:s.depthFunc(s.GEQUAL);break;case Z_:s.depthFunc(s.GREATER);break;case J_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=Ee}},setLocked:function(Ee){q=Ee},setClear:function(Ee){Ve!==Ee&&(Ve=Ee,Re&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){q=!1,ve=null,Ue=null,Ve=null,Re=!1}}}function r(){let q=!1,Re=null,ve=null,Ue=null,Ve=null,Ee=null,ye=null,Se=null,Le=null;return{setTest:function(xe){q||(xe?he(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(xe){Re!==xe&&!q&&(s.stencilMask(xe),Re=xe)},setFunc:function(xe,ut,et){(ve!==xe||Ue!==ut||Ve!==et)&&(s.stencilFunc(xe,ut,et),ve=xe,Ue=ut,Ve=et)},setOp:function(xe,ut,et){(Ee!==xe||ye!==ut||Se!==et)&&(s.stencilOp(xe,ut,et),Ee=xe,ye=ut,Se=et)},setLocked:function(xe){q=xe},setClear:function(xe){Le!==xe&&(s.clearStencil(xe),Le=xe)},reset:function(){q=!1,Re=null,ve=null,Ue=null,Ve=null,Ee=null,ye=null,Se=null,Le=null}}}const a=new t,l=new n,c=new r,f=new WeakMap,d=new WeakMap;let p={},g={},m={},_=new WeakMap,M=[],E=null,x=!1,y=null,C=null,I=null,A=null,D=null,P=null,R=null,T=new Ht(0,0,0),L=0,F=!1,B=null,z=null,ne=null,ie=null,X=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,H=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=H>=2);let U=null,k={};const j=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),Oe=new Fn().fromArray(j),De=new Fn().fromArray(Fe);function te(q,Re,ve,Ue){const Ve=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(q,Ee),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ye=0;ye<ve;ye++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Ve):s.texImage2D(Re+ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ve);return Ee}const ge={};ge[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(s.DEPTH_TEST),l.setFunc(au),re(!1),vt(Dy),he(s.CULL_FACE),ht(no);function he(q){p[q]!==!0&&(s.enable(q),p[q]=!0)}function Me(q){p[q]!==!1&&(s.disable(q),p[q]=!1)}function Xe(q,Re){return m[q]!==Re?(s.bindFramebuffer(q,Re),m[q]=Re,q===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Re),q===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function We(q,Re){let ve=M,Ue=!1;if(q){ve=_.get(Re),ve===void 0&&(ve=[],_.set(Re,ve));const Ve=q.textures;if(ve.length!==Ve.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,ye=Ve.length;Ee<ye;Ee++)ve[Ee]=s.COLOR_ATTACHMENT0+Ee;ve.length=Ve.length,Ue=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(ve)}function pt(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const He={[ba]:s.FUNC_ADD,[Jw]:s.FUNC_SUBTRACT,[Qw]:s.FUNC_REVERSE_SUBTRACT};He[eA]=s.MIN,He[tA]=s.MAX;const ot={[nA]:s.ZERO,[iA]:s.ONE,[rA]:s.SRC_COLOR,[W_]:s.SRC_ALPHA,[cA]:s.SRC_ALPHA_SATURATE,[lA]:s.DST_COLOR,[oA]:s.DST_ALPHA,[sA]:s.ONE_MINUS_SRC_COLOR,[X_]:s.ONE_MINUS_SRC_ALPHA,[uA]:s.ONE_MINUS_DST_COLOR,[aA]:s.ONE_MINUS_DST_ALPHA,[fA]:s.CONSTANT_COLOR,[dA]:s.ONE_MINUS_CONSTANT_COLOR,[hA]:s.CONSTANT_ALPHA,[pA]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(q,Re,ve,Ue,Ve,Ee,ye,Se,Le,xe){if(q===no){x===!0&&(Me(s.BLEND),x=!1);return}if(x===!1&&(he(s.BLEND),x=!0),q!==Zw){if(q!==y||xe!==F){if((C!==ba||D!==ba)&&(s.blendEquation(s.FUNC_ADD),C=ba,D=ba),xe)switch(q){case jl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case G_:s.blendFunc(s.ONE,s.ONE);break;case Ly:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ny:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:$t("WebGLState: Invalid blending: ",q);break}else switch(q){case jl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case G_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ly:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ny:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",q);break}I=null,A=null,P=null,R=null,T.set(0,0,0),L=0,y=q,F=xe}return}Ve=Ve||Re,Ee=Ee||ve,ye=ye||Ue,(Re!==C||Ve!==D)&&(s.blendEquationSeparate(He[Re],He[Ve]),C=Re,D=Ve),(ve!==I||Ue!==A||Ee!==P||ye!==R)&&(s.blendFuncSeparate(ot[ve],ot[Ue],ot[Ee],ot[ye]),I=ve,A=Ue,P=Ee,R=ye),(Se.equals(T)===!1||Le!==L)&&(s.blendColor(Se.r,Se.g,Se.b,Le),T.copy(Se),L=Le),y=q,F=!1}function Qe(q,Re){q.side===Js?Me(s.CULL_FACE):he(s.CULL_FACE);let ve=q.side===sr;Re&&(ve=!ve),re(ve),q.blending===jl&&q.transparent===!1?ht(no):ht(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),l.setFunc(q.depthFunc),l.setTest(q.depthTest),l.setMask(q.depthWrite),a.setMask(q.colorWrite);const Ue=q.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(q.stencilWriteMask),c.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),c.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Lt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function re(q){B!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),B=q)}function vt(q){q!==$w?(he(s.CULL_FACE),q!==z&&(q===Dy?s.cullFace(s.BACK):q===Kw?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),z=q}function Mt(q){q!==ne&&(W&&s.lineWidth(q),ne=q)}function Lt(q,Re,ve){q?(he(s.POLYGON_OFFSET_FILL),(ie!==Re||X!==ve)&&(ie=Re,X=ve,l.getReversed()&&(Re=-Re),s.polygonOffset(Re,ve))):Me(s.POLYGON_OFFSET_FILL)}function it(q){q?he(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Et(q){q===void 0&&(q=s.TEXTURE0+ee-1),U!==q&&(s.activeTexture(q),U=q)}function Y(q,Re,ve){ve===void 0&&(U===null?ve=s.TEXTURE0+ee-1:ve=U);let Ue=k[ve];Ue===void 0&&(Ue={type:void 0,texture:void 0},k[ve]=Ue),(Ue.type!==q||Ue.texture!==Re)&&(U!==ve&&(s.activeTexture(ve),U=ve),s.bindTexture(q,Re||ge[q]),Ue.type=q,Ue.texture=Re)}function Gt(){const q=k[U];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Je(){try{s.compressedTexImage2D(...arguments)}catch(q){$t("WebGLState:",q)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(q){$t("WebGLState:",q)}}function w(){try{s.texSubImage2D(...arguments)}catch(q){$t("WebGLState:",q)}}function Z(){try{s.texSubImage3D(...arguments)}catch(q){$t("WebGLState:",q)}}function se(){try{s.compressedTexSubImage2D(...arguments)}catch(q){$t("WebGLState:",q)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(q){$t("WebGLState:",q)}}function we(){try{s.texStorage2D(...arguments)}catch(q){$t("WebGLState:",q)}}function Te(){try{s.texStorage3D(...arguments)}catch(q){$t("WebGLState:",q)}}function me(){try{s.texImage2D(...arguments)}catch(q){$t("WebGLState:",q)}}function _e(){try{s.texImage3D(...arguments)}catch(q){$t("WebGLState:",q)}}function Ie(q){return g[q]!==void 0?g[q]:s.getParameter(q)}function Ke(q,Re){g[q]!==Re&&(s.pixelStorei(q,Re),g[q]=Re)}function ke(q){Oe.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Oe.copy(q))}function Ne(q){De.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),De.copy(q))}function Ce(q,Re){let ve=d.get(Re);ve===void 0&&(ve=new WeakMap,d.set(Re,ve));let Ue=ve.get(q);Ue===void 0&&(Ue=s.getUniformBlockIndex(Re,q.name),ve.set(q,Ue))}function rt(q,Re){const Ue=d.get(Re).get(q);f.get(Re)!==Ue&&(s.uniformBlockBinding(Re,Ue,q.__bindingPointIndex),f.set(Re,Ue))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),p={},g={},U=null,k={},m={},_=new WeakMap,M=[],E=null,x=!1,y=null,C=null,I=null,A=null,D=null,P=null,R=null,T=new Ht(0,0,0),L=0,F=!1,B=null,z=null,ne=null,ie=null,X=null,Oe.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:he,disable:Me,bindFramebuffer:Xe,drawBuffers:We,useProgram:pt,setBlending:ht,setMaterial:Qe,setFlipSided:re,setCullFace:vt,setLineWidth:Mt,setPolygonOffset:Lt,setScissorTest:it,activeTexture:Et,bindTexture:Y,unbindTexture:Gt,compressedTexImage2D:Je,compressedTexImage3D:O,texImage2D:me,texImage3D:_e,pixelStorei:Ke,getParameter:Ie,updateUBOMapping:Ce,uniformBlockBinding:rt,texStorage2D:we,texStorage3D:Te,texSubImage2D:w,texSubImage3D:Z,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:ke,viewport:Ne,reset:$e}}function i3(s,e,t,n,r,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ft,p=new WeakMap,g=new Set;let m;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,w){return M?new OffscreenCanvas(O,w):Ph("canvas")}function x(O,w,Z){let se=1;const de=Je(O);if((de.width>Z||de.height>Z)&&(se=Z/Math.max(de.width,de.height)),se<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const we=Math.floor(se*de.width),Te=Math.floor(se*de.height);m===void 0&&(m=E(we,Te));const me=w?E(we,Te):m;return me.width=we,me.height=Te,me.getContext("2d").drawImage(O,0,0,we,Te),xt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+we+"x"+Te+")."),me}else return"data"in O&&xt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),O;return O}function y(O){return O.generateMipmaps}function C(O){s.generateMipmap(O)}function I(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(O,w,Z,se,de,we=!1){if(O!==null){if(s[O]!==void 0)return s[O];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Te;se&&(Te=e.get("EXT_texture_norm16"),Te||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=w;if(w===s.RED&&(Z===s.FLOAT&&(me=s.R32F),Z===s.HALF_FLOAT&&(me=s.R16F),Z===s.UNSIGNED_BYTE&&(me=s.R8),Z===s.UNSIGNED_SHORT&&Te&&(me=Te.R16_EXT),Z===s.SHORT&&Te&&(me=Te.R16_SNORM_EXT)),w===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.R8UI),Z===s.UNSIGNED_SHORT&&(me=s.R16UI),Z===s.UNSIGNED_INT&&(me=s.R32UI),Z===s.BYTE&&(me=s.R8I),Z===s.SHORT&&(me=s.R16I),Z===s.INT&&(me=s.R32I)),w===s.RG&&(Z===s.FLOAT&&(me=s.RG32F),Z===s.HALF_FLOAT&&(me=s.RG16F),Z===s.UNSIGNED_BYTE&&(me=s.RG8),Z===s.UNSIGNED_SHORT&&Te&&(me=Te.RG16_EXT),Z===s.SHORT&&Te&&(me=Te.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.RG8UI),Z===s.UNSIGNED_SHORT&&(me=s.RG16UI),Z===s.UNSIGNED_INT&&(me=s.RG32UI),Z===s.BYTE&&(me=s.RG8I),Z===s.SHORT&&(me=s.RG16I),Z===s.INT&&(me=s.RG32I)),w===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(me=s.RGB16UI),Z===s.UNSIGNED_INT&&(me=s.RGB32UI),Z===s.BYTE&&(me=s.RGB8I),Z===s.SHORT&&(me=s.RGB16I),Z===s.INT&&(me=s.RGB32I)),w===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),Z===s.UNSIGNED_INT&&(me=s.RGBA32UI),Z===s.BYTE&&(me=s.RGBA8I),Z===s.SHORT&&(me=s.RGBA16I),Z===s.INT&&(me=s.RGBA32I)),w===s.RGB&&(Z===s.UNSIGNED_SHORT&&Te&&(me=Te.RGB16_EXT),Z===s.SHORT&&Te&&(me=Te.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),w===s.RGBA){const _e=we?Ch:Wt.getTransfer(de);Z===s.FLOAT&&(me=s.RGBA32F),Z===s.HALF_FLOAT&&(me=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(me=_e===on?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&Te&&(me=Te.RGBA16_EXT),Z===s.SHORT&&Te&&(me=Te.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function D(O,w){let Z;return O?w===null||w===Ls||w===Gc?Z=s.DEPTH24_STENCIL8:w===ws?Z=s.DEPTH32F_STENCIL8:w===Hc&&(Z=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ls||w===Gc?Z=s.DEPTH_COMPONENT24:w===ws?Z=s.DEPTH_COMPONENT32F:w===Hc&&(Z=s.DEPTH_COMPONENT16),Z}function P(O,w){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==_i&&O.minFilter!==Ni?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function R(O){const w=O.target;w.removeEventListener("dispose",R),L(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&g.delete(w)}function T(O){const w=O.target;w.removeEventListener("dispose",T),B(w)}function L(O){const w=n.get(O);if(w.__webglInit===void 0)return;const Z=O.source,se=_.get(Z);if(se){const de=se[w.__cacheKey];de.usedTimes--,de.usedTimes===0&&F(O),Object.keys(se).length===0&&_.delete(Z)}n.remove(O)}function F(O){const w=n.get(O);s.deleteTexture(w.__webglTexture);const Z=O.source,se=_.get(Z);delete se[w.__cacheKey],l.memory.textures--}function B(O){const w=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(w.__webglFramebuffer[se]))for(let de=0;de<w.__webglFramebuffer[se].length;de++)s.deleteFramebuffer(w.__webglFramebuffer[se][de]);else s.deleteFramebuffer(w.__webglFramebuffer[se]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[se])}else{if(Array.isArray(w.__webglFramebuffer))for(let se=0;se<w.__webglFramebuffer.length;se++)s.deleteFramebuffer(w.__webglFramebuffer[se]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let se=0;se<w.__webglColorRenderbuffer.length;se++)w.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[se]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=O.textures;for(let se=0,de=Z.length;se<de;se++){const we=n.get(Z[se]);we.__webglTexture&&(s.deleteTexture(we.__webglTexture),l.memory.textures--),n.remove(Z[se])}n.remove(O)}let z=0;function ne(){z=0}function ie(){return z}function X(O){z=O}function ee(){const O=z;return O>=r.maxTextures&&xt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),z+=1,O}function W(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function H(O,w){const Z=n.get(O);if(O.isVideoTexture&&Y(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Z.__version!==O.version){const se=O.image;if(se===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Z,O,w);return}}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+w)}function G(O,w){const Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){Me(Z,O,w);return}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+w)}function U(O,w){const Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){Me(Z,O,w);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+w)}function k(O,w){const Z=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Z.__version!==O.version){Xe(Z,O,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+w)}const j={[Q_]:s.REPEAT,[eo]:s.CLAMP_TO_EDGE,[eg]:s.MIRRORED_REPEAT},Fe={[_i]:s.NEAREST,[gA]:s.NEAREST_MIPMAP_NEAREST,[cd]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[Gm]:s.LINEAR_MIPMAP_NEAREST,[Pa]:s.LINEAR_MIPMAP_LINEAR},Oe={[yA]:s.NEVER,[wA]:s.ALWAYS,[SA]:s.LESS,[v0]:s.LEQUAL,[MA]:s.EQUAL,[x0]:s.GEQUAL,[EA]:s.GREATER,[TA]:s.NOTEQUAL};function De(O,w){if(w.type===ws&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ni||w.magFilter===Gm||w.magFilter===cd||w.magFilter===Pa||w.minFilter===Ni||w.minFilter===Gm||w.minFilter===cd||w.minFilter===Pa)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,j[w.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,j[w.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,j[w.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,Fe[w.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,Fe[w.minFilter]),w.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,Oe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===_i||w.minFilter!==cd&&w.minFilter!==Pa||w.type===ws&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function te(O,w){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",R));const se=w.source;let de=_.get(se);de===void 0&&(de={},_.set(se,de));const we=W(w);if(we!==O.__cacheKey){de[we]===void 0&&(de[we]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,Z=!0),de[we].usedTimes++;const Te=de[O.__cacheKey];Te!==void 0&&(de[O.__cacheKey].usedTimes--,Te.usedTimes===0&&F(w)),O.__cacheKey=we,O.__webglTexture=de[we].texture}return Z}function ge(O,w,Z){return Math.floor(Math.floor(O/Z)/w)}function he(O,w,Z,se){const we=O.updateRanges;if(we.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,Z,se,w.data);else{we.sort((Ke,ke)=>Ke.start-ke.start);let Te=0;for(let Ke=1;Ke<we.length;Ke++){const ke=we[Te],Ne=we[Ke],Ce=ke.start+ke.count,rt=ge(Ne.start,w.width,4),$e=ge(ke.start,w.width,4);Ne.start<=Ce+1&&rt===$e&&ge(Ne.start+Ne.count-1,w.width,4)===rt?ke.count=Math.max(ke.count,Ne.start+Ne.count-ke.start):(++Te,we[Te]=Ne)}we.length=Te+1;const me=t.getParameter(s.UNPACK_ROW_LENGTH),_e=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Ke=0,ke=we.length;Ke<ke;Ke++){const Ne=we[Ke],Ce=Math.floor(Ne.start/4),rt=Math.ceil(Ne.count/4),$e=Ce%w.width,q=Math.floor(Ce/w.width),Re=rt,ve=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(s.UNPACK_SKIP_ROWS,q),t.texSubImage2D(s.TEXTURE_2D,0,$e,q,Re,ve,Z,se,w.data)}O.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function Me(O,w,Z){let se=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=s.TEXTURE_3D);const de=te(O,w),we=w.source;t.bindTexture(se,O.__webglTexture,s.TEXTURE0+Z);const Te=n.get(we);if(we.version!==Te.__version||de===!0){if(t.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ve=Wt.getPrimaries(Wt.workingColorSpace),Ue=w.colorSpace===ko?null:Wt.getPrimaries(w.colorSpace),Ve=w.colorSpace===ko||ve===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let _e=x(w.image,!1,r.maxTextureSize);_e=Gt(w,_e);const Ie=a.convert(w.format,w.colorSpace),Ke=a.convert(w.type);let ke=A(w.internalFormat,Ie,Ke,w.normalized,w.colorSpace,w.isVideoTexture);De(se,w);let Ne;const Ce=w.mipmaps,rt=w.isVideoTexture!==!0,$e=Te.__version===void 0||de===!0,q=we.dataReady,Re=P(w,_e);if(w.isDepthTexture)ke=D(w.format===Da,w.type),$e&&(rt?t.texStorage2D(s.TEXTURE_2D,1,ke,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,ke,_e.width,_e.height,0,Ie,Ke,null));else if(w.isDataTexture)if(Ce.length>0){rt&&$e&&t.texStorage2D(s.TEXTURE_2D,Re,ke,Ce[0].width,Ce[0].height);for(let ve=0,Ue=Ce.length;ve<Ue;ve++)Ne=Ce[ve],rt?q&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,Ie,Ke,Ne.data):t.texImage2D(s.TEXTURE_2D,ve,ke,Ne.width,Ne.height,0,Ie,Ke,Ne.data);w.generateMipmaps=!1}else rt?($e&&t.texStorage2D(s.TEXTURE_2D,Re,ke,_e.width,_e.height),q&&he(w,_e,Ie,Ke)):t.texImage2D(s.TEXTURE_2D,0,ke,_e.width,_e.height,0,Ie,Ke,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&$e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,ke,Ce[0].width,Ce[0].height,_e.depth);for(let ve=0,Ue=Ce.length;ve<Ue;ve++)if(Ne=Ce[ve],w.format!==fs)if(Ie!==null)if(rt){if(q)if(w.layerUpdates.size>0){const Ve=cS(Ne.width,Ne.height,w.format,w.type);for(const Ee of w.layerUpdates){const ye=Ne.data.subarray(Ee*Ve/Ne.data.BYTES_PER_ELEMENT,(Ee+1)*Ve/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,Ee,Ne.width,Ne.height,1,Ie,ye)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ne.width,Ne.height,_e.depth,Ie,Ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,ke,Ne.width,Ne.height,_e.depth,0,Ne.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ne.width,Ne.height,_e.depth,Ie,Ke,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,ke,Ne.width,Ne.height,_e.depth,0,Ie,Ke,Ne.data)}else{rt&&$e&&t.texStorage2D(s.TEXTURE_2D,Re,ke,Ce[0].width,Ce[0].height);for(let ve=0,Ue=Ce.length;ve<Ue;ve++)Ne=Ce[ve],w.format!==fs?Ie!==null?rt?q&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,Ie,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,ke,Ne.width,Ne.height,0,Ne.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?q&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,Ie,Ke,Ne.data):t.texImage2D(s.TEXTURE_2D,ve,ke,Ne.width,Ne.height,0,Ie,Ke,Ne.data)}else if(w.isDataArrayTexture)if(rt){if($e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,ke,_e.width,_e.height,_e.depth),q)if(w.layerUpdates.size>0){const ve=cS(_e.width,_e.height,w.format,w.type);for(const Ue of w.layerUpdates){const Ve=_e.data.subarray(Ue*ve/_e.data.BYTES_PER_ELEMENT,(Ue+1)*ve/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ue,_e.width,_e.height,1,Ie,Ke,Ve)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ie,Ke,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,_e.width,_e.height,_e.depth,0,Ie,Ke,_e.data);else if(w.isData3DTexture)rt?($e&&t.texStorage3D(s.TEXTURE_3D,Re,ke,_e.width,_e.height,_e.depth),q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ie,Ke,_e.data)):t.texImage3D(s.TEXTURE_3D,0,ke,_e.width,_e.height,_e.depth,0,Ie,Ke,_e.data);else if(w.isFramebufferTexture){if($e)if(rt)t.texStorage2D(s.TEXTURE_2D,Re,ke,_e.width,_e.height);else{let ve=_e.width,Ue=_e.height;for(let Ve=0;Ve<Re;Ve++)t.texImage2D(s.TEXTURE_2D,Ve,ke,ve,Ue,0,Ie,Ke,null),ve>>=1,Ue>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),_e.parentNode!==ve){ve.appendChild(_e),g.add(w),ve.onpaint=Ue=>{const Ve=Ue.changedElements;for(const Ee of g)Ve.includes(Ee.image)&&(Ee.needsUpdate=!0)},ve.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,_e);else{const Ve=s.RGBA,Ee=s.RGBA,ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ve,Ee,ye,_e)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(rt&&$e){const ve=Je(Ce[0]);t.texStorage2D(s.TEXTURE_2D,Re,ke,ve.width,ve.height)}for(let ve=0,Ue=Ce.length;ve<Ue;ve++)Ne=Ce[ve],rt?q&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ie,Ke,Ne):t.texImage2D(s.TEXTURE_2D,ve,ke,Ie,Ke,Ne);w.generateMipmaps=!1}else if(rt){if($e){const ve=Je(_e);t.texStorage2D(s.TEXTURE_2D,Re,ke,ve.width,ve.height)}q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Ke,_e)}else t.texImage2D(s.TEXTURE_2D,0,ke,Ie,Ke,_e);y(w)&&C(se),Te.__version=we.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Xe(O,w,Z){if(w.image.length!==6)return;const se=te(O,w),de=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+Z);const we=n.get(de);if(de.version!==we.__version||se===!0){t.activeTexture(s.TEXTURE0+Z);const Te=Wt.getPrimaries(Wt.workingColorSpace),me=w.colorSpace===ko?null:Wt.getPrimaries(w.colorSpace),_e=w.colorSpace===ko||Te===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ie=w.isCompressedTexture||w.image[0].isCompressedTexture,Ke=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let Ee=0;Ee<6;Ee++)!Ie&&!Ke?ke[Ee]=x(w.image[Ee],!0,r.maxCubemapSize):ke[Ee]=Ke?w.image[Ee].image:w.image[Ee],ke[Ee]=Gt(w,ke[Ee]);const Ne=ke[0],Ce=a.convert(w.format,w.colorSpace),rt=a.convert(w.type),$e=A(w.internalFormat,Ce,rt,w.normalized,w.colorSpace),q=w.isVideoTexture!==!0,Re=we.__version===void 0||se===!0,ve=de.dataReady;let Ue=P(w,Ne);De(s.TEXTURE_CUBE_MAP,w);let Ve;if(Ie){q&&Re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,$e,Ne.width,Ne.height);for(let Ee=0;Ee<6;Ee++){Ve=ke[Ee].mipmaps;for(let ye=0;ye<Ve.length;ye++){const Se=Ve[ye];w.format!==fs?Ce!==null?q?ve&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ye,0,0,Se.width,Se.height,Ce,Se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ye,$e,Se.width,Se.height,0,Se.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ye,0,0,Se.width,Se.height,Ce,rt,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ye,$e,Se.width,Se.height,0,Ce,rt,Se.data)}}}else{if(Ve=w.mipmaps,q&&Re){Ve.length>0&&Ue++;const Ee=Je(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,$e,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ke){q?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ke[Ee].width,ke[Ee].height,Ce,rt,ke[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,$e,ke[Ee].width,ke[Ee].height,0,Ce,rt,ke[Ee].data);for(let ye=0;ye<Ve.length;ye++){const Le=Ve[ye].image[Ee].image;q?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ye+1,0,0,Le.width,Le.height,Ce,rt,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ye+1,$e,Le.width,Le.height,0,Ce,rt,Le.data)}}else{q?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ce,rt,ke[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,$e,Ce,rt,ke[Ee]);for(let ye=0;ye<Ve.length;ye++){const Se=Ve[ye];q?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ye+1,0,0,Ce,rt,Se.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ye+1,$e,Ce,rt,Se.image[Ee])}}}y(w)&&C(s.TEXTURE_CUBE_MAP),we.__version=de.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function We(O,w,Z,se,de,we){const Te=a.convert(Z.format,Z.colorSpace),me=a.convert(Z.type),_e=A(Z.internalFormat,Te,me,Z.normalized,Z.colorSpace),Ie=n.get(w),Ke=n.get(Z);if(Ke.__renderTarget=w,!Ie.__hasExternalTextures){const ke=Math.max(1,w.width>>we),Ne=Math.max(1,w.height>>we);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,we,_e,ke,Ne,w.depth,0,Te,me,null):t.texImage2D(de,we,_e,ke,Ne,0,Te,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,O),Et(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,de,Ke.__webglTexture,0,it(w)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,de,Ke.__webglTexture,we),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(O,w,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,O),w.depthBuffer){const se=w.depthTexture,de=se&&se.isDepthTexture?se.type:null,we=D(w.stencilBuffer,de),Te=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Et(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it(w),we,w.width,w.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,it(w),we,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,we,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,O)}else{const se=w.textures;for(let de=0;de<se.length;de++){const we=se[de],Te=a.convert(we.format,we.colorSpace),me=a.convert(we.type),_e=A(we.internalFormat,Te,me,we.normalized,we.colorSpace);Et(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it(w),_e,w.width,w.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,it(w),_e,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,_e,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(O,w,Z){const se=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=n.get(w.depthTexture);if(de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),se){if(de.__webglInit===void 0&&(de.__webglInit=!0,w.depthTexture.addEventListener("dispose",R)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),De(s.TEXTURE_CUBE_MAP,w.depthTexture);const Ie=a.convert(w.depthTexture.format),Ke=a.convert(w.depthTexture.type);let ke;w.depthTexture.format===oo?ke=s.DEPTH_COMPONENT24:w.depthTexture.format===Da&&(ke=s.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ke,w.width,w.height,0,Ie,Ke,null)}}else H(w.depthTexture,0);const we=de.__webglTexture,Te=it(w),me=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,_e=w.depthTexture.format===Da?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===oo)Et(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,me,we,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,_e,me,we,0);else if(w.depthTexture.format===Da)Et(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,me,we,0,Te):s.framebufferTexture2D(s.FRAMEBUFFER,_e,me,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(O){const w=n.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const se=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),se){const de=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,se.removeEventListener("dispose",de)};se.addEventListener("dispose",de),w.__depthDisposeCallback=de}w.__boundDepthTexture=se}if(O.depthTexture&&!w.__autoAllocateDepthBuffer)if(Z)for(let se=0;se<6;se++)He(w.__webglFramebuffer[se],O,se);else{const se=O.texture.mipmaps;se&&se.length>0?He(w.__webglFramebuffer[0],O,0):He(w.__webglFramebuffer,O,0)}else if(Z){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]===void 0)w.__webglDepthbuffer[se]=s.createRenderbuffer(),pt(w.__webglDepthbuffer[se],O,!1);else{const de=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,we)}}else{const se=O.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),pt(w.__webglDepthbuffer,O,!1);else{const de=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,we),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,we)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(O,w,Z){const se=n.get(O);w!==void 0&&We(se.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&ot(O)}function Qe(O){const w=O.texture,Z=n.get(O),se=n.get(w);O.addEventListener("dispose",T);const de=O.textures,we=O.isWebGLCubeRenderTarget===!0,Te=de.length>1;if(Te||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=w.version,l.memory.textures++),we){Z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[me]=[];for(let _e=0;_e<w.mipmaps.length;_e++)Z.__webglFramebuffer[me][_e]=s.createFramebuffer()}else Z.__webglFramebuffer[me]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)Z.__webglFramebuffer[me]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Te)for(let me=0,_e=de.length;me<_e;me++){const Ie=n.get(de[me]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),l.memory.textures++)}if(O.samples>0&&Et(O)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let me=0;me<de.length;me++){const _e=de[me];Z.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[me]);const Ie=a.convert(_e.format,_e.colorSpace),Ke=a.convert(_e.type),ke=A(_e.internalFormat,Ie,Ke,_e.normalized,_e.colorSpace,O.isXRRenderTarget===!0),Ne=it(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,ke,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,Z.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),pt(Z.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(we){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),De(s.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)We(Z.__webglFramebuffer[me][_e],O,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else We(Z.__webglFramebuffer[me],O,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(w)&&C(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let me=0,_e=de.length;me<_e;me++){const Ie=de[me],Ke=n.get(Ie);let ke=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ke=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ke,Ke.__webglTexture),De(ke,Ie),We(Z.__webglFramebuffer,O,Ie,s.COLOR_ATTACHMENT0+me,ke,0),y(Ie)&&C(ke)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(me=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),De(me,w),w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)We(Z.__webglFramebuffer[_e],O,w,s.COLOR_ATTACHMENT0,me,_e);else We(Z.__webglFramebuffer,O,w,s.COLOR_ATTACHMENT0,me,0);y(w)&&C(me),t.unbindTexture()}O.depthBuffer&&ot(O)}function re(O){const w=O.textures;for(let Z=0,se=w.length;Z<se;Z++){const de=w[Z];if(y(de)){const we=I(O),Te=n.get(de).__webglTexture;t.bindTexture(we,Te),C(we),t.unbindTexture()}}}const vt=[],Mt=[];function Lt(O){if(O.samples>0){if(Et(O)===!1){const w=O.textures,Z=O.width,se=O.height;let de=s.COLOR_BUFFER_BIT;const we=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(O),me=w.length>1;if(me)for(let Ie=0;Ie<w.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const _e=O.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Ie]);const Ke=n.get(w[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,Z,se,0,0,Z,se,de,s.NEAREST),f===!0&&(vt.length=0,Mt.length=0,vt.push(s.COLOR_ATTACHMENT0+Ie),O.depthBuffer&&O.resolveDepthBuffer===!1&&(vt.push(we),Mt.push(we),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let Ie=0;Ie<w.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Ie]);const Ke=n.get(w[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,Ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&f){const w=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function it(O){return Math.min(r.maxSamples,O.samples)}function Et(O){const w=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Y(O){const w=l.render.frame;p.get(O)!==w&&(p.set(O,w),O.update())}function Gt(O,w){const Z=O.colorSpace,se=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==bh&&Z!==ko&&(Wt.getTransfer(Z)===on?(se!==fs||de!==Wr)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",Z)),w}function Je(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=ee,this.resetTextureUnits=ne,this.getTextureUnits=ie,this.setTextureUnits=X,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=ht,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function r3(s,e){function t(n,r=ko){let a;const l=Wt.getTransfer(r);if(n===Wr)return s.UNSIGNED_BYTE;if(n===h0)return s.UNSIGNED_SHORT_4_4_4_4;if(n===p0)return s.UNSIGNED_SHORT_5_5_5_1;if(n===$M)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===KM)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===YM)return s.BYTE;if(n===qM)return s.SHORT;if(n===Hc)return s.UNSIGNED_SHORT;if(n===d0)return s.INT;if(n===Ls)return s.UNSIGNED_INT;if(n===ws)return s.FLOAT;if(n===so)return s.HALF_FLOAT;if(n===jM)return s.ALPHA;if(n===ZM)return s.RGB;if(n===fs)return s.RGBA;if(n===oo)return s.DEPTH_COMPONENT;if(n===Da)return s.DEPTH_STENCIL;if(n===JM)return s.RED;if(n===m0)return s.RED_INTEGER;if(n===Ha)return s.RG;if(n===_0)return s.RG_INTEGER;if(n===g0)return s.RGBA_INTEGER;if(n===ah||n===lh||n===uh||n===ch)if(l===on)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ah)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ch)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ah)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ch)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tg||n===ng||n===ig||n===rg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===tg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ng)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ig)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sg||n===og||n===ag||n===lg||n===ug||n===wh||n===cg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===sg||n===og)return l===on?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ag)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===lg)return a.COMPRESSED_R11_EAC;if(n===ug)return a.COMPRESSED_SIGNED_R11_EAC;if(n===wh)return a.COMPRESSED_RG11_EAC;if(n===cg)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fg||n===dg||n===hg||n===pg||n===mg||n===_g||n===gg||n===vg||n===xg||n===yg||n===Sg||n===Mg||n===Eg||n===Tg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===fg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_g)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tg)return l===on?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wg||n===Ag||n===bg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===wg)return l===on?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ag)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cg||n===Rg||n===Ah||n===Pg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Cg)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Rg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ah)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gc?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const s3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class a3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new f1(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ns({vertexShader:s3,fragmentShader:o3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ir(new ep(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l3 extends qa{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",f=1,d=null,p=null,g=null,m=null,_=null,M=null;const E=typeof XRWebGLBinding<"u",x=new a3,y={},C=t.getContextAttributes();let I=null,A=null;const D=[],P=[],R=new Ft;let T=null;const L=new Vr;L.viewport=new Fn;const F=new Vr;F.viewport=new Fn;const B=[L,F],z=new mb;let ne=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=D[te];return ge===void 0&&(ge=new Zm,D[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=D[te];return ge===void 0&&(ge=new Zm,D[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=D[te];return ge===void 0&&(ge=new Zm,D[te]=ge),ge.getHandSpace()};function X(te){const ge=P.indexOf(te.inputSource);if(ge===-1)return;const he=D[ge];he!==void 0&&(he.update(te.inputSource,te.frame,d||l),he.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",W);for(let te=0;te<D.length;te++){const ge=P[te];ge!==null&&(P[te]=null,D[te].disconnect(ge))}ne=null,ie=null,x.reset();for(const te in y)delete y[te];e.setRenderTarget(I),_=null,m=null,g=null,r=null,A=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,n.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(te){d=te},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(r,t)),g},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(I=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",W),C.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Me=null,Xe=null;C.depth&&(Xe=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=C.stencil?Da:oo,Me=C.stencil?Gc:Ls);const We={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:a};g=this.getBinding(),m=g.createProjectionLayer(We),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),A=new Ps(m.textureWidth,m.textureHeight,{format:fs,type:Wr,depthTexture:new uu(m.textureWidth,m.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const he={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),A=new Ps(_.framebufferWidth,_.framebufferHeight,{format:fs,type:Wr,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await r.requestReferenceSpace(c),De.setContext(r),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(te){for(let ge=0;ge<te.removed.length;ge++){const he=te.removed[ge],Me=P.indexOf(he);Me>=0&&(P[Me]=null,D[Me].disconnect(he))}for(let ge=0;ge<te.added.length;ge++){const he=te.added[ge];let Me=P.indexOf(he);if(Me===-1){for(let We=0;We<D.length;We++)if(We>=P.length){P.push(he),Me=We;break}else if(P[We]===null){P[We]=he,Me=We;break}if(Me===-1)break}const Xe=D[Me];Xe&&Xe.connect(he)}}const H=new oe,G=new oe;function U(te,ge,he){H.setFromMatrixPosition(ge.matrixWorld),G.setFromMatrixPosition(he.matrixWorld);const Me=H.distanceTo(G),Xe=ge.projectionMatrix.elements,We=he.projectionMatrix.elements,pt=Xe[14]/(Xe[10]-1),He=Xe[14]/(Xe[10]+1),ot=(Xe[9]+1)/Xe[5],ht=(Xe[9]-1)/Xe[5],Qe=(Xe[8]-1)/Xe[0],re=(We[8]+1)/We[0],vt=pt*Qe,Mt=pt*re,Lt=Me/(-Qe+re),it=Lt*-Qe;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(it),te.translateZ(Lt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Xe[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Et=pt+Lt,Y=He+Lt,Gt=vt-it,Je=Mt+(Me-it),O=ot*He/Y*Et,w=ht*He/Y*Et;te.projectionMatrix.makePerspective(Gt,Je,O,w,Et,Y),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function k(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ge=te.near,he=te.far;x.texture!==null&&(x.depthNear>0&&(ge=x.depthNear),x.depthFar>0&&(he=x.depthFar)),z.near=F.near=L.near=ge,z.far=F.far=L.far=he,(ne!==z.near||ie!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),ne=z.near,ie=z.far),z.layers.mask=te.layers.mask|6,L.layers.mask=z.layers.mask&-5,F.layers.mask=z.layers.mask&-3;const Me=te.parent,Xe=z.cameras;k(z,Me);for(let We=0;We<Xe.length;We++)k(Xe[We],Me);Xe.length===2?U(z,L,F):z.projectionMatrix.copy(L.projectionMatrix),j(te,z,Me)};function j(te,ge,he){he===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(he.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Lg*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(m===null&&_===null))return f},this.setFoveation=function(te){f=te,m!==null&&(m.fixedFoveation=te),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(te){return y[te]};let Fe=null;function Oe(te,ge){if(p=ge.getViewerPose(d||l),M=ge,p!==null){const he=p.views;_!==null&&(e.setRenderTargetFramebuffer(A,_.framebuffer),e.setRenderTarget(A));let Me=!1;he.length!==z.cameras.length&&(z.cameras.length=0,Me=!0);for(let He=0;He<he.length;He++){const ot=he[He];let ht=null;if(_!==null)ht=_.getViewport(ot);else{const re=g.getViewSubImage(m,ot);ht=re.viewport,He===0&&(e.setRenderTargetTextures(A,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(A))}let Qe=B[He];Qe===void 0&&(Qe=new Vr,Qe.layers.enable(He),Qe.viewport=new Fn,B[He]=Qe),Qe.matrix.fromArray(ot.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ot.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(ht.x,ht.y,ht.width,ht.height),He===0&&(z.matrix.copy(Qe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Me===!0&&z.cameras.push(Qe)}const Xe=r.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){g=n.getBinding();const He=g.getDepthInformation(he[0]);He&&He.isValid&&He.texture&&x.init(He,r.renderState)}if(Xe&&Xe.includes("camera-access")&&E){e.state.unbindTexture(),g=n.getBinding();for(let He=0;He<he.length;He++){const ot=he[He].camera;if(ot){let ht=y[ot];ht||(ht=new f1,y[ot]=ht);const Qe=g.getCameraImage(ot);ht.sourceTexture=Qe}}}}for(let he=0;he<D.length;he++){const Me=P[he],Xe=D[he];Me!==null&&Xe!==void 0&&Xe.update(Me,ge,d||l)}Fe&&Fe(te,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),M=null}const De=new m1;De.setAnimationLoop(Oe),this.setAnimationLoop=function(te){Fe=te},this.dispose=function(){}}}const u3=new Ln,M1=new At;M1.set(-1,0,0,0,1,0,0,0,1);function c3(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,d1(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,C,I,A){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?a(x,y):y.isMeshLambertMaterial?(a(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(a(x,y),g(x,y)):y.isMeshPhongMaterial?(a(x,y),p(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(a(x,y),m(x,y),y.isMeshPhysicalMaterial&&_(x,y,A)):y.isMeshMatcapMaterial?(a(x,y),M(x,y)):y.isMeshDepthMaterial?a(x,y):y.isMeshDistanceMaterial?(a(x,y),E(x,y)):y.isMeshNormalMaterial?a(x,y):y.isLineBasicMaterial?(l(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?f(x,y,C,I):y.isSpriteMaterial?d(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===sr&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===sr&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const C=e.get(y),I=C.envMap,A=C.envMapRotation;I&&(x.envMap.value=I,x.envMapRotation.value.setFromMatrix4(u3.makeRotationFromEuler(A)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(M1),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function l(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function f(x,y,C,I){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*C,x.scale.value=I*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function g(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function m(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function _(x,y,C){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===sr&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const C=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function f3(s,e,t,n){let r={},a={},l=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(A,D){const P=D.program;n.uniformBlockBinding(A,P)}function d(A,D){let P=r[A.id];P===void 0&&(x(A),P=p(A),r[A.id]=P,A.addEventListener("dispose",C));const R=D.program;n.updateUBOMapping(A,R);const T=e.render.frame;a[A.id]!==T&&(m(A),a[A.id]=T)}function p(A){const D=g();A.__bindingPointIndex=D;const P=s.createBuffer(),R=A.__size,T=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function g(){for(let A=0;A<c;A++)if(l.indexOf(A)===-1)return l.push(A),A;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){const D=r[A.id],P=A.uniforms,R=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let T=0,L=P.length;T<L;T++){const F=P[T];if(Array.isArray(F))for(let B=0,z=F.length;B<z;B++)_(F[B],T,B,R);else _(F,T,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(A,D,P,R){if(E(A,D,P,R)===!0){const T=A.__offset,L=A.value;if(Array.isArray(L)){let F=0;for(let B=0;B<L.length;B++){const z=L[B],ne=y(z);M(z,A.__data,F),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(F+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(L,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,A.__data)}}function M(A,D,P){typeof A=="number"||typeof A=="boolean"?D[0]=A:A.isMatrix3?(D[0]=A.elements[0],D[1]=A.elements[1],D[2]=A.elements[2],D[3]=0,D[4]=A.elements[3],D[5]=A.elements[4],D[6]=A.elements[5],D[7]=0,D[8]=A.elements[6],D[9]=A.elements[7],D[10]=A.elements[8],D[11]=0):ArrayBuffer.isView(A)?D.set(new A.constructor(A.buffer,A.byteOffset,D.length)):A.toArray(D,P)}function E(A,D,P,R){const T=A.value,L=D+"_"+P;if(R[L]===void 0)return typeof T=="number"||typeof T=="boolean"?R[L]=T:ArrayBuffer.isView(T)?R[L]=T.slice():R[L]=T.clone(),!0;{const F=R[L];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return R[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(F.equals(T)===!1)return F.copy(T),!0}}return!1}function x(A){const D=A.uniforms;let P=0;const R=16;for(let L=0,F=D.length;L<F;L++){const B=Array.isArray(D[L])?D[L]:[D[L]];for(let z=0,ne=B.length;z<ne;z++){const ie=B[z],X=Array.isArray(ie.value)?ie.value:[ie.value];for(let ee=0,W=X.length;ee<W;ee++){const H=X[ee],G=y(H),U=P%R,k=U%G.boundary,j=U+k;P+=k,j!==0&&R-j<G.storage&&(P+=R-j),ie.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=P,P+=G.storage}}}const T=P%R;return T>0&&(P+=R-T),A.__size=P,A.__cache={},this}function y(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(D.boundary=16,D.storage=A.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",A),D}function C(A){const D=A.target;D.removeEventListener("dispose",C);const P=l.indexOf(D.__bindingPointIndex);l.splice(P,1),s.deleteBuffer(r[D.id]),delete r[D.id],delete a[D.id]}function I(){for(const A in r)s.deleteBuffer(r[A]);l=[],r={},a={}}return{bind:f,update:d,dispose:I}}const d3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vs=null;function h3(){return vs===null&&(vs=new JA(d3,16,16,Ha,so),vs.name="DFG_LUT",vs.minFilter=Ni,vs.magFilter=Ni,vs.wrapS=eo,vs.wrapT=eo,vs.generateMipmaps=!1,vs.needsUpdate=!0),vs}class p3{constructor(e={}){const{canvas:t=bA(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:_=Wr}=e;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=l;const E=_,x=new Set([g0,_0,m0]),y=new Set([Wr,Ls,Hc,Gc,h0,p0]),C=new Uint32Array(4),I=new Int32Array(4),A=new oe;let D=null,P=null;const R=[],T=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let B=!1,z=null,ne=null,ie=null,X=null;this._outputColorSpace=Br;let ee=0,W=0,H=null,G=-1,U=null;const k=new Fn,j=new Fn;let Fe=null;const Oe=new Ht(0);let De=0,te=t.width,ge=t.height,he=1,Me=null,Xe=null;const We=new Fn(0,0,te,ge),pt=new Fn(0,0,te,ge);let He=!1;const ot=new a1;let ht=!1,Qe=!1;const re=new Ln,vt=new oe,Mt=new Fn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Et(){return H===null?he:1}let Y=n;function Gt(N,Q){return t.getContext(N,Q)}try{const N={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${f0}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ut,!1),Y===null){const Q="webgl2";if(Y=Gt(Q,N),Y===null)throw Gt(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(N){throw $t("WebGLRenderer: "+N.message),N}let Je,O,w,Z,se,de,we,Te,me,_e,Ie,Ke,ke,Ne,Ce,rt,$e,q,Re,ve,Ue,Ve,Ee;function ye(){Je=new hP(Y),Je.init(),Ue=new r3(Y,Je),O=new sP(Y,Je,e,Ue),w=new n3(Y,Je),O.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),ne=Y.createFramebuffer(),ie=Y.createFramebuffer(),X=Y.createFramebuffer(),Z=new _P(Y),se=new H2,de=new i3(Y,Je,w,se,O,Ue,Z),we=new dP(F),Te=new yb(Y),Ve=new iP(Y,Te),me=new pP(Y,Te,Z,Ve),_e=new vP(Y,me,Te,Ve,Z),q=new gP(Y,O,de),Ce=new oP(se),Ie=new V2(F,we,Je,O,Ve,Ce),Ke=new c3(F,se),ke=new W2,Ne=new j2(Je),$e=new nP(F,we,w,_e,M,f),rt=new t3(F,_e,O),Ee=new f3(Y,Z,O,w),Re=new rP(Y,Je,Z),ve=new mP(Y,Je,Z),Z.programs=Ie.programs,F.capabilities=O,F.extensions=Je,F.properties=se,F.renderLists=ke,F.shadowMap=rt,F.state=w,F.info=Z}ye(),E!==Wr&&(L=new yP(E,t.width,t.height,c,r,a));const Se=new l3(F,Y);this.xr=Se,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const N=Je.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Je.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(N){N!==void 0&&(he=N,this.setSize(te,ge,!1))},this.getSize=function(N){return N.set(te,ge)},this.setSize=function(N,Q,fe=!0){if(Se.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}te=N,ge=Q,t.width=Math.floor(N*he),t.height=Math.floor(Q*he),fe===!0&&(t.style.width=N+"px",t.style.height=Q+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,N,Q)},this.getDrawingBufferSize=function(N){return N.set(te*he,ge*he).floor()},this.setDrawingBufferSize=function(N,Q,fe){te=N,ge=Q,he=fe,t.width=Math.floor(N*fe),t.height=Math.floor(Q*fe),this.setViewport(0,0,N,Q)},this.setEffects=function(N){if(E===Wr){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Q=0;Q<N.length;Q++)if(N[Q].isOutputPass===!0){xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(k)},this.getViewport=function(N){return N.copy(We)},this.setViewport=function(N,Q,fe,ae){N.isVector4?We.set(N.x,N.y,N.z,N.w):We.set(N,Q,fe,ae),w.viewport(k.copy(We).multiplyScalar(he).round())},this.getScissor=function(N){return N.copy(pt)},this.setScissor=function(N,Q,fe,ae){N.isVector4?pt.set(N.x,N.y,N.z,N.w):pt.set(N,Q,fe,ae),w.scissor(j.copy(pt).multiplyScalar(he).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(N){w.setScissorTest(He=N)},this.setOpaqueSort=function(N){Me=N},this.setTransparentSort=function(N){Xe=N},this.getClearColor=function(N){return N.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(N=!0,Q=!0,fe=!0){let ae=0;if(N){let le=!1;if(H!==null){const Be=H.texture.format;le=x.has(Be)}if(le){const Be=H.texture.type,Ye=y.has(Be),Ge=$e.getClearColor(),at=$e.getClearAlpha(),dt=Ge.r,Tt=Ge.g,wt=Ge.b;Ye?(C[0]=dt,C[1]=Tt,C[2]=wt,C[3]=at,Y.clearBufferuiv(Y.COLOR,0,C)):(I[0]=dt,I[1]=Tt,I[2]=wt,I[3]=at,Y.clearBufferiv(Y.COLOR,0,I))}else ae|=Y.COLOR_BUFFER_BIT}Q&&(ae|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ae|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Y.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),z=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),$e.dispose(),ke.dispose(),Ne.dispose(),se.dispose(),we.dispose(),_e.dispose(),Ve.dispose(),Ee.dispose(),Ie.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",ln),Se.removeEventListener("sessionend",en),Ct.stop()};function Le(N){N.preventDefault(),Dh("WebGLRenderer: Context Lost."),B=!0}function xe(){Dh("WebGLRenderer: Context Restored."),B=!1;const N=Z.autoReset,Q=rt.enabled,fe=rt.autoUpdate,ae=rt.needsUpdate,le=rt.type;ye(),Z.autoReset=N,rt.enabled=Q,rt.autoUpdate=fe,rt.needsUpdate=ae,rt.type=le}function ut(N){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function et(N){const Q=N.target;Q.removeEventListener("dispose",et),gt(Q)}function gt(N){mn(N),se.remove(N)}function mn(N){const Q=se.get(N).programs;Q!==void 0&&(Q.forEach(function(fe){Ie.releaseProgram(fe)}),N.isShaderMaterial&&Ie.releaseShaderCache(N))}this.renderBufferDirect=function(N,Q,fe,ae,le,Be){Q===null&&(Q=Lt);const Ye=le.isMesh&&le.matrixWorld.determinantAffine()<0,Ge=Pt(N,Q,fe,ae,le);w.setMaterial(ae,Ye);let at=fe.index,dt=1;if(ae.wireframe===!0){if(at=me.getWireframeAttribute(fe),at===void 0)return;dt=2}const Tt=fe.drawRange,wt=fe.attributes.position;let ct=Tt.start*dt,qt=(Tt.start+Tt.count)*dt;Be!==null&&(ct=Math.max(ct,Be.start*dt),qt=Math.min(qt,(Be.start+Be.count)*dt)),at!==null?(ct=Math.max(ct,0),qt=Math.min(qt,at.count)):wt!=null&&(ct=Math.max(ct,0),qt=Math.min(qt,wt.count));const hn=qt-ct;if(hn<0||hn===1/0)return;Ve.setup(le,ae,Ge,fe,at);let Sn,nn=Re;if(at!==null&&(Sn=Te.get(at),nn=ve,nn.setIndex(Sn)),le.isMesh)ae.wireframe===!0?(w.setLineWidth(ae.wireframeLinewidth*Et()),nn.setMode(Y.LINES)):nn.setMode(Y.TRIANGLES);else if(le.isLine){let Gn=ae.linewidth;Gn===void 0&&(Gn=1),w.setLineWidth(Gn*Et()),le.isLineSegments?nn.setMode(Y.LINES):le.isLineLoop?nn.setMode(Y.LINE_LOOP):nn.setMode(Y.LINE_STRIP)}else le.isPoints?nn.setMode(Y.POINTS):le.isSprite&&nn.setMode(Y.TRIANGLES);if(le.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))nn.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const Gn=le._multiDrawStarts,je=le._multiDrawCounts,fi=le._multiDrawCount,Nt=at?Te.get(at).bytesPerElement:1,$i=se.get(ae).currentProgram.getUniforms();for(let Ki=0;Ki<fi;Ki++)$i.setValue(Y,"_gl_DrawID",Ki),nn.render(Gn[Ki]/Nt,je[Ki])}else if(le.isInstancedMesh)nn.renderInstances(ct,hn,le.count);else if(fe.isInstancedBufferGeometry){const Gn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,je=Math.min(fe.instanceCount,Gn);nn.renderInstances(ct,hn,je)}else nn.render(ct,hn)};function bt(N,Q,fe){N.transparent===!0&&N.side===Js&&N.forceSinglePass===!1?(N.side=sr,N.needsUpdate=!0,_n(N,Q,fe),N.side=jo,N.needsUpdate=!0,_n(N,Q,fe),N.side=Js):_n(N,Q,fe)}this.compile=function(N,Q,fe=null){fe===null&&(fe=N),P=Ne.get(fe),P.init(Q),T.push(P),fe.traverseVisible(function(le){le.isLight&&le.layers.test(Q.layers)&&(P.pushLight(le),le.castShadow&&P.pushShadow(le))}),N!==fe&&N.traverseVisible(function(le){le.isLight&&le.layers.test(Q.layers)&&(P.pushLight(le),le.castShadow&&P.pushShadow(le))}),P.setupLights();const ae=new Set;return N.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Be=le.material;if(Be)if(Array.isArray(Be))for(let Ye=0;Ye<Be.length;Ye++){const Ge=Be[Ye];bt(Ge,fe,le),ae.add(Ge)}else bt(Be,fe,le),ae.add(Be)}),P=T.pop(),ae},this.compileAsync=function(N,Q,fe=null){const ae=this.compile(N,Q,fe);return new Promise(le=>{function Be(){if(ae.forEach(function(Ye){se.get(Ye).currentProgram.isReady()&&ae.delete(Ye)}),ae.size===0){le(N);return}setTimeout(Be,10)}Je.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Qt=null;function Hn(N){Qt&&Qt(N)}function ln(){Ct.stop()}function en(){Ct.start()}const Ct=new m1;Ct.setAnimationLoop(Hn),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(N){Qt=N,Se.setAnimationLoop(N),N===null?Ct.stop():Ct.start()},Se.addEventListener("sessionstart",ln),Se.addEventListener("sessionend",en),this.render=function(N,Q){if(Q!==void 0&&Q.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;z!==null&&z.renderStart(N,Q);const fe=Se.enabled===!0&&Se.isPresenting===!0,ae=L!==null&&(H===null||fe)&&L.begin(F,H);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(Q),Q=Se.getCamera()),N.isScene===!0&&N.onBeforeRender(F,N,Q,H),P=Ne.get(N,T.length),P.init(Q),P.state.textureUnits=de.getTextureUnits(),T.push(P),re.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ot.setFromProjectionMatrix(re,As,Q.reversedDepth),Qe=this.localClippingEnabled,ht=Ce.init(this.clippingPlanes,Qe),D=ke.get(N,R.length),D.init(),R.push(D),Se.enabled===!0&&Se.isPresenting===!0){const Ye=F.xr.getDepthSensingMesh();Ye!==null&&ti(Ye,Q,-1/0,F.sortObjects)}ti(N,Q,0,F.sortObjects),D.finish(),F.sortObjects===!0&&D.sort(Me,Xe,Q.reversedDepth),it=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,it&&$e.addToRenderList(D,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Ce.beginShadows();const le=P.state.shadowsArray;if(rt.render(le,N,Q),ht===!0&&Ce.endShadows(),(ae&&L.hasRenderPass())===!1){const Ye=D.opaque,Ge=D.transmissive;if(P.setupLights(),Q.isArrayCamera){const at=Q.cameras;if(Ge.length>0)for(let dt=0,Tt=at.length;dt<Tt;dt++){const wt=at[dt];ni(Ye,Ge,N,wt)}it&&$e.render(N);for(let dt=0,Tt=at.length;dt<Tt;dt++){const wt=at[dt];tn(D,N,wt,wt.viewport)}}else Ge.length>0&&ni(Ye,Ge,N,Q),it&&$e.render(N),tn(D,N,Q)}H!==null&&W===0&&(de.updateMultisampleRenderTarget(H),de.updateRenderTargetMipmap(H)),ae&&L.end(F),N.isScene===!0&&N.onAfterRender(F,N,Q),Ve.resetDefaultState(),G=-1,U=null,T.pop(),T.length>0?(P=T[T.length-1],de.setTextureUnits(P.state.textureUnits),ht===!0&&Ce.setGlobalState(F.clippingPlanes,P.state.camera)):P=null,R.pop(),R.length>0?D=R[R.length-1]:D=null,z!==null&&z.renderEnd()};function ti(N,Q,fe,ae){if(N.visible===!1)return;if(N.layers.test(Q.layers)){if(N.isGroup)fe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Q);else if(N.isLightProbeGrid)P.pushLightProbeGrid(N);else if(N.isLight)P.pushLight(N),N.castShadow&&P.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ot.intersectsSprite(N)){ae&&Mt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(re);const Ye=_e.update(N),Ge=N.material;Ge.visible&&D.push(N,Ye,Ge,fe,Mt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||ot.intersectsObject(N))){const Ye=_e.update(N),Ge=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Mt.copy(N.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Mt.copy(Ye.boundingSphere.center)),Mt.applyMatrix4(N.matrixWorld).applyMatrix4(re)),Array.isArray(Ge)){const at=Ye.groups;for(let dt=0,Tt=at.length;dt<Tt;dt++){const wt=at[dt],ct=Ge[wt.materialIndex];ct&&ct.visible&&D.push(N,Ye,ct,fe,Mt.z,wt)}}else Ge.visible&&D.push(N,Ye,Ge,fe,Mt.z,null)}}const Be=N.children;for(let Ye=0,Ge=Be.length;Ye<Ge;Ye++)ti(Be[Ye],Q,fe,ae)}function tn(N,Q,fe,ae){const{opaque:le,transmissive:Be,transparent:Ye}=N;P.setupLightsView(fe),ht===!0&&Ce.setGlobalState(F.clippingPlanes,fe),ae&&w.viewport(k.copy(ae)),le.length>0&&ii(le,Q,fe),Be.length>0&&ii(Be,Q,fe),Ye.length>0&&ii(Ye,Q,fe),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function ni(N,Q,fe,ae){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ae.id]===void 0){const ct=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ae.id]=new Ps(1,1,{generateMipmaps:!0,type:ct?so:Wr,minFilter:Pa,samples:Math.max(4,O.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const Be=P.state.transmissionRenderTarget[ae.id],Ye=ae.viewport||k;Be.setSize(Ye.z*F.transmissionResolutionScale,Ye.w*F.transmissionResolutionScale);const Ge=F.getRenderTarget(),at=F.getActiveCubeFace(),dt=F.getActiveMipmapLevel();F.setRenderTarget(Be),F.getClearColor(Oe),De=F.getClearAlpha(),De<1&&F.setClearColor(16777215,.5),F.clear(),it&&$e.render(fe);const Tt=F.toneMapping;F.toneMapping=Rs;const wt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),P.setupLightsView(ae),ht===!0&&Ce.setGlobalState(F.clippingPlanes,ae),ii(N,fe,ae),de.updateMultisampleRenderTarget(Be),de.updateRenderTargetMipmap(Be),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let qt=0,hn=Q.length;qt<hn;qt++){const Sn=Q[qt],{object:nn,geometry:Gn,material:je,group:fi}=Sn;if(je.side===Js&&nn.layers.test(ae.layers)){const Nt=je.side;je.side=sr,je.needsUpdate=!0,Tn(nn,fe,ae,Gn,je,fi),je.side=Nt,je.needsUpdate=!0,ct=!0}}ct===!0&&(de.updateMultisampleRenderTarget(Be),de.updateRenderTargetMipmap(Be))}F.setRenderTarget(Ge,at,dt),F.setClearColor(Oe,De),wt!==void 0&&(ae.viewport=wt),F.toneMapping=Tt}function ii(N,Q,fe){const ae=Q.isScene===!0?Q.overrideMaterial:null;for(let le=0,Be=N.length;le<Be;le++){const Ye=N[le],{object:Ge,geometry:at,group:dt}=Ye;let Tt=Ye.material;Tt.allowOverride===!0&&ae!==null&&(Tt=ae),Ge.layers.test(fe.layers)&&Tn(Ge,Q,fe,at,Tt,dt)}}function Tn(N,Q,fe,ae,le,Be){N.onBeforeRender(F,Q,fe,ae,le,Be),N.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),le.onBeforeRender(F,Q,fe,ae,N,Be),le.transparent===!0&&le.side===Js&&le.forceSinglePass===!1?(le.side=sr,le.needsUpdate=!0,F.renderBufferDirect(fe,Q,ae,le,N,Be),le.side=jo,le.needsUpdate=!0,F.renderBufferDirect(fe,Q,ae,le,N,Be),le.side=Js):F.renderBufferDirect(fe,Q,ae,le,N,Be),N.onAfterRender(F,Q,fe,ae,le,Be)}function _n(N,Q,fe){Q.isScene!==!0&&(Q=Lt);const ae=se.get(N),le=P.state.lights,Be=P.state.shadowsArray,Ye=le.state.version,Ge=Ie.getParameters(N,le.state,Be,Q,fe,P.state.lightProbeGridArray),at=Ie.getProgramCacheKey(Ge);let dt=ae.programs;ae.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Q.environment:null,ae.fog=Q.fog;const Tt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ae.envMap=we.get(N.envMap||ae.environment,Tt),ae.envMapRotation=ae.environment!==null&&N.envMap===null?Q.environmentRotation:N.envMapRotation,dt===void 0&&(N.addEventListener("dispose",et),dt=new Map,ae.programs=dt);let wt=dt.get(at);if(wt!==void 0){if(ae.currentProgram===wt&&ae.lightsStateVersion===Ye)return Rr(N,Ge),wt}else Ge.uniforms=Ie.getUniforms(N),z!==null&&N.isNodeMaterial&&z.build(N,fe,Ge),N.onBeforeCompile(Ge,F),wt=Ie.acquireProgram(Ge,at),dt.set(at,wt),ae.uniforms=Ge.uniforms;const ct=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ct.clippingPlanes=Ce.uniform),Rr(N,Ge),ae.needsLights=yi(N),ae.lightsStateVersion=Ye,ae.needsLights&&(ct.ambientLightColor.value=le.state.ambient,ct.lightProbe.value=le.state.probe,ct.directionalLights.value=le.state.directional,ct.directionalLightShadows.value=le.state.directionalShadow,ct.spotLights.value=le.state.spot,ct.spotLightShadows.value=le.state.spotShadow,ct.rectAreaLights.value=le.state.rectArea,ct.ltc_1.value=le.state.rectAreaLTC1,ct.ltc_2.value=le.state.rectAreaLTC2,ct.pointLights.value=le.state.point,ct.pointLightShadows.value=le.state.pointShadow,ct.hemisphereLights.value=le.state.hemi,ct.directionalShadowMatrix.value=le.state.directionalShadowMatrix,ct.spotLightMatrix.value=le.state.spotLightMatrix,ct.spotLightMap.value=le.state.spotLightMap,ct.pointShadowMatrix.value=le.state.pointShadowMatrix),ae.lightProbeGrid=P.state.lightProbeGridArray.length>0,ae.currentProgram=wt,ae.uniformsList=null,wt}function Nn(N){if(N.uniformsList===null){const Q=N.currentProgram.getUniforms();N.uniformsList=fh.seqWithValue(Q.seq,N.uniforms)}return N.uniformsList}function Rr(N,Q){const fe=se.get(N);fe.outputColorSpace=Q.outputColorSpace,fe.batching=Q.batching,fe.batchingColor=Q.batchingColor,fe.instancing=Q.instancing,fe.instancingColor=Q.instancingColor,fe.instancingMorph=Q.instancingMorph,fe.skinning=Q.skinning,fe.morphTargets=Q.morphTargets,fe.morphNormals=Q.morphNormals,fe.morphColors=Q.morphColors,fe.morphTargetsCount=Q.morphTargetsCount,fe.numClippingPlanes=Q.numClippingPlanes,fe.numIntersection=Q.numClipIntersection,fe.vertexAlphas=Q.vertexAlphas,fe.vertexTangents=Q.vertexTangents,fe.toneMapping=Q.toneMapping}function uo(N,Q){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;A.setFromMatrixPosition(Q.matrixWorld);for(let fe=0,ae=N.length;fe<ae;fe++){const le=N[fe];if(le.texture!==null&&le.boundingBox.containsPoint(A))return le}return null}function Pt(N,Q,fe,ae,le){Q.isScene!==!0&&(Q=Lt),de.resetTextureUnits();const Be=Q.fog,Ye=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Q.environment:null,Ge=H===null?F.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Wt.workingColorSpace,at=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,dt=we.get(ae.envMap||Ye,at),Tt=ae.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,wt=!!fe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),ct=!!fe.morphAttributes.position,qt=!!fe.morphAttributes.normal,hn=!!fe.morphAttributes.color;let Sn=Rs;ae.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Sn=F.toneMapping);const nn=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Gn=nn!==void 0?nn.length:0,je=se.get(ae),fi=P.state.lights;if(ht===!0&&(Qe===!0||N!==U)){const rn=N===U&&ae.id===G;Ce.setState(ae,N,rn)}let Nt=!1;ae.version===je.__version?(je.needsLights&&je.lightsStateVersion!==fi.state.version||je.outputColorSpace!==Ge||le.isBatchedMesh&&je.batching===!1||!le.isBatchedMesh&&je.batching===!0||le.isBatchedMesh&&je.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&je.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&je.instancing===!1||!le.isInstancedMesh&&je.instancing===!0||le.isSkinnedMesh&&je.skinning===!1||!le.isSkinnedMesh&&je.skinning===!0||le.isInstancedMesh&&je.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&je.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&je.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&je.instancingMorph===!1&&le.morphTexture!==null||je.envMap!==dt||ae.fog===!0&&je.fog!==Be||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ce.numPlanes||je.numIntersection!==Ce.numIntersection)||je.vertexAlphas!==Tt||je.vertexTangents!==wt||je.morphTargets!==ct||je.morphNormals!==qt||je.morphColors!==hn||je.toneMapping!==Sn||je.morphTargetsCount!==Gn||!!je.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Nt=!0):(Nt=!0,je.__version=ae.version);let $i=je.currentProgram;Nt===!0&&($i=_n(ae,Q,le),z&&ae.isNodeMaterial&&z.onUpdateProgram(ae,$i,je));let Ki=!1,Ot=!1,Us=!1;const Zt=$i.getUniforms(),gn=je.uniforms;if(w.useProgram($i.program)&&(Ki=!0,Ot=!0,Us=!0),ae.id!==G&&(G=ae.id,Ot=!0),je.needsLights){const rn=uo(P.state.lightProbeGridArray,le);je.lightProbeGrid!==rn&&(je.lightProbeGrid=rn,Ot=!0)}if(Ki||U!==N){w.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Zt.setValue(Y,"projectionMatrix",N.projectionMatrix),Zt.setValue(Y,"viewMatrix",N.matrixWorldInverse);const Jr=Zt.map.cameraPosition;Jr!==void 0&&Jr.setValue(Y,vt.setFromMatrixPosition(N.matrixWorld)),O.logarithmicDepthBuffer&&Zt.setValue(Y,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Zt.setValue(Y,"isOrthographic",N.isOrthographicCamera===!0),U!==N&&(U=N,Ot=!0,Us=!0)}if(je.needsLights&&(fi.state.directionalShadowMap.length>0&&Zt.setValue(Y,"directionalShadowMap",fi.state.directionalShadowMap,de),fi.state.spotShadowMap.length>0&&Zt.setValue(Y,"spotShadowMap",fi.state.spotShadowMap,de),fi.state.pointShadowMap.length>0&&Zt.setValue(Y,"pointShadowMap",fi.state.pointShadowMap,de)),le.isSkinnedMesh){Zt.setOptional(Y,le,"bindMatrix"),Zt.setOptional(Y,le,"bindMatrixInverse");const rn=le.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Zt.setValue(Y,"boneTexture",rn.boneTexture,de))}le.isBatchedMesh&&(Zt.setOptional(Y,le,"batchingTexture"),Zt.setValue(Y,"batchingTexture",le._matricesTexture,de),Zt.setOptional(Y,le,"batchingIdTexture"),Zt.setValue(Y,"batchingIdTexture",le._indirectTexture,de),Zt.setOptional(Y,le,"batchingColorTexture"),le._colorsTexture!==null&&Zt.setValue(Y,"batchingColorTexture",le._colorsTexture,de));const Zr=fe.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0)&&q.update(le,fe,$i),(Ot||je.receiveShadow!==le.receiveShadow)&&(je.receiveShadow=le.receiveShadow,Zt.setValue(Y,"receiveShadow",le.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Q.environment!==null&&(gn.envMapIntensity.value=Q.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=h3()),Ot){if(Zt.setValue(Y,"toneMappingExposure",F.toneMappingExposure),je.needsLights&&wn(gn,Us),Be&&ae.fog===!0&&Ke.refreshFogUniforms(gn,Be),Ke.refreshMaterialUniforms(gn,ae,he,ge,P.state.transmissionRenderTarget[N.id]),je.needsLights&&je.lightProbeGrid){const rn=je.lightProbeGrid;gn.probesSH.value=rn.texture,gn.probesMin.value.copy(rn.boundingBox.min),gn.probesMax.value.copy(rn.boundingBox.max),gn.probesResolution.value.copy(rn.resolution)}fh.upload(Y,Nn(je),gn,de)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(fh.upload(Y,Nn(je),gn,de),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Zt.setValue(Y,"center",le.center),Zt.setValue(Y,"modelViewMatrix",le.modelViewMatrix),Zt.setValue(Y,"normalMatrix",le.normalMatrix),Zt.setValue(Y,"modelMatrix",le.matrixWorld),ae.uniformsGroups!==void 0){const rn=ae.uniformsGroups;for(let Jr=0,ds=rn.length;Jr<ds;Jr++){const ra=rn[Jr];Ee.update(ra,$i),Ee.bind(ra,$i)}}return $i}function wn(N,Q){N.ambientLightColor.needsUpdate=Q,N.lightProbe.needsUpdate=Q,N.directionalLights.needsUpdate=Q,N.directionalLightShadows.needsUpdate=Q,N.pointLights.needsUpdate=Q,N.pointLightShadows.needsUpdate=Q,N.spotLights.needsUpdate=Q,N.spotLightShadows.needsUpdate=Q,N.rectAreaLights.needsUpdate=Q,N.hemisphereLights.needsUpdate=Q}function yi(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(N,Q,fe){const ae=se.get(N);ae.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),se.get(N.texture).__webglTexture=Q,se.get(N.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:fe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Q){const fe=se.get(N);fe.__webglFramebuffer=Q,fe.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(N,Q=0,fe=0){H=N,ee=Q,W=fe;let ae=null,le=!1,Be=!1;if(N){const Ge=se.get(N);if(Ge.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(Y.FRAMEBUFFER,Ge.__webglFramebuffer),k.copy(N.viewport),j.copy(N.scissor),Fe=N.scissorTest,w.viewport(k),w.scissor(j),w.setScissorTest(Fe),G=-1;return}else if(Ge.__webglFramebuffer===void 0)de.setupRenderTarget(N);else if(Ge.__hasExternalTextures)de.rebindTextures(N,se.get(N.texture).__webglTexture,se.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Tt=N.depthTexture;if(Ge.__boundDepthTexture!==Tt){if(Tt!==null&&se.has(Tt)&&(N.width!==Tt.image.width||N.height!==Tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(N)}}const at=N.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Be=!0);const dt=se.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(dt[Q])?ae=dt[Q][fe]:ae=dt[Q],le=!0):N.samples>0&&de.useMultisampledRTT(N)===!1?ae=se.get(N).__webglMultisampledFramebuffer:Array.isArray(dt)?ae=dt[fe]:ae=dt,k.copy(N.viewport),j.copy(N.scissor),Fe=N.scissorTest}else k.copy(We).multiplyScalar(he).floor(),j.copy(pt).multiplyScalar(he).floor(),Fe=He;if(fe!==0&&(ae=ne),w.bindFramebuffer(Y.FRAMEBUFFER,ae)&&w.drawBuffers(N,ae),w.viewport(k),w.scissor(j),w.setScissorTest(Fe),le){const Ge=se.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ge.__webglTexture,fe)}else if(Be){const Ge=Q;for(let at=0;at<N.textures.length;at++){const dt=se.get(N.textures[at]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+at,dt.__webglTexture,fe,Ge)}}else if(N!==null&&fe!==0){const Ge=se.get(N.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ge.__webglTexture,fe)}G=-1},this.readRenderTargetPixels=function(N,Q,fe,ae,le,Be,Ye,Ge=0){if(!(N&&N.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(at=at[Ye]),at){w.bindFramebuffer(Y.FRAMEBUFFER,at);try{const dt=N.textures[Ge],Tt=dt.format,wt=dt.type;if(N.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ge),!O.textureFormatReadable(Tt)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(wt)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=N.width-ae&&fe>=0&&fe<=N.height-le&&Y.readPixels(Q,fe,ae,le,Ue.convert(Tt),Ue.convert(wt),Be)}finally{const dt=H!==null?se.get(H).__webglFramebuffer:null;w.bindFramebuffer(Y.FRAMEBUFFER,dt)}}},this.readRenderTargetPixelsAsync=async function(N,Q,fe,ae,le,Be,Ye,Ge=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(at=at[Ye]),at)if(Q>=0&&Q<=N.width-ae&&fe>=0&&fe<=N.height-le){w.bindFramebuffer(Y.FRAMEBUFFER,at);const dt=N.textures[Ge],Tt=dt.format,wt=dt.type;if(N.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ge),!O.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ct),Y.bufferData(Y.PIXEL_PACK_BUFFER,Be.byteLength,Y.STREAM_READ),Y.readPixels(Q,fe,ae,le,Ue.convert(Tt),Ue.convert(wt),0);const qt=H!==null?se.get(H).__webglFramebuffer:null;w.bindFramebuffer(Y.FRAMEBUFFER,qt);const hn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await CA(Y,hn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,ct),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Be),Y.deleteBuffer(ct),Y.deleteSync(hn),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Q=null,fe=0){const ae=Math.pow(2,-fe),le=Math.floor(N.image.width*ae),Be=Math.floor(N.image.height*ae),Ye=Q!==null?Q.x:0,Ge=Q!==null?Q.y:0;de.setTexture2D(N,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,fe,0,0,Ye,Ge,le,Be),w.unbindTexture()},this.copyTextureToTexture=function(N,Q,fe=null,ae=null,le=0,Be=0){let Ye,Ge,at,dt,Tt,wt,ct,qt,hn;const Sn=N.isCompressedTexture?N.mipmaps[Be]:N.image;if(fe!==null)Ye=fe.max.x-fe.min.x,Ge=fe.max.y-fe.min.y,at=fe.isBox3?fe.max.z-fe.min.z:1,dt=fe.min.x,Tt=fe.min.y,wt=fe.isBox3?fe.min.z:0;else{const gn=Math.pow(2,-le);Ye=Math.floor(Sn.width*gn),Ge=Math.floor(Sn.height*gn),N.isDataArrayTexture?at=Sn.depth:N.isData3DTexture?at=Math.floor(Sn.depth*gn):at=1,dt=0,Tt=0,wt=0}ae!==null?(ct=ae.x,qt=ae.y,hn=ae.z):(ct=0,qt=0,hn=0);const nn=Ue.convert(Q.format),Gn=Ue.convert(Q.type);let je;Q.isData3DTexture?(de.setTexture3D(Q,0),je=Y.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(de.setTexture2DArray(Q,0),je=Y.TEXTURE_2D_ARRAY):(de.setTexture2D(Q,0),je=Y.TEXTURE_2D),w.activeTexture(Y.TEXTURE0),w.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Q.flipY),w.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),w.pixelStorei(Y.UNPACK_ALIGNMENT,Q.unpackAlignment);const fi=w.getParameter(Y.UNPACK_ROW_LENGTH),Nt=w.getParameter(Y.UNPACK_IMAGE_HEIGHT),$i=w.getParameter(Y.UNPACK_SKIP_PIXELS),Ki=w.getParameter(Y.UNPACK_SKIP_ROWS),Ot=w.getParameter(Y.UNPACK_SKIP_IMAGES);w.pixelStorei(Y.UNPACK_ROW_LENGTH,Sn.width),w.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Sn.height),w.pixelStorei(Y.UNPACK_SKIP_PIXELS,dt),w.pixelStorei(Y.UNPACK_SKIP_ROWS,Tt),w.pixelStorei(Y.UNPACK_SKIP_IMAGES,wt);const Us=N.isDataArrayTexture||N.isData3DTexture,Zt=Q.isDataArrayTexture||Q.isData3DTexture;if(N.isDepthTexture){const gn=se.get(N),Zr=se.get(Q),rn=se.get(gn.__renderTarget),Jr=se.get(Zr.__renderTarget);w.bindFramebuffer(Y.READ_FRAMEBUFFER,rn.__webglFramebuffer),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Jr.__webglFramebuffer);for(let ds=0;ds<at;ds++)Us&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(N).__webglTexture,le,wt+ds),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(Q).__webglTexture,Be,hn+ds)),Y.blitFramebuffer(dt,Tt,Ye,Ge,ct,qt,Ye,Ge,Y.DEPTH_BUFFER_BIT,Y.NEAREST);w.bindFramebuffer(Y.READ_FRAMEBUFFER,null),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(le!==0||N.isRenderTargetTexture||se.has(N)){const gn=se.get(N),Zr=se.get(Q);w.bindFramebuffer(Y.READ_FRAMEBUFFER,ie),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,X);for(let rn=0;rn<at;rn++)Us?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,gn.__webglTexture,le,wt+rn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,gn.__webglTexture,le),Zt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Zr.__webglTexture,Be,hn+rn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Zr.__webglTexture,Be),le!==0?Y.blitFramebuffer(dt,Tt,Ye,Ge,ct,qt,Ye,Ge,Y.COLOR_BUFFER_BIT,Y.NEAREST):Zt?Y.copyTexSubImage3D(je,Be,ct,qt,hn+rn,dt,Tt,Ye,Ge):Y.copyTexSubImage2D(je,Be,ct,qt,dt,Tt,Ye,Ge);w.bindFramebuffer(Y.READ_FRAMEBUFFER,null),w.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Zt?N.isDataTexture||N.isData3DTexture?Y.texSubImage3D(je,Be,ct,qt,hn,Ye,Ge,at,nn,Gn,Sn.data):Q.isCompressedArrayTexture?Y.compressedTexSubImage3D(je,Be,ct,qt,hn,Ye,Ge,at,nn,Sn.data):Y.texSubImage3D(je,Be,ct,qt,hn,Ye,Ge,at,nn,Gn,Sn):N.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Be,ct,qt,Ye,Ge,nn,Gn,Sn.data):N.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Be,ct,qt,Sn.width,Sn.height,nn,Sn.data):Y.texSubImage2D(Y.TEXTURE_2D,Be,ct,qt,Ye,Ge,nn,Gn,Sn);w.pixelStorei(Y.UNPACK_ROW_LENGTH,fi),w.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Nt),w.pixelStorei(Y.UNPACK_SKIP_PIXELS,$i),w.pixelStorei(Y.UNPACK_SKIP_ROWS,Ki),w.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ot),Be===0&&Q.generateMipmaps&&Y.generateMipmap(je),w.unbindTexture()},this.initRenderTarget=function(N){se.get(N).__webglFramebuffer===void 0&&de.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?de.setTextureCube(N,0):N.isData3DTexture?de.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?de.setTexture2DArray(N,0):de.setTexture2D(N,0),w.unbindTexture()},this.resetState=function(){ee=0,W=0,H=null,w.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return As}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}}function js(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function E1(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wc={duration:.5,overwrite:!1,delay:0},T0,vi,En,qr=1e8,cn=1/qr,Fg=Math.PI*2,m3=Fg/4,_3=0,T1=Math.sqrt,g3=Math.cos,v3=Math.sin,ci=function(e){return typeof e=="string"},On=function(e){return typeof e=="function"},ao=function(e){return typeof e=="number"},w0=function(e){return typeof e>"u"},Is=function(e){return typeof e=="object"},or=function(e){return e!==!1},A0=function(){return typeof window<"u"},Bd=function(e){return On(e)||ci(e)},w1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fi=Array.isArray,x3=/random\([^)]+\)/g,y3=/,\s*/g,IS=/(?:-?\.?\d|\.)+/gi,A1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Yl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,M_=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,b1=/[+-]=-?[.\d]+/,S3=/[^,'"\[\]\s]+/gi,M3=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rn,ys,Og,b0,Ar={},Oh={},C1,R1=function(e){return(Oh=fu(e,Ar))&&cr},C0=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xc=function(e,t){return!t&&console.warn(e)},P1=function(e,t){return e&&(Ar[e]=t)&&Oh&&(Oh[e]=t)||Ar},Yc=function(){return 0},E3={suppressEvents:!0,isStart:!0,kill:!1},dh={suppressEvents:!0,kill:!1},T3={suppressEvents:!0},R0={},Yo=[],kg={},D1,xr={},E_={},US=30,hh=[],P0="",D0=function(e){var t=e[0],n,r;if(Is(t)||On(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=hh.length;r--&&!hh[r].targetTest(t););n=hh[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Q1(e[r],n)))||e.splice(r,1);return e},Ia=function(e){return e._gsap||D0($r(e))[0]._gsap},L1=function(e,t,n){return(n=e[t])&&On(n)?e[t]():w0(n)&&e.getAttribute&&e.getAttribute(t)||n},ar=function(e,t){return(e=e.split(",")).forEach(t)||e},zn=function(e){return Math.round(e*1e5)/1e5||0},Cn=function(e){return Math.round(e*1e7)/1e7||0},Ql=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},w3=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},kh=function(){var e=Yo.length,t=Yo.slice(0),n,r;for(kg={},Yo.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},L0=function(e){return!!(e._initted||e._startAt||e.add)},N1=function(e,t,n,r){Yo.length&&!vi&&kh(),e.render(t,n,!!(vi&&t<0&&L0(e))),Yo.length&&!vi&&kh()},I1=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(S3).length<2?t:ci(e)?e.trim():e},U1=function(e){return e},br=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},A3=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},fu=function(e,t){for(var n in t)e[n]=t[n];return e},FS=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Is(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Bh=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Cc=function(e){var t=e.parent||Rn,n=e.keyframes?A3(Fi(e.keyframes)):br;if(or(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},b3=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},F1=function(e,t,n,r,a){var l=e[r],c;if(a)for(c=t[a];l&&l[a]>c;)l=l._prev;return l?(t._next=l._next,l._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=l,t.parent=t._dp=e,t},ip=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,l=t._next;a?a._next=l:e[n]===t&&(e[n]=l),l?l._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},Zo=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ua=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},C3=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bg=function(e,t,n,r){return e._startAt&&(vi?e._startAt.revert(dh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},R3=function s(e){return!e||e._ts&&s(e.parent)},OS=function(e){return e._repeat?du(e._tTime,e=e.duration()+e._rDelay)*e:0},du=function(e,t){var n=Math.floor(e=Cn(e/t));return e&&n===e?n-1:n},zh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},rp=function(e){return e._end=Cn(e._start+(e._tDur/Math.abs(e._ts||e._rts||cn)||0))},sp=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Cn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),rp(e),n._dirty||Ua(n,e)),e},O1=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=zh(e.rawTime(),t),(!t._dur||uf(0,t.totalDuration(),n)-t._tTime>cn)&&t.render(n,!0)),Ua(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-cn}},Ts=function(e,t,n,r){return t.parent&&Zo(t),t._start=Cn((ao(n)?n:n||e!==Rn?kr(e,n,t):e._time)+t._delay),t._end=Cn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),F1(e,t,"_first","_last",e._sort?"_start":0),zg(t)||(e._recent=t),r||O1(e,t),e._ts<0&&sp(e,e._tTime),e},k1=function(e,t){return(Ar.ScrollTrigger||C0("scrollTrigger",t))&&Ar.ScrollTrigger.create(t,e)},B1=function(e,t,n,r,a){if(I0(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!vi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&D1!==Sr.frame)return Yo.push(e),e._lazy=[a,r],1},P3=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},zg=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},D3=function(e,t,n,r){var a=e.ratio,l=t<0||!t&&(!e._start&&P3(e)&&!(!e._initted&&zg(e))||(e._ts<0||e._dp._ts<0)&&!zg(e))?0:1,c=e._rDelay,f=0,d,p,g;if(c&&e._repeat&&(f=uf(0,e._tDur,t),p=du(f,c),e._yoyo&&p&1&&(l=1-l),p!==du(e._tTime,c)&&(a=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==a||vi||r||e._zTime===cn||!t&&e._zTime){if(!e._initted&&B1(e,t,r,n,f))return;for(g=e._zTime,e._zTime=t||(n?cn:0),n||(n=t&&!g),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=f,d=e._pt;d;)d.r(l,d.d),d=d._next;t<0&&Bg(e,t,n,!0),e._onUpdate&&!n&&Er(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&Er(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&Zo(e,1),!n&&!vi&&(Er(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},L3=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},hu=function(e,t,n,r){var a=e._repeat,l=Cn(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=l/e._dur),e._dur=l,e._tDur=a?a<0?1e10:Cn(l*(a+1)+e._rDelay*a):l,c>0&&!r&&sp(e,e._tTime=e._tDur*c),e.parent&&rp(e),n||Ua(e.parent,e),e},kS=function(e){return e instanceof rr?Ua(e):hu(e,e._dur)},N3={_start:0,endTime:Yc,totalDuration:Yc},kr=function s(e,t,n){var r=e.labels,a=e._recent||N3,l=e.duration()>=qr?a.endTime(!1):e._dur,c,f,d;return ci(t)&&(isNaN(t)||t in r)?(f=t.charAt(0),d=t.substr(-1)==="%",c=t.indexOf("="),f==="<"||f===">"?(c>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=l),r[t]):(f=parseFloat(t.charAt(c-1)+t.substr(c+1)),d&&n&&(f=f/100*(Fi(n)?n[0]:n).totalDuration()),c>1?s(e,t.substr(0,c-1),n)+f:l+f)):t==null?l:+t},Rc=function(e,t,n){var r=ao(t[1]),a=(r?2:1)+(e<2?0:1),l=t[a],c,f;if(r&&(l.duration=t[1]),l.parent=n,e){for(c=l,f=n;f&&!("immediateRender"in c);)c=f.vars.defaults||{},f=or(f.vars.inherit)&&f.parent;l.immediateRender=or(c.immediateRender),e<2?l.runBackwards=1:l.startAt=t[a-1]}return new qn(t[0],l,t[a+1])},na=function(e,t){return e||e===0?t(e):t},uf=function(e,t,n){return n<e?e:n>t?t:n},Di=function(e,t){return!ci(e)||!(t=M3.exec(e))?"":t[1]},I3=function(e,t,n){return na(n,function(r){return uf(e,t,r)})},Vg=[].slice,z1=function(e,t){return e&&Is(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Is(e[0]))&&!e.nodeType&&e!==ys},U3=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return ci(r)&&!t||z1(r,1)?(a=n).push.apply(a,$r(r)):n.push(r)})||n},$r=function(e,t,n){return En&&!t&&En.selector?En.selector(e):ci(e)&&!n&&(Og||!pu())?Vg.call((t||b0).querySelectorAll(e),0):Fi(e)?U3(e,n):z1(e)?Vg.call(e,0):e?[e]:[]},Hg=function(e){return e=$r(e)[0]||Xc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $r(t,n.querySelectorAll?n:n===e?Xc("Invalid scope")||b0.createElement("div"):e)}},V1=function(e){return e.sort(function(){return .5-Math.random()})},H1=function(e){if(On(e))return e;var t=Is(e)?e:{each:e},n=Fa(t.ease),r=t.from||0,a=parseFloat(t.base)||0,l={},c=r>0&&r<1,f=isNaN(r)||c,d=t.axis,p=r,g=r;return ci(r)?p=g={center:.5,edges:.5,end:1}[r]||0:!c&&f&&(p=r[0],g=r[1]),function(m,_,M){var E=(M||t).length,x=l[E],y,C,I,A,D,P,R,T,L;if(!x){if(L=t.grid==="auto"?0:(t.grid||[1,qr])[1],!L){for(R=-qr;R<(R=M[L++].getBoundingClientRect().left)&&L<E;);L<E&&L--}for(x=l[E]=[],y=f?Math.min(L,E)*p-.5:r%L,C=L===qr?0:f?E*g/L-.5:r/L|0,R=0,T=qr,P=0;P<E;P++)I=P%L-y,A=C-(P/L|0),x[P]=D=d?Math.abs(d==="y"?A:I):T1(I*I+A*A),D>R&&(R=D),D<T&&(T=D);r==="random"&&V1(x),x.max=R-T,x.min=T,x.v=E=(parseFloat(t.amount)||parseFloat(t.each)*(L>E?E-1:d?d==="y"?E/L:L:Math.max(L,E/L))||0)*(r==="edges"?-1:1),x.b=E<0?a-E:a,x.u=Di(t.amount||t.each)||0,n=n&&E<0?$3(n):n}return E=(x[m]-x.min)/x.max||0,Cn(x.b+(n?n(E):E)*x.v)+x.u}},Gg=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Cn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ao(n)?0:Di(n))}},G1=function(e,t){var n=Fi(e),r,a;return!n&&Is(e)&&(r=n=e.radius||qr,e.values?(e=$r(e.values),(a=!ao(e[0]))&&(r*=r)):e=Gg(e.increment)),na(t,n?On(e)?function(l){return a=e(l),Math.abs(a-l)<=r?a:l}:function(l){for(var c=parseFloat(a?l.x:l),f=parseFloat(a?l.y:0),d=qr,p=0,g=e.length,m,_;g--;)a?(m=e[g].x-c,_=e[g].y-f,m=m*m+_*_):m=Math.abs(e[g]-c),m<d&&(d=m,p=g);return p=!r||d<=r?e[p]:l,a||p===l||ao(l)?p:p+Di(l)}:Gg(e))},W1=function(e,t,n,r){return na(Fi(e)?!t:n===!0?!!(n=0):!r,function(){return Fi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},F3=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,l){return l(a)},r)}},O3=function(e,t){return function(n){return e(parseFloat(n))+(t||Di(n))}},k3=function(e,t,n){return Y1(e,t,0,1,n)},X1=function(e,t,n){return na(n,function(r){return e[~~t(r)]})},B3=function s(e,t,n){var r=t-e;return Fi(e)?X1(e,s(0,e.length),t):na(n,function(a){return(r+(a-e)%r)%r+e})},z3=function s(e,t,n){var r=t-e,a=r*2;return Fi(e)?X1(e,s(0,e.length-1),t):na(n,function(l){return l=(a+(l-e)%a)%a||0,e+(l>r?a-l:l)})},qc=function(e){return e.replace(x3,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(y3);return W1(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Y1=function(e,t,n,r,a){var l=t-e,c=r-n;return na(a,function(f){return n+((f-e)/l*c||0)})},V3=function s(e,t,n,r){var a=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!a){var l=ci(e),c={},f,d,p,g,m;if(n===!0&&(r=1)&&(n=null),l)e={p:e},t={p:t};else if(Fi(e)&&!Fi(t)){for(p=[],g=e.length,m=g-2,d=1;d<g;d++)p.push(s(e[d-1],e[d]));g--,a=function(M){M*=g;var E=Math.min(m,~~M);return p[E](M-E)},n=t}else r||(e=fu(Fi(e)?[]:{},e));if(!p){for(f in t)N0.call(c,e,f,"get",t[f]);a=function(M){return O0(M,c)||(l?e.p:e)}}}return na(n,a)},BS=function(e,t,n){var r=e.labels,a=qr,l,c,f;for(l in r)c=r[l]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(f=l,a=c);return f},Er=function(e,t,n){var r=e.vars,a=r[t],l=En,c=e._ctx,f,d,p;if(a)return f=r[t+"Params"],d=r.callbackScope||e,n&&Yo.length&&kh(),c&&(En=c),p=f?a.apply(d,f):a.call(d),En=l,p},yc=function(e){return Zo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vi),e.progress()<1&&Er(e,"onInterrupt"),e},ql,q1=[],$1=function(e){if(e)if(e=!e.name&&e.default||e,A0()||e.headless){var t=e.name,n=On(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Yc,render:O0,add:N0,kill:rD,modifier:iD,rawVars:0},l={targetTest:0,get:0,getSetter:F0,aliases:{},register:0};if(pu(),e!==r){if(xr[t])return;br(r,br(Bh(e,a),l)),fu(r.prototype,fu(a,Bh(e,l))),xr[r.prop=t]=r,e.targetTest&&(hh.push(r),R0[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}P1(t,r),e.register&&e.register(cr,r,lr)}else q1.push(e)},un=255,Sc={aqua:[0,un,un],lime:[0,un,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,un],navy:[0,0,128],white:[un,un,un],olive:[128,128,0],yellow:[un,un,0],orange:[un,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[un,0,0],pink:[un,192,203],cyan:[0,un,un],transparent:[un,un,un,0]},T_=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*un+.5|0},K1=function(e,t,n){var r=e?ao(e)?[e>>16,e>>8&un,e&un]:0:Sc.black,a,l,c,f,d,p,g,m,_,M;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Sc[e])r=Sc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),l=e.charAt(2),c=e.charAt(3),e="#"+a+a+l+l+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&un,r&un,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&un,e&un]}else if(e.substr(0,3)==="hsl"){if(r=M=e.match(IS),!t)f=+r[0]%360/360,d=+r[1]/100,p=+r[2]/100,l=p<=.5?p*(d+1):p+d-p*d,a=p*2-l,r.length>3&&(r[3]*=1),r[0]=T_(f+1/3,a,l),r[1]=T_(f,a,l),r[2]=T_(f-1/3,a,l);else if(~e.indexOf("="))return r=e.match(A1),n&&r.length<4&&(r[3]=1),r}else r=e.match(IS)||Sc.transparent;r=r.map(Number)}return t&&!M&&(a=r[0]/un,l=r[1]/un,c=r[2]/un,g=Math.max(a,l,c),m=Math.min(a,l,c),p=(g+m)/2,g===m?f=d=0:(_=g-m,d=p>.5?_/(2-g-m):_/(g+m),f=g===a?(l-c)/_+(l<c?6:0):g===l?(c-a)/_+2:(a-l)/_+4,f*=60),r[0]=~~(f+.5),r[1]=~~(d*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},j1=function(e){var t=[],n=[],r=-1;return e.split(qo).forEach(function(a){var l=a.match(Yl)||[];t.push.apply(t,l),n.push(r+=l.length+1)}),t.c=n,t},zS=function(e,t,n){var r="",a=(e+r).match(qo),l=t?"hsla(":"rgba(",c=0,f,d,p,g;if(!a)return e;if(a=a.map(function(m){return(m=K1(m,t,1))&&l+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(p=j1(e),f=n.c,f.join(r)!==p.c.join(r)))for(d=e.replace(qo,"1").split(Yl),g=d.length-1;c<g;c++)r+=d[c]+(~f.indexOf(c)?a.shift()||l+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!d)for(d=e.split(qo),g=d.length-1;c<g;c++)r+=d[c]+a[c];return r+d[g]},qo=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Sc)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),H3=/hsl[a]?\(/,Z1=function(e){var t=e.join(" "),n;if(qo.lastIndex=0,qo.test(t))return n=H3.test(t),e[1]=zS(e[1],n),e[0]=zS(e[0],n,j1(e[1])),!0},$c,Sr=(function(){var s=Date.now,e=500,t=33,n=s(),r=n,a=1e3/240,l=a,c=[],f,d,p,g,m,_,M=function E(x){var y=s()-r,C=x===!0,I,A,D,P;if((y>e||y<0)&&(n+=y-t),r+=y,D=r-n,I=D-l,(I>0||C)&&(P=++g.frame,m=D-g.time*1e3,g.time=D=D/1e3,l+=I+(I>=a?4:a-I),A=1),C||(f=d(E)),A)for(_=0;_<c.length;_++)c[_](D,m,P,x)};return g={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(x){return m/(1e3/(x||60))},wake:function(){C1&&(!Og&&A0()&&(ys=Og=window,b0=ys.document||{},Ar.gsap=cr,(ys.gsapVersions||(ys.gsapVersions=[])).push(cr.version),R1(Oh||ys.GreenSockGlobals||!ys.gsap&&ys||{}),q1.forEach($1)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&g.sleep(),d=p||function(x){return setTimeout(x,l-g.time*1e3+1|0)},$c=1,M(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),$c=0,d=Yc},lagSmoothing:function(x,y){e=x||1/0,t=Math.min(y||33,e)},fps:function(x){a=1e3/(x||240),l=g.time*1e3+a},add:function(x,y,C){var I=y?function(A,D,P,R){x(A,D,P,R),g.remove(I)}:x;return g.remove(x),c[C?"unshift":"push"](I),pu(),I},remove:function(x,y){~(y=c.indexOf(x))&&c.splice(y,1)&&_>=y&&_--},_listeners:c},g})(),pu=function(){return!$c&&Sr.wake()},Yt={},G3=/^[\d.\-M][\d.\-,\s]/,W3=/["']/g,X3=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,l=n.length,c,f,d;a<l;a++)f=n[a],c=a!==l-1?f.lastIndexOf(","):f.length,d=f.substr(0,c),t[r]=isNaN(d)?d.replace(W3,"").trim():+d,r=f.substr(c+1).trim();return t},Y3=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},q3=function(e){var t=(e+"").split("("),n=Yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[X3(t[1])]:Y3(e).split(",").map(I1)):Yt._CE&&G3.test(e)?Yt._CE("",e):n},$3=function(e){return function(t){return 1-e(1-t)}},Fa=function(e,t){return e&&(On(e)?e:Yt[e]||q3(e))||t},Ka=function(e,t,n,r){n===void 0&&(n=function(f){return 1-t(1-f)}),r===void 0&&(r=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},l;return ar(e,function(c){Yt[c]=Ar[c]=a,Yt[l=c.toLowerCase()]=n;for(var f in a)Yt[l+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=Yt[c+"."+f]=a[f]}),a},J1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},w_=function s(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),l=a/Fg*(Math.asin(1/r)||0),c=function(p){return p===1?1:r*Math.pow(2,-10*p)*v3((p-l)*a)+1},f=e==="out"?c:e==="in"?function(d){return 1-c(1-d)}:J1(c);return a=Fg/a,f.config=function(d,p){return s(e,d,p)},f},A_=function s(e,t){t===void 0&&(t=1.70158);var n=function(l){return l?--l*l*((t+1)*l+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:J1(n);return r.config=function(a){return s(e,a)},r};ar("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ka(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Yt.Linear.easeNone=Yt.none=Yt.Linear.easeIn;Ka("Elastic",w_("in"),w_("out"),w_());(function(s,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?s*c*c:c<n?s*Math.pow(c-1.5/e,2)+.75:c<r?s*(c-=2.25/e)*c+.9375:s*Math.pow(c-2.625/e,2)+.984375};Ka("Bounce",function(l){return 1-a(1-l)},a)})(7.5625,2.75);Ka("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ka("Circ",function(s){return-(T1(1-s*s)-1)});Ka("Sine",function(s){return s===1?1:-g3(s*m3)+1});Ka("Back",A_("in"),A_("out"),A_());Yt.SteppedEase=Yt.steps=Ar.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,l=1-cn;return function(c){return((r*uf(0,l,c)|0)+a)*n}}};Wc.ease=Yt["quad.out"];ar("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return P0+=s+","+s+"Params,"});var Q1=function(e,t){this.id=_3++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:L1,this.set=t?t.getSetter:F0},Kc=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,hu(this,+t.duration,1,1),this.data=t.data,En&&(this._ctx=En,En.data.push(this)),$c||Sr.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,hu(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(pu(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(sp(this,n),!a._dp||a.parent||O1(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ts(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===cn||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),N1(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+OS(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+OS(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?du(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-cn?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?zh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-cn?0:this._rts,this.totalTime(uf(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),rp(this),C3(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(pu(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==cn&&(this._tTime-=cn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Cn(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ts(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(or(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zh(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=T3);var r=vi;return vi=n,L0(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vi=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,kS(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,kS(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(kr(this,n),or(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,or(r)),this._dur||(this._zTime=-cn),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-cn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-cn,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-cn)},e.eventCallback=function(n,r,a){var l=this.vars;return arguments.length>1?(r?(l[n]=r,a&&(l[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete l[n],this):l[n]},e.then=function(n){var r=this,a=r._prom;return new Promise(function(l){var c=On(n)?n:U1,f=function(){var p=r.then;r.then=null,a&&a(),On(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=p),l(c),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},e.kill=function(){yc(this)},s})();br(Kc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-cn,_prom:0,_ps:!1,_rts:1});var rr=(function(s){E1(e,s);function e(n,r){var a;return n===void 0&&(n={}),a=s.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=or(n.sortChildren),Rn&&Ts(n.parent||Rn,js(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&k1(js(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,l){return Rc(0,arguments,this),this},t.from=function(r,a,l){return Rc(1,arguments,this),this},t.fromTo=function(r,a,l,c){return Rc(2,arguments,this),this},t.set=function(r,a,l){return a.duration=0,a.parent=this,Cc(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new qn(r,a,kr(this,l),1),this},t.call=function(r,a,l){return Ts(this,qn.delayedCall(0,r,a),l)},t.staggerTo=function(r,a,l,c,f,d,p){return l.duration=a,l.stagger=l.stagger||c,l.onComplete=d,l.onCompleteParams=p,l.parent=this,new qn(r,l,kr(this,f)),this},t.staggerFrom=function(r,a,l,c,f,d,p){return l.runBackwards=1,Cc(l).immediateRender=or(l.immediateRender),this.staggerTo(r,a,l,c,f,d,p)},t.staggerFromTo=function(r,a,l,c,f,d,p,g){return c.startAt=l,Cc(c).immediateRender=or(c.immediateRender),this.staggerTo(r,a,c,f,d,p,g)},t.render=function(r,a,l){var c=this._time,f=this._dirty?this.totalDuration():this._tDur,d=this._dur,p=r<=0?0:Cn(r),g=this._zTime<0!=r<0&&(this._initted||!d),m,_,M,E,x,y,C,I,A,D,P,R;if(this!==Rn&&p>f&&r>=0&&(p=f),p!==this._tTime||l||g){if(c!==this._time&&d&&(p+=this._time-c,r+=this._time-c),m=p,A=this._start,I=this._ts,y=!I,g&&(d||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,x=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,a,l);if(m=Cn(p%x),p===f?(E=this._repeat,m=d):(D=Cn(p/x),E=~~D,E&&E===D&&(m=d,E--),m>d&&(m=d)),D=du(this._tTime,x),!c&&this._tTime&&D!==E&&this._tTime-D*x-this._dur<=0&&(D=E),P&&E&1&&(m=d-m,R=1),E!==D&&!this._lock){var T=P&&D&1,L=T===(P&&E&1);if(E<D&&(T=!T),c=T?0:p%d?d:p,this._lock=1,this.render(c||(R?0:Cn(E*x)),a,!d)._lock=0,this._tTime=p,!a&&this.parent&&Er(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,D=E),c&&c!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,f=this._tDur,L&&(this._lock=2,c=T?d:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=L3(this,Cn(c),Cn(m)),C&&(p-=m-(m=C._start))),this._tTime=p,this._time=m,this._act=!!I,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&p&&d&&!a&&!D&&(Er(this,"onStart"),this._tTime!==p))return this;if(m>=c&&r>=0)for(_=this._first;_;){if(M=_._next,(_._act||m>=_._start)&&_._ts&&C!==_){if(_.parent!==this)return this.render(r,a,l);if(_.render(_._ts>0?(m-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(m-_._start)*_._ts,a,l),m!==this._time||!this._ts&&!y){C=0,M&&(p+=this._zTime=-cn);break}}_=M}else{_=this._last;for(var F=r<0?r:m;_;){if(M=_._prev,(_._act||F<=_._end)&&_._ts&&C!==_){if(_.parent!==this)return this.render(r,a,l);if(_.render(_._ts>0?(F-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(F-_._start)*_._ts,a,l||vi&&L0(_)),m!==this._time||!this._ts&&!y){C=0,M&&(p+=this._zTime=F?-cn:cn);break}}_=M}}if(C&&!a&&(this.pause(),C.render(m>=c?0:-cn)._zTime=m>=c?1:-1,this._ts))return this._start=A,rp(this),this.render(r,a,l);this._onUpdate&&!a&&Er(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&c)&&(A===this._start||Math.abs(I)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(p===f&&this._ts>0||!p&&this._ts<0)&&Zo(this,1),!a&&!(r<0&&!c)&&(p||c||!f)&&(Er(this,p===f&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var l=this;if(ao(a)||(a=kr(this,a,r)),!(r instanceof Kc)){if(Fi(r))return r.forEach(function(c){return l.add(c,a)}),this;if(ci(r))return this.addLabel(r,a);if(On(r))r=qn.delayedCall(0,r);else return this}return this!==r?Ts(this,r,a):this},t.getChildren=function(r,a,l,c){r===void 0&&(r=!0),a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=-qr);for(var f=[],d=this._first;d;)d._start>=c&&(d instanceof qn?a&&f.push(d):(l&&f.push(d),r&&f.push.apply(f,d.getChildren(!0,a,l)))),d=d._next;return f},t.getById=function(r){for(var a=this.getChildren(1,1,1),l=a.length;l--;)if(a[l].vars.id===r)return a[l]},t.remove=function(r){return ci(r)?this.removeLabel(r):On(r)?this.killTweensOf(r):(r.parent===this&&ip(this,r),r===this._recent&&(this._recent=this._last),Ua(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Cn(Sr.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=kr(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,l){var c=qn.delayedCall(0,a||Yc,l);return c.data="isPause",this._hasPause=1,Ts(this,c,kr(this,r))},t.removePause=function(r){var a=this._first;for(r=kr(this,r);a;)a._start===r&&a.data==="isPause"&&Zo(a),a=a._next},t.killTweensOf=function(r,a,l){for(var c=this.getTweensOf(r,l),f=c.length;f--;)zo!==c[f]&&c[f].kill(r,a);return this},t.getTweensOf=function(r,a){for(var l=[],c=$r(r),f=this._first,d=ao(a),p;f;)f instanceof qn?w3(f._targets,c)&&(d?(!zo||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&l.push(f):(p=f.getTweensOf(c,a)).length&&l.push.apply(l,p),f=f._next;return l},t.tweenTo=function(r,a){a=a||{};var l=this,c=kr(l,r),f=a,d=f.startAt,p=f.onStart,g=f.onStartParams,m=f.immediateRender,_,M=qn.to(l,br({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(d&&"time"in d?d.time:l._time))/l.timeScale())||cn,onStart:function(){if(l.pause(),!_){var x=a.duration||Math.abs((c-(d&&"time"in d?d.time:l._time))/l.timeScale());M._dur!==x&&hu(M,x,0,1).render(M._time,!0,!0),_=1}p&&p.apply(M,g||[])}},a));return m?M.render(0):M},t.tweenFromTo=function(r,a,l){return this.tweenTo(a,br({startAt:{time:kr(this,r)}},l))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),BS(this,kr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),BS(this,kr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+cn)},t.shiftChildren=function(r,a,l){l===void 0&&(l=0);var c=this._first,f=this.labels,d;for(r=Cn(r);c;)c._start>=l&&(c._start+=r,c._end+=r),c=c._next;if(a)for(d in f)f[d]>=l&&(f[d]+=r);return Ua(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return s.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,l;a;)l=a._next,this.remove(a),a=l;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ua(this)},t.totalDuration=function(r){var a=0,l=this,c=l._last,f=qr,d,p,g;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-r:r));if(l._dirty){for(g=l.parent;c;)d=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>f&&l._sort&&c._ts&&!l._lock?(l._lock=1,Ts(l,c,p-c._delay,1)._lock=0):f=p,p<0&&c._ts&&(a-=p,(!g&&!l._dp||g&&g.smoothChildTiming)&&(l._start+=Cn(p/l._ts),l._time-=p,l._tTime-=p),l.shiftChildren(-p,!1,-1/0),f=0),c._end>a&&c._ts&&(a=c._end),c=d;hu(l,l===Rn&&l._time>a?l._time:a,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(r){if(Rn._ts&&(N1(Rn,zh(r,Rn)),D1=Sr.frame),Sr.frame>=US){US+=wr.autoSleep||120;var a=Rn._first;if((!a||!a._ts)&&wr.autoSleep&&Sr._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Sr.sleep()}}},e})(Kc);br(rr.prototype,{_lock:0,_hasPause:0,_forcing:0});var K3=function(e,t,n,r,a,l,c){var f=new lr(this._pt,e,t,0,1,sE,null,a),d=0,p=0,g,m,_,M,E,x,y,C;for(f.b=n,f.e=r,n+="",r+="",(y=~r.indexOf("random("))&&(r=qc(r)),l&&(C=[n,r],l(C,e,t),n=C[0],r=C[1]),m=n.match(M_)||[];g=M_.exec(r);)M=g[0],E=r.substring(d,g.index),_?_=(_+1)%5:E.substr(-5)==="rgba("&&(_=1),M!==m[p++]&&(x=parseFloat(m[p-1])||0,f._pt={_next:f._pt,p:E||p===1?E:",",s:x,c:M.charAt(1)==="="?Ql(x,M)-x:parseFloat(M)-x,m:_&&_<4?Math.round:0},d=M_.lastIndex);return f.c=d<r.length?r.substring(d,r.length):"",f.fp=c,(b1.test(r)||y)&&(f.e=0),this._pt=f,f},N0=function(e,t,n,r,a,l,c,f,d,p){On(r)&&(r=r(a||0,e,l));var g=e[t],m=n!=="get"?n:On(g)?d?e[t.indexOf("set")||!On(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():g,_=On(g)?d?eD:iE:U0,M;if(ci(r)&&(~r.indexOf("random(")&&(r=qc(r)),r.charAt(1)==="="&&(M=Ql(m,r)+(Di(m)||0),(M||M===0)&&(r=M))),!p||m!==r||Wg)return!isNaN(m*r)&&r!==""?(M=new lr(this._pt,e,t,+m||0,r-(m||0),typeof g=="boolean"?nD:rE,0,_),d&&(M.fp=d),c&&M.modifier(c,this,e),this._pt=M):(!g&&!(t in e)&&C0(t,r),K3.call(this,e,t,m,r,_,f||wr.stringFilter,d))},j3=function(e,t,n,r,a){if(On(e)&&(e=Pc(e,a,t,n,r)),!Is(e)||e.style&&e.nodeType||Fi(e)||w1(e))return ci(e)?Pc(e,a,t,n,r):e;var l={},c;for(c in e)l[c]=Pc(e[c],a,t,n,r);return l},eE=function(e,t,n,r,a,l){var c,f,d,p;if(xr[e]&&(c=new xr[e]).init(a,c.rawVars?t[e]:j3(t[e],r,a,l,n),n,r,l)!==!1&&(n._pt=f=new lr(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==ql))for(d=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)d[c._props[p]]=f;return c},zo,Wg,I0=function s(e,t,n){var r=e.vars,a=r.ease,l=r.startAt,c=r.immediateRender,f=r.lazy,d=r.onUpdate,p=r.runBackwards,g=r.yoyoEase,m=r.keyframes,_=r.autoRevert,M=e._dur,E=e._startAt,x=e._targets,y=e.parent,C=y&&y.data==="nested"?y.vars.targets:x,I=e._overwrite==="auto"&&!T0,A=e.timeline,D=r.easeReverse||g,P,R,T,L,F,B,z,ne,ie,X,ee,W,H;if(A&&(!m||!a)&&(a="none"),e._ease=Fa(a,Wc.ease),e._rEase=D&&(Fa(D)||e._ease),e._from=!A&&!!r.runBackwards,e._from&&(e.ratio=1),!A||m&&!r.stagger){if(ne=x[0]?Ia(x[0]).harness:0,W=ne&&r[ne.prop],P=Bh(r,R0),E&&(E._zTime<0&&E.progress(1),t<0&&p&&c&&!_?E.render(-1,!0):E.revert(p&&M?dh:E3),E._lazy=0),l){if(Zo(e._startAt=qn.set(x,br({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!E&&or(f),startAt:null,delay:0,onUpdate:d&&function(){return Er(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vi||!c&&!_)&&e._startAt.revert(dh),c&&M&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&M&&!E){if(t&&(c=!1),T=br({overwrite:!1,data:"isFromStart",lazy:c&&!E&&or(f),immediateRender:c,stagger:0,parent:y},P),W&&(T[ne.prop]=W),Zo(e._startAt=qn.set(x,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vi?e._startAt.revert(dh):e._startAt.render(-1,!0)),e._zTime=t,!c)s(e._startAt,cn,cn);else if(!t)return}for(e._pt=e._ptCache=0,f=M&&or(f)||f&&!M,R=0;R<x.length;R++){if(F=x[R],z=F._gsap||D0(x)[R]._gsap,e._ptLookup[R]=X={},kg[z.id]&&Yo.length&&kh(),ee=C===x?R:C.indexOf(F),ne&&(ie=new ne).init(F,W||P,e,ee,C)!==!1&&(e._pt=L=new lr(e._pt,F,ie.name,0,1,ie.render,ie,0,ie.priority),ie._props.forEach(function(G){X[G]=L}),ie.priority&&(B=1)),!ne||W)for(T in P)xr[T]&&(ie=eE(T,P,e,ee,F,C))?ie.priority&&(B=1):X[T]=L=N0.call(e,F,T,"get",P[T],ee,C,0,r.stringFilter);e._op&&e._op[R]&&e.kill(F,e._op[R]),I&&e._pt&&(zo=e,Rn.killTweensOf(F,X,e.globalTime(t)),H=!e.parent,zo=0),e._pt&&f&&(kg[z.id]=1)}B&&oE(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!H,m&&t<=0&&A.render(qr,!0,!0)},Z3=function(e,t,n,r,a,l,c,f){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,g,m,_;if(!d)for(d=e._ptCache[t]=[],m=e._ptLookup,_=e._targets.length;_--;){if(p=m[_][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Wg=1,e.vars[t]="+=0",I0(e,c),Wg=0,f?Xc(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(p)}for(_=d.length;_--;)g=d[_],p=g._pt||g,p.s=(r||r===0)&&!a?r:p.s+(r||0)+l*p.c,p.c=n-p.s,g.e&&(g.e=zn(n)+Di(g.e)),g.b&&(g.b=p.s+Di(g.b))},J3=function(e,t){var n=e[0]?Ia(e[0]).harness:0,r=n&&n.aliases,a,l,c,f;if(!r)return t;a=fu({},t);for(l in r)if(l in a)for(f=r[l].split(","),c=f.length;c--;)a[f[c]]=a[l];return a},Q3=function(e,t,n,r){var a=t.ease||r||"power1.inOut",l,c;if(Fi(t))c=n[e]||(n[e]=[]),t.forEach(function(f,d){return c.push({t:d/(t.length-1)*100,v:f,e:a})});else for(l in t)c=n[l]||(n[l]=[]),l==="ease"||c.push({t:parseFloat(e),v:t[l],e:a})},Pc=function(e,t,n,r,a){return On(e)?e.call(t,n,r,a):ci(e)&&~e.indexOf("random(")?qc(e):e},tE=P0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",nE={};ar(tE+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return nE[s]=1});var qn=(function(s){E1(e,s);function e(n,r,a,l){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=s.call(this,l?r:Cc(r))||this;var f=c.vars,d=f.duration,p=f.delay,g=f.immediateRender,m=f.stagger,_=f.overwrite,M=f.keyframes,E=f.defaults,x=f.scrollTrigger,y=r.parent||Rn,C=(Fi(n)||w1(n)?ao(n[0]):"length"in r)?[n]:$r(n),I,A,D,P,R,T,L,F;if(c._targets=C.length?D0(C):Xc("GSAP target "+n+" not found. https://gsap.com",!wr.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=_,M||m||Bd(d)||Bd(p)){r=c.vars;var B=r.easeReverse||r.yoyoEase;if(I=c.timeline=new rr({data:"nested",defaults:E||{},targets:y&&y.data==="nested"?y.vars.targets:C}),I.kill(),I.parent=I._dp=js(c),I._start=0,m||Bd(d)||Bd(p)){if(P=C.length,L=m&&H1(m),Is(m))for(R in m)~tE.indexOf(R)&&(F||(F={}),F[R]=m[R]);for(A=0;A<P;A++)D=Bh(r,nE),D.stagger=0,B&&(D.easeReverse=B),F&&fu(D,F),T=C[A],D.duration=+Pc(d,js(c),A,T,C),D.delay=(+Pc(p,js(c),A,T,C)||0)-c._delay,!m&&P===1&&D.delay&&(c._delay=p=D.delay,c._start+=p,D.delay=0),I.to(T,D,L?L(A,T,C):0),I._ease=Yt.none;I.duration()?d=p=0:c.timeline=0}else if(M){Cc(br(I.vars.defaults,{ease:"none"})),I._ease=Fa(M.ease||r.ease||"none");var z=0,ne,ie,X;if(Fi(M))M.forEach(function(ee){return I.to(C,ee,">")}),I.duration();else{D={};for(R in M)R==="ease"||R==="easeEach"||Q3(R,M[R],D,M.easeEach);for(R in D)for(ne=D[R].sort(function(ee,W){return ee.t-W.t}),z=0,A=0;A<ne.length;A++)ie=ne[A],X={ease:ie.e,duration:(ie.t-(A?ne[A-1].t:0))/100*d},X[R]=ie.v,I.to(C,X,z),z+=X.duration;I.duration()<d&&I.to({},{duration:d-I.duration()})}}d||c.duration(d=I.duration())}else c.timeline=0;return _===!0&&!T0&&(zo=js(c),Rn.killTweensOf(C),zo=0),Ts(y,js(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(g||!d&&!M&&c._start===Cn(y._time)&&or(g)&&R3(js(c))&&y.data!=="nested")&&(c._tTime=-cn,c.render(Math.max(0,-p)||0)),x&&k1(js(c),x),c}var t=e.prototype;return t.render=function(r,a,l){var c=this._time,f=this._tDur,d=this._dur,p=r<0,g=r>f-cn&&!p?f:r<cn?0:r,m,_,M,E,x,y,C,I;if(!d)D3(this,r,a,l);else if(g!==this._tTime||!r||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(m=g,I=this.timeline,this._repeat){if(E=d+this._rDelay,this._repeat<-1&&p)return this.totalTime(E*100+r,a,l);if(m=Cn(g%E),g===f?(M=this._repeat,m=d):(x=Cn(g/E),M=~~x,M&&M===x?(m=d,M--):m>d&&(m=d)),y=this._yoyo&&M&1,y&&(m=d-m),x=du(this._tTime,E),m===c&&!l&&this._initted&&M===x)return this._tTime=g,this;M!==x&&this.vars.repeatRefresh&&!y&&!this._lock&&m!==E&&this._initted&&(this._lock=l=1,this.render(Cn(E*M),!0).invalidate()._lock=0)}if(!this._initted){if(B1(this,p?r:m,l,a,g))return this._tTime=0,this;if(c!==this._time&&!(l&&this.vars.repeatRefresh&&M!==x))return this;if(d!==this._dur)return this.render(r,a,l)}if(this._rEase){var A=m<c;if(A!==this._inv){var D=A?c:d-c;this._inv=A,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=D?(A?-1:1)/D:0,this._invScale=A?-this.ratio:1-this.ratio,this._invEase=A?this._rEase:this._ease}this.ratio=C=this._invRatio+this._invScale*this._invEase((m-this._invTime)*this._invRecip)}else this.ratio=C=this._ease(m/d);if(this._from&&(this.ratio=C=1-C),this._tTime=g,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&g&&!a&&!x&&(Er(this,"onStart"),this._tTime!==g))return this;for(_=this._pt;_;)_.r(C,_.d),_=_._next;I&&I.render(r<0?r:I._dur*I._ease(m/this._dur),a,l)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(p&&Bg(this,r,a,l),Er(this,"onUpdate")),this._repeat&&M!==x&&this.vars.onRepeat&&!a&&this.parent&&Er(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(p&&!this._onUpdate&&Bg(this,r,!0,!0),(r||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Zo(this,1),!a&&!(p&&!c)&&(g||c||y)&&(Er(this,g===f?"onComplete":"onReverseComplete",!0),this._prom&&!(g<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,l,c,f){$c||Sr.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||I0(this,d),p=this._ease(d/this._dur),Z3(this,r,a,l,c,p,d,f)?this.resetTo(r,a,l,c,1):(sp(this,0),this.parent||F1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?yc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vi),this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,zo&&zo.vars.overwrite!==!0)._first||yc(this),this.parent&&l!==this.timeline.totalDuration()&&hu(this,this._dur*this.timeline._tDur/l,0,1),this}var c=this._targets,f=r?$r(r):c,d=this._ptLookup,p=this._pt,g,m,_,M,E,x,y;if((!a||a==="all")&&b3(c,f))return a==="all"&&(this._pt=0),yc(this);for(g=this._op=this._op||[],a!=="all"&&(ci(a)&&(E={},ar(a,function(C){return E[C]=1}),a=E),a=J3(c,a)),y=c.length;y--;)if(~f.indexOf(c[y])){m=d[y],a==="all"?(g[y]=a,M=m,_={}):(_=g[y]=g[y]||{},M=a);for(E in M)x=m&&m[E],x&&((!("kill"in x.d)||x.d.kill(E)===!0)&&ip(this,x,"_pt"),delete m[E]),_!=="all"&&(_[E]=1)}return this._initted&&!this._pt&&p&&yc(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Rc(1,arguments)},e.delayedCall=function(r,a,l,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:c})},e.fromTo=function(r,a,l){return Rc(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,l){return Rn.killTweensOf(r,a,l)},e})(Kc);br(qn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ar("staggerTo,staggerFrom,staggerFromTo",function(s){qn[s]=function(){var e=new rr,t=Vg.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var U0=function(e,t,n){return e[t]=n},iE=function(e,t,n){return e[t](n)},eD=function(e,t,n,r){return e[t](r.fp,n)},tD=function(e,t,n){return e.setAttribute(t,n)},F0=function(e,t){return On(e[t])?iE:w0(e[t])&&e.setAttribute?tD:U0},rE=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},nD=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},sE=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},O0=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},iD=function(e,t,n,r){for(var a=this._pt,l;a;)l=a._next,a.p===r&&a.modifier(e,t,n),a=l},rD=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ip(this,t,"_pt"):t.dep||(n=1),t=r;return!n},sD=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},oE=function(e){for(var t=e._pt,n,r,a,l;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:l)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:l=t,t=n}e._pt=a},lr=(function(){function s(t,n,r,a,l,c,f,d,p){this.t=n,this.s=a,this.c=l,this.p=r,this.r=c||rE,this.d=f||this,this.set=d||U0,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=sD,this.m=n,this.mt=a,this.tween=r},s})();ar(P0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return R0[s]=1});Ar.TweenMax=Ar.TweenLite=qn;Ar.TimelineLite=Ar.TimelineMax=rr;Rn=new rr({sortChildren:!1,defaults:Wc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wr.stringFilter=Z1;var Oa=[],ph={},oD=[],VS=0,aD=0,b_=function(e){return(ph[e]||oD).map(function(t){return t()})},Xg=function(){var e=Date.now(),t=[];e-VS>2&&(b_("matchMediaInit"),Oa.forEach(function(n){var r=n.queries,a=n.conditions,l,c,f,d;for(c in r)l=ys.matchMedia(r[c]).matches,l&&(f=1),l!==a[c]&&(a[c]=l,d=1);d&&(n.revert(),f&&t.push(n))}),b_("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),VS=e,b_("matchMedia"))},aE=(function(){function s(t,n){this.selector=n&&Hg(n),this.data=[],this._r=[],this.isReverted=!1,this.id=aD++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,r,a){On(n)&&(a=r,r=n,n=On);var l=this,c=function(){var d=En,p=l.selector,g;return d&&d!==l&&d.data.push(l),a&&(l.selector=Hg(a)),En=l,g=r.apply(l,arguments),On(g)&&l._r.push(g),En=d,l.selector=p,l.isReverted=!1,g};return l.last=c,n===On?c(l,function(f){return l.add(null,f)}):n?l[n]=c:c},e.ignore=function(n){var r=En;En=null,n(this),En=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof s?n.push.apply(n,r.getTweens()):r instanceof qn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?(function(){for(var c=a.getTweens(),f=a.data.length,d;f--;)d=a.data[f],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,g){return g.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=a.data.length;f--;)d=a.data[f],d instanceof rr?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof qn)&&d.revert&&d.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var l=Oa.length;l--;)Oa[l].id===this.id&&Oa.splice(l,1)},e.revert=function(n){this.kill(n||{})},s})(),lD=(function(){function s(t){this.contexts=[],this.scope=t,En&&En.data.push(this)}var e=s.prototype;return e.add=function(n,r,a){Is(n)||(n={matches:n});var l=new aE(0,a||this.scope),c=l.conditions={},f,d,p;En&&!l.selector&&(l.selector=En.selector),this.contexts.push(l),r=l.add("onMatch",r),l.queries=n;for(d in n)d==="all"?p=1:(f=ys.matchMedia(n[d]),f&&(Oa.indexOf(l)<0&&Oa.push(l),(c[d]=f.matches)&&(p=1),f.addListener?f.addListener(Xg):f.addEventListener("change",Xg)));return p&&r(l,function(g){return l.add(null,g)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},s})(),Vh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return $1(r)})},timeline:function(e){return new rr(e)},getTweensOf:function(e,t){return Rn.getTweensOf(e,t)},getProperty:function(e,t,n,r){ci(e)&&(e=$r(e)[0]);var a=Ia(e||{}).get,l=n?U1:I1;return n==="native"&&(n=""),e&&(t?l((xr[t]&&xr[t].get||a)(e,t,n,r)):function(c,f,d){return l((xr[c]&&xr[c].get||a)(e,c,f,d))})},quickSetter:function(e,t,n){if(e=$r(e),e.length>1){var r=e.map(function(p){return cr.quickSetter(p,t,n)}),a=r.length;return function(p){for(var g=a;g--;)r[g](p)}}e=e[0]||{};var l=xr[t],c=Ia(e),f=c.harness&&(c.harness.aliases||{})[t]||t,d=l?function(p){var g=new l;ql._pt=0,g.init(e,n?p+n:p,ql,0,[e]),g.render(1,g),ql._pt&&O0(1,ql)}:c.set(e,f);return l?d:function(p){return d(e,f,n?p+n:p,c,1)}},quickTo:function(e,t,n){var r,a=cr.to(e,br((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),l=function(f,d,p){return a.resetTo(t,f,d,p)};return l.tween=a,l},isTweening:function(e){return Rn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Fa(e.ease,Wc.ease)),FS(Wc,e||{})},config:function(e){return FS(wr,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,l=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!xr[c]&&!Ar[c]&&Xc(t+" effect requires "+c+" plugin.")}),E_[t]=function(c,f,d){return n($r(c),br(f||{},a),d)},l&&(rr.prototype[t]=function(c,f,d){return this.add(E_[t](c,Is(f)?f:(d=f)&&{},this),d)})},registerEase:function(e,t){Yt[e]=Fa(t)},parseEase:function(e,t){return arguments.length?Fa(e,t):Yt},getById:function(e){return Rn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new rr(e),r,a;for(n.smoothChildTiming=or(e.smoothChildTiming),Rn.remove(n),n._dp=0,n._time=n._tTime=Rn._time,r=Rn._first;r;)a=r._next,(t||!(!r._dur&&r instanceof qn&&r.vars.onComplete===r._targets[0]))&&Ts(n,r,r._start-r._delay),r=a;return Ts(Rn,n,0),n},context:function(e,t){return e?new aE(e,t):En},matchMedia:function(e){return new lD(e)},matchMediaRefresh:function(){return Oa.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Xg()},addEventListener:function(e,t){var n=ph[e]||(ph[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ph[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:B3,wrapYoyo:z3,distribute:H1,random:W1,snap:G1,normalize:k3,getUnit:Di,clamp:I3,splitColor:K1,toArray:$r,selector:Hg,mapRange:Y1,pipe:F3,unitize:O3,interpolate:V3,shuffle:V1},install:R1,effects:E_,ticker:Sr,updateRoot:rr.updateRoot,plugins:xr,globalTimeline:Rn,core:{PropTween:lr,globals:P1,Tween:qn,Timeline:rr,Animation:Kc,getCache:Ia,_removeLinkedListItem:ip,reverting:function(){return vi},context:function(e){return e&&En&&(En.data.push(e),e._ctx=En),En},suppressOverwrites:function(e){return T0=e}}};ar("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Vh[s]=qn[s]});Sr.add(rr.updateRoot);ql=Vh.to({},{duration:0});var uD=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},cD=function(e,t){var n=e._targets,r,a,l;for(r in t)for(a=n.length;a--;)l=e._ptLookup[a][r],l&&(l=l.d)&&(l._pt&&(l=uD(l,r)),l&&l.modifier&&l.modifier(t[r],e,n[a],r))},C_=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,l){l._onInit=function(c){var f,d;if(ci(a)&&(f={},ar(a,function(p){return f[p]=1}),a=f),t){f={};for(d in a)f[d]=t(a[d]);a=f}cD(c,a)}}}},cr=Vh.registerPlugin({name:"attr",init:function(e,t,n,r,a){var l,c,f;this.tween=n;for(l in t)f=e.getAttribute(l)||"",c=this.add(e,"setAttribute",(f||0)+"",t[l],r,a,0,0,l),c.op=l,c.b=f,this._props.push(l)},render:function(e,t){for(var n=t._pt;n;)vi?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},C_("roundProps",Gg),C_("modifiers"),C_("snap",G1))||Vh;qn.version=rr.version=cr.version="3.15.0";C1=1;A0()&&pu();Yt.Power0;Yt.Power1;Yt.Power2;Yt.Power3;Yt.Power4;Yt.Linear;Yt.Quad;Yt.Cubic;Yt.Quart;Yt.Quint;Yt.Strong;Yt.Elastic;Yt.Back;Yt.SteppedEase;Yt.Bounce;Yt.Sine;Yt.Expo;Yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var HS,Vo,eu,k0,La,GS,B0,fD=function(){return typeof window<"u"},lo={},Ta=180/Math.PI,tu=Math.PI/180,Fl=Math.atan2,WS=1e8,z0=/([A-Z])/g,dD=/(left|right|width|margin|padding|x)/i,hD=/[\s,\(]\S/,bs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pD=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mD=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_D=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gD=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},lE=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},uE=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},vD=function(e,t,n){return e.style[t]=n},xD=function(e,t,n){return e.style.setProperty(t,n)},yD=function(e,t,n){return e._gsap[t]=n},SD=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},MD=function(e,t,n,r,a){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(a,l)},ED=function(e,t,n,r,a){var l=e._gsap;l[t]=n,l.renderTransform(a,l)},Dn="transform",ur=Dn+"Origin",TD=function s(e,t){var n=this,r=this.target,a=r.style,l=r._gsap;if(e in lo&&a){if(this.tfm=this.tfm||{},e!=="transform")e=bs[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Zs(r,c)}):this.tfm[e]=l.x?l[e]:Zs(r,e),e===ur&&(this.tfm.zOrigin=l.zOrigin);else return bs.transform.split(",").forEach(function(c){return s.call(n,c,t)});if(this.props.indexOf(Dn)>=0)return;l.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ur,t,"")),e=Dn}(a||t)&&this.props.push(e,t,a[e])},cE=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},wD=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,l;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(z0,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)r[l]=this.tfm[l];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=B0(),(!a||!a.isStart)&&!n[Dn]&&(cE(n),r.zOrigin&&n[ur]&&(n[ur]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},fE=function(e,t){var n={target:e,props:[],revert:wD,save:TD};return e._gsap||cr.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},dE,qg=function(e,t){var n=Vo.createElementNS?Vo.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Vo.createElement(e);return n&&n.style?n:Vo.createElement(e)},Tr=function s(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(z0,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&s(e,mu(t)||t,1)||""},XS="O,Moz,ms,Ms,Webkit".split(","),mu=function(e,t,n){var r=t||La,a=r.style,l=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(XS[l]+e in a););return l<0?null:(l===3?"ms":l>=0?XS[l]:"")+e},$g=function(){fD()&&window.document&&(HS=window,Vo=HS.document,eu=Vo.documentElement,La=qg("div")||{style:{}},qg("div"),Dn=mu(Dn),ur=Dn+"Origin",La.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dE=!!mu("perspective"),B0=cr.core.reverting,k0=1)},YS=function(e){var t=e.ownerSVGElement,n=qg("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),eu.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),eu.removeChild(n),a},qS=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hE=function(e){var t,n;try{t=e.getBBox()}catch{t=YS(e),n=1}return t&&(t.width||t.height)||n||(t=YS(e)),t&&!t.width&&!t.x&&!t.y?{x:+qS(e,["x","cx","x1"])||0,y:+qS(e,["y","cy","y1"])||0,width:0,height:0}:t},pE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hE(e))},Jo=function(e,t){if(t){var n=e.style,r;t in lo&&t!==ur&&(t=Dn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(z0,"-$1").toLowerCase())):n.removeAttribute(t)}},Ho=function(e,t,n,r,a,l){var c=new lr(e._pt,t,n,0,1,l?uE:lE);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},$S={deg:1,rad:1,turn:1},AD={grid:1,flex:1},Qo=function s(e,t,n,r){var a=parseFloat(n)||0,l=(n+"").trim().substr((a+"").length)||"px",c=La.style,f=dD.test(t),d=e.tagName.toLowerCase()==="svg",p=(d?"client":"offset")+(f?"Width":"Height"),g=100,m=r==="px",_=r==="%",M,E,x,y;if(r===l||!a||$S[r]||$S[l])return a;if(l!=="px"&&!m&&(a=s(e,t,n,"px")),y=e.getCTM&&pE(e),(_||l==="%")&&(lo[t]||~t.indexOf("adius")))return M=y?e.getBBox()[f?"width":"height"]:e[p],zn(_?a/M*g:a/100*M);if(c[f?"width":"height"]=g+(m?l:r),E=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!d?e:e.parentNode,y&&(E=(e.ownerSVGElement||{}).parentNode),(!E||E===Vo||!E.appendChild)&&(E=Vo.body),x=E._gsap,x&&_&&x.width&&f&&x.time===Sr.time&&!x.uncache)return zn(a/x.width*g);if(_&&(t==="height"||t==="width")){var C=e.style[t];e.style[t]=g+r,M=e[p],C?e.style[t]=C:Jo(e,t)}else(_||l==="%")&&!AD[Tr(E,"display")]&&(c.position=Tr(e,"position")),E===e&&(c.position="static"),E.appendChild(La),M=La[p],E.removeChild(La),c.position="absolute";return f&&_&&(x=Ia(E),x.time=Sr.time,x.width=E[p]),zn(m?M*a/g:M&&a?g/M*a:0)},Zs=function(e,t,n,r){var a;return k0||$g(),t in bs&&t!=="transform"&&(t=bs[t],~t.indexOf(",")&&(t=t.split(",")[0])),lo[t]&&t!=="transform"?(a=Zc(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Gh(Tr(e,ur))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=Hh[t]&&Hh[t](e,t,n)||Tr(e,t)||L1(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Qo(e,t,a,n)+n:a},bD=function(e,t,n,r){if(!n||n==="none"){var a=mu(t,e,1),l=a&&Tr(e,a,1);l&&l!==n?(t=a,n=l):t==="borderColor"&&(n=Tr(e,"borderTopColor"))}var c=new lr(this._pt,e.style,t,0,1,sE),f=0,d=0,p,g,m,_,M,E,x,y,C,I,A,D;if(c.b=n,c.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Tr(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(E=e.style[t],e.style[t]=r,r=Tr(e,t)||r,E?e.style[t]=E:Jo(e,t)),p=[n,r],Z1(p),n=p[0],r=p[1],m=n.match(Yl)||[],D=r.match(Yl)||[],D.length){for(;g=Yl.exec(r);)x=g[0],C=r.substring(f,g.index),M?M=(M+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(M=1),x!==(E=m[d++]||"")&&(_=parseFloat(E)||0,A=E.substr((_+"").length),x.charAt(1)==="="&&(x=Ql(_,x)+A),y=parseFloat(x),I=x.substr((y+"").length),f=Yl.lastIndex-I.length,I||(I=I||wr.units[t]||A,f===r.length&&(r+=I,c.e+=I)),A!==I&&(_=Qo(e,t,E,I)||0),c._pt={_next:c._pt,p:C||d===1?C:",",s:_,c:y-_,m:M&&M<4||t==="zIndex"?Math.round:0});c.c=f<r.length?r.substring(f,r.length):""}else c.r=t==="display"&&r==="none"?uE:lE;return b1.test(r)&&(c.e=0),this._pt=c,c},KS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},CD=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=KS[n]||n,t[1]=KS[r]||r,t.join(" ")},RD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,l=n._gsap,c,f,d;if(a==="all"||a===!0)r.cssText="",f=1;else for(a=a.split(","),d=a.length;--d>-1;)c=a[d],lo[c]&&(f=1,c=c==="transformOrigin"?ur:Dn),Jo(n,c);f&&(Jo(n,Dn),l&&(l.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Zc(n,1),l.uncache=1,cE(r)))}},Hh={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var l=e._pt=new lr(e._pt,t,n,0,0,RD);return l.u=r,l.pr=-10,l.tween=a,e._props.push(n),1}}},jc=[1,0,0,1,0,0],mE={},_E=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},jS=function(e){var t=Tr(e,Dn);return _E(t)?jc:t.substr(7).match(A1).map(zn)},V0=function(e,t){var n=e._gsap||Ia(e),r=e.style,a=jS(e),l,c,f,d;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?jc:a):(a===jc&&!e.offsetParent&&e!==eu&&!n.svg&&(f=r.display,r.display="block",l=e.parentNode,(!l||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,c=e.nextElementSibling,eu.appendChild(e)),a=jS(e),f?r.display=f:Jo(e,"display"),d&&(c?l.insertBefore(e,c):l?l.appendChild(e):eu.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Kg=function(e,t,n,r,a,l){var c=e._gsap,f=a||V0(e,!0),d=c.xOrigin||0,p=c.yOrigin||0,g=c.xOffset||0,m=c.yOffset||0,_=f[0],M=f[1],E=f[2],x=f[3],y=f[4],C=f[5],I=t.split(" "),A=parseFloat(I[0])||0,D=parseFloat(I[1])||0,P,R,T,L;n?f!==jc&&(R=_*x-M*E)&&(T=A*(x/R)+D*(-E/R)+(E*C-x*y)/R,L=A*(-M/R)+D*(_/R)-(_*C-M*y)/R,A=T,D=L):(P=hE(e),A=P.x+(~I[0].indexOf("%")?A/100*P.width:A),D=P.y+(~(I[1]||I[0]).indexOf("%")?D/100*P.height:D)),r||r!==!1&&c.smooth?(y=A-d,C=D-p,c.xOffset=g+(y*_+C*E)-y,c.yOffset=m+(y*M+C*x)-C):c.xOffset=c.yOffset=0,c.xOrigin=A,c.yOrigin=D,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[ur]="0px 0px",l&&(Ho(l,c,"xOrigin",d,A),Ho(l,c,"yOrigin",p,D),Ho(l,c,"xOffset",g,c.xOffset),Ho(l,c,"yOffset",m,c.yOffset)),e.setAttribute("data-svg-origin",A+" "+D)},Zc=function(e,t){var n=e._gsap||new Q1(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,l="px",c="deg",f=getComputedStyle(e),d=Tr(e,ur)||"0",p,g,m,_,M,E,x,y,C,I,A,D,P,R,T,L,F,B,z,ne,ie,X,ee,W,H,G,U,k,j,Fe,Oe,De;return p=g=m=E=x=y=C=I=A=0,_=M=1,n.svg=!!(e.getCTM&&pE(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(r[Dn]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Dn]!=="none"?f[Dn]:"")),r.scale=r.rotate=r.translate="none"),R=V0(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),d=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Kg(e,W||d,!!W||n.originIsAbsolute,n.smooth!==!1,R)),D=n.xOrigin||0,P=n.yOrigin||0,R!==jc&&(B=R[0],z=R[1],ne=R[2],ie=R[3],p=X=R[4],g=ee=R[5],R.length===6?(_=Math.sqrt(B*B+z*z),M=Math.sqrt(ie*ie+ne*ne),E=B||z?Fl(z,B)*Ta:0,C=ne||ie?Fl(ne,ie)*Ta+E:0,C&&(M*=Math.abs(Math.cos(C*tu))),n.svg&&(p-=D-(D*B+P*ne),g-=P-(D*z+P*ie))):(De=R[6],Fe=R[7],U=R[8],k=R[9],j=R[10],Oe=R[11],p=R[12],g=R[13],m=R[14],T=Fl(De,j),x=T*Ta,T&&(L=Math.cos(-T),F=Math.sin(-T),W=X*L+U*F,H=ee*L+k*F,G=De*L+j*F,U=X*-F+U*L,k=ee*-F+k*L,j=De*-F+j*L,Oe=Fe*-F+Oe*L,X=W,ee=H,De=G),T=Fl(-ne,j),y=T*Ta,T&&(L=Math.cos(-T),F=Math.sin(-T),W=B*L-U*F,H=z*L-k*F,G=ne*L-j*F,Oe=ie*F+Oe*L,B=W,z=H,ne=G),T=Fl(z,B),E=T*Ta,T&&(L=Math.cos(T),F=Math.sin(T),W=B*L+z*F,H=X*L+ee*F,z=z*L-B*F,ee=ee*L-X*F,B=W,X=H),x&&Math.abs(x)+Math.abs(E)>359.9&&(x=E=0,y=180-y),_=zn(Math.sqrt(B*B+z*z+ne*ne)),M=zn(Math.sqrt(ee*ee+De*De)),T=Fl(X,ee),C=Math.abs(T)>2e-4?T*Ta:0,A=Oe?1/(Oe<0?-Oe:Oe):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!_E(Tr(e,Dn)),W&&e.setAttribute("transform",W))),Math.abs(C)>90&&Math.abs(C)<270&&(a?(_*=-1,C+=E<=0?180:-180,E+=E<=0?180:-180):(M*=-1,C+=C<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=g-((n.yPercent=g&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=m+l,n.scaleX=zn(_),n.scaleY=zn(M),n.rotation=zn(E)+c,n.rotationX=zn(x)+c,n.rotationY=zn(y)+c,n.skewX=C+c,n.skewY=I+c,n.transformPerspective=A+l,(n.zOrigin=parseFloat(d.split(" ")[2])||!t&&n.zOrigin||0)&&(r[ur]=Gh(d)),n.xOffset=n.yOffset=0,n.force3D=wr.force3D,n.renderTransform=n.svg?DD:dE?gE:PD,n.uncache=0,n},Gh=function(e){return(e=e.split(" "))[0]+" "+e[1]},R_=function(e,t,n){var r=Di(t);return zn(parseFloat(t)+parseFloat(Qo(e,"x",n+"px",r)))+r},PD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,gE(e,t)},Sa="0deg",dc="0px",Ma=") ",gE=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,l=n.x,c=n.y,f=n.z,d=n.rotation,p=n.rotationY,g=n.rotationX,m=n.skewX,_=n.skewY,M=n.scaleX,E=n.scaleY,x=n.transformPerspective,y=n.force3D,C=n.target,I=n.zOrigin,A="",D=y==="auto"&&e&&e!==1||y===!0;if(I&&(g!==Sa||p!==Sa)){var P=parseFloat(p)*tu,R=Math.sin(P),T=Math.cos(P),L;P=parseFloat(g)*tu,L=Math.cos(P),l=R_(C,l,R*L*-I),c=R_(C,c,-Math.sin(P)*-I),f=R_(C,f,T*L*-I+I)}x!==dc&&(A+="perspective("+x+Ma),(r||a)&&(A+="translate("+r+"%, "+a+"%) "),(D||l!==dc||c!==dc||f!==dc)&&(A+=f!==dc||D?"translate3d("+l+", "+c+", "+f+") ":"translate("+l+", "+c+Ma),d!==Sa&&(A+="rotate("+d+Ma),p!==Sa&&(A+="rotateY("+p+Ma),g!==Sa&&(A+="rotateX("+g+Ma),(m!==Sa||_!==Sa)&&(A+="skew("+m+", "+_+Ma),(M!==1||E!==1)&&(A+="scale("+M+", "+E+Ma),C.style[Dn]=A||"translate(0, 0)"},DD=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,l=n.x,c=n.y,f=n.rotation,d=n.skewX,p=n.skewY,g=n.scaleX,m=n.scaleY,_=n.target,M=n.xOrigin,E=n.yOrigin,x=n.xOffset,y=n.yOffset,C=n.forceCSS,I=parseFloat(l),A=parseFloat(c),D,P,R,T,L;f=parseFloat(f),d=parseFloat(d),p=parseFloat(p),p&&(p=parseFloat(p),d+=p,f+=p),f||d?(f*=tu,d*=tu,D=Math.cos(f)*g,P=Math.sin(f)*g,R=Math.sin(f-d)*-m,T=Math.cos(f-d)*m,d&&(p*=tu,L=Math.tan(d-p),L=Math.sqrt(1+L*L),R*=L,T*=L,p&&(L=Math.tan(p),L=Math.sqrt(1+L*L),D*=L,P*=L)),D=zn(D),P=zn(P),R=zn(R),T=zn(T)):(D=g,T=m,P=R=0),(I&&!~(l+"").indexOf("px")||A&&!~(c+"").indexOf("px"))&&(I=Qo(_,"x",l,"px"),A=Qo(_,"y",c,"px")),(M||E||x||y)&&(I=zn(I+M-(M*D+E*R)+x),A=zn(A+E-(M*P+E*T)+y)),(r||a)&&(L=_.getBBox(),I=zn(I+r/100*L.width),A=zn(A+a/100*L.height)),L="matrix("+D+","+P+","+R+","+T+","+I+","+A+")",_.setAttribute("transform",L),C&&(_.style[Dn]=L)},LD=function(e,t,n,r,a){var l=360,c=ci(a),f=parseFloat(a)*(c&&~a.indexOf("rad")?Ta:1),d=f-r,p=r+d+"deg",g,m;return c&&(g=a.split("_")[1],g==="short"&&(d%=l,d!==d%(l/2)&&(d+=d<0?l:-l)),g==="cw"&&d<0?d=(d+l*WS)%l-~~(d/l)*l:g==="ccw"&&d>0&&(d=(d-l*WS)%l-~~(d/l)*l)),e._pt=m=new lr(e._pt,t,n,r,d,pD),m.e=p,m.u="deg",e._props.push(n),m},ZS=function(e,t){for(var n in t)e[n]=t[n];return e},ND=function(e,t,n){var r=ZS({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",l=n.style,c,f,d,p,g,m,_,M;r.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),l[Dn]=t,c=Zc(n,1),Jo(n,Dn),n.setAttribute("transform",d)):(d=getComputedStyle(n)[Dn],l[Dn]=t,c=Zc(n,1),l[Dn]=d);for(f in lo)d=r[f],p=c[f],d!==p&&a.indexOf(f)<0&&(_=Di(d),M=Di(p),g=_!==M?Qo(n,f,d,M):parseFloat(d),m=parseFloat(p),e._pt=new lr(e._pt,c,f,g,m-g,Yg),e._pt.u=M||0,e._props.push(f));ZS(c,r)};ar("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",r="Bottom",a="Left",l=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?s+c:"border"+c+s});Hh[e>1?"border"+s:s]=function(c,f,d,p,g){var m,_;if(arguments.length<4)return m=l.map(function(M){return Zs(c,M,d)}),_=m.join(" "),_.split(m[0]).length===5?m[0]:_;m=(p+"").split(" "),_={},l.forEach(function(M,E){return _[M]=m[E]=m[E]||m[(E-1)/2|0]}),c.init(f,_,g)}});var vE={name:"css",register:$g,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var l=this._props,c=e.style,f=n.vars.startAt,d,p,g,m,_,M,E,x,y,C,I,A,D,P,R,T,L;k0||$g(),this.styles=this.styles||fE(e),T=this.styles.props,this.tween=n;for(E in t)if(E!=="autoRound"&&(p=t[E],!(xr[E]&&eE(E,t,n,r,e,a)))){if(_=typeof p,M=Hh[E],_==="function"&&(p=p.call(n,r,e,a),_=typeof p),_==="string"&&~p.indexOf("random(")&&(p=qc(p)),M)M(this,e,E,p,n)&&(R=1);else if(E.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(E)+"").trim(),p+="",qo.lastIndex=0,qo.test(d)||(x=Di(d),y=Di(p),y?x!==y&&(d=Qo(e,E,d,y)+y):x&&(p+=x)),this.add(c,"setProperty",d,p,r,a,0,0,E),l.push(E),T.push(E,0,c[E]);else if(_!=="undefined"){if(f&&E in f?(d=typeof f[E]=="function"?f[E].call(n,r,e,a):f[E],ci(d)&&~d.indexOf("random(")&&(d=qc(d)),Di(d+"")||d==="auto"||(d+=wr.units[E]||Di(Zs(e,E))||""),(d+"").charAt(1)==="="&&(d=Zs(e,E))):d=Zs(e,E),m=parseFloat(d),C=_==="string"&&p.charAt(1)==="="&&p.substr(0,2),C&&(p=p.substr(2)),g=parseFloat(p),E in bs&&(E==="autoAlpha"&&(m===1&&Zs(e,"visibility")==="hidden"&&g&&(m=0),T.push("visibility",0,c.visibility),Ho(this,c,"visibility",m?"inherit":"hidden",g?"inherit":"hidden",!g)),E!=="scale"&&E!=="transform"&&(E=bs[E],~E.indexOf(",")&&(E=E.split(",")[0]))),I=E in lo,I){if(this.styles.save(E),L=p,_==="string"&&p.substring(0,6)==="var(--"){if(p=Tr(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var F=e.style.perspective;e.style.perspective=p,p=Tr(e,"perspective"),F?e.style.perspective=F:Jo(e,"perspective")}g=parseFloat(p)}if(A||(D=e._gsap,D.renderTransform&&!t.parseTransform||Zc(e,t.parseTransform),P=t.smoothOrigin!==!1&&D.smooth,A=this._pt=new lr(this._pt,c,Dn,0,1,D.renderTransform,D,0,-1),A.dep=1),E==="scale")this._pt=new lr(this._pt,D,"scaleY",D.scaleY,(C?Ql(D.scaleY,C+g):g)-D.scaleY||0,Yg),this._pt.u=0,l.push("scaleY",E),E+="X";else if(E==="transformOrigin"){T.push(ur,0,c[ur]),p=CD(p),D.svg?Kg(e,p,0,P,0,this):(y=parseFloat(p.split(" ")[2])||0,y!==D.zOrigin&&Ho(this,D,"zOrigin",D.zOrigin,y),Ho(this,c,E,Gh(d),Gh(p)));continue}else if(E==="svgOrigin"){Kg(e,p,1,P,0,this);continue}else if(E in mE){LD(this,D,E,m,C?Ql(m,C+p):p);continue}else if(E==="smoothOrigin"){Ho(this,D,"smooth",D.smooth,p);continue}else if(E==="force3D"){D[E]=p;continue}else if(E==="transform"){ND(this,p,e);continue}}else E in c||(E=mu(E)||E);if(I||(g||g===0)&&(m||m===0)&&!hD.test(p)&&E in c)x=(d+"").substr((m+"").length),g||(g=0),y=Di(p)||(E in wr.units?wr.units[E]:x),x!==y&&(m=Qo(e,E,d,y)),this._pt=new lr(this._pt,I?D:c,E,m,(C?Ql(m,C+g):g)-m,!I&&(y==="px"||E==="zIndex")&&t.autoRound!==!1?gD:Yg),this._pt.u=y||0,I&&L!==p?(this._pt.b=d,this._pt.e=L,this._pt.r=_D):x!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=mD);else if(E in c)bD.call(this,e,E,d,C?C+p:p);else if(E in e)this.add(e,E,d||e[E],C?C+p:p,r,a);else if(E!=="parseTransform"){C0(E,p);continue}I||(E in c?T.push(E,0,c[E]):typeof e[E]=="function"?T.push(E,2,e[E]()):T.push(E,1,d||e[E])),l.push(E)}}R&&oE(this)},render:function(e,t){if(t.tween._time||!B0())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Zs,aliases:bs,getSetter:function(e,t,n){var r=bs[t];return r&&r.indexOf(",")<0&&(t=r),t in lo&&t!==ur&&(e._gsap.x||Zs(e,"x"))?n&&GS===n?t==="scale"?SD:yD:(GS=n||{})&&(t==="scale"?MD:ED):e.style&&!w0(e.style[t])?vD:~t.indexOf("-")?xD:F0(e,t)},core:{_removeProperty:Jo,_getMatrix:V0}};cr.utils.checkPrefix=mu;cr.core.getStyleSaver=fE;(function(s,e,t,n){var r=ar(s+","+e+","+t,function(a){lo[a]=1});ar(e,function(a){wr.units[a]="deg",mE[a]=1}),bs[r[13]]=s+","+e,ar(n,function(a){var l=a.split(":");bs[l[1]]=r[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ar("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){wr.units[s]="px"});cr.registerPlugin(vE);var Cr=cr.registerPlugin(vE)||cr;Cr.core.Tween;function ID(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function UD(s,e,t){return e&&ID(s.prototype,e),s}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gi,mh,Mr,Go,Wo,nu,xE,wa,iu,yE,to,ls,SE,ME=function(){return gi||typeof window<"u"&&(gi=window.gsap)&&gi.registerPlugin&&gi},EE=1,$l=[],zt=[],Ds=[],Dc=Date.now,jg=function(e,t){return t},FD=function(){var e=iu.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,zt),r.push.apply(r,Ds),zt=n,Ds=r,jg=function(l,c){return t[l](c)}},$o=function(e,t){return~Ds.indexOf(e)&&Ds[Ds.indexOf(e)+1][t]},Lc=function(e){return!!~yE.indexOf(e)},Vi=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},zi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},zd="scrollLeft",Vd="scrollTop",Zg=function(){return to&&to.isPressed||zt.cache++},Wh=function(e,t){var n=function r(a){if(a||a===0){EE&&(Mr.history.scrollRestoration="manual");var l=to&&to.isPressed;a=r.v=Math.round(a)||(to&&to.iOS?1:0),e(a),r.cacheID=zt.cache,l&&jg("ss",a)}else(t||zt.cache!==r.cacheID||jg("ref"))&&(r.cacheID=zt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},qi={s:zd,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wh(function(s){return arguments.length?Mr.scrollTo(s,Zn.sc()):Mr.pageXOffset||Go[zd]||Wo[zd]||nu[zd]||0})},Zn={s:Vd,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:qi,sc:Wh(function(s){return arguments.length?Mr.scrollTo(qi.sc(),s):Mr.pageYOffset||Go[Vd]||Wo[Vd]||nu[Vd]||0})},nr=function(e,t){return(t&&t._ctx&&t._ctx.selector||gi.utils.toArray)(e)[0]||(typeof e=="string"&&gi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},OD=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ea=function(e,t){var n=t.s,r=t.sc;Lc(e)&&(e=Go.scrollingElement||Wo);var a=zt.indexOf(e),l=r===Zn.sc?1:2;!~a&&(a=zt.push(e)-1),zt[a+l]||Vi(e,"scroll",Zg);var c=zt[a+l],f=c||(zt[a+l]=Wh($o(e,n),!0)||(Lc(e)?r:Wh(function(d){return arguments.length?e[n]=d:e[n]})));return f.target=e,c||(f.smooth=gi.getProperty(e,"scrollBehavior")==="smooth"),f},Jg=function(e,t,n){var r=e,a=e,l=Dc(),c=l,f=t||50,d=Math.max(500,f*3),p=function(M,E){var x=Dc();E||x-l>f?(a=r,r=M,c=l,l=x):n?r+=M:r=a+(M-a)/(x-c)*(l-c)},g=function(){a=r=n?0:r,c=l=0},m=function(M){var E=c,x=a,y=Dc();return(M||M===0)&&M!==r&&p(M),l===c||y-c>d?0:(r+(n?x:-x))/((n?y:l)-E)*1e3};return{update:p,reset:g,getVelocity:m}},hc=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},JS=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},TE=function(){iu=gi.core.globals().ScrollTrigger,iu&&iu.core&&FD()},wE=function(e){return gi=e||ME(),!mh&&gi&&typeof document<"u"&&document.body&&(Mr=window,Go=document,Wo=Go.documentElement,nu=Go.body,yE=[Mr,Go,Wo,nu],gi.utils.clamp,SE=gi.core.context||function(){},wa="onpointerenter"in nu?"pointer":"mouse",xE=Vn.isTouch=Mr.matchMedia&&Mr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ls=Vn.eventTypes=("ontouchstart"in Wo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Wo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return EE=0},500),mh=1),iu||TE(),mh};qi.op=Zn;zt.cache=0;var Vn=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){mh||wE(gi)||console.warn("Please gsap.registerPlugin(Observer)"),iu||TE();var r=n.tolerance,a=n.dragMinimum,l=n.type,c=n.target,f=n.lineHeight,d=n.debounce,p=n.preventDefault,g=n.onStop,m=n.onStopDelay,_=n.ignore,M=n.wheelSpeed,E=n.event,x=n.onDragStart,y=n.onDragEnd,C=n.onDrag,I=n.onPress,A=n.onRelease,D=n.onRight,P=n.onLeft,R=n.onUp,T=n.onDown,L=n.onChangeX,F=n.onChangeY,B=n.onChange,z=n.onToggleX,ne=n.onToggleY,ie=n.onHover,X=n.onHoverEnd,ee=n.onMove,W=n.ignoreCheck,H=n.isNormalizer,G=n.onGestureStart,U=n.onGestureEnd,k=n.onWheel,j=n.onEnable,Fe=n.onDisable,Oe=n.onClick,De=n.scrollSpeed,te=n.capture,ge=n.allowClicks,he=n.lockAxis,Me=n.onLockAxis;this.target=c=nr(c)||Wo,this.vars=n,_&&(_=gi.utils.toArray(_)),r=r||1e-9,a=a||0,M=M||1,De=De||1,l=l||"wheel,touch,pointer",d=d!==!1,f||(f=parseFloat(Mr.getComputedStyle(nu).lineHeight)||22);var Xe,We,pt,He,ot,ht,Qe,re=this,vt=0,Mt=0,Lt=n.passive||!p&&n.passive!==!1,it=ea(c,qi),Et=ea(c,Zn),Y=it(),Gt=Et(),Je=~l.indexOf("touch")&&!~l.indexOf("pointer")&&ls[0]==="pointerdown",O=Lc(c),w=c.ownerDocument||Go,Z=[0,0,0],se=[0,0,0],de=0,we=function(){return de=Dc()},Te=function(Se,Le){return(re.event=Se)&&_&&OD(Se.target,_)||Le&&Je&&Se.pointerType!=="touch"||W&&W(Se,Le)},me=function(){re._vx.reset(),re._vy.reset(),We.pause(),g&&g(re)},_e=function(){var Se=re.deltaX=JS(Z),Le=re.deltaY=JS(se),xe=Math.abs(Se)>=r,ut=Math.abs(Le)>=r;B&&(xe||ut)&&B(re,Se,Le,Z,se),xe&&(D&&re.deltaX>0&&D(re),P&&re.deltaX<0&&P(re),L&&L(re),z&&re.deltaX<0!=vt<0&&z(re),vt=re.deltaX,Z[0]=Z[1]=Z[2]=0),ut&&(T&&re.deltaY>0&&T(re),R&&re.deltaY<0&&R(re),F&&F(re),ne&&re.deltaY<0!=Mt<0&&ne(re),Mt=re.deltaY,se[0]=se[1]=se[2]=0),(He||pt)&&(ee&&ee(re),pt&&(x&&pt===1&&x(re),C&&C(re),pt=0),He=!1),ht&&!(ht=!1)&&Me&&Me(re),ot&&(k(re),ot=!1),Xe=0},Ie=function(Se,Le,xe){Z[xe]+=Se,se[xe]+=Le,re._vx.update(Se),re._vy.update(Le),d?Xe||(Xe=requestAnimationFrame(_e)):_e()},Ke=function(Se,Le){he&&!Qe&&(re.axis=Qe=Math.abs(Se)>Math.abs(Le)?"x":"y",ht=!0),Qe!=="y"&&(Z[2]+=Se,re._vx.update(Se,!0)),Qe!=="x"&&(se[2]+=Le,re._vy.update(Le,!0)),d?Xe||(Xe=requestAnimationFrame(_e)):_e()},ke=function(Se){if(!Te(Se,1)){Se=hc(Se,p);var Le=Se.clientX,xe=Se.clientY,ut=Le-re.x,et=xe-re.y,gt=re.isDragging;re.x=Le,re.y=xe,(gt||(ut||et)&&(Math.abs(re.startX-Le)>=a||Math.abs(re.startY-xe)>=a))&&(pt||(pt=gt?2:1),gt||(re.isDragging=!0),Ke(ut,et))}},Ne=re.onPress=function(ye){Te(ye,1)||ye&&ye.button||(re.axis=Qe=null,We.pause(),re.isPressed=!0,ye=hc(ye),vt=Mt=0,re.startX=re.x=ye.clientX,re.startY=re.y=ye.clientY,re._vx.reset(),re._vy.reset(),Vi(H?c:w,ls[1],ke,Lt,!0),re.deltaX=re.deltaY=0,I&&I(re))},Ce=re.onRelease=function(ye){if(!Te(ye,1)){zi(H?c:w,ls[1],ke,!0);var Se=!isNaN(re.y-re.startY),Le=re.isDragging,xe=Le&&(Math.abs(re.x-re.startX)>3||Math.abs(re.y-re.startY)>3),ut=hc(ye);!xe&&Se&&(re._vx.reset(),re._vy.reset(),p&&ge&&gi.delayedCall(.08,function(){if(Dc()-de>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(w.createEvent){var et=w.createEvent("MouseEvents");et.initMouseEvent("click",!0,!0,Mr,1,ut.screenX,ut.screenY,ut.clientX,ut.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(et)}}})),re.isDragging=re.isGesturing=re.isPressed=!1,g&&Le&&!H&&We.restart(!0),pt&&_e(),y&&Le&&y(re),A&&A(re,xe)}},rt=function(Se){return Se.touches&&Se.touches.length>1&&(re.isGesturing=!0)&&G(Se,re.isDragging)},$e=function(){return(re.isGesturing=!1)||U(re)},q=function(Se){if(!Te(Se)){var Le=it(),xe=Et();Ie((Le-Y)*De,(xe-Gt)*De,1),Y=Le,Gt=xe,g&&We.restart(!0)}},Re=function(Se){if(!Te(Se)){Se=hc(Se,p),k&&(ot=!0);var Le=(Se.deltaMode===1?f:Se.deltaMode===2?Mr.innerHeight:1)*M;Ie(Se.deltaX*Le,Se.deltaY*Le,0),g&&!H&&We.restart(!0)}},ve=function(Se){if(!Te(Se)){var Le=Se.clientX,xe=Se.clientY,ut=Le-re.x,et=xe-re.y;re.x=Le,re.y=xe,He=!0,g&&We.restart(!0),(ut||et)&&Ke(ut,et)}},Ue=function(Se){re.event=Se,ie(re)},Ve=function(Se){re.event=Se,X(re)},Ee=function(Se){return Te(Se)||hc(Se,p)&&Oe(re)};We=re._dc=gi.delayedCall(m||.25,me).pause(),re.deltaX=re.deltaY=0,re._vx=Jg(0,50,!0),re._vy=Jg(0,50,!0),re.scrollX=it,re.scrollY=Et,re.isDragging=re.isGesturing=re.isPressed=!1,SE(this),re.enable=function(ye){return re.isEnabled||(Vi(O?w:c,"scroll",Zg),l.indexOf("scroll")>=0&&Vi(O?w:c,"scroll",q,Lt,te),l.indexOf("wheel")>=0&&Vi(c,"wheel",Re,Lt,te),(l.indexOf("touch")>=0&&xE||l.indexOf("pointer")>=0)&&(Vi(c,ls[0],Ne,Lt,te),Vi(w,ls[2],Ce),Vi(w,ls[3],Ce),ge&&Vi(c,"click",we,!0,!0),Oe&&Vi(c,"click",Ee),G&&Vi(w,"gesturestart",rt),U&&Vi(w,"gestureend",$e),ie&&Vi(c,wa+"enter",Ue),X&&Vi(c,wa+"leave",Ve),ee&&Vi(c,wa+"move",ve)),re.isEnabled=!0,re.isDragging=re.isGesturing=re.isPressed=He=pt=!1,re._vx.reset(),re._vy.reset(),Y=it(),Gt=Et(),ye&&ye.type&&Ne(ye),j&&j(re)),re},re.disable=function(){re.isEnabled&&($l.filter(function(ye){return ye!==re&&Lc(ye.target)}).length||zi(O?w:c,"scroll",Zg),re.isPressed&&(re._vx.reset(),re._vy.reset(),zi(H?c:w,ls[1],ke,!0)),zi(O?w:c,"scroll",q,te),zi(c,"wheel",Re,te),zi(c,ls[0],Ne,te),zi(w,ls[2],Ce),zi(w,ls[3],Ce),zi(c,"click",we,!0),zi(c,"click",Ee),zi(w,"gesturestart",rt),zi(w,"gestureend",$e),zi(c,wa+"enter",Ue),zi(c,wa+"leave",Ve),zi(c,wa+"move",ve),re.isEnabled=re.isPressed=re.isDragging=!1,Fe&&Fe(re))},re.kill=re.revert=function(){re.disable();var ye=$l.indexOf(re);ye>=0&&$l.splice(ye,1),to===re&&(to=0)},$l.push(re),H&&Lc(c)&&(to=re),re.enable(E)},UD(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Vn.version="3.15.0";Vn.create=function(s){return new Vn(s)};Vn.register=wE;Vn.getAll=function(){return $l.slice()};Vn.getById=function(s){return $l.filter(function(e){return e.vars.id===s})[0]};ME()&&gi.registerPlugin(Vn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nt,Hl,Bt,sn,yr,Jt,H0,Xh,Jc,Nc,Mc,Hd,bi,op,Qg,Wi,QS,eM,Gl,AE,P_,bE,Gi,e0,CE,RE,Oo,t0,G0,ru,W0,Ic,n0,D_,Gd=1,Pi=Date.now,L_=Pi(),jr=0,Ec=0,tM=function(e,t,n){var r=vr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},nM=function(e,t){return t&&(!vr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},kD=function s(){return Ec&&requestAnimationFrame(s)},iM=function(){return op=1},rM=function(){return op=0},Ss=function(e){return e},Tc=function(e){return Math.round(e*1e5)/1e5||0},PE=function(){return typeof window<"u"},DE=function(){return nt||PE()&&(nt=window.gsap)&&nt.registerPlugin&&nt},Wa=function(e){return!!~H0.indexOf(e)},LE=function(e){return(e==="Height"?W0:Bt["inner"+e])||yr["client"+e]||Jt["client"+e]},NE=function(e){return $o(e,"getBoundingClientRect")||(Wa(e)?function(){return yh.width=Bt.innerWidth,yh.height=W0,yh}:function(){return Qs(e)})},BD=function(e,t,n){var r=n.d,a=n.d2,l=n.a;return(l=$o(e,"getBoundingClientRect"))?function(){return l()[r]}:function(){return(t?LE(a):e["client"+a])||0}},zD=function(e,t){return!t||~Ds.indexOf(e)?NE(e):function(){return yh}},Cs=function(e,t){var n=t.s,r=t.d2,a=t.d,l=t.a;return Math.max(0,(n="scroll"+r)&&(l=$o(e,n))?l()-NE(e)()[a]:Wa(e)?(yr[n]||Jt[n])-LE(r):e[n]-e["offset"+r])},Wd=function(e,t){for(var n=0;n<Gl.length;n+=3)(!t||~t.indexOf(Gl[n+1]))&&e(Gl[n],Gl[n+1],Gl[n+2])},vr=function(e){return typeof e=="string"},Li=function(e){return typeof e=="function"},wc=function(e){return typeof e=="number"},Aa=function(e){return typeof e=="object"},pc=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ol=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},kl=Math.abs,IE="left",UE="top",X0="right",Y0="bottom",ka="width",Ba="height",Uc="Right",Fc="Left",Oc="Top",kc="Bottom",Yn="padding",Hr="margin",_u="Width",q0="Height",jn="px",Gr=function(e){return Bt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},VD=function(e){var t=Gr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},sM=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Qs=function(e,t){var n=t&&Gr(e)[Qg]!=="matrix(1, 0, 0, 1, 0, 0)"&&nt.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Yh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},FE=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},HD=function(e){return function(t){return nt.utils.snap(FE(e),t)}},$0=function(e){var t=nt.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,l){l===void 0&&(l=.001);var c;if(!a)return t(r);if(a>0){for(r-=l,c=0;c<n.length;c++)if(n[c]>=r)return n[c];return n[c-1]}else for(c=n.length,r+=l;c--;)if(n[c]<=r)return n[c];return n[0]}:function(r,a,l){l===void 0&&(l=.001);var c=t(r);return!a||Math.abs(c-r)<l||c-r<0==a<0?c:t(a<0?r-e:r+e)}},GD=function(e){return function(t,n){return $0(FE(e))(t,n.direction)}},Xd=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},ui=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},li=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Yd=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},oM={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},qd={toggleActions:"play",anticipatePin:0},qh={top:0,left:0,center:.5,bottom:1,right:1},_h=function(e,t){if(vr(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in qh?qh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},$d=function(e,t,n,r,a,l,c,f){var d=a.startColor,p=a.endColor,g=a.fontSize,m=a.indent,_=a.fontWeight,M=sn.createElement("div"),E=Wa(n)||$o(n,"pinType")==="fixed",x=e.indexOf("scroller")!==-1,y=E?Jt:n.tagName==="IFRAME"?n.contentDocument.body:n,C=e.indexOf("start")!==-1,I=C?d:p,A="border-color:"+I+";font-size:"+g+";color:"+I+";font-weight:"+_+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return A+="position:"+((x||f)&&E?"fixed;":"absolute;"),(x||f||!E)&&(A+=(r===Zn?X0:Y0)+":"+(l+parseFloat(m))+"px;"),c&&(A+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),M._isStart=C,M.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),M.style.cssText=A,M.innerText=t||t===0?e+"-"+t:e,y.children[0]?y.insertBefore(M,y.children[0]):y.appendChild(M),M._offset=M["offset"+r.op.d2],gh(M,0,r,C),M},gh=function(e,t,n,r){var a={display:"block"},l=n[r?"os2":"p2"],c=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+l+_u]=1,a["border"+c+_u]=0,a[n.p]=t+"px",nt.set(e,a)},It=[],i0={},Qc,aM=function(){return Pi()-jr>34&&(Qc||(Qc=requestAnimationFrame(ro)))},Bl=function(){(!Gi||!Gi.isPressed||Gi.startX>Jt.clientWidth)&&(zt.cache++,Gi?Qc||(Qc=requestAnimationFrame(ro)):ro(),jr||Ya("scrollStart"),jr=Pi())},N_=function(){RE=Bt.innerWidth,CE=Bt.innerHeight},Ac=function(e){zt.cache++,(e===!0||!bi&&!bE&&!sn.fullscreenElement&&!sn.webkitFullscreenElement&&(!e0||RE!==Bt.innerWidth||Math.abs(Bt.innerHeight-CE)>Bt.innerHeight*.25))&&Xh.restart(!0)},Xa={},WD=[],OE=function s(){return li(Ut,"scrollEnd",s)||Na(!0)},Ya=function(e){return Xa[e]&&Xa[e].map(function(t){return t()})||WD},gr=[],kE=function(e){for(var t=0;t<gr.length;t+=5)(!e||gr[t+4]&&gr[t+4].query===e)&&(gr[t].style.cssText=gr[t+1],gr[t].getBBox&&gr[t].setAttribute("transform",gr[t+2]||""),gr[t+3].uncache=1)},BE=function(){return zt.forEach(function(e){return Li(e)&&++e.cacheID&&(e.rec=e())})},K0=function(e,t){var n;for(Wi=0;Wi<It.length;Wi++)n=It[Wi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ic=!0,t&&kE(t),t||Ya("revert")},zE=function(e,t){zt.cache++,(t||!Xi)&&zt.forEach(function(n){return Li(n)&&n.cacheID++&&(n.rec=0)}),vr(e)&&(Bt.history.scrollRestoration=G0=e)},Xi,za=0,lM,XD=function(){if(lM!==za){var e=lM=za;requestAnimationFrame(function(){return e===za&&Na(!0)})}},VE=function(){Jt.appendChild(ru),W0=!Gi&&ru.offsetHeight||Bt.innerHeight,Jt.removeChild(ru)},uM=function(e){return Jc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Na=function(e,t){if(yr=sn.documentElement,Jt=sn.body,H0=[Bt,sn,yr,Jt],jr&&!e&&!Ic){ui(Ut,"scrollEnd",OE);return}VE(),Xi=Ut.isRefreshing=!0,Ic||BE();var n=Ya("refreshInit");AE&&Ut.sort(),t||K0(),zt.forEach(function(r){Li(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),It.slice(0).forEach(function(r){return r.refresh()}),Ic=!1,It.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",l=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-l),r.refresh()}}),n0=1,uM(!0),It.forEach(function(r){var a=Cs(r.scroller,r._dir),l=r.vars.end==="max"||r._endClamp&&r.end>a,c=r._startClamp&&r.start>=a;(l||c)&&r.setPositions(c?a-1:r.start,l?Math.max(c?a:r.start+1,a):r.end,!0)}),uM(!1),n0=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),zt.forEach(function(r){Li(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),zE(G0,1),Xh.pause(),za++,Xi=2,ro(2),It.forEach(function(r){return Li(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Xi=Ut.isRefreshing=!1,Ya("refresh")},r0=0,vh=1,Bc,ro=function(e){if(e===2||!Xi&&!Ic){Ut.isUpdating=!0,Bc&&Bc.update(0);var t=It.length,n=Pi(),r=n-L_>=50,a=t&&It[0].scroll();if(vh=r0>a?-1:1,Xi||(r0=a),r&&(jr&&!op&&n-jr>200&&(jr=0,Ya("scrollEnd")),Mc=L_,L_=n),vh<0){for(Wi=t;Wi-- >0;)It[Wi]&&It[Wi].update(0,r);vh=1}else for(Wi=0;Wi<t;Wi++)It[Wi]&&It[Wi].update(0,r);Ut.isUpdating=!1}Qc=0},s0=[IE,UE,Y0,X0,Hr+kc,Hr+Uc,Hr+Oc,Hr+Fc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xh=s0.concat([ka,Ba,"boxSizing","max"+_u,"max"+q0,"position",Hr,Yn,Yn+Oc,Yn+Uc,Yn+kc,Yn+Fc]),YD=function(e,t,n){su(n);var r=e._gsap;if(r.spacerIsNative)su(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},I_=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=s0.length,l=t.style,c=e.style,f;a--;)f=s0[a],l[f]=n[f];l.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(l.display="inline-block"),c[Y0]=c[X0]="auto",l.flexBasis=n.flexBasis||"auto",l.overflow="visible",l.boxSizing="border-box",l[ka]=Yh(e,qi)+jn,l[Ba]=Yh(e,Zn)+jn,l[Yn]=c[Hr]=c[UE]=c[IE]="0",su(r),c[ka]=c["max"+_u]=n[ka],c[Ba]=c["max"+q0]=n[Ba],c[Yn]=n[Yn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},qD=/([A-Z])/g,su=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,l;for((e.t._gsap||nt.core.getCache(e.t)).uncache=1;r<n;r+=2)l=e[r+1],a=e[r],l?t[a]=l:t[a]&&t.removeProperty(a.replace(qD,"-$1").toLowerCase())}},Kd=function(e){for(var t=xh.length,n=e.style,r=[],a=0;a<t;a++)r.push(xh[a],n[xh[a]]);return r.t=e,r},$D=function(e,t,n){for(var r=[],a=e.length,l=n?8:0,c;l<a;l+=2)c=e[l],r.push(c,c in t?t[c]:e[l+1]);return r.t=e.t,r},yh={left:0,top:0},cM=function(e,t,n,r,a,l,c,f,d,p,g,m,_,M){Li(e)&&(e=e(f)),vr(e)&&e.substr(0,3)==="max"&&(e=m+(e.charAt(4)==="="?_h("0"+e.substr(3),n):0));var E=_?_.time():0,x,y,C;if(_&&_.seek(0),isNaN(e)||(e=+e),wc(e))_&&(e=nt.utils.mapRange(_.scrollTrigger.start,_.scrollTrigger.end,0,m,e)),c&&gh(c,n,r,!0);else{Li(t)&&(t=t(f));var I=(e||"0").split(" "),A,D,P,R;C=nr(t,f)||Jt,A=Qs(C)||{},(!A||!A.left&&!A.top)&&Gr(C).display==="none"&&(R=C.style.display,C.style.display="block",A=Qs(C),R?C.style.display=R:C.style.removeProperty("display")),D=_h(I[0],A[r.d]),P=_h(I[1]||"0",n),e=A[r.p]-d[r.p]-p+D+a-P,c&&gh(c,P,r,n-P<20||c._isStart&&P>20),n-=n-P}if(M&&(f[M]=e||-.001,e<0&&(e=0)),l){var T=e+n,L=l._isStart;x="scroll"+r.d2,gh(l,T,r,L&&T>20||!L&&(g?Math.max(Jt[x],yr[x]):l.parentNode[x])<=T+1),g&&(d=Qs(c),g&&(l.style[r.op.p]=d[r.op.p]-r.op.m-l._offset+jn))}return _&&C&&(x=Qs(C),_.seek(m),y=Qs(C),_._caScrollDist=x[r.p]-y[r.p],e=e/_._caScrollDist*m),_&&_.seek(E),_?e:Math.round(e)},KD=/(webkit|moz|length|cssText|inset)/i,fM=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,l,c;if(t===Jt){e._stOrig=a.cssText,c=Gr(e);for(l in c)!+l&&!KD.test(l)&&c[l]&&typeof a[l]=="string"&&l!=="0"&&(a[l]=c[l]);a.top=n,a.left=r}else a.cssText=e._stOrig;nt.core.getCache(e).uncache=1,t.appendChild(e)}},HE=function(e,t,n){var r=t,a=r;return function(l){var c=Math.round(e());return c!==r&&c!==a&&Math.abs(c-r)>3&&Math.abs(c-a)>3&&(l=c,n&&n()),a=r,r=Math.round(l),r}},jd=function(e,t,n){var r={};r[t.p]="+="+n,nt.set(e,r)},dM=function(e,t){var n=ea(e,t),r="_scroll"+t.p2,a=function l(c,f,d,p,g){var m=l.tween,_=f.onComplete,M={};d=d||n();var E=HE(n,d,function(){m.kill(),l.tween=0});return g=p&&g||0,p=p||c-d,m&&m.kill(),f[r]=c,f.inherit=!1,f.modifiers=M,M[r]=function(){return E(d+p*m.ratio+g*m.ratio*m.ratio)},f.onUpdate=function(){zt.cache++,l.tween&&ro()},f.onComplete=function(){l.tween=0,_&&_.call(m)},m=l.tween=nt.to(e,f),m};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},ui(e,"wheel",n.wheelHandler),Ut.isTouch&&ui(e,"touchmove",n.wheelHandler),a},Ut=(function(){function s(t,n){Hl||s.register(nt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),t0(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ec){this.update=this.refresh=this.kill=Ss;return}n=sM(vr(n)||wc(n)||n.nodeType?{trigger:n}:n,qd);var a=n,l=a.onUpdate,c=a.toggleClass,f=a.id,d=a.onToggle,p=a.onRefresh,g=a.scrub,m=a.trigger,_=a.pin,M=a.pinSpacing,E=a.invalidateOnRefresh,x=a.anticipatePin,y=a.onScrubComplete,C=a.onSnapComplete,I=a.once,A=a.snap,D=a.pinReparent,P=a.pinSpacer,R=a.containerAnimation,T=a.fastScrollEnd,L=a.preventOverlaps,F=n.horizontal||n.containerAnimation&&n.horizontal!==!1?qi:Zn,B=!g&&g!==0,z=nr(n.scroller||Bt),ne=nt.core.getCache(z),ie=Wa(z),X=("pinType"in n?n.pinType:$o(z,"pinType")||ie&&"fixed")==="fixed",ee=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=B&&n.toggleActions.split(" "),H="markers"in n?n.markers:qd.markers,G=ie?0:parseFloat(Gr(z)["border"+F.p2+_u])||0,U=this,k=n.onRefreshInit&&function(){return n.onRefreshInit(U)},j=BD(z,ie,F),Fe=zD(z,ie),Oe=0,De=0,te=0,ge=ea(z,F),he,Me,Xe,We,pt,He,ot,ht,Qe,re,vt,Mt,Lt,it,Et,Y,Gt,Je,O,w,Z,se,de,we,Te,me,_e,Ie,Ke,ke,Ne,Ce,rt,$e,q,Re,ve,Ue,Ve;if(U._startClamp=U._endClamp=!1,U._dir=F,x*=45,U.scroller=z,U.scroll=R?R.time.bind(R):ge,We=ge(),U.vars=n,r=r||n.animation,"refreshPriority"in n&&(AE=1,n.refreshPriority===-9999&&(Bc=U)),ne.tweenScroll=ne.tweenScroll||{top:dM(z,Zn),left:dM(z,qi)},U.tweenTo=he=ne.tweenScroll[F.p],U.scrubDuration=function(xe){rt=wc(xe)&&xe,rt?Ce?Ce.duration(xe):Ce=nt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:rt,paused:!0,onComplete:function(){return y&&y(U)}}):(Ce&&Ce.progress(1).kill(),Ce=0)},r&&(r.vars.lazy=!1,r._initted&&!U.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),U.animation=r.pause(),r.scrollTrigger=U,U.scrubDuration(g),ke=0,f||(f=r.vars.id)),A&&((!Aa(A)||A.push)&&(A={snapTo:A}),"scrollBehavior"in Jt.style&&nt.set(ie?[Jt,yr]:z,{scrollBehavior:"auto"}),zt.forEach(function(xe){return Li(xe)&&xe.target===(ie?sn.scrollingElement||yr:z)&&(xe.smooth=!1)}),Xe=Li(A.snapTo)?A.snapTo:A.snapTo==="labels"?HD(r):A.snapTo==="labelsDirectional"?GD(r):A.directional!==!1?function(xe,ut){return $0(A.snapTo)(xe,Pi()-De<500?0:ut.direction)}:nt.utils.snap(A.snapTo),$e=A.duration||{min:.1,max:2},$e=Aa($e)?Nc($e.min,$e.max):Nc($e,$e),q=nt.delayedCall(A.delay||rt/2||.1,function(){var xe=ge(),ut=Pi()-De<500,et=he.tween;if((ut||Math.abs(U.getVelocity())<10)&&!et&&!op&&Oe!==xe){var gt=(xe-He)/it,mn=r&&!B?r.totalProgress():gt,bt=ut?0:(mn-Ne)/(Pi()-Mc)*1e3||0,Qt=nt.utils.clamp(-gt,1-gt,kl(bt/2)*bt/.185),Hn=gt+(A.inertia===!1?0:Qt),ln,en,Ct=A,ti=Ct.onStart,tn=Ct.onInterrupt,ni=Ct.onComplete;if(ln=Xe(Hn,U),wc(ln)||(ln=Hn),en=Math.max(0,Math.round(He+ln*it)),xe<=ot&&xe>=He&&en!==xe){if(et&&!et._initted&&et.data<=kl(en-xe))return;A.inertia===!1&&(Qt=ln-gt),he(en,{duration:$e(kl(Math.max(kl(Hn-mn),kl(ln-mn))*.185/bt/.05||0)),ease:A.ease||"power3",data:kl(en-xe),onInterrupt:function(){return q.restart(!0)&&tn&&Ol(U,tn)},onComplete:function(){U.update(),Oe=ge(),r&&!B&&(Ce?Ce.resetTo("totalProgress",ln,r._tTime/r._tDur):r.progress(ln)),ke=Ne=r&&!B?r.totalProgress():U.progress,C&&C(U),ni&&Ol(U,ni)}},xe,Qt*it,en-xe-Qt*it),ti&&Ol(U,ti,he.tween)}}else U.isActive&&Oe!==xe&&q.restart(!0)}).pause()),f&&(i0[f]=U),m=U.trigger=nr(m||_!==!0&&_),Ve=m&&m._gsap&&m._gsap.stRevert,Ve&&(Ve=Ve(U)),_=_===!0?m:nr(_),vr(c)&&(c={targets:m,className:c}),_&&(M===!1||M===Hr||(M=!M&&_.parentNode&&_.parentNode.style&&Gr(_.parentNode).display==="flex"?!1:Yn),U.pin=_,Me=nt.core.getCache(_),Me.spacer?Et=Me.pinState:(P&&(P=nr(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),Me.spacerIsNative=!!P,P&&(Me.spacerState=Kd(P))),Me.spacer=Je=P||sn.createElement("div"),Je.classList.add("pin-spacer"),f&&Je.classList.add("pin-spacer-"+f),Me.pinState=Et=Kd(_)),n.force3D!==!1&&nt.set(_,{force3D:!0}),U.spacer=Je=Me.spacer,Ke=Gr(_),we=Ke[M+F.os2],w=nt.getProperty(_),Z=nt.quickSetter(_,F.a,jn),I_(_,Je,Ke),Gt=Kd(_)),H){Mt=Aa(H)?sM(H,oM):oM,re=$d("scroller-start",f,z,F,Mt,0),vt=$d("scroller-end",f,z,F,Mt,0,re),O=re["offset"+F.op.d2];var Ee=nr($o(z,"content")||z);ht=this.markerStart=$d("start",f,Ee,F,Mt,O,0,R),Qe=this.markerEnd=$d("end",f,Ee,F,Mt,O,0,R),R&&(Ue=nt.quickSetter([ht,Qe],F.a,jn)),!X&&!(Ds.length&&$o(z,"fixedMarkers")===!0)&&(VD(ie?Jt:z),nt.set([re,vt],{force3D:!0}),me=nt.quickSetter(re,F.a,jn),Ie=nt.quickSetter(vt,F.a,jn))}if(R){var ye=R.vars.onUpdate,Se=R.vars.onUpdateParams;R.eventCallback("onUpdate",function(){U.update(0,0,1),ye&&ye.apply(R,Se||[])})}if(U.previous=function(){return It[It.indexOf(U)-1]},U.next=function(){return It[It.indexOf(U)+1]},U.revert=function(xe,ut){if(!ut)return U.kill(!0);var et=xe!==!1||!U.enabled,gt=bi;et!==U.isReverted&&(et&&(Re=Math.max(ge(),U.scroll.rec||0),te=U.progress,ve=r&&r.progress()),ht&&[ht,Qe,re,vt].forEach(function(mn){return mn.style.display=et?"none":"block"}),et&&(bi=U,U.update(et)),_&&(!D||!U.isActive)&&(et?YD(_,Je,Et):I_(_,Je,Gr(_),Te)),et||U.update(et),bi=gt,U.isReverted=et)},U.refresh=function(xe,ut,et,gt){if(!((bi||!U.enabled)&&!ut)){if(_&&xe&&jr){ui(s,"scrollEnd",OE);return}!Xi&&k&&k(U),bi=U,he.tween&&!et&&(he.tween.kill(),he.tween=0),Ce&&Ce.pause(),E&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ye){return Ye.vars.immediateRender&&Ye.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var mn=j(),bt=Fe(),Qt=R?R.duration():Cs(z,F),Hn=it<=.01||!it,ln=0,en=gt||0,Ct=Aa(et)?et.end:n.end,ti=n.endTrigger||m,tn=Aa(et)?et.start:n.start||(n.start===0||!m?0:_?"0 0":"0 100%"),ni=U.pinnedContainer=n.pinnedContainer&&nr(n.pinnedContainer,U),ii=m&&Math.max(0,It.indexOf(U))||0,Tn=ii,_n,Nn,Rr,uo,Pt,wn,yi,N,Q,fe,ae,le,Be;for(H&&Aa(et)&&(le=nt.getProperty(re,F.p),Be=nt.getProperty(vt,F.p));Tn-- >0;)wn=It[Tn],wn.end||wn.refresh(0,1)||(bi=U),yi=wn.pin,yi&&(yi===m||yi===_||yi===ni)&&!wn.isReverted&&(fe||(fe=[]),fe.unshift(wn),wn.revert(!0,!0)),wn!==It[Tn]&&(ii--,Tn--);for(Li(tn)&&(tn=tn(U)),tn=tM(tn,"start",U),He=cM(tn,m,mn,F,ge(),ht,re,U,bt,G,X,Qt,R,U._startClamp&&"_startClamp")||(_?-.001:0),Li(Ct)&&(Ct=Ct(U)),vr(Ct)&&!Ct.indexOf("+=")&&(~Ct.indexOf(" ")?Ct=(vr(tn)?tn.split(" ")[0]:"")+Ct:(ln=_h(Ct.substr(2),mn),Ct=vr(tn)?tn:(R?nt.utils.mapRange(0,R.duration(),R.scrollTrigger.start,R.scrollTrigger.end,He):He)+ln,ti=m)),Ct=tM(Ct,"end",U),ot=Math.max(He,cM(Ct||(ti?"100% 0":Qt),ti,mn,F,ge()+ln,Qe,vt,U,bt,G,X,Qt,R,U._endClamp&&"_endClamp"))||-.001,ln=0,Tn=ii;Tn--;)wn=It[Tn]||{},yi=wn.pin,yi&&wn.start-wn._pinPush<=He&&!R&&wn.end>0&&(_n=wn.end-(U._startClamp?Math.max(0,wn.start):wn.start),(yi===m&&wn.start-wn._pinPush<He||yi===ni)&&isNaN(tn)&&(ln+=_n*(1-wn.progress)),yi===_&&(en+=_n));if(He+=ln,ot+=ln,U._startClamp&&(U._startClamp+=ln),U._endClamp&&!Xi&&(U._endClamp=ot||-.001,ot=Math.min(ot,Cs(z,F))),it=ot-He||(He-=.01)&&.001,Hn&&(te=nt.utils.clamp(0,1,nt.utils.normalize(He,ot,Re))),U._pinPush=en,ht&&ln&&(_n={},_n[F.a]="+="+ln,ni&&(_n[F.p]="-="+ge()),nt.set([ht,Qe],_n)),_&&!(n0&&U.end>=Cs(z,F)))_n=Gr(_),uo=F===Zn,Rr=ge(),se=parseFloat(w(F.a))+en,!Qt&&ot>1&&(ae=(ie?sn.scrollingElement||yr:z).style,ae={style:ae,value:ae["overflow"+F.a.toUpperCase()]},ie&&Gr(Jt)["overflow"+F.a.toUpperCase()]!=="scroll"&&(ae.style["overflow"+F.a.toUpperCase()]="scroll")),I_(_,Je,_n),Gt=Kd(_),Nn=Qs(_,!0),N=X&&ea(z,uo?qi:Zn)(),M?(Te=[M+F.os2,it+en+jn],Te.t=Je,Tn=M===Yn?Yh(_,F)+it+en:0,Tn&&(Te.push(F.d,Tn+jn),Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=Tn+jn)),su(Te),ni&&It.forEach(function(Ye){Ye.pin===ni&&Ye.vars.pinSpacing!==!1&&(Ye._subPinOffset=!0)}),X&&ge(Re)):(Tn=Yh(_,F),Tn&&Je.style.flexBasis!=="auto"&&(Je.style.flexBasis=Tn+jn)),X&&(Pt={top:Nn.top+(uo?Rr-He:N)+jn,left:Nn.left+(uo?N:Rr-He)+jn,boxSizing:"border-box",position:"fixed"},Pt[ka]=Pt["max"+_u]=Math.ceil(Nn.width)+jn,Pt[Ba]=Pt["max"+q0]=Math.ceil(Nn.height)+jn,Pt[Hr]=Pt[Hr+Oc]=Pt[Hr+Uc]=Pt[Hr+kc]=Pt[Hr+Fc]="0",Pt[Yn]=_n[Yn],Pt[Yn+Oc]=_n[Yn+Oc],Pt[Yn+Uc]=_n[Yn+Uc],Pt[Yn+kc]=_n[Yn+kc],Pt[Yn+Fc]=_n[Yn+Fc],Y=$D(Et,Pt,D),Xi&&ge(0)),r?(Q=r._initted,P_(1),r.render(r.duration(),!0,!0),de=w(F.a)-se+it+en,_e=Math.abs(it-de)>1,X&&_e&&Y.splice(Y.length-2,2),r.render(0,!0,!0),Q||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),P_(0)):de=it,ae&&(ae.value?ae.style["overflow"+F.a.toUpperCase()]=ae.value:ae.style.removeProperty("overflow-"+F.a));else if(m&&ge()&&!R)for(Nn=m.parentNode;Nn&&Nn!==Jt;)Nn._pinOffset&&(He-=Nn._pinOffset,ot-=Nn._pinOffset),Nn=Nn.parentNode;fe&&fe.forEach(function(Ye){return Ye.revert(!1,!0)}),U.start=He,U.end=ot,We=pt=Xi?Re:ge(),!R&&!Xi&&(We<Re&&ge(Re),U.scroll.rec=0),U.revert(!1,!0),De=Pi(),q&&(Oe=-1,q.restart(!0)),bi=0,r&&B&&(r._initted||ve)&&r.progress()!==ve&&r.progress(ve||0,!0).render(r.time(),!0,!0),(Hn||te!==U.progress||R||E||r&&!r._initted)&&(r&&!B&&(r._initted||te||r.vars.immediateRender!==!1)&&r.totalProgress(R&&He<-.001&&!te?nt.utils.normalize(He,ot,0):te,!0),U.progress=Hn||(We-He)/it===te?0:te),_&&M&&(Je._pinOffset=Math.round(U.progress*de)),Ce&&Ce.invalidate(),isNaN(le)||(le-=nt.getProperty(re,F.p),Be-=nt.getProperty(vt,F.p),jd(re,F,le),jd(ht,F,le-(gt||0)),jd(vt,F,Be),jd(Qe,F,Be-(gt||0))),Hn&&!Xi&&U.update(),p&&!Xi&&!Lt&&(Lt=!0,p(U),Lt=!1)}},U.getVelocity=function(){return(ge()-pt)/(Pi()-Mc)*1e3||0},U.endAnimation=function(){pc(U.callbackAnimation),r&&(Ce?Ce.progress(1):r.paused()?B||pc(r,U.direction<0,1):pc(r,r.reversed()))},U.labelToScroll=function(xe){return r&&r.labels&&(He||U.refresh()||He)+r.labels[xe]/r.duration()*it||0},U.getTrailing=function(xe){var ut=It.indexOf(U),et=U.direction>0?It.slice(0,ut).reverse():It.slice(ut+1);return(vr(xe)?et.filter(function(gt){return gt.vars.preventOverlaps===xe}):et).filter(function(gt){return U.direction>0?gt.end<=He:gt.start>=ot})},U.update=function(xe,ut,et){if(!(R&&!et&&!xe)){var gt=Xi===!0?Re:U.scroll(),mn=xe?0:(gt-He)/it,bt=mn<0?0:mn>1?1:mn||0,Qt=U.progress,Hn,ln,en,Ct,ti,tn,ni,ii;if(ut&&(pt=We,We=R?ge():gt,A&&(Ne=ke,ke=r&&!B?r.totalProgress():bt)),x&&_&&!bi&&!Gd&&jr&&(!bt&&He<gt+(gt-pt)/(Pi()-Mc)*x?bt=1e-4:bt===1&&ot>gt+(gt-pt)/(Pi()-Mc)*x&&(bt=.9999)),bt!==Qt&&U.enabled){if(Hn=U.isActive=!!bt&&bt<1,ln=!!Qt&&Qt<1,tn=Hn!==ln,ti=tn||!!bt!=!!Qt,U.direction=bt>Qt?1:-1,U.progress=bt,ti&&!bi&&(en=bt&&!Qt?0:bt===1?1:Qt===1?2:3,B&&(Ct=!tn&&W[en+1]!=="none"&&W[en+1]||W[en],ii=r&&(Ct==="complete"||Ct==="reset"||Ct in r))),L&&(tn||ii)&&(ii||g||!r)&&(Li(L)?L(U):U.getTrailing(L).forEach(function(Rr){return Rr.endAnimation()})),B||(Ce&&!bi&&!Gd?(Ce._dp._time-Ce._start!==Ce._time&&Ce.render(Ce._dp._time-Ce._start),Ce.resetTo?Ce.resetTo("totalProgress",bt,r._tTime/r._tDur):(Ce.vars.totalProgress=bt,Ce.invalidate().restart())):r&&r.totalProgress(bt,!!(bi&&(De||xe)))),_){if(xe&&M&&(Je.style[M+F.os2]=we),!X)Z(Tc(se+de*bt));else if(ti){if(ni=!xe&&bt>Qt&&ot+1>gt&&gt+1>=Cs(z,F),D)if(!xe&&(Hn||ni)){var Tn=Qs(_,!0),_n=gt-He;fM(_,Jt,Tn.top+(F===Zn?_n:0)+jn,Tn.left+(F===Zn?0:_n)+jn)}else fM(_,Je);su(Hn||ni?Y:Gt),_e&&bt<1&&Hn||Z(se+(bt===1&&!ni?de:0))}}A&&!he.tween&&!bi&&!Gd&&q.restart(!0),c&&(tn||I&&bt&&(bt<1||!D_))&&Jc(c.targets).forEach(function(Rr){return Rr.classList[Hn||I?"add":"remove"](c.className)}),l&&!B&&!xe&&l(U),ti&&!bi?(B&&(ii&&(Ct==="complete"?r.pause().totalProgress(1):Ct==="reset"?r.restart(!0).pause():Ct==="restart"?r.restart(!0):r[Ct]()),l&&l(U)),(tn||!D_)&&(d&&tn&&Ol(U,d),ee[en]&&Ol(U,ee[en]),I&&(bt===1?U.kill(!1,1):ee[en]=0),tn||(en=bt===1?1:3,ee[en]&&Ol(U,ee[en]))),T&&!Hn&&Math.abs(U.getVelocity())>(wc(T)?T:2500)&&(pc(U.callbackAnimation),Ce?Ce.progress(1):pc(r,Ct==="reverse"?1:!bt,1))):B&&l&&!bi&&l(U)}if(Ie){var Nn=R?gt/R.duration()*(R._caScrollDist||0):gt;me(Nn+(re._isFlipped?1:0)),Ie(Nn)}Ue&&Ue(-gt/R.duration()*(R._caScrollDist||0))}},U.enable=function(xe,ut){U.enabled||(U.enabled=!0,ui(z,"resize",Ac),ie||ui(z,"scroll",Bl),k&&ui(s,"refreshInit",k),xe!==!1&&(U.progress=te=0,We=pt=Oe=ge()),ut!==!1&&U.refresh())},U.getTween=function(xe){return xe&&he?he.tween:Ce},U.setPositions=function(xe,ut,et,gt){if(R){var mn=R.scrollTrigger,bt=R.duration(),Qt=mn.end-mn.start;xe=mn.start+Qt*xe/bt,ut=mn.start+Qt*ut/bt}U.refresh(!1,!1,{start:nM(xe,et&&!!U._startClamp),end:nM(ut,et&&!!U._endClamp)},gt),U.update()},U.adjustPinSpacing=function(xe){if(Te&&xe){var ut=Te.indexOf(F.d)+1;Te[ut]=parseFloat(Te[ut])+xe+jn,Te[1]=parseFloat(Te[1])+xe+jn,su(Te)}},U.disable=function(xe,ut){if(xe!==!1&&U.revert(!0,!0),U.enabled&&(U.enabled=U.isActive=!1,ut||Ce&&Ce.pause(),Re=0,Me&&(Me.uncache=1),k&&li(s,"refreshInit",k),q&&(q.pause(),he.tween&&he.tween.kill()&&(he.tween=0)),!ie)){for(var et=It.length;et--;)if(It[et].scroller===z&&It[et]!==U)return;li(z,"resize",Ac),ie||li(z,"scroll",Bl)}},U.kill=function(xe,ut){U.disable(xe,ut),Ce&&!ut&&Ce.kill(),f&&delete i0[f];var et=It.indexOf(U);et>=0&&It.splice(et,1),et===Wi&&vh>0&&Wi--,et=0,It.forEach(function(gt){return gt.scroller===U.scroller&&(et=1)}),et||Xi||(U.scroll.rec=0),r&&(r.scrollTrigger=null,xe&&r.revert({kill:!1}),ut||r.kill()),ht&&[ht,Qe,re,vt].forEach(function(gt){return gt.parentNode&&gt.parentNode.removeChild(gt)}),Bc===U&&(Bc=0),_&&(Me&&(Me.uncache=1),et=0,It.forEach(function(gt){return gt.pin===_&&et++}),et||(Me.spacer=0)),n.onKill&&n.onKill(U)},It.push(U),U.enable(!1,!1),Ve&&Ve(U),r&&r.add&&!it){var Le=U.update;U.update=function(){U.update=Le,zt.cache++,He||ot||U.refresh()},nt.delayedCall(.01,U.update),it=.01,He=ot=0}else U.refresh();_&&XD()},s.register=function(n){return Hl||(nt=n||DE(),PE()&&window.document&&s.enable(),Hl=Ec),Hl},s.defaults=function(n){if(n)for(var r in n)qd[r]=n[r];return qd},s.disable=function(n,r){Ec=0,It.forEach(function(l){return l[r?"kill":"disable"](n)}),li(Bt,"wheel",Bl),li(sn,"scroll",Bl),clearInterval(Hd),li(sn,"touchcancel",Ss),li(Jt,"touchstart",Ss),Xd(li,sn,"pointerdown,touchstart,mousedown",iM),Xd(li,sn,"pointerup,touchend,mouseup",rM),Xh.kill(),Wd(li);for(var a=0;a<zt.length;a+=3)Yd(li,zt[a],zt[a+1]),Yd(li,zt[a],zt[a+2])},s.enable=function(){if(Bt=window,sn=document,yr=sn.documentElement,Jt=sn.body,nt){if(Jc=nt.utils.toArray,Nc=nt.utils.clamp,t0=nt.core.context||Ss,P_=nt.core.suppressOverwrites||Ss,G0=Bt.history.scrollRestoration||"auto",r0=Bt.pageYOffset||0,nt.core.globals("ScrollTrigger",s),Jt){Ec=1,ru=document.createElement("div"),ru.style.height="100vh",ru.style.position="absolute",VE(),kD(),Vn.register(nt),s.isTouch=Vn.isTouch,Oo=Vn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),e0=Vn.isTouch===1,ui(Bt,"wheel",Bl),H0=[Bt,sn,yr,Jt],nt.matchMedia?(s.matchMedia=function(p){var g=nt.matchMedia(),m;for(m in p)g.add(m,p[m]);return g},nt.addEventListener("matchMediaInit",function(){BE(),K0()}),nt.addEventListener("matchMediaRevert",function(){return kE()}),nt.addEventListener("matchMedia",function(){Na(0,1),Ya("matchMedia")}),nt.matchMedia().add("(orientation: portrait)",function(){return N_(),N_})):console.warn("Requires GSAP 3.11.0 or later"),N_(),ui(sn,"scroll",Bl);var n=Jt.hasAttribute("style"),r=Jt.style,a=r.borderTopStyle,l=nt.core.Animation.prototype,c,f;for(l.revert||Object.defineProperty(l,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",c=Qs(Jt),Zn.m=Math.round(c.top+Zn.sc())||0,qi.m=Math.round(c.left+qi.sc())||0,a?r.borderTopStyle=a:r.removeProperty("border-top-style"),n||(Jt.setAttribute("style",""),Jt.removeAttribute("style")),Hd=setInterval(aM,250),nt.delayedCall(.5,function(){return Gd=0}),ui(sn,"touchcancel",Ss),ui(Jt,"touchstart",Ss),Xd(ui,sn,"pointerdown,touchstart,mousedown",iM),Xd(ui,sn,"pointerup,touchend,mouseup",rM),Qg=nt.utils.checkPrefix("transform"),xh.push(Qg),Hl=Pi(),Xh=nt.delayedCall(.2,Na).pause(),Gl=[sn,"visibilitychange",function(){var p=Bt.innerWidth,g=Bt.innerHeight;sn.hidden?(QS=p,eM=g):(QS!==p||eM!==g)&&Ac()},sn,"DOMContentLoaded",Na,Bt,"load",Na,Bt,"resize",Ac],Wd(ui),It.forEach(function(p){return p.enable(0,1)}),f=0;f<zt.length;f+=3)Yd(li,zt[f],zt[f+1]),Yd(li,zt[f],zt[f+2])}else if(sn){var d=function p(){s.enable(),sn.removeEventListener("DOMContentLoaded",p)};sn.addEventListener("DOMContentLoaded",d)}}},s.config=function(n){"limitCallbacks"in n&&(D_=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Hd)||(Hd=r)&&setInterval(aM,r),"ignoreMobileResize"in n&&(e0=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Wd(li)||Wd(ui,n.autoRefreshEvents||"none"),bE=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,r){var a=nr(n),l=zt.indexOf(a),c=Wa(a);~l&&zt.splice(l,c?6:2),r&&(c?Ds.unshift(Bt,r,Jt,r,yr,r):Ds.unshift(a,r))},s.clearMatchMedia=function(n){It.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},s.isInViewport=function(n,r,a){var l=(vr(n)?nr(n):n).getBoundingClientRect(),c=l[a?ka:Ba]*r||0;return a?l.right-c>0&&l.left+c<Bt.innerWidth:l.bottom-c>0&&l.top+c<Bt.innerHeight},s.positionInViewport=function(n,r,a){vr(n)&&(n=nr(n));var l=n.getBoundingClientRect(),c=l[a?ka:Ba],f=r==null?c/2:r in qh?qh[r]*c:~r.indexOf("%")?parseFloat(r)*c/100:parseFloat(r)||0;return a?(l.left+f)/Bt.innerWidth:(l.top+f)/Bt.innerHeight},s.killAll=function(n){if(It.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=Xa.killAll||[];Xa={},r.forEach(function(a){return a()})}},s})();Ut.version="3.15.0";Ut.saveStyles=function(s){return s?Jc(s).forEach(function(e){if(e&&e.style){var t=gr.indexOf(e);t>=0&&gr.splice(t,5),gr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),nt.core.getCache(e),t0())}}):gr};Ut.revert=function(s,e){return K0(!s,e)};Ut.create=function(s,e){return new Ut(s,e)};Ut.refresh=function(s){return s?Ac(!0):(Hl||Ut.register())&&Na(!0)};Ut.update=function(s){return++zt.cache&&ro(s===!0?2:0)};Ut.clearScrollMemory=zE;Ut.maxScroll=function(s,e){return Cs(s,e?qi:Zn)};Ut.getScrollFunc=function(s,e){return ea(nr(s),e?qi:Zn)};Ut.getById=function(s){return i0[s]};Ut.getAll=function(){return It.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Ut.isScrolling=function(){return!!jr};Ut.snapDirectional=$0;Ut.addEventListener=function(s,e){var t=Xa[s]||(Xa[s]=[]);~t.indexOf(e)||t.push(e)};Ut.removeEventListener=function(s,e){var t=Xa[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ut.batch=function(s,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,l=function(d,p){var g=[],m=[],_=nt.delayedCall(r,function(){p(g,m),g=[],m=[]}).pause();return function(M){g.length||_.restart(!0),g.push(M.trigger),m.push(M),a<=g.length&&_.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&Li(e[c])&&c!=="onRefreshInit"?l(c,e[c]):e[c];return Li(a)&&(a=a(),ui(Ut,"refresh",function(){return a=e.batchMax()})),Jc(s).forEach(function(f){var d={};for(c in n)d[c]=n[c];d.trigger=f,t.push(Ut.create(d))}),t};var hM=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},U_=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vn.isTouch?" pinch-zoom":""):"none",e===yr&&s(Jt,t)},Zd={auto:1,scroll:1},jD=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,l=a._gsap||nt.core.getCache(a),c=Pi(),f;if(!l._isScrollT||c-l._isScrollT>2e3){for(;a&&a!==Jt&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(Zd[(f=Gr(a)).overflowY]||Zd[f.overflowX]));)a=a.parentNode;l._isScroll=a&&a!==n&&!Wa(a)&&(Zd[(f=Gr(a)).overflowY]||Zd[f.overflowX]),l._isScrollT=c}(l._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},GE=function(e,t,n,r){return Vn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&jD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&ui(sn,Vn.eventTypes[0],mM,!1,!0)},onDisable:function(){return li(sn,Vn.eventTypes[0],mM,!0)}})},ZD=/(input|label|select|textarea)/i,pM,mM=function(e){var t=ZD.test(e.target.tagName);(t||pM)&&(e._gsapAllow=!0,pM=t)},JD=function(e){Aa(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,l=t.onRelease,c,f,d=nr(e.target)||yr,p=nt.core.globals().ScrollSmoother,g=p&&p.get(),m=Oo&&(e.content&&nr(e.content)||g&&e.content!==!1&&!g.smooth()&&g.content()),_=ea(d,Zn),M=ea(d,qi),E=1,x=(Vn.isTouch&&Bt.visualViewport?Bt.visualViewport.scale*Bt.visualViewport.width:Bt.outerWidth)/Bt.innerWidth,y=0,C=Li(r)?function(){return r(c)}:function(){return r||2.8},I,A,D=GE(d,e.type,!0,a),P=function(){return A=!1},R=Ss,T=Ss,L=function(){f=Cs(d,Zn),T=Nc(Oo?1:0,f),n&&(R=Nc(0,Cs(d,qi))),I=za},F=function(){m._gsap.y=Tc(parseFloat(m._gsap.y)+_.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",_.offset=_.cacheID=0},B=function(){if(A){requestAnimationFrame(P);var H=Tc(c.deltaY/2),G=T(_.v-H);if(m&&G!==_.v+_.offset){_.offset=G-_.v;var U=Tc((parseFloat(m&&m._gsap.y)||0)-_.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",m._gsap.y=U+"px",_.cacheID=zt.cache,ro()}return!0}_.offset&&F(),A=!0},z,ne,ie,X,ee=function(){L(),z.isActive()&&z.vars.scrollY>f&&(_()>f?z.progress(1)&&_(f):z.resetTo("scrollY",f))};return m&&nt.set(m,{y:"+=0"}),e.ignoreCheck=function(W){return Oo&&W.type==="touchmove"&&B()||E>1.05&&W.type!=="touchstart"||c.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){A=!1;var W=E;E=Tc((Bt.visualViewport&&Bt.visualViewport.scale||1)/x),z.pause(),W!==E&&U_(d,E>1.01?!0:n?!1:"x"),ne=M(),ie=_(),L(),I=za},e.onRelease=e.onGestureStart=function(W,H){if(_.offset&&F(),!H)X.restart(!0);else{zt.cache++;var G=C(),U,k;n&&(U=M(),k=U+G*.05*-W.velocityX/.227,G*=hM(M,U,k,Cs(d,qi)),z.vars.scrollX=R(k)),U=_(),k=U+G*.05*-W.velocityY/.227,G*=hM(_,U,k,Cs(d,Zn)),z.vars.scrollY=T(k),z.invalidate().duration(G).play(.01),(Oo&&z.vars.scrollY>=f||U>=f-1)&&nt.to({},{onUpdate:ee,duration:G})}l&&l(W)},e.onWheel=function(){z._ts&&z.pause(),Pi()-y>1e3&&(I=0,y=Pi())},e.onChange=function(W,H,G,U,k){if(za!==I&&L(),H&&n&&M(R(U[2]===H?ne+(W.startX-W.x):M()+H-U[1])),G){_.offset&&F();var j=k[2]===G,Fe=j?ie+W.startY-W.y:_()+G-k[1],Oe=T(Fe);j&&Fe!==Oe&&(ie+=Oe-Fe),_(Oe)}(G||H)&&ro()},e.onEnable=function(){U_(d,n?!1:"x"),Ut.addEventListener("refresh",ee),ui(Bt,"resize",ee),_.smooth&&(_.target.style.scrollBehavior="auto",_.smooth=M.smooth=!1),D.enable()},e.onDisable=function(){U_(d,!0),li(Bt,"resize",ee),Ut.removeEventListener("refresh",ee),D.kill()},e.lockAxis=e.lockAxis!==!1,c=new Vn(e),c.iOS=Oo,Oo&&!_()&&_(1),Oo&&nt.ticker.add(Ss),X=c._dc,z=nt.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:HE(_,_(),function(){return z.pause()})},onUpdate:ro,onComplete:X.vars.onComplete}),c};Ut.sort=function(s){if(Li(s))return It.sort(s);var e=Bt.pageYOffset||0;return Ut.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Bt.innerHeight}),It.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ut.observe=function(s){return new Vn(s)};Ut.normalizeScroll=function(s){if(typeof s>"u")return Gi;if(s===!0&&Gi)return Gi.enable();if(s===!1){Gi&&Gi.kill(),Gi=s;return}var e=s instanceof Vn?s:JD(s);return Gi&&Gi.target===e.target&&Gi.kill(),Wa(e.target)&&(Gi=e),e};Ut.core={_getVelocityProp:Jg,_inputObserver:GE,_scrollers:zt,_proxies:Ds,bridge:{ss:function(){jr||Ya("scrollStart"),jr=Pi()},ref:function(){return bi}}};DE()&&nt.registerPlugin(Ut);/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const ia=typeof window<"u",F_=ia?window:null,ef=ia?document:null,Pn={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},Vt={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Yr={NONE:0,AUTO:1,FORCE:2},Yi={replace:0,none:1,blend:2},_M=Symbol(),gu=Symbol(),WE=Symbol(),ap=Symbol(),QD=Symbol(),fn=1e-11,o0=1e12,vu=1e3,a0=240,xu="",eL="var(",Jd=[],XE=(()=>{const s=new Map;return s.set("x","translateX"),s.set("y","translateY"),s.set("z","translateZ"),s})(),$h=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],tL=$h.reduce((s,e)=>({...s,[e]:e+"("}),{}),zr=()=>{},nL=s=>s,iL=/\)\s*[-.\d]/,rL=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,sL=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,oL=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,aL=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,lL=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,gM=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,uL=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,cL=/([a-z])([A-Z])/g,fL=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Kh={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:a0,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:vu,delay:0,loopDelay:0,ease:"out(2)",composition:Yi.replace,modifier:nL,onBegin:zr,onBeforeUpdate:zr,onUpdate:zr,onLoop:zr,onPause:zr,onComplete:zr,onRender:zr},dL={root:ef},pi={defaults:Kh,precision:4,timeScale:1,tickThreshold:200},YE={version:"4.5.0",engine:null};ia&&(F_.AnimeJS||(F_.AnimeJS=[]),F_.AnimeJS.push(YE));/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const qE=s=>s.replace(cL,"$1-$2").toLowerCase(),Ko=(s,e)=>s.indexOf(e)===0,yu=Date.now,Su=Array.isArray,O_=s=>s&&s.constructor===Object,hL=s=>typeof s=="number"&&!isNaN(s),tf=s=>typeof s=="string",nf=s=>typeof s=="function",Un=s=>typeof s>"u",zc=s=>Un(s)||s===null,$E=s=>ia&&s instanceof SVGElement,KE=s=>rL.test(s),jE=s=>Ko(s,"rgb"),ZE=s=>Ko(s,"hsl"),pL=s=>KE(s)||(jE(s)||ZE(s))&&(s[s.length-1]===")"||!iL.test(s)),Sh=s=>!pi.defaults.hasOwnProperty(s),mL=["opacity","rotate","overflow","color"],_L=(s,e)=>{if(mL.includes(e))return!1;if(s.getAttribute(e)||e in s){if(e==="scale"){const t=s.parentNode;return t&&t.tagName==="filter"}return!0}},Wl=Math.pow,gL=Math.sqrt,vL=Math.sin,xL=Math.cos,yL=Math.floor,SL=Math.asin,j0=Math.PI,vM=Math.round,cs=(s,e,t)=>s<e?e:s>t?t:s,yn=(s,e)=>{if(e<0)return s;if(!e)return vM(s);const t=10**e;return vM(s*t)/t},Mh=(s,e,t)=>t===1?e:t===0?s:s+(e-s)*t,Z0=s=>s===1/0?o0:s===-1/0?-o0:s,Vc=s=>s<=fn?fn:Z0(yn(s,11)),Ci=s=>Su(s)?[...s]:s,ML=(s,e)=>{const t={...s};for(let n in e){const r=s[n];t[n]=Un(r)?e[n]:r}return t},Jn=(s,e,t,n="_prev",r="_next")=>{let a=s._head,l=r;for(t&&(a=s._tail,l=n);a;){const c=a[l];e(a),a=c}},bc=(s,e,t="_prev",n="_next")=>{const r=e[t],a=e[n];r?r[n]=a:s._head=a,a?a[t]=r:s._tail=r,e[t]=null,e[n]=null},Kl=(s,e,t,n="_prev",r="_next")=>{let a=s._tail;for(;a&&t&&t(a,e);)a=a[n];const l=a?a[r]:s._head;a?a[r]=e:s._head=e,l?l[n]=e:s._tail=e,e[n]=a,e[r]=l};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const EL=(s,e,t)=>{const n=s.style.transform;if(n){const r=s[ap];let a=0;const l=n.length;let c;for(;a<l;){for(;a<l&&n.charCodeAt(a)===32;)a++;if(a>=l)break;const d=a;for(;a<l&&n.charCodeAt(a)!==40;)a++;if(a>=l)break;const p=n.substring(d,a);let g=1;const m=a+1;let _=-1,M=-1;for(a++;a<l&&g>0;){const x=n.charCodeAt(a);x===40?g++:x===41?g--:x===44&&g===1&&(_===-1?_=a:M===-1&&(M=a)),a++}const E=a-1;p==="translate"||p==="translate3d"?(_===-1?r.translateX=n.substring(m,E).trim():(r.translateX=n.substring(m,_).trim(),M===-1?r.translateY=n.substring(_+1,E).trim():(r.translateY=n.substring(_+1,M).trim(),r.translateZ=n.substring(M+1,E).trim())),c=n.substring(m,E)):p==="scale"||p==="scale3d"?_===-1?r.scale=n.substring(m,E).trim():(r.scaleX=n.substring(m,_).trim(),M===-1?r.scaleY=n.substring(_+1,E).trim():(r.scaleY=n.substring(_+1,M).trim(),r.scaleZ=n.substring(M+1,E).trim())):r[p]=n.substring(m,E)}if(e==="translate3d"&&c)return t&&(t[e]=c),c;const f=r[e];if(!Un(f))return t&&(t[e]=f),f}return e==="translate3d"?"0px, 0px, 0px":e==="rotate3d"?"0, 0, 0, 0deg":Ko(e,"scale")?"1":Ko(e,"rotate")||Ko(e,"skew")?"0deg":"0px"},JE=s=>{let e=xu;for(let t=0,n=$h.length;t<n;t++){const r=$h[t],a=s[r];if(a!==void 0){if(r==="translateX"){const l=s.translateY;if(l!==void 0){const c=s.translateZ;c!==void 0?(e+=`translate3d(${a},${l},${c}) `,t+=2):(e+=`translate(${a},${l}) `,t+=1);continue}}if(r==="scaleX"&&s.scale===void 0){const l=s.scaleY;if(l!==void 0){const c=s.scaleZ;c!==void 0?(e+=`scale3d(${a},${l},${c}) `,t+=2):(e+=`scale(${a},${l}) `,t+=1);continue}}e+=`${tL[r]}${a}) `}r==="rotateZ"&&s.rotate3d!==void 0&&(e+=`rotate3d(${s.rotate3d}) `)}return s.matrix!==void 0&&(e+=`matrix(${s.matrix}) `),s.matrix3d!==void 0&&(e+=`matrix3d(${s.matrix3d}) `),e};/**
 * Anime.js - adapters - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const k_=[];function QE(s,e){if(!s)return null;const t=k_.length;e:for(let n=0;n<t;n++){const r=k_[n];if(r.detect&&!r.detect(s))continue;const a=r.targetAdapters;for(let l=0,c=a.length;l<c;l++){const f=a[l];if(f.detect(s)){const d=f.props[e];if(d&&(!d.gate||d.gate(s)))return d;break e}}}for(let n=0;n<t;n++){const r=k_[n];if(r.detect&&!r.detect(s))continue;const a=r.propertyResolvers;for(let l=0,c=a.length;l<c;l++){const f=a[l](s,e);if(f)return f}}return null}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const TL=s=>{const e=sL.exec(s)||oL.exec(s),t=Un(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],t]},wL=s=>{const e=s.length,t=e===4||e===5;return[+("0x"+s[1]+s[t?1:2]),+("0x"+s[t?2:3]+s[t?2:4]),+("0x"+s[t?3:5]+s[t?3:6]),e===5||e===9?+(+("0x"+s[t?4:7]+s[t?4:8])/255).toFixed(3):1]},B_=(s,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*(2/3-t)*6:s),AL=s=>{const e=aL.exec(s)||lL.exec(s),t=+e[1]/360,n=+e[2]/100,r=+e[3]/100,a=Un(e[4])?1:+e[4];let l,c,f;if(n===0)l=c=f=r;else{const d=r<.5?r*(1+n):r+n-r*n,p=2*r-d;l=yn(B_(p,d,t+1/3)*255,0),c=yn(B_(p,d,t)*255,0),f=yn(B_(p,d,t-1/3)*255,0)}return[l,c,f,a]},bL=s=>jE(s)?TL(s):KE(s)?wL(s):ZE(s)?AL(s):[0,0,0,1];/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const mi=(s,e)=>Un(s)?e:s,xM=(s,e)=>{var a;const t=s.match(fL),n=e[gu]?e:document.documentElement;let r=(a=getComputedStyle(n))==null?void 0:a.getPropertyValue(t[1]);return(!r||r.trim()===xu)&&t[2]&&(r=t[2].trim()),r||0},Ks=(s,e,t,n,r,a)=>{if(nf(s)){if(!r){const c=s(e,t,n,a);return isNaN(+c)?c||0:+c}const l=()=>{const c=s(e,t,n,a);return isNaN(+c)?c||0:+c};return r.func=l,l()}if(tf(s)&&Ko(s,eL)){if(!r)return xM(s,e);const l=()=>xM(s,e);return r.func=l,l()}return s},eT=(s,e)=>s[gu]?s[WE]&&_L(s,e)?Pn.ATTRIBUTE:$h.includes(e)||XE.get(e)?Pn.TRANSFORM:Ko(e,"--")?Pn.CSS_VAR:e in s.style?Pn.CSS:e in s?Pn.OBJECT:Pn.ATTRIBUTE:Pn.OBJECT,yM=(s,e,t)=>{const n=s.style[e];n&&t&&(t[e]=n);const r=n||getComputedStyle(s[QD]||s).getPropertyValue(e);return r==="auto"?"0":r},mc=(s,e,t,n)=>{const r=Un(t)?eT(s,e):t,a=QE(s,e);if(a){const l=a.get(s);return l&&n&&(n[e]=l),l??0}if(r===Pn.OBJECT){const l=s[e];return l&&n&&(n[e]=l),l||0}if(r===Pn.ATTRIBUTE){const l=s.getAttribute(e);return l&&n&&(n[e]=l),l}return r===Pn.TRANSFORM?EL(s,e,n):r===Pn.CSS_VAR?yM(s,e,n).trimStart():yM(s,e,n)},z_=(s,e,t)=>t==="-"?s-e:t==="+"?s+e:s*e,J0=()=>({t:Vt.NUMBER,n:0,u:null,o:null,d:null,s:null}),Or=(s,e)=>{if(e.t=Vt.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!s)return e;const t=+s;if(!isNaN(t))return e.n=t,e;let n=s;n[1]==="="&&(e.o=n[0],n=n.slice(2));const r=n.includes(" ")?!1:uL.exec(n);if(r)return e.t=Vt.UNIT,e.n=+r[1],e.u=r[2],e;if(e.o)return e.n=+n,e;if(pL(n))return e.t=Vt.COLOR,e.d=bL(n),e;{const a=n.match(gM);return e.t=Vt.COMPLEX,e.d=a?a.map(Number):[],e.s=n.split(gM)||[],e}},SM=(s,e)=>(e.t=s._valueType,e.n=s._toNumber,e.u=s._unit,e.o=null,e.d=Ci(s._toNumbers),e.s=Ci(s._strings),e),us=J0(),tT=(s,e,t)=>{const n=s._modifier,r=s._fromNumbers,a=s._toNumbers,l=s._strings;let c=l[0];for(let f=0,d=a.length;f<d;f++){const p=n(yn(Mh(r[f],a[f],e),t)),g=l[f+1];c+=`${g?p+g:p}`,s._numbers[f]=p}return c};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const Eh=(s,e,t,n,r)=>{const a=s.parent,l=s.duration,c=s.completed,f=s.iterationDuration,d=s.iterationCount,p=s._currentIteration,g=s._loopDelay,m=s._reversed,_=s._alternate,M=s._hasChildren,E=s._delay,x=s._currentTime,y=E+f,C=e-E,I=cs(x,-E,l),A=cs(C,-E,l),D=C-x,P=A>0,R=A>=l,T=l<=fn,L=r===Yr.FORCE;let F=0,B=C,z=0;if(d>1){const W=f+(R?0:g),H=~~(A/W);s._currentIteration=cs(H,0,d),R&&s._currentIteration--,F=s._currentIteration%2,B=A-H*W||0}const ne=m^(_&&F),ie=s._ease;let X=R?ne?0:l:ne?f-B:B;ie&&(X=f*ie(X/f)||0);const ee=(a?a.backwards:C<x)?!ne:!!ne;if(s._currentTime=C,s._iterationTime=X,s.backwards=ee,P&&!s.began?(s.began=!0,!t&&!(a&&(ee||!a.began))&&s.onBegin(s)):C<=0&&(s.began=!1),!t&&!M&&P&&s._currentIteration!==p&&s.onLoop(s),L||r===Yr.AUTO&&(e>=(a&&E>0?0:E)&&e<=y||e<=E&&I>E||e>=y&&I!==l)||X>=y&&I!==l||X<=E&&I>0&&!R||e<=I&&I===l&&c||R&&!c&&T){if(P&&(s.computeDeltaTime(I),t||s.onBeforeUpdate(s)),!M){const W=L||(ee?D*-1:D)>=pi.tickThreshold,H=yn(s._offset+(a?a._offset:0)+E+X,12);let G=s._head,U,k,j,Fe,Oe=0;for(;G;){const De=G._composition,te=G._currentTime,ge=G._changeDuration,he=G._absoluteStartTime+G._changeDuration,Me=G._nextRep,Xe=G._prevRep,We=De!==Yi.none,pt=Xe?Xe._absoluteStartTime+Xe._changeDuration:0,He=Xe&&Xe.parent!==G.parent,ot=!Me||Me._isOverridden?he:Me.parent===G.parent?he+Me._delay:Me._absoluteStartTime<Me._absoluteUpdateStartTime?Me._absoluteStartTime:Me._absoluteUpdateStartTime;if((W||(te!==ge||H<=ot||Xe&&!He&&(!Me||Me.parent!==G.parent))&&(te!==0||H>=G._absoluteStartTime||He&&!G._hasFromValue&&!Xe._isOverridden&&H>=pt||Me&&!Me._isOverridden&&Me.parent===G.parent&&Me._currentTime!==0&&X<Me._startTime))&&(!Xe||He||X>=G._startTime)&&(!We||!G._isOverridden&&(!G._isOverlapped||H<=he)&&(!Me||Me._isOverridden||H<=ot)&&(!Xe||Xe._isOverridden||(He?H>=G._absoluteStartTime||!G._hasFromValue&&H>=pt:H>=pt+G._delay)))){const ht=G._currentTime=cs(X-G._startTime,0,ge),Qe=G._ease(ht/G._updateDuration),re=G._modifier,vt=G._valueType,Mt=G._tweenType,Lt=Mt===Pn.OBJECT,it=vt===Vt.NUMBER,Et=it&&Lt||Qe===0||Qe===1?-1:pi.precision;let Y,Gt;if(it)Y=Gt=re(yn(Mh(G._fromNumber,G._toNumber,Qe),Et));else if(vt===Vt.UNIT)Gt=re(yn(Mh(G._fromNumber,G._toNumber,Qe),Et)),Y=`${Gt}${G._unit}`;else if(vt===Vt.COLOR){const Je=G._numbers,O=G._fromNumbers,w=G._toNumbers,Z=1-Qe,se=O[0],de=O[1],we=O[2],Te=w[0],me=w[1],_e=w[2];Je[0]=re(Math.sqrt(se*se*Z+Te*Te*Qe)),Je[1]=re(Math.sqrt(de*de*Z+me*me*Qe)),Je[2]=re(Math.sqrt(we*we*Z+_e*_e*Qe)),Je[3]=re(Mh(O[3],w[3],Qe)),(!G._setter||n)&&(Y=`rgba(${yn(Je[0],0)},${yn(Je[1],0)},${yn(Je[2],0)},${Je[3]})`)}else vt===Vt.COMPLEX&&(Y=tT(G,Qe,Et));if(We&&(G._number=Gt),!n&&De!==Yi.blend){const Je=G.property;U=G.target,G._setter?G._setter(U,Gt,G):Lt?U[Je]=Y:Mt===Pn.ATTRIBUTE?U.setAttribute(Je,Y):(k=U.style,Mt===Pn.TRANSFORM?(U!==j&&(j=U,Fe=U[ap]),Fe[Je]=Y,Oe=1):Mt===Pn.CSS?k[Je]=Y:Mt===Pn.CSS_VAR&&k.setProperty(Je,Y)),P&&(z=1)}else G._value=Y}else te&&Xe&&!He&&X<G._startTime&&(G._currentTime=0);Oe&&G._renderTransforms&&(k.transform=JE(Fe),Oe=0),G=G._next}!t&&z&&s.onRender(s)}!t&&P&&s.onUpdate(s)}return a&&T?!t&&(a.began&&!ee&&C>0&&!c||ee&&C<=fn&&c)&&(s.onComplete(s),s.completed=!ee):P&&R?d===1/0?s._startTime+=s.duration:s._currentIteration>=d-1&&(s.paused=!0,!c&&!M&&(s.completed=!0,!t&&!(a&&(ee||!a.began))&&(s.onComplete(s),s._resolve(s)))):s.completed=!1,z},Xl=(s,e,t,n,r)=>{const a=s._currentIteration;if(Eh(s,e,t,n,r),s._hasChildren){const l=s,c=l.backwards,f=n?e:l._iterationTime,d=yu();let p=0,g=!0;if(!n&&l._currentIteration!==a){const m=l.iterationDuration;Jn(l,_=>{if(!c)!_.completed&&!_.backwards&&_._currentTime<_.iterationDuration&&Eh(_,m,t,1,Yr.FORCE),_.began=!1,_.completed=!1;else{const M=_.duration,E=_._offset+_._delay,x=E+M;!t&&M<=fn&&(!E||x===m)&&_.onComplete(_)}}),t||l.onLoop(l)}Jn(l,m=>{const _=yn((f-m._offset)*m._speed,12);if(c&&_>m._delay+m.duration)return;const M=m._fps<l._fps?m.requestTick(d):r;p+=Eh(m,_,t,n,M),!m.completed&&g&&(g=!1)},c),!t&&p&&l.onRender(l),(g||c)&&l._currentTime>=l.duration&&(l.paused=!0,l.completed||(l.completed=!0,t||(l.onComplete(l),l._resolve(l))))}};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const MM={},CL=(s,e,t)=>{if(t===Pn.TRANSFORM){const n=XE.get(s);return n||s}else if(t===Pn.CSS||t===Pn.ATTRIBUTE&&$E(e)&&s in e.style){const n=MM[s];if(n)return n;{const r=s&&qE(s);return MM[s]=r,r}}else return s},nT=(s,e=!1)=>{if(s._hasChildren)Jn(s,t=>nT(t,e),!0);else{const t=s;t.pause(),Jn(t,n=>{const r=n.property,a=n.target,l=n._tweenType,c=n._inlineValue,f=zc(c)||c===xu;if(n._setter){if(!e&&!f){if(Or(c,us),us.d){const d=us.d,p=n._numbers;for(let g=0,m=d.length;g<m;g++)p[g]=d[g]}else n._number=us.n;n._setter(n.target,n._number,n)}}else if(l===Pn.OBJECT)!e&&!f&&(a[r]=c);else if(a[gu])if(l===Pn.ATTRIBUTE)e||(f?a.removeAttribute(r):a.setAttribute(r,c));else{const d=a.style;if(l===Pn.TRANSFORM){const p=a[ap];f?delete p[r]:p[r]=c,n._renderTransforms&&(Object.keys(p).length?d.transform=JE(p):d.removeProperty("transform"))}else f?d.removeProperty(qE(r)):d[r]=c}a[gu]&&t._tail===n&&t.targets.forEach(d=>{d.getAttribute&&d.getAttribute("style")===xu&&d.removeAttribute("style")})})}return s};/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */class iT{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=vu/a0,this._fps=a0,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){const t=+e,n=t<fn?fn:t,r=vu/n;n>Kh.frameRate&&(Kh.frameRate=n),this._fps=n,this._frameDuration=r}get speed(){return this._speed}set speed(e){const t=+e;this._speed=t<fn?fn:t}requestTick(e){const t=this._frameDuration,n=e-this._lastTickTime,r=t*.25,a=r<4?r:4;return n+a<t?Yr.NONE:(this._lastTickTime=n>=t?e-n%t:e,Yr.AUTO)}computeDeltaTime(e){const t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}}/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const ou={animation:null,update:zr},RL=s=>{let e=ou.animation;return e||(e={duration:fn,computeDeltaTime:zr,_offset:0,_delay:0,_head:null,_tail:null},ou.animation=e,ou.update=()=>{s.forEach(t=>{for(let n in t){const r=t[n],a=r._head;if(a){const l=a._valueType,c=l===Vt.COMPLEX||l===Vt.COLOR?Ci(a._fromNumbers):null;let f=a._fromNumber,d=r._tail;for(;d&&d!==a;){if(c)for(let p=0,g=d._numbers.length;p<g;p++)c[p]+=d._numbers[p];else f+=d._number;d=d._prevAdd}a._toNumber=f,a._toNumbers=c}}}),Eh(e,1,1,0,Yr.FORCE)}),e};/**
 * Anime.js - engine - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const rT=ia?requestAnimationFrame:setImmediate,PL=ia?cancelAnimationFrame:clearImmediate;class DL extends iT{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=Kh,this.paused=!0,this.reqId=0}update(){const e=this._currentTime=yu();if(this.requestTick(e)){this.computeDeltaTime(e);const t=this._speed,n=this._fps;let r=this._head;for(;r;){const a=r._next;r.paused?(bc(this,r),this._hasChildren=!!this._tail,r._running=!1,r.completed&&!r._cancelled&&r.cancel()):Xl(r,(e-r._startTime)*r._speed*t,0,0,r._fps<n?r.requestTick(e):Yr.AUTO),r=a}ou.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(yu()),this.reqId=rT(sT)),this}pause(){if(this.reqId)return this.paused=!0,LL()}resume(){if(this.paused)return this.paused=!1,Jn(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(pi.timeScale===1?1:vu)}set speed(e){const t=e*pi.timeScale;this._speed!==t&&(this._speed=t,Jn(this,n=>n.speed=n._speed))}get timeUnit(){return pi.timeScale===1?"ms":"s"}set timeUnit(e){const n=e==="s",r=n?.001:1;if(pi.timeScale!==r){pi.timeScale=r,pi.tickThreshold=200*r;const a=n?.001:vu;this.defaults.duration*=a,this._speed*=a}}get precision(){return pi.precision}set precision(e){pi.precision=e}}const Ri=(()=>{const s=new DL(yu());return ia&&(YE.engine=s,ef.addEventListener("visibilitychange",()=>{s.pauseOnDocumentHidden&&(ef.hidden?s.pause():s.resume())})),s})(),sT=()=>{Ri._head?(Ri.reqId=rT(sT),Ri.update()):Ri.reqId=0},LL=()=>(PL(Ri.reqId),Ri.reqId=0,Ri);/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const jh={_rep:new WeakMap,_add:new Map},Q0=(s,e,t="_rep")=>{const n=jh[t];let r=n.get(s);return r||(r={},n.set(s,r)),r[e]?r[e]:r[e]={_head:null,_tail:null}},NL=(s,e)=>s._isOverridden||s._absoluteStartTime>e._absoluteStartTime,Th=s=>{s._isOverlapped=1,s._isOverridden=1,s._changeDuration=fn,s._currentTime=fn},oT=(s,e)=>{const t=s._composition;if(t===Yi.replace){const n=s._absoluteStartTime;Kl(e,s,NL,"_prevRep","_nextRep");const r=s._prevRep;if(r){const a=r.parent,l=r._absoluteEndTime;if(s.parent.id!==a.id&&a.iterationCount>1&&l+(a.duration-a.iterationDuration)>n){Th(r);let d=r._prevRep;for(;d&&d.parent.id===a.id;)Th(d),d=d._prevRep}const c=s._absoluteUpdateStartTime;if(l>c){const d=r._startTime,p=l-(d+r._updateDuration),g=yn(c-p-d,12);r._changeDuration=g,r._currentTime=g,r._isOverlapped=1,g<fn&&Th(r)}const f=s.parent.parent;if(!f||f!==a.parent){let d=!0;if(Jn(a,p=>{p._isOverlapped||(d=!1)}),d){const p=a.parent;if(p){let g=!0;Jn(p,m=>{m!==a&&Jn(m,_=>{_._isOverlapped||(g=!1)})}),g&&p.cancel()}else a.cancel()}}}}else if(t===Yi.blend){const n=Q0(s.target,s.property,"_add"),r=RL(jh._add);let a=n._head;a||(a={...s},a._composition=Yi.replace,a._updateDuration=fn,a._startTime=0,a._numbers=Ci(s._fromNumbers),a._number=0,a._next=null,a._prev=null,Kl(n,a),Kl(r,a));const l=s._toNumber;if(s._fromNumber=a._fromNumber-l,s._toNumber=0,s._numbers=Ci(s._fromNumbers),s._number=0,a._fromNumber=l,s._toNumbers.length){const c=Ci(s._toNumbers);c.forEach((f,d)=>{s._fromNumbers[d]=a._fromNumbers[d]-f,s._toNumbers[d]=0}),a._fromNumbers=c}Kl(n,s,null,"_prevAdd","_nextAdd")}return s},IL=s=>{const e=s._composition;if(e!==Yi.none){const t=s.target,n=s.property,l=jh._rep.get(t)[n];if(bc(l,s,"_prevRep","_nextRep"),e===Yi.blend){const c=jh._add,f=c.get(t);if(!f)return;const d=f[n],p=ou.animation;bc(d,s,"_prevAdd","_nextAdd");const g=d._head;if(g&&g===d._tail){bc(d,g,"_prevAdd","_nextAdd"),bc(p,g);let m=!0;for(let _ in f)if(f[_]._head){m=!1;break}m&&c.delete(t)}}}return s};/**
 * Anime.js - timer - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const EM=s=>(s.paused=!0,s.began=!1,s.completed=!1,s),l0=s=>(s._cancelled&&(s._hasChildren?Jn(s,l0):Jn(s,e=>{e._composition!==Yi.none&&oT(e,Q0(e.target,e.property))}),s._cancelled=0),s);let TM=0;const UL=(s,e)=>s._priority>e._priority;class FL extends iT{constructor(e={},t=null,n=0){super(0),++TM;const{id:r,delay:a,duration:l,reversed:c,alternate:f,loop:d,loopDelay:p,autoplay:g,frameRate:m,playbackRate:_,priority:M,onComplete:E,onLoop:x,onPause:y,onBegin:C,onBeforeUpdate:I,onUpdate:A}=e,D=t?0:Ri._lastTickTime,P=t?t.defaults:pi.defaults,R=nf(a)||Un(a)?P.delay:+a,T=nf(l)||Un(l)?1/0:+l,L=mi(d,P.loop),F=mi(p,P.loopDelay);let B=L===!0||L===1/0||L<0?1/0:L+1,z=0;t?z=n:(Ri.reqId||Ri.requestTick(yu()),z=(Ri._lastTickTime-Ri._startTime)*pi.timeScale),this.id=Un(r)?TM:r,this.parent=t,this.duration=Z0((T+F)*B-F)||fn,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=C||P.onBegin,this.onBeforeUpdate=I||P.onBeforeUpdate,this.onUpdate=A||P.onUpdate,this.onLoop=x||P.onLoop,this.onPause=y||P.onPause,this.onComplete=E||P.onComplete,this.iterationDuration=T,this.iterationCount=B,this._autoplay=t?!1:mi(g,P.autoplay),this._offset=z,this._delay=R,this._loopDelay=F,this._iterationTime=0,this._currentIteration=0,this._resolve=zr,this._running=!1,this._reversed=+mi(c,P.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=mi(f,P.alternate),this._prev=null,this._next=null,this._lastTickTime=D,this._startTime=D,this._lastTime=D,this._fps=mi(m,P.frameRate),this._speed=mi(_,P.playbackRate),this._priority=+mi(M,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return cs(yn(this._currentTime,pi.precision),-this._delay,this.duration)}set currentTime(e){const t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return cs(yn(this._iterationTime,pi.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return cs(yn(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return cs(yn(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){const t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*cs(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return l0(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,Xl(this,0,1,~~e,Yr.FORCE),EM(this),this._hasChildren&&Jn(this,EM),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&Xl(this,this.duration,1,~~e,Yr.FORCE),this.reset(e);const t=this._autoplay;return t===!0?this.resume():t&&!Un(t.linked)&&t.link(this),this}resetTime(){const e=1/(this._speed*Ri._speed);return this._startTime=yu()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=fn&&!this._hasChildren?Xl(this,fn,0,0,Yr.FORCE):(this._running||(Kl(Ri,this,UL),Ri._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,Ri.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,n=0){l0(this),this.completed=!1;const r=this.paused;return this.paused=!0,Xl(this,e+this._delay,~~t,~~n,Yr.AUTO),r?this:this.resume()}alternate(){const e=this._reversed,t=this.iterationCount,n=this.iterationDuration,r=t===1/0?yL(o0/n):t;return this._reversed=+(this._alternate&&!(r%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(n*r-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?Jn(this,e=>e.cancel(),!0):Jn(this,IL),this._cancelled=1,this.pause()}stretch(e){const t=this.duration,n=Vc(e);if(t===n)return this;const r=e/t,a=e<=fn;return this.duration=a?fn:n,this.iterationDuration=a?fn:Vc(this.iterationDuration*r),this._offset*=r,this._delay*=r,this._loopDelay*=r,this}revert(){Xl(this,0,1,0,Yr.AUTO);const e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=zr){const t=this.then,n=()=>{this.then=null,e(this),this.then=t,this._resolve=zr};return new Promise(r=>(this._resolve=()=>r(n()),this.completed&&this._resolve(),this))}}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */function wM(s){const e=tf(s)?dL.root.querySelectorAll(s):s;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function OL(s){if(zc(s))return[];if(!ia)return Su(s)&&s.flat(1/0)||[s];if(Su(s)){const t=s.flat(1/0),n=[];for(let r=0,a=t.length;r<a;r++){const l=t[r];if(!zc(l)){const c=wM(l);if(c)for(let f=0,d=c.length;f<d;f++){const p=c[f];if(!zc(p)){let g=!1;for(let m=0,_=n.length;m<_;m++)if(n[m]===p){g=!0;break}g||n.push(p)}}else{let f=!1;for(let d=0,p=n.length;d<p;d++)if(n[d]===l){f=!0;break}f||n.push(l)}}}return n}const e=wM(s);return e?Array.from(e):[s]}function kL(s){const e=OL(s),t=e.length;for(let n=0;n<t;n++){const r=e[n];if(!r[_M]){r[_M]=!0;const a=$E(r);(r.nodeType||a)&&(r[gu]=!0,r[WE]=a,r[ap]={})}}return e}/**
 * Anime.js - core - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const V_={deg:1,rad:180/j0,turn:360},AM={},bM=(s,e,t,n=!1)=>{const r=e.u,a=e.n;if(e.t===Vt.UNIT&&r===t)return e;const l=a+r+t,c=AM[l];if(!Un(c)&&!n)e.n=c;else{let f;if(r in V_)f=a*V_[r]/V_[t];else{const p=s.cloneNode(),g=s.parentNode,m=g&&g!==ef?g:ef.body;m.appendChild(p);const _=p.style;_.width=100+r;const M=p.offsetWidth||100;_.width=100+t;const E=p.offsetWidth||100,x=M/E;m.removeChild(p),f=x*a}e.n=f,AM[l]=f}return e.t,Vt.UNIT,e.u=t,e};/**
 * Anime.js - easings - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const ta=s=>s;/**
 * Anime.js - easings - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const _c=(s=1.68)=>e=>Wl(e,+s),u0={in:s=>e=>s(e),out:s=>e=>1-s(1-e),inOut:s=>e=>e<.5?s(e*2)/2:1-s(e*-2+2)/2,outIn:s=>e=>e<.5?(1-s(1-e*2))/2:(s(e*2-1)+1)/2},BL=j0/2,CM=j0*2,RM={[xu]:_c,Quad:_c(2),Cubic:_c(3),Quart:_c(4),Quint:_c(5),Sine:s=>1-xL(s*BL),Circ:s=>1-gL(1-s*s),Expo:s=>s?Wl(2,10*s-10):0,Bounce:s=>{let e,t=4;for(;s<((e=Wl(2,--t))-1)/11;);return 1/Wl(4,3-t)-7.5625*Wl((e*3-2)/22-s,2)},Back:(s=1.7)=>e=>(+s+1)*e*e*e-+s*e*e,Elastic:(s=1,e=.3)=>{const t=cs(+s,1,10),n=cs(+e,fn,2),r=n/CM*SL(1/t),a=CM/n;return l=>l===0||l===1?l:-t*Wl(2,-10*(1-l))*vL((1-l-r)*a)}},H_=(()=>{const s={linear:ta,none:ta};for(let e in u0)for(let t in RM){const n=RM[t],r=u0[e];s[e+t]=t===xu||t==="Back"||t==="Elastic"?(a,l)=>r(n(a,l)):r(n)}return s})(),Qd={linear:ta,none:ta},zL=s=>{if(Qd[s])return Qd[s];if(s.indexOf("(")<=-1){const t=u0[s]||s.includes("Back")||s.includes("Elastic")?H_[s]():H_[s];return t?Qd[s]=t:ta}else{const e=s.slice(0,-1).split("("),t=H_[e[0]];return t?Qd[s]=t(...e[1].split(",")):ta}},PM=["steps(","irregular(","linear(","cubicBezier("],DM=s=>{if(tf(s)){for(let t=0,n=PM.length;t<n;t++)if(Ko(s,PM[t]))return console.warn(`String syntax for \`ease: "${s}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${s}\``),ta}return nf(s)?s:tf(s)?zL(s):ta};/**
 * Anime.js - animation - ESM
 * @version v4.5.0
 * @license MIT
 * @copyright 2026 - Julian Garnier
 */const St=J0(),Rt=J0(),zl={},eh={func:null},th={func:null},nh=[null],Vl=[null,null],ih={to:null};let VL=0,LM=0,Fo,xs;const HL=(s,e)=>{const t={};if(Su(s)){const n=[].concat(...s.map(r=>Object.keys(r))).filter(Sh);for(let r=0,a=n.length;r<a;r++){const l=n[r],c=s.map(f=>{const d={};for(let p in f){const g=f[p];Sh(p)?p===l&&(d.to=g):d[p]=g}return d});t[l]=c}}else{const n=mi(e.duration,pi.defaults.duration);Object.keys(s).map(a=>({o:parseFloat(a)/100,p:s[a]})).sort((a,l)=>a.o-l.o).forEach(a=>{const l=a.o,c=a.p;for(let f in c)if(Sh(f)){let d=t[f];d||(d=t[f]=[]);const p=l*n;let g=d.length,m=d[g-1];const _={to:c[f]};let M=0;for(let E=0;E<g;E++)M+=d[E].duration;g===1&&(_.from=m.to),c.ease&&(_.ease=c.ease),_.duration=p-(g?M:0),d.push(_)}return a});for(let a in t){const l=t[a];let c;for(let f=0,d=l.length;f<d;f++){const p=l[f],g=p.ease;p.ease=c||void 0,c=g}l[0].duration||l.shift()}}return t};class GL extends FL{constructor(e,t,n,r,a=!1,l=0,c){super(t,n,r),this._head,this._tail,++LM;const f=kL(e),d=f.length,p=t.keyframes,g=p?ML(HL(p,t),t):t,{id:m,delay:_,duration:M,ease:E,playbackEase:x,modifier:y,composition:C,onRender:I}=g,A=n?n.defaults:pi.defaults,D=mi(E,A.ease),P=mi(x,A.playbackEase),R=P?DM(P):null,T=!Un(D.ease),L=T?D.ease:mi(E,R?"linear":A.ease),F=T?D.settlingDuration:mi(M,A.duration),B=mi(_,A.delay),z=y||A.modifier,ne=Un(C)&&d>=vu?Yi.none:Un(C)?A.composition:C,ie=this._offset+(n?n._offset:0);T&&(D.parent=this);let X=NaN,ee=NaN,W=0,H=0;for(let G=0;G<d;G++){const U=f[G],k=l||G,j=c||f;let Fe=NaN,Oe=NaN;for(let De in g)if(Sh(De)){const te=eT(U,De),ge=QE(U,De),he=CL(De,U,te);let Me=g[De];const Xe=Su(Me);if(a&&!Xe&&(Vl[0]=Me,Vl[1]=Me,Me=Vl),Xe){const Qe=Me.length,re=!O_(Me[0]);Qe===2&&re?(ih.to=Me,nh[0]=ih,Fo=nh):Qe>2&&re?(Fo=[],Me.forEach((vt,Mt)=>{Mt?Mt===1?(Vl[1]=vt,Fo.push(Vl)):Fo.push(vt):Vl[0]=vt})):Fo=Me}else nh[0]=Me,Fo=nh;let We=null,pt=null,He=NaN,ot=0,ht=0;for(let Qe=Fo.length;ht<Qe;ht++){const re=Fo[ht];O_(re)?xs=re:(ih.to=re,xs=ih),eh.func=null,th.func=null;const vt=Ks(mi(xs.composition,ne),U,k,j,null,null),Mt=hL(vt)?vt:Yi[vt];!We&&Mt!==Yi.none&&(We=Q0(U,he));const Lt=We?We._tail:null,it=n&&Lt&&Lt.parent.parent===n?Lt:pt,Et=Ks(xs.to,U,k,j,eh,it);let Y;O_(Et)&&!Un(Et.to)?(xs=Et,Y=Et.to):Y=Et;const Gt=Ks(xs.from,U,k,j,th,it),Je=xs.ease||L,O=Ks(Je,U,k,j,null,it),w=nf(O)||tf(O)?O:Je,Z=!Un(w)&&!Un(w.ease),se=Z?w.ease:w,de=Z?w.settlingDuration:Ks(mi(xs.duration,Qe>1?Ks(F,U,k,j,null,it)/Qe:F),U,k,j,null,it),we=Ks(mi(xs.delay,ht?0:B),U,k,j,null,it),Te=xs.modifier||z,me=!Un(Gt),_e=!Un(Y),Ie=Su(Y),Ke=Ie||me&&_e,ke=pt?ot:0,Ne=pt?ot+we:we,Ce=yn(ie+Ne,12),rt=yn(ie+ke,12);!H&&(me||Ie)&&(H=1);let $e=pt;if(Mt!==Yi.none){let Le=We._head;for(;Le&&Le._absoluteStartTime<=Ce;)if(Le._isOverridden||($e=Le),Le=Le._nextRep,Le&&Le._absoluteStartTime>=Ce)for(;Le;)Th(Le),Le=Le._nextRep}if(Ke){Or(Ie?Ks(Y[0],U,k,j,th,it):Gt,St),Or(Ie?Ks(Y[1],U,k,j,eh,it):Y,Rt);const Le=mc(U,he,te,zl);St.t===Vt.NUMBER&&($e?$e._valueType===Vt.UNIT&&(St.t=Vt.UNIT,St.u=$e._unit):(Or(Le,us),us.t===Vt.UNIT&&(St.t=Vt.UNIT,St.u=us.u)))}else _e?Or(Y,Rt):pt?SM(pt,Rt):Or(n&&$e&&$e.parent.parent===n?$e._value:mc(U,he,te,zl),Rt),me?Or(Gt,St):pt?SM(pt,St):Or(n&&$e&&$e.parent.parent===n?$e._value:mc(U,he,te,zl),St);if(St.o&&(St.n=z_($e?$e._toNumber:Or(mc(U,he,te,zl),us).n,St.n,St.o)),Rt.o&&(Rt.n=z_(St.n,Rt.n,Rt.o)),St.t!==Rt.t){if(St.t===Vt.COMPLEX||Rt.t===Vt.COMPLEX){const Le=St.t===Vt.COMPLEX?St:Rt,xe=St.t===Vt.COMPLEX?Rt:St;xe.t=Vt.COMPLEX,xe.s=Ci(Le.s),xe.d=Le.d.map(()=>xe.n)}else if(St.t===Vt.UNIT||Rt.t===Vt.UNIT){const Le=St.t===Vt.UNIT?St:Rt,xe=St.t===Vt.UNIT?Rt:St;xe.t=Vt.UNIT,xe.u=Le.u}else if(St.t===Vt.COLOR||Rt.t===Vt.COLOR){const Le=St.t===Vt.COLOR?St:Rt,xe=St.t===Vt.COLOR?Rt:St;xe.t=Vt.COLOR,xe.d=Le.d.map(()=>0)}}if(St.u!==Rt.u){let Le=Rt.u?St:Rt;Le=bM(U,Le,Rt.u?Rt.u:St.u,!1)}if(Rt.d&&St.d&&Rt.d.length!==St.d.length){const Le=St.d.length>Rt.d.length?St:Rt,xe=Le===St?Rt:St;xe.d=Le.d.map((ut,et)=>Un(xe.d[et])?0:xe.d[et]),xe.s=Ci(Le.s)}const q=yn(+de||fn,12);let Re=zl[he];zc(Re)||(zl[he]=null);const ve=ge?ge.set:null;ot=yn(Ne+q,12);const Ue=St.d,Ve=Rt.d,Ee=Rt.s,ye={parent:this,id:VL++,property:he,target:U,_value:null,_toFunc:eh.func,_fromFunc:th.func,_ease:DM(se),_fromNumbers:Ue?Ci(Ue):Jd,_toNumbers:Ve?Ci(Ve):Jd,_strings:Ee?Ci(Ee):Jd,_fromNumber:St.n,_toNumber:Rt.n,_numbers:Ue?Ci(Ue):Jd,_number:St.n,_unit:Rt.u,_modifier:Te,_currentTime:0,_startTime:Ne,_delay:+we,_updateDuration:q,_changeDuration:q,_absoluteStartTime:Ce,_absoluteUpdateStartTime:rt,_absoluteEndTime:yn(ie+ot,12),_hasFromValue:me||Ie?1:0,_tweenType:te,_setter:ve,_valueType:Rt.t,_composition:Mt,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:Re,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};Mt!==Yi.none&&oT(ye,We);const Se=ye._valueType;if(Se===Vt.COMPLEX)ye._value=tT(ye,1,-1);else if(Se===Vt.UNIT)ye._value=`${Te(ye._toNumber)}${ye._unit}`;else if(Se===Vt.COLOR){const Le=Rt.d;ye._value=`rgba(${yn(Le[0],0)},${yn(Le[1],0)},${yn(Le[2],0)},${Le[3]})`}else ye._value=Te(ye._toNumber);isNaN(He)&&(He=ye._startTime),pt=ye,W++,Kl(this,ye)}(isNaN(ee)||He<ee)&&(ee=He),(isNaN(X)||ot>X)&&(X=ot),te===Pn.TRANSFORM&&(Fe=W-ht,Oe=W)}if(!isNaN(Fe)){let De=0;Jn(this,te=>{De>=Fe&&De<Oe&&(te._renderTransforms=1,te._composition===Yi.blend&&Jn(ou.animation,ge=>{ge.id===te.id&&(ge._renderTransforms=1)})),De++})}}d||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),ee?(Jn(this,G=>{G._startTime-G._delay||(G._delay-=ee),G._startTime-=ee}),X-=ee):ee=0,X||(X=fn,this.iterationCount=0),this.targets=f,this.id=Un(m)?LM:m,this.duration=X===fn?fn:Z0((X+this._loopDelay)*this.iterationCount-this._loopDelay)||fn,this.onRender=I||A.onRender,this._ease=R,this._delay=ee,this.iterationDuration=X,!this._autoplay&&H&&this.onRender(this)}stretch(e){const t=this.duration;if(t===Vc(e))return this;const n=e/t;return Jn(this,r=>{r._updateDuration=Vc(r._updateDuration*n),r._changeDuration=Vc(r._changeDuration*n),r._currentTime*=n,r._delay*=n,r._startTime*=n,r._absoluteStartTime*=n,r._absoluteUpdateStartTime*=n,r._absoluteEndTime*=n}),super.stretch(e)}refresh(){return Jn(this,e=>{const t=e._toFunc,n=e._fromFunc;(t||n)&&(n?(Or(n(),St),St.u!==e._unit&&e.target[gu]&&bM(e.target,St,e._unit,!0),e._fromNumbers=Ci(St.d),e._fromNumber=St.n):t&&(Or(mc(e.target,e.property,e._tweenType),us),e._fromNumbers=Ci(us.d),e._fromNumber=us.n),t&&(Or(t(),Rt),e._toNumbers=Ci(Rt.d),e._strings=Ci(Rt.s),e._toNumber=Rt.o?z_(e._fromNumber,Rt.n,Rt.o):Rt.n))}),this.duration===fn&&this.restart(),this}revert(){return super.revert(),nT(this)}then(e){return super.then(e)}}const NM=(s,e)=>new GL(s,e,null,0,!1).init();Cr.registerPlugin(Ut);const rh=[{name:"HTML",level:90,cat:"Markup",type:"FIRE",col:"#ff4757",xp:9e3},{name:"CSS",level:85,cat:"Styling",type:"WATER",col:"#3d9be9",xp:8500},{name:"JavaScript",level:88,cat:"Language",type:"ELECTRIC",col:"#ffd32a",xp:8800},{name:"TypeScript",level:80,cat:"Language",type:"ICE",col:"#45aaf2",xp:8e3},{name:"Node.js",level:82,cat:"Runtime",type:"GRASS",col:"#00d4aa",xp:8200},{name:"Express.js",level:80,cat:"Framework",type:"GRASS",col:"#00d4aa",xp:8e3},{name:"Next.js",level:78,cat:"Framework",type:"DARK",col:"#636e72",xp:7800},{name:"MongoDB",level:76,cat:"Database",type:"GROUND",col:"#e67e22",xp:7600},{name:"Tailwind CSS",level:85,cat:"Styling",type:"FLYING",col:"#38bdf8",xp:8500},{name:"Nginx",level:68,cat:"DevOps",type:"ROCK",col:"#009639",xp:6800}],IM={FIRE:{bg:"#ff4757",text:"#fff"},WATER:{bg:"#3d9be9",text:"#fff"},ELECTRIC:{bg:"#ffd32a",text:"#000"},GRASS:{bg:"#00d4aa",text:"#000"},PSYCHIC:{bg:"#a55eea",text:"#fff"},GROUND:{bg:"#e67e22",text:"#fff"},ICE:{bg:"#45aaf2",text:"#fff"},DRAGON:{bg:"#9b59b6",text:"#fff"},FLYING:{bg:"#f9ca24",text:"#000"},DARK:{bg:"#636e72",text:"#fff"},ROCK:{bg:"#b8860b",text:"#fff"},NORMAL:{bg:"#888",text:"#fff"}},UM=[{id:"#001",name:"TaskDex",hp:480,maxHp:500,type1:"ELECTRIC",type2:"GRASS",col:"#ffd32a",desc:"Full-stack task manager with JWT auth, CRUD boards, and drag-drop. Built with the MERN stack and a responsive Tailwind UI.",moves:[{name:"JWT Auth",power:82},{name:"REST CRUD",power:80},{name:"Drag & Drop",power:75},{name:"Mongo Query",power:78}],tags:["React","Node.js","Express","MongoDB"],stats:{UI:88,API:82,DB:80,DX:85}},{id:"#002",name:"ChatterBall",hp:440,maxHp:500,type1:"WATER",type2:"PSYCHIC",col:"#3d9be9",desc:"Real-time chat app with Socket.IO, typing indicators, and online presence. Rooms persisted in MongoDB.",moves:[{name:"Socket Stream",power:85},{name:"Presence Ping",power:72},{name:"Room Sync",power:78},{name:"Typing Pulse",power:68}],tags:["Node.js","Socket.IO","Express","MongoDB"],stats:{UI:80,API:88,DB:76,DX:82}},{id:"#003",name:"ShopVire",hp:460,maxHp:500,type1:"FIRE",type2:"FLYING",col:"#ff4757",desc:"Server-rendered e-commerce storefront with Next.js App Router, cart state, and Stripe checkout mock. SEO-optimized.",moves:[{name:"SSR Render",power:88},{name:"Cart State",power:76},{name:"SEO Boost",power:80},{name:"Route Prefetch",power:84}],tags:["Next.js","TypeScript","Tailwind","MongoDB"],stats:{UI:92,API:78,DB:74,DX:88}},{id:"#004",name:"DevBlog CMS",hp:420,maxHp:500,type1:"GRASS",type2:"NORMAL",col:"#00d4aa",desc:"Markdown-powered blog engine with admin dashboard, tag filtering, and a REST API. Deployed behind Nginx reverse proxy.",moves:[{name:"MD Parser",power:74},{name:"Tag Filter",power:70},{name:"Admin Guard",power:78},{name:"Nginx Proxy",power:72}],tags:["Express","MongoDB","Nginx","EJS"],stats:{UI:76,API:82,DB:78,DX:80}},{id:"#005",name:"Snip",hp:400,maxHp:500,type1:"FLYING",type2:"ICE",col:"#45aaf2",desc:"Short links with click tracking, geo analytics (country/city), expiry dates, React dashboard with line + bar charts showing click data over time.",moves:[{name:"Geo Tracking",power:76},{name:"Analytics Chart",power:70},{name:"Short URL",power:74},{name:"MongoDB",power:80}],tags:["JavaScript","MongoDB","Express","REST API","React"],stats:{UI:85,API:74,DB:60,DX:78}},{id:"#006",name:"PortfolioDex",hp:500,maxHp:500,type1:"PSYCHIC",type2:"ELECTRIC",col:"#a55eea",desc:"This very site — a Pokemon-themed developer portfolio powered by Three.js, GSAP, and Anime.js with a fully typed codebase.",moves:[{name:"Three.js Orbit",power:90},{name:"GSAP Scroll",power:88},{name:"Anime Bars",power:82},{name:"TS Strict",power:84}],tags:["Next.js","TypeScript","Three.js","Tailwind"],stats:{UI:95,API:70,DB:60,DX:92}}],WL=[{name:"Frontend Ace",icon:"⚡",col:"#ffd32a"},{name:"API Builder",icon:"🌿",col:"#00d4aa"},{name:"DB Handler",icon:"🍃",col:"#e67e22"},{name:"TS Trainer",icon:"🧊",col:"#45aaf2"},{name:"Next Ranger",icon:"🌑",col:"#636e72"},{name:"Style Master",icon:"💧",col:"#3d9be9"},{name:"Deploy Scout",icon:"🔧",col:"#009639"},{name:"Fresh Trainer",icon:"🔥",col:"#ff4757"}];let sh=null;function XL(){if(sh)return sh;const s=document.createElement("canvas");s.width=s.height=128;const e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.25,"rgba(255,255,255,0.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),sh=new sb(s),sh}function YL(s,e){const t=new vc,n=28,r=new jA(new s1({map:XL(),color:e,transparent:!0,opacity:.5,blending:G_,depthWrite:!1}));r.scale.setScalar(s*4.5),t.add(r);const a=new ir(new Uh(s,n,n,0,Math.PI*2,0,Math.PI/2),new Ca({color:e,transparent:!0,opacity:.9}));t.add(a);const l=new ir(new Uh(s,n,n,0,Math.PI*2,Math.PI/2,Math.PI/2),new Ca({color:"#eef2f8",transparent:!0,opacity:.85}));t.add(l);const c=new ir(new Fh(s*1,s*.1,10,44),new Ca({color:"#0a0a0f"}));c.rotation.x=Math.PI/2,t.add(c);const f=new ir(new Fh(s*.32,s*.08,10,28),new Ca({color:"#0a0a0f"}));f.position.z=s*.98,t.add(f);const d=new ir(new E0(s*.26,24),new Ca({color:"#ffffff"}));return d.position.z=s*1,t.add(d),t}function qL(){const s=dn.useRef(null);return dn.useEffect(()=>{const e=s.current;if(!e)return;const t=window.innerWidth,n=window.innerHeight,r=new p3({antialias:!0,alpha:!0});r.setSize(t,n),r.setPixelRatio(Math.min(devicePixelRatio,2)),e.appendChild(r.domElement);const a=new WA;a.fog=new S0("#0a0a0f",.0022);const l=new Vr(60,t/n,.1,1e3);l.position.z=100;const c=(R,T,L,F)=>{const B=new xi,z=new Float32Array(R*3);for(let ie=0;ie<R*3;ie++)z[ie]=(Math.random()-.5)*T;B.setAttribute("position",new Kr(z,3));const ne=new rb(B,new u1({size:L,color:"#ffffff",transparent:!0,opacity:F}));return a.add(ne),ne},f=c(1400,700,.4,.35),d=c(500,400,.7,.55),p=["#ff4757","#ffd32a","#3d9be9","#a55eea","#00d4aa"],g=[];p.forEach((R,T)=>{const L=4+Math.random()*3,F=YL(L,R),B=(T-(p.length-1)/2)*34+(Math.random()-.5)*12,z=(Math.random()-.5)*50,ne=-30-T*18-Math.random()*10;F.position.set(B,z,ne),F.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),a.add(F),g.push({grp:F,baseX:B,baseY:z,z:ne,spin:.003+Math.random()*.006,bob:3+Math.random()*4,phase:Math.random()*Math.PI*2,drift:.15+Math.random()*.15})});const m=40,_=600,M=new vb(_,m,"#ff2d55","#3d1030");M.material.opacity=.14,M.material.transparent=!0,M.position.y=-48,a.add(M);const E=_/m;let x=0,y=0;const C=R=>{x=R.clientX/window.innerWidth-.5,y=-(R.clientY/window.innerHeight-.5)};window.addEventListener("mousemove",C);const I=new _b;let A;const D=()=>{A=requestAnimationFrame(D),I.update();const R=I.getElapsed();g.forEach(T=>{T.grp.position.x=T.baseX+Math.sin(R*T.drift+T.phase)*6,T.grp.position.y=T.baseY+Math.sin(R*.6+T.phase)*T.bob,T.grp.rotation.y+=T.spin,T.grp.rotation.x+=T.spin*.35}),M.position.z=R*12%E,f.rotation.y=R*.005,d.rotation.y=R*.01,l.position.x+=(x*14-l.position.x)*.03,l.position.y+=(y*8-l.position.y)*.03,l.lookAt(0,0,-40),r.render(a,l)};D(),Cr.fromTo(e,{opacity:0},{opacity:1,duration:1.4,ease:"power2.out"});const P=()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",P),()=>{cancelAnimationFrame(A),window.removeEventListener("mousemove",C),window.removeEventListener("resize",P),r.dispose(),e.removeChild(r.domElement)}},[]),K.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none",style:{zIndex:0}})}function Zh({size:s=40,spin:e=!1,glow:t=!1}){return K.jsxs("svg",{width:s,height:s,viewBox:"0 0 100 100",fill:"none",style:{animation:e?"pokespin 3s linear infinite":void 0,filter:t?"drop-shadow(0 0 8px #ff2d55)":void 0,flexShrink:0},children:[K.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"#1a1a2e",stroke:"#ff2d55",strokeWidth:"2.5"}),K.jsx("path",{d:"M2 50 Q2 2 50 2 Q98 2 98 50 Z",fill:"#ff2d55"}),K.jsx("line",{x1:"2",y1:"50",x2:"98",y2:"50",stroke:"#e8e8f0",strokeWidth:"2.5"}),K.jsx("circle",{cx:"50",cy:"50",r:"13",fill:"#1a1a2e",stroke:"#e8e8f0",strokeWidth:"2.5"}),K.jsx("circle",{cx:"50",cy:"50",r:"7",fill:"#ff2d55"}),K.jsx("circle",{cx:"46",cy:"46",r:"2.5",fill:"#fff",opacity:"0.6"})]})}function rf({type:s}){const e=IM[s]??IM.NORMAL;return K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.42rem",background:e.bg,color:e.text,padding:"3px 7px",letterSpacing:"0.08em"},children:s})}function FM({hp:s,maxHp:e,color:t="#00d4aa"}){const n=Math.max(0,Math.min(100,s/e*100)),r=n>50?"#00d4aa":n>20?"#ffd32a":"#ff4757";return K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.4rem",color:"#7a7a9a"},children:"HP"}),K.jsx("div",{className:"flex-1 h-2 bg-[#0d0d18] overflow-hidden",style:{border:"1px solid rgba(255,255,255,0.1)"},children:K.jsx("div",{style:{width:`${n}%`,height:"100%",background:r,transition:"width 0.8s ease"}})}),K.jsxs("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.4rem",color:"#7a7a9a"},children:[s,"/",e]})]})}function $L({xp:s,maxXp:e=1e4,color:t}){const n=s/e*100;return K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a"},children:"XP"}),K.jsx("div",{className:"flex-1 h-1.5 bg-[#0d0d18] overflow-hidden",children:K.jsx("div",{className:"xp-fill h-full","data-w":n,style:{width:"0%",background:t}})})]})}function KL({text:s,className:e=""}){return K.jsxs("span",{className:`relative inline-block ${e}`,style:{fontFamily:"'Press Start 2P', monospace"},children:[s,K.jsx("span",{"aria-hidden":!0,className:"absolute inset-0 text-[#ff4757]",style:{clipPath:"polygon(0 30%, 100% 30%, 100% 50%, 0 50%)",animation:"glitch1 4s infinite",transform:"translate(-3px,0)",opacity:.85,fontFamily:"'Press Start 2P', monospace"},children:s}),K.jsx("span",{"aria-hidden":!0,className:"absolute inset-0 text-[#3d9be9]",style:{clipPath:"polygon(0 62%, 100% 62%, 100% 78%, 0 78%)",animation:"glitch2 4s infinite",transform:"translate(3px,0)",opacity:.85,fontFamily:"'Press Start 2P', monospace"},children:s})]})}function jL({lines:s}){const[e,t]=dn.useState(()=>s.map(()=>0)),[n,r]=dn.useState(!0),a=1.9,l=.55;dn.useEffect(()=>{let f=0,d=0,p=0;const g=()=>{f>=s.length||(d++,t(M=>{const E=[...M];return E[f]=d,E}),d>=s[f].length?(f++,d=0,p=window.setTimeout(g,550)):p=window.setTimeout(g,38))},m=window.setTimeout(g,400),_=window.setInterval(()=>r(M=>!M),500);return()=>{clearTimeout(m),clearTimeout(p),clearInterval(_)}},[]);const c=`calc(${s.length} * ${l*a}rem + 2.5rem)`;return K.jsxs("div",{className:"relative p-5",style:{background:"#0f0f1a",border:"3px solid #e8e8f0",boxShadow:"inset 0 0 0 1px #0a0a0f, 4px 4px 0 #ff2d55",minHeight:c},children:[K.jsx("div",{children:s.map((f,d)=>K.jsx("p",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:`${l}rem`,color:"#e8e8f0",lineHeight:a,minHeight:`${l*a}rem`},children:f.slice(0,e[d])},d))}),n&&K.jsx("span",{className:"absolute bottom-3 right-4",style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.55rem",color:"#ff2d55"},children:"▼"})]})}function sf({children:s,color:e="#ff2d55",className:t=""}){return K.jsx("div",{className:`relative ${t}`,style:{background:"#0f0f1a",border:`2px solid ${e}`,boxShadow:`3px 3px 0 ${e}55`},children:s})}function ZL(){const[s,e]=dn.useState(0);return dn.useEffect(()=>{const t=()=>{const n=document.documentElement.scrollHeight-window.innerHeight;e(n>0?window.scrollY/n*100:0)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),K.jsx("div",{className:"fixed top-0 left-0 right-0 z-[60] h-1",style:{background:"#0a0a0f"},children:K.jsx("div",{style:{width:`${s}%`,height:"100%",background:"linear-gradient(90deg,#ff2d55,#ffd32a)",transition:"width 0.1s"}})})}function JL({name:s,onDone:e}){const t=dn.useRef(null);return dn.useEffect(()=>{Cr.fromTo(t.current,{x:120,opacity:0},{x:0,opacity:1,duration:.4,ease:"back.out(1.4)"});const n=setTimeout(()=>{Cr.to(t.current,{x:120,opacity:0,duration:.35,onComplete:e})},2600);return()=>clearTimeout(n)},[]),K.jsxs("div",{ref:t,className:"fixed bottom-24 right-6 z-[200]",style:{background:"#0f0f1a",border:"2px solid #ffd32a",boxShadow:"3px 3px 0 #ffd32a55",padding:"10px 16px"},children:[K.jsxs("p",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#ffd32a"},children:["A wild ",s]}),K.jsx("p",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#ffd32a"},children:"appeared!"})]})}function QL({skill:s,onDone:e}){const t=dn.useRef(null);return dn.useEffect(()=>{Cr.fromTo(t.current,{y:40,opacity:0,scale:.8},{y:0,opacity:1,scale:1,duration:.5,ease:"back.out(2)"});const n=setTimeout(()=>{Cr.to(t.current,{y:-20,opacity:0,duration:.4,onComplete:e})},2e3);return()=>clearTimeout(n)},[]),K.jsx("div",{ref:t,className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 text-center",style:{background:"#ffd32a",border:"3px solid #e8e8f0",boxShadow:"0 0 30px #ffd32a88, 4px 4px 0 #0a0a0f"},children:K.jsxs("p",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.55rem",color:"#0a0a0f"},children:[s," grew to a new level!"]})})}function eN({active:s}){const e=[{id:"hero",label:"HOME"},{id:"skills",label:"MOVES"},{id:"projects",label:"POKEDEX"},{id:"leetcode",label:"BATTLES"},{id:"contact",label:"LINKS"}];return K.jsxs("nav",{className:"fixed top-1 left-0 right-0 z-50 flex items-center justify-between px-6 py-3",style:{background:"rgba(10,10,15,0.93)",backdropFilter:"blur(14px)",borderBottom:"2px solid rgba(255,45,85,0.25)"},children:[K.jsxs("div",{className:"flex items-center gap-3",children:[K.jsx(Zh,{size:28,spin:!0,glow:!0}),K.jsxs("div",{children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#ff2d55"},children:"DEV.EXE"}),K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.35rem",color:"#7a7a9a"},children:"v1.0 · FULLSTACK"})]})]}),K.jsx("div",{className:"hidden md:flex items-center gap-1",children:e.map(t=>K.jsx("a",{href:`#${t.id}`,className:"px-3 py-1.5 transition-all duration-150",style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.42rem",color:s===t.id?"#0a0a0f":"#7a7a9a",background:s===t.id?"#ff2d55":"transparent",letterSpacing:"0.06em"},children:t.label},t.id))}),K.jsxs("div",{className:"flex items-center gap-2",style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.4rem"},children:[K.jsx("span",{style:{color:"#00d4aa"},children:"●"}),K.jsx("span",{style:{color:"#7a7a9a"},children:"ONLINE"})]})]})}function tN(){const s=dn.useRef(null),e=dn.useRef(null);return dn.useEffect(()=>{Cr.from(s.current,{x:-80,opacity:0,duration:1,ease:"power3.out",delay:.3}),Cr.from(e.current,{x:80,opacity:0,duration:1,ease:"power3.out",delay:.5})},[]),K.jsx("section",{id:"hero",className:"relative min-h-screen flex items-center px-6 md:px-16 pt-20",style:{zIndex:2},children:K.jsxs("div",{className:"w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center",children:[K.jsx("div",{ref:s,children:K.jsxs(sf,{color:"#ffd32a",className:"p-0 overflow-hidden",children:[K.jsxs("div",{className:"flex items-center justify-between px-5 py-3",style:{background:"#ffd32a"},children:[K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#0a0a0f"},children:"TRAINER CARD"}),K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#0a0a0f"},children:"No.001"})]}),K.jsxs("div",{className:"p-5 space-y-5",children:[K.jsxs("div",{className:"flex items-start gap-5",children:[K.jsxs("div",{className:"shrink-0 w-24 h-24 flex items-center justify-center relative",style:{background:"#1a1a2e",border:"2px solid #ffd32a22"},children:[K.jsx("div",{className:"text-5xl select-none",children:"👨‍💻"}),K.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-1",style:{background:"linear-gradient(90deg,#ff2d55,#ffd32a,#00d4aa)"}})]}),K.jsxs("div",{className:"flex-1",children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.4rem",color:"#7a7a9a",marginBottom:"6px"},children:"NAME"}),K.jsx(KL,{text:"ANKUR",className:"text-lg text-white block mb-1"}),K.jsx("div",{style:{fontFamily:"'Rajdhani', sans-serif",fontSize:"0.95rem",color:"#ffd32a",letterSpacing:"0.3em",fontWeight:700},children:"GUPTA"}),K.jsxs("div",{className:"mt-2 flex gap-2",children:[K.jsx(rf,{type:"ELECTRIC"}),K.jsx(rf,{type:"GRASS"})]})]})]}),K.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{k:"CLASS",v:"FULLSTACK DEV"},{k:"TRAINER",v:"LV. 1"},{k:"EXP",v:"FRESHER"},{k:"BADGES",v:"8 / 8"}].map(t=>K.jsxs("div",{className:"px-3 py-2",style:{background:"#0d0d18",border:"1px solid rgba(255,255,255,0.06)"},children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.35rem",color:"#7a7a9a",marginBottom:"4px"},children:t.k}),K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#e8e8f0"},children:t.v})]},t.k))}),K.jsxs("div",{children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a",marginBottom:"8px"},children:"BADGES EARNED"}),K.jsx("div",{className:"flex flex-wrap gap-2",children:WL.map(t=>K.jsxs("div",{className:"group relative px-2 py-1.5 flex items-center gap-1.5 transition-transform hover:-translate-y-0.5",style:{background:`${t.col}18`,border:`1px solid ${t.col}55`},children:[K.jsx("span",{children:t.icon}),K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.35rem",color:t.col},children:t.name})]},t.name))})]}),K.jsxs("div",{className:"flex items-center justify-between pt-2",style:{borderTop:"1px solid rgba(255,255,255,0.06)"},children:[K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a"},children:"PLAY TIME"}),K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.45rem",color:"#ffd32a"},children:"READY TO START"})]})]})]})}),K.jsxs("div",{ref:e,className:"space-y-6",children:[K.jsx(jL,{lines:["ANKUR wants to battle!","A hungry Full-Stack Developer.","Fresh trainer, MERN + Next.js type.","Ready to catch that first offer!"]}),K.jsx("div",{className:"grid grid-cols-3 gap-3",children:[{label:"PROJECTS",v:"6+",col:"#ff4757"},{label:"SKILLS",v:"10",col:"#ffd32a"},{label:"LEVEL",v:"1",col:"#00d4aa"}].map(t=>K.jsxs(sf,{color:t.col,className:"p-4 text-center",children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"1.1rem",color:t.col,marginBottom:"6px"},children:t.v}),K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a"},children:t.label})]},t.label))}),K.jsxs("div",{className:"flex gap-3",children:[K.jsx("a",{href:"#projects",className:"flex-1 py-3 text-center transition-all duration-150 hover:-translate-y-0.5",style:{background:"#ff2d55",fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#fff",boxShadow:"4px 4px 0 #991b2e"},children:"► NEW GAME"}),K.jsx("a",{href:"#contact",className:"flex-1 py-3 text-center transition-all duration-150 hover:-translate-y-0.5",style:{background:"#0f0f1a",fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#e8e8f0",border:"2px solid #e8e8f0",boxShadow:"4px 4px 0 #33334a"},children:"► CONTINUE"})]}),K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a",textAlign:"center"},children:"↓ SCROLL TO EXPLORE ↓"})]})]})})}function nN(){const s=dn.useRef(null),[e,t]=dn.useState(!1),[n,r]=dn.useState(null);return dn.useEffect(()=>{const a=s.current;if(!a)return;const l=()=>{if(e)return;t(!0),a.querySelectorAll(".skill-bar-fill").forEach((p,g)=>NM(p,{width:p.dataset.w+"%",duration:1100,delay:g*70,ease:"outExpo"})),a.querySelectorAll(".xp-fill").forEach((p,g)=>NM(p,{width:p.dataset.w+"%",duration:900,delay:g*70+400,ease:"outExpo"})),[rh[0],rh[4],rh[5]].forEach((p,g)=>{setTimeout(()=>{r(p.name),setTimeout(()=>r(null),2200)},1400+g*2500)})},c=Cr.from(a.querySelectorAll(".skill-card"),{y:30,opacity:0,duration:.45,stagger:.06,ease:"power2.out",immediateRender:!1,clearProps:"opacity,transform",scrollTrigger:{trigger:a,start:"top 88%",once:!0,onEnter:l}});return()=>{var f;(f=c.scrollTrigger)==null||f.kill(),c.kill()}},[e]),K.jsxs("section",{id:"skills",ref:s,className:"relative z-10 py-24 px-6 max-w-6xl mx-auto",children:[n&&K.jsx(QL,{skill:n,onDone:()=>r(null)}),K.jsxs("div",{className:"mb-12",children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#ff2d55",marginBottom:"8px",letterSpacing:"0.2em"},children:"// SKILL_POKEDEX"}),K.jsx("h2",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"clamp(1rem,2.5vw,1.6rem)",color:"#e8e8f0",lineHeight:1.5,marginBottom:"6px"},children:"MOVES & ABILITIES"}),K.jsx("p",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.75rem",color:"#7a7a9a"},children:"Technical moves learned through 4+ years of training"}),K.jsxs("div",{className:"mt-4 flex items-center gap-2",children:[K.jsx("div",{style:{height:"1px",width:"48px",background:"#ff2d55"}}),K.jsx("div",{style:{height:"1px",flex:1,background:"rgba(255,255,255,0.06)"}}),K.jsx(Zh,{size:16})]})]}),K.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:rh.map((a,l)=>K.jsxs(sf,{color:`${a.col}44`,className:"skill-card p-5 group transition-all duration-200 hover:-translate-y-1",children:[K.jsxs("div",{className:"flex items-center justify-between mb-3",children:[K.jsxs("div",{className:"flex items-center gap-2",children:[K.jsx(rf,{type:a.type}),K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a"},children:a.cat})]}),K.jsxs("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.42rem",color:"#ffd32a"},children:["LV.",a.level]})]}),K.jsx("div",{style:{fontFamily:"'Rajdhani', sans-serif",fontSize:"1.1rem",fontWeight:700,color:"#e8e8f0",marginBottom:"10px",letterSpacing:"0.05em"},children:a.name}),K.jsxs("div",{className:"mb-2",children:[K.jsxs("div",{className:"flex justify-between items-center mb-1",children:[K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.35rem",color:"#7a7a9a"},children:"POW"}),K.jsxs("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.35rem",color:a.col},children:[a.level,"/100"]})]}),K.jsx("div",{className:"w-full h-2.5 bg-[#0d0d18] overflow-hidden",style:{border:"1px solid rgba(255,255,255,0.08)"},children:K.jsx("div",{className:"skill-bar-fill h-full","data-w":a.level,style:{width:"0%",background:`linear-gradient(90deg,${a.col}77,${a.col})`}})})]}),K.jsx($L,{xp:a.xp,color:a.col}),K.jsxs("div",{className:"mt-2",style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.45rem",color:a.col,letterSpacing:"1px"},children:["█".repeat(Math.floor(a.level/10)),K.jsx("span",{style:{color:"#1a1a2e"},children:"█".repeat(10-Math.floor(a.level/10))})]})]},a.name))})]})}function iN(){const s=dn.useRef(null),[e,t]=dn.useState(null),[n,r]=dn.useState(null),a=dn.useRef(!1);dn.useEffect(()=>{const c=s.current;if(!c)return;const f=Cr.from(c.querySelectorAll(".proj-card"),{y:50,opacity:0,duration:.6,stagger:.08,ease:"power3.out",immediateRender:!1,clearProps:"opacity,transform",scrollTrigger:{trigger:c,start:"top 88%",once:!0,onEnter:()=>{a.current||(a.current=!0,t(UM[0].name))}}});return()=>{var d;(d=f.scrollTrigger)==null||d.kill(),f.kill()}},[]);const l=c=>{var d;const f=(d=s.current)==null?void 0:d.querySelectorAll(".proj-card")[c];f&&(Cr.to(f,{scale:.96,duration:.08,yoyo:!0,repeat:3,ease:"none"}),r(n===c?null:c))};return K.jsxs("section",{id:"projects",ref:s,className:"relative z-10 py-24 px-6 max-w-6xl mx-auto",children:[e&&K.jsx(JL,{name:e,onDone:()=>t(null)}),K.jsxs("div",{className:"mb-12",children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#ff2d55",marginBottom:"8px",letterSpacing:"0.2em"},children:"// PROJ_STORAGE"}),K.jsx("h2",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"clamp(1rem,2.5vw,1.6rem)",color:"#e8e8f0",lineHeight:1.5,marginBottom:"6px"},children:"CAPTURED PROJECTS"}),K.jsx("p",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.75rem",color:"#7a7a9a"},children:"Click a card to enter battle view — see moves, stats & details"}),K.jsxs("div",{className:"mt-4 flex items-center gap-2",children:[K.jsx("div",{style:{height:"1px",width:"48px",background:"#ff2d55"}}),K.jsx("div",{style:{height:"1px",flex:1,background:"rgba(255,255,255,0.06)"}}),K.jsx(Zh,{size:16})]})]}),K.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:UM.map((c,f)=>{const d=n===f;return K.jsx("div",{className:"proj-card cursor-pointer transition-all duration-300",style:{gridColumn:d?"1 / -1":void 0},onClick:()=>l(f),children:K.jsxs(sf,{color:d?c.col:`${c.col}44`,className:"overflow-hidden",children:[K.jsxs("div",{className:"flex items-center justify-between px-4 py-2",style:{background:`${c.col}22`,borderBottom:`1px solid ${c.col}44`},children:[K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a"},children:c.id}),K.jsxs("div",{className:"flex gap-1.5",children:[K.jsx(rf,{type:c.type1}),K.jsx(rf,{type:c.type2})]}),K.jsx(Zh,{size:18})]}),d?K.jsxs("div",{className:"p-5 grid grid-cols-1 md:grid-cols-3 gap-6",children:[K.jsxs("div",{className:"md:col-span-1 space-y-4",children:[K.jsxs("div",{children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a",marginBottom:"6px"},children:"NAME"}),K.jsx("div",{style:{fontFamily:"'Rajdhani', sans-serif",fontSize:"1.4rem",fontWeight:700,color:"#e8e8f0",letterSpacing:"0.05em"},children:c.name})]}),K.jsx(FM,{hp:c.hp,maxHp:c.maxHp}),K.jsx("p",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.68rem",color:"#7a7a9a",lineHeight:1.7},children:c.desc}),K.jsx("div",{className:"flex flex-wrap gap-1.5",children:c.tags.map(p=>K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.35rem",color:c.col,background:`${c.col}18`,padding:"3px 7px",border:`1px solid ${c.col}44`},children:p},p))})]}),K.jsxs("div",{className:"md:col-span-1",children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a",marginBottom:"10px"},children:"MOVES"}),K.jsx("div",{className:"space-y-3",children:c.moves.map(p=>K.jsxs("div",{className:"px-3 py-3",style:{background:"#0d0d18",border:`1px solid ${c.col}33`},children:[K.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.42rem",color:"#e8e8f0"},children:p.name}),K.jsxs("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:c.col},children:["PWR ",p.power]})]}),K.jsx("div",{className:"w-full h-1.5 bg-[#070710] overflow-hidden",children:K.jsx("div",{style:{width:`${p.power}%`,height:"100%",background:c.col,transition:"width 0.8s ease"}})})]},p.name))})]}),K.jsxs("div",{className:"md:col-span-1",children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a",marginBottom:"10px"},children:"BASE STATS"}),K.jsx("div",{className:"space-y-3",children:Object.entries(c.stats).map(([p,g])=>K.jsxs("div",{children:[K.jsxs("div",{className:"flex justify-between mb-1",children:[K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a"},children:p.replace("_"," ")}),K.jsx("span",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:c.col},children:g})]}),K.jsx("div",{className:"w-full h-2 bg-[#0d0d18] overflow-hidden",children:K.jsx("div",{style:{width:`${g}%`,height:"100%",background:`linear-gradient(90deg,${c.col}66,${c.col})`}})})]},p))})]})]}):K.jsxs("div",{className:"p-5",children:[K.jsx("div",{className:"flex items-center justify-between mb-3",children:K.jsx("div",{style:{fontFamily:"'Rajdhani', sans-serif",fontSize:"1.1rem",fontWeight:700,color:"#e8e8f0",letterSpacing:"0.05em"},children:c.name})}),K.jsx(FM,{hp:c.hp,maxHp:c.maxHp}),K.jsxs("p",{className:"mt-3",style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.65rem",color:"#7a7a9a",lineHeight:1.7},children:[c.desc.slice(0,80),"…"]}),K.jsx("div",{className:"mt-3",style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:c.col},children:"► TAP TO BATTLE"}),K.jsx("div",{className:"mt-2 h-0.5 w-full",style:{background:`linear-gradient(90deg,transparent,${c.col},transparent)`}})]})]})},c.id)})})]})}function rN(){const s=dn.useRef(null);dn.useEffect(()=>{var t;Cr.from(((t=s.current)==null?void 0:t.querySelectorAll(".contact-link"))??[],{y:30,opacity:0,stagger:.1,duration:.5,ease:"power2.out",scrollTrigger:{trigger:s.current,start:"top 80%"}})},[]);const e=[{label:"GITHUB",handle:"github.com/ankur-gupta",col:"#e8e8f0",href:"https://github.com/ankur-gupta",icon:"💻"},{label:"LINKEDIN",handle:"linkedin.com/in/ankur-gupta",col:"#3d9be9",href:"https://linkedin.com/in/ankur-gupta",icon:"💼"},{label:"EMAIL",handle:"ankur.gupta@example.com",col:"#ff4757",href:"mailto:ankur.gupta@example.com",icon:"📬"}];return K.jsxs("section",{id:"contact",ref:s,className:"relative z-10 py-24 px-6 max-w-4xl mx-auto text-center",children:[K.jsxs("div",{className:"mb-12",children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#ff2d55",marginBottom:"8px",letterSpacing:"0.2em"},children:"// SAVE_GAME"}),K.jsx("h2",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"clamp(1rem,2.5vw,1.6rem)",color:"#e8e8f0",lineHeight:1.5,marginBottom:"6px"},children:"CONTACT TRAINER"}),K.jsx("p",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:"0.75rem",color:"#7a7a9a"},children:"Open to new quests, raid parties & collaborations"})]}),K.jsxs(sf,{color:"#ffd32a",className:"p-8 mb-8 max-w-md mx-auto",children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.5rem",color:"#7a7a9a",marginBottom:"12px"},children:"SAVE FILE — SLOT 01"}),K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.65rem",color:"#e8e8f0",marginBottom:"4px"},children:"ANKUR GUPTA"}),K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.42rem",color:"#7a7a9a",marginBottom:"12px"},children:"BADGES: 8 · LV: 1 · PROJECTS: 6"}),K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.42rem",color:"#ffd32a"},children:"► AVAILABLE FOR NEW QUESTS"})]}),K.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:e.map(t=>K.jsxs("a",{href:t.href,target:t.href.startsWith("mailto:")?void 0:"_blank",rel:t.href.startsWith("mailto:")?void 0:"noreferrer",className:"contact-link flex items-center gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5",style:{background:"#0f0f1a",border:`2px solid ${t.col}44`,boxShadow:`3px 3px 0 ${t.col}22`},onMouseEnter:n=>{n.currentTarget.style.borderColor=t.col,n.currentTarget.style.boxShadow=`3px 3px 0 ${t.col}55`},onMouseLeave:n=>{n.currentTarget.style.borderColor=`${t.col}44`,n.currentTarget.style.boxShadow=`3px 3px 0 ${t.col}22`},children:[K.jsx("span",{className:"text-2xl",children:t.icon}),K.jsxs("div",{className:"text-left",children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.38rem",color:"#7a7a9a",marginBottom:"5px"},children:t.label}),K.jsx("div",{style:{fontFamily:"'Rajdhani', sans-serif",fontSize:"0.95rem",fontWeight:700,color:t.col,letterSpacing:"0.05em"},children:t.handle})]}),K.jsx("span",{className:"ml-auto",style:{color:t.col},children:"►"})]},t.label))}),K.jsxs("div",{className:"mt-16 space-y-2",children:[K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.4rem",color:"#7a7a9a"},children:"© 2025 ANKUR GUPTA · BUILT WITH REACT · GSAP · THREE.JS · ANIME.JS"}),K.jsx("div",{style:{fontFamily:"'Press Start 2P', monospace",fontSize:"0.4rem",color:"#ffd32a"},children:'★ GOTTA CODE "EM ALL ★'})]})]})}function sN(){return K.jsx("div",{className:"fixed inset-0 pointer-events-none z-[45]",style:{backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.04) 3px,rgba(0,0,0,0.04) 4px)"}})}function oN(){const[s,e]=dn.useState("hero");return dn.useEffect(()=>{document.documentElement.classList.add("dark"),["hero","skills","projects","leetcode","contact"].forEach(n=>{Ut.create({trigger:`#${n}`,start:"top 55%",end:"bottom 55%",onEnter:()=>e(n),onEnterBack:()=>e(n)})});const t=setTimeout(()=>Ut.refresh(),300);return()=>clearTimeout(t)},[]),K.jsxs("div",{className:"min-h-screen bg-background text-foreground overflow-x-hidden",style:{background:"#0a0a0f"},children:[K.jsx("style",{children:`
        @keyframes glitch1 {
          0%,88%,100%{clip-path:polygon(0 0,100% 0,100% 0,0 0);transform:translate(-3px,0)}
          89%{clip-path:polygon(0 28%,100% 28%,100% 52%,0 52%);transform:translate(-5px,0)}
          91%{clip-path:polygon(0 62%,100% 62%,100% 80%,0 80%);transform:translate(3px,0)}
          93%{clip-path:polygon(0 10%,100% 10%,100% 26%,0 26%);transform:translate(-3px,0)}
        }
        @keyframes glitch2 {
          0%,88%,100%{clip-path:polygon(0 0,100% 0,100% 0,0 0);transform:translate(3px,0)}
          90%{clip-path:polygon(0 55%,100% 55%,100% 72%,0 72%);transform:translate(5px,0)}
          92%{clip-path:polygon(0 18%,100% 18%,100% 40%,0 40%);transform:translate(-3px,0)}
        }
        @keyframes pokespin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #ff2d55; }
        ::selection { background: #ff2d5544; }
      `}),K.jsx(ZL,{}),K.jsx(qL,{}),K.jsx(sN,{}),K.jsx(eN,{active:s}),K.jsxs("main",{className:"relative z-10",children:[K.jsx(tN,{}),K.jsx(nN,{}),K.jsx(iN,{}),K.jsx(LeetcodeSection,{}),K.jsx(rN,{})]})]})}qw.createRoot(document.getElementById("root")).render(K.jsx(oN,{}));
