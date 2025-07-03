"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4684],{80893:(e,i,a)=>{a.r(i),a.d(i,{default:()=>r});const r={}},24684:(e,i,a)=>{a.r(i),a.d(i,{default:()=>K});var r=a(97755),t=a(32933),n=a(20128);const s=a.p+"static/media/blue-loader.ca1aedeb13ab14d6ef4eb375580604ad.svg";var o=a(62877),l=a(21049),d=a(99711),c=a(14585),x=a(96296),p=a(17041),h=a(82663),m=a(55675),u=a(15423),f=a(59793),g=a(21331),_=a(7539);const b=x.ZP.div`
  ${u.lt};
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({theme:e})=>e.surface1};
  z-index: 1;
  width: 100%;
`,j=x.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid ${({error:e,theme:i})=>e?i.critical:i.surface3};
  transition:
    border-color 300ms ${({error:e})=>e?"step-end":"step-start"},
    color 500ms ${({error:e})=>e?"step-end":"step-start"};
  background-color: ${({theme:e})=>e.surface1};
`,v=x.ZP.div`
  flex: 1;
  padding: 1rem;
`,w=x.ZP.input`
  font-size: 1.25rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:i})=>e?i.critical:i.neutral1};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 535;
  width: 100%;
  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({theme:e})=>e.neutral3};
  }
`;function k({id:e,className:i="recipient-address-input",label:a,placeholder:t,value:s,onChange:o}){const{t:x}=(0,h.useTranslation)(),{chainId:u}=(0,c.m)(),k=(0,p.useTheme)(),{address:S,loading:$,name:y}=(0,g.useENS)({nameOrAddress:s}),C=(0,n.useCallback)((e=>{const i=e.target.value.replace(/\s+/g,"");o(i)}),[o]),T=Boolean(s.length>0&&!$&&!S);return(0,r.jsx)(b,{id:e,children:(0,r.jsx)(j,{error:T,children:(0,r.jsx)(v,{children:(0,r.jsxs)(l.Tz,{gap:"md",children:[(0,r.jsxs)(d.m0,{children:[(0,r.jsx)(f.Text,{variant:"body1",color:k.neutral2,children:a??(0,r.jsx)(h.Trans,{i18nKey:"addressInput.recipient"})}),S&&u&&(0,r.jsxs)(m.d,{href:(0,_.getExplorerLink)(u,y??S,_.ExplorerDataType.ADDRESS),style:{fontSize:"14px"},children:["(",(0,r.jsx)(h.Trans,{i18nKey:"common.viewOnExplorer"}),")"]})]}),(0,r.jsx)(w,{className:i,type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:t??x("common.addressOrENS"),error:T,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:C,value:s})]})})})})}var S=a(61068),$=a(32637),y=a(69189),C=a(46979);const T=p.keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`,z=p.default.img.withConfig({displayName:"uniTokenAnimated__UniTokenAnimated",componentId:"sc-4ffdeafa-0"})`
  animation: ${T} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  padding: 2rem 0 0 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`;var A=a(82746),N=a(59068),B=a(4925),I=a(44921),F=a(95336),D=a(46433),E=a(34786),W=a(46832);const H="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _gap-t-space-gap56 _justifyContent-center _alignItems-center ",O="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _gap-100px _justifyContent-center ",X="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _justifyContent-center _alignItems-center _pt-60px _pb-60px ",M="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _alignItems-center _width-10037 _pl-t-space-pad1331704925 _pt-t-space-pad1331704925 ",R="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row ",P="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _justifyContent-space-betwe3241 _alignItems-center ",Z="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _gap-t-space-gap1569 _width-10037 ";function K({isOpen:e,closeModal:i}){var a,d;const x=(0,c.m)(),{chainId:p}=x,[h,u]=(0,n.useState)(x.address??"");const{address:b}=(0,g.useENS)({nameOrAddress:h}),[j,v]=(0,n.useState)(!1),{claimCallback:w}=(0,$.NH)(b),T=(0,$.jX)(b),K=(0,$.ot)(b),[L,U]=(0,n.useState)(),Y=(0,y.ub)(L??""),q=L&&!Y;function G(){v(!1),U(void 0),u(""),i()}const V=null===(a=T)||void 0===a?void 0:a.toFixed(0,{groupSeparator:","}),J=null===(d=T)||void 0===d?void 0:d.toFixed(0,{groupSeparator:","});return(0,r.jsxs)(F.Modal,{name:D.ModalName.AddressClaim,isModalOpen:e,onClose:G,padding:0,children:[!j&&(0,r.jsxs)("div",{className:Z,children:[(0,r.jsxs)(A.Flex,{width:"100%",position:"relative",overflow:"hidden","$platform-web":{background:"radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%)"},borderRadius:"$rounded12",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)",children:[(0,r.jsx)(S.sq,{}),(0,r.jsx)(S.RF,{}),(0,r.jsxs)(S.uO,{gap:"md",children:[(0,r.jsxs)("div",{className:P,children:[(0,r.jsx)(f.Text,{color:"$white",fontWeight:"$medium",children:"Claim ABX token"}),(0,r.jsx)(I.g,{onClose:G})]}),(0,r.jsxs)(f.Text,{color:"$white",fontWeight:"$medium",fontSize:36,children:[V," ABX"]})]}),(0,r.jsx)(S.SS,{})]}),(0,r.jsxs)(l.Tz,{gap:"md",style:{padding:"1rem",paddingTop:"0"},justify:"center",children:[(0,r.jsx)(f.Text,{variant:"subheading1",color:"$white",children:"Enter an address to trigger a ABX claim. If the address has any claimable ABX it will be sent to them on submission."}),(0,r.jsx)(k,{value:h,onChange:function(e){u(e)}}),b&&!K&&(0,r.jsx)(f.Text,{color:"$statusCritical",children:"Address has no available claim"}),(0,r.jsx)("div",{className:R,children:(0,r.jsx)(N.z,{variant:"branded",size:"large",isDisabled:!(0,t.isAddress)(b??"")||!K,borderRadius:"$rounded12",mt:"$spacing16",onPress:function(){v(!0),w().then((e=>{U(e)})).catch((e=>{v(!1),W.logger.warn("AddressClaimModal","onClaim","error",e)}))},children:"Claim ABX"})})]})]}),(j||q)&&(0,r.jsxs)(B.G7,{width:"100%",p:"$padding24",position:"relative",alignItems:"center","$platform-web":{background:"radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;"},children:[(0,r.jsx)(S.RF,{}),(0,r.jsx)(S.MN,{desaturate:!0}),(0,r.jsx)("div",{className:M,children:(0,r.jsx)(I.g,{onClose:G})}),(0,r.jsx)("div",{className:X,children:q?(0,r.jsx)(z,{width:"72px",src:o,alt:"ABX logo"}):(0,r.jsx)(C._,{src:s,alt:"loader",size:"90px"})}),(0,r.jsxs)("div",{className:O,children:[(0,r.jsxs)("div",{className:H,children:[(0,r.jsx)(f.Text,{variant:"heading1",color:"$black",children:q?"Claimed":"Claiming"}),!q&&(0,r.jsxs)(f.Text,{fontSize:36,color:"#ff007a",fontWeight:"$medium",children:[J," ABX"]}),b&&(0,r.jsxs)(f.Text,{variant:"subheading1",color:"$black",children:["for ",(0,E.shortenAddress)(b)]})]}),q&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(f.Text,{variant:"subheading1",color:"$black",children:[(0,r.jsxs)("span",{role:"img","aria-label":"party-hat",children:["\ud83c\udf89"," "]}),"Welcome to team Unicorn :) ",(0,r.jsx)("span",{role:"img","aria-label":"party-hat",children:"\ud83c\udf89"})]})}),j&&!L&&(0,r.jsx)(f.Text,{variant:"subheading1",color:"$black",mb:"$spacing16",children:"Confirm this transaction in your wallet"}),j&&L&&!q&&p&&L&&(0,r.jsx)(m.d,{href:(0,_.getExplorerLink)(p,L,_.ExplorerDataType.TRANSACTION),style:{zIndex:99},children:"View transaction on Explorer"})]})]})]})}a(80893)}}]);
//# sourceMappingURL=4684.095e1f54.chunk.js.map