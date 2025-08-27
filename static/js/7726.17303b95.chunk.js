"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7726],{43800:(e,r,o)=>{o.d(r,{Z:()=>p});var n=o(97755),t=o(92717),a=o(20128),i=o(71949),l=o(19671),s=o(60759),c=o(82746),d=o(59793),u=o(34786);function p({address:e}){const r=(0,l.useSporeColors)(),[o,p]=(0,t.Z)(),x=!(0,s.GS)().md&&!o,f=(0,a.useCallback)(()=>{p(e)},[e,p]);return(0,n.jsxs)(c.Flex,{row:!0,gap:"$gap8",onPress:f,cursor:"pointer",alignItems:"center",children:[(0,n.jsx)(d.Text,{variant:"body4",color:r.neutral2.val,children:(0,u.shortenAddress)(e)}),(0,n.jsx)(i.Z,{"data-testid":"breadcrumb-hover-copy",size:13,color:x?r.neutral3.val:"transparent"})]})}},54761:(e,r,o)=>{o.d(r,{Z:()=>l});var n=o(97755),t=o(20128),a=o(82746),i=o(87389);function l({children:e}){const[r,o]=(0,t.useState)(!1);return(0,n.jsxs)(a.Flex,{row:!0,gap:"$gap12",onPress:()=>o(!r),backgroundColor:r?"$surface2":"$slate",px:"$spacing12",py:"$spacing24",borderRadius:"$rounded12",borderWidth:1,borderColor:r?"$surface3":"$surface2",children:[(0,n.jsx)(i.X,{size:"$icon.16",checked:r}),e]})}},57726:(e,r,o)=>{o.r(r),o.d(r,{default:()=>Z});var n=o(97755),t=o(82746),a=o(20128),i=o(48763),l=o(13402),s=o(11206),c=o(17041),d=o(74456),u=o(19671),p=o(59793),x=o(7602),f=o(37762);const g=(0,d.z)(t.Flex,{row:!0,gap:"$gap8",alignItems:"center"}),b=(0,d.z)(t.Flex,{width:28,height:28,borderRadius:"$roundedFull",backgroundColor:"$surface3",centered:!0}),h="\n  @keyframes pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.5;\n    }\n      100% {\n      opacity: 1;\n    }\n  }";function v(){const e=(0,u.useSporeColors)(),[r,o]=(0,a.useState)(!0),d=[{icon:i.Z,text:"Select the Lock you want to deposit",isActive:!0},{icon:i.Z,text:"Reset done for Lock #83065",isActive:!1},{icon:l.Z,text:"Confirm unlock date change",isActive:!0},{icon:s.Z,text:"Waiting for next actions...",isActive:!1}],v=e=>r&&3===e?{opacity:1,animation:"pulse 1.5s linear infinite"}:{},$=c.default.button.withConfig({displayName:"RelayDepositReviewer__Button",componentId:"sc-3ac7287a-0"})`
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
  `;return(0,n.jsxs)(t.Flex,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",gap:"$gap36",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(0,n.jsx)("style",{children:h}),(0,n.jsx)(p.Text,{variant:"buttonLabel1",children:"Relay Deposit"}),(0,n.jsx)(t.Flex,{flexDirection:"column",children:d.map((e,r)=>(0,n.jsxs)(t.Flex,{children:[r>0&&(0,n.jsx)(x.Z,{left:14,vertical:!0,minHeight:22,width:2,borderColor:"$surface3"}),(0,n.jsxs)(g,{children:[(0,n.jsx)(b,{children:(0,n.jsx)(t.Flex,{children:(0,n.jsx)(e.icon,{style:v(r),size:14,color:e.isActive?f.O9.greenVibrant:f.O9.brownVibrant})})}),(0,n.jsx)(p.Text,{variant:"body3",style:v(r),color:"$neutral2",children:e.text})]},e.text)]}))}),(0,n.jsx)($,{role:"button",children:(0,n.jsx)(p.Text,{variant:"buttonLabel2",color:"inherit",children:"Deposit"})})]})}var $=o(54761);const m=c.default.div.withConfig({displayName:"SelectOption__DropdownWrapper",componentId:"sc-2a0a13f4-0"})`
  position: relative;
  width: 100%;
`,y=c.default.button.withConfig({displayName:"SelectOption__SelectedOption",componentId:"sc-2a0a13f4-1"})`
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
`,j=c.default.ul.withConfig({displayName:"SelectOption__DropdownMenu",componentId:"sc-2a0a13f4-2"})`
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
`,w=c.default.li.withConfig({displayName:"SelectOption__DropdownItem",componentId:"sc-2a0a13f4-3"})`
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
`,C=c.default.span.withConfig({displayName:"SelectOption__Arrow",componentId:"sc-2a0a13f4-4"})`
  display: inline-block;
  border: solid ${({borderColor:e})=>e||"#4a90e2"};
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 8px;
  transform: ${({isOpen:e})=>e?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,k=({options:e,defaultOption:r,onSelect:o})=>{const[t,i]=(0,a.useState)(!1),[l,s]=(0,a.useState)(!1),[c,d]=(0,a.useState)(r||e[0]),x=(0,a.useRef)(null),f=(0,a.useRef)(null),g=(0,u.useSporeColors)();(0,a.useEffect)(()=>{const e=e=>{x.current&&!x.current.contains(e.target)&&i(!1)},r=()=>{if(x.current&&f.current){const e=x.current.getBoundingClientRect(),r=f.current.offsetHeight,o=window.innerHeight-e.bottom,n=e.top;s(o<r&&n>r)}};return t&&(r(),window.addEventListener("resize",r)),document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e),window.removeEventListener("resize",r)}},[t]);const b={backgroundColor:g.surface1Hovered.val,hoverColor:g.accent3.val,borderColor:g.surface2Hovered.val,color:g.neutral1.val},h={borderColor:g.accent3.val},v={backgroundColor:g.surface1Hovered.val,borderColor:g.surface2Hovered.val},$={HoverBackgroundColor:g.surface2Hovered.val,color:g.neutral1.val,hoverColor:g.accent1.val};return(0,n.jsxs)(m,{ref:x,children:[(0,n.jsxs)(y,{onClick:()=>{i(!t)},...b,children:[(0,n.jsxs)(p.Text,{variant:"buttonLabel3",children:[" ",c]}),(0,n.jsx)(C,{isOpen:t,...h})]}),(0,n.jsx)(j,{ref:f,isOpen:t,isAbove:l,...v,children:e.map(e=>(0,n.jsx)(w,{onClick:()=>(e=>{d(e),o(e),i(!1)})(e),...$,children:(0,n.jsx)(p.Text,{variant:"body3",children:e})},e))})]})};var O=o(43800),S=o(88378),L=o.n(S);function F(){return F=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},F.apply(this,arguments)}function A(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var I=(0,a.forwardRef)(function(e,r){var o=e.color,n=void 0===o?"currentColor":o,t=e.size,i=void 0===t?24:t,l=A(e,["color","size"]);return a.createElement("svg",F({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),a.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),a.createElement("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"}))});I.propTypes={color:L().string,size:L().oneOfType([L().string,L().number])},I.displayName="Box";const R=I;function T(){const e=(0,u.useSporeColors)();return(0,n.jsxs)(t.Flex,{children:[(0,n.jsx)(p.Text,{variant:"buttonLabel3",color:"$neutral2",children:"Relay Strategy"}),(0,n.jsxs)(t.Flex,{row:!0,gap:"$gap12",mt:"$gap12",children:[(0,n.jsx)(t.Flex,{p:"$padding12",borderRadius:"$rounded12",borderColor:"$accent3",style:{background:`linear-gradient(90deg, ${e.surface2.variable} 0%, ${e.slate.variable} 40%, ${e.surface2.variable} 60%, ${e.slate.variable} 100%)`},children:(0,n.jsx)(t.Flex,{children:(0,n.jsx)(R,{size:24,color:e.neutral1Hovered.val})})}),(0,n.jsxs)(t.Flex,{flexDirection:"column",justifyContent:"center",gap:"$gap8",children:[(0,n.jsxs)(t.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,n.jsx)(p.Text,{variant:"buttonLabel3",children:"ABX Maxi"}),(0,n.jsx)(p.Text,{variant:"body4",color:"$neutral2",backgroundColor:"$surface3",py:"$padding4",px:"$padding8",borderRadius:"$rounded8",children:"ID 10298"})]}),(0,n.jsxs)(t.Flex,{row:!0,gap:"$gap16",alignItems:"center",children:[(0,n.jsx)(p.Text,{variant:"body4",color:"$neutral2",children:"Updated 5 hours ago"}),(0,n.jsx)(t.Flex,{row:!0,alignItems:"center",gap:"$gap4",children:(0,n.jsx)(O.Z,{address:"0x3470fe9a968013bb02b8496cd3c1d0a5743be76d"})})]})]})]})]})}var _=o(86683),z=o(1994);function D(){return(0,n.jsxs)(t.Flex,{row:!0,justifyContent:"space-between",gap:"$spacing16",$lg:{flexDirection:"column",alignItems:"flex-start"},alignItems:"center",children:[(0,n.jsx)(p.Text,{variant:"body3",color:"$neutral2",children:"Select the Lock you want to deposit"}),(0,n.jsx)(_.Link,{className:"text-decoration-none inline-flex",to:"/lock",children:(0,n.jsx)(z.R,{as:"button",className:"button-clear",color:"white",speed:"3s",py:10,children:(0,n.jsx)(p.Text,{variant:"buttonLabel3",color:"$neutral1",children:"Create new lock"})})})]})}function H(){const e=(0,u.useSporeColors)(),r=["your locks...","Lock #83066 with  0.001 ABX","Lock #83067 with  0.157 ABX","Lock #83068 with  541 ABX"];return(0,n.jsxs)(t.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",gap:"$gap36",borderWidth:1,borderColor:"$surface3",$lg:{gap:"$spacing24"},style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(0,n.jsx)(D,{}),(0,n.jsx)(k,{options:r,defaultOption:r[0],onSelect:()=>{}}),(0,n.jsx)(T,{}),(0,n.jsx)($.Z,{children:(0,n.jsx)(p.Text,{variant:"body3",children:"I understand that by depositing my Lock into a Relay strategy, the Lock unlock date will be extended to 4 years."})})]})}function Z(){return(0,n.jsxs)(t.Flex,{gap:"$gap24",mt:"$spacing24",width:"100%",px:"$spacing40",maxWidth:1024,pb:"$spacing40","$platform-web":{display:"grid",gridTemplateColumns:"4fr 3fr"},$md:{gridTemplateColumns:"1fr"},$xl:{px:"$spacing12",mx:"auto"},children:[(0,n.jsx)(H,{}),(0,n.jsx)(v,{})]})}}}]);
//# sourceMappingURL=7726.17303b95.chunk.js.map