// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,o=n,e=function(t){return o.call(t)},r=Object.prototype.hasOwnProperty,f=function(t,n){return null!=t&&r.call(t,n)},l="function"==typeof Symbol?Symbol.toStringTag:"",u=f,y=l,i=n,c=e,a=function(t){var n,o,e;if(null==t)return i.call(t);o=t[y],n=u(t,y);try{t[y]=void 0}catch(n){return i.call(t)}return e=i.call(t),n?t[y]=o:delete t[y],e},p=t&&"symbol"==typeof Symbol.toStringTag?a:c,b="function"==typeof Int8Array,s=function(t){return b&&t instanceof Int8Array||"[object Int8Array]"===p(t)},d="function"==typeof Int8Array?Int8Array:null;return function(){var t,n;if("function"!=typeof d)return!1;try{n=new d([1,3.14,-3.14,128]),t=s(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&-128===n[3]}catch(n){t=!1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).hasInt8ArraySupport=n();
//# sourceMappingURL=browser.js.map
