// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-int8array@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int8-max@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int8-min@esm/index.mjs";var r="function"==typeof Int8Array?Int8Array:null,i=t,e=n,a=s,m=r;var o=function(){var t,n;if("function"!=typeof m)return!1;try{n=new m([1,3.14,-3.14,e+1]),t=i(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&n[3]===a}catch(n){t=!1}return t};export{o as default};
//# sourceMappingURL=index.mjs.map
