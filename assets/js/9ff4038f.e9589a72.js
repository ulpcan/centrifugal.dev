"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=o,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(3117),o=(n(7294),n(3905));const a={id:"introduction",title:"Centrifugo introduction"},i=void 0,s={unversionedId:"getting-started/introduction",id:"getting-started/introduction",title:"Centrifugo introduction",description:"Centrifugo is an open-source scalable real-time messaging server. Centrifugo can instantly deliver messages to application online users connected over supported transports (WebSocket, HTTP-streaming, SSE/EventSource, WebTransport, GRPC, SockJS). Centrifugo has the concept of a channel \u2013 so it's a user-facing PUB/SUB server.",source:"@site/docs/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/docs/getting-started/introduction",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/getting-started/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Centrifugo introduction"},sidebar:"Introduction",next:{title:"Install Centrifugo",permalink:"/docs/getting-started/installation"}},c={},l=[{value:"Background",id:"background",level:2},{value:"Join community",id:"join-community",level:2}],u={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/logo_animated_no_accel.svg",width:"75px",height:"75px",align:"left",style:{marginRight:"10px",float:"left"}}),(0,o.kt)("p",null,"Centrifugo is an open-source scalable real-time messaging server. Centrifugo can instantly deliver messages to application online users connected over supported transports (WebSocket, HTTP-streaming, SSE/EventSource, WebTransport, GRPC, SockJS). Centrifugo has the concept of a channel \u2013 so it's a user-facing PUB/SUB server."),(0,o.kt)("p",null,"Centrifugo is language-agnostic and can be used to build chat apps, live comments, multiplayer games, real-time data visualizations, collaborative tools, etc. in combination with any backend. It is well suited for modern architectures and allows decoupling the business logic from the real-time transport layer."),(0,o.kt)("p",null,"Several official client SDKs for browser and mobile development wrap the bidirectional protocol. In addition, Centrifugo supports a unidirectional approach for simple use cases with no SDK dependency."),(0,o.kt)("admonition",{title:"Real-time?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By real-time, we indicate a soft real-time. Due to network latencies, garbage collection cycles, and so on, the delay of a delivered message can be up to several hundred milliseconds or higher.")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(740).Z,width:"2000",height:"1068"})),(0,o.kt)("p",null,"Centrifugo was born a decade ago to help applications with a server-side written in a language or a framework without built-in concurrency support. In this case, dealing with persistent connections is a real headache that usually can only be resolved by introducing a shift in the technology stack and spending time to create a production-ready solution."),(0,o.kt)("p",null,"For example, frameworks like Django, Flask, Yii, Laravel, Ruby on Rails, and others have poor or not really performant support of working with many persistent connections for the real-time messaging tasks."),(0,o.kt)("p",null,"In this case, Centrifugo is a straightforward and non-obtrusive way to introduce real-time updates and handle lots of persistent connections without radical changes in the application backend architecture. Developers could proceed writing the application backend with a favorite language or favorite framework, keep existing architecture \u2013 and just let Centrifugo deal with persistent connections."),(0,o.kt)("p",null,"At the moment, Centrifugo provides some advanced and unique features that can simplify a developer's life and save months of development, even if the application backend is built with the asynchronous concurrent language. One example is that Centrifugo can scale out-of-the-box to many machines with several supported brokers. And there are more things to mention \u2013 see detailed highlights further in the docs."),(0,o.kt)("h2",{id:"join-community"},"Join community"),(0,o.kt)("p",null,"By the way, we have rooms in Telegram (the most active) and Discord:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Telegram-Group-orange?style=flat&logo=telegram",alt:"Join the chat at https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ"}))," ","\xa0",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/tYgADKx"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/719186998686122046?style=flat&label=Discord&logo=discord",alt:"Join the chat at https://discord.gg/tYgADKx"}))),(0,o.kt)("p",null,"We also have ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/centrifugal_dev"},"Twitter account")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCdQmdbYM5pzqrrRFmt6KA1Q"},"Youtube channel"),"."),(0,o.kt)("p",null,"See you there!"))}d.isMDXComponent=!0},740:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/bg_cat-4454fbaae0446c3b1964e06821dd378b.jpg"}}]);