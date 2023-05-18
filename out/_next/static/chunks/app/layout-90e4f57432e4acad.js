(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6023:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.Q=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var o={},i=e.split(";"),n=(t||{}).decode||r,s=0;s<i.length;s++){var a=i[s],c=a.indexOf("=");if(!(c<0)){var u=a.substring(0,c).trim();if(void 0==o[u]){var l=a.substring(c+1,a.length).trim();'"'===l[0]&&(l=l.slice(1,-1)),o[u]=function(e,t){try{return t(e)}catch(t){return e}}(l,n)}}}return o},t.q=function(e,t,r){var n=r||{},s=n.encode||o;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var a=s(t);if(a&&!i.test(a))throw TypeError("argument val is invalid");var c=e+"="+a;if(null!=n.maxAge){var u=n.maxAge-0;if(isNaN(u)||!isFinite(u))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(u)}if(n.domain){if(!i.test(n.domain))throw TypeError("option domain is invalid");c+="; Domain="+n.domain}if(n.path){if(!i.test(n.path))throw TypeError("option path is invalid");c+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw TypeError("option expires is invalid");c+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(c+="; HttpOnly"),n.secure&&(c+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var r=decodeURIComponent,o=encodeURIComponent,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},6739:function(e,t,r){Promise.resolve().then(r.t.bind(r,3552,23)),Promise.resolve().then(r.bind(r,2828)),Promise.resolve().then(r.bind(r,3753)),Promise.resolve().then(r.bind(r,5818))},3753:function(e,t,r){"use strict";r.r(t);var o=r(9268);let i=e=>{let{title:t,children:r}=e;return(0,o.jsx)("header",{className:"w-full flex justify-center pt-8 pb-6 dark:bg-darkModeElement bg-white shadow-base",children:(0,o.jsxs)("div",{className:"flex justify-between align-center xl:w-80 lg:w-64 md:w-48 sm:w-40 w-16",children:[(0,o.jsx)("span",{className:"font-bold sm:text-2xl text-base",children:t}),r]})})};t.default=i},5818:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var o=r(9268),i=r(9889);let n=e=>{let{title:t}=e;return(0,o.jsxs)("svg",{width:"18",height:"17",viewBox:"0 0 18 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img",children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5532 11.815C8.66857 11.815 5.51929 8.92783 5.51929 5.36821C5.51929 4.0253 5.96679 2.78158 6.73143 1.75C3.69036 2.69515 1.5 5.33122 1.5 8.43807C1.5 12.3385 4.94929 15.5 9.20357 15.5C12.5929 15.5 15.4696 13.4932 16.5 10.7045C15.375 11.4048 14.0161 11.815 12.5532 11.815Z",fill:"white",stroke:"var(--typography)",strokeWidth:"1.25"})]})};var s=r(2828),a=r(5512);let c=new i.Z,u=()=>{let e=(0,s.useThemeState)(),t=(0,s.useThemeDispatch)(),r=r=>{r.stopPropagation(),e.color===a.x.LIGHT&&(c.set(s.COLOR_MODE_KEY,a.x.DARK,{path:"/",sameSite:!0}),t((0,s.setDark)())),e.color===a.x.DARK&&(c.set(s.COLOR_MODE_KEY,a.x.LIGHT,{path:"/",sameSite:!0}),t((0,s.setLight)()))};return(0,o.jsxs)("button",{className:"flex font-normal items-center sm:gap-3 gap-1",onClick:r,children:[(0,o.jsx)(n,{title:"Switch Color Mode"}),(0,o.jsx)("span",{className:"sm:text-base text-xs",children:e.color===a.x.LIGHT?"Dark Mode":"Light Mode"})]})};var l=u},2828:function(e,t,r){"use strict";r.r(t),r.d(t,{COLOR_MODE_KEY:function(){return v},ThemeDispatchContext:function(){return d},ThemeStateContext:function(){return p},appInitialState:function(){return c},setDark:function(){return h},setLight:function(){return f},useThemeDispatch:function(){return y},useThemeState:function(){return g}});var o=r(9268),i=r(9889),n=r(6006),s=r(5512);let a=new i.Z,c={color:s.x.LIGHT},u="SET_LIGHT",l="SET_DARK",h=()=>({type:l,value:s.x.DARK}),f=()=>({type:u,value:s.x.LIGHT}),p=(0,n.createContext)(c);p.displayName="ThemeStateCtx";let d=(0,n.createContext)(void 0);function m(e,t){switch(t.type){case u:case l:return{color:t.value};default:return e}}d.displayName="ThemeDispatchCtx";let v="color_mode",x=e=>{let t=a.get("color_mode");return t?{color:t}:window.matchMedia("(prefers-color-scheme: dark)").matches?{color:s.x.DARK}:e};t.default=function(e){let{children:t,initialValue:r}=e,[i,a]=(0,n.useReducer)(m,r,x);return(0,n.useEffect)(()=>{i.color===s.x.LIGHT&&document.documentElement.classList.remove(s.x.DARK),i.color===s.x.DARK&&document.documentElement.classList.add(s.x.DARK)},[i]),(0,o.jsx)(p.Provider,{value:i,children:(0,o.jsx)(d.Provider,{value:a,children:t})})};let g=()=>{let e=(0,n.useContext)(p);if(void 0===e)throw Error("useThemeState must be used within a ThemeProvider");return e},y=()=>{let e=(0,n.useContext)(d);if(void 0===e)throw Error("useThemeDispatch must be used within a ThemeProvider");return e}},5512:function(e,t,r){"use strict";var o,i;r.d(t,{x:function(){return o}}),(i=o||(o={})).LIGHT="light",i.DARK="dark"},3552:function(){},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(6006),i=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,c={},u=null,l=null;for(o in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)n.call(t,o)&&!a.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:i,type:e,key:u,ref:l,props:c,_owner:s.current}}t.jsx=c,t.jsxs=c},9268:function(e,t,r){"use strict";e.exports=r(3177)},9889:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var o=r(6023);function i(e,t){void 0===t&&(t={});var r,o=e&&"j"===e[0]&&":"===e[1]?e.substr(2):e;if(void 0===(r=t.doNotParse)&&(r=!o||"{"!==o[0]&&"["!==o[0]&&'"'!==o[0]),!r)try{return JSON.parse(o)}catch(e){}return e}var n=function(){return(n=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(){function e(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies="string"==typeof e?o.Q(e,t):"object"==typeof e&&null!==e?e:{},new Promise(function(){r.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=o.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,r){return void 0===t&&(t={}),this._updateBrowserValues(r),i(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var r={};for(var o in this.cookies)r[o]=i(this.cookies[o],e);return r},e.prototype.set=function(e,t,r){var i;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=n(n({},this.cookies),((i={})[e]=t,i)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.q(e,t,r)),this._emitChange({name:e,value:t,options:r})},e.prototype.remove=function(e,t){var r=t=n(n({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=n({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.q(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}()}},function(e){e.O(0,[667,139,744],function(){return e(e.s=6739)}),_N_E=e.O()}]);