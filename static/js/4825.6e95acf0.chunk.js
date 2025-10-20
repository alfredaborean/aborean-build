"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4825,8059],{40638:(e,r,n)=>{n.d(r,{AF:()=>h,Q9:()=>k,TV:()=>x});var t=n(9990),i=n(79524),o=n(67051),a=n(90153),s=n(90808),c=n(54407),d=n(98902),l=n(69375),u=n(41406),p=n(58146),g=n(60388),y=n(72283),m=n(16172);const h=s.Ay.nav`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
  width: fit-content;
`,x=(0,s.Ay)(p.Link)`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.neutral3};
  }
`,f=(0,s.Ay)(o.Ay)`
  gap: 6px;
`,b=s.Ay.h1`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${({theme:e})=>e.neutral1};
  white-space: nowrap;
  margin: 0;
`,$=(0,s.Ay)(o.Ay)`
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
  gap: 10px;
  white-space: nowrap;
`,v=(0,s.Ay)(l.A)`
  ${g._}
`,k=({address:e,currency:r,poolName:n})=>{var o,s;const{t:l}=(0,u.useTranslation)(),{neutral2:p}=(0,c.useTheme)(),[g,h]=(0,d.useState)(!1),[x,k]=(0,a.A)(),j=(0,d.useCallback)(()=>{k(e)},[e,k]),w=null===(o=r)||void 0===o?void 0:o.isNative,A=(null===(s=r)||void 0===s?void 0:s.symbol)??l("tdp.symbolNotFound"),S=!(0,y.Qf)().md,P=S&&g&&!x;return(0,t.jsxs)(f,{"aria-current":"page","data-testid":"current-breadcrumb",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[(0,t.jsx)(b,{children:r?A:n})," ",(!r||r&&!w)&&(0,t.jsxs)($,{"data-testid":"breadcrumb-token-address",isDisabled:!S,onClick:S?j:void 0,children:[(0,t.jsx)(i.PD,{placement:"bottom",size:i.N6.Max,forceShow:x,text:l("common.copied"),disabled:!x,children:(0,m.shortenAddress)(e)}),P&&(0,t.jsx)(v,{"data-testid":"breadcrumb-hover-copy",width:16,height:16,color:p})]})]})}},89962:(e,r,n)=>{n.d(r,{j:()=>S});var t=n(9990),i=n(19755),o=n(94597),a=n(34476),s=n(40214),c=n(49458),d=n(98902),l=n(41406),u=n(43633),p=n(96196),g=n(54407),y=n(12016),m=n(48526),h=n(96690),x=n(75790),f=n(66595),b=n(52321),$=n(43977),v=n(22352),k=n(32449);function j(e,r,n,t,i,o,a){try{var s=e[o](a),c=s.value}catch(d){return void n(d)}s.done?r(c):Promise.resolve(c).then(t,i)}function w(e){return function(){var r=this,n=arguments;return new Promise(function(t,i){var o=e.apply(r,n);function a(e){j(o,t,i,a,s,"next",e)}function s(e){j(o,t,i,a,s,"throw",e)}a(void 0)})}}const A=g.default.button.withConfig({displayName:"StakingSection__StyledButton",componentId:"sc-2fb18220-0"})`
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
`;function S({position:e,tvlUSD:r}){var n,g,j,S;const{t:P}=(0,l.useTranslation)(),C=(0,y.D)(),L=(0,i.jE)(),[E,F]=(0,d.useState)(!1),[I,N]=(0,d.useState)(!1),[R,D]=(0,d.useState)(!1),Y=!!e.gaugeAddress,V=(0,c.S)(e,r),T=(0,p.j)();if(!Y)return null;const _=V.isStaked,U=V.stakedAmount0||"0.0000",z=V.stakedAmount1||"0.0000",O=V.unstakedAmount0||"0.0000",B=V.unstakedAmount1||"0.0000",q=V.pendingRewardsRaw??"0",M=(()=>{const e=Number.parseFloat(V.pendingRewards??"0");return Number.isFinite(e)?e:0})();let W=M>0;try{W=BigInt(q)>0n}catch{W=M>0}const H=function(){var r=w(function*(){var r,n;if(!V.canStake||E)return;const t=e.tokenId||(e.version===o.rg.V2?"V2 LP":"Unknown"),i=`${null===(r=e.currency0Amount)||void 0===r?void 0:r.currency.symbol}-${null===(n=e.currency1Amount)||void 0===n?void 0:n.currency.symbol}`;if(e.version!==o.rg.V2){F(!0);try{yield V.stakePosition(e.tokenId||"");a.O.addPopup({type:s.n.LiquiditySuccess,content:{type:"success",title:"Position Staked",description:`Successfully staked ${i} position in gauge`}},`stake-success-${t}`),yield L.invalidateQueries({queryKey:["abstract-position-orchestrated"]})}catch(c){console.error("Failed to stake position:",c),a.O.addPopup({type:s.n.StakeError,content:{type:"error",title:"Failed to Stake Position",description:c instanceof Error?c.message:"An unexpected error occurred while staking your position.",action:"stake",positionId:t}},`stake-error-${t}`)}finally{F(!1)}}else T((0,u.aS)({name:v.ModalName.StakeLP,initialState:(0,k.E_)(e)}))});return function(){return r.apply(this,arguments)}}(),K=function(){var r=w(function*(){var r,n;if(!V.isStaked&&e.version!==o.rg.V2||I)return;const t=e.tokenId||(e.version===o.rg.V2?"V2 LP":"Unknown"),i=`${null===(r=e.currency0Amount)||void 0===r?void 0:r.currency.symbol}-${null===(n=e.currency1Amount)||void 0===n?void 0:n.currency.symbol}`;if(e.version!==o.rg.V2){N(!0);try{yield V.unstakePosition(e.tokenId||"");a.O.addPopup({type:s.n.LiquiditySuccess,content:{type:"success",title:"Position Unstaked",description:`Successfully unstaked ${i} position from gauge`}},`unstake-success-${t}`),yield L.invalidateQueries({queryKey:["abstract-position-orchestrated"]})}catch(c){console.error("Failed to unstake position:",c),a.O.addPopup({type:s.n.UnstakeError,content:{type:"error",title:"Failed to Unstake Position",description:c instanceof Error?c.message:"An unexpected error occurred while unstaking your position.",action:"unstake",positionId:t}},`unstake-error-${t}`)}finally{N(!1)}}else T((0,u.aS)({name:v.ModalName.WithdrawLP,initialState:(0,k.E_)(e)}))});return function(){return r.apply(this,arguments)}}(),Q=function(){var r=w(function*(){var r,n;if(R)return;const t=e.tokenId||"",i=e.tokenId||(e.version===o.rg.V2?"V2 LP":"Unknown"),c=`${null===(r=e.currency0Amount)||void 0===r?void 0:r.currency.symbol}-${null===(n=e.currency1Amount)||void 0===n?void 0:n.currency.symbol}`,d=`${M.toFixed(4)} ABX`;D(!0);try{yield V.claimRewards(t);a.O.addPopup({type:s.n.LiquiditySuccess,content:{type:"success",title:"Rewards Claimed",description:`Successfully claimed ${d} from ${c} gauge`}},`claim-success-${i}`),yield L.invalidateQueries({queryKey:["abstract-position-orchestrated"]})}catch(l){console.error("Failed to claim rewards:",l),a.O.addPopup({type:s.n.ClaimRewardsError,content:{type:"error",title:"Failed to claim rewards",description:l instanceof Error?l.message:"An unexpected error occurred while claiming your rewards.",action:"claimRewards"}},`claim-rewards-error-${i}`)}finally{D(!1)}});return function(){return r.apply(this,arguments)}}(),X=V.canStake&&!E&&!V.isLoading,J=!I&&!V.isLoading&&(e.version===o.rg.V2?(()=>{try{return BigInt(V.rawStakedBalance||"0")>0n}catch{return!1}})():V.isStaked);return(0,t.jsxs)(m.s,{flexDirection:"column",gap:"$spacing20",position:"relative",p:"$spacing16",$md:{p:"$spacing12"},borderRadius:"$rounded20",borderWidth:1,borderColor:"$surface3",group:!0,children:[(0,t.jsx)(m.s,{"$group-hover":{opacity:0},position:"absolute",inset:0,borderRadius:"$rounded20",height:"100%",width:"100%",transition:"opacity 0.2s ease",style:{background:`linear-gradient(10deg, ${C.surface1.variable} 0%, ${C.slate.variable} 100%)`}}),(0,t.jsxs)(m.s,{row:!0,alignItems:"center",gap:"$gap8",children:[_?(0,t.jsx)(b.CheckCircleFilled,{size:20,color:"$statusSuccess"}):(0,t.jsx)($.F,{size:20,color:"$neutral2"}),(0,t.jsx)(h.EY,{variant:"subheading1",color:_?"$statusSuccess":"$neutral1",children:_?"Staked":"Not Staked"})]}),(0,t.jsxs)(m.s,{"$platform-web":{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridAutoRows:"1fr"},$md:{gridTemplateColumns:"1fr 1fr"},$sm:{gridTemplateColumns:"1fr"},gap:"$spacing16",children:[(0,t.jsxs)(m.s,{backgroundColor:_?"$statusSuccess2":"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",borderWidth:2,borderColor:_?"$statusSuccess":"$surface2",gap:"$gap8",children:[(0,t.jsx)(h.EY,{variant:"buttonLabel3",color:"$neutral2",children:"Staked amount"}),(0,t.jsxs)(m.s,{flexDirection:"column",gap:"$gap4",children:[(0,t.jsxs)(h.EY,{variant:"body2",children:[U," ",null===(n=e.currency0Amount)||void 0===n?void 0:n.currency.symbol]}),(0,t.jsxs)(h.EY,{variant:"body2",children:[z," ",null===(g=e.currency1Amount)||void 0===g?void 0:g.currency.symbol]})]})]}),(0,t.jsxs)(m.s,{backgroundColor:"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",gap:"$gap8",borderWidth:2,borderColor:"$surface2",children:[(0,t.jsx)(h.EY,{variant:"buttonLabel3",color:"$neutral2",children:"Available to stake"}),(0,t.jsxs)(m.s,{flexDirection:"column",gap:"$gap4",children:[(0,t.jsxs)(h.EY,{variant:"body2",children:[O," ",null===(j=e.currency0Amount)||void 0===j?void 0:j.currency.symbol]}),(0,t.jsxs)(h.EY,{variant:"body2",children:[B," ",null===(S=e.currency1Amount)||void 0===S?void 0:S.currency.symbol]})]})]}),(0,t.jsxs)(m.s,{backgroundColor:"$surface1",p:"$spacing12",borderRadius:"$rounded8",flexDirection:"column",gap:"$gap8",borderWidth:2,borderColor:"$surface2",children:[(0,t.jsx)(h.EY,{variant:"buttonLabel3",color:"$neutral2",children:"Pending rewards"}),(0,t.jsxs)(h.EY,{variant:"body2",children:[M.toFixed(6)," ABX"]}),"N/A"!==V.apr&&(0,t.jsxs)(h.EY,{variant:"body3",color:"$neutral3",children:["APR: ",V.apr]})]})]}),(0,t.jsx)(x.w,{width:"100%",borderColor:"$surface3"}),(0,t.jsxs)(m.s,{row:!0,gap:"$gap12",justifyContent:"center",$md:{flexDirection:"column"},children:[(0,t.jsx)(A,{onClick:H,disabled:!X,children:(0,t.jsxs)(m.s,{row:!0,alignItems:"center",gap:"$gap8",children:[E&&(0,t.jsx)(f.c,{size:16}),(0,t.jsx)(h.EY,{variant:"buttonLabel3",color:X?"$neutral1":"$neutral3",children:E?"Staking":V.isLoading?"Loading":"Stake"})]})}),(0,t.jsx)(A,{onClick:K,disabled:!J,children:(0,t.jsxs)(m.s,{row:!0,alignItems:"center",gap:"$gap8",children:[I&&(0,t.jsx)(f.c,{size:16}),(0,t.jsx)(h.EY,{variant:"buttonLabel3",color:J?"$neutral1":"$neutral3",children:I?"Withdrawing":V.isLoading?"Loading":"Unstake"})]})}),(0,t.jsx)(A,{onClick:Q,disabled:V.isLoading||!W||R,children:(0,t.jsxs)(m.s,{row:!0,alignItems:"center",gap:"$gap4",children:[R&&(0,t.jsx)(f.c,{size:16}),(0,t.jsx)(h.EY,{variant:"buttonLabel3",color:W&&!R?"$neutral1":"$neutral3",children:R?"Claiming":W?"Claim rewards":"No Rewards"})]})})]})]})}},8059:(e,r,n)=>{n.r(r),n.d(r,{default:()=>x});var t=n(9990),i=n(8896),o=n(15030),a=n(90808),s=n(41406),c=n(58917),d=n(42398),l=n(15587),u=n(48526),p=n(89847),g=n(7273);a.Ay.img`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`;const y=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,m=(0,a.Ay)(y)`
  gap: 30px;
`,h=(0,a.Ay)(y)`
  flex: 1;
  justify-content: center;
  gap: 24px;
  padding-b: 32px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function x({title:e,subtitle:r,actionButton:n}){(0,l.hJ)();const a=(0,o.a)(),x=(0,c.Zp)(),f=a?d.P.LargeHeader:d.P.Hero,b=a?d.P.HeadlineMedium:d.P.HeadlineLarge;return(0,t.jsx)(h,{children:(0,t.jsxs)(g.default,{logImpression:!0,page:i.InterfacePageName.NOT_FOUND,children:[(0,t.jsx)(m,{children:(0,t.jsxs)(y,{children:[e??(0,t.jsx)(f,{children:"404"}),r??(0,t.jsx)(b,{color:"neutral2",children:(0,t.jsx)(s.Trans,{i18nKey:"common.pageNotFound"})})]})}),n??(0,t.jsx)(u.s,{row:!0,alignSelf:"stretch",children:(0,t.jsx)(p.$,{onPress:()=>x("/"),variant:"branded",children:(0,t.jsx)(s.Trans,{i18nKey:"notFound.oops"})})})]})})}}}]);
//# sourceMappingURL=4825.6e95acf0.chunk.js.map