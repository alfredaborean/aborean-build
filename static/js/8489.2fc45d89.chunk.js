"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8489],{8489:(e,a,n)=>{n.r(a),n.d(a,{StakeLpModal:()=>j,WithdrawLpModal:()=>S,default:()=>L});var r=n(9990),t=n(94597),o=n(56934),i=n(34476),s=n(40214),d=n(49458),c=n(99940),l=n(98902),u=n(54407),p=n(12016),h=n(48526),b=n(96690),g=n(7451),k=n(22352),$=n(38571);function x(e,a,n,r,t,o,i){try{var s=e[o](i),d=s.value}catch(c){return void n(c)}s.done?a(d):Promise.resolve(d).then(r,t)}const f=u.default.input.withConfig({displayName:"GaugeLpAmountModal__InputSlider",componentId:"sc-85a5a807-0"})`
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
`,m=u.default.button.withConfig({displayName:"GaugeLpAmountModal__SliderButton",componentId:"sc-85a5a807-1"})`
  all: unset;
  padding: 4px 6px;
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.surface3};
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({theme:e})=>e.surface2Hovered};
  }
`,w=u.default.button.withConfig({displayName:"GaugeLpAmountModal__Button",componentId:"sc-85a5a807-2"})`
  all: unset;
  padding: 12px 10px;
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e,$isDisabled:a,$bg:n})=>a?e.surface2:"white"===n?e.neutral1:e.surface2};
  color: ${({theme:e,$bg:a})=>"white"===a?e.surface1:e.neutral1};
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
`;function y(e,a=18){if(0n===e)return"0.0000";const n=e.toString().padStart(a+1,"0"),r=n.slice(0,-a),t=n.slice(-a).slice(0,12);return`${Number(r).toLocaleString()}.${t}`}function v({mode:e}){const a=(0,p.D)(),n="stake"===e?k.ModalName.StakeLP:k.ModalName.WithdrawLP,{closeModal:u}=(0,c.u)(n),{initialPosition:v,isV2:j,gauge:S,availableRaw:L}=function(e){var a;const n=(0,o.IM)(),r=(null===(a=n)||void 0===a?void 0:a.version)===t.rg.V2,i=(0,d.S)(n),s=(0,l.useMemo)(()=>{if(!r)return 0n;if("stake"===e)try{return BigInt(i.unstakedLPBalanceRaw||"0")}catch{return 0n}try{return BigInt(i.rawStakedBalance||"0")}catch{return 0n}},[r,e,i.unstakedLPBalanceRaw,i.rawStakedBalance]);return{initialPosition:n,isV2:r,gauge:i,availableRaw:s}}(e),[P,C]=(0,l.useState)(100),I=(0,l.useMemo)(()=>{console.log(P);try{return L*BigInt(Math.round(P))/100n}catch{return 0n}},[L,P]);if(!v)return null;const M=`${v.currency0Amount.currency.symbol}-${v.currency1Amount.currency.symbol}`,E="stake"===e?"Stake":"Unstake",Y=j?"stake"===e?"Choose how much of your available LP to stake in the gauge.":"Choose how much of your staked LP to withdraw.":"Partial amounts are only available for V2 LP tokens.",_=function(){var a,n=(a=function*(){try{let a;"stake"===e?(a=yield S.stakePosition(v.tokenId||"",I),i.O.addPopup({type:s.n.StakeSuccess,content:{type:"success",title:"Stake Submitted",description:`Staking ${M} LP (${y(I)} tokens).`,action:"stake"}},`stake-partial-${v.poolId}`)):(a=yield S.unstakePosition(v.tokenId||"",I),i.O.addPopup({type:s.n.UnstakeSuccess,content:{type:"success",title:"Unstake Submitted",description:`Unstaking ${M} LP (${y(I)} tokens).`,action:"unstake"}},`unstake-partial-${v.poolId}`))}catch(a){return void i.O.addPopup({type:"stake"===e?s.n.StakeError:s.n.UnstakeError,content:{type:"error",title:"stake"===e?"Failed to Stake":"Failed to Unstake",description:(0,$.errorToString)(a),action:e}},`${e}-partial-error-${v.poolId}`)}finally{u()}},function(){var e=this,n=arguments;return new Promise(function(r,t){var o=a.apply(e,n);function i(e){x(o,r,t,i,s,"next",e)}function s(e){x(o,r,t,i,s,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}}(),B=0n===L||0n===I||S.isLoading;return(0,r.jsx)(g.Modal,{name:n,onClose:u,isDismissible:!0,gap:"$gap16",padding:"$padding16",children:(0,r.jsxs)(h.s,{gap:"$gap16",children:[(0,r.jsxs)(h.s,{gap:"$gap8",children:[(0,r.jsxs)(b.EY,{variant:"subheading2",children:[E," LP"]}),(0,r.jsx)(b.EY,{variant:"body3",color:"$neutral2",children:Y})]}),(0,r.jsxs)(h.s,{gap:"$gap8",children:[(0,r.jsxs)(h.s,{row:!0,justifyContent:"space-between",children:[(0,r.jsx)(b.EY,{variant:"body3",color:"$neutral3",children:"Available"}),(0,r.jsxs)(b.EY,{variant:"body3",children:[y(L)," LP"]})]}),(0,r.jsxs)(h.s,{row:!0,justifyContent:"space-between",children:[(0,r.jsx)(b.EY,{variant:"body3",color:"$neutral3",children:"Selected"}),(0,r.jsxs)(h.s,{row:!0,gap:"$gap4",children:[(0,r.jsxs)(b.EY,{variant:"body3",children:[y(I)," LP "]}),(0,r.jsx)(h.s,{width:38,backgroundColor:"$surface2",borderWidth:1,borderColor:"$surface3",px:"$padding6",py:"$padding4",borderRadius:"$rounded12",centered:!0,children:(0,r.jsxs)(b.EY,{variant:"body4",color:"$neutral1",children:[P,"%"]})})]})]})]}),(0,r.jsxs)(h.s,{mt:"$gap8",gap:"$gap12",children:[(0,r.jsx)(h.s,{backgroundColor:"$surface1Hovered",borderRadius:"$rounded12",padding:"$spacing12",borderWidth:1,borderColor:"$surface2",children:(0,r.jsx)(h.s,{className:"wrap",position:"relative",children:(0,r.jsx)(f,{type:"range",value:P,min:0,max:100,step:1,onChange:e=>C(Number(e.target.value)),style:{background:`linear-gradient(\n                    to right,\n                    ${a.accent1Hovered.val} 0%,\n                    ${a.accent1Hovered.val} ${P}%,\n                    ${a.accent2.val} ${P}%,\n                     ${a.accent2.val} 100%\n                  )`}})})}),(0,r.jsx)(h.s,{row:!0,justifyContent:"flex-end",gap:"$gap8",children:[25,50,75,100].map(e=>(0,r.jsx)(m,{onClick:()=>C(e),children:(0,r.jsxs)(b.EY,{variant:"buttonLabel4",children:[e,"%"]})},e))})]}),(0,r.jsxs)(h.s,{row:!0,gap:"$gap8",children:[(0,r.jsx)(w,{onClick:u,children:(0,r.jsx)(b.EY,{variant:"buttonLabel3",children:"Cancel"})}),(0,r.jsx)(w,{onClick:_,$isDisabled:B,$bg:"white",children:(0,r.jsx)(b.EY,{variant:"buttonLabel3",color:B?"$neutral3":"$surface1",children:E})})]})]})})}function j(){return(0,r.jsx)(v,{mode:"stake"})}function S(){return(0,r.jsx)(v,{mode:"withdraw"})}const L=j}}]);
//# sourceMappingURL=8489.2fc45d89.chunk.js.map