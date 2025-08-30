"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[819],{98236:(e,r,n)=>{n.d(r,{Z:()=>a});var o=n(97755),t=n(82746);function a({status:e="warning",icon:r,content:n}){const a={critical:{background:"$statusCritical2",color:"$statusCritical"},warning:{background:"$statusWarning2",color:"$statusWarning"},success:{background:"$statusSuccess2",color:"$statusSuccess"}};return(0,o.jsxs)(t.Flex,{row:!0,gap:"$spacing16",backgroundColor:a[e].background,p:"$spacing20",$md:{p:"$spacing16"},borderRadius:"$rounded12",borderWidth:1,borderColor:a[e].background,children:[(0,o.jsx)(t.Flex,{height:50,width:50,backgroundColor:a[e].background,centered:!0,borderRadius:"$roundedFull",children:r}),(0,o.jsx)(t.Flex,{flex:1,children:n})]})}},819:(e,r,n)=>{n.r(r),n.d(r,{default:()=>ze});var o=n(97755),t=n(82746),a=n(20128),s=n(86683);const i=(0,a.createContext)(null),c=({children:e})=>{const[r]=(0,s.useSearchParams)(),n=r.get("tab"),t=r.get("lockId"),[c,l]=(0,a.useState)(n&&["Increase","Extend","Merge","Transfer"].includes(n)?n:"Increase"),[d]=(0,a.useState)(t),[u,x]=(0,a.useState)({increaseAmount:"",extendDays:0,extendToMaxLock:!1,selectedMergeLockId:"",transferToAddress:""});return(0,a.useEffect)(()=>{n&&["Increase","Extend","Merge","Transfer"].includes(n)&&l(n)},[n]),(0,o.jsx)(i.Provider,{value:{setActiveOption:l,activeOption:c,selectedLockId:d,formData:u,updateFormData:e=>{x(r=>({...r,...e}))}},children:e})},l=()=>{const e=(0,a.useContext)(i);if(!e)throw new Error("useModifyLock must be used within a ModifyLockProvider");return e};var d=n(41622),u=n(44441),x=n(19671),p=n(35021),g=n(36477),m=n(56156),h=n(62394),f=n(11692),b=n(80929),k=n(63933),$=n(17041),v=n(59793),j=n(7677),w=n(67716);const y="0x2fc35FB4CaFBFbf2319cfe27E7816Fc18E87D946",C=[{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"voted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"escrowType",outputs:[{internalType:"enum IVotingEscrow.EscrowType",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"locked",outputs:[{components:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"end",type:"uint256"},{internalType:"bool",name:"isPermanent",type:"bool"}],internalType:"struct IVotingEscrow.LockedBalance",name:"",type:"tuple"}],stateMutability:"view",type:"function"}];function T(e){return(0,w.u)({address:y,abi:C,functionName:"voted",args:e?[BigInt(e)]:void 0,query:{enabled:!!e}})}function L(e){return(0,w.u)({address:y,abi:C,functionName:"escrowType",args:e?[BigInt(e)]:void 0,query:{enabled:!!e}})}function I(e){return(0,w.u)({address:y,abi:C,functionName:"locked",args:e?[BigInt(e)]:void 0,query:{enabled:!!e}})}function F(e,r,n,o,t,a,s){try{var i=e[a](s),c=i.value}catch(l){return void n(l)}i.done?r(c):Promise.resolve(c).then(o,t)}const M=$.default.button.withConfig({displayName:"ChangeLockAndOptionButton__Button",componentId:"sc-7e29dce5-0"})`
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
`;function D(){const{activeOption:e,selectedLockId:r,formData:n}=l(),{address:s}=(0,m.m)(),[i,c]=((0,x.useSporeColors)(),(0,a.useState)(!1)),{data:u}=(0,d.G_)(r||void 0),{data:g}=T(n.selectedMergeLockId),{data:$}=L(n.selectedMergeLockId),{data:w}=I(n.selectedMergeLockId),{data:y}=L(r||void 0),{data:C}=I(r||void 0),{approveABX:D,increaseLockAmount:P,extendLockTime:A,lockPermanent:E,mergeLocks:S,transferLock:_,needsApproval:N,getFormattedABXBalance:z,isWritePending:B,isConfirming:R,isSuccess:W,writeError:q,transactionHash:H}=(0,b.Y)(),{refetch:Z}=(0,d.Zz)(s),[O,V]=(0,a.useState)(null);(0,a.useEffect)(()=>{if(W&&O&&H){const e={increase:"Amount Increased",extend:"Lock Extended",permanent:"Lock Made Permanent",merge:"Locks Merged",transfer:"Lock Transferred"};h.Z.addPopup({type:f.k.LockSuccess,content:{type:"success",title:e[O]||"Lock Updated",description:`Successfully ${O} lock ${r}`,hash:H,action:O}},`lock-${O}-${H}`,8e3),Z(),V(null),c(!1)}else if(q&&O){const e=q.message;if(e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user denied")||e.toLowerCase().includes("rejected by user"))h.Z.addPopup({type:f.k.LockError,content:{type:"error",title:"Transaction Cancelled",description:`${O} operation was cancelled by user`,action:O}},`lock-${O}-cancelled-${Date.now()}`,5e3);else{const r={increase:"Increase Amount",extend:"Extend Lock",permanent:"Make Permanent",merge:"Merge Locks",transfer:"Transfer Lock"};h.Z.addPopup({type:f.k.LockError,content:{type:"error",title:`${r[O]||"Lock Update"} Failed`,description:`Failed to ${O} lock: ${e}`,action:O}},`lock-${O}-error-${Date.now()}`,1e4)}V(null),c(!1)}},[W,q,O,H,r,Z]);const X=()=>{if(!s||!r)return!1;switch(e){case"Increase":{if(!(0,p.Rm)(n.increaseAmount).isValid)return!1;const e=parseFloat(z()),r=parseFloat(n.increaseAmount);return r>0&&r<=e}case"Extend":return(n.extendDays>0||n.extendToMaxLock)&&!!u&&!u.permanent;case"Merge":var o;if(!n.selectedMergeLockId||!u||u.managed)return!1;if(!0===g)return!1;if(!0===(null===(o=w)||void 0===o?void 0:o.isPermanent))return!1;if(C&&!C.isPermanent){const e=Math.floor(Date.now()/1e3);if(Number(C.end)<=e)return!1}return!0;case"Transfer":return!(!n.transferToAddress||!u)&&(!!(0,j.U)(n.transferToAddress)&&("0x0000000000000000000000000000000000000000"!==n.transferToAddress&&(!s||n.transferToAddress.toLowerCase()!==s.toLowerCase())));default:return!1}},Y=function(){var o,t=(o=function*(){if(X()&&!i){c(!0);try{switch(e){case"Increase":{V("increase");const e=n.increaseAmount;N(e)&&(yield D(e),yield new Promise(e=>setTimeout(e,2e3))),yield P({tokenId:r,amount:e});break}case"Extend":if(!u)return;if(n.extendToMaxLock)V("permanent"),yield E(r);else{V("extend");const e=n.extendDays,o=Math.floor(Date.now()/1e3),t=parseInt(u.lockEnd),a=Math.max(0,(0,p.i8)(t-o))+e;yield A({tokenId:r,lockDurationInDays:a})}break;case"Merge":if(!n.selectedMergeLockId||!u)return;V("merge"),yield S({fromTokenId:n.selectedMergeLockId,toTokenId:r});break;case"Transfer":if(!n.transferToAddress||!u)return;V("transfer"),yield _({tokenId:r,toAddress:n.transferToAddress})}}catch(o){if(console.error("Transaction failed:",o),O){const e=o instanceof Error?o.message:"Unknown error";if(e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user denied")||e.toLowerCase().includes("rejected by user"))h.Z.addPopup({type:f.k.LockError,content:{type:"error",title:"Transaction Cancelled",description:`${O} operation was cancelled by user`,action:O}},`lock-${O}-cancelled-${Date.now()}`,5e3);else{const r={increase:"Increase Amount",extend:"Extend Lock",permanent:"Make Permanent",merge:"Merge Locks",transfer:"Transfer Lock"};h.Z.addPopup({type:f.k.LockError,content:{type:"error",title:`${r[O]||"Lock Update"} Failed`,description:`Failed to ${O} lock: ${e}`,action:O}},`lock-${O}-error-${Date.now()}`,1e4)}}V(null)}finally{c(!1)}}},function(){var e=this,r=arguments;return new Promise(function(n,t){var a=o.apply(e,r);function s(e){F(a,n,t,s,i,"next",e)}function i(e){F(a,n,t,s,i,"throw",e)}s(void 0)})});return function(){return t.apply(this,arguments)}}(),U=!X()||i||B||R,G=i||B||R,Q=(0,k.s0)();return(0,o.jsxs)(t.Flex,{mt:"$spacing36",row:!0,gap:"$gap12",alignItems:"center",children:[(0,o.jsx)(M,{$lock:!0,$isDisabled:!1,onClick:()=>Q("/locks"),children:(0,o.jsx)(v.Text,{variant:"buttonLabel3",color:"inherit",children:"Change Lock"})}),(0,o.jsx)(M,{onClick:Y,$isDisabled:U,children:(0,o.jsx)(v.Text,{variant:"buttonLabel3",color:"inherit",children:G?"Processing...":"Increase"===e&&N(n.increaseAmount)?"Approve & Increase":(()=>{switch(e){case"Increase":return"Increase";case"Extend":return n.extendToMaxLock?"Convert to Permanent":"Extend Lock Time";case"Merge":return"Merge";case"Transfer":return"Transfer";default:return"Update"}})()})})]})}var P=n(52964),A=n(20868);const[E,S]=(0,A.I)({name:"NoNfts",getIcon:e=>(0,o.jsx)(P.ny,{viewBox:"0 0 24 24",fill:"none",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M6.327 20.539q-1.2 0-2.033-.833t-.832-2.033t.832-2.033t2.033-.832t2.033.832t.832 2.033q0 .503-.172.972t-.497.841v-.29q.808.402 1.685.603T12 20q3.35 0 5.675-2.325T20 12h1q0 1.864-.709 3.507q-.708 1.643-1.923 2.859t-2.858 1.925T12 21q-1.065 0-2.084-.238t-1.98-.731q-.361.263-.773.385t-.836.122m.001-1q.778 0 1.321-.544t.543-1.322t-.544-1.321t-1.322-.543t-1.321.544q-.544.545-.544 1.322t.545 1.321t1.322.544M12 14.865q-1.2 0-2.033-.832T9.135 12t.832-2.033T12 9.135t2.033.832t.833 2.033t-.833 2.033t-2.033.833M3 12q0-1.864.709-3.507t1.924-2.859T8.49 3.709T12 3q1.066 0 2.084.238t1.98.731q.37-.244.774-.366t.835-.122q1.2 0 2.023.823t.823 2.023t-.823 2.033t-2.023.832t-2.033-.832t-.832-2.033q0-.503.172-.972t.497-.842v.29q-.808-.401-1.685-.602Q12.916 4 12 4Q8.65 4 6.325 6.325T4 12zm14.673-3.808q.77 0 1.308-.553t.538-1.312t-.538-1.303t-1.308-.543q-.76 0-1.312.54q-.553.54-.553 1.313t.544 1.315t1.321.543m0-1.865"})})});var _=n(74456),N=n(4925),z=n(88861);const B=(0,_.z)(N.Kq,{width:40,height:20,borderRadius:20,borderWidth:0,cursor:"pointer",padding:"10px 0",variants:{checked:{true:{backgroundColor:"$absGreen"},false:{backgroundColor:"$accent2"}}},defaultVariants:{checked:!1}}),R=(0,_.z)(N.Kq,{width:18,height:18,backgroundColor:"$neutral1",borderRadius:18}),W=(0,z.r)({Frame:B,Thumb:R});function q({checked:e,onCheckedChange:r,disabled:n}){return(0,o.jsx)(W,{checked:e,onCheckedChange:n?void 0:r,disabled:n,children:(0,o.jsx)(W.Thumb,{animation:"quicker"})})}const H=$.default.input.withConfig({displayName:"Range__StyledRange",componentId:"sc-1a0ac455-0"})`
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
`,Z=$.default.div.withConfig({displayName:"Range__DatalistPoints",componentId:"sc-1a0ac455-1"})`
  position: absolute;
  bottom: -12px;
  left: 0;
  right: 0;
  height: 4px;
  pointer-events: none;
`,O=$.default.div.withConfig({displayName:"Range__DatalistPoint",componentId:"sc-1a0ac455-2"})`
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
`,V=({value:e=0,onChange:r,min:n=0,max:a=100,label:s})=>{const i=a-n,c=i>0?[25,50,75]:[],l=(0,x.useSporeColors)(),d=i>0?(e-n)/i*100:0;return(0,o.jsxs)(t.Flex,{flexDirection:"column",width:"100%",my:"$gap24",gap:"$gap12",children:[s&&(0,o.jsx)(v.Text,{variant:"body3",color:"$neutral1",textAlign:"center",children:s}),(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap12",alignItems:"center",width:"100%",children:[(0,o.jsx)(v.Text,{variant:"body4",color:"$neutral3",children:n}),(0,o.jsxs)(t.Flex,{position:"relative",grow:!0,children:[(0,o.jsx)(H,{type:"range",min:n,max:a,value:e,onChange:e=>{var n;const o=Number(e.target.value);null===(n=r)||void 0===n||n(o)},list:"range-datalist",style:{background:`linear-gradient(\n              to right,\n              ${l.accent1Hovered.val} 0%,\n              ${l.accent1Hovered.val} ${d}%,\n              ${l.accent2.val} ${d}%,\n               ${l.accent2.val} 100%\n            )`}}),(0,o.jsx)(Z,{children:c.map((e,r)=>(0,o.jsx)(O,{position:e,className:e<=d?"active":""},r))}),(0,o.jsx)("datalist",{id:"range-datalist",children:c.map((e,r)=>(0,o.jsx)("option",{value:n+i*e/100},r))})]}),(0,o.jsx)(v.Text,{variant:"body4",color:"$neutral3",children:a})]})]})};function X(){const{selectedLockId:e,formData:r,updateFormData:n}=l(),{data:s}=(0,d.G_)(e||void 0),{remainingDays:i,maxExtensionDays:c,maxLockDays:u,isAlreadyPermanent:x}=(0,a.useMemo)(()=>{var e;const r=Math.floor(Date.now()/1e3),n=s?parseInt(s.lockEnd):r,o=Math.max(0,(0,p.i8)(n-r)),t=(0,p.i8)(p.Q_);return{remainingDays:o,maxLockDays:t,maxExtensionDays:t-o,isAlreadyPermanent:(null===(e=s)||void 0===e?void 0:e.permanent)||!1}},[s]),g=(0,a.useCallback)(e=>{n({extendToMaxLock:e,extendDays:0})},[n]);return(0,o.jsxs)(t.Flex,{mt:"$gap36",children:[(0,o.jsxs)(t.Flex,{borderWidth:1,borderColor:"$surface3",borderRadius:"$rounded12",p:"$padding12",children:[(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,o.jsx)(q,{checked:x||r.extendToMaxLock,onCheckedChange:g,disabled:x}),(0,o.jsx)(v.Text,{variant:"buttonLabel3",children:"Permanent Lock Mode"}),(0,o.jsx)(E,{size:20,color:"$neutral3"})]}),(0,o.jsx)(v.Text,{variant:"body4",mt:"$gap12",children:x?"This lock is already permanent and has maximum 1-to-1 voting power.":"When activated, converts this lock to a permanent lock with maximum 1-to-1 voting power. Permanent locks never expire and don't need to be extended."}),x&&(0,o.jsx)(v.Text,{variant:"body4",mt:"$gap12",color:"$accent1",children:"\u2713 Lock is already permanent"})]}),!x&&!r.extendToMaxLock&&c>0&&(0,o.jsx)(V,{value:r.extendDays,onChange:e=>n({extendDays:e}),min:0,max:c,label:`Extend by ${r.extendDays} days`}),!x&&r.extendToMaxLock&&(0,o.jsx)(t.Flex,{mt:"$gap24",p:"$padding12",borderWidth:1,borderColor:"$accent1",borderRadius:"$rounded12",children:(0,o.jsx)(v.Text,{variant:"body3",color:"$accent1",children:"Will convert to permanent lock with maximum voting power (1:1 ratio)"})}),!x&&c<=0&&!r.extendToMaxLock&&(0,o.jsx)(t.Flex,{mt:"$gap24",p:"$padding12",borderWidth:1,borderColor:"$neutral3",borderRadius:"$rounded12",children:(0,o.jsx)(v.Text,{variant:"body3",color:"$neutral2",children:"This lock is already at maximum duration. You can convert it to a permanent lock for maximum voting power."})})]})}var Y=n(71960),U=n(84308);function G(){const{address:e}=(0,m.m)(),{getFormattedABXBalance:r,needsApproval:n,isWritePending:a}=(0,b.Y)(),{formData:s,updateFormData:i}=l(),c=s.increaseAmount,d=r(),u=(0,p.Rm)(c),x=!u.isValid;let g=u.error;if(u.isValid&&c){const e=parseFloat(d);parseFloat(c)>e&&(g="Insufficient ABX balance")}return(0,o.jsxs)(t.Flex,{mt:"$gap36",children:[(0,o.jsx)(U.Z,{title:"Add to lock",onPercentageSelect:e=>{const r=parseFloat(d);if(r>0){const n=(r*e/100).toString();i({increaseAmount:n})}}}),(0,o.jsx)(t.Flex,{mt:"$gap12",children:(0,o.jsx)(Y.Z,{value:c,onValueChange:e=>{i({increaseAmount:e})},error:g,userBalance:d})}),e&&c&&!x&&(0,o.jsx)(t.Flex,{mt:"$gap12",p:"$spacing12",backgroundColor:"$surface3",borderRadius:"$rounded8",children:(0,o.jsx)(v.Text,{variant:"body4",color:"$neutral2",children:n(c)?`Approval required for ${c} ABX`:`Ready to increase lock by ${c} ABX`})})]})}var Q=n(35715),J=n(126),K=n(38046);const ee=$.default.div.withConfig({displayName:"SelectLock__DropdownWrapper",componentId:"sc-d9aeb57-0"})`
  position: relative;
  width: 100%;
`,re=$.default.button.withConfig({displayName:"SelectLock__SelectedOption",componentId:"sc-d9aeb57-1"})`
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
`,ne=$.default.ul.withConfig({displayName:"SelectLock__DropdownMenu",componentId:"sc-d9aeb57-2"})`
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
`,oe=$.default.li.withConfig({displayName:"SelectLock__DropdownItem",componentId:"sc-d9aeb57-3"})`
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
`,te=$.default.span.withConfig({displayName:"SelectLock__Arrow",componentId:"sc-d9aeb57-4"})`
  display: inline-block;
  border: solid ${({borderColor:e})=>e||"#4a90e2"};
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 8px;
  transform: ${({isOpen:e})=>e?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,ae=({options:e,defaultOption:r,onSelect:n})=>{const[t,s]=(0,a.useState)(!1),[i,c]=(0,a.useState)(!1),[l,d]=(0,a.useState)(r||e[0]),u=(0,a.useRef)(null),p=(0,a.useRef)(null),g=(0,x.useSporeColors)();(0,a.useEffect)(()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&s(!1)},r=()=>{if(u.current&&p.current){const e=u.current.getBoundingClientRect(),r=p.current.offsetHeight,n=window.innerHeight-e.bottom,o=e.top;c(n<r&&o>r)}};return t&&(r(),window.addEventListener("resize",r)),document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e),window.removeEventListener("resize",r)}},[t]);const m={backgroundColor:g.surface1Hovered.val,hoverColor:g.surface3.val,borderColor:g.surface2Hovered.val,color:g.neutral1.val},h={borderColor:g.accent3.val},f={backgroundColor:g.surface1Hovered.val,borderColor:g.surface2Hovered.val},b={HoverBackgroundColor:g.surface2Hovered.val,color:g.neutral1.val,hoverColor:g.accent1.val};return(0,o.jsxs)(ee,{ref:u,children:[(0,o.jsxs)(re,{onClick:()=>{s(!t)},...m,children:[(0,o.jsxs)(v.Text,{variant:"buttonLabel3",children:[" ",l]}),(0,o.jsx)(te,{isOpen:t,...h})]}),(0,o.jsx)(ne,{ref:p,isOpen:t,isAbove:i,...f,children:e.map(e=>(0,o.jsx)(oe,{onClick:()=>(e=>{d(e),n(e),s(!1)})(e),...b,children:(0,o.jsx)(v.Text,{variant:"body3",children:e})},e))})]})},se=(0,$.default)(t.Flex).withConfig({displayName:"Merge__ErrorContainer",componentId:"sc-b238fcfd-0"})`
  background-color: ${({$colors:e})=>e.surface2.val};
  border: 1px solid ${({$colors:e})=>e.statusCritical.val};
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`,ie=(0,$.default)(t.Flex).withConfig({displayName:"Merge__WarningContainer",componentId:"sc-b238fcfd-1"})`
  background-color: ${({$colors:e})=>e.surface2.val};
  border: 1px solid ${({$colors:e})=>e.accentWarning.val};
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`;function ce(){const{address:e}=(0,m.m)(),{selectedLockId:r,formData:n,updateFormData:s}=l(),{data:i,isLoading:c}=(0,d.Zz)(e),u=(0,x.useSporeColors)(),[g,h]=(0,a.useState)([]),[f,b]=(0,a.useState)([]),{data:k}=T(n.selectedMergeLockId),{data:$}=L(n.selectedMergeLockId),{data:j}=I(n.selectedMergeLockId),{data:w}=L(r||void 0),{data:y}=I(r||void 0),C=(0,a.useMemo)(()=>{var e;return(null===(e=i)||void 0===e?void 0:e.find(e=>e.id===r))||null},[i,r]);(0,a.useEffect)(()=>{var e;if(!n.selectedMergeLockId||!r)return h([]),void b([]);const o=[],t=[];if(!0===k&&o.push("Source lock has voted this epoch and cannot be merged until next Thursday"),void 0!==$&&0!==$&&t.push(`Source lock type: ${$} (should be 0 for NORMAL locks)`),void 0!==w&&0!==w&&t.push(`Target lock type: ${w} (should be 0 for NORMAL locks)`),!0===(null===(e=j)||void 0===e?void 0:e.isPermanent)&&o.push("Permanent locks cannot be merged from (only merged into)"),y&&!y.isPermanent){const e=Math.floor(Date.now()/1e3);Number(y.end)<=e&&o.push("Target lock has expired and cannot receive merges")}h(o),b(t)},[n.selectedMergeLockId,r,k,$,w,j,y]);const F=(0,a.useMemo)(()=>i&&C?i.filter(e=>{if(e.id===C.id)return!1;if(e.managed||C.managed)return!1;if(!e.permanent){const r=Date.now()/1e3;if(parseInt(e.lockEnd)<=r)return!1}return!0}):[],[i,C]);if(c)return(0,o.jsxs)(t.Flex,{mt:"$gap36",alignItems:"center",justifyContent:"center",py:"$spacing20",children:[(0,o.jsx)(Q.n,{size:20}),(0,o.jsx)(v.Text,{variant:"body3",color:"$neutral2",ml:"$spacing8",children:"Loading locks..."})]});if(!C)return(0,o.jsx)(t.Flex,{mt:"$gap36",children:(0,o.jsxs)(v.Text,{children:["Selected lock not found. Lock ID: ",r]})});const M=(0,a.useMemo)(()=>i&&C?i.filter(e=>{if(e.id===C.id)return!1;if(e.managed||C.managed)return!1;const r=BigInt(C.amount);return BigInt(e.amount)>r}):[],[i,C]);if(0===F.length)return(0,o.jsxs)(t.Flex,{mt:"$gap36",children:[(0,o.jsxs)(v.Text,{variant:"body2",color:"$neutral2",mb:"$spacing12",children:["No mergeable locks found for Lock #",C.id]}),M.length>0&&(0,o.jsx)(se,{$colors:u,children:(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap8",alignItems:"flex-start",children:[(0,o.jsx)(J.u,{size:"$icon.16",color:u.statusCritical.val}),(0,o.jsxs)(t.Flex,{flexDirection:"column",flex:1,children:[(0,o.jsxs)(v.Text,{variant:"body3",color:u.statusCritical.val,mb:"$spacing8",children:["You have ",M.length," lock(s) with more ABX that cannot be merged into this lock."]}),(0,o.jsx)(v.Text,{variant:"body3",color:"$neutral2",children:"To merge locks, you must merge smaller locks into larger ones. Try selecting one of your larger locks instead."})]})]})})]});const D=(0,a.useMemo)(()=>F.map(e=>{const r=(0,p.QT)(e.amount),n=(0,p.g5)(e.votingPower);return`Lock #${e.id} - ${r} ABX (${n} vp)`}),[F]);a.useEffect(()=>{F.length>0&&!n.selectedMergeLockId&&s({selectedMergeLockId:F[0].id})},[F,n.selectedMergeLockId,s]);const P=(0,a.useCallback)(e=>{var r;const n=null===(r=e.match(/Lock #(\d+)/))||void 0===r?void 0:r[1];n&&s({selectedMergeLockId:n})},[s]);return(0,o.jsxs)(t.Flex,{mt:"$gap36",children:[(0,o.jsxs)(v.Text,{variant:"buttonLabel3",color:"$neutral2",children:["Select a lock to merge with Lock #",C.id]}),(0,o.jsx)(t.Flex,{mt:"$gap12",children:(0,o.jsx)(ae,{options:D,defaultOption:D[0]||"No locks available",onSelect:P})}),g.length>0&&(0,o.jsx)(se,{$colors:u,children:(0,o.jsx)(t.Flex,{flexDirection:"column",gap:"$gap8",children:g.map((e,r)=>(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap8",alignItems:"flex-start",children:[(0,o.jsx)(J.u,{size:"$icon.16",color:u.statusCritical.val}),(0,o.jsx)(v.Text,{variant:"body3",color:u.statusCritical.val,children:e})]},r))})}),f.length>0&&(0,o.jsx)(ie,{$colors:u,children:(0,o.jsx)(t.Flex,{flexDirection:"column",gap:"$gap8",children:f.map((e,r)=>(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap8",alignItems:"flex-start",children:[(0,o.jsx)(K.Clock,{size:"$icon.16",color:u.statusCritical.val}),(0,o.jsx)(v.Text,{variant:"body3",color:u.statusCritical.val,children:e})]},r))})}),(0,o.jsxs)(t.Flex,{flexDirection:"column",gap:"$gap8",mt:"$spacing12",children:[(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap12",mt:"$spacing12",padding:"$spacing12",borderWidth:1,borderColor:"$statusCritical",borderRadius:"$rounded12",children:[(0,o.jsx)(J.u,{size:18,color:"$statusCritical"}),(0,o.jsx)(v.Text,{variant:"body3",color:"$statusCritical",children:"Merging is permanent and cannot be undone. The source lock will be destroyed."})]}),(0,o.jsxs)(v.Text,{variant:"body3",color:"$neutral3",children:["Merging Lock #",n.selectedMergeLockId||"..."," into Lock #",C.id," (",(0,p.QT)(C.amount)," ABX)."]})]})]})}var le=n(98236),de=n(18015),ue=n(29790),xe=n(2042);const[pe,ge]=(0,A.I)({name:"WalletFilled",getIcon:e=>(0,o.jsxs)(P.ny,{fill:"none",viewBox:"0 0 512 512",...e,children:[(0,o.jsx)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17"}),(0,o.jsx)("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"m250.26 195.39l5.74 122l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95"}),(0,o.jsx)("path",{fill:"currentColor",d:"M256 397.25a20 20 0 1 1 20-20a20 20 0 0 1-20 20"})]})});var me=n(46433);function he(){const{setActiveOption:e,activeOption:r}=l(),{toggleModal:n}=(0,de.X)(me.ModalName.VotingRewards),a=(0,k.s0)(),s=(0,_.z)(v.Text,{variant:"body3",color:"$statusWarning"}),i=(0,_.z)(v.Text,{variant:"body3",color:"$statusCritical"});return(0,o.jsxs)(t.Flex,{flexDirection:"column",mt:"$gap24",children:["Increase"===r&&(0,o.jsx)(le.Z,{status:"warning",icon:(0,o.jsx)(xe.X,{color:"$statusWarning",size:30}),content:(0,o.jsx)(t.Flex,{children:(0,o.jsxs)(s,{children:[(0,o.jsx)(s,{fontWeight:"$medium",children:"Note:"}),"You can increase the lock amount or"," ",(0,o.jsx)(s,{role:"button",onPress:()=>e("Extend"),textDecorationLine:"underline",cursor:"pointer",children:"Extend the lock time"}),". These actions will increase your voting power. There is no limit for the locked amount.",(0,o.jsx)(s,{role:"button",onPress:n,textDecorationLine:"underline",cursor:"pointer",children:"Learn more"})," ","on how voting works."]})})}),"Extend"===r&&(0,o.jsx)(le.Z,{status:"warning",icon:(0,o.jsx)(xe.X,{color:"$statusWarning",size:30}),content:(0,o.jsx)(t.Flex,{children:(0,o.jsxs)(s,{children:[(0,o.jsx)(s,{fontWeight:"$medium",children:"Note"}),": You can extend the locked time or"," ",(0,o.jsx)(s,{role:"button",onPress:()=>e("Increase"),textDecorationLine:"underline",cursor:"pointer",children:"increase the lock amount"}),". These actions will increase your voting power. The maximum lock time is 4 years."," ",(0,o.jsx)(s,{role:"button",onPress:n,textDecorationLine:"underline",cursor:"pointer",children:"Learn more"})," ","on how voting works."]})})}),"Merge"===r&&(0,o.jsx)(le.Z,{status:"critical",icon:(0,o.jsx)(pe,{color:"$statusCritical",size:30}),content:(0,o.jsxs)(t.Flex,{flexDirection:"column",gap:"$gap12",children:[(0,o.jsxs)(i,{children:[(0,o.jsx)(i,{fontWeight:"$medium",children:"Warning:"})," ",(0,o.jsx)(i,{children:"Merging two locks keeps the longer lock time and combines both amounts to increase your final voting power."})]}),(0,o.jsxs)(i,{children:[(0,o.jsx)(i,{children:"Merging will reset any rewards and rebases. Before continuing, please sure you have"})," ",(0,o.jsx)(i,{role:"button",onPress:()=>a("/dash"),textDecorationLine:"underline",cursor:"pointer",children:"claimed all available rewards."})]})]})}),"Transfer"===r&&(0,o.jsx)(le.Z,{status:"critical",icon:(0,o.jsx)(pe,{color:"$statusCritical",size:30}),content:(0,o.jsx)(t.Flex,{flexDirection:"column",gap:"$gap12",children:(0,o.jsxs)(i,{children:[(0,o.jsx)(i,{fontWeight:"$medium",children:"Warning:"})," ",(0,o.jsx)(i,{children:"Transferring a lock will also transfer any rewards and rebases! Before continuing, please make sure you have"})," ",(0,o.jsx)(i,{role:"button",onPress:()=>a("/dash"),textDecorationLine:"underline",cursor:"pointer",children:"claimed all available rewards."})]})})}),(0,o.jsx)(ue.Z,{})]})}var fe=n(7602),be=n(58963),ke=n(2745);const[$e,ve]=(0,A.I)({name:"NoNfts",getIcon:e=>(0,o.jsx)(P.ny,{viewBox:"0 0 24 24",fill:"none",...e,children:(0,o.jsxs)("g",{fill:"none",stroke:"currentColor","stroke-width":"2",children:[(0,o.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 8h9m4 0h3m-9 8h9M4 16h3"}),(0,o.jsx)("circle",{cx:"9",cy:"16",r:"2"}),(0,o.jsx)("circle",{cx:"15",cy:"8",r:"2"})]})})});var je=n(89444);function we({options:e}){const{activeOption:r,setActiveOption:n}=l(),[s,i]=(0,a.useState)(!1);return(0,o.jsx)(be.J2,{children:(0,o.jsxs)(be.J2.Trigger,{onPress:()=>i(!s),children:[(0,o.jsxs)(t.Flex,{display:"none",$md:{display:"flex",flexDirection:"row",justifyContent:"space-between"},py:"$spacing12",gap:"$gap8",children:[(0,o.jsx)(v.Text,{variant:"buttonLabel3",children:r}),(0,o.jsx)("button",{role:"button",className:"button-clear",children:(0,o.jsx)($e,{size:20})})]}),(0,o.jsx)(ke.$,{isOpen:s,children:(0,o.jsx)(t.Flex,{flexDirection:"column",gap:"$gap12",$md:{pb:"$spacing24",px:"$spacing12"},children:e.map(e=>(0,o.jsx)(be.J2.Close,{asChild:!0,children:(0,o.jsx)("button",{role:"button",className:"button-clear",onClick:()=>(e=>{i(!1),n(e)})(e),children:(0,o.jsxs)(t.Flex,{row:!0,alignItems:"center",gap:"$gap12",children:[(0,o.jsx)(v.Text,{variant:"buttonLabel2",children:e}),r===e&&(0,o.jsx)(je.CheckCircleFilled,{size:16})]})},e)},e))})})]})})}const ye=$.default.button.withConfig({displayName:"ToggleOptions__StyledButton",componentId:"sc-c1064824-0"})`
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
`;function Ce({}){const{activeOption:e,setActiveOption:r}=l(),n=(0,x.useSporeColors)(),a=["Increase","Extend","Merge","Transfer"];return(0,o.jsxs)(t.Flex,{flexDirection:"column",children:[(0,o.jsx)(t.Flex,{row:!0,gap:"$gap12",px:"$spacing8",justifyContent:"space-between",$md:{display:"none"},children:a.map(t=>(0,o.jsx)(ye,{role:"button",$colors:n,className:""+(e===t?"active":""),onClick:()=>r(t),children:(0,o.jsx)(v.Text,{variant:"buttonLabel3",color:"inherit",children:t})},t))}),(0,o.jsx)(we,{options:a}),(0,o.jsx)(fe.Z,{width:"100%",mt:"-1px",height:1})]})}var Te=n(91128);const[Le,Ie]=(0,A.I)({name:"Wallet",getIcon:e=>(0,o.jsxs)(P.ny,{viewBox:"0 0 24 24",fill:"none",...e,children:[(0,o.jsx)(P.y$,{d:"M4 3.99902C2.34315 3.99902 1 5.34217 1 6.99902V17.999C1 19.6559 2.34315 20.999 4 20.999H20C21.6569 20.999 23 19.6559 23 17.999V6.99902C23 5.34217 21.6569 3.99902 20 3.99902H4ZM3 17.999V10.999C3 10.4475 3.44812 9.99902 4.00115 9.99902H19.9989C20.5519 9.99902 21 10.4475 21 10.999V17.999C21 18.5513 20.5523 18.999 20 18.999H4C3.44772 18.999 3 18.5513 3 17.999ZM19.9989 7.99902C20.3498 7.99902 20.6868 8.05931 21 8.17011V6.99902C21 6.44674 20.5523 5.99902 20 5.99902H4C3.44772 5.99902 3 6.44674 3 6.99902V8.17011C3.31318 8.05931 3.65018 7.99902 4.00115 7.99902H19.9989Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}),(0,o.jsx)(P.y$,{d:"M3 11.999V13.999H7.35465C7.9611 15.5239 9.50565 16.8562 12 16.8562C13.271 16.8562 14.3391 16.5093 15.1735 15.8493C15.9093 15.2674 16.3172 14.5566 16.5574 13.999H21V11.999H16C15.4477 11.999 14.9935 12.5275 14.7645 13.1018C14.4438 13.9062 13.789 14.8562 12 14.8562C10.29 14.8562 9.48213 13.9883 9.1936 13.2092C8.96575 12.594 8.49905 11.999 7.91447 11.999H3Z",fill:"currentColor"})]})}),Fe=(0,$.default)(t.Flex).withConfig({displayName:"Transfer__ErrorContainer",componentId:"sc-351f9af2-0"})`
  background-color: ${({$colors:e})=>e.surface2.val};
  border: 1px solid ${({$colors:e})=>e.statusCritical.val};
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
`,Me=(0,$.default)(t.Flex).withConfig({displayName:"Transfer__InputContainer",componentId:"sc-351f9af2-1"})`
  border-color: ${({$colors:e,$hasError:r})=>r?e.statusCritical.val:e.surface3.val};
  
  &:focus-within {
    border-color: ${({$colors:e,$hasError:r})=>r?e.statusCritical.val:e.neutral2.val};
  }
`;function De(){const{formData:e,updateFormData:r}=l(),{address:n}=(0,m.m)(),s=(0,x.useSporeColors)(),[i,c]=(0,a.useState)(null),d=(0,a.useCallback)(e=>e?(0,j.U)(e)?"0x0000000000000000000000000000000000000000"===e?(c("Cannot transfer to zero address"),!1):n&&e.toLowerCase()===n.toLowerCase()?(c("Cannot transfer to your own address"),!1):(c(null),!0):(c("Invalid Ethereum address format"),!1):(c(null),!0),[n]),u=(0,a.useCallback)(e=>{r({transferToAddress:e}),d(e)},[r,d]);return(0,o.jsxs)(t.Flex,{mt:"$gap36",children:[(0,o.jsx)(t.Flex,{row:!0,justifyContent:"space-between",alignItems:"center",gap:"$gap12",mb:"$gap12",children:(0,o.jsx)(v.Text,{variant:"buttonLabel3",children:"Transfer to"})}),(0,o.jsxs)(Me,{grow:!0,flexDirection:"column",gap:"$gap8",borderWidth:1,borderRadius:"$rounded12",transition:"border-color 0.3s ease",row:!0,alignItems:"center",justifyContent:"space-between",px:"$padding16",$colors:s,$hasError:!!i,children:[(0,o.jsx)(Te.II,{py:"$padding20",placeholderTextColor:"$neutral3",placeholder:"0x1dc25...890",fontSize:"$medium",backgroundColor:"none",width:"100%",value:e.transferToAddress,onChangeText:u}),(0,o.jsx)(Le,{size:"$icon.20",color:"$neutral3"})]}),i?(0,o.jsx)(Fe,{$colors:s,children:(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap8",alignItems:"center",children:[(0,o.jsx)(J.u,{size:"$icon.16",color:s.statusCritical.val}),(0,o.jsx)(v.Text,{variant:"body3",color:s.statusCritical.val,children:i})]})}):(0,o.jsx)(v.Text,{variant:"body3",color:"$neutral3",mt:"$gap12",children:"Wallet address where the lock will be transferred. This action cannot be undone."}),e.transferToAddress&&!i&&(0,o.jsx)(t.Flex,{mt:"$gap12",p:"$padding12",backgroundColor:"$surface2",borderRadius:"$rounded8",children:(0,o.jsxs)(v.Text,{variant:"body3",color:"$neutral2",children:["Lock will be transferred to: ",e.transferToAddress]})})]})}function Pe(){const{address:e}=(0,m.m)(),{activeOption:r,selectedLockId:n,formData:a}=l(),{data:s}=(0,d.G_)(n||void 0),{data:i}=(0,d.Zz)(e),c=(0,x.useSporeColors)(),{lockTime:h,votingPower:f}=(()=>{if(!s)return{lockTime:0,votingPower:"0"};const e=parseInt(s.lockEnd),n=Math.floor(Date.now()/1e3),o=Math.max(0,(0,p.i8)(e-n));switch(r){case"Increase":if(!a.increaseAmount)return{lockTime:o,votingPower:s.votingPower};try{const e=(0,g.b)(BigInt(s.amount),18),r=parseFloat(e)+parseFloat(a.increaseAmount);return{lockTime:o,votingPower:(0,p.q_)(r.toString(),o)}}catch(t){return console.error("Error calculating increase values:",t),{lockTime:o,votingPower:s.votingPower}}case"Extend":try{const e=(0,g.b)(BigInt(s.amount),18);if(a.extendToMaxLock)return{lockTime:0,votingPower:e};if(a.extendDays>0){const r=o+a.extendDays;return{lockTime:r,votingPower:(0,p.q_)(e,r)}}return{lockTime:o,votingPower:s.votingPower}}catch(t){return console.error("Error calculating extend values:",t),{lockTime:o,votingPower:s.votingPower}}case"Merge":if(!a.selectedMergeLockId)return{lockTime:o,votingPower:s.votingPower};try{if(!i)return{lockTime:o,votingPower:s.votingPower};const e=i.find(e=>e.id===a.selectedMergeLockId);if(!e)return{lockTime:o,votingPower:s.votingPower};const r=BigInt(s.amount)+BigInt(e.amount),t=(0,g.b)(r,18);let c,l,d=!1;if(s.permanent||e.permanent)d=!0,c=0;else{const r=parseInt(s.lockEnd),o=parseInt(e.lockEnd),t=Math.max(r,o),a=Math.max(0,t-n);c=(0,p.i8)(a)}return l=d?t:(0,p.q_)(t,c),{lockTime:c,votingPower:l}}catch(t){return console.error("Error calculating merge values:",t),{lockTime:o,votingPower:s.votingPower}}default:return{lockTime:o,votingPower:s.votingPower}}})();return(0,o.jsxs)(t.Flex,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${c.surface2.variable} 0%, transparent 100%)`},children:[(0,o.jsx)(Ce,{}),"Increase"===r&&(0,o.jsx)(G,{}),"Extend"===r&&(0,o.jsx)(X,{}),"Merge"===r&&(0,o.jsx)(ce,{}),"Transfer"===r&&(0,o.jsx)(De,{}),(0,o.jsx)(t.Flex,{mt:"$gap24",children:(0,o.jsx)(u.Z,{votingPower:f,lockDuration:h})}),(0,o.jsx)(he,{}),(0,o.jsx)(D,{})]})}var Ae=n(58870),Ee=n(48763),Se=n(60759),_e=n(25236);function Ne(){const e=(0,x.useSporeColors)(),r=(0,Se.GS)(),{selectedLockId:n}=l(),{data:a,isLoading:i,error:c}=(0,d.G_)(n||void 0),u=((0,_.z)(v.Text,{variant:"body3",color:"$neutral2",fontSize:"$mdall"}),()=>(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,o.jsx)(s.Link,{to:"/locks",className:"text-decoration-none",children:(0,o.jsx)(t.Flex,{backgroundColor:"$accent2",transition:"background-color 0.2s ease",hoverStyle:{backgroundColor:"$accent2Hovered"},padding:"$spacing8",borderRadius:"$rounded8",children:(0,o.jsx)(_e.B,{size:16})})}),(0,o.jsx)(v.Text,{variant:r.md?"subheading1":"heading3",children:"Manage Lock"})]}));return i?(0,o.jsxs)(t.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,o.jsx)(u,{}),(0,o.jsx)(fe.Z,{width:"100%",my:"$spacing16",height:1}),(0,o.jsx)(v.Text,{variant:"body3",color:"$neutral2",children:"Loading lock details..."})]}):c||!a?(0,o.jsxs)(t.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,o.jsx)(u,{}),(0,o.jsx)(fe.Z,{width:"100%",my:"$spacing16",height:1}),(0,o.jsx)(v.Text,{variant:"body3",color:"$statusCritical",children:n?"Failed to load lock details":"No lock selected"})]}):(0,o.jsxs)(t.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",children:[(0,o.jsx)(u,{}),(0,o.jsx)(fe.Z,{width:"100%",my:"$spacing16",height:1}),(0,o.jsxs)(t.Flex,{row:!0,justifyContent:"space-between",gap:"$gap12",alignItems:"center",$md:{flexDirection:"column",alignItems:"flex-start"},children:[(0,o.jsxs)(t.Flex,{className:"left",row:!0,gap:"$gap12",children:[(0,o.jsx)(t.Flex,{height:40,width:40,centered:!0,borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface2Hovered",style:{background:`linear-gradient(90deg, ${e.surface2.variable} 0%, ${e.slate.variable} 40%, ${e.surface2.variable} 60%, ${e.slate.variable} 100%)`},children:(0,o.jsx)(Ae.Z,{size:24,color:e.neutral1Hovered.val})}),(0,o.jsxs)(t.Flex,{flexDirection:"column",justifyContent:"center",gap:"$gap8",children:[(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,o.jsxs)(v.Text,{variant:"buttonLabel2",children:["Lock #",a.id]}),(0,o.jsx)(t.Flex,{children:(0,o.jsx)(Ee.Z,{size:14,color:e.accent1Hovered.val})})]}),(0,o.jsxs)(t.Flex,{row:!0,gap:"$gap16",alignItems:"center",children:[(0,o.jsxs)(v.Text,{variant:"body3",color:"$neutral2",children:[(0,p.QT)(a.amount)," ABX"]}),(0,o.jsx)(v.Text,{variant:"body3",color:"$neutral2",children:a.permanent?"Permanent Lock":(0,p.ad)(a.lockEnd)})]})]})]}),(0,o.jsx)(t.Flex,{children:(0,o.jsx)(s.Link,{className:"text-decoration-none inline-flex",to:"/locks",children:(0,o.jsx)(v.Text,{py:"$spacing8",px:"$spacing12",variant:"buttonLabel3",borderRadius:"$roundedFull",backgroundColor:"$surface3",cursor:"pointer",transition:"all 0.2s ease-in-out",color:"$neutral1",hoverStyle:{backgroundColor:"$surface1",color:"$accent1"},children:"Change"})})})]})]})}function ze(){return(0,o.jsx)(c,{children:(0,o.jsxs)(t.Flex,{mt:"$spacing24",width:"100%",px:"$spacing40",maxWidth:680,pb:"$spacing40",$xl:{px:"$spacing12",mx:"auto"},flexDirection:"column",gap:"$gap12",children:[(0,o.jsx)(Ne,{}),(0,o.jsx)(Pe,{})]})})}}}]);
//# sourceMappingURL=819.b053e5a7.chunk.js.map