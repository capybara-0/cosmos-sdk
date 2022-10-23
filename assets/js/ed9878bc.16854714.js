"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[8752],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return a?o.createElement(h,i(i({ref:t},m),{},{components:a})):o.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const r={},i="ADR 055: ORM",s={unversionedId:"architecture/adr-055-orm",id:"architecture/adr-055-orm",title:"ADR 055: ORM",description:"Changelog",source:"@site/docs/architecture/adr-055-orm.md",sourceDirName:"architecture",slug:"/architecture/adr-055-orm",permalink:"/main/architecture/adr-055-orm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 053: Go Module Refactoring",permalink:"/main/architecture/adr-053-go-module-refactoring"},next:{title:"ADR 057: App Wiring Part I",permalink:"/main/architecture/adr-057-app-wiring-1"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"adr-055-orm"},"ADR 055: ORM"),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2022-04-27: First draft")),(0,n.kt)("h2",{id:"status"},"Status"),(0,n.kt)("p",null,"ACCEPTED Implemented"),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"In order to make it easier for developers to build Cosmos SDK modules and for clients to query, index and verify proofs\nagainst state data, we have implemented an ORM (object-relational mapping) layer for the Cosmos SDK."),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"Historically modules in the Cosmos SDK have always used the key-value store directly and created various handwritten\nfunctions for managing key format as well as constructing secondary indexes. This consumes a significant amount of\ntime when building a module and is error-prone. Because key formats are non-standard, sometimes poorly documented,\nand subject to change, it is hard for clients to generically index, query and verify merkle proofs against state data."),(0,n.kt)("p",null,'The known first instance of an "ORM" in the Cosmos ecosystem was in ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/iov-one/weave/tree/master/orm"},"weave"),".\nA later version was built for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/regen-network/regen-ledger/tree/157181f955823149e1825263a317ad8e16096da4/orm"},"regen-ledger")," for\nuse in the group module and later ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/35d3312c3be306591fcba39892223f1244c8d108/x/group/internal/orm"},"ported to the SDK"),"\njust for that purpose."),(0,n.kt)("p",null,"While these earlier designs made it significantly easier to write state machines, they still required a lot of manual\nconfiguration, didn't expose state format directly to clients, and were limited in their support of different types\nof index keys, composite keys, and range queries."),(0,n.kt)("p",null,"Discussions about the design continued in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/discussions/9156"},"https://github.com/cosmos/cosmos-sdk/discussions/9156")," and more\nsophisticated proofs of concept were created in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/allinbits/cosmos-sdk-poc/tree/master/runtime/orm"},"https://github.com/allinbits/cosmos-sdk-poc/tree/master/runtime/orm"),"\nand ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/10454"},"https://github.com/cosmos/cosmos-sdk/pull/10454"),"."),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,"These prior efforts culminated in the creation of the Cosmos SDK ",(0,n.kt)("inlineCode",{parentName:"p"},"orm")," go module which uses protobuf annotations\nfor specifying ORM table definitions. This ORM is based on the new ",(0,n.kt)("inlineCode",{parentName:"p"},"google.golang.org/protobuf/reflect/protoreflect"),"\nAPI and supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sorted indexes for all simple protobuf types (except ",(0,n.kt)("inlineCode",{parentName:"li"},"bytes"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"enum"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"float"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"double"),") as well as ",(0,n.kt)("inlineCode",{parentName:"li"},"Timestamp")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Duration")),(0,n.kt)("li",{parentName:"ul"},"unsorted ",(0,n.kt)("inlineCode",{parentName:"li"},"bytes")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"enum")," indexes"),(0,n.kt)("li",{parentName:"ul"},"composite primary and secondary keys"),(0,n.kt)("li",{parentName:"ul"},"unique indexes"),(0,n.kt)("li",{parentName:"ul"},"auto-incrementing ",(0,n.kt)("inlineCode",{parentName:"li"},"uint64")," primary keys"),(0,n.kt)("li",{parentName:"ul"},"complex prefix and range queries"),(0,n.kt)("li",{parentName:"ul"},"paginated queries"),(0,n.kt)("li",{parentName:"ul"},"complete logical decoding of KV-store data")),(0,n.kt)("p",null,"Almost all the information needed to decode state directly is specified in .proto files. Each table definition specifies\nan ID which is unique per .proto file and each index within a table is unique within that table. Clients then only need\nto know the name of a module and the prefix ORM data for a specific .proto file within that module in order to decode\nstate data directly. This additional information will be exposed directly through app configs which will be explained\nin a future ADR related to app wiring."),(0,n.kt)("p",null,"The ORM makes optimizations around storage space by not repeating values in the primary key in the key value\nwhen storing primary key records. For example, if the object ",(0,n.kt)("inlineCode",{parentName:"p"},'{"a":0,"b":1}')," has the primary key ",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", it will\nbe stored in the key value store as ",(0,n.kt)("inlineCode",{parentName:"p"},"Key: '0', Value: {\"b\":1}")," (with more efficient protobuf binary encoding).\nAlso, the generated code from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-proto"},"https://github.com/cosmos/cosmos-proto")," does optimizations around the\n",(0,n.kt)("inlineCode",{parentName:"p"},"google.golang.org/protobuf/reflect/protoreflect")," API to improve performance."),(0,n.kt)("p",null,"A code generator is included with the ORM which creates type safe wrappers around the ORM's dynamic ",(0,n.kt)("inlineCode",{parentName:"p"},"Table"),"\nimplementation and is the recommended way for modules to use the ORM."),(0,n.kt)("p",null,"The ORM tests provide a simplified bank module demonstration which illustrates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/0d846ae2f0424b2eb640f6679a703b52d407813d/orm/internal/testpb/bank.proto"},"ORM proto options")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/0d846ae2f0424b2eb640f6679a703b52d407813d/orm/internal/testpb/bank.cosmos_orm.go"},"Generated Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/0d846ae2f0424b2eb640f6679a703b52d407813d/orm/model/ormdb/module_test.go"},"Example Usage in a Module Keeper"))),(0,n.kt)("h2",{id:"consequences"},"Consequences"),(0,n.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,n.kt)("p",null,"State machine code that adopts the ORM will need migrations as the state layout is generally backwards incompatible.\nThese state machines will also need to migrate to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-proto"},"https://github.com/cosmos/cosmos-proto")," at least for state data."),(0,n.kt)("h3",{id:"positive"},"Positive"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"easier to build modules"),(0,n.kt)("li",{parentName:"ul"},"easier to add secondary indexes to state"),(0,n.kt)("li",{parentName:"ul"},"possible to write a generic indexer for ORM state"),(0,n.kt)("li",{parentName:"ul"},"easier to write clients that do state proofs"),(0,n.kt)("li",{parentName:"ul"},"possible to automatically write query layers rather than needing to manually implement gRPC queries")),(0,n.kt)("h3",{id:"negative"},"Negative"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"worse performance than handwritten keys (for now). See ",(0,n.kt)("a",{parentName:"li",href:"#further-discussions"},"Further Discussions"),"\nfor potential improvements")),(0,n.kt)("h3",{id:"neutral"},"Neutral"),(0,n.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,n.kt)("p",null,"Further discussions will happen within the Cosmos SDK Framework Working Group. Current planned and ongoing work includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"automatically generate client-facing query layer"),(0,n.kt)("li",{parentName:"ul"},"client-side query libraries that transparently verify light client proofs"),(0,n.kt)("li",{parentName:"ul"},"index ORM data to SQL databases"),(0,n.kt)("li",{parentName:"ul"},"improve performance by:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"optimizing existing reflection based code to avoid unnecessary gets when doing deletes & updates of simple tables"),(0,n.kt)("li",{parentName:"ul"},"more sophisticated code generation such as making fast path reflection even faster (avoiding ",(0,n.kt)("inlineCode",{parentName:"li"},"switch")," statements),\nor even fully generating code that equals handwritten performance")))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/iov-one/weave/tree/master/orm"},"https://github.com/iov-one/weave/tree/master/orm"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/regen-network/regen-ledger/tree/157181f955823149e1825263a317ad8e16096da4/orm"},"https://github.com/regen-network/regen-ledger/tree/157181f955823149e1825263a317ad8e16096da4/orm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/tree/35d3312c3be306591fcba39892223f1244c8d108/x/group/internal/orm"},"https://github.com/cosmos/cosmos-sdk/tree/35d3312c3be306591fcba39892223f1244c8d108/x/group/internal/orm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/discussions/9156"},"https://github.com/cosmos/cosmos-sdk/discussions/9156")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/allinbits/cosmos-sdk-poc/tree/master/runtime/orm"},"https://github.com/allinbits/cosmos-sdk-poc/tree/master/runtime/orm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/10454"},"https://github.com/cosmos/cosmos-sdk/pull/10454"))))}p.isMDXComponent=!0}}]);