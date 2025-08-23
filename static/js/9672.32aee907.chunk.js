"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9672],{9672:(e,t,n)=>{n.r(t),n.d(t,{default:()=>at});var i=n(97755),o=n(18612),r=n(24547),s=n(65375),l=n(99711),a=n(96296),d=n(32130),c=(e=>(e.LooksRare="looksrare",e.X2Y2="x2y2",e.NFT20="nft20",e.NFTX="nftx",e.Opensea="opensea",e.Rarible="rarible",e.Sudoswap="sudoswap",e.Cryptopunks="cryptopunks",e.Gem="gem",e.Foundation="foundation",e.Zora="zora",e.Blur="blur",e.Ensvision="ensvision",e))(c||{}),u=(e=>(e[e.unset=0]="unset",e[e.square=1]="square",e))(u||{});const p=new Set(["mp3","wav"]),h=JSON.parse('["3g2","3gp","aaf","asf","avchd","avi","drc","flv","m2v","m3u8","m4p","m4v","mkv","mng","mov","mp2","mp4","mpe","mpeg","mpg","mpv","mxf","nsv","ogg","ogv","qt","rm","rmvb","roq","svi","vob","webm","wmv","yuv"]');var v=n(20128);function g(e){return e.imageUrl||e.smallImageUrl}function f(e){return e.animationUrl}function m(e){return"address"in e?`/nfts/asset/${e.address}/${e.tokenId}?origin=collection`:"asset_contract"in e?`/nfts/asset/${e.asset_contract.address}/${e.tokenId}?origin=profile`:"/nfts/profile"}function x(e){let t=0;var n;return e.animationUrl&&((e=>{if(!e)return!1;const t=e.substring(e.lastIndexOf(".")+1);return p.has(t)})(e.animationUrl)?t=2:(n=e.animationUrl,void 0!==h.find(e=>{var t;return null===(t=n)||void 0===t?void 0:t.endsWith(`.${e}`)})&&(t=1))),t}function w(e,t,n,o,r,s,l){switch(x(e)){case 0:return(0,i.jsx)(F,{src:g(e),uniformAspectRatio:o,setUniformAspectRatio:r,renderedHeight:s,setRenderedHeight:l});case 1:return(0,i.jsx)(q,{src:g(e),mediaSrc:f(e),tokenId:e.tokenId,shouldPlay:t,setCurrentTokenPlayingMedia:n,uniformAspectRatio:o,setUniformAspectRatio:r,renderedHeight:s,setRenderedHeight:l});case 2:return(0,i.jsx)(q,{isAudio:!0,src:g(e),mediaSrc:f(e),tokenId:e.tokenId,shouldPlay:t,setCurrentTokenPlayingMedia:n,uniformAspectRatio:o,setUniformAspectRatio:r,renderedHeight:s,setRenderedHeight:l})}}function b(e){switch(e){case c.Opensea:return(0,i.jsx)(d.fP,{});case c.LooksRare:return(0,i.jsx)(d.XM,{});case c.X2Y2:return(0,i.jsx)(d.Bl,{});case c.Sudoswap:return(0,i.jsx)(d.OD,{});case c.NFT20:return(0,i.jsx)(d.p8,{});case c.NFTX:return(0,i.jsx)(d.R2,{});case c.Cryptopunks:return(0,i.jsx)(d.f7,{});default:return null}}const y=(e,t,n,i,o)=>{if(e!==u.square&&n){const r=t.currentTarget.clientHeight,s=t.currentTarget.clientWidth/r;(!i||i!==r)&&s<1&&e!==u.square&&o&&o(r);const l=.05;e===u.unset?n(s>=1?u.square:s):(s>e+l||s<e-l)&&(n(u.square),o&&o(void 0))}};function j(e,t){return e===u.square||e===u.unset?void 0:t}function C(e,t){return e!==u.square&&t?"auto":"1"}var T=n(88378),A=n.n(T);function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},P.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var H=(0,v.forwardRef)(function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=k(e,["color","size"]);return v.createElement("svg",P({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),v.createElement("rect",{x:"6",y:"4",width:"4",height:"16"}),v.createElement("rect",{x:"14",y:"4",width:"4",height:"16"}))});H.propTypes={color:A().string,size:A().oneOfType([A().string,A().number])},H.displayName="Pause";const S=H;function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},D.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var O=(0,v.forwardRef)(function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=E(e,["color","size"]);return v.createElement("svg",D({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),v.createElement("polygon",{points:"5 3 19 12 5 21 5 3"}))});O.propTypes={color:A().string,size:A().oneOfType([A().string,A().number])},O.displayName="Play";const $=O;var B=n(82663),L=n(7035),M=n(99695),R=n(44876);const Z=a.ZP.div`
  position: relative;
  pointer-events: auto;
  &:hover {
    opacity: ${({isDisabled:e,theme:t})=>e?t.opacity.disabled:t.opacity.enabled};
  }
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
`,Y=({isDisabled:e,children:t})=>(0,i.jsx)(Z,{isDisabled:e,children:t}),I=(0,a.ZP)(l.ZP)`
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`,_=a.ZP.img`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
  transition: ${({theme:e})=>`${e.transition.duration.medium} ${e.transition.timing.ease} transform`};
  will-change: transform;
  object-fit: contain;
  visibility: ${({$hidden:e})=>e?"hidden":"visible"};
  background: ${({theme:e,imageLoading:t})=>t&&`linear-gradient(270deg, ${e.surface3} 0%, ${e.surface1} 100%)`};
`,F=({src:e,uniformAspectRatio:t=u.square,setUniformAspectRatio:n,renderedHeight:o,setRenderedHeight:r})=>{const[s,l]=(0,v.useState)(!e),[a,d]=(0,v.useState)(!1);return s?(0,i.jsx)(K,{height:j(t,o)}):(0,i.jsx)(I,{children:(0,i.jsx)(_,{src:e,$aspectRatio:C(t,n),imageLoading:!a,draggable:!1,onError:()=>l(!0),onLoad:e=>{y(t,e,n,o,r),d(!0)}})})},N=a.ZP.div`
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

  ${Z}:hover & {
    display: block;
  }
`,V=a.ZP.video`
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
`,z=(0,a.ZP)(l.ZP)`
  position: absolute;
  left: 0px;
  top: 0px;
`,U=a.ZP.audio`
  width: 100%;
  height: 100%;
`,q=({isAudio:e,src:t,mediaSrc:n,tokenId:o,uniformAspectRatio:r=u.square,setUniformAspectRatio:s,renderedHeight:l,setRenderedHeight:a,shouldPlay:d,setCurrentTokenPlayingMedia:c})=>{const p=(0,v.useRef)(null),[h,g]=(0,v.useState)(!t),[f,m]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{d&&p.current?p.current.play():!d&&p.current&&p.current.pause()},[d]),h?(0,i.jsx)(K,{height:j(r,l)}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(I,{children:(0,i.jsx)(_,{src:t,$aspectRatio:C(r,s),imageLoading:!f,draggable:!1,onError:()=>g(!0),onLoad:e=>{y(r,e,s,l,a),m(!0)},$hidden:d&&!e})}),d?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N,{pauseButton:!0,children:(0,i.jsx)(S,{size:"24px",onClick:e=>{e.preventDefault(),e.stopPropagation(),c(void 0)}})}),(0,i.jsx)(z,{children:e?(0,i.jsx)(U,{ref:p,onEnded:e=>{e.preventDefault(),c(void 0)},children:(0,i.jsx)("source",{src:n})}):(0,i.jsx)(V,{$aspectRatio:C(r,s),ref:p,onEnded:e=>{e.preventDefault(),c(void 0)},loop:!0,playsInline:!0,children:(0,i.jsx)("source",{src:n})})})]}):(0,i.jsx)(N,{children:(0,i.jsx)($,{size:"24px",onClick:e=>{e.preventDefault(),e.stopPropagation(),c(o)}})})]})},W=a.ZP.div`
  position: relative;
  width: 100%;
  height: ${({$height:e})=>e?`${e}px`:"auto"};
  padding-top: 100%;
  background: ${({theme:e})=>`linear-gradient(90deg, ${e.surface1} 0%, ${e.surface3} 95.83%)`};
`,J=(0,a.ZP)(M.T.BodyPrimary)`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  color: ${L.O9.gray500};
`,K=({height:e})=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(W,{$height:e,children:(0,i.jsx)(J,{children:(0,i.jsx)(B.Trans,{i18nKey:"nft.card.notAvailable",components:{br:(0,i.jsx)("br",{})}})})})});var Q=n(86683);const X=a.ZP.div`
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
`,ee=(0,a.ZP)(M.T.BodySmall)`
  position: absolute;
  display: flex;
  padding: 8px 0px;
  bottom: -32px;
  left: 8px;
  right: 8px;
  color: ${({theme:e,isDisabled:t})=>t?e.neutral1:e.deprecated_accentTextLightPrimary};
  background: ${({theme:e,selected:t,isDisabled:n})=>t?e.critical:n?e.surface3:e.accent1};
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
`,te=({isDisabled:e,isSelected:t,clickActionButton:n,children:o})=>(0,i.jsx)(ee,{selected:t,isDisabled:e,onClick:t=>e?void 0:n(t),children:o}),ne=a.ZP.div`
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

    ${_} {
      transform: scale(1.15);
    }
  }
`,ie=({isSelected:e,isDisabled:t,children:n,testId:o,onClick:r})=>(0,i.jsx)(ne,{selected:e,isDisabled:t,draggable:!1,"data-testid":o,onClick:r,children:n}),oe=(0,a.ZP)(Q.Link)`
  text-decoration: none;
`,re=({isSelected:e,isDisabled:t,detailsHref:n,testId:o,onClick:r,children:s})=>(0,i.jsx)(ie,{isSelected:e,isDisabled:t,testId:o,onClick:r,children:n?(0,i.jsx)(oe,{to:n,children:s}):s}),se=({children:e})=>(0,i.jsx)(X,{children:e}),le=({children:e})=>(0,i.jsx)(G,{children:e}),ae=(0,a.ZP)(s.ZP)`
  gap: 4px;
  overflow: hidden;
  width: 100%;
  padding: 0px 8px;
  height: 48px;
`,de=({children:e})=>(0,i.jsx)(ae,{children:e}),ce=(0,a.ZP)(l.ZP)`
  gap: 8px;
  justify-content: space-between;
`,ue=({children:e})=>(0,i.jsx)(ce,{children:e}),pe=(0,a.ZP)(l.ZP)`
  justify-items: center;
  overflow: hidden;
  white-space: nowrap;
  gap: 8px;
`,he=({children:e})=>(0,i.jsx)(pe,{children:e}),ve=(0,a.ZP)(M.T.BodySmall)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 535 !important;
  line-height: 20px;
`,ge=({children:e})=>(0,i.jsx)(ve,{children:e}),fe=(0,a.ZP)(l.ZP)`
  justify-content: space-between;
`,me=({children:e})=>(0,i.jsx)(fe,{children:e}),xe=(0,a.ZP)(l.ZP)`
  overflow: hidden;
  white-space: nowrap;
`,we=({children:e})=>(0,i.jsx)(xe,{children:e}),be=(0,a.ZP)(M.T.BodyPrimary)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 24px;
`,ye=({children:e})=>(0,i.jsx)(be,{children:e});var je=n(13402);function Ce(){return Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Ce.apply(this,arguments)}function Te(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Ae=(0,v.forwardRef)(function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,s=Te(e,["color","size"]);return v.createElement("svg",Ce({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),v.createElement("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),v.createElement("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"}))});Ae.propTypes={color:A().string,size:A().oneOfType([A().string,A().number])},Ae.displayName="Tag";const Pe=Ae;var ke=n(94839);const He=a.ZP.div`
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
`,Se=(0,a.ZP)(l.ZP)`
  gap: 6px;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  text-shadow: 1px 1px 3px rgba(51, 53, 72, 0.54);
`,De=({isSelected:e,marketplace:t,tokenType:n,listedPrice:o,hidePrice:r})=>e?t?(0,i.jsx)(He,{children:(0,i.jsx)(d.U1,{width:"20px",height:"20px",viewBox:"0 0 20 20"})}):(0,i.jsx)(He,{children:(0,i.jsx)(je.Z,{size:20})}):o&&!r?(0,i.jsx)(He,{isText:!0,children:(0,i.jsxs)(Se,{children:[(0,i.jsx)(Pe,{size:20}),o," ETH"]})}):t&&n!==ke.NftStandard.Erc1155?(0,i.jsx)(He,{children:b(t)}):null;var Ee=n(27258);const Oe=({asset:e,display:t,isSelected:n,selectAsset:o,unselectAsset:r,isDisabled:s,onButtonClick:l,onCardClick:a,sendAnalyticsEvent:d,mediaShouldBePlaying:c,uniformAspectRatio:p=u.square,setUniformAspectRatio:h,renderedHeight:g,setRenderedHeight:f,setCurrentTokenPlayingMedia:x,testId:b,hideDetails:y=!1})=>{const j=function({selectAsset:e,unselectAsset:t,isSelected:n,isDisabled:i,onClick:o}){return(0,v.useCallback)(r=>{var s,l;r.stopPropagation(),r.preventDefault(),i||(o?o():n?null===(s=t)||void 0===s||s():null===(l=e)||void 0===l||l())},[e,i,o,t,n])}({selectAsset:o,unselectAsset:r,isSelected:n,isDisabled:s,onClick:l}),{formatNumberOrString:C}=(0,Ee.Gb)(),T="marketplace"in e,A="asset_contract"in e,P=T?e.tokenType:A?e.asset_contract.tokenType:void 0,k=T?e.marketplace:void 0,H=A&&!s&&e.floor_sell_order_price?C({input:e.floor_sell_order_price,type:Ee.sw.NFTTokenFloorPrice}):void 0;return(0,i.jsxs)(re,{isSelected:n,isDisabled:s,detailsHref:a?void 0:m(e),testId:b,onClick:()=>{var e,t;null===(e=a)||void 0===e||e(),null===(t=d)||void 0===t||t()},children:[(0,i.jsxs)(Y,{isDisabled:s,children:[(0,i.jsx)(De,{hidePrice:y,isSelected:n,marketplace:k,tokenType:P,listedPrice:H}),w(e,c,x,p,h,g,f)]}),!y&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(se,{children:(0,i.jsx)(le,{children:(0,i.jsxs)(de,{children:[(0,i.jsxs)(ue,{children:[(0,i.jsxs)(he,{children:[(0,i.jsx)(ge,{children:t.primaryInfo}),t.primaryInfoIcon]}),t.primaryInfoRight]}),(0,i.jsx)(me,{children:(0,i.jsx)(we,{children:(0,i.jsx)(ye,{children:t.secondaryInfo})})})]})})}),(0,i.jsx)(te,{clickActionButton:j,isDisabled:s,isSelected:n,children:n?t.selectedInfo:s?t.disabledInfo:t.notSelectedInfo})]})]})};var $e=n(66998),Be=n(82746),Le=n(59793),Me=n(39613),Re=n(2398),Ze=n(66789),Ye=n(70943);function Ie({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n}){var s;const{t:l}=(0,B.useTranslation)(),{isTestnetModeEnabled:a,gqlChains:d}=(0,Re.useEnabledChains)(),c=(0,Ye.useTrace)(),[u,p]=(0,v.useState)(!1),h=e.chain&&a?d.includes(e.chain):e.chain===ke.Chain.Ethereum;return(0,i.jsxs)(Be.Flex,{gap:"8px",minHeight:"150px",alignItems:"center",justifyContent:"flex-start",width:"100%",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[(0,i.jsx)(r.CW,{placement:"bottom",size:r.Oz.Max,disabled:h,text:l("nft.chainSupportComingSoon",{chainName:(0,$e.capitalize)((null===(s=e.chain)||void 0===s?void 0:s.toLowerCase())??"L2")}),hideArrow:!0,children:(0,i.jsx)(Oe,{asset:e,hideDetails:!0,display:{disabledInfo:!0},isSelected:!1,isDisabled:!h,onCardClick:()=>{var t;(null===(t=e.asset_contract)||void 0===t?void 0:t.address)&&e.tokenId&&window.open(`https://opensea.io/assets/${e.asset_contract.address}/${e.tokenId}`,"_blank","noopener,noreferrer")},sendAnalyticsEvent:()=>{var t,n;return(0,Ze.sendAnalyticsEvent)(o.SharedEventName.ELEMENT_CLICKED,{element:o.InterfaceElementName.MINI_PORTFOLIO_NFT_ITEM,collection_name:null===(t=e.collection)||void 0===t?void 0:t.name,collection_address:null===(n=e.collection)||void 0===n?void 0:n.address,token_id:e.tokenId,...c})},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,testId:"mini-portfolio-nft"})}),(0,i.jsx)(_e,{asset:e,isHovered:u})]})}function _e({asset:e,isHovered:t}){const{t:n}=(0,B.useTranslation)();return(0,i.jsxs)(Be.Flex,{overflow:"hidden",width:"100%",flexWrap:"nowrap",children:[(0,i.jsxs)(Be.Flex,{row:!0,alignItems:"center",gap:"4px",width:"100%",children:[(0,i.jsx)(Le.Text,{variant:"body3",mx:"$spacing2",maxWidth:"calc(100% - 22px)","$platform-web":{whiteSpace:"pre",textOverflow:"ellipsis",overflow:"hidden"},children:e.asset_contract.name}),e.collectionIsVerified&&(0,i.jsx)(Ne,{})]}),(0,i.jsxs)(Be.Flex,{opacity:t?1:0,row:!0,alignItems:"center",justifyContent:"flex-start",width:"100%",gap:"$spacing4",children:[(0,i.jsx)(Le.Text,{color:"$neutral2",variant:"body4",children:n("common.opensea.link")}),(0,i.jsx)(Me.d,{color:"$neutral2",size:"$icon.12"})]})]})}const Fe="18px";function Ne(){return(0,i.jsx)(Be.Flex,{row:!0,alignItems:"center",width:"unset",style:{flexShrink:0},children:(0,i.jsx)(d.SA,{height:Fe,width:Fe})})}var Ve=n(30053),ze=n(64228),Ue=n(14402);var qe=n(34691),We=n(83243);function Je({ownerAddress:e,collectionFilters:t,assetsFilter:n,first:i,after:o,last:r,before:s,skip:l=!1,chains:a}){var d,c,u,p,h,g,f,m,x,w,b,y;const{data:j,loading:C,fetchMore:T}=(0,ke.useNftBalanceQuery)({variables:{ownerAddress:e,filter:n&&n.length>0?{assets:n}:{addresses:t},chains:a,first:i,after:o,last:r,before:s},skip:l}),A=(0,We.useHideSpamTokensSetting)(),P=null===(u=j)||void 0===u||null===(c=u.nftBalances)||void 0===c||null===(d=c.pageInfo)||void 0===d?void 0:d.hasNextPage,k=(0,v.useCallback)(()=>{var e,t,n;return T({variables:{after:null===(n=j)||void 0===n||null===(t=n.nftBalances)||void 0===t||null===(e=t.pageInfo)||void 0===e?void 0:e.endCursor}})},[null===(g=j)||void 0===g||null===(h=g.nftBalances)||void 0===h||null===(p=h.pageInfo)||void 0===p?void 0:p.endCursor,T]),H=null===(y=A?null===(x=j)||void 0===x||null===(m=x.nftBalances)||void 0===m||null===(f=m.edges)||void 0===f?void 0:f.filter(e=>{var t;return!(null===(t=e)||void 0===t?void 0:t.node.ownedAsset).isSpam}):null===(b=j)||void 0===b||null===(w=b.nftBalances)||void 0===w?void 0:w.edges)||void 0===y?void 0:y.map(e=>{var t,n,i,o,r,s,l,a,d,c,u,p,h,v,g,f,m,x,w,b,y,j,C,T,A,P,k,H,S,D,E,O,$,B,L,M,R,Z,Y,I,_,F,N,V,z,U,q,W,J,K,Q,X,G,ee,te,ne,ie,oe,re,se,le,ae,de,ce,ue,pe,he,ve;const ge=null===(t=e)||void 0===t?void 0:t.node.ownedAsset,fe=(0,Ue.parseEther)((me=(null===(o=ge)||void 0===o||null===(i=o.listings)||void 0===i||null===(n=i.edges[0])||void 0===n?void 0:n.node.price.value)??0,parseFloat(me.toString()).toLocaleString("fullwide",{useGrouping:!1}).replace(",",".").replace(" ",""))).toString();var me;return{id:null===(r=ge)||void 0===r?void 0:r.id,imageUrl:null===(l=ge)||void 0===l||null===(s=l.image)||void 0===s?void 0:s.url,smallImageUrl:null===(d=ge)||void 0===d||null===(a=d.smallImage)||void 0===a?void 0:a.url,notForSale:0===(null===(p=ge)||void 0===p||null===(u=p.listings)||void 0===u||null===(c=u.edges)||void 0===c?void 0:c.length),animationUrl:null===(h=ge)||void 0===h?void 0:h.animationUrl,susFlag:null===(v=ge)||void 0===v?void 0:v.suspiciousFlag,priceInfo:{ETHPrice:fe,baseAsset:"ETH",baseDecimals:"18",basePrice:fe},name:null===(g=ge)||void 0===g?void 0:g.name,tokenId:null===(f=ge)||void 0===f?void 0:f.tokenId,asset_contract:{address:null===(b=ge)||void 0===b||null===(w=b.collection)||void 0===w||null===(x=w.nftContracts)||void 0===x||null===(m=x[0])||void 0===m?void 0:m.address,tokenType:null===(T=ge)||void 0===T||null===(C=T.collection)||void 0===C||null===(j=C.nftContracts)||void 0===j||null===(y=j[0])||void 0===y?void 0:y.standard,name:null===(P=ge)||void 0===P||null===(A=P.collection)||void 0===A?void 0:A.name,description:null===(k=ge)||void 0===k?void 0:k.description,image_url:null===(D=ge)||void 0===D||null===(S=D.collection)||void 0===S||null===(H=S.image)||void 0===H?void 0:H.url,payout_address:null===(B=e)||void 0===B||null===($=B.node)||void 0===$||null===(O=$.listingFees)||void 0===O||null===(E=O[0])||void 0===E?void 0:E.payoutAddress},collection:{name:null===(L=ge.collection)||void 0===L?void 0:L.name,isVerified:null===(M=ge.collection)||void 0===M?void 0:M.isVerified,imageUrl:null===(Z=ge.collection)||void 0===Z||null===(R=Z.image)||void 0===R?void 0:R.url,twitterUrl:(null===(Y=ge.collection)||void 0===Y?void 0:Y.twitterName)?`@${null===(I=ge.collection)||void 0===I?void 0:I.twitterName}`:void 0},collectionIsVerified:null===(F=ge)||void 0===F||null===(_=F.collection)||void 0===_?void 0:_.isVerified,lastPrice:null===(N=e.node.lastPrice)||void 0===N?void 0:N.value,floorPrice:null===(W=ge)||void 0===W||null===(q=W.collection)||void 0===q||null===(U=q.markets)||void 0===U||null===(z=U[0])||void 0===z||null===(V=z.floorPrice)||void 0===V?void 0:V.value,basisPoints:(null===(X=e)||void 0===X||null===(Q=X.node)||void 0===Q||null===(K=Q.listingFees)||void 0===K||null===(J=K[0])||void 0===J?void 0:J.basisPoints)??0/qe.BIPS_BASE,listing_date:null===(oe=ge)||void 0===oe||null===(ie=oe.listings)||void 0===ie||null===(ne=ie.edges)||void 0===ne||null===(te=ne[0])||void 0===te||null===(ee=te.node)||void 0===ee||null===(G=ee.createdAt)||void 0===G?void 0:G.toString(),date_acquired:null===(se=e.node.lastPrice)||void 0===se||null===(re=se.timestamp)||void 0===re?void 0:re.toString(),sellOrders:null===(ae=ge)||void 0===ae||null===(le=ae.listings)||void 0===le?void 0:le.edges.map(e=>e.node),floor_sell_order_price:null===(ve=ge)||void 0===ve||null===(he=ve.listings)||void 0===he||null===(pe=he.edges)||void 0===pe||null===(ue=pe[0])||void 0===ue||null===(ce=ue.node)||void 0===ce||null===(de=ce.price)||void 0===de?void 0:de.value,chain:ge.chain}});return(0,v.useMemo)(()=>({walletAssets:H,hasNext:P,loadMore:k,loading:C}),[P,k,C,H])}var Ke=n(57306),Qe=n(26013);const Xe=({height:e})=>(0,i.jsxs)(Be.Flex,{borderRadius:"$rounded12",pb:"$padding12",backgroundColor:"$surface2",children:[(0,i.jsxs)(Be.Flex,{width:"100%",height:e??200,children:[(0,i.jsx)(Be.Flex,{height:"100%",width:"100%"}),(0,i.jsx)(Ke.E,{width:"100%",opacity:0,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAIAAAAHjs1qAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9bpSoVB4tIcchQnSyIiuimVShChVArtOpg8tI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Io5OToouUeF9SaBHjhcf7OO+ew3v3Af56malmxxigapaRSsSFTHZVCL6iGxEMwIcZiZn6nCgm4Vlf99RHdRfjWd59f1avkjMZ4BOIZ5luWMQbxFObls55nzjMipJCfE48atAFiR+5Lrv8xrngsJ9nho10ap44TCwU2lhuY1Y0VOJJ4qiiapTvz7iscN7irJarrHlP/sJQTltZ5jqtISSwiCWIECCjihLKsBCjXSPFRIrO4x7+iOMXySWTqwRGjgVUoEJy/OB/8Hu2Zn5i3E0KxYHOF9v+GAaCu0CjZtvfx7bdOAECz8CV1vJX6sD0J+m1lhY9Avq2gYvrlibvAZc7wOCTLhmSIwVo+fN54P2MvikL9N8CPWvu3JrnOH0A0jSr5A1wcAiMFCh73ePdXe1z+7enOb8fjpJysoP8VEAAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfmCRoWAwwETUefAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAetJREFUeNrt0gENAAAIwzDAv+fjA1oJyzpJwQ8jAXYHu4Pdwe5gd7A72B3sDnYHu4PdsTvYHewOdge7g93B7mB3sDvYHeyO3cHuYHewO9gd7A52B7uD3cHuYHfsDnYHu4Pdwe5gd7A72B3sDnYHu2N3sDvYHewOdge7g93B7mB3sDvYHeyO3cHuYHewO9gd7A52B7uD3cHuYHfsDnYHu4Pdwe5gd7A72B3sDnYHu2N3sDvYHewOdge7g93B7mB3sDvYHbuD3cHuYHewO9gd7A52B7uD3cHu2B3sDnYHu4Pdwe5gd7A72B3sDnYHu2N3sDvYHewOdge7g93B7mB3sDvYHbuD3cHuYHewO9gd7A52B7uD3cHu2B3sDnYHu4Pdwe5gd7A72B3sDnbH7mB3sDvYHewOdge7g93B7mB3sDvYHbuD3cHuYHewO9gd7A52B7uD3cHu2B3sDnYHu4Pdwe5gd7A72B3sDnbH7mB3sDvYHewOdge7g93B7mB3sDt2B7uD3cHuYHewO9gd7A52B7uD3bE72B3sDnYHu4Pdwe5gd7A72B3sDnbH7mB3sDvYHewOdge7g93B7mB3sDt2B7uD3cHuYHewO9gd7A52B7uD3bE72B3sDnYHu4Pdwe5gd7A72B3sjt3B7nDLAlFnBPHmq82kAAAAAElFTkSuQmCC"})]}),(0,i.jsx)(Be.Flex,{row:!0,alignItems:"center",justifyContent:"space-between",mt:"$spacing12",pl:"$spacing12",pr:"$spacing12",children:(0,i.jsx)(Qe.Z,{children:(0,i.jsx)(Be.Flex,{height:12,width:120})})}),(0,i.jsx)(Be.Flex,{row:!0,alignItems:"center",justifyContent:"space-between",mt:"$spacing12",pl:"$spacing12",pr:"$spacing12",children:(0,i.jsx)(Qe.Z,{children:(0,i.jsx)(Be.Flex,{height:16,width:80})})})]}),Ge=({count:e,height:t})=>(0,i.jsx)(i.Fragment,{children:Array.from(Array(e??25),(e,n)=>(0,i.jsx)(Xe,{height:t},n))});var et=n(2879),tt=function(e,t){return tt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},tt(e,t)};var nt=function(){return nt=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},nt.apply(this,arguments)};var it="Pixel",ot="Percent",rt={unit:ot,value:.8};function st(e){return"number"==typeof e?{unit:ot,value:100*e}:"string"==typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:it,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:ot,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),rt):(console.warn("scrollThreshold should be string or number"),rt)}const lt=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"==typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")})},n.onScrollListener=function(e){"function"==typeof n.props.onScroll&&setTimeout(function(){return n.props.onScroll&&n.props.onScroll(e)},0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,i){var o,r=!1,s=0;function l(){o&&clearTimeout(o)}function a(){var a=this,d=Date.now()-s,c=arguments;function u(){s=Date.now(),n.apply(a,c)}r||(i&&!o&&u(),l(),void 0===i&&d>e?u():!0!==t&&(o=setTimeout(i?function(){o=void 0}:u,void 0===i?e-d:e)))}return"boolean"!=typeof t&&(i=n,n=t,t=void 0),a.cancel=function(){l(),r=!0},a}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}tt(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?nt(nt({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,i=st(t);return i.unit===it?e.scrollTop<=i.value+n-e.scrollHeight+1:e.scrollTop<=i.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,i=st(t);return i.unit===it?e.scrollTop+n>=e.scrollHeight-i.value:e.scrollTop+n>=i.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=nt({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),i=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return v.createElement("div",{style:i,className:"infinite-scroll-component__outerdiv"},v.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&v.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},v.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(v.Component);function at({account:e}){var t,n,o,r;const s=(0,ze.Q)(),{gqlChains:l,isTestnetModeEnabled:a}=(0,Re.useEnabledChains)(),{walletAssets:d,loading:c,hasNext:u,loadMore:p}=Je({ownerAddress:e,first:Ve.Qv,skip:!s.isOpen,chains:a?l:[ke.Chain.Ethereum,ke.Chain.Zora]}),[h,g]=(0,v.useState)();return c&&!d?(0,i.jsx)(dt,{children:(0,i.jsx)(Ge,{count:2})}):d&&0!==(null===(t=d)||void 0===t?void 0:t.length)?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(lt,{next:p,hasMore:u??!1,loader:Boolean(u&&(null===(n=d)||void 0===n?void 0:n.length))&&(0,i.jsx)(dt,{children:(0,i.jsx)(Ge,{count:2})}),dataLength:(null===(o=d)||void 0===o?void 0:o.length)??0,style:{overflow:"unset"},scrollableTarget:"wallet-dropdown-scroll-wrapper",children:(0,i.jsx)(dt,{children:(null===(r=d)||void 0===r?void 0:r.length)?d.map((e,t)=>(0,i.jsx)(Ie,{setCurrentTokenPlayingMedia:g,mediaShouldBePlaying:h===e.tokenId,asset:e},t)):null})})}):(0,i.jsx)(et.f,{onNavigateClick:s.close})}const dt=a.ZP.div`
  display: grid;
  gap: 12px;

  // use minmax to not let grid items escape the parent container
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  margin: 16px;
`},2879:(e,t,n)=>{n.d(t,{f:()=>x});var i=n(97755),o=n(17041),r=n(7035);const s=()=>{const e=(0,o.useTheme)();return{primary:e.darkMode?r.O9.gray150:r.O9.gray600,secondary:e.darkMode?r.O9.gray600:r.O9.gray300}},l=e=>{const{primary:t,secondary:n}=s();return(0,i.jsxs)("svg",{...e,width:"102",height:"94",viewBox:"0 0 102 94",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.4998 9.00098L5.22859 13.3799C1.51236 14.4455 -0.636389 18.322 0.429224 22.0382L13.6352 68.093C14.7008 71.8092 18.5773 73.958 22.2935 72.8924L56.7921 63H31.4998C25.4246 63 20.4998 58.0752 20.4998 52V9.00098Z",fill:n}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.5 0C27.634 0 24.5 3.13401 24.5 7V52C24.5 55.866 27.634 59 31.5 59H56.7364C60.5936 51.6192 67.8907 46.3207 76.5 45.2321V7C76.5 3.13401 73.366 0 69.5 0H31.5ZM37 19C38.3807 19 39.5 17.8807 39.5 16.5C39.5 15.1193 38.3807 14 37 14C35.6193 14 34.5 15.1193 34.5 16.5C34.5 17.8807 35.6193 19 37 19ZM39.5 29.5C39.5 30.8807 38.3807 32 37 32C35.6193 32 34.5 30.8807 34.5 29.5C34.5 28.1193 35.6193 27 37 27C38.3807 27 39.5 28.1193 39.5 29.5ZM37 45C38.3807 45 39.5 43.8807 39.5 42.5C39.5 41.1193 38.3807 40 37 40C35.6193 40 34.5 41.1193 34.5 42.5C34.5 43.8807 35.6193 45 37 45ZM44.5 16.5C44.5 15.1193 45.6193 14 47 14H64C65.3807 14 66.5 15.1193 66.5 16.5C66.5 17.8807 65.3807 19 64 19H47C45.6193 19 44.5 17.8807 44.5 16.5ZM47 27C45.6193 27 44.5 28.1193 44.5 29.5C44.5 30.8807 45.6193 32 47 32H64C65.3807 32 66.5 30.8807 66.5 29.5C66.5 28.1193 65.3807 27 64 27H47ZM44.5 42.5C44.5 41.1193 45.6193 40 47 40H64C65.3807 40 66.5 41.1193 66.5 42.5C66.5 43.8807 65.3807 45 64 45H47C45.6193 45 44.5 43.8807 44.5 42.5Z",fill:n}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M79.7939 93.0254C91.9442 93.0254 101.794 83.1757 101.794 71.0254C101.794 58.8751 91.9442 49.0254 79.7939 49.0254C67.6437 49.0254 57.7939 58.8751 57.7939 71.0254C57.7939 83.1757 67.6437 93.0254 79.7939 93.0254ZM88.0433 71.0251L79.7936 62.7754L71.544 71.0251L79.7936 79.2748L88.0433 71.0251Z",fill:t})]})},a=e=>{const{primary:t}=s();return(0,i.jsxs)("svg",{...e,width:"116",height:"116",viewBox:"0 0 116 116",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M106.673 12.4027C110.616 13.5333 112.895 17.6462 111.765 21.5891L97.7533 70.4529C96.8931 73.4525 94.307 75.4896 91.3828 75.7948C91.4046 75.5034 91.4157 75.2091 91.4157 74.9121V27.1674C91.4157 20.7217 86.1904 15.4965 79.7447 15.4965H56.1167L58.7303 6.38172C59.8609 2.43883 63.9738 0.159015 67.9167 1.28962L106.673 12.4027Z",fill:t}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 27.7402C32 23.322 35.5817 19.7402 40 19.7402H79.1717C83.59 19.7402 87.1717 23.322 87.1717 27.7402V74.3389C87.1717 78.7572 83.59 82.3389 79.1717 82.3389H40C35.5817 82.3389 32 78.7572 32 74.3389V27.7402ZM57.1717 42.7402C57.1717 46.6062 53.8138 49.7402 49.6717 49.7402C45.5296 49.7402 42.1717 46.6062 42.1717 42.7402C42.1717 38.8742 45.5296 35.7402 49.6717 35.7402C53.8138 35.7402 57.1717 38.8742 57.1717 42.7402ZM36.1717 60.8153C37.2808 58.3975 40.7688 54.8201 45.7381 54.3677C51.977 53.7997 55.3044 57.8295 56.5522 60.0094C59.8797 55.4423 67.0336 46.8724 72.3575 45.9053C77.6814 44.9381 81.7853 48.4574 83.1717 50.338V72.6975C83.1717 75.4825 80.914 77.7402 78.1289 77.7402H41.2144C38.4294 77.7402 36.1717 75.4825 36.1717 72.6975V60.8153Z",fill:t})]})},d=e=>{const{primary:t,secondary:n}=s();return(0,i.jsxs)("svg",{...e,width:"81",height:"97",viewBox:"0 0 81 85",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M40.98 44C53.1302 44 62.98 34.1503 62.98 22C62.98 9.84974 53.1302 0 40.98 0C28.8297 0 18.98 9.84974 18.98 22C18.98 34.1503 28.8297 44 40.98 44ZM49.23 22L40.98 13.75L32.73 22L40.98 30.25L49.23 22Z",fill:t}),(0,i.jsx)("path",{d:"M2.5 63.1986C12.9105 63.1986 20.7173 53.0581 20.7173 53.0581C20.7173 53.0581 28.5241 63.1986 38.9346 63.1986C49.3409 63.1986 59.7514 53.0581 59.7514 53.0581C59.7514 53.0581 70.1619 63.1986 77.9687 63.1986M2.5 82.2504C12.9105 82.2504 20.7173 72.1099 20.7173 72.1099C20.7173 72.1099 28.5241 82.2504 38.9346 82.2504C49.3409 82.2504 59.7514 72.1099 59.7514 72.1099C59.7514 72.1099 70.1619 82.2504 77.9687 82.2504",stroke:n,strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round"})]})},c=e=>{const{primary:t,secondary:n}=s();return(0,i.jsxs)("svg",{...e,width:"91",height:"80",viewBox:"0 0 91 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 0C1.61929 0 0.5 1.11929 0.5 2.5C0.5 3.88071 1.61929 5 3 5L57 5C58.3807 5.00001 59.5 3.88072 59.5 2.50001C59.5 1.11929 58.3807 5.06009e-06 57 4.93939e-06L3 0ZM7.51953 11.1055H10.5143C13.5091 11.1055 15.0065 12.6029 15.0065 15.5977V18.5924C15.0065 21.5872 13.5091 23.0846 10.5143 23.0846H7.51953C4.52474 23.0846 3.02734 21.5872 3.02734 18.5924V15.5977C3.02734 12.6029 4.52474 11.1055 7.51953 11.1055ZM31.4779 11.1055H28.4831C25.4883 11.1055 23.9909 12.6029 23.9909 15.5977V18.5924C23.9909 21.5872 25.4883 23.0846 28.4831 23.0846H31.4779C34.4726 23.0846 35.97 21.5872 35.97 18.5924V15.5977C35.97 12.6029 34.4726 11.1055 31.4779 11.1055ZM49.4466 11.1055H52.4414C55.4362 11.1055 56.9336 12.6029 56.9336 15.5977V18.5924C56.9336 21.5872 55.4362 23.0846 52.4414 23.0846H49.4466C46.4518 23.0846 44.9544 21.5872 44.9544 18.5924V15.5977C44.9544 12.6029 46.4518 11.1055 49.4466 11.1055ZM10.5143 31.47H7.51953C4.52474 31.47 3.02734 32.9674 3.02734 35.9622V38.957C3.02734 41.9518 4.52474 43.4492 7.51953 43.4492H10.5143C13.5091 43.4492 15.0065 41.9518 15.0065 38.957V35.9622C15.0065 32.9674 13.5091 31.47 10.5143 31.47ZM28.4831 31.47H31.4779C34.4726 31.47 35.97 32.9674 35.97 35.9622V38.957C35.97 41.9518 34.4726 43.4492 31.4779 43.4492H28.4831C25.4883 43.4492 23.9909 41.9518 23.9909 38.957V35.9622C23.9909 32.9674 25.4883 31.47 28.4831 31.47ZM52.4414 31.47H49.4466C46.4518 31.47 44.9544 32.9674 44.9544 35.9622V38.957C44.9544 41.1067 45.726 42.4849 47.2691 43.0915C49.7015 39.5566 52.9858 36.6532 56.8257 34.6779C56.4335 32.5393 54.9721 31.47 52.4414 31.47Z",fill:n}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M68.7031 79.8125C80.8534 79.8125 90.7031 69.9628 90.7031 57.8125C90.7031 45.6622 80.8534 35.8125 68.7031 35.8125C56.5529 35.8125 46.7031 45.6622 46.7031 57.8125C46.7031 69.9628 56.5529 79.8125 68.7031 79.8125ZM76.9524 57.8122L68.7027 49.5625L60.4531 57.8122L68.7027 66.0619L76.9524 57.8122Z",fill:t})]})};var u=n(20128),p=n(82663),h=n(63933),v=n(59068),g=n(82746),f=n(59793);const m={nft:{title:(0,i.jsx)(p.Trans,{i18nKey:"nfts.noneYet"}),subtitle:(0,i.jsx)(p.Trans,{i18nKey:"nft.buyTransferNFTToStart"}),actionText:(0,i.jsx)(p.Trans,{i18nKey:"nft.explore"}),urlPath:"/nfts",icon:(0,i.jsx)(a,{})},token:{title:(0,i.jsx)(p.Trans,{i18nKey:"tokens.selector.empty.title"}),subtitle:(0,i.jsx)(p.Trans,{i18nKey:"nft.buyTransferTokensToStart"}),actionText:(0,i.jsx)(p.Trans,{i18nKey:"common.exploreTokens"}),urlPath:"/tokens",icon:(0,i.jsx)(c,{})},activity:{title:(0,i.jsx)(p.Trans,{i18nKey:"common.noActivity"}),subtitle:(0,i.jsx)(p.Trans,{i18nKey:"nft.willAppearHere"}),icon:(0,i.jsx)(l,{})},pool:{title:(0,i.jsx)(p.Trans,{i18nKey:"nft.noPools"}),subtitle:(0,i.jsx)(p.Trans,{i18nKey:"pool.openToStart"}),actionText:(0,i.jsx)(p.Trans,{i18nKey:"pool.newPosition.plus"}),urlPath:"/pool",icon:(0,i.jsx)(d,{})}},x=({type:e="nft",onNavigateClick:t})=>{const n=(0,h.s0)(),o=m[e],r=(0,u.useCallback)(()=>{var e;o.urlPath&&(null===(e=t)||void 0===e||e(),n(o.urlPath))},[o.urlPath,n,t]);return(0,i.jsxs)(g.Flex,{alignItems:"center",justifyContent:"center",height:"100%",width:"100%",px:"$spacing12",$sm:{pt:"$spacing8"},children:[o.icon,(0,i.jsx)(f.Text,{variant:"subheading2",textAlign:"center",mt:"$spacing12",children:o.title}),(0,i.jsx)(f.Text,{variant:"body3",textAlign:"center",mt:"$spacing8",color:"$neutral2",children:o.subtitle}),o.actionText&&(0,i.jsx)(g.Flex,{mt:"$spacing20",children:(0,i.jsx)(v.z,{"data-testid":"nft-explore-nfts-button",variant:"branded",onPress:r,children:o.actionText})})]})}}}]);
//# sourceMappingURL=9672.32aee907.chunk.js.map