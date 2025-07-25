"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3732],{28154:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={}},26067:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={}},78509:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={}},15879:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={}},34642:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a={}},57532:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var a=r(97755),o=r(71960),i=r(84308),n=r(44441),s=r(19671),l=r(82746),c=r(17041),d=r(59793);const _="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _mt-t-space-spa1360334047 _gap-t-space-gap1569 _alignItems-center ";function p(){const e=(0,s.useSporeColors)(),t=c.default.button.withConfig({displayName:"LockCreateCancelButton__Button",componentId:"sc-8c8ec855-0"})`
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
  `;return(0,a.jsxs)("div",{className:_,children:[(0,a.jsx)(t,{$lock:!0,children:(0,a.jsx)(d.Text,{variant:"buttonLabel3",color:"inherit",children:"Cancel"})}),(0,a.jsx)(t,{children:(0,a.jsx)(d.Text,{variant:"buttonLabel3",color:"inherit",children:"Create lock"})})]})}r(34642);var x=r(20128);const u=c.default.input.withConfig({displayName:"Range__StyledRange",componentId:"sc-b01f9924-0"})`
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
`,b=()=>{const[e,t]=(0,x.useState)(0),r=(0,s.useSporeColors)();return(0,a.jsxs)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _width-10037 _mt-t-space-gap1635 _mb-t-space-gap1602 ",children:[(0,a.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _position-relative _flexGrow-1 ",children:(0,a.jsx)(u,{min:"0",max:"100",value:e,onChange:e=>{t(Number(e.target.value))},list:"range-datalist",type:"range",style:{background:`linear-gradient(\n            to right,\n            ${r.accent1Hovered.val} 0%,\n            ${r.accent1Hovered.val} ${e}%,\n            ${r.accent2.val} ${e}%,\n             ${r.accent2.val} 100%\n          )`}})}),(0,a.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1569 _flexGrow-1 _mt-t-space-gap1569 ",children:["7 days","1 years","2 years","3 years","4 years"].map(e=>(0,a.jsx)(d.Text,{variant:"body4",color:"$neutral3",children:e},e))})]})};r(15879);const h="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _mt-t-space-gap1602 ";function g(){const e=(0,s.useSporeColors)();return(0,a.jsxs)(l.Flex,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(0,a.jsx)(i.Z,{title:"Amount"}),(0,a.jsx)(o.Z,{}),(0,a.jsx)(b,{}),(0,a.jsx)("div",{className:h,children:(0,a.jsx)(n.Z,{})}),(0,a.jsx)(p,{})]})}r(78509);var f=r(48763),m=r(74456);const v="  _display-flex _alignItems-center _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _height-50px _width-50px _borderTopLeftRadius-t-radius-ro1041013639 _borderTopRightRadius-t-radius-ro1041013639 _borderBottomRightRadius-t-radius-ro1041013639 _borderBottomLeftRadius-t-radius-ro1041013639 _backgroundColor-surface3 _justifyContent-center  left _display-_sm_none",k="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1573 _alignItems-center ",y="  is_Separator _display-flex _alignItems-stretch _flexDirection-column _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _borderTopColor-surface3 _borderRightColor-surface3 _borderBottomColor-surface3 _borderLeftColor-surface3 _flexShrink-1 _borderTopWidth-0px _borderRightWidth-0px _borderBottomWidth-1px _borderLeftWidth-0px _flexGrow-1 _maxHeight-0px _width-10037 _mt-t-space-spa1360334076 _mb-t-space-spa1360334076 _height-1px _borderBottomStyle-solid _borderTopStyle-solid _borderLeftStyle-solid _borderRightStyle-solid ",S="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _backgroundColor-surface2 _pt-t-space-spa1360334076 _pr-t-space-spa1360334076 _pb-t-space-spa1360334076 _pl-t-space-spa1360334076 _borderTopLeftRadius-t-radius-ro291586453 _borderTopRightRadius-t-radius-ro291586453 _borderBottomRightRadius-t-radius-ro291586453 _borderBottomLeftRadius-t-radius-ro291586453 ";function j(){const e=(0,s.useSporeColors)();(0,m.z)(d.Text,{variant:"body3",color:"$neutral2",fontSize:"$mdall"});return(0,a.jsxs)("div",{className:S,children:[(0,a.jsx)(d.Text,{variant:"buttonLabel1",children:"Create a lock "}),(0,a.jsx)("div",{className:y}),(0,a.jsxs)("div",{className:k,children:[(0,a.jsx)("div",{className:v,children:(0,a.jsx)(f.Z,{size:26,color:e.neutral1.val})}),(0,a.jsx)(d.Text,{variant:"body4",color:"$neutral2",children:"When you lock tokens, you\u2019ll receive a veNFT (voting escrow NFT). You can increase your lock amount or extend the lock duration at any time."})]})]})}r(26067);const w="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _mt-t-space-spa1360334047 _width-10037 _pr-t-space-spa1360333989 _pl-t-space-spa1360333989 _maxWidth-680px _pb-t-space-spa1360333989 _flexDirection-column _gap-t-space-gap1569  _pr-_xl_t-space-spa1360334080 _pl-_xl_t-space-spa1360334080 _mr-_xl_auto _ml-_xl_auto";function C(){return(0,a.jsxs)("div",{className:w,children:[(0,a.jsx)(j,{}),(0,a.jsx)(g,{})]})}r(28154)}}]);
//# sourceMappingURL=3732.b43a2500.chunk.js.map