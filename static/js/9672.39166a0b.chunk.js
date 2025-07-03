"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9672],{90049:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n={}},8174:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n={}},39176:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n={}},9672:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ft});var n=i(97755),o=i(44842),r=i(24547),s=i(21049),l=i(99711),a=i(96296),d=i(32130),c=(e=>(e.LooksRare="looksrare",e.X2Y2="x2y2",e.NFT20="nft20",e.NFTX="nftx",e.Opensea="opensea",e.Rarible="rarible",e.Sudoswap="sudoswap",e.Cryptopunks="cryptopunks",e.Gem="gem",e.Foundation="foundation",e.Zora="zora",e.Blur="blur",e.Ensvision="ensvision",e))(c||{}),u=(e=>(e[e.unset=0]="unset",e[e.square=1]="square",e))(u||{});const p=new Set(["mp3","wav"]),h=JSON.parse('["3g2","3gp","aaf","asf","avchd","avi","drc","flv","m2v","m3u8","m4p","m4v","mkv","mng","mov","mp2","mp4","mpe","mpeg","mpg","mpv","mxf","nsv","ogg","ogv","qt","rm","rmvb","roq","svi","vob","webm","wmv","yuv"]');var v=i(20128);function f(e){return e.imageUrl||e.smallImageUrl}function g(e){return e.animationUrl}function m(e){return"address"in e?`/nfts/asset/${e.address}/${e.tokenId}?origin=collection`:"asset_contract"in e?`/nfts/asset/${e.asset_contract.address}/${e.tokenId}?origin=profile`:"/nfts/profile"}function x(e){let t=0;var i;return e.animationUrl&&((e=>{if(!e)return!1;const t=e.substring(e.lastIndexOf(".")+1);return p.has(t)})(e.animationUrl)?t=2:(i=e.animationUrl,void 0!==h.find((e=>{var t;return null===(t=i)||void 0===t?void 0:t.endsWith(`.${e}`)}))&&(t=1))),t}function b(e,t,i,o,r,s,l){switch(x(e)){case 0:return(0,n.jsx)(N,{src:f(e),uniformAspectRatio:o,setUniformAspectRatio:r,renderedHeight:s,setRenderedHeight:l});case 1:return(0,n.jsx)(U,{src:f(e),mediaSrc:g(e),tokenId:e.tokenId,shouldPlay:t,setCurrentTokenPlayingMedia:i,uniformAspectRatio:o,setUniformAspectRatio:r,renderedHeight:s,setRenderedHeight:l});case 2:return(0,n.jsx)(U,{isAudio:!0,src:f(e),mediaSrc:g(e),tokenId:e.tokenId,shouldPlay:t,setCurrentTokenPlayingMedia:i,uniformAspectRatio:o,setUniformAspectRatio:r,renderedHeight:s,setRenderedHeight:l})}}function w(e){switch(e){case c.Opensea:return(0,n.jsx)(d.fP,{});case c.LooksRare:return(0,n.jsx)(d.XM,{});case c.X2Y2:return(0,n.jsx)(d.Bl,{});case c.Sudoswap:return(0,n.jsx)(d.OD,{});case c.NFT20:return(0,n.jsx)(d.p8,{});case c.NFTX:return(0,n.jsx)(d.R2,{});case c.Cryptopunks:return(0,n.jsx)(d.f7,{});default:return null}}const y=(e,t,i,n,o)=>{if(e!==u.square&&i){const r=t.currentTarget.clientHeight,s=t.currentTarget.clientWidth/r;(!n||n!==r)&&s<1&&e!==u.square&&o&&o(r);const l=.05;e===u.unset?i(s>=1?u.square:s):(s>e+l||s<e-l)&&(i(u.square),o&&o(void 0))}};function _(e,t){return e===u.square||e===u.unset?void 0:t}function j(e,t){return e!==u.square&&t?"auto":"1"}var C=i(88378),T=i.n(C);function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},A.apply(this,arguments)}function S(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var k=(0,v.forwardRef)((function(e,t){var i=e.color,n=void 0===i?"currentColor":i,o=e.size,r=void 0===o?24:o,s=S(e,["color","size"]);return v.createElement("svg",A({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),v.createElement("rect",{x:"6",y:"4",width:"4",height:"16"}),v.createElement("rect",{x:"14",y:"4",width:"4",height:"16"}))}));k.propTypes={color:T().string,size:T().oneOfType([T().string,T().number])},k.displayName="Pause";const H=k;function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},P.apply(this,arguments)}function D(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var B=(0,v.forwardRef)((function(e,t){var i=e.color,n=void 0===i?"currentColor":i,o=e.size,r=void 0===o?24:o,s=D(e,["color","size"]);return v.createElement("svg",P({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),v.createElement("polygon",{points:"5 3 19 12 5 21 5 3"}))}));B.propTypes={color:T().string,size:T().oneOfType([T().string,T().number])},B.displayName="Play";const E=B;var O=i(82663),L=i(7035),$=i(99695),R=i(44876);const M=a.ZP.div`
  position: relative;
  pointer-events: auto;
  &:hover {
    opacity: ${({isDisabled:e,theme:t})=>e?t.opacity.disabled:t.opacity.enabled};
  }
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
`,Z=({isDisabled:e,children:t})=>(0,n.jsx)(M,{isDisabled:e,children:t}),I=(0,a.ZP)(l.ZP)`
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`,Y=a.ZP.img`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} transform`};
  will-change: transform;
  object-fit: contain;
  visibility: ${({$hidden:e})=>e?"hidden":"visible"};
  background: ${({theme:e,imageLoading:t})=>t&&`linear-gradient(270deg, ${e.surface3} 0%, ${e.surface1} 100%)`};
`,N=({src:e,uniformAspectRatio:t=u.square,setUniformAspectRatio:i,renderedHeight:o,setRenderedHeight:r})=>{const[s,l]=(0,v.useState)(!e),[a,d]=(0,v.useState)(!1);return s?(0,n.jsx)(K,{height:_(t,o)}):(0,n.jsx)(I,{children:(0,n.jsx)(Y,{src:e,$aspectRatio:j(t,i),imageLoading:!a,draggable:!1,onError:()=>l(!0),onLoad:e=>{y(t,e,i,o,r),d(!0)}})})},F=a.ZP.div`
  display: ${({pauseButton:e})=>e?"block":"none"};
  color: ${({theme:e})=>e.accent1};
  position: absolute;
  height: 40px;
  width: 40px;
  z-index: 1;
  margin-left: calc(100% - 50px);
  transform: translateY(-76px);

  @media screen and (max-width: ${R.A.md}px) {
    display: block;
  }

  ${M}:hover & {
    display: block;
  }
`,z=a.ZP.video`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
`,V=(0,a.ZP)(l.ZP)`
  position: absolute;
  left: 0px;
  top: 0px;
`,W=a.ZP.audio`
  width: 100%;
  height: 100%;
`,U=({isAudio:e,src:t,mediaSrc:i,tokenId:o,uniformAspectRatio:r=u.square,setUniformAspectRatio:s,renderedHeight:l,setRenderedHeight:a,shouldPlay:d,setCurrentTokenPlayingMedia:c})=>{const p=(0,v.useRef)(null),[h,f]=(0,v.useState)(!t),[g,m]=(0,v.useState)(!1);return(0,v.useEffect)((()=>{d&&p.current?p.current.play():!d&&p.current&&p.current.pause()}),[d]),h?(0,n.jsx)(K,{height:_(r,l)}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I,{children:(0,n.jsx)(Y,{src:t,$aspectRatio:j(r,s),imageLoading:!g,draggable:!1,onError:()=>f(!0),onLoad:e=>{y(r,e,s,l,a),m(!0)},$hidden:d&&!e})}),d?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(F,{pauseButton:!0,children:(0,n.jsx)(H,{size:"24px",onClick:e=>{e.preventDefault(),e.stopPropagation(),c(void 0)}})}),(0,n.jsx)(V,{children:e?(0,n.jsx)(W,{ref:p,onEnded:e=>{e.preventDefault(),c(void 0)},children:(0,n.jsx)("source",{src:i})}):(0,n.jsx)(z,{$aspectRatio:j(r,s),ref:p,onEnded:e=>{e.preventDefault(),c(void 0)},loop:!0,playsInline:!0,children:(0,n.jsx)("source",{src:i})})})]}):(0,n.jsx)(F,{children:(0,n.jsx)(E,{size:"24px",onClick:e=>{e.preventDefault(),e.stopPropagation(),c(o)}})})]})},q=a.ZP.div`
  position: relative;
  width: 100%;
  height: ${({$height:e})=>e?`${e}px`:"auto"};
  padding-top: 100%;
  background: ${({theme:e})=>`linear-gradient(90deg, ${e.surface1} 0%, ${e.surface3} 95.83%)`};
`,J=(0,a.ZP)($.T.BodyPrimary)`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  color: ${L.O9.gray500};
`,K=({height:e})=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(q,{$height:e,children:(0,n.jsx)(J,{children:(0,n.jsx)(O.Trans,{i18nKey:"nft.card.notAvailable",components:{br:(0,n.jsx)("br",{})}})})})});var Q=i(86683);const X=a.ZP.div`
  position: relative;
  height: 84px;
`,G=(0,a.ZP)(s.ZP)`
  position: absolute;
  width: 100%;
  padding: 16px 8px 0px;
  justify-content: space-between;
  gap: 8px;
  height: 84px;
  background: ${({theme:e})=>e.surface1};
  will-change: transform;
  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} transform`};

  @media screen and (max-width: ${R.A.md}px) {
    height: 112px;
    transform: translateY(-28px);
  }
`,ee=(0,a.ZP)($.T.BodySmall)`
  position: absolute;
  display: flex;
  padding: 8px 0px;
  bottom: -32px;
  left: 8px;
  right: 8px;
  color: ${({theme:e,isDisabled:t})=>t?e.neutral1:e.deprecated_accentTextLightPrimary};
  background: ${({theme:e,selected:t,isDisabled:i})=>t?e.critical:i?e.surface3:e.accent1};
  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} bottom, ${e.transition.duration.medium} ${e.transition.timing.ease} visibility`};
  will-change: transform;
  border-radius: 8px;
  justify-content: center;
  font-weight: 535 !important;
  line-height: 16px;
  visibility: hidden;
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};

  @media screen and (max-width: ${R.A.md}px) {
    visibility: visible;
    bottom: 8px;
  }

  &:before {
    background-size: 100%;
    border-radius: inherit;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    content: '';
  }

  &:hover:before {
    background-color: ${({theme:e,isDisabled:t})=>!t&&e.deprecated_stateOverlayHover};
  }

  &:active:before {
    background-color: ${({theme:e,isDisabled:t})=>!t&&e.deprecated_stateOverlayPressed};
  }
`,te=({isDisabled:e,isSelected:t,clickActionButton:i,children:o})=>(0,n.jsx)(ee,{selected:t,isDisabled:e,onClick:t=>e?void 0:i(t),children:o}),ie=a.ZP.div`
  position: relative;
  border-radius: ${"12"}px;
  background-color: ${({theme:e})=>e.surface1};
  overflow: hidden;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  isolation: isolate;

  :after {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border: ${({selected:e})=>e?"3px":"1px"} solid;
    border-radius: ${"12"}px;
    border-color: ${({theme:e,selected:t})=>t?e.accent1:e.surface3};
    pointer-events: none;
    transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} border`};
    will-change: border;

    @media screen and (max-width: ${R.A.md}px) {
      ${({selected:e,theme:t})=>e&&`border-color: ${t.critical}`};
    }
  }

  :hover::after {
    ${({selected:e,theme:t})=>e&&`border-color: ${t.critical}`};
  }

  :hover {
    ${ee} {
      visibility: visible;
      bottom: 8px;
    }

    ${G} {
      height: 112px;
      transform: translateY(-28px);
    }

    ${Y} {
      transform: scale(1.15);
    }
  }
`,ne=({isSelected:e,isDisabled:t,children:i,testId:o,onClick:r})=>(0,n.jsx)(ie,{selected:e,isDisabled:t,draggable:!1,"data-testid":o,onClick:r,children:i}),oe=(0,a.ZP)(Q.Link)`
  text-decoration: none;
`,re=({isSelected:e,isDisabled:t,detailsHref:i,testId:o,onClick:r,children:s})=>(0,n.jsx)(ne,{isSelected:e,isDisabled:t,testId:o,onClick:r,children:i?(0,n.jsx)(oe,{to:i,children:s}):s}),se=({children:e})=>(0,n.jsx)(X,{children:e}),le=({children:e})=>(0,n.jsx)(G,{children:e}),ae=(0,a.ZP)(s.ZP)`
  gap: 4px;
  overflow: hidden;
  width: 100%;
  padding: 0px 8px;
  height: 48px;
`,de=({children:e})=>(0,n.jsx)(ae,{children:e}),ce=(0,a.ZP)(l.ZP)`
  gap: 8px;
  justify-content: space-between;
`,ue=({children:e})=>(0,n.jsx)(ce,{children:e}),pe=(0,a.ZP)(l.ZP)`
  justify-items: center;
  overflow: hidden;
  white-space: nowrap;
  gap: 8px;
`,he=({children:e})=>(0,n.jsx)(pe,{children:e}),ve=(0,a.ZP)($.T.BodySmall)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 535 !important;
  line-height: 20px;
`,fe=({children:e})=>(0,n.jsx)(ve,{children:e}),ge=(0,a.ZP)(l.ZP)`
  justify-content: space-between;
`,me=({children:e})=>(0,n.jsx)(ge,{children:e}),xe=(0,a.ZP)(l.ZP)`
  overflow: hidden;
  white-space: nowrap;
`,be=({children:e})=>(0,n.jsx)(xe,{children:e}),we=(0,a.ZP)($.T.BodyPrimary)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 24px;
`,ye=({children:e})=>(0,n.jsx)(we,{children:e});var _e=i(13402);function je(){return je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},je.apply(this,arguments)}function Ce(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var Te=(0,v.forwardRef)((function(e,t){var i=e.color,n=void 0===i?"currentColor":i,o=e.size,r=void 0===o?24:o,s=Ce(e,["color","size"]);return v.createElement("svg",je({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),v.createElement("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),v.createElement("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"}))}));Te.propTypes={color:T().string,size:T().oneOfType([T().string,T().number])},Te.displayName="Tag";const Ae=Te;var Se=i(94839);const ke=a.ZP.div`
  position: absolute;
  display: flex;
  top: 12px;
  left: 12px;
  height: 32px;
  width: ${({isText:e})=>e?"auto":"32px"};
  padding: ${({isText:e})=>e?"0px 8px":"0px"};
  background: rgba(93, 103, 133, 0.24);
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  z-index: 2;
`,He=(0,a.ZP)(l.ZP)`
  gap: 6px;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  text-shadow: 1px 1px 3px rgba(51, 53, 72, 0.54);
`,Pe=({isSelected:e,marketplace:t,tokenType:i,listedPrice:o,hidePrice:r})=>e?t?(0,n.jsx)(ke,{children:(0,n.jsx)(d.U1,{width:"20px",height:"20px",viewBox:"0 0 20 20"})}):(0,n.jsx)(ke,{children:(0,n.jsx)(_e.Z,{size:20})}):o&&!r?(0,n.jsx)(ke,{isText:!0,children:(0,n.jsxs)(He,{children:[(0,n.jsx)(Ae,{size:20}),o," ETH"]})}):t&&i!==Se.NftStandard.Erc1155?(0,n.jsx)(ke,{children:w(t)}):null;var De=i(27258);const Be=({asset:e,display:t,isSelected:i,selectAsset:o,unselectAsset:r,isDisabled:s,onButtonClick:l,onCardClick:a,sendAnalyticsEvent:d,mediaShouldBePlaying:c,uniformAspectRatio:p=u.square,setUniformAspectRatio:h,renderedHeight:f,setRenderedHeight:g,setCurrentTokenPlayingMedia:x,testId:w,hideDetails:y=!1})=>{const _=function({selectAsset:e,unselectAsset:t,isSelected:i,isDisabled:n,onClick:o}){return(0,v.useCallback)((r=>{var s,l;r.stopPropagation(),r.preventDefault(),n||(o?o():i?null===(s=t)||void 0===s||s():null===(l=e)||void 0===l||l())}),[e,n,o,t,i])}({selectAsset:o,unselectAsset:r,isSelected:i,isDisabled:s,onClick:l}),{formatNumberOrString:j}=(0,De.Gb)(),C="marketplace"in e,T="asset_contract"in e,A=C?e.tokenType:T?e.asset_contract.tokenType:void 0,S=C?e.marketplace:void 0,k=T&&!s&&e.floor_sell_order_price?j({input:e.floor_sell_order_price,type:De.sw.NFTTokenFloorPrice}):void 0;return(0,n.jsxs)(re,{isSelected:i,isDisabled:s,detailsHref:a?void 0:m(e),testId:w,onClick:()=>{var e,t;null===(e=a)||void 0===e||e(),null===(t=d)||void 0===t||t()},children:[(0,n.jsxs)(Z,{isDisabled:s,children:[(0,n.jsx)(Pe,{hidePrice:y,isSelected:i,marketplace:S,tokenType:A,listedPrice:k}),b(e,c,x,p,h,f,g)]}),!y&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se,{children:(0,n.jsx)(le,{children:(0,n.jsxs)(de,{children:[(0,n.jsxs)(ue,{children:[(0,n.jsxs)(he,{children:[(0,n.jsx)(fe,{children:t.primaryInfo}),t.primaryInfoIcon]}),t.primaryInfoRight]}),(0,n.jsx)(me,{children:(0,n.jsx)(be,{children:(0,n.jsx)(ye,{children:t.secondaryInfo})})})]})})}),(0,n.jsx)(te,{clickActionButton:_,isDisabled:s,isSelected:i,children:i?t.selectedInfo:s?t.disabledInfo:t.notSelectedInfo})]})]})};var Ee=i(66998),Oe=i(82746),Le=i(59793),$e=i(39613),Re=i(2398),Me=i(66789),Ze=i(70943),Ie=i(90418);const Ye=" _opacity-0",Ne=" _opacity-1",Fe=" _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _alignItems-center _justifyContent-flex-start _width-10037 _gap-t-space-spa94665589  ",ze="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _alignItems-center _gap-4px _width-10037 ",Ve="  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _overflowX-hidden _overflowY-hidden _width-10037 _flexWrap-nowrap ";function We({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:i}){var s;const{t:l}=(0,O.useTranslation)(),{isTestnetModeEnabled:a,gqlChains:d}=(0,Re.useEnabledChains)(),c=(0,Ze.useTrace)(),[u,p]=(0,v.useState)(!1),h=e.chain&&a?d.includes(e.chain):e.chain===Se.Chain.Ethereum;return(0,n.jsxs)(Oe.Flex,{gap:"8px",minHeight:"150px",alignItems:"center",justifyContent:"flex-start",width:"100%",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[(0,n.jsx)(r.CW,{placement:"bottom",size:r.Oz.Max,disabled:h,text:l("nft.chainSupportComingSoon",{chainName:(0,Ee.capitalize)((null===(s=e.chain)||void 0===s?void 0:s.toLowerCase())??"L2")}),hideArrow:!0,children:(0,n.jsx)(Be,{asset:e,hideDetails:!0,display:{disabledInfo:!0},isSelected:!1,isDisabled:!h,onCardClick:()=>{var t;(null===(t=e.asset_contract)||void 0===t?void 0:t.address)&&e.tokenId&&window.open(`https://opensea.io/assets/${e.asset_contract.address}/${e.tokenId}`,"_blank","noopener,noreferrer")},sendAnalyticsEvent:()=>{var t,i;return(0,Me.sendAnalyticsEvent)(o.Gz.ELEMENT_CLICKED,{element:o.xo.MINI_PORTFOLIO_NFT_ITEM,collection_name:null===(t=e.collection)||void 0===t?void 0:t.name,collection_address:null===(i=e.collection)||void 0===i?void 0:i.address,token_id:e.tokenId,...c})},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:i,testId:"mini-portfolio-nft"})}),(0,n.jsx)(Ue,{asset:e,isHovered:u})]})}function Ue({asset:e,isHovered:t}){const{t:i}=(0,O.useTranslation)();return(0,n.jsxs)("div",{className:Ve,children:[(0,n.jsxs)("div",{className:ze,children:[(0,n.jsx)(Le.Text,{variant:"body3",mx:"$spacing2",maxWidth:"calc(100% - 22px)","$platform-web":{whiteSpace:"pre",textOverflow:"ellipsis",overflow:"hidden"},children:e.asset_contract.name}),e.collectionIsVerified&&(0,n.jsx)(Je,{})]}),(0,n.jsxs)("div",{className:(0,Ie.Ej)(""+(Fe+(t?Ne:Ye))),children:[(0,n.jsx)(Le.Text,{color:"$neutral2",variant:"body4",children:i("common.opensea.link")}),(0,n.jsx)($e.d,{color:"$neutral2",size:"$icon.12"})]})]})}const qe="18px";function Je(){return(0,n.jsx)(Oe.Flex,{row:!0,alignItems:"center",width:"unset",style:{flexShrink:0},children:(0,n.jsx)(d.SA,{height:qe,width:qe})})}i(8174);var Ke=i(30053),Qe=i(64228),Xe=i(14402);var Ge=i(34691),et=i(83243);function tt({ownerAddress:e,collectionFilters:t,assetsFilter:i,first:n,after:o,last:r,before:s,skip:l=!1,chains:a}){var d,c,u,p,h,f,g,m,x,b,w,y;const{data:_,loading:j,fetchMore:C}=(0,Se.useNftBalanceQuery)({variables:{ownerAddress:e,filter:i&&i.length>0?{assets:i}:{addresses:t},chains:a,first:n,after:o,last:r,before:s},skip:l}),T=(0,et.useHideSpamTokensSetting)(),A=null===(u=_)||void 0===u||null===(c=u.nftBalances)||void 0===c||null===(d=c.pageInfo)||void 0===d?void 0:d.hasNextPage,S=(0,v.useCallback)((()=>{var e,t,i;return C({variables:{after:null===(i=_)||void 0===i||null===(t=i.nftBalances)||void 0===t||null===(e=t.pageInfo)||void 0===e?void 0:e.endCursor}})}),[null===(f=_)||void 0===f||null===(h=f.nftBalances)||void 0===h||null===(p=h.pageInfo)||void 0===p?void 0:p.endCursor,C]),k=null===(y=T?null===(x=_)||void 0===x||null===(m=x.nftBalances)||void 0===m||null===(g=m.edges)||void 0===g?void 0:g.filter((e=>{var t;return!(null===(t=e)||void 0===t?void 0:t.node.ownedAsset).isSpam})):null===(w=_)||void 0===w||null===(b=w.nftBalances)||void 0===b?void 0:b.edges)||void 0===y?void 0:y.map((e=>{var t,i,n,o,r,s,l,a,d,c,u,p,h,v,f,g,m,x,b,w,y,_,j,C,T,A,S,k,H,P,D,B,E,O,L,$,R,M,Z,I,Y,N,F,z,V,W,U,q,J,K,Q,X,G,ee,te,ie,ne,oe,re,se,le,ae,de,ce,ue,pe,he,ve;const fe=null===(t=e)||void 0===t?void 0:t.node.ownedAsset,ge=(0,Xe.parseEther)((me=(null===(o=fe)||void 0===o||null===(n=o.listings)||void 0===n||null===(i=n.edges[0])||void 0===i?void 0:i.node.price.value)??0,parseFloat(me.toString()).toLocaleString("fullwide",{useGrouping:!1}).replace(",",".").replace(" ",""))).toString();var me;return{id:null===(r=fe)||void 0===r?void 0:r.id,imageUrl:null===(l=fe)||void 0===l||null===(s=l.image)||void 0===s?void 0:s.url,smallImageUrl:null===(d=fe)||void 0===d||null===(a=d.smallImage)||void 0===a?void 0:a.url,notForSale:0===(null===(p=fe)||void 0===p||null===(u=p.listings)||void 0===u||null===(c=u.edges)||void 0===c?void 0:c.length),animationUrl:null===(h=fe)||void 0===h?void 0:h.animationUrl,susFlag:null===(v=fe)||void 0===v?void 0:v.suspiciousFlag,priceInfo:{ETHPrice:ge,baseAsset:"ETH",baseDecimals:"18",basePrice:ge},name:null===(f=fe)||void 0===f?void 0:f.name,tokenId:null===(g=fe)||void 0===g?void 0:g.tokenId,asset_contract:{address:null===(w=fe)||void 0===w||null===(b=w.collection)||void 0===b||null===(x=b.nftContracts)||void 0===x||null===(m=x[0])||void 0===m?void 0:m.address,tokenType:null===(C=fe)||void 0===C||null===(j=C.collection)||void 0===j||null===(_=j.nftContracts)||void 0===_||null===(y=_[0])||void 0===y?void 0:y.standard,name:null===(A=fe)||void 0===A||null===(T=A.collection)||void 0===T?void 0:T.name,description:null===(S=fe)||void 0===S?void 0:S.description,image_url:null===(P=fe)||void 0===P||null===(H=P.collection)||void 0===H||null===(k=H.image)||void 0===k?void 0:k.url,payout_address:null===(O=e)||void 0===O||null===(E=O.node)||void 0===E||null===(B=E.listingFees)||void 0===B||null===(D=B[0])||void 0===D?void 0:D.payoutAddress},collection:{name:null===(L=fe.collection)||void 0===L?void 0:L.name,isVerified:null===($=fe.collection)||void 0===$?void 0:$.isVerified,imageUrl:null===(M=fe.collection)||void 0===M||null===(R=M.image)||void 0===R?void 0:R.url,twitterUrl:(null===(Z=fe.collection)||void 0===Z?void 0:Z.twitterName)?`@${null===(I=fe.collection)||void 0===I?void 0:I.twitterName}`:void 0},collectionIsVerified:null===(N=fe)||void 0===N||null===(Y=N.collection)||void 0===Y?void 0:Y.isVerified,lastPrice:null===(F=e.node.lastPrice)||void 0===F?void 0:F.value,floorPrice:null===(q=fe)||void 0===q||null===(U=q.collection)||void 0===U||null===(W=U.markets)||void 0===W||null===(V=W[0])||void 0===V||null===(z=V.floorPrice)||void 0===z?void 0:z.value,basisPoints:(null===(X=e)||void 0===X||null===(Q=X.node)||void 0===Q||null===(K=Q.listingFees)||void 0===K||null===(J=K[0])||void 0===J?void 0:J.basisPoints)??0/Ge.BIPS_BASE,listing_date:null===(oe=fe)||void 0===oe||null===(ne=oe.listings)||void 0===ne||null===(ie=ne.edges)||void 0===ie||null===(te=ie[0])||void 0===te||null===(ee=te.node)||void 0===ee||null===(G=ee.createdAt)||void 0===G?void 0:G.toString(),date_acquired:null===(se=e.node.lastPrice)||void 0===se||null===(re=se.timestamp)||void 0===re?void 0:re.toString(),sellOrders:null===(ae=fe)||void 0===ae||null===(le=ae.listings)||void 0===le?void 0:le.edges.map((e=>e.node)),floor_sell_order_price:null===(ve=fe)||void 0===ve||null===(he=ve.listings)||void 0===he||null===(pe=he.edges)||void 0===pe||null===(ue=pe[0])||void 0===ue||null===(ce=ue.node)||void 0===ce||null===(de=ce.price)||void 0===de?void 0:de.value,chain:fe.chain}}));return(0,v.useMemo)((()=>({walletAssets:k,hasNext:A,loadMore:S,loading:j})),[A,S,j,k])}var it=i(57306),nt=i(26013);const ot="  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-row _alignItems-center _justifyContent-space-betwe3241 _mt-t-space-spa1360334080 _pl-t-space-spa1360334080 _pr-t-space-spa1360334080 ",rt=({height:e})=>(0,n.jsxs)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _borderTopLeftRadius-t-radius-ro291586453 _borderTopRightRadius-t-radius-ro291586453 _borderBottomRightRadius-t-radius-ro291586453 _borderBottomLeftRadius-t-radius-ro291586453 _pb-t-space-pad1331704929 _backgroundColor-surface2 ",children:[(0,n.jsxs)(Oe.Flex,{width:"100%",height:e??200,children:[(0,n.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _height-10037 _width-10037 "}),(0,n.jsx)(it.E,{width:"100%",opacity:0,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAIAAAAHjs1qAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9bpSoVB4tIcchQnSyIiuimVShChVArtOpg8tI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Io5OToouUeF9SaBHjhcf7OO+ew3v3Af56malmxxigapaRSsSFTHZVCL6iGxEMwIcZiZn6nCgm4Vlf99RHdRfjWd59f1avkjMZ4BOIZ5luWMQbxFObls55nzjMipJCfE48atAFiR+5Lrv8xrngsJ9nho10ap44TCwU2lhuY1Y0VOJJ4qiiapTvz7iscN7irJarrHlP/sJQTltZ5jqtISSwiCWIECCjihLKsBCjXSPFRIrO4x7+iOMXySWTqwRGjgVUoEJy/OB/8Hu2Zn5i3E0KxYHOF9v+GAaCu0CjZtvfx7bdOAECz8CV1vJX6sD0J+m1lhY9Avq2gYvrlibvAZc7wOCTLhmSIwVo+fN54P2MvikL9N8CPWvu3JrnOH0A0jSr5A1wcAiMFCh73ePdXe1z+7enOb8fjpJysoP8VEAAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfmCRoWAwwETUefAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAetJREFUeNrt0gENAAAIwzDAv+fjA1oJyzpJwQ8jAXYHu4Pdwe5gd7A72B3sDnYHu4PdsTvYHewOdge7g93B7mB3sDvYHeyO3cHuYHewO9gd7A52B7uD3cHuYHfsDnYHu4Pdwe5gd7A72B3sDnYHu2N3sDvYHewOdge7g93B7mB3sDvYHeyO3cHuYHewO9gd7A52B7uD3cHuYHfsDnYHu4Pdwe5gd7A72B3sDnYHu2N3sDvYHewOdge7g93B7mB3sDvYHbuD3cHuYHewO9gd7A52B7uD3cHu2B3sDnYHu4Pdwe5gd7A72B3sDnYHu2N3sDvYHewOdge7g93B7mB3sDvYHbuD3cHuYHewO9gd7A52B7uD3cHu2B3sDnYHu4Pdwe5gd7A72B3sDnbH7mB3sDvYHewOdge7g93B7mB3sDvYHbuD3cHuYHewO9gd7A52B7uD3cHu2B3sDnYHu4Pdwe5gd7A72B3sDnbH7mB3sDvYHewOdge7g93B7mB3sDt2B7uD3cHuYHewO9gd7A52B7uD3bE72B3sDnYHu4Pdwe5gd7A72B3sDnbH7mB3sDvYHewOdge7g93B7mB3sDt2B7uD3cHuYHewO9gd7A52B7uD3bE72B3sDnYHu4Pdwe5gd7A72B3sjt3B7nDLAlFnBPHmq82kAAAAAElFTkSuQmCC"})]}),(0,n.jsx)("div",{className:ot,children:(0,n.jsx)(nt.Z,{children:(0,n.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _height-12px _width-120px "})})}),(0,n.jsx)("div",{className:ot,children:(0,n.jsx)(nt.Z,{children:(0,n.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _height-16px _width-80px "})})})]}),st=({count:e,height:t})=>(0,n.jsx)(n.Fragment,{children:Array.from(Array(e??25),((e,i)=>(0,n.jsx)(rt,{height:t},i)))});i(90049);var lt=i(2879),at=function(e,t){return at=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])},at(e,t)};var dt=function(){return dt=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},dt.apply(this,arguments)};var ct="Pixel",ut="Percent",pt={unit:ut,value:.8};function ht(e){return"number"==typeof e?{unit:ut,value:100*e}:"string"==typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:ct,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:ut,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),pt):(console.warn("scrollThreshold should be string or number"),pt)}const vt=function(e){function t(t){var i=e.call(this,t)||this;return i.lastScrollTop=0,i.actionTriggered=!1,i.startY=0,i.currentY=0,i.dragging=!1,i.maxPullDownDistance=0,i.getScrollableTarget=function(){return i.props.scrollableTarget instanceof HTMLElement?i.props.scrollableTarget:"string"==typeof i.props.scrollableTarget?document.getElementById(i.props.scrollableTarget):(null===i.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},i.onStart=function(e){i.lastScrollTop||(i.dragging=!0,e instanceof MouseEvent?i.startY=e.pageY:e instanceof TouchEvent&&(i.startY=e.touches[0].pageY),i.currentY=i.startY,i._infScroll&&(i._infScroll.style.willChange="transform",i._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},i.onMove=function(e){i.dragging&&(e instanceof MouseEvent?i.currentY=e.pageY:e instanceof TouchEvent&&(i.currentY=e.touches[0].pageY),i.currentY<i.startY||(i.currentY-i.startY>=Number(i.props.pullDownToRefreshThreshold)&&i.setState({pullToRefreshThresholdBreached:!0}),i.currentY-i.startY>1.5*i.maxPullDownDistance||i._infScroll&&(i._infScroll.style.overflow="visible",i._infScroll.style.transform="translate3d(0px, "+(i.currentY-i.startY)+"px, 0px)")))},i.onEnd=function(){i.startY=0,i.currentY=0,i.dragging=!1,i.state.pullToRefreshThresholdBreached&&(i.props.refreshFunction&&i.props.refreshFunction(),i.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){i._infScroll&&(i._infScroll.style.overflow="auto",i._infScroll.style.transform="none",i._infScroll.style.willChange="unset")}))},i.onScrollListener=function(e){"function"==typeof i.props.onScroll&&setTimeout((function(){return i.props.onScroll&&i.props.onScroll(e)}),0);var t=i.props.height||i._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;i.actionTriggered||((i.props.inverse?i.isElementAtTop(t,i.props.scrollThreshold):i.isElementAtBottom(t,i.props.scrollThreshold))&&i.props.hasMore&&(i.actionTriggered=!0,i.setState({showLoader:!0}),i.props.next&&i.props.next()),i.lastScrollTop=t.scrollTop)},i.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},i.throttledOnScrollListener=function(e,t,i,n){var o,r=!1,s=0;function l(){o&&clearTimeout(o)}function a(){var a=this,d=Date.now()-s,c=arguments;function u(){s=Date.now(),i.apply(a,c)}r||(n&&!o&&u(),l(),void 0===n&&d>e?u():!0!==t&&(o=setTimeout(n?function(){o=void 0}:u,void 0===n?e-d:e)))}return"boolean"!=typeof t&&(n=i,i=t,t=void 0),a.cancel=function(){l(),r=!0},a}(150,i.onScrollListener).bind(i),i.onStart=i.onStart.bind(i),i.onMove=i.onMove.bind(i),i.onEnd=i.onEnd.bind(i),i}return function(e,t){function i(){this.constructor=e}at(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?dt(dt({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var i=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=ht(t);return n.unit===ct?e.scrollTop<=n.value+i-e.scrollHeight+1:e.scrollTop<=n.value/100+i-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var i=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=ht(t);return n.unit===ct?e.scrollTop+i>=e.scrollHeight-n.value:e.scrollTop+i>=n.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=dt({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),i=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),n=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return v.createElement("div",{style:n,className:"infinite-scroll-component__outerdiv"},v.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&v.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},v.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!i&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(v.Component);function ft({account:e}){var t,i,o,r;const s=(0,Qe.Q)(),{gqlChains:l,isTestnetModeEnabled:a}=(0,Re.useEnabledChains)(),{walletAssets:d,loading:c,hasNext:u,loadMore:p}=tt({ownerAddress:e,first:Ke.Qv,skip:!s.isOpen,chains:a?l:[Se.Chain.Ethereum,Se.Chain.Zora]}),[h,f]=(0,v.useState)();return c&&!d?(0,n.jsx)(gt,{children:(0,n.jsx)(st,{count:2})}):d&&0!==(null===(t=d)||void 0===t?void 0:t.length)?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(vt,{next:p,hasMore:u??!1,loader:Boolean(u&&(null===(i=d)||void 0===i?void 0:i.length))&&(0,n.jsx)(gt,{children:(0,n.jsx)(st,{count:2})}),dataLength:(null===(o=d)||void 0===o?void 0:o.length)??0,style:{overflow:"unset"},scrollableTarget:"wallet-dropdown-scroll-wrapper",children:(0,n.jsx)(gt,{children:(null===(r=d)||void 0===r?void 0:r.length)?d.map(((e,t)=>(0,n.jsx)(We,{setCurrentTokenPlayingMedia:f,mediaShouldBePlaying:h===e.tokenId,asset:e},t))):null})})}):(0,n.jsx)(lt.f,{onNavigateClick:s.close})}const gt=a.ZP.div`
  display: grid;
  gap: 12px;

  // use minmax to not let grid items escape the parent container
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  margin: 16px;
`},2879:(e,t,i)=>{i.d(t,{f:()=>m});var n=i(97755),o=i(17041),r=i(7035);const s=()=>{const e=(0,o.useTheme)();return{primary:e.darkMode?r.O9.gray150:r.O9.gray600,secondary:e.darkMode?r.O9.gray600:r.O9.gray300}},l=e=>{const{primary:t,secondary:i}=s();return(0,n.jsxs)("svg",{...e,width:"102",height:"94",viewBox:"0 0 102 94",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.4998 9.00098L5.22859 13.3799C1.51236 14.4455 -0.636389 18.322 0.429224 22.0382L13.6352 68.093C14.7008 71.8092 18.5773 73.958 22.2935 72.8924L56.7921 63H31.4998C25.4246 63 20.4998 58.0752 20.4998 52V9.00098Z",fill:i}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.5 0C27.634 0 24.5 3.13401 24.5 7V52C24.5 55.866 27.634 59 31.5 59H56.7364C60.5936 51.6192 67.8907 46.3207 76.5 45.2321V7C76.5 3.13401 73.366 0 69.5 0H31.5ZM37 19C38.3807 19 39.5 17.8807 39.5 16.5C39.5 15.1193 38.3807 14 37 14C35.6193 14 34.5 15.1193 34.5 16.5C34.5 17.8807 35.6193 19 37 19ZM39.5 29.5C39.5 30.8807 38.3807 32 37 32C35.6193 32 34.5 30.8807 34.5 29.5C34.5 28.1193 35.6193 27 37 27C38.3807 27 39.5 28.1193 39.5 29.5ZM37 45C38.3807 45 39.5 43.8807 39.5 42.5C39.5 41.1193 38.3807 40 37 40C35.6193 40 34.5 41.1193 34.5 42.5C34.5 43.8807 35.6193 45 37 45ZM44.5 16.5C44.5 15.1193 45.6193 14 47 14H64C65.3807 14 66.5 15.1193 66.5 16.5C66.5 17.8807 65.3807 19 64 19H47C45.6193 19 44.5 17.8807 44.5 16.5ZM47 27C45.6193 27 44.5 28.1193 44.5 29.5C44.5 30.8807 45.6193 32 47 32H64C65.3807 32 66.5 30.8807 66.5 29.5C66.5 28.1193 65.3807 27 64 27H47ZM44.5 42.5C44.5 41.1193 45.6193 40 47 40H64C65.3807 40 66.5 41.1193 66.5 42.5C66.5 43.8807 65.3807 45 64 45H47C45.6193 45 44.5 43.8807 44.5 42.5Z",fill:i}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M79.7939 93.0254C91.9442 93.0254 101.794 83.1757 101.794 71.0254C101.794 58.8751 91.9442 49.0254 79.7939 49.0254C67.6437 49.0254 57.7939 58.8751 57.7939 71.0254C57.7939 83.1757 67.6437 93.0254 79.7939 93.0254ZM88.0433 71.0251L79.7936 62.7754L71.544 71.0251L79.7936 79.2748L88.0433 71.0251Z",fill:t})]})},a=e=>{const{primary:t}=s();return(0,n.jsxs)("svg",{...e,width:"116",height:"116",viewBox:"0 0 116 116",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M106.673 12.4027C110.616 13.5333 112.895 17.6462 111.765 21.5891L97.7533 70.4529C96.8931 73.4525 94.307 75.4896 91.3828 75.7948C91.4046 75.5034 91.4157 75.2091 91.4157 74.9121V27.1674C91.4157 20.7217 86.1904 15.4965 79.7447 15.4965H56.1167L58.7303 6.38172C59.8609 2.43883 63.9738 0.159015 67.9167 1.28962L106.673 12.4027Z",fill:t}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 27.7402C32 23.322 35.5817 19.7402 40 19.7402H79.1717C83.59 19.7402 87.1717 23.322 87.1717 27.7402V74.3389C87.1717 78.7572 83.59 82.3389 79.1717 82.3389H40C35.5817 82.3389 32 78.7572 32 74.3389V27.7402ZM57.1717 42.7402C57.1717 46.6062 53.8138 49.7402 49.6717 49.7402C45.5296 49.7402 42.1717 46.6062 42.1717 42.7402C42.1717 38.8742 45.5296 35.7402 49.6717 35.7402C53.8138 35.7402 57.1717 38.8742 57.1717 42.7402ZM36.1717 60.8153C37.2808 58.3975 40.7688 54.8201 45.7381 54.3677C51.977 53.7997 55.3044 57.8295 56.5522 60.0094C59.8797 55.4423 67.0336 46.8724 72.3575 45.9053C77.6814 44.9381 81.7853 48.4574 83.1717 50.338V72.6975C83.1717 75.4825 80.914 77.7402 78.1289 77.7402H41.2144C38.4294 77.7402 36.1717 75.4825 36.1717 72.6975V60.8153Z",fill:t})]})},d=e=>{const{primary:t,secondary:i}=s();return(0,n.jsxs)("svg",{...e,width:"81",height:"97",viewBox:"0 0 81 85",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M40.98 44C53.1302 44 62.98 34.1503 62.98 22C62.98 9.84974 53.1302 0 40.98 0C28.8297 0 18.98 9.84974 18.98 22C18.98 34.1503 28.8297 44 40.98 44ZM49.23 22L40.98 13.75L32.73 22L40.98 30.25L49.23 22Z",fill:t}),(0,n.jsx)("path",{d:"M2.5 63.1986C12.9105 63.1986 20.7173 53.0581 20.7173 53.0581C20.7173 53.0581 28.5241 63.1986 38.9346 63.1986C49.3409 63.1986 59.7514 53.0581 59.7514 53.0581C59.7514 53.0581 70.1619 63.1986 77.9687 63.1986M2.5 82.2504C12.9105 82.2504 20.7173 72.1099 20.7173 72.1099C20.7173 72.1099 28.5241 82.2504 38.9346 82.2504C49.3409 82.2504 59.7514 72.1099 59.7514 72.1099C59.7514 72.1099 70.1619 82.2504 77.9687 82.2504",stroke:i,strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"})]})},c=e=>{const{primary:t,secondary:i}=s();return(0,n.jsxs)("svg",{...e,width:"91",height:"80",viewBox:"0 0 91 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 0C1.61929 0 0.5 1.11929 0.5 2.5C0.5 3.88071 1.61929 5 3 5L57 5C58.3807 5.00001 59.5 3.88072 59.5 2.50001C59.5 1.11929 58.3807 5.06009e-06 57 4.93939e-06L3 0ZM7.51953 11.1055H10.5143C13.5091 11.1055 15.0065 12.6029 15.0065 15.5977V18.5924C15.0065 21.5872 13.5091 23.0846 10.5143 23.0846H7.51953C4.52474 23.0846 3.02734 21.5872 3.02734 18.5924V15.5977C3.02734 12.6029 4.52474 11.1055 7.51953 11.1055ZM31.4779 11.1055H28.4831C25.4883 11.1055 23.9909 12.6029 23.9909 15.5977V18.5924C23.9909 21.5872 25.4883 23.0846 28.4831 23.0846H31.4779C34.4726 23.0846 35.97 21.5872 35.97 18.5924V15.5977C35.97 12.6029 34.4726 11.1055 31.4779 11.1055ZM49.4466 11.1055H52.4414C55.4362 11.1055 56.9336 12.6029 56.9336 15.5977V18.5924C56.9336 21.5872 55.4362 23.0846 52.4414 23.0846H49.4466C46.4518 23.0846 44.9544 21.5872 44.9544 18.5924V15.5977C44.9544 12.6029 46.4518 11.1055 49.4466 11.1055ZM10.5143 31.47H7.51953C4.52474 31.47 3.02734 32.9674 3.02734 35.9622V38.957C3.02734 41.9518 4.52474 43.4492 7.51953 43.4492H10.5143C13.5091 43.4492 15.0065 41.9518 15.0065 38.957V35.9622C15.0065 32.9674 13.5091 31.47 10.5143 31.47ZM28.4831 31.47H31.4779C34.4726 31.47 35.97 32.9674 35.97 35.9622V38.957C35.97 41.9518 34.4726 43.4492 31.4779 43.4492H28.4831C25.4883 43.4492 23.9909 41.9518 23.9909 38.957V35.9622C23.9909 32.9674 25.4883 31.47 28.4831 31.47ZM52.4414 31.47H49.4466C46.4518 31.47 44.9544 32.9674 44.9544 35.9622V38.957C44.9544 41.1067 45.726 42.4849 47.2691 43.0915C49.7015 39.5566 52.9858 36.6532 56.8257 34.6779C56.4335 32.5393 54.9721 31.47 52.4414 31.47Z",fill:i}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M68.7031 79.8125C80.8534 79.8125 90.7031 69.9628 90.7031 57.8125C90.7031 45.6622 80.8534 35.8125 68.7031 35.8125C56.5529 35.8125 46.7031 45.6622 46.7031 57.8125C46.7031 69.9628 56.5529 79.8125 68.7031 79.8125ZM76.9524 57.8122L68.7027 49.5625L60.4531 57.8122L68.7027 66.0619L76.9524 57.8122Z",fill:t})]})};var u=i(20128),p=i(82663),h=i(63933),v=i(59068),f=i(59793);const g={nft:{title:(0,n.jsx)(p.Trans,{i18nKey:"nfts.noneYet"}),subtitle:(0,n.jsx)(p.Trans,{i18nKey:"nft.buyTransferNFTToStart"}),actionText:(0,n.jsx)(p.Trans,{i18nKey:"nft.explore"}),urlPath:"/nfts",icon:(0,n.jsx)(a,{})},token:{title:(0,n.jsx)(p.Trans,{i18nKey:"tokens.selector.empty.title"}),subtitle:(0,n.jsx)(p.Trans,{i18nKey:"nft.buyTransferTokensToStart"}),actionText:(0,n.jsx)(p.Trans,{i18nKey:"common.exploreTokens"}),urlPath:"/tokens",icon:(0,n.jsx)(c,{})},activity:{title:(0,n.jsx)(p.Trans,{i18nKey:"common.noActivity"}),subtitle:(0,n.jsx)(p.Trans,{i18nKey:"nft.willAppearHere"}),icon:(0,n.jsx)(l,{})},pool:{title:(0,n.jsx)(p.Trans,{i18nKey:"nft.noPools"}),subtitle:(0,n.jsx)(p.Trans,{i18nKey:"pool.openToStart"}),actionText:(0,n.jsx)(p.Trans,{i18nKey:"pool.newPosition.plus"}),urlPath:"/pool",icon:(0,n.jsx)(d,{})}},m=({type:e="nft",onNavigateClick:t})=>{const i=(0,h.s0)(),o=g[e],r=(0,u.useCallback)((()=>{var e;o.urlPath&&(null===(e=t)||void 0===e||e(),i(o.urlPath))}),[o.urlPath,i,t]);return(0,n.jsxs)("div",{className:"  _display-flex _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _alignItems-center _justifyContent-center _height-10037 _width-10037 _pr-t-space-spa1360334080 _pl-t-space-spa1360334080  _pt-_sm_t-space-spa94665593",children:[o.icon,(0,n.jsx)(f.Text,{variant:"subheading2",textAlign:"center",mt:"$spacing12",children:o.title}),(0,n.jsx)(f.Text,{variant:"body3",textAlign:"center",mt:"$spacing8",color:"$neutral2",children:o.subtitle}),o.actionText&&(0,n.jsx)("div",{className:"  _display-flex _alignItems-stretch _flexBasis-auto _boxSizing-border-box _position-relative _minHeight-0px _minWidth-0px _flexShrink-0 _flexDirection-column _mt-t-space-spa1360334051 ",children:(0,n.jsx)(v.z,{"data-testid":"nft-explore-nfts-button",variant:"branded",onPress:r,children:o.actionText})})]})};i(39176)}}]);
//# sourceMappingURL=9672.39166a0b.chunk.js.map