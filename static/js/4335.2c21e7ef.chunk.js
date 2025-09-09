"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4335],{98236:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(97755),o=n(82746);function a({status:e="warning",icon:r,content:n}){const a={critical:{background:"$statusCritical2",color:"$statusCritical"},warning:{background:"$statusWarning2",color:"$statusWarning"},success:{background:"$statusSuccess2",color:"$statusSuccess"}};return(0,t.jsxs)(o.Flex,{row:!0,gap:"$spacing16",backgroundColor:a[e].background,p:"$spacing20",$md:{p:"$spacing16"},borderRadius:"$rounded12",borderWidth:1,borderColor:a[e].background,children:[(0,t.jsx)(o.Flex,{height:50,width:50,backgroundColor:a[e].background,centered:!0,borderRadius:"$roundedFull",children:r}),(0,t.jsx)(o.Flex,{flex:1,children:n})]})}},44335:(e,r,n)=>{n.r(r),n.d(r,{default:()=>Me});var t=n(97755),o=n(82746),a=n(20128),i=n(86683);const s=(0,a.createContext)(null),c=({children:e})=>{const[r]=(0,i.useSearchParams)(),n=r.get("tab"),o=r.get("lockId"),[c,l]=(0,a.useState)(n&&["Increase","Extend","Merge","Transfer"].includes(n)?n:"Increase"),[d]=(0,a.useState)(o),[u,p]=(0,a.useState)({increaseAmount:"",extendDays:0,extendToMaxLock:!1,selectedMergeLockId:"",transferToAddress:""});return(0,a.useEffect)(()=>{n&&["Increase","Extend","Merge","Transfer"].includes(n)&&l(n)},[n]),(0,t.jsx)(s.Provider,{value:{setActiveOption:l,activeOption:c,selectedLockId:d,formData:u,updateFormData:e=>{p(r=>({...r,...e}))}},children:e})},l=()=>{const e=(0,a.useContext)(s);if(!e)throw new Error("useModifyLock must be used within a ModifyLockProvider");return e};var d=n(41622),u=n(44441),p=n(19671),x=n(35021),g=n(36477),m=n(56156),h=n(62394),f=n(11692),b=n(80929),$=n(63933),v=n(17041),k=n(98256),j=n(59793),y=n(7677),w=n(67716);const C="0x2fc35FB4CaFBFbf2319cfe27E7816Fc18E87D946",T=[{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"voted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"escrowType",outputs:[{internalType:"enum IVotingEscrow.EscrowType",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"locked",outputs:[{components:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"end",type:"uint256"},{internalType:"bool",name:"isPermanent",type:"bool"}],internalType:"struct IVotingEscrow.LockedBalance",name:"",type:"tuple"}],stateMutability:"view",type:"function"}];function L(e){return(0,w.u)({address:C,abi:T,functionName:"voted",args:e?[BigInt(e)]:void 0,query:{enabled:!!e}})}function I(e){return(0,w.u)({address:C,abi:T,functionName:"escrowType",args:e?[BigInt(e)]:void 0,query:{enabled:!!e}})}function F(e){return(0,w.u)({address:C,abi:T,functionName:"locked",args:e?[BigInt(e)]:void 0,query:{enabled:!!e}})}function M(e,r,n,t,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void n(l)}s.done?r(c):Promise.resolve(c).then(t,o)}function D(e){return function(){var r=this,n=arguments;return new Promise(function(t,o){var a=e.apply(r,n);function i(e){M(a,t,o,i,s,"next",e)}function s(e){M(a,t,o,i,s,"throw",e)}i(void 0)})}}const A=v.default.button.withConfig({displayName:"ChangeLockAndOptionButton__Button",componentId:"sc-fa3ab452-0"})`
  all: unset;
  padding: 16px 10px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({$isDisabled:e,theme:r,$lock:n})=>e?r.surface2:n?r.surface2Hovered:r.accent1};
  color: ${({$isDisabled:e,theme:r,$lock:n})=>e||n?r.accent1:r.surface1};
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
`;function P(){const{activeOption:e,selectedLockId:r,formData:n}=l(),{address:i}=(0,m.m)(),[s,c]=((0,p.useSporeColors)(),(0,a.useState)(!1)),{data:u}=(0,d.G_)(r||void 0),{data:g}=L(n.selectedMergeLockId),{data:v}=I(n.selectedMergeLockId),{data:w}=F(n.selectedMergeLockId),{data:C}=I(r||void 0),{data:T}=F(r||void 0),{approveABX:M,increaseLockAmount:P,extendLockTime:S,lockPermanent:E,mergeLocks:_,transferLock:B,needsApproval:z,getFormattedABXBalance:N,isWritePending:R,isConfirming:W,isSuccess:Z,writeError:O,transactionHash:H,refetchAllowance:X}=(0,b.Y)(),{refetch:Y}=(0,d.Zz)(i),[q,V]=(0,a.useState)(null),[G,U]=(0,a.useState)(null);(0,a.useEffect)(()=>{if(Z&&G){if("approve"===G)console.log("Approval confirmed, proceeding with main action..."),U(null),setTimeout(()=>{X().then(()=>{J()})},1e3);else if("execute"===G){U(null);const e={increase:"Amount Increased",extend:"Lock Extended",permanent:"Lock Made Permanent",merge:"Locks Merged",transfer:"Lock Transferred"};h.Z.addPopup({type:f.k.LockSuccess,content:{type:"success",title:e[q]||"Lock Updated",description:`Successfully ${q} lock ${r}`,hash:H,action:q}},`lock-${q}-${H}`,8e3),Y(),V(null),c(!1)}}else if(O&&(q||G)){const e=O.message;if(e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user denied")||e.toLowerCase().includes("rejected by user"))h.Z.addPopup({type:f.k.LockError,content:{type:"error",title:"Transaction Cancelled",description:`${q} operation was cancelled by user`,action:q}},`lock-${q}-cancelled-${Date.now()}`,5e3);else{const r={increase:"Increase Amount",extend:"Extend Lock",permanent:"Make Permanent",merge:"Merge Locks",transfer:"Transfer Lock"};h.Z.addPopup({type:f.k.LockError,content:{type:"error",title:`${r[q]||"Lock Update"} Failed`,description:`Failed to ${q} lock: ${e}`,action:q}},`lock-${q}-error-${Date.now()}`,1e4)}V(null),U(null),c(!1)}},[Z,O,q,G,H,r,Y,X]);const Q=()=>{if(!i||!r)return!1;switch(e){case"Increase":{if(!(0,x.Rm)(n.increaseAmount).isValid)return!1;const e=parseFloat(N()),r=parseFloat(n.increaseAmount);return r>0&&r<=e}case"Extend":return(n.extendDays>0||n.extendToMaxLock)&&!!u&&!u.permanent;case"Merge":var t;if(!n.selectedMergeLockId||!u||u.managed)return!1;if(!0===g)return!1;if(!0===(null===(t=w)||void 0===t?void 0:t.isPermanent))return!1;if(T&&!T.isPermanent){const e=Math.floor(Date.now()/1e3);if(Number(T.end)<=e)return!1}return!0;case"Transfer":return!(!n.transferToAddress||!u)&&(!!(0,y.U)(n.transferToAddress)&&("0x0000000000000000000000000000000000000000"!==n.transferToAddress&&(!i||n.transferToAddress.toLowerCase()!==i.toLowerCase())));default:return!1}},J=function(){var t=D(function*(){if(Q()&&!s){U("execute");try{switch(e){case"Increase":yield P({tokenId:r,amount:n.increaseAmount});break;case"Extend":if(!u)return;if(n.extendToMaxLock)yield E(r);else{const e=n.extendDays,t=Math.floor(Date.now()/1e3),o=parseInt(u.lockEnd),a=Math.max(0,(0,x.i8)(o-t))+e;yield S({tokenId:r,lockDurationInDays:a})}break;case"Merge":if(!n.selectedMergeLockId||!u)return;yield _({fromTokenId:n.selectedMergeLockId,toTokenId:r});break;case"Transfer":if(!n.transferToAddress||!u)return;yield B({tokenId:r,toAddress:n.transferToAddress})}}catch(t){throw console.error("Main transaction failed:",t),U(null),t}}});return function(){return t.apply(this,arguments)}}(),K=function(){var r=D(function*(){if(Q()&&!s){c(!0);try{switch(e){case"Increase":V("increase");break;case"Extend":V(n.extendToMaxLock?"permanent":"extend");break;case"Merge":V("merge");break;case"Transfer":V("transfer")}"Increase"===e&&z(n.increaseAmount)?(console.log("Approval needed, starting approval transaction..."),U("approve"),yield M(n.increaseAmount)):yield J()}catch(r){if(console.error("Transaction failed:",r),q){const e=r instanceof Error?r.message:"Unknown error";if(e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user denied")||e.toLowerCase().includes("rejected by user"))h.Z.addPopup({type:f.k.LockError,content:{type:"error",title:"Transaction Cancelled",description:`${q} operation was cancelled by user`,action:q}},`lock-${q}-cancelled-${Date.now()}`,5e3);else{const r={increase:"Increase Amount",extend:"Extend Lock",permanent:"Make Permanent",merge:"Merge Locks",transfer:"Transfer Lock"};h.Z.addPopup({type:f.k.LockError,content:{type:"error",title:`${r[q]||"Lock Update"} Failed`,description:`Failed to ${q} lock: ${e}`,action:q}},`lock-${q}-error-${Date.now()}`,1e4)}}V(null),U(null)}finally{c(!1)}}});return function(){return r.apply(this,arguments)}}(),ee=!Q()||s||R||W,re=s||R||W;(0,$.s0)();return(0,t.jsx)(o.Flex,{mt:"$spacing36",row:!0,gap:"$gap12",alignItems:"center",children:(0,t.jsx)(A,{onClick:K,$isDisabled:ee,children:(0,t.jsxs)(o.Flex,{row:!0,gap:"$gap4",alignItems:"center",children:[re&&(0,t.jsx)(k.n,{size:18}),(0,t.jsx)(j.Text,{variant:"buttonLabel3",color:"inherit",children:re?"Processing":"Increase"===e&&n.increaseAmount&&z(n.increaseAmount)?"Approve & Increase":(()=>{switch(e){case"Increase":return n.increaseAmount&&""!==n.increaseAmount?"Increase":"Amount required";case"Extend":return n.extendToMaxLock?"Convert to permanent":"Extend lock time";case"Merge":return"Merge";case"Transfer":return"Transfer";default:return"Update"}})()})]})})})}var S=n(67179),E=n(89366);const _=v.default.input.withConfig({displayName:"Range__StyledRange",componentId:"sc-1a0ac455-0"})`
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
`,B=v.default.div.withConfig({displayName:"Range__DatalistPoints",componentId:"sc-1a0ac455-1"})`
  position: absolute;
  bottom: -12px;
  left: 0;
  right: 0;
  height: 4px;
  pointer-events: none;
`,z=v.default.div.withConfig({displayName:"Range__DatalistPoint",componentId:"sc-1a0ac455-2"})`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  top: 0;
  left: ${e=>e.position}%;

  &.active {
    background: rgba(255, 255, 255, 0.85);
  }
`,N=({value:e=0,onChange:r,min:n=0,max:a=100,label:i})=>{const s=a-n,c=s>0?[25,50,75]:[],l=(0,p.useSporeColors)(),d=s>0?(e-n)/s*100:0;return(0,t.jsxs)(o.Flex,{flexDirection:"column",width:"100%",my:"$gap24",gap:"$gap12",children:[i&&(0,t.jsx)(j.Text,{variant:"body3",color:"$neutral1",textAlign:"center",children:i}),(0,t.jsxs)(o.Flex,{row:!0,gap:"$gap12",alignItems:"center",width:"100%",children:[(0,t.jsx)(j.Text,{variant:"body4",color:"$neutral3",children:n}),(0,t.jsxs)(o.Flex,{position:"relative",grow:!0,children:[(0,t.jsx)(_,{type:"range",min:n,max:a,value:e,onChange:e=>{var n;const t=Number(e.target.value);null===(n=r)||void 0===n||n(t)},list:"range-datalist",style:{background:`linear-gradient(\n              to right,\n              ${l.accent1Hovered.val} 0%,\n              ${l.accent1Hovered.val} ${d}%,\n              ${l.accent2.val} ${d}%,\n               ${l.accent2.val} 100%\n            )`}}),(0,t.jsx)(B,{children:c.map((e,r)=>(0,t.jsx)(z,{position:e,className:e<=d?"active":""},r))}),(0,t.jsx)("datalist",{id:"range-datalist",children:c.map((e,r)=>(0,t.jsx)("option",{value:n+s*e/100},r))})]}),(0,t.jsx)(j.Text,{variant:"body4",color:"$neutral3",children:a})]})]})};function R(){const{selectedLockId:e,formData:r,updateFormData:n}=l(),{data:i}=(0,d.G_)(e||void 0),{remainingDays:s,maxExtensionDays:c,maxLockDays:u,isAlreadyPermanent:p}=(0,a.useMemo)(()=>{var e;const r=Math.floor(Date.now()/1e3),n=i?parseInt(i.lockEnd):r,t=Math.max(0,(0,x.i8)(n-r)),o=(0,x.i8)(x.Q_);return{remainingDays:t,maxLockDays:o,maxExtensionDays:o-t,isAlreadyPermanent:(null===(e=i)||void 0===e?void 0:e.permanent)||!1}},[i]),g=(0,a.useCallback)(e=>{n({extendToMaxLock:e,extendDays:0})},[n]);return(0,t.jsxs)(o.Flex,{mt:"$gap36",children:[(0,t.jsxs)(o.Flex,{borderWidth:1,borderColor:"$surface3",borderRadius:"$rounded12",p:"$padding12",children:[(0,t.jsxs)(o.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,t.jsx)(S.r,{variant:"branded",switchSize:"small",checked:p||r.extendToMaxLock,onCheckedChange:g,disabled:p}),(0,t.jsx)(j.Text,{variant:"buttonLabel3",children:"Permanent Lock Mode"}),(0,t.jsx)(E.q,{size:20,color:"$neutral3"})]}),(0,t.jsx)(j.Text,{variant:"body4",mt:"$gap12",children:p?"This lock is already permanent and has maximum 1-to-1 voting power.":"When activated, converts this lock to a permanent lock with maximum 1-to-1 voting power. Permanent locks never expire and don't need to be extended."}),p&&(0,t.jsx)(j.Text,{variant:"body4",mt:"$gap12",color:"$neutral2Temp",children:"\u2713 Lock is already permanent"})]}),!p&&!r.extendToMaxLock&&c>0&&(0,t.jsx)(N,{value:r.extendDays,onChange:e=>n({extendDays:e}),min:0,max:c,label:`Extend by ${r.extendDays} days`}),!p&&r.extendToMaxLock&&(0,t.jsx)(o.Flex,{mt:"$gap24",p:"$padding12",borderWidth:1,borderColor:"$accent1",borderRadius:"$rounded12",children:(0,t.jsx)(j.Text,{variant:"body3",color:"$neutral2Temp",children:"Will convert to permanent lock with maximum voting power (1:1 ratio)"})}),!p&&c<=0&&!r.extendToMaxLock&&(0,t.jsx)(o.Flex,{mt:"$gap24",p:"$padding12",borderWidth:1,borderColor:"$neutral3",borderRadius:"$rounded12",children:(0,t.jsx)(j.Text,{variant:"body3",color:"$neutral2",children:"This lock is already at maximum duration. You can convert it to a permanent lock for maximum voting power."})})]})}var W=n(71960),Z=n(84308);function O(){const{address:e}=(0,m.m)(),{getFormattedABXBalance:r,needsApproval:n,isWritePending:a}=(0,b.Y)(),{formData:i,updateFormData:s}=l(),c=i.increaseAmount,d=r(),u=(0,x.Rm)(c),p=!u.isValid;let g=u.error;if(u.isValid&&c){const e=parseFloat(d);parseFloat(c)>e&&(g="Insufficient ABX balance")}return(0,t.jsxs)(o.Flex,{mt:"$gap36",children:[(0,t.jsx)(Z.Z,{title:"Add to lock",onPercentageSelect:e=>{const r=parseFloat(d);if(r>0){const n=Number((r*e/100).toFixed(3)).toString();s({increaseAmount:n})}}}),(0,t.jsx)(o.Flex,{mt:"$gap12",children:(0,t.jsx)(W.Z,{value:c,onValueChange:e=>{s({increaseAmount:e})},error:g,userBalance:d})}),e&&c&&!p&&(0,t.jsx)(o.Flex,{mt:"$gap12",p:"$spacing12",backgroundColor:"$surface3",borderRadius:"$rounded8",children:(0,t.jsx)(j.Text,{variant:"body4",color:"$neutral2",children:n(c)?`Approval required for ${c} ABX`:`Ready to increase lock by ${c} ABX`})})]})}var H=n(126),X=n(38046);const Y=v.default.div.withConfig({displayName:"SelectLock__DropdownWrapper",componentId:"sc-d9aeb57-0"})`
  position: relative;
  width: 100%;
`,q=v.default.button.withConfig({displayName:"SelectLock__SelectedOption",componentId:"sc-d9aeb57-1"})`
  width: 100%;
  padding: 12px 16px;
  background-color: ${({backgroundColor:e})=>e||"#ffffff"};
  border: 1px solid ${({borderColor:e})=>e||"#ffffff"};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: ${({color:e})=>e||"#4a90e2"};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 8px 8px;
  }

  &:hover {
    border-color: ${({hoverColor:e})=>e||"#4a90e2"};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    border-color: ${({hoverColor:e})=>e||"#4a90e2"};
  }
`,V=v.default.ul.withConfig({displayName:"SelectLock__DropdownMenu",componentId:"sc-d9aeb57-2"})`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({backgroundColor:e})=>e||"#ffffff"};
  border: 1px solid ${({borderColor:e})=>e||"#ffffff"};
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: ${({isOpen:e})=>e?1:0};
  transform: ${({isOpen:e,isAbove:r})=>e?"translateY(0)":r?"translateY(-90%)":"translateY(-10px)"};
  top: ${({isAbove:e})=>e?"auto":"100%"};
  bottom: ${({isAbove:e})=>e?"100%":"auto"};
  margin: ${({isAbove:e})=>e?"0 0 4px 0":"4px 0 0 0"};
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  transition: all 0.3s ease;
  z-index: 10;
`,G=v.default.li.withConfig({displayName:"SelectLock__DropdownItem",componentId:"sc-d9aeb57-3"})`
  padding: 5px 16px;
  list-style: none;
  cursor: pointer;
  font-size: 16px;
  color: ${({color:e})=>e||"#4a90e2"};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({HoverBackgroundColor:e})=>e||"#4a90e2"};
    color: ${({hoverColor:e})=>e||"#ffffff"};
  }
`,U=v.default.span.withConfig({displayName:"SelectLock__Arrow",componentId:"sc-d9aeb57-4"})`
  display: inline-block;
  border: solid ${({borderColor:e})=>e||"#4a90e2"};
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 8px;
  transform: ${({isOpen:e})=>e?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,Q=({options:e,defaultOption:r,onSelect:n})=>{const[o,i]=(0,a.useState)(!1),[s,c]=(0,a.useState)(!1),[l,d]=(0,a.useState)(r||e[0]),u=(0,a.useRef)(null),x=(0,a.useRef)(null),g=(0,p.useSporeColors)();(0,a.useEffect)(()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&i(!1)},r=()=>{if(u.current&&x.current){const e=u.current.getBoundingClientRect(),r=x.current.offsetHeight,n=window.innerHeight-e.bottom,t=e.top;c(n<r&&t>r)}};return o&&(r(),window.addEventListener("resize",r)),document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e),window.removeEventListener("resize",r)}},[o]);const m={backgroundColor:g.surface1Hovered.val,hoverColor:g.surface3.val,borderColor:g.surface2Hovered.val,color:g.neutral1.val},h={borderColor:g.accent3.val},f={backgroundColor:g.surface1Hovered.val,borderColor:g.surface2Hovered.val},b={HoverBackgroundColor:g.surface2Hovered.val,color:g.neutral1.val,hoverColor:g.accent1.val};return(0,t.jsxs)(Y,{ref:u,children:[(0,t.jsxs)(q,{onClick:()=>{i(!o)},...m,children:[(0,t.jsxs)(j.Text,{variant:"buttonLabel3",children:[" ",l]}),(0,t.jsx)(U,{isOpen:o,...h})]}),(0,t.jsx)(V,{ref:x,isOpen:o,isAbove:s,...f,children:e.map(e=>(0,t.jsx)(G,{onClick:()=>(e=>{d(e),n(e),i(!1)})(e),...b,children:(0,t.jsx)(j.Text,{variant:"body3",children:e})},e))})]})},J=(0,v.default)(o.Flex).withConfig({displayName:"Merge__ErrorContainer",componentId:"sc-b238fcfd-0"})`
  background-color: ${({$colors:e})=>e.surface2.val};
  border: 1px solid ${({$colors:e})=>e.statusCritical.val};
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`,K=(0,v.default)(o.Flex).withConfig({displayName:"Merge__WarningContainer",componentId:"sc-b238fcfd-1"})`
  background-color: ${({$colors:e})=>e.surface2.val};
  border: 1px solid ${({$colors:e})=>e.accentWarning.val};
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`;function ee(){const{address:e}=(0,m.m)(),{selectedLockId:r,formData:n,updateFormData:i}=l(),{data:s,isLoading:c}=(0,d.Zz)(e),u=(0,p.useSporeColors)(),[g,h]=(0,a.useState)([]),[f,b]=(0,a.useState)([]),{data:$}=L(n.selectedMergeLockId),{data:v}=I(n.selectedMergeLockId),{data:y}=F(n.selectedMergeLockId),{data:w}=I(r||void 0),{data:C}=F(r||void 0),T=(0,a.useMemo)(()=>{var e;return(null===(e=s)||void 0===e?void 0:e.find(e=>e.id===r))||null},[s,r]);(0,a.useEffect)(()=>{var e;if(!n.selectedMergeLockId||!r)return h([]),void b([]);const t=[],o=[];if(!0===$&&t.push("Source lock has voted this epoch and cannot be merged until next Thursday"),void 0!==v&&0!==v&&o.push(`Source lock type: ${v} (should be 0 for NORMAL locks)`),void 0!==w&&0!==w&&o.push(`Target lock type: ${w} (should be 0 for NORMAL locks)`),!0===(null===(e=y)||void 0===e?void 0:e.isPermanent)&&t.push("Permanent locks cannot be merged from (only merged into)"),C&&!C.isPermanent){const e=Math.floor(Date.now()/1e3);Number(C.end)<=e&&t.push("Target lock has expired and cannot receive merges")}h(t),b(o)},[n.selectedMergeLockId,r,$,v,w,y,C]);const M=(0,a.useMemo)(()=>s&&T?s.filter(e=>{if(e.id===T.id)return!1;if(e.managed||T.managed)return!1;if(!e.permanent){const r=Date.now()/1e3;if(parseInt(e.lockEnd)<=r)return!1}return!0}):[],[s,T]);if(c)return(0,t.jsxs)(o.Flex,{mt:"$gap36",alignItems:"center",justifyContent:"center",py:"$spacing20",children:[(0,t.jsx)(k.n,{size:20}),(0,t.jsx)(j.Text,{variant:"body3",color:"$neutral2",ml:"$spacing8",children:"Loading locks..."})]});if(!T)return(0,t.jsx)(o.Flex,{mt:"$gap36",children:(0,t.jsxs)(j.Text,{children:["Selected lock not found. Lock ID: ",r]})});const D=(0,a.useMemo)(()=>s&&T?s.filter(e=>{if(e.id===T.id)return!1;if(e.managed||T.managed)return!1;const r=BigInt(T.amount);return BigInt(e.amount)>r}):[],[s,T]);if(0===M.length)return(0,t.jsxs)(o.Flex,{mt:"$gap36",children:[(0,t.jsxs)(j.Text,{variant:"body2",color:"$neutral2",mb:"$spacing12",children:["No mergeable locks found for Lock #",T.id]}),D.length>0&&(0,t.jsx)(J,{$colors:u,children:(0,t.jsxs)(o.Flex,{row:!0,gap:"$gap8",alignItems:"flex-start",children:[(0,t.jsx)(H.AlertTriangle,{size:"$icon.16",color:u.statusCritical.val}),(0,t.jsxs)(o.Flex,{flexDirection:"column",flex:1,children:[(0,t.jsxs)(j.Text,{variant:"body3",color:u.statusCritical.val,mb:"$spacing8",children:["You have ",D.length," lock(s) with more ABX that cannot be merged into this lock."]}),(0,t.jsx)(j.Text,{variant:"body3",color:"$neutral2",children:"To merge locks, you must merge smaller locks into larger ones. Try selecting one of your larger locks instead."})]})]})})]});const A=(0,a.useMemo)(()=>M.map(e=>{const r=(0,x.QT)(e.amount),n=(0,x.g5)(e.votingPower);return`Lock #${e.id} - ${r} ABX (${n} vp)`}),[M]);a.useEffect(()=>{M.length>0&&!n.selectedMergeLockId&&i({selectedMergeLockId:M[0].id})},[M,n.selectedMergeLockId,i]);const P=(0,a.useCallback)(e=>{var r;const n=null===(r=e.match(/Lock #(\d+)/))||void 0===r?void 0:r[1];n&&i({selectedMergeLockId:n})},[i]);return(0,t.jsxs)(o.Flex,{mt:"$gap36",children:[(0,t.jsxs)(j.Text,{variant:"buttonLabel3",color:"$neutral2",children:["Select a lock to merge with Lock #",T.id]}),(0,t.jsx)(o.Flex,{mt:"$gap12",children:(0,t.jsx)(Q,{options:A,defaultOption:A[0]||"No locks available",onSelect:P})}),g.length>0&&(0,t.jsx)(J,{$colors:u,children:(0,t.jsx)(o.Flex,{flexDirection:"column",gap:"$gap8",children:g.map((e,r)=>(0,t.jsxs)(o.Flex,{row:!0,gap:"$gap8",alignItems:"flex-start",children:[(0,t.jsx)(H.AlertTriangle,{size:"$icon.16",color:u.statusCritical.val}),(0,t.jsx)(j.Text,{variant:"body3",color:u.statusCritical.val,children:e})]},r))})}),f.length>0&&(0,t.jsx)(K,{$colors:u,children:(0,t.jsx)(o.Flex,{flexDirection:"column",gap:"$gap8",children:f.map((e,r)=>(0,t.jsxs)(o.Flex,{row:!0,gap:"$gap8",alignItems:"flex-start",children:[(0,t.jsx)(X.Clock,{size:"$icon.16",color:u.statusCritical.val}),(0,t.jsx)(j.Text,{variant:"body3",color:u.statusCritical.val,children:e})]},r))})}),(0,t.jsxs)(o.Flex,{flexDirection:"column",gap:"$gap8",mt:"$spacing12",children:[(0,t.jsxs)(o.Flex,{row:!0,gap:"$gap12",mt:"$spacing12",padding:"$spacing12",borderWidth:1,borderColor:"$statusCritical",borderRadius:"$rounded12",children:[(0,t.jsx)(H.AlertTriangle,{size:18,color:"$statusCritical"}),(0,t.jsx)(j.Text,{variant:"body3",color:"$statusCritical",children:"Merging is permanent and cannot be undone. The source lock will be destroyed."})]}),(0,t.jsxs)(j.Text,{variant:"body3",color:"$neutral3",children:["Merging Lock #",n.selectedMergeLockId||"..."," into Lock #",T.id," (",(0,x.QT)(T.amount)," ABX)."]})]})]})}var re=n(98236),ne=n(18015),te=n(29790),oe=n(74456),ae=n(2042),ie=n(60623),se=n(46433);function ce(){const{setActiveOption:e,activeOption:r}=l(),{toggleModal:n}=(0,ne.X)(se.ModalName.VotingRewards),a=(0,$.s0)(),i=(0,oe.z)(j.Text,{variant:"body3",color:"$statusWarning"}),s=(0,oe.z)(j.Text,{variant:"body3",color:"$statusCritical"});return(0,t.jsxs)(o.Flex,{flexDirection:"column",mt:"$gap24",children:["Increase"===r&&(0,t.jsx)(re.Z,{status:"warning",icon:(0,t.jsx)(ae.X,{color:"$statusWarning",size:30}),content:(0,t.jsx)(o.Flex,{children:(0,t.jsxs)(i,{children:[(0,t.jsx)(i,{fontWeight:"$medium",children:"Note:"})," ","You can increase the lock amount or"," ",(0,t.jsx)(i,{role:"button",onPress:()=>e("Extend"),textDecorationLine:"underline",cursor:"pointer",children:"Extend the lock time"}),". These actions will increase your voting power. There is no limit for the locked amount."," ",(0,t.jsx)(i,{role:"button",onPress:n,textDecorationLine:"underline",cursor:"pointer",children:"Learn more"})," ","on how voting works."]})})}),"Extend"===r&&(0,t.jsx)(re.Z,{status:"warning",icon:(0,t.jsx)(ae.X,{color:"$statusWarning",size:30}),content:(0,t.jsx)(o.Flex,{children:(0,t.jsxs)(i,{children:[(0,t.jsx)(i,{fontWeight:"$medium",children:"Note"}),": You can extend the locked time or"," ",(0,t.jsx)(i,{role:"button",onPress:()=>e("Increase"),textDecorationLine:"underline",cursor:"pointer",children:"increase the lock amount"}),". These actions will increase your voting power. The maximum lock time is 4 years."," ",(0,t.jsx)(i,{role:"button",onPress:n,textDecorationLine:"underline",cursor:"pointer",children:"Learn more"})," ","on how voting works."]})})}),"Merge"===r&&(0,t.jsx)(re.Z,{status:"critical",icon:(0,t.jsx)(ie.v,{color:"$statusCritical",size:30}),content:(0,t.jsxs)(o.Flex,{flexDirection:"column",gap:"$gap12",children:[(0,t.jsxs)(s,{children:[(0,t.jsx)(s,{fontWeight:"$medium",children:"Warning:"})," ",(0,t.jsx)(s,{children:"Merging two locks keeps the longer lock time and combines both amounts to increase your final voting power."})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)(s,{children:"Merging will reset any rewards and rebases. Before continuing, please sure you have"})," ",(0,t.jsx)(s,{role:"button",onPress:()=>a("/dash"),textDecorationLine:"underline",cursor:"pointer",children:"claimed all available rewards."})]})]})}),"Transfer"===r&&(0,t.jsx)(re.Z,{status:"critical",icon:(0,t.jsx)(ie.v,{color:"$statusCritical",size:30}),content:(0,t.jsx)(o.Flex,{flexDirection:"column",gap:"$gap12",children:(0,t.jsxs)(s,{children:[(0,t.jsx)(s,{fontWeight:"$medium",children:"Warning:"})," ",(0,t.jsx)(s,{children:"Transferring a lock will also transfer any rewards and rebases! Before continuing, please make sure you have"})," ",(0,t.jsx)(s,{role:"button",onPress:()=>a("/dash"),textDecorationLine:"underline",cursor:"pointer",children:"claimed all available rewards."})]})})}),(0,t.jsx)(te.Z,{})]})}var le=n(7602),de=n(58963),ue=n(2745),pe=n(77197),xe=n(89444);function ge({options:e}){const{activeOption:r,setActiveOption:n}=l(),[i,s]=(0,a.useState)(!1);return(0,t.jsx)(de.J2,{children:(0,t.jsxs)(de.J2.Trigger,{onPress:()=>s(!i),children:[(0,t.jsxs)(o.Flex,{display:"none",$md:{display:"flex",flexDirection:"row",justifyContent:"space-between"},py:"$spacing12",gap:"$gap8",children:[(0,t.jsx)(j.Text,{variant:"buttonLabel3",children:r}),(0,t.jsx)("button",{role:"button",className:"button-clear",children:(0,t.jsx)(pe.E,{size:20})})]}),(0,t.jsx)(ue.$,{isOpen:i,children:(0,t.jsx)(o.Flex,{flexDirection:"column",gap:"$gap12",$md:{pb:"$spacing24",px:"$spacing12"},children:e.map(e=>(0,t.jsx)(de.J2.Close,{asChild:!0,children:(0,t.jsx)("button",{role:"button",className:"button-clear",onClick:()=>(e=>{s(!1),n(e)})(e),children:(0,t.jsxs)(o.Flex,{row:!0,alignItems:"center",gap:"$gap12",children:[(0,t.jsx)(j.Text,{variant:"buttonLabel2",children:e}),r===e&&(0,t.jsx)(xe.CheckCircleFilled,{size:16})]})},e)},e))})})]})})}const me=v.default.button.withConfig({displayName:"ToggleOptions__StyledButton",componentId:"sc-c1064824-0"})`
  all: unset;
  padding: 16px 34px;
  color: ${e=>e.$colors.neutral2.val};
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    color: ${e=>e.$colors.neutral1.val};
  }

  &.active {
    border-color: ${e=>e.$colors.accent1.val};
    color: ${e=>e.$colors.neutral1.val};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;function he({}){const{activeOption:e,setActiveOption:r}=l(),n=(0,p.useSporeColors)(),a=["Increase","Extend","Merge","Transfer"];return(0,t.jsxs)(o.Flex,{flexDirection:"column",children:[(0,t.jsx)(o.Flex,{row:!0,gap:"$gap12",px:"$spacing8",justifyContent:"space-between",$md:{display:"none"},children:a.map(o=>(0,t.jsx)(me,{role:"button",$colors:n,className:""+(e===o?"active":""),onClick:()=>r(o),children:(0,t.jsx)(j.Text,{variant:"buttonLabel3",color:"inherit",children:o})},o))}),(0,t.jsx)(ge,{options:a}),(0,t.jsx)(le.Z,{width:"100%",mt:"-1px",height:1})]})}var fe=n(91128),be=n(88759);function $e(e,r,n,t,o,a,i){try{var s=e[a](i),c=s.value}catch(l){return void n(l)}s.done?r(c):Promise.resolve(c).then(t,o)}function ve(e){return function(){var r=this,n=arguments;return new Promise(function(t,o){var a=e.apply(r,n);function i(e){$e(a,t,o,i,s,"next",e)}function s(e){$e(a,t,o,i,s,"throw",e)}i(void 0)})}}const ke=(0,v.default)(o.Flex).withConfig({displayName:"Transfer__ErrorContainer",componentId:"sc-4d3c183-0"})`
  background-color: ${({$colors:e})=>e.surface2.val};
  border: 1px solid ${({$colors:e})=>e.statusCritical.val};
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`,je=(0,v.default)(o.Flex).withConfig({displayName:"Transfer__InputContainer",componentId:"sc-4d3c183-1"})`
  border-color: ${({$colors:e,$hasError:r})=>r?e.statusCritical.val:e.surface3.val};

  &:focus-within {
    border-color: ${({$colors:e,$hasError:r})=>r?e.statusCritical.val:e.neutral2.val};
  }
`;v.default.button.withConfig({displayName:"Transfer__Button",componentId:"sc-4d3c183-2"})`
  all: unset;
  padding: 10px 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.surface1};
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({theme:e})=>e.accent1Hovered};
  }
`;function ye(){const{formData:e,updateFormData:r}=l(),{address:n}=(0,m.m)(),i=(0,p.useSporeColors)(),[s,c]=(0,a.useState)(null),d=(0,a.useCallback)(e=>e?(0,y.U)(e)?"0x0000000000000000000000000000000000000000"===e?(c("Cannot transfer to zero address"),!1):n&&e.toLowerCase()===n.toLowerCase()?(c("Cannot transfer to your own address"),!1):(c(null),!0):(c("Invalid Ethereum address format"),!1):(c(null),!0),[n]),u=(0,a.useCallback)(e=>{r({transferToAddress:e}),d(e)},[r,d]),x=(0,a.useCallback)(ve(function*(){const e=yield navigator.clipboard.readText();u(e)}),[u]);return(0,t.jsxs)(o.Flex,{mt:"$gap36",children:[(0,t.jsx)(o.Flex,{row:!0,justifyContent:"space-between",alignItems:"center",gap:"$gap12",mb:"$gap12",children:(0,t.jsx)(j.Text,{variant:"buttonLabel3",children:"Transfer to"})}),(0,t.jsx)(o.Flex,{row:!0,gap:"$gap8",alignItems:"center",children:(0,t.jsxs)(je,{grow:!0,flexDirection:"column",gap:"$gap8",borderWidth:1,borderRadius:"$rounded12",transition:"border-color 0.3s ease",row:!0,alignItems:"center",justifyContent:"space-between",px:"$padding16",$colors:i,$hasError:!!s,children:[(0,t.jsx)(fe.II,{py:"$padding20",placeholderTextColor:"$neutral3",placeholder:"0x1dc25...890",fontSize:"$medium",backgroundColor:"none",width:"100%",value:e.transferToAddress,onChangeText:u}),(0,t.jsx)(o.Flex,{onPress:x,cursor:"pointer",transition:"opacity 0.2s ease",opacity:.65,hoverStyle:{opacity:1},children:(0,t.jsx)(be.T,{size:"$icon.20",color:"$neutral1"})})]})}),s?(0,t.jsx)(ke,{$colors:i,children:(0,t.jsxs)(o.Flex,{row:!0,gap:"$gap8",alignItems:"center",children:[(0,t.jsx)(H.AlertTriangle,{size:"$icon.16",color:i.statusCritical.val}),(0,t.jsx)(j.Text,{variant:"body3",color:i.statusCritical.val,children:s})]})}):(0,t.jsx)(j.Text,{variant:"body3",color:"$neutral3",mt:"$gap12",children:"Wallet address where the lock will be transferred. This action cannot be undone."}),e.transferToAddress&&!s&&(0,t.jsx)(o.Flex,{mt:"$gap12",p:"$padding12",backgroundColor:"$surface2",borderRadius:"$rounded8",children:(0,t.jsxs)(j.Text,{variant:"body3",color:"$neutral2",children:["Lock will be transferred to: ",e.transferToAddress]})})]})}function we(){const{address:e}=(0,m.m)(),{activeOption:r,selectedLockId:n,formData:a}=l(),{data:i}=(0,d.G_)(n||void 0),{data:s}=(0,d.Zz)(e),c=(0,p.useSporeColors)(),{lockTime:h,votingPower:f}=(()=>{if(!i)return{lockTime:0,votingPower:"0"};const e=parseInt(i.lockEnd),n=Math.floor(Date.now()/1e3),t=Math.max(0,(0,x.i8)(e-n));switch(r){case"Increase":if(!a.increaseAmount)return{lockTime:t,votingPower:i.votingPower};try{const e=(0,g.b)(BigInt(i.amount),18),r=parseFloat(e)+parseFloat(a.increaseAmount);if(i.permanent)return{lockTime:t,votingPower:r.toString()};return{lockTime:t,votingPower:(0,x.q_)(r.toString(),t)}}catch(o){return console.error("Error calculating increase values:",o),{lockTime:t,votingPower:i.votingPower}}case"Extend":try{const e=(0,g.b)(BigInt(i.amount),18);if(a.extendToMaxLock)return{lockTime:0,votingPower:e};if(a.extendDays>0){const r=t+a.extendDays;return{lockTime:r,votingPower:(0,x.q_)(e,r)}}return{lockTime:t,votingPower:i.votingPower}}catch(o){return console.error("Error calculating extend values:",o),{lockTime:t,votingPower:i.votingPower}}case"Merge":if(!a.selectedMergeLockId)return{lockTime:t,votingPower:i.votingPower};try{if(!s)return{lockTime:t,votingPower:i.votingPower};const e=s.find(e=>e.id===a.selectedMergeLockId);if(!e)return{lockTime:t,votingPower:i.votingPower};const r=BigInt(i.amount)+BigInt(e.amount),o=(0,g.b)(r,18);let c,l,d=!1;if(i.permanent||e.permanent)d=!0,c=0;else{const r=parseInt(i.lockEnd),t=parseInt(e.lockEnd),o=Math.max(r,t),a=Math.max(0,o-n);c=(0,x.i8)(a)}if(d){const r=parseFloat(i.votingPower),n=parseFloat(e.votingPower);l=(r+n).toString()}else l=(0,x.q_)(o,c);return{lockTime:c,votingPower:l}}catch(o){return console.error("Error calculating merge values:",o),{lockTime:t,votingPower:i.votingPower}}default:return{lockTime:t,votingPower:i.votingPower}}})();return(0,t.jsxs)(o.Flex,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${c.surface2.variable} 0%, transparent 100%)`},children:[(0,t.jsx)(he,{}),"Increase"===r&&(0,t.jsx)(O,{}),"Extend"===r&&(0,t.jsx)(R,{}),"Merge"===r&&(0,t.jsx)(ee,{}),"Transfer"===r&&(0,t.jsx)(ye,{}),(0,t.jsx)(o.Flex,{mt:"$gap24",children:(0,t.jsx)(u.Z,{votingPower:f,lockDuration:h})}),(0,t.jsx)(ce,{}),(0,t.jsx)(P,{})]})}var Ce=n(58870),Te=n(48763),Le=n(60759),Ie=n(25236);function Fe(){const e=(0,p.useSporeColors)(),r=(0,Le.GS)(),{selectedLockId:n}=l(),{data:a,isLoading:s,error:c}=(0,d.G_)(n||void 0),u=((0,oe.z)(j.Text,{variant:"body3",color:"$neutral2",fontSize:"$mdall"}),()=>(0,t.jsxs)(o.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,t.jsx)(i.Link,{to:"/locks",className:"text-decoration-none",children:(0,t.jsx)(o.Flex,{backgroundColor:"$accent2",transition:"background-color 0.2s ease",hoverStyle:{backgroundColor:"$accent2Hovered"},padding:"$spacing8",borderRadius:"$rounded8",children:(0,t.jsx)(Ie.B,{size:16})})}),(0,t.jsx)(j.Text,{variant:r.md?"subheading1":"heading3",children:"Manage Lock"})]}));return s?(0,t.jsxs)(o.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,t.jsx)(u,{}),(0,t.jsx)(le.Z,{width:"100%",my:"$spacing16",height:1}),(0,t.jsx)(j.Text,{variant:"body3",color:"$neutral2",children:"Loading lock details..."})]}):c||!a?(0,t.jsxs)(o.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,t.jsx)(u,{}),(0,t.jsx)(le.Z,{width:"100%",my:"$spacing16",height:1}),(0,t.jsx)(j.Text,{variant:"body3",color:"$statusCritical",children:n?"Failed to load lock details":"No lock selected"})]}):(0,t.jsxs)(o.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,t.jsx)(u,{}),(0,t.jsx)(le.Z,{width:"100%",my:"$spacing16",height:1}),(0,t.jsxs)(o.Flex,{row:!0,justifyContent:"space-between",gap:"$gap12",alignItems:"center",$md:{flexDirection:"column",alignItems:"flex-start"},children:[(0,t.jsxs)(o.Flex,{className:"left",row:!0,gap:"$gap12",children:[(0,t.jsx)(o.Flex,{height:40,width:40,centered:!0,borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface2Hovered",style:{background:`linear-gradient(90deg, ${e.surface2.variable} 0%, ${e.slate.variable} 40%, ${e.surface2.variable} 60%, ${e.slate.variable} 100%)`},children:(0,t.jsx)(Ce.Z,{size:24,color:e.neutral1Hovered.val})}),(0,t.jsxs)(o.Flex,{flexDirection:"column",justifyContent:"center",gap:"$gap8",children:[(0,t.jsxs)(o.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,t.jsxs)(j.Text,{variant:"buttonLabel2",children:["Lock #",a.id]}),(0,t.jsx)(o.Flex,{children:(0,t.jsx)(Te.Z,{size:14,color:e.accent1Hovered.val})})]}),(0,t.jsxs)(o.Flex,{row:!0,gap:"$gap16",alignItems:"center",children:[(0,t.jsxs)(j.Text,{variant:"body3",color:"$neutral2",children:[(0,x.QT)(a.amount)," ABX"]}),(0,t.jsx)(j.Text,{variant:"body3",color:"$neutral2",children:a.permanent?"Permanent Lock":(0,x.ad)(a.lockEnd)})]})]})]}),(0,t.jsx)(o.Flex,{children:(0,t.jsx)(i.Link,{className:"text-decoration-none inline-flex",to:"/locks",children:(0,t.jsx)(j.Text,{py:"$spacing8",px:"$spacing12",variant:"buttonLabel3",borderRadius:"$roundedFull",backgroundColor:"$surface3",cursor:"pointer",transition:"all 0.2s ease-in-out",color:"$neutral1",hoverStyle:{backgroundColor:"$surface1",color:"$neutral2Temp"},children:"Change"})})})]})]})}function Me(){return(0,t.jsx)(c,{children:(0,t.jsxs)(o.Flex,{mt:"$spacing24",width:"100%",px:"$spacing40",maxWidth:680,pb:"$spacing40",$xl:{px:"$spacing12",mx:"auto"},flexDirection:"column",gap:"$gap12",children:[(0,t.jsx)(Fe,{}),(0,t.jsx)(we,{})]})})}},71960:(e,r,n)=>{n.d(r,{Z:()=>p});var t=n(97755),o=n(58870),a=n(20128),i=n(17041),s=n(60759),c=n(19671),l=n(82746),d=n(59793);const u=i.default.input.withConfig({displayName:"AmoutInput__StyledInput",componentId:"sc-5e52a37b-0"})`
  text-align: right;
  padding: 12px 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px 0;
  }
`;function p({value:e,onValueChange:r,error:n,userBalance:i}){const p=(0,a.useRef)(null),x=(0,s.GS)(),g=(0,c.useSporeColors)();return(0,t.jsxs)(l.Flex,{children:[(0,t.jsxs)(l.Flex,{row:!0,mt:"$gap24",px:"$spacing16",py:"$spacing16",borderWidth:1,borderColor:"$surface3",justifyContent:"space-between",alignItems:"center",gap:"$gap12",borderRadius:"$rounded12",tabIndex:0,onPress:()=>{var e;return null===(e=p.current)||void 0===e?void 0:e.focus()},cursor:"ibeam",focusWithinStyle:{borderColor:"$neutral2"},transition:"border-color 0.3s ease",$md:{px:"$spacing12",py:"$spacing4",mt:"$gap12"},children:[(0,t.jsxs)(l.Flex,{backgroundColor:"$slate",py:"$padding16",px:"$padding20",borderRadius:"$rounded12",row:!0,gap:"$gap8",alignItems:"center",borderWidth:1,borderColor:"$surface3",$md:{py:"$padding12",px:"$padding12",gap:"$gap4"},children:[(0,t.jsx)(o.Z,{size:x.md?16:20}),(0,t.jsx)(d.Text,{variant:x.md?"buttonLabel3":"buttonLabel2",children:"ABX"})]}),(0,t.jsxs)(l.Flex,{flexDirection:"column",gap:"$gap8",flex:1,children:[(0,t.jsx)(u,{ref:p,onChange:e=>(e=>{let n=e.replace(/[^0-9.]/g,"");const t=n.split(".");t.length>2&&(n=t[0]+"."+t.slice(1).join("")),r(n)})(e.target.value),type:"text",value:e,style:{color:g.neutral1.val}}),(0,t.jsx)(d.Text,{variant:"body3",color:"$neutral3",textAlign:"right",children:"~$0"})]})]}),(0,t.jsx)(l.Flex,{row:!0,justifyContent:"space-between",alignItems:"center",mt:"$spacing6"})]})}},84308:(e,r,n)=>{n.d(r,{Z:()=>g});var t=n(97755),o=n(17828),a=n(82820),i=n(80929),s=n(20128),c=n(75440),l=n(17041),d=n(19671),u=n(60759),p=n(82746),x=n(59793);function g({title:e,onPercentageSelect:r}){const[n,g]=(0,s.useState)(!1),m=(0,d.useSporeColors)(),h=(0,u.GS)(),{getFormattedABXBalance:f}=(0,i.Y)(),b=Number(f()).toFixed(2),$=l.default.button.withConfig({displayName:"AvailableAmoutAndBalancePercentage__Button",componentId:"sc-352ead5-0"})`
    all: unset;
    padding: 2px 10px;
    background-color: ${m.surface2Hovered.val};
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
  `;return(0,t.jsxs)(p.Flex,{children:[(0,t.jsxs)(p.Flex,{row:!0,justifyContent:"space-between",gap:"$gap12",children:[(0,t.jsx)(x.Text,{variant:h.md?"buttonLabel3":"subheading2",children:e}),(0,t.jsxs)(p.Flex,{row:!0,justifyContent:"space-between",gap:"$gap12",children:[(0,t.jsxs)(p.Flex,{row:!0,justifyContent:"space-between",gap:"$gap8",children:[(0,t.jsx)(x.Text,{variant:h.sm?"body4":"body3",color:"$neutral2",children:"Balance:"}),(0,t.jsxs)(x.Text,{variant:h.sm?"body4":"body3",children:[b||"0"," ABX"]})]}),(0,t.jsx)(p.Flex,{children:(0,t.jsx)("button",{role:"button",type:"button",className:"button-clear",onClick:()=>g(!n),children:(0,t.jsxs)(p.Flex,{py:"$spacing2",px:"$spacing6",backgroundColor:"$surface3",borderRadius:"$rounded12",row:!0,alignItems:"center",gap:"$gap4",$sm:{px:"$spacing4"},children:[(0,t.jsx)(x.Text,{variant:"body4",ml:2,children:"%"}),(0,t.jsx)(p.Flex,{transform:[{rotate:n?"180deg":"0deg"}],children:(0,t.jsx)(p.Flex,{children:(0,t.jsx)(c.Z,{size:14,color:m.neutral2.val})})})]})})})]})]}),(0,t.jsx)(o.M,{children:n&&(0,t.jsx)(a.E.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{height:{duration:.3,ease:"easeInOut"},opacity:{duration:.2,ease:"easeOut"}},style:{overflow:"hidden",width:"100%"},children:(0,t.jsxs)(p.Flex,{row:!0,justifyContent:"space-between",gap:"$gap12",alignItems:"center",mt:"$spacing12",pt:"$spacing16",borderTopWidth:1,borderColor:"$surface3",$md:{justifyContent:"flex-end"},children:[(0,t.jsx)(x.Text,{variant:"body3",color:"$neutral3",$md:{display:"none"},children:"Select a share of your balance"}),(0,t.jsx)(p.Flex,{row:!0,justifyContent:"space-between",gap:"$gap8",children:["10","25","50","75","100"].map(e=>(0,t.jsx)(p.Flex,{children:(0,t.jsx)($,{role:"button",onClick:()=>{var n;return null===(n=r)||void 0===n?void 0:n(parseInt(e))},children:(0,t.jsxs)(x.Text,{variant:"body4",fontWeight:"$medium",children:[e,"%"]})})},e))})]})})})]})}},44441:(e,r,n)=>{n.d(r,{Z:()=>d});var t=n(97755),o=n(74456),a=n(59793),i=n(82746),s=n(35021);const c=(0,o.z)(a.Text,{textAlign:"right"}),l=(0,o.z)(i.Flex,{flex:1,width:"100%",flexDirection:"column",className:"lock-time",p:"$padding12",borderRadius:"$rounded12",gap:"$gap8",backgroundColor:"$surface2Hovered"});function d({votingPower:e="0",lockDuration:r=0}){return(0,t.jsxs)(i.Flex,{row:!0,justifyContent:"space-between",gap:"$gap12",$md:{flexDirection:"column"},children:[(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{variant:"body3",color:"$neutral3",children:"Lock time"}),(0,t.jsx)(c,{variant:"heading3",children:(e=>{if(0===e)return"Permanent";if(e<30)return`${e} days`;if(e<365){const r=Math.round(e/30);return`${r} month${r>1?"s":""}`}const r=Math.floor(e/365),n=e%365;if(0===n)return`${r} year${r>1?"s":""}`;const t=Math.round(n/30);return 0===t?`${r} year${r>1?"s":""}`:3===r&&t>=12?"4 years":`${r} year${r>1?"s":""} ${t} month${t>1?"s":""}`})(r)})]}),(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{variant:"body3",color:"$neutral3",children:"Estimated voting power"}),(0,t.jsxs)(c,{variant:"heading3",children:[(0,s.g5)(e)," veABX"]})]})]})}}}]);
//# sourceMappingURL=4335.2c21e7ef.chunk.js.map