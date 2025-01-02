"use strict";(self.webpackChunkpluco_ui_2=self.webpackChunkpluco_ui_2||[]).push([[8633],{"./src/components/primitives/forms/Combobox/test.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ShouldFilterOptions:()=>ShouldFilterOptions,ShouldOpenTheCombobox:()=>ShouldOpenTheCombobox,ShouldSelectAnOption:()=>ShouldSelectAnOption,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@storybook+test@8.3.6_storybook@8.3.6/node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/primitives/forms/Combobox/index.tsx").G,title:"components/primitives/forms/Combobox/test"},data=[{label:"React",value:"react"},{label:"Solid",value:"solid"},{label:"Svelte",value:"svelte",disabled:!0},{label:"Vue",value:"vue"}],ShouldOpenTheCombobox={args:{data,placeholder:"Pick a framework"},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement.parentNode);await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.tab(),await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.tab(),await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard("[Space]");const list=canvas.getByRole("listbox");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(list).toBeVisible()))}},ShouldSelectAnOption={args:{data,placeholder:"Pick a framework"},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement.parentNode);await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.tab(),await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard("[ArrowDown]"),await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard("[Enter]");const combobox=canvas.getByRole("combobox");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(combobox).toHaveValue("React")}},ShouldFilterOptions={args:{data,placeholder:"Pick a framework"},play:async({canvasElement})=>{const canvas=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement.parentNode);await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.tab(),await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.keyboard("S");const solid=canvas.getByText("Solid"),svelte=canvas.getByText("Svelte"),react=canvas.queryByText("React");await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(solid).toBeVisible())),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(svelte).toBeVisible())),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(react).toBe(null)}},__namedExportsOrder=["ShouldOpenTheCombobox","ShouldSelectAnOption","ShouldFilterOptions"];ShouldOpenTheCombobox.parameters={...ShouldOpenTheCombobox.parameters,docs:{...ShouldOpenTheCombobox.parameters?.docs,source:{originalSource:"{\n  args: {\n    data,\n    placeholder: 'Pick a framework'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    // Targetting the parentNode (body)\n    // because the list is rendered inside a Portal\n    // so usually canvasElement wouldn't contain it\n    const canvas = within(canvasElement.parentNode as HTMLElement);\n    await userEvent.tab();\n    await userEvent.tab();\n    await userEvent.keyboard('[Space]');\n    const list = canvas.getByRole('listbox');\n    await waitFor(() => expect(list).toBeVisible());\n  }\n}",...ShouldOpenTheCombobox.parameters?.docs?.source}}},ShouldSelectAnOption.parameters={...ShouldSelectAnOption.parameters,docs:{...ShouldSelectAnOption.parameters?.docs,source:{originalSource:"{\n  args: {\n    data,\n    placeholder: 'Pick a framework'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement.parentNode as HTMLElement);\n    await userEvent.tab();\n    await userEvent.keyboard('[ArrowDown]');\n    await userEvent.keyboard('[Enter]');\n    const combobox = canvas.getByRole('combobox');\n    await expect(combobox).toHaveValue('React');\n  }\n}",...ShouldSelectAnOption.parameters?.docs?.source}}},ShouldFilterOptions.parameters={...ShouldFilterOptions.parameters,docs:{...ShouldFilterOptions.parameters?.docs,source:{originalSource:"{\n  args: {\n    data,\n    placeholder: 'Pick a framework'\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement.parentNode as HTMLElement);\n    await userEvent.tab();\n    await userEvent.keyboard('S');\n    const solid = canvas.getByText('Solid');\n    const svelte = canvas.getByText('Svelte');\n    const react = canvas.queryByText('React');\n    await waitFor(() => expect(solid).toBeVisible());\n    await waitFor(() => expect(svelte).toBeVisible());\n    await expect(react).toBe(null);\n  }\n}",...ShouldFilterOptions.parameters?.docs?.source}}}}}]);