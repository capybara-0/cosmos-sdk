"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[3804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||o;return n?i.createElement(u,r(r({ref:t},c),{},{components:n})):i.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={},r="ADR 60: ABCI 1.0 Integration",l={unversionedId:"architecture/adr-060-abci-1.0",id:"architecture/adr-060-abci-1.0",title:"ADR 60: ABCI 1.0 Integration",description:"Changelog",source:"@site/docs/architecture/adr-060-abci-1.0.md",sourceDirName:"architecture",slug:"/architecture/adr-060-abci-1.0",permalink:"/main/architecture/adr-060-abci-1.0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 059: Test Scopes",permalink:"/main/architecture/adr-059-test-scopes"},next:{title:"ADR ADR-061: Liquid Staking",permalink:"/main/architecture/adr-061-liquid-staking"}},s={},p=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"<code>PrepareProposal</code>",id:"prepareproposal",level:3},{value:"<code>ProcessProposal</code>",id:"processproposal",level:3},{value:"<code>DeliverTx</code>",id:"delivertx",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Backwards Compatibility",id:"backwards-compatibility",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"Further Discussions",id:"further-discussions",level:2},{value:"References",id:"references",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-60-abci-10-integration"},"ADR 60: ABCI 1.0 Integration"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2022-08-10: Initial Draft (@alexanderbez, @marbar3778)")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"PROPOSED"),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"This ADR describes the initial adoption of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/blob/master/spec/abci%2B%2B/README.md"},"ABCI 1.0"),",\nthe next evolution of ABCI, within the Cosmos SDK. ABCI 1.0 aims to provide\napplication developers with more flexibility and control over application and\nconsensus semantics, e.g. in-application mempools, in-process oracles, and\norder-book style matching engines."),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Tendermint will release ABCI 1.0. Notably, at the time of this writing,\nTendermint is releasing v0.37.0 which will include ",(0,a.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessProposal"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," ABCI method is concerned with a block proposer requesting\nthe application to evaluate a series of transactions to be included in the next\nblock, defined as a slice of ",(0,a.kt)("inlineCode",{parentName:"p"},"TxRecord")," objects. The application can either\naccept, reject, or completely ignore some or all of these transactions. This is\nan important consideration to make as the application can essentially define and\ncontrol its own mempool allowing it to define sophisticated transaction priority\nand filtering mechanisms, by completely ignoring the ",(0,a.kt)("inlineCode",{parentName:"p"},"TxRecords")," Tendermint\nsends it, favoring its own transactions. This essentially means that the Tendermint\nmempool acts more like a gossip data structure."),(0,a.kt)("p",null,"The second ABCI method, ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessProposal"),", is used to process the block proposer's\nproposal as defined by ",(0,a.kt)("inlineCode",{parentName:"p"},"PrepareProposal"),". This ABCI method requests that the\napplication evaluate the entire proposed block for validity."),(0,a.kt)("p",null,"It is important to note that in ABCI 1.0 integration, the application\nis NOT responsible for locking semantics -- Tendermint will still be responsible\nfor that. In the future, however, the application will be responsible for locking,\nwhich allows for parallel execution possibilities."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"We will integrate ABCI 1.0, which will be introduced in Tendermint\nv0.37.0, in the next major release of the Cosmos SDK. We will integrate ABCI 1.0\nmethods on the ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseApp")," type. We describe the implementations\nof the two methods individually below."),(0,a.kt)("p",null,"Prior to describing the implementation of the two new methods, it is important to\nnote that the existing ABCI methods, ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckTx"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DeliverTx"),", etc, still exist and\nserve the same functions as they do now."),(0,a.kt)("h3",{id:"prepareproposal"},(0,a.kt)("inlineCode",{parentName:"h3"},"PrepareProposal")),(0,a.kt)("p",null,"Prior to evaluating the decision for how to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"PrepareProposal"),", it is\nimportant to note that ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckTx")," will still be executed and will be responsible\nfor evaluating transaction validity as it does now, with one very important\n",(0,a.kt)("em",{parentName:"p"},"additive")," distinction."),(0,a.kt)("p",null,"When executing transactions in ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckTx"),", the application will now add valid\ntransactions, i.e. passing the AnteHandler, to its own mempool data structure.\nIn order to provide a flexible approach to meet the varying needs of application\ndevelopers, we will define both a mempool interface and a data structure utilizing\nGolang generics, allowing developers to focus only on transaction\nordering. Developers requiring absolute full control can implement their own\ncustom mempool implementation."),(0,a.kt)("p",null,"We define the general mempool interface as follows (subject to change):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// MempoolTx we define an app-side mempool transaction interface that is as\n// minimal as possible, only requiring applications to define the size of the\n// transaction to be used when reaping and getting the transaction itself.\n// Interface type casting can be used in the actual app-side mempool implementation.\ntype MempoolTx interface {\n    // Size returns the size of the transaction in bytes.\n    Size(codec.Codec) int\n    Tx() sdk.Tx\n}\n\n// PrepareTxRecord defines a wrapper around a MempoolTx that is returned from\n// PrepareProposal which includes an Action to inform Tendermint what to do with\n// the transaction.\ntype PrepareTxRecord[T MempoolTx] struct {\n    Tx T\n    Action abci.TxAction\n}\n\ntype Mempool[T MempoolTx] interface {\n    // Insert attempts to insert a MempoolTx into the app-side mempool returning\n    // an error upon failure.\n    Insert(sdk.Context, T) error\n    // ReapMaxBytes returns the next set of available transactions from the app-side\n    // mempool, up to maxBytes or until the mempool is empty. The application can\n    // decide to return transactions from its own mempool or from the incoming\n    // TxRecords or some combination of both. The notion of 'available' or 'next'\n    // is defined by the application's mempool implementation.\n    ReapMaxBytes(ctx sdk.Context, txRecords abci.TxRecords, maxBytes int) ([]PrepareTxRecord[T], error)\n    // NumTxs returns the number of transactions currently in the mempool.\n    NumTxs() int\n    // Remove attempts to remove a transaction from the mempool, returning an error\n    // upon failure.\n    Remove(sdk.Context, T) error\n}\n")),(0,a.kt)("p",null,"We will define an implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"Mempool[T MempoolTx]")," that will cover a\nmajority of application use cases. Namely, it will prioritize transactions by\npriority and transaction sender, allowing for multiple prioritized transactions\nfrom the same sender. The app-side mempool will be defined as a wrapper around a\nsimple priority queue using a max binary heap, along with additional indexes/metadata\nto store senders and their nonces, allowing for simple multi-dimensional\nprioritization (2-ary)."),(0,a.kt)("p",null,"Transaction reaping will essentially happen via a two-phase approach:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Reap one or more transactions from the priority queue and collect them into\none of two buffers -- ",(0,a.kt)("em",{parentName:"li"},"valid")," and ",(0,a.kt)("em",{parentName:"li"},"invalid"),"."),(0,a.kt)("li",{parentName:"ol"},"For transactions that DO NOT violate the nonce validation, they are included\nin the ",(0,a.kt)("em",{parentName:"li"},"valid")," buffer."),(0,a.kt)("li",{parentName:"ol"},"For transactions that DO violate the nonce validation, they are included in\nthe ",(0,a.kt)("em",{parentName:"li"},"invalid")," buffer."),(0,a.kt)("li",{parentName:"ol"},"Continue this process until the desired number of valid transactions are\nreaped or until the mempool is empty."),(0,a.kt)("li",{parentName:"ol"},"Provide Tendermint the list of all transactions from the ",(0,a.kt)("em",{parentName:"li"},"valid")," buffer."),(0,a.kt)("li",{parentName:"ol"},"Re-insert all transactions, from both buffers, back into app-side mempool.\nThis is to ensure we do not discard transactions from the app-side mempool in\ncase ",(0,a.kt)("inlineCode",{parentName:"li"},"ProcessProposal")," fails or in case that the proposal, while passing\n",(0,a.kt)("inlineCode",{parentName:"li"},"ProcessProposal")," is not the one decided for that height, i.e. the height took\nmore than one round.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type PriorityMempool[T MempoolTx] struct {\n    queue *PriorityQueue[MempoolTx]\n\n    // senders will contain a mapping from tx sender account addresses to all\n    // sequence numbers (nonces) or txs that they have in the app-side mempool.\n    senders map[string][]int64\n\n    // ...\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PriorityMempool[T MempoolTx]")," implementation will support Options such as\nlimiting the mempool size by a fixed number of bytes.")),(0,a.kt)("p",null,"Previous discussions",(0,a.kt)("sup",null,"1")," have come to the agreement that Tendermint will\nperform a request to the application, via ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),', with a certain\namount of transactions reaped from Tendermint\'s local mempool. The exact amount\nof transactions reaped will be determined by a local operator configuration.\nThis is referred to as the "one-shot approach" seen in discussions.'),(0,a.kt)("p",null,"When Tendermint reaps transactions from the local mempool and sends them to the\napplication via ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),", the application will have to evaluate\nthe transactions. Specifically, it will need to inform Tendermint if it should\nreject and or include each transaction. Note, the application can even ",(0,a.kt)("em",{parentName:"p"},"replace"),"\ntransactions entirely with other transactions."),(0,a.kt)("p",null,"When evaluating transactions from ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),", the application will\nignore ",(0,a.kt)("em",{parentName:"p"},"all")," transactions sent to it in the request and instead reap up to\n",(0,a.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal.max_tx_bytes")," from it's own mempool. There is no need to\nexecute the transactions for validity as they have already passed CheckTx."),(0,a.kt)("h3",{id:"processproposal"},(0,a.kt)("inlineCode",{parentName:"h3"},"ProcessProposal")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," ABCI method is relatively straightforward. It is responsible\nfor ensuring validity of the proposed block containing transactions that were\nselected from the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," step. However, how an application determines\nvalidity of a proposed block depends on the application and its varying use cases.\nFor most applications, simply calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"AnteHandler")," chain would suffice, but\nthere could easily be other applications that need more control over the validation\nprocess of the proposed block, such as ensuring txs are in a certain order or\nthat certain transactions are included. While this theoretically could be achieved\nwith a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"AnteHandler")," implementation, it's not the cleanest UX or the most\nefficient solution."),(0,a.kt)("p",null,"Instead, we will define an additional ABCI interface method on the existing\n",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," interface, similar to the existing ABCI methods such as ",(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlock"),"\nor ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlock"),". This new interface method will be defined as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"ProcessProposal(sdk.Context, abci.RequestProcessProposal) error {}\n")),(0,a.kt)("p",null,"Note, we must call ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," with a new internal branched state on the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," argument as we cannot simply just use the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"checkState")," because\n",(0,a.kt)("inlineCode",{parentName:"p"},"BaseApp")," already has a modified ",(0,a.kt)("inlineCode",{parentName:"p"},"checkState")," at this point. So when executing\n",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessProposal"),", we create a similar branched state, ",(0,a.kt)("inlineCode",{parentName:"p"},"processProposalState"),",\noff of ",(0,a.kt)("inlineCode",{parentName:"p"},"deliverState"),". Note, the ",(0,a.kt)("inlineCode",{parentName:"p"},"processProposalState")," is never committed and\nis completely discarded after ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," finishes execution."),(0,a.kt)("p",null,"We will only populate the ",(0,a.kt)("inlineCode",{parentName:"p"},"Status")," field of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ResponseProcessProposal")," with\n",(0,a.kt)("inlineCode",{parentName:"p"},"ACCEPT")," if ALL the transactions were accepted as valid, otherwise we will\npopulate with ",(0,a.kt)("inlineCode",{parentName:"p"},"REJECT"),"."),(0,a.kt)("h3",{id:"delivertx"},(0,a.kt)("inlineCode",{parentName:"h3"},"DeliverTx")),(0,a.kt)("p",null,"Since transactions are not truly removed from the app-side mempool during\n",(0,a.kt)("inlineCode",{parentName:"p"},"PrepareProposal"),", since ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," can fail or take multiple rounds and\nwe do not want to lose transactions, we need to finally remove the transaction\nfrom the app-side mempool during ",(0,a.kt)("inlineCode",{parentName:"p"},"DeliverTx")," since during this phase, the\ntransactions are being included in the proposed block."),(0,a.kt)("p",null,"Alternatively, we can keep the transactions as truly being removed during the\nreaping phase in ",(0,a.kt)("inlineCode",{parentName:"p"},"PrepareProposal")," and add them back to the app-side mempool in\ncase ",(0,a.kt)("inlineCode",{parentName:"p"},"ProcessProposal")," fails."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"backwards-compatibility"},"Backwards Compatibility"),(0,a.kt)("p",null,"ABCI 1.0 is naturally not backwards compatible with prior versions of the Cosmos SDK\nand Tendermint. For example, an application that requests ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestPrepareProposal"),"\nto the same application that does not speak ABCI 1.0 will naturally fail."),(0,a.kt)("p",null,"However, in the first phase of the integration, the existing ABCI methods as we\nknow them today will still exist and function as they currently do."),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications now have full control over transaction ordering and priority."),(0,a.kt)("li",{parentName:"ul"},"Lays the groundwork for the full integration of ABCI 1.0, which will unlock more\napp-side use cases around block construction and integration with the Tendermint\nconsensus engine.")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Requires that the "mempool", as a general data structure that collects and stores\nuncommitted transactions will be duplicated between both Tendermint and the\nCosmos SDK.'),(0,a.kt)("li",{parentName:"ul"},"Additional requests between Tendermint and the Cosmos SDK in the context of\nblock execution. Albeit, the overhead should be negligible."),(0,a.kt)("li",{parentName:"ul"},"Not backwards compatible with previous versions of Tendermint and the Cosmos SDK.")),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("h2",{id:"further-discussions"},"Further Discussions"),(0,a.kt)("p",null,"It is possible to design the app-side implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Mempool[T MempoolTx]"),"\nin many different ways using different data structures and implementations. All\nof which have different tradeoffs. The proposed solution keeps things simple\nand covers cases that would be required for most basic applications. There are\ntradeoffs that can be made to improve performance of reaping and inserting into\nthe provided mempool implementation."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/blob/master/spec/abci%2B%2B/README.md"},"https://github.com/tendermint/tendermint/blob/master/spec/abci%2B%2B/README.md")),(0,a.kt)("li",{parentName:"ul"},"[1]"," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/issues/7750#issuecomment-1076806155"},"https://github.com/tendermint/tendermint/issues/7750#issuecomment-1076806155")),(0,a.kt)("li",{parentName:"ul"},"[2]"," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tendermint/tendermint/issues/7750#issuecomment-1075717151"},"https://github.com/tendermint/tendermint/issues/7750#issuecomment-1075717151"))))}d.isMDXComponent=!0}}]);