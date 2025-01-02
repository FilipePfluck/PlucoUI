"use strict";(self.webpackChunkpluco_ui_2=self.webpackChunkpluco_ui_2||[]).push([[3731],{"./src/components/primitives/forms/Checkbox/test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxTests:()=>CheckboxTests,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+test@8.3.6_storybook@8.3.6/node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/primitives/forms/Checkbox/index.tsx").S,title:"components/primitives/forms/Checkbox/test",args:{onSubmit:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},CheckboxTests={args:{label:"I accept the terms and conditions"},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement);await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.tab();const checkbox=canvas.getByRole("checkbox");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(checkbox).toHaveFocus(),await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard("[Space]"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(checkbox).toHaveProperty("checked",!0),await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard("[Space]"),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(checkbox).toHaveProperty("checked",!1)}},__namedExportsOrder=["CheckboxTests"];CheckboxTests.parameters={...CheckboxTests.parameters,docs:{...CheckboxTests.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'I accept the terms and conditions'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    await userEvent.tab();\n    const checkbox = canvas.getByRole('checkbox');\n    await expect(checkbox).toHaveFocus();\n    await userEvent.keyboard('[Space]');\n    await expect(checkbox).toHaveProperty('checked', true);\n    await userEvent.keyboard('[Space]');\n    await expect(checkbox).toHaveProperty('checked', false);\n  }\n}",...CheckboxTests.parameters?.docs?.source}}}},"./src/components/primitives/forms/Checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),pluco=__webpack_require__("./src/pluco.ts"),css=__webpack_require__("./styled-system/css/index.mjs"),checkbox_checkbox=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/checkbox/checkbox.js");const styles=(0,pluco.g)(checkbox_checkbox,{Root:(0,css.Fj)({base:{display:"flex",align:"center",gap:"2"}}),Control:(0,css.Fj)({base:{cursor:"pointer",bg:"bg.surface",h:"6",w:"6",rounded:"md",display:"flex",center:"flex",boxShadow:"sm",borderWidth:"1px",borderStyle:"solid",borderColor:"border",transition:"0.2s border-color",position:"relative",_after:{content:'""',h:"4",w:"4",rounded:"sm",bg:"border.brand",transition:"0.2s",position:"absolute",center:"absolute",opacity:0,transform:"translate(-50%, -50%) scale(50%)"},_checked:{borderColor:"border.brand",_after:{opacity:1,transform:"translate(-50%, -50%) scale(100%)"}},_invalidWithin:{borderColor:"border.danger",_after:{bg:"bg.danger"}},_disabled:{bg:"bg.disabled",borderColor:"border.disabled",cursor:"not-allowed",_after:{bg:"border.disabled"}},_focusVisibleWithin:{outline:"2px solid token(colors.border.ring)"}}}),Label:(0,css.Fj)({base:{color:{base:"fg.important",_disabled:"fg.disabled"},textStyle:"bodySm",cursor:{base:"pointer",_disabled:"not-allowed"}}})});const CheckboxComponent=({label,"aria-invalid":ariaInvalid,"aria-required":ariaRequired,"aria-describedby":ariaDescribedBy,...props},ref)=>(0,jsx_runtime.jsxs)(styles.Root,{ref,...props,children:[(0,jsx_runtime.jsxs)(styles.Control,{"aria-hidden":!1,children:[(0,jsx_runtime.jsx)(styles.Indicator,{}),(0,jsx_runtime.jsx)(styles.HiddenInput,{"aria-invalid":ariaInvalid,"aria-required":ariaRequired,"aria-describedby":ariaDescribedBy})]}),(0,jsx_runtime.jsx)(styles.Label,{children:label})]}),Checkbox=(0,__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/index.js").forwardRef)(CheckboxComponent);Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{css:{required:!1,tsType:{name:"union",raw:"SystemStyleObject | SystemStyleObject[] | undefined",elements:[{name:"SystemStyleObject"},{name:"Array",elements:[{name:"SystemStyleObject"}],raw:"SystemStyleObject[]"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""}}}},"./src/pluco.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Pluco});var _styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./styled-system/jsx/index.mjs");const Pluco=(ArkComponent,config)=>{const result={};return Object.keys(ArkComponent).forEach((key=>{const componentConfig=config[key];componentConfig?Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key],componentConfig)}):Object.assign(result,{[key]:(0,_styled_system_jsx__WEBPACK_IMPORTED_MODULE_0__.I4)(ArkComponent[key])})})),result}}}]);