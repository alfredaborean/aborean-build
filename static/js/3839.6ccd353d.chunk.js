"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3839],{41283:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},32407:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},49438:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},74446:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},90341:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},51909:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},15098:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},10233:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},56905:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},21392:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},32672:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},37785:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},54611:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r={}},53839:(e,t,o)=>{o.r(t),o.d(t,{default:()=>me});var r=o(97755),i=o(44441),a=o(20128),n=o(19671),s=o(82746),l=o(17041),d=o(59793);const c="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _mt-t-space-spa1360334014 _gap-t-space-gap1569 _alignItems-center ";function p(){const[e,t]=(0,a.useState)("Increase"),o=(0,n.useSporeColors)(),i=l.default.button.withConfig({displayName:"ChangeLockAndOptionButton__Button",componentId:"sc-f0f0d73f-0"})`
    all: unset;
    padding: 16px 10px;
    background-color: ${e=>e.$lock?o.surface2Hovered.val:o.accent1.val};
    color: ${e=>e.$lock?o.neutral1.val:o.surface1.val};
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
  `;return(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)(i,{$lock:!0,children:(0,r.jsx)(d.Text,{variant:"buttonLabel3",color:"inherit",children:"Change Lock"})}),(0,r.jsx)(i,{children:(0,r.jsx)(d.Text,{variant:"buttonLabel3",color:"inherit",children:e})})]})}o(54611);var x=o(74456),_=o(4925),u=o(88861);const b=(0,x.z)(_.Kq,{width:40,height:20,borderRadius:20,borderWidth:0,cursor:"pointer",variants:{checked:{true:{backgroundColor:"$greenBase"},false:{backgroundColor:"$accent2"}}},defaultVariants:{checked:!1}}),h=(0,x.z)(_.Kq,{width:18,height:18,backgroundColor:"$accent1",borderRadius:18}),f=(0,u.r)({Frame:b,Thumb:h});function g(){return(0,r.jsx)(f,{children:(0,r.jsx)(f.Thumb,{animation:"quicker"})})}var m=o(52964),v=o(20868);const[j,k]=(0,v.I)({name:"NoNfts",getIcon:e=>(0,r.jsx)(m.ny,{viewBox:"0 0 24 24",fill:"none",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M6.327 20.539q-1.2 0-2.033-.833t-.832-2.033t.832-2.033t2.033-.832t2.033.832t.832 2.033q0 .503-.172.972t-.497.841v-.29q.808.402 1.685.603T12 20q3.35 0 5.675-2.325T20 12h1q0 1.864-.709 3.507q-.708 1.643-1.923 2.859t-2.858 1.925T12 21q-1.065 0-2.084-.238t-1.98-.731q-.361.263-.773.385t-.836.122m.001-1q.778 0 1.321-.544t.543-1.322t-.544-1.321t-1.322-.543t-1.321.544q-.544.545-.544 1.322t.545 1.321t1.322.544M12 14.865q-1.2 0-2.033-.832T9.135 12t.832-2.033T12 9.135t2.033.832t.833 2.033t-.833 2.033t-2.033.833M3 12q0-1.864.709-3.507t1.924-2.859T8.49 3.709T12 3q1.066 0 2.084.238t1.98.731q.37-.244.774-.366t.835-.122q1.2 0 2.023.823t.823 2.023t-.823 2.033t-2.023.832t-2.033-.832t-.832-2.033q0-.503.172-.972t.497-.842v.29q-.808-.401-1.685-.602Q12.916 4 12 4Q8.65 4 6.325 6.325T4 12zm14.673-3.808q.77 0 1.308-.553t.538-1.312t-.538-1.303t-1.308-.543q-.76 0-1.312.54q-.553.54-.553 1.313t.544 1.315t1.321.543m0-1.865"})})}),y=l.default.input.attrs({type:"range"}).withConfig({displayName:"Range__StyledRange",componentId:"sc-2d1c0695-0"})`
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
`,C=l.default.div.withConfig({displayName:"Range__DatalistPoints",componentId:"sc-2d1c0695-1"})`
  position: absolute;
  bottom: -12px;
  left: 0;
  right: 0;
  height: 4px;
  pointer-events: none;
`,S=l.default.div.withConfig({displayName:"Range__DatalistPoint",componentId:"sc-2d1c0695-2"})`
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  top: 0;
  left: ${e=>e.position}%;

  &.active {
    background: rgba(255, 255, 255, 0.85);
  }
`,w=()=>{const[e,t]=(0,a.useState)(0),o=[25,50,75];return(0,r.jsxs)("div",{className:"  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _alignItems-center _width-10037 _mt-t-space-gap1602 _mb-t-space-gap1602 ",children:[(0,r.jsx)(d.Text,{variant:"body4",color:"$neutral3",children:"Min"}),(0,r.jsxs)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _position-relative _flexGrow-1 ",children:[(0,r.jsx)(y,{min:"0",max:"100",value:e,onChange:e=>{t(Number(e.target.value))},list:"range-datalist"}),(0,r.jsx)(C,{children:o.map(((t,o)=>(0,r.jsx)(S,{position:t,className:t<=e?"active":""},o)))}),(0,r.jsx)("datalist",{id:"range-datalist",children:o.map(((e,t)=>(0,r.jsx)("option",{value:e},t)))})]}),(0,r.jsx)(d.Text,{variant:"body4",color:"$neutral3",children:"Max"})]})};o(32672);const $="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _alignItems-center ",B="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _borderTopWidth-1px _borderRightWidth-1px _borderBottomWidth-1px _borderLeftWidth-1px _borderTopColor-surface3 _borderRightColor-surface3 _borderBottomColor-surface3 _borderLeftColor-surface3 _borderTopLeftRadius-t-radius-ro291586453 _borderTopRightRadius-t-radius-ro291586453 _borderBottomRightRadius-t-radius-ro291586453 _borderBottomLeftRadius-t-radius-ro291586453 _pt-t-space-pad1331704929 _pr-t-space-pad1331704929 _pb-t-space-pad1331704929 _pl-t-space-pad1331704929 _borderBottomStyle-solid _borderTopStyle-solid _borderLeftStyle-solid _borderRightStyle-solid ",T="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _mt-t-space-gap1635 ";function H(){const e=(0,n.useSporeColors)();l.default.button.withConfig({displayName:"Extend__Button",componentId:"sc-35fe34b7-0"})`
    all: unset;
    padding: 2px 10px;
    background-color: ${e.surface2Hovered.val};
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
  `;return(0,r.jsxs)("div",{className:T,children:[(0,r.jsxs)("div",{className:B,children:[(0,r.jsxs)("div",{className:$,children:[(0,r.jsx)(g,{})," ",(0,r.jsx)(d.Text,{variant:"buttonLabel3",children:"Auto Max-Lock Mode"})," ",(0,r.jsx)(j,{size:20,color:"$neutral3"})]}),(0,r.jsx)(d.Text,{variant:"body4",mt:"$gap12",children:"When activated, it sets the lock to maximum unlock time, until disabled. Once disabled, the regular vesting unlock time will apply. Maximum unlock time gives a 1-to-1 voting power to the amount of locked tokens."})]}),(0,r.jsx)(w,{})]})}o(90341);var I=o(71960),W=o(41610);const z="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _mt-t-space-gap1569 ",L="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 ",R="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1569 ",N="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _mt-t-space-gap1635 ";function D(){return(0,r.jsxs)("div",{className:N,children:[(0,r.jsxs)("div",{className:R,children:[(0,r.jsx)(d.Text,{variant:"buttonLabel3",children:"Add to lock"}),(0,r.jsxs)("div",{className:L,children:[(0,r.jsx)(d.Text,{variant:"body3",color:"$neutral3",children:"Balance:"})," ",(0,r.jsx)(d.Text,{variant:"body3",children:"12.4ABX"})]})]}),(0,r.jsx)(I.Z,{}),(0,r.jsx)("div",{className:z,children:(0,r.jsx)(W.Z,{})})]})}o(10233);var q=o(86683);const A=l.default.div.withConfig({displayName:"SelectLock__DropdownWrapper",componentId:"sc-50cfa101-0"})`
  position: relative;
  width: 100%;
`,M=l.default.button.withConfig({displayName:"SelectLock__SelectedOption",componentId:"sc-50cfa101-1"})`
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
`,O=l.default.ul.withConfig({displayName:"SelectLock__DropdownMenu",componentId:"sc-50cfa101-2"})`
  position: absolute;
  left: 0;
  width: 100%;
  background-color: ${({backgroundColor:e})=>e||"#ffffff"};
  border: 1px solid ${({borderColor:e})=>e||"#ffffff"};
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: ${({isOpen:e})=>e?1:0};
  transform: ${({isOpen:e,isAbove:t})=>e?"translateY(0)":t?"translateY(-90%)":"translateY(-10px)"};
  top: ${({isAbove:e})=>e?"auto":"100%"};
  bottom: ${({isAbove:e})=>e?"100%":"auto"};
  margin: ${({isAbove:e})=>e?"0 0 4px 0":"4px 0 0 0"};
  visibility: ${({isOpen:e})=>e?"visible":"hidden"};
  transition: all 0.3s ease;
  z-index: 10;
`,Z=l.default.li.withConfig({displayName:"SelectLock__DropdownItem",componentId:"sc-50cfa101-3"})`
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
`,E=l.default.span.withConfig({displayName:"SelectLock__Arrow",componentId:"sc-50cfa101-4"})`
  display: inline-block;
  border: solid ${({borderColor:e})=>e||"#4a90e2"};
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 8px;
  transform: ${({isOpen:e})=>e?"rotate(-135deg)":"rotate(45deg)"};
  transition: transform 0.3s ease;
`,V=({options:e,defaultOption:t,onSelect:o})=>{const[i,s]=(0,a.useState)(!1),[l,c]=(0,a.useState)(!1),[p,x]=(0,a.useState)(t||e[0]),_=(0,a.useRef)(null),u=(0,a.useRef)(null),b=(0,n.useSporeColors)();(0,a.useEffect)((()=>{const e=e=>{_.current&&!_.current.contains(e.target)&&s(!1)},t=()=>{if(_.current&&u.current){const e=_.current.getBoundingClientRect(),t=u.current.offsetHeight,o=window.innerHeight-e.bottom,r=e.top;c(o<t&&r>t)}};return i&&(t(),window.addEventListener("resize",t)),document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e),window.removeEventListener("resize",t)}}),[i]);const h={backgroundColor:b.surface1Hovered.val,hoverColor:b.accent3.val,borderColor:b.surface2Hovered.val,color:b.neutral1.val},f={borderColor:b.accent3.val},g={backgroundColor:b.surface1Hovered.val,borderColor:b.surface2Hovered.val},m={HoverBackgroundColor:b.surface2Hovered.val,color:b.neutral1.val,hoverColor:b.accent1.val};return(0,r.jsxs)(A,{ref:_,children:[(0,r.jsxs)(M,{onClick:()=>{s(!i)},...h,children:[(0,r.jsxs)(d.Text,{variant:"buttonLabel3",children:[" ",p]}),(0,r.jsx)(E,{isOpen:i,...f})]}),(0,r.jsx)(O,{ref:u,isOpen:i,isAbove:l,...g,children:e.map((e=>(0,r.jsx)(Z,{onClick:()=>(e=>{x(e),o(e),s(!1)})(e),...m,children:(0,r.jsx)(d.Text,{variant:"body3",children:e})},e)))})]})},F="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _alignItems-center _gap-t-space-gap56 _mt-t-space-spa1360334080 ",X="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _alignItems-center _gap-t-space-gap1569 _mb-t-space-gap1569 ",G="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _mt-t-space-gap1635 ";function P(){const e=["Lock #83066 with  0.001 ABX","Lock #83067 with  0.157 ABX","Lock #83068 with  541 ABX"];return(0,r.jsxs)("div",{className:G,children:[(0,r.jsxs)("div",{className:X,children:[(0,r.jsx)(d.Text,{variant:"buttonLabel3",color:"$neutral2",children:"Select a Lock to merge with #83065"}),(0,r.jsx)(q.Link,{to:"/locks",className:"text-decoration-none",children:(0,r.jsx)(d.Text,{variant:"buttonLabel3",transition:"color 0.2s ease",hoverStyle:{color:"$accent1Hovered"},children:"Create new lock"})})]}),(0,r.jsx)(V,{options:e,defaultOption:e[0],onSelect:()=>{}}),(0,r.jsxs)("div",{className:F,children:[(0,r.jsx)(d.Text,{variant:"body3",color:"$neutral3",children:"Merging an Auto Max-Lock"})," ",(0,r.jsx)(j,{size:18,color:"$neutral3"}),(0,r.jsx)(d.Text,{variant:"body3",color:"$neutral3",children:"is not allowed."})]})]})}o(51909);const Y="  is_Separator _display-flex _alignItems-stretch _flexDirection-column _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _borderTopColor-surface3 _borderRightColor-surface3 _borderBottomColor-surface3 _borderLeftColor-surface3 _flexShrink-1 _borderTopWidth-0px _borderRightWidth-0px _borderBottomWidth-1px _borderLeftWidth-0px _flexGrow-1 _maxHeight-0px _width-10037 _mt--1px _height-1px _borderBottomStyle-solid _borderTopStyle-solid _borderLeftStyle-solid _borderRightStyle-solid ",K="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _justifyContent-space-betwe3241 ",Q="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column ";function J({activeOption:e,setActiveOption:t}){const o=(0,n.useSporeColors)(),i=l.default.button.withConfig({displayName:"ToggleOptions__Button",componentId:"sc-ad328564-0"})`
    all: unset;
    padding: 16px 34px;
    color: ${o.neutral2.val};
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease;

    &.active {
      border-color: ${o.accent1.val};
      color: ${o.neutral1.val};
    }

    @media (max-width: 768px) {
      padding: 8px 16px;
    }
  `;return(0,r.jsxs)("div",{className:Q,children:[(0,r.jsx)("div",{className:K,children:["Increase","Extend","Merge","Transfer"].map((o=>(0,r.jsx)(i,{role:"button",className:""+(e===o?"active":""),onClick:()=>t(o),children:(0,r.jsx)(d.Text,{variant:"buttonLabel3",color:"inherit",children:o})},o)))}),(0,r.jsx)("div",{className:Y})]})}o(49438);var U=o(91128);const[ee,te]=(0,v.I)({name:"Wallet",getIcon:e=>(0,r.jsxs)(m.ny,{viewBox:"0 0 24 24",fill:"none",...e,children:[(0,r.jsx)(m.y$,{d:"M4 3.99902C2.34315 3.99902 1 5.34217 1 6.99902V17.999C1 19.6559 2.34315 20.999 4 20.999H20C21.6569 20.999 23 19.6559 23 17.999V6.99902C23 5.34217 21.6569 3.99902 20 3.99902H4ZM3 17.999V10.999C3 10.4475 3.44812 9.99902 4.00115 9.99902H19.9989C20.5519 9.99902 21 10.4475 21 10.999V17.999C21 18.5513 20.5523 18.999 20 18.999H4C3.44772 18.999 3 18.5513 3 17.999ZM19.9989 7.99902C20.3498 7.99902 20.6868 8.05931 21 8.17011V6.99902C21 6.44674 20.5523 5.99902 20 5.99902H4C3.44772 5.99902 3 6.44674 3 6.99902V8.17011C3.31318 8.05931 3.65018 7.99902 4.00115 7.99902H19.9989Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}),(0,r.jsx)(m.y$,{d:"M3 11.999V13.999H7.35465C7.9611 15.5239 9.50565 16.8562 12 16.8562C13.271 16.8562 14.3391 16.5093 15.1735 15.8493C15.9093 15.2674 16.3172 14.5566 16.5574 13.999H21V11.999H16C15.4477 11.999 14.9935 12.5275 14.7645 13.1018C14.4438 13.9062 13.789 14.8562 12 14.8562C10.29 14.8562 9.48213 13.9883 9.1936 13.2092C8.96575 12.594 8.49905 11.999 7.91447 11.999H3Z",fill:"currentColor"})]})}),oe="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexGrow-1 _flexDirection-row _gap-t-space-gap56 _borderTopWidth-1px _borderRightWidth-1px _borderBottomWidth-1px _borderLeftWidth-1px _borderTopColor-surface3 _borderRightColor-surface3 _borderBottomColor-surface3 _borderLeftColor-surface3 _borderTopLeftRadius-t-radius-ro291586453 _borderTopRightRadius-t-radius-ro291586453 _borderBottomRightRadius-t-radius-ro291586453 _borderBottomLeftRadius-t-radius-ro291586453 _transition-border-colo1638002814 _alignItems-center _justifyContent-space-betwe3241 _pr-t-space-pad1331704925 _pl-t-space-pad1331704925 _borderBottomStyle-solid _borderTopStyle-solid _borderLeftStyle-solid _borderRightStyle-solid _borderTopColor-0focus-within-neutral2 _borderRightColor-0focus-within-neutral2 _borderBottomColor-0focus-within-neutral2 _borderLeftColor-0focus-within-neutral2 ",re="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _alignItems-center _gap-t-space-gap1569 _mb-t-space-gap1569 ",ie="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _mt-t-space-gap1635 ";function ae(){return(0,r.jsxs)("div",{className:ie,children:[(0,r.jsx)("div",{className:re,children:(0,r.jsx)(d.Text,{variant:"buttonLabel3",children:"Transfer to"})}),(0,r.jsxs)("div",{className:oe,children:[(0,r.jsx)(U.II,{py:"$padding20",placeholderTextColor:"$neutral3",placeholder:"0x...",fontSize:"$medium",backgroundColor:"none",width:"100%"}),(0,r.jsx)(ee,{size:"$icon.20",color:"$neutral3"})]}),(0,r.jsx)(d.Text,{variant:"body3",color:"$neutral3",mt:"$gap12",children:"Wallet address where the lock will be transferred."})]})}o(15098);const ne="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _mt-t-space-gap1602 ";function se(){const[e,t]=(0,a.useState)("Transfer"),o=(0,n.useSporeColors)();return(0,r.jsxs)(s.Flex,{flexDirection:"column",p:"$spacing16",borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface3",style:{background:`linear-gradient(180deg, ${o.surface2.variable} 0%, transparent 100%)`},children:[(0,r.jsx)(J,{activeOption:e,setActiveOption:t}),"Increase"===e&&(0,r.jsx)(D,{}),"Extend"===e&&(0,r.jsx)(H,{}),"Merge"===e&&(0,r.jsx)(P,{}),"Transfer"===e&&(0,r.jsx)(ae,{}),(0,r.jsx)("div",{className:ne,children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(p,{})]})}o(74446);var le=o(58870),de=o(48763);const ce="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1573 _alignItems-center ",pe="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569 _alignItems-center ",xe="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _justifyContent-center _gap-t-space-gap56 ",_e="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _gap-t-space-gap1569  left",ue="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1569 _alignItems-center ",be="  is_Separator _display-flex _alignItems-stretch _flexDirection-column _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _borderTopColor-surface3 _borderRightColor-surface3 _borderBottomColor-surface3 _borderLeftColor-surface3 _flexShrink-1 _borderTopWidth-0px _borderRightWidth-0px _borderBottomWidth-1px _borderLeftWidth-0px _flexGrow-1 _maxHeight-0px _width-10037 _mt-t-space-spa1360334076 _mb-t-space-spa1360334076 _height-1px _borderBottomStyle-solid _borderTopStyle-solid _borderLeftStyle-solid _borderRightStyle-solid ",he="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _backgroundColor-surface2 _pt-t-space-spa1360334076 _pr-t-space-spa1360334076 _pb-t-space-spa1360334076 _pl-t-space-spa1360334076 _borderTopLeftRadius-t-radius-ro291586453 _borderTopRightRadius-t-radius-ro291586453 _borderBottomRightRadius-t-radius-ro291586453 _borderBottomLeftRadius-t-radius-ro291586453 ";function fe(){const e=(0,n.useSporeColors)();(0,x.z)(d.Text,{variant:"body3",color:"$neutral2",fontSize:"$small"});return(0,r.jsxs)("div",{className:he,children:[(0,r.jsx)(d.Text,{variant:"heading3",children:"Manage Lock"}),(0,r.jsx)("div",{className:be}),(0,r.jsxs)("div",{className:ue,children:[(0,r.jsxs)("div",{className:_e,children:[(0,r.jsx)(s.Flex,{p:"$padding12",borderRadius:"$rounded12",borderColor:"$accent3",style:{background:`linear-gradient(90deg, ${e.surface2.variable} 0%, ${e.slate.variable} 40%, ${e.surface2.variable} 60%, ${e.slate.variable} 100%)`},children:(0,r.jsx)(le.Z,{size:24,color:e.neutral1Hovered.val})}),(0,r.jsxs)("div",{className:xe,children:[(0,r.jsxs)("div",{className:pe,children:[(0,r.jsx)(d.Text,{variant:"buttonLabel2",children:"Lock #83065"}),(0,r.jsx)(de.Z,{size:14,color:e.accent1Hovered.val})]}),(0,r.jsxs)("div",{className:ce,children:[(0,r.jsx)(d.Text,{variant:"body3",color:"$neutral2",children:"0.05 AERO"}),(0,r.jsx)(d.Text,{variant:"body3",color:"$neutral2",children:"locked for 4 years"})]})]})]}),(0,r.jsx)(q.Link,{className:"text-decoration-none inline-flex",to:"/",children:(0,r.jsx)(d.Text,{py:"$spacing8",px:"$spacing12",variant:"buttonLabel3",borderRadius:"$roundedFull",backgroundColor:"$surface3",cursor:"pointer",transition:"all 0.2s ease-in-out",color:"$accent1",hoverStyle:{backgroundColor:"$surface1",color:"$accent1"},children:"Change"})})]})]})}o(32407);const ge="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _mt-t-space-spa1360334047 _width-10037 _pr-t-space-spa1360333989 _pl-t-space-spa1360333989 _maxWidth-680px _pb-t-space-spa1360333989 _flexDirection-column _gap-t-space-gap1569  _pr-_xl_t-space-spa1360334080 _pl-_xl_t-space-spa1360334080 _mr-_xl_auto _ml-_xl_auto";function me(){return(0,r.jsxs)("div",{className:ge,children:[(0,r.jsx)(fe,{}),(0,r.jsx)(se,{})]})}o(41283)},71960:(e,t,o)=>{o.d(t,{Z:()=>p});var r=o(97755),i=o(58870),a=o(20128),n=o(82746),s=o(59793),l=o(91128);const d="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexGrow-1 _flexDirection-column _gap-t-space-gap56 ",c="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _backgroundColor-slate _pt-t-space-pad1331704925 _pb-t-space-pad1331704925 _pr-t-space-pad1331704900 _pl-t-space-pad1331704900 _borderTopLeftRadius-t-radius-ro291586453 _borderTopRightRadius-t-radius-ro291586453 _borderBottomRightRadius-t-radius-ro291586453 _borderBottomLeftRadius-t-radius-ro291586453 _gap-t-space-gap56 _alignItems-center ";function p(){const e=(0,a.useRef)(null),[t,o]=(0,a.useState)("");return(0,r.jsxs)(n.Flex,{row:!0,$sm:{},mt:"$gap24",px:"$spacing16",py:"$spacing16",borderWidth:1,borderColor:"$surface3",justifyContent:"space-between",alignItems:"center",gap:"$gap12",borderRadius:"$rounded12",tabIndex:0,onPress:()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.focus()},cursor:"ibeam",focusWithinStyle:{borderColor:"$neutral2"},transition:"border-color 0.3s ease",children:[(0,r.jsxs)("div",{className:c,children:[(0,r.jsx)(i.Z,{size:20})," ",(0,r.jsx)(s.Text,{variant:"buttonLabel2",children:"ABX"})]}),(0,r.jsxs)("div",{className:d,children:[(0,r.jsx)(l.II,{ref:e,py:"$padding20",textAlign:"right",placeholder:"0",fontSize:"28px",backgroundColor:"none",width:"100%",inputMode:"numeric",keyboardType:"numeric",value:t,onChangeText:e=>{const t=e.replace(/[^0-9.]/g,"");o(t)}}),(0,r.jsx)(s.Text,{variant:"body3",color:"$neutral3",textAlign:"right",children:"~$0"})]})]})}o(21392)},44441:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(97755),i=o(74456),a=o(59793),n=o(82746);const s="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1569 ",l=(0,i.z)(a.Text,{textAlign:"right"}),d=(0,i.z)(n.Flex,{grow:!0,flexDirection:"column",className:"lock-time",p:"$padding12",borderRadius:"$rounded12",gap:"$gap8",backgroundColor:"$surface2Hovered"});function c(){return(0,r.jsxs)("div",{className:s,children:[(0,r.jsxs)(d,{children:[(0,r.jsx)(l,{variant:"body3",color:"$neutral3",children:"Lock time"}),(0,r.jsx)(l,{variant:"heading3",children:"4 years"})]}),(0,r.jsxs)(d,{children:[(0,r.jsx)(l,{variant:"body3",color:"$neutral3",children:"Estimated voting power"}),(0,r.jsx)(l,{variant:"heading3",children:"40 ABX"})]})]})}o(56905)},41610:(e,t,o)=>{o.d(t,{Z:()=>d});var r=o(97755),i=o(17041),a=o(19671),n=o(59793);const s="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap56 ",l="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _gap-t-space-gap1569 _alignItems-center ";function d(){const e=(0,a.useSporeColors)(),t=i.default.button.withConfig({displayName:"ShareBalancePercentage__Button",componentId:"sc-bb277fcd-0"})`
    all: unset;
    padding: 2px 10px;
    background-color: ${e.surface2Hovered.val};
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      opacity: 0.7;
    }
  `;return(0,r.jsxs)("div",{className:l,children:[(0,r.jsx)(n.Text,{variant:"body3",color:"$neutral3",children:"Select a share of your balance"}),(0,r.jsx)("div",{className:s,children:["10","25","50","75","100"].map((e=>(0,r.jsx)(t,{role:"button",children:(0,r.jsxs)(n.Text,{variant:"body4",fontWeight:"$medium",children:[e,"%"]})},e)))})]})}o(37785)}}]);
//# sourceMappingURL=3839.6ccd353d.chunk.js.map