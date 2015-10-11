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
		Alert : __webpack_require__(3),
		Confirm : __webpack_require__(6)
	}

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4)
	module.exports.template = __webpack_require__(5)


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		data : function(){
			return {
				status : 0
			}
		},
		props : {
			show : {
				type : Boolean,
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
				if (val && this.status === 0) {
					this.fixed();
					this.status = 1;
				}
			}
		},
		methods : {
			fixed : function(){
				var target = this.$$.modal,
					top = target.getBoundingClientRect().height / 2;
				target.style.marginTop = '-'+top+'px';
			}
		}
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div class=\"t-modal\" v-show=\"show\" v-el=\"modal\">\n\t<div class=\"t-modal__header\">\n\t\t<h3 class=\"t-modal__header--tt\" v-show=\"title !== ''\" v-text=\"title\"></h3>\n\t\t<p class=\"t-modal__header--ct\" v-text=\"content\"></p>\n\t</div>\n\t<div class=\"t-modal__footer\">\n\t\t<a class=\"t-modal__footer--btn\" v-on=\"click:show=false\">确定</a>\n\t</div>\n</div>";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7)
	module.exports.template = __webpack_require__(8)


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
		data : function(){
			return {
				status : 0
			}
		},
		props : {
			show : {
				type : Boolean,
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
				if (val && this.status === 0) {
					this.fixed();
					this.status = 1;
				}
			}
		},
		methods : {
			fixed : function(){
				var target = this.$$.modal,
					top = target.getBoundingClientRect().height / 2;
				target.style.marginTop = '-'+top+'px';
			}
		}
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"t-modal\" v-show=\"show\" v-el=\"modal\">\n\t<div class=\"t-modal__header\">\n\t\t<h3 class=\"t-modal__header--tt\" v-show=\"title !== ''\" v-text=\"title\"></h3>\n\t\t<p class=\"t-modal__header--ct\" v-text=\"content\"></p>\n\t</div>\n\t<div class=\"t-modal__footer\">\n\t\t<a class=\"t-modal__footer--btn\" v-on=\"click:show=false, click: onCancel\">取消</a>\n\t\t<a class=\"t-modal__footer--btn\" v-on=\"click:show=false, click: onConfirm\">确定</a>\n\t</div>\n</div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-mui.js.map