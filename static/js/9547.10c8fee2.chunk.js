"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9547],{59547:(e,r,n)=>{n.r(r),n.d(r,{default:()=>F});var a=n(97755),t=n(82746),o=n(71960),s=n(84308),i=n(44441),l=n(19671),c=n(59793),u=n(80929),d=n(41622),p=n(20128),x=n(35021),g=n(56156);function h(e,r,n,a,t,o,s){try{var i=e[o](s),l=i.value}catch(c){return void n(c)}i.done?r(l):Promise.resolve(l).then(a,t)}function b(e){return function(){var r=this,n=arguments;return new Promise(function(a,t){var o=e.apply(r,n);function s(e){h(o,a,t,s,i,"next",e)}function i(e){h(o,a,t,s,i,"throw",e)}s(void 0)})}}var m=n(17041);function $({onCreateClick:e,onCancelClick:r,isDisabled:n=!1,isProcessing:o=!1,buttonText:s="Create lock",showCancel:i=!0}){const u=(0,l.useSporeColors)(),d=m.default.button.withConfig({displayName:"LockCreateCancelButton__Button",componentId:"sc-573666c0-0"})`
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
  `;return(0,a.jsxs)(t.Flex,{mt:"$spacing24",row:!0,gap:"$gap12",alignItems:"center",children:[i&&(0,a.jsx)(d,{$lock:!0,onClick:r,$disabled:o,children:(0,a.jsx)(c.Text,{variant:"buttonLabel3",color:"inherit",children:"Cancel"})}),(0,a.jsx)(d,{onClick:e,$disabled:n||o,children:(0,a.jsx)(c.Text,{variant:"buttonLabel3",color:"inherit",children:o?"Processing...":s})})]})}const f=m.default.input.withConfig({displayName:"Range__StyledRange",componentId:"sc-273af88f-0"})`
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
`,k=({value:e,onValueChange:r,min:n=7,max:o=1461})=>{const s=(e-n)/(o-n)*100,i=e=>{if(e<30)return`${e}d`;if(e<365)return`${Math.round(e/30)}m`;const r=Math.floor(e/365),n=e%365;return 0===n?`${r}y`:`${r}y ${Math.round(n/30)}m`},u=[i(n),i(Math.round(n+.25*(o-n))),i(Math.round(n+.5*(o-n))),i(Math.round(n+.75*(o-n))),i(o)],d=(0,l.useSporeColors)();return(0,a.jsxs)(t.Flex,{width:"100%",mt:"$gap36",mb:"$gap24",children:[(0,a.jsxs)(t.Flex,{position:"relative",grow:!0,children:[(0,a.jsx)(f,{min:"0",max:"100",value:s,onChange:e=>{const a=Number(e.target.value),t=Math.round(n+a/100*(o-n));r(t)},list:"range-datalist",type:"range",style:{background:`linear-gradient(\n            to right,\n            ${d.accent1Hovered.val} 0%,\n            ${d.accent1Hovered.val} ${s}%,\n            ${d.accent2.val} ${s}%,\n             ${d.accent2.val} 100%\n          )`}}),(0,a.jsx)(t.Flex,{position:"absolute",top:-30,left:`${s}%`,transform:"translateX(-50%)",children:(0,a.jsx)(c.Text,{variant:"body4",color:"$neutral1",textAlign:"center",children:i(e)})})]}),(0,a.jsx)(t.Flex,{row:!0,justifyContent:"space-between",gap:"$gap12",grow:!0,mt:"$gap12",children:u.map(e=>(0,a.jsx)(c.Text,{variant:"body4",color:"$neutral3",children:e},e))})]})};function v(){const e=(0,l.useSporeColors)(),{formState:r,updateFormState:n,flowState:h,executeFlow:m,votingPowerPreview:f,userABXBalance:v,needsApproval:y,isProcessing:C,isConnected:j,resetFlow:w}=function(){const{address:e}=(0,g.m)(),{refetch:r}=(0,d.Zz)(e),{approveABX:n,createLock:a,needsApproval:t,getFormattedABXBalance:o,isWritePending:s,isConfirming:i,isSuccess:l,writeError:c,transactionHash:h,refetchAllowance:m}=(0,u.Y)(),[$,f]=(0,p.useState)({amount:"",lockDurationInDays:7,isValid:!1,errors:{}}),[k,v]=(0,p.useState)({step:"input"}),y=(0,p.useCallback)((e,r)=>{const n={},a=(0,x.Rm)(e);if(a.isValid){const r=parseFloat(o());parseFloat(e)>r&&(n.amount="Insufficient ABX balance")}else n.amount=a.error;const{minDays:t,maxDays:s}=(0,x.$c)();return r<t?n.duration=`Minimum lock duration is ${t} days`:r>s&&(n.duration=`Maximum lock duration is ${s} days`),{amount:e,lockDurationInDays:r,isValid:0===Object.keys(n).length,errors:n}},[o]),C=(0,p.useCallback)(e=>{f(r=>{const n=e.amount??r.amount,a=e.lockDurationInDays??r.lockDurationInDays;return y(n,a)})},[y]),j=(0,p.useCallback)(()=>$.isValid?(0,x.q_)($.amount,$.lockDurationInDays):"0",[$]),w=(0,p.useCallback)(()=>{v({step:"input"}),I(null),f({amount:"",lockDurationInDays:7,isValid:!1,errors:{}})},[]),F=(0,p.useCallback)(b(function*(){if($.isValid){v({step:"approve"}),I("approve");try{yield n($.amount)}catch(e){console.error("Approval failed:",e),v({step:"error",error:e instanceof Error?e.message:"Failed to approve ABX tokens"}),I(null)}}}),[$,n]),A=(0,p.useCallback)(b(function*(){if($.isValid){v({step:"create"}),I("create");try{yield a({amount:$.amount,lockDurationInDays:$.lockDurationInDays})}catch(e){console.error("Create lock failed:",e),v({step:"error",error:e instanceof Error?e.message:"Failed to create lock"}),I(null)}}}),[$,a]),D=(0,p.useCallback)(b(function*(){$.isValid&&e&&(t($.amount)?yield F():yield A())}),[$,e,t,F,A]),T=(0,p.useCallback)(b(function*(){v({step:"success",transactionHash:h}),yield Promise.all([r(),m()])}),[h,r,m]),[S,I]=(0,p.useState)(null);return(0,p.useEffect)(()=>{i?v(e=>({...e,step:"confirming",transactionHash:h})):l&&S?"approve"===S?(I(null),setTimeout(()=>{m().then(()=>{A()})},1e3)):"create"===S&&(I(null),T()):c&&(v({step:"error",error:c.message}),I(null))},[i,l,c,h,S,T,A,m]),{formState:$,updateFormState:C,flowState:k,resetFlow:w,executeFlow:D,executeApproval:F,executeCreateLock:A,votingPowerPreview:j(),userABXBalance:o(),needsApproval:!!$.isValid&&t($.amount),isProcessing:s||i,isConnected:!!e}}(),F=e=>{n({amount:e})},A=e=>{n({lockDurationInDays:e})},D=e=>{const r=parseFloat(v);if(r>0){const n=(r*e/100).toString();F(n)}};return(0,a.jsxs)(t.Flex,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(()=>{switch(h.step){case"approve":return(0,a.jsx)(t.Flex,{centered:!0,py:"$spacing20",children:(0,a.jsx)(c.Text,{variant:"body2",color:"$neutral2",textAlign:"center",children:"Approving ABX tokens for locking..."})});case"create":return(0,a.jsx)(t.Flex,{centered:!0,py:"$spacing20",children:(0,a.jsx)(c.Text,{variant:"body2",color:"$neutral2",textAlign:"center",children:"Creating your veABX lock..."})});case"confirming":return(0,a.jsxs)(t.Flex,{centered:!0,py:"$spacing20",gap:"$spacing8",children:[(0,a.jsx)(c.Text,{variant:"body2",color:"$neutral2",textAlign:"center",children:"Waiting for transaction confirmation..."}),h.transactionHash&&(0,a.jsxs)(c.Text,{variant:"body4",color:"$neutral3",textAlign:"center",children:["Tx: ",h.transactionHash.slice(0,10),"..."]})]});case"success":return(0,a.jsxs)(t.Flex,{centered:!0,py:"$spacing20",gap:"$spacing12",children:[(0,a.jsx)(c.Text,{variant:"body2",color:"$statusSuccess",textAlign:"center",children:"Lock created successfully! \ud83c\udf89"}),(0,a.jsx)(c.Text,{variant:"body3",color:"$neutral2",textAlign:"center",children:"Your veABX tokens will appear in your locks list shortly."}),h.transactionHash&&(0,a.jsxs)(c.Text,{variant:"body4",color:"$neutral3",textAlign:"center",children:["Tx: ",h.transactionHash.slice(0,10),"..."]})]});case"error":return(0,a.jsxs)(t.Flex,{centered:!0,py:"$spacing20",gap:"$spacing8",children:[(0,a.jsx)(c.Text,{variant:"body2",color:"$statusCritical",textAlign:"center",children:"Transaction failed"}),(0,a.jsx)(c.Text,{variant:"body3",color:"$neutral3",textAlign:"center",children:h.error})]});default:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{title:"Amount",onPercentageSelect:D}),(0,a.jsx)(o.Z,{value:r.amount,onValueChange:F,error:r.errors.amount,userBalance:v}),(0,a.jsx)(k,{value:r.lockDurationInDays,onValueChange:A}),r.errors.duration&&(0,a.jsx)(c.Text,{variant:"body3",color:"$statusCritical",mt:"$spacing8",textAlign:"center",children:r.errors.duration}),(0,a.jsx)(t.Flex,{mt:"$gap24",children:(0,a.jsx)(i.Z,{votingPower:f,lockDuration:r.lockDurationInDays})})]})}})(),(0,a.jsx)($,{onCreateClick:m,onCancelClick:w,isDisabled:!r.isValid||!j||C,isProcessing:C,buttonText:"success"===h.step?"Create Another Lock":y?"Approve & Create Lock":"Create Lock",showCancel:"input"===h.step})]})}var y=n(48763),C=n(74456),j=n(7602);function w(){const e=(0,l.useSporeColors)();(0,C.z)(c.Text,{variant:"body3",color:"$neutral2",fontSize:"$mdall"});return(0,a.jsxs)(t.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,a.jsx)(c.Text,{variant:"buttonLabel1",children:"Create a lock "}),(0,a.jsx)(j.Z,{width:"100%",my:"$spacing16",height:1}),(0,a.jsxs)(t.Flex,{row:!0,justifyContent:"space-between",gap:"$gap16",alignItems:"center",children:[(0,a.jsx)(t.Flex,{className:"left",row:!0,gap:"$gap12",height:50,width:50,borderRadius:"$roundedFull",backgroundColor:"$surface3",centered:!0,$sm:{display:"none"},children:(0,a.jsx)(t.Flex,{children:(0,a.jsx)(y.Z,{size:26,color:e.neutral1.val})})}),(0,a.jsx)(c.Text,{variant:"body4",color:"$neutral2",children:"When you lock tokens, you\u2019ll receive a veNFT (voting escrow NFT). You can increase your lock amount or extend the lock duration at any time."})]})]})}function F(){return(0,a.jsxs)(t.Flex,{mt:"$spacing24",width:"100%",px:"$spacing40",maxWidth:680,pb:"$spacing40",$xl:{px:"$spacing12",mx:"auto"},flexDirection:"column",gap:"$gap12",children:[(0,a.jsx)(w,{}),(0,a.jsx)(v,{})]})}}}]);
//# sourceMappingURL=9547.10c8fee2.chunk.js.map