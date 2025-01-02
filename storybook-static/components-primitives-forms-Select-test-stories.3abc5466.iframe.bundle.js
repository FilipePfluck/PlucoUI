"use strict";(self.webpackChunkpluco_ui_2=self.webpackChunkpluco_ui_2||[]).push([[7758],{"./src/components/primitives/forms/Select/test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ShouldClearOptions:()=>ShouldClearOptions,ShouldOpenTheSelect:()=>ShouldOpenTheSelect,ShouldSelectASingleOption:()=>ShouldSelectASingleOption,ShouldSelectAnOption:()=>ShouldSelectAnOption,ShouldSelectMultipleOptions:()=>ShouldSelectMultipleOptions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+test@8.3.6_storybook@8.3.6/node_modules/@storybook/test/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/primitives/forms/Select/index.tsx"),_items__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/primitives/forms/Select/items.ts");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.l,title:"components/primitives/forms/Select/test"},ShouldOpenTheSelect={args:{items:_items__WEBPACK_IMPORTED_MODULE_2__.r,placeholder:"Pick a food"},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement.parentNode),button=canvas.getByRole("combobox");await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(button);const list=canvas.getByRole("listbox");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(list).toBeVisible()))}},ShouldSelectAnOption={args:{items:_items__WEBPACK_IMPORTED_MODULE_2__.r,placeholder:"Pick a food"},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement.parentNode),button=canvas.getByRole("combobox");await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(button);const Apple=canvas.getByRole("option",{name:"Apple"});await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(Apple);const valueText=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(button).getByText("Apple");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(valueText).toBeVisible()))}},ShouldSelectASingleOption={args:{items:_items__WEBPACK_IMPORTED_MODULE_2__.r,placeholder:"Pick a food"},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement.parentNode),button=canvas.getByRole("combobox");await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(button);const Apple=canvas.getByRole("option",{name:"Apple"});await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(Apple),await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(button);const Grapes=canvas.getByRole("option",{name:"Grapes"});await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(Grapes);const valueText=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(button).getByText("Grapes");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(valueText).toBeVisible()))}},ShouldSelectMultipleOptions={args:{items:_items__WEBPACK_IMPORTED_MODULE_2__.r,placeholder:"Pick a food",multiple:!0,width:"lg"},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement.parentNode),button=canvas.getByRole("combobox");await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(button);const Apple=canvas.getByRole("option",{name:"Apple"}),Grapes=canvas.getByRole("option",{name:"Grapes"});await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(Apple),await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(Grapes);const valueText=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(button).getByText("Apple, Grapes");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(valueText).toBeVisible()))}},ShouldClearOptions={args:{items:_items__WEBPACK_IMPORTED_MODULE_2__.r,placeholder:"Pick a food",multiple:!0,width:"lg",clearable:!0},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement.parentNode),button=canvas.getByRole("combobox");await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(button);const Apple=canvas.getByRole("option",{name:"Apple"}),Grapes=canvas.getByRole("option",{name:"Grapes"});await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(Apple),await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(Grapes);const combobox=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(button),clearValue=canvas.getByRole("button",{name:"Clear value"});await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(clearValue);const valueText=combobox.getByText("Pick a food");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(valueText).toBeVisible()))}},__namedExportsOrder=["ShouldOpenTheSelect","ShouldSelectAnOption","ShouldSelectASingleOption","ShouldSelectMultipleOptions","ShouldClearOptions"];ShouldOpenTheSelect.parameters={...ShouldOpenTheSelect.parameters,docs:{...ShouldOpenTheSelect.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: selectItems,\n    placeholder: 'Pick a food'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    // Targetting the parentNode (body)\n    // because the list is rendered inside a Portal\n    // so usually canvasElement wouldn't contain it\n    const canvas = within(canvasElement.parentNode as HTMLElement);\n    const button = canvas.getByRole('combobox');\n    await userEvent.click(button);\n    const list = canvas.getByRole('listbox');\n    await waitFor(() => expect(list).toBeVisible());\n  }\n}",...ShouldOpenTheSelect.parameters?.docs?.source}}},ShouldSelectAnOption.parameters={...ShouldSelectAnOption.parameters,docs:{...ShouldSelectAnOption.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: selectItems,\n    placeholder: 'Pick a food'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement.parentNode as HTMLElement);\n    const button = canvas.getByRole('combobox');\n    await userEvent.click(button);\n    const Apple = canvas.getByRole('option', {\n      name: 'Apple'\n    });\n    await userEvent.click(Apple);\n    const combobox = within(button);\n    const valueText = combobox.getByText('Apple');\n\n    // Not sure if this is the best way\n    // to assert if the correct value is selected\n    await waitFor(() => expect(valueText).toBeVisible());\n  }\n}",...ShouldSelectAnOption.parameters?.docs?.source}}},ShouldSelectASingleOption.parameters={...ShouldSelectASingleOption.parameters,docs:{...ShouldSelectASingleOption.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: selectItems,\n    placeholder: 'Pick a food'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement.parentNode as HTMLElement);\n    const button = canvas.getByRole('combobox');\n    await userEvent.click(button);\n    const Apple = canvas.getByRole('option', {\n      name: 'Apple'\n    });\n    await userEvent.click(Apple);\n    await userEvent.click(button);\n    const Grapes = canvas.getByRole('option', {\n      name: 'Grapes'\n    });\n    await userEvent.click(Grapes);\n    const combobox = within(button);\n    const valueText = combobox.getByText('Grapes');\n\n    // Not sure if this is the best way\n    // to assert if the correct value is selected\n    await waitFor(() => expect(valueText).toBeVisible());\n  }\n}",...ShouldSelectASingleOption.parameters?.docs?.source}}},ShouldSelectMultipleOptions.parameters={...ShouldSelectMultipleOptions.parameters,docs:{...ShouldSelectMultipleOptions.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: selectItems,\n    placeholder: 'Pick a food',\n    multiple: true,\n    width: 'lg'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement.parentNode as HTMLElement);\n    const button = canvas.getByRole('combobox');\n    await userEvent.click(button);\n    const Apple = canvas.getByRole('option', {\n      name: 'Apple'\n    });\n    const Grapes = canvas.getByRole('option', {\n      name: 'Grapes'\n    });\n    await userEvent.click(Apple);\n    await userEvent.click(Grapes);\n    const combobox = within(button);\n    const valueText = combobox.getByText('Apple, Grapes');\n\n    // Not sure if this is the best way\n    // to assert if the correct value is selected\n    await waitFor(() => expect(valueText).toBeVisible());\n  }\n}",...ShouldSelectMultipleOptions.parameters?.docs?.source}}},ShouldClearOptions.parameters={...ShouldClearOptions.parameters,docs:{...ShouldClearOptions.parameters?.docs,source:{originalSource:"{\n  args: {\n    items: selectItems,\n    placeholder: 'Pick a food',\n    multiple: true,\n    width: 'lg',\n    clearable: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement.parentNode as HTMLElement);\n    const button = canvas.getByRole('combobox');\n    await userEvent.click(button);\n    const Apple = canvas.getByRole('option', {\n      name: 'Apple'\n    });\n    const Grapes = canvas.getByRole('option', {\n      name: 'Grapes'\n    });\n    await userEvent.click(Apple);\n    await userEvent.click(Grapes);\n    const combobox = within(button);\n    const clearValue = canvas.getByRole('button', {\n      name: 'Clear value'\n    });\n    await userEvent.click(clearValue);\n    const valueText = combobox.getByText('Pick a food');\n\n    // Not sure if this is the best way\n    // to assert if the correct value is selected\n    await waitFor(() => expect(valueText).toBeVisible());\n  }\n}",...ShouldClearOptions.parameters?.docs?.source}}}},"./src/components/primitives/forms/Select/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Select});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),chevrons_up_down=__webpack_require__("./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-65a56d0e-20241020/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js"),x=__webpack_require__("./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-65a56d0e-20241020/node_modules/lucide-react/dist/esm/icons/x.js"),check=__webpack_require__("./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-65a56d0e-20241020/node_modules/lucide-react/dist/esm/icons/check.js"),pluco=__webpack_require__("./src/pluco.ts"),css=__webpack_require__("./styled-system/css/index.mjs"),jsx=__webpack_require__("./styled-system/jsx/index.mjs"),select_select=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/select/select.js");const styles=(0,pluco.g)(select_select,{Root:(0,css.Fj)({base:{display:"flex",flexDirection:"column",gap:"3"}}),Label:(0,css.Fj)({base:{textStyle:"headingXs",color:"fg.important"}}),Control:(0,css.Fj)({base:{position:"relative"}}),Trigger:(0,css.Fj)({base:{display:"inline-flex",justify:"space-between",align:"center",gap:"4",minH:"10",borderWidth:"1px",borderStyle:"solid",borderColor:{base:"border",_focus:"border.brand"},borderRadius:"md",cursor:"pointer",bg:"bg.surface",boxShadow:"sm",outline:0,position:"relative",transitionDuration:"normal",transitionProperty:"background, box-shadow, border-color",transitionTimingFunction:"default",width:"full",_placeholder:{color:"fg"},"& :where(svg)":{color:"fg"}},variants:{width:{auto:{},sm:{w:"24",py:"2",px:"2","& + button":{"--select-clear-trigger-right":"6px"}},md:{w:"40",py:"2",px:"3","& + button":{"--select-clear-trigger-right":"9px"}},lg:{w:"64",py:"2",px:"4","& + button":{"--select-clear-trigger-right":"12px"}},full:{w:"full",py:"2",px:"4","& + button":{"--select-clear-trigger-right":"12px"}}},size:{xs:{px:"1",h:"8"},sm:{px:"2",h:"9"},md:{px:"3",h:"10"},lg:{px:"4",h:"11"}}},defaultVariants:{width:"md",size:"md"}}),ClearTrigger:(0,css.Fj)({base:{p:"1",position:"absolute",right:"var(--select-clear-trigger-right) !important",top:"50%",transform:"translateY(-50%)"}}),Indicator:(0,css.Fj)({base:{visibility:"visible",'[data-clearable="true"]:not([data-placeholder-shown]) &':{visibility:"hidden"}}}),Content:(0,css.Fj)({base:{outline:0,bg:"bg.surface",rounded:"md",shadow:"lg",display:"flex",flexDirection:"column",gap:2,p:2,zIndex:"10","&[hidden]":{display:"none"},_open:{animation:"fadeIn"},_closed:{animation:"fadeOut"}},variants:{width:{auto:{},sm:{w:"24"},md:{w:"40"},lg:{w:"64"},full:{w:"full"}}},defaultVariants:{width:"md"}}),ItemGroup:(0,css.Fj)({base:{display:"flex",flexDir:"column",gap:"0.5"}}),ItemGroupLabel:(0,css.Fj)({base:{textStyle:"headingXs",color:"fg.important",mb:1,px:1,pt:1},variants:{showIndicator:{true:{pl:"8"},false:{}}},defaultVariants:{showIndicator:!1}}),Item:(0,css.Fj)({base:{display:"flex",align:"center",justify:"space-between",px:1,py:"0.5",position:"relative",borderRadius:"sm",cursor:"pointer",transitionDuration:"fast",transitionProperty:"background, color",transitionTimingFunction:"default",_selected:{color:"fg.important"},_hover:{background:"bg.brand",color:"white",iconColor:"white"},_highlighted:{background:"bg.brand",color:"white",iconColor:"white"},_disabled:{bg:"transparent",color:"fg.disabled",cursor:"not-allowed",_hover:{background:"transparent",color:"fg.disabled"}}},variants:{showIndicator:{true:{pl:"8"},false:{}}},defaultVariants:{showIndicator:!1}}),ItemText:(0,css.Fj)({base:{color:"inherit"}}),ItemIndicator:(0,css.Fj)({base:{position:"absolute",left:"2",top:"50%",transform:"translateY(-50%)"}})}),Separator=(0,jsx.I4)("div",{base:{w:"full",h:"1px",bg:"border"}});var components_collection=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/collection.js"),portal=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/portal/portal.js"),react=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/index.js");const Select=({items:groups,label,placeholder,width,size,clearable=!1,showIndicator=!1,...props})=>{const items=(0,react.useMemo)((()=>{let items=[];return groups.forEach((group=>{items=items.concat(group.items)})),items}),[groups]),collection=(0,react.useMemo)((()=>(0,components_collection.R)({items})),[items]);return(0,jsx_runtime.jsxs)(styles.Root,{...props,collection,children:[label&&(0,jsx_runtime.jsx)(styles.Label,{children:label}),(0,jsx_runtime.jsx)(styles.HiddenSelect,{}),(0,jsx_runtime.jsxs)(styles.Control,{children:[(0,jsx_runtime.jsxs)(styles.Trigger,{size,width,"data-clearable":clearable,children:[(0,jsx_runtime.jsx)(styles.ValueText,{placeholder}),(0,jsx_runtime.jsx)(styles.Indicator,{children:(0,jsx_runtime.jsx)(chevrons_up_down.A,{strokeWidth:1.5,size:18})})]}),clearable&&(0,jsx_runtime.jsx)(styles.ClearTrigger,{children:(0,jsx_runtime.jsx)(x.A,{strokeWidth:1.5,size:18})})]}),(0,jsx_runtime.jsx)(portal.Z,{children:(0,jsx_runtime.jsx)(styles.Positioner,{children:(0,jsx_runtime.jsx)(styles.Content,{width,children:groups.map((({id,items,groupLabel},index)=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(styles.ItemGroup,{id,children:[groupLabel&&(0,jsx_runtime.jsx)(styles.ItemGroupLabel,{showIndicator,children:groupLabel}),items.map((({label,value,...props})=>(0,jsx_runtime.jsxs)(styles.Item,{item:value,showIndicator,...props,children:[showIndicator&&(0,jsx_runtime.jsx)(styles.ItemIndicator,{children:(0,jsx_runtime.jsx)(check.A,{size:14})}),(0,jsx_runtime.jsx)(styles.ItemText,{children:label})]},value)))]},id),index+1!==groups.length&&(0,jsx_runtime.jsx)(Separator,{})]})))})})})]})};Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  groupLabel?: string\n  id: string\n  items: SelectItemProps[]\n}",signature:{properties:[{key:"groupLabel",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"SelectItemProps"}],raw:"SelectItemProps[]",required:!0}}]}}],raw:"{\n  groupLabel?: string\n  id: string\n  items: SelectItemProps[]\n}[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showIndicator:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'auto' | 'sm' | 'md' | 'lg' | 'full'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'full'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""}}}},"./src/components/primitives/forms/Select/items.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>selectItems});const selectItems=[{groupLabel:"Fruits",id:"fruits",items:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Grapes",value:"grapes"},{label:"Pineapple",value:"pineapple"}]},{groupLabel:"Vegetables",id:"vieggies",items:[{label:"Aubergine",value:"aubergine",disabled:!0},{label:"Broccoli",value:"broccoli"},{label:"Carrot",value:"carrot"}]},{groupLabel:"Meats",id:"meats",items:[{label:"Beef",value:"beef"},{label:"Chicken",value:"chicken"},{label:"Lamb",value:"lamb"},{label:"Pork",value:"pork"}]}]},"./src/pluco.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Pluco});var _styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styled-system/jsx/index.mjs");const Pluco=(ArkComponent,config)=>{const result={};return Object.keys(ArkComponent).forEach((key=>{const componentConfig=config[key];componentConfig?Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key],componentConfig)}):Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key])})})),result}}}]);