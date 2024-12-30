"use strict";(self.webpackChunkpluco_ui_2=self.webpackChunkpluco_ui_2||[]).push([[44],{"./src/components/primitives/forms/Combobox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>Combobox});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/index.js"),components_collection=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/collection.js"),portal=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/portal/portal.js"),chevrons_up_down=__webpack_require__("./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-65a56d0e-20241020/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js"),pluco=__webpack_require__("./src/pluco.ts"),css=__webpack_require__("./styled-system/css/index.mjs"),jsx=__webpack_require__("./styled-system/jsx/index.mjs"),combobox=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/combobox/combobox.js");const styles=(0,pluco.g)(combobox,{Root:(0,css.Fj)({base:{display:"flex",flexDirection:"column",gap:"3"}}),Label:(0,css.Fj)({base:{textStyle:"headingXs",color:"fg.important"}}),Control:(0,css.Fj)({base:{height:"min-content"}}),Input:(0,css.Fj)({base:{}}),Trigger:(0,css.Fj)({base:{iconColor:"fg!",zIndex:"10"}}),Content:(0,css.Fj)({base:{outline:0,bg:"bg.surface",rounded:"md",shadow:"lg",display:"flex",flexDirection:"column",gap:2,p:2,w:"full",h:"calc(14px + 32px * var(--n-of-results))",transition:"0.1s",zIndex:"10","&[hidden]":{display:"none"},_open:{animation:"fadeIn"},_closed:{animation:"fadeOut"}}}),ItemGroup:(0,css.Fj)({base:{display:"flex",flexDir:"column",gap:"0.5"}}),ItemGroupLabel:(0,css.Fj)({base:{textStyle:"headingXs",color:"fg.important",mb:1,px:1,pt:1},variants:{showIndicator:{true:{pl:"8"},false:{}}},defaultVariants:{showIndicator:!1}}),Item:(0,css.Fj)({base:{display:"flex",align:"center",justify:"space-between",px:1,py:"0.5",position:"relative",borderRadius:"sm",cursor:"pointer",transitionDuration:"fast",transitionProperty:"background, color, height, padding",transitionTimingFunction:"default",animation:"comboboxItemAppear",_selected:{color:"fg.important"},_hover:{background:"bg.brand",color:"white",iconColor:"white"},_highlighted:{background:"bg.brand",color:"white",iconColor:"white"},_disabled:{bg:"transparent",color:"fg.disabled",cursor:"not-allowed",_hover:{background:"transparent",color:"fg.disabled"}}},variants:{showIndicator:{true:{pl:"8"},false:{}}},defaultVariants:{showIndicator:!1}}),ItemText:(0,css.Fj)({base:{color:"inherit"}})}),EmptyState=(0,jsx.I4)("div",{base:{display:"flex",align:"center",justify:"space-between",px:1,py:"0.5",position:"relative",borderRadius:"sm",cursor:"pointer"}});var Input=__webpack_require__("./src/components/primitives/forms/inputs/Input/index.tsx"),IconButton=__webpack_require__("./src/components/primitives/forms/buttons/IconButton/index.tsx"),console=__webpack_require__("./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");const Combobox=({data,emptyState="No results match your search...",filterOptionsIfSelected=!0,...props})=>{const[items,setItems]=(0,react.useState)(data),[selectedFromList,setSelectedFromList]=(0,react.useState)(!1),collection=(0,react.useMemo)((()=>(0,components_collection.R)({items})),[items]);return(0,jsx_runtime.jsxs)(styles.Root,{onInputValueChange:details=>{const search=details.inputValue;setItems(filterOptionsIfSelected||!selectedFromList?data.filter((item=>item.label.toLowerCase().includes(search.toLowerCase()))):data),setSelectedFromList(!1)},onValueChange:()=>setSelectedFromList(!0),allowCustomValue:!0,...props,collection,children:[(0,jsx_runtime.jsx)(styles.Control,{children:(0,jsx_runtime.jsx)(styles.Input,{width:"lg",asChild:!0,children:(0,jsx_runtime.jsx)(Input.p,{endElement:(0,jsx_runtime.jsx)(styles.Trigger,{asChild:!0,tabIndex:0,children:(0,jsx_runtime.jsx)(IconButton.K,{"aria-label":"Open combobox list",intent:"link",size:"sm",children:(0,jsx_runtime.jsx)(chevrons_up_down.A,{strokeWidth:1.5,size:18})})})})})}),(0,jsx_runtime.jsx)(portal.Z,{children:(0,jsx_runtime.jsx)(styles.Positioner,{children:(0,jsx_runtime.jsx)(styles.Content,{style:{"--n-of-results":`${items.length||1}`},children:(0,jsx_runtime.jsxs)(styles.ItemGroup,{children:[items.map((item=>(0,jsx_runtime.jsx)(styles.Item,{onClick:()=>console.log("Click!"),item,children:(0,jsx_runtime.jsx)(styles.ItemText,{children:item.label})},item.label))),0===items.length&&(0,jsx_runtime.jsx)(EmptyState,{css:{animation:"none"},children:emptyState})]})})})})]})};Combobox.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ComboboxItemProps"}],raw:"ComboboxItemProps[]"},description:""},emptyState:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'No results match your search...'",computed:!1}},filterOptionsIfSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}}},"./src/components/primitives/forms/buttons/IconButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>IconButton});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),css=__webpack_require__("./styled-system/css/index.mjs"),jsx=__webpack_require__("./styled-system/jsx/index.mjs"),css_raw=__webpack_require__("./src/components/primitives/forms/buttons/css.raw.ts");const iconButtonStyles=(0,css.Fj)({base:{...css_raw.ku},variants:{intent:{primary:{...css_raw.C3},secondary:{...css_raw.Me},danger:{...css_raw.zz},ghost:{...css_raw.He},link:{...css_raw.o0}},size:{sm:{p:"1",gap:"1",fontSize:"xs",iconSize:"16px",h:"8",w:"8"},md:{p:"2",gap:"2",fontSize:"sm",iconSize:"20px",h:"10",w:"10"},lg:{p:"3",gap:"3",fontSize:"md",iconSize:"24px",h:"12",w:"12"}}},defaultVariants:{intent:"primary",size:"md"}}),IconButtonContainer=(0,jsx.I4)("button",iconButtonStyles),IconButton=({children,...props})=>(0,jsx_runtime.jsx)(IconButtonContainer,{...props,children});IconButton.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{css:{required:!1,tsType:{name:"union",raw:"SystemStyleObject | SystemStyleObject[] | undefined",elements:[{name:"SystemStyleObject"},{name:"Array",elements:[{name:"SystemStyleObject"}],raw:"SystemStyleObject[]"},{name:"undefined"}]},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:""}}}},"./src/components/primitives/forms/buttons/css.raw.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C3:()=>primaryButtonBaseStyles,He:()=>ghostButtonBaseStyles,Me:()=>secondaryButtonBaseStyles,ku:()=>buttonBaseStyles,o0:()=>linkButtonBaseStyles,zz:()=>dangerButtonBaseStyles});var _styled_system_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styled-system/css/index.mjs");const buttonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({display:"flex",center:"flex",rounded:"md",h:"min-content",textStyle:"buttonMd",transition:"background, border-color 0.2s",cursor:"pointer",borderWidth:"1px",borderStyle:"solid",bg:{base:"var(--btn-bg)",_hover:"var(--btn-bg-hover)"},color:"var(--btn-color)",iconColor:"var(--btn-color)",borderColor:{base:"var(--btn-border)",_hover:"var(--btn-border-hover)"},_disabled:{bg:{base:"var(--btn-bg-disabled)",_hover:"var(--btn-bg-disabled)"},color:"var(--btn-color-muted)",iconColor:"var(--btn-color-muted)",borderColor:{base:"var(--btn-border-disabled)",_hover:"var(--btn-border-disabled)"},cursor:"not-allowed",userSelect:"none"}}),primaryButtonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({"--btn-bg":"colors.bg.brand","--btn-bg-hover":"colors.bg.brand.hovered","--btn-bg-disabled":"colors.bg.brand.disabled","--btn-color":"white","--btn-color-muted":"colors.fg.disabled","--btn-border":"colors.bg.brand","--btn-border-hover":"colors.bg.brand.hovered","--btn-border-disabled":"transparent"}),secondaryButtonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({"--btn-bg":"colors.bg.surface","--btn-bg-hover":"colors.bg.surface.hovered","--btn-bg-disabled":"colors.bg.disabled","--btn-color":"colors.fg","--btn-color-muted":"colors.fg.disabled","--btn-border":"colors.border","--btn-border-hover":"colors.border","--btn-border-disabled":"colors.border.disabled"}),dangerButtonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({"--btn-bg":"colors.bg.danger","--btn-bg-hover":"colors.bg.danger.hovered","--btn-bg-disabled":"colors.bg.danger.disabled","--btn-color":"white","--btn-color-muted":"colors.fg.disabled","--btn-border":"colors.bg.danger","--btn-border-hover":"colors.bg.danger.hovered","--btn-border-disabled":"transparent"}),ghostButtonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({"--btn-bg":"transparent","--btn-bg-hover":"colors.bg.surface.hovered","--btn-bg-disabled":"transparent","--btn-color":"colors.fg","--btn-color-muted":"colors.fg.disabled","--btn-border":"transparent","--btn-border-hover":"colors.bg.surface.hovered","--btn-border-disabled":"transparent"}),linkButtonBaseStyles=_styled_system_css__WEBPACK_IMPORTED_MODULE_0__.AH.raw({"--btn-bg":"transparent","--btn-bg-hover":"transparent","--btn-bg-disabled":"transparent","--btn-color":"colors.fg","--btn-color-muted":"colors.fg.disabled","--btn-border":"transparent","--btn-border-hover":"transparent","--btn-border-disabled":"transparent"})},"./src/components/primitives/forms/inputs/Input/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input_Input});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/index.js"),jsx=__webpack_require__("./styled-system/jsx/index.mjs");const InputOuterContainer=(0,jsx.I4)("div",{base:{display:"flex",align:"center"}}),InputContainer=(0,jsx.I4)("label",{base:{maxW:"full",bg:"bg.surface",boxShadow:"sm",transition:"0.2s",cursor:"text",display:"flex",align:"center",gap:"2",borderWidth:"1px",borderColor:{base:"border",_focusWithin:"border.brand",_invalidWithin:"border.danger"},"&:has(:disabled)":{bg:"bg.disabled",borderColor:"border.disabled",cursor:"not-allowed"},rounded:"md",".input-outer-container > &":{"&:not(:first-child)":{borderStartRadius:"0px"},"&:not(:last-child)":{borderEndRadius:"0px"}}},variants:{size:{xs:{px:"1",h:"8"},sm:{px:"2",h:"9"},md:{px:"3",h:"10"},lg:{px:"4",h:"11"}},full:{true:{w:"full"},false:{w:"max-content"}}},defaultVariants:{full:!0,size:"md"}}),Input=(0,jsx.I4)("input",{base:{maxW:"full",w:"full",bg:"transparent",color:"fg",fontSize:"sm",outline:"none",_placeholder:{color:"fg.unimportant",fontSize:"sm",userSelect:"none"},_disabled:{cursor:"not-allowed",color:"fg.disabled","&::placeholder":{color:"fg.disabled"}},_autofill:{boxShadow:"0 0 0px 1000px token(colors.bg.surface) inset",WebkitTextFillColor:"token(colors.fg)",caretColor:"fg"},transition:"border-color 0.2s"}}),InputAditionalElement=(0,jsx.I4)("div",{base:{"& svg":{transition:"0.2s"},".group:has(:disabled) &":{iconColor:"fg.disabled"},'.group:has([aria-invalid="true"]) &':{iconColor:"border.danger"},".group:has(:focus-within) &":{iconColor:"border.brand"}}}),InputAddon=(0,jsx.I4)("div",{base:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap",textStyle:"bodySm",userSelect:"none",color:"fg.unimportant",bg:"bg.surface.hovered",borderWidth:"1px",borderColor:"border"},variants:{size:{xs:{px:"1",h:"8"},sm:{px:"2",h:"9"},md:{px:"3",h:"10"},lg:{px:"4",h:"11"}},side:{start:{borderStartRadius:"md",borderEndWidth:"0px"},end:{borderEndRadius:"md",borderStartWidth:"0px"}}},defaultVariants:{size:"md",side:"start"}}),Input_Input=({size,full,startAddon,endAddon,startElement,endElement,...props})=>{const OuterContainer=startAddon||endAddon?InputOuterContainer:react.Fragment;return(0,jsx_runtime.jsxs)(OuterContainer,{...(startAddon||endAddon)&&{className:"input-outer-container"},children:[startAddon&&(0,jsx_runtime.jsx)(InputAddon,{side:"start",children:startAddon}),(0,jsx_runtime.jsxs)(InputContainer,{size,full,className:"group",children:[startElement&&(0,jsx_runtime.jsx)(InputAditionalElement,{children:startElement}),(0,jsx_runtime.jsx)(Input,{...props}),endElement&&(0,jsx_runtime.jsx)(InputAditionalElement,{children:endElement})]}),endAddon&&(0,jsx_runtime.jsx)(InputAddon,{side:"end",children:endAddon})]})};Input_Input.__docgenInfo={description:"",methods:[],displayName:"Input"}},"./src/pluco.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Pluco});var _styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styled-system/jsx/index.mjs");const Pluco=(ArkComponent,config)=>{const result={};return Object.keys(ArkComponent).forEach((key=>{const componentConfig=config[key];componentConfig?Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key],componentConfig)}):Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key])})})),result}}}]);