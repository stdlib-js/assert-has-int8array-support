// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol.toStringTag:"",r=t&&"symbol"==typeof Symbol.toStringTag?function(t){var r,f,l,y,i;if(null==t)return n.call(t);f=t[e],i=e,r=null!=(y=t)&&o.call(y,i);try{t[e]=void 0}catch(o){return n.call(t)}return l=n.call(t),r?t[e]=f:delete t[e],l}:function(t){return n.call(t)},f="function"==typeof Int8Array,l="function"==typeof Int8Array?Int8Array:null;return function(){var t,n,o;if("function"!=typeof l)return!1;try{n=new l([1,3.14,-3.14,128]),o=n,t=(f&&o instanceof Int8Array||"[object Int8Array]"===r(o))&&1===n[0]&&3===n[1]&&-3===n[2]&&-128===n[3]}catch(n){t=!1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).hasInt8ArraySupport=n();
//# sourceMappingURL=index.js.map
