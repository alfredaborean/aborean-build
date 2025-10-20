"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6946],{99642:(e,r,o)=>{o.d(r,{A:()=>g});var n=o(9990),t=o(18691),a=o(38732),i=o(90153),s=o(98902),l=o(69375),c=o(12016),d=o(72283),p=o(48526),u=o(96690),f=o(16172);function g({address:e}){const r=(0,c.D)(),[o,g]=(0,i.A)(),b=((0,d.Qf)(),(0,s.useCallback)(()=>{g(e)},[e,g]));return(0,n.jsxs)(p.s,{position:"relative",children:[(0,n.jsx)(t.N,{children:(0,n.jsx)(a.P.div,{whileTap:{scale:.96},exit:{scale:1},transition:{duration:.3,ease:"linear"},children:(0,n.jsxs)(p.s,{row:!0,gap:"$gap4",onPress:b,cursor:"pointer",alignItems:"center",children:[(0,n.jsx)(u.EY,{variant:"body4",color:r.neutral2.val,children:(0,f.shortenAddress)(e)}),(0,n.jsx)(p.s,{p:"$spacing4",children:(0,n.jsx)(l.A,{"data-testid":"breadcrumb-hover-copy",size:13,color:r.neutral3.val})})]})})}),(0,n.jsx)(u.EY,{opacity:o?1:0,transition:"opacity 0.2s linear",variant:"body3",position:"absolute",bottom:"calc(100% + 6px)",right:0,width:62,textAlign:"center",backgroundColor:"$surface2",borderWidth:1,borderColor:"$surface3",borderRadius:"$rounded8",padding:"$spacing4",color:"$neutral1",children:"Copied!"})]})}},76946:(e,r,o)=>{o.r(r),o.d(r,{default:()=>R});var n=o(9990),t=o(48526),a=o(98902),i=o(91433),s=o(25096),l=o(16210),c=o(54407),d=o(68371),p=o(12016),u=o(96690),f=o(75790),g=o(91323);const b=(0,d.I)(t.s,{row:!0,gap:"$gap8",alignItems:"center"}),x=(0,d.I)(t.s,{width:28,height:28,borderRadius:"$roundedFull",backgroundColor:"$surface3",centered:!0}),h="\n  @keyframes pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.5;\n    }\n      100% {\n      opacity: 1;\n    }\n  }";function v(){const e=(0,p.D)(),[r,o]=(0,a.useState)(!0),d=[{icon:i.A,text:"Select the Lock you want to deposit",isActive:!0},{icon:i.A,text:"Reset done for Lock #83065",isActive:!1},{icon:s.A,text:"Confirm unlock date change",isActive:!0},{icon:l.A,text:"Waiting for next actions...",isActive:!1}],v=e=>r&&3===e?{opacity:1,animation:"pulse 1.5s linear infinite"}:{},$=c.default.button.withConfig({displayName:"RelayDepositReviewer__Button",componentId:"sc-3ac7287a-0"})`
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
  `;return(0,n.jsxs)(t.s,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",gap:"$gap36",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${e.surface2.variable} 0%, transparent 100%)`},children:[(0,n.jsx)("style",{children:h}),(0,n.jsx)(u.EY,{variant:"buttonLabel1",children:"Relay Deposit"}),(0,n.jsx)(t.s,{flexDirection:"column",children:d.map((e,r)=>(0,n.jsxs)(t.s,{children:[r>0&&(0,n.jsx)(f.w,{left:14,vertical:!0,minHeight:22,width:2,borderColor:"$surface3"}),(0,n.jsxs)(b,{children:[(0,n.jsx)(x,{children:(0,n.jsx)(t.s,{children:(0,n.jsx)(e.icon,{style:v(r),size:14,color:e.isActive?g.Tj.greenVibrant:g.Tj.brownVibrant})})}),(0,n.jsx)(u.EY,{variant:"body3",style:v(r),color:"$neutral2",children:e.text})]},e.text)]}))}),(0,n.jsx)($,{role:"button",children:(0,n.jsx)(u.EY,{variant:"buttonLabel2",color:"inherit",children:"Deposit"})})]})}const $=c.default.div.withConfig({displayName:"SelectOption__DropdownWrapper",componentId:"sc-2a0a13f4-0"})`
  position: relative;
  width: 100%;
`,m=c.default.button.withConfig({displayName:"SelectOption__SelectedOption",componentId:"sc-2a0a13f4-1"})`
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
`,y=c.default.ul.withConfig({displayName:"SelectOption__DropdownMenu",componentId:"sc-2a0a13f4-2"})`
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
`,w=c.default.span.withConfig({displayName:"SelectOption__Arrow",componentId:"sc-2a0a13f4-4"})`
  display: inline-block;
  border: solid ${({borderColor:e})=>e||"#4a90e2"};
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 8px;
  transform: ${({isOpen:e})=>e?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,k=({options:e,defaultOption:r,onSelect:o})=>{const[t,i]=(0,a.useState)(!1),[s,l]=(0,a.useState)(!1),[c,d]=(0,a.useState)(r||e[0]),f=(0,a.useRef)(null),g=(0,a.useRef)(null),b=(0,p.D)();(0,a.useEffect)(()=>{const e=e=>{f.current&&!f.current.contains(e.target)&&i(!1)},r=()=>{if(f.current&&g.current){const e=f.current.getBoundingClientRect(),r=g.current.offsetHeight,o=window.innerHeight-e.bottom,n=e.top;l(o<r&&n>r)}};return t&&(r(),window.addEventListener("resize",r)),document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e),window.removeEventListener("resize",r)}},[t]);const x={backgroundColor:b.surface1Hovered.val,hoverColor:b.accent3.val,borderColor:b.surface2Hovered.val,color:b.neutral1.val},h={borderColor:b.accent3.val},v={backgroundColor:b.surface1Hovered.val,borderColor:b.surface2Hovered.val},k={HoverBackgroundColor:b.surface2Hovered.val,color:b.neutral1.val,hoverColor:b.accent1.val};return(0,n.jsxs)($,{ref:f,children:[(0,n.jsxs)(m,{onClick:()=>{i(!t)},...x,children:[(0,n.jsxs)(u.EY,{variant:"buttonLabel3",children:[" ",c]}),(0,n.jsx)(w,{isOpen:t,...h})]}),(0,n.jsx)(y,{ref:g,isOpen:t,isAbove:s,...v,children:e.map(e=>(0,n.jsx)(j,{onClick:()=>(e=>{d(e),o(e),i(!1)})(e),...k,children:(0,n.jsx)(u.EY,{variant:"body3",children:e})},e))})]})};var C=o(33519),A=o(99642),O=o(12985);function E(){const e=(0,p.D)();return(0,n.jsxs)(t.s,{children:[(0,n.jsx)(u.EY,{variant:"buttonLabel3",color:"$neutral2",children:"Relay Strategy"}),(0,n.jsxs)(t.s,{row:!0,gap:"$gap12",mt:"$gap12",children:[(0,n.jsx)(t.s,{p:"$padding12",borderRadius:"$rounded12",borderColor:"$accent3",style:{background:`linear-gradient(90deg, ${e.surface2.variable} 0%, ${e.slate.variable} 40%, ${e.surface2.variable} 60%, ${e.slate.variable} 100%)`},children:(0,n.jsx)(t.s,{children:(0,n.jsx)(O.A,{size:24,color:e.neutral1Hovered.val})})}),(0,n.jsxs)(t.s,{flexDirection:"column",justifyContent:"center",gap:"$gap8",children:[(0,n.jsxs)(t.s,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,n.jsx)(u.EY,{variant:"buttonLabel3",children:"ABX Maxi"}),(0,n.jsx)(u.EY,{variant:"body4",color:"$neutral2",backgroundColor:"$surface3",py:"$padding4",px:"$padding8",borderRadius:"$rounded8",children:"ID 10298"})]}),(0,n.jsxs)(t.s,{row:!0,gap:"$gap16",alignItems:"center",children:[(0,n.jsx)(u.EY,{variant:"body4",color:"$neutral2",children:"Updated 5 hours ago"}),(0,n.jsx)(t.s,{row:!0,alignItems:"center",gap:"$gap4",children:(0,n.jsx)(A.A,{address:"0x3470fe9a968013bb02b8496cd3c1d0a5743be76d"})})]})]})]})]})}var L=o(58146),I=o(26767);function S(){return(0,n.jsxs)(t.s,{row:!0,justifyContent:"space-between",gap:"$spacing16",$lg:{flexDirection:"column",alignItems:"flex-start"},alignItems:"center",children:[(0,n.jsx)(u.EY,{variant:"body3",color:"$neutral2",children:"Select the Lock you want to deposit"}),(0,n.jsx)(L.Link,{className:"text-decoration-none inline-flex",to:"/lock",children:(0,n.jsx)(I.Z,{as:"button",className:"button-clear",color:"white",speed:"3s",py:10,children:(0,n.jsx)(u.EY,{variant:"buttonLabel3",color:"$neutral1",children:"Create new lock"})})})]})}function D(){const[e,r]=(0,a.useState)(!1),o=(0,p.D)(),i=["your locks...","Lock #83066 with  0.001 ABX","Lock #83067 with  0.157 ABX","Lock #83068 with  541 ABX"];return(0,n.jsxs)(t.s,{flexDirection:"column",backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",gap:"$gap36",borderWidth:1,borderColor:"$surface3",$lg:{gap:"$spacing24"},style:{background:`linear-gradient(180deg, ${o.surface2.variable} 0%, transparent 100%)`},children:[(0,n.jsx)(S,{}),(0,n.jsx)(k,{options:i,defaultOption:i[0],onSelect:()=>{}}),(0,n.jsx)(E,{}),(0,n.jsxs)(t.s,{row:!0,gap:"$gap12",onPress:()=>r(!e),backgroundColor:e?"$surface2":"$slate",px:"$spacing12",py:"$spacing24",borderRadius:"$rounded12",borderWidth:1,borderColor:e?"$surface3":"$surface2",children:[(0,n.jsx)(C.S,{size:"$icon.16",checked:e}),(0,n.jsx)(u.EY,{variant:"body3",children:"I acknowledge that once I deposit my Lock into a Relay strategy, the Lock's unlock date will be delayed to 4 years."})]})]})}function R(){return(0,n.jsxs)(t.s,{gap:"$gap24",mt:"$spacing24",width:"100%",px:"$spacing40",maxWidth:1024,pb:"$spacing40","$platform-web":{display:"grid",gridTemplateColumns:"4fr 3fr"},$md:{gridTemplateColumns:"1fr"},$xl:{px:"$spacing12",mx:"auto"},children:[(0,n.jsx)(D,{}),(0,n.jsx)(v,{})]})}},12985:(e,r,o)=>{o.d(r,{A:()=>c});var n=o(98902),t=o(24862),a=o.n(t);function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i.apply(this,arguments)}function s(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=(0,n.forwardRef)(function(e,r){var o=e.color,t=void 0===o?"currentColor":o,a=e.size,l=void 0===a?24:a,c=s(e,["color","size"]);return n.createElement("svg",i({ref:r,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),n.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),n.createElement("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"}))});l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.displayName="Box";const c=l}}]);
//# sourceMappingURL=6946.bd866d97.chunk.js.map