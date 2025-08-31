"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7726],{43800:(e,r,t)=>{t.d(r,{Z:()=>p});var o=t(97755),n=t(92717),a=t(20128),i=t(71949),s=t(19671),l=t(60759),c=t(82746),d=t(59793),u=t(34786);function p({address:e}){const r=(0,s.useSporeColors)(),[t,p]=(0,n.Z)(),x=!(0,l.GS)().md&&!t,f=(0,a.useCallback)(()=>{p(e)},[e,p]);return(0,o.jsxs)(c.Flex,{row:!0,gap:"$gap8",onPress:f,cursor:"pointer",alignItems:"center",children:[(0,o.jsx)(d.Text,{variant:"body4",color:r.neutral2.val,children:(0,u.shortenAddress)(e)}),(0,o.jsx)(i.Z,{"data-testid":"breadcrumb-hover-copy",size:13,color:x?r.neutral3.val:"transparent"})]})}},54761:(e,r,t)=>{t.d(r,{Z:()=>s});var o=t(97755),n=t(82746),a=t(87389),i=t(86235);function s({children:e}){const{termsAccepted:r,setTermsAccepted:t}=(0,i.wV)(),s=r;return(0,o.jsxs)(n.Flex,{row:!0,gap:"$gap12",onPress:()=>t(!s),backgroundColor:s?"$surface2":"$slate",px:"$spacing12",py:"$spacing24",borderRadius:"$rounded12",borderWidth:1,borderColor:s?"$surface3":"$surface2",children:[(0,o.jsx)(a.X,{size:"$icon.16",checked:s}),e]})}},86235:(e,r,t)=>{t.d(r,{Ff:()=>i,wV:()=>s});var o=t(97755),n=t(20128);const a=(0,n.createContext)(null),i=({children:e})=>{const[r,t]=(0,n.useState)("step-1"),[i,s]=(0,n.useState)(),[l,c]=(0,n.useState)(),[d,u]=(0,n.useState)(),[p,x]=(0,n.useState)(!1),[f,b]=(0,n.useState)(-1),[g,h]=(0,n.useState)(""),[v,$]=(0,n.useState)("");return(0,o.jsx)(a.Provider,{value:{setIncentivizeStep:t,incentivizeStep:r,selectedPool:i,setSelectedPool:s,incentiveAmount:l,setIncentiveAmount:c,incentiveToken:d,setIncentiveToken:u,termsAccepted:p,setTermsAccepted:x,selectedPoolType:f,setSelectedPoolType:b,token0:g,setToken0:h,token1:v,setToken1:$},children:e})},s=()=>{const e=(0,n.useContext)(a);if(!e)throw new Error("useIncentivize must be used within a IncentivizeProvider");return e}},57726:(e,r,t)=>{t.r(r),t.d(r,{default:()=>H});var o=t(97755),n=t(82746),a=t(20128),i=t(48763),s=t(13402),l=t(11206),c=t(17041),d=t(74456),u=t(19671),p=t(59793),x=t(7602),f=t(37762);const b=(0,d.z)(n.Flex,{row:!0,gap:"$gap8",alignItems:"center"}),g=(0,d.z)(n.Flex,{width:28,height:28,borderRadius:"$roundedFull",backgroundColor:"$surface3",centered:!0}),h="\n  @keyframes pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.5;\n    }\n      100% {\n      opacity: 1;\n    }\n  }";function v(){const e=(0,u.useSporeColors)(),[r,t]=(0,a.useState)(!0),d=[{icon:i.Z,text:"Select the Lock you want to deposit",isActive:!0},{icon:i.Z,text:"Reset done for Lock #83065",isActive:!1},{icon:s.Z,text:"Confirm unlock date change",isActive:!0},{icon:l.Z,text:"Waiting for next actions...",isActive:!1}],v=e=>r&&3===e?{opacity:1,animation:"pulse 1.5s linear infinite"}:{},$=c.default.button.withConfig({displayName:"RelayDepositReviewer__Button",componentId:"sc-3ac7287a-0"})`
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
  `;return(0,o.jsxs)(n.Flex,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",gap:"$gap36",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(0,o.jsx)("style",{children:h}),(0,o.jsx)(p.Text,{variant:"buttonLabel1",children:"Relay Deposit"}),(0,o.jsx)(n.Flex,{flexDirection:"column",children:d.map((e,r)=>(0,o.jsxs)(n.Flex,{children:[r>0&&(0,o.jsx)(x.Z,{left:14,vertical:!0,minHeight:22,width:2,borderColor:"$surface3"}),(0,o.jsxs)(b,{children:[(0,o.jsx)(g,{children:(0,o.jsx)(n.Flex,{children:(0,o.jsx)(e.icon,{style:v(r),size:14,color:e.isActive?f.O9.greenVibrant:f.O9.brownVibrant})})}),(0,o.jsx)(p.Text,{variant:"body3",style:v(r),color:"$neutral2",children:e.text})]},e.text)]}))}),(0,o.jsx)($,{role:"button",children:(0,o.jsx)(p.Text,{variant:"buttonLabel2",color:"inherit",children:"Deposit"})})]})}var $=t(54761);const m=c.default.div.withConfig({displayName:"SelectOption__DropdownWrapper",componentId:"sc-2a0a13f4-0"})`
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
`,w=c.default.ul.withConfig({displayName:"SelectOption__DropdownMenu",componentId:"sc-2a0a13f4-2"})`
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
`,j=c.default.li.withConfig({displayName:"SelectOption__DropdownItem",componentId:"sc-2a0a13f4-3"})`
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
`,k=c.default.span.withConfig({displayName:"SelectOption__Arrow",componentId:"sc-2a0a13f4-4"})`
  display: inline-block;
  border: solid ${({borderColor:e})=>e||"#4a90e2"};
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 8px;
  transform: ${({isOpen:e})=>e?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,C=({options:e,defaultOption:r,onSelect:t})=>{const[n,i]=(0,a.useState)(!1),[s,l]=(0,a.useState)(!1),[c,d]=(0,a.useState)(r||e[0]),x=(0,a.useRef)(null),f=(0,a.useRef)(null),b=(0,u.useSporeColors)();(0,a.useEffect)(()=>{const e=e=>{x.current&&!x.current.contains(e.target)&&i(!1)},r=()=>{if(x.current&&f.current){const e=x.current.getBoundingClientRect(),r=f.current.offsetHeight,t=window.innerHeight-e.bottom,o=e.top;l(t<r&&o>r)}};return n&&(r(),window.addEventListener("resize",r)),document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e),window.removeEventListener("resize",r)}},[n]);const g={backgroundColor:b.surface1Hovered.val,hoverColor:b.accent3.val,borderColor:b.surface2Hovered.val,color:b.neutral1.val},h={borderColor:b.accent3.val},v={backgroundColor:b.surface1Hovered.val,borderColor:b.surface2Hovered.val},$={HoverBackgroundColor:b.surface2Hovered.val,color:b.neutral1.val,hoverColor:b.accent1.val};return(0,o.jsxs)(m,{ref:x,children:[(0,o.jsxs)(y,{onClick:()=>{i(!n)},...g,children:[(0,o.jsxs)(p.Text,{variant:"buttonLabel3",children:[" ",c]}),(0,o.jsx)(k,{isOpen:n,...h})]}),(0,o.jsx)(w,{ref:f,isOpen:n,isAbove:s,...v,children:e.map(e=>(0,o.jsx)(j,{onClick:()=>(e=>{d(e),t(e),i(!1)})(e),...$,children:(0,o.jsx)(p.Text,{variant:"body3",children:e})},e))})]})};var S=t(43800),O=t(88378),T=t.n(O);function A(){return A=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},A.apply(this,arguments)}function I(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var F=(0,a.forwardRef)(function(e,r){var t=e.color,o=void 0===t?"currentColor":t,n=e.size,i=void 0===n?24:n,s=I(e,["color","size"]);return a.createElement("svg",A({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),a.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),a.createElement("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"}))});F.propTypes={color:T().string,size:T().oneOfType([T().string,T().number])},F.displayName="Box";const L=F;function z(){const e=(0,u.useSporeColors)();return(0,o.jsxs)(n.Flex,{children:[(0,o.jsx)(p.Text,{variant:"buttonLabel3",color:"$neutral2",children:"Relay Strategy"}),(0,o.jsxs)(n.Flex,{row:!0,gap:"$gap12",mt:"$gap12",children:[(0,o.jsx)(n.Flex,{p:"$padding12",borderRadius:"$rounded12",borderColor:"$accent3",style:{background:`linear-gradient(90deg, ${e.surface2.variable} 0%, ${e.slate.variable} 40%, ${e.surface2.variable} 60%, ${e.slate.variable} 100%)`},children:(0,o.jsx)(n.Flex,{children:(0,o.jsx)(L,{size:24,color:e.neutral1Hovered.val})})}),(0,o.jsxs)(n.Flex,{flexDirection:"column",justifyContent:"center",gap:"$gap8",children:[(0,o.jsxs)(n.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,o.jsx)(p.Text,{variant:"buttonLabel3",children:"ABX Maxi"}),(0,o.jsx)(p.Text,{variant:"body4",color:"$neutral2",backgroundColor:"$surface3",py:"$padding4",px:"$padding8",borderRadius:"$rounded8",children:"ID 10298"})]}),(0,o.jsxs)(n.Flex,{row:!0,gap:"$gap16",alignItems:"center",children:[(0,o.jsx)(p.Text,{variant:"body4",color:"$neutral2",children:"Updated 5 hours ago"}),(0,o.jsx)(n.Flex,{row:!0,alignItems:"center",gap:"$gap4",children:(0,o.jsx)(S.Z,{address:"0x3470fe9a968013bb02b8496cd3c1d0a5743be76d"})})]})]})]})]})}var R=t(86683),_=t(1994);function D(){return(0,o.jsxs)(n.Flex,{row:!0,justifyContent:"space-between",gap:"$spacing16",$lg:{flexDirection:"column",alignItems:"flex-start"},alignItems:"center",children:[(0,o.jsx)(p.Text,{variant:"body3",color:"$neutral2",children:"Select the Lock you want to deposit"}),(0,o.jsx)(R.Link,{className:"text-decoration-none inline-flex",to:"/lock",children:(0,o.jsx)(_.R,{as:"button",className:"button-clear",color:"white",speed:"3s",py:10,children:(0,o.jsx)(p.Text,{variant:"buttonLabel3",color:"$neutral1",children:"Create new lock"})})})]})}function E(){const e=(0,u.useSporeColors)(),r=["your locks...","Lock #83066 with  0.001 ABX","Lock #83067 with  0.157 ABX","Lock #83068 with  541 ABX"];return(0,o.jsxs)(n.Flex,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",gap:"$gap36",borderWidth:1,borderColor:"$surface3",$lg:{gap:"$spacing24"},style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(0,o.jsx)(D,{}),(0,o.jsx)(C,{options:r,defaultOption:r[0],onSelect:()=>{}}),(0,o.jsx)(z,{}),(0,o.jsx)($.Z,{children:(0,o.jsx)(p.Text,{variant:"body3",children:"I understand that by depositing my Lock into a Relay strategy, the Lock unlock date will be extended to 4 years."})})]})}function H(){return(0,o.jsxs)(n.Flex,{gap:"$gap24",mt:"$spacing24",width:"100%",px:"$spacing40",maxWidth:1024,pb:"$spacing40","$platform-web":{display:"grid",gridTemplateColumns:"4fr 3fr"},$md:{gridTemplateColumns:"1fr"},$xl:{px:"$spacing12",mx:"auto"},children:[(0,o.jsx)(E,{}),(0,o.jsx)(v,{})]})}}}]);
//# sourceMappingURL=7726.9630c94b.chunk.js.map