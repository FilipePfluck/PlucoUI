"use strict";(self.webpackChunkpluco_ui_2=self.webpackChunkpluco_ui_2||[]).push([[9216],{"./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/components/factory.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>ark});var _zag_js_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@zag-js+core@0.77.1/node_modules/@zag-js/core/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.0_@babel+core@7.25.9_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/next/dist/compiled/react/index.js"),_utils_compose_refs_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/utils/compose-refs.js");const withAsChild=Component=>{const Comp=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>{const{asChild,children,...restProps}=props;if(!asChild)return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component,{...restProps,ref},children);const onlyChild=react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(onlyChild))return null;const childRef=function getRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;return mayWarn?element.ref:(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn?element.props.ref:element.props.ref||element.ref)}(onlyChild);return(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(onlyChild,{...(0,_zag_js_core__WEBPACK_IMPORTED_MODULE_1__.v6)(restProps,onlyChild.props),ref:ref?(0,_utils_compose_refs_js__WEBPACK_IMPORTED_MODULE_2__.t)(ref,childRef):childRef})})));return Comp.displayName=Component.displayName||Component.name,Comp},ark=(()=>{const cache=new Map;return new Proxy(withAsChild,{apply:(_target,_thisArg,argArray)=>withAsChild(argArray[0]),get(_,element){const asElement=element;return cache.has(asElement)||cache.set(asElement,withAsChild(asElement)),cache.get(asElement)}})})()},"./node_modules/.pnpm/@ark-ui+react@4.4.4_react-dom@19.0.0-rc-65a56d0e-20241020_react@19.0.0-rc-65a56d0e-20241020/node_modules/@ark-ui/react/dist/utils/compose-refs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}function composeRefs(...refs){return node=>{for(const ref of refs)setRef(ref,node)}}__webpack_require__.d(__webpack_exports__,{t:()=>composeRefs})},"./node_modules/.pnpm/@zag-js+core@0.77.1/node_modules/@zag-js/core/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sw:()=>choose,Op:()=>createMachine,DK:()=>guards,v6:()=>mergeProps});var dist=__webpack_require__("./node_modules/.pnpm/@zag-js+store@0.77.1/node_modules/@zag-js/store/dist/index.mjs"),utils_dist=__webpack_require__("./node_modules/.pnpm/@zag-js+utils@0.77.1/node_modules/@zag-js/utils/dist/index.mjs");function set(obj,key,val){"object"==typeof val.value&&(val.value=klona(val.value)),val.enumerable&&!val.get&&!val.set&&val.configurable&&val.writable&&"__proto__"!==key?obj[key]=val.value:Object.defineProperty(obj,key,val)}function klona(x){if("object"!=typeof x)return x;var k,list,tmp,i=0,str=Object.prototype.toString.call(x);if("[object Object]"===str?tmp=Object.create(x.__proto__||null):"[object Array]"===str?tmp=Array(x.length):"[object Set]"===str?(tmp=new Set,x.forEach((function(val){tmp.add(klona(val))}))):"[object Map]"===str?(tmp=new Map,x.forEach((function(val,key){tmp.set(klona(key),klona(val))}))):"[object Date]"===str?tmp=new Date(+x):"[object RegExp]"===str?tmp=new RegExp(x.source,x.flags):"[object DataView]"===str?tmp=new x.constructor(klona(x.buffer)):"[object ArrayBuffer]"===str?tmp=x.slice(0):"Array]"===str.slice(-6)&&(tmp=new x.constructor(x)),tmp){for(list=Object.getOwnPropertySymbols(x);i<list.length;i++)set(tmp,list[i],Object.getOwnPropertyDescriptor(x,list[i]));for(i=0,list=Object.getOwnPropertyNames(x);i<list.length;i++)Object.hasOwnProperty.call(tmp,k=list[i])&&tmp[k]===x[k]||set(tmp,k,Object.getOwnPropertyDescriptor(x,k))}return tmp||x}var console=__webpack_require__("./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js"),__defProp=Object.defineProperty,__publicField=(obj,key,value)=>((obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value)(obj,"symbol"!=typeof key?key+"":key,value);function deepMerge(source,...objects){for(const obj of objects){const target=(0,utils_dist.oE)(obj);for(const key in target)(0,utils_dist.Qd)(obj[key])?(source[key]||(source[key]={}),deepMerge(source[key],obj[key])):source[key]=obj[key]}return source}function structuredClone(v){return klona(v)}function toEvent(event){return(0,utils_dist.Kg)(event)?{type:event}:event}function toArray(value){return value?(0,utils_dist.cy)(value)?value.slice():[value]:[]}function isGuardHelper(value){return(0,utils_dist.Gv)(value)&&null!=value.predicate}var Truthy=()=>!0;function exec(guardMap,ctx,event,meta){return guard=>(0,utils_dist.Kg)(guard)?!!guardMap[guard]?.(ctx,event,meta):(0,utils_dist.Tn)(guard)?guard(ctx,event,meta):guard.predicate(guardMap)(ctx,event,meta)}var guards={or:function or(...conditions){return{predicate:guardMap=>(ctx,event,meta)=>conditions.map(exec(guardMap,ctx,event,meta)).some(Boolean)}},and:function and(...conditions){return{predicate:guardMap=>(ctx,event,meta)=>conditions.map(exec(guardMap,ctx,event,meta)).every(Boolean)}},not:function not(condition){return{predicate:guardMap=>(ctx,event,meta)=>!exec(guardMap,ctx,event,meta)(condition)}},stateIn:function stateIn(...values){return(_ctx,_evt,meta)=>meta.state.matches(...values)}};function choose(actions){return{predicate:guardMap=>(ctx,event,meta)=>actions.find((def=>{const guard=def.guard??Truthy;return exec(guardMap,ctx,event,meta)(guard)}))?.actions}}function determineGuardFn(guard,guardMap){return guard=guard??Truthy,(context,event,meta)=>{if((0,utils_dist.Kg)(guard)){const value=guardMap[guard];return(0,utils_dist.Tn)(value)?value(context,event,meta):value}return isGuardHelper(guard)?guard.predicate(guardMap)(context,event,meta):guard?.(context,event,meta)}}function determineActionsFn(values,guardMap){return(context,event,meta)=>isGuardHelper(values)?values.predicate(guardMap)(context,event,meta):values}function determineDelayFn(delay,delaysMap){return(context,event)=>{if((0,utils_dist.Et)(delay))return delay;if((0,utils_dist.Tn)(delay))return delay(context,event);if((0,utils_dist.Kg)(delay)){const value=Number.parseFloat(delay);if(!Number.isNaN(value))return value;if(delaysMap){const valueOrFn=delaysMap?.[delay];return(0,utils_dist.V1)(null==valueOrFn,`[@zag-js/core > determine-delay] Cannot determine delay for \`${delay}\`. It doesn't exist in \`options.delays\``),(0,utils_dist.Tn)(valueOrFn)?valueOrFn(context,event):valueOrFn}}}}function toTarget(target){return(0,utils_dist.Kg)(target)?{target}:target}var Machine=class{constructor(config,options){__publicField(this,"status","Not Started"),__publicField(this,"state"),__publicField(this,"initialState"),__publicField(this,"initialContext"),__publicField(this,"id"),__publicField(this,"type","machine"),__publicField(this,"activityEvents",new Map),__publicField(this,"delayedEvents",new Map),__publicField(this,"stateListeners",new Set),__publicField(this,"doneListeners",new Set),__publicField(this,"contextWatchers",new Set),__publicField(this,"removeStateListener",utils_dist.lQ),__publicField(this,"parent"),__publicField(this,"children",new Map),__publicField(this,"guardMap"),__publicField(this,"actionMap"),__publicField(this,"delayMap"),__publicField(this,"activityMap"),__publicField(this,"sync"),__publicField(this,"options"),__publicField(this,"config"),__publicField(this,"_created",(()=>{const event=toEvent("machine.created");this.executeActions(this.config?.created,event)})),__publicField(this,"start",(init=>{if(this.state.value="",this.state.tags=[],"Running"===this.status)return this;this.status="Running",this.removeStateListener=(0,dist.B1)(this.state,(()=>{this.stateListeners.forEach((listener=>{listener(this.stateSnapshot)}))}),this.sync),this.setupContextWatchers(),this.executeActivities(toEvent("machine.start"),toArray(this.config.activities),"machine.start"),this.executeActions(this.config.entry,toEvent("machine.start"));const event=toEvent("machine.init"),target=(0,utils_dist.Gv)(init)?init.value:init,context=(0,utils_dist.Gv)(init)?init.context:void 0;context&&this.setContext(context);const transition={target:target??this.config.initial},next=this.getNextStateInfo(transition,event);return this.initialState=next,this.performStateChangeEffects(this.state.value,next,event),this})),__publicField(this,"setupContextWatchers",(()=>{const{watch}=this.config;if(!watch)return;let prev=(0,dist.P9)(this.state.context);const cleanup=(0,dist.B1)(this.state.context,(()=>{const next=(0,dist.P9)(this.state.context);for(const[key,fn]of Object.entries(watch)){(this.options.compareFns?.[key]??Object.is)(prev[key],next[key])||this.executeActions(fn,this.state.event)}prev=next}));this.contextWatchers.add(cleanup)})),__publicField(this,"stop",(()=>{if("Stopped"!==this.status)return this.performExitEffects(this.state.value,toEvent("machine.stop")),this.executeActions(this.config.exit,toEvent("machine.stop")),this.setState(""),this.setEvent("machine.stop"),this.stopStateListeners(),this.stopChildren(),this.stopActivities(),this.stopDelayedEvents(),this.stopContextWatchers(),this.status="Stopped",this})),__publicField(this,"stopStateListeners",(()=>{this.removeStateListener(),this.stateListeners.clear()})),__publicField(this,"stopContextWatchers",(()=>{this.contextWatchers.forEach((fn=>fn())),this.contextWatchers.clear()})),__publicField(this,"stopDelayedEvents",(()=>{this.delayedEvents.forEach((state=>{state.forEach((stop=>stop()))})),this.delayedEvents.clear()})),__publicField(this,"stopActivities",(state=>{state?(this.activityEvents.get(state)?.forEach((stop=>stop())),this.activityEvents.get(state)?.clear(),this.activityEvents.delete(state)):(this.activityEvents.forEach((state2=>{state2.forEach((stop=>stop())),state2.clear()})),this.activityEvents.clear())})),__publicField(this,"sendChild",((evt,to)=>{const event=toEvent(evt),id=(0,utils_dist.Jg)(to,this.contextSnapshot),child=this.children.get(id);child||(0,utils_dist.V1)(`[@zag-js/core] Cannot send '${event.type}' event to unknown child`),child.send(event)})),__publicField(this,"stopChild",(id=>{this.children.has(id)||(0,utils_dist.V1)(`[@zag-js/core > stop-child] Cannot stop unknown child ${id}`),this.children.get(id).stop(),this.children.delete(id)})),__publicField(this,"removeChild",(id=>{this.children.delete(id)})),__publicField(this,"stopChildren",(()=>{this.children.forEach((child=>child.stop())),this.children.clear()})),__publicField(this,"setParent",(parent=>{this.parent=parent})),__publicField(this,"spawn",((src,id)=>{const actor=(0,utils_dist.Jg)(src);return id&&(actor.id=id),actor.type="machine.actor",actor.setParent(this),this.children.set(actor.id,(0,utils_dist.wg)(actor)),actor.onDone((()=>{this.removeChild(actor.id)})).start(),(0,utils_dist.wg)((0,dist.KR)(actor))})),__publicField(this,"stopActivity",(key=>{if(!this.state.value)return;const cleanups=this.activityEvents.get(this.state.value);cleanups?.get(key)?.(),cleanups?.delete(key)})),__publicField(this,"addActivityCleanup",((state,key,cleanup)=>{state&&(this.activityEvents.has(state)?this.activityEvents.get(state)?.set(key,cleanup):this.activityEvents.set(state,new Map([[key,cleanup]])))})),__publicField(this,"setState",(target=>{this.state.previousValue=this.state.value,this.state.value=target;const stateNode=this.getStateNode(target);null==target?(0,utils_dist.IU)(this.state.tags):this.state.tags=toArray(stateNode?.tags)})),__publicField(this,"setContext",(context=>{context&&deepMerge(this.state.context,(0,utils_dist.oE)(context))})),__publicField(this,"setOptions",(options=>{const opts=(0,utils_dist.oE)(options);this.actionMap={...this.actionMap,...opts.actions},this.delayMap={...this.delayMap,...opts.delays},this.activityMap={...this.activityMap,...opts.activities},this.guardMap={...this.guardMap,...opts.guards}})),__publicField(this,"getStateNode",(state=>{if(state)return this.config.states?.[state]})),__publicField(this,"getNextStateInfo",((transitions,event)=>{const transition=this.determineTransition(transitions,event),isTargetless=!transition?.target,target=transition?.target??this.state.value,changed=this.state.value!==target,stateNode=this.getStateNode(target),info={reenter:!isTargetless&&!changed&&!transition?.internal,transition,stateNode,target,changed};return this.log("NextState:",`[${event.type}]`,this.state.value,"----\x3e",info.target),info})),__publicField(this,"getAfterActions",((transition,delay)=>{let id;const current=this.state.value;return{entry:()=>{id=globalThis.setTimeout((()=>{const next=this.getNextStateInfo(transition,this.state.event);this.performStateChangeEffects(current,next,this.state.event)}),delay)},exit:()=>{globalThis.clearTimeout(id)}}})),__publicField(this,"getDelayedEventActions",(state=>{const stateNode=this.getStateNode(state),event=this.state.event;if(!stateNode||!stateNode.after)return;const entries=[],exits=[];if((0,utils_dist.cy)(stateNode.after)){const transition=this.determineTransition(stateNode.after,event);if(!transition)return;if(!(0,utils_dist.cK)(transition,"delay"))throw new Error(`[@zag-js/core > after] Delay is required for after transition: ${JSON.stringify(transition)}`);const __delay=determineDelayFn(transition.delay,this.delayMap)(this.contextSnapshot,event),actions=this.getAfterActions(transition,__delay);return entries.push(actions.entry),exits.push(actions.exit),{entries,exits}}if((0,utils_dist.Gv)(stateNode.after))for(const delay in stateNode.after){const transition=stateNode.after[delay],__delay=determineDelayFn(delay,this.delayMap)(this.contextSnapshot,event),actions=this.getAfterActions(transition,__delay);entries.push(actions.entry),exits.push(actions.exit)}return{entries,exits}})),__publicField(this,"executeActions",((actions,event)=>{const pickedActions=determineActionsFn(actions,this.guardMap)(this.contextSnapshot,event,this.guardMeta);for(const action of toArray(pickedActions)){const fn=(0,utils_dist.Kg)(action)?this.actionMap?.[action]:action;(0,utils_dist.R8)((0,utils_dist.Kg)(action)&&!fn,`[@zag-js/core > execute-actions] No implementation found for action: \`${action}\``),fn?.(this.state.context,event,this.meta)}})),__publicField(this,"executeActivities",((event,activities,state)=>{for(const activity of activities){const fn=(0,utils_dist.Kg)(activity)?this.activityMap?.[activity]:activity;if(!fn){(0,utils_dist.R8)(`[@zag-js/core > execute-activity] No implementation found for activity: \`${activity}\``);continue}const cleanup=fn(this.state.context,event,this.meta);if(cleanup){const key=(0,utils_dist.Kg)(activity)?activity:activity.name||(0,utils_dist.uR)();this.addActivityCleanup(state??this.state.value,key,cleanup)}}})),__publicField(this,"createEveryActivities",((every,callbackfn)=>{if(every)if((0,utils_dist.cy)(every)){const picked=toArray(every).find((transition=>{const delay2=determineDelayFn(transition.delay,this.delayMap)(this.contextSnapshot,this.state.event);return determineGuardFn(transition.guard,this.guardMap)(this.contextSnapshot,this.state.event,this.guardMeta)??null!=delay2}));if(!picked)return;const delay=determineDelayFn(picked.delay,this.delayMap)(this.contextSnapshot,this.state.event);callbackfn((()=>{const id=globalThis.setInterval((()=>{this.executeActions(picked.actions,this.state.event)}),delay);return()=>{globalThis.clearInterval(id)}}))}else for(const interval in every){const actions=every?.[interval],delay=determineDelayFn(interval,this.delayMap)(this.contextSnapshot,this.state.event);callbackfn((()=>{const id=globalThis.setInterval((()=>{this.executeActions(actions,this.state.event)}),delay);return()=>{globalThis.clearInterval(id)}}))}})),__publicField(this,"setEvent",(event=>{this.state.previousEvent=this.state.event,this.state.event=(0,dist.KR)(toEvent(event))})),__publicField(this,"performExitEffects",((current,event)=>{const currentState=this.state.value;if(""===currentState)return;const stateNode=current?this.getStateNode(current):void 0;this.stopActivities(currentState);const exitActions=toArray(determineActionsFn(stateNode?.exit,this.guardMap)(this.contextSnapshot,event,this.guardMeta)),afterExitActions=this.delayedEvents.get(currentState);afterExitActions&&exitActions.push(...afterExitActions),this.executeActions(exitActions,event),this.delayedEvents.delete(currentState)})),__publicField(this,"performEntryEffects",((next,event)=>{const stateNode=this.getStateNode(next),activities=toArray(stateNode?.activities);this.createEveryActivities(stateNode?.every,(activity=>{activities.unshift(activity)})),activities.length>0&&this.executeActivities(event,activities);const entryActions=toArray(determineActionsFn(stateNode?.entry,this.guardMap)(this.contextSnapshot,event,this.guardMeta)),afterActions=this.getDelayedEventActions(next);stateNode?.after&&afterActions&&(this.delayedEvents.set(next,afterActions?.exits),entryActions.push(...afterActions.entries)),this.executeActions(entryActions,event),"final"===stateNode?.type&&(this.state.done=!0,this.doneListeners.forEach((listener=>{listener(this.stateSnapshot)})),this.stop())})),__publicField(this,"performTransitionEffects",((transitions,event)=>{const transition=this.determineTransition(transitions,event);this.executeActions(transition?.actions,event)})),__publicField(this,"performStateChangeEffects",((current,next,event)=>{this.setEvent(event);const changed=next.changed||next.reenter;changed&&this.performExitEffects(current,event),this.performTransitionEffects(next.transition,event),this.setState(next.target),changed&&this.performEntryEffects(next.target,event)})),__publicField(this,"determineTransition",((transition,event)=>{const fn=function determineTransitionFn(transitions,guardMap){return(context,event,meta)=>toArray(transitions).map(toTarget).find((transition=>determineGuardFn(transition.guard,guardMap)(context,event,meta)??transition.target??transition.actions))}(transition,this.guardMap);return fn?.(this.contextSnapshot,event,this.guardMeta)})),__publicField(this,"sendParent",(evt=>{this.parent||(0,utils_dist.V1)("[@zag-js/core > send-parent] Cannot send event to an unknown parent");const event=toEvent(evt);this.parent?.send(event)})),__publicField(this,"log",((...args)=>{(0,utils_dist.Cu)()&&this.options.debug&&console.log(...args)})),__publicField(this,"send",(evt=>{const event=toEvent(evt);this.transition(this.state.value,event)})),__publicField(this,"transition",((state,evt)=>{const stateNode=(0,utils_dist.Kg)(state)?this.getStateNode(state):state?.stateNode,event=toEvent(evt);if(!stateNode&&!this.config.on){const msg="Stopped"===this.status?"[@zag-js/core > transition] Cannot transition a stopped machine":`[@zag-js/core > transition] State does not have a definition for \`state\`: ${state}, \`event\`: ${event.type}`;return void(0,utils_dist.R8)(msg)}const transitions=stateNode?.on?.[event.type]??this.config.on?.[event.type],next=this.getNextStateInfo(transitions,event);return this.performStateChangeEffects(this.state.value,next,event),next.stateNode})),__publicField(this,"subscribe",(listener=>(this.stateListeners.add(listener),"Running"===this.status&&listener(this.stateSnapshot),()=>{this.stateListeners.delete(listener)}))),__publicField(this,"onDone",(listener=>(this.doneListeners.add(listener),this))),__publicField(this,"onTransition",(listener=>(this.stateListeners.add(listener),"Running"===this.status&&listener(this.stateSnapshot),this))),this.config=structuredClone(config),this.options=structuredClone(options??{}),this.id=this.config.id??`machine-${(0,utils_dist.uR)()}`,this.guardMap=this.options?.guards??{},this.actionMap=this.options?.actions??{},this.delayMap=this.options?.delays??{},this.activityMap=this.options?.activities??{},this.sync=this.options?.sync??!1,this.state=function createProxy(config){const computedContext=config.computed??(0,utils_dist.wg)({}),initialContext=config.context??(0,utils_dist.wg)({}),initialTags=config.initial?config.states?.[config.initial]?.tags:[],state=(0,dist.BX)({value:config.initial??"",previousValue:"",event:(0,utils_dist.wg)({}),previousEvent:(0,utils_dist.wg)({}),context:(0,dist.g7)(initialContext,computedContext),done:!1,tags:initialTags??[],hasTag(tag){return this.tags.includes(tag)},matches(...value){return value.includes(this.value)},can(event){return(0,utils_dist.wg)(this).nextEvents.includes(event)},get nextEvents(){const stateEvents=config.states?.[this.value]?.on??{},globalEvents=config?.on??{};return Object.keys({...stateEvents,...globalEvents})},get changed(){return!("machine.init"===this.event.value||!this.previousValue)&&this.value!==this.previousValue}});return(0,utils_dist.wg)(state)}(this.config),this.initialContext=(0,dist.P9)(this.state.context)}get stateSnapshot(){return(0,utils_dist.wg)((0,dist.P9)(this.state))}getState(){return this.stateSnapshot}get contextSnapshot(){return this.stateSnapshot.context}get self(){const self=this;return{id:this.id,send:this.send.bind(this),sendParent:this.sendParent.bind(this),sendChild:this.sendChild.bind(this),stop:this.stop.bind(this),stopChild:this.stopChild.bind(this),spawn:this.spawn.bind(this),stopActivity:this.stopActivity.bind(this),get state(){return self.stateSnapshot},get initialContext(){return self.initialContext},get initialState(){return self.initialState?.target??""}}}get meta(){return{state:this.stateSnapshot,guards:this.guardMap,send:this.send.bind(this),self:this.self,initialContext:this.initialContext,initialState:this.initialState?.target??"",getState:()=>this.stateSnapshot,getAction:key=>this.actionMap[key],getGuard:key=>this.guardMap[key]}}get guardMeta(){return{state:this.stateSnapshot}}get[Symbol.toStringTag](){return"Machine"}getHydrationState(){const state=this.getState();return{value:state.value,tags:state.tags}}},createMachine=(config,options)=>new Machine(config,options),clsx=(...args)=>args.map((str=>str?.trim?.())).filter(Boolean).join(" "),CSS_REGEX=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g,serialize=style=>{const res={};let match;for(;match=CSS_REGEX.exec(style);)res[match[1]]=match[2];return res},css=(a,b)=>{if((0,utils_dist.Kg)(a)){if((0,utils_dist.Kg)(b))return`${a};${b}`;a=serialize(a)}else(0,utils_dist.Kg)(b)&&(b=serialize(b));return Object.assign({},a??{},b??{})};function mergeProps(...args){let result={};for(let props of args){for(let key in result)key.startsWith("on")&&"function"==typeof result[key]&&"function"==typeof props[key]?result[key]=(0,utils_dist.OK)(props[key],result[key]):result[key]="className"!==key&&"class"!==key?"style"!==key?void 0!==props[key]?props[key]:result[key]:css(result[key],props[key]):clsx(result[key],props[key]);for(let key in props)void 0===result[key]&&(result[key]=props[key])}return result}},"./node_modules/.pnpm/@zag-js+store@0.77.1/node_modules/@zag-js/store/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A7:()=>makeGlobal,B1:()=>subscribe,BX:()=>proxy,KR:()=>ref,P9:()=>snapshot,g7:()=>proxyWithComputed});var proxy_compare__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/proxy-compare@3.0.0/node_modules/proxy-compare/dist/index.js"),console=__webpack_require__("./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");function makeGlobal(key,value){const g=function getGlobal(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:void 0}();return g?(g[key]||(g[key]=value()),g[key]):value()}var isDev=()=>!1,isObject=x=>"object"==typeof x&&null!==x,proxyStateMap=makeGlobal("__zag__proxyStateMap",(()=>new WeakMap)),refSet=makeGlobal("__zag__refSet",(()=>new WeakSet)),[proxyFunction]=((objectIs=Object.is,newProxy=(target,handler)=>new Proxy(target,handler),canProxy=x=>isObject(x)&&!refSet.has(x)&&(Array.isArray(x)||!(Symbol.iterator in x))&&!(x=>(x=>"object"==typeof x&&null!==x&&"$$typeof"in x)(x)||(x=>"object"==typeof x&&null!==x&&"__v_isVNode"in x)(x)||(x=>"object"==typeof x&&null!==x&&"nodeType"in x&&"string"==typeof x.nodeName)(x))(x)&&!(x instanceof WeakMap)&&!(x instanceof WeakSet)&&!(x instanceof Error)&&!(x instanceof Number)&&!(x instanceof Date)&&!(x instanceof String)&&!(x instanceof RegExp)&&!(x instanceof ArrayBuffer),defaultHandlePromise=promise=>{switch(promise.status){case"fulfilled":return promise.value;case"rejected":throw promise.reason;default:throw promise}},snapCache=new WeakMap,createSnapshot=(target,version,handlePromise=defaultHandlePromise)=>{const cache=snapCache.get(target);if(cache?.[0]===version)return cache[1];const snap=Array.isArray(target)?[]:Object.create(Object.getPrototypeOf(target));return(0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.OC)(snap,!0),snapCache.set(target,[version,snap]),Reflect.ownKeys(target).forEach((key=>{const value=Reflect.get(target,key);refSet.has(value)?((0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.OC)(value,!1),snap[key]=value):value instanceof Promise?Object.defineProperty(snap,key,{get:()=>handlePromise(value)}):proxyStateMap.has(value)?snap[key]=snapshot(value,handlePromise):snap[key]=value})),Object.freeze(snap)},proxyCache=new WeakMap,versionHolder=[1,1],proxyFunction2=initialObject=>{if(!isObject(initialObject))throw new Error("object required");const found=proxyCache.get(initialObject);if(found)return found;let version=versionHolder[0];const listeners=new Set,notifyUpdate=(op,nextVersion=++versionHolder[0])=>{version!==nextVersion&&(version=nextVersion,listeners.forEach((listener=>listener(op,nextVersion))))};let checkVersion=versionHolder[1];const createPropListener=prop=>(op,nextVersion)=>{const newOp=[...op];newOp[1]=[prop,...newOp[1]],notifyUpdate(newOp,nextVersion)},propProxyStates=new Map,removePropListener=prop=>{const entry=propProxyStates.get(prop);entry&&(propProxyStates.delete(prop),entry[1]?.())},baseObject=Array.isArray(initialObject)?[]:Object.create(Object.getPrototypeOf(initialObject)),proxyObject=newProxy(baseObject,{deleteProperty(target,prop){const prevValue=Reflect.get(target,prop);removePropListener(prop);const deleted=Reflect.deleteProperty(target,prop);return deleted&&notifyUpdate(["delete",[prop],prevValue]),deleted},set(target,prop,value,receiver){const hasPrevValue=Reflect.has(target,prop),prevValue=Reflect.get(target,prop,receiver);if(hasPrevValue&&(objectIs(prevValue,value)||proxyCache.has(value)&&objectIs(prevValue,proxyCache.get(value))))return!0;removePropListener(prop),isObject(value)&&(value=(0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.Ai)(value)||value);let nextValue=value;if(Object.getOwnPropertyDescriptor(target,prop)?.set);else if(value instanceof Promise)value.then((v=>{Object.assign(value,{status:"fulfilled",value:v}),notifyUpdate(["resolve",[prop],v])})).catch((e=>{Object.assign(value,{status:"rejected",reason:e}),notifyUpdate(["reject",[prop],e])}));else{!proxyStateMap.has(value)&&canProxy(value)&&(nextValue=proxy(value));const childProxyState=!refSet.has(nextValue)&&proxyStateMap.get(nextValue);childProxyState&&((prop,propProxyState)=>{if(isDev()&&propProxyStates.has(prop))throw new Error("prop listener already exists");if(listeners.size){const remove=propProxyState[3](createPropListener(prop));propProxyStates.set(prop,[propProxyState,remove])}else propProxyStates.set(prop,[propProxyState])})(prop,childProxyState)}return Reflect.set(target,prop,nextValue,receiver),notifyUpdate(["set",[prop],value,prevValue]),!0}});proxyCache.set(initialObject,proxyObject);const proxyState=[baseObject,(nextCheckVersion=++versionHolder[1])=>(checkVersion===nextCheckVersion||listeners.size||(checkVersion=nextCheckVersion,propProxyStates.forEach((([propProxyState])=>{const propVersion=propProxyState[1](nextCheckVersion);propVersion>version&&(version=propVersion)}))),version),createSnapshot,listener=>{listeners.add(listener),1===listeners.size&&propProxyStates.forEach((([propProxyState,prevRemove],prop)=>{if(isDev()&&prevRemove)throw new Error("remove already exists");const remove=propProxyState[3](createPropListener(prop));propProxyStates.set(prop,[propProxyState,remove])}));return()=>{listeners.delete(listener),0===listeners.size&&propProxyStates.forEach((([propProxyState,remove],prop)=>{remove&&(remove(),propProxyStates.set(prop,[propProxyState]))}))}}];return proxyStateMap.set(proxyObject,proxyState),Reflect.ownKeys(initialObject).forEach((key=>{const desc=Object.getOwnPropertyDescriptor(initialObject,key);desc.get||desc.set?Object.defineProperty(baseObject,key,desc):proxyObject[key]=initialObject[key]})),proxyObject})=>[proxyFunction2,proxyStateMap,refSet,objectIs,newProxy,canProxy,defaultHandlePromise,snapCache,createSnapshot,proxyCache,versionHolder])();function proxy(initialObject={}){return proxyFunction(initialObject)}function subscribe(proxyObject,callback,notifyInSync){const proxyState=proxyStateMap.get(proxyObject);let promise;isDev()&&!proxyState&&console.warn("Please use proxy object");const ops=[],addListener=proxyState[3];let isListenerActive=!1;const removeListener=addListener((op=>{ops.push(op),notifyInSync?callback(ops.splice(0)):promise||(promise=Promise.resolve().then((()=>{promise=void 0,isListenerActive&&callback(ops.splice(0))})))}));return isListenerActive=!0,()=>{isListenerActive=!1,removeListener()}}function snapshot(proxyObject,handlePromise){const proxyState=proxyStateMap.get(proxyObject);isDev()&&!proxyState&&console.warn("Please use proxy object");const[target,ensureVersion,createSnapshot]=proxyState;return createSnapshot(target,ensureVersion(),handlePromise)}function ref(obj){return refSet.add(obj),obj}function proxyWithComputed(initialObject,computedFns){Object.keys(computedFns).forEach((key=>{if(Object.getOwnPropertyDescriptor(initialObject,key))throw new Error("object property already defined");const computedFn=computedFns[key],{get,set}="function"==typeof computedFn?{get:computedFn}:computedFn,desc={get:()=>get(snapshot(proxyObject))};set&&(desc.set=newValue=>set(proxyObject,newValue)),Object.defineProperty(initialObject,key,desc)}));const proxyObject=proxy(initialObject);return proxyObject}},"./node_modules/.pnpm/@zag-js+utils@0.77.1/node_modules/@zag-js/utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$1:()=>first,Cu:()=>isDev,Et:()=>isNumber,Gv:()=>isObject,HV:()=>last,IU:()=>clear,Jg:()=>runIfFn,Kg:()=>isString,Lm:()=>isBoolean,OK:()=>callAll,PM:()=>createSplitProps,Qd:()=>isPlainObject,R8:()=>warn,TF:()=>remove,TX:()=>tryCatch,Tn:()=>isFunction,V1:()=>invariant,WQ:()=>add,Xx:()=>addOrRemove,YW:()=>match,Yp:()=>nextIndex,aU:()=>prevIndex,cK:()=>hasProp,cy:()=>isArray,iv:()=>chunk,kZ:()=>isNull,lQ:()=>noop,n4:()=>isEqual,oE:()=>compact,uR:()=>uuid,wg:()=>cast});var first=v=>v[0],last=v=>v[v.length-1],add=(v,...items)=>v.concat(items),remove=(v,...items)=>v.filter((t=>!items.includes(t))),addOrRemove=(v,item)=>((v,t)=>-1!==v.indexOf(t))(v,item)?remove(v,item):add(v,item);function clear(v){for(;v.length>0;)v.pop();return v}function nextIndex(v,idx,opts={}){const{step=1,loop=!0}=opts,next2=idx+step,len=v.length,last2=len-1;return-1===idx?step>0?0:last2:next2<0?loop?last2:0:next2>=len?loop?0:idx>len?len:idx:next2}function prevIndex(v,idx,opts={}){const{step=1,loop=!0}=opts;return nextIndex(v,idx,{step:-step,loop})}var chunk=(v,size)=>v.reduce(((rows,value,index)=>(index%size==0?rows.push([value]):last(rows)?.push(value),rows)),[]),isArrayLike=value=>"Array"===value?.constructor.name,isEqual=(a,b)=>{if(Object.is(a,b))return!0;if(null==a&&null!=b||null!=a&&null==b)return!1;if("function"==typeof a?.isEqual&&"function"==typeof b?.isEqual)return a.isEqual(b);if("function"==typeof a&&"function"==typeof b)return a.toString()===b.toString();if(isArrayLike(a)&&isArrayLike(b))return((a,b)=>{if(a.length!==b.length)return!1;for(let i=0;i<a.length;i++)if(!isEqual(a[i],b[i]))return!1;return!0})(Array.from(a),Array.from(b));if("object"!=typeof a||"object"!=typeof b)return!1;const keys=Object.keys(b??Object.create(null)),length=keys.length;for(let i=0;i<length;i++){if(!Reflect.has(a,keys[i]))return!1}for(let i=0;i<length;i++){const key=keys[i];if(!isEqual(a[key],b[key]))return!1}return!0},runIfFn=(v,...a)=>("function"==typeof v?v(...a):v)??void 0,cast=v=>v,noop=()=>{},callAll=(...fns)=>(...a)=>{fns.forEach((function(fn){fn?.(...a)}))},uuid=(()=>{let id=0;return()=>(id++,id.toString(36))})();function match(key,record,...args){if(key in record){const fn=record[key];return"function"==typeof fn?fn(...args):fn}const error=new Error(`No matching key: ${JSON.stringify(key)} in ${JSON.stringify(Object.keys(record))}`);throw Error.captureStackTrace?.(error,match),error}var tryCatch=(fn,fallback)=>{try{return fn()}catch(error){return error instanceof Error&&Error.captureStackTrace?.(error,tryCatch),fallback?.()}},isDev=()=>!1,isArray=v=>Array.isArray(v),isBoolean=v=>!0===v||!1===v,isObjectLike=v=>null!=v&&"object"==typeof v,isObject=v=>isObjectLike(v)&&!isArray(v),isNumber=v=>"number"==typeof v&&!Number.isNaN(v),isString=v=>"string"==typeof v,isFunction=v=>"function"==typeof v,isNull=v=>null==v,hasProp=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),fnToString=Function.prototype.toString,objectCtorString=fnToString.call(Object),isPlainObject=v=>{if(!isObjectLike(v)||"[object Object]"!=(v=>Object.prototype.toString.call(v))(v))return!1;const proto=Object.getPrototypeOf(v);if(null===proto)return!0;const Ctor=hasProp(proto,"constructor")&&proto.constructor;return"function"==typeof Ctor&&Ctor instanceof Ctor&&fnToString.call(Ctor)==objectCtorString};var createSplitProps=keys=>function split(props){return function splitProps(props,keys){const rest={},result={},keySet=new Set(keys);for(const key in props)keySet.has(key)?result[key]=props[key]:rest[key]=props[key];return[result,rest]}(props,keys)};function compact(obj){if(!isPlainObject2(obj)||void 0===obj)return obj;const keys=Reflect.ownKeys(obj).filter((key=>"string"==typeof key)),filtered={};for(const key of keys){const value=obj[key];void 0!==value&&(filtered[key]=compact(value))}return filtered}var isPlainObject2=value=>value&&"object"==typeof value&&value.constructor===Object;function warn(...a){1===a.length?a[0]:a[1],2!==a.length||a[0]}function invariant(...a){1===a.length?a[0]:a[1],2!==a.length||a[0]}},"./node_modules/.pnpm/proxy-compare@3.0.0/node_modules/proxy-compare/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ai:()=>getUntracked,Hq:()=>isChanged,OC:()=>markToTrack,tz:()=>createProxy});const TRACK_MEMO_SYMBOL=Symbol(),GET_ORIGINAL_SYMBOL=Symbol(),IS_TARGET_COPIED_PROPERTY="f",NEXT_OBJECT_PROPERTY="n",CHANGED_PROPERTY="g";let newProxy=(target,handler)=>new Proxy(target,handler);const getProto=Object.getPrototypeOf,objectsToTrack=new WeakMap,isObjectToTrack=obj=>obj&&(objectsToTrack.has(obj)?objectsToTrack.get(obj):getProto(obj)===Object.prototype||getProto(obj)===Array.prototype),isObject=x=>"object"==typeof x&&null!==x,copyTargetObject=obj=>{if(Array.isArray(obj))return Array.from(obj);const descriptors=Object.getOwnPropertyDescriptors(obj);return Object.values(descriptors).forEach((desc=>{desc.configurable=!0})),Object.create(getProto(obj),descriptors)},createProxyHandler=(origObj,isTargetCopied)=>{const state={[IS_TARGET_COPIED_PROPERTY]:isTargetCopied};let trackObject=!1;const recordUsage=(type,key)=>{if(!trackObject){let used=state.a.get(origObj);if(used||(used={},state.a.set(origObj,used)),"w"===type)used.w=!0;else{let set=used[type];set||(set=new Set,used[type]=set),set.add(key)}}},handler={get:(target,key)=>key===GET_ORIGINAL_SYMBOL?origObj:(recordUsage("k",key),createProxy(Reflect.get(target,key),state.a,state.c,state.t)),has:(target,key)=>key===TRACK_MEMO_SYMBOL?(trackObject=!0,state.a.delete(origObj),!0):(recordUsage("h",key),Reflect.has(target,key)),getOwnPropertyDescriptor:(target,key)=>(recordUsage("o",key),Reflect.getOwnPropertyDescriptor(target,key)),ownKeys:target=>(recordUsage("w"),Reflect.ownKeys(target))};return isTargetCopied&&(handler.set=handler.deleteProperty=()=>!1),[handler,state]},getOriginalObject=obj=>obj[GET_ORIGINAL_SYMBOL]||obj,createProxy=(obj,affected,proxyCache,targetCache)=>{if(!isObjectToTrack(obj))return obj;let targetAndCopied=targetCache&&targetCache.get(obj);if(!targetAndCopied){const target=getOriginalObject(obj);targetAndCopied=(obj=>Object.values(Object.getOwnPropertyDescriptors(obj)).some((descriptor=>!descriptor.configurable&&!descriptor.writable)))(target)?[target,copyTargetObject(target)]:[target],null==targetCache||targetCache.set(obj,targetAndCopied)}const[target,copiedTarget]=targetAndCopied;let handlerAndState=proxyCache&&proxyCache.get(target);return handlerAndState&&handlerAndState[1].f===!!copiedTarget||(handlerAndState=createProxyHandler(target,!!copiedTarget),handlerAndState[1].p=newProxy(copiedTarget||target,handlerAndState[0]),proxyCache&&proxyCache.set(target,handlerAndState)),handlerAndState[1].a=affected,handlerAndState[1].c=proxyCache,handlerAndState[1].t=targetCache,handlerAndState[1].p},isChanged=(prevObj,nextObj,affected,cache,isEqual=Object.is)=>{if(isEqual(prevObj,nextObj))return!1;if(!isObject(prevObj)||!isObject(nextObj))return!0;const used=affected.get(getOriginalObject(prevObj));if(!used)return!0;if(cache){const hit=cache.get(prevObj);if(hit&&hit.n===nextObj)return hit.g;cache.set(prevObj,{[NEXT_OBJECT_PROPERTY]:nextObj,[CHANGED_PROPERTY]:!1})}let changed=null;try{for(const key of used.h||[])if(changed=Reflect.has(prevObj,key)!==Reflect.has(nextObj,key),changed)return changed;if(!0===used.w){if(changed=((prevObj,nextObj)=>{const prevKeys=Reflect.ownKeys(prevObj),nextKeys=Reflect.ownKeys(nextObj);return prevKeys.length!==nextKeys.length||prevKeys.some(((k,i)=>k!==nextKeys[i]))})(prevObj,nextObj),changed)return changed}else for(const key of used.o||[]){const hasPrev=!!Reflect.getOwnPropertyDescriptor(prevObj,key);if(changed=hasPrev!==!!Reflect.getOwnPropertyDescriptor(nextObj,key),changed)return changed}for(const key of used.k||[])if(changed=isChanged(prevObj[key],nextObj[key],affected,cache,isEqual),changed)return changed;return null===changed&&(changed=!0),changed}finally{cache&&cache.set(prevObj,{[NEXT_OBJECT_PROPERTY]:nextObj,[CHANGED_PROPERTY]:changed})}},getUntracked=obj=>isObjectToTrack(obj)&&obj[GET_ORIGINAL_SYMBOL]||null,markToTrack=(obj,mark=!0)=>{objectsToTrack.set(obj,mark)}}}]);