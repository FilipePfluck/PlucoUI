"use strict";(self.webpackChunkpluco_ui_2=self.webpackChunkpluco_ui_2||[]).push([[3560],{"./src/components/primitives/overlays/HoverCard/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),hover_card_root=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/hover-card/hover-card-root.js"),hover_card_trigger=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/hover-card/hover-card-trigger.js"),portal=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/portal/portal.js"),hover_card_positioner=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/hover-card/hover-card-positioner.js"),hover_card_arrow_tip=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/hover-card/hover-card-arrow-tip.js"),hover_card=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/hover-card/hover-card.js"),utils=__webpack_require__("./panda/utils.ts"),pluco=__webpack_require__("./src/pluco.ts"),css=__webpack_require__("./styled-system/css/index.mjs");const styles=(0,pluco.g)(hover_card,{Content:(0,css.Fj)({base:{display:"flex",position:"relative",flexDirection:"column",gap:"4",p:"6",maxH:"85vh",w:"64",...utils.G,...utils.U,"&[hidden]":{opacity:0,visibility:"hidden"},transition:"0.2s"}}),Arrow:(0,css.Fj)({base:{"--arrow-background":"colors.bg.surface","--arrow-size":"10px"}})}),HoverCardContent=({children,...props})=>(0,jsx_runtime.jsx)(portal.Z,{children:(0,jsx_runtime.jsx)(hover_card_positioner.l,{children:(0,jsx_runtime.jsxs)(styles.Content,{...props,children:[(0,jsx_runtime.jsx)(styles.Arrow,{children:(0,jsx_runtime.jsx)(hover_card_arrow_tip.$,{})}),children]})})});HoverCardContent.__docgenInfo={description:"",methods:[],displayName:"HoverCardContent"};const ExampleHoverCard=()=>(0,jsx_runtime.jsxs)(hover_card_root.z,{positioning:{gutter:24},children:[(0,jsx_runtime.jsx)(hover_card_trigger.d,{children:"Hover me"}),(0,jsx_runtime.jsx)(HoverCardContent,{children:"This is a HoverCard this is a Hover Card this is a Hover Card this is a Hover Card this is a Hover Card"})]}),index_stories={component:ExampleHoverCard},Example={render:ExampleHoverCard},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  render: ExampleHoverCard\n}",...Example.parameters?.docs?.source}}}},"./panda/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>menuContentBaseStyles,U:()=>slideAnimation});var _styled_system_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styled-system/css/index.mjs");const slideAnimation=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({_open:{_top:{animation:"slideDownAndFadeIn"},_right:{animation:"slideLeftAndFadeIn"},_bottom:{animation:"slideUpAndFadeIn"},_left:{animation:"slideRightAndFadeIn"}},_closed:{_top:{animation:"slideDownAndFadeOut"},_right:{animation:"slideLeftAndFadeOut"},_bottom:{animation:"slideUpAndFadeOut"},_left:{animation:"slideRightAndFadeOut"}}}),menuContentBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({bg:"bg.surface",rounded:"md",boxShadow:"lg"})},"./src/pluco.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Pluco});var _styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styled-system/jsx/index.mjs");const Pluco=(ArkComponent,config)=>{const result={};return Object.keys(ArkComponent).forEach((key=>{const componentConfig=config[key];componentConfig?Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key],componentConfig)}):Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key])})})),result}}}]);