/*!
 * operation-tree-node v1.0.4
 * (c) 2019-2019 yujinpan
 * Released under the MIT License.
 */
"use strict";function e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function t(e){return!(!Array.isArray(e)||!e.length)}module.exports=function(n,o){var c,i=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:"children"}).children;return function n(u,f){var l,p,a,b=[];return u.forEach((function(u,s,O){a=!1,l=function(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(o,!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},u),t(c=u[i])&&(p=n(c,l),(a=t(p))?l[i]=p:delete l[i]),(o(u,s,O,f)||a)&&b.push(l)})),b}(n)};