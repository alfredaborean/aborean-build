"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9547],{59547:(e,r,t)=>{t.r(r),t.d(r,{default:()=>A});var n=t(97755),a=t(82746),o=t(71960),c=t(84308),s=t(44441),i=t(19671),l=t(59793),u=t(62394),d=t(11692),p=t(80929),x=t(41622),g=t(20128),k=t(35021),h=t(56156);function b(e,r,t,n,a,o,c){try{var s=e[o](c),i=s.value}catch(l){return void t(l)}s.done?r(i):Promise.resolve(i).then(n,a)}function y(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var o=e.apply(r,t);function c(e){b(o,n,a,c,s,"next",e)}function s(e){b(o,n,a,c,s,"throw",e)}c(void 0)})}}var $=t(17041);function m({onCreateClick:e,onCancelClick:r,isDisabled:t=!1,isProcessing:o=!1,buttonText:c="Create lock",showCancel:s=!0}){const u=(0,i.useSporeColors)(),d=$.default.button.withConfig({displayName:"LockCreateCancelButton__Button",componentId:"sc-573666c0-0"})`
    all: unset;
    padding: 16px 10px;
    background-color: ${e=>e.$disabled?u.surface2.val:e.$lock?u.surface2Hovered.val:u.accent1.val};
    color: ${e=>e.$disabled?u.neutral3.val:e.$lock?u.neutral1.val:u.surface1.val};
    border-radius: 12px;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    transition: all 0.2s ease;
    opacity: ${e=>e.$disabled?.5:1};
    &:hover {
      opacity: ${e=>e.$disabled?.5:.7};
    }
  `;return(0,n.jsxs)(a.Flex,{mt:"$spacing24",row:!0,gap:"$gap12",alignItems:"center",children:[s&&(0,n.jsx)(d,{$lock:!0,onClick:r,$disabled:o,children:(0,n.jsx)(l.Text,{variant:"buttonLabel3",color:"inherit",children:"Cancel"})}),(0,n.jsx)(d,{onClick:e,$disabled:t||o,children:(0,n.jsx)(l.Text,{variant:"buttonLabel3",color:"inherit",children:o?"Processing...":c})})]})}const f=$.default.input.withConfig({displayName:"Range__StyledRange",componentId:"sc-273af88f-0"})`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;

  border-radius: 2px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    background: transparent;
  }

  &::-moz-range-track {
    background: transparent;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 50%;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    background: rgba(255, 255, 255, 0.38);
    transform: scale(1.1);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 1);
    border-radius: 50%;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
  }

  &::-moz-range-thumb:hover {
    background: rgb(173, 173, 173);
    transform: scale(1.1);
  }

  &::-moz-range-track {
    background: transparent;
    border: none;
  }
`,v=({value:e,onValueChange:r,min:t=7,max:o=1461})=>{const c=(e-t)/(o-t)*100,s=e=>{if(e<30)return`${e}d`;if(e<365)return`${Math.round(e/30)}m`;const r=Math.floor(e/365),t=e%365;return 0===t?`${r}y`:`${r}y ${Math.round(t/30)}m`},u=[s(t),s(Math.round(t+.25*(o-t))),s(Math.round(t+.5*(o-t))),s(Math.round(t+.75*(o-t))),s(o)],d=(0,i.useSporeColors)();return(0,n.jsxs)(a.Flex,{width:"100%",mt:"$gap36",mb:"$gap24",children:[(0,n.jsxs)(a.Flex,{position:"relative",grow:!0,children:[(0,n.jsx)(f,{min:"0",max:"100",value:c,onChange:e=>{const n=Number(e.target.value),a=Math.round(t+n/100*(o-t));r(a)},list:"range-datalist",type:"range",style:{background:`linear-gradient(\n            to right,\n            ${d.accent1Hovered.val} 0%,\n            ${d.accent1Hovered.val} ${c}%,\n            ${d.accent2.val} ${c}%,\n             ${d.accent2.val} 100%\n          )`}}),(0,n.jsx)(a.Flex,{position:"absolute",top:-30,left:`${c}%`,transform:"translateX(-50%)",children:(0,n.jsx)(l.Text,{variant:"body4",color:"$neutral1",textAlign:"center",children:s(e)})})]}),(0,n.jsx)(a.Flex,{row:!0,justifyContent:"space-between",gap:"$gap12",grow:!0,mt:"$gap12",children:u.map(e=>(0,n.jsx)(l.Text,{variant:"body4",color:"$neutral3",children:e},e))})]})};function w(){const e=(0,i.useSporeColors)(),{formState:r,updateFormState:t,flowState:b,executeFlow:$,votingPowerPreview:f,userABXBalance:w,needsApproval:C,isProcessing:j,isConnected:D,resetFlow:F}=function(){const{address:e}=(0,h.m)(),{refetch:r}=(0,x.Zz)(e),{approveABX:t,createLock:n,needsApproval:a,getFormattedABXBalance:o,isWritePending:c,isConfirming:s,isSuccess:i,writeError:l,transactionHash:b,refetchAllowance:$}=(0,p.Y)(),[m,f]=(0,g.useState)({amount:"",lockDurationInDays:7,isValid:!1,errors:{}}),[v,w]=(0,g.useState)({step:"input"}),C=(0,g.useCallback)((e,r)=>{const t={},n=(0,k.Rm)(e);if(n.isValid){const r=parseFloat(o());parseFloat(e)>r&&(t.amount="Insufficient ABX balance")}else t.amount=n.error;const{minDays:a,maxDays:c}=(0,k.$c)();return r<a?t.duration=`Minimum lock duration is ${a} days`:r>c&&(t.duration=`Maximum lock duration is ${c} days`),{amount:e,lockDurationInDays:r,isValid:0===Object.keys(t).length,errors:t}},[o]),j=(0,g.useCallback)(e=>{f(r=>{const t=e.amount??r.amount,n=e.lockDurationInDays??r.lockDurationInDays;return C(t,n)})},[C]),D=(0,g.useCallback)(()=>m.isValid?(0,k.q_)(m.amount,m.lockDurationInDays):"0",[m]),F=(0,g.useCallback)(()=>{w({step:"input"}),I(null),f({amount:"",lockDurationInDays:7,isValid:!1,errors:{}})},[]),A=(0,g.useCallback)(y(function*(){if(m.isValid){w({step:"approve"}),I("approve");try{yield t(m.amount)}catch(e){console.error("Approval failed:",e);const r=e instanceof Error?e.message:"Failed to approve ABX tokens";r.toLowerCase().includes("user rejected")||r.toLowerCase().includes("user denied")||r.toLowerCase().includes("rejected by user")?(w({step:"input"}),u.Z.addPopup({type:d.k.LockError,content:{type:"error",title:"Transaction Cancelled",description:"Token approval was cancelled by user",action:"create"}},`lock-approve-cancelled-${Date.now()}`,5e3)):(w({step:"error",error:r}),u.Z.addPopup({type:d.k.LockError,content:{type:"error",title:"Token Approval Failed",description:`Failed to approve ABX tokens: ${r}`,action:"create"}},`lock-approve-error-${Date.now()}`,1e4)),I(null)}}}),[m,t]),L=(0,g.useCallback)(y(function*(){if(m.isValid){w({step:"create"}),I("create");try{yield n({amount:m.amount,lockDurationInDays:m.lockDurationInDays})}catch(e){console.error("Create lock failed:",e);const r=e instanceof Error?e.message:"Failed to create lock";r.toLowerCase().includes("user rejected")||r.toLowerCase().includes("user denied")||r.toLowerCase().includes("rejected by user")?(w({step:"input"}),u.Z.addPopup({type:d.k.LockError,content:{type:"error",title:"Transaction Cancelled",description:"Lock creation was cancelled by user",action:"create"}},`lock-create-cancelled-${Date.now()}`,5e3)):(w({step:"error",error:r}),u.Z.addPopup({type:d.k.LockError,content:{type:"error",title:"Lock Creation Failed",description:`Failed to create lock: ${r}`,action:"create"}},`lock-create-error-${Date.now()}`,1e4)),I(null)}}}),[m,n]),T=(0,g.useCallback)(y(function*(){m.isValid&&e&&(a(m.amount)?yield A():yield L())}),[m,e,a,A,L]),P=(0,g.useCallback)(y(function*(){w({step:"success",transactionHash:b}),u.Z.addPopup({type:d.k.LockSuccess,content:{type:"success",title:"Lock Created Successfully",description:`Successfully locked ${m.amount} ABX for ${m.lockDurationInDays} days`,hash:b,action:"create"}},`lock-create-${b}`,8e3),yield Promise.all([r(),$()])}),[b,r,$,m.amount,m.lockDurationInDays]),[S,I]=(0,g.useState)(null);return(0,g.useEffect)(()=>{if(s)w(e=>({...e,step:"confirming",transactionHash:b}));else if(i&&S)"approve"===S?(I(null),setTimeout(()=>{$().then(()=>{L()})},1e3)):"create"===S&&(I(null),P());else if(l){const e=l.message;e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user denied")||e.toLowerCase().includes("rejected by user")?(w({step:"input"}),u.Z.addPopup({type:d.k.LockError,content:{type:"error",title:"Transaction Cancelled",description:"Lock creation was cancelled by user",action:"create"}},`lock-create-cancelled-${Date.now()}`,5e3)):(w({step:"error",error:e}),u.Z.addPopup({type:d.k.LockError,content:{type:"error",title:"Lock Creation Failed",description:`Failed to create lock: ${e}`,action:"create"}},`lock-create-error-${Date.now()}`,1e4)),I(null)}},[s,i,l,b,S,P,L,$]),{formState:m,updateFormState:j,flowState:v,resetFlow:F,executeFlow:T,executeApproval:A,executeCreateLock:L,votingPowerPreview:D(),userABXBalance:o(),needsApproval:!!m.isValid&&a(m.amount),isProcessing:c||s,isConnected:!!e}}(),A=e=>{t({amount:e})},L=e=>{t({lockDurationInDays:e})},T=e=>{const r=parseFloat(w);if(r>0){const t=(r*e/100).toString();A(t)}};return(0,n.jsxs)(a.Flex,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(()=>{switch(b.step){case"approve":return(0,n.jsx)(a.Flex,{centered:!0,py:"$spacing20",children:(0,n.jsx)(l.Text,{variant:"body2",color:"$neutral2",textAlign:"center",children:"Approving ABX tokens for locking..."})});case"create":return(0,n.jsx)(a.Flex,{centered:!0,py:"$spacing20",children:(0,n.jsx)(l.Text,{variant:"body2",color:"$neutral2",textAlign:"center",children:"Creating your veABX lock..."})});case"confirming":return(0,n.jsxs)(a.Flex,{centered:!0,py:"$spacing20",gap:"$spacing8",children:[(0,n.jsx)(l.Text,{variant:"body2",color:"$neutral2",textAlign:"center",children:"Waiting for transaction confirmation..."}),b.transactionHash&&(0,n.jsxs)(l.Text,{variant:"body4",color:"$neutral3",textAlign:"center",children:["Tx: ",b.transactionHash.slice(0,10),"..."]})]});case"success":return(0,n.jsxs)(a.Flex,{centered:!0,py:"$spacing20",gap:"$spacing12",children:[(0,n.jsx)(l.Text,{variant:"body2",color:"$statusSuccess",textAlign:"center",children:"Lock created successfully! \ud83c\udf89"}),(0,n.jsx)(l.Text,{variant:"body3",color:"$neutral2",textAlign:"center",children:"Your veABX tokens will appear in your locks list shortly."}),b.transactionHash&&(0,n.jsxs)(l.Text,{variant:"body4",color:"$neutral3",textAlign:"center",children:["Tx: ",b.transactionHash.slice(0,10),"..."]})]});case"error":return(0,n.jsxs)(a.Flex,{centered:!0,py:"$spacing20",gap:"$spacing8",children:[(0,n.jsx)(l.Text,{variant:"body2",color:"$statusCritical",textAlign:"center",children:"Transaction failed"}),(0,n.jsx)(l.Text,{variant:"body3",color:"$neutral3",textAlign:"center",children:b.error})]});default:return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{title:"Amount",onPercentageSelect:T}),(0,n.jsx)(o.Z,{value:r.amount,onValueChange:A,error:r.errors.amount,userBalance:w}),(0,n.jsx)(v,{value:r.lockDurationInDays,onValueChange:L}),r.errors.duration&&(0,n.jsx)(l.Text,{variant:"body3",color:"$statusCritical",mt:"$spacing8",textAlign:"center",children:r.errors.duration}),(0,n.jsx)(a.Flex,{mt:"$gap24",children:(0,n.jsx)(s.Z,{votingPower:f,lockDuration:r.lockDurationInDays})})]})}})(),(0,n.jsx)(m,{onCreateClick:$,onCancelClick:F,isDisabled:!r.isValid||!D||j,isProcessing:j,buttonText:"success"===b.step?"Create Another Lock":C?"Approve & Create Lock":"Create Lock",showCancel:"input"===b.step})]})}var C=t(48763),j=t(74456),D=t(7602);function F(){const e=(0,i.useSporeColors)();(0,j.z)(l.Text,{variant:"body3",color:"$neutral2",fontSize:"$mdall"});return(0,n.jsxs)(a.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,n.jsx)(l.Text,{variant:"buttonLabel1",children:"Create a lock "}),(0,n.jsx)(D.Z,{width:"100%",my:"$spacing16",height:1}),(0,n.jsxs)(a.Flex,{row:!0,justifyContent:"space-between",gap:"$gap16",alignItems:"center",children:[(0,n.jsx)(a.Flex,{className:"left",row:!0,gap:"$gap12",height:50,width:50,borderRadius:"$roundedFull",backgroundColor:"$surface3",centered:!0,$sm:{display:"none"},children:(0,n.jsx)(a.Flex,{children:(0,n.jsx)(C.Z,{size:26,color:e.neutral1.val})})}),(0,n.jsx)(l.Text,{variant:"body4",color:"$neutral2",children:"When you lock tokens, you\u2019ll receive a veNFT (voting escrow NFT). You can increase your lock amount or extend the lock duration at any time."})]})]})}function A(){return(0,n.jsxs)(a.Flex,{mt:"$spacing24",width:"100%",px:"$spacing40",maxWidth:680,pb:"$spacing40",$xl:{px:"$spacing12",mx:"auto"},flexDirection:"column",gap:"$gap12",children:[(0,n.jsx)(F,{}),(0,n.jsx)(w,{})]})}}}]);
//# sourceMappingURL=9547.c977848b.chunk.js.map