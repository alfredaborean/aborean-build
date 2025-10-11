"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5563],{99642:(e,r,t)=>{t.d(r,{A:()=>b});var o=t(9990),n=t(18691),a=t(38732),i=t(90153),s=t(98902),l=t(69375),c=t(12016),d=t(72283),u=t(48526),p=t(96690),f=t(16172);function b({address:e}){const r=(0,c.D)(),[t,b]=(0,i.A)(),g=((0,d.Qf)(),(0,s.useCallback)(()=>{b(e)},[e,b]));return(0,o.jsxs)(u.s,{position:"relative",children:[(0,o.jsx)(n.N,{children:(0,o.jsx)(a.P.div,{whileTap:{scale:.96},exit:{scale:1},transition:{duration:.3,ease:"linear"},children:(0,o.jsxs)(u.s,{row:!0,gap:"$gap4",onPress:g,cursor:"pointer",alignItems:"center",children:[(0,o.jsx)(p.EY,{variant:"body4",color:r.neutral2.val,children:(0,f.shortenAddress)(e)}),(0,o.jsx)(u.s,{p:"$spacing4",children:(0,o.jsx)(l.A,{"data-testid":"breadcrumb-hover-copy",size:13,color:r.neutral3.val})})]})})}),(0,o.jsx)(p.EY,{opacity:t?1:0,transition:"opacity 0.2s linear",variant:"body3",position:"absolute",bottom:"calc(100% + 6px)",right:0,width:62,textAlign:"center",backgroundColor:"$surface2",borderWidth:1,borderColor:"$surface3",borderRadius:"$rounded8",padding:"$spacing4",color:"$neutral1",children:"Copied!"})]})}},44244:(e,r,t)=>{t.d(r,{A:()=>s});var o=t(9990),n=t(48526),a=t(33519),i=t(96764);function s({children:e}){const{termsAccepted:r,setTermsAccepted:t}=(0,i.Zv)(),s=r;return(0,o.jsxs)(n.s,{row:!0,gap:"$gap12",onPress:()=>t(!s),backgroundColor:s?"$surface2":"$slate",px:"$spacing12",py:"$spacing24",borderRadius:"$rounded12",borderWidth:1,borderColor:s?"$surface3":"$surface2",children:[(0,o.jsx)(a.S,{size:"$icon.16",checked:s}),e]})}},96764:(e,r,t)=>{t.d(r,{Mm:()=>i,Zv:()=>s});var o=t(9990),n=t(98902);const a=(0,n.createContext)(null),i=({children:e})=>{const[r,t]=(0,n.useState)("step-1"),[i,s]=(0,n.useState)(),[l,c]=(0,n.useState)(),[d,u]=(0,n.useState)(),[p,f]=(0,n.useState)(!1),[b,g]=(0,n.useState)(!0),[x,h]=(0,n.useState)(-1),[v,$]=(0,n.useState)(""),[m,y]=(0,n.useState)("");return(0,o.jsx)(a.Provider,{value:{setIncentivizeStep:t,incentivizeStep:r,selectedPool:i,setSelectedPool:s,incentiveAmount:l,setIncentiveAmount:c,incentiveToken:d,setIncentiveToken:u,termsAccepted:p,setTermsAccepted:f,hasValidBalance:b,setHasValidBalance:g,selectedPoolType:x,setSelectedPoolType:h,token0:v,setToken0:$,token1:m,setToken1:y},children:e})},s=()=>{const e=(0,n.useContext)(a);if(!e)throw new Error("useIncentivize must be used within a IncentivizeProvider");return e}},25563:(e,r,t)=>{t.r(r),t.d(r,{default:()=>B});var o=t(9990),n=t(48526),a=t(98902),i=t(91433),s=t(25096),l=t(16210),c=t(54407),d=t(68371),u=t(12016),p=t(96690),f=t(75790),b=t(91323);const g=(0,d.I)(n.s,{row:!0,gap:"$gap8",alignItems:"center"}),x=(0,d.I)(n.s,{width:28,height:28,borderRadius:"$roundedFull",backgroundColor:"$surface3",centered:!0}),h="\n  @keyframes pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.5;\n    }\n      100% {\n      opacity: 1;\n    }\n  }";function v(){const e=(0,u.D)(),[r,t]=(0,a.useState)(!0),d=[{icon:i.A,text:"Select the Lock you want to deposit",isActive:!0},{icon:i.A,text:"Reset done for Lock #83065",isActive:!1},{icon:s.A,text:"Confirm unlock date change",isActive:!0},{icon:l.A,text:"Waiting for next actions...",isActive:!1}],v=e=>r&&3===e?{opacity:1,animation:"pulse 1.5s linear infinite"}:{},$=c.default.button.withConfig({displayName:"RelayDepositReviewer__Button",componentId:"sc-3ac7287a-0"})`
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
  `;return(0,o.jsxs)(n.s,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",gap:"$gap36",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(0,o.jsx)("style",{children:h}),(0,o.jsx)(p.EY,{variant:"buttonLabel1",children:"Relay Deposit"}),(0,o.jsx)(n.s,{flexDirection:"column",children:d.map((e,r)=>(0,o.jsxs)(n.s,{children:[r>0&&(0,o.jsx)(f.w,{left:14,vertical:!0,minHeight:22,width:2,borderColor:"$surface3"}),(0,o.jsxs)(g,{children:[(0,o.jsx)(x,{children:(0,o.jsx)(n.s,{children:(0,o.jsx)(e.icon,{style:v(r),size:14,color:e.isActive?b.Tj.greenVibrant:b.Tj.brownVibrant})})}),(0,o.jsx)(p.EY,{variant:"body3",style:v(r),color:"$neutral2",children:e.text})]},e.text)]}))}),(0,o.jsx)($,{role:"button",children:(0,o.jsx)(p.EY,{variant:"buttonLabel2",color:"inherit",children:"Deposit"})})]})}var $=t(44244);const m=c.default.div.withConfig({displayName:"SelectOption__DropdownWrapper",componentId:"sc-2a0a13f4-0"})`
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
`,k=c.default.span.withConfig({displayName:"SelectOption__Arrow",componentId:"sc-2a0a13f4-4"})`
  display: inline-block;
  border: solid ${({borderColor:e})=>e||"#4a90e2"};
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 8px;
  transform: ${({isOpen:e})=>e?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,C=({options:e,defaultOption:r,onSelect:t})=>{const[n,i]=(0,a.useState)(!1),[s,l]=(0,a.useState)(!1),[c,d]=(0,a.useState)(r||e[0]),f=(0,a.useRef)(null),b=(0,a.useRef)(null),g=(0,u.D)();(0,a.useEffect)(()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&i(!1)},r=()=>{if(f.current&&b.current){const e=f.current.getBoundingClientRect(),r=b.current.offsetHeight,t=window.innerHeight-e.bottom,o=e.top;l(t<r&&o>r)}};return n&&(r(),window.addEventListener("resize",r)),document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e),window.removeEventListener("resize",r)}},[n]);const x={backgroundColor:g.surface1Hovered.val,hoverColor:g.accent3.val,borderColor:g.surface2Hovered.val,color:g.neutral1.val},h={borderColor:g.accent3.val},v={backgroundColor:g.surface1Hovered.val,borderColor:g.surface2Hovered.val},$={HoverBackgroundColor:g.surface2Hovered.val,color:g.neutral1.val,hoverColor:g.accent1.val};return(0,o.jsxs)(m,{ref:f,children:[(0,o.jsxs)(y,{onClick:()=>{i(!n)},...x,children:[(0,o.jsxs)(p.EY,{variant:"buttonLabel3",children:[" ",c]}),(0,o.jsx)(k,{isOpen:n,...h})]}),(0,o.jsx)(j,{ref:b,isOpen:n,isAbove:s,...v,children:e.map(e=>(0,o.jsx)(w,{onClick:()=>(e=>{d(e),t(e),i(!1)})(e),...$,children:(0,o.jsx)(p.EY,{variant:"body3",children:e})},e))})]})};var A=t(99642),S=t(24862),O=t.n(S);function E(){return E=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},E.apply(this,arguments)}function I(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var L=(0,a.forwardRef)(function(e,r){var t=e.color,o=void 0===t?"currentColor":t,n=e.size,i=void 0===n?24:n,s=I(e,["color","size"]);return a.createElement("svg",E({ref:r,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),a.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),a.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),a.createElement("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"}))});L.propTypes={color:O().string,size:O().oneOfType([O().string,O().number])},L.displayName="Box";const z=L;function D(){const e=(0,u.D)();return(0,o.jsxs)(n.s,{children:[(0,o.jsx)(p.EY,{variant:"buttonLabel3",color:"$neutral2",children:"Relay Strategy"}),(0,o.jsxs)(n.s,{row:!0,gap:"$gap12",mt:"$gap12",children:[(0,o.jsx)(n.s,{p:"$padding12",borderRadius:"$rounded12",borderColor:"$accent3",style:{background:`linear-gradient(90deg, ${e.surface2.variable} 0%, ${e.slate.variable} 40%, ${e.surface2.variable} 60%, ${e.slate.variable} 100%)`},children:(0,o.jsx)(n.s,{children:(0,o.jsx)(z,{size:24,color:e.neutral1Hovered.val})})}),(0,o.jsxs)(n.s,{flexDirection:"column",justifyContent:"center",gap:"$gap8",children:[(0,o.jsxs)(n.s,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,o.jsx)(p.EY,{variant:"buttonLabel3",children:"ABX Maxi"}),(0,o.jsx)(p.EY,{variant:"body4",color:"$neutral2",backgroundColor:"$surface3",py:"$padding4",px:"$padding8",borderRadius:"$rounded8",children:"ID 10298"})]}),(0,o.jsxs)(n.s,{row:!0,gap:"$gap16",alignItems:"center",children:[(0,o.jsx)(p.EY,{variant:"body4",color:"$neutral2",children:"Updated 5 hours ago"}),(0,o.jsx)(n.s,{row:!0,alignItems:"center",gap:"$gap4",children:(0,o.jsx)(A.A,{address:"0x3470fe9a968013bb02b8496cd3c1d0a5743be76d"})})]})]})]})]})}var R=t(58146),Y=t(26767);function _(){return(0,o.jsxs)(n.s,{row:!0,justifyContent:"space-between",gap:"$spacing16",$lg:{flexDirection:"column",alignItems:"flex-start"},alignItems:"center",children:[(0,o.jsx)(p.EY,{variant:"body3",color:"$neutral2",children:"Select the Lock you want to deposit"}),(0,o.jsx)(R.Link,{className:"text-decoration-none inline-flex",to:"/lock",children:(0,o.jsx)(Y.Z,{as:"button",className:"button-clear",color:"white",speed:"3s",py:10,children:(0,o.jsx)(p.EY,{variant:"buttonLabel3",color:"$neutral1",children:"Create new lock"})})})]})}function T(){const e=(0,u.D)(),r=["your locks...","Lock #83066 with  0.001 ABX","Lock #83067 with  0.157 ABX","Lock #83068 with  541 ABX"];return(0,o.jsxs)(n.s,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",gap:"$gap36",borderWidth:1,borderColor:"$surface3",$lg:{gap:"$spacing24"},style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(0,o.jsx)(_,{}),(0,o.jsx)(C,{options:r,defaultOption:r[0],onSelect:()=>{}}),(0,o.jsx)(D,{}),(0,o.jsx)($.A,{children:(0,o.jsx)(p.EY,{variant:"body3",children:"I understand that by depositing my Lock into a Relay strategy, the Lock unlock date will be extended to 4 years."})})]})}function B(){return(0,o.jsxs)(n.s,{gap:"$gap24",mt:"$spacing24",width:"100%",px:"$spacing40",maxWidth:1024,pb:"$spacing40","$platform-web":{display:"grid",gridTemplateColumns:"4fr 3fr"},$md:{gridTemplateColumns:"1fr"},$xl:{px:"$spacing12",mx:"auto"},children:[(0,o.jsx)(T,{}),(0,o.jsx)(v,{})]})}}}]);
//# sourceMappingURL=5563.81fb8451.chunk.js.map