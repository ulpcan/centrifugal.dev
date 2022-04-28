"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9878],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(3117),r=t(7294),i=t(2389),l=t(742),s=t(6010),o="tabItem_LplD";function p(e){var n,t,i,p=e.lazy,c=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,l.lx)(v,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(n=null!=u?u:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=b[0])?void 0:i.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,x=(0,r.useState)(k),w=x[0],C=x[1],j=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=N[m];null!=T&&T!==w&&v.some((function(e){return e.value===T}))&&C(T)}var O=function(e){var n=e.currentTarget,t=j.indexOf(n),a=v[t].value;a!==w&&(E(n),C(a),null!=m&&y(m,a))},L=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return j.push(e)},onKeyDown:L,onFocus:O,onClick:O},i,{className:(0,s.Z)("tabs__item",o,null==i?void 0:i.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),p?(0,r.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function c(e){var n=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},6596:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),l=t(9877),s=t(8215),o=["components"],p={id:"cel_expressions",title:"CEL expressions",draft:!0},c=void 0,u={unversionedId:"pro/cel_expressions",id:"pro/cel_expressions",title:"CEL expressions",description:"Centrifugo PRO supports CEL expressions (Common Expression Language) for checking subscription permissions. CEL expressions provide a developer-friendly, fast and secure way to evaluate some conditions predefined in the configuration. They are used in some Google services (ex. Firebase), in Envoy RBAC configuration, etc.",source:"@site/docs/pro/cel_expressions.md",sourceDirName:"pro",slug:"/pro/cel_expressions",permalink:"/docs/pro/cel_expressions",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/cel_expressions.md",tags:[],version:"current",frontMatter:{id:"cel_expressions",title:"CEL expressions",draft:!0},sidebar:"Pro",previous:{title:"Singleflight",permalink:"/docs/pro/singleflight"},next:{title:"CPU and RSS stats",permalink:"/docs/pro/process_stats"}},d={},m=[{value:"Subscribe expression",id:"subscribe-expression",level:2},{value:"Channel labels",id:"channel-labels",level:3},{value:"Subscribe expression variables",id:"subscribe-expression-variables",level:3}],h={toc:m};function b(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Centrifugo PRO supports ",(0,i.kt)("a",{parentName:"p",href:"https://opensource.google/projects/cel"},"CEL expressions")," (Common Expression Language) for checking subscription permissions. CEL expressions provide a developer-friendly, fast and secure way to evaluate some conditions predefined in the configuration. They are used in some Google services (ex. Firebase), in Envoy RBAC configuration, etc."),(0,i.kt)("p",null,"For Centrifugo this is a flexible mechanism which can help to avoid using private subscriptions or using subscribe proxy in some cases. This means you can avoid sending an additional HTTP request to the backend for a channel subscription attempt. As the result less resources may be used and smaller latencies may be achieved."),(0,i.kt)("p",null,"Some good links which may help you dive into CEL expressions are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/cel-spec/blob/master/doc/intro.md"},"CEL introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/google/cel-spec/blob/master/doc/langdef.md"},"CEL language definition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/asset-inventory/docs/monitoring-asset-changes-with-condition#using_cel"},"Docs of Google asset inventory")," which also uses CEL")),(0,i.kt)("p",null,"Below we will explore some basic expressions and how they can be used in Centrifugo."),(0,i.kt)("h2",{id:"subscribe-expression"},"Subscribe expression"),(0,i.kt)("p",null,"It's possible to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe_expression")," for a channel namespace (",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe_expression")," is just an additional namespace channel option, with same rules applied as for Centrifugo OSS channel options). This expression should be a valid CEL expression."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    "namespaces": [\n        {\n            "name": "admin",\n            "subscribe_expression": "\'admin\' in meta.roles"\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"You can also attach custom ",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," information to the connection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in connect proxy result"),(0,i.kt)("li",{parentName:"ul"},"or in JWT ",(0,i.kt)("inlineCode",{parentName:"li"},"meta")," claim.")),(0,i.kt)("p",null,"An expression is evaluated for every subscription attempt to a channel in a namespace. So if ",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," attached to the connection is sth like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "roles": ["admin"]\n}\n')),(0,i.kt)("p",null,"\u2013 then for every channel in ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," namespace expression will be evaluated to True and subscription will be accepted by Centrifugo."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"meta")," must be JSON object (any ",(0,i.kt)("inlineCode",{parentName:"p"},"{...}"),") for CEL expressions to work."))),(0,i.kt)("h3",{id:"channel-labels"},"Channel labels"),(0,i.kt)("p",null,"To make expression concept even more powerful Centrifugo PRO extends channel name syntax with channel labels."),(0,i.kt)("p",null,"Channel labels are the pairs of key=value (where key and value must be urlencoded), separated by comma and put inside curly brackets."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that both key and value of channel label must be in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Percent-encoding"},"URL-encoded format")," (i.e. escaped). Below we show several examples for different programming languages. "))),(0,i.kt)("p",null,"For example, here is a channel with channel labels set:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"admin:events{instance=42,project=x1}\n")),(0,i.kt)("p",null,"Labels can be placed at any place after namespace separator (i.e. after ",(0,i.kt)("inlineCode",{parentName:"p"},":")," symbol)."),(0,i.kt)("p",null,"These labels are extracted from the channel name by Centrifugo before evaluating CEL expression and passed to the expression context."),(0,i.kt)("p",null,"Each label key can have multiple values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"admin:events{project=x1,project=x2}\n")),(0,i.kt)("p",null,"In CEL expression you can then make decisions based on channel labels:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    "namespaces": [\n        {\n            "name": "admin",\n            "subscribe_expression": "labels.instance[0] == meta.instance && labels.project[0] in meta.projects"\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"The reason why we use ",(0,i.kt)("inlineCode",{parentName:"p"},"[0]")," in an expression is because labels decoded by Centrifugo into ",(0,i.kt)("inlineCode",{parentName:"p"},"map[string][]string"),", as the same key can have several values."),(0,i.kt)("p",null,"For the expression above to evaluate to True for channel ",(0,i.kt)("inlineCode",{parentName:"p"},"admin:events{instance=42&project=x1}"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," should be like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "instance": "42",\n    "projects": ["x1"]\n}\n')),(0,i.kt)("p",null,"Let's take a look on one more example. Here is how we could implement ",(0,i.kt)("a",{parentName:"p",href:"/docs/server/channels#user-channel-boundary-"},"user-limited")," channels functionality using CEL expression and channel labels. We could have channel like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"users{user=user1,user=user2}\n")),(0,i.kt)("p",null,"Then by using ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe_expression")," like ",(0,i.kt)("inlineCode",{parentName:"p"},'"user in labels.user"')," we can make sure that only user which is part of channel labels will be able to subscribe on this channel. ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," variable is the current user ID and it's available in a subscribe expression context, see ",(0,i.kt)("a",{parentName:"p",href:"#subscribe-expression-variables"},"all available variables")," you can use."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that the order of labels in a channel name is important. In Centrifugo channel is just a string, so channels ",(0,i.kt)("inlineCode",{parentName:"p"},"events{instance=42,project=x1}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"events{project=x1,instance=42}")," are totally different! Channel labels are just part of a channel string, not stripped or modified in any way by Centrifugo. The ordering concern was the reason why we decided to not use ",(0,i.kt)("inlineCode",{parentName:"p"},"&")," to separate key/value pairs in channel labels. Because this could lead to many mistakes when using URL query string builders which behave differently in various programming languages and libraries."))),(0,i.kt)("p",null,"Here we show label construction examples for different languages (note, we avoid using maps since in many languages maps do not guarantee iteration order):"),(0,i.kt)(l.Z,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Javascript",value:"javascript"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from urllib.parse import quote\nvalues = [("project", "p1"), ("project", "p2"), ("instance", "42")]\nlabels = "{" + ",".join(quote(k) + "=" + quote(v) for k, v in values) + "}"\nprint(labels)\n# {project=p1,project=p2,instance=42}\n'))),(0,i.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'let parts = [];\nconst values = [["project", "p1"], ["project", "p2"], ["instance", "42"]]\nvalues.forEach(function(i) { parts.push(encodeURIComponent(i[0]) + "=" + encodeURIComponent(i[1]));})\nconst labels = "{" + parts.join(",") + "}";\nconsole.log(labels)\n// {project=p1,project=p2,instance=42}\n')))),(0,i.kt)("h3",{id:"subscribe-expression-variables"},"Subscribe expression variables"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"user"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"facebook:12121612"')),(0,i.kt)("td",{parentName:"tr",align:null},"Current user ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"channel"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"admin:events{env=42,env=43}"')),(0,i.kt)("td",{parentName:"tr",align:null},"Channel client tries to subscribe")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"labels"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"map[string][]string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{"env": ["42", "43"]}')),(0,i.kt)("td",{parentName:"tr",align:null},"Labels extracted from channel name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"meta"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"map[string]any")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{"env": "42"}')),(0,i.kt)("td",{parentName:"tr",align:null},"Meta attached to the connection by the apllication backend")))))}b.isMDXComponent=!0}}]);