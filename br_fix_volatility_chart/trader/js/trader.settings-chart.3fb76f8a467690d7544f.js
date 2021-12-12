"use strict";(self.webpackChunk_deriv_trader=self.webpackChunk_deriv_trader||[]).push([["settings-chart"],{"./App/Containers/SettingsModal/settings-chart.jsx":(e,t,l)=>{l.r(t),l.d(t,{default:()=>x});var n=l("../../../node_modules/prop-types/index.js"),r=l.n(n),c=l("react"),a=l.n(c),o=l("@deriv/components"),i=l("@deriv/translations"),s=l("./Stores/connect.js"),v=function(e){return c.createElement("div",{className:"media__description"},e.children)},m=function(e){return c.createElement("div",{className:"media__heading"},e.children)},f=function(e){var t=e.id,l=e.is_enabled,n=e.enabled,r=e.disabled,a=l?n:r;return c.createElement(a,{id:t,className:"media__icon"})};f.propTypes={disabled:r().func,enabled:r().func,id:r().string,is_enabled:r().bool};const u=function(e){return c.createElement("div",{className:"media"},e.children)};var p=["styles"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}const h=function(e){e.styles;var t=function(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}(e,p);return a().createElement("svg",d({width:"160",height:"120",xmlns:"http://www.w3.org/2000/svg"},t),a().createElement("title",null,"Group"),a().createElement("defs",null,a().createElement("linearGradient",{x1:"50%",y1:"147.77%",x2:"50%",y2:"10.76%",id:"a"},a().createElement("stop",{stopColor:"#101320",stopOpacity:"0",offset:"0%"}),a().createElement("stop",{stopColor:"#FFF",stopOpacity:".16",offset:"100%"}))),a().createElement("g",{fill:"none",fillRule:"evenodd"},a().createElement("rect",{fill:"#151717",fillRule:"nonzero",width:"160",height:"120",rx:"4"}),a().createElement("path",{fillOpacity:".8",fill:"url(#a)",d:"M96 34.45l-9.5-.06-5 26.27-2-19.7-25-6.57-2-18.39-23 18.39-4 19.7-3-38.09-9 57.79H0v45.31l96 .9z"}),a().createElement("path",{d:"M96 34.08c-.03.33-.24.59-.5.59h-8.57L82 60.34c-.1.74-.92.73-1-.02l-1.98-19.49-24.9-6.4a.77.77 0 01-.11-.33l-1.9-17.37-22.18 17.7-3.95 19.42c-.14.7-.92.62-.98-.1l-2.66-33.78-8.35 53.5c-.05.31-.25.53-.49.53H0v-1.31h13.1L22 15.52c.12-.73.93-.68.99.07l2.72 34.47 3.3-16.22c.03-.16.11-.3.22-.39l23-18.35c.3-.25.7 0 .76.46l1.98 18.18 24.91 6.42c.06.1.1.2.1.32l1.57 15.33L86 33.91c.04-.32.25-.55.5-.55 5.25-.04 8.1-.04 8.54 0 .44.03.76.27.95.72z",fill:"#FFF",fillRule:"nonzero"}),a().createElement("path",{d:"M115.28 33.67l6.44-7.67H160v16h-38.28l-6.44-7.67H113v-.66h2.28zm-16.42 0h.8v.66H99v.07a2 2 0 11-.14-.73zm3.47.66v-.66H105v.66h-2.67zm5.34 0v-.66h2.66v.66h-2.66z",fill:"#FF444F"})))};var z=["styles"];function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}const E=function(e){e.styles;var t=function(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}(e,z);return a().createElement("svg",y({width:"160",height:"120",xmlns:"http://www.w3.org/2000/svg"},t),a().createElement("title",null,"Group"),a().createElement("defs",null,a().createElement("linearGradient",{x1:"50%",y1:"147.77%",x2:"50%",y2:"10.76%",id:"a"},a().createElement("stop",{stopColor:"#101320",stopOpacity:"0",offset:"0%"}),a().createElement("stop",{stopColor:"#FFF",stopOpacity:".16",offset:"100%"}))),a().createElement("g",{fill:"none",fillRule:"evenodd"},a().createElement("rect",{fill:"#151717",fillRule:"nonzero",width:"160",height:"120",rx:"4"}),a().createElement("path",{fillOpacity:".8",fill:"url(#a)",d:"M96 34.45l-9.5-.06-5 26.27-2-19.7-25-6.57-2-18.39-23 18.39-4 19.7-3-38.09-9 57.79H0v45.31l96 .9z"}),a().createElement("path",{d:"M96 34.08c-.03.33-.24.59-.5.59h-8.57L82 60.34c-.1.74-.92.73-1-.02l-1.98-19.49-24.9-6.4a.77.77 0 01-.11-.33l-1.9-17.37-22.18 17.7-3.95 19.42c-.14.7-.92.62-.98-.1l-2.66-33.78-8.35 53.5c-.05.31-.25.53-.49.53H0v-1.31h13.1L22 15.52c.12-.73.93-.68.99.07l2.72 34.47 3.3-16.22c.03-.16.11-.3.22-.39l23-18.35c.3-.25.7 0 .76.46l1.98 18.18 24.91 6.42c.06.1.1.2.1.32l1.57 15.33L86 33.91c.04-.32.25-.55.5-.55 5.25-.04 8.1-.04 8.54 0 .44.03.76.27.95.72z",fill:"#FFF",fillRule:"nonzero"}),a().createElement("path",{d:"M115.28 33.67l6.44-7.67H160v16h-38.28l-6.44-7.67H113v-.66h2.28zm-16.42 0h.8v.66H99v.07a2 2 0 11-.14-.73zm3.47.66v-.66H105v.66h-2.67zm5.34 0v-.66h2.66v.66h-2.66z",fill:"#FF444F"}),a().createElement("g",{fillRule:"nonzero"},a().createElement("path",{fill:"#323738",d:"M115 42h45v16h-45z"}),a().createElement("path",{d:"M121.1 53.7a3.59 3.59 0 100-7.19 3.59 3.59 0 000 7.18zm0 .5a4.1 4.1 0 110-8.2 4.1 4.1 0 010 8.2zm1.47-3a.26.26 0 01-.37.37l-1.28-1.29a.26.26 0 01-.07-.18v-2.3a.26.26 0 01.5 0V50l1.22 1.2zm8.47-.63a3.3 3.3 0 01-.43 1.9c-.3.4-.75.6-1.36.6-.6 0-1.06-.2-1.35-.6-.29-.4-.44-1-.45-1.8v-.96c0-.84.14-1.46.43-1.87.3-.4.74-.6 1.36-.6.61 0 1.06.19 1.35.58.3.4.44 1 .45 1.82v.93zm-.72-.98c0-.62-.09-1.06-.26-1.34s-.45-.42-.82-.42c-.37 0-.64.14-.8.42-.18.27-.26.7-.27 1.28v1.16c0 .61.1 1.07.27 1.36.18.3.45.44.81.44.36 0 .62-.14.8-.42.17-.27.26-.7.27-1.3v-1.18zm5.21.98a3.3 3.3 0 01-.43 1.9c-.3.4-.74.6-1.36.6-.6 0-1.05-.2-1.35-.6-.29-.4-.44-1-.45-1.8v-.96c0-.84.15-1.46.44-1.87.28-.4.74-.6 1.35-.6.62 0 1.07.19 1.36.58.29.4.43 1 .44 1.82v.93zm-.72-.98c0-.62-.09-1.06-.26-1.34s-.44-.42-.82-.42c-.37 0-.63.14-.8.42-.17.27-.26.7-.27 1.28v1.16c0 .61.1 1.07.27 1.36.18.3.45.44.81.44.36 0 .62-.14.8-.42.17-.27.26-.7.27-1.3v-1.18zm1.7 3.03c0-.12.03-.23.1-.31.08-.08.2-.13.34-.13.15 0 .26.05.34.13.08.08.12.19.12.31s-.04.22-.12.3c-.08.08-.19.12-.34.12-.15 0-.26-.04-.33-.12a.43.43 0 01-.11-.3zm0-3.45c0-.12.04-.23.11-.31.08-.08.19-.13.34-.13.15 0 .26.05.33.13.08.08.12.19.12.31s-.04.22-.12.3c-.07.08-.18.12-.33.12-.15 0-.26-.04-.34-.12a.43.43 0 01-.1-.3zm5.45 1.4a3.3 3.3 0 01-.43 1.9c-.3.4-.74.6-1.36.6-.6 0-1.05-.2-1.35-.6-.29-.4-.44-1-.45-1.8v-.96c0-.84.15-1.46.43-1.87.3-.4.75-.6 1.36-.6.62 0 1.07.19 1.36.58.28.4.43 1 .44 1.82v.93zm-.72-.98c0-.62-.09-1.06-.26-1.34s-.44-.42-.82-.42c-.37 0-.64.14-.8.42-.17.27-.26.7-.27 1.28v1.16c0 .61.1 1.07.27 1.36.18.3.45.44.81.44.36 0 .62-.14.8-.42.17-.27.26-.7.27-1.3v-1.18zm5.21.98a3.3 3.3 0 01-.43 1.9c-.29.4-.74.6-1.36.6-.6 0-1.05-.2-1.34-.6-.3-.4-.45-1-.46-1.8v-.96c0-.84.15-1.46.44-1.87.29-.4.74-.6 1.36-.6.6 0 1.06.19 1.35.58.29.4.44 1 .44 1.82v.93zm-.72-.98c0-.62-.09-1.06-.26-1.34s-.44-.42-.81-.42c-.37 0-.64.14-.81.42-.17.27-.26.7-.26 1.28v1.16c0 .61.09 1.07.26 1.36.18.3.45.44.81.44.36 0 .63-.14.8-.42.17-.27.26-.7.27-1.3v-1.18zm1.7 3.03c0-.12.04-.23.11-.31.08-.08.19-.13.34-.13.14 0 .26.05.33.13.08.08.12.19.12.31s-.04.22-.12.3c-.07.08-.19.12-.34.12-.14 0-.25-.04-.33-.12a.43.43 0 01-.11-.3zm0-3.45c0-.12.04-.23.11-.31.08-.08.19-.13.34-.13.15 0 .26.05.34.13.07.08.11.19.11.31s-.04.22-.11.3c-.08.08-.2.12-.34.12-.15 0-.26-.04-.34-.12a.43.43 0 01-.1-.3zm5.45 1.4a3.3 3.3 0 01-.43 1.9c-.29.4-.74.6-1.36.6-.6 0-1.05-.2-1.34-.6-.3-.4-.45-1-.46-1.8v-.96c0-.84.15-1.46.44-1.87.29-.4.74-.6 1.36-.6.6 0 1.06.19 1.35.58.29.4.44 1 .44 1.82v.93zm-.72-.98c0-.62-.09-1.06-.26-1.34s-.44-.42-.81-.42c-.37 0-.64.14-.81.42-.17.27-.26.7-.26 1.28v1.16c0 .61.08 1.07.26 1.36.18.3.45.44.81.44.36 0 .63-.14.8-.42.17-.27.26-.7.27-1.3v-1.18zm5.21.98a3.3 3.3 0 01-.43 1.9c-.29.4-.74.6-1.35.6-.61 0-1.06-.2-1.35-.6-.3-.4-.44-1-.45-1.8v-.96c0-.84.14-1.46.43-1.87.29-.4.74-.6 1.36-.6.61 0 1.06.19 1.35.58.29.4.44 1 .44 1.82v.93zm-.72-.98c0-.62-.08-1.06-.26-1.34-.17-.28-.44-.42-.81-.42-.37 0-.64.14-.81.42-.17.27-.26.7-.26 1.28v1.16c0 .61.09 1.07.27 1.36.17.3.44.44.8.44.36 0 .63-.14.8-.42.17-.27.26-.7.27-1.3v-1.18z",fill:"#FFF"}))))};var g=["styles"];function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}const O=function(e){e.styles;var t=function(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}(e,g);return a().createElement("svg",b({width:"160",height:"120",xmlns:"http://www.w3.org/2000/svg"},t),a().createElement("title",null,"Group"),a().createElement("defs",null,a().createElement("linearGradient",{x1:"50%",y1:"126.02%",x2:"50%",y2:"32.91%",id:"a"},a().createElement("stop",{stopColor:"#FFF",stopOpacity:"0",offset:"0%"}),a().createElement("stop",{stopColor:"#85ACB0",stopOpacity:".16",offset:"100%"}))),a().createElement("g",{fill:"none",fillRule:"evenodd"},a().createElement("path",{fill:"#F2F3F4",fillRule:"nonzero",d:"M0 0h160v120H0z"}),a().createElement("path",{fill:"url(#a)",d:"M96 34.45l-9.5-.06-5 26.27-2-19.7-25-6.57-2-18.39-23 18.39-4 19.7-3-38.09-9 57.79H0v45.31l96 .9z"}),a().createElement("path",{d:"M96 34.08c-.03.33-.24.59-.5.59h-8.57L82 60.34c-.1.74-.92.73-1-.02l-1.98-19.49-24.9-6.4a.77.77 0 01-.11-.33l-1.9-17.37-22.18 17.7-3.95 19.42c-.14.7-.92.62-.98-.1l-2.66-33.78-8.35 53.5c-.05.31-.25.53-.49.53H0v-1.31h13.1L22 15.52c.12-.73.93-.68.99.07l2.72 34.47 3.3-16.22c.03-.16.11-.3.22-.39l23-18.35c.3-.25.7 0 .76.46l1.98 18.18 24.91 6.42c.06.1.1.2.1.32l1.57 15.33L86 33.91c.04-.32.25-.55.5-.55 5.25-.04 8.1-.04 8.54 0 .44.03.76.27.95.72z",fill:"#85ACB0",fillRule:"nonzero"}),a().createElement("path",{d:"M115.28 33.67l6.44-7.67H160v16h-38.28l-6.44-7.67H113v-.66h2.28zm-16.42 0h.8v.66H99v.07a2 2 0 11-.14-.73zm3.47.66v-.66H105v.66h-2.67zm5.34 0v-.66h2.66v.66h-2.66z",fill:"#FF444F",fillRule:"nonzero"})))};var w=["styles"];function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}const _=function(e){e.styles;var t=function(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)l=c[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}(e,w);return a().createElement("svg",F({width:"160",height:"120",xmlns:"http://www.w3.org/2000/svg"},t),a().createElement("title",null,"Group"),a().createElement("defs",null,a().createElement("linearGradient",{x1:"50%",y1:"126.02%",x2:"50%",y2:"32.91%",id:"a"},a().createElement("stop",{stopColor:"#FFF",stopOpacity:"0",offset:"0%"}),a().createElement("stop",{stopColor:"#85ACB0",stopOpacity:".16",offset:"100%"}))),a().createElement("g",{fill:"none",fillRule:"evenodd"},a().createElement("path",{fill:"#F2F3F4",fillRule:"nonzero",d:"M0 0h160v120H0z"}),a().createElement("path",{fill:"url(#a)",d:"M96 34.45l-9.5-.06-5 26.27-2-19.7-25-6.57-2-18.39-23 18.39-4 19.7-3-38.09-9 57.79H0v45.31l96 .9z"}),a().createElement("path",{d:"M96 34.08c-.03.33-.24.59-.5.59h-8.57L82 60.34c-.1.74-.92.73-1-.02l-1.98-19.49-24.9-6.4a.77.77 0 01-.11-.33l-1.9-17.37-22.18 17.7-3.95 19.42c-.14.7-.92.62-.98-.1l-2.66-33.78-8.35 53.5c-.05.31-.25.53-.49.53H0v-1.31h13.1L22 15.52c.12-.73.93-.68.99.07l2.72 34.47 3.3-16.22c.03-.16.11-.3.22-.39l23-18.35c.3-.25.7 0 .76.46l1.98 18.18 24.91 6.42c.06.1.1.2.1.32l1.57 15.33L86 33.91c.04-.32.25-.55.5-.55 5.25-.04 8.1-.04 8.54 0 .44.03.76.27.95.72z",fill:"#85ACB0",fillRule:"nonzero"}),a().createElement("path",{d:"M115.28 33.67l6.44-7.67H160v16h-38.28l-6.44-7.67H113v-.66h2.28zm-16.42 0h.8v.66H99v.07a2 2 0 11-.14-.73zm3.47.66v-.66H105v.66h-2.67zm5.34 0v-.66h2.66v.66h-2.66z",fill:"#FF444F",fillRule:"nonzero"}),a().createElement("path",{fill:"#000",fillRule:"nonzero",d:"M115 42h45v16h-45z"}),a().createElement("path",{d:"M121.1 53.7a3.59 3.59 0 100-7.19 3.59 3.59 0 000 7.18zm0 .5a4.1 4.1 0 110-8.2 4.1 4.1 0 010 8.2zm1.47-3a.26.26 0 01-.37.37l-1.28-1.29a.26.26 0 01-.07-.18v-2.3a.26.26 0 01.5 0V50l1.22 1.2zm8.47-.63a3.3 3.3 0 01-.43 1.9c-.3.4-.75.6-1.36.6-.6 0-1.06-.2-1.35-.6-.29-.4-.44-1-.45-1.8v-.96c0-.84.14-1.46.43-1.87.3-.4.74-.6 1.36-.6.61 0 1.06.19 1.35.58.3.4.44 1 .45 1.82v.93zm-.72-.98c0-.62-.09-1.06-.26-1.34s-.45-.42-.82-.42c-.37 0-.64.14-.8.42-.18.27-.26.7-.27 1.28v1.16c0 .61.1 1.07.27 1.36.18.3.45.44.81.44.36 0 .62-.14.8-.42.17-.27.26-.7.27-1.3v-1.18zm5.21.98a3.3 3.3 0 01-.43 1.9c-.3.4-.74.6-1.36.6-.6 0-1.05-.2-1.35-.6-.29-.4-.44-1-.45-1.8v-.96c0-.84.15-1.46.44-1.87.28-.4.74-.6 1.35-.6.62 0 1.07.19 1.36.58.29.4.43 1 .44 1.82v.93zm-.72-.98c0-.62-.09-1.06-.26-1.34s-.44-.42-.82-.42c-.37 0-.63.14-.8.42-.17.27-.26.7-.27 1.28v1.16c0 .61.1 1.07.27 1.36.18.3.45.44.81.44.36 0 .62-.14.8-.42.17-.27.26-.7.27-1.3v-1.18zm1.7 3.03c0-.12.03-.23.1-.31.08-.08.2-.13.34-.13.15 0 .26.05.34.13.08.08.12.19.12.31s-.04.22-.12.3c-.08.08-.19.12-.34.12-.15 0-.26-.04-.33-.12a.43.43 0 01-.11-.3zm0-3.45c0-.12.04-.23.11-.31.08-.08.19-.13.34-.13.15 0 .26.05.33.13.08.08.12.19.12.31s-.04.22-.12.3c-.07.08-.18.12-.33.12-.15 0-.26-.04-.34-.12a.43.43 0 01-.1-.3zm5.45 1.4a3.3 3.3 0 01-.43 1.9c-.3.4-.74.6-1.36.6-.6 0-1.05-.2-1.35-.6-.29-.4-.44-1-.45-1.8v-.96c0-.84.15-1.46.43-1.87.3-.4.75-.6 1.36-.6.62 0 1.07.19 1.36.58.28.4.43 1 .44 1.82v.93zm-.72-.98c0-.62-.09-1.06-.26-1.34s-.44-.42-.82-.42c-.37 0-.64.14-.8.42-.17.27-.26.7-.27 1.28v1.16c0 .61.1 1.07.27 1.36.18.3.45.44.81.44.36 0 .62-.14.8-.42.17-.27.26-.7.27-1.3v-1.18zm5.21.98a3.3 3.3 0 01-.43 1.9c-.29.4-.74.6-1.36.6-.6 0-1.05-.2-1.34-.6-.3-.4-.45-1-.46-1.8v-.96c0-.84.15-1.46.44-1.87.29-.4.74-.6 1.36-.6.6 0 1.06.19 1.35.58.29.4.44 1 .44 1.82v.93zm-.72-.98c0-.62-.09-1.06-.26-1.34s-.44-.42-.81-.42c-.37 0-.64.14-.81.42-.17.27-.26.7-.26 1.28v1.16c0 .61.09 1.07.26 1.36.18.3.45.44.81.44.36 0 .63-.14.8-.42.17-.27.26-.7.27-1.3v-1.18zm1.7 3.03c0-.12.04-.23.11-.31.08-.08.19-.13.34-.13.14 0 .26.05.33.13.08.08.12.19.12.31s-.04.22-.12.3c-.07.08-.19.12-.34.12-.14 0-.25-.04-.33-.12a.43.43 0 01-.11-.3zm0-3.45c0-.12.04-.23.11-.31.08-.08.19-.13.34-.13.15 0 .26.05.34.13.07.08.11.19.11.31s-.04.22-.11.3c-.08.08-.2.12-.34.12-.15 0-.26-.04-.34-.12a.43.43 0 01-.1-.3zm5.45 1.4a3.3 3.3 0 01-.43 1.9c-.29.4-.74.6-1.36.6-.6 0-1.05-.2-1.34-.6-.3-.4-.45-1-.46-1.8v-.96c0-.84.15-1.46.44-1.87.29-.4.74-.6 1.36-.6.6 0 1.06.19 1.35.58.29.4.44 1 .44 1.82v.93zm-.72-.98c0-.62-.09-1.06-.26-1.34s-.44-.42-.81-.42c-.37 0-.64.14-.81.42-.17.27-.26.7-.26 1.28v1.16c0 .61.08 1.07.26 1.36.18.3.45.44.81.44.36 0 .63-.14.8-.42.17-.27.26-.7.27-1.3v-1.18zm5.22.98a3.3 3.3 0 01-.44 1.9c-.29.4-.74.6-1.35.6-.61 0-1.06-.2-1.35-.6-.3-.4-.44-1-.45-1.8v-.96c0-.84.14-1.46.43-1.87.29-.4.74-.6 1.36-.6.61 0 1.06.19 1.35.58.29.4.44 1 .44 1.82v.93zm-.73-.98c0-.62-.08-1.06-.26-1.34-.17-.28-.44-.42-.81-.42-.37 0-.64.14-.81.42-.17.27-.26.7-.26 1.28v1.16c0 .61.09 1.07.27 1.36.17.3.44.44.8.44.36 0 .63-.14.8-.42.17-.27.26-.7.27-1.3v-1.18z",fill:"#FFF",fillRule:"nonzero"})))};var j=function(e){var t=e.is_countdown_visible,l=e.is_dark_mode,n=e.setCountdown;return c.createElement("div",{className:"settings-chart"},c.createElement(u,null,c.createElement(m,null,c.createElement(i.Localize,{i18n_default_text:"Interval duration"})),c.createElement(v,null,c.createElement(f,{disabled:l?h:O,enabled:l?E:_,id:"dt_settings_interval_image",is_enabled:t}),c.createElement("div",{className:"media__form"},c.createElement(o.Checkbox,{id:"dt_settings_interval_checkbox",defaultChecked:t,label:(0,i.localize)("Display remaining time for each interval"),onChange:function(e){n(e.target.checked)}})))))};j.propTypes={is_countdown_visible:r().bool,is_dark_mode:r().bool};const x=(0,s.$j)((function(e){var t=e.ui;return{is_countdown_visible:t.is_chart_countdown_visible,is_dark_mode:t.is_dark_mode_on,setCountdown:t.setChartCountdown}}))(j)}}]);