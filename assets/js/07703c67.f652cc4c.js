"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={id:"history_and_recovery",title:"History and recovery"},a=void 0,s={unversionedId:"server/history_and_recovery",id:"server/history_and_recovery",title:"History and recovery",description:"Centrifugo engines can maintain publication history for channels with configured history size and TTL.",source:"@site/docs/server/history_and_recovery.md",sourceDirName:"server",slug:"/server/history_and_recovery",permalink:"/docs/server/history_and_recovery",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/history_and_recovery.md",tags:[],version:"current",frontMatter:{id:"history_and_recovery",title:"History and recovery"},sidebar:"Guides",previous:{title:"Proxy events to the backend",permalink:"/docs/server/proxy"},next:{title:"Online presence",permalink:"/docs/server/presence"}},l={},c=[{value:"History design",id:"history-design",level:2},{value:"History iteration API",id:"history-iteration-api",level:2},{value:"Automatic message recovery",id:"automatic-message-recovery",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Centrifugo engines can maintain publication history for channels with configured history size and TTL."),(0,r.kt)("h2",{id:"history-design"},"History design"),(0,r.kt)("p",null,"History properties configured on a namespace level, to enable history both ",(0,r.kt)("inlineCode",{parentName:"p"},"history_size")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"history_ttl")," should be set to a value greater than zero. "),(0,r.kt)("p",null,"Centrifugo is designed with an idea that history streams are ephemeral (can be created on the fly without explicit create call from Centrifugo users) and can expire or can be lost at any moment. Centrifugo provides a way for a client to understand that channel history lost. In this case, the main application database should be the source of truth and state recovery."),(0,r.kt)("p",null,"When history is on every message published into a channel is saved into a history stream. The persistence properties of history are dictated by a Centrifugo engine used. For example, in the case of the Memory engine, all history is stored in process memory. So as soon as Centrifugo restarted all history is cleared. When using Redis engine history is kept in Redis Stream data structure - persistence properties are then inherited from Redis persistence configuration (the same for KeyDB engine). For Tarantool history is kept inside Tarantool spaces."),(0,r.kt)("p",null,"Each publication when added to history has an ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," field. This is an incremental ",(0,r.kt)("inlineCode",{parentName:"p"},"uint64")," field. Each stream is identified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch")," field - which is an arbitrary string. As soon as the underlying engine loses data epoch field will change for a stream thus letting consumers know that stream can't be used as the source of state recovery anymore."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"History in channels is not enabled by default. See how to enable it over ",(0,r.kt)("a",{parentName:"p",href:"/docs/server/channels#channel-options"},"channel options"),". History is available in both server and client API.")),(0,r.kt)("h2",{id:"history-iteration-api"},"History iteration API"),(0,r.kt)("p",null,"History iteration based on three fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"limit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"since")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reverse"))),(0,r.kt)("p",null,"Combining these fields you can iterate over a stream in both directions."),(0,r.kt)("p",null,"Get current stream top offset and epoch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"history(limit: 0, since: null, reverse: false)\n")),(0,r.kt)("p",null,"Get full history from the current beginning (but up to ",(0,r.kt)("inlineCode",{parentName:"p"},"client_history_max_publication_limit"),", which is ",(0,r.kt)("inlineCode",{parentName:"p"},"300")," by default):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"history(limit: -1, since: null, reverse: false)\n")),(0,r.kt)("p",null,"Get full history from the current end (but up to ",(0,r.kt)("inlineCode",{parentName:"p"},"client_history_max_publication_limit"),", which is ",(0,r.kt)("inlineCode",{parentName:"p"},"300")," by default):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"history(limit: -1, since: null, reverse: true)\n")),(0,r.kt)("p",null,"Get history from the current beginning (up to 10):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"history(limit: 10, since: null, reverse: false)\n")),(0,r.kt)("p",null,"Get history from the current end in reversed direction (up to 10):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"history(limit: 10, since: null, reverse: true) \n")),(0,r.kt)("p",null,"Get up to 10 publications since known stream position (described by offset and epoch values):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'history(limit: 10, since: {offset: 0, epoch: "epoch"}, reverse: false)\n')),(0,r.kt)("p",null,"Get up to 10 publications since known stream position (described by offset and epoch values) but in reversed direction (from last to earliest):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'history(limit: 10, since: {offset: 11, epoch: "epoch"}, reverse: true)\n')),(0,r.kt)("p",null,"Here is an example program in Go which endlessly iterates over stream both ends (using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/gocent"},"gocent")," API library), upon reaching the end of stream the iteration goes in reversed direction (not really useful in real world but fun): "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Iterate by 10.\nlimit := 10\n// Paginate in reversed order first, then invert it.\nreverse := true\n// Start with nil StreamPosition, then fill it with value while paginating.\nvar sp *gocent.StreamPosition\n\nfor {\n    historyResult, err = c.History(\n        ctx,\n        channel,\n        gocent.WithLimit(limit),\n        gocent.WithReverse(reverse),\n        gocent.WithSince(sp),\n    )\n    if err != nil {\n        log.Fatalf("Error calling history: %v", err)\n    }\n    for _, pub := range historyResult.Publications {\n        log.Println(pub.Offset, "=>", string(pub.Data))\n        sp = &gocent.StreamPosition{\n            Offset: pub.Offset,\n            Epoch:  historyResult.Epoch,\n        }\n    }\n    if len(historyResult.Publications) < limit {\n        // Got all pubs, invert pagination direction.\n        reverse = !reverse\n        log.Println("end of stream reached, change iteration direction")\n    }\n}\n')),(0,r.kt)("h2",{id:"automatic-message-recovery"},"Automatic message recovery"),(0,r.kt)("p",null,"One of the most interesting features of Centrifugo is automatic message recovery after short network disconnects. This mechanism allows a client to automatically restore missed publications on successful resubscribe to a channel after being disconnected for a while."),(0,r.kt)("p",null,"In general, you could query your application backend for the actual state on every client reconnect - but the message recovery feature allows Centrifugo to deal with this and restore missed publications from the history cache thus radically reducing the load on your application backend and your main application database in some scenarios (when many clients reconnect at the same time)."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Message recovery protocol feature designed to be used together with reasonably small history stream size as all missed publications sent towards the client in one protocol frame on resubscribing to a channel. Thus, it is mostly suitable for short-time disconnects. It helps a lot to survive a reconnect storm when many clients reconnect at one moment (balancer reload, network glitch) - but it's not a good idea to recover a long list of missed messages after clients being offline for a long time.")),(0,r.kt)("p",null,"To enable recovery mechanism for channels set the ",(0,r.kt)("inlineCode",{parentName:"p"},"force_recovery")," boolean configuration option to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," on the configuration file top-level or for a channel namespace. Make sure to enable this option in namespaces where history is on. It's also possible to ask for enabling recovery from the client-side when configuring Subscription object \u2013 in this case client must have a permission to call history API."),(0,r.kt)("p",null,"When re-subscribing on channels Centrifugo will return missed ",(0,r.kt)("inlineCode",{parentName:"p"},"publications")," to a client in a subscribe ",(0,r.kt)("inlineCode",{parentName:"p"},"Reply"),", also it will return a special ",(0,r.kt)("inlineCode",{parentName:"p"},"recovered")," boolean flag to indicate whether all missed publications successfully recovered after a disconnect or not."),(0,r.kt)("p",null,"The number of publications that is possible to automatically recover is controlled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"client_recovery_max_publication_limit")," option which is ",(0,r.kt)("inlineCode",{parentName:"p"},"300")," by default. "),(0,r.kt)("p",null,"Centrifugo recovery model based on two fields in the protocol: ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch"),". All fields are managed automatically by Centrifugo client SDKs (for bidirectional transport)."),(0,r.kt)("p",null,"The recovery process works this way:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Let's suppose client subscribes on a channel with recovery on."),(0,r.kt)("li",{parentName:"ol"},"Client receives subscribe reply from Centrifugo with two values: stream ",(0,r.kt)("inlineCode",{parentName:"li"},"epoch")," and stream top ",(0,r.kt)("inlineCode",{parentName:"li"},"offset"),", those values are saved by an SDK implementation."),(0,r.kt)("li",{parentName:"ol"},"Every received publication has incremental ",(0,r.kt)("inlineCode",{parentName:"li"},"offset"),", client SDK increments locally saved offset on each publication from a channel."),(0,r.kt)("li",{parentName:"ol"},"Let's say at this point client disconnected for a while."),(0,r.kt)("li",{parentName:"ol"},"Upon resubscribing to a channel SDK provides last seen ",(0,r.kt)("inlineCode",{parentName:"li"},"epoch")," anf ",(0,r.kt)("inlineCode",{parentName:"li"},"offset")," to Centrifugo."),(0,r.kt)("li",{parentName:"ol"},"Centrifugo tries to load all the missed publications starting from the stream position provided by a client."),(0,r.kt)("li",{parentName:"ol"},"If Centrifugo decides it can successfully recover client's state \u2013 then all missed publications returned in subscribe reply and client receives ",(0,r.kt)("inlineCode",{parentName:"li"},"recovered: true")," in subscribed event context, and ",(0,r.kt)("inlineCode",{parentName:"li"},"publication")," event handler of Subscription is called for every missed publication. Otherwise no publications returned and ",(0,r.kt)("inlineCode",{parentName:"li"},"recovered")," flag of subscribed event context is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"epoch")," is useful for cases when history storage is temporary and can lose the history stream entirely. In this case comparing epoch values gives Centrifugo a tip that while publications exist and theoretically have same offsets as before - the stream is actually different, so it's impossible to use it for the recovery process."),(0,r.kt)("p",null,"To summarize, here is a list of possible scenarios when Centrifugo can't recover client's state for a channel and provides ",(0,r.kt)("inlineCode",{parentName:"p"},"recovered: false")," flag in subscribed event context:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"number of missed publications exceeds ",(0,r.kt)("inlineCode",{parentName:"li"},"client_recovery_max_publication_limit")," option"),(0,r.kt)("li",{parentName:"ul"},"number of missed publications exceeds ",(0,r.kt)("inlineCode",{parentName:"li"},"history_size")," namespace option"),(0,r.kt)("li",{parentName:"ul"},"client was away for a long time and history stream expired according to ",(0,r.kt)("inlineCode",{parentName:"li"},"history_ttl")," namespace option"),(0,r.kt)("li",{parentName:"ul"},"storage used by Centrifugo engine lost the stream (restart, number of shards changed, cleared by the administrator, etc.)")),(0,r.kt)("p",null,"Having said this all, Centrifugo recovery is nice to keep the continuity of the connection and subscription. This speed-ups resubscribe in many cases and helps the backend to survive mass reconnect scenario since you avoid lots of requests for state loading. For setups with millions of connections this can be a life-saver. But we recommend applications to always have a way to load the state from the main application database. For example, on app reload."),(0,r.kt)("p",null,"You can also manually implement your own recovery logic on top of the basic PUB/SUB possibilities that Centrifugo provides. As we said above you can simply ask your backend for an actual state after every client resubscribe completely bypassing the recovery mechanism described here. Also, it's possible to manually iterate over the Centrifugo stream using the history iteration API described above."))}u.isMDXComponent=!0}}]);