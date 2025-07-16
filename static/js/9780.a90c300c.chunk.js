"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9780],{86991:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});const r={}},62977:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});const r={}},39414:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});const r={}},82886:(e,t,i)=>{i.d(t,{Z:()=>g});var r=i(97755),a=i(58870);function n(e){return(0,r.jsx)("svg",{width:e.size,height:e.size,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4C2.34315 4 1 5.34315 1 7V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V7C23 5.34315 21.6569 4 20 4H4ZM3 12.2676V11C3 10.4485 3.44812 10 4.00115 10H19.9989C20.5519 10 21 10.4485 21 11V12.2676C20.7058 12.0974 20.3643 12 20 12H16C15.4477 12 14.9935 12.5284 14.7645 13.1028C14.4438 13.9072 13.789 14.8571 12 14.8571C10.29 14.8571 9.48213 13.9893 9.1936 13.2102C8.96576 12.595 8.49905 12 7.91447 12H4C3.63571 12 3.29417 12.0974 3 12.2676ZM19.9989 8C20.3498 8 20.6868 8.06029 21 8.17109V7C21 6.44772 20.5523 6 20 6H4C3.44772 6 3 6.44772 3 7V8.17109C3.31318 8.06029 3.65018 8 4.00115 8H19.9989Z",fill:e.fill})})}var o=i(19671),s=i(82746),l=i(59793),d=i(19763),p=i(57242);const c="  _display-flex _alignItems-center _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _height-48px _width-48px _justifyContent-center _borderTopLeftRadius-t-radius-ro1041013639 _borderTopRightRadius-t-radius-ro1041013639 _borderBottomRightRadius-t-radius-ro1041013639 _borderBottomLeftRadius-t-radius-ro1041013639 _backgroundColor-neutral1 ",x="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _alignItems-center _gap-t-space-gap1573 _pt-t-space-spa1360334047 _pb-t-space-spa1360334047  _pt-_sm_t-space-spa1360334076 _pb-_sm_t-space-spa1360334076",_="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _position-absolute _pointerEvents-none _backgroundColor-rgba255000--51948809947 _height-10037 _width-10037 _top-0px _right-0px _bottom-0px _left-0px ",u="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column ";function g({type:e}){const{setStakeStep:t,setWithdrawStep:i}=(0,d.Ig)(),g=(0,o.useSporeColors)();return(0,r.jsxs)(s.Flex,{p:"$spacing24",$sm:{p:"$spacing16"},borderRadius:"$rounded12",maxWidth:700,width:"100%",style:{background:`linear-gradient(180deg, ${g.surface2.variable} 0%, transparent 100%)`},position:"relative",overflow:"hidden",children:[(0,r.jsxs)("div",{className:u,children:[(0,r.jsx)(a.B,{position:"absolute",pointerEvents:"none",size:"100%"}),(0,r.jsx)("div",{className:_})]}),(0,r.jsxs)("div",{className:x,children:[(0,r.jsx)("div",{className:c,children:(0,r.jsx)(n,{size:"24px",fill:g.surface1.val})}),(0,r.jsxs)(l.Text,{variant:"subheading1",textAlign:"center",children:["Confirm access ",(0,r.jsx)("br",{})," to ABX"]})]}),(0,r.jsx)(p.Z,{setStep:"Stake"===e?t:i})]})}i(86991)},30695:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(97755),a=i(20128),n=i(17041),o=i(59793);const s=n.default.input.attrs({type:"range"}).withConfig({displayName:"Range__StyledRange",componentId:"sc-4f6262ff-0"})`
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
`,l=()=>{const[e,t]=(0,a.useState)(0);return(0,r.jsxs)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _width-10037 _mb-t-space-gap1602 ",children:[(0,r.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _position-relative _flexGrow-1 ",children:(0,r.jsx)(s,{min:"0",max:"100",value:e,onChange:e=>{t(Number(e.target.value))},list:"range-datalist"})}),(0,r.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1569 _flexGrow-1 _mt-t-space-gap1569 ",children:["0","25","50","75","100"].map(e=>(0,r.jsxs)(o.Text,{variant:"body4",color:"$neutral2",children:[e,"%"]},e))})]})};i(62977)},73980:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(97755),a=i(17041),n=i(19671),o=i(59793),s=i(19763);const l="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _alignItems-center ";function d({type:e}){const{setStakeStep:t,setWithdrawStep:i}=(0,s.Ig)(),d=(0,n.useSporeColors)(),p=a.default.button.withConfig({displayName:"StakeAndWithdrawButton__Button",componentId:"sc-df2060f1-0"})`
    all: unset;
    padding: 16px 10px;
    background-color: ${d.accent1.val};
    color: ${d.surface1.val};
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
  `;return(0,r.jsx)("div",{className:l,children:(0,r.jsx)(p,{role:"button",onClick:()=>{"Stake"===e?t("step-2"):i("step-2")},children:(0,r.jsx)(o.Text,{variant:"buttonLabel3",color:"inherit",children:e})})})}i(39414)},64038:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(97755),a=i(74456),n=i(59793),o=i(82746);const s=(0,a.z)(n.Text,{textAlign:"right"}),l=(0,a.z)(o.Flex,{flexDirection:"column",className:"lock-time",px:"$padding12",py:"$spacing24",borderRadius:"$rounded12",gap:"$gap8",backgroundColor:"$surface2Hovered"});function d(){return(0,r.jsxs)(o.Flex,{"$platform-web":{display:"grid",gridTemplateColumns:"1fr 1fr"},gap:"$gap12",children:[(0,r.jsxs)(l,{children:[(0,r.jsx)(s,{variant:"heading3",children:" 1 ETH"}),(0,r.jsx)(s,{variant:"body3",color:"$neutral3",children:"~$2000.254"})]})," ",(0,r.jsxs)(l,{children:[(0,r.jsx)(s,{variant:"heading3",children:" 1 ABX"}),(0,r.jsx)(s,{variant:"body3",color:"$neutral2",children:"~$300.254"})]})]})}}}]);
//# sourceMappingURL=9780.a90c300c.chunk.js.map