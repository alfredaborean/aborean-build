"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2312],{98236:(e,r,n)=>{n.d(r,{Z:()=>a});var o=n(97755),t=n(82746);function a({status:e="warning",icon:r,content:n}){const a={critical:{background:"$statusCritical2",color:"$statusCritical"},warning:{background:"$statusWarning2",color:"$statusWarning"},success:{background:"$statusSuccess2",color:"$statusSuccess"}};return(0,o.jsxs)(t.Flex,{row:!0,gap:"$spacing16",backgroundColor:a[e].background,p:"$spacing20",$md:{p:"$spacing16"},borderRadius:"$rounded12",borderWidth:1,borderColor:a[e].background,children:[(0,o.jsx)(t.Flex,{height:50,width:50,backgroundColor:a[e].background,centered:!0,borderRadius:"$roundedFull",children:r}),(0,o.jsx)(t.Flex,{flex:1,children:n})]})}},12312:(e,r,n)=>{n.r(r),n.d(r,{default:()=>qe});var o=n(97755),t=n(82746),a=n(20128),i=n(86683);const s=(0,a.createContext)(null),c=({children:e})=>{const[r]=(0,i.useSearchParams)(),n=r.get("tab"),t=r.get("lockId"),[c,l]=(0,a.useState)(n&&["Increase","Extend","Merge","Transfer"].includes(n)?n:"Increase"),[d]=(0,a.useState)(t),[u,p]=(0,a.useState)({increaseAmount:"",extendDays:0,extendToMaxLock:!1,selectedMergeLockId:"",transferToAddress:""});return(0,a.useEffect)(()=>{n&&["Increase","Extend","Merge","Transfer"].includes(n)&&l(n)},[n]),(0,o.jsx)(s.Provider,{value:{setActiveOption:l,activeOption:c,selectedLockId:d,formData:u,updateFormData:e=>{p(r=>({...r,...e}))}},children:e})},l=()=>{const e=(0,a.useContext)(s);if(!e)throw new Error("useModifyLock must be used within a ModifyLockProvider");return e};var d=n(41622),u=n(44441),p=n(19671),x=n(35021),g=n(36477),h=n(56156),m=n(62394),f=n(11692),b=n(80929),v=n(63933),k=n(17041),$=n(59793),j=n(35715),w=n(7677),y=n(67716);const C="0x2fc35FB4CaFBFbf2319cfe27E7816Fc18E87D946",T=[{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"voted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"escrowType",outputs:[{internalType:"enum IVotingEscrow.EscrowType",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"locked",outputs:[{components:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"end",type:"uint256"},{internalType:"bool",name:"isPermanent",type:"bool"}],internalType:"struct IVotingEscrow.LockedBalance",name:"",type:"tuple"}],stateMutability:"view",type:"function"}];function L(e){return(0,y.u)({address:C,abi:T,functionName:"voted",args:e?[BigInt(e)]:void 0,query:{enabled:!!e}})}function I(e){return(0,y.u)({address:C,abi:T,functionName:"escrowType",args:e?[BigInt(e)]:void 0,query:{enabled:!!e}})}function F(e){return(0,y.u)({address:C,abi:T,functionName:"locked",args:e?[BigInt(e)]:void 0,query:{enabled:!!e}})}function M(e,r,n,o,t,a,i){try{var s=e[a](i),c=s.value}catch(l){return void n(l)}s.done?r(c):Promise.resolve(c).then(o,t)}function D(e){return function(){var r=this,n=arguments;return new Promise(function(o,t){var a=e.apply(r,n);function i(e){M(a,o,t,i,s,"next",e)}function s(e){M(a,o,t,i,s,"throw",e)}i(void 0)})}}const P=k.default.button.withConfig({displayName:"ChangeLockAndOptionButton__Button",componentId:"sc-e83c502a-0"})`
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
`;function A(){const{activeOption:e,selectedLockId:r,formData:n}=l(),{address:i}=(0,h.m)(),[s,c]=((0,p.useSporeColors)(),(0,a.useState)(!1)),{data:u}=(0,d.G_)(r||void 0),{data:g}=L(n.selectedMergeLockId),{data:k}=I(n.selectedMergeLockId),{data:y}=F(n.selectedMergeLockId),{data:C}=I(r||void 0),{data:T}=F(r||void 0),{approveABX:M,increaseLockAmount:A,extendLockTime:E,lockPermanent:S,mergeLocks:_,transferLock:z,needsApproval:N,getFormattedABXBalance:B,isWritePending:R,isConfirming:q,isSuccess:W,writeError:O,transactionHash:Z,refetchAllowance:H}=(0,b.Y)(),{refetch:X}=(0,d.Zz)(i),[V,Y]=(0,a.useState)(null),[U,G]=(0,a.useState)(null);(0,a.useEffect)(()=>{if(W&&U){if("approve"===U)console.log("Approval confirmed, proceeding with main action..."),G(null),setTimeout(()=>{H().then(()=>{J()})},1e3);else if("execute"===U){G(null);const e={increase:"Amount Increased",extend:"Lock Extended",permanent:"Lock Made Permanent",merge:"Locks Merged",transfer:"Lock Transferred"};m.Z.addPopup({type:f.k.LockSuccess,content:{type:"success",title:e[V]||"Lock Updated",description:`Successfully ${V} lock ${r}`,hash:Z,action:V}},`lock-${V}-${Z}`,8e3),X(),Y(null),c(!1)}}else if(O&&(V||U)){const e=O.message;if(e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user denied")||e.toLowerCase().includes("rejected by user"))m.Z.addPopup({type:f.k.LockError,content:{type:"error",title:"Transaction Cancelled",description:`${V} operation was cancelled by user`,action:V}},`lock-${V}-cancelled-${Date.now()}`,5e3);else{const r={increase:"Increase Amount",extend:"Extend Lock",permanent:"Make Permanent",merge:"Merge Locks",transfer:"Transfer Lock"};m.Z.addPopup({type:f.k.LockError,content:{type:"error",title:`${r[V]||"Lock Update"} Failed`,description:`Failed to ${V} lock: ${e}`,action:V}},`lock-${V}-error-${Date.now()}`,1e4)}Y(null),G(null),c(!1)}},[W,O,V,U,Z,r,X,H]);const Q=()=>{if(!i||!r)return!1;switch(e){case"Increase":{if(!(0,x.Rm)(n.increaseAmount).isValid)return!1;const e=parseFloat(B()),r=parseFloat(n.increaseAmount);return r>0&&r<=e}case"Extend":return(n.extendDays>0||n.extendToMaxLock)&&!!u&&!u.permanent;case"Merge":var o;if(!n.selectedMergeLockId||!u||u.managed)return!1;if(!0===g)return!1;if(!0===(null===(o=y)||void 0===o?void 0:o.isPermanent))return!1;if(T&&!T.isPermanent){const e=Math.floor(Date.now()/1e3);if(Number(T.end)<=e)return!1}return!0;case"Transfer":return!(!n.transferToAddress||!u)&&(!!(0,w.U)(n.transferToAddress)&&("0x0000000000000000000000000000000000000000"!==n.transferToAddress&&(!i||n.transferToAddress.toLowerCase()!==i.toLowerCase())));default:return!1}},J=function(){var o=D(function*(){if(Q()&&!s){G("execute");try{switch(e){case"Increase":yield A({tokenId:r,amount:n.increaseAmount});break;case"Extend":if(!u)return;if(n.extendToMaxLock)yield S(r);else{const e=n.extendDays,o=Math.floor(Date.now()/1e3),t=parseInt(u.lockEnd),a=Math.max(0,(0,x.i8)(t-o))+e;yield E({tokenId:r,lockDurationInDays:a})}break;case"Merge":if(!n.selectedMergeLockId||!u)return;yield _({fromTokenId:n.selectedMergeLockId,toTokenId:r});break;case"Transfer":if(!n.transferToAddress||!u)return;yield z({tokenId:r,toAddress:n.transferToAddress})}}catch(o){throw console.error("Main transaction failed:",o),G(null),o}}});return function(){return o.apply(this,arguments)}}(),K=function(){var r=D(function*(){if(Q()&&!s){c(!0);try{switch(e){case"Increase":Y("increase");break;case"Extend":Y(n.extendToMaxLock?"permanent":"extend");break;case"Merge":Y("merge");break;case"Transfer":Y("transfer")}"Increase"===e&&N(n.increaseAmount)?(console.log("Approval needed, starting approval transaction..."),G("approve"),yield M(n.increaseAmount)):yield J()}catch(r){if(console.error("Transaction failed:",r),V){const e=r instanceof Error?r.message:"Unknown error";if(e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user denied")||e.toLowerCase().includes("rejected by user"))m.Z.addPopup({type:f.k.LockError,content:{type:"error",title:"Transaction Cancelled",description:`${V} operation was cancelled by user`,action:V}},`lock-${V}-cancelled-${Date.now()}`,5e3);else{const r={increase:"Increase Amount",extend:"Extend Lock",permanent:"Make Permanent",merge:"Merge Locks",transfer:"Transfer Lock"};m.Z.addPopup({type:f.k.LockError,content:{type:"error",title:`${r[V]||"Lock Update"} Failed`,description:`Failed to ${V} lock: ${e}`,action:V}},`lock-${V}-error-${Date.now()}`,1e4)}}Y(null),G(null)}finally{c(!1)}}});return function(){return r.apply(this,arguments)}}(),ee=!Q()||s||R||q,re=s||R||q,ne=(0,v.s0)();return(0,o.jsxs)(t.Flex,{mt:"$spacing36",row:!0,gap:"$gap12",alignItems:"center",children:[(0,o.jsx)(P,{$lock:!0,$isDisabled:!1,onClick:()=>ne("/locks"),children:(0,o.jsx)($.Text,{variant:"buttonLabel3",color:"inherit",children:"Change Lock"})}),(0,o.jsx)(P,{onClick:K,$isDisabled:ee,children:(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap8",alignItems:"center",children:[re&&(0,o.jsx)(j.n,{size:20}),(0,o.jsx)($.Text,{variant:"buttonLabel3",color:"inherit",children:re?"Processing...":"Increase"===e&&N(n.increaseAmount)?"Approve & Increase":(()=>{switch(e){case"Increase":return"Increase";case"Extend":return n.extendToMaxLock?"Convert to Permanent":"Extend Lock Time";case"Merge":return"Merge";case"Transfer":return"Transfer";default:return"Update"}})()})]})})]})}var E=n(52964),S=n(20868);const[_,z]=(0,S.I)({name:"NoNfts",getIcon:e=>(0,o.jsx)(E.ny,{viewBox:"0 0 24 24",fill:"none",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M6.327 20.539q-1.2 0-2.033-.833t-.832-2.033t.832-2.033t2.033-.832t2.033.832t.832 2.033q0 .503-.172.972t-.497.841v-.29q.808.402 1.685.603T12 20q3.35 0 5.675-2.325T20 12h1q0 1.864-.709 3.507q-.708 1.643-1.923 2.859t-2.858 1.925T12 21q-1.065 0-2.084-.238t-1.98-.731q-.361.263-.773.385t-.836.122m.001-1q.778 0 1.321-.544t.543-1.322t-.544-1.321t-1.322-.543t-1.321.544q-.544.545-.544 1.322t.545 1.321t1.322.544M12 14.865q-1.2 0-2.033-.832T9.135 12t.832-2.033T12 9.135t2.033.832t.833 2.033t-.833 2.033t-2.033.833M3 12q0-1.864.709-3.507t1.924-2.859T8.49 3.709T12 3q1.066 0 2.084.238t1.98.731q.37-.244.774-.366t.835-.122q1.2 0 2.023.823t.823 2.023t-.823 2.033t-2.023.832t-2.033-.832t-.832-2.033q0-.503.172-.972t.497-.842v.29q-.808-.401-1.685-.602Q12.916 4 12 4Q8.65 4 6.325 6.325T4 12zm14.673-3.808q.77 0 1.308-.553t.538-1.312t-.538-1.303t-1.308-.543q-.76 0-1.312.54q-.553.54-.553 1.313t.544 1.315t1.321.543m0-1.865"})})});var N=n(74456),B=n(4925),R=n(88861);const q=(0,N.z)(B.Kq,{width:40,height:20,borderRadius:20,borderWidth:0,cursor:"pointer",padding:"10px 0",variants:{checked:{true:{backgroundColor:"$absGreen"},false:{backgroundColor:"$accent2"}}},defaultVariants:{checked:!1}}),W=(0,N.z)(B.Kq,{width:18,height:18,backgroundColor:"$neutral1",borderRadius:18}),O=(0,R.r)({Frame:q,Thumb:W});function Z({checked:e,onCheckedChange:r,disabled:n}){return(0,o.jsx)(O,{checked:e,onCheckedChange:n?void 0:r,disabled:n,children:(0,o.jsx)(O.Thumb,{animation:"quicker"})})}const H=k.default.input.withConfig({displayName:"Range__StyledRange",componentId:"sc-1a0ac455-0"})`
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
`,X=k.default.div.withConfig({displayName:"Range__DatalistPoints",componentId:"sc-1a0ac455-1"})`
  position: absolute;
  bottom: -12px;
  left: 0;
  right: 0;
  height: 4px;
  pointer-events: none;
`,V=k.default.div.withConfig({displayName:"Range__DatalistPoint",componentId:"sc-1a0ac455-2"})`
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
`,Y=({value:e=0,onChange:r,min:n=0,max:a=100,label:i})=>{const s=a-n,c=s>0?[25,50,75]:[],l=(0,p.useSporeColors)(),d=s>0?(e-n)/s*100:0;return(0,o.jsxs)(t.Flex,{flexDirection:"column",width:"100%",my:"$gap24",gap:"$gap12",children:[i&&(0,o.jsx)($.Text,{variant:"body3",color:"$neutral1",textAlign:"center",children:i}),(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap12",alignItems:"center",width:"100%",children:[(0,o.jsx)($.Text,{variant:"body4",color:"$neutral3",children:n}),(0,o.jsxs)(t.Flex,{position:"relative",grow:!0,children:[(0,o.jsx)(H,{type:"range",min:n,max:a,value:e,onChange:e=>{var n;const o=Number(e.target.value);null===(n=r)||void 0===n||n(o)},list:"range-datalist",style:{background:`linear-gradient(\n              to right,\n              ${l.accent1Hovered.val} 0%,\n              ${l.accent1Hovered.val} ${d}%,\n              ${l.accent2.val} ${d}%,\n               ${l.accent2.val} 100%\n            )`}}),(0,o.jsx)(X,{children:c.map((e,r)=>(0,o.jsx)(V,{position:e,className:e<=d?"active":""},r))}),(0,o.jsx)("datalist",{id:"range-datalist",children:c.map((e,r)=>(0,o.jsx)("option",{value:n+s*e/100},r))})]}),(0,o.jsx)($.Text,{variant:"body4",color:"$neutral3",children:a})]})]})};function U(){const{selectedLockId:e,formData:r,updateFormData:n}=l(),{data:i}=(0,d.G_)(e||void 0),{remainingDays:s,maxExtensionDays:c,maxLockDays:u,isAlreadyPermanent:p}=(0,a.useMemo)(()=>{var e;const r=Math.floor(Date.now()/1e3),n=i?parseInt(i.lockEnd):r,o=Math.max(0,(0,x.i8)(n-r)),t=(0,x.i8)(x.Q_);return{remainingDays:o,maxLockDays:t,maxExtensionDays:t-o,isAlreadyPermanent:(null===(e=i)||void 0===e?void 0:e.permanent)||!1}},[i]),g=(0,a.useCallback)(e=>{n({extendToMaxLock:e,extendDays:0})},[n]);return(0,o.jsxs)(t.Flex,{mt:"$gap36",children:[(0,o.jsxs)(t.Flex,{borderWidth:1,borderColor:"$surface3",borderRadius:"$rounded12",p:"$padding12",children:[(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,o.jsx)(Z,{checked:p||r.extendToMaxLock,onCheckedChange:g,disabled:p}),(0,o.jsx)($.Text,{variant:"buttonLabel3",children:"Permanent Lock Mode"}),(0,o.jsx)(_,{size:20,color:"$neutral3"})]}),(0,o.jsx)($.Text,{variant:"body4",mt:"$gap12",children:p?"This lock is already permanent and has maximum 1-to-1 voting power.":"When activated, converts this lock to a permanent lock with maximum 1-to-1 voting power. Permanent locks never expire and don't need to be extended."}),p&&(0,o.jsx)($.Text,{variant:"body4",mt:"$gap12",color:"$accent1",children:"\u2713 Lock is already permanent"})]}),!p&&!r.extendToMaxLock&&c>0&&(0,o.jsx)(Y,{value:r.extendDays,onChange:e=>n({extendDays:e}),min:0,max:c,label:`Extend by ${r.extendDays} days`}),!p&&r.extendToMaxLock&&(0,o.jsx)(t.Flex,{mt:"$gap24",p:"$padding12",borderWidth:1,borderColor:"$accent1",borderRadius:"$rounded12",children:(0,o.jsx)($.Text,{variant:"body3",color:"$accent1",children:"Will convert to permanent lock with maximum voting power (1:1 ratio)"})}),!p&&c<=0&&!r.extendToMaxLock&&(0,o.jsx)(t.Flex,{mt:"$gap24",p:"$padding12",borderWidth:1,borderColor:"$neutral3",borderRadius:"$rounded12",children:(0,o.jsx)($.Text,{variant:"body3",color:"$neutral2",children:"This lock is already at maximum duration. You can convert it to a permanent lock for maximum voting power."})})]})}var G=n(71960),Q=n(84308);function J(){const{address:e}=(0,h.m)(),{getFormattedABXBalance:r,needsApproval:n,isWritePending:a}=(0,b.Y)(),{formData:i,updateFormData:s}=l(),c=i.increaseAmount,d=r(),u=(0,x.Rm)(c),p=!u.isValid;let g=u.error;if(u.isValid&&c){const e=parseFloat(d);parseFloat(c)>e&&(g="Insufficient ABX balance")}return(0,o.jsxs)(t.Flex,{mt:"$gap36",children:[(0,o.jsx)(Q.Z,{title:"Add to lock",onPercentageSelect:e=>{const r=parseFloat(d);if(r>0){const n=Number((r*e/100).toFixed(3)).toString();s({increaseAmount:n})}}}),(0,o.jsx)(t.Flex,{mt:"$gap12",children:(0,o.jsx)(G.Z,{value:c,onValueChange:e=>{s({increaseAmount:e})},error:g,userBalance:d})}),e&&c&&!p&&(0,o.jsx)(t.Flex,{mt:"$gap12",p:"$spacing12",backgroundColor:"$surface3",borderRadius:"$rounded8",children:(0,o.jsx)($.Text,{variant:"body4",color:"$neutral2",children:n(c)?`Approval required for ${c} ABX`:`Ready to increase lock by ${c} ABX`})})]})}var K=n(126),ee=n(38046);const re=k.default.div.withConfig({displayName:"SelectLock__DropdownWrapper",componentId:"sc-d9aeb57-0"})`
  position: relative;
  width: 100%;
`,ne=k.default.button.withConfig({displayName:"SelectLock__SelectedOption",componentId:"sc-d9aeb57-1"})`
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
`,oe=k.default.ul.withConfig({displayName:"SelectLock__DropdownMenu",componentId:"sc-d9aeb57-2"})`
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
`,te=k.default.li.withConfig({displayName:"SelectLock__DropdownItem",componentId:"sc-d9aeb57-3"})`
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
`,ae=k.default.span.withConfig({displayName:"SelectLock__Arrow",componentId:"sc-d9aeb57-4"})`
  display: inline-block;
  border: solid ${({borderColor:e})=>e||"#4a90e2"};
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 8px;
  transform: ${({isOpen:e})=>e?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,ie=({options:e,defaultOption:r,onSelect:n})=>{const[t,i]=(0,a.useState)(!1),[s,c]=(0,a.useState)(!1),[l,d]=(0,a.useState)(r||e[0]),u=(0,a.useRef)(null),x=(0,a.useRef)(null),g=(0,p.useSporeColors)();(0,a.useEffect)(()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&i(!1)},r=()=>{if(u.current&&x.current){const e=u.current.getBoundingClientRect(),r=x.current.offsetHeight,n=window.innerHeight-e.bottom,o=e.top;c(n<r&&o>r)}};return t&&(r(),window.addEventListener("resize",r)),document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e),window.removeEventListener("resize",r)}},[t]);const h={backgroundColor:g.surface1Hovered.val,hoverColor:g.surface3.val,borderColor:g.surface2Hovered.val,color:g.neutral1.val},m={borderColor:g.accent3.val},f={backgroundColor:g.surface1Hovered.val,borderColor:g.surface2Hovered.val},b={HoverBackgroundColor:g.surface2Hovered.val,color:g.neutral1.val,hoverColor:g.accent1.val};return(0,o.jsxs)(re,{ref:u,children:[(0,o.jsxs)(ne,{onClick:()=>{i(!t)},...h,children:[(0,o.jsxs)($.Text,{variant:"buttonLabel3",children:[" ",l]}),(0,o.jsx)(ae,{isOpen:t,...m})]}),(0,o.jsx)(oe,{ref:x,isOpen:t,isAbove:s,...f,children:e.map(e=>(0,o.jsx)(te,{onClick:()=>(e=>{d(e),n(e),i(!1)})(e),...b,children:(0,o.jsx)($.Text,{variant:"body3",children:e})},e))})]})},se=(0,k.default)(t.Flex).withConfig({displayName:"Merge__ErrorContainer",componentId:"sc-b238fcfd-0"})`
  background-color: ${({$colors:e})=>e.surface2.val};
  border: 1px solid ${({$colors:e})=>e.statusCritical.val};
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`,ce=(0,k.default)(t.Flex).withConfig({displayName:"Merge__WarningContainer",componentId:"sc-b238fcfd-1"})`
  background-color: ${({$colors:e})=>e.surface2.val};
  border: 1px solid ${({$colors:e})=>e.accentWarning.val};
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`;function le(){const{address:e}=(0,h.m)(),{selectedLockId:r,formData:n,updateFormData:i}=l(),{data:s,isLoading:c}=(0,d.Zz)(e),u=(0,p.useSporeColors)(),[g,m]=(0,a.useState)([]),[f,b]=(0,a.useState)([]),{data:v}=L(n.selectedMergeLockId),{data:k}=I(n.selectedMergeLockId),{data:w}=F(n.selectedMergeLockId),{data:y}=I(r||void 0),{data:C}=F(r||void 0),T=(0,a.useMemo)(()=>{var e;return(null===(e=s)||void 0===e?void 0:e.find(e=>e.id===r))||null},[s,r]);(0,a.useEffect)(()=>{var e;if(!n.selectedMergeLockId||!r)return m([]),void b([]);const o=[],t=[];if(!0===v&&o.push("Source lock has voted this epoch and cannot be merged until next Thursday"),void 0!==k&&0!==k&&t.push(`Source lock type: ${k} (should be 0 for NORMAL locks)`),void 0!==y&&0!==y&&t.push(`Target lock type: ${y} (should be 0 for NORMAL locks)`),!0===(null===(e=w)||void 0===e?void 0:e.isPermanent)&&o.push("Permanent locks cannot be merged from (only merged into)"),C&&!C.isPermanent){const e=Math.floor(Date.now()/1e3);Number(C.end)<=e&&o.push("Target lock has expired and cannot receive merges")}m(o),b(t)},[n.selectedMergeLockId,r,v,k,y,w,C]);const M=(0,a.useMemo)(()=>s&&T?s.filter(e=>{if(e.id===T.id)return!1;if(e.managed||T.managed)return!1;if(!e.permanent){const r=Date.now()/1e3;if(parseInt(e.lockEnd)<=r)return!1}return!0}):[],[s,T]);if(c)return(0,o.jsxs)(t.Flex,{mt:"$gap36",alignItems:"center",justifyContent:"center",py:"$spacing20",children:[(0,o.jsx)(j.n,{size:20}),(0,o.jsx)($.Text,{variant:"body3",color:"$neutral2",ml:"$spacing8",children:"Loading locks..."})]});if(!T)return(0,o.jsx)(t.Flex,{mt:"$gap36",children:(0,o.jsxs)($.Text,{children:["Selected lock not found. Lock ID: ",r]})});const D=(0,a.useMemo)(()=>s&&T?s.filter(e=>{if(e.id===T.id)return!1;if(e.managed||T.managed)return!1;const r=BigInt(T.amount);return BigInt(e.amount)>r}):[],[s,T]);if(0===M.length)return(0,o.jsxs)(t.Flex,{mt:"$gap36",children:[(0,o.jsxs)($.Text,{variant:"body2",color:"$neutral2",mb:"$spacing12",children:["No mergeable locks found for Lock #",T.id]}),D.length>0&&(0,o.jsx)(se,{$colors:u,children:(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap8",alignItems:"flex-start",children:[(0,o.jsx)(K.AlertTriangle,{size:"$icon.16",color:u.statusCritical.val}),(0,o.jsxs)(t.Flex,{flexDirection:"column",flex:1,children:[(0,o.jsxs)($.Text,{variant:"body3",color:u.statusCritical.val,mb:"$spacing8",children:["You have ",D.length," lock(s) with more ABX that cannot be merged into this lock."]}),(0,o.jsx)($.Text,{variant:"body3",color:"$neutral2",children:"To merge locks, you must merge smaller locks into larger ones. Try selecting one of your larger locks instead."})]})]})})]});const P=(0,a.useMemo)(()=>M.map(e=>{const r=(0,x.QT)(e.amount),n=(0,x.g5)(e.votingPower);return`Lock #${e.id} - ${r} ABX (${n} vp)`}),[M]);a.useEffect(()=>{M.length>0&&!n.selectedMergeLockId&&i({selectedMergeLockId:M[0].id})},[M,n.selectedMergeLockId,i]);const A=(0,a.useCallback)(e=>{var r;const n=null===(r=e.match(/Lock #(\d+)/))||void 0===r?void 0:r[1];n&&i({selectedMergeLockId:n})},[i]);return(0,o.jsxs)(t.Flex,{mt:"$gap36",children:[(0,o.jsxs)($.Text,{variant:"buttonLabel3",color:"$neutral2",children:["Select a lock to merge with Lock #",T.id]}),(0,o.jsx)(t.Flex,{mt:"$gap12",children:(0,o.jsx)(ie,{options:P,defaultOption:P[0]||"No locks available",onSelect:A})}),g.length>0&&(0,o.jsx)(se,{$colors:u,children:(0,o.jsx)(t.Flex,{flexDirection:"column",gap:"$gap8",children:g.map((e,r)=>(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap8",alignItems:"flex-start",children:[(0,o.jsx)(K.AlertTriangle,{size:"$icon.16",color:u.statusCritical.val}),(0,o.jsx)($.Text,{variant:"body3",color:u.statusCritical.val,children:e})]},r))})}),f.length>0&&(0,o.jsx)(ce,{$colors:u,children:(0,o.jsx)(t.Flex,{flexDirection:"column",gap:"$gap8",children:f.map((e,r)=>(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap8",alignItems:"flex-start",children:[(0,o.jsx)(ee.Clock,{size:"$icon.16",color:u.statusCritical.val}),(0,o.jsx)($.Text,{variant:"body3",color:u.statusCritical.val,children:e})]},r))})}),(0,o.jsxs)(t.Flex,{flexDirection:"column",gap:"$gap8",mt:"$spacing12",children:[(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap12",mt:"$spacing12",padding:"$spacing12",borderWidth:1,borderColor:"$statusCritical",borderRadius:"$rounded12",children:[(0,o.jsx)(K.AlertTriangle,{size:18,color:"$statusCritical"}),(0,o.jsx)($.Text,{variant:"body3",color:"$statusCritical",children:"Merging is permanent and cannot be undone. The source lock will be destroyed."})]}),(0,o.jsxs)($.Text,{variant:"body3",color:"$neutral3",children:["Merging Lock #",n.selectedMergeLockId||"..."," into Lock #",T.id," (",(0,x.QT)(T.amount)," ABX)."]})]})]})}var de=n(98236),ue=n(18015),pe=n(29790),xe=n(2042);const[ge,he]=(0,S.I)({name:"WalletFilled",getIcon:e=>(0,o.jsxs)(E.ny,{fill:"none",viewBox:"0 0 512 512",...e,children:[(0,o.jsx)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17"}),(0,o.jsx)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"m250.26 195.39l5.74 122l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95"}),(0,o.jsx)("path",{fill:"currentColor",d:"M256 397.25a20 20 0 1 1 20-20a20 20 0 0 1-20 20"})]})});var me=n(46433);function fe(){const{setActiveOption:e,activeOption:r}=l(),{toggleModal:n}=(0,ue.X)(me.ModalName.VotingRewards),a=(0,v.s0)(),i=(0,N.z)($.Text,{variant:"body3",color:"$statusWarning"}),s=(0,N.z)($.Text,{variant:"body3",color:"$statusCritical"});return(0,o.jsxs)(t.Flex,{flexDirection:"column",mt:"$gap24",children:["Increase"===r&&(0,o.jsx)(de.Z,{status:"warning",icon:(0,o.jsx)(xe.X,{color:"$statusWarning",size:30}),content:(0,o.jsx)(t.Flex,{children:(0,o.jsxs)(i,{children:[(0,o.jsx)(i,{fontWeight:"$medium",children:"Note:"}),"You can increase the lock amount or"," ",(0,o.jsx)(i,{role:"button",onPress:()=>e("Extend"),textDecorationLine:"underline",cursor:"pointer",children:"Extend the lock time"}),". These actions will increase your voting power. There is no limit for the locked amount.",(0,o.jsx)(i,{role:"button",onPress:n,textDecorationLine:"underline",cursor:"pointer",children:"Learn more"})," ","on how voting works."]})})}),"Extend"===r&&(0,o.jsx)(de.Z,{status:"warning",icon:(0,o.jsx)(xe.X,{color:"$statusWarning",size:30}),content:(0,o.jsx)(t.Flex,{children:(0,o.jsxs)(i,{children:[(0,o.jsx)(i,{fontWeight:"$medium",children:"Note"}),": You can extend the locked time or"," ",(0,o.jsx)(i,{role:"button",onPress:()=>e("Increase"),textDecorationLine:"underline",cursor:"pointer",children:"increase the lock amount"}),". These actions will increase your voting power. The maximum lock time is 4 years."," ",(0,o.jsx)(i,{role:"button",onPress:n,textDecorationLine:"underline",cursor:"pointer",children:"Learn more"})," ","on how voting works."]})})}),"Merge"===r&&(0,o.jsx)(de.Z,{status:"critical",icon:(0,o.jsx)(ge,{color:"$statusCritical",size:30}),content:(0,o.jsxs)(t.Flex,{flexDirection:"column",gap:"$gap12",children:[(0,o.jsxs)(s,{children:[(0,o.jsx)(s,{fontWeight:"$medium",children:"Warning:"})," ",(0,o.jsx)(s,{children:"Merging two locks keeps the longer lock time and combines both amounts to increase your final voting power."})]}),(0,o.jsxs)(s,{children:[(0,o.jsx)(s,{children:"Merging will reset any rewards and rebases. Before continuing, please sure you have"})," ",(0,o.jsx)(s,{role:"button",onPress:()=>a("/dash"),textDecorationLine:"underline",cursor:"pointer",children:"claimed all available rewards."})]})]})}),"Transfer"===r&&(0,o.jsx)(de.Z,{status:"critical",icon:(0,o.jsx)(ge,{color:"$statusCritical",size:30}),content:(0,o.jsx)(t.Flex,{flexDirection:"column",gap:"$gap12",children:(0,o.jsxs)(s,{children:[(0,o.jsx)(s,{fontWeight:"$medium",children:"Warning:"})," ",(0,o.jsx)(s,{children:"Transferring a lock will also transfer any rewards and rebases! Before continuing, please make sure you have"})," ",(0,o.jsx)(s,{role:"button",onPress:()=>a("/dash"),textDecorationLine:"underline",cursor:"pointer",children:"claimed all available rewards."})]})})}),(0,o.jsx)(pe.Z,{})]})}var be=n(7602),ve=n(58963),ke=n(2745);const[$e,je]=(0,S.I)({name:"NoNfts",getIcon:e=>(0,o.jsx)(E.ny,{viewBox:"0 0 24 24",fill:"none",...e,children:(0,o.jsxs)("g",{fill:"none",stroke:"currentColor","stroke-width":"2",children:[(0,o.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 8h9m4 0h3m-9 8h9M4 16h3"}),(0,o.jsx)("circle",{cx:"9",cy:"16",r:"2"}),(0,o.jsx)("circle",{cx:"15",cy:"8",r:"2"})]})})});var we=n(89444);function ye({options:e}){const{activeOption:r,setActiveOption:n}=l(),[i,s]=(0,a.useState)(!1);return(0,o.jsx)(ve.J2,{children:(0,o.jsxs)(ve.J2.Trigger,{onPress:()=>s(!i),children:[(0,o.jsxs)(t.Flex,{display:"none",$md:{display:"flex",flexDirection:"row",justifyContent:"space-between"},py:"$spacing12",gap:"$gap8",children:[(0,o.jsx)($.Text,{variant:"buttonLabel3",children:r}),(0,o.jsx)("button",{role:"button",className:"button-clear",children:(0,o.jsx)($e,{size:20})})]}),(0,o.jsx)(ke.$,{isOpen:i,children:(0,o.jsx)(t.Flex,{flexDirection:"column",gap:"$gap12",$md:{pb:"$spacing24",px:"$spacing12"},children:e.map(e=>(0,o.jsx)(ve.J2.Close,{asChild:!0,children:(0,o.jsx)("button",{role:"button",className:"button-clear",onClick:()=>(e=>{s(!1),n(e)})(e),children:(0,o.jsxs)(t.Flex,{row:!0,alignItems:"center",gap:"$gap12",children:[(0,o.jsx)($.Text,{variant:"buttonLabel2",children:e}),r===e&&(0,o.jsx)(we.CheckCircleFilled,{size:16})]})},e)},e))})})]})})}const Ce=k.default.button.withConfig({displayName:"ToggleOptions__StyledButton",componentId:"sc-c1064824-0"})`
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
`;function Te({}){const{activeOption:e,setActiveOption:r}=l(),n=(0,p.useSporeColors)(),a=["Increase","Extend","Merge","Transfer"];return(0,o.jsxs)(t.Flex,{flexDirection:"column",children:[(0,o.jsx)(t.Flex,{row:!0,gap:"$gap12",px:"$spacing8",justifyContent:"space-between",$md:{display:"none"},children:a.map(t=>(0,o.jsx)(Ce,{role:"button",$colors:n,className:""+(e===t?"active":""),onClick:()=>r(t),children:(0,o.jsx)($.Text,{variant:"buttonLabel3",color:"inherit",children:t})},t))}),(0,o.jsx)(ye,{options:a}),(0,o.jsx)(be.Z,{width:"100%",mt:"-1px",height:1})]})}var Le=n(91128);const[Ie,Fe]=(0,S.I)({name:"Paste",getIcon:e=>(0,o.jsxs)(E.ny,{viewBox:"0 0 16 16",fill:"none",...e,children:[(0,o.jsx)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M14 8h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m-4-1c-1.1 0-2 .895-2 2v5c0 1.1.895 2 2 2h4c1.1 0 2-.895 2-2V9c0-1.1-.895-2-2-2z","clip-rule":"evenodd"}),(0,o.jsx)("path",{fill:"currentColor",d:"M10 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"}),(0,o.jsx)("path",{fill:"currentColor","fill-rule":"evenodd",d:"M9 3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5v1H2c-1.1 0-2-.895-2-2V4c0-1.1.895-2 2-2h1a1 1 0 0 1 1-1h.268a1.998 1.998 0 0 1 3.46 0h.268a1 1 0 0 1 1 1h1c1.1 0 2 .895 2 2v2h-1V4a1 1 0 0 0-1-1h-1zM4.27 2a1 1 0 0 0 .866-.499a1 1 0 0 1 1.734 0A1 1 0 0 0 7.736 2h.018a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25h.017z","clip-rule":"evenodd"})]})});function Me(e,r,n,o,t,a,i){try{var s=e[a](i),c=s.value}catch(l){return void n(l)}s.done?r(c):Promise.resolve(c).then(o,t)}function De(e){return function(){var r=this,n=arguments;return new Promise(function(o,t){var a=e.apply(r,n);function i(e){Me(a,o,t,i,s,"next",e)}function s(e){Me(a,o,t,i,s,"throw",e)}i(void 0)})}}const Pe=(0,k.default)(t.Flex).withConfig({displayName:"Transfer__ErrorContainer",componentId:"sc-4d3c183-0"})`
  background-color: ${({$colors:e})=>e.surface2.val};
  border: 1px solid ${({$colors:e})=>e.statusCritical.val};
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`,Ae=(0,k.default)(t.Flex).withConfig({displayName:"Transfer__InputContainer",componentId:"sc-4d3c183-1"})`
  border-color: ${({$colors:e,$hasError:r})=>r?e.statusCritical.val:e.surface3.val};

  &:focus-within {
    border-color: ${({$colors:e,$hasError:r})=>r?e.statusCritical.val:e.neutral2.val};
  }
`;k.default.button.withConfig({displayName:"Transfer__Button",componentId:"sc-4d3c183-2"})`
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
`;function Ee(){const{formData:e,updateFormData:r}=l(),{address:n}=(0,h.m)(),i=(0,p.useSporeColors)(),[s,c]=(0,a.useState)(null),d=(0,a.useCallback)(e=>e?(0,w.U)(e)?"0x0000000000000000000000000000000000000000"===e?(c("Cannot transfer to zero address"),!1):n&&e.toLowerCase()===n.toLowerCase()?(c("Cannot transfer to your own address"),!1):(c(null),!0):(c("Invalid Ethereum address format"),!1):(c(null),!0),[n]),u=(0,a.useCallback)(e=>{r({transferToAddress:e}),d(e)},[r,d]),x=(0,a.useCallback)(De(function*(){const e=yield navigator.clipboard.readText();u(e)}),[u]);return(0,o.jsxs)(t.Flex,{mt:"$gap36",children:[(0,o.jsx)(t.Flex,{row:!0,justifyContent:"space-between",alignItems:"center",gap:"$gap12",mb:"$gap12",children:(0,o.jsx)($.Text,{variant:"buttonLabel3",children:"Transfer to"})}),(0,o.jsx)(t.Flex,{row:!0,gap:"$gap8",alignItems:"center",children:(0,o.jsxs)(Ae,{grow:!0,flexDirection:"column",gap:"$gap8",borderWidth:1,borderRadius:"$rounded12",transition:"border-color 0.3s ease",row:!0,alignItems:"center",justifyContent:"space-between",px:"$padding16",$colors:i,$hasError:!!s,children:[(0,o.jsx)(Le.II,{py:"$padding20",placeholderTextColor:"$neutral3",placeholder:"0x1dc25...890",fontSize:"$medium",backgroundColor:"none",width:"100%",value:e.transferToAddress,onChangeText:u}),(0,o.jsx)(t.Flex,{onPress:x,cursor:"pointer",transition:"opacity 0.2s ease",opacity:.65,hoverStyle:{opacity:1},children:(0,o.jsx)(Ie,{size:"$icon.20",color:"$neutral1"})})]})}),s?(0,o.jsx)(Pe,{$colors:i,children:(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap8",alignItems:"center",children:[(0,o.jsx)(K.AlertTriangle,{size:"$icon.16",color:i.statusCritical.val}),(0,o.jsx)($.Text,{variant:"body3",color:i.statusCritical.val,children:s})]})}):(0,o.jsx)($.Text,{variant:"body3",color:"$neutral3",mt:"$gap12",children:"Wallet address where the lock will be transferred. This action cannot be undone."}),e.transferToAddress&&!s&&(0,o.jsx)(t.Flex,{mt:"$gap12",p:"$padding12",backgroundColor:"$surface2",borderRadius:"$rounded8",children:(0,o.jsxs)($.Text,{variant:"body3",color:"$neutral2",children:["Lock will be transferred to: ",e.transferToAddress]})})]})}function Se(){const{address:e}=(0,h.m)(),{activeOption:r,selectedLockId:n,formData:a}=l(),{data:i}=(0,d.G_)(n||void 0),{data:s}=(0,d.Zz)(e),c=(0,p.useSporeColors)(),{lockTime:m,votingPower:f}=(()=>{if(!i)return{lockTime:0,votingPower:"0"};const e=parseInt(i.lockEnd),n=Math.floor(Date.now()/1e3),o=Math.max(0,(0,x.i8)(e-n));switch(r){case"Increase":if(!a.increaseAmount)return{lockTime:o,votingPower:i.votingPower};try{const e=(0,g.b)(BigInt(i.amount),18),r=parseFloat(e)+parseFloat(a.increaseAmount);if(i.permanent)return{lockTime:o,votingPower:r.toString()};return{lockTime:o,votingPower:(0,x.q_)(r.toString(),o)}}catch(t){return console.error("Error calculating increase values:",t),{lockTime:o,votingPower:i.votingPower}}case"Extend":try{const e=(0,g.b)(BigInt(i.amount),18);if(a.extendToMaxLock)return{lockTime:0,votingPower:e};if(a.extendDays>0){const r=o+a.extendDays;return{lockTime:r,votingPower:(0,x.q_)(e,r)}}return{lockTime:o,votingPower:i.votingPower}}catch(t){return console.error("Error calculating extend values:",t),{lockTime:o,votingPower:i.votingPower}}case"Merge":if(!a.selectedMergeLockId)return{lockTime:o,votingPower:i.votingPower};try{if(!s)return{lockTime:o,votingPower:i.votingPower};const e=s.find(e=>e.id===a.selectedMergeLockId);if(!e)return{lockTime:o,votingPower:i.votingPower};const r=BigInt(i.amount)+BigInt(e.amount),t=(0,g.b)(r,18);let c,l,d=!1;if(i.permanent||e.permanent)d=!0,c=0;else{const r=parseInt(i.lockEnd),o=parseInt(e.lockEnd),t=Math.max(r,o),a=Math.max(0,t-n);c=(0,x.i8)(a)}if(d){const r=parseFloat(i.votingPower),n=parseFloat(e.votingPower);l=(r+n).toString()}else l=(0,x.q_)(t,c);return{lockTime:c,votingPower:l}}catch(t){return console.error("Error calculating merge values:",t),{lockTime:o,votingPower:i.votingPower}}default:return{lockTime:o,votingPower:i.votingPower}}})();return(0,o.jsxs)(t.Flex,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${c.surface2.variable} 0%, transparent 100%)`},children:[(0,o.jsx)(Te,{}),"Increase"===r&&(0,o.jsx)(J,{}),"Extend"===r&&(0,o.jsx)(U,{}),"Merge"===r&&(0,o.jsx)(le,{}),"Transfer"===r&&(0,o.jsx)(Ee,{}),(0,o.jsx)(t.Flex,{mt:"$gap24",children:(0,o.jsx)(u.Z,{votingPower:f,lockDuration:m})}),(0,o.jsx)(fe,{}),(0,o.jsx)(A,{})]})}var _e=n(58870),ze=n(48763),Ne=n(60759),Be=n(25236);function Re(){const e=(0,p.useSporeColors)(),r=(0,Ne.GS)(),{selectedLockId:n}=l(),{data:a,isLoading:s,error:c}=(0,d.G_)(n||void 0),u=((0,N.z)($.Text,{variant:"body3",color:"$neutral2",fontSize:"$mdall"}),()=>(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,o.jsx)(i.Link,{to:"/locks",className:"text-decoration-none",children:(0,o.jsx)(t.Flex,{backgroundColor:"$accent2",transition:"background-color 0.2s ease",hoverStyle:{backgroundColor:"$accent2Hovered"},padding:"$spacing8",borderRadius:"$rounded8",children:(0,o.jsx)(Be.B,{size:16})})}),(0,o.jsx)($.Text,{variant:r.md?"subheading1":"heading3",children:"Manage Lock"})]}));return s?(0,o.jsxs)(t.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,o.jsx)(u,{}),(0,o.jsx)(be.Z,{width:"100%",my:"$spacing16",height:1}),(0,o.jsx)($.Text,{variant:"body3",color:"$neutral2",children:"Loading lock details..."})]}):c||!a?(0,o.jsxs)(t.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,o.jsx)(u,{}),(0,o.jsx)(be.Z,{width:"100%",my:"$spacing16",height:1}),(0,o.jsx)($.Text,{variant:"body3",color:"$statusCritical",children:n?"Failed to load lock details":"No lock selected"})]}):(0,o.jsxs)(t.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,o.jsx)(u,{}),(0,o.jsx)(be.Z,{width:"100%",my:"$spacing16",height:1}),(0,o.jsxs)(t.Flex,{row:!0,justifyContent:"space-between",gap:"$gap12",alignItems:"center",$md:{flexDirection:"column",alignItems:"flex-start"},children:[(0,o.jsxs)(t.Flex,{className:"left",row:!0,gap:"$gap12",children:[(0,o.jsx)(t.Flex,{height:40,width:40,centered:!0,borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface2Hovered",style:{background:`linear-gradient(90deg, ${e.surface2.variable} 0%, ${e.slate.variable} 40%, ${e.surface2.variable} 60%, ${e.slate.variable} 100%)`},children:(0,o.jsx)(_e.Z,{size:24,color:e.neutral1Hovered.val})}),(0,o.jsxs)(t.Flex,{flexDirection:"column",justifyContent:"center",gap:"$gap8",children:[(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,o.jsxs)($.Text,{variant:"buttonLabel2",children:["Lock #",a.id]}),(0,o.jsx)(t.Flex,{children:(0,o.jsx)(ze.Z,{size:14,color:e.accent1Hovered.val})})]}),(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap16",alignItems:"center",children:[(0,o.jsxs)($.Text,{variant:"body3",color:"$neutral2",children:[(0,x.QT)(a.amount)," ABX"]}),(0,o.jsx)($.Text,{variant:"body3",color:"$neutral2",children:a.permanent?"Permanent Lock":(0,x.ad)(a.lockEnd)})]})]})]}),(0,o.jsx)(t.Flex,{children:(0,o.jsx)(i.Link,{className:"text-decoration-none inline-flex",to:"/locks",children:(0,o.jsx)($.Text,{py:"$spacing8",px:"$spacing12",variant:"buttonLabel3",borderRadius:"$roundedFull",backgroundColor:"$surface3",cursor:"pointer",transition:"all 0.2s ease-in-out",color:"$neutral1",hoverStyle:{backgroundColor:"$surface1",color:"$accent1"},children:"Change"})})})]})]})}function qe(){return(0,o.jsx)(c,{children:(0,o.jsxs)(t.Flex,{mt:"$spacing24",width:"100%",px:"$spacing40",maxWidth:680,pb:"$spacing40",$xl:{px:"$spacing12",mx:"auto"},flexDirection:"column",gap:"$gap12",children:[(0,o.jsx)(Re,{}),(0,o.jsx)(Se,{})]})})}}}]);
//# sourceMappingURL=2312.8ba143ca.chunk.js.map