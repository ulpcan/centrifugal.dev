"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6598],{8173:function(e,t,n){function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return o}})},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4079:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return g}});var i=n(2122),o=n(9756),r=n(7294),a=n(3905),s=n(8173);function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=n(3552),p=function(e){function t(){var t;return(t=e.call(this)||this).onChange=t.onChange.bind(l(t)),t.onClick=t.onClick.bind(l(t)),t.state={config:null,output:"Here will be configuration for v3",logs:"Here will be log of changes made in your config"},t}(0,d.Z)(t,e);var n=t.prototype;return n.onClick=function(e){if(this.state.config){var t;try{t=JSON.parse(this.state.config)}catch(N){return void alert("Invalid JSON")}var n=[],i=[],o=function(e){var t="config top-level";return void 0!==e&&(t="namespace {"+e.name+"}"),t},r=function(e,r,a){i.push("`"+e+"` renamed to `"+r+"`");var s=o(a);void 0===a&&(a=t),void 0===a[r]&&void 0!==a[e]&&(a[r]=a[e],delete a[e],n.push("renamed "+e+" to "+r+" in "+s))},a=function(e,r){i.push("`"+e+"` removed");var a=o(r);void 0===r&&(r=t),void 0!==r[e]&&(delete r[e],n.push("removed "+e+" from "+a))},l=function(e,r){i.push("`"+e+"` should be converted to duration");var a=o(r);if(void 0===r&&(r=t),void 0!==r[e]){var s=r[e];"number"==typeof s&&(Math.floor(s)===s?r[e]=r[e]+"s":r[e]=1e3*s+"ms",n.push("updated "+e+" to duration value "+r[e]+" in "+a))}},d=!1;for(var p in t)p.startsWith("proxy_")&&(d=!0);if(d&&void 0===t.proxy_http_headers){var c=["Origin","User-Agent","Cookie","Authorization","X-Real-Ip","X-Forwarded-For","X-Request-Id"];if(void 0!==t.proxy_extra_http_headers)for(var u in t.proxy_extra_http_headers)c.push(t.proxy_extra_http_headers[u]);t.proxy_http_headers=c,n.push("set list of headers for HTTP proxy (since v3 requires explicit values)"),a("proxy_extra_http_headers")}if(function(e,r,a){i.push("`"+e+"` is now required");var s=o(a);void 0===a&&(a=t),void 0===a[e]&&(a[e]=r,n.push("added "+e+" to "+s))}("allowed_origins",[]),a("v3_use_offset"),a("redis_streams"),a("tls_autocert_force_rsa"),a("redis_pubsub_num_workers"),a("sockjs_disable"),r("secret","token_hmac_secret_key"),r("history_lifetime","history_ttl"),r("history_recover","recover"),r("server_side","protected"),r("client_presence_ping_interval","client_presence_update_interval"),r("client_ping_interval","websocket_ping_interval"),r("client_message_write_timeout","websocket_write_timeout"),r("client_request_max_size","websocket_message_size_limit"),r("client_presence_expire_interval","presence_ttl"),r("memory_history_meta_ttl","history_meta_ttl"),r("redis_history_meta_ttl","history_meta_ttl"),r("redis_sequence_ttl","history_meta_ttl"),r("redis_presence_ttl","presence_ttl"),l("presence_ttl"),l("websocket_write_timeout"),l("websocket_ping_interval"),l("client_presence_update_interval"),l("history_ttl"),l("history_meta_ttl"),l("nats_dial_timeout"),l("nats_write_timeout"),l("graphite_interval"),l("shutdown_timeout"),l("shutdown_termination_delay"),l("proxy_connect_timeout"),l("proxy_refresh_timeout"),l("proxy_rpc_timeout"),l("proxy_subscribe_timeout"),l("proxy_publish_timeout"),l("client_expired_close_delay"),l("client_expired_sub_close_delay"),l("client_stale_close_delay"),l("client_channel_position_check_delay"),l("node_info_metrics_aggregate_interval"),l("websocket_ping_interval"),l("websocket_write_timeout"),l("sockjs_heartbeat_delay"),l("redis_idle_timeout"),l("redis_connect_timeout"),l("redis_read_timeout"),l("redis_write_timeout"),void 0!==t.namespaces){for(var m,h=[],g=(0,s.Z)(t.namespaces);!(m=g()).done;){var f=m.value;r("history_lifetime","history_ttl",f),l("history_ttl",f),r("history_recover","recover",f),r("server_side","protected",f),h.push(f)}t.namespaces=h}if(void 0!==t.redis_host&&void 0!==t.redis_port){var v=[],k=t.redis_host.toString().split(","),_=t.redis_port.toString().split(",");if(k.length!==_.length)return void alert("Sorry, too difficult Redis configuration to automatically convert");for(var y in k){var b=k[y]+":"+_[y];v.push(b)}t.redis_address=v,a("redis_host"),a("redis_port"),n.push("redis configuration updated, but you should check it manually")}else void 0!==t.redis_url&&r("redis_url","redis_address");r("redis_cluster_addrs","redis_cluster_address"),r("redis_sentinels","redis_sentinel_address"),r("redis_master_name","redis_sentinel_master_name"),this.setState({output:JSON.stringify(t,null,"\t")}),this.setState({logs:JSON.stringify(n,null,"\t")}),console.log(i.join("\n\n"))}else alert("Provide a configuration")},n.onChange=function(e){this.setState({config:e.target.value})},n.render=function(){return r.createElement("div",null,r.createElement("textarea",{onChange:this.onChange,placeholder:"Paste your Centrifugo v2 JSON config here...",style:{width:"100%",height:"300px",border:"2px solid #ccc"}}),r.createElement("button",{onClick:this.onClick},"Convert"),r.createElement("pre",{style:{marginTop:"10px"}},this.state.output),r.createElement("pre",{style:{marginTop:"10px"}},this.state.logs))},t}(r.Component),c=["components"],u={id:"migration_v3",title:"Migrating to v3"},m=void 0,h={unversionedId:"getting-started/migration_v3",id:"getting-started/migration_v3",isDocsHomePage:!1,title:"Migrating to v3",description:"This chapter aims to help developers migrate from Centrifugo v2 to Centrifugo v3. Migration should mostly affect the backend part only, so you won't need to change the code of your frontend applications at all. In most cases, all you should do is adapt Centrifugo configuration to match v3 changes and redeploy Centrifugo using v3 build instead of v2.",source:"@site/docs/getting-started/migration-v3.md",sourceDirName:"getting-started",slug:"/getting-started/migration_v3",permalink:"/docs/getting-started/migration_v3",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/getting-started/migration-v3.md",version:"current",frontMatter:{id:"migration_v3",title:"Migrating to v3"},sidebar:"Introduction",previous:{title:"Design overview",permalink:"/docs/getting-started/design"}},g=[{value:"Client-side changes",id:"client-side-changes",children:[{value:"No unlimited history by default",id:"no-unlimited-history-by-default",children:[]},{value:"Publication limit for recovery",id:"publication-limit-for-recovery",children:[]},{value:"Seq/Gen fields removed",id:"seqgen-fields-removed",children:[]}]},{value:"Server-side changes",id:"server-side-changes",children:[{value:"Time interval options are duration",id:"time-interval-options-are-duration",children:[]},{value:"Channel options changes",id:"channel-options-changes",children:[]},{value:"Some command-line flags removed",id:"some-command-line-flags-removed",children:[]},{value:"Enforced request Origin check",id:"enforced-request-origin-check",children:[]},{value:"Updated GRPC API Protobuf package",id:"updated-grpc-api-protobuf-package",children:[]},{value:"Channels API method changed",id:"channels-api-method-changed",children:[]},{value:"HTTP proxy changes",id:"http-proxy-changes",children:[]},{value:"JWT changes",id:"jwt-changes",children:[]},{value:"Redis configuration changes",id:"redis-configuration-changes",children:[]},{value:"Redis streams used by default",id:"redis-streams-used-by-default",children:[]},{value:"SockJS disabled by default",id:"sockjs-disabled-by-default",children:[]},{value:"Other configuration changes",id:"other-configuration-changes",children:[]},{value:"v2 to v3 config converter",id:"v2-to-v3-config-converter",children:[]}]}],f={toc:g};function v(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This chapter aims to help developers migrate from Centrifugo v2 to Centrifugo v3. Migration should mostly affect the backend part only, so you won't need to change the code of your frontend applications at all. In most cases, all you should do is adapt Centrifugo configuration to match v3 changes and redeploy Centrifugo using v3 build instead of v2."),(0,a.kt)("p",null,"There are a couple of exceptions - read carefully about client-side changes below."),(0,a.kt)("p",null,"In any case \u2013 don't forget to test your application before running in production."),(0,a.kt)("h2",{id:"client-side-changes"},"Client-side changes"),(0,a.kt)("p",null,"Client protocol has some backward incompatible changes regarding working with history API and removing deprecated fields."),(0,a.kt)("h3",{id:"no-unlimited-history-by-default"},"No unlimited history by default"),(0,a.kt)("p",null,"Call to ",(0,a.kt)("inlineCode",{parentName:"p"},"history")," API from client-side now does not return all publications from history cache. It returns only information about a stream with zero publications. Clients should explicitly provide a limit when calling history API. Also, the maximum allowed limit can be set by ",(0,a.kt)("inlineCode",{parentName:"p"},"client_history_max_publication_limit")," option (by default ",(0,a.kt)("inlineCode",{parentName:"p"},"300"),")."),(0,a.kt)("p",null,"We provide a boolean flag ",(0,a.kt)("inlineCode",{parentName:"p"},"use_unlimited_history_by_default")," to enable previous behavior while you migrate client applications to use explicit limit."),(0,a.kt)("h3",{id:"publication-limit-for-recovery"},"Publication limit for recovery"),(0,a.kt)("p",null,"The maximum number of messages that can be recovered is now limited by ",(0,a.kt)("inlineCode",{parentName:"p"},"client_recovery_max_publication_limit")," option which is by default ",(0,a.kt)("inlineCode",{parentName:"p"},"300"),"."),(0,a.kt)("h3",{id:"seqgen-fields-removed"},"Seq/Gen fields removed"),(0,a.kt)("p",null,"Deprecated seq/gen now removed and Centrifugo uses ",(0,a.kt)("inlineCode",{parentName:"p"},"offset")," field for a position in a stream. This means that there is no need for ",(0,a.kt)("inlineCode",{parentName:"p"},"v3_use_offset")," option anymore \u2013 it's not used in Centrifugo v3."),(0,a.kt)("h2",{id:"server-side-changes"},"Server-side changes"),(0,a.kt)("h3",{id:"time-interval-options-are-duration"},"Time interval options are duration"),(0,a.kt)("p",null,"In Centrifugo v3 all time intervals should be configured using ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration"),"."),(0,a.kt)("p",null,"For example ",(0,a.kt)("inlineCode",{parentName:"p"},'"proxy_connect_timeout": 1')," should be changed to ",(0,a.kt)("inlineCode",{parentName:"p"},'"proxy_connect_timeout": "1s"'),"."),(0,a.kt)("p",null,"We provide a ",(0,a.kt)("a",{parentName:"p",href:"#v2-to-v3-config-converter"},"configuration converter")," which takes this change into account."),(0,a.kt)("h3",{id:"channel-options-changes"},"Channel options changes"),(0,a.kt)("p",null,"In Centrifugo v3 ",(0,a.kt)("inlineCode",{parentName:"p"},"history_recover")," option becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"recover"),"."),(0,a.kt)("p",null,"Option ",(0,a.kt)("inlineCode",{parentName:"p"},"history_lifetime")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"history_ttl")," and it's now a ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration"),"."),(0,a.kt)("p",null,"Option ",(0,a.kt)("inlineCode",{parentName:"p"},"server_side")," removed, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/channels#protected"},"protected")," option as a replacement."),(0,a.kt)("p",null,"We provide a ",(0,a.kt)("a",{parentName:"p",href:"#v2-to-v3-config-converter"},"configuration converter")," which takes these changes into account."),(0,a.kt)("h3",{id:"some-command-line-flags-removed"},"Some command-line flags removed"),(0,a.kt)("p",null,"Configuring over command-line flags is not very convenient for production deployments, Centrifugo v3 reduced the number of command-line flags available \u2013 it mostly has flags frequently useful for development now. "),(0,a.kt)("h3",{id:"enforced-request-origin-check"},"Enforced request Origin check"),(0,a.kt)("p",null,"In Centrifugo v3 you should explicitly ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#allowed_origins"},"set a list of allowed origins")," which are allowed to connect to client transport endpoints."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "allowed_origins": ["https://mysite.com"]\n}\n')),(0,a.kt)("p",null,"There is a way to disable origin check, but it's discouraged and ",(0,a.kt)("strong",{parentName:"p"},"insecure")," in case you are using connect proxy feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "allowed_origins": ["*"]\n}\n')),(0,a.kt)("h3",{id:"updated-grpc-api-protobuf-package"},"Updated GRPC API Protobuf package"),(0,a.kt)("p",null,"In Centrifugo v3 we addressed an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifugo/issues/379"},"issue")," where package name in Protobuf definitions resulted in some inconvenience and attempts to rename it. But it's not possible to rename it since GRPC uses it as part of RPC methods internally. Now GRPC API package looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"package centrifugal.centrifugo.api;\n")),(0,a.kt)("p",null,"This means you need to regenerate your GRPC code which communicates with Centrifugo using the latest Protobuf definitions. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/server_api#grpc-api"},"GRPC API doc"),"."),(0,a.kt)("h3",{id:"channels-api-method-changed"},"Channels API method changed"),(0,a.kt)("p",null,"The response format of ",(0,a.kt)("inlineCode",{parentName:"p"},"channels")," API call changed in v3. See description in ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/server_api#channels"},"API doc"),". "),(0,a.kt)("p",null,"The channels method has new additional possibilities like showing the number of connections in a channel and filter channels by pattern."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Channels API call still has the same concern as before: this method does not scale well for many active channels in a system and is mostly recommended for administrative/debug purposes."))),(0,a.kt)("h3",{id:"http-proxy-changes"},"HTTP proxy changes"),(0,a.kt)("p",null,"When using HTTP proxy you should now set an explicit list of headers you want to proxy. To mimic the behavior of Centrifugo v2 add to your configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=config.json",title:"config.json"},'{\n    "proxy_http_headers": [\n        "Origin",\n        "User-Agent",\n        "Cookie",\n        "Authorization",\n        "X-Real-Ip",\n        "X-Forwarded-For",\n        "X-Request-Id"\n    ]\n}\n')),(0,a.kt)("p",null,"If you had a list of extra HTTP headers using ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy_extra_http_headers")," then additionally extend list above with values from ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy_extra_http_headers"),". Then you can remove ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy_extra_http_headers")," - it's not used anymore."),(0,a.kt)("p",null,"Another important change is how Centrifugo proxies binary data over HTTP JSON proxy. Previously proxy mode (whether to use base64 fields or not) could be configured using ",(0,a.kt)("inlineCode",{parentName:"p"},"encoding=binary")," URL param of connection. With Centrifugo v3 it's only possible to use binary mode by enabling ",(0,a.kt)("inlineCode",{parentName:"p"},'"proxy_binary_encoding": true')," option. BTW according to our community poll only 2% of Centrifugo users used binary mode in HTTP proxy. If you have problems with new behavior \u2013 write about your situation to our community chats \u2013 and we will see what's possible."),(0,a.kt)("h3",{id:"jwt-changes"},"JWT changes"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"eto")," claim of subscription JWT removed. But since Centrifugo v3 introduced an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"expire_at")," claim it's still possible to implement one-time subscription tokens without enabling subscription expiration workflow by setting ",(0,a.kt)("inlineCode",{parentName:"p"},'"expire_at: 0"')," in subscription JWT claims."),(0,a.kt)("h3",{id:"redis-configuration-changes"},"Redis configuration changes"),(0,a.kt)("p",null,"Redis configuration was a bit messy - especially in the Redis sharding case, in v3 we decided to clean up it a bit. Make it more explicit and reduce the number of possible ways to configure."),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/engines#redis-engine"},"Redis Engine docs")," for the new configuration details. The important thing is that there is no separate ",(0,a.kt)("inlineCode",{parentName:"p"},"redis_host")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"redis_port")," option anymore \u2013 those are replaced with single ",(0,a.kt)("inlineCode",{parentName:"p"},"redis_address")," option."),(0,a.kt)("h3",{id:"redis-streams-used-by-default"},"Redis streams used by default"),(0,a.kt)("p",null,"Centrifugo v3 will use Redis Stream data structure to keep history instead of lists."),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This requires Redis >= 5.0.1 to work. If you still need List data structure or have an old Redis version you can use ",(0,a.kt)("inlineCode",{parentName:"p"},'"redis_use_lists": true')," to mimic the default behavior of Centrifugo v2."))),(0,a.kt)("h3",{id:"sockjs-disabled-by-default"},"SockJS disabled by default"),(0,a.kt)("p",null,"Our poll showed that most Centrifugo users do not use SockJS transport. In v3 it's disabled by default. You can enable it by setting ",(0,a.kt)("inlineCode",{parentName:"p"},'"sockjs": true')," in configuration."),(0,a.kt)("h3",{id:"other-configuration-changes"},"Other configuration changes"),(0,a.kt)("p",null,"Here is a full list of configuration option changes. We provide a best-effort ",(0,a.kt)("a",{parentName:"p",href:"#v2-to-v3-config-converter"},"configuration converter"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"allowed_origins")," is now required to be set to authorize requests with ",(0,a.kt)("inlineCode",{parentName:"p"},"Origin")," header"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"v3_use_offset")," removed"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_streams")," removed"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tls_autocert_force_rsa")," removed"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_pubsub_num_workers")," removed"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sockjs_disable")," removed"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"secret")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"history_lifetime")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"history_ttl")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"history_recover")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"recover")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_presence_ping_interval")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"client_presence_update_interval")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_ping_interval")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"websocket_ping_interval")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_message_write_timeout")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"websocket_write_timeout")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_request_max_size")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"websocket_message_size_limit")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_presence_expire_interval")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"presence_ttl")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"memory_history_meta_ttl")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_history_meta_ttl")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_sequence_ttl")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_presence_ttl")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"presence_ttl")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"presence_ttl")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"websocket_write_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"websocket_ping_interval")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_presence_update_interval")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"history_ttl")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"history_meta_ttl")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nats_dial_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nats_write_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"graphite_interval")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"shutdown_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"shutdown_termination_delay")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"proxy_connect_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"proxy_refresh_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"proxy_rpc_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"proxy_subscribe_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"proxy_publish_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_expired_close_delay")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_expired_sub_close_delay")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_stale_close_delay")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"client_channel_position_check_delay")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_info_metrics_aggregate_interval")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"websocket_ping_interval")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"websocket_write_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sockjs_heartbeat_delay")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_idle_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_connect_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_read_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_write_timeout")," should be converted to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_cluster_addrs")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"redis_cluster_address")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_sentinels")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"redis_sentinel_address")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis_master_name")," renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"redis_sentinel_master_name")),(0,a.kt)("h3",{id:"v2-to-v3-config-converter"},"v2 to v3 config converter"),(0,a.kt)("p",null,"Here is a converter between Centrifugo v2 and v3 JSON configuration. It can help to translate most of the things automatically for you."),(0,a.kt)("p",null,"If you are using Centrifugo with TOML format then you can use ",(0,a.kt)("a",{parentName:"p",href:"https://pseitz.github.io/toml-to-json-online-converter/"},"online converter")," as initial step. Or ",(0,a.kt)("a",{parentName:"p",href:"https://jsonformatter.org/yaml-to-json"},"yaml-to-json")," and ",(0,a.kt)("a",{parentName:"p",href:"https://jsonformatter.org/json-to-yaml"},"json-to-yaml")," for YAML."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It's fully client-side: your data won't be sent anywhere."))),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Unfortunately, we can't migrate environment variables and command-line flags automatically - so if you are using env vars or command-line flags to configure Centrifugo you still need to migrate manually. Also, be aware: this converter tool is the best effort only \u2013 we can not guarantee it solves all corner cases, especially in Redis configuration. You may still need to fix some things manually, for example - properly fill ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed_origins"),"."))),(0,a.kt)(p,{mdxType:"ConfigConverter"}))}v.isMDXComponent=!0}}]);