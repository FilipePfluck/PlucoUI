"use strict";(self.webpackChunkpluco_ui_2=self.webpackChunkpluco_ui_2||[]).push([[317],{"./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/providers/environment/use-environment-context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>useEnvironmentContext});var _utils_create_context_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/utils/create-context.js");const[EnvironmentContextProvider,useEnvironmentContext]=(0,_utils_create_context_js__WEBPACK_IMPORTED_MODULE_0__.q)({name:"EnvironmentContext",hookName:"useEnvironmentContext",providerName:"<EnvironmentProvider />",strict:!1,defaultValue:{getRootNode:()=>document,getDocument:()=>document,getWindow:()=>window}})},"./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/utils/create-context.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>createContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/index.js");function createContext(options={}){const{name,strict=!0,hookName="useContext",providerName="Provider",errorMessage,defaultValue}=options,Context=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValue);return Context.displayName=name,[Context.Provider,function useContext$1(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!context&&strict){const error=new Error(errorMessage??function getErrorMessage(hook,provider){return`${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`}(hookName,providerName));throw error.name="ContextError",Error.captureStackTrace?.(error,useContext$1),error}return context},Context]}},"./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/utils/create-split-props.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>createSplitProps});const createSplitProps=()=>(props,keys)=>keys.reduce(((previousValue,currentValue)=>{const[target,source]=previousValue,key=currentValue;return void 0!==source[key]&&(target[key]=source[key]),delete source[key],[target,source]}),[{},{...props}])},"./node_modules/.pnpm/@zag-js+anatomy@0.77.1/node_modules/@zag-js/anatomy/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>createAnatomy});var createAnatomy=(name,parts=[])=>({parts:(...values)=>{if(isEmpty(parts))return createAnatomy(name,values);throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?")},extendWith:(...values)=>createAnatomy(name,[...parts,...values]),rename:newName=>createAnatomy(newName,parts),keys:()=>parts,build:()=>[...new Set(parts)].reduce(((prev,part)=>Object.assign(prev,{[part]:{selector:[`&[data-scope="${toKebabCase(name)}"][data-part="${toKebabCase(part)}"]`,`& [data-scope="${toKebabCase(name)}"][data-part="${toKebabCase(part)}"]`].join(", "),attrs:{"data-scope":toKebabCase(name),"data-part":toKebabCase(part)}}})),{})}),toKebabCase=value=>value.replace(/([A-Z])([A-Z])/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),isEmpty=v=>0===v.length},"./node_modules/.pnpm/@zag-js+dom-query@0.77.1/node_modules/@zag-js/dom-query/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$b:()=>isOpeningInNewTab,Ds:()=>createScope,Ge:()=>observeChildren,I5:()=>prevById,KY:()=>isValidTabEvent,L9:()=>getComputedStyle,Ng:()=>isShadowRoot,P:()=>query,RD:()=>getInitialFocus,Rt:()=>scrollIntoView,Ut:()=>nextById,Y:()=>proxyTabFocus,YE:()=>getDocument,YG:()=>queryAll,aR:()=>isIos,aX:()=>itemById,b9:()=>isDownloadingEvent,cX:()=>isMac,dY:()=>nextTick,eC:()=>setStyle,er:()=>raf,f8:()=>isApple,fd:()=>getBeforeInputValue,fe:()=>visuallyHiddenStyle,fg:()=>isEditableElement,gR:()=>contains,gm:()=>isFirefox,i7:()=>getFocusables,mx:()=>observeAttributes,n_:()=>isDom,nr:()=>isSafari,ob:()=>getNearestOverflowAncestor,q7:()=>waitForElements,q_:()=>isComposingEvent,rq:()=>ariaAttr,sE:()=>dataAttr,sb:()=>isHTMLElement,tp:()=>isFocusable,tt:()=>getByTypeahead,uh:()=>isSelfTarget,v9:()=>getOverflowAncestors,wt:()=>getEventTarget,zk:()=>getWindow});var dataAttr=guard=>guard?"":void 0,ariaAttr=guard=>guard?"true":void 0,isObject=v=>"object"==typeof v&&null!==v,isHTMLElement=el=>isObject(el)&&1===el.nodeType&&"string"==typeof el.nodeName,isDocument=el=>isObject(el)&&9===el.nodeType,isWindow=el=>isObject(el)&&el===el.window,getNodeName=node=>isHTMLElement(node)?node.localName||"":"#document";var isShadowRoot=el=>(el=>isObject(el)&&void 0!==el.nodeType)(el)&&11===el.nodeType&&"host"in el;function contains(parent,child){return!(!parent||!child)&&(!(!isHTMLElement(parent)||!isHTMLElement(child))&&(parent===child||parent.contains(child)))}function getDocument(el){return isDocument(el)?el:isWindow(el)?el.document:el?.ownerDocument??document}function getWindow(el){return isShadowRoot(el)?getWindow(el.host):isDocument(el)?el.defaultView??window:isHTMLElement(el)?el.ownerDocument?.defaultView??window:window}var isDom=()=>"undefined"!=typeof document;var pt=v=>isDom()&&v.test(function getPlatform(){const agent=navigator.userAgentData;return agent?.platform??navigator.platform}()),ua=v=>isDom()&&v.test(navigator.userAgent),isMac=()=>pt(/^Mac/),isSafari=()=>{return isApple()&&(v=/apple/i,isDom()&&v.test(navigator.vendor));var v},isFirefox=()=>ua(/firefox\//i),isApple=()=>pt(/mac|iphone|ipad|ipod/i),isIos=()=>pt(/iP(hone|ad|od)|iOS/);function getBeforeInputValue(event){const{selectionStart,selectionEnd,value}=event.currentTarget;return value.slice(0,selectionStart)+event.data+value.slice(selectionEnd)}function getEventTarget(event){const composedPath=function getComposedPath(event){return event.composedPath?.()??event.nativeEvent?.composedPath?.()}(event);return composedPath?.[0]??event.target}var isSelfTarget=event=>contains(event.currentTarget,getEventTarget(event));function isOpeningInNewTab(event){const element=event.currentTarget;if(!element)return!1;const isAppleDevice=isApple();if(isAppleDevice&&!event.metaKey)return!1;if(!isAppleDevice&&!event.ctrlKey)return!1;const localName=element.localName;return"a"===localName||("button"===localName&&"submit"===element.type||"input"===localName&&"submit"===element.type)}function isDownloadingEvent(event){const element=event.currentTarget;if(!element)return!1;const localName=element.localName;return!!event.altKey&&("a"===localName||("button"===localName&&"submit"===element.type||"input"===localName&&"submit"===element.type))}function isComposingEvent(event){return event.nativeEvent?.isComposing??event.isComposing}var defaultItemToId=v=>v.id;function itemById(v,id,itemToId=defaultItemToId){return v.find((item=>itemToId(item)===id))}function indexOfId(v,id,itemToId=defaultItemToId){const item=itemById(v,id,itemToId);return item?v.indexOf(item):-1}function nextById(v,id,loop=!0){let idx=indexOfId(v,id);return idx=loop?(idx+1)%v.length:Math.min(idx+1,v.length-1),v[idx]}function prevById(v,id,loop=!0){let idx=indexOfId(v,id);return-1===idx?loop?v[v.length-1]:null:(idx=loop?(idx-1+v.length)%v.length:Math.max(0,idx-1),v[idx])}function getByText(v,text,currentId,itemToId=defaultItemToId){const index=currentId?indexOfId(v,currentId,itemToId):-1;let items=currentId?((v,idx)=>v.map(((_,index)=>v[(Math.max(idx,0)+index)%v.length])))(v,index):v;return 1===text.length&&(items=items.filter((item=>itemToId(item)!==currentId))),items.find((item=>{return valueText=(item=>(item.dataset?.valuetext??item.textContent??"").split("").map((char=>{const code=char.charCodeAt(0);return code>0&&code<128?char:code>=128&&code<=255?`/x${code.toString(16)}`.replace("/","\\"):""})).join("").trim())(item),query2=text,valueText.trim().toLowerCase().startsWith(query2.toLowerCase());var valueText,query2}))}function getByTypeaheadImpl(_items,options){const{state,activeId,key,timeout=350,itemToId}=options,search=state.keysSoFar+key,query2=search.length>1&&Array.from(search).every((char=>char===search[0]))?search[0]:search;const next=getByText(_items.slice(),query2,activeId,itemToId);function cleanup(){clearTimeout(state.timer),state.timer=-1}return function update(value){state.keysSoFar=value,cleanup(),""!==value&&(state.timer=+setTimeout((()=>{update(""),cleanup()}),timeout))}(search),next}var getByTypeahead=Object.assign(getByTypeaheadImpl,{defaultOptions:{keysSoFar:"",timer:-1},isValidEvent:function isValidTypeaheadEvent(event){return 1===event.key.length&&!event.ctrlKey&&!event.metaKey}});var styleCache=new WeakMap;function getComputedStyle(el){return styleCache.has(el)||styleCache.set(el,getWindow(el).getComputedStyle(el)),styleCache.get(el)}function getParentNode(node){if("html"===getNodeName(node))return node;const result=node.assignedSlot||node.parentNode||isShadowRoot(node)&&node.host||function getDocumentElement(el){return getDocument(el).documentElement}(node);return isShadowRoot(result)?result.host:result}var isHTMLElement2=element=>"object"==typeof element&&null!==element&&1===element.nodeType,isFrame=element=>isHTMLElement2(element)&&"IFRAME"===element.tagName;var focusableSelector="input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type",getFocusables=(container,includeContainer=!1)=>{if(!container)return[];const elements=Array.from(container.querySelectorAll(focusableSelector));(1==includeContainer||"if-empty"==includeContainer&&0===elements.length)&&isHTMLElement2(container)&&isFocusable(container)&&elements.unshift(container);const focusableElements=elements.filter(isFocusable);return focusableElements.forEach(((element,i)=>{if(isFrame(element)&&element.contentDocument){const frameBody=element.contentDocument.body;focusableElements.splice(i,1,...getFocusables(frameBody))}})),focusableElements};function isFocusable(element){return!(!element||element.closest("[inert]"))&&(element.matches(focusableSelector)&&function isVisible(el){return!!isHTMLElement2(el)&&(el.offsetWidth>0||el.offsetHeight>0||el.getClientRects().length>0)}(element))}function getTabbables(container,includeContainer){if(!container)return[];const elements=Array.from(container.querySelectorAll(focusableSelector)),tabbableElements=elements.filter(isTabbable);return includeContainer&&isTabbable(container)&&tabbableElements.unshift(container),tabbableElements.forEach(((element,i)=>{if(isFrame(element)&&element.contentDocument){const allFrameTabbable=getTabbables(element.contentDocument.body);tabbableElements.splice(i,1,...allFrameTabbable)}})),!tabbableElements.length&&includeContainer?elements:tabbableElements}function isTabbable(el){return null!=el&&el.tabIndex>0||isFocusable(el)&&!function hasNegativeTabIndex(element){return parseInt(element.getAttribute("tabindex")||"0",10)<0}(el)}function getTabbableEdges(container,includeContainer){const elements=getTabbables(container,includeContainer);return[elements[0]||null,elements[elements.length-1]||null]}function getInitialFocus(options){const{root,getInitialEl,filter,enabled=!0}=options;if(!enabled)return;let node=null;if(node||(node="function"==typeof getInitialEl?getInitialEl():getInitialEl),node||(node=root?.querySelector("[data-autofocus],[autofocus]")),!node){const tabbables=getTabbables(root);node=filter?tabbables.filter(filter)[0]:tabbables[0]}return node||root||void 0}function isValidTabEvent(event){const container=event.currentTarget;if(!container)return!1;const[firstTabbable,lastTabbable]=getTabbableEdges(container),doc=container.ownerDocument||document;return(doc.activeElement!==firstTabbable||!event.shiftKey)&&(!(doc.activeElement===lastTabbable&&!event.shiftKey)&&!(!firstTabbable&&!lastTabbable))}function isEditableElement(el){if(null==el||!isHTMLElement(el))return!1;try{return el instanceof getWindow(el).HTMLInputElement&&null!=el.selectionStart||/(textarea|select)/.test(el.localName)||el.isContentEditable}catch{return!1}}var OVERFLOW_RE=/auto|scroll|overlay|hidden|clip/;function isOverflowElement(el){const win=getWindow(el),{overflow,overflowX,overflowY,display}=win.getComputedStyle(el);return OVERFLOW_RE.test(overflow+overflowY+overflowX)&&!["inline","contents"].includes(display)}function nextTick(fn){const set2=new Set;function raf2(fn2){const id=globalThis.requestAnimationFrame(fn2);set2.add((()=>globalThis.cancelAnimationFrame(id)))}return raf2((()=>raf2(fn))),function cleanup(){set2.forEach((fn2=>fn2()))}}function raf(fn){const id=globalThis.requestAnimationFrame(fn);return()=>{globalThis.cancelAnimationFrame(id)}}function observeAttributes(nodeOrFn,options){const{defer}=options,func=defer?raf:v=>v(),cleanups2=[];return cleanups2.push(func((()=>{const node="function"==typeof nodeOrFn?nodeOrFn():nodeOrFn;cleanups2.push(function observeAttributesImpl(node,options){if(!node)return;const{attributes,callback:fn}=options,obs=new(node.ownerDocument.defaultView||window).MutationObserver((changes=>{for(const change of changes)"attributes"===change.type&&change.attributeName&&attributes.includes(change.attributeName)&&fn(change)}));return obs.observe(node,{attributes:!0,attributeFilter:attributes}),()=>obs.disconnect()}(node,options))}))),()=>{cleanups2.forEach((fn=>fn?.()))}}function observeChildren(nodeOrFn,options){const{defer}=options,func=defer?raf:v=>v(),cleanups2=[];return cleanups2.push(func((()=>{const node="function"==typeof nodeOrFn?nodeOrFn():nodeOrFn;cleanups2.push(function observeChildrenImpl(node,options){const{callback:fn}=options;if(!node)return;const obs=new(node.ownerDocument.defaultView||window).MutationObserver(fn);return obs.observe(node,{childList:!0,subtree:!0}),()=>obs.disconnect()}(node,options))}))),()=>{cleanups2.forEach((fn=>fn?.()))}}function getNearestOverflowAncestor(el){const parentNode=getParentNode(el);return function isRootElement(node){return["html","body","#document"].includes(getNodeName(node))}(parentNode)?getDocument(parentNode).body:isHTMLElement(parentNode)&&isOverflowElement(parentNode)?parentNode:getNearestOverflowAncestor(parentNode)}function getOverflowAncestors(el,list=[]){const scrollableAncestor=getNearestOverflowAncestor(el),isBody=scrollableAncestor===el.ownerDocument.body,win=getWindow(scrollableAncestor);return isBody?list.concat(win,win.visualViewport||[],isOverflowElement(scrollableAncestor)?scrollableAncestor:[]):list.concat(scrollableAncestor,getOverflowAncestors(scrollableAncestor,[]))}function proxyTabFocusImpl(container,options={}){const{triggerElement,onFocus}=options,doc=container?.ownerDocument||document,body=doc.body;function onKeyDown(event){if("Tab"!==event.key)return;let elementToFocus=null;const[firstTabbable,lastTabbable]=getTabbableEdges(container,!0),noTabbableElements=!firstTabbable&&!lastTabbable;event.shiftKey&&(doc.activeElement===firstTabbable||noTabbableElements)?elementToFocus=triggerElement:event.shiftKey||doc.activeElement!==triggerElement?event.shiftKey||doc.activeElement!==lastTabbable&&!noTabbableElements||(elementToFocus=function getNextTabbable(container,current){const tabbables=getTabbables(container),doc=container?.ownerDocument||document,currentElement=current??doc.activeElement;if(!currentElement)return null;const index=tabbables.indexOf(currentElement);return tabbables[index+1]||null}(body,triggerElement)):elementToFocus=firstTabbable,elementToFocus&&(event.preventDefault(),"function"==typeof onFocus?onFocus(elementToFocus):elementToFocus.focus())}return doc?.addEventListener("keydown",onKeyDown,!0),()=>{doc?.removeEventListener("keydown",onKeyDown,!0)}}function proxyTabFocus(container,options){const{defer,triggerElement,...restOptions}=options,func=defer?raf:v=>v(),cleanups2=[];return cleanups2.push(func((()=>{const node="function"==typeof container?container():container,trigger="function"==typeof triggerElement?triggerElement():triggerElement;cleanups2.push(proxyTabFocusImpl(node,{triggerElement:trigger,...restOptions}))}))),()=>{cleanups2.forEach((fn=>fn?.()))}}function queryAll(root,selector){return Array.from(root?.querySelectorAll(selector)??[])}function query(root,selector){return root?.querySelector(selector)??null}function createScope(methods){const dom={getRootNode:ctx=>ctx.getRootNode?.()??document,getDoc:ctx=>getDocument(dom.getRootNode(ctx)),getWin:ctx=>dom.getDoc(ctx).defaultView??window,getActiveElement:ctx=>function getActiveElement(rootNode){let activeElement=rootNode.activeElement;for(;activeElement?.shadowRoot;){const el=activeElement.shadowRoot.activeElement;if(el===activeElement)break;activeElement=el}return activeElement}(dom.getRootNode(ctx)),isActiveElement:(ctx,elem)=>elem===dom.getActiveElement(ctx),getById:(ctx,id)=>dom.getRootNode(ctx).getElementById(id),setValue:(elem,value)=>{if(null==elem||null==value)return;const valueAsString=value.toString();elem.value!==valueAsString&&(elem.value=value.toString())}};return{...dom,...methods}}function scrollIntoView(el,options){const{rootEl,...scrollOptions}=options||{};el&&rootEl&&isOverflowElement(rootEl)&&function isScrollable(el){return el.scrollHeight>el.clientHeight||el.scrollWidth>el.clientWidth}(rootEl)&&el.scrollIntoView(scrollOptions)}var cleanups=new WeakMap;function set(element,key,setup){cleanups.has(element)||cleanups.set(element,new Map);const elementCleanups=cleanups.get(element),prevCleanup=elementCleanups.get(key);if(!prevCleanup)return elementCleanups.set(key,setup()),()=>{elementCleanups.get(key)?.(),elementCleanups.delete(key)};const cleanup=setup(),nextCleanup=()=>{cleanup(),prevCleanup(),elementCleanups.delete(key)};return elementCleanups.set(key,nextCleanup),()=>{elementCleanups.get(key)===nextCleanup&&(cleanup(),elementCleanups.set(key,prevCleanup))}}function setStyle(element,style){if(!element)return()=>{};return set(element,"style",(()=>{const prevStyle=element.style.cssText;return Object.assign(element.style,style),()=>{element.style.cssText=prevStyle}}))}var visuallyHiddenStyle={border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},fps=1e3/60;function waitForElements(queries,cb){const cleanups2=[];return queries?.forEach((query2=>{const clean=function waitForElement(query2,cb){const el=query2();if(isHTMLElement(el)&&el.isConnected)return cb(el),()=>{};{const timerId=setInterval((()=>{const el2=query2();isHTMLElement(el2)&&el2.isConnected&&(cb(el2),clearInterval(timerId))}),fps);return()=>clearInterval(timerId)}}(query2,cb);cleanups2.push(clean)})),()=>{cleanups2.forEach((fn=>fn()))}}},"./node_modules/.pnpm/@zag-js+react@0.77.1_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@zag-js/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_B:()=>normalizeProps,zl:()=>useMachine});var _zag_js_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/@zag-js+types@0.77.1/node_modules/@zag-js/types/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/index.js"),_zag_js_store__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react-dom/index.js"),__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/jsx-runtime.js"),__webpack_require__("./node_modules/.pnpm/@zag-js+store@0.77.1/node_modules/@zag-js/store/dist/index.mjs")),proxy_compare__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/proxy-compare@3.0.0/node_modules/proxy-compare/dist/index.js"),normalizeProps=(0,_zag_js_types__WEBPACK_IMPORTED_MODULE_3__._)((v=>v)),isArrayLike=value=>"Array"===value?.constructor.name,isEqual=(a,b)=>{if(Object.is(a,b))return!0;if(null==a&&null!=b||null!=a&&null==b)return!1;if("function"==typeof a?.isEqual&&"function"==typeof b?.isEqual)return a.isEqual(b);if("function"==typeof a&&"function"==typeof b)return a.toString()===b.toString();if(isArrayLike(a)&&isArrayLike(b))return((a,b)=>{if(a.length!==b.length)return!1;for(let i=0;i<a.length;i++)if(!isEqual(a[i],b[i]))return!1;return!0})(Array.from(a),Array.from(b));if("object"!=typeof a||"object"!=typeof b)return!1;const keys=Object.keys(b??Object.create(null)),length=keys.length;for(let i=0;i<length;i++){if(!Reflect.has(a,keys[i]))return!1}for(let i=0;i<length;i++){const key=keys[i];if(!isEqual(a[key],b[key]))return!1}return!0},isDev=()=>!1;function compact(obj){if(!isPlainObject(obj)||void 0===obj)return obj;const keys=Reflect.ownKeys(obj).filter((key=>"string"==typeof key)),filtered={};for(const key of keys){const value=obj[key];void 0!==value&&(filtered[key]=compact(value))}return filtered}Function.prototype.toString.call(Object);var isPlainObject=value=>value&&"object"==typeof value&&value.constructor===Object;var{use}=react__WEBPACK_IMPORTED_MODULE_0__,targetCache=(0,_zag_js_store__WEBPACK_IMPORTED_MODULE_4__.A7)("__zag__targetCache",(()=>new WeakMap));function useSnapshot(service,options){const{actions,context,sync:notifyInSync}=options??{},lastSnapshot=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),lastAffected=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),currSnapshot=(0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((callback=>(0,_zag_js_store__WEBPACK_IMPORTED_MODULE_4__.B1)(service.state,callback,notifyInSync)),[notifyInSync]),(()=>{const nextSnapshot=(0,_zag_js_store__WEBPACK_IMPORTED_MODULE_4__.P9)(service.state,use);try{if(lastSnapshot.current&&lastAffected.current&&!(0,proxy_compare__WEBPACK_IMPORTED_MODULE_5__.Hq)(lastSnapshot.current,nextSnapshot,lastAffected.current,new WeakMap))return lastSnapshot.current}catch{}return nextSnapshot}),(()=>(0,_zag_js_store__WEBPACK_IMPORTED_MODULE_4__.P9)(service.state,use)));service.setOptions({actions});const ctx=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>compact(context??{})),[context]);!function useUpdateEffect(callback,deps){const render=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),effect=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(render.current&&effect.current)return callback();effect.current=!0}),deps),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(render.current=!0,()=>{render.current=!1})),[])}((()=>{const entries=Object.entries(ctx),previousCtx=service.contextSnapshot??{};entries.map((([key,value])=>({key,curr:value,prev:previousCtx[key],equal:isEqual(previousCtx[key],value)}))).every((({equal})=>equal))||service.setContext(ctx)}),[ctx]);const currAffected=new WeakMap;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{lastSnapshot.current=currSnapshot,lastAffected.current=currAffected}));const proxyCache=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>new WeakMap),[]);return(0,proxy_compare__WEBPACK_IMPORTED_MODULE_5__.tz)(currSnapshot,currAffected,proxyCache,targetCache)}var useSafeLayoutEffect="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function useService(machine,options){const{state:hydratedState,context}=options??{},service=function useConstant(fn){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return ref.current||(ref.current={v:fn()}),ref.current.v}((()=>{const instance="function"==typeof machine?machine():machine;return context&&instance.setContext(context),instance._created(),instance})),snapshotRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return useSafeLayoutEffect((()=>{const stateInit=hydratedState??snapshotRef.current;return service.start(stateInit),()=>{isDev()&&(snapshotRef.current=service.getHydrationState()),service.stop()}}),[]),service}function useMachine(machine,options){const service=useService(machine,options);return[useSnapshot(service,options),service.send,service]}},"./node_modules/.pnpm/@zag-js+types@0.77.1/node_modules/@zag-js/types/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createNormalizer(fn){return new Proxy({},{get:()=>fn})}__webpack_require__.d(__webpack_exports__,{_:()=>createNormalizer,x:()=>createProps});var createProps=()=>props=>Array.from(new Set(props))}}]);