(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueMui"] = factory();
	else
		root["vueMui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		Alert : __webpack_require__(9),
		Confirm : __webpack_require__(12),
		Prompt : __webpack_require__(15),
		Actions : __webpack_require__(22),
		Panel : __webpack_require__(27),
		Accordion : __webpack_require__(32),
		Button : __webpack_require__(37),
		Progress : __webpack_require__(42)
	}

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10)
	module.exports.template = __webpack_require__(11)


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
		data : function(){
			return {
				name : 'fix-position'
			}
		},
		props : {
			show : {
				type : Boolean,
				default : false,
				twoWay : true
			},
			title : {
				type : String
			},
			content : {
				type : String
			},
		},
		watch : {
			'show' : function(val){
				var $body = document.body;
	
				val === true ? $body.classList.add(this.name) : $body.classList.remove(this.name);
			}
		}
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"t-dimmer\" v-show=\"show\"></div>\n<div class=\"t-modal\" v-show=\"show\">\n\t<div class=\"t-modal__header\">\n\t\t<h3 class=\"t-modal__header--tt\" v-show=\"title !== ''\" v-text=\"title\"></h3>\n\t\t<p class=\"t-modal__header--ct\" v-text=\"content\"></p>\n\t</div>\n\t<div class=\"t-modal__footer\">\n\t\t<a class=\"t-modal__footer--btn\" v-on=\"click:show=false\">确定</a>\n\t</div>\n</div>";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13)
	module.exports.template = __webpack_require__(14)


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
		data : function(){
			return {
				name : 'fix-position'
			}
		},
		props : {
			show : {
				type : Boolean,
				default: false,
				twoWay : true
			},
			title : {
				type : String
			},
			content : {
				type : String
			},
			onConfirm : {
				type : Function
			},
			onCancel : {
				type : Function
			}
		},
		watch : {
			'show' : function(val){
				var $body = document.body;
	
				val === true ? $body.classList.add(this.name) : $body.classList.remove(this.name);
			}
		}
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"t-dimmer\" v-show=\"show\"></div>\n<div class=\"t-modal\" v-show=\"show\">\n\t<div class=\"t-modal__header\">\n\t\t<h3 class=\"t-modal__header--tt\" v-show=\"title !== ''\" v-text=\"title\"></h3>\n\t\t<p class=\"t-modal__header--ct\" v-text=\"content\"></p>\n\t</div>\n\t<div class=\"t-modal__footer\">\n\t\t<a class=\"t-modal__footer--btn\" v-on=\"click:show=false, click: onCancel\">取消</a>\n\t\t<a class=\"t-modal__footer--btn\" v-on=\"click:show=false, click: onConfirm\">确定</a>\n\t</div>\n</div>";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16)
	module.exports = __webpack_require__(20)
	module.exports.template = __webpack_require__(21)


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./prompt.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./prompt.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".t-prompt-ipt {\n  padding: 0 20px 20px;\n}\n.t-prompt-ipt input {\n  width: 100%;\n  line-height: 26px;\n  padding: 3px 10px;\n  border: 1px solid #ddd;\n  box-sizing: border-box;\n}\n", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
		data : function(){
			return {
				key : '',
				name : 'fix-position'
			}
		},
		props : {
			show : {
				type : Boolean,
				default: false,
				twoWay : true
			},
			title : {
				type : String
			},
			content : {
				type : String
			},
			onConfirm : {
				type : Function
			},
			onCancel : {
				type : Function
			}
		},
		watch : {
			'show' : function(val){
				var $body = document.body;
	
				val === true ? $body.classList.add(this.name) : $body.classList.remove(this.name);
			}
		},
		methods : {
			//将输入内容传入回调函数
			fnConfirm : function(){
				this.onConfirm(this.key);
			}
		}
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"t-dimmer\" v-show=\"show\"></div>\n<div class=\"t-modal\" v-show=\"show\">\n\t<div class=\"t-modal__header\">\n\t\t<h3 class=\"t-modal__header--tt\" v-show=\"title !== ''\" v-text=\"title\"></h3>\n\t\t<p class=\"t-modal__header--ct\" v-text=\"content\"></p>\n\t</div>\n\t<div class=\"t-prompt-ipt\">\n\t\t<input type=\"text\" v-model=\"key\">\n\t</div>\n\t<div class=\"t-modal__footer\">\n\t\t<a class=\"t-modal__footer--btn\" v-on=\"click:show=false, click: onCancel\">取消</a>\n\t\t<a class=\"t-modal__footer--btn\" v-on=\"click:show=false, click: fnConfirm\">确定</a>\n\t</div>\n</div>";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(23)
	module.exports = __webpack_require__(25)
	module.exports.template = __webpack_require__(26)


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./actions.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./actions.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".actions-transition {\n  -webkit-transition: all ease .5s;\n  transition: all ease .5s;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.actions-enter,\n.actions-leave {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n", ""]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {
		data : function(){
			return {
				name : 'fix-position'
			}
		},
		props : {
			show : {
				type : Boolean,
				default : false,
				twoWay : true
			},
			title : {
				type : String,
				default : ''
			}
		},
		watch : {
			'show' : function(val){
				console.log(val)
			}
		}
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"t-dimmer\" v-show=\"show\"></div>\n<div class=\"t-actions\" v-show=\"show\" v-transition=\"actions\">\n\t<ul class=\"t-actions__list\">\n\t\t<li class=\"t-actions__list--tt\" v-if=\"title\" v-text=\"title\"></li>\n\t\t<content></content>\n\t</ul>\n\t<a class=\"t-actions__cancel\" v-on=\"click:show=false\">取消</a>\n</div>";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28)
	module.exports = __webpack_require__(30)
	module.exports.template = __webpack_require__(31)


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./panel.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".toggle-transition {\n  transition: height .5s ease;\n  overflow: hidden;\n}\n.toggle-enter,\n.toggle-leave {\n  height: 0!important;\n}\n", ""]);
	
	// exports


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
		data : function(){
			return {
				height : ''
			}
		},
		props : {
			type : {
				type : String,
				default : 'normal' // normal || fold
			},
			show : {
				type : Boolean,
				default : true
			},
			title : {
				type : String
			}
		},
		//get target height
		ready : function(){
			this.init();
		},
		methods : {
			toggle : function(){
				if (this.type !== 'normal') {
					this.show = !this.show;
					this.$dispatch('toggle', this); //send event for accordion
				}
			},
			//if type is normal, body is open
			init : function(){
				if (this.type === 'normal') {
					this.show = true;
				} else {
					var target = this.$$.panel;
	
					target.style.display = 'block';
					target.style.height = target.getBoundingClientRect().height + 'px';
					if (!this.show) target.style.display = 'none';
				}
			}
		}
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div class=\"t-panel\">\n\t<header class=\"t-panel__hd\" v-on=\"click:toggle\" v-text=\"title\"></header>\n\t<div class=\"t-panel__bd\" v-el=\"panel\" v-show=\"show\" v-transition=\"toggle\">\n\t\t<div class=\"t-panel__bd--ct\">\n\t\t\t<content></content>\t\n\t\t</div>\n\t</div>\n</div>";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33)
	module.exports = __webpack_require__(35)
	module.exports.template = __webpack_require__(36)


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./accordion.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./accordion.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".t-accordion .t-panel + .t-panel {\n  border-top: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = {
		ready : function(){
			this.init();
			this.listen();
		},
		methods : {
			//just first child show
			init : function(){
				this.$children.forEach(function(x, i){
					if (i > 0) {
						x.show = false;
					}
				})
			},
			listen : function(){
				var that = this;
				that.$on('toggle', function(child){
					that.$children.forEach(function(x){
						if (child !== x) {
							x.show = false;
						}
					})
				})
			}
		}
	}

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<div class=\"t-accordion\">\n\t<content></content>\n</div>";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(38)
	module.exports = __webpack_require__(40)
	module.exports.template = __webpack_require__(41)


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = {
		props : {
			type : {
				type : String,
				default : 'normal'
			},
			onClick : {
				type : Function
			},
			opt : {
				type : null,
				default : ''
			}
		},
		methods : {
			callback : function(){
				this.opt === '' ? this.onClick() : this.onClick(this.opt);
			}
		}
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<a class=\"t-btn\" v-class=\"'t-btn--'+type\" v-on=\"click:callback\">button</a>";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43)
	module.exports = __webpack_require__(45)
	module.exports.template = __webpack_require__(46)


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./progress.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./progress.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".t-progress-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  z-index: 999;\n  -webkit-transition: all 200ms ease;\n  transition: all 200ms ease;\n}\n", ""]);
	
	// exports


/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = {
		data : function(){
			return {
				timer : null,
				size : 100
			}
		},
		props : {
			color : {
				type : String,
				default : '#4c9cee'
			},
			status : {
				type : String, //hide start done
				default : 'hide'
			},
			num : {
				type : Number,
				default : 100
			}
		},
		watch : {
			'status' : function(val) {
				var that = this;
				return {
					'hide' : that.hide,
					'start' : that.start,
					'done' : that.done
				}[val].call(that);
			},
			/**
			 * [if the num change, set progress bar size ,restart progress bar]
			 * @param  {[type]} val [description]
			 * @return {[type]}     [description]
			 */
			'num' : function(val){
				if (val !== 100) {
					clearInterval(this.timer);
					this.size = 100 - this.num; //get size by num
					this.setSize(this.size);
					this.start();
				} else {
					this.done();
				}
				
			}
		},
		methods : {
			start : function(){
				var that = this,
					count = that.size,
					target = that.$el;
	
				target.style.display = 'block';
	
				that.timer = setInterval(function(){
	
					if (count > 10) {
						count -= 1;
						that.setSize.call(that, count);
					} else {
						clearInterval(this.timer);
					}
					
				}, 1000)
			},
			done : function(){
				var that = this,
					target = that.$el;
	
				that.setSize.call(that, 0);
				clearInterval(this.timer);
				setTimeout(function(){
					target.style.display = 'none';
					that.setSize.call(that, 100); //fix position
					that.size = 100;
				}, 200)
			},
			hide : function(){
				this.$el.style.display = 'none';
			},
			setSize : function(val){
				this.$el.style.transform = 'translate3d(-'+ val +'%,0,0)'
				this.$el.style.webkitTransform = 'translate3d(-'+ val +'%,0,0)'
			}
		}
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"t-progress-bar\" v-style=\"background-color:color,\n\t\t\t\t\t\t\t\t\t transform:'translate3d(-100%,0,0)',\n\t\t\t\t\t\t\t\t\t display:'none'\"></div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-mui.js.map