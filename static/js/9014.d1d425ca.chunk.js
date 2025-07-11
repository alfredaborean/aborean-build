"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9014],{1870:(e,o,r)=>{r.r(o),r.d(o,{default:()=>t});const t={}},57415:(e,o,r)=>{r.r(o),r.d(o,{default:()=>t});const t={}},41178:(e,o,r)=>{r.r(o),r.d(o,{default:()=>t});const t={}},53423:(e,o,r)=>{r.r(o),r.d(o,{default:()=>t});const t={}},9217:(e,o,r)=>{r.r(o),r.d(o,{default:()=>t});const t={}},43800:(e,o,r)=>{r.d(o,{Z:()=>x});var t=r(97755),i=r(92717),n=r(20128),a=r(71949),s=r(19671),l=r(60759),d=r(59793),c=r(34786);const p="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap56 _cursor-pointer _alignItems-center ";function x({address:e}){const o=(0,s.useSporeColors)(),[r,x]=(0,i.Z)(),u=!(0,l.GS)().md&&!r,f=(0,n.useCallback)((()=>{x(e)}),[e,x]);return(0,t.jsxs)("div",{onClick:f,className:p,children:[(0,t.jsx)(d.Text,{variant:"body4",color:o.neutral2.val,children:(0,c.shortenAddress)(e)}),(0,t.jsx)(a.Z,{"data-testid":"breadcrumb-hover-copy",size:13,color:u?o.neutral3.val:"transparent"})]})}r(9217)},89014:(e,o,r)=>{r.r(o),r.d(o,{default:()=>M});var t=r(97755),i=r(82746),n=r(20128),a=r(48763),s=r(13402),l=r(11206),d=r(17041),c=r(74456),p=r(19671),x=r(59793),u=r(37762);const f="  is_Separator _display-flex _alignItems-stretch _flexDirection-column _flexBasis-auto _boxSizing-border-box _position-relative _minWidth-0px _flexShrink-1 _borderTopWidth-0px _borderRightWidth-0--25px _borderBottomWidth-0px _borderLeftWidth-0px _flexGrow-1 _height-initial _maxHeight-initial _left-14px _width-2px _maxWidth-0px _borderBottomStyle-solid _borderRightStyle-solid _minHeight-22px _borderTopColor-surface3 _borderRightColor-surface3 _borderBottomColor-surface3 _borderLeftColor-surface3 _borderTopStyle-solid _borderLeftStyle-solid _transform-translateY01303033 ",b="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column ",_=(0,c.z)(i.Flex,{row:!0,gap:"$gap8",alignItems:"center"}),h=(0,c.z)(i.Flex,{width:28,height:28,borderRadius:"$roundedFull",backgroundColor:"$surface3",centered:!0}),g="\n  @keyframes pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.5;\n    }\n      100% {\n      opacity: 1;\n    }\n  }";function m(){const e=(0,p.useSporeColors)(),[o,r]=(0,n.useState)(!0),c=[{icon:a.Z,text:"Select the Lock you want to deposit",isActive:!0},{icon:a.Z,text:"Reset done for Lock #83065",isActive:!1},{icon:s.Z,text:"Confirm unlock date change",isActive:!0},{icon:l.Z,text:"Waiting for next actions...",isActive:!1}],m=e=>o&&3===e?{opacity:1,animation:"pulse 1.5s linear infinite"}:{},v=d.default.button.withConfig({displayName:"RelayDepositReviewer__Button",componentId:"sc-5129026f-0"})`
    all: unset;
    padding: 16px 10px;
    background-color: ${e.accent1.val};
    color: ${e.surface1.val};
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
  `;return(0,t.jsxs)(i.Flex,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",gap:"$gap36",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(0,t.jsx)("style",{children:g}),(0,t.jsx)(x.Text,{variant:"buttonLabel1",children:"Relay Deposit"}),(0,t.jsx)("div",{className:b,children:c.map(((e,o)=>(0,t.jsxs)("div",{className:b,children:[o>0&&(0,t.jsx)("div",{className:f}),(0,t.jsxs)(_,{children:[(0,t.jsx)(h,{children:(0,t.jsx)(e.icon,{style:m(o),size:14,color:e.isActive?u.O9.greenVibrant:u.O9.brownVibrant})}),(0,t.jsx)(x.Text,{variant:"body3",style:m(o),color:"$neutral2",children:e.text})]},e.text)]})))}),(0,t.jsx)(v,{role:"button",children:(0,t.jsx)(x.Text,{variant:"buttonLabel2",color:"inherit",children:"Deposit"})})]})}r(57415);const v=d.default.div.withConfig({displayName:"SelectOption__DropdownWrapper",componentId:"sc-2a0a13f4-0"})`
  position: relative;
  width: 100%;
`,y=d.default.button.withConfig({displayName:"SelectOption__SelectedOption",componentId:"sc-2a0a13f4-1"})`
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

  &:hover {
    border-color: ${({hoverColor:e})=>e||"#4a90e2"};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    border-color: ${({hoverColor:e})=>e||"#4a90e2"};
  }
`,C=d.default.ul.withConfig({displayName:"SelectOption__DropdownMenu",componentId:"sc-2a0a13f4-2"})`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({backgroundColor:e})=>e||"#ffffff"};
  border: 1px solid ${({borderColor:e})=>e||"#ffffff"};
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: ${({isOpen:e})=>e?1:0};
  transform: ${({isOpen:e,isAbove:o})=>e?"translateY(0)":o?"translateY(-90%)":"translateY(-10px)"};
  top: ${({isAbove:e})=>e?"auto":"100%"};
  bottom: ${({isAbove:e})=>e?"100%":"auto"};
  margin: ${({isAbove:e})=>e?"0 0 4px 0":"4px 0 0 0"};
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  transition: all 0.3s ease;
  z-index: 10;
`,j=d.default.li.withConfig({displayName:"SelectOption__DropdownItem",componentId:"sc-2a0a13f4-3"})`
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
`,w=d.default.span.withConfig({displayName:"SelectOption__Arrow",componentId:"sc-2a0a13f4-4"})`
  display: inline-block;
  border: solid ${({borderColor:e})=>e||"#4a90e2"};
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 8px;
  transform: ${({isOpen:e})=>e?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,k=({options:e,defaultOption:o,onSelect:r})=>{const[i,a]=(0,n.useState)(!1),[s,l]=(0,n.useState)(!1),[d,c]=(0,n.useState)(o||e[0]),u=(0,n.useRef)(null),f=(0,n.useRef)(null),b=(0,p.useSporeColors)();(0,n.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&a(!1)},o=()=>{if(u.current&&f.current){const e=u.current.getBoundingClientRect(),o=f.current.offsetHeight,r=window.innerHeight-e.bottom,t=e.top;l(r<o&&t>o)}};return i&&(o(),window.addEventListener("resize",o)),document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e),window.removeEventListener("resize",o)}}),[i]);const _={backgroundColor:b.surface1Hovered.val,hoverColor:b.accent3.val,borderColor:b.surface2Hovered.val,color:b.neutral1.val},h={borderColor:b.accent3.val},g={backgroundColor:b.surface1Hovered.val,borderColor:b.surface2Hovered.val},m={HoverBackgroundColor:b.surface2Hovered.val,color:b.neutral1.val,hoverColor:b.accent1.val};return(0,t.jsxs)(v,{ref:u,children:[(0,t.jsxs)(y,{onClick:()=>{a(!i)},..._,children:[(0,t.jsxs)(x.Text,{variant:"buttonLabel3",children:[" ",d]}),(0,t.jsx)(w,{isOpen:i,...h})]}),(0,t.jsx)(C,{ref:f,isOpen:i,isAbove:s,...g,children:e.map((e=>(0,t.jsx)(j,{onClick:()=>(e=>{c(e),r(e),a(!1)})(e),...m,children:(0,t.jsx)(x.Text,{variant:"body3",children:e})},e)))})]})};var $=r(43800),S=r(565);const L="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _alignItems-center _gap-t-space-gap52 ",B="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1573 _alignItems-center ",O="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _alignItems-center ",R="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _justifyContent-center _gap-t-space-gap56 ",z="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _mt-t-space-gap1569 ",T="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column ";function W(){const e=(0,p.useSporeColors)();return(0,t.jsxs)("div",{className:T,children:[(0,t.jsx)(x.Text,{variant:"buttonLabel3",color:"$neutral2",children:"Relay Strategy"}),(0,t.jsxs)("div",{className:z,children:[(0,t.jsx)(i.Flex,{p:"$padding12",borderRadius:"$rounded12",borderColor:"$accent3",style:{background:`linear-gradient(90deg, ${e.surface2.variable} 0%, ${e.slate.variable} 40%, ${e.surface2.variable} 60%, ${e.slate.variable} 100%)`},children:(0,t.jsx)(S.Z,{size:24,color:e.neutral1Hovered.val})}),(0,t.jsxs)("div",{className:R,children:[(0,t.jsxs)("div",{className:O,children:[(0,t.jsx)(x.Text,{variant:"buttonLabel3",children:"ABX Maxi"}),(0,t.jsx)(x.Text,{variant:"body4",color:"$neutral2",backgroundColor:"$surface3",py:"$padding4",px:"$padding8",borderRadius:"$rounded8",children:"ID 10298"})]}),(0,t.jsxs)("div",{className:B,children:[(0,t.jsx)(x.Text,{variant:"body4",color:"$neutral2",children:"Updated 5 hours ago"}),(0,t.jsx)("div",{className:L,children:(0,t.jsx)($.Z,{address:"0x3470fe9a968013bb02b8496cd3c1d0a5743be76d"})})]})]})]})]})}r(1870);var D=r(86683);const H="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1569 ";function I(){return(0,t.jsxs)("div",{className:H,children:[(0,t.jsx)(x.Text,{variant:"body3",color:"$neutral2",children:"Select the Lock you want to deposit"}),(0,t.jsx)(D.Link,{className:"text-decoration-none inline-flex",to:"/lock",children:(0,t.jsx)(x.Text,{variant:"buttonLabel3",transition:"color 0.2s ease",textDecorationColor:"transparent",textDecorationLine:"underline",hoverStyle:{textDecorationColor:"$accent1"},children:"Create new lock"})})]})}r(53423);var N=r(87389),A=r(90418);const E=" _borderTopColor-transparent _borderRightColor-transparent _borderBottomColor-transparent _borderLeftColor-transparent",Z=" _borderTopColor-surface3 _borderRightColor-surface3 _borderBottomColor-surface3 _borderLeftColor-surface3",F=" _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _backgroundColor-slate _pt-t-space-spa1360334080 _pr-t-space-spa1360334080 _pb-t-space-spa1360334080 _pl-t-space-spa1360334080 _borderTopLeftRadius-t-radius-ro291586453 _borderTopRightRadius-t-radius-ro291586453 _borderBottomRightRadius-t-radius-ro291586453 _borderBottomLeftRadius-t-radius-ro291586453 _borderTopWidth-1px _borderRightWidth-1px _borderBottomWidth-1px _borderLeftWidth-1px _borderBottomStyle-solid _borderTopStyle-solid _borderLeftStyle-solid _borderRightStyle-solid  ";function X(){const[e,o]=(0,n.useState)(!1);return(0,t.jsxs)("div",{onClick:()=>o(!e),className:(0,A.Ej)(""+(F+(e?Z:E))),children:[(0,t.jsx)(N.X,{size:"$icon.16",checked:e}),(0,t.jsx)(x.Text,{children:"I understand that by depositing my Lock into a Relay strategy, the Lock unlock date will be extended to 4 years."})]})}function Y(){const e=(0,p.useSporeColors)(),o=["your locks...","Lock #83066 with  0.001 ABX","Lock #83067 with  0.157 ABX","Lock #83068 with  541 ABX"];return(0,t.jsxs)(i.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",gap:"$gap36",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(0,t.jsx)(I,{}),(0,t.jsx)(k,{options:o,defaultOption:o[0],onSelect:()=>{}}),(0,t.jsx)(W,{}),(0,t.jsx)(X,{})]})}function M(){return(0,t.jsxs)(i.Flex,{gap:"$gap24",mt:"$spacing24",width:"100%",px:"$spacing40",maxWidth:1024,pb:"$spacing40","$platform-web":{display:"grid",gridTemplateColumns:"4fr 3fr"},$sm:{gridTemplateColumns:"1fr"},$xl:{px:"$spacing12",mx:"auto"},children:[(0,t.jsx)(Y,{}),(0,t.jsx)(m,{})]})}r(41178)},565:(e,o,r)=>{r.d(o,{Z:()=>d});var t=r(20128),i=r(88378),n=r.n(i);function a(){return a=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function s(e,o){if(null==e)return{};var r,t,i=function(e,o){if(null==e)return{};var r,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||(i[r]=e[r]);return i}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=(0,t.forwardRef)((function(e,o){var r=e.color,i=void 0===r?"currentColor":r,n=e.size,l=void 0===n?24:n,d=s(e,["color","size"]);return t.createElement("svg",a({ref:o,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),t.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),t.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),t.createElement("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"}))}));l.propTypes={color:n().string,size:n().oneOfType([n().string,n().number])},l.displayName="Box";const d=l}}]);
//# sourceMappingURL=9014.d1d425ca.chunk.js.map