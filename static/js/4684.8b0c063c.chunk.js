"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4684],{24684:(e,r,a)=>{a.r(r),a.d(r,{default:()=>M});var n=a(97755),t=a(32933),i=a(20128);const s=a.p+"static/media/blue-loader.ca1aedeb13ab14d6ef4eb375580604ad.svg";var o=a(62877),l=a(65375),d=a(99711),c=a(14585),p=a(96296),x=a(17041),h=a(82663),u=a(55675),m=a(15423),g=a(59793),f=a(21331),b=a(7539);const j=p.ZP.div`
  ${m.lt};
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({theme:e})=>e.surface1};
  z-index: 1;
  width: 100%;
`,w=p.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid ${({error:e,theme:r})=>e?r.critical:r.surface3};
  transition:
    border-color 300ms ${({error:e})=>e?"step-end":"step-start"},
    color 500ms ${({error:e})=>e?"step-end":"step-start"};
  background-color: ${({theme:e})=>e.surface1};
`,v=p.ZP.div`
  flex: 1;
  padding: 1rem;
`,$=p.ZP.input`
  font-size: 1.25rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({theme:e})=>e.surface1};
  transition: color 300ms ${({error:e})=>e?"step-end":"step-start"};
  color: ${({error:e,theme:r})=>e?r.critical:r.neutral1};
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
`;function C({id:e,className:r="recipient-address-input",label:a,placeholder:t,value:s,onChange:o}){const{t:p}=(0,h.useTranslation)(),{chainId:m}=(0,c.m)(),C=(0,x.useTheme)(),{address:k,loading:y,name:T}=(0,f.useENS)({nameOrAddress:s}),F=(0,i.useCallback)(e=>{const r=e.target.value.replace(/\s+/g,"");o(r)},[o]),A=Boolean(s.length>0&&!y&&!k);return(0,n.jsx)(j,{id:e,children:(0,n.jsx)(w,{error:A,children:(0,n.jsx)(v,{children:(0,n.jsxs)(l.Tz,{gap:"md",children:[(0,n.jsxs)(d.m0,{children:[(0,n.jsx)(g.Text,{variant:"body1",color:C.neutral2,children:a??(0,n.jsx)(h.Trans,{i18nKey:"addressInput.recipient"})}),k&&m&&(0,n.jsxs)(u.d,{href:(0,b.getExplorerLink)(m,T??k,b.ExplorerDataType.ADDRESS),style:{fontSize:"14px"},children:["(",(0,n.jsx)(h.Trans,{i18nKey:"common.viewOnExplorer"}),")"]})]}),(0,n.jsx)($,{className:r,type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:t??p("common.addressOrENS"),error:A,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:F,value:s})]})})})})}var k=a(61068),y=a(32637),T=a(69189),F=a(46979);const A=x.keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`,S=x.default.img.withConfig({displayName:"uniTokenAnimated__UniTokenAnimated",componentId:"sc-4ffdeafa-0"})`
  animation: ${A} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  padding: 2rem 0 0 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`;var z=a(82746),I=a(59068),E=a(4925),N=a(44921),B=a(95336),O=a(46433),X=a(34786),_=a(46832);function M({isOpen:e,closeModal:r}){var a,d;const p=(0,c.m)(),{chainId:x}=p,[h,m]=(0,i.useState)(p.address??"");const{address:j}=(0,f.useENS)({nameOrAddress:h}),[w,v]=(0,i.useState)(!1),{claimCallback:$}=(0,y.NH)(j),A=(0,y.jX)(j),M=(0,y.ot)(j),[R,D]=(0,i.useState)(),P=(0,T.ub)(R??""),W=R&&!P;function Z(){v(!1),D(void 0),m(""),r()}const U=null===(a=A)||void 0===a?void 0:a.toFixed(0,{groupSeparator:","}),K=null===(d=A)||void 0===d?void 0:d.toFixed(0,{groupSeparator:","});return(0,n.jsxs)(B.Modal,{name:O.ModalName.AddressClaim,isModalOpen:e,onClose:Z,padding:0,children:[!w&&(0,n.jsxs)(z.Flex,{gap:"$gap12",width:"100%",children:[(0,n.jsxs)(z.Flex,{width:"100%",position:"relative",overflow:"hidden","$platform-web":{background:"radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%)"},borderRadius:"$rounded12",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)",children:[(0,n.jsx)(k.sq,{}),(0,n.jsx)(k.RF,{}),(0,n.jsxs)(k.uO,{gap:"md",children:[(0,n.jsxs)(z.Flex,{row:!0,justifyContent:"space-between",alignItems:"center",children:[(0,n.jsx)(g.Text,{color:"$white",fontWeight:"$medium",children:"Claim ABX token"}),(0,n.jsx)(N.g,{onClose:Z})]}),(0,n.jsxs)(g.Text,{color:"$white",fontWeight:"$medium",fontSize:36,children:[U," ABX"]})]}),(0,n.jsx)(k.SS,{})]}),(0,n.jsxs)(l.Tz,{gap:"md",style:{padding:"1rem",paddingTop:"0"},justify:"center",children:[(0,n.jsx)(g.Text,{variant:"subheading1",color:"$white",children:"Enter an address to trigger a ABX claim. If the address has any claimable ABX it will be sent to them on submission."}),(0,n.jsx)(C,{value:h,onChange:function(e){m(e)}}),j&&!M&&(0,n.jsx)(g.Text,{color:"$statusCritical",children:"Address has no available claim"}),(0,n.jsx)(z.Flex,{row:!0,children:(0,n.jsx)(I.z,{variant:"branded",size:"large",isDisabled:!(0,t.UJ)(j??"")||!M,borderRadius:"$rounded12",mt:"$spacing16",onPress:function(){v(!0),$().then(e=>{D(e)}).catch(e=>{v(!1),_.logger.warn("AddressClaimModal","onClaim","error",e)})},children:"Claim ABX"})})]})]}),(w||W)&&(0,n.jsxs)(E.G7,{width:"100%",p:"$padding24",position:"relative",alignItems:"center","$platform-web":{background:"radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;"},children:[(0,n.jsx)(k.RF,{}),(0,n.jsx)(k.MN,{desaturate:!0}),(0,n.jsx)(z.Flex,{row:!0,alignItems:"center",width:"100%",pl:"$padding16",pt:"$padding16",children:(0,n.jsx)(N.g,{onClose:Z})}),(0,n.jsx)(z.Flex,{justifyContent:"center",alignItems:"center",py:60,children:W?(0,n.jsx)(S,{width:"72px",src:o,alt:"ABX logo"}):(0,n.jsx)(F._,{src:s,alt:"loader",size:"90px"})}),(0,n.jsxs)(z.Flex,{gap:100,justifyContent:"center",children:[(0,n.jsxs)(z.Flex,{gap:"$gap8",justifyContent:"center",alignItems:"center",children:[(0,n.jsx)(g.Text,{variant:"heading1",color:"$black",children:W?"Claimed":"Claiming"}),!W&&(0,n.jsxs)(g.Text,{fontSize:36,color:"#ff007a",fontWeight:"$medium",children:[K," ABX"]}),j&&(0,n.jsxs)(g.Text,{variant:"subheading1",color:"$black",children:["for ",(0,X.shortenAddress)(j)]})]}),W&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(g.Text,{variant:"subheading1",color:"$black",children:[(0,n.jsxs)("span",{role:"img","aria-label":"party-hat",children:["\ud83c\udf89"," "]}),"Welcome to team Unicorn :) ",(0,n.jsx)("span",{role:"img","aria-label":"party-hat",children:"\ud83c\udf89"})]})}),w&&!R&&(0,n.jsx)(g.Text,{variant:"subheading1",color:"$black",mb:"$spacing16",children:"Confirm this transaction in your wallet"}),w&&R&&!W&&x&&R&&(0,n.jsx)(u.d,{href:(0,b.getExplorerLink)(x,R,b.ExplorerDataType.TRANSACTION),style:{zIndex:99},children:"View transaction on Explorer"})]})]})]})}}}]);
//# sourceMappingURL=4684.8b0c063c.chunk.js.map