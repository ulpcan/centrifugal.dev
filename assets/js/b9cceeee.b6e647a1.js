"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7725],{3905:function(t,n,e){e.d(n,{Zo:function(){return s},kt:function(){return d}});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=a.createContext({}),c=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},s=function(t){var n=c(t.components);return a.createElement(p.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=c(e),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return e?a.createElement(k,o(o({ref:n},s),{},{components:e})):a.createElement(k,o({ref:n},s))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=e[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},384:function(t,n,e){e.r(n),e.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=e(3117),r=e(102),l=(e(7294),e(3905)),o=["components"],i={id:"connections",title:"Connections API"},p=void 0,c={unversionedId:"pro/connections",id:"pro/connections",title:"Connections API",description:"Centrifugo PRO provides an additional API call connections. It allows getting all active sessions of the user (by user ID) without turning on presence feature for channels at all. It's also possible to attach any JSON payload to a connection which will be then visible in the result of connections call. The important thing is that this additional meta information won't be exposed to a client-side (unlike connection info for example).",source:"@site/docs/pro/connections.md",sourceDirName:"pro",slug:"/pro/connections",permalink:"/docs/next/pro/connections",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/connections.md",tags:[],version:"current",frontMatter:{id:"connections",title:"Connections API"},sidebar:"Pro",previous:{title:"Operation throttling",permalink:"/docs/next/pro/throttling"},next:{title:"User blocking API",permalink:"/docs/next/pro/user_block"}},s={},u=[{value:"User connections params",id:"user-connections-params",level:4},{value:"User connections result",id:"user-connections-result",level:4},{value:"UserConnectionInfo",id:"userconnectioninfo",level:4},{value:"ConnectionState object",id:"connectionstate-object",level:4},{value:"ConnectionTokenInfo object",id:"connectiontokeninfo-object",level:4},{value:"SubscriptionTokenInfo object",id:"subscriptiontokeninfo-object",level:4}],m={toc:u};function d(t){var n=t.components,e=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Centrifugo PRO provides an additional API call ",(0,l.kt)("inlineCode",{parentName:"p"},"connections"),". It allows getting all active sessions of the user (by user ID) without turning on presence feature for channels at all. It's also possible to attach any JSON payload to a connection which will be then visible in the result of ",(0,l.kt)("inlineCode",{parentName:"p"},"connections")," call. The important thing is that this additional meta information won't be exposed to a client-side (unlike connection ",(0,l.kt)("inlineCode",{parentName:"p"},"info")," for example)."),(0,l.kt)("p",null,"This feature can be useful to manage active user sessions \u2013 for example in a messenger application. Users can look at a list of own current sessions and close some of them (possible with Centrifugo disconnect server API)."),(0,l.kt)("p",null,"Let's look at example. Generate a JWT for user 42:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"centrifugo genconfig\ncentrifugo gentoken -u 42\nHMAC SHA-256 JWT for user 42 with expiration TTL 168h0m0s:\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y\n")),(0,l.kt)("p",null,"Run Centrifugo with ",(0,l.kt)("inlineCode",{parentName:"p"},"uni_http_stream")," transport enabled (it will allow us to connect from console):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CENTRIFUGO_UNI_HTTP_STREAM=1 centrifugo -c config.json\n")),(0,l.kt)("p",null,"Create new terminal window and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:8000/connection/uni_http_stream --data \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y", "name": "terminal"}\'\n')),(0,l.kt)("p",null,"In another terminal create one more connection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:8000/connection/uni_http_stream --data \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y", "name": "terminal"}\'\n')),(0,l.kt)("p",null,"Now let's call ",(0,l.kt)("inlineCode",{parentName:"p"},"connections")," over HTTP API:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "connections", "params": {"user": "42"}}\' \\\n  http://localhost:8000/api\n')),(0,l.kt)("p",null,"The result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": {\n        "connections": {\n            "db8bc772-2654-4283-851a-f29b888ace74": {\n                "app_name": "terminal",\n                "transport": "uni_http_stream",\n                "protocol": "json"\n            },\n            "4bc3ca70-ecc5-439d-af14-a78ae18e31c7": {\n                "app_name": "terminal",\n                "transport": "uni_http_stream",\n                "protocol": "json"\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,"Here we can see that user has 2 connections from ",(0,l.kt)("inlineCode",{parentName:"p"},"terminal")," app."),(0,l.kt)("p",null,"Each connection can be annotated with meta JSON information which is set during connection establishment (over ",(0,l.kt)("inlineCode",{parentName:"p"},"meta")," claim of JWT or by returning ",(0,l.kt)("inlineCode",{parentName:"p"},"meta")," in connect proxy result)."),(0,l.kt)("h4",{id:"user-connections-params"},"User connections params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"fast filter by User ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expression"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"CEL expression to filter users")))),(0,l.kt)("h4",{id:"user-connections-result"},"User connections result"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connections"),(0,l.kt)("td",{parentName:"tr",align:null},"map of string to UserConnectionInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"active user connections map where key is client ID and value is UserConnectionInfo")))),(0,l.kt)("h4",{id:"userconnectioninfo"},"UserConnectionInfo"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"client app name (if provided by client)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app_version"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"client app version (if provided by client)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transport"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"client connection transport")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"client connection protocol (json or protobuf)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"ConnectionState"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"connection state")))),(0,l.kt)("h4",{id:"connectionstate-object"},"ConnectionState object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channels"),(0,l.kt)("td",{parentName:"tr",align:null},"array of strings"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Channels client subscribed to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection_token"),(0,l.kt)("td",{parentName:"tr",align:null},"ConnectionTokenInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"information about connection token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subscription_tokens"),(0,l.kt)("td",{parentName:"tr",align:null},"map<string, SubscriptionTokenInfo>"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"information about channel tokens used to subscribe")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meta"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON object"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"meta information attached to a connection")))),(0,l.kt)("h4",{id:"connectiontokeninfo-object"},"ConnectionTokenInfo object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uid"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"unique token ID (jti)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issued_at"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"time (Unix seconds) when token was issued")))),(0,l.kt)("h4",{id:"subscriptiontokeninfo-object"},"SubscriptionTokenInfo object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uid"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"unique token ID (jti)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"issued_at"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"time (Unix seconds) when token was issued")))))}d.isMDXComponent=!0}}]);