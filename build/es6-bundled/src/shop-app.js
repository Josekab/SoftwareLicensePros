define(["exports","meta","require"],function(_exports,meta,_require){/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/'use strict';Object.defineProperty(_exports,"__esModule",{value:!0/* ignoreName */ /* skipSlots */});_exports.$documentWaitDefault=documentWait;_exports.addListener=addListener;_exports.afterNextRender=afterNextRender;_exports.applyCss=applyCss;_exports.applyStyle=applyStyle;_exports.applyStylePlaceHolder=applyStylePlaceHolder;_exports.beforeNextRender=beforeNextRender;_exports.calculateSplices=calculateSplices;_exports.camelToDashCase=camelToDashCase;_exports.createScopeStyle=createScopeStyle;_exports.cssFromModule=cssFromModule;_exports.cssFromModuleImports=cssFromModuleImports;_exports.cssFromModules=cssFromModules;_exports.cssFromTemplate=cssFromTemplate;_exports.dashToCamelCase=dashToCamelCase;_exports.deepTargetFind=deepTargetFind;_exports.detectMixin=detectMixin;_exports.dumpRegistrations=dumpRegistrations;_exports.elementHasBuiltCss=elementHasBuiltCss;_exports.elementsAreInvalid=elementsAreInvalid;_exports.findMatchingParen=findMatchingParen;_exports.flush$2=flush;_exports.forEachRule=forEachRule;_exports.gatherStyleText=gatherStyleText;_exports.get=get;_exports.getBuildComment=getBuildComment;_exports.getComputedStyleValue=getComputedStyleValue;_exports.getCssBuild=getCssBuild;_exports.getIsExtends=getIsExtends;_exports.invalidate=invalidate;_exports.invalidateTemplate=invalidateTemplate;_exports.isAncestor=isAncestor;_exports.isDescendant=isDescendant;_exports.isKeyframesSelector=isKeyframesSelector;_exports.isOptimalCssBuild=isOptimalCssBuild;_exports.isPath=isPath;_exports.isTargetedBuild=isTargetedBuild;_exports.isUnscopedStyle=isUnscopedStyle;_exports.isValid=isValid;_exports.isValidating=isValidating;_exports.matches=matches;_exports.mixinBehaviors=mixinBehaviors;_exports.modelForElement=modelForElement;_exports.normalize=normalize;_exports.parse=parse;_exports.pathFromUrl=pathFromUrl;_exports.prevent=prevent;_exports.processUnscopedStyle=processUnscopedStyle;_exports.processVariableAndFallback=processVariableAndFallback;_exports.register=register;_exports.register$1=register$1;_exports.removeCustomPropAssignment=removeCustomPropAssignment;_exports.removeListener=removeListener;_exports.resetMouseCanceller=resetMouseCanceller;_exports.resolveCss=resolveCss;_exports.resolveUrl=resolveUrl;_exports.root=root;_exports.rulesForStyle=rulesForStyle;_exports.set=set;_exports.setElementClassRaw=setElementClassRaw;_exports.setTouchAction=setTouchAction;_exports.split=split;_exports.splitSelectorList=splitSelectorList;_exports.startValidating=startValidating;_exports.startValidatingTemplate=startValidatingTemplate;_exports.stringify=stringify;_exports.stylesFromModule=stylesFromModule;_exports.stylesFromModuleImports=stylesFromModuleImports;_exports.stylesFromModules=stylesFromModules;_exports.stylesFromTemplate=stylesFromTemplate;_exports.templateIsValid=templateIsValid;_exports.templateIsValidating=templateIsValidating;_exports.templatize=templatize;_exports.toCssText=toCssText;_exports.translate=translate;_exports.updateNativeProperties=updateNativeProperties;_exports.OptionalMutableDataBehavior=_exports.OptionalMutableData=_exports.MutableDataBehavior=_exports.MutableData=_exports.MIXIN_MATCH=_exports.MEDIA_MATCH=_exports.LegacyElementMixin=_exports.IronSelection=_exports.IronSelectableBehavior=_exports.IronScrollTargetBehavior=_exports.IronResizableBehavior=_exports.IronMultiSelectableBehaviorImpl=_exports.IronMultiSelectableBehavior=_exports.IS_VAR=_exports.HOST_SUFFIX=_exports.HOST_PREFIX=_exports.GestureEventListeners=_exports.FlattenedNodesObserver=_exports.EventApi=_exports.ElementMixin=_exports.DomRepeat=_exports.DomModule=_exports.DomIf=_exports.DomBind=_exports.DomApi=_exports.DirMixin=_exports.Debouncer=_exports.CustomStyleProvider=_exports.CustomStyleInterfaceInterface=_exports.CustomStyle=_exports.Class=_exports.Base=_exports.BRACKETED=_exports.ArraySelectorMixin=_exports.ArraySelector=_exports.AppScrollEffectsBehavior=_exports.AppRouteConverterBehavior=_exports.AppLayoutBehavior=_exports.ANIMATION_MATCH=_exports.$unscopedStyleHandler=_exports.$templatizerBehavior=_exports.$templatize=_exports.$templateStamp=_exports.$templateMapDefault=_exports.$templateMap=_exports.$styleUtil=_exports.$styleSettings=_exports.$styleGather=_exports.$settings=_exports.$resolveUrl=_exports.$renderStatus=_exports.$propertyEffects=_exports.$propertyAccessors=_exports.$propertiesMixin=_exports.$propertiesChanged=_exports.$polymerLegacy=_exports.$polymerFn=_exports.$polymerElement=_exports.$polymerDom=_exports.$path=_exports.$mutableDataBehavior=_exports.$mutableData=_exports.$mixin=_exports.$legacyElementMixin=_exports.$ironSelection=_exports.$ironSelectable=_exports.$ironScrollTargetBehavior=_exports.$ironResizableBehavior=_exports.$ironMultiSelectable=_exports.$htmlTag=_exports.$helpers=_exports.$gestures=_exports.$gestureEventListeners=_exports.$flush=_exports.$flattenedNodesObserver=_exports.$elementMixin=_exports.$domRepeat=_exports.$domModule=_exports.$domIf=_exports.$domBind=_exports.$documentWait=_exports.$dirMixin=_exports.$debounce=_exports.$customStyleInterfaceDefault=_exports.$customStyleInterface$1=_exports.$customStyle=_exports.$cssParse=_exports.$commonUtils=_exports.$commonRegex=_exports.$class=_exports.$caseMap=_exports.$async=_exports.$arraySplice=_exports.$arraySelector=_exports.$applyShimUtils=_exports.$applyShimDefault=_exports.$applyShim$1=_exports.$appScrollEffectsBehavior=_exports.$appRouteConverterBehavior=_exports.$appLayoutBehavior=void 0;_exports.wrap=_exports.version$1=_exports.version=_exports.useShadow=_exports.useNativeCustomElements=_exports.useNativeCSSProperties=_exports.updateStyles=_exports.types=_exports.timeOut=_exports.strictTemplatePolicy=_exports.setStrictTemplatePolicy=_exports.setSanitizeDOMValue=_exports.setRootPath=_exports.setPassiveTouchGestures=_exports.setAllowTemplateFromDomModule=_exports.scrollTimingFunction=_exports.scroll=_exports.scopingAttribute=_exports.sanitizeDOMValue=_exports.rootPath=_exports.remove=_exports.registrations=_exports.registerEffect=_exports.recognizers=_exports.queryAllRoot=_exports.passiveTouchGestures=_exports.nativeShadow=_exports.nativeCssVariables=_exports.microTask=_exports.matchesSelector=_exports.isDeep=_exports.instanceCount=_exports.idlePeriod=_exports.htmlLiteral=_exports.html$2=_exports.html$1=_exports.html=_exports.gestures=_exports.flush$1=_exports.flush=_exports.findOriginalTarget=_exports.dom=_exports.dedupingMixin=_exports.cssBuild=_exports.animationFrame=_exports.allowTemplateFromDomModule=_exports.enqueueDebouncer=_exports.addDebouncer=_exports.add=_exports._scrollTimer=_exports._scrollEffects=_exports.VAR_CONSUMED=_exports.VAR_ASSIGN=_exports.Templatizer=_exports.TemplateStamp=_exports.TemplateInstanceBase=_exports.StyleNode=_exports.PropertyEffects=_exports.PropertyAccessors=_exports.PropertiesMixin=_exports.PropertiesChanged=_exports.PolymerElement=_exports.Polymer$1=_exports.Polymer=void 0;meta=babelHelpers.interopRequireWildcard(meta);_require=babelHelpers.interopRequireWildcard(_require);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){keys.push.apply(keys,Object.getOwnPropertySymbols(object))}if(enumerableOnly)keys=keys.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(source,!0).forEach(function(key){babelHelpers.defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}const nativeShadow=!(window.ShadyDOM&&window.ShadyDOM.inUse);_exports.nativeShadow=nativeShadow;let nativeCssVariables_;/**
                          * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
                          */function calcCssVariables(settings){if(settings&&settings.shimcssproperties){nativeCssVariables_=/* ignoreName */!1/* skipSlots */ /* skipSlots */}else{// chrome 49 has semi-working css vars, check if box-shadow works
// safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
// However, shim css custom properties are only supported with ShadyDOM enabled,
// so fall back on native if we do not detect ShadyDOM
// Edge 15: custom properties used in ::before and ::after will also be used in the parent element
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
nativeCssVariables_=nativeShadow||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}}/** @type {string | undefined} */let cssBuild;_exports.cssBuild=cssBuild;if(window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0){_exports.cssBuild=cssBuild=window.ShadyCSS.cssBuild}if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0){nativeCssVariables_=window.ShadyCSS.nativeCss}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);// reset window variable to let ShadyCSS API take its place
window.ShadyCSS=void 0}else{calcCssVariables(window.WebComponents&&window.WebComponents.flags)}// Hack for type error under new type inference which doesn't like that
// nativeCssVariables is updated in a function and assigns the type
// `function(): ?` instead of `boolean`.
const nativeCssVariables=/** @type {boolean} */nativeCssVariables_;_exports.nativeCssVariables=nativeCssVariables;var styleSettings={nativeShadow:nativeShadow,get cssBuild(){return cssBuild},nativeCssVariables:nativeCssVariables};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
      Extremely simple css parser. Intended to be not more than what we need
      and definitely not necessarily correct =).
      */_exports.$styleSettings=styleSettings;"use strict";/** @unrestricted */class StyleNode{constructor(){/** @type {number} */this.start=0;/** @type {number} */this.end=0;/** @type {StyleNode} */this.previous=null;/** @type {StyleNode} */this.parent=null;/** @type {Array<StyleNode>} */this.rules=null;/** @type {string} */this.parsedCssText="";/** @type {string} */this.cssText="";/** @type {boolean} */this.atRule=!1;/** @type {number} */this.type=0;/** @type {string} */this.keyframesName="";/** @type {string} */this.selector="";/** @type {string} */this.parsedSelector=""}}/**
   * @param {string} text
   * @return {StyleNode}
   */_exports.StyleNode=StyleNode;function parse(text){text=clean(text);return parseCss(lex(text),text)}// remove stuff we don't care about that may hinder parsing
/**
 * @param {string} cssText
 * @return {string}
 */function clean(cssText){return cssText.replace(RX.comments,"").replace(RX.port,"")}// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {StyleNode}
 */function lex(text){let root=new StyleNode;root.start=0;root.end=text.length;let n=root;for(let i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n.rules){n.rules=[]}let p=n,previous=p.rules[p.rules.length-1]||null;n=new StyleNode;n.start=i+1;n.parent=p;n.previous=previous;p.rules.push(n)}else if(text[i]===CLOSE_BRACE){n.end=i+1;n=n.parent||root}}return root}// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {StyleNode}
 */function parseCss(node,text){let t=text.substring(node.start,node.end-1);node.parsedCssText=node.cssText=t.trim();if(node.parent){let ss=node.previous?node.previous.end:node.parent.start;t=text.substring(ss,node.start-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces," ");// TODO(sorvell): ad hoc; make selector include only after last ;
// helps with mixin syntax
t=t.substring(t.lastIndexOf(";")+1);let s=node.parsedSelector=node.selector=t.trim();node.atRule=0===s.indexOf(AT_START);// note, support a subset of rule types...
if(node.atRule){if(0===s.indexOf(MEDIA_START)){node.type=types.MEDIA_RULE}else if(s.match(RX.keyframesRule)){node.type=types.KEYFRAMES_RULE;node.keyframesName=node.selector.split(RX.multipleSpaces).pop()}}else{if(0===s.indexOf(VAR_START)){node.type=types.MIXIN_RULE}else{node.type=types.STYLE_RULE}}}let r$=node.rules;if(r$){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text)}}return node}/**
   * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
   * expanded form that doesn't require trailing space `\000033`
   * @param {string} s
   * @return {string}
   */function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let code=arguments[1],repeat=6-code.length;while(repeat--){code="0"+code}return"\\"+code})}/**
   * stringify parsed css.
   * @param {StyleNode} node
   * @param {boolean=} preserveProperties
   * @param {string=} text
   * @return {string}
   */function stringify(node,preserveProperties,text=""){// calc rule cssText
let cssText="";if(node.cssText||node.rules){let r$=node.rules;if(r$&&!_hasMixinRules(r$)){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText)}}else{cssText=preserveProperties?node.cssText:removeCustomProps(node.cssText);cssText=cssText.trim();if(cssText){cssText="  "+cssText+"\n"}}}// emit rule if there is cssText
if(cssText){if(node.selector){text+=node.selector+" "+OPEN_BRACE+"\n"}text+=cssText;if(node.selector){text+=CLOSE_BRACE+"\n\n"}}return text}/**
   * @param {Array<StyleNode>} rules
   * @return {boolean}
   */function _hasMixinRules(rules){let r=rules[0];return!!r&&!!r.selector&&0===r.selector.indexOf(VAR_START)}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText)}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,"").replace(RX.mixinProp,"")}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,"").replace(RX.varApply,"")}/** @enum {number} */const types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3};_exports.types=types;const OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@";var cssParse={StyleNode:StyleNode,parse:parse,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$cssParse=cssParse;const VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;_exports.VAR_ASSIGN=VAR_ASSIGN;const MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;_exports.MIXIN_MATCH=MIXIN_MATCH;const VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi;_exports.VAR_CONSUMED=VAR_CONSUMED;const ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/;_exports.ANIMATION_MATCH=ANIMATION_MATCH;const MEDIA_MATCH=/@media\s(.*)/;_exports.MEDIA_MATCH=MEDIA_MATCH;const IS_VAR=/^--/;_exports.IS_VAR=IS_VAR;const BRACKETED=/\{[^}]*\}/g;_exports.BRACKETED=BRACKETED;const HOST_PREFIX="(?:^|[^.#[:])";_exports.HOST_PREFIX=HOST_PREFIX;const HOST_SUFFIX="($|[.:[\\s>+~])";_exports.HOST_SUFFIX=HOST_SUFFIX;var commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$commonRegex=commonRegex;"use strict";/** @type {!Set<string>} */const styleTextSet=new Set,scopingAttribute="shady-unscoped";_exports.scopingAttribute=scopingAttribute;/**
                                                   * Add a specifically-marked style to the document directly, and only one copy of that style.
                                                   *
                                                   * @param {!HTMLStyleElement} style
                                                   * @return {undefined}
                                                   */function processUnscopedStyle(style){const text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);const newStyle=style.cloneNode(!0);document.head.appendChild(newStyle)}}/**
   * Check if a style is supposed to be unscoped
   * @param {!HTMLStyleElement} style
   * @return {boolean} true if the style has the unscoping attribute
   */function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute)}var unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$unscopedStyleHandler=unscopedStyleHandler;"use strict";function toCssText(rules,callback){if(!rules){return""}if("string"===typeof rules){rules=parse(rules)}if(callback){forEachRule(rules,callback)}return stringify(rules,nativeCssVariables)}/**
   * @param {HTMLStyleElement} style
   * @return {StyleNode}
   */function rulesForStyle(style){if(!style.__cssRules&&style.textContent){style.__cssRules=parse(style.textContent)}return style.__cssRules||null}// Tests if a rule is a keyframes selector, which looks almost exactly
// like a normal selector but is not (it has nothing to do with scoping
// for example).
/**
 * @param {StyleNode} rule
 * @return {boolean}
 */function isKeyframesSelector(rule){return!!rule.parent&&rule.parent.type===types.KEYFRAMES_RULE}/**
   * @param {StyleNode} node
   * @param {Function=} styleRuleCallback
   * @param {Function=} keyframesRuleCallback
   * @param {boolean=} onlyActiveRules
   */function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return}let skipRules=!1,type=node.type;if(onlyActiveRules){if(type===types.MEDIA_RULE){let matchMedia=node.selector.match(MEDIA_MATCH);if(matchMedia){// if rule is a non matching @media rule, skip subrules
if(!window.matchMedia(matchMedia[1]).matches){skipRules=!0}}}}if(type===types.STYLE_RULE){styleRuleCallback(node)}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node)}else if(type===types.MIXIN_RULE){skipRules=!0}let r$=node.rules;if(r$&&!skipRules){for(let i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules)}}}// add a string of cssText to the document.
/**
 * @param {string} cssText
 * @param {string} moniker
 * @param {Node} target
 * @param {Node} contextNode
 * @return {HTMLStyleElement}
 */function applyCss(cssText,moniker,target,contextNode){let style=createScopeStyle(cssText,moniker);applyStyle(style,target,contextNode);return style}/**
   * @param {string} cssText
   * @param {string} moniker
   * @return {HTMLStyleElement}
   */function createScopeStyle(cssText,moniker){let style=/** @type {HTMLStyleElement} */document.createElement("style");if(moniker){style.setAttribute("scope",moniker)}style.textContent=cssText;return style}/**
   * Track the position of the last added style for placing placeholders
   * @type {Node}
   */let lastHeadApplyNode=null;// insert a comment node as a styling position placeholder.
/**
 * @param {string} moniker
 * @return {!Comment}
 */function applyStylePlaceHolder(moniker){let placeHolder=document.createComment(" Shady DOM styles for "+moniker+" "),after=lastHeadApplyNode?lastHeadApplyNode.nextSibling:null,scope=document.head;scope.insertBefore(placeHolder,after||scope.firstChild);lastHeadApplyNode=placeHolder;return placeHolder}/**
   * @param {HTMLStyleElement} style
   * @param {?Node} target
   * @param {?Node} contextNode
   */function applyStyle(style,target,contextNode){target=target||document.head;let after=contextNode&&contextNode.nextSibling||target.firstChild;target.insertBefore(style,after);if(!lastHeadApplyNode){lastHeadApplyNode=style}else{// only update lastHeadApplyNode if the new style is inserted after the old lastHeadApplyNode
let position=style.compareDocumentPosition(lastHeadApplyNode);if(position===Node.DOCUMENT_POSITION_PRECEDING){lastHeadApplyNode=style}}}/**
   * @param {string} buildType
   * @return {boolean}
   */function isTargetedBuild(buildType){return nativeShadow?"shadow"===buildType:"shady"===buildType}/**
   * Walk from text[start] matching parens and
   * returns position of the outer end paren
   * @param {string} text
   * @param {number} start
   * @return {number}
   */function findMatchingParen(text,start){let level=0;for(let i=start,l=text.length;i<l;i++){if("("===text[i]){level++}else if(")"===text[i]){if(0===--level){return i}}}return-1}/**
   * @param {string} str
   * @param {function(string, string, string, string)} callback
   */function processVariableAndFallback(str,callback){// find 'var('
let start=str.indexOf("var(");if(-1===start){// no var?, everything is prefix
return callback(str,"","","")}//${prefix}var(${inner})${suffix}
let end=findMatchingParen(str,start+3),inner=str.substring(start+4,end),prefix=str.substring(0,start),suffix=processVariableAndFallback(str.substring(end+1),callback),comma=inner.indexOf(",");// value and fallback args should be trimmed to match in property lookup
if(-1===comma){// variable, no fallback
return callback(prefix,inner.trim(),"",suffix)}// var(${value},${fallback})
let value=inner.substring(0,comma).trim(),fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix)}/**
   * @param {Element} element
   * @param {string} value
   */function setElementClassRaw(element,value){// use native setAttribute provided by ShadyDOM when setAttribute is patched
if(nativeShadow){element.setAttribute("class",value)}else{window.ShadyDOM.nativeMethods.setAttribute.call(element,"class",value)}}const wrap=window.ShadyDOM&&window.ShadyDOM.wrap||(node=>node);/**
                                                                                         * @param {Element | {is: string, extends: string}} element
                                                                                         * @return {{is: string, typeExtension: string}}
                                                                                         */_exports.wrap=wrap;function getIsExtends(element){let localName=element.localName,is="",typeExtension="";/*
                          NOTE: technically, this can be wrong for certain svg elements
                          with `-` in the name like `<font-face>`
                          */if(localName){if(-1<localName.indexOf("-")){is=localName}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute("is")||""}}else{is=/** @type {?} */element.is;typeExtension=/** @type {?} */element.extends}return{is,typeExtension}}/**
   * @param {Element|DocumentFragment} element
   * @return {string}
   */function gatherStyleText(element){/** @type {!Array<string>} */const styleTextParts=[],styles=/** @type {!NodeList<!HTMLStyleElement>} */element.querySelectorAll("style");for(let i=0;i<styles.length;i++){const style=styles[i];if(isUnscopedStyle(style)){if(!nativeShadow){processUnscopedStyle(style);style.parentNode.removeChild(style)}}else{styleTextParts.push(style.textContent);style.parentNode.removeChild(style)}}return styleTextParts.join("").trim()}/**
   * Split a selector separated by commas into an array in a smart way
   * @param {string} selector
   * @return {!Array<string>}
   */function splitSelectorList(selector){const parts=[];let part="";for(let i=0;0<=i&&i<selector.length;i++){// A selector with parentheses will be one complete part
if("("===selector[i]){// find the matching paren
const end=findMatchingParen(selector,i);// push the paren block into the part
part+=selector.slice(i,end+1);// move the index to after the paren block
i=end}else if(","===selector[i]){parts.push(part);part=""}else{part+=selector[i]}}// catch any pieces after the last comma
if(part){parts.push(part)}return parts}const CSS_BUILD_ATTR="css-build";/**
                                     * Return the polymer-css-build "build type" applied to this element
                                     *
                                     * @param {!HTMLElement} element
                                     * @return {string} Can be "", "shady", or "shadow"
                                     */function getCssBuild(element){if(cssBuild!==void 0){return(/** @type {string} */cssBuild)}if(element.__cssBuild===void 0){// try attribute first, as it is the common case
const attrValue=element.getAttribute(CSS_BUILD_ATTR);if(attrValue){element.__cssBuild=attrValue}else{const buildComment=getBuildComment(element);if(""!==buildComment){// remove build comment so it is not needlessly copied into every element instance
removeBuildComment(element)}element.__cssBuild=buildComment}}return element.__cssBuild||""}/**
   * Check if the given element, either a <template> or <style>, has been processed
   * by polymer-css-build.
   *
   * If so, then we can make a number of optimizations:
   * - polymer-css-build will decompose mixins into individual CSS Custom Properties,
   * so the ApplyShim can be skipped entirely.
   * - Under native ShadowDOM, the style text can just be copied into each instance
   * without modification
   * - If the build is "shady" and ShadyDOM is in use, the styling does not need
   * scoping beyond the shimming of CSS Custom Properties
   *
   * @param {!HTMLElement} element
   * @return {boolean}
   */function elementHasBuiltCss(element){return""!==getCssBuild(element)}/**
   * For templates made with tagged template literals, polymer-css-build will
   * insert a comment of the form `<!--css-build:shadow-->`
   *
   * @param {!HTMLElement} element
   * @return {string}
   */function getBuildComment(element){const buildComment="template"===element.localName?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;if(buildComment instanceof Comment){const commentParts=buildComment.textContent.trim().split(":");if(commentParts[0]===CSS_BUILD_ATTR){return commentParts[1]}}return""}/**
   * Check if the css build status is optimal, and do no unneeded work.
   *
   * @param {string=} cssBuild CSS build status
   * @return {boolean} css build is optimal or not
   */function isOptimalCssBuild(cssBuild=""){// CSS custom property shim always requires work
if(""===cssBuild||!nativeCssVariables){return!1}return nativeShadow?"shadow"===cssBuild:"shady"===cssBuild}/**
   * @param {!HTMLElement} element
   */function removeBuildComment(element){const buildComment="template"===element.localName?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;buildComment.parentNode.removeChild(buildComment)}var styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,findMatchingParen:findMatchingParen,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,wrap:wrap,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText,splitSelectorList:splitSelectorList,getCssBuild:getCssBuild,elementHasBuiltCss:elementHasBuiltCss,getBuildComment:getBuildComment,isOptimalCssBuild:isOptimalCssBuild};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$styleUtil=styleUtil;"use strict";function updateNativeProperties(element,properties){// remove previous properties
for(let p in properties){// NOTE: for bc with shim, don't apply null values.
if(null===p){element.style.removeProperty(p)}else{element.style.setProperty(p,properties[p])}}}/**
   * @param {Element} element
   * @param {string} property
   * @return {string}
   */function getComputedStyleValue(element,property){/**
   * @const {string}
   */const value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return""}else{return value.trim()}}/**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */function detectMixin(cssText){const has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);// reset state of the regexes
MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has}var commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:getComputedStyleValue,detectMixin:detectMixin};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
       * The apply shim simulates the behavior of `@apply` proposed at
       * https://tabatkins.github.io/specs/css-apply-rule/.
       * The approach is to convert a property like this:
       *
       *    --foo: {color: red; background: blue;}
       *
       * to this:
       *
       *    --foo_-_color: red;
       *    --foo_-_background: blue;
       *
       * Then where `@apply --foo` is used, that is converted to:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background);
       *
       * This approach generally works but there are some issues and limitations.
       * Consider, for example, that somewhere *between* where `--foo` is set and used,
       * another element sets it to:
       *
       *    --foo: { border: 2px solid red; }
       *
       * We must now ensure that the color and background from the previous setting
       * do not apply. This is accomplished by changing the property set to this:
       *
       *    --foo_-_border: 2px solid red;
       *    --foo_-_color: initial;
       *    --foo_-_background: initial;
       *
       * This works but introduces one new issue.
       * Consider this setup at the point where the `@apply` is used:
       *
       *    background: orange;
       *    `@apply` --foo;
       *
       * In this case the background will be unset (initial) rather than the desired
       * `orange`. We address this by altering the property set to use a fallback
       * value like this:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background, orange);
       *    border: var(--foo_-_border);
       *
       * Note that the default is retained in the property set and the `background` is
       * the desired `orange`. This leads us to a limitation.
       *
       * Limitation 1:
      
       * Only properties in the rule where the `@apply`
       * is used are considered as default values.
       * If another rule matches the element and sets `background` with
       * less specificity than the rule in which `@apply` appears,
       * the `background` will not be set.
       *
       * Limitation 2:
       *
       * When using Polymer's `updateStyles` api, new properties may not be set for
       * `@apply` properties.
      
      */_exports.$commonUtils=commonUtils;"use strict";const APPLY_NAME_CLEAN=/;\s*/m,INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/,IMPORTANT=/\s*!important/,MIXIN_VAR_SEP="_-_";/**
                              * @typedef {!Object<string, string>}
                              */let PropertyEntry,DependantsEntry,MixinMapEntry;// eslint-disable-line no-unused-vars
/**
 * @typedef {!Object<string, boolean>}
 */ // eslint-disable-line no-unused-vars
// map of mixin to property names
// --foo: {border: 2px} -> {properties: {(--foo, ['border'])}, dependants: {'element-name': proto}}
class MixinMap{constructor(){/** @type {!Object<string, !MixinMapEntry>} */this._map={}}/**
     * @param {string} name
     * @param {!PropertyEntry} props
     */set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}}}/**
     * @param {string} name
     * @return {MixinMapEntry}
     */get(name){name=name.trim();return this._map[name]||null}}/**
   * Callback for when an element is marked invalid
   * @type {?function(string)}
   */let invalidCallback=null;/** @unrestricted */class ApplyShim{constructor(){/** @type {?string} */this._currentElement=null;/** @type {HTMLMetaElement} */this._measureElement=null;this._map=new MixinMap}/**
     * return true if `cssText` contains a mixin definition or consumption
     * @param {string} cssText
     * @return {boolean}
     */detectMixin(cssText){return detectMixin(cssText)}/**
     * Gather styles into one style for easier processing
     * @param {!HTMLTemplateElement} template
     * @return {HTMLStyleElement}
     */gatherStyles(template){const styleText=gatherStyleText(template.content);if(styleText){const style=/** @type {!HTMLStyleElement} */document.createElement("style");style.textContent=styleText;template.content.insertBefore(style,template.content.firstChild);return style}return null}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @return {StyleNode}
     */transformTemplate(template,elementName){if(template._gatheredStyle===void 0){template._gatheredStyle=this.gatherStyles(template)}/** @type {HTMLStyleElement} */const style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null}/**
     * @param {!HTMLStyleElement} style
     * @param {string} elementName
     * @return {StyleNode}
     */transformStyle(style,elementName=""){let ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast}/**
     * @param {!HTMLStyleElement} style
     * @return {StyleNode}
     */transformCustomStyle(style){let ast=rulesForStyle(style);forEachRule(ast,rule=>{if(":root"===rule.selector){rule.selector="html"}this.transformRule(rule)});style.textContent=toCssText(ast);return ast}/**
     * @param {StyleNode} rules
     * @param {string} elementName
     */transformRules(rules,elementName){this._currentElement=elementName;forEachRule(rules,r=>{this.transformRule(r)});this._currentElement=null}/**
     * @param {!StyleNode} rule
     */transformRule(rule){rule.cssText=this.transformCssText(rule.parsedCssText,rule);// :root was only used for variable assignment in property shim,
// but generates invalid selectors with real properties.
// replace with `:host > *`, which serves the same effect
if(":root"===rule.selector){rule.selector=":host > *"}}/**
     * @param {string} cssText
     * @param {!StyleNode} rule
     * @return {string}
     */transformCssText(cssText,rule){// produce variables
cssText=cssText.replace(VAR_ASSIGN,(matchText,propertyName,valueProperty,valueMixin)=>this._produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule));// consume mixins
return this._consumeCssProperties(cssText,rule)}/**
     * @param {string} property
     * @return {string}
     */_getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=/** @type {HTMLMetaElement} */document.createElement("meta");this._measureElement.setAttribute("apply-shim-measure","");this._measureElement.style.all="initial";document.head.appendChild(this._measureElement)}return window.getComputedStyle(this._measureElement).getPropertyValue(property)}/**
     * Walk over all rules before this rule to find fallbacks for mixins
     *
     * @param {!StyleNode} startRule
     * @return {!Object}
     */_fallbacksFromPreviousRules(startRule){// find the "top" rule
let topRule=startRule;while(topRule.parent){topRule=topRule.parent}const fallbacks={};let seenStartRule=!1;forEachRule(topRule,r=>{// stop when we hit the input rule
seenStartRule=seenStartRule||r===startRule;if(seenStartRule){return}// NOTE: Only matching selectors are "safe" for this fallback processing
// It would be prohibitive to run `matchesSelector()` on each selector,
// so we cheat and only check if the same selector string is used, which
// guarantees things like specificity matching
if(r.selector===startRule.selector){Object.assign(fallbacks,this._cssTextToMap(r.parsedCssText))}});return fallbacks}/**
     * replace mixin consumption with variable consumption
     * @param {string} text
     * @param {!StyleNode=} rule
     * @return {string}
     */_consumeCssProperties(text,rule){/** @type {Array} */let m=null;// loop over text until all mixins with defintions have been applied
while(m=MIXIN_MATCH.exec(text)){let matchText=m[0],mixinName=m[1],idx=m.index,applyPos=idx+matchText.indexOf("@apply"),afterApplyPos=idx+matchText.length,textBeforeApply=text.slice(0,applyPos),textAfterApply=text.slice(afterApplyPos),defaults=rule?this._fallbacksFromPreviousRules(rule):{};Object.assign(defaults,this._cssTextToMap(textBeforeApply));let replacement=this._atApplyToCssProperties(mixinName,defaults);// use regex match position to replace mixin, keep linear processing time
text=`${textBeforeApply}${replacement}${textAfterApply}`;// move regex search to _after_ replacement
MIXIN_MATCH.lastIndex=idx+replacement.length}return text}/**
     * produce variable consumption at the site of mixin consumption
     * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
     * Example:
     *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
     *
     * @param {string} mixinName
     * @param {Object} fallbacks
     * @return {string}
     */_atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,"");let vars=[],mixinEntry=this._map.get(mixinName);// if we depend on a mixin before it is created
// make a sentinel entry in the map to add this element as a dependency for when it is defined.
if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName)}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=!0}let p,parts,f;const properties=mixinEntry.properties;for(p in properties){f=fallbacks&&fallbacks[p];parts=[p,": var(",mixinName,MIXIN_VAR_SEP,p];if(f){parts.push(",",f.replace(IMPORTANT,""))}parts.push(")");if(IMPORTANT.test(properties[p])){parts.push(" !important")}vars.push(parts.join(""))}}return vars.join("; ")}/**
     * @param {string} property
     * @param {string} value
     * @return {string}
     */_replaceInitialOrInherit(property,value){let match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){// initial
// replace `initial` with the concrete initial value for this property
value=this._getInitialValueForProperty(property)}else{// inherit
// with this purposfully illegal value, the variable will be invalid at
// compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
// and for inheriting values, will behave similarly
// we cannot support the same behavior for non inheriting values like 'border'
value="apply-shim-inherit"}}return value}/**
     * "parse" a mixin definition into a map of properties and values
     * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
     * @param {string} text
     * @param {boolean=} replaceInitialOrInherit
     * @return {!Object<string, string>}
     */_cssTextToMap(text,replaceInitialOrInherit=!1){let props=text.split(";"),property,value,out={};for(let i=0,p,sp;i<props.length;i++){p=props[i];if(p){sp=p.split(":");// ignore lines that aren't definitions like @media
if(1<sp.length){property=sp[0].trim();// some properties may have ':' in the value, like data urls
value=sp.slice(1).join(":");if(replaceInitialOrInherit){value=this._replaceInitialOrInherit(property,value)}out[property]=value}}}return out}/**
     * @param {MixinMapEntry} mixinEntry
     */_invalidateMixinEntry(mixinEntry){if(!invalidCallback){return}for(let elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName)}}}/**
     * @param {string} matchText
     * @param {string} propertyName
     * @param {?string} valueProperty
     * @param {?string} valueMixin
     * @param {!StyleNode} rule
     * @return {string}
     */_produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule){// handle case where property value is a mixin
if(valueProperty){// form: --mixin2: var(--mixin1), where --mixin1 is in the map
processVariableAndFallback(valueProperty,(prefix,value)=>{if(value&&this._map.get(value)){valueMixin=`@apply ${value};`}})}if(!valueMixin){return matchText}let mixinAsProperties=this._consumeCssProperties(""+valueMixin,rule),prefix=matchText.slice(0,matchText.indexOf("--")),mixinValues=this._cssTextToMap(mixinAsProperties,!0),combinedProps=mixinValues,mixinEntry=this._map.get(propertyName),oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){// NOTE: since we use mixin, the map of properties is updated here
// and this is what we want.
combinedProps=Object.assign(Object.create(oldProps),mixinValues)}else{this._map.set(propertyName,combinedProps)}let out=[],p,v,needToInvalidate=!1;for(p in combinedProps){v=mixinValues[p];// if property not defined by current mixin, set initial
if(v===void 0){v="initial"}if(oldProps&&!(p in oldProps)){needToInvalidate=!0}out.push(`${propertyName}${MIXIN_VAR_SEP}${p}: ${v}`)}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry)}if(mixinEntry){mixinEntry.properties=combinedProps}// because the mixinMap is global, the mixin might conflict with
// a different scope's simple variable definition:
// Example:
// some style somewhere:
// --mixin1:{ ... }
// --mixin2: var(--mixin1);
// some other element:
// --mixin1: 10px solid red;
// --foo: var(--mixin1);
// In this case, we leave the original variable definition in place.
if(valueProperty){prefix=`${matchText};${prefix}`}return`${prefix}${out.join("; ")};`}}/* exports */ /* eslint-disable no-self-assign */_exports.$applyShimDefault=ApplyShim;ApplyShim.prototype.detectMixin=ApplyShim.prototype.detectMixin;ApplyShim.prototype.transformStyle=ApplyShim.prototype.transformStyle;ApplyShim.prototype.transformCustomStyle=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype.transformRules=ApplyShim.prototype.transformRules;ApplyShim.prototype.transformRule=ApplyShim.prototype.transformRule;ApplyShim.prototype.transformTemplate=ApplyShim.prototype.transformTemplate;ApplyShim.prototype._separator=MIXIN_VAR_SEP;/* eslint-enable no-self-assign */Object.defineProperty(ApplyShim.prototype,"invalidCallback",{/** @return {?function(string)} */get(){return invalidCallback},/** @param {?function(string)} cb */set(cb){invalidCallback=cb}});var applyShim={default:ApplyShim};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShim$1=applyShim;"use strict";/**
               * @const {!Object<string, !HTMLTemplateElement>}
               */const templateMap={};_exports.$templateMapDefault=templateMap;var templateMap$1={default:templateMap};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$templateMap=templateMap$1;"use strict";/*
               * Utilities for handling invalidating apply-shim mixins for a given template.
               *
               * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
               * The template
               */ /** @const {string} */const CURRENT_VERSION="_applyShimCurrentVersion",NEXT_VERSION="_applyShimNextVersion",VALIDATING_VERSION="_applyShimValidatingVersion",promise=Promise.resolve();/** @const {string} */ /**
                                    * @param {string} elementName
                                    */function invalidate(elementName){let template=templateMap[elementName];if(template){invalidateTemplate(template)}}/**
   * This function can be called multiple times to mark a template invalid
   * and signal that the style inside must be regenerated.
   *
   * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
   * During that cycle, call `templateIsValidating` to see if the template must
   * be revalidated
   * @param {HTMLTemplateElement} template
   */function invalidateTemplate(template){// default the current version to 0
template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;// ensure the "validating for" flag exists
template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;// increment the next version
template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValid(elementName){let template=templateMap[elementName];if(template){return templateIsValid(template)}return!0}/**
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION]}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValidating(elementName){let template=templateMap[elementName];if(template){return templateIsValidating(template)}return!1}/**
   * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
   * If false, the template must be validated.
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION]}/**
   * the template is marked as `validating` for one microtask so that all instances
   * found in the tree crawl of `applyStyle` will update themselves,
   * but the template will only be updated once.
   * @param {string} elementName
  */function startValidating(elementName){let template=templateMap[elementName];startValidatingTemplate(template)}/**
   * Begin an asynchronous invalidation cycle.
   * This should be called after every validation of a template
   *
   * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
   * @param {HTMLTemplateElement} template
   */function startValidatingTemplate(template){// remember that the current "next version" is the reason for this validation cycle
template[VALIDATING_VERSION]=template[NEXT_VERSION];// however, there only needs to be one async task to clear the counters
if(!template._validating){template._validating=!0;promise.then(function(){// sync the current version to let future invalidations cause a refresh cycle
template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=!1})}}/**
   * @return {boolean}
   */function elementsAreInvalid(){for(let elementName in templateMap){let template=templateMap[elementName];if(!templateIsValid(template)){return!0}}return!1}var applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShimUtils=applyShimUtils;"use strict";/** @type {Promise<void>} */let readyPromise=null,whenReady=window.HTMLImports&&window.HTMLImports.whenReady||null,resolveFn;/** @type {?function(?function())} */ /**
                * @param {?function()} callback
                */function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback)}else{if(!readyPromise){readyPromise=new Promise(resolve=>{resolveFn=resolve});if("complete"===document.readyState){resolveFn()}else{document.addEventListener("readystatechange",()=>{if("complete"===document.readyState){resolveFn()}})}}readyPromise.then(function(){callback&&callback()})}})}var documentWait$1={default:documentWait};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$documentWait=documentWait$1;"use strict";let CustomStyleProvider;_exports.CustomStyleProvider=CustomStyleProvider;const SEEN_MARKER="__seenByShadyCSS",CACHED_STYLE="__shadyCSSCachedStyle";/** @type {?function(!HTMLStyleElement)} */let transformFn=null,validateFn=null;/** @type {?function()} */ /**
                       This interface is provided to add document-level <style> elements to ShadyCSS for processing.
                       These styles must be processed by ShadyCSS to simulate ShadowRoot upper-bound encapsulation from outside styles
                       In addition, these styles may also need to be processed for @apply rules and CSS Custom Properties
                       
                       To add document-level styles to ShadyCSS, one can call `ShadyCSS.addDocumentStyle(styleElement)` or `ShadyCSS.addDocumentStyle({getStyle: () => styleElement})`
                       
                       In addition, if the process used to discover document-level styles can be synchronously flushed, one should set `ShadyCSS.documentStyleFlush`.
                       This function will be called when calculating styles.
                       
                       An example usage of the document-level styling api can be found in `examples/document-style-lib.js`
                       
                       @unrestricted
                       */class CustomStyleInterface{constructor(){/** @type {!Array<!CustomStyleProvider>} */this.customStyles=[];this.enqueued=!1;// NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;
documentWait(()=>{if(window.ShadyCSS.flushCustomStyles){window.ShadyCSS.flushCustomStyles()}})}/**
     * Queue a validation for new custom styles to batch style recalculations
     */enqueueDocumentValidation(){if(this.enqueued||!validateFn){return}this.enqueued=!0;documentWait(validateFn)}/**
     * @param {!HTMLStyleElement} style
     */addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=!0;this.customStyles.push(style);this.enqueueDocumentValidation()}}/**
     * @param {!CustomStyleProvider} customStyle
     * @return {HTMLStyleElement}
     */getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE]}let style;if(customStyle.getStyle){style=customStyle.getStyle()}else{style=customStyle}return style}/**
     * @return {!Array<!CustomStyleProvider>}
     */processStyles(){const cs=this.customStyles;for(let i=0;i<cs.length;i++){const customStyle=cs[i];if(customStyle[CACHED_STYLE]){continue}const style=this.getStyleForCustomStyle(customStyle);if(style){// HTMLImports polyfill may have cloned the style into the main document,
// which is referenced with __appliedElement.
const styleToTransform=/** @type {!HTMLStyleElement} */style.__appliedElement||style;if(transformFn){transformFn(styleToTransform)}customStyle[CACHED_STYLE]=styleToTransform}}return cs}}/* eslint-disable no-self-assign */_exports.$customStyleInterfaceDefault=CustomStyleInterface;CustomStyleInterface.prototype.addCustomStyle=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype.getStyleForCustomStyle=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype.processStyles=CustomStyleInterface.prototype.processStyles;/* eslint-enable no-self-assign */Object.defineProperties(CustomStyleInterface.prototype,{transformCallback:{/** @return {?function(!HTMLStyleElement)} */get(){return transformFn},/** @param {?function(!HTMLStyleElement)} fn */set(fn){transformFn=fn}},validateCallback:{/** @return {?function()} */get(){return validateFn},/**
     * @param {?function()} fn
     * @this {CustomStyleInterface}
     */set(fn){let needsEnqueue=!1;if(!validateFn){needsEnqueue=!0}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation()}}}});/** @typedef {{
     * customStyles: !Array<!CustomStyleProvider>,
     * addCustomStyle: function(!CustomStyleProvider),
     * getStyleForCustomStyle: function(!CustomStyleProvider): HTMLStyleElement,
     * findStyles: function(),
     * transformCallback: ?function(!HTMLStyleElement),
     * validateCallback: ?function()
     * }}
     */const CustomStyleInterfaceInterface={};_exports.CustomStyleInterfaceInterface=CustomStyleInterfaceInterface;var customStyleInterface={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$customStyleInterface$1=customStyleInterface;"use strict";const applyShim$1=new ApplyShim;class ApplyShimInterface{constructor(){/** @type {?CustomStyleInterfaceInterface} */this.customStyleInterface=null;applyShim$1.invalidCallback=invalidate}ensure(){if(this.customStyleInterface){return}if(window.ShadyCSS.CustomStyleInterface){this.customStyleInterface=/** @type {!CustomStyleInterfaceInterface} */window.ShadyCSS.CustomStyleInterface;this.customStyleInterface.transformCallback=style=>{applyShim$1.transformCustomStyle(style)};this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{if(this.customStyleInterface.enqueued){this.flushCustomStyles()}})}}}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplate(template,elementName){this.ensure();if(elementHasBuiltCss(template)){return}templateMap[elementName]=template;let ast=applyShim$1.transformTemplate(template,elementName);// save original style ast to use for revalidating instances
template._styleAst=ast}flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return}let styles=this.customStyleInterface.processStyles();if(!this.customStyleInterface.enqueued){return}for(let i=0;i<styles.length;i++){let cs=styles[i],style=this.customStyleInterface.getStyleForCustomStyle(cs);if(style){applyShim$1.transformCustomStyle(style)}}this.customStyleInterface.enqueued=!1}/**
     * @param {HTMLElement} element
     * @param {Object=} properties
     */styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties)}if(element.shadowRoot){this.styleElement(element);let shadowChildren=/** @type {!ParentNode} */element.shadowRoot.children||element.shadowRoot.childNodes;for(let i=0;i<shadowChildren.length;i++){this.styleSubtree(/** @type {HTMLElement} */shadowChildren[i])}}else{let children=element.children||element.childNodes;for(let i=0;i<children.length;i++){this.styleSubtree(/** @type {HTMLElement} */children[i])}}}/**
     * @param {HTMLElement} element
     */styleElement(element){this.ensure();let{is}=getIsExtends(element),template=templateMap[is];if(template&&elementHasBuiltCss(template)){return}if(template&&!templateIsValid(template)){// only revalidate template once
if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template)}// update this element instance
let root=element.shadowRoot;if(root){let style=/** @type {HTMLStyleElement} */root.querySelector("style");if(style){// reuse the template's style ast, it has all the original css text
style.__cssRules=template._styleAst;style.textContent=toCssText(template._styleAst)}}}}/**
     * @param {Object=} properties
     */styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const applyShimInterface=new ApplyShimInterface;let CustomStyleInterface=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;/** @suppress {duplicate} */_exports.$customStyleInterfaceDefault=CustomStyleInterface;window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate(template,elementName,elementExtends){// eslint-disable-line no-unused-vars
applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles(template,elementName,elementExtends){window.ShadyCSS.prepareTemplate(template,elementName,elementExtends)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLElement} element
     * @param {Object=} properties
     */styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties)},/**
     * @param {!HTMLElement} element
     */styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element)},/**
     * @param {Object=} properties
     */styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue(element,property){return getComputedStyleValue(element,property)},flushCustomStyles(){applyShimInterface.flushCustomStyles()},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild};if(CustomStyleInterface){window.ShadyCSS.CustomStyleInterface=CustomStyleInterface}}window.ShadyCSS.ApplyShim=applyShim$1;/**
                                         @license
                                         Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                         This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                         The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                         The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                         Code distributed by Google as part of the polymer project is also
                                         subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                         */ /* eslint-disable no-unused-vars */ /**
                                                                                 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
                                                                                 * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
                                                                                 *
                                                                                 * @param {string} prop Property name
                                                                                 * @param {?Object} obj Reference object
                                                                                 * @return {string} Potentially renamed property name
                                                                                 */window.JSCompiler_renameProperty=function(prop,obj){return prop};/* eslint-enable */let CSS_URL_RX=/(url\()([^)]*)(\))/g,ABS_URL=/(^\/)|(^#)|(^[\w-\d]*:)/,workingURL,resolveDoc;/**
                 * Resolves the given URL against the provided `baseUri'.
                 *
                 * Note that this function performs no resolution for URLs that start
                 * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
                 * URL resolution, use `window.URL`.
                 *
                 * @param {string} url Input URL to resolve
                 * @param {?string=} baseURI Base URI to resolve the URL against
                 * @return {string} resolved URL
                 */function resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url}// Lazy feature detection.
if(workingURL===void 0){workingURL=!1;try{const u=new URL("b","http://a");u.pathname="c%20d";workingURL="http://a/c%20d"===u.href}catch(e){// silently fail
}}if(!baseURI){baseURI=document.baseURI||window.location.href}if(workingURL){return new URL(url,baseURI).href}// Fallback to creating an anchor into a disconnected document.
if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument("temp");resolveDoc.base=resolveDoc.createElement("base");resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement("a");resolveDoc.body.appendChild(resolveDoc.anchor)}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url}/**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+"'"+resolveUrl(url.replace(/["']/g,""),baseURI)+"'"+post})}/**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */function pathFromUrl(url){return url.substring(0,url.lastIndexOf("/")+1)}var resolveUrl$1={resolveUrl:resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};_exports.$resolveUrl=resolveUrl$1;const useShadow=!window.ShadyDOM;_exports.useShadow=useShadow;const useNativeCSSProperties=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss);_exports.useNativeCSSProperties=useNativeCSSProperties;const useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;/**
                                                                                          * Globally settable property that is automatically assigned to
                                                                                          * `ElementMixin` instances, useful for binding in templates to
                                                                                          * make URL's relative to an application's root.  Defaults to the main
                                                                                          * document URL, but can be overridden by users.  It may be useful to set
                                                                                          * `rootPath` to provide a stable application mount path when
                                                                                          * using client side routing.
                                                                                          */_exports.useNativeCustomElements=useNativeCustomElements;let rootPath=void 0||pathFromUrl(document.baseURI||window.location.href);/**
                                                                                           * Sets the global rootPath property used by `ElementMixin` and
                                                                                           * available via `rootPath`.
                                                                                           *
                                                                                           * @param {string} path The new root path
                                                                                           * @return {void}
                                                                                           */_exports.rootPath=rootPath;const setRootPath=function(path){_exports.rootPath=rootPath=path};/**
    * A global callback used to sanitize any value before inserting it into the DOM.
    * The callback signature is:
    *
    *  function sanitizeDOMValue(value, name, type, node) { ... }
    *
    * Where:
    *
    * `value` is the value to sanitize.
    * `name` is the name of an attribute or property (for example, href).
    * `type` indicates where the value is being inserted: one of property, attribute, or text.
    * `node` is the node where the value is being inserted.
    *
    * @type {(function(*,string,string,Node):*)|undefined}
    */_exports.setRootPath=setRootPath;let sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;/**
                                                                                               * Sets the global sanitizeDOMValue available via this module's exported
                                                                                               * `sanitizeDOMValue` variable.
                                                                                               *
                                                                                               * @param {(function(*,string,string,Node):*)|undefined} newSanitizeDOMValue the global sanitizeDOMValue callback
                                                                                               * @return {void}
                                                                                               */_exports.sanitizeDOMValue=sanitizeDOMValue;const setSanitizeDOMValue=function(newSanitizeDOMValue){_exports.sanitizeDOMValue=sanitizeDOMValue=newSanitizeDOMValue};/**
    * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
    * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
    * scrolling performance.
    * Defaults to `false` for backwards compatibility.
    */_exports.setSanitizeDOMValue=setSanitizeDOMValue;let passiveTouchGestures=!1;/**
                                          * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
                                          *
                                          * @param {boolean} usePassive enable or disable passive touch gestures globally
                                          * @return {void}
                                          */_exports.passiveTouchGestures=passiveTouchGestures;const setPassiveTouchGestures=function(usePassive){_exports.passiveTouchGestures=passiveTouchGestures=usePassive};/**
    * Setting to ensure Polymer template evaluation only occurs based on tempates
    * defined in trusted script.  When true, `<dom-module>` re-registration is
    * disallowed, `<dom-bind>` is disabled, and `<dom-if>`/`<dom-repeat>`
    * templates will only evaluate in the context of a trusted element template.
    */_exports.setPassiveTouchGestures=setPassiveTouchGestures;let strictTemplatePolicy=!1;/**
                                          * Sets `strictTemplatePolicy` globally for all elements
                                          *
                                          * @param {boolean} useStrictPolicy enable or disable strict template policy
                                          *   globally
                                          * @return {void}
                                          */_exports.strictTemplatePolicy=strictTemplatePolicy;const setStrictTemplatePolicy=function(useStrictPolicy){_exports.strictTemplatePolicy=strictTemplatePolicy=useStrictPolicy};/**
    * Setting to enable dom-module lookup from Polymer.Element.  By default,
    * templates must be defined in script using the `static get template()`
    * getter and the `html` tag function.  To enable legacy loading of templates
    * via dom-module, set this flag to true.
    */_exports.setStrictTemplatePolicy=setStrictTemplatePolicy;let allowTemplateFromDomModule=!1;/**
                                                * Sets `lookupTemplateFromDomModule` globally for all elements
                                                *
                                                * @param {boolean} allowDomModule enable or disable template lookup 
                                                *   globally
                                                * @return {void}
                                                */_exports.allowTemplateFromDomModule=allowTemplateFromDomModule;const setAllowTemplateFromDomModule=function(allowDomModule){_exports.allowTemplateFromDomModule=allowTemplateFromDomModule=allowDomModule};_exports.setAllowTemplateFromDomModule=setAllowTemplateFromDomModule;var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,get rootPath(){return rootPath},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue},setSanitizeDOMValue:setSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures},setPassiveTouchGestures:setPassiveTouchGestures,get strictTemplatePolicy(){return strictTemplatePolicy},setStrictTemplatePolicy:setStrictTemplatePolicy,get allowTemplateFromDomModule(){return allowTemplateFromDomModule},setAllowTemplateFromDomModule:setAllowTemplateFromDomModule};_exports.$settings=settings;let dedupeId=0;/**
                   * @constructor
                   * @extends {Function}
                   * @private
                   */function MixinFunction(){}/** @type {(WeakMap | undefined)} */MixinFunction.prototype.__mixinApplications;/** @type {(Object | undefined)} */MixinFunction.prototype.__mixinSet;/* eslint-disable valid-jsdoc */ /**
                                                                      * Wraps an ES6 class expression mixin such that the mixin is only applied
                                                                      * if it has not already been applied its base argument. Also memoizes mixin
                                                                      * applications.
                                                                      *
                                                                      * @template T
                                                                      * @param {T} mixin ES6 class expression mixin to wrap
                                                                      * @return {T}
                                                                      * @suppress {invalidCasts}
                                                                      */const dedupingMixin=function(mixin){let mixinApplications=/** @type {!MixinFunction} */mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap;/** @type {!MixinFunction} */mixin.__mixinApplications=mixinApplications}// maintain a unique id for each mixin
let mixinDedupeId=dedupeId++;function dedupingMixin(base){let baseSet=/** @type {!MixinFunction} */base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base}let map=mixinApplications,extended=map.get(base);if(!extended){extended=/** @type {!Function} */mixin(base);map.set(base,extended)}// copy inherited mixin set from the extended class, or the base class
// NOTE: we avoid use of Set here because some browser (IE11)
// cannot extend a base Set via the constructor.
let mixinSet=Object.create(/** @type {!MixinFunction} */extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=!0;/** @type {!MixinFunction} */extended.__mixinSet=mixinSet;return extended}return dedupingMixin};/* eslint-enable valid-jsdoc */_exports.dedupingMixin=dedupingMixin;var mixin={dedupingMixin:dedupingMixin};_exports.$mixin=mixin;let modules={},lcModules={};/**
                     * Sets a dom-module into the global registry by id.
                     *
                     * @param {string} id dom-module id
                     * @param {DomModule} module dom-module instance
                     * @return {void}
                     */function setModule(id,module){// store id separate from lowercased id so that
// in all cases mixedCase id will stored distinctly
// and lowercase version is a fallback
modules[id]=lcModules[id.toLowerCase()]=module}/**
   * Retrieves a dom-module from the global registry by id.
   *
   * @param {string} id dom-module id
   * @return {DomModule!} dom-module instance
   */function findModule(id){return modules[id]||lcModules[id.toLowerCase()]}function styleOutsideTemplateCheck(inst){if(inst.querySelector("style")){console.warn("dom-module %s has style outside template",inst.id)}}/**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */class DomModule extends HTMLElement{static get observedAttributes(){return["id"]}/**
     * Retrieves the element specified by the css `selector` in the module
     * registered by `id`. For example, this.import('foo', 'img');
     * @param {string} id The id of the dom-module in which to search.
     * @param {string=} selector The css selector by which to find the element.
     * @return {Element} Returns the element which matches `selector` in the
     * module registered at the specified `id`.
     *
     * @export
     * @nocollapse Referred to indirectly in style-gather.js
     */static import(id,selector){if(id){let m=findModule(id);if(m&&selector){return m.querySelector(selector)}return m}return null}/* eslint-disable no-unused-vars */ /**
                                         * @param {string} name Name of attribute.
                                         * @param {?string} old Old value of attribute.
                                         * @param {?string} value Current value of attribute.
                                         * @param {?string} namespace Attribute namespace.
                                         * @return {void}
                                         * @override
                                         */attributeChangedCallback(name,old,value,namespace){if(old!==value){this.register()}}/* eslint-enable no-unused-args */ /**
                                        * The absolute URL of the original location of this `dom-module`.
                                        *
                                        * This value will differ from this element's `ownerDocument` in the
                                        * following ways:
                                        * - Takes into account any `assetpath` attribute added during bundling
                                        *   to indicate the original location relative to the bundled location
                                        * - Uses the HTMLImports polyfill's `importForElement` API to ensure
                                        *   the path is relative to the import document's location since
                                        *   `ownerDocument` is not currently polyfilled
                                        */get assetpath(){// Don't override existing assetpath.
if(!this.__assetpath){// note: assetpath set via an attribute must be relative to this
// element's location; accomodate polyfilled HTMLImports
const owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,url=resolveUrl(this.getAttribute("assetpath")||"",owner.baseURI);this.__assetpath=pathFromUrl(url)}return this.__assetpath}/**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     * @param {string=} id The id at which to register the dom-module.
     * @return {void}
     */register(id){id=id||this.id;if(id){// Under strictTemplatePolicy, reject and null out any re-registered
// dom-module since it is ambiguous whether first-in or last-in is trusted
if(strictTemplatePolicy&&findModule(id)!==void 0){setModule(id,null);throw new Error(`strictTemplatePolicy: dom-module ${id} re-registered`)}this.id=id;setModule(id,this);styleOutsideTemplateCheck(this)}}}_exports.DomModule=DomModule;DomModule.prototype.modules=modules;customElements.define("dom-module",DomModule);var domModule={DomModule:DomModule};_exports.$domModule=domModule;const MODULE_STYLE_LINK_SELECTOR="link[rel=import][type~=css]",INCLUDE_ATTR="include",SHADY_UNSCOPED_ATTR="shady-unscoped";/**
                                               * @param {string} moduleId .
                                               * @return {?DomModule} .
                                               */function importModule(moduleId){return(/** @type {?DomModule} */DomModule.import(moduleId))}function styleForImport(importDoc){// NOTE: polyfill affordance.
// under the HTMLImports polyfill, there will be no 'body',
// but the import pseudo-doc can be used directly.
let container=importDoc.body?importDoc.body:importDoc;const importCss=resolveCss(container.textContent,importDoc.baseURI),style=document.createElement("style");style.textContent=importCss;return style}/** @typedef {{assetpath: string}} */let templateWithAssetPath;// eslint-disable-line no-unused-vars
/**
 * Returns a list of <style> elements in a space-separated list of `dom-module`s.
 *
 * @function
 * @param {string} moduleIds List of dom-module id's within which to
 * search for css.
 * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
 */function stylesFromModules(moduleIds){const modules=moduleIds.trim().split(/\s+/),styles=[];for(let i=0;i<modules.length;i++){styles.push(...stylesFromModule(modules[i]))}return styles}/**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModule(moduleId){const m=importModule(moduleId);if(!m){console.warn("Could not find style data in module named",moduleId);return[]}if(m._styles===void 0){const styles=[..._stylesFromModuleImports(m)],template=/** @type {?HTMLTemplateElement} */m.querySelector("template");// module imports: <link rel="import" type="css">
if(template){styles.push(...stylesFromTemplate(template,/** @type {templateWithAssetPath} */m.assetpath))}m._styles=styles}return m._styles}/**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   */function stylesFromTemplate(template,baseURI){if(!template._styles){const styles=[],e$=template.content.querySelectorAll("style");// if element is a template, get content from its .content
for(let i=0;i<e$.length;i++){let e=e$[i],include=e.getAttribute(INCLUDE_ATTR);// support style sharing by allowing styles to "include"
// other dom-modules that contain styling
if(include){styles.push(...stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index}))}if(baseURI){e.textContent=resolveCss(e.textContent,baseURI)}styles.push(e)}template._styles=styles}return template._styles}/**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModuleImports(moduleId){let m=importModule(moduleId);return m?_stylesFromModuleImports(m):[]}/**
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */function _stylesFromModuleImports(module){const styles=[],p$=module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR);for(let i=0,p;i<p$.length;i++){p=p$[i];if(p.import){const importDoc=p.import,unscoped=p.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){const style=styleForImport(importDoc);style.setAttribute(SHADY_UNSCOPED_ATTR,"");importDoc._unscopedStyle=style}else if(!importDoc._style){importDoc._style=styleForImport(importDoc)}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style)}}return styles}/**
   *
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @deprecated
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {string} Concatenated CSS content from specified `dom-module`s
   */function cssFromModules(moduleIds){let modules=moduleIds.trim().split(/\s+/),cssText="";for(let i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i])}return cssText}/**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @deprecated
   * @param {string} moduleId dom-module id to gather styles from
   * @return {string} Concatenated CSS content from specified `dom-module`
   */function cssFromModule(moduleId){let m=importModule(moduleId);if(m&&m._cssText===void 0){// module imports: <link rel="import" type="css">
let cssText=_cssFromModuleImports(m),t=/** @type {?HTMLTemplateElement} */m.querySelector("template");// include css from the first template in the module
if(t){cssText+=cssFromTemplate(t,/** @type {templateWithAssetPath} */m.assetpath)}m._cssText=cssText||null}if(!m){console.warn("Could not find style data in module named",moduleId)}return m&&m._cssText||""}/**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @deprecated
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Concatenated CSS content from specified template
   */function cssFromTemplate(template,baseURI){let cssText="";const e$=stylesFromTemplate(template,baseURI);// if element is a template, get content from its .content
for(let i=0,e;i<e$.length;i++){e=e$[i];if(e.parentNode){e.parentNode.removeChild(e)}cssText+=e.textContent}return cssText}/**
   * Returns CSS text from stylesheets loaded via `<link rel="import" type="css">`
   * links within the specified `dom-module`.
   *
   * Note: This method is deprecated, use `stylesFromModuleImports` instead.
   *
   * @deprecated
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {string} Concatenated CSS content from links in specified `dom-module`
   */function cssFromModuleImports(moduleId){let m=importModule(moduleId);return m?_cssFromModuleImports(m):""}/**
   * @deprecated
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {string} Concatenated CSS content from links in the dom-module
   */function _cssFromModuleImports(module){let cssText="",styles=_stylesFromModuleImports(module);for(let i=0;i<styles.length;i++){cssText+=styles[i].textContent}return cssText}var styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};_exports.$styleGather=styleGather;function isPath(path){return 0<=path.indexOf(".")}/**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */function root(path){let dotIndex=path.indexOf(".");if(-1===dotIndex){return path}return path.slice(0,dotIndex)}/**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */function isAncestor(base,path){//     base.startsWith(path + '.');
return 0===base.indexOf(path+".")}/**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */function isDescendant(base,path){//     path.startsWith(base + '.');
return 0===path.indexOf(base+".")}/**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */function translate(base,newBase,path){return newBase+path.slice(base.length)}/**
   * @param {string} base Path string to test against
   * @param {string} path Path string to test
   * @return {boolean} True if `path` is equal to `base`
   */function matches(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path)}/**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */function normalize(path){if(Array.isArray(path)){let parts=[];for(let i=0,args;i<path.length;i++){args=path[i].toString().split(".");for(let j=0;j<args.length;j++){parts.push(args[j])}}return parts.join(".")}else{return path}}/**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @suppress {checkTypes}
   */function split(path){if(Array.isArray(path)){return normalize(path).split(".")}return path.toString().split(".")}/**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   */function get(root,path,info){let prop=root,parts=split(path);// Loop over path parts[0..n-1] and dereference
for(let i=0;i<parts.length;i++){if(!prop){return}let part=parts[i];prop=prop[part]}if(info){info.path=parts.join(".")}return prop}/**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   */function set(root,path,value){let prop=root,parts=split(path),last=parts[parts.length-1];if(1<parts.length){// Loop over path parts[0..n-2] and dereference
for(let i=0,part;i<parts.length-1;i++){part=parts[i];prop=prop[part];if(!prop){return}}// Set value to object at end of path
prop[last]=value}else{// Simple property set
prop[path]=value}return parts.join(".")}/**
   * Returns true if the given string is a structured data path (has dots).
   *
   * This function is deprecated.  Use `isPath` instead.
   *
   * Example:
   *
   * ```
   * isDeep('foo.bar.baz') // true
   * isDeep('foo')         // false
   * ```
   *
   * @deprecated
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */const isDeep=isPath;_exports.isDeep=isDeep;var path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches,normalize:normalize,split:split,get:get,set:set,isDeep:isDeep};_exports.$path=path;const caseMap={},DASH_TO_CAMEL=/-[a-z]/g,CAMEL_TO_DASH=/([A-Z])/g;/**
                                   * @fileoverview Module with utilities for converting between "dash-case" and
                                   * "camelCase" identifiers.
                                   */ /**
                                       * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
                                       * (e.g. `fooBarBaz`).
                                       *
                                       * @param {string} dash Dash-case identifier
                                       * @return {string} Camel-case representation of the identifier
                                       */function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=0>dash.indexOf("-")?dash:dash.replace(DASH_TO_CAMEL,m=>m[1].toUpperCase()))}/**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,"-$1").toLowerCase())}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};_exports.$caseMap=caseMap$1;let microtaskCurrHandle=0,microtaskLastHandle=0,microtaskCallbacks=[],microtaskNodeContent=0,microtaskNode=document.createTextNode("");new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:!0});function microtaskFlush(){const len=microtaskCallbacks.length;for(let i=0,cb;i<len;i++){cb=microtaskCallbacks[i];if(cb){try{cb()}catch(e){setTimeout(()=>{throw e})}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len}/**
   * Async interface wrapper around `setTimeout`.
   *
   * @namespace
   * @summary Async interface wrapper around `setTimeout`.
   */const timeOut={/**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */after(delay){return{run(fn){return window.setTimeout(fn,delay)},cancel(handle){window.clearTimeout(handle)}}},/**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */run(fn,delay){return window.setTimeout(fn,delay)},/**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){window.clearTimeout(handle)}};_exports.timeOut=timeOut;const animationFrame={/**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof animationFrame
   * @param {function(number):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run(fn){return window.requestAnimationFrame(fn)},/**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof animationFrame
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){window.cancelAnimationFrame(handle)}};_exports.animationFrame=animationFrame;const idlePeriod={/**
   * Enqueues a function called at `requestIdleCallback` timing.
   *
   * @memberof idlePeriod
   * @param {function(!IdleDeadline):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16)},/**
   * Cancels a previously enqueued `idlePeriod` callback.
   *
   * @memberof idlePeriod
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle)}};_exports.idlePeriod=idlePeriod;const microTask={/**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */run(callback){microtaskNode.textContent=microtaskNodeContent++;microtaskCallbacks.push(callback);return microtaskCurrHandle++},/**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){const idx=handle-microtaskLastHandle;if(0<=idx){if(!microtaskCallbacks[idx]){throw new Error("invalid async handle: "+handle)}microtaskCallbacks[idx]=null}}};_exports.microTask=microTask;var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};_exports.$async=async;const microtask=microTask,PropertiesChanged=dedupingMixin(/**
                                                 * @template T
                                                 * @param {function(new:T)} superClass Class to apply mixin to.
                                                 * @return {function(new:T)} superClass with mixin applied.
                                                 */superClass=>{/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   */class PropertiesChanged extends superClass{/**
     * Creates property accessors for the given property names.
     * @param {!Object} props Object whose keys are names of accessors.
     * @return {void}
     * @protected
     */static createProperties(props){const proto=this.prototype;for(let prop in props){// don't stomp an existing accessor
if(!(prop in proto)){proto._createPropertyAccessor(prop)}}}/**
       * Returns an attribute name that corresponds to the given property.
       * The attribute name is the lowercased property name. Override to
       * customize this mapping.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       */static attributeNameForProperty(property){return property.toLowerCase()}/**
       * Override point to provide a type to which to deserialize a value to
       * a given property.
       * @param {string} name Name of property
       *
       * @protected
       */static typeForProperty(name){}//eslint-disable-line no-unused-vars
/**
     * Creates a setter/getter pair for the named property with its own
     * local storage.  The getter returns the value in the local storage,
     * and the setter calls `_setProperty`, which updates the local storage
     * for the property and enqueues a `_propertiesChanged` callback.
     *
     * This method may be called on a prototype or an instance.  Calling
     * this method may overwrite a property value that already exists on
     * the prototype/instance by creating the accessor.
     *
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created; the
     *   protected `_setProperty` function must be used to set the property
     * @return {void}
     * @protected
     * @override
     */_createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty("__dataHasAccessor")){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=!0;this._definePropertyAccessor(property,readOnly)}}/**
       * Adds the given `property` to a map matching attribute names
       * to property names, using `attributeNameForProperty`. This map is
       * used when deserializing attribute values to properties.
       *
       * @param {string} property Name of the property
       * @override
       */_addPropertyToAttributeMap(property){if(!this.hasOwnProperty("__dataAttributes")){this.__dataAttributes=Object.assign({},this.__dataAttributes)}if(!this.__dataAttributes[property]){const attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[attr]=property}}/**
       * Defines a property accessor for the given property.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       * @return {void}
       * @override
       */_definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{/* eslint-disable valid-jsdoc */ /** @this {PropertiesChanged} */get(){return this._getProperty(property)},/** @this {PropertiesChanged} */set:readOnly?function(){}:function(value){this._setProperty(property,value)}/* eslint-enable */})}constructor(){super();this.__dataEnabled=!1;this.__dataReady=!1;this.__dataInvalid=!1;this.__data={};this.__dataPending=null;this.__dataOld=null;this.__dataInstanceProps=null;this.__serializing=!1;this._initializeProperties()}/**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */ready(){this.__dataReady=!0;this._flushProperties()}/**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @return {void}
       * @protected
       * @override
       */_initializeProperties(){// Capture instance properties; these will be set into accessors
// during first flush. Don't set them here, since we want
// these to overwrite defaults/constructor assignments
for(let p in this.__dataHasAccessor){if(this.hasOwnProperty(p)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[p]=this[p];delete this[p]}}}/**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */_initializeInstanceProperties(props){Object.assign(this,props)}/**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       * @protected
       * @override
       */_setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties()}}/**
       * Returns the value for the given property.
       * @param {string} property Name of property
       * @return {*} Value for the given property
       * @protected
       * @override
       */_getProperty(property){return this.__data[property]}/* eslint-disable no-unused-vars */ /**
                                           * Updates the local storage for a property, records the previous value,
                                           * and adds it to the set of "pending changes" that will be passed to the
                                           * `_propertiesChanged` callback.  This method does not enqueue the
                                           * `_propertiesChanged` callback.
                                           *
                                           * @param {string} property Name of the property
                                           * @param {*} value Value to set
                                           * @param {boolean=} ext Not used here; affordance for closure
                                           * @return {boolean} Returns true if the property changed
                                           * @protected
                                           * @override
                                           */_setPendingProperty(property,value,ext){let old=this.__data[property],changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}// Ensure old is captured from the last turn
if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old}this.__data[property]=value;this.__dataPending[property]=value}return changed}/* eslint-enable */ /**
                           * Marks the properties as invalid, and enqueues an async
                           * `_propertiesChanged` callback.
                           *
                           * @return {void}
                           * @protected
                           * @override
                           */_invalidateProperties(){if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=!0;microtask.run(()=>{if(this.__dataInvalid){this.__dataInvalid=!1;this._flushProperties()}})}}/**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       *
       * @return {void}
       * @protected
       * @override
       */_enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=!0;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null}this.ready()}}/**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       * @return {void}
       * @protected
       * @override
       */_flushProperties(){const props=this.__data,changedProps=this.__dataPending,old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old)}}/**
       * Called in `_flushProperties` to determine if `_propertiesChanged`
       * should be called. The default implementation returns true if
       * properties are pending. Override to customize when
       * `_propertiesChanged` is called.
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {boolean} true if changedProps is truthy
       * @override
       */_shouldPropertiesChange(currentProps,changedProps,oldProps){// eslint-disable-line no-unused-vars
return!!changedProps}/**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       * @protected
       * @override
       */_propertiesChanged(currentProps,changedProps,oldProps){}// eslint-disable-line no-unused-vars
/**
     * Method called to determine whether a property value should be
     * considered as a change and cause the `_propertiesChanged` callback
     * to be enqueued.
     *
     * The default implementation returns `true` if a strict equality
     * check fails. The method always returns false for `NaN`.
     *
     * Override this method to e.g. provide stricter checking for
     * Objects/Arrays when using immutable patterns.
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     *   and enqueue a `_proeprtiesChanged` callback
     * @protected
     * @override
     */_shouldPropertyChange(property,value,old){return(// Strict equality check
old!==value&&(// This ensures (old==NaN, value==NaN) always returns false
old===old||value===value))}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @suppress {missingProperties} Super may or may not implement the callback
       * @override
       */attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value)}if(super.attributeChangedCallback){super.attributeChangedCallback(name,old,value,namespace)}}/**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to, defaults to the value
       * returned from `typeForProperty`
       * @return {void}
       * @override
       */_attributeToProperty(attribute,value,type){if(!this.__serializing){const map=this.__dataAttributes,property=map&&map[attribute]||attribute;this[property]=this._deserializeValue(value,type||this.constructor.typeForProperty(property))}}/**
       * Serializes a property to its associated attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is an element.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect to.
       * @param {*=} value Property value to refect.
       * @return {void}
       * @override
       */_propertyToAttribute(property,attribute,value){this.__serializing=!0;value=3>arguments.length?this[property]:value;this._valueToNodeAttribute(/** @type {!HTMLElement} */this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=!1}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @return {void}
       * @override
       */_valueToNodeAttribute(node,value,attribute){const str=this._serializeValue(value);if(str===void 0){node.removeAttribute(attribute)}else{node.setAttribute(attribute,str)}}/**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called when setting JS property values to
       * HTML attributes.  Users may override this method to provide
       * serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided
       * property  value.
       * @override
       */_serializeValue(value){switch(typeof value){case"boolean":return value?"":void 0;default:return null!=value?value.toString():void 0;}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called when reading HTML attribute values to
       * JS properties.  Users may override this method to provide
       * deserialization for custom `type`s. Types for `Boolean`, `String`,
       * and `Number` convert attributes to the expected types.
       *
       * @param {?string} value Value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */_deserializeValue(value,type){switch(type){case Boolean:return null!==value;case Number:return+value;default:return value;}}}return PropertiesChanged});/**
                              * Element class mixin that provides basic meta-programming for creating one
                              * or more property accessors (getter/setter pair) that enqueue an async
                              * (batched) `_propertiesChanged` callback.
                              *
                              * For basic usage of this mixin, call `MyClass.createProperties(props)`
                              * once at class definition time to create property accessors for properties
                              * named in props, implement `_propertiesChanged` to react as desired to
                              * property changes, and implement `static get observedAttributes()` and
                              * include lowercase versions of any property names that should be set from
                              * attributes. Last, call `this._enableProperties()` in the element's
                              * `connectedCallback` to enable the accessors.
                              *
                              * @mixinFunction
                              * @polymer
                              * @summary Element class mixin for reacting to property changes from
                              *   generated property accessors.
                              */_exports.PropertiesChanged=PropertiesChanged;var propertiesChanged={PropertiesChanged:PropertiesChanged};// that won't have their values "saved" by `saveAccessorValue`, since
// reading from an HTMLElement accessor from the context of a prototype throws
_exports.$propertiesChanged=propertiesChanged;const nativeProperties={};let proto=HTMLElement.prototype;while(proto){let props=Object.getOwnPropertyNames(proto);for(let i=0;i<props.length;i++){nativeProperties[props[i]]=!0}proto=Object.getPrototypeOf(proto)}/**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */function saveAccessorValue(model,property){// Don't read/store value for any native properties since they could throw
if(!nativeProperties[property]){let value=model[property];if(value!==void 0){if(model.__data){// Adding accessor to instance; update the property
// It is the user's responsibility to call _flushProperties
model._setPendingProperty(property,value)}else{// Adding accessor to proto; save proto's value for instance-time use
if(!model.__dataProto){model.__dataProto={}}else if(!model.hasOwnProperty(JSCompiler_renameProperty("__dataProto",model))){model.__dataProto=Object.create(model.__dataProto)}model.__dataProto[property]=value}}}}/**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get observedAttributes()`. Use
   *     `dash-case` attribute names to represent `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to generate
   *     property accessors for each observed attribute. This must be called before the first
   *     instance is created, for example, by calling it before calling `customElements.define`.
   *     It can also be called lazily from the element's `constructor`, as long as it's guarded so
   *     that the call is only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to enable
   *     the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */const PropertyAccessors=dedupingMixin(superClass=>{/**
   * @constructor
   * @extends {superClass}
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   * @private
   */const base=PropertiesChanged(superClass);/**
                                                  * @polymer
                                                  * @mixinClass
                                                  * @implements {Polymer_PropertyAccessors}
                                                  * @extends {base}
                                                  * @unrestricted
                                                  */class PropertyAccessors extends base{/**
     * Generates property accessors for all attributes in the standard
     * static `observedAttributes` array.
     *
     * Attribute names are mapped to property names using the `dash-case` to
     * `camelCase` convention
     *
     * @return {void}
     */static createPropertiesForAttributes(){let a$=this.observedAttributes;for(let i=0;i<a$.length;i++){this.prototype._createPropertyAccessor(dashToCamelCase(a$[i]))}}/**
       * Returns an attribute name that corresponds to the given property.
       * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       */static attributeNameForProperty(property){return camelToDashCase(property)}/**
       * Overrides PropertiesChanged implementation to initialize values for
       * accessors created for values that already existed on the element
       * prototype.
       *
       * @return {void}
       * @protected
       */_initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null}super._initializeProperties()}/**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       */_initializeProtoProperties(props){for(let p in props){this._setProperty(p,props[p])}}/**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is infact an element
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       * @return {void}
       */_ensureAttribute(attribute,value){const el=/** @type {!HTMLElement} */this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute)}}/**
       * Overrides PropertiesChanged implemention to serialize objects as JSON.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property value.
       */_serializeValue(value){/* eslint-disable no-fallthrough */switch(typeof value){case"object":if(value instanceof Date){return value.toString()}else if(value){try{return JSON.stringify(value)}catch(x){return""}}default:return super._serializeValue(value);}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       *
       * @param {?string} value Attribute value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       */_deserializeValue(value,type){/**
       * @type {*}
       */let outValue;switch(type){case Object:try{outValue=JSON.parse(/** @type {string} */value)}catch(x){// allow non-JSON literals like Strings and Numbers
outValue=value}break;case Array:try{outValue=JSON.parse(/** @type {string} */value)}catch(x){outValue=null;console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${value}`)}break;case Date:outValue=isNaN(value)?value+"":+value;outValue=new Date(outValue);break;default:outValue=super._deserializeValue(value,type);break;}return outValue}/* eslint-enable no-fallthrough */ /**
                                          * Overrides PropertiesChanged implementation to save existing prototype
                                          * property value so that it can be reset.
                                          * @param {string} property Name of the property
                                          * @param {boolean=} readOnly When true, no setter is created
                                          *
                                          * When calling on a prototype, any overwritten values are saved in
                                          * `__dataProto`, and it is up to the subclasser to decide how/when
                                          * to set those properties back into the accessor.  When calling on an
                                          * instance, the overwritten value is set via `_setPendingProperty`,
                                          * and the user should call `_invalidateProperties` or `_flushProperties`
                                          * for the values to take effect.
                                          * @protected
                                          * @return {void}
                                          */_definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);super._definePropertyAccessor(property,readOnly)}/**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       */_hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property]}/**
       * Returns true if the specified property has a pending change.
       *
       * @param {string} prop Property name
       * @return {boolean} True if property has a pending change
       * @protected
       */_isPropertyPending(prop){return!!(this.__dataPending&&prop in this.__dataPending)}}return PropertyAccessors});_exports.PropertyAccessors=PropertyAccessors;var propertyAccessors={PropertyAccessors:PropertyAccessors};// This is a clear layering violation and gives favored-nation status to
// dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
// a.) to ease 1.x backwards-compatibility due to loss of `is`, and
// b.) to maintain if/repeat capability in parser-constrained elements
//     (e.g. table, select) in lieu of native CE type extensions without
//     massive new invention in this space (e.g. directive system)
_exports.$propertyAccessors=propertyAccessors;const templateExtensions={"dom-if":!0,"dom-repeat":!0};function wrapTemplateExtension(node){let is=node.getAttribute("is");if(is&&templateExtensions[is]){let t=node;t.removeAttribute("is");node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name)}}return node}function findTemplateNode(root,nodeInfo){// recursively ascend tree until we hit root
let parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);// unwind the stack, returning the indexed node at each level
if(parent){// note: marginally faster than indexing via childNodes
// (http://jsperf.com/childnodes-lookup)
for(let n=parent.firstChild,i=0;n;n=n.nextSibling){if(nodeInfo.parentIndex===i++){return n}}}else{return root}}// construct `$` map (from id annotations)
function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node}}// install event listeners (from event annotations)
function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(let j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst)}}}// push configuration references at configure time
function applyTemplateContent(inst,node,nodeInfo){if(nodeInfo.templateInfo){node._templateInfo=nodeInfo.templateInfo}}function createNodeEventHandler(context,eventName,methodName){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
context=context._methodHost||context;let handler=function(e){if(context[methodName]){context[methodName](e,e.detail)}else{console.warn("listener method `"+methodName+"` not defined")}};return handler}/**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   */const TemplateStamp=dedupingMixin(/**
                                             * @template T
                                             * @param {function(new:T)} superClass Class to apply mixin to.
                                             * @return {function(new:T)} superClass with mixin applied.
                                             */superClass=>{/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_TemplateStamp}
   */class TemplateStamp extends superClass{/**
     * Scans a template to produce template metadata.
     *
     * Template-specific metadata are stored in the object returned, and node-
     * specific metadata are stored in objects in its flattened `nodeInfoList`
     * array.  Only nodes in the template that were parsed as nodes of
     * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
     * contains an `index` (`childNodes` index in parent) and optionally
     * `parent`, which points to node info of its parent (including its index).
     *
     * The template metadata object returned from this method has the following
     * structure (many fields optional):
     *
     * ```js
     *   {
     *     // Flattened list of node metadata (for nodes that generated metadata)
     *     nodeInfoList: [
     *       {
     *         // `id` attribute for any nodes with id's for generating `$` map
     *         id: {string},
     *         // `on-event="handler"` metadata
     *         events: [
     *           {
     *             name: {string},   // event name
     *             value: {string},  // handler method name
     *           }, ...
     *         ],
     *         // Notes when the template contained a `<slot>` for shady DOM
     *         // optimization purposes
     *         hasInsertionPoint: {boolean},
     *         // For nested `<template>`` nodes, nested template metadata
     *         templateInfo: {object}, // nested template metadata
     *         // Metadata to allow efficient retrieval of instanced node
     *         // corresponding to this metadata
     *         parentInfo: {number},   // reference to parent nodeInfo>
     *         parentIndex: {number},  // index in parent's `childNodes` collection
     *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
     *       },
     *       ...
     *     ],
     *     // When true, the template had the `strip-whitespace` attribute
     *     // or was nested in a template with that setting
     *     stripWhitespace: {boolean},
     *     // For nested templates, nested template content is moved into
     *     // a document fragment stored here; this is an optimization to
     *     // avoid the cost of nested template cloning
     *     content: {DocumentFragment}
     *   }
     * ```
     *
     * This method kicks off a recursive treewalk as follows:
     *
     * ```
     *    _parseTemplate <---------------------+
     *      _parseTemplateContent              |
     *        _parseTemplateNode  <------------|--+
     *          _parseTemplateNestedTemplate --+  |
     *          _parseTemplateChildNodes ---------+
     *          _parseTemplateNodeAttributes
     *            _parseTemplateNodeAttribute
     *
     * ```
     *
     * These methods may be overridden to add custom metadata about templates
     * to either `templateInfo` or `nodeInfo`.
     *
     * Note that this method may be destructive to the template, in that
     * e.g. event annotations may be removed after being noted in the
     * template metadata.
     *
     * @param {!HTMLTemplateElement} template Template to parse
     * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
     *   template, for parsing nested templates
     * @return {!TemplateInfo} Parsed template metadata
     */static _parseTemplate(template,outerTemplateInfo){// since a template may be re-used, memo-ize metadata
if(!template._templateInfo){let templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute("strip-whitespace");this._parseTemplateContent(template,templateInfo,{parent:null})}return template._templateInfo}static _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo)}/**
       * Parses template node and adds template and node metadata based on
       * the current node, and its `childNodes` and `attributes`.
       *
       * This method may be overridden to add custom node or template specific
       * metadata based on this node.
       *
       * @param {Node} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */static _parseTemplateNode(node,templateInfo,nodeInfo){let noted,element=/** @type {Element} */node;if("template"==element.localName&&!element.hasAttribute("preserve-content")){noted=this._parseTemplateNestedTemplate(element,templateInfo,nodeInfo)||noted}else if("slot"===element.localName){// For ShadyDom optimization, indicating there is an insertion point
templateInfo.hasInsertionPoint=!0}if(element.firstChild){noted=this._parseTemplateChildNodes(element,templateInfo,nodeInfo)||noted}if(element.hasAttributes&&element.hasAttributes()){noted=this._parseTemplateNodeAttributes(element,templateInfo,nodeInfo)||noted}return noted}/**
       * Parses template child nodes for the given root node.
       *
       * This method also wraps whitelisted legacy template extensions
       * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
       * wrappers, collapses text nodes, and strips whitespace from the template
       * if the `templateInfo.stripWhitespace` setting was provided.
       *
       * @param {Node} root Root node whose `childNodes` will be parsed
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {void}
       */static _parseTemplateChildNodes(root,templateInfo,nodeInfo){if("script"===root.localName||"style"===root.localName){return}for(let node=root.firstChild,parentIndex=0,next;node;node=next){// Wrap templates
if("template"==node.localName){node=wrapTemplateExtension(node)}// collapse adjacent textNodes: fixes an IE issue that can cause
// text nodes to be inexplicably split =(
// note that root.normalize() should work but does not so we do this
// manually.
next=node.nextSibling;if(node.nodeType===Node.TEXT_NODE){let/** Node */n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=n.nextSibling;root.removeChild(n);n=next}// optionally strip whitespace
if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue}}let childInfo={parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(/** @type {!NodeInfo} */childInfo)-1}// Increment if not removed
if(node.parentNode){parentIndex++}}}/**
       * Parses template content for the given nested `<template>`.
       *
       * Nested template info is stored as `templateInfo` in the current node's
       * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
       * It will then be the responsibility of the host to set it back to the
       * template and for users stamping nested templates to use the
       * `_contentForTemplate` method to retrieve the content for this template
       * (an optimization to avoid the cost of cloning nested template content).
       *
       * @param {HTMLTemplateElement} node Node to parse (a <template>)
       * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
       *   that includes the template `node`
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */static _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){let templateInfo=this._parseTemplate(node,outerTemplateInfo),content=templateInfo.content=node.content.ownerDocument.createDocumentFragment();content.appendChild(node.content);nodeInfo.templateInfo=templateInfo;return!0}/**
       * Parses template node attributes and adds node metadata to `nodeInfo`
       * for nodes of interest.
       *
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */static _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){// Make copy of original attribute list, since the order may change
// as attributes are added and removed
let noted=!1,attrs=Array.from(node.attributes);for(let i=attrs.length-1,a;a=attrs[i];i--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted}return noted}/**
       * Parses a single template node attribute and adds node metadata to
       * `nodeInfo` for attributes of interest.
       *
       * This implementation adds metadata for `on-event="handler"` attributes
       * and `id` attributes.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       */static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){// events (on-*)
if("on-"===name.slice(0,3)){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value});return!0}// static id
else if("id"===name){nodeInfo.id=value;return!0}return!1}/**
       * Returns the `content` document fragment for a given template.
       *
       * For nested templates, Polymer performs an optimization to cache nested
       * template content to avoid the cost of cloning deeply nested templates.
       * This method retrieves the cached content for a given template.
       *
       * @param {HTMLTemplateElement} template Template to retrieve `content` for
       * @return {DocumentFragment} Content fragment
       */static _contentForTemplate(template){let templateInfo=/** @type {HTMLTemplateElementWithInfo} */template._templateInfo;return templateInfo&&templateInfo.content||template.content}/**
       * Clones the provided template content and returns a document fragment
       * containing the cloned dom.
       *
       * The template is parsed (once and memoized) using this library's
       * template parsing features, and provides the following value-added
       * features:
       * * Adds declarative event listeners for `on-event="handler"` attributes
       * * Generates an "id map" for all nodes with id's under `$` on returned
       *   document fragment
       * * Passes template info including `content` back to templates as
       *   `_templateInfo` (a performance optimization to avoid deep template
       *   cloning)
       *
       * Note that the memoized template parsing process is destructive to the
       * template: attributes for bindings and declarative event listeners are
       * removed after being noted in notes, and any nested `<template>.content`
       * is removed and stored in notes as well.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       * @override
       */_stampTemplate(template){// Polyfill support: bootstrap the template if it has not already been
if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template)}let templateInfo=this.constructor._parseTemplate(template),nodeInfo=templateInfo.nodeInfoList,content=templateInfo.content||template.content,dom=/** @type {DocumentFragment} */document.importNode(content,!0);// NOTE: ShadyDom optimization indicating there is an insertion point
dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;let nodes=dom.nodeList=Array(nodeInfo.length);dom.$={};for(let i=0,l=nodeInfo.length,info,node;i<l&&(info=nodeInfo[i]);i++){node=nodes[i]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateContent(this,node,info);applyEventListener(this,node,info)}dom=/** @type {!StampedTemplate} */dom;// eslint-disable-line no-self-assign
return dom}/**
       * Adds an event listener by method name for the event provided.
       *
       * This method generates a handler function that looks up the method
       * name at handling time.
       *
       * @param {!EventTarget} node Node to add listener on
       * @param {string} eventName Name of event
       * @param {string} methodName Name of method
       * @param {*=} context Context the method will be called on (defaults
       *   to `node`)
       * @return {Function} Generated handler function
       * @override
       */_addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;let handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       * @override
       */_addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler)}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */_removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler)}}return TemplateStamp});_exports.TemplateStamp=TemplateStamp;var templateStamp={TemplateStamp:TemplateStamp};// from multiple properties in the same turn
_exports.$templateStamp=templateStamp;let dedupeId$1=0;/**
                    * Property effect types; effects are stored on the prototype using these keys
                    * @enum {string}
                    */const TYPES={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},capitalAttributeRegex=/[A-Z]/;/** @const {RegExp} */ /**
                                        * @typedef {{
                                        * name: (string | undefined),
                                        * structured: (boolean | undefined),
                                        * wildcard: (boolean | undefined)
                                        * }}
                                        */let DataTrigger,DataEffect,PropertyEffectsType;//eslint-disable-line no-unused-vars
/**
 * @typedef {{
 * info: ?,
 * trigger: (!DataTrigger | undefined),
 * fn: (!Function | undefined)
 * }}
 */ //eslint-disable-line no-unused-vars
/**
 * Ensures that the model has an own-property map of effects for the given type.
 * The model may be a prototype or an instance.
 *
 * Property effects are stored as arrays of effects by property in a map,
 * by named type on the model. e.g.
 *
 *   __computeEffects: {
 *     foo: [ ... ],
 *     bar: [ ... ]
 *   }
 *
 * If the model does not yet have an effect map for the type, one is created
 * and returned.  If it does, but it is not an own property (i.e. the
 * prototype had effects), the the map is deeply cloned and the copy is
 * set on the model and returned, ready for new effects to be added.
 *
 * @param {Object} model Prototype or instance
 * @param {string} type Property effect type
 * @return {Object} The own-property map of effects for the given type
 * @private
 */function ensureOwnEffectMap(model,type){let effects=model[type];if(!effects){effects=model[type]={}}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);for(let p in effects){let protoFx=effects[p],instFx=effects[p]=Array(protoFx.length);for(let i=0;i<protoFx.length;i++){instFx[i]=protoFx[i]}}}return effects}// -- effects ----------------------------------------------
/**
 * Runs all effects of a given type for the given set of property changes
 * on an instance.
 *
 * @param {!PropertyEffectsType} inst The instance with effects to run
 * @param {Object} effects Object map of property-to-Array of effects
 * @param {Object} props Bag of current property changes
 * @param {Object=} oldProps Bag of previous values for changed properties
 * @param {boolean=} hasPaths True with `props` contains one or more paths
 * @param {*=} extraArgs Additional metadata to pass to effect function
 * @return {boolean} True if an effect ran for this property
 * @private
 */function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){let ran=!1,id=dedupeId$1++;for(let prop in props){if(runEffectsForProperty(inst,effects,id,prop,props,oldProps,hasPaths,extraArgs)){ran=!0}}return ran}return!1}/**
   * Runs a list of effects for a given property.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){let ran=!1,rootProperty=hasPaths?root(prop):prop,fxs=effects[rootProperty];if(fxs){for(let i=0,l=fxs.length,fx;i<l&&(fx=fxs[i]);i++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=!0}}}return ran}/**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */function pathMatchesTrigger(path,trigger){if(trigger){let triggerPath=trigger.name;return triggerPath==path||trigger.structured&&isAncestor(triggerPath,path)||trigger.wildcard&&isDescendant(triggerPath,path)}else{return!0}}/**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runObserverEffect(inst,property,props,oldProps,info){let fn="string"===typeof info.method?inst[info.method]:info.method,changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp])}else if(!info.dynamicFn){console.warn("observer method `"+info.method+"` not defined")}}/**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!PropertyEffectsType} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){// Notify
let fxs=inst[TYPES.NOTIFY],notified,id=dedupeId$1++;// Try normal notify effects; if none, fall back to try path notification
for(let prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=!0}else if(hasPaths&&notifyPath(inst,prop,props)){notified=!0}}}// Flush host if we actually notified and host was batching
// And the host has already initialized clients; this prevents
// an issue with a host observing data changes before clients are ready.
let host;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties()}}/**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */function notifyPath(inst,path,props){let rootProperty=root(path);if(rootProperty!==path){let eventName=camelToDashCase(rootProperty)+"-changed";dispatchNotifyEvent(inst,eventName,props[path],path);return!0}return!1}/**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!PropertyEffectsType} inst The element from which to fire the event
   * @param {string} eventName The name of the event to send ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property changed, the path
   *   that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */function dispatchNotifyEvent(inst,eventName,value,path){let detail={value:value,queueProperty:!0};if(path){detail.path=path}/** @type {!HTMLElement} */inst.dispatchEvent(new CustomEvent(eventName,{detail}))}/**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){let rootProperty=hasPaths?root(property):property,path=rootProperty!=property?property:null,value=path?get(inst,path):inst.__data[property];if(path&&value===void 0){value=props[property];// specifically for .splices
}dispatchNotifyEvent(inst,info.eventName,value,path)}/**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!PropertyEffectsType} inst Host element instance handling the notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */function handleNotification(event,inst,fromProp,toPath,negate){let value,detail=/** @type {Object} */event.detail,fromPath=detail&&detail.path;if(fromPath){toPath=translate(fromProp,toPath,fromPath);value=detail&&detail.value}else{value=event.currentTarget[fromProp]}value=negate?!value:value;if(!inst[TYPES.READ_ONLY]||!inst[TYPES.READ_ONLY][toPath]){if(inst._setPendingPropertyOrPath(toPath,value,!0,!!fromPath)&&(!detail||!detail.queueProperty)){inst._invalidateProperties()}}}/**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runReflectEffect(inst,property,props,oldProps,info){let value=inst.__data[property];if(sanitizeDOMValue){value=sanitizeDOMValue(value,info.attrName,"attribute",/** @type {Node} */inst)}inst._propertyToAttribute(property,info.attrName,value)}/**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {!Object} changedProps Bag of changed properties
   * @param {!Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runComputedEffects(inst,changedProps,oldProps,hasPaths){let computeEffects=inst[TYPES.COMPUTE];if(computeEffects){let inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(oldProps,inst.__dataOld);Object.assign(changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null}}}/**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runComputedEffect(inst,property,props,oldProps,info){let result=runMethodEffect(inst,property,props,oldProps,info),computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){inst._setPendingProperty(computedProp,result,!0)}else{inst[computedProp]=result}}/**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!PropertyEffectsType} inst The instance whose props are changing
   * @param {string | !Array<(string|number)>} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */function computeLinkedPaths(inst,path,value){let links=inst.__dataLinkedPaths;if(links){let link;for(let a in links){let b=links[a];if(isDescendant(a,path)){link=translate(a,b,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}else if(isDescendant(b,path)){link=translate(b,a,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}}}}// -- bindings ----------------------------------------------
/**
 * Adds binding metadata to the current `nodeInfo`, and binding effects
 * for all part dependencies to `templateInfo`.
 *
 * @param {Function} constructor Class that `_parseTemplate` is currently
 *   running on
 * @param {TemplateInfo} templateInfo Template metadata for current template
 * @param {NodeInfo} nodeInfo Node metadata for current template node
 * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
 * @param {string} target Target property name
 * @param {!Array<!BindingPart>} parts Array of binding part metadata
 * @param {string=} literal Literal text surrounding binding parts (specified
 *   only for 'property' bindings, since these must be initialized as part
 *   of boot-up)
 * @return {void}
 * @private
 */function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){// Create binding metadata and add to nodeInfo
nodeInfo.bindings=nodeInfo.bindings||[];let/** Binding */binding={kind,target,parts,literal,isCompound:1!==parts.length};nodeInfo.bindings.push(binding);// Add listener info to binding metadata
if(shouldAddListener(binding)){let{event,negate}=binding.parts[0];binding.listenerEvent=event||camelToDashCase(target)+"-changed";binding.listenerNegate=negate}// Add "propagate" property effects to templateInfo
let index=templateInfo.nodeInfoList.length;for(let i=0,part;i<binding.parts.length;i++){part=binding.parts[i];part.compoundIndex=i;addEffectForBindingPart(constructor,templateInfo,binding,part,index)}}/**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if("attribute"===binding.kind&&"-"===binding.target[0]){console.warn("Cannot set attribute "+binding.target+" because \"-\" is not a valid attribute starting character")}else{let dependencies=part.dependencies,info={index,binding,part,evaluator:constructor};for(let j=0,trigger;j<dependencies.length;j++){trigger=dependencies[j];if("string"==typeof trigger){trigger=parseArg(trigger);trigger.wildcard=!0}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info,trigger})}}}}/**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){let node=nodeList[info.index],binding=info.binding,part=info.part;// Subpath notification: transform path and set to client
// e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
if(hasPaths&&part.source&&path.length>part.source.length&&"property"==binding.kind&&!binding.isCompound&&node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){let value=props[path];path=translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,!1,!0)){inst._enqueueClient(node)}}else{let value=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);// Propagate value to child
applyBindingValue(inst,node,binding,part,value)}}/**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!PropertyEffectsType} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(sanitizeDOMValue){value=sanitizeDOMValue(value,binding.target,binding.kind,node)}if("attribute"==binding.kind){// Attribute binding
inst._valueToNodeAttribute(/** @type {Element} */node,value,binding.target)}else{// Property binding
let prop=binding.target;if(node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node[TYPES.READ_ONLY]||!node[TYPES.READ_ONLY][prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node)}}}else{inst._setUnmanagedPropertyToNode(node,prop,value)}}}/**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */function computeBindingValue(node,value,binding,part){if(binding.isCompound){let storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join("")}if("attribute"!==binding.kind){// Some browsers serialize `undefined` to `"undefined"`
if("textContent"===binding.target||"value"===binding.target&&("input"===node.localName||"textarea"===node.localName)){value=value==void 0?"":value}}return value}/**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */function shouldAddListener(binding){return!!binding.target&&"attribute"!=binding.kind&&"text"!=binding.kind&&!binding.isCompound&&"{"===binding.parts[0].mode}/**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!PropertyEffectsType} inst Instance that bas been previously bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */function setupBindings(inst,templateInfo){// Setup compound storage, dataHost, and notify listeners
let{nodeList,nodeInfoList}=templateInfo;if(nodeInfoList.length){for(let i=0;i<nodeInfoList.length;i++){let info=nodeInfoList[i],node=nodeList[i],bindings=info.bindings;if(bindings){for(let i=0,binding;i<bindings.length;i++){binding=bindings[i];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding)}}node.__dataHost=inst}}}/**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function setupCompoundStorage(node,binding){if(binding.isCompound){// Create compound storage map
let storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={}),parts=binding.parts,literals=Array(parts.length);for(let j=0;j<parts.length;j++){literals[j]=parts[j].literal}let target=binding.target;storage[target]=literals;// Configure properties with their literal parts
if(binding.literal&&"property"==binding.kind){node[target]=binding.literal}}}/**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!PropertyEffectsType} inst Host element instance to handle notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function addNotifyListener(node,inst,binding){if(binding.listenerEvent){let part=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,part.source,part.negate)})}}// -- for method-based effects (complexObserver & computed) --------------
/**
 * Adds property effects for each argument in the method signature (and
 * optionally, for the method name if `dynamic` is true) that calls the
 * provided effect function.
 *
 * @param {Element | Object} model Prototype or instance
 * @param {!MethodSignature} sig Method signature metadata
 * @param {string} type Type of property effect to add
 * @param {Function} effectFn Function to run when arguments change
 * @param {*=} methodInfo Effect-specific information to be included in
 *   method effect metadata
 * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
 *   method names should be included as a dependency to the effect. Note,
 *   defaults to true if the signature is static (sig.static is true).
 * @return {void}
 * @private
 */function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&("object"!==typeof dynamicFn||dynamicFn[sig.methodName]);let info={methodName:sig.methodName,args:sig.args,methodInfo,dynamicFn};for(let i=0,arg;i<sig.args.length&&(arg=sig.args[i]);i++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg})}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info})}}/**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!PropertyEffectsType} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */function runMethodEffect(inst,property,props,oldProps,info){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
let context=inst._methodHost||inst,fn=context[info.methodName];if(fn){let args=inst._marshalArgs(info.args,property,props);return fn.apply(context,args)}else if(!info.dynamicFn){console.warn("method `"+info.methodName+"` not defined")}}const emptyArray=[],IDENT="(?:"+"[a-zA-Z_$][\\w.:$\\-*]*"+")",NUMBER="(?:"+"[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?"+")",SQUOTE_STRING="(?:"+"'(?:[^'\\\\]|\\\\.)*'"+")",DQUOTE_STRING="(?:"+"\"(?:[^\"\\\\]|\\\\.)*\""+")",STRING="(?:"+SQUOTE_STRING+"|"+DQUOTE_STRING+")",ARGUMENT="(?:("+IDENT+"|"+NUMBER+"|"+STRING+")\\s*"+")",ARGUMENTS="(?:"+ARGUMENT+"(?:,\\s*"+ARGUMENT+")*"+")",ARGUMENT_LIST="(?:"+"\\(\\s*"+"(?:"+ARGUMENTS+"?"+")"+"\\)\\s*"+")",BINDING="("+IDENT+"\\s*"+ARGUMENT_LIST+"?"+")",OPEN_BRACKET="(\\[\\[|{{)"+"\\s*",CLOSE_BRACKET="(?:]]|}})",NEGATE="(?:(!)\\s*)?",EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET,bindingRegex=new RegExp(EXPRESSION,"g");// Regular expressions used for binding
/**
                                                   * Create a string from binding parts of all the literal parts
                                                   *
                                                   * @param {!Array<BindingPart>} parts All parts to stringify
                                                   * @return {string} String made from the literal parts
                                                   */function literalFromParts(parts){let s="";for(let i=0,literal;i<parts.length;i++){literal=parts[i].literal;s+=literal||""}return s}/**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */function parseMethod(expression){// tries to match valid javascript property names
let m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){let methodName=m[1],sig={methodName,static:!0,args:emptyArray};if(m[2].trim()){// replace escaped commas with comma entity, split on un-escaped commas
let args=m[2].replace(/\\,/g,"&comma;").split(",");return parseArgs(args,sig)}else{return sig}}return null}/**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){let arg=parseArg(rawArg);if(!arg.literal){sig.static=!1}return arg},this);return sig}/**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */function parseArg(rawArg){// clean up whitespace
let arg=rawArg.trim()// replace comma entity with comma
.replace(/&comma;/g,",")// repair extra escape sequences; note only commas strictly need
// escaping, but we allow any other char to be escaped since its
// likely users will do this
.replace(/\\(.)/g,"$1"),a={name:arg,value:"",literal:!1},fc=arg[0];// basic argument descriptor
if("-"===fc){fc=arg[1]}if("0"<=fc&&"9">=fc){fc="#"}switch(fc){case"'":case"\"":a.value=arg.slice(1,-1);a.literal=!0;break;case"#":a.value=+arg;a.literal=!0;break;}// if not literal, look for structured path
if(!a.literal){a.rootProperty=root(arg);// detect structured path (has dots)
a.structured=isPath(arg);if(a.structured){a.wildcard=".*"==arg.slice(-2);if(a.wildcard){a.name=arg.slice(0,-2)}}}return a}// data api
/**
 * Sends array splice notifications (`.splices` and `.length`)
 *
 * Note: this implementation only accepts normalized paths
 *
 * @param {!PropertyEffectsType} inst Instance to send notifications to
 * @param {Array} array The array the mutations occurred on
 * @param {string} path The path to the array that was mutated
 * @param {Array} splices Array of splice records
 * @return {void}
 * @private
 */function notifySplices(inst,array,path,splices){let splicesPath=path+".splices";inst.notifyPath(splicesPath,{indexSplices:splices});inst.notifyPath(path+".length",array.length);// Null here to allow potentially large splice records to be GC'ed.
inst.__data[splicesPath]={indexSplices:null}}/**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!PropertyEffectsType} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */function notifySplice(inst,array,path,index,addedCount,removed){notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:"splice"}])}/**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */function upper(name){return name[0].toUpperCase()+name.substring(1)}/**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin TemplateStamp
   * @appliesMixin PropertyAccessors
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   */const PropertyEffects=dedupingMixin(superClass=>{/**
   * @constructor
   * @extends {superClass}
   * @implements {Polymer_PropertyAccessors}
   * @implements {Polymer_TemplateStamp}
   * @unrestricted
   * @private
   */const propertyEffectsBase=TemplateStamp(PropertyAccessors(superClass));/**
                                                                                * @polymer
                                                                                * @mixinClass
                                                                                * @implements {Polymer_PropertyEffects}
                                                                                * @extends {propertyEffectsBase}
                                                                                * @unrestricted
                                                                                */class PropertyEffects extends propertyEffectsBase{constructor(){super();/** @type {boolean} */ // Used to identify users of this mixin, ala instanceof
this.__isPropertyEffectsClient=!0;/** @type {number} */ // NOTE: used to track re-entrant calls to `_flushProperties`
// path changes dirty check against `__dataTemp` only during one "turn"
// and are cleared when `__dataCounter` returns to 0.
this.__dataCounter=0;/** @type {boolean} */this.__dataClientsReady;/** @type {Array} */this.__dataPendingClients;/** @type {Object} */this.__dataToNotify;/** @type {Object} */this.__dataLinkedPaths;/** @type {boolean} */this.__dataHasPaths;/** @type {Object} */this.__dataCompoundStorage;/** @type {Polymer_PropertyEffects} */this.__dataHost;/** @type {!Object} */this.__dataTemp;/** @type {boolean} */this.__dataClientsInitialized;/** @type {!Object} */this.__data;/** @type {!Object} */this.__dataPending;/** @type {!Object} */this.__dataOld;/** @type {Object} */this.__computeEffects;/** @type {Object} */this.__reflectEffects;/** @type {Object} */this.__notifyEffects;/** @type {Object} */this.__propagateEffects;/** @type {Object} */this.__observeEffects;/** @type {Object} */this.__readOnly;/** @type {!TemplateInfo} */this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return TYPES}/**
       * @return {void}
       */_initializeProperties(){super._initializeProperties();hostStack.registerHost(this);this.__dataClientsReady=!1;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=!1;// May be set on instance prior to upgrade
this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=!1}/**
       * Overrides `PropertyAccessors` implementation to provide a
       * more efficient implementation of initializing properties from
       * the prototype on the instance.
       *
       * @override
       * @param {Object} props Properties to initialize on the prototype
       * @return {void}
       */_initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={}}/**
       * Overrides `PropertyAccessors` implementation to avoid setting
       * `_setProperty`'s `shouldNotify: true`.
       *
       * @override
       * @param {Object} props Properties to initialize on the instance
       * @return {void}
       */_initializeInstanceProperties(props){let readOnly=this[TYPES.READ_ONLY];for(let prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop]}}}// Prototype setup ----------------------------------------
/**
     * Equivalent to static `addPropertyEffect` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     */_addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);// effects are accumulated into arrays per property based on type
let effects=ensureOwnEffectMap(this,type)[property];if(!effects){effects=this[type][property]=[]}effects.push(effect)}/**
       * Removes the given property effect.
       *
       * @param {string} property Property the effect was associated with
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object to remove
       * @return {void}
       */_removePropertyEffect(property,type,effect){let effects=ensureOwnEffectMap(this,type)[property],idx=effects.indexOf(effect);if(0<=idx){effects.splice(idx,1)}}/**
       * Returns whether the current prototype/instance has a property effect
       * of a certain type.
       *
       * @param {string} property Property name
       * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */_hasPropertyEffect(property,type){let effects=this[type];return!!(effects&&effects[property])}/**
       * Returns whether the current prototype/instance has a "read only"
       * accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */_hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY)}/**
       * Returns whether the current prototype/instance has a "notify"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */_hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY)}/**
       * Returns whether the current prototype/instance has a "reflect to attribute"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */_hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT)}/**
       * Returns whether the current prototype/instance has a "computed"
       * property effect for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this type
       * @protected
       */_hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE)}// Runtime ----------------------------------------
/**
     * Sets a pending property or path.  If the root property of the path in
     * question had no accessor, the path is set, otherwise it is enqueued
     * via `_setPendingProperty`.
     *
     * This function isolates relatively expensive functionality necessary
     * for the public API (`set`, `setProperties`, `notifyPath`, and property
     * change listeners via {{...}} bindings), such that it is only done
     * when paths enter the system, and not at every propagation step.  It
     * also sets a `__dataHasPaths` flag on the instance which is used to
     * fast-path slower path-matching code in the property effects host paths.
     *
     * `path` can be a path string or array of path parts as accepted by the
     * public API.
     *
     * @param {string | !Array<number|string>} path Path to set
     * @param {*} value Value to set
     * @param {boolean=} shouldNotify Set to true if this change should
     *  cause a property notification event dispatch
     * @param {boolean=} isPathNotification If the path being set is a path
     *   notification of an already changed value, as opposed to a request
     *   to set and notify the change.  In the latter `false` case, a dirty
     *   check is performed and then the value is set to the path before
     *   enqueuing the pending property change.
     * @return {boolean} Returns true if the property/path was enqueued in
     *   the pending changes bag.
     * @protected
     */_setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||root(Array.isArray(path)?path[0]:path)!==path){// Dirty check changes being set to a path against the actual object,
// since this is the entry point for paths into the system; from here
// the only dirty checks are against the `__dataTemp` cache to prevent
// duplicate work in the same turn only. Note, if this was a notification
// of a change already set to a path (isPathNotification: true),
// we always let the change through and skip the `set` since it was
// already dirty checked at the point of entry and the underlying
// object has already been updated
if(!isPathNotification){let old=get(this,path);path=/** @type {string} */set(this,path,value);// Use property-accessor's simpler dirty check
if(!path||!super._shouldPropertyChange(path,value,old)){return!1}}this.__dataHasPaths=!0;if(this._setPendingProperty(/**@type{string}*/path,value,shouldNotify)){computeLinkedPaths(this,path,value);return!0}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(/**@type{string}*/path,value,shouldNotify)}else{this[path]=value}}return!1}/**
       * Applies a value to a non-Polymer element/node's property.
       *
       * The implementation makes a best-effort at binding interop:
       * Some native element properties have side-effects when
       * re-setting the same value (e.g. setting `<input>.value` resets the
       * cursor position), so we do a dirty-check before setting the value.
       * However, for better interop with non-Polymer custom elements that
       * accept objects, we explicitly re-set object changes coming from the
       * Polymer world (which may include deep object changes without the
       * top reference changing), erring on the side of providing more
       * information.
       *
       * Users may override this method to provide alternate approaches.
       *
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */_setUnmanagedPropertyToNode(node,prop,value){// It is a judgment call that resetting primitives is
// "bad" and resettings objects is also "good"; alternatively we could
// implement a whitelist of tag & property values that should never
// be reset (e.g. <input>.value && <select>.value)
if(value!==node[prop]||"object"==typeof value){node[prop]=value}}/**
       * Overrides the `PropertiesChanged` implementation to introduce special
       * dirty check logic depending on the property & value being set:
       *
       * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
       *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
       * 2. Object set to simple property (e.g. 'prop': {...})
       *    Stored in `__dataTemp` and `__data`, dirty checked against
       *    `__dataTemp` by default implementation of `_shouldPropertyChange`
       * 3. Primitive value set to simple property (e.g. 'prop': 42)
       *    Stored in `__data`, dirty checked against `__data`
       *
       * The dirty-check is important to prevent cycles due to two-way
       * notification, but paths and objects are only dirty checked against any
       * previous value set during this turn via a "temporary cache" that is
       * cleared when the last `_propertiesChanged` exits. This is so:
       * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
       *    due to array mutations like shift/unshift/splice; this is fine
       *    since path changes are dirty-checked at user entry points like `set`
       * b. dirty-checking for objects only lasts one turn to allow the user
       *    to mutate the object in-place and re-set it with the same identity
       *    and have all sub-properties re-propagated in a subsequent turn.
       *
       * The temp cache is not necessarily sufficient to prevent invalid array
       * paths, since a splice can happen during the same turn (with pathological
       * user code); we could introduce a "fixup" for temporarily cached array
       * paths if needed: https://github.com/Polymer/polymer/issues/4227
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify True if property should fire notification
       *   event (applies only for `notify: true` properties)
       * @return {boolean} Returns true if the property changed
       */_setPendingProperty(property,value,shouldNotify){let propIsPath=this.__dataHasPaths&&isPath(property),prevProps=propIsPath?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}// Ensure old is captured from the last turn
if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property]}// Paths are stored in temporary cache (cleared at end of turn),
// which is used for dirty-checking, all others stored in __data
if(propIsPath){this.__dataTemp[property]=value}else{this.__data[property]=value}// All changes go into pending property bag, passed to _propertiesChanged
this.__dataPending[property]=value;// Track properties that should notify separately
if(propIsPath||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify}return!0}return!1}/**
       * Overrides base implementation to ensure all accessors set `shouldNotify`
       * to true, for per-property notification tracking.
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       */_setProperty(property,value){if(this._setPendingProperty(property,value,!0)){this._invalidateProperties()}}/**
       * Overrides `PropertyAccessor`'s default async queuing of
       * `_propertiesChanged`: if `__dataReady` is false (has not yet been
       * manually flushed), the function no-ops; otherwise flushes
       * `_propertiesChanged` synchronously.
       *
       * @override
       * @return {void}
       */_invalidateProperties(){if(this.__dataReady){this._flushProperties()}}/**
       * Enqueues the given client on a list of pending clients, whose
       * pending property changes can later be flushed via a call to
       * `_flushClients`.
       *
       * @param {Object} client PropertyEffects client to enqueue
       * @return {void}
       * @protected
       */_enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client)}}/**
       * Overrides superclass implementation.
       *
       * @return {void}
       * @protected
       */_flushProperties(){this.__dataCounter++;super._flushProperties();this.__dataCounter--}/**
       * Flushes any clients previously enqueued via `_enqueueClient`, causing
       * their `_flushProperties` method to run.
       *
       * @return {void}
       * @protected
       */_flushClients(){if(!this.__dataClientsReady){this.__dataClientsReady=!0;this._readyClients();// Override point where accessors are turned on; importantly,
// this is after clients have fully readied, providing a guarantee
// that any property effects occur only after all clients are ready.
this.__dataReady=!0}else{this.__enableOrFlushClients()}}// NOTE: We ensure clients either enable or flush as appropriate. This
// handles two corner cases:
// (1) clients flush properly when connected/enabled before the host
// enables; e.g.
//   (a) Templatize stamps with no properties and does not flush and
//   (b) the instance is inserted into dom and
//   (c) then the instance flushes.
// (2) clients enable properly when not connected/enabled when the host
// flushes; e.g.
//   (a) a template is runtime stamped and not yet connected/enabled
//   (b) a host sets a property, causing stamped dom to flush
//   (c) the stamped dom enables.
__enableOrFlushClients(){let clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(let i=0,client;i<clients.length;i++){client=clients[i];if(!client.__dataEnabled){client._enableProperties()}else if(client.__dataPending){client._flushProperties()}}}}/**
       * Perform any initial setup on client dom. Called before the first
       * `_flushProperties` call on client dom and before any element
       * observers are called.
       *
       * @return {void}
       * @protected
       */_readyClients(){this.__enableOrFlushClients()}/**
       * Sets a bag of property changes to this instance, and
       * synchronously processes all effects of the properties as a batch.
       *
       * Property names must be simple properties, not paths.  Batched
       * path propagation is not supported.
       *
       * @param {Object} props Bag of one or more key-value pairs whose key is
       *   a property and value is the new value to set for that property.
       * @param {boolean=} setReadOnly When true, any private values set in
       *   `props` will be set. By default, `setProperties` will not set
       *   `readOnly: true` root properties.
       * @return {void}
       * @public
       */setProperties(props,setReadOnly){for(let path in props){if(setReadOnly||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][path]){//TODO(kschaaf): explicitly disallow paths in setProperty?
// wildcard observers currently only pass the first changed path
// in the `info` object, and you could do some odd things batching
// paths, e.g. {'foo.bar': {...}, 'foo': null}
this._setPendingPropertyOrPath(path,props[path],!0)}}this._invalidateProperties()}/**
       * Overrides `PropertyAccessors` so that property accessor
       * side effects are not enabled until after client dom is fully ready.
       * Also calls `_flushClients` callback to ensure client dom is enabled
       * that was not enabled as a result of flushing properties.
       *
       * @override
       * @return {void}
       */ready(){// It is important that `super.ready()` is not called here as it
// immediately turns on accessors. Instead, we wait until `readyClients`
// to enable accessors to provide a guarantee that clients are ready
// before processing any accessors side effects.
this._flushProperties();// If no data was pending, `_flushProperties` will not `flushClients`
// so ensure this is done.
if(!this.__dataClientsReady){this._flushClients()}// Before ready, client notifications do not trigger _flushProperties.
// Therefore a flush is necessary here if data has been set.
if(this.__dataPending){this._flushProperties()}}/**
       * Implements `PropertyAccessors`'s properties changed callback.
       *
       * Runs each class of effects for the batch of changed properties in
       * a specific order (compute, propagate, reflect, observe, notify).
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       */_propertiesChanged(currentProps,changedProps,oldProps){// ----------------------------
// let c = Object.getOwnPropertyNames(changedProps || {});
// window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
// if (window.debug) { debugger; }
// ----------------------------
let hasPaths=this.__dataHasPaths;this.__dataHasPaths=!1;// Compute properties
runComputedEffects(this,changedProps,oldProps,hasPaths);// Clear notify properties prior to possible reentry (propagate, observe),
// but after computing effects have a chance to add to them
let notifyProps=this.__dataToNotify;this.__dataToNotify=null;// Propagate properties to clients
this._propagatePropertyChanges(changedProps,oldProps,hasPaths);// Flush clients
this._flushClients();// Reflect properties
runEffects(this,this[TYPES.REFLECT],changedProps,oldProps,hasPaths);// Observe properties
runEffects(this,this[TYPES.OBSERVE],changedProps,oldProps,hasPaths);// Notify properties to host
if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths)}// Clear temporary cache at end of turn
if(1==this.__dataCounter){this.__dataTemp={}}// ----------------------------
// window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
// ----------------------------
}/**
       * Called to propagate any property changes to stamped template nodes
       * managed by this element.
       *
       * @param {Object} changedProps Bag of changed properties
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {void}
       * @protected
       */_propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this[TYPES.PROPAGATE]){runEffects(this,this[TYPES.PROPAGATE],changedProps,oldProps,hasPaths)}let templateInfo=this.__templateInfo;while(templateInfo){runEffects(this,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);templateInfo=templateInfo.nextTemplateInfo}}/**
       * Aliases one data path as another, such that path notifications from one
       * are routed to the other.
       *
       * @param {string | !Array<string|number>} to Target path to link.
       * @param {string | !Array<string|number>} from Source path to link.
       * @return {void}
       * @public
       */linkPaths(to,from){to=normalize(to);from=normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from}/**
       * Removes a data path alias previously established with `_linkPaths`.
       *
       * Note, the path to unlink should be the target (`to`) used when
       * linking the paths.
       *
       * @param {string | !Array<string|number>} path Target path to unlink.
       * @return {void}
       * @public
       */unlinkPaths(path){path=normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path]}}/**
       * Notify that an array has changed.
       *
       * Example:
       *
       *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
       *     ...
       *     this.items.splice(1, 1, {name: 'Sam'});
       *     this.items.push({name: 'Bob'});
       *     this.notifySplices('items', [
       *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1, object: this.items, type: 'splice' },
       *       { index: 3, removed: [], addedCount: 1, object: this.items, type: 'splice'}
       *     ]);
       *
       * @param {string} path Path that should be notified.
       * @param {Array} splices Array of splice records indicating ordered
       *   changes that occurred to the array. Each record should have the
       *   following fields:
       *    * index: index at which the change occurred
       *    * removed: array of items that were removed from this index
       *    * addedCount: number of new items added at this index
       *    * object: a reference to the array in question
       *    * type: the string literal 'splice'
       *
       *   Note that splice records _must_ be normalized such that they are
       *   reported in index order (raw results from `Object.observe` are not
       *   ordered and must be normalized/merged before notifying).
       * @return {void}
       * @public
      */notifySplices(path,splices){let info={path:""},array=/** @type {Array} */get(this,path,info);notifySplices(this,array,info.path,splices)}/**
       * Convenience method for reading a value from a path.
       *
       * Note, if any part in the path is undefined, this method returns
       * `undefined` (this method does not throw when dereferencing undefined
       * paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `users.12.name` or `['users', 12, 'name']`).
       * @param {Object=} root Root object from which the path is evaluated.
       * @return {*} Value at the path, or `undefined` if any part of the path
       *   is undefined.
       * @public
       */get(path,root){return get(root||this,path)}/**
       * Convenience method for setting a value to a path and notifying any
       * elements bound to the same path.
       *
       * Note, if any part in the path except for the last is undefined,
       * this method does nothing (this method does not throw when
       * dereferencing undefined paths).
       *
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
       * @param {*} value Value to set at the specified path.
       * @param {Object=} root Root object from which the path is evaluated.
       *   When specified, no notification will occur.
       * @return {void}
       * @public
      */set(path,value,root){if(root){set(root,path,value)}else{if(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][/** @type {string} */path]){if(this._setPendingPropertyOrPath(path,value,!0)){this._invalidateProperties()}}}}/**
       * Adds items onto the end of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to push onto array
       * @return {number} New length of the array.
       * @public
       */push(path,...items){let info={path:""},array=/** @type {Array}*/get(this,path,info),len=array.length,ret=array.push(...items);if(items.length){notifySplice(this,array,info.path,len,items.length,[])}return ret}/**
       * Removes an item from the end of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */pop(path){let info={path:""},array=/** @type {Array} */get(this,path,info),hadLength=!!array.length,ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret])}return ret}/**
       * Starting from the start index specified, removes 0 or more items
       * from the array and inserts 0 or more new items in their place.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.splice`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {number} start Index from which to start removing/inserting.
       * @param {number=} deleteCount Number of items to remove.
       * @param {...*} items Items to insert into array.
       * @return {Array} Array of removed items.
       * @public
       */splice(path,start,deleteCount,...items){let info={path:""},array=/** @type {Array} */get(this,path,info);// Normalize fancy native splice handling of crazy start values
if(0>start){start=array.length-Math.floor(-start)}else if(start){start=Math.floor(start)}// array.splice does different things based on the number of arguments
// you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
// do different things. In the former, the whole array is cleared. In the
// latter, no items are removed.
// This means that we need to detect whether 1. one of the arguments
// is actually passed in and then 2. determine how many arguments
// we should pass on to the native array.splice
//
let ret;// Omit any additional arguments if they were not passed in
if(2===arguments.length){ret=array.splice(start);// Either start was undefined and the others were defined, but in this
// case we can safely pass on all arguments
//
// Note: this includes the case where none of the arguments were passed in,
// e.g. this.splice('array'). However, if both start and deleteCount
// are undefined, array.splice will not modify the array (as expected)
}else{ret=array.splice(start,deleteCount,...items)}// At the end, check whether any items were passed in (e.g. insertions)
// or if the return array contains items (e.g. deletions).
// Only notify if items were added or deleted.
if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret)}return ret}/**
       * Removes an item from the beginning of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */shift(path){let info={path:""},array=/** @type {Array} */get(this,path,info),hadLength=!!array.length,ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret])}return ret}/**
       * Adds items onto the beginning of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to insert info array
       * @return {number} New length of the array.
       * @public
       */unshift(path,...items){let info={path:""},array=/** @type {Array} */get(this,path,info),ret=array.unshift(...items);if(items.length){notifySplice(this,array,info.path,0,items.length,[])}return ret}/**
       * Notify that a path has changed.
       *
       * Example:
       *
       *     this.item.user.name = 'Bob';
       *     this.notifyPath('item.user.name');
       *
       * @param {string} path Path that should be notified.
       * @param {*=} value Value at the path (optional).
       * @return {void}
       * @public
      */notifyPath(path,value){/** @type {string} */let propPath;if(1==arguments.length){// Get value if not supplied
let info={path:""};value=get(this,path,info);propPath=info.path}else if(Array.isArray(path)){// Normalize path if needed
propPath=normalize(path)}else{propPath=/** @type{string} */path}if(this._setPendingPropertyOrPath(propPath,value,!0,!0)){this._invalidateProperties()}}/**
       * Equivalent to static `createReadOnlyProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */_createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this["_set"+upper(property)]=/** @this {PropertyEffects} */function(value){this._setProperty(property,value)}}}/**
       * Equivalent to static `createPropertyObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */_createPropertyObserver(property,method,dynamicFn){let info={property,method,dynamicFn:!!dynamicFn};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(/** @type {string} */method,TYPES.OBSERVE,{fn:runObserverEffect,info,trigger:{name:method}})}}/**
       * Equivalent to static `createMethodObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */_createMethodObserver(expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn)}/**
       * Equivalent to static `createNotifyingProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */_createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(property)+"-changed",property:property}})}/**
       * Equivalent to static `createReflectedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */_createReflectedProperty(property){let attr=this.constructor.attributeNameForProperty(property);if("-"===attr[0]){console.warn("Property "+property+" cannot be reflected to attribute "+attr+" because \"-\" is not a valid starting attribute name. Use a lowercase first letter for the property instead.")}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}})}}/**
       * Equivalent to static `createComputedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */_createComputedProperty(property,expression,dynamicFn){let sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn)}/**
       * Gather the argument values for a method specified in the provided array
       * of argument metadata.
       *
       * The `path` and `value` arguments are used to fill in wildcard descriptor
       * when the method is being called as a result of a path notification.
       *
       * @param {!Array<!MethodArg>} args Array of argument metadata
       * @param {string} path Property/path name that triggered the method effect
       * @param {Object} props Bag of current property changes
       * @return {Array<*>} Array of argument values
       * @private
       */_marshalArgs(args,path,props){const data=this.__data;let values=[];for(let i=0,l=args.length;i<l;i++){let arg=args[i],name=arg.name,v;if(arg.literal){v=arg.value}else{if(arg.structured){v=get(data,name);// when data is not stored e.g. `splices`
if(v===void 0){v=props[name]}}else{v=data[name]}}if(arg.wildcard){// Only send the actual path changed info if the change that
// caused the observer to run matched the wildcard
let baseChanged=0===name.indexOf(path+"."),matches=0===path.indexOf(name)&&!baseChanged;values[i]={path:matches?path:name,value:matches?props[path]:v,base:v}}else{values[i]=v}}return values}// -- static class methods ------------
/**
     * Ensures an accessor exists for the specified property, and adds
     * to a list of "property effects" that will run when the accessor for
     * the specified property is set.  Effects are grouped by "type", which
     * roughly corresponds to a phase in effect processing.  The effect
     * metadata should be in the following form:
     *
     *     {
     *       fn: effectFunction, // Reference to function to call to perform effect
     *       info: { ... }       // Effect metadata passed to function
     *       trigger: {          // Optional triggering metadata; if not provided
     *         name: string      // the property is treated as a wildcard
     *         structured: boolean
     *         wildcard: boolean
     *       }
     *     }
     *
     * Effects are called from `_propertiesChanged` in the following order by
     * type:
     *
     * 1. COMPUTE
     * 2. PROPAGATE
     * 3. REFLECT
     * 4. OBSERVE
     * 5. NOTIFY
     *
     * Effect functions are called with the following signature:
     *
     *     effectFunction(inst, path, props, oldProps, info, hasPaths)
     *
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     */static addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect)}/**
       * Creates a single-property observer for the given property.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */static createPropertyObserver(property,method,dynamicFn){this.prototype._createPropertyObserver(property,method,dynamicFn)}/**
       * Creates a multi-property "method observer" based on the provided
       * expression, which should be a string in the form of a normal JavaScript
       * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
       * should correspond to a property or path in the context of this
       * prototype (or instance), or may be a literal string or number.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       * @return {void}
       *   whether method names should be included as a dependency to the effect.
       * @protected
       */static createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn)}/**
       * Causes the setter for the given property to dispatch `<property>-changed`
       * events to notify of changes to the property.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */static createNotifyingProperty(property){this.prototype._createNotifyingProperty(property)}/**
       * Creates a read-only accessor for the given property.
       *
       * To set the property, use the protected `_setProperty` API.
       * To create a custom protected setter (e.g. `_setMyProp()` for
       * property `myProp`), pass `true` for `protectedSetter`.
       *
       * Note, if the property will have other property effects, this method
       * should be called first, before adding other effects.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */static createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter)}/**
       * Causes the setter for the given property to reflect the property value
       * to a (dash-cased) attribute of the same name.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       */static createReflectedProperty(property){this.prototype._createReflectedProperty(property)}/**
       * Creates a computed property whose value is set to the result of the
       * method described by the given `expression` each time one or more
       * arguments to the method changes.  The expression should be a string
       * in the form of a normal JavaScript function signature:
       * `'methodName(arg1, [..., argn])'`
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
       *   method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */static createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn)}/**
       * Parses the provided template to ensure binding effects are created
       * for them, and then ensures property accessors are created for any
       * dependent properties in the template.  Binding effects for bound
       * templates are stored in a linked list on the instance so that
       * templates can be efficiently stamped and unstamped.
       *
       * @param {!HTMLTemplateElement} template Template containing binding
       *   bindings
       * @return {!TemplateInfo} Template metadata object
       * @protected
       */static bindTemplate(template){return this.prototype._bindTemplate(template)}// -- binding ----------------------------------------------
/**
     * Equivalent to static `bindTemplate` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * This method may be called on the prototype (for prototypical template
     * binding, to avoid creating accessors every instance) once per prototype,
     * and will be called with `runtimeBinding: true` by `_stampTemplate` to
     * create and link an instance of the template metadata associated with a
     * particular stamping.
     *
     * @param {!HTMLTemplateElement} template Template containing binding
     *   bindings
     * @param {boolean=} instanceBinding When false (default), performs
     *   "prototypical" binding of the template and overwrites any previously
     *   bound template for the class. When true (as passed from
     *   `_stampTemplate`), the template info is instanced and linked into
     *   the list of bound templates.
     * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
     *   this is an instance of the prototypical template info
     * @protected
     */_bindTemplate(template,instanceBinding){let templateInfo=this.constructor._parseTemplate(template),wasPreBound=this.__templateInfo==templateInfo;// Optimization: since this is called twice for proto-bound templates,
// don't attempt to recreate accessors if this template was pre-bound
if(!wasPreBound){for(let prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop)}}if(instanceBinding){// For instance-time binding, create instance of template metadata
// and link into list of templates if necessary
templateInfo=/** @type {!TemplateInfo} */Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!wasPreBound&&this.__templateInfo){let last=this.__templateInfoLast||this.__templateInfo;this.__templateInfoLast=last.nextTemplateInfo=templateInfo;templateInfo.previousTemplateInfo=last;return templateInfo}}return this.__templateInfo=templateInfo}/**
       * Adds a property effect to the given template metadata, which is run
       * at the "propagate" stage of `_propertiesChanged` when the template
       * has been bound to the element via `_bindTemplate`.
       *
       * The `effect` object should match the format in `_addPropertyEffect`.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       */static _addTemplatePropertyEffect(templateInfo,prop,effect){let hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=!0;let effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{},propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect)}/**
       * Stamps the provided template and performs instance-time setup for
       * Polymer template features, including data bindings, declarative event
       * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
       * is returned containing the stamped DOM, ready for insertion into the
       * DOM.
       *
       * This method may be called more than once; however note that due to
       * `shadycss` polyfill limitations, only styles from templates prepared
       * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
       * to the shadow root and support CSS custom properties), and note that
       * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
       * any styles required by in runtime-stamped templates must be included
       * in the main element template.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       * @override
       * @protected
       */_stampTemplate(template){// Ensures that created dom is `_enqueueClient`'d to this element so
// that it can be flushed on next call to `_flushProperties`
hostStack.beginHosting(this);let dom=super._stampTemplate(template);hostStack.endHosting(this);let templateInfo=/** @type {!TemplateInfo} */this._bindTemplate(template,!0);// Add template-instance-specific data to instanced templateInfo
templateInfo.nodeList=dom.nodeList;// Capture child nodes to allow unstamping of non-prototypical templates
if(!templateInfo.wasPreBound){let nodes=templateInfo.childNodes=[];for(let n=dom.firstChild;n;n=n.nextSibling){nodes.push(n)}}dom.templateInfo=templateInfo;// Setup compound storage, 2-way listeners, and dataHost for bindings
setupBindings(this,templateInfo);// Flush properties into template nodes if already booted
if(this.__dataReady){runEffects(this,templateInfo.propertyEffects,this.__data,null,!1,templateInfo.nodeList)}return dom}/**
       * Removes and unbinds the nodes previously contained in the provided
       * DocumentFragment returned from `_stampTemplate`.
       *
       * @param {!StampedTemplate} dom DocumentFragment previously returned
       *   from `_stampTemplate` associated with the nodes to be removed
       * @return {void}
       * @protected
       */_removeBoundDom(dom){// Unlink template info
let templateInfo=dom.templateInfo;if(templateInfo.previousTemplateInfo){templateInfo.previousTemplateInfo.nextTemplateInfo=templateInfo.nextTemplateInfo}if(templateInfo.nextTemplateInfo){templateInfo.nextTemplateInfo.previousTemplateInfo=templateInfo.previousTemplateInfo}if(this.__templateInfoLast==templateInfo){this.__templateInfoLast=templateInfo.previousTemplateInfo}templateInfo.previousTemplateInfo=templateInfo.nextTemplateInfo=null;// Remove stamped nodes
let nodes=templateInfo.childNodes;for(let i=0,node;i<nodes.length;i++){node=nodes[i];node.parentNode.removeChild(node)}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */static _parseTemplateNode(node,templateInfo,nodeInfo){let noted=super._parseTemplateNode(node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){let parts=this._parseBindings(node.textContent,templateInfo);if(parts){// Initialize the textContent with any literal parts
// NOTE: default to a space here so the textNode remains; some browsers
// (IE) omit an empty textNode following cloneNode/importNode.
node.textContent=literalFromParts(parts)||" ";addBinding(this,templateInfo,nodeInfo,"text","textContent",parts);noted=!0}}return noted}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from attributes.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @override
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */static _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){let parts=this._parseBindings(value,templateInfo);if(parts){// Attribute or property
let origName=name,kind="property";// The only way we see a capital letter here is if the attr has
// a capital letter in it per spec. In this case, to make sure
// this binding works, we go ahead and make the binding to the attribute.
if(capitalAttributeRegex.test(name)){kind="attribute"}else if("$"==name[name.length-1]){name=name.slice(0,-1);kind="attribute"}// Initialize attribute bindings with any literal parts
let literal=literalFromParts(parts);if(literal&&"attribute"==kind){node.setAttribute(name,literal)}// Clear attribute before removing, since IE won't allow removing
// `value` attribute if it previously had a value (can't
// unconditionally set '' before removing since attributes with `$`
// can't be set using setAttribute)
if("input"===node.localName&&"value"===origName){node.setAttribute(origName,"")}// Remove annotation
node.removeAttribute(origName);// Case hackery: attributes are lower-case, but bind targets
// (properties) are case sensitive. Gambit is to map dash-case to
// camel-case: `foo-bar` becomes `fooBar`.
// Attribute bindings are excepted.
if("property"===kind){name=dashToCamelCase(name)}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return!0}else{return super._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value)}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * binding the properties that a nested template depends on to the template
       * as `_host_<property>`.
       *
       * @override
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */static _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){let noted=super._parseTemplateNestedTemplate(node,templateInfo,nodeInfo),hostProps=nodeInfo.templateInfo.hostProps,mode="{";// Merge host props into outer template and add bindings
for(let source in hostProps){let parts=[{mode,source,dependencies:[source]}];addBinding(this,templateInfo,nodeInfo,"property","_host_"+source,parts)}return noted}/**
       * Called to parse text in a template (either attribute values or
       * textContent) into binding metadata.
       *
       * Any overrides of this method should return an array of binding part
       * metadata  representing one or more bindings found in the provided text
       * and any "literal" text in between.  Any non-literal parts will be passed
       * to `_evaluateBinding` when any dependencies change.  The only required
       * fields of each "part" in the returned array are as follows:
       *
       * - `dependencies` - Array containing trigger metadata for each property
       *   that should trigger the binding to update
       * - `literal` - String containing text if the part represents a literal;
       *   in this case no `dependencies` are needed
       *
       * Additional metadata for use by `_evaluateBinding` may be provided in
       * each part object as needed.
       *
       * The default implementation handles the following types of bindings
       * (one or more may be intermixed with literal strings):
       * - Property binding: `[[prop]]`
       * - Path binding: `[[object.prop]]`
       * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
       * - Two-way property or path bindings (supports negation):
       *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
       * - Inline computed method (supports negation):
       *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
       *
       * The default implementation uses a regular expression for best
       * performance. However, the regular expression uses a white-list of
       * allowed characters in a data-binding, which causes problems for
       * data-bindings that do use characters not in this white-list.
       *
       * Instead of updating the white-list with all allowed characters,
       * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
       * that uses a state machine instead. This state machine is able to handle
       * all characters. However, it is slightly less performant, therefore we
       * extracted it into a separate optional mixin.
       *
       * @param {string} text Text to parse from attribute or textContent
       * @param {Object} templateInfo Current template metadata
       * @return {Array<!BindingPart>} Array of binding part metadata
       * @protected
       */static _parseBindings(text,templateInfo){let parts=[],lastIndex=0,m;// Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
// Regex matches:
//        Iteration 1:  Iteration 2:
// m[1]: '{{'          '[['
// m[2]: ''            '!'
// m[3]: 'prop'        'compute(foo,bar)'
while(null!==(m=bindingRegex.exec(text))){// Add literal part
if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)})}// Add binding part
let mode=m[1][0],negate=!!m[2],source=m[3].trim(),customEvent=!1,notifyEvent="",colon=-1;if("{"==mode&&0<(colon=source.indexOf("::"))){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=!0}let signature=parseMethod(source),dependencies=[];if(signature){// Inline computed function
let{args,methodName}=signature;for(let i=0,arg;i<args.length;i++){arg=args[i];if(!arg.literal){dependencies.push(arg)}}let dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=!0}}else{// Property or path
dependencies.push(source)}parts.push({source,mode,negate,customEvent,signature,dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex}// Add a final literal part
if(lastIndex&&lastIndex<text.length){let literal=text.substring(lastIndex);if(literal){parts.push({literal:literal})}}if(parts.length){return parts}else{return null}}/**
       * Called to evaluate a previously parsed binding part based on a set of
       * one or more changed dependencies.
       *
       * @param {this} inst Element that should be used as scope for
       *   binding dependencies
       * @param {BindingPart} part Binding part metadata
       * @param {string} path Property/path that triggered this effect
       * @param {Object} props Bag of current property changes
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {*} Value the binding part evaluated to
       * @protected
       */static _evaluateBinding(inst,part,path,props,oldProps,hasPaths){let value;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature)}else if(path!=part.source){value=get(inst,part.source)}else{if(hasPaths&&isPath(path)){value=get(inst,path)}else{value=inst.__data[path]}}if(part.negate){value=!value}return value}}// make a typing for closure :P
PropertyEffectsType=PropertyEffects;return PropertyEffects});/**
     * Helper api for enqueuing client dom created by a host element.
     *
     * By default elements are flushed via `_flushProperties` when
     * `connectedCallback` is called. Elements attach their client dom to
     * themselves at `ready` time which results from this first flush.
     * This provides an ordering guarantee that the client dom an element
     * creates is flushed before the element itself (i.e. client `ready`
     * fires before host `ready`).
     *
     * However, if `_flushProperties` is called *before* an element is connected,
     * as for example `Templatize` does, this ordering guarantee cannot be
     * satisfied because no elements are connected. (Note: Bound elements that
     * receive data do become enqueued clients and are properly ordered but
     * unbound elements are not.)
     *
     * To maintain the desired "client before host" ordering guarantee for this
     * case we rely on the "host stack. Client nodes registers themselves with
     * the creating host element when created. This ensures that all client dom
     * is readied in the proper order, maintaining the desired guarantee.
     *
     * @private
     */_exports.PropertyEffects=PropertyEffects;class HostStack{constructor(){this.stack=[]}/**
     * @param {*} inst Instance to add to hostStack
     * @return {void}
     */registerHost(inst){if(this.stack.length){let host=this.stack[this.stack.length-1];host._enqueueClient(inst)}}/**
     * @param {*} inst Instance to begin hosting
     * @return {void}
     */beginHosting(inst){this.stack.push(inst)}/**
     * @param {*} inst Instance to end hosting
     * @return {void}
     */endHosting(inst){let stackLen=this.stack.length;if(stackLen&&this.stack[stackLen-1]==inst){this.stack.pop()}}}const hostStack=new HostStack;var propertyEffects={PropertyEffects:PropertyEffects};_exports.$propertyEffects=propertyEffects;function normalizeProperties(props){const output={};for(let p in props){const o=props[p];output[p]="function"===typeof o?{type:o}:o}return output}/**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   */const PropertiesMixin=dedupingMixin(superClass=>{/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @private
   */const base=PropertiesChanged(superClass);/**
                                                  * Returns the super class constructor for the given class, if it is an
                                                  * instance of the PropertiesMixin.
                                                  *
                                                  * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
                                                  * @return {?PropertiesMixinConstructor} Super class constructor
                                                  */function superPropertiesClass(constructor){const superCtor=Object.getPrototypeOf(constructor);// Note, the `PropertiesMixin` class below only refers to the class
// generated by this call to the mixin; the instanceof test only works
// because the mixin is deduped and guaranteed only to apply once, hence
// all constructors in a proto chain will see the same `PropertiesMixin`
return superCtor.prototype instanceof PropertiesMixin?/** @type {!PropertiesMixinConstructor} */superCtor:null}/**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */function ownProperties(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",constructor))){let props=null;if(constructor.hasOwnProperty(JSCompiler_renameProperty("properties",constructor))){const properties=constructor.properties;if(properties){props=normalizeProperties(properties)}}constructor.__ownProperties=props}return constructor.__ownProperties}/**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */class PropertiesMixin extends base{/**
     * Implements standard custom elements getter to observes the attributes
     * listed in `properties`.
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     */static get observedAttributes(){const props=this._properties;return props?Object.keys(props).map(p=>this.attributeNameForProperty(p)):[]}/**
       * Finalizes an element definition, including ensuring any super classes
       * are also finalized. This includes ensuring property
       * accessors exist on the element prototype. This method calls
       * `_finalizeClass` to finalize each constructor in the prototype chain.
       * @return {void}
       */static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);if(superCtor){superCtor.finalize()}this.__finalized=!0;this._finalizeClass()}}/**
       * Finalize an element class. This includes ensuring property
       * accessors exist on the element prototype. This method is called by
       * `finalize` and finalizes the class constructor.
       *
       * @protected
       */static _finalizeClass(){const props=ownProperties(/** @type {!PropertiesMixinConstructor} */this);if(props){this.createProperties(props)}}/**
       * Returns a memoized version of all properties, including those inherited
       * from super classes. Properties not in object format are converted to
       * at least {type}.
       *
       * @return {Object} Object containing properties for this class
       * @protected
       */static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);this.__properties=Object.assign({},superCtor&&superCtor._properties,ownProperties(/** @type {PropertiesMixinConstructor} */this))}return this.__properties}/**
       * Overrides `PropertiesChanged` method to return type specified in the
       * static `properties` object for the given property.
       * @param {string} name Name of property
       * @return {*} Type to which to deserialize attribute
       *
       * @protected
       */static typeForProperty(name){const info=this._properties[name];return info&&info.type}/**
       * Overrides `PropertiesChanged` method and adds a call to
       * `finalize` which lazily configures the element's property accessors.
       * @override
       * @return {void}
       */_initializeProperties(){this.constructor.finalize();super._initializeProperties()}/**
       * Called when the element is added to a document.
       * Calls `_enableProperties` to turn on property system from
       * `PropertiesChanged`.
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */connectedCallback(){if(super.connectedCallback){super.connectedCallback()}this._enableProperties()}/**
       * Called when the element is removed from a document
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */disconnectedCallback(){if(super.disconnectedCallback){super.disconnectedCallback()}}}return PropertiesMixin});_exports.PropertiesMixin=PropertiesMixin;var propertiesMixin={PropertiesMixin:PropertiesMixin};_exports.$propertiesMixin=propertiesMixin;const bundledImportMeta=_objectSpread({},meta,{url:new URL("../node_modules/%40polymer/polymer/lib/mixins/element-mixin.js",meta.url).href}),version="3.0.5";_exports.version$1=_exports.version=version;/**
                                 * Element class mixin that provides the core API for Polymer's meta-programming
                                 * features including template stamping, data-binding, attribute deserialization,
                                 * and property change observation.
                                 *
                                 * Subclassers may provide the following static getters to return metadata
                                 * used to configure Polymer's features for the class:
                                 *
                                 * - `static get is()`: When the template is provided via a `dom-module`,
                                 *   users should return the `dom-module` id from a static `is` getter.  If
                                 *   no template is needed or the template is provided directly via the
                                 *   `template` getter, there is no need to define `is` for the element.
                                 *
                                 * - `static get template()`: Users may provide the template directly (as
                                 *   opposed to via `dom-module`) by implementing a static `template` getter.
                                 *   The getter must return an `HTMLTemplateElement`.
                                 *
                                 * - `static get properties()`: Should return an object describing
                                 *   property-related metadata used by Polymer features (key: property name
                                 *   value: object containing property metadata). Valid keys in per-property
                                 *   metadata include:
                                 *   - `type` (String|Number|Object|Array|...): Used by
                                 *     `attributeChangedCallback` to determine how string-based attributes
                                 *     are deserialized to JavaScript property values.
                                 *   - `notify` (boolean): Causes a change in the property to fire a
                                 *     non-bubbling event called `<property>-changed`. Elements that have
                                 *     enabled two-way binding to the property use this event to observe changes.
                                 *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
                                 *     To set a read-only property, use the private setter method
                                 *     `_setProperty(property, value)`.
                                 *   - `observer` (string): Observer method name that will be called when
                                 *     the property changes. The arguments of the method are
                                 *     `(value, previousValue)`.
                                 *   - `computed` (string): String describing method and dependent properties
                                 *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
                                 *     Computed properties are read-only by default and can only be changed
                                 *     via the return value of the computing method.
                                 *
                                 * - `static get observers()`: Array of strings describing multi-property
                                 *   observer methods and their dependent properties (e.g.
                                 *   `'observeABC(a, b, c)'`).
                                 *
                                 * The base class provides default implementations for the following standard
                                 * custom element lifecycle callbacks; users may override these, but should
                                 * call the super method to ensure
                                 * - `constructor`: Run when the element is created or upgraded
                                 * - `connectedCallback`: Run each time the element is connected to the
                                 *   document
                                 * - `disconnectedCallback`: Run each time the element is disconnected from
                                 *   the document
                                 * - `attributeChangedCallback`: Run each time an attribute in
                                 *   `observedAttributes` is set or removed (note: this element's default
                                 *   `observedAttributes` implementation will automatically return an array
                                 *   of dash-cased attributes based on `properties`)
                                 *
                                 * @mixinFunction
                                 * @polymer
                                 * @appliesMixin PropertyEffects
                                 * @appliesMixin PropertiesMixin
                                 * @property rootPath {string} Set to the value of `rootPath`,
                                 *   which defaults to the main document path
                                 * @property importPath {string} Set to the value of the class's static
                                 *   `importPath` property, which defaults to the path of this element's
                                 *   `dom-module` (when `is` is used), but can be overridden for other
                                 *   import strategies.
                                 * @summary Element class mixin that provides the core API for Polymer's
                                 * meta-programming features.
                                 */const ElementMixin=dedupingMixin(base=>{/**
   * @constructor
   * @extends {base}
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_PropertiesMixin}
   * @private
   */const polymerElementBase=PropertiesMixin(PropertyEffects(base));/**
                                                                         * Returns a list of properties with default values.
                                                                         * This list is created as an optimization since it is a subset of
                                                                         * the list returned from `_properties`.
                                                                         * This list is used in `_initializeProperties` to set property defaults.
                                                                         *
                                                                         * @param {PolymerElementConstructor} constructor Element class
                                                                         * @return {PolymerElementProperties} Flattened properties for this class
                                                                         *   that have default values
                                                                         * @private
                                                                         */function propertyDefaults(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",constructor))){constructor.__propertyDefaults=null;let props=constructor._properties;for(let p in props){let info=props[p];if("value"in info){constructor.__propertyDefaults=constructor.__propertyDefaults||{};constructor.__propertyDefaults[p]=info}}}return constructor.__propertyDefaults}/**
     * Returns a memoized version of the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */function ownObservers(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",constructor))){constructor.__ownObservers=constructor.hasOwnProperty(JSCompiler_renameProperty("observers",constructor))?/** @type {PolymerElementConstructor} */constructor.observers:null}return constructor.__ownObservers}/**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * is also automatically set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     * Also consider adding warnings when an effect cannot be changed.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */function createPropertyFromConfig(proto,name,info,allProps){// computed forces readOnly...
if(info.computed){info.readOnly=!0}// Note, since all computed properties are readOnly, this prevents
// adding additional computed property effects (which leads to a confusing
// setup where multiple triggers for setting a property)
// While we do have `hasComputedEffect` this is set on the property's
// dependencies rather than itself.
if(info.computed&&!proto._hasReadOnlyEffect(name)){proto._createComputedProperty(name,info.computed,allProps)}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed)}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name)}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name)}// always add observer
if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer])}// always create the mapping from attribute back to property for deserialization.
proto._addPropertyToAttributeMap(name)}/**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */function processElementStyles(klass,template,is,baseURI){const templateStyles=template.content.querySelectorAll("style"),stylesWithImports=stylesFromTemplate(template),linkedStyles=stylesFromModuleImports(is),firstTemplateChild=template.content.firstElementChild;for(let idx=0,s;idx<linkedStyles.length;idx++){s=linkedStyles[idx];s.textContent=klass._processStyleText(s.textContent,baseURI);template.content.insertBefore(s,firstTemplateChild)}// keep track of the last "concrete" style in the template we have encountered
let templateStyleIndex=0;// ensure all gathered styles are actually in this template.
for(let i=0;i<stylesWithImports.length;i++){let s=stylesWithImports[i],templateStyle=templateStyles[templateStyleIndex];// if the style is not in this template, it's been "included" and
// we put a clone of it in the template before the style that included it
if(templateStyle!==s){s=s.cloneNode(!0);templateStyle.parentNode.insertBefore(s,templateStyle)}else{templateStyleIndex++}s.textContent=klass._processStyleText(s.textContent,baseURI)}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is)}}/**
     * Look up template from dom-module for element
     *
     * @param {!string} is Element name to look up
     * @return {!HTMLTemplateElement} Template found in dom module, or
     *   undefined if not found
     * @protected
     */function getTemplateFromDomModule(is){let template=null;// Under strictTemplatePolicy in 3.x+, dom-module lookup is only allowed
// when opted-in via allowTemplateFromDomModule
if(is&&(!strictTemplatePolicy||allowTemplateFromDomModule)){template=DomModule.import(is,"template");// Under strictTemplatePolicy, require any element with an `is`
// specified to have a dom-module
if(strictTemplatePolicy&&!template){throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${is}`)}}return template}/**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     */class PolymerElement extends polymerElementBase{/**
     * Current Polymer version in Semver notation.
     * @type {string} Semver notation of the current version of Polymer.
     */static get polymerElementVersion(){return version}/**
       * Override of PropertiesMixin _finalizeClass to create observers and
       * find the template.
       * @return {void}
       * @protected
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */static _finalizeClass(){super._finalizeClass();if(this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&this.is){register(this.prototype)}const observers=ownObservers(this);if(observers){this.createObservers(observers,this._properties)}// note: create "working" template that is finalized at instance time
let template=/** @type {PolymerElementConstructor} */this.template;if(template){if("string"===typeof template){console.error("template getter must return HTMLTemplateElement");template=null}else{template=template.cloneNode(!0)}}this.prototype._template=template}/**
       * Override of PropertiesChanged createProperties to create accessors
       * and property effects for all of the properties.
       * @return {void}
       * @protected
       * @override
       */static createProperties(props){for(let p in props){createPropertyFromConfig(this.prototype,p,props[p],props)}}/**
       * Creates observers for the given `observers` array.
       * Leverages `PropertyEffects` to create observers.
       * @param {Object} observers Array of observer descriptors for
       *   this class
       * @param {Object} dynamicFns Object containing keys for any properties
       *   that are functions and should trigger the effect when the function
       *   reference is changed
       * @return {void}
       * @protected
       */static createObservers(observers,dynamicFns){const proto=this.prototype;for(let i=0;i<observers.length;i++){proto._createMethodObserver(observers[i],dynamicFns)}}/**
       * Returns the template that will be stamped into this element's shadow root.
       *
       * If a `static get is()` getter is defined, the default implementation
       * will return the first `<template>` in a `dom-module` whose `id`
       * matches this element's `is`.
       *
       * Users may override this getter to return an arbitrary template
       * (in which case the `is` getter is unnecessary). The template returned
       * must be an `HTMLTemplateElement`.
       *
       * Note that when subclassing, if the super class overrode the default
       * implementation and the subclass would like to provide an alternate
       * template via a `dom-module`, it should override this getter and
       * return `DomModule.import(this.is, 'template')`.
       *
       * If a subclass would like to modify the super class template, it should
       * clone it rather than modify it in place.  If the getter does expensive
       * work such as cloning/modifying a template, it should memoize the
       * template for maximum performance:
       *
       *   let memoizedTemplate;
       *   class MySubClass extends MySuperClass {
       *     static get template() {
       *       if (!memoizedTemplate) {
       *         memoizedTemplate = super.template.cloneNode(true);
       *         let subContent = document.createElement('div');
       *         subContent.textContent = 'This came from MySubClass';
       *         memoizedTemplate.content.appendChild(subContent);
       *       }
       *       return memoizedTemplate;
       *     }
       *   }
       *
       * @return {!HTMLTemplateElement|string} Template to be stamped
       */static get template(){// Explanation of template-related properties:
// - constructor.template (this getter): the template for the class.
//     This can come from the prototype (for legacy elements), from a
//     dom-module, or from the super class's template (or can be overridden
//     altogether by the user)
// - constructor._template: memoized version of constructor.template
// - prototype._template: working template for the element, which will be
//     parsed and modified in place. It is a cloned version of
//     constructor.template, saved in _finalizeClass(). Note that before
//     this getter is called, for legacy elements this could be from a
//     _template field on the info object passed to Polymer(), a behavior,
//     or set in registered(); once the static getter runs, a clone of it
//     will overwrite it on the prototype as the working template.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){this._template=// If user has put template on prototype (e.g. in legacy via registered
// callback or info object), prefer that first
this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:// Look in dom-module associated with this element's is
getTemplateFromDomModule(/** @type {PolymerElementConstructor}*/this.is)||// Next look for superclass template (call the super impl this
// way so that `this` points to the superclass)
Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.template}return this._template}/**
       * Set the template.
       *
       * @param {!HTMLTemplateElement|string} value Template to set.
       */static set template(value){this._template=value}/**
       * Path matching the url from which the element was imported.
       *
       * This path is used to resolve url's in template style cssText.
       * The `importPath` property is also set on element instances and can be
       * used to create bindings relative to the import path.
       *
       * For elements defined in ES modules, users should implement
       * `static get importMeta() { return import.meta; }`, and the default
       * implementation of `importPath` will  return `import.meta.url`'s path.
       * For elements defined in HTML imports, this getter will return the path
       * to the document containing a `dom-module` element matching this
       * element's static `is` property.
       *
       * Note, this path should contain a trailing `/`.
       *
       * @return {string} The import path for this element class
       * @suppress {missingProperties}
       */static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const meta=this.importMeta;if(meta){this._importPath=pathFromUrl(meta.url)}else{const module=DomModule.import(/** @type {PolymerElementConstructor} */this.is);this._importPath=module&&module.assetpath||Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.importPath}}return this._importPath}constructor(){super();/** @type {HTMLTemplateElement} */this._template;/** @type {string} */this._importPath;/** @type {string} */this.rootPath;/** @type {string} */this.importPath;/** @type {StampedTemplate | HTMLElement | ShadowRoot} */this.root;/** @type {!Object<string, !Element>} */this.$}/**
       * Overrides the default `PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts}
       */_initializeProperties(){_exports.instanceCount=instanceCount=instanceCount+1;this.constructor.finalize();// note: finalize template when we have access to `localName` to
// avoid dependence on `is` for polyfilling styling.
this.constructor._finalizeTemplate(/** @type {!HTMLElement} */this.localName);super._initializeProperties();// set path defaults
this.rootPath=rootPath;this.importPath=this.constructor.importPath;// apply property defaults...
let p$=propertyDefaults(this.constructor);if(!p$){return}for(let p in p$){let info=p$[p];// Don't set default value if there is already an own property, which
// happens when a `properties` property with default but no effects had
// a property set (e.g. bound) by its host before upgrade
if(!this.hasOwnProperty(p)){let value="function"==typeof info.value?info.value.call(this):info.value;// Set via `_setProperty` if there is an accessor, to enable
// initializing readOnly property defaults
if(this._hasAccessor(p)){this._setPendingProperty(p,value,!0)}else{this[p]=value}}}}/**
       * Gather style text for a style element in the template.
       *
       * @param {string} cssText Text containing styling to process
       * @param {string} baseURI Base URI to rebase CSS paths against
       * @return {string} The processed CSS text
       * @protected
       */static _processStyleText(cssText,baseURI){return resolveCss(cssText,baseURI)}/**
      * Configures an element `proto` to function with a given `template`.
      * The element name `is` and extends `ext` must be specified for ShadyCSS
      * style scoping.
      *
      * @param {string} is Tag name (or type extension name) for this element
      * @return {void}
      * @protected
      */static _finalizeTemplate(is){/** @const {HTMLTemplateElement} */const template=this.prototype._template;if(template&&!template.__polymerFinalized){template.__polymerFinalized=!0;const importPath=this.importPath,baseURI=importPath?resolveUrl(importPath):"";// e.g. support `include="module-name"`, and ShadyCSS
processElementStyles(this,template,is,baseURI);this.prototype._bindTemplate(template)}}/**
       * Provides a default implementation of the standard Custom Elements
       * `connectedCallback`.
       *
       * The default implementation enables the property effects system and
       * flushes any pending properties, and updates shimmed CSS properties
       * when using the ShadyCSS scoping/custom properties polyfill.
       *
       * @suppress {missingProperties, invalidCasts} Super may or may not implement the callback
       * @return {void}
       */connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(/** @type {!HTMLElement} */this)}super.connectedCallback()}/**
       * Stamps the element template.
       *
       * @return {void}
       * @override
       */ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$}super.ready()}/**
       * Implements `PropertyEffects`'s `_readyClients` call. Attaches
       * element dom by calling `_attachDom` with the dom stamped from the
       * element's template via `_stampTemplate`. Note that this allows
       * client dom to be attached to the element prior to any observers
       * running.
       *
       * @return {void}
       * @override
       */_readyClients(){if(this._template){this.root=this._attachDom(/** @type {StampedTemplate} */this.root)}// The super._readyClients here sets the clients initialized flag.
// We must wait to do this until after client dom is created/attached
// so that this flag can be checked to prevent notifications fired
// during this process from being handled before clients are ready.
super._readyClients()}/**
       * Attaches an element's stamped dom to itself. By default,
       * this method creates a `shadowRoot` and adds the dom to it.
       * However, this method may be overridden to allow an element
       * to put its dom in another location.
       *
       * @throws {Error}
       * @suppress {missingReturn}
       * @param {StampedTemplate} dom to attach to the element.
       * @return {ShadowRoot} node to which the dom has been attached.
       */_attachDom(dom){if(this.attachShadow){if(dom){if(!this.shadowRoot){this.attachShadow({mode:"open"})}this.shadowRoot.appendChild(dom);return this.shadowRoot}return null}else{throw new Error("ShadowDOM not available. "+// TODO(sorvell): move to compile-time conditional when supported
"PolymerElement can create dom as children instead of in "+"ShadowDOM by setting `this.root = this;` before `ready`.")}}/**
       * When using the ShadyCSS scoping and custom property shim, causes all
       * shimmed styles in this element (and its subtree) to be updated
       * based on current custom property values.
       *
       * The optional parameter overrides inline custom property styles with an
       * object of properties where the keys are CSS properties, and the values
       * are strings.
       *
       * Example: `this.updateStyles({'--color': 'blue'})`
       *
       * These properties are retained unless a value of `null` is set.
       *
       * Note: This function does not support updating CSS mixins.
       * You can not dynamically change the value of an `@apply`.
       *
       * @param {Object=} properties Bag of custom property key/values to
       *   apply to this element.
       * @return {void}
       * @suppress {invalidCasts}
       */updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(/** @type {!HTMLElement} */this,properties)}}/**
       * Rewrites a given URL relative to a base URL. The base URL defaults to
       * the original location of the document containing the `dom-module` for
       * this element. This method will return the same URL before and after
       * bundling.
       *
       * Note that this function performs no resolution for URLs that start
       * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
       * URL resolution, use `window.URL`.
       *
       * @param {string} url URL to resolve.
       * @param {string=} base Optional base URL to resolve against, defaults
       * to the element's `importPath`
       * @return {string} Rewritten URL relative to base
       */resolveUrl(url,base){if(!base&&this.importPath){base=resolveUrl(this.importPath)}return resolveUrl(url,base)}/**
       * Overrides `PropertyAccessors` to add map of dynamic functions on
       * template info, for consumption by `PropertyEffects` template binding
       * code. This map determines which method templates should have accessors
       * created for them.
       *
       * @override
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       */static _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||this._properties;return super._parseTemplateContent(template,templateInfo,nodeInfo)}}return PolymerElement});/**
     * Total number of Polymer element instances created.
     * @type {number}
     */_exports.ElementMixin=ElementMixin;let instanceCount=0;/**
                               * Array of Polymer element classes that have been finalized.
                               * @type {Array<PolymerElement>}
                               */_exports.instanceCount=instanceCount;const registrations=[];/**
                                  * @param {!PolymerElementConstructor} prototype Element prototype to log
                                  * @this {this}
                                  * @private
                                  */_exports.registrations=registrations;function _regLog(prototype){console.log("["+prototype.is+"]: registered")}/**
   * Registers a class prototype for telemetry purposes.
   * @param {HTMLElement} prototype Element prototype to register
   * @this {this}
   * @protected
   */function register(prototype){registrations.push(prototype)}/**
   * Logs all elements registered with an `is` to the console.
   * @public
   * @this {this}
   */function dumpRegistrations(){registrations.forEach(_regLog)}/**
   * When using the ShadyCSS scoping and custom property shim, causes all
   * shimmed `styles` (via `custom-style`) in the document (and its subtree)
   * to be updated based on current custom property values.
   *
   * The optional parameter overrides inline custom property styles with an
   * object of properties where the keys are CSS properties, and the values
   * are strings.
   *
   * Example: `updateStyles({'--color': 'blue'})`
   *
   * These properties are retained unless a value of `null` is set.
   *
   * @param {Object=} props Bag of custom property key/values to
   *   apply to the document.
   * @return {void}
   */const updateStyles=function(props){if(window.ShadyCSS){window.ShadyCSS.styleDocument(props)}};_exports.updateStyles=updateStyles;var elementMixin={version:version,ElementMixin:ElementMixin,get instanceCount(){return instanceCount},registrations:registrations,register:register,dumpRegistrations:dumpRegistrations,updateStyles:updateStyles};_exports.$elementMixin=elementMixin;class Debouncer{constructor(){this._asyncModule=null;this._callback=null;this._timer=null}/**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */setConfig(asyncModule,callback){this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(()=>{this._timer=null;this._callback()})}/**
     * Cancels an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */cancel(){if(this.isActive()){this._asyncModule.cancel(/** @type {number} */this._timer);this._timer=null}}/**
     * Flushes an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */flush(){if(this.isActive()){this.cancel();this._callback()}}/**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */isActive(){return null!=this._timer}/**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * ```js
     * import {microTask} from '@polymer/polymer/lib/utils/async.js';
     * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
     * // ...
     *
     * _debounceWork() {
     *   this._debounceJob = Debouncer.debounce(this._debounceJob,
     *       microTask, () => this._doWork());
     * }
     * ```
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `enqueueDebouncer` and
     * `flush`. For example, extend the above example by adding
     * `enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncInterface} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */static debounce(debouncer,asyncModule,callback){if(debouncer instanceof Debouncer){debouncer.cancel()}else{debouncer=new Debouncer}debouncer.setConfig(asyncModule,callback);return debouncer}}_exports.Debouncer=Debouncer;var debounce={Debouncer:Debouncer};_exports.$debounce=debounce;let HAS_NATIVE_TA="string"===typeof document.head.style.touchAction,GESTURE_KEY="__polymerGestures",HANDLED_OBJ="__polymerGesturesHandled",TOUCH_ACTION="__polymerGesturesTouchAction",TAP_DISTANCE=25,TRACK_DISTANCE=5,TRACK_LENGTH=2,MOUSE_TIMEOUT=2500,MOUSE_EVENTS=["mousedown","mousemove","mouseup","click"],MOUSE_WHICH_TO_BUTTONS=[0,1,4,2],MOUSE_HAS_BUTTONS=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();/**
      * @param {string} name Possible mouse event name
      * @return {boolean} true if mouse event, false if not
      */function isMouseEvent(name){return-1<MOUSE_EVENTS.indexOf(name)}/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */ // check for passive event listeners
let SUPPORTS_PASSIVE=!1;(function(){try{let opts=Object.defineProperty({},"passive",{get(){SUPPORTS_PASSIVE=!0}});window.addEventListener("test",null,opts);window.removeEventListener("test",null,opts)}catch(e){}})();/**
       * Generate settings for event listeners, dependant on `passiveTouchGestures`
       *
       * @param {string} eventName Event name to determine if `{passive}` option is
       *   needed
       * @return {{passive: boolean} | undefined} Options to use for addEventListener
       *   and removeEventListener
       */function PASSIVE_TOUCH(eventName){if(isMouseEvent(eventName)||"touchend"===eventName){return}if(HAS_NATIVE_TA&&SUPPORTS_PASSIVE&&passiveTouchGestures){return{passive:!0}}else{return}}// Check for touch-only devices
let IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);// keep track of any labels hit by the mouseCanceller
/** @type {!Array<!HTMLLabelElement>} */const clickedLabels=[],labellable={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},canBeDisabled={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};/** @type {!Object<boolean>} */ /**
    * @param {HTMLElement} el Element to check labelling status
    * @return {boolean} element can have labels
    */function canBeLabelled(el){return labellable[el.localName]||!1}/**
   * @param {HTMLElement} el Element that may be labelled.
   * @return {!Array<!HTMLLabelElement>} Relevant label for `el`
   */function matchingLabels(el){let labels=Array.prototype.slice.call(/** @type {HTMLInputElement} */el.labels||[]);// IE doesn't have `labels` and Safari doesn't populate `labels`
// if element is in a shadowroot.
// In this instance, finding the non-ancestor labels is enough,
// as the mouseCancellor code will handle ancstor labels
if(!labels.length){labels=[];let root=el.getRootNode();// if there is an id on `el`, check for all labels with a matching `for` attribute
if(el.id){let matching=root.querySelectorAll(`label[for = ${el.id}]`);for(let i=0;i<matching.length;i++){labels.push(/** @type {!HTMLLabelElement} */matching[i])}}}return labels}// touch will make synthetic mouse events
// `preventDefault` on touchend will cancel them,
// but this breaks `<input>` focus and link clicks
// disable mouse handlers for MOUSE_TIMEOUT ms after
// a touchend to ignore synthetic mouse events
let mouseCanceller=function(mouseEvent){// Check for sourceCapabilities, used to distinguish synthetic events
// if mouseEvent did not come from a device that fires touch events,
// it was made by a real mouse and should be counted
// http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
let sc=mouseEvent.sourceCapabilities;if(sc&&!sc.firesTouchEvents){return}// skip synthetic mouse events
mouseEvent[HANDLED_OBJ]={skip:!0};// disable "ghost clicks"
if("click"===mouseEvent.type){let clickFromLabel=!1,path=mouseEvent.composedPath&&mouseEvent.composedPath();if(path){for(let i=0;i<path.length;i++){if(path[i].nodeType===Node.ELEMENT_NODE){if("label"===path[i].localName){clickedLabels.push(path[i])}else if(canBeLabelled(path[i])){let ownerLabels=matchingLabels(path[i]);// check if one of the clicked labels is labelling this element
for(let j=0;j<ownerLabels.length;j++){clickFromLabel=clickFromLabel||-1<clickedLabels.indexOf(ownerLabels[j])}}}if(path[i]===POINTERSTATE.mouse.target){return}}}// if one of the clicked labels was labelling the target element,
// this is not a ghost click
if(clickFromLabel){return}mouseEvent.preventDefault();mouseEvent.stopPropagation()}};/**
    * @param {boolean=} setup True to add, false to remove.
    * @return {void}
    */function setupTeardownMouseCanceller(setup){let events=IS_TOUCH_ONLY?["click"]:MOUSE_EVENTS;for(let i=0,en;i<events.length;i++){en=events[i];if(setup){// reset clickLabels array
clickedLabels.length=0;document.addEventListener(en,mouseCanceller,!0)}else{document.removeEventListener(en,mouseCanceller,!0)}}}function ignoreMouse(e){if(!POINTERSTATE.mouse.mouseIgnoreJob){setupTeardownMouseCanceller(!0)}let unset=function(){setupTeardownMouseCanceller();POINTERSTATE.mouse.target=null;POINTERSTATE.mouse.mouseIgnoreJob=null};POINTERSTATE.mouse.target=e.composedPath()[0];POINTERSTATE.mouse.mouseIgnoreJob=Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob,timeOut.after(MOUSE_TIMEOUT),unset)}/**
   * @param {MouseEvent} ev event to test for left mouse button down
   * @return {boolean} has left mouse button down
   */function hasLeftMouseButton(ev){let type=ev.type;// exit early if the event is not a mouse event
if(!isMouseEvent(type)){return!1}// ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
// instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
if("mousemove"===type){// allow undefined for testing events
let buttons=ev.buttons===void 0?1:ev.buttons;if(ev instanceof window.MouseEvent&&!MOUSE_HAS_BUTTONS){buttons=MOUSE_WHICH_TO_BUTTONS[ev.which]||0}// buttons is a bitmask, check that the left button bit is set (1)
return!!(1&buttons)}else{// allow undefined for testing events
let button=ev.button===void 0?0:ev.button;// ev.button is 0 in mousedown/mouseup/click for left button activation
return 0===button}}function isSyntheticClick(ev){if("click"===ev.type){// ev.detail is 0 for HTMLElement.click in most browsers
if(0===ev.detail){return!0}// in the worst case, check that the x/y position of the click is within
// the bounding box of the target of the event
// Thanks IE 10 >:(
let t=_findOriginalTarget(ev);// make sure the target of the event is an element so we can use getBoundingClientRect,
// if not, just assume it is a synthetic click
if(!t.nodeType||/** @type {Element} */t.nodeType!==Node.ELEMENT_NODE){return!0}let bcr=/** @type {Element} */t.getBoundingClientRect(),x=ev.pageX,y=ev.pageY;// use page x/y to account for scrolling
// ev is a synthetic click if the position is outside the bounding box of the target
return!(x>=bcr.left&&x<=bcr.right&&y>=bcr.top&&y<=bcr.bottom)}return!1}let POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function firstTouchAction(ev){let ta="auto",path=ev.composedPath&&ev.composedPath();if(path){for(let i=0,n;i<path.length;i++){n=path[i];if(n[TOUCH_ACTION]){ta=n[TOUCH_ACTION];break}}}return ta}function trackDocument(stateObj,movefn,upfn){stateObj.movefn=movefn;stateObj.upfn=upfn;document.addEventListener("mousemove",movefn);document.addEventListener("mouseup",upfn)}function untrackDocument(stateObj){document.removeEventListener("mousemove",stateObj.movefn);document.removeEventListener("mouseup",stateObj.upfn);stateObj.movefn=null;stateObj.upfn=null}// use a document-wide touchend listener to start the ghost-click prevention mechanism
// Use passive event listeners, if supported, to not affect scrolling performance
document.addEventListener("touchend",ignoreMouse,SUPPORTS_PASSIVE?{passive:!0}:!1);/** @type {!Object<string, !GestureRecognizer>} */const gestures={};/** @type {!Array<!GestureRecognizer>} */_exports.gestures=gestures;const recognizers=[];/**
                                * Finds the element rendered on the screen at the provided coordinates.
                                *
                                * Similar to `document.elementFromPoint`, but pierces through
                                * shadow roots.
                                *
                                * @param {number} x Horizontal pixel coordinate
                                * @param {number} y Vertical pixel coordinate
                                * @return {Element} Returns the deepest shadowRoot inclusive element
                                * found at the screen position given.
                                */_exports.recognizers=recognizers;function deepTargetFind(x,y){let node=document.elementFromPoint(x,y),next=node;// this code path is only taken when native ShadowDOM is used
// if there is a shadowroot, it may have a node at x/y
// if there is not a shadowroot, exit the loop
while(next&&next.shadowRoot&&!window.ShadyDOM){// if there is a node at x/y in the shadowroot, look deeper
let oldNext=next;next=next.shadowRoot.elementFromPoint(x,y);// on Safari, elementFromPoint may return the shadowRoot host
if(oldNext===next){break}if(next){node=next}}return node}/**
   * a cheaper check than ev.composedPath()[0];
   *
   * @private
   * @param {Event|Touch} ev Event.
   * @return {EventTarget} Returns the event target.
   */function _findOriginalTarget(ev){// shadowdom
if(ev.composedPath){const targets=/** @type {!Array<!EventTarget>} */ev.composedPath();// It shouldn't be, but sometimes targets is empty (window on Safari).
return 0<targets.length?targets[0]:ev.target}// shadydom
return ev.target}/**
   * @private
   * @param {Event} ev Event.
   * @return {void}
   */function _handleNative(ev){let handled,type=ev.type,node=ev.currentTarget,gobj=node[GESTURE_KEY];if(!gobj){return}let gs=gobj[type];if(!gs){return}if(!ev[HANDLED_OBJ]){ev[HANDLED_OBJ]={};if("touch"===type.slice(0,5)){ev=/** @type {TouchEvent} */ev;// eslint-disable-line no-self-assign
let t=ev.changedTouches[0];if("touchstart"===type){// only handle the first finger
if(1===ev.touches.length){POINTERSTATE.touch.id=t.identifier}}if(POINTERSTATE.touch.id!==t.identifier){return}if(!HAS_NATIVE_TA){if("touchstart"===type||"touchmove"===type){_handleTouchAction(ev)}}}}handled=ev[HANDLED_OBJ];// used to ignore synthetic mouse events
if(handled.skip){return}// reset recognizer state
for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];if(gs[r.name]&&!handled[r.name]){if(r.flow&&-1<r.flow.start.indexOf(ev.type)&&r.reset){r.reset()}}}// enforce gesture recognizer order
for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];if(gs[r.name]&&!handled[r.name]){handled[r.name]=!0;r[type](ev)}}}/**
   * @private
   * @param {TouchEvent} ev Event.
   * @return {void}
   */function _handleTouchAction(ev){let t=ev.changedTouches[0],type=ev.type;if("touchstart"===type){POINTERSTATE.touch.x=t.clientX;POINTERSTATE.touch.y=t.clientY;POINTERSTATE.touch.scrollDecided=!1}else if("touchmove"===type){if(POINTERSTATE.touch.scrollDecided){return}POINTERSTATE.touch.scrollDecided=!0;let ta=firstTouchAction(ev),shouldPrevent=!1,dx=Math.abs(POINTERSTATE.touch.x-t.clientX),dy=Math.abs(POINTERSTATE.touch.y-t.clientY);if(!ev.cancelable){// scrolling is happening
}else if("none"===ta){shouldPrevent=!0}else if("pan-x"===ta){shouldPrevent=dy>dx}else if("pan-y"===ta){shouldPrevent=dx>dy}if(shouldPrevent){ev.preventDefault()}else{prevent("track")}}}/**
   * Adds an event listener to a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to add listener on
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function to call
   * @return {boolean} Returns true if a gesture event listener was added.
   */function addListener(node,evType,handler){if(gestures[evType]){_add(node,evType,handler);return!0}return!1}/**
   * Removes an event listener from a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to remove listener from
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function previously passed to
   *  `addListener`.
   * @return {boolean} Returns true if a gesture event listener was removed.
   */function removeListener(node,evType,handler){if(gestures[evType]){_remove(node,evType,handler);return!0}return!1}/**
   * automate the event listeners for the native events
   *
   * @private
   * @param {!EventTarget} node Node on which to add the event.
   * @param {string} evType Event type to add.
   * @param {function(!Event)} handler Event handler function.
   * @return {void}
   */function _add(node,evType,handler){let recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(!gobj){node[GESTURE_KEY]=gobj={}}for(let i=0,dep,gd;i<deps.length;i++){dep=deps[i];// don't add mouse handlers on iOS because they cause gray selection overlays
if(IS_TOUCH_ONLY&&isMouseEvent(dep)&&"click"!==dep){continue}gd=gobj[dep];if(!gd){gobj[dep]=gd={_count:0}}if(0===gd._count){node.addEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}gd[name]=(gd[name]||0)+1;gd._count=(gd._count||0)+1}node.addEventListener(evType,handler);if(recognizer.touchAction){setTouchAction(node,recognizer.touchAction)}}/**
   * automate event listener removal for native events
   *
   * @private
   * @param {!EventTarget} node Node on which to remove the event.
   * @param {string} evType Event type to remove.
   * @param {function(!Event): void} handler Event handler function.
   * @return {void}
   */function _remove(node,evType,handler){let recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(gobj){for(let i=0,dep,gd;i<deps.length;i++){dep=deps[i];gd=gobj[dep];if(gd&&gd[name]){gd[name]=(gd[name]||1)-1;gd._count=(gd._count||1)-1;if(0===gd._count){node.removeEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}}}}node.removeEventListener(evType,handler)}/**
   * Registers a new gesture event recognizer for adding new custom
   * gesture event types.
   *
   * @param {!GestureRecognizer} recog Gesture recognizer descriptor
   * @return {void}
   */function register$1(recog){recognizers.push(recog);for(let i=0;i<recog.emits.length;i++){gestures[recog.emits[i]]=recog}}/**
   * @private
   * @param {string} evName Event name.
   * @return {Object} Returns the gesture for the given event name.
   */function _findRecognizerByEvent(evName){for(let i=0,r;i<recognizers.length;i++){r=recognizers[i];for(let j=0,n;j<r.emits.length;j++){n=r.emits[j];if(n===evName){return r}}}return null}/**
   * Sets scrolling direction on node.
   *
   * This value is checked on first move, thus it should be called prior to
   * adding event listeners.
   *
   * @param {!EventTarget} node Node to set touch action setting on
   * @param {string} value Touch action value
   * @return {void}
   */function setTouchAction(node,value){if(HAS_NATIVE_TA&&node instanceof HTMLElement){// NOTE: add touchAction async so that events can be added in
// custom element constructors. Otherwise we run afoul of custom
// elements restriction against settings attributes (style) in the
// constructor.
microTask.run(()=>{node.style.touchAction=value})}node[TOUCH_ACTION]=value}/**
   * Dispatches an event on the `target` element of `type` with the given
   * `detail`.
   * @private
   * @param {!EventTarget} target The element on which to fire an event.
   * @param {string} type The type of event to fire.
   * @param {!Object=} detail The detail object to populate on the event.
   * @return {void}
   */function _fire(target,type,detail){let ev=new Event(type,{bubbles:!0,cancelable:!0,composed:!0});ev.detail=detail;target.dispatchEvent(ev);// forward `preventDefault` in a clean way
if(ev.defaultPrevented){let preventer=detail.preventer||detail.sourceEvent;if(preventer&&preventer.preventDefault){preventer.preventDefault()}}}/**
   * Prevents the dispatch and default action of the given event name.
   *
   * @param {string} evName Event name.
   * @return {void}
   */function prevent(evName){let recognizer=_findRecognizerByEvent(evName);if(recognizer.info){recognizer.info.prevent=!0}}/**
   * Reset the 2500ms timeout on processing mouse input after detecting touch input.
   *
   * Touch inputs create synthesized mouse inputs anywhere from 0 to 2000ms after the touch.
   * This method should only be called during testing with simulated touch inputs.
   * Calling this method in production may cause duplicate taps or other Gestures.
   *
   * @return {void}
   */function resetMouseCanceller(){if(POINTERSTATE.mouse.mouseIgnoreJob){POINTERSTATE.mouse.mouseIgnoreJob.flush()}}/* eslint-disable valid-jsdoc */register$1({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function(){untrackDocument(this.info)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function(e){if(!hasLeftMouseButton(e)){return}let t=_findOriginalTarget(e),self=this,movefn=function movefn(e){if(!hasLeftMouseButton(e)){downupFire("up",t,e);untrackDocument(self.info)}},upfn=function upfn(e){if(hasLeftMouseButton(e)){downupFire("up",t,e)}untrackDocument(self.info)};trackDocument(this.info,movefn,upfn);downupFire("down",t,e)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function(e){downupFire("down",_findOriginalTarget(e),e.changedTouches[0],e)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function(e){downupFire("up",_findOriginalTarget(e),e.changedTouches[0],e)}});/**
     * @param {string} type
     * @param {EventTarget} target
     * @param {Event|Touch} event
     * @param {Event=} preventer
     * @return {void}
     */function downupFire(type,target,event,preventer){if(!target){return}_fire(target,type,{x:event.clientX,y:event.clientY,sourceEvent:event,preventer:preventer,prevent:function(e){return prevent(e)}})}register$1({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],/** @this {GestureInfo} */addMove:function(move){if(this.moves.length>TRACK_LENGTH){this.moves.shift()}this.moves.push(move)},movefn:null,upfn:null,prevent:!1},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function(){this.info.state="start";this.info.started=!1;this.info.moves=[];this.info.x=0;this.info.y=0;this.info.prevent=!1;untrackDocument(this.info)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function(e){if(!hasLeftMouseButton(e)){return}let t=_findOriginalTarget(e),self=this,movefn=function movefn(e){let x=e.clientX,y=e.clientY;if(trackHasMovedEnough(self.info,x,y)){// first move is 'start', subsequent moves are 'move', mouseup is 'end'
self.info.state=self.info.started?"mouseup"===e.type?"end":"track":"start";if("start"===self.info.state){// if and only if tracking, always prevent tap
prevent("tap")}self.info.addMove({x:x,y:y});if(!hasLeftMouseButton(e)){// always fire "end"
self.info.state="end";untrackDocument(self.info)}if(t){trackFire(self.info,t,e)}self.info.started=!0}},upfn=function upfn(e){if(self.info.started){movefn(e)}// remove the temporary listeners
untrackDocument(self.info)};// add temporary document listeners as mouse retargets
trackDocument(this.info,movefn,upfn);this.info.x=e.clientX;this.info.y=e.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function(e){let ct=e.changedTouches[0];this.info.x=ct.clientX;this.info.y=ct.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchmove:function(e){let t=_findOriginalTarget(e),ct=e.changedTouches[0],x=ct.clientX,y=ct.clientY;if(trackHasMovedEnough(this.info,x,y)){if("start"===this.info.state){// if and only if tracking, always prevent tap
prevent("tap")}this.info.addMove({x:x,y:y});trackFire(this.info,t,ct);this.info.state="track";this.info.started=!0}},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function(e){let t=_findOriginalTarget(e),ct=e.changedTouches[0];// only trackend if track was started and not aborted
if(this.info.started){// reset started state on up
this.info.state="end";this.info.addMove({x:ct.clientX,y:ct.clientY});trackFire(this.info,t,ct)}}});/**
     * @param {!GestureInfo} info
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */function trackHasMovedEnough(info,x,y){if(info.prevent){return!1}if(info.started){return!0}let dx=Math.abs(info.x-x),dy=Math.abs(info.y-y);return dx>=TRACK_DISTANCE||dy>=TRACK_DISTANCE}/**
   * @param {!GestureInfo} info
   * @param {?EventTarget} target
   * @param {Touch} touch
   * @return {void}
   */function trackFire(info,target,touch){if(!target){return}let secondlast=info.moves[info.moves.length-2],lastmove=info.moves[info.moves.length-1],dx=lastmove.x-info.x,dy=lastmove.y-info.y,ddx,ddy=0;if(secondlast){ddx=lastmove.x-secondlast.x;ddy=lastmove.y-secondlast.y}_fire(target,"track",{state:info.state,x:touch.clientX,y:touch.clientY,dx:dx,dy:dy,ddx:ddx,ddy:ddy,sourceEvent:touch,hover:function(){return deepTargetFind(touch.clientX,touch.clientY)}})}register$1({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=!1},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function(e){if(hasLeftMouseButton(e)){this.info.x=e.clientX;this.info.y=e.clientY}},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */click:function(e){if(hasLeftMouseButton(e)){trackForward(this.info,e)}},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function(e){const touch=e.changedTouches[0];this.info.x=touch.clientX;this.info.y=touch.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function(e){trackForward(this.info,e.changedTouches[0],e)}});/**
     * @param {!GestureInfo} info
     * @param {Event | Touch} e
     * @param {Event=} preventer
     * @return {void}
     */function trackForward(info,e,preventer){let dx=Math.abs(e.clientX-info.x),dy=Math.abs(e.clientY-info.y),t=_findOriginalTarget(preventer||e);if(!t||canBeDisabled[/** @type {!HTMLElement} */t.localName]&&t.hasAttribute("disabled")){return}// dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`
if(isNaN(dx)||isNaN(dy)||dx<=TAP_DISTANCE&&dy<=TAP_DISTANCE||isSyntheticClick(e)){// prevent taps from being generated if an event has canceled them
if(!info.prevent){_fire(t,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:preventer})}}}/* eslint-enable valid-jsdoc */ /** @deprecated */const findOriginalTarget=_findOriginalTarget;/** @deprecated */_exports.findOriginalTarget=findOriginalTarget;const add=addListener;/** @deprecated */_exports.add=add;const remove=removeListener;_exports.remove=remove;var gestures$1={gestures:gestures,recognizers:recognizers,deepTargetFind:deepTargetFind,addListener:addListener,removeListener:removeListener,register:register$1,setTouchAction:setTouchAction,prevent:prevent,resetMouseCanceller:resetMouseCanceller,findOriginalTarget:findOriginalTarget,add:add,remove:remove};_exports.$gestures=gestures$1;const GestureEventListeners=dedupingMixin(/**
                                                     * @template T
                                                     * @param {function(new:T)} superClass Class to apply mixin to.
                                                     * @return {function(new:T)} superClass with mixin applied.
                                                     */superClass=>{/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_GestureEventListeners}
   */class GestureEventListeners extends superClass{/**
     * Add the event listener to the node if it is a gestures event.
     *
     * @param {!EventTarget} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     * @override
     */_addEventListenerToNode(node,eventName,handler){if(!addListener(node,eventName,handler)){super._addEventListenerToNode(node,eventName,handler)}}/**
       * Remove the event listener to the node if it is a gestures event.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */_removeEventListenerFromNode(node,eventName,handler){if(!removeListener(node,eventName,handler)){super._removeEventListenerFromNode(node,eventName,handler)}}}return GestureEventListeners});_exports.GestureEventListeners=GestureEventListeners;var gestureEventListeners={GestureEventListeners:GestureEventListeners};_exports.$gestureEventListeners=gestureEventListeners;const HOST_DIR=/:host\(:dir\((ltr|rtl)\)\)/g,HOST_DIR_REPLACMENT=":host([dir=\"$1\"])",EL_DIR=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,EL_DIR_REPLACMENT=":host([dir=\"$2\"]) $1",DIR_INSTANCES=[];/** @type {MutationObserver} */let observer=null,DOCUMENT_DIR="";function getRTL(){DOCUMENT_DIR=document.documentElement.getAttribute("dir")}/**
   * @param {!Polymer_DirMixin} instance Instance to set RTL status on
   */function setRTL(instance){if(!instance.__autoDirOptOut){const el=/** @type {!HTMLElement} */instance;el.setAttribute("dir",DOCUMENT_DIR)}}function updateDirection(){getRTL();DOCUMENT_DIR=document.documentElement.getAttribute("dir");for(let i=0;i<DIR_INSTANCES.length;i++){setRTL(DIR_INSTANCES[i])}}function takeRecords(){if(observer&&observer.takeRecords().length){updateDirection()}}/**
   * Element class mixin that allows elements to use the `:dir` CSS Selector to
   * have text direction specific styling.
   *
   * With this mixin, any stylesheet provided in the template will transform
   * `:dir` into `:host([dir])` and sync direction with the page via the
   * element's `dir` attribute.
   *
   * Elements can opt out of the global page text direction by setting the `dir`
   * attribute directly in `ready()` or in HTML.
   *
   * Caveats:
   * - Applications must set `<html dir="ltr">` or `<html dir="rtl">` to sync
   *   direction
   * - Automatic left-to-right or right-to-left styling is sync'd with the
   *   `<html>` element only.
   * - Changing `dir` at runtime is supported.
   * - Opting out of the global direction styling is permanent
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyAccessors
   */const DirMixin=dedupingMixin(base=>{if(!observer){getRTL();observer=new MutationObserver(updateDirection);observer.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}/**
     * @constructor
     * @extends {base}
     * @implements {Polymer_PropertyAccessors}
     * @private
     */const elementBase=PropertyAccessors(base);/**
                                                * @polymer
                                                * @mixinClass
                                                * @implements {Polymer_DirMixin}
                                                */class Dir extends elementBase{/**
     * @override
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     */static _processStyleText(cssText,baseURI){cssText=super._processStyleText(cssText,baseURI);cssText=this._replaceDirInCssText(cssText);return cssText}/**
       * Replace `:dir` in the given CSS text
       *
       * @param {string} text CSS text to replace DIR
       * @return {string} Modified CSS
       */static _replaceDirInCssText(text){let replacedText=text;replacedText=replacedText.replace(HOST_DIR,HOST_DIR_REPLACMENT);replacedText=replacedText.replace(EL_DIR,EL_DIR_REPLACMENT);if(text!==replacedText){this.__activateDir=!0}return replacedText}constructor(){super();/** @type {boolean} */this.__autoDirOptOut=!1}/**
       * @suppress {invalidCasts} Closure doesn't understand that `this` is an HTMLElement
       * @return {void}
       */ready(){super.ready();this.__autoDirOptOut=/** @type {!HTMLElement} */this.hasAttribute("dir")}/**
       * @suppress {missingProperties} If it exists on elementBase, it can be super'd
       * @return {void}
       */connectedCallback(){if(elementBase.prototype.connectedCallback){super.connectedCallback()}if(this.constructor.__activateDir){takeRecords();DIR_INSTANCES.push(this);setRTL(this)}}/**
       * @suppress {missingProperties} If it exists on elementBase, it can be super'd
       * @return {void}
       */disconnectedCallback(){if(elementBase.prototype.disconnectedCallback){super.disconnectedCallback()}if(this.constructor.__activateDir){const idx=DIR_INSTANCES.indexOf(this);if(-1<idx){DIR_INSTANCES.splice(idx,1)}}}}Dir.__activateDir=!1;return Dir});_exports.DirMixin=DirMixin;var dirMixin={DirMixin:DirMixin};_exports.$dirMixin=dirMixin;let scheduled=!1,beforeRenderQueue=[],afterRenderQueue=[];function schedule(){scheduled=!0;// before next render
requestAnimationFrame(function(){scheduled=!1;flushQueue(beforeRenderQueue);// after the render
setTimeout(function(){runQueue(afterRenderQueue)})})}function flushQueue(queue){while(queue.length){callMethod(queue.shift())}}function runQueue(queue){for(let i=0,l=queue.length;i<l;i++){callMethod(queue.shift())}}function callMethod(info){const context=info[0],callback=info[1],args=info[2];try{callback.apply(context,args)}catch(e){setTimeout(()=>{throw e})}}/**
   * Flushes all `beforeNextRender` tasks, followed by all `afterNextRender`
   * tasks.
   *
   * @return {void}
   */function flush(){while(beforeRenderQueue.length||afterRenderQueue.length){flushQueue(beforeRenderQueue);flushQueue(afterRenderQueue)}scheduled=!1}/**
   * Enqueues a callback which will be run before the next render, at
   * `requestAnimationFrame` timing.
   *
   * This method is useful for enqueuing work that requires DOM measurement,
   * since measurement may not be reliable in custom element callbacks before
   * the first render, as well as for batching measurement tasks in general.
   *
   * Tasks in this queue may be flushed by calling `flush()`.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */function beforeNextRender(context,callback,args){if(!scheduled){schedule()}beforeRenderQueue.push([context,callback,args])}/**
   * Enqueues a callback which will be run after the next render, equivalent
   * to one task (`setTimeout`) after the next `requestAnimationFrame`.
   *
   * This method is useful for tuning the first-render performance of an
   * element or application by deferring non-critical work until after the
   * first paint.  Typical non-render-critical work may include adding UI
   * event listeners and aria attributes.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */function afterNextRender(context,callback,args){if(!scheduled){schedule()}afterRenderQueue.push([context,callback,args])}var renderStatus={flush:flush,beforeNextRender:beforeNextRender,afterNextRender:afterNextRender};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$renderStatus=renderStatus;function resolve(){document.body.removeAttribute("unresolved")}if("interactive"===document.readyState||"complete"===document.readyState){resolve()}else{window.addEventListener("DOMContentLoaded",resolve)}function newSplice(index,removed,addedCount){return{index:index,removed:removed,addedCount:addedCount}}const EDIT_LEAVE=0,EDIT_UPDATE=1,EDIT_ADD=2,EDIT_DELETE=3;// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' -> '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd){// "Deletion" columns
let rowCount=oldEnd-oldStart+1,columnCount=currentEnd-currentStart+1,distances=Array(rowCount);// "Addition" rows. Initialize null column.
for(let i=0;i<rowCount;i++){distances[i]=Array(columnCount);distances[i][0]=i}// Initialize null row
for(let j=0;j<columnCount;j++)distances[0][j]=j;for(let i=1;i<rowCount;i++){for(let j=1;j<columnCount;j++){if(equals(current[currentStart+j-1],old[oldStart+i-1]))distances[i][j]=distances[i-1][j-1];else{let north=distances[i-1][j]+1,west=distances[i][j-1]+1;distances[i][j]=north<west?north:west}}}return distances}// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances){let i=distances.length-1,j=distances[0].length-1,current=distances[i][j],edits=[];while(0<i||0<j){if(0==i){edits.push(EDIT_ADD);j--;continue}if(0==j){edits.push(EDIT_DELETE);i--;continue}let northWest=distances[i-1][j-1],west=distances[i-1][j],north=distances[i][j-1],min;if(west<north)min=west<northWest?west:northWest;else min=north<northWest?north:northWest;if(min==northWest){if(northWest==current){edits.push(EDIT_LEAVE)}else{edits.push(EDIT_UPDATE);current=northWest}i--;j--}else if(min==west){edits.push(EDIT_DELETE);i--;current=west}else{edits.push(EDIT_ADD);j--;current=north}}edits.reverse();return edits}/**
   * Splice Projection functions:
   *
   * A splice map is a representation of how a previous array of items
   * was transformed into a new array of items. Conceptually it is a list of
   * tuples of
   *
   *   <index, removed, addedCount>
   *
   * which are kept in ascending index order of. The tuple represents that at
   * the |index|, |removed| sequence of items were removed, and counting forward
   * from |index|, |addedCount| items were added.
   */ /**
       * Lacking individual splice mutation information, the minimal set of
       * splices can be synthesized given the previous state and final state of an
       * array. The basic approach is to calculate the edit distance matrix and
       * choose the shortest path through it.
       *
       * Complexity: O(l * p)
       *   l: The length of the current array
       *   p: The length of the old array
       *
       * @param {!Array} current The current "changed" array for which to
       * calculate splices.
       * @param {number} currentStart Starting index in the `current` array for
       * which splices are calculated.
       * @param {number} currentEnd Ending index in the `current` array for
       * which splices are calculated.
       * @param {!Array} old The original "unchanged" array to compare `current`
       * against to determine splices.
       * @param {number} oldStart Starting index in the `old` array for
       * which splices are calculated.
       * @param {number} oldEnd Ending index in the `old` array for
       * which splices are calculated.
       * @return {!Array} Returns an array of splice record objects. Each of these
       * contains: `index` the location where the splice occurred; `removed`
       * the array of removed items from this location; `addedCount` the number
       * of items added at this location.
       */function calcSplices(current,currentStart,currentEnd,old,oldStart,oldEnd){let prefixCount=0,suffixCount=0,splice,minLength=Math.min(currentEnd-currentStart,oldEnd-oldStart);if(0==currentStart&&0==oldStart)prefixCount=sharedPrefix(current,old,minLength);if(currentEnd==current.length&&oldEnd==old.length)suffixCount=sharedSuffix(current,old,minLength-prefixCount);currentStart+=prefixCount;oldStart+=prefixCount;currentEnd-=suffixCount;oldEnd-=suffixCount;if(0==currentEnd-currentStart&&0==oldEnd-oldStart)return[];if(currentStart==currentEnd){splice=newSplice(currentStart,[],0);while(oldStart<oldEnd)splice.removed.push(old[oldStart++]);return[splice]}else if(oldStart==oldEnd)return[newSplice(currentStart,[],currentEnd-currentStart)];let ops=spliceOperationsFromEditDistances(calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd));splice=void 0;let splices=[],index=currentStart,oldIndex=oldStart;for(let i=0;i<ops.length;i++){switch(ops[i]){case EDIT_LEAVE:if(splice){splices.push(splice);splice=void 0}index++;oldIndex++;break;case EDIT_UPDATE:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;splice.removed.push(old[oldIndex]);oldIndex++;break;case EDIT_ADD:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;break;case EDIT_DELETE:if(!splice)splice=newSplice(index,[],0);splice.removed.push(old[oldIndex]);oldIndex++;break;}}if(splice){splices.push(splice)}return splices}function sharedPrefix(current,old,searchLength){for(let i=0;i<searchLength;i++)if(!equals(current[i],old[i]))return i;return searchLength}function sharedSuffix(current,old,searchLength){let index1=current.length,index2=old.length,count=0;while(count<searchLength&&equals(current[--index1],old[--index2]))count++;return count}/**
   * Returns an array of splice records indicating the minimum edits required
   * to transform the `previous` array into the `current` array.
   *
   * Splice records are ordered by index and contain the following fields:
   * - `index`: index where edit started
   * - `removed`: array of removed items from this index
   * - `addedCount`: number of items added at this index
   *
   * This function is based on the Levenshtein "minimum edit distance"
   * algorithm. Note that updates are treated as removal followed by addition.
   *
   * The worst-case time complexity of this algorithm is `O(l * p)`
   *   l: The length of the current array
   *   p: The length of the previous array
   *
   * However, the worst-case complexity is reduced by an `O(n)` optimization
   * to detect any shared prefix & suffix between the two arrays and only
   * perform the more expensive minimum edit distance calculation over the
   * non-shared portions of the arrays.
   *
   * @function
   * @param {!Array} current The "changed" array for which splices will be
   * calculated.
   * @param {!Array} previous The "unchanged" original array to compare
   * `current` against to determine the splices.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */function calculateSplices(current,previous){return calcSplices(current,0,current.length,previous,0,previous.length)}function equals(currentValue,previousValue){return currentValue===previousValue}var arraySplice={calculateSplices:calculateSplices};_exports.$arraySplice=arraySplice;function isSlot(node){return"slot"===node.localName}/**
   * Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`. The list of flattened nodes consists
   * of a node's children and, for any children that are `<slot>` elements,
   * the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * The provided `callback` is called whenever any change to this list
   * of flattened nodes occurs, where an addition or removal of a node is
   * considered a change. The `callback` is called with one argument, an object
   * containing an array of any `addedNodes` and `removedNodes`.
   *
   * Note: the callback is called asynchronous to any changes
   * at a microtask checkpoint. This is because observation is performed using
   * `MutationObserver` and the `<slot>` element's `slotchange` event which
   * are asynchronous.
   *
   * An example:
   * ```js
   * class TestSelfObserve extends PolymerElement {
   *   static get is() { return 'test-self-observe';}
   *   connectedCallback() {
   *     super.connectedCallback();
   *     this._observer = new FlattenedNodesObserver(this, (info) => {
   *       this.info = info;
   *     });
   *   }
   *   disconnectedCallback() {
   *     super.disconnectedCallback();
   *     this._observer.disconnect();
   *   }
   * }
   * customElements.define(TestSelfObserve.is, TestSelfObserve);
   * ```
   *
   * @summary Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`.
   */class FlattenedNodesObserver{/**
   * Returns the list of flattened nodes for the given `node`.
   * This list consists of a node's children and, for any children
   * that are `<slot>` elements, the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * @param {!HTMLElement|!HTMLSlotElement} node The node for which to
   *      return the list of flattened nodes.
   * @return {!Array<!Node>} The list of flattened nodes for the given `node`.
   * @nocollapse See https://github.com/google/closure-compiler/issues/2763
   */static getFlattenedNodes(node){if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return node.assignedNodes({flatten:!0})}else{return Array.from(node.childNodes).map(node=>{if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return node.assignedNodes({flatten:!0})}else{return[node]}}).reduce((a,b)=>a.concat(b),[])}}/**
     * @param {!HTMLElement} target Node on which to listen for changes.
     * @param {?function(this: Element, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Function called when there are additions
     * or removals from the target's list of flattened nodes.
     */constructor(target,callback){/**
     * @type {MutationObserver}
     * @private
     */this._shadyChildrenObserver=null;/**
                                            * @type {MutationObserver}
                                            * @private
                                            */this._nativeChildrenObserver=null;this._connected=!1;/**
                              * @type {!HTMLElement}
                              * @private
                              */this._target=target;this.callback=callback;this._effectiveNodes=[];this._observer=null;this._scheduled=!1;/**
                              * @type {function()}
                              * @private
                              */this._boundSchedule=()=>{this._schedule()};this.connect();this._schedule()}/**
     * Activates an observer. This method is automatically called when
     * a `FlattenedNodesObserver` is created. It should only be called to
     * re-activate an observer that has been deactivated via the `disconnect` method.
     *
     * @return {void}
     */connect(){if(isSlot(this._target)){this._listenSlots([this._target])}else if(this._target.children){this._listenSlots(/** @type {!NodeList<!Node>} */this._target.children);if(window.ShadyDOM){this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,mutations=>{this._processMutations(mutations)})}else{this._nativeChildrenObserver=new MutationObserver(mutations=>{this._processMutations(mutations)});this._nativeChildrenObserver.observe(this._target,{childList:!0})}}this._connected=!0}/**
     * Deactivates the flattened nodes observer. After calling this method
     * the observer callback will not be called when changes to flattened nodes
     * occur. The `connect` method may be subsequently called to reactivate
     * the observer.
     *
     * @return {void}
     */disconnect(){if(isSlot(this._target)){this._unlistenSlots([this._target])}else if(this._target.children){this._unlistenSlots(/** @type {!NodeList<!Node>} */this._target.children);if(window.ShadyDOM&&this._shadyChildrenObserver){ShadyDOM.unobserveChildren(this._shadyChildrenObserver);this._shadyChildrenObserver=null}else if(this._nativeChildrenObserver){this._nativeChildrenObserver.disconnect();this._nativeChildrenObserver=null}}this._connected=!1}/**
     * @return {void}
     * @private
     */_schedule(){if(!this._scheduled){this._scheduled=!0;microTask.run(()=>this.flush())}}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */_processMutations(mutations){this._processSlotMutations(mutations);this.flush()}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */_processSlotMutations(mutations){if(mutations){for(let i=0,mutation;i<mutations.length;i++){mutation=mutations[i];if(mutation.addedNodes){this._listenSlots(mutation.addedNodes)}if(mutation.removedNodes){this._unlistenSlots(mutation.removedNodes)}}}}/**
     * Flushes the observer causing any pending changes to be immediately
     * delivered the observer callback. By default these changes are delivered
     * asynchronously at the next microtask checkpoint.
     *
     * @return {boolean} Returns true if any pending changes caused the observer
     * callback to run.
     */flush(){if(!this._connected){return!1}if(window.ShadyDOM){ShadyDOM.flush()}if(this._nativeChildrenObserver){this._processSlotMutations(this._nativeChildrenObserver.takeRecords())}else if(this._shadyChildrenObserver){this._processSlotMutations(this._shadyChildrenObserver.takeRecords())}this._scheduled=!1;let info={target:this._target,addedNodes:[],removedNodes:[]},newNodes=this.constructor.getFlattenedNodes(this._target),splices=calculateSplices(newNodes,this._effectiveNodes);// process removals
for(let i=0,s;i<splices.length&&(s=splices[i]);i++){for(let j=0,n;j<s.removed.length&&(n=s.removed[j]);j++){info.removedNodes.push(n)}}// process adds
for(let i=0,s;i<splices.length&&(s=splices[i]);i++){for(let j=s.index;j<s.index+s.addedCount;j++){info.addedNodes.push(newNodes[j])}}// update cache
this._effectiveNodes=newNodes;let didFlush=!1;if(info.addedNodes.length||info.removedNodes.length){didFlush=!0;this.callback.call(this._target,info)}return didFlush}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */_listenSlots(nodeList){for(let i=0,n;i<nodeList.length;i++){n=nodeList[i];if(isSlot(n)){n.addEventListener("slotchange",this._boundSchedule)}}}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */_unlistenSlots(nodeList){for(let i=0,n;i<nodeList.length;i++){n=nodeList[i];if(isSlot(n)){n.removeEventListener("slotchange",this._boundSchedule)}}}}_exports.FlattenedNodesObserver=FlattenedNodesObserver;var flattenedNodesObserver={FlattenedNodesObserver:FlattenedNodesObserver};/* eslint-enable no-unused-vars */_exports.$flattenedNodesObserver=flattenedNodesObserver;let debouncerQueue=[];/**
                          * Adds a `Debouncer` to a list of globally flushable tasks.
                          *
                          * @param {!Debouncer} debouncer Debouncer to enqueue
                          * @return {void}
                          */const enqueueDebouncer=function(debouncer){debouncerQueue.push(debouncer)};_exports.enqueueDebouncer=_exports.addDebouncer=enqueueDebouncer;function flushDebouncers(){const didFlush=!!debouncerQueue.length;while(debouncerQueue.length){try{debouncerQueue.shift().flush()}catch(e){setTimeout(()=>{throw e})}}return didFlush}/**
   * Forces several classes of asynchronously queued tasks to flush:
   * - Debouncers added via `enqueueDebouncer`
   * - ShadyDOM distribution
   *
   * @return {void}
   */const flush$1=function(){let shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush()}debouncers=flushDebouncers()}while(shadyDOM||debouncers)};_exports.flush$1=_exports.flush=flush$1;var flush$2={enqueueDebouncer:enqueueDebouncer,flush:flush$1};/* eslint-enable no-unused-vars */_exports.$flush=flush$2;const p=Element.prototype,normalizedMatchesSelector=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,matchesSelector=function(node,selector){return normalizedMatchesSelector.call(node,selector)};/**
                              * @const {function(this:Node, string): boolean}
                              */_exports.matchesSelector=matchesSelector;/**
    * Node API wrapper class returned from `Polymer.dom.(target)` when
    * `target` is a `Node`.
    *
    */class DomApi{/**
   * @param {Node} node Node for which to create a Polymer.dom helper object.
   */constructor(node){this.node=node}/**
     * Returns an instance of `FlattenedNodesObserver` that
     * listens for node changes on this element.
     *
     * @param {function(this:HTMLElement, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
     *   of this element changes
     * @return {!FlattenedNodesObserver} Observer instance
     */observeNodes(callback){return new FlattenedNodesObserver(/** @type {!HTMLElement} */this.node,callback)}/**
     * Disconnects an observer previously created via `observeNodes`
     *
     * @param {!FlattenedNodesObserver} observerHandle Observer instance
     *   to disconnect.
     * @return {void}
     */unobserveNodes(observerHandle){observerHandle.disconnect()}/**
     * Provided as a backwards-compatible API only.  This method does nothing.
     * @return {void}
     */notifyObserver(){}/**
                       * Returns true if the provided node is contained with this element's
                       * light-DOM children or shadow root, including any nested shadow roots
                       * of children therein.
                       *
                       * @param {Node} node Node to test
                       * @return {boolean} Returns true if the given `node` is contained within
                       *   this element's light or shadow DOM.
                       */deepContains(node){if(this.node.contains(node)){return!0}let n=node,doc=node.ownerDocument;// walk from node to `this` or `document`
while(n&&n!==doc&&n!==this.node){// use logical parentnode, or native ShadowRoot host
n=n.parentNode||n.host}return n===this.node}/**
     * Returns the root node of this node.  Equivalent to `getRootNode()`.
     *
     * @return {Node} Top most element in the dom tree in which the node
     * exists. If the node is connected to a document this is either a
     * shadowRoot or the document; otherwise, it may be the node
     * itself or a node or document fragment containing it.
     */getOwnerRoot(){return this.node.getRootNode()}/**
     * For slot elements, returns the nodes assigned to the slot; otherwise
     * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
     *
     * @return {!Array<!Node>} Array of assigned nodes
     */getDistributedNodes(){return"slot"===this.node.localName?this.node.assignedNodes({flatten:!0}):[]}/**
     * Returns an array of all slots this element was distributed to.
     *
     * @return {!Array<!HTMLSlotElement>} Description
     */getDestinationInsertionPoints(){let ip$=[],n=this.node.assignedSlot;while(n){ip$.push(n);n=n.assignedSlot}return ip$}/**
     * Calls `importNode` on the `ownerDocument` for this node.
     *
     * @param {!Node} node Node to import
     * @param {boolean} deep True if the node should be cloned deeply during
     *   import
     * @return {Node} Clone of given node imported to this owner document
     */importNode(node,deep){let doc=this.node instanceof Document?this.node:this.node.ownerDocument;return doc.importNode(node,deep)}/**
     * @return {!Array<!Node>} Returns a flattened list of all child nodes and
     * nodes assigned to child slots.
     */getEffectiveChildNodes(){return FlattenedNodesObserver.getFlattenedNodes(/** @type {!HTMLElement} */this.node)}/**
     * Returns a filtered list of flattened child elements for this element based
     * on the given selector.
     *
     * @param {string} selector Selector to filter nodes against
     * @return {!Array<!HTMLElement>} List of flattened child elements
     */queryDistributedElements(selector){let c$=this.getEffectiveChildNodes(),list=[];for(let i=0,l=c$.length,c;i<l&&(c=c$[i]);i++){if(c.nodeType===Node.ELEMENT_NODE&&matchesSelector(c,selector)){list.push(c)}}return list}/**
     * For shadow roots, returns the currently focused element within this
     * shadow root.
     *
     * @return {Node|undefined} Currently focused element
     */get activeElement(){let node=this.node;return node._activeElement!==void 0?node._activeElement:node.activeElement}}_exports.DomApi=DomApi;function forwardMethods(proto,methods){for(let i=0,method;i<methods.length;i++){method=methods[i];/* eslint-disable valid-jsdoc */proto[method]=/** @this {DomApi} */function(){return this.node[method].apply(this.node,arguments)};/* eslint-enable */}}function forwardReadOnlyProperties(proto,properties){for(let i=0,name;i<properties.length;i++){name=properties[i];Object.defineProperty(proto,name,{get:function(){const domApi=/** @type {DomApi} */this;return domApi.node[name]},configurable:!0})}}function forwardProperties(proto,properties){for(let i=0,name;i<properties.length;i++){name=properties[i];Object.defineProperty(proto,name,{/**
       * @this {DomApi}
       * @return {*} .
       */get:function(){return this.node[name]},/**
       * @this {DomApi}
       * @param {*} value .
       */set:function(value){this.node[name]=value},configurable:!0})}}/**
   * Event API wrapper class returned from `dom.(target)` when
   * `target` is an `Event`.
   */class EventApi{constructor(event){this.event=event}/**
     * Returns the first node on the `composedPath` of this event.
     *
     * @return {!EventTarget} The node this event was dispatched to
     */get rootTarget(){return this.event.composedPath()[0]}/**
     * Returns the local (re-targeted) target for this event.
     *
     * @return {!EventTarget} The local (re-targeted) target for this event.
     */get localTarget(){return this.event.target}/**
     * Returns the `composedPath` for this event.
     * @return {!Array<!EventTarget>} The nodes this event propagated through
     */get path(){return this.event.composedPath()}}/**
   * @function
   * @param {boolean=} deep
   * @return {!Node}
   */_exports.EventApi=EventApi;DomApi.prototype.cloneNode;/**
                             * @function
                             * @param {!Node} node
                             * @return {!Node}
                             */DomApi.prototype.appendChild;/**
                               * @function
                               * @param {!Node} newChild
                               * @param {Node} refChild
                               * @return {!Node}
                               */DomApi.prototype.insertBefore;/**
                                * @function
                                * @param {!Node} node
                                * @return {!Node}
                                */DomApi.prototype.removeChild;/**
                               * @function
                               * @param {!Node} oldChild
                               * @param {!Node} newChild
                               * @return {!Node}
                               */DomApi.prototype.replaceChild;/**
                                * @function
                                * @param {string} name
                                * @param {string} value
                                * @return {void}
                                */DomApi.prototype.setAttribute;/**
                                * @function
                                * @param {string} name
                                * @return {void}
                                */DomApi.prototype.removeAttribute;/**
                                   * @function
                                   * @param {string} selector
                                   * @return {?Element}
                                   */DomApi.prototype.querySelector;/**
                                 * @function
                                 * @param {string} selector
                                 * @return {!NodeList<!Element>}
                                 */DomApi.prototype.querySelectorAll;/** @type {?Node} */DomApi.prototype.parentNode;/** @type {?Node} */DomApi.prototype.firstChild;/** @type {?Node} */DomApi.prototype.lastChild;/** @type {?Node} */DomApi.prototype.nextSibling;/** @type {?Node} */DomApi.prototype.previousSibling;/** @type {?HTMLElement} */DomApi.prototype.firstElementChild;/** @type {?HTMLElement} */DomApi.prototype.lastElementChild;/** @type {?HTMLElement} */DomApi.prototype.nextElementSibling;/** @type {?HTMLElement} */DomApi.prototype.previousElementSibling;/** @type {!Array<!Node>} */DomApi.prototype.childNodes;/** @type {!Array<!HTMLElement>} */DomApi.prototype.children;/** @type {?DOMTokenList} */DomApi.prototype.classList;/** @type {string} */DomApi.prototype.textContent;/** @type {string} */DomApi.prototype.innerHTML;forwardMethods(DomApi.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]);forwardReadOnlyProperties(DomApi.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]);forwardProperties(DomApi.prototype,["textContent","innerHTML"]);/**
                                                                    * Legacy DOM and Event manipulation API wrapper factory used to abstract
                                                                    * differences between native Shadow DOM and "Shady DOM" when polyfilling on
                                                                    * older browsers.
                                                                    *
                                                                    * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
                                                                    * in the majority of cases simply facades directly to the standard native
                                                                    * API.
                                                                    *
                                                                    * @summary Legacy DOM and Event manipulation API wrapper factory used to
                                                                    * abstract differences between native Shadow DOM and "Shady DOM."
                                                                    * @param {(Node|Event)=} obj Node or event to operate on
                                                                    * @return {!DomApi|!EventApi} Wrapper providing either node API or event API
                                                                    */const dom=function(obj){obj=obj||document;if(!obj.__domApi){let helper;if(obj instanceof Event){helper=new EventApi(obj)}else{helper=new DomApi(obj)}obj.__domApi=helper}return obj.__domApi};_exports.dom=dom;var polymer_dom={matchesSelector:matchesSelector,DomApi:DomApi,EventApi:EventApi,dom:dom,flush:flush$1,addDebouncer:enqueueDebouncer};_exports.$polymerDom=polymer_dom;const bundledImportMeta$1=_objectSpread({},meta,{url:new URL("../node_modules/%40polymer/polymer/lib/legacy/legacy-element-mixin.js",meta.url).href});let styleInterface=window.ShadyCSS;/**
                                       * Element class mixin that provides Polymer's "legacy" API intended to be
                                       * backward-compatible to the greatest extent possible with the API
                                       * found on the Polymer 1.x `Polymer.Base` prototype applied to all elements
                                       * defined using the `Polymer({...})` function.
                                       *
                                       * @mixinFunction
                                       * @polymer
                                       * @appliesMixin ElementMixin
                                       * @appliesMixin GestureEventListeners
                                       * @property isAttached {boolean} Set to `true` in this element's
                                       *   `connectedCallback` and `false` in `disconnectedCallback`
                                       * @summary Element class mixin that provides Polymer's "legacy" API
                                       */const LegacyElementMixin=dedupingMixin(base=>{/**
   * @constructor
   * @extends {base}
   * @implements {Polymer_ElementMixin}
   * @implements {Polymer_GestureEventListeners}
   * @implements {Polymer_DirMixin}
   * @private
   */const legacyElementBase=DirMixin(GestureEventListeners(ElementMixin(base))),DIRECTION_MAP={x:"pan-x",y:"pan-y",none:"none",all:"auto"};/**
                                                                                     * Map of simple names to touch action names
                                                                                     * @dict
                                                                                     */ /**
      * @polymer
      * @mixinClass
      * @extends {legacyElementBase}
      * @implements {Polymer_LegacyElementMixin}
      * @unrestricted
      */class LegacyElement extends legacyElementBase{constructor(){super();/** @type {boolean} */this.isAttached;/** @type {WeakMap<!Element, !Object<string, !Function>>} */this.__boundListeners;/** @type {Object<string, Function>} */this._debouncers;// Ensure listeners are applied immediately so that they are
// added before declarative event listeners. This allows an element to
// decorate itself via an event prior to any declarative listeners
// seeing the event. Note, this ensures compatibility with 1.x ordering.
this._applyListeners()}/**
       * Forwards `importMeta` from the prototype (i.e. from the info object
       * passed to `Polymer({...})`) to the static API.
       *
       * @return {!Object} The `import.meta` object set on the prototype
       * @suppress {missingProperties} `this` is always in the instance in
       *  closure for some reason even in a static method, rather than the class
       */static get importMeta(){return this.prototype.importMeta}/**
       * Legacy callback called during the `constructor`, for overriding
       * by the user.
       * @return {void}
       */created(){}/**
                  * Provides an implementation of `connectedCallback`
                  * which adds Polymer legacy API's `attached` method.
                  * @return {void}
                  * @override
                  */connectedCallback(){super.connectedCallback();this.isAttached=!0;this.attached()}/**
       * Legacy callback called during `connectedCallback`, for overriding
       * by the user.
       * @return {void}
       */attached(){}/**
                   * Provides an implementation of `disconnectedCallback`
                   * which adds Polymer legacy API's `detached` method.
                   * @return {void}
                   * @override
                   */disconnectedCallback(){super.disconnectedCallback();this.isAttached=!1;this.detached()}/**
       * Legacy callback called during `disconnectedCallback`, for overriding
       * by the user.
       * @return {void}
       */detached(){}/**
                   * Provides an override implementation of `attributeChangedCallback`
                   * which adds the Polymer legacy API's `attributeChanged` method.
                   * @param {string} name Name of attribute.
                   * @param {?string} old Old value of attribute.
                   * @param {?string} value Current value of attribute.
                   * @param {?string} namespace Attribute namespace.
                   * @return {void}
                   * @override
                   */attributeChangedCallback(name,old,value,namespace){if(old!==value){super.attributeChangedCallback(name,old,value,namespace);this.attributeChanged(name,old,value)}}/**
       * Legacy callback called during `attributeChangedChallback`, for overriding
       * by the user.
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @return {void}
       */attributeChanged(name,old,value){}// eslint-disable-line no-unused-vars
/**
     * Overrides the default `Polymer.PropertyEffects` implementation to
     * add support for class initialization via the `_registered` callback.
     * This is called only when the first instance of the element is created.
     *
     * @return {void}
     * @override
     * @suppress {invalidCasts}
     */_initializeProperties(){let proto=Object.getPrototypeOf(this);if(!proto.hasOwnProperty("__hasRegisterFinished")){proto.__hasRegisterFinished=!0;this._registered()}super._initializeProperties();this.root=/** @type {HTMLElement} */this;this.created()}/**
       * Called automatically when an element is initializing.
       * Users may override this method to perform class registration time
       * work. The implementation should ensure the work is performed
       * only once for the class.
       * @protected
       * @return {void}
       */_registered(){}/**
                      * Overrides the default `Polymer.PropertyEffects` implementation to
                      * add support for installing `hostAttributes` and `listeners`.
                      *
                      * @return {void}
                      * @override
                      */ready(){this._ensureAttributes();super.ready()}/**
       * Ensures an element has required attributes. Called when the element
       * is being readied via `ready`. Users should override to set the
       * element's required attributes. The implementation should be sure
       * to check and not override existing attributes added by
       * the user of the element. Typically, setting attributes should be left
       * to the element user and not done here; reasonable exceptions include
       * setting aria roles and focusability.
       * @protected
       * @return {void}
       */_ensureAttributes(){}/**
                            * Adds element event listeners. Called when the element
                            * is being readied via `ready`. Users should override to
                            * add any required element event listeners.
                            * In performance critical elements, the work done here should be kept
                            * to a minimum since it is done before the element is rendered. In
                            * these elements, consider adding listeners asynchronously so as not to
                            * block render.
                            * @protected
                            * @return {void}
                            */_applyListeners(){}/**
                          * Converts a typed JavaScript value to a string.
                          *
                          * Note this method is provided as backward-compatible legacy API
                          * only.  It is not directly called by any Polymer features. To customize
                          * how properties are serialized to attributes for attribute bindings and
                          * `reflectToAttribute: true` properties as well as this method, override
                          * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
                          *
                          * @param {*} value Value to deserialize
                          * @return {string | undefined} Serialized value
                          */serialize(value){return this._serializeValue(value)}/**
       * Converts a string to a typed JavaScript value.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.  To customize
       * how attributes are deserialized to properties for in
       * `attributeChangedCallback`, override `_deserializeValue` method
       * provided by `Polymer.PropertyAccessors`.
       *
       * @param {string} value String to deserialize
       * @param {*} type Type to deserialize the string to
       * @return {*} Returns the deserialized value in the `type` given.
       */deserialize(value,type){return this._deserializeValue(value,type)}/**
       * Serializes a property to its associated attribute.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect.
       * @param {*=} value Property value to reflect.
       * @return {void}
       */reflectPropertyToAttribute(property,attribute,value){this._propertyToAttribute(property,attribute,value)}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @param {Element} node Element to set attribute to.
       * @return {void}
       */serializeValueToAttribute(value,attribute,node){this._valueToNodeAttribute(/** @type {Element} */node||this,value,attribute)}/**
       * Copies own properties (including accessor descriptors) from a source
       * object to a target object.
       *
       * @param {Object} prototype Target object to copy properties to.
       * @param {Object} api Source object to copy properties from.
       * @return {Object} prototype object that was passed as first argument.
       */extend(prototype,api){if(!(prototype&&api)){return prototype||api}let n$=Object.getOwnPropertyNames(api);for(let i=0,n,pd;i<n$.length&&(n=n$[i]);i++){pd=Object.getOwnPropertyDescriptor(api,n);if(pd){Object.defineProperty(prototype,n,pd)}}return prototype}/**
       * Copies props from a source object to a target object.
       *
       * Note, this method uses a simple `for...in` strategy for enumerating
       * properties.  To ensure only `ownProperties` are copied from source
       * to target and that accessor implementations are copied, use `extend`.
       *
       * @param {!Object} target Target object to copy properties to.
       * @param {!Object} source Source object to copy properties from.
       * @return {!Object} Target object that was passed as first argument.
       */mixin(target,source){for(let i in source){target[i]=source[i]}return target}/**
       * Sets the prototype of an object.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       * @param {Object} object The object on which to set the prototype.
       * @param {Object} prototype The prototype that will be set on the given
       * `object`.
       * @return {Object} Returns the given `object` with its prototype set
       * to the given `prototype` object.
       */chainObject(object,prototype){if(object&&prototype&&object!==prototype){object.__proto__=prototype}return object}/* **** Begin Template **** */ /**
                                      * Calls `importNode` on the `content` of the `template` specified and
                                      * returns a document fragment containing the imported content.
                                      *
                                      * @param {HTMLTemplateElement} template HTML template element to instance.
                                      * @return {!DocumentFragment} Document fragment containing the imported
                                      *   template content.
                                     */instanceTemplate(template){let content=this.constructor._contentForTemplate(template),dom=/** @type {!DocumentFragment} */document.importNode(content,!0);return dom}/* **** Begin Events **** */ /**
                                    * Dispatches a custom event with an optional detail value.
                                    *
                                    * @param {string} type Name of event type.
                                    * @param {*=} detail Detail value containing event-specific
                                    *   payload.
                                    * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined), composed: (boolean|undefined) }=}
                                    *  options Object specifying options.  These may include:
                                    *  `bubbles` (boolean, defaults to `true`),
                                    *  `cancelable` (boolean, defaults to false), and
                                    *  `node` on which to fire the event (HTMLElement, defaults to `this`).
                                    * @return {!Event} The new event that was fired.
                                    */fire(type,detail,options){options=options||{};detail=null===detail||detail===void 0?{}:detail;let event=new Event(type,{bubbles:options.bubbles===void 0?!0:options.bubbles,cancelable:!!options.cancelable,composed:options.composed===void 0?!0:options.composed});event.detail=detail;let node=options.node||this;node.dispatchEvent(event);return event}/**
       * Convenience method to add an event listener on a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to add event listener to.
       * @param {string} eventName Name of event to listen for.
       * @param {string} methodName Name of handler method on `this` to call.
       * @return {void}
       */listen(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;let hbl=this.__boundListeners||(this.__boundListeners=new WeakMap),bl=hbl.get(node);if(!bl){bl={};hbl.set(node,bl)}let key=eventName+methodName;if(!bl[key]){bl[key]=this._addMethodEventListenerToNode(node,eventName,methodName,this)}}/**
       * Convenience method to remove an event listener from a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to remove event listener from.
       * @param {string} eventName Name of event to stop listening to.
       * @param {string} methodName Name of handler method on `this` to not call
       anymore.
       * @return {void}
       */unlisten(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;let bl=this.__boundListeners&&this.__boundListeners.get(node),key=eventName+methodName,handler=bl&&bl[key];if(handler){this._removeEventListenerFromNode(node,eventName,handler);bl[key]=null}}/**
       * Override scrolling behavior to all direction, one direction, or none.
       *
       * Valid scroll directions:
       *   - 'all': scroll in any direction
       *   - 'x': scroll only in the 'x' direction
       *   - 'y': scroll only in the 'y' direction
       *   - 'none': disable scrolling for this node
       *
       * @param {string=} direction Direction to allow scrolling
       * Defaults to `all`.
       * @param {Element=} node Element to apply scroll direction setting.
       * Defaults to `this`.
       * @return {void}
       */setScrollDirection(direction,node){setTouchAction(/** @type {Element} */node||this,DIRECTION_MAP[direction]||"auto")}/* **** End Events **** */ /**
                                  * Convenience method to run `querySelector` on this local DOM scope.
                                  *
                                  * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
                                  *
                                  * @param {string} slctr Selector to run on this local DOM scope
                                  * @return {Element} Element found by the selector, or null if not found.
                                  */$$(slctr){return this.root.querySelector(slctr)}/**
       * Return the element whose local dom within which this element
       * is contained. This is a shorthand for
       * `this.getRootNode().host`.
       * @this {Element}
       */get domHost(){let root=this.getRootNode();return root instanceof DocumentFragment?/** @type {ShadowRoot} */root.host:root}/**
       * Force this element to distribute its children to its local dom.
       * This should not be necessary as of Polymer 2.0.2 and is provided only
       * for backwards compatibility.
       * @return {void}
       */distributeContent(){if(window.ShadyDOM&&this.shadowRoot){ShadyDOM.flush()}}/**
       * Returns a list of nodes that are the effective childNodes. The effective
       * childNodes list is the same as the element's childNodes except that
       * any `<content>` elements are replaced with the list of nodes distributed
       * to the `<content>`, the result of its `getDistributedNodes` method.
       * @return {!Array<!Node>} List of effective child nodes.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */getEffectiveChildNodes(){const thisEl=/** @type {Element} */this,domApi=/** @type {DomApi} */dom(thisEl);return domApi.getEffectiveChildNodes()}/**
       * Returns a list of nodes distributed within this element that match
       * `selector`. These can be dom children or elements distributed to
       * children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of distributed elements that match selector.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */queryDistributedElements(selector){const thisEl=/** @type {Element} */this,domApi=/** @type {DomApi} */dom(thisEl);return domApi.queryDistributedElements(selector)}/**
       * Returns a list of elements that are the effective children. The effective
       * children list is the same as the element's children except that
       * any `<content>` elements are replaced with the list of elements
       * distributed to the `<content>`.
       *
       * @return {!Array<!Node>} List of effective children.
       */getEffectiveChildren(){let list=this.getEffectiveChildNodes();return list.filter(function(/** @type {!Node} */n){return n.nodeType===Node.ELEMENT_NODE})}/**
       * Returns a string of text content that is the concatenation of the
       * text content's of the element's effective childNodes (the elements
       * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
       *
       * @return {string} List of effective children.
       */getEffectiveTextContent(){let cn=this.getEffectiveChildNodes(),tc=[];for(let i=0,c;c=cn[i];i++){if(c.nodeType!==Node.COMMENT_NODE){tc.push(c.textContent)}}return tc.join("")}/**
       * Returns the first effective childNode within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {Node} First effective child node that matches selector.
       */queryEffectiveChildren(selector){let e$=this.queryDistributedElements(selector);return e$&&e$[0]}/**
       * Returns a list of effective childNodes within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of effective child nodes that match selector.
       */queryAllEffectiveChildren(selector){return this.queryDistributedElements(selector)}/**
       * Returns a list of nodes distributed to this element's `<slot>`.
       *
       * If this element contains more than one `<slot>` in its local DOM,
       * an optional selector may be passed to choose the desired content.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<slot>`.  Defaults to `content`.
       * @return {!Array<!Node>} List of distributed nodes for the `<slot>`.
       */getContentChildNodes(slctr){let content=this.root.querySelector(slctr||"slot");return content?/** @type {DomApi} */dom(content).getDistributedNodes():[]}/**
       * Returns a list of element children distributed to this element's
       * `<slot>`.
       *
       * If this element contains more than one `<slot>` in its
       * local DOM, an optional selector may be passed to choose the desired
       * content.  This method differs from `getContentChildNodes` in that only
       * elements are returned.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<content>`.  Defaults to `content`.
       * @return {!Array<!HTMLElement>} List of distributed nodes for the
       *   `<slot>`.
       * @suppress {invalidCasts}
       */getContentChildren(slctr){let children=/** @type {!Array<!HTMLElement>} */this.getContentChildNodes(slctr).filter(function(n){return n.nodeType===Node.ELEMENT_NODE});return children}/**
       * Checks whether an element is in this element's light DOM tree.
       *
       * @param {?Node} node The element to be checked.
       * @return {boolean} true if node is in this element's light DOM tree.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
       */isLightDescendant(node){const thisNode=/** @type {Node} */this;return thisNode!==node&&thisNode.contains(node)&&thisNode.getRootNode()===node.getRootNode()}/**
       * Checks whether an element is in this element's local DOM tree.
       *
       * @param {!Element} node The element to be checked.
       * @return {boolean} true if node is in this element's local DOM tree.
       */isLocalDescendant(node){return this.root===node.getRootNode()}/**
       * No-op for backwards compatibility. This should now be handled by
       * ShadyCss library.
       * @param  {*} container Unused
       * @param  {*} shouldObserve Unused
       * @return {void}
       */scopeSubtree(container,shouldObserve){}// eslint-disable-line no-unused-vars
/**
     * Returns the computed style value for the given property.
     * @param {string} property The css property name.
     * @return {string} Returns the computed css property value for the given
     * `property`.
     * @suppress {invalidCasts} LegacyElementMixin must be applied to an HTMLElement
     */getComputedStyleValue(property){return styleInterface.getComputedStyleValue(/** @type {!Element} */this,property)}// debounce
/**
     * Call `debounce` to collapse multiple requests for a named task into
     * one invocation which is made after the wait time has elapsed with
     * no new request.  If no wait time is given, the callback will be called
     * at microtask timing (guaranteed before paint).
     *
     *     debouncedClickAction(e) {
     *       // will not call `processClick` more than once per 100ms
     *       this.debounce('click', function() {
     *        this.processClick();
     *       } 100);
     *     }
     *
     * @param {string} jobName String to identify the debounce job.
     * @param {function():void} callback Function that is called (with `this`
     *   context) when the wait time elapses.
     * @param {number} wait Optional wait time in milliseconds (ms) after the
     *   last signal that must elapse before invoking `callback`
     * @return {!Object} Returns a debouncer object on which exists the
     * following methods: `isActive()` returns true if the debouncer is
     * active; `cancel()` cancels the debouncer if it is active;
     * `flush()` immediately invokes the debounced callback if the debouncer
     * is active.
     */debounce(jobName,callback,wait){this._debouncers=this._debouncers||{};return this._debouncers[jobName]=Debouncer.debounce(this._debouncers[jobName],0<wait?timeOut.after(wait):microTask,callback.bind(this))}/**
       * Returns whether a named debouncer is active.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {boolean} Whether the debouncer is active (has not yet fired).
       */isDebouncerActive(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];return!!(debouncer&&debouncer.isActive())}/**
       * Immediately calls the debouncer `callback` and inactivates it.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       */flushDebouncer(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];if(debouncer){debouncer.flush()}}/**
       * Cancels an active debouncer.  The `callback` will not be called.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       */cancelDebouncer(jobName){this._debouncers=this._debouncers||{};let debouncer=this._debouncers[jobName];if(debouncer){debouncer.cancel()}}/**
       * Runs a callback function asynchronously.
       *
       * By default (if no waitTime is specified), async callbacks are run at
       * microtask timing, which will occur before paint.
       *
       * @param {!Function} callback The callback function to run, bound to `this`.
       * @param {number=} waitTime Time to wait before calling the
       *   `callback`.  If unspecified or 0, the callback will be run at microtask
       *   timing (before paint).
       * @return {number} Handle that may be used to cancel the async job.
       */async(callback,waitTime){return 0<waitTime?timeOut.run(callback.bind(this),waitTime):~microTask.run(callback.bind(this))}/**
       * Cancels an async operation started with `async`.
       *
       * @param {number} handle Handle returned from original `async` call to
       *   cancel.
       * @return {void}
       */cancelAsync(handle){0>handle?microTask.cancel(~handle):timeOut.cancel(handle)}// other
/**
     * Convenience method for creating an element and configuring it.
     *
     * @param {string} tag HTML element tag to create.
     * @param {Object=} props Object of properties to configure on the
     *    instance.
     * @return {!Element} Newly created and configured element.
     */create(tag,props){let elt=document.createElement(tag);if(props){if(elt.setProperties){elt.setProperties(props)}else{for(let n in props){elt[n]=props[n]}}}return elt}/**
       * Polyfill for Element.prototype.matches, which is sometimes still
       * prefixed.
       *
       * @param {string} selector Selector to test.
       * @param {!Element=} node Element to test the selector against.
       * @return {boolean} Whether the element matches the selector.
       */elementMatches(selector,node){return matchesSelector(node||this,selector)}/**
       * Toggles an HTML attribute on or off.
       *
       * @param {string} name HTML attribute name
       * @param {boolean=} bool Boolean to force the attribute on or off.
       *    When unspecified, the state of the attribute will be reversed.
       * @return {boolean} true if the attribute now exists
       */toggleAttribute(name,bool){let node=/** @type {Element} */this;if(3===arguments.length){node=/** @type {Element} */arguments[2]}if(1==arguments.length){bool=!node.hasAttribute(name)}if(bool){node.setAttribute(name,"");return!0}else{node.removeAttribute(name);return!1}}/**
       * Toggles a CSS class on or off.
       *
       * @param {string} name CSS class name
       * @param {boolean=} bool Boolean to force the class on or off.
       *    When unspecified, the state of the class will be reversed.
       * @param {Element=} node Node to target.  Defaults to `this`.
       * @return {void}
       */toggleClass(name,bool,node){node=/** @type {Element} */node||this;if(1==arguments.length){bool=!node.classList.contains(name)}if(bool){node.classList.add(name)}else{node.classList.remove(name)}}/**
       * Cross-platform helper for setting an element's CSS `transform` property.
       *
       * @param {string} transformText Transform setting.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`
       * @return {void}
       */transform(transformText,node){node=/** @type {Element} */node||this;node.style.webkitTransform=transformText;node.style.transform=transformText}/**
       * Cross-platform helper for setting an element's CSS `translate3d`
       * property.
       *
       * @param {number} x X offset.
       * @param {number} y Y offset.
       * @param {number} z Z offset.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`.
       * @return {void}
       */translate3d(x,y,z,node){node=/** @type {Element} */node||this;this.transform("translate3d("+x+","+y+","+z+")",node)}/**
       * Removes an item from an array, if it exists.
       *
       * If the array is specified by path, a change notification is
       * generated, so that observers, data bindings and computed
       * properties watching that path can update.
       *
       * If the array is passed directly, **no change
       * notification is generated**.
       *
       * @param {string | !Array<number|string>} arrayOrPath Path to array from which to remove the item
       *   (or the array itself).
       * @param {*} item Item to remove.
       * @return {Array} Array containing item removed.
       */arrayDelete(arrayOrPath,item){let index;if(Array.isArray(arrayOrPath)){index=arrayOrPath.indexOf(item);if(0<=index){return arrayOrPath.splice(index,1)}}else{let arr=get(this,arrayOrPath);index=arr.indexOf(item);if(0<=index){return this.splice(arrayOrPath,index,1)}}return null}// logging
/**
     * Facades `console.log`/`warn`/`error` as override point.
     *
     * @param {string} level One of 'log', 'warn', 'error'
     * @param {Array} args Array of strings or objects to log
     * @return {void}
     */_logger(level,args){// accept ['foo', 'bar'] and [['foo', 'bar']]
if(Array.isArray(args)&&1===args.length&&Array.isArray(args[0])){args=args[0]}switch(level){case"log":case"warn":case"error":console[level](...args);}}/**
       * Facades `console.log` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */_log(...args){this._logger("log",args)}/**
       * Facades `console.warn` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */_warn(...args){this._logger("warn",args)}/**
       * Facades `console.error` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       */_error(...args){this._logger("error",args)}/**
       * Formats a message using the element type an a method name.
       *
       * @param {string} methodName Method name to associate with message
       * @param {...*} args Array of strings or objects to log
       * @return {Array} Array with formatting information for `console`
       *   logging.
       */_logf(methodName,...args){return["[%s::%s]",this.is,methodName,...args]}}LegacyElement.prototype.is="";return LegacyElement});_exports.LegacyElementMixin=LegacyElementMixin;var legacyElementMixin={LegacyElementMixin:LegacyElementMixin};_exports.$legacyElementMixin=legacyElementMixin;let metaProps={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,// meta objects
behaviors:!0};/**
    * Applies a "legacy" behavior or array of behaviors to the provided class.
    *
    * Note: this method will automatically also apply the `LegacyElementMixin`
    * to ensure that any legacy behaviors can rely on legacy Polymer API on
    * the underlying element.
    *
    * @function
    * @template T
    * @param {!Object|!Array<!Object>} behaviors Behavior object or array of behaviors.
    * @param {function(new:T)} klass Element class.
    * @return {?} Returns a new Element class extended by the
    * passed in `behaviors` and also by `LegacyElementMixin`.
    * @suppress {invalidCasts, checkTypes}
    */function mixinBehaviors(behaviors,klass){if(!behaviors){klass=/** @type {HTMLElement} */klass;// eslint-disable-line no-self-assign
return klass}// NOTE: ensure the behavior is extending a class with
// legacy element api. This is necessary since behaviors expect to be able
// to access 1.x legacy api.
klass=LegacyElementMixin(klass);if(!Array.isArray(behaviors)){behaviors=[behaviors]}let superBehaviors=klass.prototype.behaviors;// get flattened, deduped list of behaviors *not* already on super class
behaviors=flattenBehaviors(behaviors,null,superBehaviors);// mixin new behaviors
klass=_mixinBehaviors(behaviors,klass);if(superBehaviors){behaviors=superBehaviors.concat(behaviors)}// Set behaviors on prototype for BC...
klass.prototype.behaviors=behaviors;return klass}// NOTE:
// 1.x
// Behaviors were mixed in *in reverse order* and de-duped on the fly.
// The rule was that behavior properties were copied onto the element
// prototype if and only if the property did not already exist.
// Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
// (1), B, (2), A, (3) C. This means prototype properties win over
// B properties win over A win over C. This mirrors what would happen
// with inheritance if element extended B extended A extended C.
//
// Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
// `behaviors` array was [C, A, B].
// Behavior lifecycle methods were called in behavior array order
// followed by the element, e.g. (1) C.created, (2) A.created,
// (3) B.created, (4) element.created. There was no support for
// super, and "super-behavior" methods were callable only by name).
//
// 2.x
// Behaviors are made into proper mixins which live in the
// element's prototype chain. Behaviors are placed in the element prototype
// eldest to youngest and de-duped youngest to oldest:
// So, first [A, B, C, A, B] becomes [C, A, B] then,
// the element prototype becomes (oldest) (1) PolymerElement, (2) class(C),
// (3) class(A), (4) class(B), (5) class(Polymer({...})).
// Result:
// This means element properties win over B properties win over A win
// over C. (same as 1.x)
// If lifecycle is called (super then me), order is
// (1) C.created, (2) A.created, (3) B.created, (4) element.created
// (again same as 1.x)
function _mixinBehaviors(behaviors,klass){for(let i=0,b;i<behaviors.length;i++){b=behaviors[i];if(b){klass=Array.isArray(b)?_mixinBehaviors(b,klass):GenerateClassFromInfo(b,klass)}}return klass}/**
   * @param {Array} behaviors List of behaviors to flatten.
   * @param {Array=} list Target list to flatten behaviors into.
   * @param {Array=} exclude List of behaviors to exclude from the list.
   * @return {!Array} Returns the list of flattened behaviors.
   */function flattenBehaviors(behaviors,list,exclude){list=list||[];for(let i=behaviors.length-1,b;0<=i;i--){b=behaviors[i];if(b){if(Array.isArray(b)){flattenBehaviors(b,list)}else{// dedup
if(0>list.indexOf(b)&&(!exclude||0>exclude.indexOf(b))){list.unshift(b)}}}else{console.warn("behavior is null, check for missing or 404 import")}}return list}/**
   * @param {!PolymerInit} info Polymer info object
   * @param {function(new:HTMLElement)} Base base class to extend with info object
   * @return {function(new:HTMLElement)} Generated class
   * @suppress {checkTypes}
   * @private
   */function GenerateClassFromInfo(info,Base){/** @private */class PolymerGenerated extends Base{static get properties(){return info.properties}static get observers(){return info.observers}/**
       * @return {void}
       */created(){super.created();if(info.created){info.created.call(this)}}/**
       * @return {void}
       */_registered(){super._registered();/* NOTE: `beforeRegister` is called here for bc, but the behavior
                            is different than in 1.x. In 1.0, the method was called *after*
                            mixing prototypes together but *before* processing of meta-objects.
                            However, dynamic effects can still be set here and can be done either
                            in `beforeRegister` or `registered`. It is no longer possible to set
                            `is` in `beforeRegister` as you could in 1.x.
                           */if(info.beforeRegister){info.beforeRegister.call(Object.getPrototypeOf(this))}if(info.registered){info.registered.call(Object.getPrototypeOf(this))}}/**
       * @return {void}
       */_applyListeners(){super._applyListeners();if(info.listeners){for(let l in info.listeners){this._addMethodEventListenerToNode(this,l,info.listeners[l])}}}// note: exception to "super then me" rule;
// do work before calling super so that super attributes
// only apply if not already set.
/**
     * @return {void}
     */_ensureAttributes(){if(info.hostAttributes){for(let a in info.hostAttributes){this._ensureAttribute(a,info.hostAttributes[a])}}super._ensureAttributes()}/**
       * @return {void}
       */ready(){super.ready();if(info.ready){info.ready.call(this)}}/**
       * @return {void}
       */attached(){super.attached();if(info.attached){info.attached.call(this)}}/**
       * @return {void}
       */detached(){super.detached();if(info.detached){info.detached.call(this)}}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @return {void}
       */attributeChanged(name,old,value){super.attributeChanged(name,old,value);if(info.attributeChanged){info.attributeChanged.call(this,name,old,value)}}}PolymerGenerated.generatedFrom=info;for(let p in info){// NOTE: cannot copy `metaProps` methods onto prototype at least because
// `super.ready` must be called and is not included in the user fn.
if(!(p in metaProps)){let pd=Object.getOwnPropertyDescriptor(info,p);if(pd){Object.defineProperty(PolymerGenerated.prototype,p,pd)}}}return PolymerGenerated}/**
   * Generates a class that extends `LegacyElement` based on the
   * provided info object.  Metadata objects on the `info` object
   * (`properties`, `observers`, `listeners`, `behaviors`, `is`) are used
   * for Polymer's meta-programming systems, and any functions are copied
   * to the generated class.
   *
   * Valid "metadata" values are as follows:
   *
   * `is`: String providing the tag name to register the element under. In
   * addition, if a `dom-module` with the same id exists, the first template
   * in that `dom-module` will be stamped into the shadow root of this element,
   * with support for declarative event listeners (`on-...`), Polymer data
   * bindings (`[[...]]` and `{{...}}`), and id-based node finding into
   * `this.$`.
   *
   * `properties`: Object describing property-related metadata used by Polymer
   * features (key: property names, value: object containing property metadata).
   * Valid keys in per-property metadata include:
   * - `type` (String|Number|Object|Array|...): Used by
   *   `attributeChangedCallback` to determine how string-based attributes
   *   are deserialized to JavaScript property values.
   * - `notify` (boolean): Causes a change in the property to fire a
   *   non-bubbling event called `<property>-changed`. Elements that have
   *   enabled two-way binding to the property use this event to observe changes.
   * - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *   To set a read-only property, use the private setter method
   *   `_setProperty(property, value)`.
   * - `observer` (string): Observer method name that will be called when
   *   the property changes. The arguments of the method are
   *   `(value, previousValue)`.
   * - `computed` (string): String describing method and dependent properties
   *   for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *   Computed properties are read-only by default and can only be changed
   *   via the return value of the computing method.
   *
   * `observers`: Array of strings describing multi-property observer methods
   *  and their dependent properties (e.g. `'observeABC(a, b, c)'`).
   *
   * `listeners`: Object describing event listeners to be added to each
   *  instance of this element (key: event name, value: method name).
   *
   * `behaviors`: Array of additional `info` objects containing metadata
   * and callbacks in the same format as the `info` object here which are
   * merged into this element.
   *
   * `hostAttributes`: Object listing attributes to be applied to the host
   *  once created (key: attribute name, value: attribute value).  Values
   *  are serialized based on the type of the value.  Host attributes should
   *  generally be limited to attributes such as `tabIndex` and `aria-...`.
   *  Attributes in `hostAttributes` are only applied if a user-supplied
   *  attribute is not already present (attributes in markup override
   *  `hostAttributes`).
   *
   * In addition, the following Polymer-specific callbacks may be provided:
   * - `registered`: called after first instance of this element,
   * - `created`: called during `constructor`
   * - `attached`: called during `connectedCallback`
   * - `detached`: called during `disconnectedCallback`
   * - `ready`: called before first `attached`, after all properties of
   *   this element have been propagated to its template and all observers
   *   have run
   *
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @template T
   * @param {function(T):T} mixin Optional mixin to apply to legacy base class
   *   before extending with Polymer metaprogramming.
   * @return {function(new:HTMLElement)} Generated class
   */const Class=function(info,mixin){if(!info){console.warn(`Polymer's Class function requires \`info\` argument`)}const baseWithBehaviors=info.behaviors?// note: mixinBehaviors ensures `LegacyElementMixin`.
mixinBehaviors(info.behaviors,HTMLElement):LegacyElementMixin(HTMLElement),baseWithMixin=mixin?mixin(baseWithBehaviors):baseWithBehaviors,klass=GenerateClassFromInfo(info,baseWithMixin);// decorate klass with registration info
klass.is=info.is;return klass};_exports.Class=Class;var _class={mixinBehaviors:mixinBehaviors,Class:Class};_exports.$class=_class;const Polymer=function(info){// if input is a `class` (aka a function with a prototype), use the prototype
// remember that the `constructor` will never be called
let klass;if("function"===typeof info){klass=info}else{klass=Polymer.Class(info)}customElements.define(klass.is,/** @type {!HTMLElement} */klass);return klass};_exports.Polymer$1=_exports.Polymer=Polymer;Polymer.Class=Class;var polymerFn={Polymer:Polymer};_exports.$polymerFn=polymerFn;function mutablePropertyChange(inst,property,value,old,mutableData){let isObject;if(mutableData){isObject="object"===typeof value&&null!==value;// Pull `old` for Objects from temp cache, but treat `null` as a primitive
if(isObject){old=inst.__dataTemp[property]}}// Strict equality check, but return false for NaN===NaN
let shouldChange=old!==value&&(old===old||value===value);// Objects are stored in temporary cache (cleared at end of
// turn), which is used for dirty-checking
if(isObject&&shouldChange){inst.__dataTemp[property]=value}return shouldChange}/**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `PropertyEffects`
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this mixin or enable the
   * `OptionalMutableData` mixin.
   *
   * In order to make the dirty check strategy configurable, see
   * `OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   */const MutableData=dedupingMixin(superClass=>{/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_MutableData}
   */class MutableData extends superClass{/**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,!0)}}return MutableData});/**
     * Element class mixin to add the optional ability to skip strict
     * dirty-checking for objects and arrays (always consider them to be
     * "dirty") by setting a `mutable-data` attribute on an element instance.
     *
     * By default, `PropertyEffects` performs strict dirty checking on
     * objects, which means that any deep modifications to an object or array will
     * not be propagated unless "immutable" data patterns are used (i.e. all object
     * references from the root to the mutation were changed).
     *
     * Polymer also provides a proprietary data mutation and path notification API
     * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
     * mutation and notification of deep changes in an object graph to all elements
     * bound to the same object graph.
     *
     * In cases where neither immutable patterns nor the data mutation API can be
     * used, applying this mixin will allow Polymer to skip dirty checking for
     * objects and arrays (always consider them to be "dirty").  This allows a
     * user to make a deep modification to a bound object graph, and then either
     * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
     * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
     * elements that wish to be updated based on deep mutations must apply this
     * mixin or otherwise skip strict dirty checking for objects/arrays.
     * Specifically, any elements in the binding tree between the source of a
     * mutation and the consumption of it must enable this mixin or apply the
     * `MutableData` mixin.
     *
     * While this mixin adds the ability to forgo Object/Array dirty checking,
     * the `mutableData` flag defaults to false and must be set on the instance.
     *
     * Note, the performance characteristics of propagating large object graphs
     * will be worse by relying on `mutableData: true` as opposed to using
     * strict dirty checking with immutable patterns or Polymer's path notification
     * API.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin to optionally skip strict dirty-checking
     *   for objects and arrays
     */_exports.MutableData=MutableData;const OptionalMutableData=dedupingMixin(superClass=>{/**
   * @mixinClass
   * @polymer
   * @implements {Polymer_OptionalMutableData}
   */class OptionalMutableData extends superClass{static get properties(){return{/**
         * Instance-level flag for configuring the dirty-checking strategy
         * for this element.  When true, Objects and Arrays will skip dirty
         * checking, otherwise strict equality checking will be used.
         */mutableData:Boolean}}/**
       * Overrides `PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * When `this.mutableData` is true on this instance, this method
       * pulls the value to dirty check against from the `__dataTemp` cache
       * (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */_shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData)}}return OptionalMutableData});// Export for use by legacy behavior
_exports.OptionalMutableData=OptionalMutableData;MutableData._mutablePropertyChange=mutablePropertyChange;var mutableData={MutableData:MutableData,OptionalMutableData:OptionalMutableData};// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
_exports.$mutableData=mutableData;let newInstance=null;/**
                         * @constructor
                         * @extends {HTMLTemplateElement}
                         * @private
                         */function HTMLTemplateElementExtension(){return newInstance}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:!0}});/**
     * @constructor
     * @implements {Polymer_PropertyEffects}
     * @extends {HTMLTemplateElementExtension}
     * @private
     */const DataTemplate=PropertyEffects(HTMLTemplateElementExtension),MutableDataTemplate=MutableData(DataTemplate);/**
                                                                     * @constructor
                                                                     * @implements {Polymer_MutableData}
                                                                     * @extends {DataTemplate}
                                                                     * @private
                                                                     */ // Applies a DataTemplate subclass to a <template> instance
function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor;newInstance=null}/**
   * Base class for TemplateInstance.
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @private
   */const base=PropertyEffects(class{});/**
                                         * @polymer
                                         * @customElement
                                         * @appliesMixin PropertyEffects
                                         * @unrestricted
                                         */class TemplateInstanceBase extends base{constructor(props){super();this._configureProperties(props);this.root=this._stampTemplate(this.__dataHost);// Save list of stamped children
let children=this.children=[];for(let n=this.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=this}if(this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__){this._showHideChildren(!0)}// Flush props only when props are passed if instance props exist
// or when there isn't instance props.
let options=this.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){this._enableProperties()}}/**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     * @return {void}
     */_configureProperties(props){let options=this.__templatizeOptions;if(options.forwardHostProp){for(let hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost["_host_"+hprop])}}// Any instance props passed in the constructor will overwrite host props;
// normally this would be a user error but we don't specifically filter them
for(let iprop in props){this._setPendingProperty(iprop,props[iprop])}}/**
     * Forwards a host property to this instance.  This method should be
     * called on instances from the `options.forwardHostProp` callback
     * to propagate changes of host properties to each instance.
     *
     * Note this method enqueues the change, which are flushed as a batch.
     *
     * @param {string} prop Property or path name
     * @param {*} value Value of the property to forward
     * @return {void}
     */forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,!1,!0)){this.__dataHost._enqueueClient(this)}}/**
     * Override point for adding custom or simulated event handling.
     *
     * @override
     * @param {!Node} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     */_addEventListenerToNode(node,eventName,handler){if(this._methodHost&&this.__templatizeOptions.parentModel){// If this instance should be considered a parent model, decorate
// events this template instance as `model`
this._methodHost._addEventListenerToNode(node,eventName,e=>{e.model=this;handler(e)})}else{// Otherwise delegate to the template's host (which could be)
// another template instance
let templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler)}}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @param {boolean} hide Set to true to hide the children;
     * set to false to show them.
     * @return {void}
     * @protected
     */_showHideChildren(hide){let c=this.children;for(let i=0,n;i<c.length;i++){n=c[i];// Ignore non-changes
if(!!hide!=!!n.__hideTemplateChildren__){if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent=""}else{n.textContent=n.__polymerTextContent__}// remove and replace slot
}else if("slot"===n.localName){if(hide){n.__polymerReplaced__=document.createComment("hidden-slot");n.parentNode.replaceChild(n.__polymerReplaced__,n)}else{const replace=n.__polymerReplaced__;if(replace){replace.parentNode.replaceChild(n,replace)}}}else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display="none"}else{n.style.display=n.__polymerDisplay__}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide)}}}/**
     * Overrides default property-effects implementation to intercept
     * textContent bindings while children are "hidden" and cache in
     * private storage for later retrieval.
     *
     * @override
     * @param {!Node} node The node to set a property on
     * @param {string} prop The property to set
     * @param {*} value The value to set
     * @return {void}
     * @protected
     */_setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&"textContent"==prop){node.__polymerTextContent__=value}else{super._setUnmanagedPropertyToNode(node,prop,value)}}/**
     * Find the parent model of this template instance.  The parent model
     * is either another templatize instance that had option `parentModel: true`,
     * or else the host element.
     *
     * @return {!Polymer_PropertyEffects} The parent model of this instance
     */get parentModel(){let model=this.__parentModel;if(!model){let options;model=this;do{// A template instance's `__dataHost` is a <template>
// `model.__dataHost.__dataHost` is the template's host
model=model.__dataHost.__dataHost}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model}return model}/**
     * Stub of HTMLElement's `dispatchEvent`, so that effects that may
     * dispatch events safely no-op.
     *
     * @param {Event} event Event to dispatch
     * @return {boolean} Always true.
     */dispatchEvent(event){// eslint-disable-line no-unused-vars
return!0}}/** @type {!DataTemplate} */_exports.TemplateInstanceBase=TemplateInstanceBase;TemplateInstanceBase.prototype.__dataHost;/** @type {!TemplatizeOptions} */TemplateInstanceBase.prototype.__templatizeOptions;/** @type {!Polymer_PropertyEffects} */TemplateInstanceBase.prototype._methodHost;/** @type {!Object} */TemplateInstanceBase.prototype.__templatizeOwner;/** @type {!Object} */TemplateInstanceBase.prototype.__hostProps;/**
                                             * @constructor
                                             * @extends {TemplateInstanceBase}
                                             * @implements {Polymer_MutableData}
                                             * @private
                                             */const MutableTemplateInstanceBase=MutableData(TemplateInstanceBase);function findMethodHost(template){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
let templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost}/* eslint-disable valid-jsdoc */ /**
                                    * @suppress {missingProperties} class.prototype is not defined for some reason
                                    */function createTemplatizerClass(template,templateInfo,options){// Anonymous class created by the templatize
let base=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase,klass=class extends base{};/**
                                                                                        * @constructor
                                                                                        * @extends {base}
                                                                                        * @private
                                                                                        */klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass}/**
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */function addPropagateEffects(template,templateInfo,options){let userForwardHostProp=options.forwardHostProp;if(userForwardHostProp){// Provide data API and property effects on memoized template class
let klass=templateInfo.templatizeTemplateClass;if(!klass){let base=options.mutableData?MutableDataTemplate:DataTemplate;/** @private */klass=templateInfo.templatizeTemplateClass=class TemplatizedTemplate extends base{};// Add template - >instances effects
// and host <- template effects
let hostProps=templateInfo.hostProps;for(let prop in hostProps){klass.prototype._addPropertyEffect("_host_"+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty("_host_"+prop)}}upgradeTemplate(template,klass);// Mix any pre-bound data into __data; no need to flush this to
// instances since they pull from the template at instance-time
if(template.__dataProto){// Note, generally `__dataProto` could be chained, but it's guaranteed
// to not be since this is a vanilla template we just added effects to
Object.assign(template.__data,template.__dataProto)}// Clear any pending data for performance
template.__dataTemp={};template.__dataPending=null;template.__dataOld=null;template._enableProperties()}}/* eslint-enable valid-jsdoc */function createForwardHostPropEffect(hostProp,userForwardHostProp){return function forwardHostProp(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring("_host_".length),props[prop])}}function addNotifyEffects(klass,template,templateInfo,options){let hostProps=templateInfo.hostProps||{};for(let iprop in options.instanceProps){delete hostProps[iprop];let userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)})}}if(options.forwardHostProp&&template.__dataHost){for(let hprop in hostProps){klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()})}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function notifyInstanceProp(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop])}}function createNotifyHostPropEffect(){return function notifyHostProp(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath("_host_"+prop,props[prop],!0,!0)}}/**
   * Returns an anonymous `PropertyEffects` class bound to the
   * `<template>` provided.  Instancing the class will result in the
   * template being stamped into a document fragment stored as the instance's
   * `root` property, after which it can be appended to the DOM.
   *
   * Templates may utilize all Polymer data-binding features as well as
   * declarative event listeners.  Event listeners and inline computing
   * functions in the template will be called on the host of the template.
   *
   * The constructor returned takes a single argument dictionary of initial
   * property values to propagate into template bindings.  Additionally
   * host properties can be forwarded in, and instance properties can be
   * notified out by providing optional callbacks in the `options` dictionary.
   *
   * Valid configuration in `options` are as follows:
   *
   * - `forwardHostProp(property, value)`: Called when a property referenced
   *   in the template changed on the template's host. As this library does
   *   not retain references to templates instanced by the user, it is the
   *   templatize owner's responsibility to forward host property changes into
   *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
   *    method on the generated class should be called to forward host
   *   properties into the template to prevent unnecessary property-changed
   *   notifications. Any properties referenced in the template that are not
   *   defined in `instanceProps` will be notified up to the template's host
   *   automatically.
   * - `instanceProps`: Dictionary of property names that will be added
   *   to the instance by the templatize owner.  These properties shadow any
   *   host properties, and changes within the template to these properties
   *   will result in `notifyInstanceProp` being called.
   * - `mutableData`: When `true`, the generated class will skip strict
   *   dirty-checking for objects and arrays (always consider them to be
   *   "dirty").
   * - `notifyInstanceProp(instance, property, value)`: Called when
   *   an instance property changes.  Users may choose to call `notifyPath`
   *   on e.g. the owner to notify the change.
   * - `parentModel`: When `true`, events handled by declarative event listeners
   *   (`on-event="handler"`) will be decorated with a `model` property pointing
   *   to the template instance that stamped it.  It will also be returned
   *   from `instance.parentModel` in cases where template instance nesting
   *   causes an inner model to shadow an outer model.
   *
   * All callbacks are called bound to the `owner`. Any context
   * needed for the callbacks (such as references to `instances` stamped)
   * should be stored on the `owner` such that they can be retrieved via
   * `this`.
   *
   * When `options.forwardHostProp` is declared as an option, any properties
   * referenced in the template will be automatically forwarded from the host of
   * the `<template>` to instances, with the exception of any properties listed in
   * the `options.instanceProps` object.  `instanceProps` are assumed to be
   * managed by the owner of the instances, either passed into the constructor
   * or set after the fact.  Note, any properties passed into the constructor will
   * always be set to the instance (regardless of whether they would normally
   * be forwarded from the host).
   *
   * Note that `templatize()` can be run only once for a given `<template>`.
   * Further calls will result in an error. Also, there is a special
   * behavior if the template was duplicated through a mechanism such as
   * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
   * `templatize()` return the same class for all duplicates of a template.
   * The class returned from `templatize()` is generated only once using
   * the `options` from the first call. This means that any `options`
   * provided to subsequent calls will be ignored. Therefore, it is very
   * important not to close over any variables inside the callbacks. Also,
   * arrow functions must be avoided because they bind the outer `this`.
   * Inside the callbacks, any contextual information can be accessed
   * through `this`, which points to the `owner`.
   *
   * @param {!HTMLTemplateElement} template Template to templatize
   * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
   *   any optional callbacks will be bound to this owner.
   * @param {Object=} options Options dictionary (see summary for details)
   * @return {function(new:TemplateInstanceBase)} Generated class bound to the template
   *   provided
   * @suppress {invalidCasts}
   */function templatize(template,owner,options){// Under strictTemplatePolicy, the templatized element must be owned
// by a (trusted) Polymer element, indicated by existence of _methodHost;
// e.g. for dom-if & dom-repeat in main document, _methodHost is null
if(strictTemplatePolicy&&!findMethodHost(template)){throw new Error("strictTemplatePolicy: template owner not trusted")}options=/** @type {!TemplatizeOptions} */options||{};if(template.__templatizeOwner){throw new Error("A <template> can only be templatized once")}template.__templatizeOwner=owner;const ctor=owner?owner.constructor:TemplateInstanceBase;let templateInfo=ctor._parseTemplate(template),baseClass=templateInfo.templatizeInstanceClass;// Get memoized base class for the prototypical template, which
// includes property effects for binding template & forwarding
if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass}// Host property forwarding must be installed onto template instance
addPropagateEffects(template,templateInfo,options);// Subclass base class and add reference for this specific template
/** @private */let klass=class TemplateInstance extends baseClass{};klass.prototype._methodHost=findMethodHost(template);klass.prototype.__dataHost=template;klass.prototype.__templatizeOwner=owner;klass.prototype.__hostProps=templateInfo.hostProps;klass=/** @type {function(new:TemplateInstanceBase)} */klass;//eslint-disable-line no-self-assign
return klass}/**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model is an instance of
   * `TemplateInstanceBase`, and should be used to manipulate data
   * associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {HTMLTemplateElement} template The model will be returned for
   *   elements stamped from this template
   * @param {Node=} node Node for which to return a template model.
   * @return {TemplateInstanceBase} Template instance representing the
   *   binding scope for the element
   */function modelForElement(template,node){let model;while(node){// An element with a __templatizeInstance marks the top boundary
// of a scope; walk up until we find one, and then ensure that
// its __dataHost matches `this`, meaning this dom-repeat stamped it
if(model=node.__templatizeInstance){// Found an element stamped by another template; keep walking up
// from its __dataHost
if(model.__dataHost!=template){node=model.__dataHost}else{return model}}else{// Still in a template scope, keep going up until
// a __templatizeInstance is found
node=node.parentNode}}return null}var templatize$1={templatize:templatize,modelForElement:modelForElement,TemplateInstanceBase:TemplateInstanceBase};/**
    * @typedef {{
    *   _templatizerTemplate: HTMLTemplateElement,
    *   _parentModel: boolean,
    *   _instanceProps: Object,
    *   _forwardHostPropV2: Function,
    *   _notifyInstancePropV2: Function,
    *   ctor: TemplateInstanceBase
    * }}
    */_exports.$templatize=templatize$1;let TemplatizerUser;// eslint-disable-line
/**
 * The `Templatizer` behavior adds methods to generate instances of
 * templates that are each managed by an anonymous `PropertyEffects`
 * instance where data-bindings in the stamped template content are bound to
 * accessors on itself.
 *
 * This behavior is provided in Polymer 2.x-3.x as a hybrid-element convenience
 * only.  For non-hybrid usage, the `Templatize` library
 * should be used instead.
 *
 * Example:
 *
 *     import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';
 *     // Get a template from somewhere, e.g. light DOM
 *     let template = this.querySelector('template');
 *     // Prepare the template
 *     this.templatize(template);
 *     // Instance the template with an initial data model
 *     let instance = this.stamp({myProp: 'initial'});
 *     // Insert the instance's DOM somewhere, e.g. light DOM
 *     dom(this).appendChild(instance.root);
 *     // Changing a property on the instance will propagate to bindings
 *     // in the template
 *     instance.myProp = 'new value';
 *
 * Users of `Templatizer` may need to implement the following abstract
 * API's to determine how properties and paths from the host should be
 * forwarded into to instances:
 *
 *     _forwardHostPropV2: function(prop, value)
 *
 * Likewise, users may implement these additional abstract API's to determine
 * how instance-specific properties that change on the instance should be
 * forwarded out to the host, if necessary.
 *
 *     _notifyInstancePropV2: function(inst, prop, value)
 *
 * In order to determine which properties are instance-specific and require
 * custom notification via `_notifyInstanceProp`, define an `_instanceProps`
 * object containing keys for each instance prop, for example:
 *
 *     _instanceProps: {
 *       item: true,
 *       index: true
 *     }
 *
 * Any properties used in the template that are not defined in _instanceProp
 * will be forwarded out to the Templatize `owner` automatically.
 *
 * Users may also implement the following abstract function to show or
 * hide any DOM generated using `stamp`:
 *
 *     _showHideChildren: function(shouldHide)
 *
 * Note that some callbacks are suffixed with `V2` in the Polymer 2.x behavior
 * as the implementations will need to differ from the callbacks required
 * by the 1.x Templatizer API due to changes in the `TemplateInstance` API
 * between versions 1.x and 2.x.
 *
 * @polymerBehavior
 */const Templatizer={/**
   * Generates an anonymous `TemplateInstance` class (stored as `this.ctor`)
   * for the provided template.  This method should be called once per
   * template to prepare an element for stamping the template, followed
   * by `stamp` to create new instances of the template.
   *
   * @param {!HTMLTemplateElement} template Template to prepare
   * @param {boolean=} mutableData When `true`, the generated class will skip
   *   strict dirty-checking for objects and arrays (always consider them to
   *   be "dirty"). Defaults to false.
   * @return {void}
   * @this {TemplatizerUser}
   */templatize(template,mutableData){this._templatizerTemplate=template;this.ctor=templatize(template,this,{mutableData:!!mutableData,parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},/**
   * Creates an instance of the template prepared by `templatize`.  The object
   * returned is an instance of the anonymous class generated by `templatize`
   * whose `root` property is a document fragment containing newly cloned
   * template content, and which has property accessors corresponding to
   * properties referenced in template bindings.
   *
   * @param {Object=} model Object containing initial property values to
   *   populate into the template bindings.
   * @return {TemplateInstanceBase} Returns the created instance of
   * the template prepared by `templatize`.
   * @this {TemplatizerUser}
   */stamp(model){return new this.ctor(model)},/**
   * Returns the template "model" (`TemplateInstance`) associated with
   * a given element, which serves as the binding scope for the template
   * instance the element is contained in.  A template model should be used
   * to manipulate data associated with this template instance.
   *
   * @param {HTMLElement} el Element for which to return a template model.
   * @return {TemplateInstanceBase} Model representing the binding scope for
   *   the element.
   * @this {TemplatizerUser}
   */modelForElement(el){return modelForElement(this._templatizerTemplate,el)}};_exports.Templatizer=Templatizer;var templatizerBehavior={Templatizer:Templatizer};_exports.$templatizerBehavior=templatizerBehavior;const domBindBase=GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement)));/**
                                                                                               * Custom element to allow using Polymer's template features (data binding,
                                                                                               * declarative event listeners, etc.) in the main document without defining
                                                                                               * a new custom element.
                                                                                               *
                                                                                               * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
                                                                                               * element, which will immediately stamp the wrapped template into the main
                                                                                               * document and bind elements to the `dom-bind` element itself as the
                                                                                               * binding scope.
                                                                                               *
                                                                                               * @polymer
                                                                                               * @customElement
                                                                                               * @appliesMixin PropertyEffects
                                                                                               * @appliesMixin OptionalMutableData
                                                                                               * @appliesMixin GestureEventListeners
                                                                                               * @extends {domBindBase}
                                                                                               * @summary Custom element to allow using Polymer's template features (data
                                                                                               *   binding, declarative event listeners, etc.) in the main document.
                                                                                               */class DomBind extends domBindBase{static get observedAttributes(){return["mutable-data"]}constructor(){super();if(strictTemplatePolicy){throw new Error(`strictTemplatePolicy: dom-bind not allowed`)}this.root=null;this.$=null;this.__children=null}/**
     * @override
     * @return {void}
     */attributeChangedCallback(){// assumes only one observed attribute
this.mutableData=!0}/**
     * @override
     * @return {void}
     */connectedCallback(){this.style.display="none";this.render()}/**
     * @override
     * @return {void}
     */disconnectedCallback(){this.__removeChildren()}__insertChildren(){this.parentNode.insertBefore(this.root,this)}__removeChildren(){if(this.__children){for(let i=0;i<this.__children.length;i++){this.root.appendChild(this.__children[i])}}}/**
     * Forces the element to render its content. This is typically only
     * necessary to call if HTMLImports with the async attribute are used.
     * @return {void}
     */render(){let template;if(!this.__children){template=/** @type {HTMLTemplateElement} */template||this.querySelector("template");if(!template){// Wait until childList changes and template should be there by then
let observer=new MutationObserver(()=>{template=/** @type {HTMLTemplateElement} */this.querySelector("template");if(template){observer.disconnect();this.render()}else{throw new Error("dom-bind requires a <template> child")}});observer.observe(this,{childList:!0});return}this.root=this._stampTemplate(/** @type {!HTMLTemplateElement} */template);this.$=this.root.$;this.__children=[];for(let n=this.root.firstChild;n;n=n.nextSibling){this.__children[this.__children.length]=n}this._enableProperties()}this.__insertChildren();this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}_exports.DomBind=DomBind;customElements.define("dom-bind",DomBind);var domBind={DomBind:DomBind};_exports.$domBind=domBind;class LiteralString{constructor(string){/** @type {string} */this.value=string.toString()}/**
     * @return {string} LiteralString string value
     * @override
     */toString(){return this.value}}/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function literalValue(value){if(value instanceof LiteralString){return(/** @type {!LiteralString} */value.value)}else{throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${value}`)}}/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function htmlValue(value){if(value instanceof HTMLTemplateElement){return(/** @type {!HTMLTemplateElement } */value.innerHTML)}else if(value instanceof LiteralString){return literalValue(value)}else{throw new Error(`non-template value passed to Polymer's html function: ${value}`)}}/**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>:host{ content:"..." }</style>
   *         <div class="shadowed">${this.partialTemplate}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get partialTemplate() { return html`<span>Partial!</span>`; }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */const html=function html(strings,...values){const template=/** @type {!HTMLTemplateElement} */document.createElement("template");template.innerHTML=values.reduce((acc,v,idx)=>acc+htmlValue(v)+strings[idx+1],strings[0]);return template};/**
    * An html literal tag that can be used with `html` to compose.
    * a literal string.
    *
    * Example:
    *
    *     static get template() {
    *       return html`
    *         <style>
    *           :host { display: block; }
    *           ${this.styleTemplate()}
    *         </style>
    *         <div class="shadowed">${staticValue}</div>
    *         ${super.template}
    *       `;
    *     }
    *     static get styleTemplate() {
    *        return htmlLiteral`.shadowed { background: gray; }`;
    *     }
    *
    * @param {!ITemplateArray} strings Constant parts of tagged template literal
    * @param {...*} values Variable parts of tagged template literal
    * @return {!LiteralString} Constructed literal string
    */_exports.html$2=_exports.html$1=_exports.html=html;const htmlLiteral=function(strings,...values){return new LiteralString(values.reduce((acc,v,idx)=>acc+literalValue(v)+strings[idx+1],strings[0]))};_exports.htmlLiteral=htmlLiteral;var htmlTag={html:html,htmlLiteral:htmlLiteral};_exports.$htmlTag=htmlTag;const PolymerElement=ElementMixin(HTMLElement);_exports.PolymerElement=PolymerElement;var polymerElement={version:version,PolymerElement:PolymerElement,html:html};_exports.$polymerElement=polymerElement;const domRepeatBase=OptionalMutableData(PolymerElement);/**
                                                            * The `<dom-repeat>` element will automatically stamp and binds one instance
                                                            * of template content to each object in a user-provided array.
                                                            * `dom-repeat` accepts an `items` property, and one instance of the template
                                                            * is stamped for each item into the DOM at the location of the `dom-repeat`
                                                            * element.  The `item` property will be set on each instance's binding
                                                            * scope, thus templates should bind to sub-properties of `item`.
                                                            *
                                                            * Example:
                                                            *
                                                            * ```html
                                                            * <dom-module id="employee-list">
                                                            *
                                                            *   <template>
                                                            *
                                                            *     <div> Employee list: </div>
                                                            *     <dom-repeat items="{{employees}}">
                                                            *       <template>
                                                            *         <div>First name: <span>{{item.first}}</span></div>
                                                            *         <div>Last name: <span>{{item.last}}</span></div>
                                                            *       </template>
                                                            *     </dom-repeat>
                                                            *
                                                            *   </template>
                                                            *
                                                            * </dom-module>
                                                            * ```
                                                            *
                                                            * With the following custom element definition:
                                                            *
                                                            * ```js
                                                            * class EmployeeList extends PolymerElement {
                                                            *   static get is() { return 'employee-list'; }
                                                            *   static get properties() {
                                                            *     return {
                                                            *       employees: {
                                                            *         value() {
                                                            *           return [
                                                            *             {first: 'Bob', last: 'Smith'},
                                                            *             {first: 'Sally', last: 'Johnson'},
                                                            *             ...
                                                            *           ];
                                                            *         }
                                                            *       }
                                                            *     };
                                                            *   }
                                                            * }
                                                            * ```
                                                            *
                                                            * Notifications for changes to items sub-properties will be forwarded to template
                                                            * instances, which will update via the normal structured data notification system.
                                                            *
                                                            * Mutations to the `items` array itself should be made using the Array
                                                            * mutation API's on the PropertyEffects mixin (`push`, `pop`, `splice`,
                                                            * `shift`, `unshift`), and template instances will be kept in sync with the
                                                            * data in the array.
                                                            *
                                                            * Events caught by event handlers within the `dom-repeat` template will be
                                                            * decorated with a `model` property, which represents the binding scope for
                                                            * each template instance.  The model should be used to manipulate data on the
                                                            * instance, for example `event.model.set('item.checked', true);`.
                                                            *
                                                            * Alternatively, the model for a template instance for an element stamped by
                                                            * a `dom-repeat` can be obtained using the `modelForElement` API on the
                                                            * `dom-repeat` that stamped it, for example
                                                            * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
                                                            * This may be useful for manipulating instance data of event targets obtained
                                                            * by event handlers on parents of the `dom-repeat` (event delegation).
                                                            *
                                                            * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
                                                            * `filter` and/or `sort` property.  This may be a string that names a function on
                                                            * the host, or a function may be assigned to the property directly.  The functions
                                                            * should implemented following the standard `Array` filter/sort API.
                                                            *
                                                            * In order to re-run the filter or sort functions based on changes to sub-fields
                                                            * of `items`, the `observe` property may be set as a space-separated list of
                                                            * `item` sub-fields that should cause a re-filter/sort when modified.  If
                                                            * the filter or sort function depends on properties not contained in `items`,
                                                            * the user should observe changes to those properties and call `render` to update
                                                            * the view based on the dependency change.
                                                            *
                                                            * For example, for an `dom-repeat` with a filter of the following:
                                                            *
                                                            * ```js
                                                            * isEngineer(item) {
                                                            *   return item.type == 'engineer' || item.manager.type == 'engineer';
                                                            * }
                                                            * ```
                                                            *
                                                            * Then the `observe` property should be configured as follows:
                                                            *
                                                            * ```html
                                                            * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
                                                            * ```
                                                            *
                                                            * @customElement
                                                            * @polymer
                                                            * @extends {domRepeatBase}
                                                            * @appliesMixin OptionalMutableData
                                                            * @summary Custom element for stamping instance of a template bound to
                                                            *   items in an array.
                                                            */class DomRepeat extends domRepeatBase{// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
static get is(){return"dom-repeat"}static get template(){return null}static get properties(){/**
     * Fired whenever DOM is added or removed by this template (by
     * default, rendering occurs lazily).  To force immediate rendering, call
     * `render`.
     *
     * @event dom-change
     */return{/**
       * An array containing items determining how many instances of the template
       * to stamp and that that each template instance should bind to.
       */items:{type:Array},/**
       * The name of the variable to add to the binding scope for the array
       * element associated with a given template instance.
       */as:{type:String,value:"item"},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the sorted and filtered list of rendered items.
       * Note, for the index in the `this.items` array, use the value of the
       * `itemsIndexAs` property.
       */indexAs:{type:String,value:"index"},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the `this.items` array. Note, for the index of
       * this instance in the sorted and filtered list of rendered items,
       * use the value of the `indexAs` property.
       */itemsIndexAs:{type:String,value:"itemsIndex"},/**
       * A function that should determine the sort order of the items.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.sort`.
       * Using a sort function has no effect on the underlying `items` array.
       */sort:{type:Function,observer:"__sortChanged"},/**
       * A function that can be used to filter items out of the view.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.filter`.
       * Using a filter function has no effect on the underlying `items` array.
       */filter:{type:Function,observer:"__filterChanged"},/**
       * When using a `filter` or `sort` function, the `observe` property
       * should be set to a space-separated list of the names of item
       * sub-fields that should trigger a re-sort or re-filter when changed.
       * These should generally be fields of `item` that the sort or filter
       * function depends on.
       */observe:{type:String,observer:"__observeChanged"},/**
       * When using a `filter` or `sort` function, the `delay` property
       * determines a debounce time in ms after a change to observed item
       * properties that must pass before the filter or sort is re-run.
       * This is useful in rate-limiting shuffling of the view when
       * item changes may be frequent.
       */delay:Number,/**
       * Count of currently rendered items after `filter` (if any) has been applied.
       * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
       * set of template instances is rendered.
       *
       */renderedItemCount:{type:Number,notify:!0,readOnly:!0},/**
       * Defines an initial count of template instances to render after setting
       * the `items` array, before the next paint, and puts the `dom-repeat`
       * into "chunking mode".  The remaining items will be created and rendered
       * incrementally at each animation frame therof until all instances have
       * been rendered.
       */initialCount:{type:Number,observer:"__initializeChunking"},/**
       * When `initialCount` is used, this property defines a frame rate (in
       * fps) to target by throttling the number of instances rendered each
       * frame to not exceed the budget for the target frame rate.  The
       * framerate is effectively the number of `requestAnimationFrame`s that
       * it tries to allow to actually fire in a given second. It does this
       * by measuring the time between `rAF`s and continuously adjusting the
       * number of items created each `rAF` to maintain the target framerate.
       * Setting this to a higher number allows lower latency and higher
       * throughput for event handlers and other tasks, but results in a
       * longer time for the remaining items to complete rendering.
       */targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super();this.__instances=[];this.__limit=1/0;this.__pool=[];this.__renderDebouncer=null;this.__itemsIdxToInstIdx={};this.__chunkCount=null;this.__lastChunkTime=null;this.__sortFn=null;this.__filterFn=null;this.__observePaths=null;/** @type {?function(new:Polymer.TemplateInstanceBase, *)} */this.__ctor=null;this.__isDetached=!0;this.template=null}/**
     * @override
     * @return {void}
     */disconnectedCallback(){super.disconnectedCallback();this.__isDetached=!0;for(let i=0;i<this.__instances.length;i++){this.__detachInstance(i)}}/**
     * @override
     * @return {void}
     */connectedCallback(){super.connectedCallback();this.style.display="none";// only perform attachment if the element was previously detached.
if(this.__isDetached){this.__isDetached=!1;let parent=this.parentNode;for(let i=0;i<this.__instances.length;i++){this.__attachInstance(i,parent)}}}__ensureTemplatized(){// Templatizing (generating the instance constructor) needs to wait
// until ready, since won't have its template content handed back to
// it until then
if(!this.__ctor){let template=this.template=/** @type {HTMLTemplateElement} */this.querySelector("template");if(!template){// // Wait until childList changes and template should be there by then
let observer=new MutationObserver(()=>{if(this.querySelector("template")){observer.disconnect();this.__render()}else{throw new Error("dom-repeat requires a <template> child")}});observer.observe(this,{childList:!0});return!1}// Template instance props that should be excluded from forwarding
let instanceProps={};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.itemsIndexAs]=!0;this.__ctor=templatize(template,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:instanceProps,/**
         * @this {DomRepeat}
         * @param {string} prop Property to set
         * @param {*} value Value to set property to
         */forwardHostProp:function(prop,value){let i$=this.__instances;for(let i=0,inst;i<i$.length&&(inst=i$[i]);i++){inst.forwardHostProp(prop,value)}},/**
         * @this {DomRepeat}
         * @param {Object} inst Instance to notify
         * @param {string} prop Property to notify
         * @param {*} value Value to notify
         */notifyInstanceProp:function(inst,prop,value){if(matches(this.as,prop)){let idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value}let path=translate(this.as,"items."+idx,prop);this.notifyPath(path,value)}}})}return!0}__getMethodHost(){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(functionOrMethodName){if("string"===typeof functionOrMethodName){let methodName=functionOrMethodName,obj=this.__getMethodHost();return function(){return obj[methodName].apply(obj,arguments)}}return functionOrMethodName}__sortChanged(sort){this.__sortFn=this.__functionFromPropertyValue(sort);if(this.items){this.__debounceRender(this.__render)}}__filterChanged(filter){this.__filterFn=this.__functionFromPropertyValue(filter);if(this.items){this.__debounceRender(this.__render)}}__computeFrameTime(rate){return Math.ceil(1e3/rate)}__initializeChunking(){if(this.initialCount){this.__limit=this.initialCount;this.__chunkCount=this.initialCount;this.__lastChunkTime=performance.now()}}__tryRenderChunk(){// Debounced so that multiple calls through `_render` between animation
// frames only queue one new rAF (e.g. array mutation & chunked render)
if(this.items&&this.__limit<this.items.length){this.__debounceRender(this.__requestRenderChunk)}}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){// Simple auto chunkSize throttling algorithm based on feedback loop:
// measure actual time between frames and scale chunk count by ratio
// of target/actual frame time
let currChunkTime=performance.now(),ratio=this._targetFrameTime/(currChunkTime-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*ratio)||1;this.__limit+=this.__chunkCount;this.__lastChunkTime=currChunkTime;this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn("dom-repeat expected array for `items`, found",this.items)}// If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
// path to that instance synchronously (returns false for non-item paths)
if(!this.__handleItemPath(change.path,change.value)){// Otherwise, the array was reset ('items') or spliced ('items.splices'),
// so queue a full refresh
this.__initializeChunking();this.__debounceRender(this.__render)}}__handleObservedPaths(path){// Handle cases where path changes should cause a re-sort/filter
if(this.__sortFn||this.__filterFn){if(!path){// Always re-render if the item itself changed
this.__debounceRender(this.__render,this.delay)}else if(this.__observePaths){// Otherwise, re-render if the path changed matches an observed path
let paths=this.__observePaths;for(let i=0;i<paths.length;i++){if(0===path.indexOf(paths[i])){this.__debounceRender(this.__render,this.delay)}}}}}/**
     * @param {function(this:DomRepeat)} fn Function to debounce.
     * @param {number=} delay Delay in ms to debounce by.
     */__debounceRender(fn,delay=0){this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,0<delay?timeOut.after(delay):microTask,fn.bind(this));enqueueDebouncer(this.__renderDebouncer)}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */render(){// Queue this repeater, then flush all in order
this.__debounceRender(this.__render);flush$1()}__render(){if(!this.__ensureTemplatized()){// No template found yet
return}this.__applyFullRefresh();// Reset the pool
// TODO(kschaaf): Reuse pool across turns and nested templates
// Now that objects/arrays are re-evaluated when set, we can safely
// reuse pooled instances across turns, however we still need to decide
// semantics regarding how long to hold, how many to hold, etc.
this.__pool.length=0;// Set rendered item count
this._setRenderedItemCount(this.__instances.length);// Notify users
this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));// Check to see if we need to render more items
this.__tryRenderChunk()}__applyFullRefresh(){let items=this.items||[],isntIdxToItemsIdx=Array(items.length);for(let i=0;i<items.length;i++){isntIdxToItemsIdx[i]=i}// Apply user filter
if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter((i,idx,array)=>this.__filterFn(items[i],idx,array))}// Apply user sort
if(this.__sortFn){isntIdxToItemsIdx.sort((a,b)=>this.__sortFn(items[a],items[b]))}// items->inst map kept for item path forwarding
const itemsIdxToInstIdx=this.__itemsIdxToInstIdx={};let instIdx=0;// Generate instances and assign items
const limit=Math.min(isntIdxToItemsIdx.length,this.__limit);for(;instIdx<limit;instIdx++){let inst=this.__instances[instIdx],itemIdx=isntIdxToItemsIdx[instIdx],item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{this.__insertInstance(item,instIdx,itemIdx)}}// Remove any extra instances from previous state
for(let i=this.__instances.length-1;i>=instIdx;i--){this.__detachAndRemoveInstance(i)}}__detachInstance(idx){let inst=this.__instances[idx];for(let i=0,el;i<inst.children.length;i++){el=inst.children[i];inst.root.appendChild(el)}return inst}__attachInstance(idx,parent){let inst=this.__instances[idx];parent.insertBefore(inst.root,this)}__detachAndRemoveInstance(idx){let inst=this.__detachInstance(idx);if(inst){this.__pool.push(inst)}this.__instances.splice(idx,1)}__stampInstance(item,instIdx,itemIdx){let model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model)}__insertInstance(item,instIdx,itemIdx){let inst=this.__pool.pop();if(inst){// TODO(kschaaf): If the pool is shared across turns, hostProps
// need to be re-set to reused instances in addition to item
inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{inst=this.__stampInstance(item,instIdx,itemIdx)}let beforeRow=this.__instances[instIdx+1],beforeNode=beforeRow?beforeRow.children[0]:this;this.parentNode.insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst}// Implements extension point from Templatize mixin
/**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hidden Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */_showHideChildren(hidden){for(let i=0;i<this.__instances.length;i++){this.__instances[i]._showHideChildren(hidden)}}// Called as a side effect of a host items.<key>.<path> path change,
// responsible for notifying item.<path> changes to inst for key
__handleItemPath(path,value){let itemsPath=path.slice(6),dot=itemsPath.indexOf("."),itemsIdx=0>dot?itemsPath:itemsPath.substring(0,dot);// 'items.'.length == 6
// If path was index into array...
if(itemsIdx==parseInt(itemsIdx,10)){let itemSubPath=0>dot?"":itemsPath.substring(dot+1);// If the path is observed, it will trigger a full refresh
this.__handleObservedPaths(itemSubPath);// Note, even if a rull refresh is triggered, always do the path
// notification because unless mutableData is used for dom-repeat
// and all elements in the instance subtree, a full refresh may
// not trigger the proper update.
let instIdx=this.__itemsIdxToInstIdx[itemsIdx],inst=this.__instances[instIdx];if(inst){let itemPath=this.as+(itemSubPath?"."+itemSubPath:"");// This is effectively `notifyPath`, but avoids some of the overhead
// of the public API
inst._setPendingPropertyOrPath(itemPath,value,!1,!0);inst._flushProperties()}return!0}}/**
     * Returns the item associated with a given element stamped by
     * this `dom-repeat`.
     *
     * Note, to modify sub-properties of the item,
     * `modelForElement(el).set('item.<sub-prop>', value)`
     * should be used.
     *
     * @param {!HTMLElement} el Element for which to return the item.
     * @return {*} Item associated with the element.
     */itemForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.as]}/**
     * Returns the inst index for a given element stamped by this `dom-repeat`.
     * If `sort` is provided, the index will reflect the sorted order (rather
     * than the original array order).
     *
     * @param {!HTMLElement} el Element for which to return the index.
     * @return {?number} Row index associated with the element (note this may
     *   not correspond to the array index if a user `sort` is applied).
     */indexForElement(el){let instance=this.modelForElement(el);return instance&&instance[this.indexAs]}/**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model
     * should be used to manipulate data associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @param {!HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     */modelForElement(el){return modelForElement(this.template,el)}}_exports.DomRepeat=DomRepeat;customElements.define(DomRepeat.is,DomRepeat);var domRepeat={DomRepeat:DomRepeat};_exports.$domRepeat=domRepeat;class DomIf extends PolymerElement{// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
static get is(){return"dom-if"}static get template(){return null}static get properties(){return{/**
       * Fired whenever DOM is added or removed/hidden by this template (by
       * default, rendering occurs lazily).  To force immediate rendering, call
       * `render`.
       *
       * @event dom-change
       */ /**
           * A boolean indicating whether this template should stamp.
           */if:{type:Boolean,observer:"__debounceRender"},/**
       * When true, elements will be removed from DOM and discarded when `if`
       * becomes false and re-created and added back to the DOM when `if`
       * becomes true.  By default, stamped elements will be hidden but left
       * in the DOM when `if` becomes false, which is generally results
       * in better performance.
       */restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super();this.__renderDebouncer=null;this.__invalidProps=null;this.__instance=null;this._lastIf=!1;this.__ctor=null;this.__hideTemplateChildren__=!1}__debounceRender(){// Render is async for 2 reasons:
// 1. To eliminate dom creation trashing if user code thrashes `if` in the
//    same turn. This was more common in 1.x where a compound computed
//    property could result in the result changing multiple times, but is
//    mitigated to a large extent by batched property processing in 2.x.
// 2. To avoid double object propagation when a bag including values bound
//    to the `if` property as well as one or more hostProps could enqueue
//    the <dom-if> to flush before the <template>'s host property
//    forwarding. In that scenario creating an instance would result in
//    the host props being set once, and then the enqueued changes on the
//    template would set properties a second time, potentially causing an
//    object to be set to an instance more than once.  Creating the
//    instance async from flushing data ensures this doesn't happen. If
//    we wanted a sync option in the future, simply having <dom-if> flush
//    (or clear) its template's pending host properties before creating
//    the instance would also avoid the problem.
this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,microTask,()=>this.__render());enqueueDebouncer(this.__renderDebouncer)}/**
     * @override
     * @return {void}
     */disconnectedCallback(){super.disconnectedCallback();if(!this.parentNode||this.parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!this.parentNode.host){this.__teardownInstance()}}/**
     * @override
     * @return {void}
     */connectedCallback(){super.connectedCallback();this.style.display="none";if(this.if){this.__debounceRender()}}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */render(){flush$1()}__render(){if(this.if){if(!this.__ensureInstance()){// No template found yet
return}this._showHideChildren()}else if(this.restamp){this.__teardownInstance()}if(!this.restamp&&this.__instance){this._showHideChildren()}if(this.if!=this._lastIf){this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));this._lastIf=this.if}}__ensureInstance(){let parentNode=this.parentNode;// Guard against element being detached while render was queued
if(parentNode){if(!this.__ctor){let template=/** @type {HTMLTemplateElement} */this.querySelector("template");if(!template){// Wait until childList changes and template should be there by then
let observer=new MutationObserver(()=>{if(this.querySelector("template")){observer.disconnect();this.__render()}else{throw new Error("dom-if requires a <template> child")}});observer.observe(this,{childList:!0});return!1}this.__ctor=templatize(template,this,{// dom-if templatizer instances require `mutable: true`, as
// `__syncHostProperties` relies on that behavior to sync objects
mutableData:!0,/**
           * @param {string} prop Property to forward
           * @param {*} value Value of property
           * @this {DomIf}
           */forwardHostProp:function(prop,value){if(this.__instance){if(this.if){this.__instance.forwardHostProp(prop,value)}else{// If we have an instance but are squelching host property
// forwarding due to if being false, note the invalidated
// properties so `__syncHostProperties` can sync them the next
// time `if` becomes true
this.__invalidProps=this.__invalidProps||Object.create(null);this.__invalidProps[root(prop)]=!0}}}})}if(!this.__instance){this.__instance=new this.__ctor;parentNode.insertBefore(this.__instance.root,this)}else{this.__syncHostProperties();let c$=this.__instance.children;if(c$&&c$.length){// Detect case where dom-if was re-attached in new position
let lastChild=this.previousSibling;if(lastChild!==c$[c$.length-1]){for(let i=0,n;i<c$.length&&(n=c$[i]);i++){parentNode.insertBefore(n,this)}}}}}return!0}__syncHostProperties(){let props=this.__invalidProps;if(props){for(let prop in props){this.__instance._setPendingProperty(prop,this.__dataHost[prop])}this.__invalidProps=null;this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let c$=this.__instance.children;if(c$&&c$.length){// use first child parent, for case when dom-if may have been detached
let parent=c$[0].parentNode;// Instance children may be disconnected from parents when dom-if
// detaches if a tree was innerHTML'ed
if(parent){for(let i=0,n;i<c$.length&&(n=c$[i]);i++){parent.removeChild(n)}}}this.__instance=null;this.__invalidProps=null}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @return {void}
     * @protected
     * @suppress {visibility}
     */_showHideChildren(){let hidden=this.__hideTemplateChildren__||!this.if;if(this.__instance){this.__instance._showHideChildren(hidden)}}}_exports.DomIf=DomIf;customElements.define(DomIf.is,DomIf);var domIf={DomIf:DomIf};_exports.$domIf=domIf;let ArraySelectorMixin=dedupingMixin(superClass=>{/**
   * @constructor
   * @extends {superClass}
   * @implements {Polymer_ElementMixin}
   * @private
   */let elementBase=ElementMixin(superClass);/**
                                                  * @polymer
                                                  * @mixinClass
                                                  * @implements {Polymer_ArraySelectorMixin}
                                                  * @unrestricted
                                                  */class ArraySelectorMixin extends elementBase{static get properties(){return{/**
         * An array containing items from which selection will be made.
         */items:{type:Array},/**
         * When `true`, multiple items may be selected at once (in this case,
         * `selected` is an array of currently selected items).  When `false`,
         * only one item may be selected at a time.
         */multi:{type:Boolean,value:!1},/**
         * When `multi` is true, this is an array that contains any selected.
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?(Object|Array<!Object>)}
         */selected:{type:Object,notify:!0},/**
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?Object}
         */selectedItem:{type:Object,notify:!0},/**
         * When `true`, calling `select` on an item that is already selected
         * will deselect the item.
         */toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super();this.__lastItems=null;this.__lastMulti=null;this.__selectedMap=null}__updateSelection(multi,itemsInfo){let path=itemsInfo.path;if("items"==path){// Case 1 - items array changed, so diff against previous array and
// deselect any removed items and adjust selected indices
let newItems=itemsInfo.base||[],lastItems=this.__lastItems,lastMulti=this.__lastMulti;if(multi!==lastMulti){this.clearSelection()}if(lastItems){let splices=calculateSplices(newItems,lastItems);this.__applySplices(splices)}this.__lastItems=newItems;this.__lastMulti=multi}else if("items.splices"==itemsInfo.path){// Case 2 - got specific splice information describing the array mutation:
// deselect any removed items and adjust selected indices
this.__applySplices(itemsInfo.value.indexSplices)}else{// Case 3 - an array element was changed, so deselect the previous
// item for that index if it was previously selected
let part=path.slice("items.".length),idx=parseInt(part,10);if(0>part.indexOf(".")&&part==idx){this.__deselectChangedIdx(idx)}}}__applySplices(splices){let selected=this.__selectedMap;// Adjust selected indices and mark removals
for(let i=0,s;i<splices.length;i++){s=splices[i];selected.forEach((idx,item)=>{if(idx<s.index){// no change
}else if(idx>=s.index+s.removed.length){// adjust index
selected.set(item,idx+s.addedCount-s.removed.length)}else{// remove index
selected.set(item,-1)}});for(let j=0,idx;j<s.addedCount;j++){idx=s.index+j;if(selected.has(this.items[idx])){selected.set(this.items[idx],idx)}}}// Update linked paths
this.__updateLinks();// Remove selected items that were removed from the items array
let sidx=0;selected.forEach((idx,item)=>{if(0>idx){if(this.multi){this.splice("selected",sidx,1)}else{this.selected=this.selectedItem=null}selected.delete(item)}else{sidx++}})}__updateLinks(){this.__dataLinkedPaths={};if(this.multi){let sidx=0;this.__selectedMap.forEach(idx=>{if(0<=idx){this.linkPaths("items."+idx,"selected."+sidx++)}})}else{this.__selectedMap.forEach(idx=>{this.linkPaths("selected","items."+idx);this.linkPaths("selectedItem","items."+idx)})}}/**
       * Clears the selection state.
       * @return {void}
       */clearSelection(){// Unbind previous selection
this.__dataLinkedPaths={};// The selected map stores 3 pieces of information:
// key: items array object
// value: items array index
// order: selected array index
this.__selectedMap=new Map;// Initialize selection
this.selected=this.multi?[]:null;this.selectedItem=null}/**
       * Returns whether the item is currently selected.
       *
       * @param {*} item Item from `items` array to test
       * @return {boolean} Whether the item is selected
       */isSelected(item){return this.__selectedMap.has(item)}/**
       * Returns whether the item is currently selected.
       *
       * @param {number} idx Index from `items` array to test
       * @return {boolean} Whether the item is selected
       */isIndexSelected(idx){return this.isSelected(this.items[idx])}__deselectChangedIdx(idx){let sidx=this.__selectedIndexForItemIndex(idx);if(0<=sidx){let i=0;this.__selectedMap.forEach((idx,item)=>{if(sidx==i++){this.deselect(item)}})}}__selectedIndexForItemIndex(idx){let selected=this.__dataLinkedPaths["items."+idx];if(selected){return parseInt(selected.slice("selected.".length),10)}}/**
       * Deselects the given item if it is already selected.
       *
       * @param {*} item Item from `items` array to deselect
       * @return {void}
       */deselect(item){let idx=this.__selectedMap.get(item);if(0<=idx){this.__selectedMap.delete(item);let sidx;if(this.multi){sidx=this.__selectedIndexForItemIndex(idx)}this.__updateLinks();if(this.multi){this.splice("selected",sidx,1)}else{this.selected=this.selectedItem=null}}}/**
       * Deselects the given index if it is already selected.
       *
       * @param {number} idx Index from `items` array to deselect
       * @return {void}
       */deselectIndex(idx){this.deselect(this.items[idx])}/**
       * Selects the given item.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @param {*} item Item from `items` array to select
       * @return {void}
       */select(item){this.selectIndex(this.items.indexOf(item))}/**
       * Selects the given index.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @param {number} idx Index from `items` array to select
       * @return {void}
       */selectIndex(idx){let item=this.items[idx];if(!this.isSelected(item)){if(!this.multi){this.__selectedMap.clear()}this.__selectedMap.set(item,idx);this.__updateLinks();if(this.multi){this.push("selected",item)}else{this.selected=this.selectedItem=item}}else if(this.toggle){this.deselectIndex(idx)}}}return ArraySelectorMixin});// export mixin
_exports.ArraySelectorMixin=ArraySelectorMixin;let baseArraySelector=ArraySelectorMixin(PolymerElement);/**
                                                             * Element implementing the `ArraySelector` mixin, which records
                                                             * dynamic associations between item paths in a master `items` array and a
                                                             * `selected` array such that path changes to the master array (at the host)
                                                             * element or elsewhere via data-binding) are correctly propagated to items
                                                             * in the selected array and vice-versa.
                                                             *
                                                             * The `items` property accepts an array of user data, and via the
                                                             * `select(item)` and `deselect(item)` API, updates the `selected` property
                                                             * which may be bound to other parts of the application, and any changes to
                                                             * sub-fields of `selected` item(s) will be kept in sync with items in the
                                                             * `items` array.  When `multi` is false, `selected` is a property
                                                             * representing the last selected item.  When `multi` is true, `selected`
                                                             * is an array of multiply selected items.
                                                             *
                                                             * Example:
                                                             *
                                                             * ```js
                                                             * import {PolymerElement} from '@polymer/polymer';
                                                             * import '@polymer/polymer/lib/elements/array-selector.js';
                                                             *
                                                             * class EmployeeList extends PolymerElement {
                                                             *   static get _template() {
                                                             *     return html`
                                                             *         <div> Employee list: </div>
                                                             *         <dom-repeat id="employeeList" items="{{employees}}">
                                                             *           <template>
                                                             *             <div>First name: <span>{{item.first}}</span></div>
                                                             *               <div>Last name: <span>{{item.last}}</span></div>
                                                             *               <button on-click="toggleSelection">Select</button>
                                                             *           </template>
                                                             *         </dom-repeat>
                                                             *
                                                             *         <array-selector id="selector"
                                                             *                         items="{{employees}}"
                                                             *                         selected="{{selected}}"
                                                             *                         multi toggle></array-selector>
                                                             *
                                                             *         <div> Selected employees: </div>
                                                             *         <dom-repeat items="{{selected}}">
                                                             *           <template>
                                                             *             <div>First name: <span>{{item.first}}</span></div>
                                                             *             <div>Last name: <span>{{item.last}}</span></div>
                                                             *           </template>
                                                             *         </dom-repeat>`;
                                                             *   }
                                                             *   static get is() { return 'employee-list'; }
                                                             *   static get properties() {
                                                             *     return {
                                                             *       employees: {
                                                             *         value() {
                                                             *           return [
                                                             *             {first: 'Bob', last: 'Smith'},
                                                             *             {first: 'Sally', last: 'Johnson'},
                                                             *             ...
                                                             *           ];
                                                             *         }
                                                             *       }
                                                             *     };
                                                             *   }
                                                             *   toggleSelection(e) {
                                                             *     const item = this.$.employeeList.itemForElement(e.target);
                                                             *     this.$.selector.select(item);
                                                             *   }
                                                             * }
                                                             * ```
                                                             *
                                                             * @polymer
                                                             * @customElement
                                                             * @extends {baseArraySelector}
                                                             * @appliesMixin ArraySelectorMixin
                                                             * @summary Custom element that links paths between an input `items` array and
                                                             *   an output `selected` item or array based on calls to its selection API.
                                                             */class ArraySelector extends baseArraySelector{// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
static get is(){return"array-selector"}}_exports.ArraySelector=ArraySelector;customElements.define(ArraySelector.is,ArraySelector);var arraySelector={ArraySelectorMixin:ArraySelectorMixin,ArraySelector:ArraySelector};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$arraySelector=arraySelector;"use strict";const customStyleInterface$1=new CustomStyleInterface;if(!window.ShadyCSS){window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
     * @param {Element} element
     * @param {Object=} properties
     */styleSubtree(element,properties){customStyleInterface$1.processStyles();updateNativeProperties(element,properties)},/**
     * @param {Element} element
     */styleElement(element){// eslint-disable-line no-unused-vars
customStyleInterface$1.processStyles()},/**
     * @param {Object=} properties
     */styleDocument(properties){customStyleInterface$1.processStyles();updateNativeProperties(document.body,properties)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue(element,property){return getComputedStyleValue(element,property)},flushCustomStyles(){},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild}}window.ShadyCSS.CustomStyleInterface=customStyleInterface$1;const attr="include",CustomStyleInterface$1=window.ShadyCSS.CustomStyleInterface;/**
                                                                     * Custom element for defining styles in the main document that can take
                                                                     * advantage of [shady DOM](https://github.com/webcomponents/shadycss) shims
                                                                     * for style encapsulation, custom properties, and custom mixins.
                                                                     *
                                                                     * - Document styles defined in a `<custom-style>` are shimmed to ensure they
                                                                     *   do not leak into local DOM when running on browsers without native
                                                                     *   Shadow DOM.
                                                                     * - Custom properties can be defined in a `<custom-style>`. Use the `html` selector
                                                                     *   to define custom properties that apply to all custom elements.
                                                                     * - Custom mixins can be defined in a `<custom-style>`, if you import the optional
                                                                     *   [apply shim](https://github.com/webcomponents/shadycss#about-applyshim)
                                                                     *   (`shadycss/apply-shim.html`).
                                                                     *
                                                                     * To use:
                                                                     *
                                                                     * - Import `custom-style.html`.
                                                                     * - Place a `<custom-style>` element in the main document, wrapping an inline `<style>` tag that
                                                                     *   contains the CSS rules you want to shim.
                                                                     *
                                                                     * For example:
                                                                     *
                                                                     * ```html
                                                                     * <!-- import apply shim--only required if using mixins -->
                                                                     * <link rel="import" href="bower_components/shadycss/apply-shim.html">
                                                                     * <!-- import custom-style element -->
                                                                     * <link rel="import" href="bower_components/polymer/lib/elements/custom-style.html">
                                                                     *
                                                                     * <custom-style>
                                                                     *   <style>
                                                                     *     html {
                                                                     *       --custom-color: blue;
                                                                     *       --custom-mixin: {
                                                                     *         font-weight: bold;
                                                                     *         color: red;
                                                                     *       };
                                                                     *     }
                                                                     *   </style>
                                                                     * </custom-style>
                                                                     * ```
                                                                     *
                                                                     * @customElement
                                                                     * @extends HTMLElement
                                                                     * @summary Custom element for defining styles in the main document that can
                                                                     *   take advantage of Polymer's style scoping and custom properties shims.
                                                                     */class CustomStyle extends HTMLElement{constructor(){super();this._style=null;CustomStyleInterface$1.addCustomStyle(this)}/**
     * Returns the light-DOM `<style>` child this element wraps.  Upon first
     * call any style modules referenced via the `include` attribute will be
     * concatenated to this element's `<style>`.
     *
     * @export
     * @return {HTMLStyleElement} This element's light-DOM `<style>`
     */getStyle(){if(this._style){return this._style}const style=/** @type {HTMLStyleElement} */this.querySelector("style");if(!style){return null}this._style=style;const include=style.getAttribute(attr);if(include){style.removeAttribute(attr);style.textContent=cssFromModules(include)+style.textContent}/*
      HTML Imports styling the main document are deprecated in Chrome
      https://crbug.com/523952
       If this element is not in the main document, then it must be in an HTML Import document.
      In that case, move the custom style to the main document.
       The ordering of `<custom-style>` should stay the same as when loaded by HTML Imports, but there may be odd
      cases of ordering w.r.t the main document styles.
      */if(this.ownerDocument!==window.document){window.document.head.appendChild(this)}return this._style}}_exports.CustomStyle=CustomStyle;window.customElements.define("custom-style",CustomStyle);var customStyle={CustomStyle:CustomStyle};_exports.$customStyle=customStyle;let mutablePropertyChange$1;/** @suppress {missingProperties} */(()=>{mutablePropertyChange$1=MutableData._mutablePropertyChange})();/**
       * Legacy element behavior to skip strict dirty-checking for objects and arrays,
       * (always consider them to be "dirty") for use on legacy API Polymer elements.
       *
       * By default, `Polymer.PropertyEffects` performs strict dirty checking on
       * objects, which means that any deep modifications to an object or array will
       * not be propagated unless "immutable" data patterns are used (i.e. all object
       * references from the root to the mutation were changed).
       *
       * Polymer also provides a proprietary data mutation and path notification API
       * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
       * mutation and notification of deep changes in an object graph to all elements
       * bound to the same object graph.
       *
       * In cases where neither immutable patterns nor the data mutation API can be
       * used, applying this mixin will cause Polymer to skip dirty checking for
       * objects and arrays (always consider them to be "dirty").  This allows a
       * user to make a deep modification to a bound object graph, and then either
       * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
       * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
       * elements that wish to be updated based on deep mutations must apply this
       * mixin or otherwise skip strict dirty checking for objects/arrays.
       * Specifically, any elements in the binding tree between the source of a
       * mutation and the consumption of it must apply this behavior or enable the
       * `Polymer.OptionalMutableDataBehavior`.
       *
       * In order to make the dirty check strategy configurable, see
       * `Polymer.OptionalMutableDataBehavior`.
       *
       * Note, the performance characteristics of propagating large object graphs
       * will be worse as opposed to using strict dirty checking with immutable
       * patterns or Polymer's path notification API.
       *
       * @polymerBehavior
       * @summary Behavior to skip strict dirty-checking for objects and
       *   arrays
       */const MutableDataBehavior={/**
   * Overrides `Polymer.PropertyEffects` to provide option for skipping
   * strict equality checking for Objects and Arrays.
   *
   * This method pulls the value to dirty check against from the `__dataTemp`
   * cache (rather than the normal `__data` cache) for Objects.  Since the temp
   * cache is cleared at the end of a turn, this implementation allows
   * side-effects of deep object changes to be processed by re-setting the
   * same object (using the temp cache as an in-turn backstop to prevent
   * cycles due to 2-way notification).
   *
   * @param {string} property Property name
   * @param {*} value New property value
   * @param {*} old Previous property value
   * @return {boolean} Whether the property should be considered a change
   * @protected
   */_shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,!0)}};/**
    * Legacy element behavior to add the optional ability to skip strict
    * dirty-checking for objects and arrays (always consider them to be
    * "dirty") by setting a `mutable-data` attribute on an element instance.
    *
    * By default, `Polymer.PropertyEffects` performs strict dirty checking on
    * objects, which means that any deep modifications to an object or array will
    * not be propagated unless "immutable" data patterns are used (i.e. all object
    * references from the root to the mutation were changed).
    *
    * Polymer also provides a proprietary data mutation and path notification API
    * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
    * mutation and notification of deep changes in an object graph to all elements
    * bound to the same object graph.
    *
    * In cases where neither immutable patterns nor the data mutation API can be
    * used, applying this mixin will allow Polymer to skip dirty checking for
    * objects and arrays (always consider them to be "dirty").  This allows a
    * user to make a deep modification to a bound object graph, and then either
    * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
    * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
    * elements that wish to be updated based on deep mutations must apply this
    * mixin or otherwise skip strict dirty checking for objects/arrays.
    * Specifically, any elements in the binding tree between the source of a
    * mutation and the consumption of it must enable this behavior or apply the
    * `Polymer.OptionalMutableDataBehavior`.
    *
    * While this behavior adds the ability to forgo Object/Array dirty checking,
    * the `mutableData` flag defaults to false and must be set on the instance.
    *
    * Note, the performance characteristics of propagating large object graphs
    * will be worse by relying on `mutableData: true` as opposed to using
    * strict dirty checking with immutable patterns or Polymer's path notification
    * API.
    *
    * @polymerBehavior
    * @summary Behavior to optionally skip strict dirty-checking for objects and
    *   arrays
    */_exports.MutableDataBehavior=MutableDataBehavior;const OptionalMutableDataBehavior={properties:{/**
     * Instance-level flag for configuring the dirty-checking strategy
     * for this element.  When true, Objects and Arrays will skip dirty
     * checking, otherwise strict equality checking will be used.
     */mutableData:Boolean},/**
   * Overrides `Polymer.PropertyEffects` to skip strict equality checking
   * for Objects and Arrays.
   *
   * Pulls the value to dirty check against from the `__dataTemp` cache
   * (rather than the normal `__data` cache) for Objects.  Since the temp
   * cache is cleared at the end of a turn, this implementation allows
   * side-effects of deep object changes to be processed by re-setting the
   * same object (using the temp cache as an in-turn backstop to prevent
   * cycles due to 2-way notification).
   *
   * @param {string} property Property name
   * @param {*} value New property value
   * @param {*} old Previous property value
   * @return {boolean} Whether the property should be considered a change
   * @this {this}
   * @protected
   */_shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,this.mutableData)}};_exports.OptionalMutableDataBehavior=OptionalMutableDataBehavior;var mutableDataBehavior={MutableDataBehavior:MutableDataBehavior,OptionalMutableDataBehavior:OptionalMutableDataBehavior};_exports.$mutableDataBehavior=mutableDataBehavior;const Base=LegacyElementMixin(HTMLElement).prototype;_exports.Base=Base;var polymerLegacy={Base:Base,Polymer:Polymer,html:html};_exports.$polymerLegacy=polymerLegacy;const template=html`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;template.setAttribute("style","display: none;");document.head.appendChild(template.content);var style=document.createElement("style");style.textContent="[hidden] { display: none !important; }";document.head.appendChild(style);var ORPHANS=new Set;/**
                          * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
                          * coordinate the flow of resize events between "resizers" (elements that
                          *control the size or hidden state of their children) and "resizables" (elements
                          *that need to be notified when they are resized or un-hidden by their parents
                          *in order to take action on their new measurements).
                          *
                          * Elements that perform measurement should add the `IronResizableBehavior`
                          *behavior to their element definition and listen for the `iron-resize` event on
                          *themselves. This event will be fired when they become showing after having
                          *been hidden, when they are resized explicitly by another resizable, or when
                          *the window has been resized.
                          *
                          * Note, the `iron-resize` event is non-bubbling.
                          *
                          * @polymerBehavior
                          * @demo demo/index.html
                          **/const IronResizableBehavior={properties:{/**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */_parentResizable:{type:Object,observer:"_parentResizableChanged"},/**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){// We don't really need property effects on these, and also we want them
// to be created before the `_parentResizable` observer fires:
this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},/**
   * Can be called to manually notify a resizable and its descendant
   * resizables of a resize change.
   */notifyResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this);this._fireResize()},/**
   * Used to assign the closest resizable ancestor to this resizable
   * if the ancestor detects a request for notifications.
   */assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&-1===parentResizable._interestedResizables.indexOf(this)){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},/**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(-1<index){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},/**
   * Subscribe this element to listen to iron-resize events on the given target.
   *
   * Preferred over target.listen because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_subscribeIronResize:function(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},/**
   * Unsubscribe this element from listening to to iron-resize events on the
   * given target.
   *
   * Preferred over target.unlisten because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_unsubscribeIronResize:function(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},/**
   * This method can be overridden to filter nested elements that should or
   * should not be notified by the current element. Return true if an element
   * should be notified, or false if it should not be notified.
   *
   * @param {HTMLElement} element A candidate descendant element that
   * implements `IronResizableBehavior`.
   * @return {boolean} True if the `element` should be notified of resize.
   */resizerShouldNotify:function(element){return!0},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return}// no need to use this during shadow dom because of event retargeting
if(!useShadow){this._fireResize()}},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(event){var target=/** @type {!EventTarget} */dom(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function(descendant){// NOTE(cdata): In IE10, attached is fired on children first, so it's
// important not to notify them if the parent is not attached yet (or
// else they will get redundantly notified when the parent attaches).
if(!this.isAttached){return}this._notifyingDescendant=!0;descendant.notifyResize();this._notifyingDescendant=!1},_requestResizeNotifications:function(){if(!this.isAttached){return}if("loading"===document.readyState){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()})}else{this._findParent();if(!this._parentResizable){// If this resizable is an orphan, tell other orphans to try to find
// their parent again, in case it's this resizable.
ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent()}},this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{// If this resizable has a parent, tell other child resizables of
// that parent to try finding their parent again, in case it's this
// resizable.
this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent()}},this)}}},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};_exports.IronResizableBehavior=IronResizableBehavior;var ironResizableBehavior={IronResizableBehavior:IronResizableBehavior};_exports.$ironResizableBehavior=ironResizableBehavior;const AppLayoutBehavior=[IronResizableBehavior,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(e){if(dom(e).path[0]===this){return}this.resetLayout();e.stopPropagation()},_updateLayoutStates:function(){console.error("unimplemented")},/**
   * Resets the layout. If you changed the size of this element via CSS
   * you can notify the changes by either firing the `iron-resize` event
   * or calling `resetLayout` directly.
   *
   * @method resetLayout
   */resetLayout:function(){var self=this,cb=this._updateLayoutStates.bind(this);this._layoutDebouncer=Debouncer.debounce(this._layoutDebouncer,animationFrame,cb);enqueueDebouncer(this._layoutDebouncer);this._notifyDescendantResize()},_notifyLayoutChanged:function(){var self=this;// TODO: the event `app-reset-layout` can be fired synchronously
// as long as `_updateLayoutStates` waits for all the microtasks after
// rAF. E.g. requestAnimationFrame(setTimeOut())
requestAnimationFrame(function(){self.fire("app-reset-layout")})},_notifyDescendantResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this)}}];_exports.AppLayoutBehavior=AppLayoutBehavior;var appLayoutBehavior={AppLayoutBehavior:AppLayoutBehavior};_exports.$appLayoutBehavior=appLayoutBehavior;const IronScrollTargetBehavior={properties:{/**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],/**
   * True if the event listener should be installed.
   */_shouldHaveListener:!0,_scrollTargetChanged:function(scrollTarget,isAttached){var eventTarget;if(this._oldScrollTarget){this._toggleScrollListener(!1,this._oldScrollTarget);this._oldScrollTarget=null}if(!isAttached){return}// Support element id references
if("document"===scrollTarget){this.scrollTarget=this._doc}else if("string"===typeof scrollTarget){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector("#"+scrollTarget)}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget)}},/**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */_scrollHandler:function scrollHandler(){},/**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */get _defaultScrollTarget(){return this._doc},/**
   * Shortcut for the document element
   *
   * @type {Element}
   */get _doc(){return this.ownerDocument.documentElement},/**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop}return 0},/**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft}return 0},/**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top}},/**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left}},/**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */scroll:function(leftOrOptions,top){var left;if("object"===typeof leftOrOptions){left=leftOrOptions.left;top=leftOrOptions.top}else{left=leftOrOptions}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top}},/**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth}return 0},/**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight}return 0},/**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener("scroll",this._boundScrollHandler)}}else{if(this._boundScrollHandler){eventTarget.removeEventListener("scroll",this._boundScrollHandler);this._boundScrollHandler=null}}},/**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */toggleScrollListener:function(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget)}};_exports.IronScrollTargetBehavior=IronScrollTargetBehavior;var ironScrollTargetBehavior={IronScrollTargetBehavior:IronScrollTargetBehavior};_exports.$ironScrollTargetBehavior=ironScrollTargetBehavior;const _scrollEffects={};_exports._scrollEffects=_scrollEffects;let _scrollTimer=null;_exports._scrollTimer=_scrollTimer;const scrollTimingFunction=function easeOutQuad(t,b,c,d){t/=d;return-c*t*(t-2)+b};/**
    * Registers a scroll effect to be used in elements that implement the
    * `Polymer.AppScrollEffectsBehavior` behavior.
    *
    * @param {string} effectName The effect name.
    * @param {Object} effectDef The effect definition.
    */_exports.scrollTimingFunction=scrollTimingFunction;const registerEffect=function registerEffect(effectName,effectDef){if(null!=_scrollEffects[effectName]){throw new Error("effect `"+effectName+"` is already registered.")}_scrollEffects[effectName]=effectDef};_exports.registerEffect=registerEffect;const queryAllRoot=function(selector,root){var queue=[root],matches=[];while(0<queue.length){var node=queue.shift();matches.push.apply(matches,node.querySelectorAll(selector));for(var i=0;node.children[i];i++){if(node.children[i].shadowRoot){queue.push(node.children[i].shadowRoot)}}}return matches};/**
    * Scrolls to a particular set of coordinates in a scroll target.
    * If the scroll target is not defined, then it would use the main document as
    * the target.
    *
    * To scroll in a smooth fashion, you can set the option `behavior: 'smooth'`.
    * e.g.
    *
    * ```js
    * Polymer.AppLayout.scroll({top: 0, behavior: 'smooth'});
    * ```
    *
    * To scroll in a silent mode, without notifying scroll changes to any
    * app-layout elements, you can set the option `behavior: 'silent'`. This is
    * particularly useful we you are using `app-header` and you desire to scroll to
    * the top of a scrolling region without running scroll effects. e.g.
    *
    * ```js
    * Polymer.AppLayout.scroll({top: 0, behavior: 'silent'});
    * ```
    *
    * @param {Object} options {top: Number, left: Number, behavior: String(smooth | silent)}
    */_exports.queryAllRoot=queryAllRoot;const scroll=function scroll(options){options=options||{};var docEl=document.documentElement,target=options.target||docEl,hasNativeScrollBehavior="scrollBehavior"in target.style&&target.scroll,scrollClassName="app-layout-silent-scroll",scrollTop=options.top||0,scrollLeft=options.left||0,scrollTo=target===docEl?window.scrollTo:function scrollTo(scrollLeft,scrollTop){target.scrollLeft=scrollLeft;target.scrollTop=scrollTop};if("smooth"===options.behavior){if(hasNativeScrollBehavior){target.scroll(options)}else{var timingFn=scrollTimingFunction,startTime=Date.now(),currentScrollTop=target===docEl?window.pageYOffset:target.scrollTop,currentScrollLeft=target===docEl?window.pageXOffset:target.scrollLeft,deltaScrollTop=scrollTop-currentScrollTop,deltaScrollLeft=scrollLeft-currentScrollLeft,duration=300,updateFrame=function updateFrame(){var now=Date.now(),elapsedTime=now-startTime;if(elapsedTime<duration){scrollTo(timingFn(elapsedTime,currentScrollLeft,deltaScrollLeft,duration),timingFn(elapsedTime,currentScrollTop,deltaScrollTop,duration));requestAnimationFrame(updateFrame)}else{scrollTo(scrollLeft,scrollTop)}}.bind(this);updateFrame()}}else if("silent"===options.behavior){var headers=queryAllRoot("app-header",document.body);headers.forEach(function(header){header.setAttribute("silent-scroll","")});// Browsers keep the scroll momentum even if the bottom of the scrolling
// content was reached. This means that calling scroll({top: 0, behavior:
// 'silent'}) when the momentum is still going will result in more scroll
// events and thus scroll effects. This seems to only apply when using
// document scrolling. Therefore, when should we remove the class from the
// document element?
if(_scrollTimer){window.cancelAnimationFrame(_scrollTimer)}_exports._scrollTimer=_scrollTimer=window.requestAnimationFrame(function(){headers.forEach(function(header){header.removeAttribute("silent-scroll")});_exports._scrollTimer=_scrollTimer=null});scrollTo(scrollLeft,scrollTop)}else{scrollTo(scrollLeft,scrollTop)}};_exports.scroll=scroll;var helpers={_scrollEffects:_scrollEffects,get _scrollTimer(){return _scrollTimer},scrollTimingFunction:scrollTimingFunction,registerEffect:registerEffect,queryAllRoot:queryAllRoot,scroll:scroll};_exports.$helpers=helpers;const AppScrollEffectsBehavior=[IronScrollTargetBehavior,{properties:{/**
     * A space-separated list of the effects names that will be triggered when
     * the user scrolls. e.g. `waterfall parallax-background` installs the
     * `waterfall` and `parallax-background`.
     */effects:{type:String},/**
     * An object that configurates the effects installed via the `effects`
     * property. e.g.
     * ```js
     *  element.effectsConfig = {
     *   "blend-background": {
     *     "startsAt": 0.5
     *   }
     * };
     * ```
     * Every effect has at least two config properties: `startsAt` and
     * `endsAt`. These properties indicate when the event should start and end
     * respectively and relative to the overall element progress. So for
     * example, if `blend-background` starts at `0.5`, the effect will only
     * start once the current element reaches 0.5 of its progress. In this
     * context, the progress is a value in the range of `[0, 1]` that
     * indicates where this element is on the screen relative to the viewport.
     */effectsConfig:{type:Object,value:function(){return{}}},/**
     * Disables CSS transitions and scroll effects on the element.
     */disabled:{type:Boolean,reflectToAttribute:!0,value:!1},/**
     * Allows to set a `scrollTop` threshold. When greater than 0,
     * `thresholdTriggered` is true only when the scroll target's `scrollTop`
     * has reached this value.
     *
     * For example, if `threshold = 100`, `thresholdTriggered` is true when
     * the `scrollTop` is at least `100`.
     */threshold:{type:Number,value:0},/**
     * True if the `scrollTop` threshold (set in `scrollTopThreshold`) has
     * been reached.
     */thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],/**
   * Updates the scroll state. This method should be overridden
   * by the consumer of this behavior.
   *
   * @method _updateScrollState
   * @param {number} scrollTop
   */_updateScrollState:function(scrollTop){},/**
   * Returns true if the current element is on the screen.
   * That is, visible in the current viewport. This method should be
   * overridden by the consumer of this behavior.
   *
   * @method isOnScreen
   * @return {boolean}
   */isOnScreen:function(){return!1},/**
   * Returns true if there's content below the current element. This method
   * should be overridden by the consumer of this behavior.
   *
   * @method isContentBelow
   * @return {boolean}
   */isContentBelow:function(){return!1},/**
   * List of effects handlers that will take place during scroll.
   *
   * @type {Array<Function>}
   */_effectsRunFn:null,/**
   * List of the effects definitions installed via the `effects` property.
   *
   * @type {Array<Object>}
   */_effects:null,/**
   * The clamped value of `_scrollTop`.
   * @type number
   */get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},/**
   * Creates an effect object from an effect's name that can be used to run
   * effects programmatically.
   *
   * @method createEffect
   * @param {string} effectName The effect's name registered via `Polymer.AppLayout.registerEffect`.
   * @param {Object=} effectConfig The effect config object. (Optional)
   * @return {Object} An effect object with the following functions:
   *
   *  * `effect.setUp()`, Sets up the requirements for the effect.
   *       This function is called automatically before the `effect` function
   * returns.
   *  * `effect.run(progress, y)`, Runs the effect given a `progress`.
   *  * `effect.tearDown()`, Cleans up any DOM nodes or element references
   * used by the effect.
   *
   * Example:
   * ```js
   * var parallax = element.createEffect('parallax-background');
   * // runs the effect
   * parallax.run(0.5, 0);
   * ```
   */createEffect:function(effectName,effectConfig){var effectDef=_scrollEffects[effectName];if(!effectDef){throw new ReferenceError(this._getUndefinedMsg(effectName))}var prop=this._boundEffect(effectDef,effectConfig||{});prop.setUp();return prop},/**
   * Called when `effects` or `effectsConfig` changes.
   */_effectsChanged:function(effects,effectsConfig,isAttached){this._tearDownEffects();if(!effects||!isAttached){return}effects.split(" ").forEach(function(effectName){var effectDef;if(""!==effectName){if(effectDef=_scrollEffects[effectName]){this._effects.push(this._boundEffect(effectDef,effectsConfig[effectName]))}else{console.warn(this._getUndefinedMsg(effectName))}}},this);this._setUpEffect()},/**
   * Forces layout
   */_layoutIfDirty:function(){return this.offsetWidth},/**
   * Returns an effect object bound to the current context.
   *
   * @param {Object} effectDef
   * @param {Object=} effectsConfig The effect config object if the effect accepts config values. (Optional)
   */_boundEffect:function(effectDef,effectsConfig){effectsConfig=effectsConfig||{};var startsAt=parseFloat(effectsConfig.startsAt||0),endsAt=parseFloat(effectsConfig.endsAt||1),deltaS=endsAt-startsAt,noop=function(){},runFn=0===startsAt&&1===endsAt?effectDef.run:function(progress,y){effectDef.run.call(this,Math.max(0,(progress-startsAt)/deltaS),y)};return{setUp:effectDef.setUp?effectDef.setUp.bind(this,effectsConfig):noop,run:effectDef.run?runFn.bind(this):noop,tearDown:effectDef.tearDown?effectDef.tearDown.bind(this):noop}},/**
   * Sets up the effects.
   */_setUpEffect:function(){if(this.isAttached&&this._effects){this._effectsRunFn=[];this._effects.forEach(function(effectDef){// install the effect only if no error was reported
if(!1!==effectDef.setUp()){this._effectsRunFn.push(effectDef.run)}},this)}},/**
   * Tears down the effects.
   */_tearDownEffects:function(){if(this._effects){this._effects.forEach(function(effectDef){effectDef.tearDown()})}this._effectsRunFn=[];this._effects=[]},/**
   * Runs the effects.
   *
   * @param {number} p The progress
   * @param {number} y The top position of the current element relative to the viewport.
   */_runEffects:function(p,y){if(this._effectsRunFn){this._effectsRunFn.forEach(function(run){run(p,y)})}},/**
   * Overrides the `_scrollHandler`.
   */_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var scrollTop=this._clampedScrollTop;this._updateScrollState(scrollTop);if(0<this.threshold){this._setThresholdTriggered(scrollTop>=this.threshold)}}},/**
   * Override this method to return a reference to a node in the local DOM.
   * The node is consumed by a scroll effect.
   *
   * @param {string} id The id for the node.
   */_getDOMRef:function(id){console.warn("_getDOMRef","`"+id+"` is undefined")},_getUndefinedMsg:function(effectName){return"Scroll effect `"+effectName+"` is undefined. "+"Did you forget to import app-layout/app-scroll-effects/effects/"+effectName+".html ?"}}];_exports.AppScrollEffectsBehavior=AppScrollEffectsBehavior;var appScrollEffectsBehavior={AppScrollEffectsBehavior:AppScrollEffectsBehavior};_exports.$appScrollEffectsBehavior=appScrollEffectsBehavior;Polymer({_template:html`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[AppScrollEffectsBehavior,AppLayoutBehavior],properties:{/**
     * If true, the header will automatically collapse when scrolling down.
     * That is, the `sticky` element remains visible when the header is fully
     *condensed whereas the rest of the elements will collapse below `sticky`
     *element.
     *
     * By default, the `sticky` element is the first toolbar in the light DOM:
     *
     *```html
     * <app-header condenses>
     *   <app-toolbar>This toolbar remains on top</app-toolbar>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar></app-toolbar>
     * </app-header>
     * ```
     *
     * Additionally, you can specify which toolbar or element remains visible in
     *condensed mode by adding the `sticky` attribute to that element. For
     *example: if we want the last toolbar to remain visible, we can add the
     *`sticky` attribute to it.
     *
     *```html
     * <app-header condenses>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar sticky>This toolbar remains on top</app-toolbar>
     * </app-header>
     * ```
     *
     * Note the `sticky` element must be a direct child of `app-header`.
     */condenses:{type:Boolean,value:!1},/**
     * Mantains the header fixed at the top so it never moves away.
     */fixed:{type:Boolean,value:!1},/**
     * Slides back the header when scrolling back up.
     */reveals:{type:Boolean,value:!1},/**
     * Displays a shadow below the header.
     */shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],/**
   * A cached offsetHeight of the current element.
   *
   * @type {number}
   */_height:0,/**
   * The distance in pixels the header will be translated to when scrolling.
   *
   * @type {number}
   */_dHeight:0,/**
   * The offsetTop of `_stickyEl`
   *
   * @type {number}
   */_stickyElTop:0,/**
   * A reference to the element that remains visible when the header condenses.
   *
   * @type {HTMLElement}
   */_stickyElRef:null,/**
   * The header's top value used for the `transformY`
   *
   * @type {number}
   */_top:0,/**
   * The current scroll progress.
   *
   * @type {number}
   */_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,/**
   * The distance the header is allowed to move away.
   *
   * @type {number}
   */get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},/**
   * Returns a reference to the sticky element.
   *
   * @return {HTMLElement}?
   */get _stickyEl(){if(this._stickyElRef){return this._stickyElRef}// Get the element with the sticky attribute on it or the first element in
// the light DOM.
for(var nodes=dom(this.$.slot).getDistributedNodes(),i=0,node;node=/** @type {!HTMLElement} */nodes[i];i++){if(node.nodeType===Node.ELEMENT_NODE){if(node.hasAttribute("sticky")){this._stickyElRef=node;break}else if(!this._stickyElRef){this._stickyElRef=node}}}return this._stickyElRef},_configChanged:function(){this.resetLayout();this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0===this.offsetWidth&&0===this.offsetHeight){return}var scrollTop=this._clampedScrollTop,firstSetup=0===this._height||0===scrollTop,currentDisabled=this.disabled;this._height=this.offsetHeight;this._stickyElRef=null;this.disabled=!0;// prepare for measurement
if(!firstSetup){this._updateScrollState(0,!0)}if(this._mayMove()){this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0}else{this._dHeight=0}this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0;this._setUpEffect();if(firstSetup){this._updateScrollState(scrollTop,!0)}else{this._updateScrollState(this._lastScrollTop,!0);this._layoutIfDirty()}// restore no transition
this.disabled=currentDisabled},/**
   * Updates the scroll state.
   *
   * @param {number} scrollTop
   * @param {boolean=} forceUpdate (default: false)
   */_updateScrollState:function(scrollTop,forceUpdate){if(0===this._height){return}var progress=0,top=0,lastTop=this._top,lastScrollTop=this._lastScrollTop,maxHeaderTop=this._maxHeaderTop,dScrollTop=scrollTop-this._lastScrollTop,absDScrollTop=Math.abs(dScrollTop),isScrollingDown=scrollTop>this._lastScrollTop,now=performance.now();if(this._mayMove()){top=this._clamp(this.reveals?lastTop+dScrollTop:scrollTop,0,maxHeaderTop)}if(scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?Math.max(this._dHeight,top):top;this.style.transitionDuration="0ms"}if(this.reveals&&!this.disabled&&100>absDScrollTop){// set the initial scroll position
if(300<now-this._initTimestamp||this._wasScrollingDown!==isScrollingDown){this._initScrollTop=scrollTop;this._initTimestamp=now}if(scrollTop>=maxHeaderTop){// check if the header is allowed to snap
if(30<Math.abs(this._initScrollTop-scrollTop)||10<absDScrollTop){if(isScrollingDown&&scrollTop>=maxHeaderTop){top=maxHeaderTop}else if(!isScrollingDown&&scrollTop>=this._dHeight){top=this.condenses&&!this.fixed?this._dHeight:0}var scrollVelocity=dScrollTop/(now-this._lastTimestamp);this.style.transitionDuration=this._clamp((top-lastTop)/scrollVelocity,0,300)+"ms"}else{top=this._top}}}if(0===this._dHeight){progress=0<scrollTop?1:0}else{progress=top/this._dHeight}if(!forceUpdate){this._lastScrollTop=scrollTop;this._top=top;this._wasScrollingDown=isScrollingDown;this._lastTimestamp=now}if(forceUpdate||progress!==this._progress||lastTop!==top||0===scrollTop){this._progress=progress;this._runEffects(progress,top);this._transformHeader(top)}},/**
   * Returns true if the current header is allowed to move as the user scrolls.
   *
   * @return {boolean}
   */_mayMove:function(){return this.condenses||!this.fixed},/**
   * Returns true if the current header will condense based on the size of the
   * header and the `consenses` property.
   *
   * @return {boolean}
   */willCondense:function(){return 0<this._dHeight&&this.condenses},/**
   * Returns true if the current element is on the screen.
   * That is, visible in the current viewport.
   *
   * @method isOnScreen
   * @return {boolean}
   */isOnScreen:function(){return 0!==this._height&&this._top<this._height},/**
   * Returns true if there's content below the current element.
   *
   * @method isContentBelow
   * @return {boolean}
   */isContentBelow:function(){return 0===this._top?0<this._clampedScrollTop:0<=this._clampedScrollTop-this._maxHeaderTop},/**
   * Transforms the header.
   *
   * @param {number} y
   */_transformHeader:function(y){this.translate3d(0,-y+"px",0);if(this._stickyEl){this.translate3d(0,this.condenses&&y>=this._stickyElTop?Math.min(y,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)}},_clamp:function(v,min,max){return Math.min(max,Math.max(min,v))},_ensureBgContainers:function(){if(!this._bgContainer){this._bgContainer=document.createElement("div");this._bgContainer.id="background";this._bgRear=document.createElement("div");this._bgRear.id="backgroundRearLayer";this._bgContainer.appendChild(this._bgRear);this._bgFront=document.createElement("div");this._bgFront.id="backgroundFrontLayer";this._bgContainer.appendChild(this._bgFront);dom(this.root).insertBefore(this._bgContainer,this.$.contentContainer)}},_getDOMRef:function(id){switch(id){case"backgroundFrontLayer":this._ensureBgContainers();return this._bgFront;case"backgroundRearLayer":this._ensureBgContainers();return this._bgRear;case"background":this._ensureBgContainers();return this._bgContainer;case"mainTitle":return dom(this).querySelector("[main-title]");case"condensedTitle":return dom(this).querySelector("[condensed-title]");}return null},/**
   * Returns an object containing the progress value of the scroll effects
   * and the top position of the header.
   *
   * @method getScrollState
   * @return {Object}
   */getScrollState:function(){return{progress:this._progress,top:this._top}}});registerEffect("waterfall",{/**
   *  @this Polymer.AppLayout.ElementWithBackground
   */run:function run(){this.shadow=this.isOnScreen()&&this.isContentBelow()}});Polymer({_template:html`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"});Polymer({is:"iron-location",properties:{/**
     * The pathname component of the URL.
     */path:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.pathname)}},/**
     * The query string portion of the URL.
     */query:{type:String,notify:!0,value:function(){return window.location.search.slice(1)}},/**
     * The hash component of the URL.
     */hash:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},/**
     * If the user was on a URL for less than `dwellTime` milliseconds, it
     * won't be added to the browser's history, but instead will be replaced
     * by the next entry.
     *
     * This is to prevent large numbers of entries from clogging up the user's
     * browser history. Disable by setting to a negative number.
     */dwellTime:{type:Number,value:2e3},/**
     * A regexp that defines the set of URLs that should be considered part
     * of this web app.
     *
     * Clicking on a link that matches this regex won't result in a full page
     * navigation, but will instead just update the URL state in place.
     *
     * This regexp is given everything after the origin in an absolute
     * URL. So to match just URLs that start with /search/ do:
     *     url-space-regex="^/search/"
     *
     * @type {string|RegExp}
     */urlSpaceRegex:{type:String,value:""},/**
     * A flag that specifies whether the spaces in query that would normally be
     * encoded as %20 should be encoded as +.
     *
     * Given an example text "hello world", it is encoded in query as
     * - "hello%20world" without the parameter
     * - "hello+world" with the parameter
     */encodeSpaceAsPlusInQuery:{type:Boolean,value:!1},/**
     * urlSpaceRegex, but coerced into a regexp.
     *
     * @type {RegExp}
     */_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged");this.listen(window,"location-changed","_urlChanged");this.listen(window,"popstate","_urlChanged");this.listen(/** @type {!HTMLBodyElement} */document.body,"click","_globalOnClick");// Give a 200ms grace period to make initial redirects without any
// additions to the user's history.
this._lastChangedAt=window.performance.now()-(this.dwellTime-200);this._initialized=!0;this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged");this.unlisten(window,"location-changed","_urlChanged");this.unlisten(window,"popstate","_urlChanged");this.unlisten(/** @type {!HTMLBodyElement} */document.body,"click","_globalOnClick");this._initialized=!1},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){// We want to extract all info out of the updated URL before we
// try to write anything back into it.
//
// i.e. without _dontUpdateUrl we'd overwrite the new path with the old
// one when we set this.hash. Likewise for query.
this._dontUpdateUrl=!0;this._hashChanged();this.path=window.decodeURIComponent(this.__location.pathname);this.query=this.__location.search.substring(1);this._dontUpdateUrl=!1;this._updateUrl()},_getUrl:function(){var partiallyEncodedPath=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F"),partiallyEncodedQuery="";if(this.query){partiallyEncodedQuery="?"+this.query.replace(/\#/g,"%23");if(this.encodeSpaceAsPlusInQuery){partiallyEncodedQuery=partiallyEncodedQuery.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+")}else{// required for edge
partiallyEncodedQuery=partiallyEncodedQuery.replace(/\+/g,"%2B").replace(/ /g,"%20")}}var partiallyEncodedHash="";if(this.hash){partiallyEncodedHash="#"+window.encodeURI(this.hash)}return partiallyEncodedPath+partiallyEncodedQuery+partiallyEncodedHash},_updateUrl:function(){if(this._dontUpdateUrl||!this._initialized){return}if(this.path===window.decodeURIComponent(this.__location.pathname)&&this.query===this.__location.search.substring(1)&&this.hash===window.decodeURIComponent(this.__location.hash.substring(1))){// Nothing to do, the current URL is a representation of our properties.
return}var newUrl=this._getUrl(),fullNewUrl=new URL(newUrl,this.__location.protocol+"//"+this.__location.host).href,now=window.performance.now(),shouldReplace=this._lastChangedAt+this.dwellTime>now;// Need to use a full URL in case the containing page has a base URI.
this._lastChangedAt=now;if(shouldReplace){window.history.replaceState({},"",fullNewUrl)}else{window.history.pushState({},"",fullNewUrl)}this.fire("location-changed",{},{node:window})},/**
   * A necessary evil so that links work as expected. Does its best to
   * bail out early if possible.
   *
   * @param {MouseEvent} event .
   */_globalOnClick:function(event){// If another event handler has stopped this event then there's nothing
// for us to do. This can happen e.g. when there are multiple
// iron-location elements in a page.
if(event.defaultPrevented){return}var href=this._getSameOriginLinkHref(event);if(!href){return}event.preventDefault();// If the navigation is to the current page we shouldn't add a history
// entry or fire a change event.
if(href===this.__location.href){return}window.history.pushState({},"",href);this.fire("location-changed",{},{node:window})},/**
   * Returns the absolute URL of the link (if any) that this click event
   * is clicking on, if we can and should override the resulting full
   * page navigation. Returns null otherwise.
   *
   * @param {MouseEvent} event .
   * @return {string?} .
   */_getSameOriginLinkHref:function(event){// We only care about left-clicks.
if(0!==event.button){return null}// We don't want modified clicks, where the intent is to open the page
// in a new tab.
if(event.metaKey||event.ctrlKey){return null}for(var eventPath=dom(event).path,anchor=null,i=0,element;i<eventPath.length;i++){element=eventPath[i];if("A"===element.tagName&&element.href){anchor=element;break}}// If there's no link there's nothing to do.
if(!anchor){return null}// Target blank is a new tab, don't intercept.
if("_blank"===anchor.target){return null}// If the link is for an existing parent frame, don't intercept.
if(("_top"===anchor.target||"_parent"===anchor.target)&&window.top!==window){return null}// If the link is a download, don't intercept.
if(anchor.download){return null}var href=anchor.href,url;// It only makes sense for us to intercept same-origin navigations.
// pushState/replaceState don't work with cross-origin links.
if(null!=document.baseURI){url=new URL(href,/** @type {string} */document.baseURI)}else{url=new URL(href)}var origin;// IE Polyfill
if(this.__location.origin){origin=this.__location.origin}else{origin=this.__location.protocol+"//"+this.__location.host}var urlOrigin;if(url.origin){urlOrigin=url.origin}else{// IE always adds port number on HTTP and HTTPS on <a>.host but not on
// window.location.host
var urlHost=url.host,urlPort=url.port,urlProtocol=url.protocol,isExtraneousHTTPS="https:"===urlProtocol&&"443"===urlPort,isExtraneousHTTP="http:"===urlProtocol&&"80"===urlPort;if(isExtraneousHTTPS||isExtraneousHTTP){urlHost=url.hostname}urlOrigin=urlProtocol+"//"+urlHost}if(urlOrigin!==origin){return null}var normalizedHref=url.pathname+url.search+url.hash;// pathname should start with '/', but may not if `new URL` is not supported
if("/"!==normalizedHref[0]){normalizedHref="/"+normalizedHref}// If we've been configured not to handle this url... don't handle it!
if(this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(normalizedHref)){return null}// Need to use a full URL in case the containing page has a base URI.
var fullNormalizedHref=new URL(normalizedHref,this.__location.href).href;return fullNormalizedHref},_makeRegExp:function(urlSpaceRegex){return RegExp(urlSpaceRegex)}});Polymer({is:"iron-query-params",properties:{/**
     * @type{string|undefined}
     */paramsString:{type:String,notify:!0,observer:"paramsStringChanged"},/**
     * @type{Object|undefined}
     */paramsObject:{type:Object,notify:!0},_dontReact:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["paramsObjectChanged(paramsObject.*)"],paramsStringChanged:function(){this._dontReact=!0;this.paramsObject=this._decodeParams(this.paramsString);this._dontReact=!1},paramsObjectChanged:function(){if(this._dontReact){return}this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27")},_encodeParams:function(params){var encodedParams=[];for(var key in params){var value=params[key];if(""===value){encodedParams.push(encodeURIComponent(key))}else if(value){encodedParams.push(encodeURIComponent(key)+"="+encodeURIComponent(value.toString()))}}return encodedParams.join("&")},_decodeParams:function(paramString){var params={};// Work around a bug in decodeURIComponent where + is not
// converted to spaces:
paramString=(paramString||"").replace(/\+/g,"%20");for(var paramList=paramString.split("&"),i=0,param;i<paramList.length;i++){param=paramList[i].split("=");if(param[0]){params[decodeURIComponent(param[0])]=decodeURIComponent(param[1]||"")}}return params}});const AppRouteConverterBehavior={properties:{/**
     * A model representing the deserialized path through the route tree, as
     * well as the current queryParams.
     *
     * A route object is the kernel of the routing system. It is intended to
     * be fed into consuming elements such as `app-route`.
     *
     * @type {?Object|undefined}
     */route:{type:Object,notify:!0},/**
     * A set of key/value pairs that are universally accessible to branches of
     * the route tree.
     *
     * @type {?Object}
     */queryParams:{type:Object,notify:!0},/**
     * The serialized path through the route tree. This corresponds to the
     * `window.location.pathname` value, and will update to reflect changes
     * to that value.
     */path:{type:String,notify:!0}},observers:["_locationChanged(path, queryParams)","_routeChanged(route.prefix, route.path)","_routeQueryParamsChanged(route.__queryParams)"],created:function(){this.linkPaths("route.__queryParams","queryParams");this.linkPaths("queryParams","route.__queryParams")},/**
   * Handler called when the path or queryParams change.
   */_locationChanged:function(){if(this.route&&this.route.path===this.path&&this.queryParams===this.route.__queryParams){return}this.route={prefix:"",path:this.path,__queryParams:this.queryParams}},/**
   * Handler called when the route prefix and route path change.
   */_routeChanged:function(){if(!this.route){return}this.path=this.route.prefix+this.route.path},/**
   * Handler called when the route queryParams change.
   *
   * @param  {Object} queryParams A set of key/value pairs that are
   * universally accessible to branches of the route tree.
   */_routeQueryParamsChanged:function(queryParams){if(!this.route){return}this.queryParams=queryParams}};_exports.AppRouteConverterBehavior=AppRouteConverterBehavior;var appRouteConverterBehavior={AppRouteConverterBehavior:AppRouteConverterBehavior};_exports.$appRouteConverterBehavior=appRouteConverterBehavior;Polymer({_template:html`
    <iron-query-params params-string="{{__query}}" params-object="{{queryParams}}">
    </iron-query-params>
    <iron-location path="{{__path}}" query="{{__query}}" hash="{{__hash}}" url-space-regex="[[urlSpaceRegex]]" dwell-time="[[dwellTime]]">
    </iron-location>
  `,is:"app-location",properties:{/**
     * A model representing the deserialized path through the route tree, as
     * well as the current queryParams.
     */route:{type:Object,notify:!0},/**
     * In many scenarios, it is convenient to treat the `hash` as a stand-in
     * alternative to the `path`. For example, if deploying an app to a static
     * web server (e.g., Github Pages) - where one does not have control over
     * server-side routing - it is usually a better experience to use the hash
     * to represent paths through one's app.
     *
     * When this property is set to true, the `hash` will be used in place of
      * the `path` for generating a `route`.
     */useHashAsPath:{type:Boolean,value:!1},/**
     * A regexp that defines the set of URLs that should be considered part
     * of this web app.
     *
     * Clicking on a link that matches this regex won't result in a full page
     * navigation, but will instead just update the URL state in place.
     *
     * This regexp is given everything after the origin in an absolute
     * URL. So to match just URLs that start with /search/ do:
     *     url-space-regex="^/search/"
     *
     * @type {string|RegExp}
     */urlSpaceRegex:{type:String,notify:!0},/**
     * A set of key/value pairs that are universally accessible to branches
     * of the route tree.
     */__queryParams:{type:Object},/**
     * The pathname component of the current URL.
     */__path:{type:String},/**
     * The query string portion of the current URL.
     */__query:{type:String},/**
     * The hash portion of the current URL.
     */__hash:{type:String},/**
     * The route path, which will be either the hash or the path, depending
     * on useHashAsPath.
     */path:{type:String,observer:"__onPathChanged"},/**
     * Whether or not the ready function has been called.
     */_isReady:{type:Boolean},/**
     * If the user was on a URL for less than `dwellTime` milliseconds, it
     * won't be added to the browser's history, but instead will be
     * replaced by the next entry.
     *
     * This is to prevent large numbers of entries from clogging up the
     * user's browser history. Disable by setting to a negative number.
     *
     * See `iron-location` for more information.
     */dwellTime:{type:Number}},behaviors:[AppRouteConverterBehavior],observers:["__computeRoutePath(useHashAsPath, __hash, __path)"],ready:function(){this._isReady=!0},__computeRoutePath:function(){this.path=this.useHashAsPath?this.__hash:this.__path},__onPathChanged:function(){if(!this._isReady){return}if(this.useHashAsPath){this.__hash=this.path}else{this.__path=this.path}}});Polymer({is:"app-route",properties:{/**
     * The URL component managed by this element.
     */route:{type:Object,notify:!0},/**
     * The pattern of slash-separated segments to match `route.path` against.
     *
     * For example the pattern "/foo" will match "/foo" or "/foo/bar"
     * but not "/foobar".
     *
     * Path segments like `/:named` are mapped to properties on the `data`
     * object.
     */pattern:{type:String},/**
     * The parameterized values that are extracted from the route as
     * described by `pattern`.
     */data:{type:Object,value:function(){return{}},notify:!0},/**
     * Auto activate route if path empty
     */autoActivate:{type:Boolean,value:!1},_queryParamsUpdating:{type:Boolean,value:!1},/**
     * @type {?Object}
     */queryParams:{type:Object,value:function(){return{}},notify:!0},/**
     * The part of `route.path` NOT consumed by `pattern`.
     */tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},/**
     * Whether the current route is active. True if `route.path` matches the
     * `pattern`, false otherwise.
     */active:{type:Boolean,notify:!0,readOnly:!0},/**
     * @type {?string}
     */_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams");this.linkPaths("tail.__queryParams","route.__queryParams")},/**
   * Deal with the query params object being assigned to wholesale.
   */__routeQueryParamsChanged:function(queryParams){if(queryParams&&this.tail){if(this.tail.__queryParams!==queryParams){this.set("tail.__queryParams",queryParams)}if(!this.active||this._queryParamsUpdating){return}// Copy queryParams and track whether there are any differences compared
// to the existing query params.
var copyOfQueryParams={},anythingChanged=!1;for(var key in queryParams){copyOfQueryParams[key]=queryParams[key];if(anythingChanged||!this.queryParams||queryParams[key]!==this.queryParams[key]){anythingChanged=!0}}// Need to check whether any keys were deleted
for(var key in this.queryParams){if(anythingChanged||!(key in queryParams)){anythingChanged=!0;break}}if(!anythingChanged){return}this._queryParamsUpdating=!0;this.set("queryParams",copyOfQueryParams);this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(queryParams){if(queryParams&&this.route&&this.route.__queryParams!=queryParams){this.set("route.__queryParams",queryParams)}},__queryParamsChanged:function(changes){if(!this.active||this._queryParamsUpdating){return}this.set("route.__"+changes.path,changes.value)},__resetProperties:function(){this._setActive(!1);this._matched=null},__tryToMatch:function(){if(!this.route){return}var path=this.route.path,pattern=this.pattern;if(this.autoActivate&&""===path){path="/"}if(!pattern){return}if(!path){this.__resetProperties();return}for(var remainingPieces=path.split("/"),patternPieces=pattern.split("/"),matched=[],namedMatches={},i=0,patternPiece;i<patternPieces.length;i++){patternPiece=patternPieces[i];if(!patternPiece&&""!==patternPiece){break}var pathPiece=remainingPieces.shift();// We don't match this path.
if(!pathPiece&&""!==pathPiece){this.__resetProperties();return}matched.push(pathPiece);if(":"==patternPiece.charAt(0)){namedMatches[patternPiece.slice(1)]=pathPiece}else if(patternPiece!==pathPiece){this.__resetProperties();return}}this._matched=matched.join("/");// Properties that must be updated atomically.
var propertyUpdates={};// this.active
if(!this.active){propertyUpdates.active=!0}// this.tail
var tailPrefix=this.route.prefix+this._matched,tailPath=remainingPieces.join("/");if(0<remainingPieces.length){tailPath="/"+tailPath}if(!this.tail||this.tail.prefix!==tailPrefix||this.tail.path!==tailPath){propertyUpdates.tail={prefix:tailPrefix,path:tailPath,__queryParams:this.route.__queryParams}}// this.data
propertyUpdates.data=namedMatches;this._dataInUrl={};for(var key in namedMatches){this._dataInUrl[key]=namedMatches[key]}if(this.setProperties){// atomic update
this.setProperties(propertyUpdates,!0)}else{this.__setMulti(propertyUpdates)}},__tailPathChanged:function(path){if(!this.active){return}var tailPath=path,newPath=this._matched;if(tailPath){if("/"!==tailPath.charAt(0)){tailPath="/"+tailPath}newPath+=tailPath}this.set("route.path",newPath)},__updatePathOnDataChange:function(){if(!this.route||!this.active){return}var newPath=this.__getLink({}),oldPath=this.__getLink(this._dataInUrl);if(newPath===oldPath){return}this.set("route.path",newPath)},__getLink:function(overrideValues){var values={tail:null};for(var key in this.data){values[key]=this.data[key]}for(var key in overrideValues){values[key]=overrideValues[key]}var patternPieces=this.pattern.split("/"),interp=patternPieces.map(function(value){if(":"==value[0]){value=values[value.slice(1)]}return value},this);if(values.tail&&values.tail.path){if(0<interp.length&&"/"===values.tail.path.charAt(0)){interp.push(values.tail.path.slice(1))}else{interp.push(values.tail.path)}}return interp.join("/")},__setMulti:function(setObj){// HACK(rictic): skirting around 1.0's lack of a setMulti by poking at
//     internal data structures. I would not advise that you copy this
//     example.
//
//     In the future this will be a feature of Polymer itself.
//     See: https://github.com/Polymer/polymer/issues/3640
//
//     Hacking around with private methods like this is juggling footguns,
//     and is likely to have unexpected and unsupported rough edges.
//
//     Be ye so warned.
for(var property in setObj){this._propertySetter(property,setObj[property])}// notify in a specific order
if(setObj.data!==void 0){this._pathEffector("data",this.data);this._notifyChange("data")}if(setObj.active!==void 0){this._pathEffector("active",this.active);this._notifyChange("active")}if(setObj.tail!==void 0){this._pathEffector("tail",this.tail);this._notifyChange("tail")}}});Polymer({is:"iron-media-query",properties:{/**
     * The Boolean return value of the media query.
     */queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},/**
     * The CSS media query to evaluate.
     */query:{type:String,observer:"queryChanged"},/**
     * If true, the query attribute is assumed to be a complete media query
     * string rather than a single media feature.
     */full:{type:Boolean,value:!1},/**
     * @type {function(MediaQueryList)}
     */_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},/**
     * @type {MediaQueryList}
     */_mq:{value:null}},attached:function(){this.style.display="none";this.queryChanged()},detached:function(){this._remove()},_add:function(){if(this._mq){this._mq.addListener(this._boundMQHandler)}},_remove:function(){if(this._mq){this._mq.removeListener(this._boundMQHandler)}this._mq=null},queryChanged:function(){this._remove();var query=this.query;if(!query){return}if(!this.full&&"("!==query[0]){query="("+query+")"}this._mq=window.matchMedia(query);this._add();this.queryHandler(this._mq)},queryHandler:function(mq){this._setQueryMatches(mq.matches)}});class IronSelection{/**
   * @param {!Function} selectCallback
   * @suppress {missingProvide}
   */constructor(selectCallback){this.selection=[];this.selectCallback=selectCallback}/**
     * Retrieves the selected item(s).
     *
     * @returns Returns the selected item(s). If the multi property is true,
     * `get` will return an array, otherwise it will return
     * the selected item or undefined if there is no selection.
     */get(){return this.multi?this.selection.slice():this.selection[0]}/**
     * Clears all the selection except the ones indicated.
     *
     * @param {Array} excludes items to be excluded.
     */clear(excludes){this.selection.slice().forEach(function(item){if(!excludes||0>excludes.indexOf(item)){this.setItemSelected(item,!1)}},this)}/**
     * Indicates if a given item is selected.
     *
     * @param {*} item The item whose selection state should be checked.
     * @return {boolean} Returns true if `item` is selected.
     */isSelected(item){return 0<=this.selection.indexOf(item)}/**
     * Sets the selection state for a given item to either selected or deselected.
     *
     * @param {*} item The item to select.
     * @param {boolean} isSelected True for selected, false for deselected.
     */setItemSelected(item,isSelected){if(null!=item){if(isSelected!==this.isSelected(item)){// proceed to update selection only if requested state differs from
// current
if(isSelected){this.selection.push(item)}else{var i=this.selection.indexOf(item);if(0<=i){this.selection.splice(i,1)}}if(this.selectCallback){this.selectCallback(item,isSelected)}}}}/**
     * Sets the selection state for a given item. If the `multi` property
     * is true, then the selected state of `item` will be toggled; otherwise
     * the `item` will be selected.
     *
     * @param {*} item The item to select.
     */select(item){if(this.multi){this.toggle(item)}else if(this.get()!==item){this.setItemSelected(this.get(),!1);this.setItemSelected(item,!0)}}/**
     * Toggles the selection state for `item`.
     *
     * @param {*} item The item to toggle.
     */toggle(item){this.setItemSelected(item,!this.isSelected(item))}}_exports.IronSelection=IronSelection;;var ironSelection={IronSelection:IronSelection};_exports.$ironSelection=ironSelection;const IronSelectableBehavior={/**
   * Fired when iron-selector is activated (selected or deselected).
   * It is fired before the selected items are changed.
   * Cancel the event to abort selection.
   *
   * @event iron-activate
   */ /**
       * Fired when an item is selected
       *
       * @event iron-select
       */ /**
           * Fired when an item is deselected
           *
           * @event iron-deselect
           */ /**
               * Fired when the list of selectable items changes (e.g., items are
               * added or removed). The detail of the event is a mutation record that
               * describes what changed.
               *
               * @event iron-items-changed
               */properties:{/**
     * If you want to use an attribute value or property of an element for
     * `selected` instead of the index, set this to the name of the attribute
     * or property. Hyphenated values are converted to camel case when used to
     * look up the property of a selectable element. Camel cased values are
     * *not* converted to hyphenated values for attribute lookup. It's
     * recommended that you provide the hyphenated form of the name so that
     * selection works in both cases. (Use `attr-or-property-name` instead of
     * `attrOrPropertyName`.)
     */attrForSelected:{type:String,value:null},/**
     * Gets or sets the selected element. The default is to use the index of the
     * item.
     * @type {string|number}
     */selected:{type:String,notify:!0},/**
     * Returns the currently selected item.
     *
     * @type {?Object}
     */selectedItem:{type:Object,readOnly:!0,notify:!0},/**
     * The event that fires from items when they are selected. Selectable
     * will listen for this event from items and update the selection state.
     * Set to empty string to listen to no events.
     */activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},/**
     * This is a CSS selector string.  If this is set, only items that match the
     * CSS selector are selectable.
     */selectable:String,/**
     * The class to set on elements when selected.
     */selectedClass:{type:String,value:"iron-selected"},/**
     * The attribute to set on elements when selected.
     */selectedAttribute:{type:String,value:null},/**
     * Default fallback if the selection based on selected with
     * `attrForSelected` is not found.
     */fallbackSelection:{type:String,value:null},/**
     * The list of items from which a selection can be made.
     */items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},/**
     * The set of excluded elements where the key is the `localName`
     * of the element that will be ignored from the item list.
     *
     * @default {template: 1}
     */_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this);this._selection=new IronSelection(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this);this._addListener(this.activateEvent)},detached:function(){if(this._observer){dom(this).unobserveNodes(this._observer)}this._removeListener(this.activateEvent)},/**
   * Returns the index of the given item.
   *
   * @method indexOf
   * @param {Object} item
   * @returns Returns the index of the item
   */indexOf:function(item){return this.items?this.items.indexOf(item):-1},/**
   * Selects the given value.
   *
   * @method select
   * @param {string|number} value the value to select.
   */select:function(value){this.selected=value},/**
   * Selects the previous item.
   *
   * @method selectPrevious
   */selectPrevious:function(){var length=this.items.length,index=length-1;if(this.selected!==void 0){index=(+this._valueToIndex(this.selected)-1+length)%length}this.selected=this._indexToValue(index)},/**
   * Selects the next item.
   *
   * @method selectNext
   */selectNext:function(){var index=0;if(this.selected!==void 0){index=(+this._valueToIndex(this.selected)+1)%this.items.length}this.selected=this._indexToValue(index)},/**
   * Selects the item at the given index.
   *
   * @method selectIndex
   */selectIndex:function(index){this.select(this._indexToValue(index))},/**
   * Force a synchronous update of the `items` property.
   *
   * NOTE: Consider listening for the `iron-items-changed` event to respond to
   * updates to the set of selectable items after updates to the DOM list and
   * selection state have been made.
   *
   * WARNING: If you are using this method, you should probably consider an
   * alternate approach. Synchronously querying for items is potentially
   * slow for many use cases. The `items` property will update asynchronously
   * on its own to reflect selectable items in the DOM.
   */forceSynchronousItemUpdate:function(){if(this._observer&&"function"===typeof this._observer.flush){// NOTE(bicknellr): `dom.flush` above is no longer sufficient to trigger
// `observeNodes` callbacks. Polymer 2.x returns an object from
// `observeNodes` with a `flush` that synchronously gives the callback any
// pending MutationRecords (retrieved with `takeRecords`). Any case where
// ShadyDOM flushes were expected to synchronously trigger item updates
// will now require calling `forceSynchronousItemUpdate`.
this._observer.flush()}else{this._updateItems()}},// UNUSED, FOR API COMPATIBILITY
get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(eventName){this.listen(this,eventName,"_activateHandler")},_removeListener:function(eventName){this.unlisten(this,eventName,"_activateHandler")},_activateEventChanged:function(eventName,old){this._removeListener(old);this._addListener(eventName)},_updateItems:function(){var nodes=dom(this).queryDistributedElements(this.selectable||"*");nodes=Array.prototype.filter.call(nodes,this._bindFilterItem);this._setItems(nodes)},_updateAttrForSelected:function(){if(this.selectedItem){this.selected=this._valueForItem(this.selectedItem)}},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(selected){if(!this.items){return}var item=this._valueToItem(this.selected);if(item){this._selection.select(item)}else{this._selection.clear()}// Check for items, since this array is populated only when attached
// Since Number(0) is falsy, explicitly check for undefined
if(this.fallbackSelection&&this.items.length&&this._selection.get()===void 0){this.selected=this.fallbackSelection}},_filterItem:function(node){return!this._excludedLocalNames[node.localName]},_valueToItem:function(value){return null==value?null:this.items[this._valueToIndex(value)]},_valueToIndex:function(value){if(this.attrForSelected){for(var i=0,item;item=this.items[i];i++){if(this._valueForItem(item)==value){return i}}}else{return+value}},_indexToValue:function(index){if(this.attrForSelected){var item=this.items[index];if(item){return this._valueForItem(item)}}else{return index}},_valueForItem:function(item){if(!item){return null}if(!this.attrForSelected){var i=this.indexOf(item);return-1===i?null:i}var propValue=item[dashToCamelCase(this.attrForSelected)];return propValue!=void 0?propValue:item.getAttribute(this.attrForSelected)},_applySelection:function(item,isSelected){if(this.selectedClass){this.toggleClass(this.selectedClass,isSelected,item)}if(this.selectedAttribute){this.toggleAttribute(this.selectedAttribute,isSelected,item)}this._selectionChange();this.fire("iron-"+(isSelected?"select":"deselect"),{item:item})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},// observe items change under the given node.
_observeItems:function(node){return dom(node).observeNodes(function(mutation){this._updateItems();this._updateSelected();// Let other interested parties know about the change so that
// we don't have to recreate mutation observers everywhere.
this.fire("iron-items-changed",mutation,{bubbles:!1,cancelable:!1})})},_activateHandler:function(e){var t=e.target,items=this.items;while(t&&t!=this){var i=items.indexOf(t);if(0<=i){var value=this._indexToValue(i);this._itemActivate(value,t);return}t=t.parentNode}},_itemActivate:function(value,item){if(!this.fire("iron-activate",{selected:value,item:item},{cancelable:!0}).defaultPrevented){this.select(value)}}};_exports.IronSelectableBehavior=IronSelectableBehavior;var ironSelectable={IronSelectableBehavior:IronSelectableBehavior};_exports.$ironSelectable=ironSelectable;Polymer({_template:html`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[IronResizableBehavior,IronSelectableBehavior],properties:{// as the selected page is the only one visible, activateEvent
// is both non-sensical and problematic; e.g. in cases where a user
// handler attempts to change the page and the activateEvent
// handler immediately changes it back
activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(selected,old){this.async(this.notifyResize)}});const IronMultiSelectableBehaviorImpl={properties:{/**
     * If true, multiple selections are allowed.
     */multi:{type:Boolean,value:!1,observer:"multiChanged"},/**
     * Gets or sets the selected elements. This is used instead of `selected`
     * when `multi` is true.
     */selectedValues:{type:Array,notify:!0,value:function(){return[]}},/**
     * Returns an array of currently selected items.
     */selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],/**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @method select
   * @param {string|number} value the value to select.
   */select:function(value){if(this.multi){this._toggleSelected(value)}else{this.selected=value}},multiChanged:function(multi){this._selection.multi=multi;this._updateSelected()},// UNUSED, FOR API COMPATIBILITY
get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){if(!this.multi){IronSelectableBehavior._updateAttrForSelected.apply(this)}else if(this.selectedItems&&0<this.selectedItems.length){this.selectedValues=this.selectedItems.map(function(selectedItem){return this._indexToValue(this.indexOf(selectedItem))},this).filter(function(unfilteredValue){return null!=unfilteredValue},this)}},_updateSelected:function(){if(this.multi){this._selectMulti(this.selectedValues)}else{this._selectSelected(this.selected)}},_selectMulti:function(values){values=values||[];var selectedItems=(this._valuesToItems(values)||[]).filter(function(item){return null!==item&&item!==void 0});// clear all but the current selected items
this._selection.clear(selectedItems);// select only those not selected yet
for(var i=0;i<selectedItems.length;i++){this._selection.setItemSelected(selectedItems[i],!0)}// Check for items, since this array is populated only when attached
if(this.fallbackSelection&&!this._selection.get().length){var fallback=this._valueToItem(this.fallbackSelection);if(fallback){this.select(this.fallbackSelection)}}},_selectionChange:function(){var s=this._selection.get();if(this.multi){this._setSelectedItems(s);this._setSelectedItem(s.length?s[0]:null)}else{if(null!==s&&s!==void 0){this._setSelectedItems([s]);this._setSelectedItem(s)}else{this._setSelectedItems([]);this._setSelectedItem(null)}}},_toggleSelected:function(value){var i=this.selectedValues.indexOf(value),unselected=0>i;if(unselected){this.push("selectedValues",value)}else{this.splice("selectedValues",i,1)}},_valuesToItems:function(values){return null==values?null:values.map(function(value){return this._valueToItem(value)},this)}};/** @polymerBehavior */_exports.IronMultiSelectableBehaviorImpl=IronMultiSelectableBehaviorImpl;const IronMultiSelectableBehavior=[IronSelectableBehavior,IronMultiSelectableBehaviorImpl];_exports.IronMultiSelectableBehavior=IronMultiSelectableBehavior;var ironMultiSelectable={IronMultiSelectableBehaviorImpl:IronMultiSelectableBehaviorImpl,IronMultiSelectableBehavior:IronMultiSelectableBehavior};_exports.$ironMultiSelectable=ironMultiSelectable;Polymer({is:"iron-selector",behaviors:[IronMultiSelectableBehavior]});let categoryList=[{name:"mens_outerwear",title:"Vegetables",image:"images/vegetables.jpg",placeholder:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAADAA4DASIAAhEBAxEB/8QAXAABAQEAAAAAAAAAAAAAAAAAAAIEAQEAAAAAAAAAAAAAAAAAAAACEAAAAwYHAQAAAAAAAAAAAAAAERMBAhIyYhQhkaEDIwUVNREBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3dkr5e8tfpwuneJITOzIcmQpit037Bw4mnCVNOpAAQv/2Q=="},{name:"ladies_outerwear",title:"Fruts",image:"images/fruts.jpg",placeholder:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAADAA4DASIAAhEBAxEB/8QAWQABAQAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAIDEAABAwMFAQAAAAAAAAAAAAARAAEygRIDIlITMwUVEQEBAAAAAAAAAAAAAAAAAAAAQf/aAAwDAQACEQMRAD8Avqn5meQ0kwk1UyclmLtNj7L4PQoioFf/2Q=="}];class ShopCategoryData extends PolymerElement{static get is(){return"shop-category-data"}static get properties(){return{categoryName:String,itemName:String,categories:{type:Array,value:categoryList,readOnly:!0,notify:!0},category:{type:Object,computed:"_computeCategory(categoryName)",notify:!0},item:{type:Object,computed:"_computeItem(category.items, itemName)",notify:!0},failure:{type:Boolean,notify:!0,readOnly:!0}}}_getCategoryObject(categoryName){for(let i=0,c;c=this.categories[i];++i){if(c.name===categoryName){return c}}}_computeCategory(categoryName){// Fetch the items of the category. Note that the fetch is asynchronous,
// which means `category.items` may not be set initially (but that path
// will be notified when the fetch completes).
let categoryObj=this._getCategoryObject(categoryName);this._fetchItems(categoryObj,1);return categoryObj}_computeItem(items,itemName){if(!items||!itemName){return}for(let i=0,item;item=items[i];++i){if(item.name===itemName){return item}}}_fetchItems(category,attempts){this._setFailure(!1);// Only fetch the items of a category if it has not been previously set.
if(!category||category.items){return}this._getResource({url:"data/"+category.name+".json",onLoad(e){this.set("category.items",JSON.parse(e.target.responseText))},onError(e){this._setFailure(!0)}},attempts)}_getResource(rq,attempts){let xhr=new XMLHttpRequest;xhr.addEventListener("load",rq.onLoad.bind(this));xhr.addEventListener("error",e=>{// Flaky connections might fail fetching resources
if(1<attempts){this._getResourceDebouncer=Debouncer.debounce(this._getResourceDebouncer,timeOut.after(200),this._getResource.bind(this,rq,attempts-1))}else{rq.onError.call(this,e)}});xhr.open("GET",rq.url);xhr.send()}refresh(){if(this.categoryName){// Try at most 3 times to get the items.
this._fetchItems(this._getCategoryObject(this.categoryName),3)}}}customElements.define(ShopCategoryData.is,ShopCategoryData);const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<dom-module id="shop-button">
  <template>
    <style>

      shop-button {
        display: inline-block;
      }

      shop-button > * {
        display: inline-block;
        box-sizing: border-box;
        border: 2px solid #000;
        background-color: #FFF;
        font-size: 14px;
        font-weight: 500;
        color: var(--app-primary-color);
        margin: 0;
        padding: 8px 44px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 0;
        outline: none;
        -webkit-appearance: none;
      }

      shop-button > *:focus {
        background-color: #c5cad3;
      }

      shop-button > *:active {
        background-color: #000;
        color: #FFF;
      }

      @media (max-width: 767px) {

        /* Responsive buttons are used in shop-detail, shop-cart and shop-checkout */
        shop-button[responsive] {
          @apply --layout-fixed-bottom;
          height: 64px;
          z-index: 1;
        }

        shop-button[responsive] > * {
          background-color: var(--app-accent-color);
          border: none;
          color: white;
          padding: 20px;
          width: 100%;
          height: 100%;
          font-size: 15px;
        }

        shop-button[responsive] > *:focus {
          background-color: var(--app-accent-color);
        }

      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content);class ShopImage extends PolymerElement{static get template(){return html`
    <style>

      :host {
        display: block;
        position: relative;
        overflow: hidden;
        background-size: cover;
        background-position: center;
      }

      img {
        @apply --layout-fit;
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
        opacity: 0;
        transition: 0.5s opacity;
        @apply --shop-image-img;
      }

    </style>

    <img id="img" alt\$="[[alt]]" on-load="_onImgLoad" on-error="_onImgError">
`}static get is(){return"shop-image"}static get properties(){return{alt:String,src:{type:String,observer:"_srcChanged"},placeholderImg:{type:String,observer:"_placeholderImgChanged"}}}_srcChanged(src){this.$.img.removeAttribute("src");this.$.img.style.transition="";this.$.img.style.opacity=0;if(src){this.$.img.src=src}}_onImgLoad(){this.$.img.style.transition="0.5s opacity";this.$.img.style.opacity=1}_onImgError(){if(!this.placeholderImg){this.$.img.src="data:image/svg+xml,"+encodeURIComponent("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"#CCC\" d=\"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z\"/></svg>")}}_placeholderImgChanged(placeholder){this.style.backgroundImage="url('"+placeholder+"')"}}customElements.define(ShopImage.is,ShopImage);class ShopHome extends PolymerElement{static get template(){return html`
    <style include="shop-button">

      .image-link {
        outline: none;
      }

      .image-link > shop-image::after {
        display: block;
        content: '';
        position: absolute;
        transition-property: opacity;
        transition-duration: 0s;
        transition-delay: 90ms;
        pointer-events: none;
        opacity: 0;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        outline: #2196F3 auto 5px;
        outline: -moz-mac-focusring auto 5px;
        outline: -webkit-focus-ring-color auto 5px;
      }

      .image-link:focus > shop-image::after {
        opacity: 1;
      }

      .item {
        display: block;
        text-decoration: none;
        text-align: center;
        margin-bottom: 40px;
      }

      .item:nth-of-type(3),
      .item:nth-of-type(4) {
        display: inline-block;
        width: 50%;
      }

      shop-image {
        position: relative;
        height: 320px;
        overflow: hidden;
        --shop-image-img: {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -9999px;
          right: -9999px;
          max-width: none;
        };
      }

      h2 {
        font-size: 1.3em;
        font-weight: 500;
        margin: 32px 0;
      }

      .item:nth-of-type(3) > h2,
      .item:nth-of-type(4) > h2 {
        font-size: 1.1em;
      }

      @media (max-width: 767px) {
        shop-image {
          height: 240px;
        }

        h2 {
          margin: 24px 0;
        }

        .item:nth-of-type(3) > shop-button > a,
        .item:nth-of-type(4) > shop-button > a {
          padding: 8px 24px;
        }
      }

    </style>

    <dom-repeat items="[[categories]]">
      <template strip-whitespace="">
        <div class="item">
          <a class="image-link" href\$="/list/[[item.name]]">
            <shop-image src="[[item.image]]" alt="[[item.title]]" placeholder-img="[[item.placeholder]]"></shop-image>
          </a>
          <h2>[[item.title]]</h2>
          <shop-button>
            <a aria-label\$="[[item.title]] Shop Now" href\$="/list/[[item.name]]">Comprar ahora</a>
          </shop-button>
        </div>
      </template>
    </dom-repeat>
`}static get is(){return"shop-home"}static get properties(){return{categories:{type:Array},visible:{type:Boolean,observer:"_visibleChanged"}}}_visibleChanged(visible){if(visible){this.dispatchEvent(new CustomEvent("change-section",{bubbles:!0,composed:!0,detail:{title:"Home"}}))}}}customElements.define(ShopHome.is,ShopHome);window.performance&&performance.mark&&performance.mark("shop-app - before register");class ShopApp extends PolymerElement{static get template(){return html`
    <style>

      :host {
        display: block;
        position: relative;
        padding-top: 130px;
        padding-bottom: 64px;
        min-height: 100vh;
        --app-primary-color: #202020;
        --app-secondary-color: #757575;
        --app-accent-color: #172C50;
        --paper-button-ink-color: var(--app-accent-color);
        --paper-icon-button-ink-color: var(--app-accent-color);
        --paper-spinner-color: var(--app-accent-color);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        color: var(--app-primary-color);
      }

      app-header {
        @apply --layout-fixed-top;
        z-index: 1;
        background-color: rgba(255, 255, 255, 0.95);
        --app-header-shadow: {
          box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.2);
          height: 10px;
          bottom: -10px;
        };
      }

      paper-icon-button {
        color: var(--app-primary-color);
      }

      .logo {
        text-align: center;
      }

      .logo a {
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.3em;
        color: var(--app-primary-color);
        text-decoration: none;
        /* required for IE 11, so this <a> can receive pointer events */
        display: inline-block;
        pointer-events: auto;
      }

      .left-bar-item {
        width: 40px;
      }

      .menu-btn {
        display: none;
      }

      .cart-btn-container {
        position: relative;
        width: 40px;
      }

      .announcer {
        position: fixed;
        height: 0;
        overflow: hidden;
      }

      :host(:not([page=detail])) .back-btn {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      #tabContainer {
        position: relative;
        height: 66px;
      }

      shop-tabs, shop-tab {
        --shop-tab-overlay: {
          border-bottom: 2px solid var(--app-accent-color);
        };
      }

      shop-tabs {
        height: 100%;
      }

      shop-tab {
        margin: 0 10px;
      }

      shop-tab a {
        display: inline-block;
        outline: none;
        padding: 9px 5px;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        color: var(--app-primary-color);
      }

      .cart-badge {
        position: absolute;
        top: -2px;
        right: 0;
        width: 20px;
        height: 20px;
        background-color: var(--app-accent-color);
        border-radius: 50%;
        color: white;
        font-size: 12px;
        font-weight: 500;
        pointer-events: none;
        @apply --layout-vertical;
        @apply --layout-center-center;
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        line-height: 40px;
        text-decoration: none;
        color: var(--app-secondary-color);
      }

      .drawer-list a.iron-selected {
        color: black;
        font-weight: bold;
      }

      shop-cart-modal {
        z-index: 2;
      }

      app-drawer {
        z-index: 3;
      }

      iron-pages {
        max-width: 1440px;
        margin: 0 auto;
      }

      footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        margin-top: 20px;
        line-height: 24px;
      }

      footer > a {
        color: var(--app-secondary-color);
        text-decoration: none;
      }

      footer > a:hover {
        text-decoration: underline;
      }

      .demo-label {
        box-sizing: border-box;
        width: 120px;
        padding: 6px;
        margin: 8px auto 0;
        background-color: var(--app-primary-color);
        color: white;
        text-transform: uppercase;
      }

      /* small screen */
      @media (max-width: 767px) {
        :host {
          padding-top: 64px;
        }

        .menu-btn {
          display: block;
        }

        :host([page=detail]) .menu-btn {
          display: none;
        }
      }

    </style>

    <shop-analytics key="UA-39334307-16"></shop-analytics>
    <!--
      app-location and app-route elements provide the state of the URL for the app.
    -->
    <app-location route="{{route}}"></app-location>
    <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>

    <iron-media-query query="max-width: 767px" query-matches="{{smallScreen}}"></iron-media-query>

    <!--
      shop-category-data provides the list of categories.
    -->
    <shop-category-data categories="{{categories}}"></shop-category-data>

    <!--
      shop-cart-data maintains the state of the user's shopping cart (in localstorage) and
      calculates the total amount.
    -->
    <shop-cart-data id="cart" cart="{{cart}}" num-items="{{numItems}}" total="{{total}}"></shop-cart-data>

    <app-header role="navigation" id="header" effects="waterfall" condenses="" reveals="">
      <app-toolbar>
        <div class="left-bar-item">
          <paper-icon-button class="menu-btn" icon="menu" on-click="_toggleDrawer" aria-label="Categories">
          </paper-icon-button>
          <a class="back-btn" href="/list/[[categoryName]]" tabindex="-1">
            <paper-icon-button icon="arrow-back" aria-label="Go back"></paper-icon-button>
          </a>
        </div>
        <div class="logo" main-title=""><a href="/" aria-label="SHOP Home">FRUT SHOP</a></div>
        <div class="cart-btn-container">
          <a href="/cart" tabindex="-1">
            <paper-icon-button icon="shopping-cart" aria-label\$="Shopping cart: [[_computePluralizedQuantity(numItems)]]"></paper-icon-button>
          </a>
          <div class="cart-badge" aria-hidden="true" hidden\$="[[!numItems]]">[[numItems]]</div>
        </div>
      </app-toolbar>

      <!-- Lazy-create the tabs for larger screen sizes. -->
      <div id="tabContainer" sticky\$="[[_shouldShowTabs]]" hidden\$="[[!_shouldShowTabs]]">
        <dom-if if="[[_shouldRenderTabs]]">
          <template>
            <shop-tabs selected="[[categoryName]]" attr-for-selected="name">
              <dom-repeat items="[[categories]]" as="category" initial-count="4">
                <template>
                <shop-tab name="[[category.name]]">
                  <a href="/list/[[category.name]]">[[category.title]]</a>
                </shop-tab>
                </template>
              </dom-repeat>
            </shop-tabs>
          </template>
        </dom-if>
      </div>
    </app-header>

    <!-- Lazy-create the drawer for small screen sizes. -->
    <dom-if if="[[_shouldRenderDrawer]]">
      <template>
      <!-- Two-way bind \`drawerOpened\` since app-drawer can update \`opened\` itself. -->
      <app-drawer opened="{{drawerOpened}}" swipe-open="" tabindex="0">
        <iron-selector role="navigation" class="drawer-list" selected="[[categoryName]]" attr-for-selected="name">
          <dom-repeat items="[[categories]]" as="category" initial-count="4">
            <template>
              <a name="[[category.name]]" href="/list/[[category.name]]">[[category.title]]</a>
            </template>
          </dom-repeat>
        </iron-selector>
      </app-drawer>
      </template>
    </dom-if>

    <iron-pages role="main" selected="[[page]]" attr-for-selected="name" selected-attribute="visible" fallback-selection="404">
      <!-- home view -->
      <shop-home name="home" categories="[[categories]]"></shop-home>
      <!-- list view of items in a category -->
      <shop-list name="list" route="[[subroute]]" offline="[[offline]]"></shop-list>
      <!-- detail view of one item -->
      <shop-detail name="detail" route="[[subroute]]" offline="[[offline]]"></shop-detail>
      <!-- cart view -->
      <shop-cart name="cart" cart="[[cart]]" total="[[total]]"></shop-cart>
      <!-- checkout view -->
      <shop-checkout name="checkout" cart="[[cart]]" total="[[total]]" route="{{subroute}}"></shop-checkout>
      
      <shop-404-warning name="404"></shop-404-warning>
    </iron-pages>

    <footer>
      <a href="#">Costa Rica</a>
      <div class="demo-label">SOFTWARE LICENSE PROS</div>
    </footer>

    <!-- a11y announcer -->
    <div class="announcer" aria-live="assertive">[[_a11yLabel]]</div>
`}static get is(){return"shop-app"}static get properties(){return{page:{type:String,reflectToAttribute:!0,observer:"_pageChanged"},numItems:{type:Number,value:0},_shouldShowTabs:{computed:"_computeShouldShowTabs(page, smallScreen)"},_shouldRenderTabs:{computed:"_computeShouldRenderTabs(_shouldShowTabs, loadComplete)"},_shouldRenderDrawer:{computed:"_computeShouldRenderDrawer(smallScreen, loadComplete)"}}}static get observers(){return["_routePageChanged(routeData.page)"]}constructor(){super();window.performance&&performance.mark&&performance.mark("shop-app.created")}ready(){super.ready();// Custom elements polyfill safe way to indicate an element has been upgraded.
this.removeAttribute("unresolved");// listen for custom events
this.addEventListener("add-cart-item",e=>this._onAddCartItem(e));this.addEventListener("set-cart-item",e=>this._onSetCartItem(e));this.addEventListener("clear-cart",e=>this._onClearCart(e));this.addEventListener("change-section",e=>this._onChangeSection(e));this.addEventListener("announce",e=>this._onAnnounce(e));this.addEventListener("dom-change",e=>this._domChange(e));this.addEventListener("show-invalid-url-warning",e=>this._onFallbackSelectionTriggered(e));// listen for online/offline
afterNextRender(this,()=>{window.addEventListener("online",e=>this._notifyNetworkStatus(e));window.addEventListener("offline",e=>this._notifyNetworkStatus(e))})}_routePageChanged(page){if("list"===this.page){this._listScrollTop=window.pageYOffset}this.page=page||"home";// Close the drawer - in case the *route* change came from a link in the drawer.
this.drawerOpened=!1}_pageChanged(page,oldPage){if(null!=page){let cb=this._pageLoaded.bind(this,!!oldPage);switch(page){case"list":new Promise((res,rej)=>_require.default(["./shop-list.js"],res,rej)).then(bundle=>bundle&&bundle.$shopList||{}).then(cb);break;case"detail":new Promise((res,rej)=>_require.default(["./shop-detail.js"],res,rej)).then(bundle=>bundle&&bundle.$shopDetail||{}).then(cb);break;case"cart":new Promise((res,rej)=>_require.default(["./shop-cart.js"],res,rej)).then(bundle=>bundle&&bundle.$shopCart||{}).then(cb);break;case"checkout":new Promise((res,rej)=>_require.default(["./shop-checkout.js"],res,rej)).then(bundle=>bundle&&bundle.$shopCheckout||{}).then(cb);break;default:this._pageLoaded(!!oldPage);}}}_pageLoaded(shouldResetLayout){this._ensureLazyLoaded();if(shouldResetLayout){// The size of the header depends on the page (e.g. on some pages the tabs
// do not appear), so reset the header's layout only when switching pages.
timeOut.run(()=>{this.$.header.resetLayout()},1)}}_ensureLazyLoaded(){// load lazy resources after render and set `loadComplete` when done.
if(!this.loadComplete){afterNextRender(this,()=>{new Promise((res,rej)=>_require.default(["./lazy-resources.js"],res,rej)).then(bundle=>bundle&&bundle.$lazyResources||{}).then(()=>{// Register service worker if supported.
if("serviceWorker"in navigator){navigator.serviceWorker.register("service-worker.js",{scope:"/"})}this._notifyNetworkStatus();this.loadComplete=!0})})}}_notifyNetworkStatus(){let oldOffline=this.offline;this.offline=!navigator.onLine;// Show the snackbar if the user is offline when starting a new session
// or if the network status changed.
if(this.offline||!this.offline&&!0===oldOffline){if(!this._networkSnackbar){this._networkSnackbar=document.createElement("shop-snackbar");this.root.appendChild(this._networkSnackbar)}this._networkSnackbar.innerHTML=this.offline?"You are offline":"You are online";this._networkSnackbar.open()}}_toggleDrawer(){this.drawerOpened=!this.drawerOpened}_setMeta(attrName,attrValue,content){let element=document.head.querySelector(`meta[${attrName}="${attrValue}"]`);if(!element){element=document.createElement("meta");element.setAttribute(attrName,attrValue);document.head.appendChild(element)}element.setAttribute("content",content||"")}// Elements in the app can notify section changes.
// Response by a11y announcing the section and syncronizing the category.
_onChangeSection(event){let detail=event.detail,scrollTop=0;// Scroll to the top of the page when navigating to a non-list page. For list view,
// scroll to the last saved position only if the category has not changed.
if("list"===this.page){if(this.categoryName===detail.category){scrollTop=this._listScrollTop}else{// Reset the list view scrollTop if the category changed.
this._listScrollTop=0}}// Use `Polymer.AppLayout.scroll` with `behavior: 'silent'` to disable header scroll
// effects during the scroll.
scroll({top:scrollTop,behavior:"silent"});this.categoryName=detail.category||"";// Announce the page's title
if(detail.title){document.title=detail.title+" - SHOP";this._announce(detail.title+", loaded");// Set open graph metadata
this._setMeta("property","og:title",detail.title);this._setMeta("property","og:description",detail.description||document.title);this._setMeta("property","og:url",document.location.href);this._setMeta("property","og:image",detail.image||this.baseURI+"images/shop-icon-128.png");// Set twitter card metadata
this._setMeta("property","twitter:title",detail.title);this._setMeta("property","twitter:description",detail.description||document.title);this._setMeta("property","twitter:url",document.location.href);this._setMeta("property","twitter:image:src",detail.image||this.baseURI+"images/shop-icon-128.png")}}_onAddCartItem(event){if(!this._cartModal){this._cartModal=document.createElement("shop-cart-modal");this.root.appendChild(this._cartModal)}this.$.cart.addItem(event.detail);this._cartModal.open();this._announce("Item added to the cart")}_onSetCartItem(event){let detail=event.detail;this.$.cart.setItem(detail);if(0===detail.quantity){this._announce("Item deleted")}else{this._announce("Quantity changed to "+detail.quantity)}}_onClearCart(){this.$.cart.clearCart();this._announce("Cart cleared")}// Elements in the app can notify a change to be a11y announced.
_onAnnounce(e){this._announce(e.detail)}// A11y announce the given message.
_announce(message){this._a11yLabel="";this._announceDebouncer=Debouncer.debounce(this._announceDebouncer,timeOut.after(100),()=>{this._a11yLabel=message})}// This is for performance logging only.
_domChange(e){if(window.performance&&performance.mark&&!this.__loggedDomChange){let target=e.composedPath()[0],host=target.getRootNode().host;if(host&&host.localName.match(this.page)){this.__loggedDomChange=!0;performance.mark(host.localName+".domChange")}}}_onFallbackSelectionTriggered(){this.page="404"}_computeShouldShowTabs(page,smallScreen){return("home"===page||"list"===page||"detail"===page)&&!smallScreen}_computeShouldRenderTabs(_shouldShowTabs,loadComplete){return _shouldShowTabs&&loadComplete}_computeShouldRenderDrawer(smallScreen,loadComplete){return smallScreen&&loadComplete}_computePluralizedQuantity(quantity){return quantity+" "+(1===quantity?"item":"items")}}customElements.define(ShopApp.is,ShopApp);const $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML=`<dom-module id="shop-common-styles">
  <template>
    <style>

      [hidden] {
        display: none !important;
      }

      header {
        text-align: center;
      }

      header > h1 {
        margin: 0 0 4px 0;
        font-size: 1.3em;
        font-weight: 500;
      }

      header > span {
        color: var(--app-secondary-color);
        font-size: 12px;
      }

      header > shop-button[responsive] {
        margin-top: 20px;
      }

      @media (max-width: 767px) {

        header > h1 {
          font-size: 1.1em;
        }

      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$1.content);const $_documentContainer$2=document.createElement("template");$_documentContainer$2.innerHTML=`<dom-module id="shop-form-styles">
  <template>
    <style>

      :host {
        display: block;
      }

      .main-frame {
        margin: 0 auto;
        padding: 0 24px 48px 24px;
        max-width: 900px;
        overflow: hidden;
      }

      .subsection:not([visible]) {
        display: none;
      }

      .empty-cart {
        text-align: center;
        white-space: nowrap;
        color: var(--app-secondary-color);
      }

      h2 {
        font-size: 13px;
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$2.content);const $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML=`<dom-module id="shop-select">
  <template>
    <style>

      shop-select {
        display: inline-block;
        position: relative;
        /* create a layer to avoid invalidation from other controls*/
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }

      shop-select > shop-md-decorator {
        display: block;
        border-top: 1px solid #ccc;
        height: 1px;
        speak: none;
      }

      shop-select > shop-md-decorator::after {
        content: '\\25BC';
        display: block;
        position: absolute;
        bottom: calc(50% - 0.75em);
        right: 8px;
        speak: none;
        -webkit-transform: scaleY(.6);
        transform: scaleY(.6);
        color: var(--app-secondary-color);
        pointer-events: none;
      }

      shop-select > select {
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: 8px 24px 8px 0;
        border: none;
        background-color: transparent;
        border-radius: 0;
        font-size: 1em;
        font-weight: 300;
        color: var(--app-primary-color);
        overflow: hidden;
        margin: 0;
        outline: none;
      }

      shop-select > select::-ms-expand {
        display: none;
      }

      shop-select > shop-md-decorator > shop-underline {
        display: block;
        background-color: var(--app-accent-color);
        height: 2px;
        position: relative;
        top: -1px;
        width: 100%;
        margin: auto;
        -webkit-transform: scale3d(0, 1, 1);
        transform: scale3d(0, 1, 1);
        transition: -webkit-transform 0.2s ease-in;
        transition: transform 0.2s ease-in;
      }

      shop-select > select:focus + shop-md-decorator > shop-underline {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        transition: -webkit-transform 0.2s ease-out;
        transition: transform 0.2s ease-out;
      }

      shop-select > select:focus + shop-md-decorator::before,
      shop-select > select:focus + shop-md-decorator::after,
      shop-select > select:focus {
        color: black;
      }

      /* hide the focus ring in firefox */
      shop-select > select:focus:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
      }

      shop-select > [prefix] {
        position: absolute;
        left: 0px;
        top: calc(50% - 8px);
        line-height: 16px;
        color: var(--app-secondary-color);
        pointer-events: none;
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$3.content)});