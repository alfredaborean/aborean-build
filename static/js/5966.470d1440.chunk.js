"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5966],{30839:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(9990),i=t(74680),o=t(98902),a=t(12016),s=t(72283),c=t(48526),l=t(96690),d=t(26767),u=t(98223);function h({title:e="Connect your wallet",description:n="This page requires a wallet to be connected",buttonText:t="Connect wallet",onButtonClick:h}){const p=(0,a.D)(),f=(0,s.Qf)(),m=(0,i.O)(),g=(0,o.useCallback)(()=>{h?h():m.open()},[m,h]);return(0,r.jsx)(c.s,{width:"100%",height:"60vh",justifyContent:"center",alignItems:"center",mt:"$spacing24",px:"$spacing40",$xl:{px:"$spacing12"},children:(0,r.jsxs)(c.s,{width:"100%",maxWidth:500,flexDirection:"column",alignItems:"center",gap:"$gap16",py:"$spacing60",$md:{py:"$spacing36"},borderWidth:2,borderColor:"$surface3",borderRadius:"$rounded12",style:{background:`linear-gradient(180deg, ${p.surface2.variable} 0%, transparent 100%)`},overflow:"hidden",position:"relative",children:[(0,r.jsx)(c.s,{position:"absolute",pointerEvents:"none",background:`linear-gradient(90deg, transparent 0%, ${p.neutral1.val} 50%, transparent 100%)`,height:1,left:0,right:0,top:0}),(0,r.jsx)(c.s,{backgroundColor:"$surface1",borderWidth:1,borderColor:"$neutral3",width:f.md?60:100,height:f.md?60:100,centered:!0,borderRadius:"$roundedFull",children:(0,r.jsx)(u.d,{size:f.md?30:50,color:"$neutral1"})}),(0,r.jsx)(l.EY,{variant:"subheading1",textAlign:"center",mt:"$spacing12",children:e}),(0,r.jsx)(l.EY,{variant:"body3",color:"$neutral2",textAlign:"center",px:"$spacing24",children:n}),(0,r.jsx)(d.Z,{onClick:g,as:"button",className:"button-clear",speed:"3s",style:{marginTop:"16px"},children:(0,r.jsx)(l.EY,{variant:"buttonLabel2",color:"$neutral1",children:t})})]})})}},35966:(e,n,t)=>{t.r(n),t.d(n,{default:()=>nn});var r=t(9990),i=t(8896),o=t(31463),a=t(54407),s=t(7273),c=t(41406),l=t(98902),d=t(89847),u=t(74680),h=t(87461),p=t(75300),f=t(12099),m=t(93295),g=t(7803);function x(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function C({tokenAddress:e,decimals:n,chainId:t,enabled:r=!0}){const i=(0,f.F)(),[o,a]=(0,l.useState)(null),[s,c]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{if(!r||!i.address||!e||!t||!i.connector)return a(null),void c(!1);let o=!1;const s=function(){var r,s=(r=function*(){try{c(!0);const r=yield i.connector.getProvider();if(!r)return a(null),void c(!1);if((r.chainId?parseInt(r.chainId,16):null)!==t)return a(null),void c(!1);if("0x0000000000000000000000000000000000000000"===e.toLowerCase()||"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"===e.toLowerCase()){const e=yield r.request({method:"eth_getBalance",params:[i.address,"latest"]});if(!o){const t=(0,g.formatUnits)(e,n);a(t),c(!1)}}else{const t=`0x70a08231000000000000000000000000${i.address.slice(2).toLowerCase()}`,s=yield r.request({method:"eth_call",params:[{to:e,data:t},"latest"]});if(!o){const e=(0,g.formatUnits)(s,n);a(e),c(!1)}}}catch(r){console.error("Error fetching token balance:",r),o||(a(null),c(!1))}},function(){var e=this,n=arguments;return new Promise(function(t,i){var o=r.apply(e,n);function a(e){x(o,t,i,a,s,"next",e)}function s(e){x(o,t,i,a,s,"throw",e)}a(void 0)})});return function(){return s.apply(this,arguments)}}();s();const l=setInterval(s,1e4);return()=>{o=!0,clearInterval(l)}},[i.address,i.connector,e,n,t,r]),{balance:o,isLoading:s}}var v=t(51502),y=t(890),w=t(35568);function b(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function k(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){b(o,r,i,a,s,"next",e)}function s(e){b(o,r,i,a,s,"throw",e)}a(void 0)})}}const j=new class{baseUrl;constructor(e="https://stargate.finance/api/v1"){this.baseUrl=e}getQuote(e){var n=this;return k(function*(){try{var t;const s=e.slippage||50,c=BigInt(e.amountIn)*BigInt(1e4-s)/BigInt(1e4),l=new URLSearchParams({srcChainKey:e.srcChainKey,srcToken:e.srcTokenAddress,dstChainKey:e.dstChainKey,dstToken:e.dstTokenAddress,srcAmount:e.amountIn,dstAmountMin:c.toString(),srcAddress:e.sender,dstAddress:e.receiver||e.sender,slippage:s.toString()}),d=yield fetch(`${n.baseUrl}/quotes?${l.toString()}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!d.ok){var r;const e=yield d.json().catch(()=>({}));return{success:!1,error:"API_ERROR",message:(null===(r=e.error)||void 0===r?void 0:r.message)||e.message||`HTTP ${d.status}: ${d.statusText}`}}const u=yield d.json();if(u.quotes&&Array.isArray(u.quotes)&&u.quotes.length>0){var i,o,a;const e=[...u.quotes].sort((e,n)=>{var t,r;return((null===(t=e.duration)||void 0===t?void 0:t.estimated)||1/0)-((null===(r=n.duration)||void 0===r?void 0:r.estimated)||1/0)})[0],n=(null===(i=e.fees)||void 0===i?void 0:i.reduce((e,n)=>e+BigInt(n.amount),BigInt(0)).toString())||"0";return{success:!0,...e,amountIn:e.srcAmount,amountOut:e.dstAmount,fee:n,estimatedTime:null===(o=e.duration)||void 0===o?void 0:o.estimated,transactions:(null===(a=e.steps)||void 0===a?void 0:a.map(e=>e.transaction))||[]}}return{success:!1,error:"NO_QUOTES",message:(null===(t=u.error)||void 0===t?void 0:t.message)||"No quotes available for this route"}}catch(s){return{success:!1,error:"NETWORK_ERROR",message:s instanceof Error?s.message:"Unknown error occurred"}}})()}getChains(){var e=this;return k(function*(){try{const n=yield fetch(`${e.baseUrl}/chains`,{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok)return{success:!1,error:"API_ERROR",message:`HTTP ${n.status}: ${n.statusText}`};const t=yield n.json();return t&&t.chains?{success:!0,chains:t.chains}:Array.isArray(t)?{success:!0,chains:t}:{success:!1,error:"INVALID_RESPONSE",message:"Unexpected API response format"}}catch(n){return{success:!1,error:"NETWORK_ERROR",message:n instanceof Error?n.message:"Unknown error occurred"}}})()}getTokens(e,n){var t=this;return k(function*(){try{const r=new URLSearchParams;e&&r.append("srcChainKey",e),n&&r.append("srcToken",n);const i=r.toString(),o=i?`${t.baseUrl}/tokens?${i}`:`${t.baseUrl}/tokens`,a=yield fetch(o,{method:"GET",headers:{"Content-Type":"application/json"}});if(!a.ok)return{success:!1,error:"API_ERROR",message:`HTTP ${a.status}: ${a.statusText}`};const s=yield a.json();return s&&s.tokens?{success:!0,tokens:s.tokens}:Array.isArray(s)?{success:!0,tokens:s}:{success:!1,error:"INVALID_RESPONSE",message:"Unexpected API response format"}}catch(r){return{success:!1,error:"NETWORK_ERROR",message:r instanceof Error?r.message:"Unknown error occurred"}}})()}getBridgeStatus(e,n){var t=this;return k(function*(){try{const r=yield fetch(`${t.baseUrl}/status/${n}/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}});return r.ok?yield r.json():{success:!1,error:"API_ERROR",message:`HTTP ${r.status}: ${r.statusText}`}}catch(r){return{success:!1,error:"NETWORK_ERROR",message:r instanceof Error?r.message:"Unknown error occurred"}}})()}};function T(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function _(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){T(o,r,i,a,s,"next",e)}function s(e){T(o,r,i,a,s,"throw",e)}a(void 0)})}}function I(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function $(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){I(o,r,i,a,s,"next",e)}function s(e){I(o,r,i,a,s,"throw",e)}a(void 0)})}}function S(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function E(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){S(o,r,i,a,s,"next",e)}function s(e){S(o,r,i,a,s,"throw",e)}a(void 0)})}}var N=t(96012),B=t(8517),A=t(9874),M=t(75549),P=t(44600),R=t(34476),F=t(40214);function L(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function H(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){L(o,r,i,a,s,"next",e)}function s(e){L(o,r,i,a,s,"throw",e)}a(void 0)})}}function K(){return(K=H(function*(e,n,t,r){const i=n.map(e=>({to:e.to,data:e.data,value:e.value})),o=`0x${r.toString(16)}`;return(yield e.send("wallet_sendCalls",[{version:"2.0.0",calls:i,from:t,chainId:o,atomicRequired:!0}])).id})).apply(this,arguments)}function O(){return(O=H(function*(e,n,t=60){for(let i=0;i<t;i++)try{const t=yield e.send("wallet_getCallsStatus",[n]);if("CONFIRMED"===t.status)return{success:!0,receipts:t.receipts};if("FAILED"===t.status)throw new Error("Batch transaction failed");yield new Promise(e=>setTimeout(e,2e3))}catch(r){if(i===t-1)throw r}throw new Error("Batch transaction timeout")})).apply(this,arguments)}function U(){const e=(0,f.F)(),{provider:n}=(0,N.Y)(),t=(0,P.i)(),{supported:r}=(0,M.useEip5792Support)(t),[i,o]=(0,l.useState)({status:"idle"}),a=(0,B.n)({mutationFn:function(){var n=H(function*(n){if(!e.connector||!e.address)throw new Error("Wallet not connected");if(!n.transactions||0===n.transactions.length)throw new Error("No transactions to execute");const i=yield e.connector.getProvider();if(!i)throw new Error("Could not get provider from connector");o({status:"pending"});const a=[];if(r&&n.transactions.length>1)try{A.logger.info("Using EIP-5792 wallet transaction batching",{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{transactionCount:n.transactions.length,chainId:t}});const r=yield function(e,n,t,r){return K.apply(this,arguments)}(i,n.transactions,e.address,t);o({status:"confirming",txHash:r}),A.logger.info("Batch transaction sent, waiting for confirmation",{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{batchId:r}});const a=yield function(e,n){return O.apply(this,arguments)}(i,r);return A.logger.info("Batch transaction confirmed",{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{batchId:r,receipts:a.receipts}}),R.O.addPopup({type:F.n.Transaction,hash:r},r),{txHashes:[r],srcChainKey:n.srcChainKey,dstChainKey:n.dstChainKey}}catch(s){A.logger.warn("Batch transaction failed, falling back to sequential",{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{error:s}})}for(const t of n.transactions)try{const n=t.value||"0",r=n.startsWith("0x")?n:`0x${BigInt(n).toString(16)}`,s=yield i.request({method:"eth_sendTransaction",params:[{from:e.address,to:t.to,data:t.data,value:r}]});a.push(s),o({status:"confirming",txHash:s}),A.logger.info("Bridge transaction sent",{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{txHash:s}}),R.O.addPopup({type:F.n.Transaction,hash:s},s)}catch(s){throw A.logger.error(s instanceof Error?s:new Error("Unknown transaction error"),{tags:{file:"useBridgeTransaction",function:"executeBridgeMutation"},extra:{transaction:t,error:String(s)}}),s}return{txHashes:a,srcChainKey:n.srcChainKey,dstChainKey:n.dstChainKey}});return function(e){return n.apply(this,arguments)}}(),onSuccess:e=>{o({status:"success",txHash:e.txHashes[0]})},onError:e=>{o({status:"error",error:e})}}),s=(0,l.useCallback)(function(){var e=H(function*(e){try{yield a.mutateAsync(e)}catch(n){A.logger.error(n instanceof Error?n:new Error("Bridge execution failed"),{tags:{file:"useBridgeTransaction",function:"executeBridge"}})}});return function(n){return e.apply(this,arguments)}}(),[a]);return{executeBridge:s,txState:i,resetState:(0,l.useCallback)(()=>{o({status:"idle"})},[]),isLoading:a.isPending}}const V=a.default.div.withConfig({displayName:"BridgeDetails__DetailsContainer",componentId:"sc-828175bd-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
`,q=a.default.div.withConfig({displayName:"BridgeDetails__DetailRow",componentId:"sc-828175bd-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,z=a.default.span.withConfig({displayName:"BridgeDetails__DetailLabel",componentId:"sc-828175bd-2"})`
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
`,D=a.default.span.withConfig({displayName:"BridgeDetails__DetailValue",componentId:"sc-828175bd-3"})`
  font-size: 14px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 500;
`,Z=a.default.div.withConfig({displayName:"BridgeDetails__Divider",componentId:"sc-828175bd-4"})`
  height: 1px;
  background: ${({theme:e})=>e.surface3};
`;function W({quote:e}){return(0,r.jsxs)(V,{children:[(0,r.jsxs)(q,{children:[(0,r.jsx)(z,{children:(0,r.jsx)(c.Trans,{children:"Route"})}),(0,r.jsx)(D,{children:e.route||"Stargate Bridge"})]}),(0,r.jsxs)(q,{children:[(0,r.jsx)(z,{children:(0,r.jsx)(c.Trans,{children:"Estimated time"})}),(0,r.jsx)(D,{children:(e=>{if(!e)return"Unknown";if(e<60)return`~${e}s`;return`~${Math.floor(e/60)}m`})(e.estimatedTime)})]}),(0,r.jsxs)(q,{children:[(0,r.jsx)(z,{children:(0,r.jsx)(c.Trans,{children:"Bridge fee"})}),(0,r.jsx)(D,{children:e.fee?(e=>{try{const n=(0,g.formatUnits)(e,18);return`${Number(n).toFixed(6)} ETH`}catch{return"Calculating..."}})(e.fee):"Calculating..."})]}),(0,r.jsx)(Z,{}),(0,r.jsxs)(q,{children:[(0,r.jsx)(z,{children:(0,r.jsx)(c.Trans,{children:"Minimum received"})}),(0,r.jsx)(D,{children:(Number(e.dstAmountMin||e.amountOut)/Math.pow(10,18)).toFixed(6)})]})]})}var Y=t(65868),G=t(75782),Q=t(7451),X=t(22352);const J=a.default.button.withConfig({displayName:"ChainTokenSelector__SelectorButton",componentId:"sc-28d918c0-0"})`
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
`,ee=a.default.div.withConfig({displayName:"ChainTokenSelector__SelectorContent",componentId:"sc-28d918c0-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`,ne=a.default.span.withConfig({displayName:"ChainTokenSelector__Label",componentId:"sc-28d918c0-2"})`
  font-size: 12px;
  color: ${({theme:e})=>e.neutral2};
  font-weight: 500;
`,te=a.default.div.withConfig({displayName:"ChainTokenSelector__SelectedInfo",componentId:"sc-28d918c0-3"})`
  display: flex;
  align-items: center;
  gap: 12px;
`,re=a.default.div.withConfig({displayName:"ChainTokenSelector__SelectedDetails",componentId:"sc-28d918c0-4"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,ie=a.default.span.withConfig({displayName:"ChainTokenSelector__SelectedTokenName",componentId:"sc-28d918c0-5"})`
  font-size: 16px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,oe=a.default.span.withConfig({displayName:"ChainTokenSelector__SelectedChainName",componentId:"sc-28d918c0-6"})`
  font-size: 13px;
  color: ${({theme:e})=>e.neutral2};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,ae=a.default.div.withConfig({displayName:"ChainTokenSelector__SelectedTokenIconContainer",componentId:"sc-28d918c0-7"})`
  position: relative;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`,se=a.default.img.withConfig({displayName:"ChainTokenSelector__SelectedTokenIcon",componentId:"sc-28d918c0-8"})`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
`,ce=a.default.img.withConfig({displayName:"ChainTokenSelector__SelectedChainBadge",componentId:"sc-28d918c0-9"})`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({theme:e})=>e.surface1};
  background: ${({theme:e})=>e.surface1};
`,le=a.default.span.withConfig({displayName:"ChainTokenSelector__Placeholder",componentId:"sc-28d918c0-10"})`
  font-size: 16px;
  color: ${({theme:e})=>e.neutral2};
`,de=a.default.div.withConfig({displayName:"ChainTokenSelector__ModalContainer",componentId:"sc-28d918c0-11"})`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 100%;
  max-width: 480px;
`,ue=a.default.div.withConfig({displayName:"ChainTokenSelector__ChainList",componentId:"sc-28d918c0-12"})`
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
`,he=a.default.button.withConfig({displayName:"ChainTokenSelector__ChainItem",componentId:"sc-28d918c0-13"})`
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
`,pe=a.default.img.withConfig({displayName:"ChainTokenSelector__ChainIcon",componentId:"sc-28d918c0-14"})`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;
`,fe=a.default.span.withConfig({displayName:"ChainTokenSelector__ChainName",componentId:"sc-28d918c0-15"})`
  font-size: 14px;
  font-weight: ${({isActive:e})=>e?600:500};
  color: ${({theme:e,isActive:n})=>n?e.neutral1:e.neutral2};
`,me=a.default.div.withConfig({displayName:"ChainTokenSelector__SearchContainer",componentId:"sc-28d918c0-16"})`
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};
  position: relative;
`,ge=a.default.input.withConfig({displayName:"ChainTokenSelector__SearchInput",componentId:"sc-28d918c0-17"})`
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
`,xe=a.default.div.withConfig({displayName:"ChainTokenSelector__SearchIcon",componentId:"sc-28d918c0-18"})`
  position: absolute;
  left: 28px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.neutral3};
  pointer-events: none;
`,Ce=a.default.div.withConfig({displayName:"ChainTokenSelector__TokenList",componentId:"sc-28d918c0-19"})`
  flex: 1;
  overflow-y: auto;
  padding: 8px;

  @media (min-width: 1024px) {
    padding: 12px;
  }
`,ve=a.default.button.withConfig({displayName:"ChainTokenSelector__TokenItem",componentId:"sc-28d918c0-20"})`
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
`,ye=a.default.div.withConfig({displayName:"ChainTokenSelector__TokenInfo",componentId:"sc-28d918c0-21"})`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,we=a.default.div.withConfig({displayName:"ChainTokenSelector__TokenIconContainer",componentId:"sc-28d918c0-22"})`
  position: relative;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`,be=a.default.img.withConfig({displayName:"ChainTokenSelector__TokenIcon",componentId:"sc-28d918c0-23"})`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({theme:e})=>e.surface2};
  flex-shrink: 0;
`,ke=a.default.img.withConfig({displayName:"ChainTokenSelector__ChainBadge",componentId:"sc-28d918c0-24"})`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${({theme:e})=>e.surface1};
  background: ${({theme:e})=>e.surface1};
`,je=a.default.div.withConfig({displayName:"ChainTokenSelector__TokenDetails",componentId:"sc-28d918c0-25"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`,Te=a.default.span.withConfig({displayName:"ChainTokenSelector__TokenName",componentId:"sc-28d918c0-26"})`
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
`,_e=a.default.span.withConfig({displayName:"ChainTokenSelector__TokenSymbol",componentId:"sc-28d918c0-27"})`
  font-size: 13px;
  color: ${({theme:e})=>e.neutral2};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`,Ie=a.default.span.withConfig({displayName:"ChainTokenSelector__TokenPrice",componentId:"sc-28d918c0-28"})`
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
  flex-shrink: 0;
`,$e=a.default.div.withConfig({displayName:"ChainTokenSelector__NoResults",componentId:"sc-28d918c0-29"})`
  padding: 40px 20px;
  text-align: center;
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
`,Se=e=>`https://icons-ckg.pages.dev/stargate-light/tokens/${e.toLowerCase().replace("usdc.e","usdc").replace(".e","")}.svg`,Ee=e=>`https://icons-ckg.pages.dev/stargate-light/networks/${e.toLowerCase()}.svg`;function Ne({label:e,selectedChain:n,selectedToken:t,chains:i,tokens:o,onSelect:a,disabled:s=!1}){const[d,u]=(0,l.useState)(!1),[h,p]=(0,l.useState)(""),[f,m]=(0,l.useState)(50),g=(0,l.useRef)(null),x=(0,l.useRef)(null),C=(0,l.useMemo)(()=>[...i].sort((e,n)=>"Abstract"===e.name?-1:"Abstract"===n.name?1:"Ethereum"===e.name?-1:"Ethereum"===n.name?1:e.name.localeCompare(n.name)),[i]),[v,y]=(0,l.useState)("all"),w=(0,l.useMemo)(()=>{let e=o;if("all"!==v&&(e=e.filter(e=>e.chainKey===v)),h.trim()){const n=h.toLowerCase();e=e.filter(e=>e.symbol.toLowerCase().includes(n)||e.name.toLowerCase().includes(n)||e.address.toLowerCase().includes(n))}return e},[o,v,h]),b=(0,l.useCallback)(()=>{const e=x.current;if(!e)return;e.scrollTop+e.clientHeight>=.8*e.scrollHeight&&f<w.length&&m(e=>Math.min(e+30,w.length))},[f,w.length]);return(0,l.useEffect)(()=>{const e=x.current;if(e)return e.addEventListener("scroll",b),()=>e.removeEventListener("scroll",b)},[b]),(0,l.useEffect)(()=>{m(50)},[v,h]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(J,{onClick:()=>{s||(u(!0),y("all"),m(50),setTimeout(()=>{var e;return null===(e=g.current)||void 0===e?void 0:e.focus()},100))},disabled:s,style:{opacity:s?.5:1,cursor:s?"not-allowed":"pointer"},children:[(0,r.jsxs)(ee,{children:[(0,r.jsx)(ne,{children:e}),n&&t?(0,r.jsxs)(te,{children:[(0,r.jsxs)(ae,{children:[(0,r.jsx)(se,{src:Se(t.symbol),alt:t.symbol,onError:e=>{e.currentTarget.style.display="none"}}),(0,r.jsx)(ce,{src:Ee(n.chainKey),alt:n.name,onError:e=>{e.currentTarget.style.display="none"}})]}),(0,r.jsxs)(re,{children:[(0,r.jsx)(ie,{children:t.symbol}),(0,r.jsx)(oe,{children:n.name})]})]}):(0,r.jsx)(le,{children:(0,r.jsx)(c.Trans,{children:"Select chain and token"})})]}),(0,r.jsx)(Y.A,{size:20})]}),(0,r.jsx)(Q.Modal,{name:X.ModalName.CurrencySearch,isModalOpen:d,onClose:()=>{u(!1),p(""),m(50)},maxWidth:480,children:(0,r.jsxs)(de,{children:[(0,r.jsxs)(me,{children:[(0,r.jsx)(xe,{children:(0,r.jsx)(G.A,{size:16})}),(0,r.jsx)(ge,{ref:g,type:"text",placeholder:"Search by name or address...",value:h,onChange:e=>p(e.target.value)})]}),(0,r.jsxs)(ue,{children:[(0,r.jsx)(he,{isActive:"all"===v,onClick:()=>y("all"),title:"All Chains",children:(0,r.jsx)(fe,{isActive:"all"===v,children:"All"})}),C.map(e=>(0,r.jsx)(he,{isActive:v===e.chainKey,onClick:()=>y(e.chainKey),title:e.name,children:(0,r.jsx)(pe,{src:Ee(e.chainKey),alt:e.name,onError:e=>{e.currentTarget.style.display="none"}})},e.chainKey))]}),(0,r.jsx)(Ce,{ref:x,children:w.length>0?(0,r.jsxs)(r.Fragment,{children:[w.slice(0,f).map(e=>{var n,t,o;return(0,r.jsxs)(ve,{onClick:()=>(e=>{const n=i.find(n=>n.chainKey===e.chainKey);n&&(a(n,e),u(!1),p(""))})(e),children:[(0,r.jsxs)(ye,{children:[(0,r.jsxs)(we,{children:[(0,r.jsx)(be,{src:Se(e.symbol),alt:e.symbol,onError:e=>{e.currentTarget.style.display="none"}}),(0,r.jsx)(ke,{src:Ee(e.chainKey),alt:(null===(n=i.find(n=>n.chainKey===e.chainKey))||void 0===n?void 0:n.name)||e.chainKey,onError:e=>{e.currentTarget.style.display="none"}})]}),(0,r.jsxs)(je,{children:[(0,r.jsx)(Te,{children:e.symbol}),(0,r.jsx)(_e,{children:(null===(t=i.find(n=>n.chainKey===e.chainKey))||void 0===t?void 0:t.name)||e.chainKey})]})]}),(null===(o=e.price)||void 0===o?void 0:o.usd)&&(0,r.jsxs)(Ie,{children:["$",e.price.usd.toFixed(2)]})]},`${e.chainKey}-${e.address}`)}),f<w.length&&(0,r.jsx)($e,{children:(0,r.jsxs)(c.Trans,{children:["Scroll for more tokens (",f," of ",w.length,")"]})})]}):(0,r.jsx)($e,{children:(0,r.jsx)(c.Trans,{children:"No tokens found"})})})]})})]})}var Be=t(30839);function Ae(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,i)}function Me(e){return function(){var n=this,t=arguments;return new Promise(function(r,i){var o=e.apply(n,t);function a(e){Ae(o,r,i,a,s,"next",e)}function s(e){Ae(o,r,i,a,s,"throw",e)}a(void 0)})}}const Pe=a.default.div.withConfig({displayName:"BridgeForm__BridgeContainer",componentId:"sc-e6dcc5ab-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`,Re=a.default.div.withConfig({displayName:"BridgeForm__ArrowContainer",componentId:"sc-e6dcc5ab-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`,Fe=a.default.div.withConfig({displayName:"BridgeForm__AmountInput",componentId:"sc-e6dcc5ab-2"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
`,Le=a.default.label.withConfig({displayName:"BridgeForm__InputLabel",componentId:"sc-e6dcc5ab-3"})`
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
  font-weight: 500;
`,He=a.default.div.withConfig({displayName:"BridgeForm__BalanceRow",componentId:"sc-e6dcc5ab-4"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ke=a.default.span.withConfig({displayName:"BridgeForm__BalanceText",componentId:"sc-e6dcc5ab-5"})`
  font-size: 12px;
  color: ${({theme:e})=>e.neutral2};
`,Oe=a.default.button.withConfig({displayName:"BridgeForm__MaxButton",componentId:"sc-e6dcc5ab-6"})`
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
`,Ue=a.default.button.withConfig({displayName:"BridgeForm__SeeBalanceButton",componentId:"sc-e6dcc5ab-7"})`
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
`,Ve=(0,a.default)(d.$).withConfig({displayName:"BridgeForm__StyledButton",componentId:"sc-e6dcc5ab-8"})`
  ${({$isDisabled:e})=>e&&"\n    opacity: 0.5;\n    cursor: not-allowed;\n    pointer-events: none;\n  "}
`,qe=a.default.div.withConfig({displayName:"BridgeForm__InputRow",componentId:"sc-e6dcc5ab-9"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ze=a.default.input.withConfig({displayName:"BridgeForm__StyledInput",componentId:"sc-e6dcc5ab-10"})`
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
`,De=a.default.div.withConfig({displayName:"BridgeForm__UsdValue",componentId:"sc-e6dcc5ab-11"})`
  font-size: 14px;
  color: ${({theme:e})=>e.neutral2};
  font-weight: 500;
`,Ze=a.default.div.withConfig({displayName:"BridgeForm__BridgeWrapper",componentId:"sc-e6dcc5ab-12"})`
  position: relative;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  padding: 8px;
  width: 100%;
  max-width: 480px;
`;function We(){var e,n,t,i,o,a,s,d,x;const b=(0,f.F)(),k=(0,u.O)(),{chainId:T}=(0,m.N)(),{disconnect:I}=(0,y.u)(),[S,N]=(0,l.useState)(""),[B,A]=(0,l.useState)(null),[M,P]=(0,l.useState)(null),[R,F]=(0,l.useState)(null),[L,H]=(0,l.useState)(null),{executeBridge:K,isLoading:O}=U(),{data:V,isLoading:q}=(0,w.I)({queryKey:["stargate-chains"],queryFn:$(function*(){const e=yield j.getChains();if(!e.success)throw new Error(e.message||"Failed to fetch chains");return e}),staleTime:3e5,gcTime:6e5,retry:3}),{balance:z,isLoading:D}=C({tokenAddress:null===(e=R)||void 0===e?void 0:e.address,decimals:(null===(n=R)||void 0===n?void 0:n.decimals)||18,chainId:null===(t=B)||void 0===t?void 0:t.chainId,enabled:!(!R||!B||T!==B.chainId)}),{data:Z}=function({srcChainKey:e,srcToken:n,enabled:t=!0}={}){return(0,w.I)({queryKey:["stargate-tokens",e,n],queryFn:E(function*(){const t=yield j.getTokens(e,n);if(!t.success)throw new Error(t.message||"Failed to fetch tokens");return t}),enabled:t,staleTime:3e5,gcTime:6e5,retry:3})}({enabled:!0}),Y=(0,l.useMemo)(()=>{var e;return R&&B&&(null===(e=Z)||void 0===e?void 0:e.tokens)?Z.tokens.filter(e=>e.symbol===R.symbol&&e.chainKey!==B.chainKey):[]},[R,B,Z]),G=(0,l.useMemo)(()=>{if(!S||!B||!M||!R||!L)return null;try{const e=(0,g.parseUnits)(S,R.decimals).toString();return{srcChainKey:B.chainKey,srcChainId:B.chainId,srcTokenAddress:R.address,dstChainKey:M.chainKey,dstChainId:M.chainId,dstTokenAddress:L.address,amountIn:e,sender:b.address||"0x0000000000000000000000000000000000000001",slippage:50}}catch{return null}},[b.address,S,B,M,R,L]),{data:Q,isLoading:X,error:J}=function({request:e,enabled:n=!0}){return(0,w.I)({queryKey:["stargate-quote",e],queryFn:_(function*(){if(!e)throw new Error("No quote request provided");const n=yield j.getQuote(e);if(!n.success){const e=new Error(n.message||"Failed to fetch quote");throw"NO_QUOTES"!==n.error&&"API_ERROR"!==n.error||(e.isClientError=!0),e}return n}),enabled:n&&null!==e,staleTime:3e4,gcTime:6e4,retry:(e,n)=>{var t;return!(null===(t=n)||void 0===t?void 0:t.isClientError)&&e<2},refetchInterval:3e4})}({request:G,enabled:!!G}),ee=(0,l.useCallback)(()=>{A(M),P(B),F(L),H(R)},[B,M,R,L]),ne=(0,l.useCallback)((e,n)=>{A(e),F(n),P(null),H(null)},[]),te=(0,l.useCallback)((e,n)=>{P(e),H(n)},[]),re=Q&&!J,ie=(0,l.useMemo)(()=>{if(!J)return null;if(J instanceof Error){let e=J.message;return e=e.replace(/^HTTP \d+:\s*/i,""),e}return"Failed to get bridge quote"},[J]),oe=(0,l.useMemo)(()=>{var e,n;if(!S||!(null===(n=R)||void 0===n||null===(e=n.price)||void 0===e?void 0:e.usd))return null;const t=parseFloat(S);return isNaN(t)?null:t*R.price.usd},[S,R]),ae=(0,l.useMemo)(()=>{var e,n;if(!Q||!(null===(n=L)||void 0===n||null===(e=n.price)||void 0===e?void 0:e.usd))return null;return Number(Q.amountOut)/Math.pow(10,L.decimals)*L.price.usd},[Q,L]),se=(0,l.useMemo)(()=>B&&T!==B.chainId,[B,T]),ce=(0,l.useMemo)(()=>{var e;if(!(null===(e=R)||void 0===e?void 0:e.address))return!1;const n=R.address.toLowerCase();return"0x0000000000000000000000000000000000000000"===n||"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"===n},[R]),le=(0,l.useCallback)(Me(function*(){if(B&&b.connector)try{const i=yield b.connector.getProvider(),o=`0x${B.chainId.toString(16)}`;try{yield i.request({method:"wallet_switchEthereumChain",params:[{chainId:o}]})}catch(r){if(4902!==r.code&&-32603!==r.code)throw r;if(!(B.rpcUrls&&B.rpcUrls.length>0))throw new Error("Chain not in wallet and no RPC URL available");var e,n,t;yield i.request({method:"wallet_addEthereumChain",params:[{chainId:o,chainName:B.name,nativeCurrency:{name:(null===(e=B.nativeCurrency)||void 0===e?void 0:e.name)||"ETH",symbol:(null===(n=B.nativeCurrency)||void 0===n?void 0:n.symbol)||"ETH",decimals:(null===(t=B.nativeCurrency)||void 0===t?void 0:t.decimals)||18},rpcUrls:B.rpcUrls,blockExplorerUrls:B.blockExplorerUrls||[]}]})}}catch(i){console.error("Failed to switch/add chain:",i)}}),[B,b.connector]),de=(0,l.useCallback)(Me(function*(){Q&&(yield K(Q),N(""))}),[Q,K]),ue=(0,l.useCallback)(()=>{if(z)if(ce){const e=.005,n=parseFloat(z);N(n>e?(n-e).toString():z)}else N(z)},[z,ce]);return"xyz.abs.privy"===(null===(i=b.connector)||void 0===i?void 0:i.id)||"Abstract"===(null===(o=b.connector)||void 0===o?void 0:o.name)?(0,r.jsx)(p.ff,{children:(0,r.jsx)(Be.A,{title:"Multi-chain wallet required",description:"Abstract Global Wallet only supports Abstract chain. Please connect with a multi-chain wallet like MetaMask or WalletConnect to use the bridge.",buttonText:"Disconnect",onButtonClick:()=>I()})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p.ff,{children:(0,r.jsx)(Ze,{children:(0,r.jsx)(Pe,{children:(0,r.jsxs)(h.mm,{gap:"md",children:[(0,r.jsx)(Ne,{label:"From",selectedChain:B,selectedToken:R,chains:(null===(a=V)||void 0===a?void 0:a.chains)||[],tokens:(null===(s=Z)||void 0===s?void 0:s.tokens)||[],onSelect:ne}),(0,r.jsxs)(Fe,{children:[(0,r.jsxs)(He,{children:[(0,r.jsx)(Le,{children:(0,r.jsx)(c.Trans,{children:"You send"})}),R&&B&&(se?(0,r.jsx)(Ue,{onClick:le,children:(0,r.jsx)(c.Trans,{children:"Show balance"})}):z?(0,r.jsxs)(Ke,{children:["Balance: ",parseFloat(z).toFixed(6)," ",R.symbol]}):null)]}),(0,r.jsxs)(qe,{children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,r.jsx)(ze,{type:"text",inputMode:"decimal",autoComplete:"off",autoCorrect:"off",placeholder:"0.0",value:S,onChange:e=>N(e.target.value),style:{flex:1}}),z&&!se&&(0,r.jsx)(Oe,{onClick:ue,disabled:!z,children:"MAX"})]}),null!==oe&&(0,r.jsxs)(De,{children:["~$",oe.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]}),(0,r.jsx)(p.rl,{clickable:!0,onClick:ee,children:(0,r.jsx)(Re,{children:(0,r.jsx)(v.A,{size:"16",color:"currentColor"})})}),(0,r.jsx)(Ne,{label:"To",selectedChain:M,selectedToken:L,chains:(null===(d=V)||void 0===d?void 0:d.chains)||[],tokens:Y,onSelect:te,disabled:!R}),(0,r.jsxs)(Fe,{children:[(0,r.jsx)(Le,{children:(0,r.jsx)(c.Trans,{children:"You receive"})}),(0,r.jsxs)(qe,{children:[(0,r.jsx)(ze,{type:"text",value:ie||(Q&&L?(Number(Q.amountOut)/Math.pow(10,L.decimals)).toFixed(6):""),disabled:!0,readOnly:!0,$hasError:!!ie}),null!==ae&&!ie&&(0,r.jsxs)(De,{children:["~$",ae.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]}),Q&&(0,r.jsx)(W,{quote:Q}),(0,r.jsx)(Ve,{theme:"primary",onPress:b.address?se?le:de:()=>k.open(),disabled:b.address&&(J||!se&&(!re||X||O)),$isDisabled:b.address&&(!!J||!se&&(!re||X||O)),children:b.address?J?(0,r.jsx)(c.Trans,{children:"Quote error"}):se?`Switch to ${null===(x=B)||void 0===x?void 0:x.name}`:O?(0,r.jsx)(c.Trans,{children:"Bridging..."}):X?(0,r.jsx)(c.Trans,{children:"Fetching quote..."}):re?(0,r.jsx)(c.Trans,{children:"Bridge tokens"}):(0,r.jsx)(c.Trans,{children:"Enter amount"}):(0,r.jsx)(c.Trans,{children:"Connect wallet"})})]})})})})})}var Ye=t(12016);function Ge({color:e="",size:n=24}){const t=(0,Ye.D)(),i=n*(125/34);return(0,r.jsxs)("svg",{width:i,height:n,viewBox:"0 0 125 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M9.51364 8.3127e-07C8.25792 0.00626346 7.01571 0.26115 5.85798 0.75015C4.70025 1.23915 3.64967 1.95272 2.76624 2.85C1.8828 3.74727 1.18382 4.81074 0.709201 5.97964C0.234586 7.14855 -0.00635202 8.40001 0.00012729 9.66256V12.8542H7.72992V8.23017C7.72983 8.01301 7.7723 7.79797 7.8549 7.59732C7.9375 7.39667 8.05862 7.21436 8.21132 7.06079C8.36403 6.90722 8.54535 6.78546 8.74489 6.70237C8.94444 6.61927 9.15832 6.57654 9.37431 6.57658H9.65298C9.86897 6.57654 10.0829 6.61928 10.2824 6.70237C10.482 6.78546 10.6633 6.90722 10.8161 7.06079C10.9688 7.21435 11.0899 7.39667 11.1726 7.59732C11.2552 7.79797 11.2977 8.013 11.2977 8.23017V20.626C12.3128 20.626 13.318 20.425 14.2558 20.0345C15.1936 19.6439 16.0458 19.0714 16.7636 18.3498C17.4814 17.6281 18.0507 16.7713 18.4392 15.8284C18.8276 14.8855 19.0275 13.8748 19.0275 12.8542V9.66256C19.033 7.10448 18.0311 4.6482 16.2408 2.83057C15.3624 1.93362 14.3152 1.22142 13.1602 0.735457C12.0053 0.249496 10.7657 -0.000526135 9.51364 8.3127e-07Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M9.65335 26.9007H9.37468C9.15872 26.9007 8.94487 26.8579 8.74535 26.7749C8.54582 26.6918 8.36452 26.57 8.21182 26.4164C8.05911 26.2629 7.93799 26.0807 7.85537 25.8801C7.77275 25.6795 7.73024 25.4644 7.73029 25.2473V12.8516C6.71517 12.8515 5.70997 13.0524 4.77211 13.4429C3.83425 13.8335 2.98211 14.4059 2.26431 15.1276C1.54652 15.8493 0.977135 16.7061 0.588708 17.6491C0.20028 18.592 0.00041149 19.6027 0.000498842 20.6233V23.7705C-0.0123788 25.0349 0.22419 26.2893 0.696522 27.4612C1.16885 28.6331 1.86757 29.6992 2.75228 30.5979C3.63698 31.4965 4.69011 32.2099 5.85076 32.6968C7.01141 33.1837 8.25656 33.4344 9.51417 33.4344C10.7718 33.4344 12.0169 33.1837 13.1776 32.6968C14.3382 32.2099 15.3914 31.4965 16.2761 30.5979C17.1608 29.6992 17.8595 28.6331 18.3318 27.4612C18.8042 26.2893 19.0407 25.0349 19.0278 23.7705V20.6233H11.2981V25.2473C11.2981 25.4645 11.2555 25.6795 11.1729 25.8801C11.0902 26.0807 10.969 26.263 10.8163 26.4165C10.6636 26.5701 10.4823 26.6918 10.2827 26.7749C10.0832 26.8579 9.86932 26.9007 9.65335 26.9007Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M32.2404 9.8125H29.5312V23.6309H37.4828V21.0257H32.2407L32.2404 9.8125Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M46.1589 14.9305C45.7768 14.453 45.2875 14.0734 44.7312 13.823C44.1749 13.5725 43.5674 13.4582 42.9586 13.4894C42.3225 13.4844 41.6928 13.6166 41.1119 13.8772C40.531 14.1378 40.0125 14.5207 39.5914 15C38.6872 16.0186 38.1875 17.3361 38.1875 18.7015C38.1875 20.0668 38.6872 21.3843 39.5914 22.403C40.0126 22.8821 40.5312 23.2648 41.1121 23.5253C41.693 23.7857 42.3226 23.9179 42.9586 23.9129C44.3331 23.9129 45.3999 23.4325 46.1589 22.4719V23.6367H48.6919V13.7665H46.1589V14.9305ZM45.3838 20.7049C45.1283 20.962 44.8231 21.1637 44.4872 21.2978C44.1512 21.4319 43.7915 21.4954 43.4302 21.4845C43.0702 21.4961 42.7118 21.4329 42.3772 21.2987C42.0427 21.1646 41.7394 20.9624 41.4861 20.7049C40.9931 20.1552 40.7203 19.4412 40.7203 18.701C40.7203 17.9607 40.9931 17.2468 41.4861 16.6971C41.7395 16.4398 42.0429 16.2378 42.3774 16.1037C42.7118 15.9696 43.0703 15.9063 43.4302 15.9177C43.7914 15.907 44.1511 15.9706 44.487 16.1046C44.823 16.2386 45.1282 16.4402 45.3838 16.6971C45.8824 17.2441 46.1589 17.959 46.1589 18.701C46.1589 19.4429 45.8824 20.1579 45.3838 20.7049Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M55.2195 20.3919L52.659 13.7578H49.8906L53.9143 23.3126C53.7459 23.8828 53.4148 24.3907 52.962 24.7734C52.4861 25.0979 51.9152 25.251 51.3418 25.208V27.5772C52.4597 27.6811 53.5773 27.3759 54.4893 26.7176C55.3317 26.0783 56.0084 25.0541 56.5194 23.645L60.0985 13.7585H57.389L55.2195 20.3919Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M65.5816 13.4875C64.8911 13.4631 64.2031 13.5829 63.561 13.8395C62.919 14.0961 62.3369 14.4839 61.8515 14.9783C60.9143 15.9913 60.3949 17.3245 60.3985 18.7081C60.402 20.0916 60.9283 21.4221 61.8708 22.4302C62.8527 23.4169 64.1551 23.9104 65.7781 23.9106C67.6625 23.9106 69.0892 23.2067 70.0582 21.7989L68.0164 20.614C67.7568 20.9453 67.421 21.2082 67.0379 21.3801C66.6549 21.5521 66.236 21.6279 65.8173 21.601C64.3118 21.601 63.389 20.9826 63.0487 19.7457H70.4509C70.5141 19.4004 70.547 19.05 70.549 18.6989C70.5865 17.324 70.082 15.9901 69.1454 14.9877C68.6917 14.497 68.1392 14.1093 67.5246 13.8506C66.91 13.5919 66.2476 13.4681 65.5816 13.4875ZM63.0097 17.7714C63.1218 17.1914 63.4347 16.6702 63.893 16.3003C64.3802 15.9382 64.9757 15.7536 65.5813 15.7773C66.1347 15.7701 66.6756 15.9434 67.1229 16.2712C67.5986 16.6395 67.9178 17.1755 68.0161 17.7711L63.0097 17.7714Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M74.8454 15.4575V13.7593H72.3125V23.6298H74.8454V18.9119C74.8454 17.9644 75.1497 17.2866 75.7582 16.8785C76.3676 16.4704 77.105 16.3017 77.83 16.4047V13.5628C77.1933 13.5547 76.5661 13.7183 76.0136 14.0365C75.468 14.3548 75.0537 14.8589 74.8454 15.4575Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M90.1775 11.9496V9.81244H81.1684V12.4184H86.7447L81.0234 21.4546V23.6305H90.2869V21.0253H84.4556L90.1775 11.9496Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M96.2695 13.4875C95.579 13.4631 94.8909 13.5829 94.2488 13.8395C93.6067 14.0961 93.0246 14.4839 92.5391 14.9783C91.6018 15.9913 91.0823 17.3246 91.086 18.7082C91.0896 20.0917 91.6161 21.4222 92.5587 22.4302C93.5406 23.4169 94.8429 23.9104 96.4657 23.9106C98.3501 23.9106 99.7769 23.2067 100.746 21.7989L98.704 20.614C98.4444 20.9452 98.1087 21.2081 97.7257 21.38C97.3427 21.552 96.9239 21.6278 96.5053 21.601C94.9996 21.601 94.0768 20.9826 93.7369 19.7457H101.139C101.202 19.4003 101.235 19.05 101.237 18.6989C101.274 17.324 100.77 15.9901 99.8333 14.9877C99.3797 14.497 98.8271 14.1093 98.2125 13.8506C97.5979 13.5919 96.9355 13.4681 96.2695 13.4875ZM93.6977 17.7714C93.8097 17.1914 94.1228 16.6701 94.5812 16.3003C95.0685 15.938 95.664 15.7535 96.2695 15.7774C96.823 15.7699 97.3639 15.9432 97.8111 16.2712C98.2869 16.6395 98.606 17.1755 98.704 17.7711L93.6977 17.7714Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M105.533 15.4575V13.7593H103V23.6298H105.533V18.9119C105.533 17.9644 105.837 17.2866 106.446 16.8785C107.055 16.4704 107.792 16.3018 108.517 16.4047V13.5628C107.881 13.5547 107.253 13.7183 106.701 14.0365C106.155 14.3548 105.741 14.8588 105.533 15.4575Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M114.293 13.4857C113.104 13.4989 111.957 13.9252 111.046 14.6923C110.135 15.4594 109.515 16.52 109.294 17.6939C109.072 18.8678 109.261 20.0827 109.829 21.1324C110.397 22.1821 111.309 23.0017 112.409 23.4522C113.51 23.9026 114.732 23.9562 115.868 23.6037C117.003 23.2512 117.982 22.5143 118.639 21.5183C119.296 20.5223 119.589 19.3286 119.47 18.1397C119.35 16.9508 118.825 15.8402 117.984 14.9963C117.504 14.5037 116.929 14.1155 116.294 13.8556C115.659 13.5958 114.978 13.4699 114.293 13.4857ZM116.197 20.6517C115.949 20.9038 115.652 21.1021 115.324 21.2344C114.997 21.3666 114.646 21.43 114.293 21.4206C113.941 21.4307 113.591 21.3676 113.265 21.2353C112.939 21.1029 112.643 20.9043 112.397 20.6517C111.911 20.1182 111.641 19.4208 111.641 18.6972C111.641 17.9737 111.911 17.2764 112.397 16.7428C112.643 16.4903 112.939 16.2917 113.265 16.1594C113.591 16.0271 113.941 15.9638 114.293 15.9738C114.646 15.9645 114.996 16.028 115.324 16.1603C115.652 16.2925 115.949 16.4908 116.197 16.7428C116.689 17.2733 116.963 17.9718 116.963 18.6972C116.963 19.4227 116.689 20.1212 116.197 20.6517Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M124.809 20.5938H121.727V23.6339H124.809V20.5938Z",fill:e||t.neutral1.val}),(0,r.jsx)("path",{d:"M124.809 20.5938H121.727V23.6339H124.809V20.5938Z",fill:e||t.neutral1.val})]})}var Qe=t(48526),Xe=t(96690);function Je(){return(0,r.jsxs)(Qe.s,{row:!0,alignItems:"center",gap:"$spacing16",children:[(0,r.jsx)(Xe.EY,{variant:"body3",color:"neutral2",children:"Powered by"}),(0,r.jsx)(Ge,{size:28})]})}const en=a.default.div.withConfig({displayName:"Bridge__BridgePageWrapper",componentId:"sc-2f3805ed-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  height: calc(100vh - 90px);
  justify-content: space-between;
`;function nn(){return(0,r.jsx)(s.default,{logImpression:!0,page:i.InterfacePageName.SWAP_PAGE,children:(0,r.jsxs)(en,{children:[(0,r.jsx)(We,{}),(0,r.jsx)(o.j,{}),(0,r.jsx)(Je,{})]})})}},65868:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(98902),i=t(24862),o=t.n(i);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=(0,r.forwardRef)(function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,c=void 0===o?24:o,l=s(e,["color","size"]);return r.createElement("svg",a({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("polyline",{points:"6 9 12 15 18 9"}))});c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="ChevronDown";const l=c}}]);
//# sourceMappingURL=5966.470d1440.chunk.js.map