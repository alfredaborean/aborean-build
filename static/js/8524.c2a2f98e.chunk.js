"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8524,8149],{16551:(e,n,t)=>{t.d(n,{f3:()=>b,yY:()=>y,zG:()=>g});var r=t(97755),o=t(24547),i=t(99711),a=t(92717),s=t(96296),c=t(17041),d=t(20128),l=t(71949),u=t(82663),p=t(86683),x=t(49476),m=t(60759),h=t(34786);const g=s.ZP.nav`
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
`,f=(0,s.ZP)(i.ZP)`
  gap: 6px;
`,$=s.ZP.h1`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${({theme:e})=>e.neutral1};
  white-space: nowrap;
  margin: 0;
`,k=(0,s.ZP)(i.ZP)`
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
  gap: 10px;
  white-space: nowrap;
`,v=(0,s.ZP)(l.Z)`
  ${x.i}
`,b=({address:e,currency:n,poolName:t})=>{var i,s;const{t:l}=(0,u.useTranslation)(),{neutral2:p}=(0,c.useTheme)(),[x,g]=(0,d.useState)(!1),[y,b]=(0,a.Z)(),w=(0,d.useCallback)(()=>{b(e)},[e,b]),j=null===(i=n)||void 0===i?void 0:i.isNative,S=(null===(s=n)||void 0===s?void 0:s.symbol)??l("tdp.symbolNotFound"),P=!(0,m.GS)().md,F=P&&x&&!y;return(0,r.jsxs)(f,{"aria-current":"page","data-testid":"current-breadcrumb",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[(0,r.jsx)($,{children:n?S:t})," ",(!n||n&&!j)&&(0,r.jsxs)(k,{"data-testid":"breadcrumb-token-address",isDisabled:!P,onClick:P?w:void 0,children:[(0,r.jsx)(o.ud,{placement:"bottom",size:o.Oz.Max,forceShow:y,text:l("common.copied"),disabled:!0,children:(0,h.shortenAddress)(e)}),F&&(0,r.jsx)(v,{"data-testid":"breadcrumb-hover-copy",width:16,height:16,color:p})]})]})}},28969:(e,n,t)=>{t.d(n,{V:()=>w});var r=t(97755),o=t(16467),i=t(62394),a=t(11692),s=t(42248),c=t(53977),d=t(20128),l=t(82663),u=t(17041),p=t(19671),x=t(74456),m=t(82746),h=t(59793),g=t(7602),y=t(98256),f=t(89444),$=t(68643);function k(e,n,t,r,o,i,a){try{var s=e[i](a),c=s.value}catch(d){return void t(d)}s.done?n(c):Promise.resolve(c).then(r,o)}function v(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var i=e.apply(n,t);function a(e){k(i,r,o,a,s,"next",e)}function s(e){k(i,r,o,a,s,"throw",e)}a(void 0)})}}const b=u.default.button.withConfig({displayName:"StakingSection__StyledButton",componentId:"sc-58c668eb-0"})`
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
`;function w({position:e}){var n,t,u,k;const{t:w}=(0,l.useTranslation)(),{data:j}=((0,p.useSporeColors)(),(0,c.MK)()),[S,P]=(0,d.useState)(!1),[F,A]=(0,d.useState)(!1),[C,L]=(0,d.useState)(!1),T=(0,d.useMemo)(()=>!(!j||!e.poolId)&&j.some(n=>{var t;return n.pool.toLowerCase()===(null===(t=e.poolId)||void 0===t?void 0:t.toLowerCase())}),[j,e.poolId]),Z=(0,s.VA)(e),I=(0,x.z)(m.Flex,{backgroundColor:"$surface2",p:"$spacing16",borderRadius:"$rounded12",borderWidth:"$spacing1",borderColor:"$surface3"});if(!T)return null;const R=Z.isStaked,N=Z.stakedAmount0||"0.0000",z=Z.stakedAmount1||"0.0000",D=Z.unstakedAmount0||"0.0000",V=Z.unstakedAmount1||"0.0000",E=function(){var n=v(function*(){var n,t;if(!Z.canStake||S)return;const r=e.tokenId||(e.version===o.Qe.V2?"V2 LP":"Unknown"),s=`${null===(n=e.currency0Amount)||void 0===n?void 0:n.currency.symbol}-${null===(t=e.currency1Amount)||void 0===t?void 0:t.currency.symbol}`;P(!0);try{const n=yield Z.stakePosition(e.tokenId||"");i.Z.addPopup({type:a.k.StakeSuccess,content:{type:"success",title:"Position Staked Successfully",description:`Successfully staked ${s} position ${r} to earn rewards.`,hash:n,action:"stake",positionId:r}},`stake-success-${r}`)}catch(c){console.error("Failed to stake position:",c),i.Z.addPopup({type:a.k.StakeError,content:{type:"error",title:"Failed to Stake Position",description:c instanceof Error?c.message:"An unexpected error occurred while staking your position.",action:"stake",positionId:r}},`stake-error-${r}`)}finally{P(!1)}});return function(){return n.apply(this,arguments)}}(),U=function(){var n=v(function*(){var n,t;if(!Z.isStaked||F)return;const r=e.tokenId||(e.version===o.Qe.V2?"V2 LP":"Unknown"),s=`${null===(n=e.currency0Amount)||void 0===n?void 0:n.currency.symbol}-${null===(t=e.currency1Amount)||void 0===t?void 0:t.currency.symbol}`;A(!0);try{const n=yield Z.unstakePosition(e.tokenId||"");i.Z.addPopup({type:a.k.UnstakeSuccess,content:{type:"success",title:"Position Withdrawn Successfully",description:`Successfully withdrew ${s} position ${r} from staking.`,hash:n,action:"unstake",positionId:r}},`unstake-success-${r}`)}catch(c){console.error("Failed to unstake position:",c),i.Z.addPopup({type:a.k.UnstakeError,content:{type:"error",title:"Failed to Withdraw Position",description:c instanceof Error?c.message:"An unexpected error occurred while withdrawing your position.",action:"unstake",positionId:r}},`unstake-error-${r}`)}finally{A(!1)}});return function(){return n.apply(this,arguments)}}(),_=function(){var n=v(function*(){var n,t;if(C)return;const r=e.tokenId||"",s=e.tokenId||(e.version===o.Qe.V2?"V2 LP":"Unknown"),c=`${null===(n=e.currency0Amount)||void 0===n?void 0:n.currency.symbol}-${null===(t=e.currency1Amount)||void 0===t?void 0:t.currency.symbol}`,d=`${parseFloat(Z.pendingRewards).toFixed(4)} ABX`;L(!0);try{const e=yield Z.claimRewards(r);i.Z.addPopup({type:a.k.ClaimRewardsSuccess,content:{type:"success",title:"Rewards Claimed Successfully",description:`Successfully claimed ${d} from ${c} position ${s}.`,hash:e,action:"claimRewards",amount:d}},`claim-rewards-success-${s}`)}catch(l){console.error("Failed to claim rewards:",l),i.Z.addPopup({type:a.k.ClaimRewardsError,content:{type:"error",title:"Failed to Claim Rewards",description:l instanceof Error?l.message:"An unexpected error occurred while claiming your rewards.",action:"claimRewards"}},`claim-rewards-error-${s}`)}finally{L(!1)}});return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(I,{flexDirection:"column",gap:"$spacing20",children:[(0,r.jsxs)(m.Flex,{row:!0,alignItems:"center",gap:"$gap8",children:[R?(0,r.jsx)(f.CheckCircleFilled,{size:20,color:"$statusSuccess"}):(0,r.jsx)($.u,{size:20,color:"$neutral2"}),(0,r.jsx)(h.Text,{variant:"heading3",color:R?"$statusSuccess":"$neutral1",children:R?"Staked":"Not Staked"})]}),(0,r.jsxs)(m.Flex,{"$platform-web":{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"},$md:{flexDirection:"column"},gap:"$spacing16",children:[(0,r.jsxs)(m.Flex,{backgroundColor:R?"$statusSuccess2":"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",gap:"$gap8",children:[(0,r.jsx)(h.Text,{variant:"buttonLabel3",color:"$neutral2",children:"Staked Amount"}),(0,r.jsxs)(m.Flex,{flexDirection:"column",gap:"$gap4",children:[(0,r.jsxs)(h.Text,{variant:"body2",children:[N," ",null===(n=e.currency0Amount)||void 0===n?void 0:n.currency.symbol]}),(0,r.jsxs)(h.Text,{variant:"body2",children:[z," ",null===(t=e.currency1Amount)||void 0===t?void 0:t.currency.symbol]})]})]}),(0,r.jsxs)(m.Flex,{backgroundColor:"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",gap:"$gap8",children:[(0,r.jsx)(h.Text,{variant:"buttonLabel3",color:"$neutral2",children:"Available to Stake"}),(0,r.jsxs)(m.Flex,{flexDirection:"column",gap:"$gap4",children:[(0,r.jsxs)(h.Text,{variant:"body2",children:[D," ",null===(u=e.currency0Amount)||void 0===u?void 0:u.currency.symbol]}),(0,r.jsxs)(h.Text,{variant:"body2",children:[V," ",null===(k=e.currency1Amount)||void 0===k?void 0:k.currency.symbol]})]})]}),(0,r.jsxs)(m.Flex,{backgroundColor:"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",gap:"$gap8",children:[(0,r.jsx)(h.Text,{variant:"buttonLabel3",color:"$neutral2",children:"Pending Rewards"}),(0,r.jsxs)(h.Text,{variant:"body2",children:[parseFloat(Z.pendingRewards).toFixed(6)," ABX"]}),"N/A"!==Z.apr&&(0,r.jsxs)(h.Text,{variant:"body3",color:"$neutral3",children:["APR: ",Z.apr]})]})]}),(0,r.jsx)(g.Z,{width:"100%",borderColor:"$surface3"}),(0,r.jsxs)(m.Flex,{row:!0,gap:"$gap12",justifyContent:"center",$md:{flexDirection:"column"},children:[(0,r.jsx)(b,{onClick:E,disabled:Z.isLoading||R||!Z.canStake||S,children:(0,r.jsxs)(m.Flex,{row:!0,alignItems:"center",gap:"$gap4",children:[S&&(0,r.jsx)(y.n,{size:"$icon.16"}),(0,r.jsx)(h.Text,{variant:"buttonLabel2",color:!Z.canStake||R||S?"$neutral3":"$neutral1",children:S?"Staking...":Z.isLoading?"Loading...":R?"Already Staked":Z.needsApproval?"Approve & Stake":Z.canStake?"Stake":"No LP to Stake"})]})}),(0,r.jsx)(b,{onClick:U,disabled:Z.isLoading||!R||F,children:(0,r.jsxs)(m.Flex,{row:!0,alignItems:"center",gap:"$gap4",children:[F&&(0,r.jsx)(y.n,{size:"$icon.16"}),(0,r.jsx)(h.Text,{variant:"buttonLabel2",color:R&&!F?"$neutral1":"$neutral3",children:F?"Withdrawing...":Z.isLoading?"Loading...":R?"Unstake":"Not Staked"})]})}),(0,r.jsx)(b,{onClick:_,disabled:Z.isLoading||!R||parseFloat(Z.pendingRewards)<=0||C,children:(0,r.jsxs)(m.Flex,{row:!0,alignItems:"center",gap:"$gap4",children:[C&&(0,r.jsx)(y.n,{size:"$icon.16"}),(0,r.jsx)(h.Text,{variant:"buttonLabel2",color:R&&parseFloat(Z.pendingRewards)>0&&!C?"$neutral1":"$neutral3",children:C?"Claiming...":parseFloat(Z.pendingRewards)>0?"Claim Rewards":"No Rewards"})]})})]})]})}},79106:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var r=t(97755),o=t(18612);const i=t.p+"static/media/404-page-dark.f24684e761633ae99402.png",a=t.p+"static/media/404-page-light.c448d3fd36de14609aba.png";var s=t(59375),c=t(96296),d=t(82663),l=t(63933),u=t(99695),p=t(62563),x=t(82746),m=t(59068),h=t(27754);const g=c.ZP.img`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,y=c.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=(0,c.ZP)(y)`
  gap: 30px;
`,$=(0,c.ZP)(y)`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function k({title:e,subtitle:n,actionButton:t}){const c=(0,p.Gv)(),k=(0,s.d)(),v=(0,l.s0)(),b=k?u.T.LargeHeader:u.T.Hero,w=k?u.T.HeadlineMedium:u.T.HeadlineLarge;return(0,r.jsx)($,{children:(0,r.jsxs)(h.default,{logImpression:!0,page:o.InterfacePageName.NOT_FOUND,children:[(0,r.jsxs)(f,{children:[(0,r.jsxs)(y,{children:[e??(0,r.jsx)(b,{children:"404"}),n??(0,r.jsx)(w,{color:"neutral2",children:(0,r.jsx)(d.Trans,{i18nKey:"common.pageNotFound"})})]}),(0,r.jsx)(g,{src:c?i:a,alt:"Liluni"})]}),t??(0,r.jsx)(x.Flex,{row:!0,alignSelf:"stretch",children:(0,r.jsx)(m.z,{onPress:()=>v("/"),variant:"branded",children:(0,r.jsx)(d.Trans,{i18nKey:"notFound.oops"})})})]})})}}}]);
//# sourceMappingURL=8524.c2a2f98e.chunk.js.map