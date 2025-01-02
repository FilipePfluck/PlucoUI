"use strict";(self.webpackChunkpluco_ui_2=self.webpackChunkpluco_ui_2||[]).push([[5945],{"./src/components/primitives/overlays/Tooltip/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),tooltip_root=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/tooltip/tooltip-root.js"),tooltip_trigger=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/tooltip/tooltip-trigger.js"),portal=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/portal/portal.js"),tooltip_positioner=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/tooltip/tooltip-positioner.js"),tooltip_arrow_tip=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/tooltip/tooltip-arrow-tip.js"),tooltip=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/tooltip/tooltip.js"),utils=__webpack_require__("./panda/utils.ts"),pluco=__webpack_require__("./src/pluco.ts"),css=__webpack_require__("./styled-system/css/index.mjs");const styles=(0,pluco.g)(tooltip,{Content:(0,css.Fj)({base:{rounded:"md",px:"4",py:"2",fontSize:"sm",color:"fg",bg:"bg.surface",boxShadow:"sm",userSelect:"none",...utils.U}}),Arrow:(0,css.Fj)({base:{"--arrow-background":"colors.bg.surface","--arrow-size":"10px"}})}),Tooltip=({children,message,...props})=>(0,jsx_runtime.jsxs)(tooltip_root.s,{...props,children:[(0,jsx_runtime.jsx)(tooltip_trigger.k,{children}),(0,jsx_runtime.jsx)(portal.Z,{children:(0,jsx_runtime.jsx)(tooltip_positioner.o,{children:(0,jsx_runtime.jsxs)(styles.Content,{children:[(0,jsx_runtime.jsx)(styles.Arrow,{children:(0,jsx_runtime.jsx)(tooltip_arrow_tip.M,{})}),message]})})})]});Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{message:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};var jsx=__webpack_require__("./styled-system/jsx/index.mjs");const index_stories={component:Tooltip},Primary={render:()=>(0,jsx_runtime.jsxs)(jsx.so,{gap:"4",children:[(0,jsx_runtime.jsx)(Tooltip,{message:"Orange",children:"🍊"}),(0,jsx_runtime.jsx)(Tooltip,{message:"Apple",children:"🍎"}),(0,jsx_runtime.jsx)(Tooltip,{message:"Grape",children:"🍇"}),(0,jsx_runtime.jsx)(Tooltip,{message:"Mango",children:"🥭"})]})},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex gap="4">\n      <Tooltip message="Orange">🍊</Tooltip>\n      <Tooltip message="Apple">🍎</Tooltip>\n      <Tooltip message="Grape">🍇</Tooltip>\n      <Tooltip message="Mango">🥭</Tooltip>\n    </Flex>\n}',...Primary.parameters?.docs?.source}}}},"./panda/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>menuContentBaseStyles,U:()=>slideAnimation});var _styled_system_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styled-system/css/index.mjs");const slideAnimation=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({_open:{_top:{animation:"slideDownAndFadeIn"},_right:{animation:"slideLeftAndFadeIn"},_bottom:{animation:"slideUpAndFadeIn"},_left:{animation:"slideRightAndFadeIn"}},_closed:{_top:{animation:"slideDownAndFadeOut"},_right:{animation:"slideLeftAndFadeOut"},_bottom:{animation:"slideUpAndFadeOut"},_left:{animation:"slideRightAndFadeOut"}}}),menuContentBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({bg:"bg.surface",rounded:"md",boxShadow:"lg"})},"./src/pluco.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Pluco});var _styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styled-system/jsx/index.mjs");const Pluco=(ArkComponent,config)=>{const result={};return Object.keys(ArkComponent).forEach((key=>{const componentConfig=config[key];componentConfig?Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key],componentConfig)}):Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key])})})),result}}}]);