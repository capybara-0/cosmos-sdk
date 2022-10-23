"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[9925],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return t?a.createElement(h,o(o({ref:n},m),{},{components:t})):a.createElement(h,o({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:1},o="Invariants",s={unversionedId:"building-modules/invariants",id:"building-modules/invariants",title:"Invariants",description:"An invariant is a property of the application that should always be true. In the context of the Cosmos SDK, an Invariant is a function that checks for a particular invariant. These functions are useful to detect bugs early on and act upon them to limit their potential consequences (e.g. by halting the chain). They are also useful in the development process of the application to detect bugs via simulations.",source:"@site/docs/building-modules/07-invariants.md",sourceDirName:"building-modules",slug:"/building-modules/invariants",permalink:"/main/building-modules/invariants",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Keepers",permalink:"/main/building-modules/keeper"},next:{title:"Module Genesis",permalink:"/main/building-modules/genesis"}},l={},p=[{value:"Implementing <code>Invariant</code>s",id:"implementing-invariants",level:2},{value:"Invariant Registry",id:"invariant-registry",level:2}],m={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"invariants"},"Invariants"),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"An invariant is a property of the application that should always be true. In the context of the Cosmos SDK, an ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant")," is a function that checks for a particular invariant. These functions are useful to detect bugs early on and act upon them to limit their potential consequences (e.g. by halting the chain). They are also useful in the development process of the application to detect bugs via simulations.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("h3",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/main/building-modules/keeper"},"Keepers")))),(0,i.kt)("h2",{id:"implementing-invariants"},"Implementing ",(0,i.kt)("inlineCode",{parentName:"h2"},"Invariant"),"s"),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant")," is a function that checks for a particular invariant within a module. Module ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant"),"s must follow the ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant")," type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/types/invariant.go#L9\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," return value is the invariant message, which can be used when printing logs, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"bool")," return value is the actual result of the invariant check."),(0,i.kt)("p",null,"In practice, each module implements ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant"),"s in a ",(0,i.kt)("inlineCode",{parentName:"p"},"keeper/invariants.go")," file within the module's folder. The standard is to implement one ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant")," function per logical grouping of invariants with the following model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Example for an Invariant that checks balance-related invariants\n\nfunc BalanceInvariants(k Keeper) sdk.Invariant {\n    return func(ctx sdk.Context) (string, bool) {\n        // Implement checks for balance-related invariants\n    }\n}\n")),(0,i.kt)("p",null,"Additionally, module developers should generally implement an ",(0,i.kt)("inlineCode",{parentName:"p"},"AllInvariants")," function that runs all the ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant"),"s functions of the module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// AllInvariants runs all invariants of the module.\n// In this example, the module implements two Invariants: BalanceInvariants and DepositsInvariants\n\nfunc AllInvariants(k Keeper) sdk.Invariant {\n\n    return func(ctx sdk.Context) (string, bool) {\n        res, stop := BalanceInvariants(k)(ctx)\n        if stop {\n            return res, stop\n        }\n\n        return DepositsInvariant(k)(ctx)\n    }\n}\n")),(0,i.kt)("p",null,"Finally, module developers need to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterInvariants")," method as part of the ",(0,i.kt)("a",{parentName:"p",href:"/main/building-modules/module-manager#appmodule"},(0,i.kt)("inlineCode",{parentName:"a"},"AppModule")," interface"),". Indeed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterInvariants")," method of the module, implemented in the ",(0,i.kt)("inlineCode",{parentName:"p"},"module/module.go")," file, typically only defers the call to a ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterInvariants")," method implemented in the ",(0,i.kt)("inlineCode",{parentName:"p"},"keeper/invariants.go")," file. The ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterInvariants")," method registers a route for each ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant")," function in the ",(0,i.kt)("a",{parentName:"p",href:"#invariant-registry"},(0,i.kt)("inlineCode",{parentName:"a"},"InvariantRegistry")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/x/staking/keeper/invariants.go#L12-L21\n")),(0,i.kt)("p",null,"For more, see an example of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/x/staking/keeper/invariants.go"},(0,i.kt)("inlineCode",{parentName:"a"},"Invariant"),"s implementation from the ",(0,i.kt)("inlineCode",{parentName:"a"},"staking")," module"),"."),(0,i.kt)("h2",{id:"invariant-registry"},"Invariant Registry"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"InvariantRegistry")," is a registry where the ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant"),"s of all the modules of an application are registered. There is only one ",(0,i.kt)("inlineCode",{parentName:"p"},"InvariantRegistry")," per ",(0,i.kt)("strong",{parentName:"p"},"application"),", meaning module developers need not implement their own ",(0,i.kt)("inlineCode",{parentName:"p"},"InvariantRegistry")," when building a module. ",(0,i.kt)("strong",{parentName:"p"},"All module developers need to do is to register their modules' invariants in the ",(0,i.kt)("inlineCode",{parentName:"strong"},"InvariantRegistry"),", as explained in the section above"),". The rest of this section gives more information on the ",(0,i.kt)("inlineCode",{parentName:"p"},"InvariantRegistry")," itself, and does not contain anything directly relevant to module developers."),(0,i.kt)("p",null,"At its core, the ",(0,i.kt)("inlineCode",{parentName:"p"},"InvariantRegistry")," is defined in the Cosmos SDK as an interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/types/invariant.go#L14-L17\n")),(0,i.kt)("p",null,"Typically, this interface is implemented in the ",(0,i.kt)("inlineCode",{parentName:"p"},"keeper")," of a specific module. The most used implementation of an ",(0,i.kt)("inlineCode",{parentName:"p"},"InvariantRegistry")," can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"crisis")," module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/x/crisis/keeper/keeper.go#L49-L53\n")),(0,i.kt)("p",null," The ",(0,i.kt)("inlineCode",{parentName:"p"},"InvariantRegistry")," is therefore typically instantiated by instantiating the ",(0,i.kt)("inlineCode",{parentName:"p"},"keeper")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"crisis")," module in the ",(0,i.kt)("a",{parentName:"p",href:"/main/basics/app-anatomy#constructor-function"},"application's constructor function"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Invariant"),"s can be checked manually via ",(0,i.kt)("a",{parentName:"p",href:"/main/building-modules/messages-and-queries"},(0,i.kt)("inlineCode",{parentName:"a"},"message"),"s"),", but most often they are checked automatically at the end of each block. Here is an example from the ",(0,i.kt)("inlineCode",{parentName:"p"},"crisis")," module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.46.0/x/crisis/abci.go#L12-L21\n")),(0,i.kt)("p",null,"In both cases, if one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant"),"s returns false, the ",(0,i.kt)("inlineCode",{parentName:"p"},"InvariantRegistry")," can trigger special logic (e.g. have the application panic and print the ",(0,i.kt)("inlineCode",{parentName:"p"},"Invariant"),"s message in the log)."))}c.isMDXComponent=!0}}]);