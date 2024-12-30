/*! For license information please see components-primitives-feedback-Alert-index-stories.dcb1f413.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpluco_ui_2=self.webpackChunkpluco_ui_2||[]).push([[5848],{"./src/components/primitives/feedback/Alert/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),jsx=__webpack_require__("./styled-system/jsx/index.mjs"),factory=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/factory.js");const Root=(0,jsx.I4)("div",{base:{display:"flex",align:"center",gap:"3",p:"4",rounded:"md",shadow:"md",borderWidth:"1px"},variants:{intent:{primary:{bg:"bg.brand.subtle",borderColor:"border.brand.subtle"},secondary:{bg:"bg.subtle",borderColor:"border.subtle"},danger:{bg:"bg.danger.subtle",borderColor:"border.danger.subtle","& *::selection":{bg:"bg.danger.selection !important",color:"fg.danger.important"}},success:{bg:"bg.success.subtle",borderColor:"border.success.subtle","& *::selection":{bg:"bg.success.selection !important",color:"fg.success.important"}}}},defaultVariants:{intent:"secondary"}}),Content=(0,jsx.I4)("div",{base:{display:"flex",flexDir:"column",gap:"1"}}),Title=(0,jsx.I4)("h4",{base:{color:"fg",textStyle:"headingXs"},variants:{intent:{primary:{color:"fg.brand"},secondary:{color:"fg"},danger:{color:"fg.danger"},success:{color:"fg.success"}}},defaultVariants:{intent:"secondary"}}),Description=(0,jsx.I4)("p",{base:{color:"fg",textStyle:"bodyMd"}}),Icon=(0,jsx.I4)(factory.X.div,{base:{color:"fg",w:"6",h:"6"},variants:{intent:{primary:{iconColor:"var(--colors-fg-brand)"},secondary:{iconColor:"var(--colors-fg)"},danger:{iconColor:"var(--colors-fg-danger)"},success:{iconColor:"var(--colors-fg-success)"}}},defaultVariants:{intent:"secondary"}}),Alert=({title,description,icon,intent})=>(0,jsx_runtime.jsxs)(Root,{intent,children:[icon&&(0,jsx_runtime.jsx)(Icon,{intent,children:icon}),(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsx)(Title,{intent,children:title}),(0,jsx_runtime.jsx)(Description,{children:description})]})]});Alert.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},intent:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'danger' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'success'"}]},description:""}}};var createLucideIcon=__webpack_require__("./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-65a56d0e-20241020/node_modules/lucide-react/dist/esm/createLucideIcon.js");const Info=(0,createLucideIcon.A)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),CircleX=(0,createLucideIcon.A)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),index_stories={component:Alert},Primary={render:()=>(0,jsx_runtime.jsxs)(jsx.BJ,{gap:"4",children:[(0,jsx_runtime.jsx)(Alert,{title:"This is a message",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),(0,jsx_runtime.jsx)(Alert,{title:"This is a message",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",icon:(0,jsx_runtime.jsx)(Info,{}),intent:"primary"}),(0,jsx_runtime.jsx)(Alert,{title:"This is an error",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",icon:(0,jsx_runtime.jsx)(CircleX,{}),intent:"danger"}),(0,jsx_runtime.jsx)(Alert,{title:"This is a success!",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",icon:(0,jsx_runtime.jsx)(CircleX,{}),intent:"success"})]})},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  render: () => <Stack gap="4">\n      <Alert title="This is a message" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />\n      <Alert title="This is a message" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={<Info />} intent="primary" />\n      <Alert title="This is an error" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={<XCircle />} intent="danger" />\n      <Alert title="This is a success!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={<XCircle />} intent="success" />\n    </Stack>\n}',...Primary.parameters?.docs?.source}}}},"./node_modules/.pnpm/lucide-react@0.453.0_react@19.0.0-rc-65a56d0e-20241020/node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&array.indexOf(className)===index)).join(" ");var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}}}]);