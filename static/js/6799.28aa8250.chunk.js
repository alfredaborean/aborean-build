"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6799],{30839:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(9990),i=t(74680),o=t(98902),a=t(12016),s=t(72283),c=t(48526),l=t(96690),d=t(26767),u=t(98223);function h({title:e="Connect your wallet",description:n="This page requires a wallet to be connected",buttonText:t="Connect wallet",onButtonClick:h}){const p=(0,a.D)(),f=(0,s.Qf)(),m=(0,i.O)(),g=(0,o.useCallback)(()=>{h?h():m.open()},[m,h]);return(0,r.jsx)(c.s,{width:"100%",height:"60vh",justifyContent:"center",alignItems:"center",mt:"$spacing24",px:"$spacing40",$xl:{px:"$spacing12"},children:(0,r.jsxs)(c.s,{width:"100%",maxWidth:500,flexDirection:"column",alignItems:"center",gap:"$gap16",py:"$spacing60",$md:{py:"$spacing36"},borderWidth:2,borderColor:"$surface3",borderRadius:"$rounded12",style:{background:`linear-gradient(180deg, ${p.surface2.variable} 0%, transparent 100%)`},overflow:"hidden",position:"relative",children:[(0,r.jsx)(c.s,{position:"absolute",pointerEvents:"none",background:`linear-gradient(90deg, transparent 0%, ${p.neutral1.val} 50%, transparent 100%)`,height:1,left:0,right:0,top:0}),(0,r.jsx)(c.s,{backgroundColor:"$surface1",borderWidth:1,borderColor:"$neutral3",width:f.md?60:100,height:f.md?60:100,centered:!0,borderRadius:"$roundedFull",children:(0,r.jsx)(u.d,{size:f.md?30:50,color:"$neutral1"})}),(0,r.jsx)(l.EY,{variant:"subheading1",textAlign:"center",mt:"$spacing12",children:e}),(0,r.jsx)(l.EY,{variant:"body3",color:"$neutral2",textAlign:"center",px:"$spacing24",children:n}),(0,r.jsx)(d.Z,{onClick:g,as:"button",className:"button-clear",speed:"3s",style:{marginTop:"16px"},children:(0,r.jsx)(l.EY,{variant:"buttonLabel2",color:"$neutral1",children:t})})]})})}},86799:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Ve});var r=t(9990),i=t(8896),o=t(31463),a=t(7273),s=t(41406),c=t(98902),l=t(54407),d=t(89847),u=t(74680),h=t(87461),p=t(75300),f=t(12099),m=t(93295),g=t(7803);function x(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function y({tokenAddress:e,decimals:n,chainId:t,enabled:r=!0}){const i=(0,f.F)(),[o,a]=(0,c.useState)(null),[s,l]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{if(!r||!i.address||!e||!t||!i.connector)return a(null),void l(!1);let o=!1;const s=function(){var r,s=(r=function*(){try{l(!0);const r=yield i.connector.getProvider();if(!r)return a(null),void l(!1);if((r.chainId?parseInt(r.chainId,16):null)!==t)return a(null),void l(!1);if("0x0000000000000000000000000000000000000000"===e.toLowerCase()||"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"===e.toLowerCase()){const e=yield r.request({method:"eth_getBalance",params:[i.address,"latest"]});if(!o){const t=(0,g.formatUnits)(e,n);a(t),l(!1)}}else{const t=`0x70a08231000000000000000000000000${i.address.slice(2).toLowerCase()}`,s=yield r.request({method:"eth_call",params:[{to:e,data:t},"latest"]});if(!o){const e=(0,g.formatUnits)(s,n);a(e),l(!1)}}}catch(r){console.error("Error fetching token balance:",r),o||(a(null),l(!1))}},function(){var e=this,n=arguments;return new Promise(function(t,i){var o=r.apply(e,n);function a(e){x(o,t,i,a,s,"next",e)}function s(e){x(o,t,i,a,s,"throw",e)}a(void 0)})});return function(){return s.apply(this,arguments)}}();s();const c=setInterval(s,1e4);return()=>{o=!0,clearInterval(c)}},[i.address,i.connector,e,n,t,r]),{balance:o,isLoading:s}}var v=t(51502),w=t(890),C=t(35568);function b(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function k(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){b(o,r,i,a,s,"next",e)}function s(e){b(o,r,i,a,s,"throw",e)}a(void 0)})}}const T=new class{baseUrl;constructor(e="https://stargate.finance/api/v1"){this.baseUrl=e}getQuote(e){var n=this;return k(function*(){try{var t;const s=e.slippage||50,c=BigInt(e.amountIn)*BigInt(1e4-s)/BigInt(1e4),l=new URLSearchParams({srcChainKey:e.srcChainKey,srcToken:e.srcTokenAddress,dstChainKey:e.dstChainKey,dstToken:e.dstTokenAddress,srcAmount:e.amountIn,dstAmountMin:c.toString(),srcAddress:e.sender,dstAddress:e.receiver||e.sender,slippage:s.toString()}),d=yield fetch(`${n.baseUrl}/quotes?${l.toString()}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!d.ok){var r;const e=yield d.json().catch(()=>({}));return{success:!1,error:"API_ERROR",message:(null===(r=e.error)||void 0===r?void 0:r.message)||e.message||`HTTP ${d.status}: ${d.statusText}`}}const u=yield d.json();if(u.quotes&&Array.isArray(u.quotes)&&u.quotes.length>0){var i,o,a;const e=[...u.quotes].sort((e,n)=>{var t,r;return((null===(t=e.duration)||void 0===t?void 0:t.estimated)||1/0)-((null===(r=n.duration)||void 0===r?void 0:r.estimated)||1/0)})[0],n=(null===(i=e.fees)||void 0===i?void 0:i.reduce((e,n)=>e+BigInt(n.amount),BigInt(0)).toString())||"0";return{success:!0,...e,amountIn:e.srcAmount,amountOut:e.dstAmount,fee:n,estimatedTime:null===(o=e.duration)||void 0===o?void 0:o.estimated,transactions:(null===(a=e.steps)||void 0===a?void 0:a.map(e=>e.transaction))||[]}}return{success:!1,error:"NO_QUOTES",message:(null===(t=u.error)||void 0===t?void 0:t.message)||"No quotes available for this route"}}catch(s){return{success:!1,error:"NETWORK_ERROR",message:s instanceof Error?s.message:"Unknown error occurred"}}})()}getChains(){var e=this;return k(function*(){try{const n=yield fetch(`${e.baseUrl}/chains`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok)return{success:!1,error:"API_ERROR",message:`HTTP ${n.status}: ${n.statusText}`};const t=yield n.json();return t&&t.chains?{success:!0,chains:t.chains}:Array.isArray(t)?{success:!0,chains:t}:{success:!1,error:"INVALID_RESPONSE",message:"Unexpected API response format"}}catch(n){return{success:!1,error:"NETWORK_ERROR",message:n instanceof Error?n.message:"Unknown error occurred"}}})()}getTokens(e,n){var t=this;return k(function*(){try{const r=new URLSearchParams;e&&r.append("srcChainKey",e),n&&r.append("srcToken",n);const i=r.toString(),o=i?`${t.baseUrl}/tokens?${i}`:`${t.baseUrl}/tokens`,a=yield fetch(o,{method:"GET",headers:{"Content-Type":"application/json"}});if(!a.ok)return{success:!1,error:"API_ERROR",message:`HTTP ${a.status}: ${a.statusText}`};const s=yield a.json();return s&&s.tokens?{success:!0,tokens:s.tokens}:Array.isArray(s)?{success:!0,tokens:s}:{success:!1,error:"INVALID_RESPONSE",message:"Unexpected API response format"}}catch(r){return{success:!1,error:"NETWORK_ERROR",message:r instanceof Error?r.message:"Unknown error occurred"}}})()}getBridgeStatus(e,n){var t=this;return k(function*(){try{const r=yield fetch(`${t.baseUrl}/status/${n}/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return r.ok?yield r.json():{success:!1,error:"API_ERROR",message:`HTTP ${r.status}: ${r.statusText}`}}catch(r){return{success:!1,error:"NETWORK_ERROR",message:r instanceof Error?r.message:"Unknown error occurred"}}})()}};function j(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function _(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){j(o,r,i,a,s,"next",e)}function s(e){j(o,r,i,a,s,"throw",e)}a(void 0)})}}function I(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function $(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){I(o,r,i,a,s,"next",e)}function s(e){I(o,r,i,a,s,"throw",e)}a(void 0)})}}function S(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function E(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){S(o,r,i,a,s,"next",e)}function s(e){S(o,r,i,a,s,"throw",e)}a(void 0)})}}var N=t(96012),B=t(8517),A=t(9874),P=t(75549),R=t(44600),F=t(34476),K=t(40214);function O(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function L(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){O(o,r,i,a,s,"next",e)}function s(e){O(o,r,i,a,s,"throw",e)}a(void 0)})}}function M(){return(M=L(function*(e,n,t,r){const i=n.map(e=>({to:e.to,data:e.data,value:e.value})),o=`0x${r.toString(16)}`;return(yield e.send("wallet_sendCalls",[{version:"2.0.0",calls:i,from:t,chainId:o,atomicRequired:!0}])).id})).apply(this,arguments)}function U(){return(U=L(function*(e,n,t=60){for(let i=0;i<t;i++)try{const t=yield e.send("wallet_getCallsStatus",[n]);if("CONFIRMED"===t.status)return{success:!0,receipts:t.receipts};if("FAILED"===t.status)throw new Error("Batch transaction failed");yield new Promise(e=>setTimeout(e,2e3))}catch(r){if(i===t-1)throw r}throw new Error("Batch transaction timeout")})).apply(this,arguments)}function q(){const e=(0,f.F)(),{provider:n}=(0,N.Y)(),t=(0,R.i)(),r=(0,P.useEip5792Support)(t),[i,o]=(0,c.useState)({status:"idle"}),a=(0,B.n)({mutationFn:function(){var n=L(function*(n){if(!e.connector||!e.address)throw new Error("Wallet not connected");if(!n.transactions||0===n.transactions.length)throw new Error("No transactions to execute");const i=yield e.connector.getProvider();if(!i)throw new Error("Could not get provider from connector");o({status:"pending"});const a=[];if(r&&n.transactions.length>1)try{A.logger.info("Using EIP-5792 wallet transaction batching",{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{transactionCount:n.transactions.length,chainId:t}});const r=yield function(e,n,t,r){return M.apply(this,arguments)}(i,n.transactions,e.address,t);o({status:"confirming",txHash:r}),A.logger.info("Batch transaction sent, waiting for confirmation",{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{batchId:r}});const a=yield function(e,n){return U.apply(this,arguments)}(i,r);return A.logger.info("Batch transaction confirmed",{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{batchId:r,receipts:a.receipts}}),F.O.addPopup({type:K.n.Transaction,hash:r},r),{txHashes:[r],srcChainKey:n.srcChainKey,dstChainKey:n.dstChainKey}}catch(s){A.logger.warn("Batch transaction failed, falling back to sequential",{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{error:s}})}for(const t of n.transactions)try{const n=t.value||"0",r=n.startsWith("0x")?n:`0x${BigInt(n).toString(16)}`,s=yield i.request({method:"eth_sendTransaction",params:[{from:e.address,to:t.to,data:t.data,value:r}]});a.push(s),o({status:"confirming",txHash:s}),A.logger.info("Bridge transaction sent",{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{txHash:s}}),F.O.addPopup({type:K.n.Transaction,hash:s},s)}catch(s){throw A.logger.error(s instanceof Error?s:new Error("Unknown transaction error"),{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{transaction:t,error:String(s)}}),s}return{txHashes:a,srcChainKey:n.srcChainKey,dstChainKey:n.dstChainKey}});return function(e){return n.apply(this,arguments)}}(),onSuccess:e=>{o({status:"success",txHash:e.txHashes[0]})},onError:e=>{o({status:"error",error:e})}}),s=(0,c.useCallback)(function(){var e=L(function*(e){try{yield a.mutateAsync(e)}catch(n){A.logger.error(n instanceof Error?n:new Error("Bridge execution failed"),{tags:{file:"useBridgeTransaction",function:"executeBridge"}})}});return function(n){return e.apply(this,arguments)}}(),[a]);return{executeBridge:s,txState:i,resetState:(0,c.useCallback)(()=>{o({status:"idle"})},[]),isLoading:a.isPending}}const z=l.default.div.withConfig({displayName:"BridgeDetails__DetailsContainer",componentId:"sc-e94ad6db-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
`,D=l.default.div.withConfig({displayName:"BridgeDetails__DetailRow",componentId:"sc-e94ad6db-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,H=l.default.span.withConfig({displayName:"BridgeDetails__DetailLabel",componentId:"sc-e94ad6db-2"})`
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,W=l.default.span.withConfig({displayName:"BridgeDetails__DetailValue",componentId:"sc-e94ad6db-3"})`
  font-size: 14px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 500;
`,Q=l.default.div.withConfig({displayName:"BridgeDetails__Divider",componentId:"sc-e94ad6db-4"})`
  height: 1px;
  background: ${({theme:e})=>e.surface3};
`;function Y({quote:e}){return(0,r.jsxs)(z,{children:[(0,r.jsxs)(D,{children:[(0,r.jsx)(H,{children:(0,r.jsx)(s.Trans,{children:"Route"})}),(0,r.jsx)(W,{children:e.route||"Stargate Bridge"})]}),(0,r.jsxs)(D,{children:[(0,r.jsx)(H,{children:(0,r.jsx)(s.Trans,{children:"Estimated Time"})}),(0,r.jsx)(W,{children:(e=>{if(!e)return"Unknown";if(e<60)return`~${e}s`;return`~${Math.floor(e/60)}m`})(e.estimatedTime)})]}),(0,r.jsxs)(D,{children:[(0,r.jsx)(H,{children:(0,r.jsx)(s.Trans,{children:"Bridge Fee"})}),(0,r.jsx)(W,{children:e.fee?(e=>{try{const n=(0,g.formatUnits)(e,18);return`${Number(n).toFixed(6)} ETH`}catch{return"Calculating..."}})(e.fee):"Calculating..."})]}),(0,r.jsx)(Q,{}),(0,r.jsxs)(D,{children:[(0,r.jsx)(H,{children:(0,r.jsx)(s.Trans,{children:"Minimum Received"})}),(0,r.jsx)(W,{children:(Number(e.dstAmountMin||e.amountOut)/Math.pow(10,18)).toFixed(6)})]})]})}var G=t(65868),V=t(75782),X=t(7451),Z=t(22352);const J=l.default.button.withConfig({displayName:"ChainTokenSelector__SelectorButton",componentId:"sc-28d918c0-0"})`
  width: 100%;
  padding: 16px;
  background: ${({theme:e})=>e.surface2};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({theme:e})=>e.neutral2};
  }
`,ee=l.default.div.withConfig({displayName:"ChainTokenSelector__SelectorContent",componentId:"sc-28d918c0-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`,ne=l.default.span.withConfig({displayName:"ChainTokenSelector__Label",componentId:"sc-28d918c0-2"})`
  font-size: 12px;
  color: ${({theme:e})=>e.neutral2};
  font-weight: 500;
`,te=l.default.div.withConfig({displayName:"ChainTokenSelector__SelectedInfo",componentId:"sc-28d918c0-3"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,re=l.default.div.withConfig({displayName:"ChainTokenSelector__SelectedDetails",componentId:"sc-28d918c0-4"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,ie=l.default.span.withConfig({displayName:"ChainTokenSelector__SelectedTokenName",componentId:"sc-28d918c0-5"})`
  font-size: 16px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,oe=l.default.span.withConfig({displayName:"ChainTokenSelector__SelectedChainName",componentId:"sc-28d918c0-6"})`
  font-size: 13px;
  color: ${({theme:e})=>e.neutral2};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,ae=l.default.div.withConfig({displayName:"ChainTokenSelector__SelectedTokenIconContainer",componentId:"sc-28d918c0-7"})`
  position: relative;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`,se=l.default.img.withConfig({displayName:"ChainTokenSelector__SelectedTokenIcon",componentId:"sc-28d918c0-8"})`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
`,ce=l.default.img.withConfig({displayName:"ChainTokenSelector__SelectedChainBadge",componentId:"sc-28d918c0-9"})`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({theme:e})=>e.surface1};
  background: ${({theme:e})=>e.surface1};
`,le=l.default.span.withConfig({displayName:"ChainTokenSelector__Placeholder",componentId:"sc-28d918c0-10"})`
  font-size: 16px;
  color: ${({theme:e})=>e.neutral2};
`,de=l.default.div.withConfig({displayName:"ChainTokenSelector__ModalContainer",componentId:"sc-28d918c0-11"})`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 100%;
  max-width: 480px;
`,ue=l.default.div.withConfig({displayName:"ChainTokenSelector__ChainList",componentId:"sc-28d918c0-12"})`
  display: flex;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 0;

  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,he=l.default.button.withConfig({displayName:"ChainTokenSelector__ChainItem",componentId:"sc-28d918c0-13"})`
  padding: 8px;
  background: ${({theme:e,isActive:n})=>n?e.surface2:"transparent"};
  border: 2px solid ${({theme:e,isActive:n})=>n?e.accent1:"transparent"};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  flex-shrink: 0;

  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,pe=l.default.img.withConfig({displayName:"ChainTokenSelector__ChainIcon",componentId:"sc-28d918c0-14"})`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
`,fe=l.default.span.withConfig({displayName:"ChainTokenSelector__ChainName",componentId:"sc-28d918c0-15"})`
  font-size: 14px;
  font-weight: ${({isActive:e})=>e?600:500};
  color: ${({theme:e,isActive:n})=>n?e.neutral1:e.neutral2};
`,me=l.default.div.withConfig({displayName:"ChainTokenSelector__SearchContainer",componentId:"sc-28d918c0-16"})`
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};
  position: relative;
`,ge=l.default.input.withConfig({displayName:"ChainTokenSelector__SearchInput",componentId:"sc-28d918c0-17"})`
  width: 100%;
  padding: 12px 12px 12px 40px;
  background: ${({theme:e})=>e.surface2};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  color: ${({theme:e})=>e.neutral1};
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: ${({theme:e})=>e.accent1};
  }

  &::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
`,xe=l.default.div.withConfig({displayName:"ChainTokenSelector__SearchIcon",componentId:"sc-28d918c0-18"})`
  position: absolute;
  left: 28px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.neutral3};
  pointer-events: none;
`,ye=l.default.div.withConfig({displayName:"ChainTokenSelector__TokenList",componentId:"sc-28d918c0-19"})`
  flex: 1;
  overflow-y: auto;
  padding: 8px;

  @media (min-width: 1024px) {
    padding: 12px;
  }
`,ve=l.default.button.withConfig({displayName:"ChainTokenSelector__TokenItem",componentId:"sc-28d918c0-20"})`
  width: 100%;
  padding: 12px;
  background: transparent;
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({theme:e})=>e.surface2};
  }

  @media (min-width: 1024px) {
    padding: 16px;
  }
`,we=l.default.div.withConfig({displayName:"ChainTokenSelector__TokenInfo",componentId:"sc-28d918c0-21"})`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,Ce=l.default.div.withConfig({displayName:"ChainTokenSelector__TokenIconContainer",componentId:"sc-28d918c0-22"})`
  position: relative;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`,be=l.default.img.withConfig({displayName:"ChainTokenSelector__TokenIcon",componentId:"sc-28d918c0-23"})`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({theme:e})=>e.surface2};
  flex-shrink: 0;
`,ke=l.default.img.withConfig({displayName:"ChainTokenSelector__ChainBadge",componentId:"sc-28d918c0-24"})`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${({theme:e})=>e.surface1};
  background: ${({theme:e})=>e.surface1};
`,Te=l.default.div.withConfig({displayName:"ChainTokenSelector__TokenDetails",componentId:"sc-28d918c0-25"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,je=l.default.span.withConfig({displayName:"ChainTokenSelector__TokenName",componentId:"sc-28d918c0-26"})`
  font-size: 16px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`,_e=l.default.span.withConfig({displayName:"ChainTokenSelector__TokenSymbol",componentId:"sc-28d918c0-27"})`
  font-size: 13px;
  color: ${({theme:e})=>e.neutral2};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,Ie=l.default.span.withConfig({displayName:"ChainTokenSelector__TokenPrice",componentId:"sc-28d918c0-28"})`
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
  flex-shrink: 0;
`,$e=l.default.div.withConfig({displayName:"ChainTokenSelector__NoResults",componentId:"sc-28d918c0-29"})`
  padding: 40px 20px;
  text-align: center;
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
`,Se=e=>`https://icons-ckg.pages.dev/stargate-light/tokens/${e.toLowerCase().replace("usdc.e","usdc").replace(".e","")}.svg`,Ee=e=>`https://icons-ckg.pages.dev/stargate-light/networks/${e.toLowerCase()}.svg`;function Ne({label:e,selectedChain:n,selectedToken:t,chains:i,tokens:o,onSelect:a,disabled:l=!1}){const[d,u]=(0,c.useState)(!1),[h,p]=(0,c.useState)(""),[f,m]=(0,c.useState)(50),g=(0,c.useRef)(null),x=(0,c.useRef)(null),y=(0,c.useMemo)(()=>[...i].sort((e,n)=>"Abstract"===e.name?-1:"Abstract"===n.name?1:"Ethereum"===e.name?-1:"Ethereum"===n.name?1:e.name.localeCompare(n.name)),[i]),[v,w]=(0,c.useState)("all"),C=(0,c.useMemo)(()=>{let e=o;if("all"!==v&&(e=e.filter(e=>e.chainKey===v)),h.trim()){const n=h.toLowerCase();e=e.filter(e=>e.symbol.toLowerCase().includes(n)||e.name.toLowerCase().includes(n)||e.address.toLowerCase().includes(n))}return e},[o,v,h]),b=(0,c.useCallback)(()=>{const e=x.current;if(!e)return;e.scrollTop+e.clientHeight>=.8*e.scrollHeight&&f<C.length&&m(e=>Math.min(e+30,C.length))},[f,C.length]);return(0,c.useEffect)(()=>{const e=x.current;if(e)return e.addEventListener("scroll",b),()=>e.removeEventListener("scroll",b)},[b]),(0,c.useEffect)(()=>{m(50)},[v,h]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(J,{onClick:()=>{l||(u(!0),w("all"),m(50),setTimeout(()=>{var e;return null===(e=g.current)||void 0===e?void 0:e.focus()},100))},disabled:l,style:{opacity:l?.5:1,cursor:l?"not-allowed":"pointer"},children:[(0,r.jsxs)(ee,{children:[(0,r.jsx)(ne,{children:e}),n&&t?(0,r.jsxs)(te,{children:[(0,r.jsxs)(ae,{children:[(0,r.jsx)(se,{src:Se(t.symbol),alt:t.symbol,onError:e=>{e.currentTarget.style.display="none"}}),(0,r.jsx)(ce,{src:Ee(n.chainKey),alt:n.name,onError:e=>{e.currentTarget.style.display="none"}})]}),(0,r.jsxs)(re,{children:[(0,r.jsx)(ie,{children:t.symbol}),(0,r.jsx)(oe,{children:n.name})]})]}):(0,r.jsx)(le,{children:(0,r.jsx)(s.Trans,{children:"Select chain and token"})})]}),(0,r.jsx)(G.A,{size:20})]}),(0,r.jsx)(X.Modal,{name:Z.ModalName.CurrencySearch,isModalOpen:d,onClose:()=>{u(!1),p(""),m(50)},maxWidth:480,children:(0,r.jsxs)(de,{children:[(0,r.jsxs)(me,{children:[(0,r.jsx)(xe,{children:(0,r.jsx)(V.A,{size:16})}),(0,r.jsx)(ge,{ref:g,type:"text",placeholder:"Search by name or address...",value:h,onChange:e=>p(e.target.value)})]}),(0,r.jsxs)(ue,{children:[(0,r.jsx)(he,{isActive:"all"===v,onClick:()=>w("all"),title:"All Chains",children:(0,r.jsx)(fe,{isActive:"all"===v,children:"All"})}),y.map(e=>(0,r.jsx)(he,{isActive:v===e.chainKey,onClick:()=>w(e.chainKey),title:e.name,children:(0,r.jsx)(pe,{src:Ee(e.chainKey),alt:e.name,onError:e=>{e.currentTarget.style.display="none"}})},e.chainKey))]}),(0,r.jsx)(ye,{ref:x,children:C.length>0?(0,r.jsxs)(r.Fragment,{children:[C.slice(0,f).map(e=>{var n,t,o;return(0,r.jsxs)(ve,{onClick:()=>(e=>{const n=i.find(n=>n.chainKey===e.chainKey);n&&(a(n,e),u(!1),p(""))})(e),children:[(0,r.jsxs)(we,{children:[(0,r.jsxs)(Ce,{children:[(0,r.jsx)(be,{src:Se(e.symbol),alt:e.symbol,onError:e=>{e.currentTarget.style.display="none"}}),(0,r.jsx)(ke,{src:Ee(e.chainKey),alt:(null===(n=i.find(n=>n.chainKey===e.chainKey))||void 0===n?void 0:n.name)||e.chainKey,onError:e=>{e.currentTarget.style.display="none"}})]}),(0,r.jsxs)(Te,{children:[(0,r.jsx)(je,{children:e.symbol}),(0,r.jsx)(_e,{children:(null===(t=i.find(n=>n.chainKey===e.chainKey))||void 0===t?void 0:t.name)||e.chainKey})]})]}),(null===(o=e.price)||void 0===o?void 0:o.usd)&&(0,r.jsxs)(Ie,{children:["$",e.price.usd.toFixed(2)]})]},`${e.chainKey}-${e.address}`)}),f<C.length&&(0,r.jsx)($e,{children:(0,r.jsxs)(s.Trans,{children:["Scroll for more tokens (",f," of ",C.length,")"]})})]}):(0,r.jsx)($e,{children:(0,r.jsx)(s.Trans,{children:"No tokens found"})})})]})})]})}var Be=t(30839);function Ae(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function Pe(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){Ae(o,r,i,a,s,"next",e)}function s(e){Ae(o,r,i,a,s,"throw",e)}a(void 0)})}}const Re=l.default.div.withConfig({displayName:"BridgeForm__BridgeContainer",componentId:"sc-344ae0a9-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`,Fe=l.default.div.withConfig({displayName:"BridgeForm__ArrowContainer",componentId:"sc-344ae0a9-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`,Ke=l.default.div.withConfig({displayName:"BridgeForm__AmountInput",componentId:"sc-344ae0a9-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
`,Oe=l.default.label.withConfig({displayName:"BridgeForm__InputLabel",componentId:"sc-344ae0a9-3"})`
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
  font-weight: 500;
`,Le=l.default.div.withConfig({displayName:"BridgeForm__BalanceRow",componentId:"sc-344ae0a9-4"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Me=l.default.span.withConfig({displayName:"BridgeForm__BalanceText",componentId:"sc-344ae0a9-5"})`
  font-size: 12px;
  color: ${({theme:e})=>e.neutral2};
`,Ue=l.default.button.withConfig({displayName:"BridgeForm__MaxButton",componentId:"sc-344ae0a9-6"})`
  background: ${({theme:e})=>e.accent2};
  color: ${({theme:e})=>e.accent1};
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,qe=l.default.button.withConfig({displayName:"BridgeForm__SeeBalanceButton",componentId:"sc-344ae0a9-7"})`
  background: transparent;
  color: ${({theme:e})=>e.accent1};
  border: 1px solid ${({theme:e})=>e.accent1};
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({theme:e})=>e.accent2};
  }
`,ze=(0,l.default)(d.$).withConfig({displayName:"BridgeForm__StyledButton",componentId:"sc-344ae0a9-8"})`
  ${({$isDisabled:e})=>e&&"\n    opacity: 0.5;\n    cursor: not-allowed;\n    pointer-events: none;\n  "}
`,De=l.default.div.withConfig({displayName:"BridgeForm__InputRow",componentId:"sc-344ae0a9-9"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,He=l.default.input.withConfig({displayName:"BridgeForm__StyledInput",componentId:"sc-344ae0a9-10"})`
  background: transparent;
  border: none;
  outline: none;
  font-size: ${({$hasError:e})=>e?"14px":"28px"};
  font-weight: 500;
  color: ${({theme:e,$hasError:n})=>n?e.critical:e.neutral1};
  width: 100%;

  &::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }

  &:disabled {
    color: ${({theme:e,$hasError:n})=>n?e.critical:e.neutral2};
  }
`,We=l.default.div.withConfig({displayName:"BridgeForm__UsdValue",componentId:"sc-344ae0a9-11"})`
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
  font-weight: 500;
`,Qe=l.default.div.withConfig({displayName:"BridgeForm__BridgeWrapper",componentId:"sc-344ae0a9-12"})`
  position: relative;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  padding: 8px;
  width: 100%;
  max-width: 480px;
`;function Ye(){var e,n,t,i,o,a,l,d,x;const b=(0,f.F)(),k=(0,u.O)(),{chainId:j}=(0,m.N)(),{disconnect:I}=(0,w.u)(),[S,N]=(0,c.useState)(""),[B,A]=(0,c.useState)(null),[P,R]=(0,c.useState)(null),[F,K]=(0,c.useState)(null),[O,L]=(0,c.useState)(null),{executeBridge:M,isLoading:U}=q(),{data:z,isLoading:D}=(0,C.I)({queryKey:["stargate-chains"],queryFn:$(function*(){const e=yield T.getChains();if(!e.success)throw new Error(e.message||"Failed to fetch chains");return e}),staleTime:3e5,gcTime:6e5,retry:3}),{balance:H,isLoading:W}=y({tokenAddress:null===(e=F)||void 0===e?void 0:e.address,decimals:(null===(n=F)||void 0===n?void 0:n.decimals)||18,chainId:null===(t=B)||void 0===t?void 0:t.chainId,enabled:!(!F||!B||j!==B.chainId)}),{data:Q}=function({srcChainKey:e,srcToken:n,enabled:t=!0}={}){return(0,C.I)({queryKey:["stargate-tokens",e,n],queryFn:E(function*(){const t=yield T.getTokens(e,n);if(!t.success)throw new Error(t.message||"Failed to fetch tokens");return t}),enabled:t,staleTime:3e5,gcTime:6e5,retry:3})}({enabled:!0}),G=(0,c.useMemo)(()=>{var e;return F&&B&&(null===(e=Q)||void 0===e?void 0:e.tokens)?Q.tokens.filter(e=>e.symbol===F.symbol&&e.chainKey!==B.chainKey):[]},[F,B,Q]),V=(0,c.useMemo)(()=>{if(!S||!B||!P||!F||!O)return null;try{const e=(0,g.parseUnits)(S,F.decimals).toString();return{srcChainKey:B.chainKey,srcChainId:B.chainId,srcTokenAddress:F.address,dstChainKey:P.chainKey,dstChainId:P.chainId,dstTokenAddress:O.address,amountIn:e,sender:b.address||"0x0000000000000000000000000000000000000001",slippage:50}}catch{return null}},[b.address,S,B,P,F,O]),{data:X,isLoading:Z,error:J}=function({request:e,enabled:n=!0}){return(0,C.I)({queryKey:["stargate-quote",e],queryFn:_(function*(){if(!e)throw new Error("No quote request provided");const n=yield T.getQuote(e);if(!n.success){const e=new Error(n.message||"Failed to fetch quote");throw"NO_QUOTES"!==n.error&&"API_ERROR"!==n.error||(e.isClientError=!0),e}return n}),enabled:n&&null!==e,staleTime:3e4,gcTime:6e4,retry:(e,n)=>{var t;return!(null===(t=n)||void 0===t?void 0:t.isClientError)&&e<2},refetchInterval:3e4})}({request:V,enabled:!!V}),ee=(0,c.useCallback)(()=>{A(P),R(B),K(O),L(F)},[B,P,F,O]),ne=(0,c.useCallback)((e,n)=>{A(e),K(n),R(null),L(null)},[]),te=(0,c.useCallback)((e,n)=>{R(e),L(n)},[]),re=X&&!J,ie=(0,c.useMemo)(()=>{if(!J)return null;if(J instanceof Error){let e=J.message;return e=e.replace(/^HTTP \d+:\s*/i,""),e}return"Failed to get bridge quote"},[J]),oe=(0,c.useMemo)(()=>{var e,n;if(!S||!(null===(n=F)||void 0===n||null===(e=n.price)||void 0===e?void 0:e.usd))return null;const t=parseFloat(S);return isNaN(t)?null:t*F.price.usd},[S,F]),ae=(0,c.useMemo)(()=>{var e,n;if(!X||!(null===(n=O)||void 0===n||null===(e=n.price)||void 0===e?void 0:e.usd))return null;return Number(X.amountOut)/Math.pow(10,O.decimals)*O.price.usd},[X,O]),se=(0,c.useMemo)(()=>B&&j!==B.chainId,[B,j]),ce=(0,c.useMemo)(()=>{var e;if(!(null===(e=F)||void 0===e?void 0:e.address))return!1;const n=F.address.toLowerCase();return"0x0000000000000000000000000000000000000000"===n||"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"===n},[F]),le=(0,c.useCallback)(Pe(function*(){if(B&&b.connector)try{const i=yield b.connector.getProvider(),o=`0x${B.chainId.toString(16)}`;try{yield i.request({method:"wallet_switchEthereumChain",params:[{chainId:o}]})}catch(r){if(4902!==r.code&&-32603!==r.code)throw r;if(!(B.rpcUrls&&B.rpcUrls.length>0))throw new Error("Chain not in wallet and no RPC URL available");var e,n,t;yield i.request({method:"wallet_addEthereumChain",params:[{chainId:o,chainName:B.name,nativeCurrency:{name:(null===(e=B.nativeCurrency)||void 0===e?void 0:e.name)||"ETH",symbol:(null===(n=B.nativeCurrency)||void 0===n?void 0:n.symbol)||"ETH",decimals:(null===(t=B.nativeCurrency)||void 0===t?void 0:t.decimals)||18},rpcUrls:B.rpcUrls,blockExplorerUrls:B.blockExplorerUrls||[]}]})}}catch(i){console.error("Failed to switch/add chain:",i)}}),[B,b.connector]),de=(0,c.useCallback)(Pe(function*(){X&&(yield M(X),N(""))}),[X,M]),ue=(0,c.useCallback)(()=>{if(H)if(ce){const e=.005,n=parseFloat(H);N(n>e?(n-e).toString():H)}else N(H)},[H,ce]);return"xyz.abs.privy"===(null===(i=b.connector)||void 0===i?void 0:i.id)||"Abstract"===(null===(o=b.connector)||void 0===o?void 0:o.name)?(0,r.jsx)(p.ff,{children:(0,r.jsx)(Be.A,{title:"Multi-chain wallet required",description:"Abstract Global Wallet only supports Abstract chain. Please connect with a multi-chain wallet like MetaMask or WalletConnect to use the bridge.",buttonText:"Disconnect",onButtonClick:()=>I()})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p.ff,{children:(0,r.jsx)(Qe,{children:(0,r.jsx)(Re,{children:(0,r.jsxs)(h.mm,{gap:"md",children:[(0,r.jsx)(Ne,{label:"From",selectedChain:B,selectedToken:F,chains:(null===(a=z)||void 0===a?void 0:a.chains)||[],tokens:(null===(l=Q)||void 0===l?void 0:l.tokens)||[],onSelect:ne}),(0,r.jsxs)(Ke,{children:[(0,r.jsxs)(Le,{children:[(0,r.jsx)(Oe,{children:(0,r.jsx)(s.Trans,{children:"You send"})}),F&&B&&(se?(0,r.jsx)(qe,{onClick:le,children:(0,r.jsx)(s.Trans,{children:"Show balance"})}):H?(0,r.jsxs)(Me,{children:["Balance: ",parseFloat(H).toFixed(6)," ",F.symbol]}):null)]}),(0,r.jsxs)(De,{children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,r.jsx)(He,{type:"text",inputMode:"decimal",autoComplete:"off",autoCorrect:"off",placeholder:"0.0",value:S,onChange:e=>N(e.target.value),style:{flex:1}}),H&&!se&&(0,r.jsx)(Ue,{onClick:ue,disabled:!H,children:"MAX"})]}),null!==oe&&(0,r.jsxs)(We,{children:["~$",oe.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]}),(0,r.jsx)(p.rl,{clickable:!0,onClick:ee,children:(0,r.jsx)(Fe,{children:(0,r.jsx)(v.A,{size:"16",color:"currentColor"})})}),(0,r.jsx)(Ne,{label:"To",selectedChain:P,selectedToken:O,chains:(null===(d=z)||void 0===d?void 0:d.chains)||[],tokens:G,onSelect:te,disabled:!F}),(0,r.jsxs)(Ke,{children:[(0,r.jsx)(Oe,{children:(0,r.jsx)(s.Trans,{children:"You receive"})}),(0,r.jsxs)(De,{children:[(0,r.jsx)(He,{type:"text",value:ie||(X&&O?(Number(X.amountOut)/Math.pow(10,O.decimals)).toFixed(6):""),disabled:!0,readOnly:!0,$hasError:!!ie}),null!==ae&&!ie&&(0,r.jsxs)(We,{children:["~$",ae.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]}),X&&(0,r.jsx)(Y,{quote:X}),(0,r.jsx)(ze,{theme:"primary",onPress:b.address?se?le:de:()=>k.open(),disabled:b.address&&(J||!se&&(!re||Z||U)),$isDisabled:b.address&&(!!J||!se&&(!re||Z||U)),children:b.address?J?(0,r.jsx)(s.Trans,{children:"Quote Error"}):se?`Switch to ${null===(x=B)||void 0===x?void 0:x.name}`:U?(0,r.jsx)(s.Trans,{children:"Bridging..."}):Z?(0,r.jsx)(s.Trans,{children:"Fetching Quote..."}):re?(0,r.jsx)(s.Trans,{children:"Bridge Tokens"}):(0,r.jsx)(s.Trans,{children:"Enter Amount"}):(0,r.jsx)(s.Trans,{children:"Connect Wallet"})})]})})})})})}const Ge=l.default.div.withConfig({displayName:"Bridge__BridgePageWrapper",componentId:"sc-6c308955-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;function Ve(){return(0,r.jsx)(a.default,{logImpression:!0,page:i.InterfacePageName.SWAP_PAGE,children:(0,r.jsxs)(Ge,{children:[(0,r.jsx)(Ye,{}),(0,r.jsx)(o.j,{})]})})}},65868:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(98902),i=t(24862),o=t.n(i);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=(0,r.forwardRef)(function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,l=s(e,["color","size"]);return r.createElement("svg",a({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("polyline",{points:"6 9 12 15 18 9"}))});c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="ChevronDown";const l=c}}]);
//# sourceMappingURL=6799.28aa8250.chunk.js.map