"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8896],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return h}});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?t.createElement(m,s(s({ref:n},c),{},{components:a})):t.createElement(m,s({ref:n},c))}));function h(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=u;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9394:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var t=a(2122),i=a(9756),o=(a(7294),a(3905)),s=["components"],r={id:"channels",title:"Channels"},l=void 0,p={unversionedId:"server/channels",id:"server/channels",isDocsHomePage:!1,title:"Channels",description:"Channel is a route for publications. Clients can subscribe to a channel to receive real-time messages published to this channel \u2013 new publications and join/leave events (if enabled for a channel namespace). Channel subscriber can also ask for channel presence or channel history information (if enabled for a channel namespace).",source:"@site/docs/server/channels.md",sourceDirName:"server",slug:"/server/channels",permalink:"/docs/server/channels",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/channels.md",version:"current",frontMatter:{id:"channels",title:"Channels"},sidebar:"Guides",previous:{title:"Client authentication",permalink:"/docs/server/authentication"},next:{title:"Private channels",permalink:"/docs/server/private_channels"}},c=[{value:"Channel name rules",id:"channel-name-rules",children:[{value:"namespace boundary (<code>:</code>)",id:"namespace-boundary-",children:[]},{value:"private channel prefix (<code>$</code>)",id:"private-channel-prefix-",children:[]},{value:"user channel boundary (<code>#</code>)",id:"user-channel-boundary-",children:[]}]},{value:"Channel options",id:"channel-options",children:[{value:"publish",id:"publish",children:[]},{value:"subscribe_to_publish",id:"subscribe_to_publish",children:[]},{value:"anonymous",id:"anonymous",children:[]},{value:"presence",id:"presence",children:[]},{value:"presence_disable_for_client",id:"presence_disable_for_client",children:[]},{value:"join_leave",id:"join_leave",children:[]},{value:"history_size",id:"history_size",children:[]},{value:"history_ttl",id:"history_ttl",children:[]},{value:"position",id:"position",children:[]},{value:"recover",id:"recover",children:[]},{value:"history_disable_for_client",id:"history_disable_for_client",children:[]},{value:"protected",id:"protected",children:[]},{value:"proxy_subscribe",id:"proxy_subscribe",children:[]},{value:"proxy_publish",id:"proxy_publish",children:[]}]},{value:"Channel options config example",id:"channel-options-config-example",children:[]},{value:"Channel namespaces",id:"channel-namespaces",children:[]}],d={toc:c};function u(e){var n=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Channel is a route for publications. Clients can subscribe to a channel to receive real-time messages published to this channel \u2013 new publications and join/leave events (if enabled for a channel namespace). Channel subscriber can also ask for channel presence or channel history information (if enabled for a channel namespace)."),(0,o.kt)("p",null,"Channel is just a string - ",(0,o.kt)("inlineCode",{parentName:"p"},"news"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"comments")," are valid channel names. Though this string has some predefined rules as we will see below."),(0,o.kt)("p",null,"Channel is an ephemeral entity \u2013 ",(0,o.kt)("strong",{parentName:"p"},"you don't need to create it explicitly"),". Channel created automatically by Centrifugo as soon as first client subscribes to it. As soon as last subscriber leaves channel - it's automatically cleaned up."),(0,o.kt)("h2",{id:"channel-name-rules"},"Channel name rules"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Only ASCII symbols must be used in channel string"),"."),(0,o.kt)("p",null,"Channel name length limited by ",(0,o.kt)("inlineCode",{parentName:"p"},"255")," characters by default (can be changed via configuration file option ",(0,o.kt)("inlineCode",{parentName:"p"},"channel_max_length"),")."),(0,o.kt)("p",null,"Several symbols in channel names reserved for Centrifugo internal needs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":")," \u2013 for namespace channel boundary (see below)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$")," \u2013 for private channel prefix (see below)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"#")," \u2013 for user channel boundary (see below)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"*")," \u2013 for future Centrifugo needs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"&")," \u2013 for future Centrifugo needs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/")," \u2013 for future Centrifugo needs")),(0,o.kt)("h3",{id:"namespace-boundary-"},"namespace boundary (",(0,o.kt)("inlineCode",{parentName:"h3"},":"),")"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},":")," \u2013 is a channel namespace boundary. Namespaces used to set custom options to a group of channels. Each channel belonging to the same namespace will have the same channel options. Read more about available ",(0,o.kt)("a",{parentName:"p",href:"#channel-options"},"channel options")," and more about ",(0,o.kt)("a",{parentName:"p",href:"#channel-namespaces"},"namespaces")," below."),(0,o.kt)("p",null,"If channel is ",(0,o.kt)("inlineCode",{parentName:"p"},"public:chat")," - then Centrifugo will apply options to this channel from channel namespace with name ",(0,o.kt)("inlineCode",{parentName:"p"},"public"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Namespace is part of channel name. If a user subscribed to a channel with namespace, like ",(0,o.kt)("inlineCode",{parentName:"p"},"public:chat")," \u2013 then you need to publish messages into ",(0,o.kt)("inlineCode",{parentName:"p"},"public:chat")," channel to be delivered to the user. We often see some confusion from developers trying to publish messages into ",(0,o.kt)("inlineCode",{parentName:"p"},"chat")," and thinking that namespace is somehow stripped upon subscription. It's not true."))),(0,o.kt)("h3",{id:"private-channel-prefix-"},"private channel prefix (",(0,o.kt)("inlineCode",{parentName:"h3"},"$"),")"),(0,o.kt)("p",null,"If channel starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," then it is considered ",(0,o.kt)("em",{parentName:"p"},"private"),". Subscription on a private channel must be properly signed by your backend."),(0,o.kt)("p",null,"Use private channels if you pass sensitive data inside channel and want to control access permissions on your backend."),(0,o.kt)("p",null,"For example ",(0,o.kt)("inlineCode",{parentName:"p"},"$secrets")," is a private channel, ",(0,o.kt)("inlineCode",{parentName:"p"},"$public:chat")," - is a private channel that belongs namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"public"),"."),(0,o.kt)("p",null,"Subscription request to private channels requires additional JWT from your application backend. Read ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/private_channels"},"detailed chapter about private channels"),"."),(0,o.kt)("p",null,"If you need a personal channel for a single user (or maybe a channel for short and stable set of users) then consider using ",(0,o.kt)("inlineCode",{parentName:"p"},"user-limited")," channel (see below) as a simpler alternative which does not require additional subscription token from your backend."),(0,o.kt)("p",null,"Also consider using server-side subscriptions or subscribe proxy feature of Centrifugo to model channels with restrictive access. "),(0,o.kt)("h3",{id:"user-channel-boundary-"},"user channel boundary (",(0,o.kt)("inlineCode",{parentName:"h3"},"#"),")"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"#")," \u2013 is a user channel boundary. This is a separator to create personal channels for users (we call this ",(0,o.kt)("em",{parentName:"p"},"user-limited channels"),") without need to provide subscription token."),(0,o.kt)("p",null,"For example if channel is ",(0,o.kt)("inlineCode",{parentName:"p"},"news#42")," then only user with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"42")," can subscribe on this channel (Centrifugo knows user ID because clients provide it in connection credentials with connection JWT)."),(0,o.kt)("p",null,"If you want to create user-limited channel in namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"personal")," then you can use name like ",(0,o.kt)("inlineCode",{parentName:"p"},"personal:user#42")," for example."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Channel like ",(0,o.kt)("inlineCode",{parentName:"p"},"$personal:user#42")," - i.e. channel with both private prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," and user channel boundary ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," does not have lot of sense, most probably you can just use ",(0,o.kt)("inlineCode",{parentName:"p"},"personal:user#42")," as ID of the user protected by authentication JWT or set by application backend when connect proxy feature is used."))),(0,o.kt)("p",null,"Moreover, you can provide several user IDs in channel name separated by a comma: ",(0,o.kt)("inlineCode",{parentName:"p"},"dialog#42,43")," \u2013 in this case only user with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"42")," and user with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"43")," will be able to subscribe on this channel."),(0,o.kt)("p",null,"This is useful for channels with static list of allowed users, for example for single user personal messages channel, for dialog channel between certainly defined users. As soon as you need to manage access to a channel dynamically for many users this channel type does not suit well."),(0,o.kt)("h2",{id:"channel-options"},"Channel options"),(0,o.kt)("p",null,"Channel behavior can be modified by using channel options. Channel options can be defined on configuration top-level and for every namespace."),(0,o.kt)("h3",{id:"publish"},"publish"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"publish")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 when on allows clients to publish messages into channels directly (from a client-side)."),(0,o.kt)("p",null,"Keep in mind that your application will never receive such messages. In idiomatic use case all messages must be published to Centrifugo by an application backend using Centrifugo API (HTTP or GRPC). Or using ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/proxy#publish-proxy"},"publish proxy"),". Since in those cases your application has a chance to validate a message, save it into a database and only after that broadcast to all subscribers."),(0,o.kt)("p",null,"But ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," option still can be useful to send something without backend-side validation and saving into a database. This option can also be handy for demos and quick prototyping real-time app ideas."),(0,o.kt)("h3",{id:"subscribe_to_publish"},"subscribe_to_publish"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"subscribe_to_publish")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") - when ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," option enabled client can publish into a channel without being subscribed to it. This option enables automatic check that client subscribed on a channel before allowing client to publish."),(0,o.kt)("h3",{id:"anonymous"},"anonymous"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"anonymous")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 this option enables anonymous user access (i.e. for a user with empty user ID). In most situations your application works with authenticated users so every user has its own unique user ID (set inside JWT ",(0,o.kt)("inlineCode",{parentName:"p"},"sub")," claim or provided by backend when using connect proxy). But if you provide real-time features for a public access you may need unauthenticated access to some channels. Turn on this option and use empty string as user ID. See also related global option ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/configuration#client_anonymous"},"client_anonymous")," which allows anonymous users to connect without JWT. "),(0,o.kt)("h3",{id:"presence"},"presence"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"presence")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 enable/disable presence information for channels. Presence is an information about clients currently subscribed on channel. It contains each subscriber client ID, user ID, connection info and channel info. By default, this option is off so no presence information will be available for channels."),(0,o.kt)("p",null,"Enabling channel presence adds some overhead since Centrifugo need to maintain an additional data structure (in a process memory or in a broker)."),(0,o.kt)("h3",{id:"presence_disable_for_client"},"presence_disable_for_client"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"presence_disable_for_client")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 allows making presence calls available only for a server-side API. By default, presence information is available for both client and server-side APIs."),(0,o.kt)("h3",{id:"join_leave"},"join_leave"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"join_leave")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 enable/disable sending join(leave) messages when client subscribes to a channel (unsubscribes from a channel). Join/leave event includes information about connection that triggered an event \u2013 client ID, user ID, connection info and channel info."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Keep in mind that join/leave messages can generate a big number of messages in a system if turned on for channels with large number of active subscribers. If you have channels with large number of subscribers consider to avoid using this feature or to scale Centrifugo."))),(0,o.kt)("h3",{id:"history_size"},"history_size"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"history_size")," (integer, default ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),") \u2013 history size (amount of messages) for channels. As Centrifugo keeps all history messages in a process memory (or in a broker memory) it's very important to limit maximum amount of messages in channel history with a reasonable value. ",(0,o.kt)("inlineCode",{parentName:"p"},"history_size")," defines maximum amount of messages that Centrifugo will keep for ",(0,o.kt)("strong",{parentName:"p"},"each")," channel in namespace. As soon as history has more messages than defined by history size \u2013 old messages will be evicted."),(0,o.kt)("p",null,"By default history size is ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," - this means that channel history is disabled."),(0,o.kt)("p",null,"Enabling channel history adds some overhead (both memory and CPU) since Centrifugo need to maintain an additional data structure (in a process memory or in a broker)."),(0,o.kt)("h3",{id:"history_ttl"},"history_ttl"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"history_ttl")," (",(0,o.kt)("a",{parentName:"p",href:"/docs/server/configuration#setting-time-duration-options"},"duration"),", default ",(0,o.kt)("inlineCode",{parentName:"p"},"0s"),") \u2013 interval how long to keep channel history messages (with seconds precision)."),(0,o.kt)("p",null,"As all history is storing in a process memory (or in a broker memory) it is also very important to get rid of old history data for unused (inactive for a long time) channels."),(0,o.kt)("p",null,"By default history ttl duration is zero \u2013 this means that channel history is disabled."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"So to turn on history you should wisely configure both ",(0,o.kt)("inlineCode",{parentName:"strong"},"history_size")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"history_ttl")," options"),"."),(0,o.kt)("p",null,"For example for top-level channels (which are not belong to a namespace):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "history_size": 10,\n    "history_ttl": "60s"\n}\n')),(0,o.kt)("h3",{id:"position"},"position"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"position")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 when ",(0,o.kt)("inlineCode",{parentName:"p"},"position")," feature is on Centrifugo tries to compensate at most once delivery of PUB/SUB messages checking client position inside a stream."),(0,o.kt)("p",null,"If Centrifugo detects bad position of client (i.e. potential message loss) it disconnect a client with ",(0,o.kt)("inlineCode",{parentName:"p"},"Insufficient state")," disconnect code. Also, when position option is enabled Centrifugo exposes the current stream top ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," and current ",(0,o.kt)("inlineCode",{parentName:"p"},"epoch")," in subscribe reply making it possible for a client to manually recover its state upon disconnect using history API."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"position")," option must be used in conjunction with reasonably configured message history for a channel i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"history_size")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"history_ttl")," ",(0,o.kt)("strong",{parentName:"p"},"must be set")," (because Centrifugo uses channel history to check client position in a stream)."),(0,o.kt)("h3",{id:"recover"},"recover"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recover")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 when enabled Centrifugo will try to recover missed publications after a client reconnects for some reason (bad internet connection for example). Also when recovery feature is on Centrifugo automatically enables properties of ",(0,o.kt)("inlineCode",{parentName:"p"},"position")," option described above."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"recover")," option must be used in conjunction with reasonably configured message history for channel i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"history_size")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"history_ttl")," ",(0,o.kt)("strong",{parentName:"p"},"must be set")," (because Centrifugo uses channel history to recover messages)."),(0,o.kt)("p",null,"Also note that not all real-time events require this feature turned on so think wisely when you need this. When this option turned on your application should be designed in a way to tolerate duplicate messages coming from a channel (currently Centrifugo returns recovered publications in order and without duplicates but this is implementation detail that can be theoretically changed in the future). See more details about how recovery works in ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/history_and_recovery"},"special chapter"),"."),(0,o.kt)("h3",{id:"history_disable_for_client"},"history_disable_for_client"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"history_disable_for_client")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 allows making history available only for a server-side API. By default ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," \u2013 i.e. history calls are available for both client and server-side APIs."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"History recovery mechanism if enabled will continue to work for clients anyway even if ",(0,o.kt)("inlineCode",{parentName:"p"},"history_disable_for_client")," is on."))),(0,o.kt)("h3",{id:"protected"},"protected"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"protected")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 when on will prevent a client to subscribe to arbitrary channels in a namespace. In this case Centrifugo will only allow client to subscribe on user-limited channels, on channels returned by proxy response or channels listed inside JWT. Client-side subscriptions to arbitrary channels will be rejected with PermissionDenied error. Server-side channels belonging to protected namespace passed by client itself during connect will be ignored."),(0,o.kt)("h3",{id:"proxy_subscribe"},"proxy_subscribe"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"proxy_subscribe")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 turns on subscribe proxy, more info in ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/proxy"},"proxy chapter")),(0,o.kt)("h3",{id:"proxy_publish"},"proxy_publish"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"proxy_publish")," (boolean, default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") \u2013 turns on publish proxy, more info in ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/proxy"},"proxy chapter")),(0,o.kt)("h2",{id:"channel-options-config-example"},"Channel options config example"),(0,o.kt)("p",null,"Let's look how to set some of these options in a config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    "token_hmac_secret_key": "my-secret-key",\n    "api_key": "secret-api-key",\n    "anonymous": true,\n    "publish": true,\n    "subscribe_to_publish": true,\n    "presence": true,\n    "join_leave": true,\n    "history_size": 10,\n    "history_ttl": "300s",\n    "recover": true\n}\n')),(0,o.kt)("p",null,"Here we set channel options on config top-level \u2013 these options will affect channels without namespace. Below we describe namespaces and how to define channel options for namespace."),(0,o.kt)("h2",{id:"channel-namespaces"},"Channel namespaces"),(0,o.kt)("p",null,"It's possible to configure a list of channel namespaces. Namespaces are optional but very useful. "),(0,o.kt)("p",null,"Namespace allows to set custom options for channels starting with namespace name. This provides a great control over channel behavior so you have a flexible way to define different channel options for different real-time features in application."),(0,o.kt)("p",null,"Namespace has a name, and the same channel options (with same defaults) as described above."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - unique namespace name (name must consist of letters, numbers, underscores or hyphens and be more than 2 symbols length i.e. satisfy regexp ",(0,o.kt)("inlineCode",{parentName:"li"},"^[-a-zA-Z0-9_]{2,}$"),").")),(0,o.kt)("p",null,"If you want to use namespace options for a channel - you must include namespace name into channel name with ",(0,o.kt)("inlineCode",{parentName:"p"},":")," as separator:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"public:messages")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gossips:messages")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gossips")," are namespace names. Centrifugo will look for ",(0,o.kt)("inlineCode",{parentName:"p"},":")," symbol in channel name, will extract namespace name and will apply namespace options whenever required."),(0,o.kt)("p",null,"All things together here is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," which includes some top-level channel options set and has 2 additional channel namespaces configured:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    "token_hmac_secret_key": "very-long-secret-key",\n    "api_key": "secret-api-key",\n    "anonymous": true,\n    "publish": true,\n    "presence": true,\n    "join_leave": true,\n    "history_size": 10,\n    "history_lifetime": 30,\n    "namespaces": [\n        {\n          "name": "public",\n          "publish": true,\n          "anonymous": true,\n          "history_size": 10,\n          "history_lifetime": 300,\n          "history_recover": true\n        },\n        {\n          "name": "gossips",\n          "presence": true,\n          "join_leave": true\n        }\n    ]\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Channel ",(0,o.kt)("inlineCode",{parentName:"li"},"news")," will use globally defined channel options."),(0,o.kt)("li",{parentName:"ul"},"Channel ",(0,o.kt)("inlineCode",{parentName:"li"},"public:news")," will use ",(0,o.kt)("inlineCode",{parentName:"li"},"public")," namespace options."),(0,o.kt)("li",{parentName:"ul"},"Channel ",(0,o.kt)("inlineCode",{parentName:"li"},"gossips:news")," will use ",(0,o.kt)("inlineCode",{parentName:"li"},"gossips")," namespace options."),(0,o.kt)("li",{parentName:"ul"},"Channel ",(0,o.kt)("inlineCode",{parentName:"li"},"xxx:hello")," will result into subscription error since there is no ",(0,o.kt)("inlineCode",{parentName:"li"},"xxx")," namespace defined inn configuration above.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Channel namespaces also work with private channels and user-limited channels"),". For example, if you have namespace called ",(0,o.kt)("inlineCode",{parentName:"p"},"dialogs")," then private channel can be constructed as ",(0,o.kt)("inlineCode",{parentName:"p"},"$dialogs:gossips"),", user-limited channel can be constructed as ",(0,o.kt)("inlineCode",{parentName:"p"},"dialogs:dialog#1,2"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is no inheritance in channel options and namespaces \u2013 for example you defined ",(0,o.kt)("inlineCode",{parentName:"p"},"presence: true")," on a top level of configuration and then defined a namespace \u2013 that namespace won't have presence enabled - you must enable it for a namespace explicitly. "))))}u.isMDXComponent=!0}}]);