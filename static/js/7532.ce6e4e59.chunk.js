"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7532],{28154:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});const i={}},28698:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});const i={}},57962:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});const i={}},15879:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});const i={}},56905:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});const i={}},21392:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});const i={}},37785:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});const i={}},34642:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});const i={}},57532:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$});var i=r(97755),a=r(71960),o=r(44441),n=r(41610),s=r(19671),l=r(82746),d=r(17041),c=r(59793);const p="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _mt-t-space-spa1360334047 _gap-t-space-gap1569 _alignItems-center ";function _(){const e=(0,s.useSporeColors)(),t=d.default.button.withConfig({displayName:"LockCreateCancelButton__Button",componentId:"sc-954a3e40-0"})`
    all: unset;
    padding: 16px 10px;
    background-color: ${t=>t.$lock?e.surface2Hovered.val:e.accent1.val};
    color: ${t=>t.$lock?e.neutral1.val:e.surface1.val};
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    transition: all 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
  `;return(0,i.jsxs)("div",{className:p,children:[(0,i.jsx)(t,{$lock:!0,children:(0,i.jsx)(c.Text,{variant:"buttonLabel3",color:"inherit",children:"Cancel"})}),(0,i.jsx)(t,{children:(0,i.jsx)(c.Text,{variant:"buttonLabel3",color:"inherit",children:"Create Lock"})})]})}r(34642);var x=r(20128);const u=d.default.input.attrs({type:"range"}).withConfig({displayName:"Range__StyledRange",componentId:"sc-56545ca8-0"})`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(255, 255, 255, 0.85) ${e=>e.value}%,
    rgba(255, 255, 255, 0.25) ${e=>e.value}%,
    rgba(255, 255, 255, 0.25) 100%
  );
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
`,b=()=>{const[e,t]=(0,x.useState)(0);return(0,i.jsxs)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _width-10037 _mt-t-space-gap1635 _mb-t-space-gap1602 ",children:[(0,i.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _position-relative _flexGrow-1 ",children:(0,i.jsx)(u,{min:"0",max:"100",value:e,onChange:e=>{t(Number(e.target.value))},list:"range-datalist"})}),(0,i.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1569 _flexGrow-1 _mt-t-space-gap1569 ",children:["7 days","1 years","2 years","3 years","4 years"].map((e=>(0,i.jsx)(c.Text,{variant:"body4",color:"$neutral3",children:e},e)))})]})};r(15879);const h="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _mt-t-space-gap1569 ",g="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _mt-t-space-gap1573 ";function f(){const e=(0,s.useSporeColors)();return(0,i.jsxs)(l.Flex,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)("div",{className:g,children:(0,i.jsx)(n.Z,{})}),(0,i.jsx)(b,{}),(0,i.jsx)("div",{className:h,children:(0,i.jsx)(o.Z,{})}),(0,i.jsx)(_,{})]})}r(57962);var m=r(48763),v=r(74456);const y="  _display-flex _alignItems-center _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _height-50px _width-50px _borderTopLeftRadius-t-radius-ro1041013639 _borderTopRightRadius-t-radius-ro1041013639 _borderBottomRightRadius-t-radius-ro1041013639 _borderBottomLeftRadius-t-radius-ro1041013639 _backgroundColor-surface3 _justifyContent-center  left",k="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1573 _alignItems-center ",j="  is_Separator _display-flex _alignItems-stretch _flexDirection-column _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _borderTopColor-surface3 _borderRightColor-surface3 _borderBottomColor-surface3 _borderLeftColor-surface3 _flexShrink-1 _borderTopWidth-0px _borderRightWidth-0px _borderBottomWidth-1px _borderLeftWidth-0px _flexGrow-1 _maxHeight-0px _width-10037 _mt-t-space-spa1360334076 _mb-t-space-spa1360334076 _height-1px _borderBottomStyle-solid _borderTopStyle-solid _borderLeftStyle-solid _borderRightStyle-solid ",S="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _backgroundColor-surface2 _pt-t-space-spa1360334076 _pr-t-space-spa1360334076 _pb-t-space-spa1360334076 _pl-t-space-spa1360334076 _borderTopLeftRadius-t-radius-ro291586453 _borderTopRightRadius-t-radius-ro291586453 _borderBottomRightRadius-t-radius-ro291586453 _borderBottomLeftRadius-t-radius-ro291586453 ";function w(){const e=(0,s.useSporeColors)();(0,v.z)(c.Text,{variant:"body3",color:"$neutral2",fontSize:"$small"});return(0,i.jsxs)("div",{className:S,children:[(0,i.jsxs)(c.Text,{variant:"buttonLabel1",children:["Create a lock"," "]}),(0,i.jsx)("div",{className:j}),(0,i.jsxs)("div",{className:k,children:[(0,i.jsx)("div",{className:y,children:(0,i.jsx)(m.Z,{size:26,color:e.neutral1.val})}),(0,i.jsx)(c.Text,{variant:"body4",color:"$neutral2",children:"When you lock tokens, you\u2019ll receive a veNFT (voting escrow NFT). You can increase your lock amount or extend the lock duration at any time."})]})]})}r(28698);const C="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _mt-t-space-spa1360334047 _width-10037 _pr-t-space-spa1360333989 _pl-t-space-spa1360333989 _maxWidth-680px _pb-t-space-spa1360333989 _flexDirection-column _gap-t-space-gap1569  _pr-_xl_t-space-spa1360334080 _pl-_xl_t-space-spa1360334080 _mr-_xl_auto _ml-_xl_auto";function $(){return(0,i.jsxs)("div",{className:C,children:[(0,i.jsx)(w,{}),(0,i.jsx)(f,{})]})}r(28154)},71960:(e,t,r)=>{r.d(t,{Z:()=>p});var i=r(97755),a=r(58870),o=r(20128),n=r(82746),s=r(59793),l=r(91128);const d="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexGrow-1 _flexDirection-column _gap-t-space-gap56 ",c="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _backgroundColor-slate _pt-t-space-pad1331704925 _pb-t-space-pad1331704925 _pr-t-space-pad1331704900 _pl-t-space-pad1331704900 _borderTopLeftRadius-t-radius-ro291586453 _borderTopRightRadius-t-radius-ro291586453 _borderBottomRightRadius-t-radius-ro291586453 _borderBottomLeftRadius-t-radius-ro291586453 _gap-t-space-gap56 _alignItems-center ";function p(){const e=(0,o.useRef)(null),[t,r]=(0,o.useState)("");return(0,i.jsxs)(n.Flex,{row:!0,$sm:{},mt:"$gap24",px:"$spacing16",py:"$spacing16",borderWidth:1,borderColor:"$surface3",justifyContent:"space-between",alignItems:"center",gap:"$gap12",borderRadius:"$rounded12",tabIndex:0,onPress:()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.focus()},cursor:"ibeam",focusWithinStyle:{borderColor:"$neutral2"},transition:"border-color 0.3s ease",children:[(0,i.jsxs)("div",{className:c,children:[(0,i.jsx)(a.Z,{size:20})," ",(0,i.jsx)(s.Text,{variant:"buttonLabel2",children:"ABX"})]}),(0,i.jsxs)("div",{className:d,children:[(0,i.jsx)(l.II,{ref:e,py:"$padding20",textAlign:"right",placeholder:"0",fontSize:"28px",backgroundColor:"none",width:"100%",inputMode:"numeric",keyboardType:"numeric",value:t,onChangeText:e=>{const t=e.replace(/[^0-9.]/g,"");r(t)}}),(0,i.jsx)(s.Text,{variant:"body3",color:"$neutral3",textAlign:"right",children:"~$0"})]})]})}r(21392)},44441:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(97755),a=r(74456),o=r(59793),n=r(82746);const s="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1569 ",l=(0,a.z)(o.Text,{textAlign:"right"}),d=(0,a.z)(n.Flex,{grow:!0,flexDirection:"column",className:"lock-time",p:"$padding12",borderRadius:"$rounded12",gap:"$gap8",backgroundColor:"$surface2Hovered"});function c(){return(0,i.jsxs)("div",{className:s,children:[(0,i.jsxs)(d,{children:[(0,i.jsx)(l,{variant:"body3",color:"$neutral3",children:"Lock time"}),(0,i.jsx)(l,{variant:"heading3",children:"4 years"})]}),(0,i.jsxs)(d,{children:[(0,i.jsx)(l,{variant:"body3",color:"$neutral3",children:"Estimated voting power"}),(0,i.jsx)(l,{variant:"heading3",children:"40 ABX"})]})]})}r(56905)},41610:(e,t,r)=>{r.d(t,{Z:()=>d});var i=r(97755),a=r(17041),o=r(19671),n=r(59793);const s="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap56 ",l="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1569 _alignItems-center ";function d(){const e=(0,o.useSporeColors)(),t=a.default.button.withConfig({displayName:"ShareBalancePercentage__Button",componentId:"sc-bb277fcd-0"})`
    all: unset;
    padding: 2px 10px;
    background-color: ${e.surface2Hovered.val};
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
  `;return(0,i.jsxs)("div",{className:l,children:[(0,i.jsx)(n.Text,{variant:"body3",color:"$neutral3",children:"Select a share of your balance"}),(0,i.jsx)("div",{className:s,children:["10","25","50","75","100"].map((e=>(0,i.jsx)(t,{role:"button",children:(0,i.jsxs)(n.Text,{variant:"body4",fontWeight:"$medium",children:[e,"%"]})},e)))})]})}r(37785)}}]);
//# sourceMappingURL=7532.ce6e4e59.chunk.js.map