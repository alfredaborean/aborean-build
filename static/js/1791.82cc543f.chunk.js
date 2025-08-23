"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1791],{82886:(e,r,n)=>{n.d(r,{Z:()=>p});var a=n(97755),t=n(58870);function o(e){return(0,a.jsx)("svg",{width:e.size,height:e.size,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4C2.34315 4 1 5.34315 1 7V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V7C23 5.34315 21.6569 4 20 4H4ZM3 12.2676V11C3 10.4485 3.44812 10 4.00115 10H19.9989C20.5519 10 21 10.4485 21 11V12.2676C20.7058 12.0974 20.3643 12 20 12H16C15.4477 12 14.9935 12.5284 14.7645 13.1028C14.4438 13.9072 13.789 14.8571 12 14.8571C10.29 14.8571 9.48213 13.9893 9.1936 13.2102C8.96576 12.595 8.49905 12 7.91447 12H4C3.63571 12 3.29417 12.0974 3 12.2676ZM19.9989 8C20.3498 8 20.6868 8.06029 21 8.17109V7C21 6.44772 20.5523 6 20 6H4C3.44772 6 3 6.44772 3 7V8.17109C3.31318 8.06029 3.65018 8 4.00115 8H19.9989Z",fill:e.fill})})}var i=n(19671),s=n(82746),l=n(59793),d=n(19763),c=n(57242);function p({type:e}){const{setStakeStep:r,setWithdrawStep:n}=(0,d.Ig)(),p=(0,i.useSporeColors)();return(0,a.jsxs)(s.Flex,{p:"$spacing24",$md:{p:"$spacing16"},borderRadius:"$rounded12",maxWidth:700,width:"100%",style:{background:`linear-gradient(180deg, ${p.surface2.variable} 0%, transparent 100%)`},position:"relative",overflow:"hidden",children:[(0,a.jsx)(s.Flex,{centered:!0,children:(0,a.jsxs)(s.Flex,{flexDirection:"column",alignItems:"center",gap:"$gap16",py:"$spacing24",$md:{py:"$spacing16"},position:"relative",children:[(0,a.jsx)(s.Flex,{position:"absolute",pointerEvents:"none",filter:"blur(10px)",borderRadius:"$roundedFull",height:"100%",width:"100%",inset:0,zIndex:0,opacity:.1,children:(0,a.jsx)(t.B,{size:"100%",fill:p.surface1.val})}),(0,a.jsx)(s.Flex,{height:50,width:50,centered:!0,borderRadius:"$roundedFull",backgroundColor:"$neutral1",position:"relative",zIndex:10,children:(0,a.jsx)(o,{size:"28px",fill:p.surface1.val})}),(0,a.jsxs)(l.Text,{variant:"subheading1",textAlign:"center",position:"relative",zIndex:10,children:["Confirm access ",(0,a.jsx)("br",{})," to ABX"]})]})}),(0,a.jsx)(c.Z,{setStep:"Stake"===e?r:n})]})}},30695:(e,r,n)=>{n.d(r,{Z:()=>c});var a=n(97755),t=n(20128),o=n(17041),i=n(19671),s=n(82746),l=n(59793);const d=o.default.input.withConfig({displayName:"Range__StyledRange",componentId:"sc-c668a2a3-0"})`
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
`,c=()=>{const[e,r]=(0,t.useState)(0),n=(0,i.useSporeColors)();return(0,a.jsxs)(s.Flex,{width:"100%",mb:"$gap24",children:[(0,a.jsx)(s.Flex,{position:"relative",grow:!0,children:(0,a.jsx)(d,{type:"range",style:{background:`linear-gradient(\n            to right,\n            ${n.accent1Hovered.val} 0%,\n            ${n.accent1Hovered.val} ${e}%,\n            ${n.accent2.val} ${e}%,\n             ${n.accent2.val} 100%\n          )`},min:"0",max:"100",value:e,onChange:e=>{r(Number(e.target.value))},list:"range-datalist"})}),(0,a.jsx)(s.Flex,{row:!0,justifyContent:"space-between",gap:"$gap12",grow:!0,mt:"$gap12",children:["0","25","50","75","100"].map(e=>(0,a.jsxs)(l.Text,{variant:"body4",color:"$neutral2",children:[e,"%"]},e))})]})}},73980:(e,r,n)=>{n.d(r,{Z:()=>d});var a=n(97755),t=n(17041),o=n(19671),i=n(82746),s=n(59793),l=n(19763);function d({type:e}){const{setStakeStep:r,setWithdrawStep:n}=(0,l.Ig)(),d=(0,o.useSporeColors)(),c=t.default.button.withConfig({displayName:"StakeAndWithdrawButton__Button",componentId:"sc-5ad97db2-0"})`
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
  `;return(0,a.jsx)(i.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:(0,a.jsx)(c,{role:"button",onClick:()=>{"Stake"===e?r("step-2"):n("step-2")},children:(0,a.jsx)(s.Text,{variant:"buttonLabel3",color:"inherit",children:e})})})}},64038:(e,r,n)=>{n.d(r,{Z:()=>d});var a=n(97755),t=n(74456),o=n(59793),i=n(82746);const s=(0,t.z)(o.Text,{textAlign:"right"}),l=(0,t.z)(i.Flex,{flexDirection:"column",className:"lock-time",px:"$padding12",py:"$spacing18",borderRadius:"$rounded12",gap:"$gap8",backgroundColor:"$surface2Hovered"});function d(){return(0,a.jsxs)(i.Flex,{"$platform-web":{display:"grid",gridTemplateColumns:"1fr 1fr"},gap:"$gap12",$md:{gridTemplateColumns:"1fr"},children:[(0,a.jsxs)(l,{children:[(0,a.jsx)(s,{variant:"heading3",children:" 1 ETH"}),(0,a.jsx)(s,{variant:"body3",color:"$neutral3",children:"~$2000.254"})]})," ",(0,a.jsxs)(l,{children:[(0,a.jsx)(s,{variant:"heading3",children:" 1 ABX"}),(0,a.jsx)(s,{variant:"body3",color:"$neutral2",children:"~$300.254"})]})]})}},42279:(e,r,n)=>{n.d(r,{Z:()=>b});var a=n(97755),t=n(58870),o=n(15346),i=n(24547),s=n(18015),l=n(48937),d=n(19671),c=n(74456),p=n(82746),u=n(59793),x=n(7602),g=n(71797),h=n(46433);function b({type:e}){const r=(0,d.useSporeColors)(),{toggleModal:n}=(0,s.X)(h.ModalName.PoolInfo),b=(0,c.z)(l.zx,{py:"$padding16",px:"$padding16",borderRadius:"$rounded16",transition:"all 0.3s ease",backgroundColor:"$surface3",width:"100%",hoverStyle:{backgroundColor:"$surface3Hovered"}});return(0,a.jsxs)(p.Flex,{p:"$spacing24",$md:{p:"$spacing16"},borderRadius:"$rounded12",width:"100%",backgroundColor:"$surface2",children:[(0,a.jsx)(u.Text,{variant:"subheading1",children:e}),(0,a.jsx)(x.Z,{my:"$spacing24",$md:{my:"$spacing24"},width:"100%",borderColor:"$surface3",height:1}),(0,a.jsxs)(p.Flex,{group:!0,row:!0,justifyContent:"space-between",gap:"$gap24",$md:{flexDirection:"column",justifyContent:"flex-start"},children:[(0,a.jsxs)(p.Flex,{className:"left",row:!0,gap:"$gap12",children:[(0,a.jsxs)(p.Flex,{row:!0,alignItems:"center",children:[(0,a.jsx)(p.Flex,{height:34,width:34,backgroundColor:"$neutral1",centered:!0,borderRadius:"$roundedFull",children:(0,a.jsx)(t.Z,{color:r.surface1.val,size:24})})," ",(0,a.jsx)(p.Flex,{ml:-10,height:34,width:34,backgroundColor:"$neutral1",centered:!0,borderRadius:"$roundedFull",children:(0,a.jsx)(t.Z,{color:r.surface1.val,size:24})})]}),(0,a.jsxs)(p.Flex,{flexDirection:"column",justifyContent:"center",gap:"$gap4",children:[(0,a.jsxs)(p.Flex,{row:!0,gap:"$gap12",alignItems:"center",children:[(0,a.jsx)(u.Text,{variant:"subheading2",children:"WETH/USDC"})," ",(0,a.jsx)(i.ud,{text:"Pool Trading Fee",size:i.Oz.Max,placement:"top",children:(0,a.jsx)(u.Text,{backgroundColor:"$surface3",py:"$padding4",px:"$padding8",borderRadius:"$rounded8",variant:"body4",cursor:"pointer",hoverStyle:{backgroundColor:"$surface3Hovered"},children:"0.23%"})}),(0,a.jsx)(i.ud,{text:(0,a.jsx)(o.Z,{}),size:i.Oz.Max,placement:"top",children:(0,a.jsx)(p.Flex,{transition:"opacity 0.3s ease",opacity:0,"$group-hover":{opacity:1},children:(0,a.jsx)(g.InfoCircleFilled,{size:"$icon.16",color:"$neutral2"})})})]}),(0,a.jsx)(u.Text,{variant:"body4",fontWeight:"$medium",color:"$neutral2",children:"Basic Volatile"})]})]}),(0,a.jsx)(p.Flex,{className:"right",row:!0,gap:"$gap12",children:(0,a.jsx)(b,{onPress:n,children:(0,a.jsx)(u.Text,{variant:"buttonLabel4",children:"Pool info"})})})]})]})}}}]);
//# sourceMappingURL=1791.82cc543f.chunk.js.map