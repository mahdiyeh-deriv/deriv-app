!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/shared"),require("@deriv/translations")):e["@deriv/account"]=r(e["@deriv/shared"],e["@deriv/translations"])}(self,(function(e,r){return(()=>{"use strict";var t={"@deriv/shared":r=>{r.exports=e},"@deriv/translations":e=>{e.exports=r}},o={};function a(e){if(o[e])return o[e].exports;var r=o[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var s={};return(()=>{a.d(s,{default:()=>o});var e=a("@deriv/shared"),r=a("@deriv/translations"),t={agreed_tos:{supported_in:["svg","iom"],default_value:!1},agreed_tnc:{supported_in:["svg","iom"],default_value:!1}};const o=function(o,a){var s=o.real_account_signup_target,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=i?(0,r.localize)("Our terms of use"):(0,r.localize)("Terms of use");return{header:{active_title:(0,e.isDesktop)()?n:null,title:i?(0,r.localize)("TERMS OF USE"):(0,r.localize)("Terms of use")},body:a,form_value:(0,e.getDefaultFields)(s,t),props:{real_account_signup_target:s},icon:"IcDashboardTermsOfUse"}}})(),s.default})()}));