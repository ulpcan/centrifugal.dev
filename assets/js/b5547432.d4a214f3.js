"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7330],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5362:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),s=["components"],i={id:"process_stats",title:"CPU and RSS stats"},c=void 0,p={unversionedId:"pro/process_stats",id:"pro/process_stats",isDocsHomePage:!1,title:"CPU and RSS stats",description:"A useful addition of Centrifugo PRO is an ability to show CPU and RSS memory usage of each node in admin web UI.",source:"@site/docs/pro/process_stats.md",sourceDirName:"pro",slug:"/pro/process_stats",permalink:"/docs/pro/process_stats",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/process_stats.md",version:"current",frontMatter:{id:"process_stats",title:"CPU and RSS stats"},sidebar:"Pro",previous:{title:"Database-driven namespaces",permalink:"/docs/pro/db_namespaces"}},u=[],l={toc:u};function f(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A useful addition of Centrifugo PRO is an ability to show CPU and RSS memory usage of each node in admin web UI."),(0,a.kt)("p",null,"Here is how this looks like:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Process stats",src:r(253).Z})),(0,a.kt)("p",null,"The information updated in near real-time (with several seconds delay). It's also available as part of ",(0,a.kt)("inlineCode",{parentName:"p"},"info")," API."))}f.isMDXComponent=!0},253:function(e,t,r){t.Z=r.p+"assets/images/process_stats-1688724cedb753c08b28e0b20efa1c81.png"}}]);