"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[882],{30882:(e,r,a)=>{a.r(r),a.d(r,{default:()=>_});var n=a(9990),t=a(46172),i=a(98902);const s=a.p+"static/media/blue-loader.ca1aedeb13ab14d6ef4eb375580604ad.svg";var o=a(77558),d=a(87461),l=a(67051),c=a(12099),p=a(90808),h=a(54407),m=a(41406),u=a(23600),x=a(48832),g=a(96690),f=a(54484),b=a(90);const j=p.Ay.div`
  ${x.ZZ};
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({theme:e})=>e.surface1};
  z-index: 1;
  width: 100%;
`,w=p.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  border: 1px solid ${({error:e,theme:r})=>e?r.critical:r.surface3};
  transition:
    border-color 300ms ${({error:e})=>e?"step-end":"step-start"},
    color 500ms ${({error:e})=>e?"step-end":"step-start"};
  background-color: ${({theme:e})=>e.surface1};
`,$=p.Ay.div`
  flex: 1;
  padding: 1rem;
`,v=p.Ay.input`
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
`;function C({id:e,className:r="recipient-address-input",label:a,placeholder:t,value:s,onChange:o}){const{t:p}=(0,m.useTranslation)(),{chainId:x}=(0,c.F)(),C=(0,h.useTheme)(),{address:k,loading:y,name:A}=(0,f.useENS)({nameOrAddress:s}),E=(0,i.useCallback)(e=>{const r=e.target.value.replace(/\s+/g,"");o(r)},[o]),S=Boolean(s.length>0&&!y&&!k);return(0,n.jsx)(j,{id:e,children:(0,n.jsx)(w,{error:S,children:(0,n.jsx)($,{children:(0,n.jsxs)(d.mm,{gap:"md",children:[(0,n.jsxs)(l.JA,{children:[(0,n.jsx)(g.EY,{variant:"body1",color:C.neutral2,children:a??(0,n.jsx)(m.Trans,{i18nKey:"addressInput.recipient"})}),k&&x&&(0,n.jsxs)(u.G,{href:(0,b.getExplorerLink)(x,A??k,b.ExplorerDataType.ADDRESS),style:{fontSize:"14px"},children:["(",(0,n.jsx)(m.Trans,{i18nKey:"common.viewOnExplorer"}),")"]})]}),(0,n.jsx)(v,{className:r,type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:t??p("common.addressOrENS"),error:S,pattern:"^(0x[a-fA-F0-9]{40})$",onChange:E,value:s})]})})})})}var k=a(71872),y=a(69679),A=a(53752),E=a(89535);const S=h.keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
`,I=h.default.img.withConfig({displayName:"uniTokenAnimated__UniTokenAnimated",componentId:"sc-4ffdeafa-0"})`
  animation: ${S} 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  padding: 2rem 0 0 0;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`;var Y=a(48526),F=a(89847),T=a(52293),z=a(94490),N=a(7451),B=a(22352),X=a(16172),O=a(9874);function _({isOpen:e,closeModal:r}){var a,l;const p=(0,c.F)(),{chainId:h}=p,[m,x]=(0,i.useState)(p.address??"");const{address:j}=(0,f.useENS)({nameOrAddress:m}),[w,$]=(0,i.useState)(!1),{claimCallback:v}=(0,y.T6)(j),S=(0,y.Lb)(j),_=(0,y.Yp)(j),[D,M]=(0,i.useState)(),R=(0,A.tp)(D??""),W=D&&!R;function K(){$(!1),M(void 0),x(""),r()}const L=null===(a=S)||void 0===a?void 0:a.toFixed(0,{groupSeparator:","}),G=null===(l=S)||void 0===l?void 0:l.toFixed(0,{groupSeparator:","});return(0,n.jsxs)(N.Modal,{name:B.ModalName.AddressClaim,isModalOpen:e,onClose:K,padding:0,children:[!w&&(0,n.jsxs)(Y.s,{gap:"$gap12",width:"100%",children:[(0,n.jsxs)(Y.s,{width:"100%",position:"relative",overflow:"hidden","$platform-web":{background:"radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%)"},borderRadius:"$rounded12",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)",children:[(0,n.jsx)(k.LR,{}),(0,n.jsx)(k.jK,{}),(0,n.jsxs)(k.yj,{gap:"md",children:[(0,n.jsxs)(Y.s,{row:!0,justifyContent:"space-between",alignItems:"center",children:[(0,n.jsx)(g.EY,{color:"$white",fontWeight:"$medium",children:"Claim ABX token"}),(0,n.jsx)(z.I,{onClose:K})]}),(0,n.jsxs)(g.EY,{color:"$white",fontWeight:"$medium",fontSize:36,children:[L," ABX"]})]}),(0,n.jsx)(k.qC,{})]}),(0,n.jsxs)(d.mm,{gap:"md",style:{padding:"1rem",paddingTop:"0"},justify:"center",children:[(0,n.jsx)(g.EY,{variant:"subheading1",color:"$white",children:"Enter an address to trigger a ABX claim. If the address has any claimable ABX it will be sent to them on submission."}),(0,n.jsx)(C,{value:m,onChange:function(e){x(e)}}),j&&!_&&(0,n.jsx)(g.EY,{color:"$statusCritical",children:"Address has no available claim"}),(0,n.jsx)(Y.s,{row:!0,children:(0,n.jsx)(F.$,{variant:"branded",size:"large",isDisabled:!(0,t.PW)(j??"")||!_,borderRadius:"$rounded12",mt:"$spacing16",onPress:function(){$(!0),v().then(e=>{M(e)}).catch(e=>{$(!1),O.logger.warn("AddressClaimModal","onClaim","error",e)})},children:"Claim ABX"})})]})]}),(w||W)&&(0,n.jsxs)(T.Ss,{width:"100%",p:"$padding24",position:"relative",alignItems:"center","$platform-web":{background:"radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;"},children:[(0,n.jsx)(k.jK,{}),(0,n.jsx)(k.dX,{desaturate:!0}),(0,n.jsx)(Y.s,{row:!0,alignItems:"center",width:"100%",pl:"$padding16",pt:"$padding16",children:(0,n.jsx)(z.I,{onClose:K})}),(0,n.jsx)(Y.s,{justifyContent:"center",alignItems:"center",py:60,children:W?(0,n.jsx)(I,{width:"72px",src:o,alt:"ABX logo"}):(0,n.jsx)(E.N,{src:s,alt:"loader",size:"90px"})}),(0,n.jsxs)(Y.s,{gap:100,justifyContent:"center",children:[(0,n.jsxs)(Y.s,{gap:"$gap8",justifyContent:"center",alignItems:"center",children:[(0,n.jsx)(g.EY,{variant:"heading1",color:"$black",children:W?"Claimed":"Claiming"}),!W&&(0,n.jsxs)(g.EY,{fontSize:36,color:"#ff007a",fontWeight:"$medium",children:[G," ABX"]}),j&&(0,n.jsxs)(g.EY,{variant:"subheading1",color:"$black",children:["for ",(0,X.shortenAddress)(j)]})]}),W&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(g.EY,{variant:"subheading1",color:"$black",children:[(0,n.jsxs)("span",{role:"img","aria-label":"party-hat",children:["\ud83c\udf89"," "]}),"Welcome to team Unicorn :) ",(0,n.jsx)("span",{role:"img","aria-label":"party-hat",children:"\ud83c\udf89"})]})}),w&&!D&&(0,n.jsx)(g.EY,{variant:"subheading1",color:"$black",mb:"$spacing16",children:"Confirm this transaction in your wallet"}),w&&D&&!W&&h&&D&&(0,n.jsx)(u.G,{href:(0,b.getExplorerLink)(h,D,b.ExplorerDataType.TRANSACTION),style:{zIndex:99},children:"View transaction on Explorer"})]})]})]})}}}]);
//# sourceMappingURL=882.05287e21.chunk.js.map