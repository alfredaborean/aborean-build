"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5356,1535],{16551:(e,r,n)=>{n.d(r,{f3:()=>k,yY:()=>y,zG:()=>m});var t=n(97755),o=n(24547),i=n(99711),a=n(92717),s=n(96296),d=n(17041),c=n(20128),l=n(71949),u=n(82663),p=n(86683),x=n(49476),h=n(60759),g=n(34786);const m=s.ZP.nav`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
  width: fit-content;
`,y=(0,s.ZP)(p.Link)`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.neutral3};
  }
`,b=(0,s.ZP)(i.ZP)`
  gap: 6px;
`,f=s.ZP.h1`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${({theme:e})=>e.neutral1};
  white-space: nowrap;
  margin: 0;
`,v=(0,s.ZP)(i.ZP)`
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
  gap: 10px;
  white-space: nowrap;
`,$=(0,s.ZP)(l.Z)`
  ${x.i}
`,k=({address:e,currency:r,poolName:n})=>{var i,s;const{t:l}=(0,u.useTranslation)(),{neutral2:p}=(0,d.useTheme)(),[x,m]=(0,c.useState)(!1),[y,k]=(0,a.Z)(),w=(0,c.useCallback)(()=>{k(e)},[e,k]),j=null===(i=r)||void 0===i?void 0:i.isNative,S=(null===(s=r)||void 0===s?void 0:s.symbol)??l("tdp.symbolNotFound"),P=!(0,h.GS)().md,F=P&&x&&!y;return(0,t.jsxs)(b,{"aria-current":"page","data-testid":"current-breadcrumb",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[(0,t.jsx)(f,{children:r?S:n})," ",(!r||r&&!j)&&(0,t.jsxs)(v,{"data-testid":"breadcrumb-token-address",isDisabled:!P,onClick:P?w:void 0,children:[(0,t.jsx)(o.ud,{placement:"bottom",size:o.Oz.Max,forceShow:y,text:l("common.copied"),disabled:!0,children:(0,g.shortenAddress)(e)}),F&&(0,t.jsx)($,{"data-testid":"breadcrumb-hover-copy",width:16,height:16,color:p})]})]})}},28969:(e,r,n)=>{n.d(r,{V:()=>w});var t=n(97755),o=n(81955),i=n(16467),a=n(62394),s=n(11692),d=n(53977),c=n(42248),l=n(20128),u=n(82663),p=n(17041),x=n(19671),h=n(82746),g=n(59793),m=n(7602),y=n(98256),b=n(89444),f=n(68643);function v(e,r,n,t,o,i,a){try{var s=e[i](a),d=s.value}catch(c){return void n(c)}s.done?r(d):Promise.resolve(d).then(t,o)}function $(e){return function(){var r=this,n=arguments;return new Promise(function(t,o){var i=e.apply(r,n);function a(e){v(i,t,o,a,s,"next",e)}function s(e){v(i,t,o,a,s,"throw",e)}a(void 0)})}}const k=p.default.button.withConfig({displayName:"StakingSection__StyledButton",componentId:"sc-be976a25-0"})`
  all: unset;
  padding: 12px 16px;
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;

  &:hover:not(:disabled) {
    background-color: ${({theme:e})=>e.surface2Hovered};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function w({position:e}){var r,n,p,v;const{t:w}=(0,u.useTranslation)(),j=(0,x.useSporeColors)(),{data:S}=(0,d.MK)(),P=(0,o.NL)(),[F,A]=(0,l.useState)(!1),[C,L]=(0,l.useState)(!1),[T,Z]=(0,l.useState)(!1),R=(0,l.useMemo)(()=>!(!S||!e.poolId)&&S.some(r=>{var n;return r.pool.toLowerCase()===(null===(n=e.poolId)||void 0===n?void 0:n.toLowerCase())}),[S,e.poolId]),I=(0,c.VA)(e);if(!R)return null;const N=I.isStaked,z=I.stakedAmount0||"0.0000",D=I.stakedAmount1||"0.0000",V=I.unstakedAmount0||"0.0000",E=I.unstakedAmount1||"0.0000",U=function(){var r=$(function*(){var r,n;if(!I.canStake||F)return;const t=e.tokenId||(e.version===i.Qe.V2?"V2 LP":"Unknown"),o=`${null===(r=e.currency0Amount)||void 0===r?void 0:r.currency.symbol}-${null===(n=e.currency1Amount)||void 0===n?void 0:n.currency.symbol}`;A(!0);try{yield I.stakePosition(e.tokenId||"");a.Z.addPopup({type:s.k.LiquiditySuccess,content:{type:"success",title:"Position Staked",description:`Successfully staked ${o} position in gauge`}},`stake-success-${t}`),yield P.invalidateQueries({queryKey:["abstract-position-orchestrated"]})}catch(d){console.error("Failed to stake position:",d),a.Z.addPopup({type:s.k.StakeError,content:{type:"error",title:"Failed to Stake Position",description:d instanceof Error?d.message:"An unexpected error occurred while staking your position.",action:"stake",positionId:t}},`stake-error-${t}`)}finally{A(!1)}});return function(){return r.apply(this,arguments)}}(),_=function(){var r=$(function*(){var r,n;if(!I.isStaked||C)return;const t=e.tokenId||(e.version===i.Qe.V2?"V2 LP":"Unknown"),o=`${null===(r=e.currency0Amount)||void 0===r?void 0:r.currency.symbol}-${null===(n=e.currency1Amount)||void 0===n?void 0:n.currency.symbol}`;L(!0);try{yield I.unstakePosition(e.tokenId||"");a.Z.addPopup({type:s.k.LiquiditySuccess,content:{type:"success",title:"Position Unstaked",description:`Successfully unstaked ${o} position from gauge`}},`unstake-success-${t}`),yield P.invalidateQueries({queryKey:["abstract-position-orchestrated"]})}catch(d){console.error("Failed to unstake position:",d),a.Z.addPopup({type:s.k.UnstakeError,content:{type:"error",title:"Failed to Withdraw Position",description:d instanceof Error?d.message:"An unexpected error occurred while withdrawing your position.",action:"unstake",positionId:t}},`unstake-error-${t}`)}finally{L(!1)}});return function(){return r.apply(this,arguments)}}(),q=function(){var r=$(function*(){var r,n;if(T)return;const t=e.tokenId||"",o=e.tokenId||(e.version===i.Qe.V2?"V2 LP":"Unknown"),d=`${null===(r=e.currency0Amount)||void 0===r?void 0:r.currency.symbol}-${null===(n=e.currency1Amount)||void 0===n?void 0:n.currency.symbol}`,c=`${parseFloat(I.pendingRewards).toFixed(4)} ABX`;Z(!0);try{yield I.claimRewards(t);a.Z.addPopup({type:s.k.LiquiditySuccess,content:{type:"success",title:"Rewards Claimed",description:`Successfully claimed ${c} from ${d} gauge`}},`claim-success-${o}`),yield P.invalidateQueries({queryKey:["abstract-position-orchestrated"]})}catch(l){console.error("Failed to claim rewards:",l),a.Z.addPopup({type:s.k.ClaimRewardsError,content:{type:"error",title:"Failed to Claim Rewards",description:l instanceof Error?l.message:"An unexpected error occurred while claiming your rewards.",action:"claimRewards"}},`claim-rewards-error-${o}`)}finally{Z(!1)}});return function(){return r.apply(this,arguments)}}();return(0,t.jsxs)(h.Flex,{flexDirection:"column",gap:"$spacing20",position:"relative",p:"$spacing16",$md:{p:"$spacing12"},borderRadius:"$rounded12",borderWidth:1,borderColor:"$surface3",group:!0,children:[(0,t.jsx)(h.Flex,{"$group-hover":{opacity:0},position:"absolute",inset:0,borderRadius:"$rounded12",height:"100%",width:"100%",transition:"opacity 0.2s ease",style:{background:`linear-gradient(10deg, ${j.surface1.variable} 0%, ${j.slate.variable} 100%)`}}),(0,t.jsxs)(h.Flex,{row:!0,alignItems:"center",gap:"$gap8",children:[N?(0,t.jsx)(b.CheckCircleFilled,{size:20,color:"$statusSuccess"}):(0,t.jsx)(f.u,{size:20,color:"$neutral2"}),(0,t.jsx)(g.Text,{variant:"subheading1",color:N?"$statusSuccess":"$neutral1",children:N?"Staked":"Not Staked"})]}),(0,t.jsxs)(h.Flex,{"$platform-web":{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"},$md:{flexDirection:"column"},gap:"$spacing16",children:[(0,t.jsxs)(h.Flex,{backgroundColor:N?"$statusSuccess2":"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",borderWidth:2,borderColor:N?"$statusSuccess":"$surface2",gap:"$gap8",children:[(0,t.jsx)(g.Text,{variant:"buttonLabel3",color:"$neutral2",children:"Staked Amount"}),(0,t.jsxs)(h.Flex,{flexDirection:"column",gap:"$gap4",children:[(0,t.jsxs)(g.Text,{variant:"body2",children:[z," ",null===(r=e.currency0Amount)||void 0===r?void 0:r.currency.symbol]}),(0,t.jsxs)(g.Text,{variant:"body2",children:[D," ",null===(n=e.currency1Amount)||void 0===n?void 0:n.currency.symbol]})]})]}),(0,t.jsxs)(h.Flex,{backgroundColor:"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",gap:"$gap8",borderWidth:2,borderColor:"$surface2",children:[(0,t.jsx)(g.Text,{variant:"buttonLabel3",color:"$neutral2",children:"Available to Stake"}),(0,t.jsxs)(h.Flex,{flexDirection:"column",gap:"$gap4",children:[(0,t.jsxs)(g.Text,{variant:"body2",children:[V," ",null===(p=e.currency0Amount)||void 0===p?void 0:p.currency.symbol]}),(0,t.jsxs)(g.Text,{variant:"body2",children:[E," ",null===(v=e.currency1Amount)||void 0===v?void 0:v.currency.symbol]})]})]}),(0,t.jsxs)(h.Flex,{backgroundColor:"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",gap:"$gap8",borderWidth:2,borderColor:"$surface2",children:[(0,t.jsx)(g.Text,{variant:"buttonLabel3",color:"$neutral2",children:"Pending Rewards"}),(0,t.jsxs)(g.Text,{variant:"body2",children:[parseFloat(I.pendingRewards).toFixed(6)," ABX"]}),"N/A"!==I.apr&&(0,t.jsxs)(g.Text,{variant:"body3",color:"$neutral3",children:["APR: ",I.apr]})]})]}),(0,t.jsx)(m.Z,{width:"100%",borderColor:"$surface3"}),(0,t.jsxs)(h.Flex,{row:!0,gap:"$gap12",justifyContent:"center",$md:{flexDirection:"column"},children:[(0,t.jsx)(k,{onClick:U,disabled:I.isLoading||N||!I.canStake||F,children:(0,t.jsxs)(h.Flex,{row:!0,alignItems:"center",gap:"$gap8",children:[F&&(0,t.jsx)(y.n,{size:16}),(0,t.jsx)(g.Text,{variant:"buttonLabel3",color:!I.canStake||N||F?"$neutral3":"$neutral1",children:F?"Staking":I.isLoading?"Loading":N?"Already Staked":I.needsApproval?"Approve & Stake":I.canStake?"Stake":"No LP to Stake"})]})}),(0,t.jsx)(k,{onClick:_,disabled:I.isLoading||!N||C,children:(0,t.jsxs)(h.Flex,{row:!0,alignItems:"center",gap:"$gap8",children:[C&&(0,t.jsx)(y.n,{size:16}),(0,t.jsx)(g.Text,{variant:"buttonLabel3",color:N&&!C?"$neutral1":"$neutral3",children:C?"Withdrawing":I.isLoading?"Loading":N?"Unstake":"Not Staked"})]})}),(0,t.jsx)(k,{onClick:q,disabled:I.isLoading||!N||parseFloat(I.pendingRewards)<=0||T,children:(0,t.jsxs)(h.Flex,{row:!0,alignItems:"center",gap:"$gap4",children:[T&&(0,t.jsx)(y.n,{size:16}),(0,t.jsx)(g.Text,{variant:"buttonLabel3",color:N&&parseFloat(I.pendingRewards)>0&&!T?"$neutral1":"$neutral3",children:T?"Claiming":parseFloat(I.pendingRewards)>0?"Claim Rewards":"No Rewards"})]})})]})]})}},11535:(e,r,n)=>{n.r(r),n.d(r,{default:()=>y});var t=n(97755),o=n(18612),i=n(59375),a=n(96296),s=n(82663),d=n(63933),c=n(99695),l=n(62563),u=n(82746),p=n(59068),x=n(27754);a.ZP.img`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`;const h=a.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,g=(0,a.ZP)(h)`
  gap: 30px;
`,m=(0,a.ZP)(h)`
  flex: 1;
  justify-content: center;
  gap: 24px;
  padding-b: 32px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function y({title:e,subtitle:r,actionButton:n}){(0,l.Gv)();const a=(0,i.d)(),y=(0,d.s0)(),b=a?c.T.LargeHeader:c.T.Hero,f=a?c.T.HeadlineMedium:c.T.HeadlineLarge;return(0,t.jsx)(m,{children:(0,t.jsxs)(x.default,{logImpression:!0,page:o.InterfacePageName.NOT_FOUND,children:[(0,t.jsx)(g,{children:(0,t.jsxs)(h,{children:[e??(0,t.jsx)(b,{children:"404"}),r??(0,t.jsx)(f,{color:"neutral2",children:(0,t.jsx)(s.Trans,{i18nKey:"common.pageNotFound"})})]})}),n??(0,t.jsx)(u.Flex,{row:!0,alignSelf:"stretch",children:(0,t.jsx)(p.z,{onPress:()=>y("/"),variant:"branded",children:(0,t.jsx)(s.Trans,{i18nKey:"notFound.oops"})})})]})})}}}]);
//# sourceMappingURL=5356.861b245c.chunk.js.map