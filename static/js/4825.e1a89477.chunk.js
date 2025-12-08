"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4825,8059],{40638:(e,r,n)=>{n.d(r,{AF:()=>h,Q9:()=>k,TV:()=>f});var t=n(9990),i=n(79524),o=n(67051),a=n(90153),s=n(90808),c=n(54407),d=n(98902),l=n(69375),u=n(41406),p=n(58146),y=n(60388),m=n(72283),g=n(16172);const h=s.Ay.nav`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
  width: fit-content;
`,f=(0,s.Ay)(p.Link)`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.neutral3};
  }
`,x=(0,s.Ay)(o.Ay)`
  gap: 6px;
`,b=s.Ay.h1`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${({theme:e})=>e.neutral1};
  white-space: nowrap;
  margin: 0;
`,v=(0,s.Ay)(o.Ay)`
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
  gap: 10px;
  white-space: nowrap;
`,$=(0,s.Ay)(l.A)`
  ${y._}
`,k=({address:e,currency:r,poolName:n})=>{var o,s;const{t:l}=(0,u.useTranslation)(),{neutral2:p}=(0,c.useTheme)(),[y,h]=(0,d.useState)(!1),[f,k]=(0,a.A)(),j=(0,d.useCallback)(()=>{k(e)},[e,k]),w=null===(o=r)||void 0===o?void 0:o.isNative,S=(null===(s=r)||void 0===s?void 0:s.symbol)??l("tdp.symbolNotFound"),A=!(0,m.Qf)().md,C=A&&y&&!f;return(0,t.jsxs)(x,{"aria-current":"page","data-testid":"current-breadcrumb",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[(0,t.jsx)(b,{children:r?S:n})," ",(!r||r&&!w)&&(0,t.jsxs)(v,{"data-testid":"breadcrumb-token-address",isDisabled:!A,onClick:A?j:void 0,children:[(0,t.jsx)(i.PD,{placement:"bottom",size:i.N6.Max,forceShow:f,text:l("common.copied"),disabled:!f,children:(0,g.shortenAddress)(e)}),C&&(0,t.jsx)($,{"data-testid":"breadcrumb-hover-copy",width:16,height:16,color:p})]})]})}},89962:(e,r,n)=>{n.d(r,{j:()=>F});var t=n(9990),i=n(19755),o=n(94597),a=n(46997),s=n(10215),c=n(34476),d=n(40214),l=n(49458),u=n(98902),p=n(41406),y=n(43633),m=n(96196),g=n(54407),h=n(12016),f=n(48526),x=n(96690),b=n(75790),v=n(66595),$=n(52321),k=n(43977),j=n(28643),w=n(22352),S=n(53634),A=n(63906),C=n(32449);function P(e,r,n,t,i,o,a){try{var s=e[o](a),c=s.value}catch(d){return void n(d)}s.done?r(c):Promise.resolve(c).then(t,i)}function L(e){return function(){var r=this,n=arguments;return new Promise(function(t,i){var o=e.apply(r,n);function a(e){P(o,t,i,a,s,"next",e)}function s(e){P(o,t,i,a,s,"throw",e)}a(void 0)})}}const E=g.default.button.withConfig({displayName:"StakingSection__StyledButton",componentId:"sc-90f0fc99-0"})`
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
`;function F({position:e,tvlUSD:r}){var n,g,P,F;const{t:I}=(0,p.useTranslation)(),N=(0,h.D)(),R=(0,i.jE)(),{formatCurrencyAmount:D}=(0,j.useLocalizationContext)(),[Y,T]=(0,u.useState)(!1),[U,V]=(0,u.useState)(!1),[_,z]=(0,u.useState)(!1),O=!!e.gaugeAddress,q=(0,l.S)(e,r),B=(0,m.j)(),{price:K}=(0,S.useUSDCPrice)(s.K);if(!O)return null;const M=q.isStaked,W=q.stakedAmount0||"0.0000",H=q.stakedAmount1||"0.0000",Q=q.unstakedAmount0||"0.0000",X=q.unstakedAmount1||"0.0000",J=q.pendingRewardsRaw??"0",Z=(()=>{const e=Number.parseFloat(q.pendingRewards??"0");return Number.isFinite(e)?e:0})();let G=Z>0;try{G=BigInt(J)>0n}catch{G=Z>0}const ee=function(){var r=L(function*(){var r,n;if(!q.canStake||Y)return;const t=e.tokenId||(e.version===o.rg.V2?"V2 LP":"Unknown"),i=`${null===(r=e.currency0Amount)||void 0===r?void 0:r.currency.symbol}-${null===(n=e.currency1Amount)||void 0===n?void 0:n.currency.symbol}`;if(e.version!==o.rg.V2){T(!0);try{yield q.stakePosition(e.tokenId||"");c.O.addPopup({type:d.n.LiquiditySuccess,content:{type:"success",title:"Position Staked",description:`Successfully staked ${i} position in gauge`}},`stake-success-${t}`),yield R.invalidateQueries({queryKey:["abstract-position-orchestrated"]})}catch(a){console.error("Failed to stake position:",a),c.O.addPopup({type:d.n.StakeError,content:{type:"error",title:"Failed to Stake Position",description:a instanceof Error?a.message:"An unexpected error occurred while staking your position.",action:"stake",positionId:t}},`stake-error-${t}`)}finally{T(!1)}}else B((0,y.aS)({name:w.ModalName.StakeLP,initialState:(0,C.E_)(e)}))});return function(){return r.apply(this,arguments)}}(),re=function(){var r=L(function*(){var r,n;if(!q.isStaked&&e.version!==o.rg.V2||U)return;const t=e.tokenId||(e.version===o.rg.V2?"V2 LP":"Unknown"),i=`${null===(r=e.currency0Amount)||void 0===r?void 0:r.currency.symbol}-${null===(n=e.currency1Amount)||void 0===n?void 0:n.currency.symbol}`;if(e.version!==o.rg.V2){V(!0);try{yield q.unstakePosition(e.tokenId||"");c.O.addPopup({type:d.n.LiquiditySuccess,content:{type:"success",title:"Position Unstaked",description:`Successfully unstaked ${i} position from gauge`}},`unstake-success-${t}`),yield R.invalidateQueries({queryKey:["abstract-position-orchestrated"]})}catch(a){console.error("Failed to unstake position:",a),c.O.addPopup({type:d.n.UnstakeError,content:{type:"error",title:"Failed to Unstake Position",description:a instanceof Error?a.message:"An unexpected error occurred while unstaking your position.",action:"unstake",positionId:t}},`unstake-error-${t}`)}finally{V(!1)}}else B((0,y.aS)({name:w.ModalName.WithdrawLP,initialState:(0,C.E_)(e)}))});return function(){return r.apply(this,arguments)}}(),ne=function(){var r=L(function*(){var r,n;if(_)return;const t=e.tokenId||"",i=e.tokenId||(e.version===o.rg.V2?"V2 LP":"Unknown"),a=`${null===(r=e.currency0Amount)||void 0===r?void 0:r.currency.symbol}-${null===(n=e.currency1Amount)||void 0===n?void 0:n.currency.symbol}`,s=`${Z.toFixed(4)} ABX`;z(!0);try{yield q.claimRewards(t);c.O.addPopup({type:d.n.LiquiditySuccess,content:{type:"success",title:"Rewards Claimed",description:`Successfully claimed ${s} from ${a} gauge`}},`claim-success-${i}`),yield R.invalidateQueries({queryKey:["abstract-position-orchestrated"]})}catch(l){console.error("Failed to claim rewards:",l),c.O.addPopup({type:d.n.ClaimRewardsError,content:{type:"error",title:"Failed to claim rewards",description:l instanceof Error?l.message:"An unexpected error occurred while claiming your rewards.",action:"claimRewards"}},`claim-rewards-error-${i}`)}finally{z(!1)}});return function(){return r.apply(this,arguments)}}(),te=q.canStake&&!Y&&!q.isLoading,ie=!U&&!q.isLoading&&(e.version===o.rg.V2?(()=>{try{return BigInt(q.rawStakedBalance||"0")>0n}catch{return!1}})():q.isStaked),oe=(0,u.useMemo)(()=>{if(K&&J&&"0"!==J)try{const e=a.CurrencyAmount.fromRawAmount(s.K,J),r=K.quote(e);return D({value:r,type:A.NumberType.FiatStandard})}catch(e){return void console.warn("[StakingSection] Failed to calculate pending rewards USD value",e)}},[K,J,D]);return(0,t.jsxs)(f.s,{flexDirection:"column",gap:"$spacing20",position:"relative",p:"$spacing16",$md:{p:"$spacing12"},borderRadius:"$rounded20",borderWidth:1,borderColor:"$surface3",group:!0,children:[(0,t.jsx)(f.s,{"$group-hover":{opacity:0},position:"absolute",inset:0,borderRadius:"$rounded20",height:"100%",width:"100%",transition:"opacity 0.2s ease",style:{background:`linear-gradient(10deg, ${N.surface1.variable} 0%, ${N.slate.variable} 100%)`}}),(0,t.jsxs)(f.s,{row:!0,alignItems:"center",gap:"$gap8",children:[M?(0,t.jsx)($.CheckCircleFilled,{size:20,color:"$statusSuccess"}):(0,t.jsx)(k.F,{size:20,color:"$neutral2"}),(0,t.jsx)(x.EY,{variant:"subheading1",color:M?"$statusSuccess":"$neutral1",children:M?"Staked":"Not Staked"})]}),(0,t.jsxs)(f.s,{"$platform-web":{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridAutoRows:"1fr"},$md:{gridTemplateColumns:"1fr 1fr"},$sm:{gridTemplateColumns:"1fr"},gap:"$spacing16",children:[(0,t.jsxs)(f.s,{backgroundColor:M?"$statusSuccess2":"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",borderWidth:2,borderColor:M?"$statusSuccess":"$surface2",gap:"$gap8",children:[(0,t.jsx)(x.EY,{variant:"buttonLabel3",color:"$neutral2",children:"Staked amount"}),(0,t.jsxs)(f.s,{flexDirection:"column",gap:"$gap4",children:[(0,t.jsxs)(x.EY,{variant:"body2",children:[W," ",null===(n=e.currency0Amount)||void 0===n?void 0:n.currency.symbol]}),(0,t.jsxs)(x.EY,{variant:"body2",children:[H," ",null===(g=e.currency1Amount)||void 0===g?void 0:g.currency.symbol]})]})]}),(0,t.jsxs)(f.s,{backgroundColor:"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",gap:"$gap8",borderWidth:2,borderColor:"$surface2",children:[(0,t.jsx)(x.EY,{variant:"buttonLabel3",color:"$neutral2",children:"Available to stake"}),(0,t.jsxs)(f.s,{flexDirection:"column",gap:"$gap4",children:[(0,t.jsxs)(x.EY,{variant:"body2",children:[Q," ",null===(P=e.currency0Amount)||void 0===P?void 0:P.currency.symbol]}),(0,t.jsxs)(x.EY,{variant:"body2",children:[X," ",null===(F=e.currency1Amount)||void 0===F?void 0:F.currency.symbol]})]})]}),(0,t.jsxs)(f.s,{backgroundColor:"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",gap:"$gap8",borderWidth:2,borderColor:"$surface2",children:[(0,t.jsx)(x.EY,{variant:"buttonLabel3",color:"$neutral2",children:"Pending rewards"}),(0,t.jsxs)(x.EY,{variant:"body2",children:[Z.toFixed(6)," ABX"]}),oe&&(0,t.jsxs)(x.EY,{variant:"body3",color:"$neutral3",children:["\u2248 ",oe]}),"N/A"!==q.apr&&(0,t.jsxs)(x.EY,{variant:"body3",color:"$neutral3",children:["APR: ",q.apr]})]})]}),(0,t.jsx)(b.w,{width:"100%",borderColor:"$surface3"}),(0,t.jsxs)(f.s,{row:!0,gap:"$gap12",justifyContent:"center",$md:{flexDirection:"column"},children:[(0,t.jsx)(E,{onClick:ee,disabled:!te,children:(0,t.jsxs)(f.s,{row:!0,alignItems:"center",gap:"$gap8",children:[Y&&(0,t.jsx)(v.c,{size:16}),(0,t.jsx)(x.EY,{variant:"buttonLabel3",color:te?"$neutral1":"$neutral3",children:Y?"Staking":q.isLoading?"Loading":"Stake"})]})}),(0,t.jsx)(E,{onClick:re,disabled:!ie,children:(0,t.jsxs)(f.s,{row:!0,alignItems:"center",gap:"$gap8",children:[U&&(0,t.jsx)(v.c,{size:16}),(0,t.jsx)(x.EY,{variant:"buttonLabel3",color:ie?"$neutral1":"$neutral3",children:U?"Withdrawing":q.isLoading?"Loading":"Unstake"})]})}),(0,t.jsx)(E,{onClick:ne,disabled:q.isLoading||!G||_,children:(0,t.jsxs)(f.s,{row:!0,alignItems:"center",gap:"$gap4",children:[_&&(0,t.jsx)(v.c,{size:16}),(0,t.jsx)(x.EY,{variant:"buttonLabel3",color:G&&!_?"$neutral1":"$neutral3",children:_?"Claiming":G?"Claim rewards":"No Rewards"})]})})]})]})}},8059:(e,r,n)=>{n.r(r),n.d(r,{default:()=>f});var t=n(9990),i=n(8896),o=n(15030),a=n(90808),s=n(41406),c=n(58917),d=n(42398),l=n(15587),u=n(48526),p=n(89847),y=n(7273);a.Ay.img`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`;const m=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,g=(0,a.Ay)(m)`
  gap: 30px;
`,h=(0,a.Ay)(m)`
  flex: 1;
  justify-content: center;
  gap: 24px;
  padding-b: 32px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function f({title:e,subtitle:r,actionButton:n}){(0,l.hJ)();const a=(0,o.a)(),f=(0,c.Zp)(),x=a?d.P.LargeHeader:d.P.Hero,b=a?d.P.HeadlineMedium:d.P.HeadlineLarge;return(0,t.jsx)(h,{children:(0,t.jsxs)(y.default,{logImpression:!0,page:i.InterfacePageName.NOT_FOUND,children:[(0,t.jsx)(g,{children:(0,t.jsxs)(m,{children:[e??(0,t.jsx)(x,{children:"404"}),r??(0,t.jsx)(b,{color:"neutral2",children:(0,t.jsx)(s.Trans,{i18nKey:"common.pageNotFound"})})]})}),n??(0,t.jsx)(u.s,{row:!0,alignSelf:"stretch",children:(0,t.jsx)(p.$,{onPress:()=>f("/"),variant:"branded",children:(0,t.jsx)(s.Trans,{i18nKey:"notFound.oops"})})})]})})}}}]);
//# sourceMappingURL=4825.e1a89477.chunk.js.map