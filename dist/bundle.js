(()=>{"use strict";var n={24:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }',""]);const s=i},426:(n,e,t)=>{t.d(e,{Z:()=>f});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(861),t.b),l=new URL(t(171),t.b),p=i()(r()),u=c()(d),m=c()(l);p.push([n.id,"body {\n    margin: 0;\n    padding: 0;\n    background-color: #fffff0;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\nspan {\n    display: block;\n    letter-spacing: 1px;\n}\n\nhr {\n    align-self: center;\n}\n\nbutton {\n    border: none;\n    background-color: #fffff0;\n}\n\n.dayofweek, .weeknumber, .month {\n    font-family: 'NotoSansJP-ExtraLight', sans-serif;\n}\n\n.dayofweek {\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 16px;\n}\n\n.date {\n    align-self: center;\n    padding-right: 1rem;\n    /* the below font size should be in a media query for mobile size */\n    font-size: 24px; \n    font-family: 'NotoSansJP-Light', sans-serif;\n\n}\n\n.month {\n    font-size: 14px;\n    text-transform: capitalize;\n}\n\n.weeknumber {\n    font-size: 12px;\n}\n\n.date-container {\n    padding-left: 1rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    justify-content: center;\n    gap: 1px;\n\n    border-left: 1px solid black;\n}\n\n.today {\n    display: flex;\n    min-height: 70%;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5em;\n\n    border: 1px solid black;\n\n    height: 77.5%;\n\n    margin: 0 1em 0 1em;\n    padding: 1em;\n}\n\n#day-nav {\n    display: flex;\n\n    align-items: center;\n    justify-content: space-between;\n\n    padding: 0 1em 0 1em;\n    margin: 5px 0 5px 0;\n\n    height: 10%;\n}\n\n#day-wrapper {\n    display: flex;\n\n    align-items: center;\n    justify-content: space-between;\n\n    height: 10%;\n\n    padding: 0 1em 0 1em;\n    margin: 5px 0 5px 0;\n}\n\n\n.task {\n    width: auto;\n\n    background-color: black;\n    color:#fffff0;\n\n    border-radius: 3px;\n\n    padding: 0.25em;\n\n    font-family: 'NotoSansJP-Light', sans-serif;\n    word-wrap: break-word;\n}\n\n@font-face {\n    font-family: 'NotoSansJP-ExtraLight';\n    src: url("+u+");\n}\n\n@font-face {\n    font-family: 'NotoSansJP-Light';\n    src: url("+m+");\n}\n\n/* Landscape mobile devices (phones, height < 500px) */\n@media only screen and (max-height: 500px) {\n    .date {\n        font-size: 16px;\n    }\n\n    .dayofweek, .task {\n        font-size: 12px;\n    }\n\n    .month {\n        font-size: 10px;\n    }\n\n    .weeknumber {\n        font-size: 8px;\n    }\n\n    .material-icons {\n        font-size: 20px;\n    }\n\n}\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 600px) {\n    /* .today {\n        height: 5%;\n    }\n\n    .date {\n        font-size: 32px;\n    }\n\n    .dayofweek, .month {\n        font-size: 12px;\n    }\n\n    .weeknumber {\n        font-size: 10px;\n    }\n\n    .material-icons {\n        font-size: 24px;\n    } */\n} \n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 600px) {\n    \n} \n\n/* Medium devices (landscape tablets, 768px and up) */\n@media only screen and (min-width: 768px) {\n\n} \n\n/* Large devices (laptops/desktops, 992px and up) */\n@media only screen and (min-width: 992px) {\n\n} \n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n@media only screen and (min-width: 1200px) {\n\n}",""]);const f=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},861:(n,e,t)=>{n.exports=t.p+"963555cbbad1d6ddc638.ttf"},171:(n,e,t)=>{n.exports=t.p+"a197f1ba48e0601ad36b.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(24),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=t(426),b={};b.styleTagTransform=u(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l(),e()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;let g={currentSelectedDay:new Date};const y=()=>{const n=document.querySelector("body");for(;n.firstChild;)n.removeChild(n.firstChild)},x=(n=g.currentSelectedDay)=>{const e=document.querySelector("body"),t=new Date(n.getFullYear(),0,1),o=Math.floor((n-t)/864e5),r=Math.ceil((n.getDay()+1+o)/7),a=document.createElement("div");a.setAttribute("id","day-wrapper");const i=document.createElement("div");i.classList.add("today");const s=document.createElement("span");s.classList.add("date"),s.textContent=`${n.getDate()}`;const c=document.createElement("div");c.classList.add("date-container");const d=document.createElement("span");d.classList.add("dayofweek"),d.textContent=`${["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][n.getDay()]}`;const l=document.createElement("span");l.classList.add("month"),l.textContent=`${["january","feburary","march","april","may","june","july","august","september","october","november","december"][n.getMonth()]}`;const p=document.createElement("span");p.classList.add("weeknumber"),p.textContent=`W${r}`;const u=document.createElement("i");u.classList.add("material-icons"),u.textContent="calendar_month",c.append(d,l,p),i.append(s,c),a.append(i,u),e.append(a);const m=document.createElement("div");m.setAttribute("id","content");const f=document.createElement("i");f.classList.add("material-icons"),f.textContent="add",m.append(f),e.append(m);const h=document.createElement("div");h.setAttribute("id","day-nav");const b=document.createElement("i");b.classList.add("material-icons"),b.textContent="arrow_back";const y=document.createElement("button");y.setAttribute("id",y),y.addEventListener("click",w);const x=document.createElement("i");x.classList.add("material-icons"),x.textContent="arrow_forward";const E=document.createElement("button");E.setAttribute("id",E),E.addEventListener("click",v),y.append(b),E.append(x),h.append(y,E),e.append(h)},v=()=>{y(),g.currentSelectedDay.setDate(g.currentSelectedDay.getDate()+1),x()},w=()=>{y(),g.currentSelectedDay.setDate(g.currentSelectedDay.getDate()-1),x()};x()})()})();