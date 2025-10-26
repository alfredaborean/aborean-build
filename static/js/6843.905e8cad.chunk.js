"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6843],{6843:(e,r,t)=>{t.r(r),t.d(r,{default:()=>I});var n=t(9990),a=t(48526),o=t(24654),c=t(30020),s=t(38711),i=t(12016),l=t(96690),d=t(34476),u=t(40214),p=t(91267),g=t(35764),k=t(98902),h=t(76171),b=t(37467);function x(e,r,t,n,a,o,c){try{var s=e[o](c),i=s.value}catch(l){return void t(l)}s.done?r(i):Promise.resolve(i).then(n,a)}function y(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var o=e.apply(r,t);function c(e){x(o,n,a,c,s,"next",e)}function s(e){x(o,n,a,c,s,"throw",e)}c(void 0)})}}var m=t(54407),$=t(66595);function f({onCreateClick:e,onCancelClick:r,isDisabled:t=!1,isProcessing:o=!1,buttonText:c="Create lock",showCancel:s=!0}){const i=m.default.button.withConfig({displayName:"LockCreateCancelButton__Button",componentId:"sc-c19a0e53-0"})`
    all: unset;
    padding: 16px 10px;
    border: 1px solid ${({theme:e})=>e.surface3};
    background-color: ${({$isDisabled:e,theme:r,$lock:t})=>e?r.surface2:t?r.surface2Hovered:r.accent1};
    color: ${({$isDisabled:e,theme:r,$lock:t})=>e||t?r.accent1:r.surface1};
    border-radius: 12px;
    cursor: ${({$isDisabled:e})=>e?"not-allowed":"pointer"};
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    transition: all 0.2s ease;
    opacity: ${({$isDisabled:e})=>e?.6:1};
    &:hover {
      opacity: ${({$isDisabled:e})=>e?.6:.7};
    }
  `;return(0,n.jsx)(a.s,{mt:"$spacing24",row:!0,gap:"$gap12",alignItems:"center",children:(0,n.jsx)(i,{onClick:e,$isDisabled:t||o,children:(0,n.jsxs)(a.s,{row:!0,gap:"$gap8",alignItems:"center",children:[o&&(0,n.jsx)($.c,{size:20}),(0,n.jsx)(l.EY,{variant:"buttonLabel3",color:"inherit",children:o?"Processing...":c})]})})})}const w=m.default.input.withConfig({displayName:"Range__StyledRange",componentId:"sc-66c1bcd5-0"})`
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
`,v=({value:e,onValueChange:r})=>{const t=(0,k.useMemo)(()=>new Date,[]),o=(0,h.gO)(t),c=(0,k.useMemo)(()=>{if(e<=o)return 1;const r=e-o;return 1+Math.ceil(r/7)},[e,o]),s=(0,h.PY)(c),d=(0,k.useMemo)(()=>(0,h.zX)().map(e=>(0,h.Li)(e,t)),[t]),u=(0,i.D)();return(0,n.jsxs)(a.s,{width:"100%",mt:"$gap36",mb:"$gap24",children:[(0,n.jsxs)(a.s,{position:"relative",grow:!0,children:[(0,n.jsx)(w,{min:"0",max:"100",step:100/207,value:s,onChange:e=>{const n=Number(e.target.value),a=(0,h.HQ)(n),o=(0,h.pH)(a,t);r(o)},list:"range-datalist",type:"range",style:{background:`linear-gradient(\n            to right,\n            ${u.accent1Hovered.val} 0%,\n            ${u.accent1Hovered.val} ${s}%,\n            ${u.accent2.val} ${s}%,\n             ${u.accent2.val} 100%\n          )`}}),(0,n.jsx)(a.s,{position:"absolute",top:-30,left:`${s}%`,transform:"translateX(-50%)",children:(0,n.jsx)(l.EY,{variant:"body4",color:"$neutral1",textAlign:"center",children:(0,h.Li)(c,t)})})]}),(0,n.jsx)(a.s,{row:!0,justifyContent:"space-between",gap:"$gap12",grow:!0,mt:"$gap12",children:d.map(e=>(0,n.jsx)(l.EY,{variant:"body4",color:"$neutral3",children:e},e))})]})};var C=t(58917);function j(){const e=(0,i.D)(),r=(0,C.Zp)(),{formState:t,updateFormState:x,flowState:m,executeFlow:$,votingPowerPreview:w,userABXBalance:j,needsApproval:D,isProcessing:L,isConnected:A,resetFlow:E,supportsEip5792:F}=function(){const{address:e}=(0,b.F)(),{refetch:r}=(0,g.L_)(e),{approveABX:t,createLock:n,createLockBatched:a,needsApproval:o,getFormattedABXBalance:c,isWritePending:s,isConfirming:i,isSuccess:l,writeError:x,transactionHash:m,refetchAllowance:$,supportsEip5792:f}=(0,p.v)(),[w,v]=(0,k.useState)({amount:"",lockDurationInDays:(0,h.gO)(),isValid:!1,errors:{}}),[C,j]=(0,k.useState)({step:"input"}),[D,L]=(0,k.useState)(null),A=(0,k.useCallback)((e,r)=>{const t={},n=(0,h.cG)(e);if(n.isValid){const r=parseFloat(c());parseFloat(e)>r&&(t.amount="Insufficient ABX balance")}else t.amount=n.error;const{maxDays:a}=(0,h.oj)();return r>a&&(t.duration=`Maximum lock duration is ${a} days`),{amount:e,lockDurationInDays:r,isValid:0===Object.keys(t).length,errors:t}},[c]),E=(0,k.useCallback)(e=>{v(r=>{const t=e.amount??r.amount,n=e.lockDurationInDays??r.lockDurationInDays;return A(t,n)})},[A]),F=(0,k.useCallback)(()=>w.isValid?(0,h.g2)(w.amount,w.lockDurationInDays):"0",[w]),P=(0,k.useCallback)(()=>{j({step:"input"}),V(null),L(null),v({amount:"",lockDurationInDays:7,isValid:!1,errors:{}})},[]),I=(0,k.useCallback)(y(function*(){if(w.isValid){j({step:"approve"}),V("approve");try{yield t(w.amount)}catch(e){console.error("Approval failed:",e);const r=e instanceof Error?e.message:"Failed to approve ABX tokens";r.toLowerCase().includes("user rejected")||r.toLowerCase().includes("user denied")||r.toLowerCase().includes("rejected by user")?(j({step:"input"}),d.O.addPopup({type:u.n.LockError,content:{type:"error",title:"Transaction Cancelled",description:"Token approval was cancelled by user",action:"create"}},`lock-approve-cancelled-${Date.now()}`,5e3)):(j({step:"error",error:r}),d.O.addPopup({type:u.n.LockError,content:{type:"error",title:"Token Approval Failed",description:`Failed to approve ABX tokens: ${r}`,action:"create"}},`lock-approve-error-${Date.now()}`,1e4)),V(null)}}}),[w,t]),B=(0,k.useCallback)(y(function*(){j({step:"success",transactionHash:m}),d.O.addPopup({type:u.n.LockSuccess,content:{type:"success",title:"Lock Created Successfully",description:`Successfully locked ${w.amount} ABX for ${w.lockDurationInDays} days`,hash:m,action:"create"}},`lock-create-${m}`,8e3),yield Promise.all([r(),$()])}),[m,r,$,w.amount,w.lockDurationInDays]),S=(0,k.useCallback)(y(function*(){if(w.isValid){j({step:"create"}),V("create");try{const e=yield a({amount:w.amount,lockDurationInDays:w.lockDurationInDays});L(e),j(r=>({...r,step:"confirming",transactionHash:e})),setTimeout(()=>{B()},3e3)}catch(e){console.error("Batched create lock failed:",e);const r=e instanceof Error?e.message:"Failed to create lock";r.toLowerCase().includes("user rejected")||r.toLowerCase().includes("user denied")||r.toLowerCase().includes("rejected by user")?(j({step:"input"}),d.O.addPopup({type:u.n.LockError,content:{type:"error",title:"Transaction Cancelled",description:"Batched lock creation was cancelled by user",action:"create"}},`lock-batched-cancelled-${Date.now()}`,5e3)):(j({step:"error",error:r}),d.O.addPopup({type:u.n.LockError,content:{type:"error",title:"Batched Lock Creation Failed",description:`Failed to create batched lock: ${r}`,action:"create"}},`lock-batched-error-${Date.now()}`,1e4)),V(null),L(null)}}}),[w,a,B]),Y=(0,k.useCallback)(y(function*(){if(w.isValid){j({step:"create"}),V("create");try{yield n({amount:w.amount,lockDurationInDays:w.lockDurationInDays})}catch(e){console.error("Create lock failed:",e);const r=e instanceof Error?e.message:"Failed to create lock";r.toLowerCase().includes("user rejected")||r.toLowerCase().includes("user denied")||r.toLowerCase().includes("rejected by user")?(j({step:"input"}),d.O.addPopup({type:u.n.LockError,content:{type:"error",title:"Transaction Cancelled",description:"Lock creation was cancelled by user",action:"create"}},`lock-create-cancelled-${Date.now()}`,5e3)):(j({step:"error",error:r}),d.O.addPopup({type:u.n.LockError,content:{type:"error",title:"Lock Creation Failed",description:`Failed to create lock: ${r}`,action:"create"}},`lock-create-error-${Date.now()}`,1e4)),V(null)}}}),[w,n]),T=(0,k.useCallback)(y(function*(){w.isValid&&e&&(f&&o(w.amount)?yield S():o(w.amount)?yield I():yield Y())}),[w,e,o,f,S,I,Y]),[H,V]=(0,k.useState)(null);return(0,k.useEffect)(()=>{if(i)j(e=>({...e,step:"confirming",transactionHash:m}));else if(l&&H)"approve"===H?(V(null),setTimeout(()=>{$().then(()=>{Y()})},1e3)):"create"===H&&(V(null),B());else if(x){const e=x.message;e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user denied")||e.toLowerCase().includes("rejected by user")?(j({step:"input"}),d.O.addPopup({type:u.n.LockError,content:{type:"error",title:"Transaction Cancelled",description:"Lock creation was cancelled by user",action:"create"}},`lock-create-cancelled-${Date.now()}`,5e3)):(j({step:"error",error:e}),d.O.addPopup({type:u.n.LockError,content:{type:"error",title:"Lock Creation Failed",description:`Failed to create lock: ${e}`,action:"create"}},`lock-create-error-${Date.now()}`,1e4)),V(null)}},[i,l,x,m,H,B,Y,$]),{formState:w,updateFormState:E,flowState:C,resetFlow:P,executeFlow:T,executeApproval:I,executeCreateLock:Y,executeBatchedCreateLock:S,votingPowerPreview:F(),userABXBalance:c(),needsApproval:!!w.isValid&&o(w.amount),isProcessing:s||i,supportsEip5792:f,batchId:D,isConnected:!!e}}(),P=e=>{x({amount:e})},I=e=>{x({lockDurationInDays:e})},B=e=>{const r=parseFloat(j);if(r>0){const t=Number((r*e/100).toFixed(3)).toString();P(t)}};return(0,n.jsxs)(a.s,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(()=>{switch(m.step){case"approve":return(0,n.jsx)(a.s,{centered:!0,py:"$spacing20",children:(0,n.jsx)(l.EY,{variant:"body2",color:"$neutral2",textAlign:"center",children:"Approving ABX tokens for locking..."})});case"create":return(0,n.jsx)(a.s,{centered:!0,py:"$spacing20",children:(0,n.jsx)(l.EY,{variant:"body2",color:"$neutral2",textAlign:"center",children:"Creating your veABX lock..."})});case"confirming":return(0,n.jsxs)(a.s,{centered:!0,py:"$spacing20",gap:"$spacing8",children:[(0,n.jsx)(l.EY,{variant:"body2",color:"$neutral2",textAlign:"center",children:"Waiting for transaction confirmation..."}),m.transactionHash&&(0,n.jsxs)(l.EY,{variant:"body4",color:"$neutral3",textAlign:"center",children:["Tx: ",m.transactionHash.slice(0,10),"..."]})]});case"success":return(0,n.jsxs)(a.s,{centered:!0,py:"$spacing20",gap:"$spacing12",children:[(0,n.jsx)(l.EY,{variant:"body2",color:"$statusSuccess",textAlign:"center",children:"Lock created successfully!"}),(0,n.jsx)(l.EY,{variant:"body3",color:"$neutral2",textAlign:"center",children:"Your veABX tokens will appear in your locks list shortly."}),m.transactionHash&&(0,n.jsxs)(l.EY,{variant:"body4",color:"$neutral3",textAlign:"center",children:["Tx: ",m.transactionHash.slice(0,10),"..."]})]});case"error":return(0,n.jsxs)(a.s,{centered:!0,py:"$spacing20",gap:"$spacing8",children:[(0,n.jsx)(l.EY,{variant:"body2",color:"$statusCritical",textAlign:"center",children:"Transaction failed"}),(0,n.jsx)(l.EY,{variant:"body3",color:"$neutral3",textAlign:"center",children:m.error})]});default:return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{title:"Amount",onPercentageSelect:B}),(0,n.jsx)(o.A,{value:t.amount,onValueChange:P,error:t.errors.amount,userBalance:j}),(0,n.jsx)(v,{value:t.lockDurationInDays,onValueChange:I}),t.errors.duration&&(0,n.jsx)(l.EY,{variant:"body3",color:"$statusCritical",mt:"$spacing8",textAlign:"center",children:t.errors.duration}),(0,n.jsx)(a.s,{mt:"$gap24",children:(0,n.jsx)(s.A,{votingPower:w,lockDuration:t.lockDurationInDays})})]})}})(),(0,n.jsx)(f,{onCreateClick:"success"===m.step?()=>{r("/locks")}:$,onCancelClick:E,isDisabled:!t.isValid||!A||L,isProcessing:L,buttonText:"success"===m.step?"Manage locks":D?"Approve & create lock":"Create lock",showCancel:"input"===m.step})]})}var D=t(91433),L=t(58146),A=t(68371),E=t(75790),F=t(1400);function P(){const e=(0,i.D)();(0,A.I)(l.EY,{variant:"body3",color:"$neutral2",fontSize:"$mdall"});return(0,n.jsxs)(a.s,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,n.jsxs)(a.s,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,n.jsx)(L.Link,{to:"/locks",className:"text-decoration-none",children:(0,n.jsx)(a.s,{backgroundColor:"$accent2",transition:"background-color 0.2s ease",hoverStyle:{backgroundColor:"$accent2Hovered"},padding:"$spacing8",borderRadius:"$rounded8",children:(0,n.jsx)(F.m,{size:16})})}),(0,n.jsx)(l.EY,{variant:"buttonLabel1",children:"Create a lock"})]}),(0,n.jsx)(E.w,{width:"100%",my:"$spacing16",height:1}),(0,n.jsxs)(a.s,{row:!0,justifyContent:"space-between",gap:"$gap16",alignItems:"center",children:[(0,n.jsx)(a.s,{className:"left",row:!0,gap:"$gap12",height:50,width:50,borderRadius:"$roundedFull",backgroundColor:"$surface3",centered:!0,$sm:{display:"none"},children:(0,n.jsx)(a.s,{children:(0,n.jsx)(D.A,{size:26,color:e.neutral1.val})})}),(0,n.jsx)(l.EY,{variant:"body4",color:"$neutral2",children:"When you lock tokens, you\u2019ll receive a veNFT (voting escrow NFT). You can increase your lock amount or extend the lock duration at any time."})]})]})}function I(){return(0,n.jsxs)(a.s,{mt:"$spacing24",width:"100%",px:"$spacing40",maxWidth:680,pb:"$spacing40",$xl:{px:"$spacing12",mx:"auto"},flexDirection:"column",gap:"$gap12",children:[(0,n.jsx)(P,{}),(0,n.jsx)(j,{})]})}}}]);
//# sourceMappingURL=6843.905e8cad.chunk.js.map