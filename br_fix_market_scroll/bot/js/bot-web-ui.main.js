!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/deriv-charts"),require("@deriv/shared"),require("@deriv/translations"),require("classnames"),require("formik"),require("mobx"),require("mobx-react"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/deriv-charts","@deriv/shared","@deriv/translations","classnames","formik","mobx","mobx-react","react","react-dom"],r):"object"==typeof exports?exports["@deriv/bot-web-ui"]=r(require("@deriv/components"),require("@deriv/deriv-charts"),require("@deriv/shared"),require("@deriv/translations"),require("classnames"),require("formik"),require("mobx"),require("mobx-react"),require("react"),require("react-dom")):e["@deriv/bot-web-ui"]=r(e["@deriv/components"],e["@deriv/deriv-charts"],e["@deriv/shared"],e["@deriv/translations"],e.classnames,e.formik,e.mobx,e["mobx-react"],e.react,e["react-dom"])}(self,(function(e,r,t,o,a,n,i,s,d,u){return(()=>{"use strict";var l,c,f,b,p,m,v={8124:r=>{r.exports=e},3496:e=>{e.exports=r},3140:e=>{e.exports=t},8429:e=>{e.exports=o},4058:e=>{e.exports=a},7717:e=>{e.exports=n},2965:e=>{e.exports=i},9877:e=>{e.exports=s},9297:e=>{e.exports=d},2268:e=>{e.exports=u}},h={};function y(e){if(h[e])return h[e].exports;var r=h[e]={id:e,loaded:!1,exports:{}};return v[e].call(r.exports,r,r.exports,y),r.loaded=!0,r.exports}y.m=v,y.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return y.d(r,{a:r}),r},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,y.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);y.r(t);var o={};l=l||[null,c({}),c([]),c(c)];for(var a=2&r&&e;"object"==typeof a&&!~l.indexOf(a);a=c(a))Object.getOwnPropertyNames(a).forEach((r=>o[r]=()=>e[r]));return o.default=()=>e,y.d(t,o),t},y.d=(e,r)=>{for(var t in r)y.o(r,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},y.f={},y.e=e=>Promise.all(Object.keys(y.f).reduce(((r,t)=>(y.f[t](e,r),r)),[])),y.u=e=>"bot/js/bot."+({101:"martingale-xml",113:"oscars_grind-xml",297:"dbot-collection",406:"dalembert-xml",558:"bot-web-ui-app"}[e]||e)+"."+{101:"83bb7a242dae3db3b78a",113:"99a58197afae1b3a8a0b",297:"f14820dbd61c06f9575b",371:"014895e2685ab82b7ed3",406:"abe64e37e5360a0ba434",558:"fd866ff297eec4998799"}[e]+".js",y.miniCssF=e=>"bot/css/bot.bot-web-ui-app.06724ae9ae82474184df.css",y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),y.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),f={},b="@deriv/bot-web-ui:",y.l=(e,r,t,o)=>{if(f[e])f[e].push(r);else{var a,n;if(void 0!==t)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var d=i[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==b+t){a=d;break}}a||(n=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,y.nc&&a.setAttribute("nonce",y.nc),a.setAttribute("data-webpack",b+t),a.src=e),f[e]=[r];var u=(r,t)=>{a.onerror=a.onload=null,clearTimeout(l);var o=f[e];if(delete f[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(t))),r)return r(t)},l=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),n&&document.head.appendChild(a)}},y.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},y.p="/br_fix_market_scroll/",p=e=>new Promise(((r,t)=>{var o=y.miniCssF(e),a=y.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=(i=t[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){var i;if((a=(i=n[o]).getAttribute("data-href"))===e||a===r)return i}})(o,a))return r();((e,r,t,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=n=>{if(a.onerror=a.onload=null,"load"===n.type)t();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,a.parentNode.removeChild(a),o(d)}},a.href=r,document.head.appendChild(a)})(e,a,r,t)})),m={179:0},y.f.miniCss=(e,r)=>{m[e]?r.push(m[e]):0!==m[e]&&{558:1}[e]&&r.push(m[e]=p(e).then((()=>{m[e]=0}),(r=>{throw delete m[e],r})))},(()=>{var e={179:0};y.f.j=(r,t)=>{var o=y.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,a)=>{o=e[r]=[t,a]}));t.push(o[2]=a);var n=y.p+y.u(r),i=new Error;y.l(n,(t=>{if(y.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var o,a,[n,i,s]=t,d=0,u=[];d<n.length;d++)a=n[d],y.o(e,a)&&e[a]&&u.push(e[a][0]),e[a]=0;for(o in i)y.o(i,o)&&(y.m[o]=i[o]);for(s&&s(y),r&&r(t);u.length;)u.shift()()},t=self.webpackChunk_deriv_bot_web_ui=self.webpackChunk_deriv_bot_web_ui||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var g={};return(()=>{y.d(g,{default:()=>o});var e=y(9297),r=y(3140),t=y(8124);const o=(0,r.makeLazyLoader)((function(){return Promise.all([y.e(371),y.e(558)]).then(y.bind(y,4783))}),(function(){return e.createElement(t.Loading,null)}))()})(),g.default})()}));