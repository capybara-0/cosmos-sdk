"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={},r="ADR 030: Authorization Module",s={unversionedId:"architecture/adr-030-authz-module",id:"architecture/adr-030-authz-module",title:"ADR 030: Authorization Module",description:"Changelog",source:"@site/docs/architecture/adr-030-authz-module.md",sourceDirName:"architecture",slug:"/architecture/adr-030-authz-module",permalink:"/main/architecture/adr-030-authz-module",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 029: Fee Grant Module",permalink:"/main/architecture/adr-029-fee-grant-module"},next:{title:"ADR 031: Protobuf Msg Services",permalink:"/main/architecture/adr-031-msg-service"}},l={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Types",id:"types",level:3},{value:"Authorization",id:"authorization",level:4},{value:"Small notes on <code>AcceptResponse</code>",id:"small-notes-on-acceptresponse",level:5},{value:"<code>Msg</code> Service",id:"msg-service",level:3},{value:"Router Middleware",id:"router-middleware",level:3},{value:"CLI",id:"cli",level:3},{value:"<code>tx exec</code> Method",id:"tx-exec-method",level:4},{value:"<code>tx grant &lt;grantee&gt; &lt;authorization&gt; --from &lt;granter&gt;</code>",id:"tx-grant-grantee-authorization---from-granter",level:4},{value:"<code>tx revoke &lt;grantee&gt; &lt;method-name&gt; --from &lt;granter&gt;</code>",id:"tx-revoke-grantee-method-name---from-granter",level:4},{value:"Built-in Authorizations",id:"built-in-authorizations",level:3},{value:"<code>SendAuthorization</code>",id:"sendauthorization",level:4},{value:"<code>GenericAuthorization</code>",id:"genericauthorization",level:4},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adr-030-authorization-module"},"ADR 030: Authorization Module"),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"2019-11-06: Initial Draft"),(0,o.kt)("li",{parentName:"ul"},"2020-10-12: Updated Draft"),(0,o.kt)("li",{parentName:"ul"},"2020-11-13: Accepted"),(0,o.kt)("li",{parentName:"ul"},"2020-05-06: proto API updates, use ",(0,o.kt)("inlineCode",{parentName:"li"},"sdk.Msg")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"sdk.ServiceMsg")," (the latter concept was removed from Cosmos SDK)"),(0,o.kt)("li",{parentName:"ul"},"2022-04-20: Updated the ",(0,o.kt)("inlineCode",{parentName:"li"},"SendAuthorization")," proto docs to clarify the ",(0,o.kt)("inlineCode",{parentName:"li"},"SpendLimit")," is a required field. (Generic authorization can be used with bank msg type url to create limit less bank authorization)")),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("p",null,"Accepted"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"This ADR defines the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/authz")," module which allows accounts to grant authorizations to perform actions\non behalf of that account to other accounts."),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"The concrete use cases which motivated this module include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the desire to delegate the ability to vote on proposals to other accounts besides the account which one has\ndelegated stake"),(0,o.kt)("li",{parentName:"ul"},'"sub-keys" functionality, as originally proposed in ',(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/4480"},"#","4480")," which\nis a term used to describe the functionality provided by this module together with\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},"fee_grant")," module from ",(0,o.kt)("a",{parentName:"li",href:"/main/architecture/adr-029-fee-grant-module"},"ADR 029")," and the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/tree/main/x/group"},"group module"),".")),(0,o.kt)("p",null,'The "sub-keys" functionality roughly refers to the ability for one account to grant some subset of its capabilities to\nother accounts with possibly less robust, but easier to use security measures. For instance, a master account representing\nan organization could grant the ability to spend small amounts of the organization\'s funds to individual employee accounts.\nOr an individual (or group) with a multisig wallet could grant the ability to vote on proposals to any one of the member\nkeys.'),(0,o.kt)("p",null,"The current implementation is based on work done by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos-gaians/cosmos-sdk/tree/hackatom/x/delegation"},"Gaian's team at Hackatom Berlin 2019"),"."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"We will create a module named ",(0,o.kt)("inlineCode",{parentName:"p"},"authz")," which provides functionality for\ngranting arbitrary privileges from one account (the ",(0,o.kt)("em",{parentName:"p"},"granter"),") to another account (the ",(0,o.kt)("em",{parentName:"p"},"grantee"),"). Authorizations\nmust be granted for a particular ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg")," service methods one by one using an implementation\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," interface."),(0,o.kt)("h3",{id:"types"},"Types"),(0,o.kt)("p",null,"Authorizations determine exactly what privileges are granted. They are extensible\nand can be defined for any ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg")," service method even outside of the module where\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg")," method is defined. ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization"),"s reference ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg"),"s using their TypeURL."),(0,o.kt)("h4",{id:"authorization"},"Authorization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Authorization interface {\n    proto.Message\n\n    // MsgTypeURL returns the fully-qualified Msg TypeURL (as described in ADR 020),\n    // which will process and accept or reject a request.\n    MsgTypeURL() string\n\n    // Accept determines whether this grant permits the provided sdk.Msg to be performed, and if\n    // so provides an upgraded authorization instance.\n    Accept(ctx sdk.Context, msg sdk.Msg) (AcceptResponse, error)\n\n    // ValidateBasic does a simple validation check that\n    // doesn't require access to any other information.\n    ValidateBasic() error\n}\n\n// AcceptResponse instruments the controller of an authz message if the request is accepted\n// and if it should be updated or deleted.\ntype AcceptResponse struct {\n    // If Accept=true, the controller can accept and authorization and handle the update.\n    Accept bool\n    // If Delete=true, the controller must delete the authorization object and release\n    // storage resources.\n    Delete bool\n    // Controller, who is calling Authorization.Accept must check if `Updated != nil`. If yes,\n    // it must use the updated version and handle the update on the storage level.\n    Updated Authorization\n}\n")),(0,o.kt)("p",null,"For example a ",(0,o.kt)("inlineCode",{parentName:"p"},"SendAuthorization")," like this is defined for ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSend")," that takes\na ",(0,o.kt)("inlineCode",{parentName:"p"},"SpendLimit")," and updates it down to zero:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type SendAuthorization struct {\n    // SpendLimit specifies the maximum amount of tokens that can be spent\n    // by this authorization and will be updated as tokens are spent. This field is required. (Generic authorization \n    // can be used with bank msg type url to create limit less bank authorization).\n    SpendLimit sdk.Coins\n}\n\nfunc (a SendAuthorization) MsgTypeURL() string {\n    return sdk.MsgTypeURL(&MsgSend{})\n}\n\nfunc (a SendAuthorization) Accept(ctx sdk.Context, msg sdk.Msg) (authz.AcceptResponse, error) {\n    mSend, ok := msg.(*MsgSend)\n    if !ok {\n        return authz.AcceptResponse{}, sdkerrors.ErrInvalidType.Wrap("type mismatch")\n    }\n    limitLeft, isNegative := a.SpendLimit.SafeSub(mSend.Amount)\n    if isNegative {\n        return authz.AcceptResponse{}, sdkerrors.ErrInsufficientFunds.Wrapf("requested amount is more than spend limit")\n    }\n    if limitLeft.IsZero() {\n        return authz.AcceptResponse{Accept: true, Delete: true}, nil\n    }\n\n    return authz.AcceptResponse{Accept: true, Delete: false, Updated: &SendAuthorization{SpendLimit: limitLeft}}, nil\n}\n')),(0,o.kt)("p",null,"A different type of capability for ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSend")," could be implemented\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," interface with no need to change the underlying\n",(0,o.kt)("inlineCode",{parentName:"p"},"bank")," module."),(0,o.kt)("h5",{id:"small-notes-on-acceptresponse"},"Small notes on ",(0,o.kt)("inlineCode",{parentName:"h5"},"AcceptResponse")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AcceptResponse.Accept")," field will be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the authorization is accepted.\nHowever, if it is rejected, the function ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept")," will raise an error (without setting ",(0,o.kt)("inlineCode",{parentName:"p"},"AcceptResponse.Accept")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AcceptResponse.Updated")," field will be set to a non-nil value only if there is a real change to the authorization.\nIf authorization remains the same (as is, for instance, always the case for a ",(0,o.kt)("a",{parentName:"p",href:"#genericauthorization"},(0,o.kt)("inlineCode",{parentName:"a"},"GenericAuthorization")),"),\nthe field will be ",(0,o.kt)("inlineCode",{parentName:"p"},"nil"),"."))),(0,o.kt)("h3",{id:"msg-service"},(0,o.kt)("inlineCode",{parentName:"h3"},"Msg")," Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'service Msg {\n  // Grant grants the provided authorization to the grantee on the granter\'s\n  // account with the provided expiration time.\n  rpc Grant(MsgGrant) returns (MsgGrantResponse);\n\n  // Exec attempts to execute the provided messages using\n  // authorizations granted to the grantee. Each message should have only\n  // one signer corresponding to the granter of the authorization.\n  rpc Exec(MsgExec) returns (MsgExecResponse);\n\n  // Revoke revokes any authorization corresponding to the provided method name on the\n  // granter\'s account that has been granted to the grantee.\n  rpc Revoke(MsgRevoke) returns (MsgRevokeResponse);\n}\n\n// Grant gives permissions to execute\n// the provided method with expiration time.\nmessage Grant {\n  google.protobuf.Any       authorization = 1 [(cosmos_proto.accepts_interface) = "Authorization"];\n  google.protobuf.Timestamp expiration    = 2 [(gogoproto.stdtime) = true, (gogoproto.nullable) = false];\n}\n\nmessage MsgGrant {\n  string granter = 1;\n  string grantee = 2;\n\n  Grant grant = 3 [(gogoproto.nullable) = false];\n}\n\nmessage MsgExecResponse {\n  cosmos.base.abci.v1beta1.Result result = 1;\n}\n\nmessage MsgExec {\n  string   grantee                  = 1;\n  // Authorization Msg requests to execute. Each msg must implement Authorization interface\n  repeated google.protobuf.Any msgs = 2 [(cosmos_proto.accepts_interface) = "sdk.Msg"];;\n}\n')),(0,o.kt)("h3",{id:"router-middleware"},"Router Middleware"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"authz")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Keeper")," will expose a ",(0,o.kt)("inlineCode",{parentName:"p"},"DispatchActions")," method which allows other modules to send ",(0,o.kt)("inlineCode",{parentName:"p"},"Msg"),"s\nto the router based on ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," grants:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type Keeper interface {\n    // DispatchActions routes the provided msgs to their respective handlers if the grantee was granted an authorization\n    // to send those messages by the first (and only) signer of each msg.\n    DispatchActions(ctx sdk.Context, grantee sdk.AccAddress, msgs []sdk.Msg) sdk.Result`\n}\n")),(0,o.kt)("h3",{id:"cli"},"CLI"),(0,o.kt)("h4",{id:"tx-exec-method"},(0,o.kt)("inlineCode",{parentName:"h4"},"tx exec")," Method"),(0,o.kt)("p",null,"When a CLI user wants to run a transaction on behalf of another account using ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgExec"),", they\ncan use the ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," method. For instance ",(0,o.kt)("inlineCode",{parentName:"p"},"gaiacli tx gov vote 1 yes --from <grantee> --generate-only | gaiacli tx authz exec --send-as <granter> --from <grantee>"),"\nwould send a transaction like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"MsgExec {\n  Grantee: mykey,\n  Msgs: []sdk.Msg{\n    MsgVote {\n      ProposalID: 1,\n      Voter: cosmos3thsdgh983egh823\n      Option: Yes\n    }\n  }\n}\n")),(0,o.kt)("h4",{id:"tx-grant-grantee-authorization---from-granter"},(0,o.kt)("inlineCode",{parentName:"h4"},"tx grant <grantee> <authorization> --from <granter>")),(0,o.kt)("p",null,"This CLI command will send a ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgGrant")," transaction. ",(0,o.kt)("inlineCode",{parentName:"p"},"authorization")," should be encoded as\nJSON on the CLI."),(0,o.kt)("h4",{id:"tx-revoke-grantee-method-name---from-granter"},(0,o.kt)("inlineCode",{parentName:"h4"},"tx revoke <grantee> <method-name> --from <granter>")),(0,o.kt)("p",null,"This CLI command will send a ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgRevoke")," transaction."),(0,o.kt)("h3",{id:"built-in-authorizations"},"Built-in Authorizations"),(0,o.kt)("h4",{id:"sendauthorization"},(0,o.kt)("inlineCode",{parentName:"h4"},"SendAuthorization")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// SendAuthorization allows the grantee to spend up to spend_limit coins from\n// the granter's account.\nmessage SendAuthorization {\n  repeated cosmos.base.v1beta1.Coin spend_limit = 1;\n}\n")),(0,o.kt)("h4",{id:"genericauthorization"},(0,o.kt)("inlineCode",{parentName:"h4"},"GenericAuthorization")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"// GenericAuthorization gives the grantee unrestricted permissions to execute\n// the provided method on behalf of the granter's account.\nmessage GenericAuthorization {\n  option (cosmos_proto.implements_interface) = \"Authorization\";\n\n  // Msg, identified by it's type URL, to grant unrestricted permissions to execute\n  string msg = 1;\n}\n")),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("h3",{id:"positive"},"Positive"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users will be able to authorize arbitrary actions on behalf of their accounts to other\nusers, improving key management for many use cases"),(0,o.kt)("li",{parentName:"ul"},"The solution is more generic than previously considered approaches and the\n",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," interface approach can be extended to cover other use cases by\nSDK users")),(0,o.kt)("h3",{id:"negative"},"Negative"),(0,o.kt)("h3",{id:"neutral"},"Neutral"),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initial Hackatom implementation: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos-gaians/cosmos-sdk/tree/hackatom/x/delegation"},"https://github.com/cosmos-gaians/cosmos-sdk/tree/hackatom/x/delegation")),(0,o.kt)("li",{parentName:"ul"},"Post-Hackatom spec: ",(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/aaronc/b60628017352df5983791cad30babe56#delegation-module"},"https://gist.github.com/aaronc/b60628017352df5983791cad30babe56#delegation-module")),(0,o.kt)("li",{parentName:"ul"},"B-Harvest subkeys spec: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/4480"},"https://github.com/cosmos/cosmos-sdk/issues/4480"))))}u.isMDXComponent=!0}}]);