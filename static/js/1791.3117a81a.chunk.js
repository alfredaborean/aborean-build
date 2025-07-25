"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1791],{42043:(e,i,t)=>{t.r(i),t.d(i,{default:()=>r});const r={}},79592:(e,i,t)=>{t.r(i),t.d(i,{default:()=>r});const r={}},62977:(e,i,t)=>{t.r(i),t.d(i,{default:()=>r});const r={}},39414:(e,i,t)=>{t.r(i),t.d(i,{default:()=>r});const r={}},82886:(e,i,t)=>{t.d(i,{Z:()=>h});var r=t(97755),o=t(58870);function a(e){return(0,r.jsx)("svg",{width:e.size,height:e.size,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4C2.34315 4 1 5.34315 1 7V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V7C23 5.34315 21.6569 4 20 4H4ZM3 12.2676V11C3 10.4485 3.44812 10 4.00115 10H19.9989C20.5519 10 21 10.4485 21 11V12.2676C20.7058 12.0974 20.3643 12 20 12H16C15.4477 12 14.9935 12.5284 14.7645 13.1028C14.4438 13.9072 13.789 14.8571 12 14.8571C10.29 14.8571 9.48213 13.9893 9.1936 13.2102C8.96576 12.595 8.49905 12 7.91447 12H4C3.63571 12 3.29417 12.0974 3 12.2676ZM19.9989 8C20.3498 8 20.6868 8.06029 21 8.17109V7C21 6.44772 20.5523 6 20 6H4C3.44772 6 3 6.44772 3 7V8.17109C3.31318 8.06029 3.65018 8 4.00115 8H19.9989Z",fill:e.fill})})}var s=t(19671),n=t(82746),l=t(59793),d=t(19763),p=t(57242);const _="  _display-flex _alignItems-center _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _height-48px _width-48px _justifyContent-center _borderTopLeftRadius-t-radius-ro1041013639 _borderTopRightRadius-t-radius-ro1041013639 _borderBottomRightRadius-t-radius-ro1041013639 _borderBottomLeftRadius-t-radius-ro1041013639 _backgroundColor-neutral1 ",x="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _alignItems-center _gap-t-space-gap1573 _pt-t-space-spa1360334047 _pb-t-space-spa1360334047  _pt-_md_t-space-spa1360334076 _pb-_md_t-space-spa1360334076",c="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _position-absolute _pointerEvents-none _backgroundColor-rgba255000--51948809947 _height-10037 _width-10037 _top-0px _right-0px _bottom-0px _left-0px ",u="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column ";function h({type:e}){const{setStakeStep:i,setWithdrawStep:t}=(0,d.Ig)(),h=(0,s.useSporeColors)();return(0,r.jsxs)(n.Flex,{p:"$spacing24",$md:{p:"$spacing16"},borderRadius:"$rounded12",maxWidth:700,width:"100%",style:{background:`linear-gradient(180deg, ${h.surface2.variable} 0%, transparent 100%)`},position:"relative",overflow:"hidden",children:[(0,r.jsxs)("div",{className:u,children:[(0,r.jsx)(o.B,{position:"absolute",pointerEvents:"none",size:"100%"}),(0,r.jsx)("div",{className:c})]}),(0,r.jsxs)("div",{className:x,children:[(0,r.jsx)("div",{className:_,children:(0,r.jsx)(a,{size:"24px",fill:h.surface1.val})}),(0,r.jsxs)(l.Text,{variant:"subheading1",textAlign:"center",children:["Confirm access ",(0,r.jsx)("br",{})," to ABX"]})]}),(0,r.jsx)(p.Z,{setStep:"Stake"===e?i:t})]})}t(42043)},30695:(e,i,t)=>{t.d(i,{Z:()=>d});var r=t(97755),o=t(20128),a=t(17041),s=t(19671),n=t(59793);const l=a.default.input.withConfig({displayName:"Range__StyledRange",componentId:"sc-4f153cc6-0"})`
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
`,d=()=>{const[e,i]=(0,o.useState)(0),t=(0,s.useSporeColors)();return(0,r.jsxs)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _width-10037 _mb-t-space-gap1602 ",children:[(0,r.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _position-relative _flexGrow-1 ",children:(0,r.jsx)(l,{type:"range",style:{background:`linear-gradient(\n            to right,\n            ${t.accent1Hovered.val} 0%,\n            ${t.accent1Hovered.val} ${e}%,\n            ${t.accent2.val} ${e}%,\n             ${t.accent2.val} 100%\n          )`},min:"0",max:"100",value:e,onChange:e=>{i(Number(e.target.value))},list:"range-datalist"})}),(0,r.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1569 _flexGrow-1 _mt-t-space-gap1569 ",children:["0","25","50","75","100"].map(e=>(0,r.jsxs)(n.Text,{variant:"body4",color:"$neutral2",children:[e,"%"]},e))})]})};t(62977)},73980:(e,i,t)=>{t.d(i,{Z:()=>d});var r=t(97755),o=t(17041),a=t(19671),s=t(59793),n=t(19763);const l="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _alignItems-center ";function d({type:e}){const{setStakeStep:i,setWithdrawStep:t}=(0,n.Ig)(),d=(0,a.useSporeColors)(),p=o.default.button.withConfig({displayName:"StakeAndWithdrawButton__Button",componentId:"sc-a68d7517-0"})`
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
  `;return(0,r.jsx)("div",{className:l,children:(0,r.jsx)(p,{role:"button",onClick:()=>{"Stake"===e?i("step-2"):t("step-2")},children:(0,r.jsx)(s.Text,{variant:"buttonLabel3",color:"inherit",children:e})})})}t(39414)},64038:(e,i,t)=>{t.d(i,{Z:()=>d});var r=t(97755),o=t(74456),a=t(59793),s=t(82746);const n=(0,o.z)(a.Text,{textAlign:"right"}),l=(0,o.z)(s.Flex,{flexDirection:"column",className:"lock-time",px:"$padding12",py:"$spacing18",borderRadius:"$rounded12",gap:"$gap8",backgroundColor:"$surface2Hovered"});function d(){return(0,r.jsxs)(s.Flex,{"$platform-web":{display:"grid",gridTemplateColumns:"1fr 1fr"},gap:"$gap12",$md:{gridTemplateColumns:"1fr"},children:[(0,r.jsxs)(l,{children:[(0,r.jsx)(n,{variant:"heading3",children:" 1 ETH"}),(0,r.jsx)(n,{variant:"body3",color:"$neutral3",children:"~$2000.254"})]})," ",(0,r.jsxs)(l,{children:[(0,r.jsx)(n,{variant:"heading3",children:" 1 ABX"}),(0,r.jsx)(n,{variant:"body3",color:"$neutral2",children:"~$300.254"})]})]})}},16687:(e,i,t)=>{t.d(i,{Z:()=>y});var r=t(97755),o=t(58870),a=t(15346),s=t(24547),n=t(18015),l=t(48937),d=t(19671),p=t(74456),_=t(59793),x=t(82746),c=t(71797),u=t(46433);const h="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569  right",g="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _alignItems-center ",b="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _justifyContent-center _gap-t-space-gap52 ",f="  _display-flex _alignItems-center _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _ml--10px _height-34px _width-34px _backgroundColor-neutral1 _justifyContent-center _borderTopLeftRadius-t-radius-ro1041013639 _borderTopRightRadius-t-radius-ro1041013639 _borderBottomRightRadius-t-radius-ro1041013639 _borderBottomLeftRadius-t-radius-ro1041013639 ",m="  _display-flex _alignItems-center _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _height-34px _width-34px _backgroundColor-neutral1 _justifyContent-center _borderTopLeftRadius-t-radius-ro1041013639 _borderTopRightRadius-t-radius-ro1041013639 _borderBottomRightRadius-t-radius-ro1041013639 _borderBottomLeftRadius-t-radius-ro1041013639 ",v="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _alignItems-center ",j="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569  left",S="  is_Separator _display-flex _alignItems-stretch _flexDirection-column _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-1 _borderTopWidth-0px _borderRightWidth-0px _borderBottomWidth-1px _borderLeftWidth-0px _flexGrow-1 _maxHeight-0px _mt-t-space-spa1360334047 _mb-t-space-spa1360334047 _width-10037 _borderTopColor-surface3 _borderRightColor-surface3 _borderBottomColor-surface3 _borderLeftColor-surface3 _height-1px _borderBottomStyle-solid _borderTopStyle-solid _borderLeftStyle-solid _borderRightStyle-solid  _mt-_md_t-space-spa1360334047 _mb-_md_t-space-spa1360334047",k="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _pt-t-space-spa1360334047 _pr-t-space-spa1360334047 _pb-t-space-spa1360334047 _pl-t-space-spa1360334047 _borderTopLeftRadius-t-radius-ro291586453 _borderTopRightRadius-t-radius-ro291586453 _borderBottomRightRadius-t-radius-ro291586453 _borderBottomLeftRadius-t-radius-ro291586453 _width-10037 _backgroundColor-surface2  _pt-_md_t-space-spa1360334076 _pr-_md_t-space-spa1360334076 _pb-_md_t-space-spa1360334076 _pl-_md_t-space-spa1360334076";function y({type:e}){const i=(0,d.useSporeColors)(),{toggleModal:t}=(0,n.X)(u.ModalName.PoolInfo),y=(0,p.z)(l.zx,{py:"$padding16",px:"$padding16",borderRadius:"$rounded16",transition:"all 0.3s ease",backgroundColor:"$surface3",width:"100%",hoverStyle:{backgroundColor:"$surface3Hovered"}});return(0,r.jsxs)("div",{className:k,children:[(0,r.jsx)(_.Text,{variant:"subheading1",children:e}),(0,r.jsx)("div",{className:S}),(0,r.jsxs)(x.Flex,{group:!0,row:!0,justifyContent:"space-between",gap:"$gap24",$md:{flexDirection:"column",justifyContent:"flex-start"},children:[(0,r.jsxs)("div",{className:j,children:[(0,r.jsxs)("div",{className:v,children:[(0,r.jsx)("div",{className:m,children:(0,r.jsx)(o.Z,{color:i.surface1.val,size:24})})," ",(0,r.jsx)("div",{className:f,children:(0,r.jsx)(o.Z,{color:i.surface1.val,size:24})})]}),(0,r.jsxs)("div",{className:b,children:[(0,r.jsxs)("div",{className:g,children:[(0,r.jsx)(_.Text,{variant:"subheading2",children:"WETH/USDC"})," ",(0,r.jsx)(s.ud,{text:"Pool Trading Fee",size:s.Oz.Max,placement:"top",children:(0,r.jsx)(_.Text,{backgroundColor:"$surface3",py:"$padding4",px:"$padding8",borderRadius:"$rounded8",variant:"body4",cursor:"pointer",hoverStyle:{backgroundColor:"$surface3Hovered"},children:"0.23%"})}),(0,r.jsx)(s.ud,{text:(0,r.jsx)(a.Z,{}),size:s.Oz.Max,placement:"top",children:(0,r.jsx)(x.Flex,{transition:"opacity 0.3s ease",opacity:0,"$group-hover":{opacity:1},children:(0,r.jsx)(c.InfoCircleFilled,{size:"$icon.16",color:"$neutral2"})})})]}),(0,r.jsx)(_.Text,{variant:"body4",fontWeight:"$medium",color:"$neutral2",children:"Basic Volatile"})]})]}),(0,r.jsx)("div",{className:h,children:(0,r.jsx)(y,{onPress:t,children:(0,r.jsx)(_.Text,{variant:"buttonLabel4",children:"Pool info"})})})]})]})}t(79592)}}]);
//# sourceMappingURL=1791.3117a81a.chunk.js.map