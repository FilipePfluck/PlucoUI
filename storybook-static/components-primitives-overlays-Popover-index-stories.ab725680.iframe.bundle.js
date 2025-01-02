"use strict";(self.webpackChunkpluco_ui_2=self.webpackChunkpluco_ui_2||[]).push([[3739],{"./src/components/primitives/overlays/Popover/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),popover_root=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/popover/popover-root.js"),popover_trigger=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/popover/popover-trigger.js"),Button=__webpack_require__("./src/components/primitives/forms/buttons/Button/index.tsx"),portal=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/portal/portal.js"),popover_positioner=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/popover/popover-positioner.js"),popover_arrow_tip=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/popover/popover-arrow-tip.js"),popover=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/popover/popover.js"),css=__webpack_require__("./styled-system/css/index.mjs"),jsx=__webpack_require__("./styled-system/jsx/index.mjs"),utils=__webpack_require__("./panda/utils.ts"),pluco=__webpack_require__("./src/pluco.ts");const contentStyles=(0,css.Fj)({base:{display:"flex",position:"relative",flexDirection:"column",gap:"4",p:"6",maxH:"85vh",...utils.G,...utils.U,"&[hidden]":{opacity:0,visibility:"hidden"},transition:"0.2s"},variants:{width:{auto:{},sm:{w:"32"},md:{w:"64"},lg:{w:"80"},full:{w:"full"}}},defaultVariants:{width:"md"}}),styles=(0,pluco.g)(popover,{Content:contentStyles,Arrow:(0,css.Fj)({base:{"--arrow-background":"colors.bg.surface","--arrow-size":"10px"}}),CloseTrigger:(0,css.Fj)({base:{position:"absolute",top:"16px",right:"16px"}}),Title:(0,css.Fj)({base:{textStyle:"headingSm",color:"fg.important"}}),Description:(0,css.Fj)({base:{textStyle:"bodyMd",color:"fg"}})}),Header=(0,jsx.I4)("header",{base:{display:"flex",flexDir:"column",gap:"2"}});var IconButton=__webpack_require__("./src/components/primitives/forms/buttons/IconButton/index.tsx"),x=__webpack_require__("./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-65a56d0e-20241020/node_modules/lucide-react/dist/esm/icons/x.js");const PopoverHeader=({title,description})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(title||description)&&(0,jsx_runtime.jsxs)(Header,{children:[title&&(0,jsx_runtime.jsx)(styles.Title,{children:title}),description&&(0,jsx_runtime.jsx)(styles.Description,{children:description})]})}),PopoverContent=({children,width,title,description,...props})=>(0,jsx_runtime.jsx)(portal.Z,{children:(0,jsx_runtime.jsx)(popover_positioner.U,{children:(0,jsx_runtime.jsxs)(styles.Content,{width,...props,children:[(0,jsx_runtime.jsx)(PopoverHeader,{title,description}),children,(0,jsx_runtime.jsx)(styles.CloseTrigger,{asChild:!0,children:(0,jsx_runtime.jsx)(IconButton.K,{intent:"ghost","aria-label":"close",children:(0,jsx_runtime.jsx)(x.A,{size:16})})}),(0,jsx_runtime.jsx)(styles.Arrow,{children:(0,jsx_runtime.jsx)(popover_arrow_tip.A,{})})]})})});PopoverContent.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""}}};const ExamplePopover=()=>(0,jsx_runtime.jsxs)(popover_root.y,{positioning:{gutter:24},children:[(0,jsx_runtime.jsx)(popover_trigger.W,{asChild:!0,children:(0,jsx_runtime.jsx)(Button.$,{children:"Open Popover"})}),(0,jsx_runtime.jsx)(PopoverContent,{title:"This is a title",description:"This is a description",children:"This is a popover this is a popover this is a popover this is a popover"})]}),index_stories={component:ExamplePopover},Example={render:ExamplePopover},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  render: ExamplePopover\n}",...Example.parameters?.docs?.source}}}},"./panda/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>menuContentBaseStyles,U:()=>slideAnimation});var _styled_system_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styled-system/css/index.mjs");const slideAnimation=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({_open:{_top:{animation:"slideDownAndFadeIn"},_right:{animation:"slideLeftAndFadeIn"},_bottom:{animation:"slideUpAndFadeIn"},_left:{animation:"slideRightAndFadeIn"}},_closed:{_top:{animation:"slideDownAndFadeOut"},_right:{animation:"slideLeftAndFadeOut"},_bottom:{animation:"slideUpAndFadeOut"},_left:{animation:"slideRightAndFadeOut"}}}),menuContentBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({bg:"bg.surface",rounded:"md",boxShadow:"lg"})},"./src/components/primitives/forms/buttons/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),css=__webpack_require__("./styled-system/css/index.mjs"),jsx=__webpack_require__("./styled-system/jsx/index.mjs"),css_raw=__webpack_require__("./src/components/primitives/forms/buttons/css.raw.ts");const buttonStyles=(0,css.Fj)({base:{...css_raw.ku},variants:{intent:{primary:{...css_raw.C3},secondary:{...css_raw.Me},danger:{...css_raw.zz},ghost:{...css_raw.He},link:{...css_raw.o0}},size:{sm:{p:"2",gap:"2",h:"8",fontSize:"sm"},md:{p:"3",gap:"3",h:"10",fontSize:"md"},lg:{p:"4",gap:"4",h:"12",fontSize:"lg"}},full:{true:{w:"full"},false:{w:"max-content"}}},defaultVariants:{intent:"primary",size:"md",full:!1}}),ButtonContainer=(0,jsx.I4)("button",buttonStyles),Button=({children,...props})=>(0,jsx_runtime.jsx)(ButtonContainer,{...props,children});Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{css:{required:!1,tsType:{name:"union",raw:"SystemStyleObject | SystemStyleObject[] | undefined",elements:[{name:"SystemStyleObject"},{name:"Array",elements:[{name:"SystemStyleObject"}],raw:"SystemStyleObject[]"},{name:"undefined"}]},description:""}}}},"./src/components/primitives/forms/buttons/IconButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>IconButton});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),css=__webpack_require__("./styled-system/css/index.mjs"),jsx=__webpack_require__("./styled-system/jsx/index.mjs"),css_raw=__webpack_require__("./src/components/primitives/forms/buttons/css.raw.ts");const iconButtonStyles=(0,css.Fj)({base:{...css_raw.ku},variants:{intent:{primary:{...css_raw.C3},secondary:{...css_raw.Me},danger:{...css_raw.zz},ghost:{...css_raw.He},link:{...css_raw.o0}},size:{sm:{p:"1",gap:"1",fontSize:"xs",iconSize:"16px",h:"8",w:"8"},md:{p:"2",gap:"2",fontSize:"sm",iconSize:"20px",h:"10",w:"10"},lg:{p:"3",gap:"3",fontSize:"md",iconSize:"24px",h:"12",w:"12"}}},defaultVariants:{intent:"primary",size:"md"}}),IconButtonContainer=(0,jsx.I4)("button",iconButtonStyles),IconButton=({children,...props})=>(0,jsx_runtime.jsx)(IconButtonContainer,{...props,children});IconButton.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{css:{required:!1,tsType:{name:"union",raw:"SystemStyleObject | SystemStyleObject[] | undefined",elements:[{name:"SystemStyleObject"},{name:"Array",elements:[{name:"SystemStyleObject"}],raw:"SystemStyleObject[]"},{name:"undefined"}]},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:""}}}},"./src/components/primitives/forms/buttons/css.raw.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C3:()=>primaryButtonBaseStyles,He:()=>ghostButtonBaseStyles,Me:()=>secondaryButtonBaseStyles,ku:()=>buttonBaseStyles,o0:()=>linkButtonBaseStyles,zz:()=>dangerButtonBaseStyles});var _styled_system_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styled-system/css/index.mjs");const buttonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({display:"flex",center:"flex",rounded:"md",h:"min-content",textStyle:"buttonMd",transition:"background, border-color 0.2s",cursor:"pointer",borderWidth:"1px",borderStyle:"solid",bg:{base:"var(--btn-bg)",_hover:"var(--btn-bg-hover)"},color:"var(--btn-color)",iconColor:"var(--btn-color)",borderColor:{base:"var(--btn-border)",_hover:"var(--btn-border-hover)"},_disabled:{bg:{base:"var(--btn-bg-disabled)",_hover:"var(--btn-bg-disabled)"},color:"var(--btn-color-muted)",iconColor:"var(--btn-color-muted)",borderColor:{base:"var(--btn-border-disabled)",_hover:"var(--btn-border-disabled)"},cursor:"not-allowed",userSelect:"none"}}),primaryButtonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({"--btn-bg":"colors.bg.brand","--btn-bg-hover":"colors.bg.brand.hovered","--btn-bg-disabled":"colors.bg.brand.disabled","--btn-color":"white","--btn-color-muted":"colors.fg.disabled","--btn-border":"colors.bg.brand","--btn-border-hover":"colors.bg.brand.hovered","--btn-border-disabled":"transparent"}),secondaryButtonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({"--btn-bg":"colors.bg.surface","--btn-bg-hover":"colors.bg.surface.hovered","--btn-bg-disabled":"colors.bg.disabled","--btn-color":"colors.fg","--btn-color-muted":"colors.fg.disabled","--btn-border":"colors.border","--btn-border-hover":"colors.border","--btn-border-disabled":"colors.border.disabled"}),dangerButtonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({"--btn-bg":"colors.bg.danger","--btn-bg-hover":"colors.bg.danger.hovered","--btn-bg-disabled":"colors.bg.danger.disabled","--btn-color":"white","--btn-color-muted":"colors.fg.disabled","--btn-border":"colors.bg.danger","--btn-border-hover":"colors.bg.danger.hovered","--btn-border-disabled":"transparent"}),ghostButtonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({"--btn-bg":"transparent","--btn-bg-hover":"colors.bg.surface.hovered","--btn-bg-disabled":"transparent","--btn-color":"colors.fg","--btn-color-muted":"colors.fg.disabled","--btn-border":"transparent","--btn-border-hover":"colors.bg.surface.hovered","--btn-border-disabled":"transparent"}),linkButtonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({"--btn-bg":"transparent","--btn-bg-hover":"transparent","--btn-bg-disabled":"transparent","--btn-color":"colors.fg","--btn-color-muted":"colors.fg.disabled","--btn-border":"transparent","--btn-border-hover":"transparent","--btn-border-disabled":"transparent"})},"./src/pluco.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Pluco});var _styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styled-system/jsx/index.mjs");const Pluco=(ArkComponent,config)=>{const result={};return Object.keys(ArkComponent).forEach((key=>{const componentConfig=config[key];componentConfig?Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key],componentConfig)}):Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key])})})),result}}}]);