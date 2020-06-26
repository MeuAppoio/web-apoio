module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/flaticon.css":
/*!*************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/css/flaticon.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/style.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/css/style.js ***!
  \*********************************************************************************************************/
/*! exports provided: ResetCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCSS", function() { return ResetCSS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flaticon.css */ "../../node_modules/common/src/assets/css/flaticon.css");
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flaticon_css__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  html {\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  *:focus {\n    outline: none;\n  }\n\n  html,\n  html a,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  a,\n  p,\n  li,\n  dl,\n  th,\n  dt,\n  input,\n  textarea,\n  span,\n  div {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  // modal default style\n  .reuseModalOverlay {\n    z-index: 99999 !important;\n  }\n\n  .reuseModalHolder {\n    padding: 0 !important;\n    &.demo_switcher_modal {\n      border: 0 !important;\n      background-color: rgba(16, 30, 77, 0.9) !important;\n      .innerRndComponent {\n        border-radius: 8px !important;\n      }\n    }\n  }\n\n  button.modalCloseBtn {\n    position: fixed !important;\n    z-index: 999991 !important;\n    background-color: transparent !important;\n    top: 10px !important;\n    right: 10px !important;\n    min-width: 34px !important;\n    min-height: 34px !important;\n    padding: 0 !important;\n    span.btn-icon {\n      font-size: 22px !important;\n      transform: rotate(45deg) !important;\n    }\n\n    &.alt {\n      border-radius: 50% !important;\n      z-index: 999999 !important;\n      padding: 0 !important;\n      transition: all 0.3s ease !important;\n      top: 25px !important;\n      right: 30px !important;\n      min-width: 40px !important;\n      min-height: 40px !important;\n\n      span.btn-icon {\n        font-size: 20px !important;\n      }\n\n      &:hover {\n        opacity: 0.88 !important;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ResetCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/agency-banner.png":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/agency-banner.png ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/agency-banner-2d3e4917c1371847a8c974363dc4f88e.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/blog/coach.jpg":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/blog/coach.jpg ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/coach-48d1b81e5bc6903079e77d4a8c395c72.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/blog/gestor.jpg":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/blog/gestor.jpg ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gestor-50f9feb8cba653b28050de409d9da000.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/blog/psicologa.jpg":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/blog/psicologa.jpg ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/psicologa-571ca8fe2aede6d89ee1a5e2b629046f.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/client/denny.png":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/client/denny.png ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAIjCAMAAACDL2QNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACHFBMVEW8vLyRkZECAgIAAACZmZm7u7uHh4dUVFQpKSkUFBQHBwcEBAQQEBArKytSUlKIiIhhYWG5ubmWlpZ+fn4mJiaysrIYGBh0dHQaGhoXFxdvb2+6urqgoKAICAienp5FRUWurq41NTUlJSWioqK0tLQjIyN6enp8fHytra0iIiIPDw+cnJw2NjZXV1cnJyenp6cMDAwsLCwODg5YWFiKioqhoaGkpKSTk5NmZmYcHBywsLC3t7c6OjozMzMuLi6fn5+MjIwDAwMvLy9AQEBfX18BAQFNTU2vr68wMDBycnJkZGQNDQ1CQkJiYmKqqqqampqpqakxMTEWFhZQUFCXl5dubm4SEhIgICBpaWlnZ2cFBQWFhYVWVla1tbUdHR0oKCg/Pz99fX0JCQm2trYGBgZ/f38qKio8PDyAgIA+Pj6Dg4NtbW2CgoJjY2NDQ0OdnZ2rq6tBQUFdXV24uLhsbGwyMjKJiYlra2sbGxuzs7OQkJAKCgpcXFw3NzeYmJgkJCQhISFISEhGRkZVVVVxcXFqampwcHB2dnY0NDSPj48eHh6GhoaSkpJMTExeXl4tLS1KSkplZWV3d3eUlJSLi4tTU1MfHx9zc3OVlZVLS0sTExN4eHiNjY2jo6N1dXWoqKhOTk4ZGRlbW1s5OTmxsbFRUVGOjo5ERESmpqZPT0+bm5tgYGCsrKyBgYEVFRV7e3tZWVmEhIRoaGj+/v6SDV18AAAAAWJLR0Sz2m3/fgAACPdJREFUeNrt2/2bE8UdAPCFJQgHp2C5U6TIi4hIbbEoYH0BtUTUQ05BQREsKlatCtZTa0VFba3aWkRqa7Voq1YttmrrX9ib2Vwu2d2Q5J42eR7u8/mFzOzMMvl+bzczk02SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJzejJlpms7K11ZmnzVn7sC8+YNnn1M5TecF430XdvGfVQbSonM7Gdd30lYW9TuCPTU0nJbk67zzJ+Ox+IIlrTp/d2mX+bow7TRf+XHJV2ZZWszX8hXNEVl5UXnfVRenXeZrdcf5yo9LvqJL0mK+1lyaD8na75X1XXhZ2m2+vt9pvgrjap2vH/Q7hj207vJivio/jFXrr7hyw8ZNV/0oFoavLva95tq063xdFzoMbm62pZNxXT+naH1ocsM5/Q5i71RuTIv5uirW/Hio1mRrNRRvKvTddnPafb7mj7e/vNK2Wem4CmbFycst/Q5iD92aFuOyaiRUbJ8M6m3xr3hHrutofUbSRb5uD+3vmNq4CtbsDC129TuGPXTnvJK43BXKu4cmK5bsCTV3N/Ws3LM3nUK+7g3t901tXHmVeG9deU2/g9g7++8Ls6uf5OJyRyjf1tguLLLSA401mxbFaFarXeYrnun+qY0r755w/IEN/Q5iD900/oYHtgw2x+XBg6G8sbHdQ6Hmp5PlWQ/HPKVLH1naZb4eDe0vateqdFx5o/EavKvfMeyhn4U3/FiSi0tlw+NPHLquqWGcWw9OlmufXJceTrrNV+g5MrVx5VTi5be5/dTljPHk2vE3vCJpE5cg3sV+PlmO+dr71FhSyNfTMZHPNHZ+Nl6L2+ProWoH043OxvWLcPRg20v1DBIWu+t3dJCvyp7ctHk8X9UD8YMjn69KtjHS0HbN7lDx3C9j4fnw+or/xbh2HAlHX+h3DHsoXgoPJR3kK87nRxomjOdXV9S2JAr3w3hxpEfW1StejNfiSw3/5/1J5d5dR+fPm//yodUlq/DOxvVKOLhzf7+D2DuHw7Ti1aRdXMYna7+Kl8yvG6qeqG9IFD+/4odP+uJE8bVYfLpWilG+6DfD9aXAka2rpjSu0WpHE80zxzVhp3Z4qF1cKoe3xvtZyfZGVDLfuCm2fz0rjMZV2sMTx1aOF2YuShstHp3KuN4Ix6bTPu9ZYfX0ZnLauNw7Z8+RLKjzbm1xmpJ8xcVTOhK3Q/b/NqZk4q63cG9a9MDvuh1XkrwVe06jfcMrq5Mf/C3jsmAipINbWp2nbD6fbU5cG17+Pry6YdPEkdGJE1589mt3HXt0JCssbbjCOhpX7fJ6u99B7J1tc8ff79GxNnE5Xr8G9lwwVn6i0vXXO7HPJUnyeHzxTv3Aiexsm+/MimOPxf312u2v83Elf4jd3u13FHvn4bB2OZy0icszDXet+0q/ACvPV7a5Pn9bNldcMbmk/WM81bHJb6s3/imr6W5cyfZ4jfY7iL3zXni/r02UWsbl9Xd3jC3/84JswnHkzrIzle9vrIt3uvfj12MfrJms3zc8M7fbuy6b/m/ralw74g33L/2OYs9seCDsQdT/7Nutv/bvignbXbJWarUfdX/9uqyebDqw8MOTzTtI2fMBH3U1rmPhwNwWd+gzz8I5Yf7213q5w/2o9G8lR1rtH746ka9jyekt+Ti02t7NuCqLw4FP+h3Gnvkkt9Rsn6/k09Bk4O/FA63yNfRxlq4b2+7Hfhaa7exmXJ/H6/bDfoexV+JjfV80VHSQrwvjdsKJ4oGW+/NvxR4z/9F2OPHWOa+bccVp6439DmOvxMf6djZeKh3kKzka2pwq1rfM1yOd3Q5rW8DpUOfjWhInM+f1O469Mjtt7VDLXqfC4ReL9a3ydXu2skpnvtVuPF/Gdss7H9eb8bzL+x3HXplavv4ZDg8W61vkK3u0Ivh4KDm9GfHTqNL5uK4INTf3O4w90z4u/9q0esGMXK8XwuHrimdrka+7Q/XeuHBb1nRg1cZ1uaZxD2RtF39H8VnWp5Ppom1c4t/v8Vyv48XQR+X5ynbl34kPQzXM+G5bPJCmn+baxlnhG53na3mcyEyfp2y2nJ33QQjA9vAqbhm8HorDuXn4c6Fya/Fspfl6MH4fPWdJcij8O1K/ouJX+GtzZw6LrnRBB+Oq+SrUft3vKPZTbh52OP5JN29LbIp1JY+5l+ZrV6g8uCVJtsU7Yn0Nlk0Fn21qe26sG01KlM8Pz2pxpU8f+bhcWrtDTarEJ693lvQty9fseMe6J7xs3qBf8kHxzHe0nj2U52vz9Pr4KpGPS/aM0zcNLZ6KNe+V9C3JV/aAzWB2UcU74rza0xvZR2O6uqHx1lhT/sVjab4q8RvUGck0lo/LWPyC+GA9iJV/x6BeXLa1VJKvuCs/UJsQZHfE+2rPxayJS92Dk18ox53bVne30nx9GHu0WySc0QpxORl2htLqZ3Hrdcmz8cHMdH3plKyYrwti6/rD9tkdceLpj/NiqXoqnrnyfPyf053bOhxXEKeRu/sdsr4qxuWjbBpdPXpg2Ru1jYqB50v7FvK1Jf7E5+3Ja/GL2P0/tdK+2pkXHTp+7dzs9Uj5N6Et8hV/jDGNngQoURKX9w7mVkDDL5X3zedrbGVMbsNjt9kdce2TteK+au7Mi1ulqzxf8feZXyTTWVlcZjX9IvaGV1rcsgr5ymYUTdO37IHEyyaKs79uPHP11auTVkrzFRfu7X+QdCYrn4c9/szEw2fDp1o/pZ7L1+fx6sn9CGFZcw7HTgxO/Lpr/ftfdjuuA/W1AjkPnjzx7RO3fPV/2PrZf/2Juxd8+83oNPpxCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANBT/wV3Yhpm+2PF6AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMS0xNlQwMDo0Nzo1NC0wNjowMMpfwb0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDEtMTZUMDA6NDc6NTQtMDY6MDC7AnkBAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/client/menny.png":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/client/menny.png ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfIAAAIUCAMAAADWul7gAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACOlBMVEW8vLyWlpaQkJCVlZW6urpqampLS0s9PT0wMDArKys4ODhGRkZYWFiFhYWysrKCgoIAAAAUFBSTk5NcXFwzMzMYGBgICAgDAwMODg4dHR0/Pz9paWmlpaWmpqZ0dHRFRUUjIyMVFRUHBwckJCRHR0d3d3epqalsbGxVVVWEhIS7u7uOjo5eXl4xMTEbGxsNDQ0LCws7OztlZWWenp6ioqJQUFAKCgoCAgKKioqtra0QEBB4eHgfHx8BAQGYmJhERESdnZ25ublwcHCBgYG0tLRKSkopKSmhoaE6OjqkpKQ8PDxbW1thYWGfn58nJycvLy+ampocHBwMDAySkpK1tbU3Nze2traDg4OLi4ugoKAPDw99fX2NjY0GBgYZGRkeHh4RERE+Pj5gYGAEBAQoKCh8fHyjo6O3t7enp6eHh4dTU1MuLi6cnJxZWVlWVla4uLg1NTUSEhKurq5JSUmvr69mZmaRkZEqKioaGhpBQUFubm51dXUFBQWZmZlnZ2cgICCqqqpfX19NTU2zs7NPT096enpCQkIWFhZdXV0JCQmPj48TExMiIiKoqKiAgIBOTk4mJiYhISFUVFRaWlptbW12dnZ5eXlzc3NXV1dycnKxsbFMTEybm5s0NDRjY2NiYmIlJSUyMjJ7e3uXl5eJiYlAQEA5OTlkZGQXFxesrKwsLCyIiIiUlJSGhoawsLBxcXFDQ0NoaGirq6tra2tRUVFSUlJ/f39ISEgtLS02NjZ+fn6MjIxvb2/+/v4nn14MAAAAAWJLR0S9PdXSeQAADoRJREFUeNrt3PlfFeUewPFRSeO6jaIedwVE7aBALpDLKU3EUCkXJNMQCwNKE0HEDW8UhVEu3DItzcw2Q9tu3bbb/eMu5/k+sz5z4FD3vs4pP++fmOc8M2d4vjPPPNscywIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+fEaNHj16TKZP4n8jZ9QDY8c9mPu38RMmTsr0uWSxyfagKZEfTc2bNn1GbOas2XPmptx93vwFC/MLCvILFxUt/l3fv2RppIdC2eLFy5aXlMbKSh5esTLFkVatLrddFcsfyXTJZqs1a1OEPL5uvVeAieXFkXs/OjvhZYo9tuF3nECpHWlpINPGx2f5PsvdFHGcys2J0CGqtmS6cLPTE3Z0yKtzQwW4dY2RJ2dbqJQT2+Mj/f550REPhrzmydCnT1WHj7Njp3mM8k3pn8f9Y74dHfLiXUYBTtkdylO73CzlPXUjPIGn0wj53gLj49K9wcM8sy/qIIn9mS7f7FNdHh3yZ+udUqs/0FCm/ywYHciT84STZ9/CwoPO38+N8D5/fviQFzsRbyw5NKsg8mTWTNc5FrzQNKm55cWX9P9VPzXTJZxt4oedOziYvkrf44nH9uYMbh55WQq6/Ig/U54u1ZdUc6rmqA7GspGdwrhhQy6tDds+/FDt4FbrI8dks63dd5Tjuo6Z5yR06JTpzZku4yxzwo4MebxKl1enkzL3pEpY2OplmicVwSn3MthQIpdAdRpf7DmV3OfkUDlOy/17xk0426VSjntZzkmbYrW/htH/298zXcbZ5UhXdMjPSuIr3V5S7TSV9KqX8prca/O8lJY2lTR+JKfQo4L1+hA5HpWTKfIlvaFSYt611asSpgWfKXKC+3IyXcrZpHWhHRnyuNyuM1v8iR3nVdXe4WaSp/dkfx5pipW1WunrVLvMHyLHIpVjQSBtq0p709ms7UtuVqwK7jhJWnRvZbiUs8oEVXm/bYR8r1wGoR7ORJWY52yOUpsNwTwXVOJIxkDOqD3Opc5QqWqi2MVA4m6115PO5iW1OTvy/7MnZK6As05nsk5NFJ8yQn5ZFVV/OP8/VEan8tyvMr0TzPKuSrwygpPYrB7/G1NneFHaZcHEuGqQNzrnclTleS+8a7FK3pqp8s0+PQckZmbIX1FFdTW8g7SHnM75ErU1J5jlmkrcNoKzOBS4XSO8rw75QShVxuKcp8wetWWMtc1VybkZKt8spO6vhjoz5HXS/DUG23YHGnBz1NaKYJYiX/+qZaoSDkSTJOtZj7jq2b02xGlef+vKjdzyD0Op0tpoD2wZEylrVPKsTBd01lCP5tgYywx5TYqSqlXpN/XWOrV1OZjlI5V4S/29aobaKA80Aq0WGVI/1Or/rg+sYYSHd+IzAhV7zuIxk8/kGXsdUQf/ONMlnS3a25zGmBHy0aqkbpv7qI54m974UOUqCeaQEVg9CfaBbT6G45KjvElvf6I2Px3p2Us7/9AwuWQw+eGMlXGWUYNehcl7zQj5Z6qkPjf3OeivP+P5autpf4ZP1SOh4Lre/MI2GgV6fOQNZ1s1qhvllo93XLxupUf64XeGyRXqyt3n1EO3Sw2cGSHfG93lsSwZUd2ht7arrS8HvM8rpZ/vjooNyEjpPq9VcK5RpSxyE46pK28w3E+/1hBL9unv5h2xhiV1Q/nA0LnmxlS24uGPdz9oKfPuEiPkY1RJPWjsVCd36D29WSszGRfcMbA1MmBf3u3uoWfJ3AqjtkFt76x0c6jHy+bWOV/antvDLNGJn6hQ+YYbSh1rB3qV9zd5op6UoUgj5ItVUb1t7PWVRGSds71DZqvKlqklMwNzpN6v+Nq3y2Y7UPtLh7/xUffzAZXQ22AHJN4Zop9e94n0Ie2Hh4llZyLQw7jPqQ5Wge4+GSGPqyrAroncy7a96Y1zesbSPl+VW6IXS5S96N+l55TcafKMlvE7f1/+nh3tqciVa9XXlmzb46x1Oj3MsG6PdN1LOyxY1krV9F6it8yhmNuqsIyBykIp6xNeSs/7obULid7Q+rfdUgdvTv49INXAHt/deSJFyO2q2ojzftz7fOZw/br4uPAFej9r/ThZFsudkjdDLrdzX2gs5jNd2tv9iVP9D2G74JLxZdvkUkjObUgDvs1/2F5nz5LnO9s3tq+cP65CJ0S0HvWYuTq3oqhLwm+pZFzOkzxJRaHcnfQ0Q94tTd3bgWnHb5xa3PdwfKQqfHfmjg59WWu/Sm9o1d30RGABk34sF3zrflXNTX2ks+aJn/Z9Ufm2b4b6H6U7YR+8aGHwxlQ3kjddaYbc+k4KbLzvcTnJXef2kZPU83lUlXw8tAylRur+j6r7zMdFnVxb6/3Nhri+P9eaj/PgBZa/20pJRgHtriGy3Edq1YD0F15CRMir9cq3w+6K8VEL3aL+p05q17do/fFL1bWTmvaP1+stqkK33xWVOkPiVRVoi29Ql8PB4JCstUCOE5qxGbT9k5rrdfMmXpaLx25MOUn7pmSouGTB0mtFZn7vJUSE3PpBh7fi8xeaaitXXd2q2uP/8jeImk/qh65bd7bou355qC19zFcdhxdJdXcWLQuvSKw9IPd+yn9hQF8UfTWRH8dXy8eJsxYsZ/rZv9Y3KuTW+Igq+0eZf74mOV41nuyWtULSQgseu2e6h3jDSse3knmIFw/0Fz0V9VmzvvIS71kY1KHWwJz2J0WGfGOvEfEbcfUqk/2TytAtdX9o2lPa1PWh15l+cg7xc3on2SyP/6FWR+kb+Z75Sccv8lEsvcvrr292sjTaAsMTkSG34ttjgYAXLHFmw2XV6y3194FQHR4/ZLbRLPfpXFJppUcGBpYOkaNVOofPGR9s0S+tFEzMdFFnCVkaGiyN6JBb1rlpXsATW5O1rDzhZd5TVrkZdadMyYQHa6/KUUrTfU/x3RTx9JHKvzzc7S7Wb7iVdlpIaldvJBRuClAzGzPl7+Do5I4JTyar2IKqPGknySphNQgia5Ebe4yvkCnV4FpT92F+M82BkQck91BZBmSANzTtViQzdfaXGzJd1NniiD0M43WeeHtLhxsn9WJivvpTZtvuml/xs9E8tKxf3eMvsdJSNHzILanAg68kOy87FXZnuqSzxshD7ifLSmWRizT8e81M283QnvG1CGqsdDye6ug+MlPrf6HB6ZzZe3osaH8s5BtUlnfV3/9Wf0e8ZCLR8o/DPyPtb5kg7d9opUHahqvd7eaIwdVjKs81LyGuG4n2Zd5P8fyxkMtsi8x9S39tUapMvtm2jdKI/2KNvDviX/A86bf9S/JuvGMeZLN3kIHnFx3OT0RMsvSHniBOxBO8hOaXfshrq3cbc1V3kznqJXmqyh6xRFyWnfu61DL4uWux7i1U+K6qlSql0Xw3dKd3Mt3qz7VGlrg0zb9yE6RtaXe9kOlC/hMwO2n3diaf2l+H8jWpNvIx2ehQG/VmR1t+e8LrIk2V7n1y7FNeMDjl7ZMjo/LG4rRqee5Ln39fKLSaLNGJuU/tOxLx8r0WhmWGXCqD8HjKjyrVWQa1PrDl+l5N03W5PyVRKW8V/Jr8u0UWtGz2cveHE4SM5evKXC6UG+E8rwermXvSZ9v1F/llq/8zM+Q5qsF1PtiJrla3ZJsz3PayKuIL4Y62RMubp7sh957MlemF7V7HSm7Nvu+Dx6ie4a8p5HnQ1x3KIx1wp2egGwoF/GZEWiJG355TBRh4Ktb1B5viWxLhdlpSp0TCfQNZr3ZzVi3JnPtBd13MRTlI8IX0Vplm7debtVI3BF82bpY2Yakzp64XT/DLMOmJCLlEKt+3ZKlVplmme22676Q19pN/v5qDKrHQuffXyPY053N9/z7h7qAnb37wHaN5XKiZp6fs/F39Or2wzZm6l7flzNof0SJCniOrH/rdqfDuu1KovtH5xWXSJ9rmzaxsKgtFS14XKfcm1vQ8vNubXiy3cOJltyvdpH+95qi7T7M0BxJ5bp4tenlMlZOiV+yMfz0K75cboqZVnpUyLL2lHsJblulfCwqU3ia9jDl/hRpR79jv/NSQ+96Q/oGx/3j7xKVB762UuKb32XktWaXEp/6ol9Yc8v2WWKdeozPrWvKhv/G3sXogvc1ZTbPSHsrMTBdw9omcSVvqFNiUhRfcFQ6h3/f6wSvVCwunOEtTvZdR9Q+MPejfq0bCl+vescuc3RL5hSUznI1ZgXePLjnHThxcn9/o5Nl3xDgGIU9PZMjd0Uuf1eGBzPmNESXsDq/F5WEwoymwj+4/33ITliXMYxwKrafe32fmmeXN1t0l5COTYonEnVA81xaZu456JVy++d7TXq8yDU2e5fSrVN9LSr+9HTpG7KjxIkrNhVCeisu+UaDIH3Yk5KmlXCIxznf/rZ0QuWw8Z34g6OdPeC16/ZLpL+Ge+4eSvt57WFc+4H//oas3arYt56r/ixp7A78qEbOHQshHoPrK7Ia1jX3nc5dOTv0C2I47W9fvilWU79zzZufvfTUkp3P7zcFvql9b9XNRqnfI4qNW/NqwL9bVVjV23TcjOjoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZJP/ApNr0I297NYoAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAxLTE5VDA2OjQxOjQ3LTA2OjAwFAwTHgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMS0xOVQwNjo0MTo0Ny0wNjowMGVRq6IAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/footer-bg.png":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/footer-bg.png ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/footer-bg-61e61976e8a4ea1e4ff698142517ef3a.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/google-icon.jpg":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/google-icon.jpg ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBARXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAFaADAAQAAAABAAAAFgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAFgAVAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/dAAQAA//aAAwDAQACEQMRAD8A/cT9tH9oT9rX9qv9qG7/AGM/2Zh4h8D+E9MkurTUNW0/Ubrwy/jS103ZH4j8aeI/F1gPtOn/AA20u4eXTLPT9LuJk1uQKt5batrGq6ToGn/ylmfiVi/FjPcXw54Z51hsdlGX5nmOS47G5Rjo8s8xyivLC5usxxmHlKphcNgq6dNYdf7zSnRrqGJjjMJCP+rXgD4W+CPgp4PUPHzxf/sziHO8XChiMLgcXhaWbLIKuMvPKcgynIsT+6xXFmNpxjjK+KxlKEsvi28PWwOAwWNzLEcLdf8ABGn9rj4Y/wBmeOfg9+0D4buviNFfWEl7/YuseL/AGp2ck91Elzfab4sjM02pJp5la9uRew6TcXNnDcfZoLq+a30+49CXgzxdlfssdk3EGGlmUalNz9hWxmXVYOUkpVKWMTk6ipuTnLnjRlKClyRlPkpy+io/T48D+L/rnDnHfhhm1HhSWHxMcN/aGByPifCYiNKjOVHDYvJJQpwwcsSoRw9F0KmOpUcRUpe2q0cNGpiqX9Gfww8P+MPCvw88HeHPiB4zk+InjXRtA0+w8T+NpNLs9FbxJrEMIF5qQ0uwRLW0SSTKRKoMskSJNcu9y8zv/R2V4fGYTLsHhswxrzHHUcPTp4rHOlCj9ZrRXv1fZU1GME3otOZpXnebk5f5T8YZnkWdcU59mvDGQR4W4fx+Z4rE5Pw9DGYjMI5TgKk70MJ9cxMpVq0ox96bb5Izk4UYwowhA//Q/qH/AGOviN8PfC37SPjD4P8AiXWdKg+Lmo+HNUtbCyuDGdSSTRtWhu9d0BroqfI1TUoYItdXRWlW7utO0KTU5IBbxWcsv+P37NTw9454F438X8bxrkuPyqlmaXDuCxuZznhp5pnnDme5hDPVhcFVca2Jpwq83NmMqSoyq0K9DDVq044qNL9/+kT40+Heb5pwj4YZNxdgsXxJKhPiXFcPYKtKtQwlCeXUHlcMdWpN4OjnE8Di8TicJlkpPMIZbOvi6tGjhq+Hnip/22/2Yf20Pil8Vp/iB8D/ANou3+Evwz07wRpdrqGk3nxj+J/gC0tNR0iTV7vWtbutO8KaJfaFBbtZzWzz6nNdLM0VqxuljigRm/6PfA3xS8E+FOE6fD3HXhtU4v4oxOe4qrh8ZR4L4W4hrVsNjI4OjgcDSxObY6hj6lRVoVVTwsKTgpVUqTlKpJH8D+JPBXiLnmeyzXhni6GQ5NRy2hCtQqcQ51lVOFbDyxFTE4mdHA4aphowdOUOatKpzNQvPlUUfh/8N/iF+3D8S7vxRa/Dz49fHXxVH4YubKDU73T/AIn/ABF1C0ZL6XU49OurY3mppcxW18NMvJbfz7a1nkiQedBG6FE/ufifh3wK4Yo5VV4j8P8AgLKpZpTr1MLQxHC3DmHrJ0IYWWJpVfY4R0pVaDxVGFT2dSrCM5PknKLUpfzXkua+JedVMdDKOKeJ8asFOlGvUpZ3m1Wm1VlXVGcPa14zUKqo1JQ5oQk4r3opq0f/0f6X/wBvz/gnAfiT4l1P9pX4HeLrH4cfErToo/EHi6yvZ9V0zStbvtDijlh8WaLrGgW15qnh7xdDBaxCcwWUtnrF1DbX7z6VqQv7/UPzfizgz67XnnWV4iODxsLVsRGTqU6dWdJXWIpVKUZVKOISjryrlqSSm5U5885/zB4xeB/9u4+vxzwnmVHJM9oqOMzKlVniKGHxVbCxUoZjhcThKdWvgsyhGnHn5KUqeJqRhWc8NXVatX/J7wr4p/bZ/at8RW37O+pftEanqVjd30ejXln4r8S61B4f1RYJEHl6/PpPh+71PxJZlkWVrfXbe/juJEV542dQ9fKZBnvHazrLp5PxTj8szXLMdQxWX5hh8dicJXwuMwtSNShiKeJw1NV3OnOKlFzlK7WqabP53y3MfFbxBx9LgyrxtiKsJ1oYecMfj8VDCVuSV7YueGwdTEY6ndKThi41ozkk5q6vL+j/APY2/ZF8H/sh/DSfwlo14viDxb4kvINY8e+MGtDZnW9Tt4pIbGx0+0ea6msvD+hwT3EGk2c91czebdahqE8v2nUZ0T+tePvFXjrxRnkOJ44zPDZhjciyijldKeAwcctwlataDx+aTwdOc6NPH5pWpwq42eHjQw79lRpYfC4bDUaFCH9z+HPAOC8P8j/s+lWWNzLFzhiM2zJUnRWLxEIuNOnRpOVSVLC4aMpxoU5TnLmnVrSanWlGP//Z"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/group/grupo1.jpg":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/group/grupo1.jpg ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/grupo1-e386b7d10ea4f4bfb89e489224b52334.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/group/grupo2.jpg":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/group/grupo2.jpg ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/grupo2-40c6aaf8120ed64a961e42b967776669.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/group/grupo3.jpg":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/group/grupo3.jpg ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/grupo3-af608dc12f5f623eb0ffeabfababdf01.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/login-bg.jpg":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/login-bg.jpg ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/login-bg-e83ee3496f127d370a043d08d1bcc19c.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/logo.png":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/logo.png ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-6c2402a2601f7a9e6b92816166eb6754.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/particles/particle-1.png":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/particles/particle-1.png ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTItMjZUMTg6MzE6MDErMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTItMjZUMTg6MzE6MDErMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTEyLTI2VDE4OjMxOjAxKzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZkZjM5ZjUxLWU2OWItNGZhZi1hMWRmLWFmMWJiYWE2NDllNCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJhNTkzNDE0LTg3YjMtMDA0Zi04ZGRkLWYwZjhiNGJiN2QxMiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY3N2E4MGVhLWZlZDMtNDkzZS04YzFiLTVjMGNjOWQ4ZDMxZSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Njc3YTgwZWEtZmVkMy00OTNlLThjMWItNWMwY2M5ZDhkMzFlIiBzdEV2dDp3aGVuPSIyMDE4LTEyLTI2VDE4OjMxOjAxKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmRmMzlmNTEtZTY5Yi00ZmFmLWExZGYtYWYxYmJhYTY0OWU0IiBzdEV2dDp3aGVuPSIyMDE4LTEyLTI2VDE4OjMxOjAxKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7pmYchAAACW0lEQVRIibWWPWgUQRTHf6uXRAwSPaM4YBFOMWcT41cq104sLLRVrLSTNNoE1CCBoJWVIIiNhY2NCLZWjlZGRRQuCeK3LIgOnkcIAbmzmFnu3Xq7c3uXPFh485+Z92PnzZuZYMfTX2TYIDDp/DvA7+SAKCxmzf/PCp7+E8AR5+8ELgO1XISErfP0HxT+CHAN2LhWwE1AOaGNAleAgbUAjov+GtBw/hgwhT8duYFyOR8B90T7MHDJMz8XMEgAXwIPgQdCC4FJpU2wGsASsNn5Bvjg/PvAYzHuGHB+NYCHhP+aZv4A7gJPRPuk0uZMr8ADwp9L9DWAW8AzoZ1W2pzqFijLoQ68aTOmDtzE5ja2c0qb490A9wl9nvST5S9wA3jn2gFwQWlzNC8wmb8sWwFmgUUR76LSZqJTYEBr/l54gERhcQmYAT45qQBMKW3GOgGWgC3Or9IsBx/0D/acjZzUD0wrbUZ9QFnsc7SWgw9qgKvATydtAGaUNiOdAl91ChPQHw5addIgMKu0Ue2AyXLwbZg06HdgGlhy0hBwXWkznATKcligh4s2CosfsTldcdKwgw7JK0aWQ+7lBFDabMeuUhnYS+sVpoCzsRAA+0WnPEHSrA/YrbSJg5dp7vA0q8XAEhC/hqrA+zaDt4rAZTenzwOoA1+BCvAWeB4Dk3ffemCXC7zHgbZ5goPdKPPiW4jC4rIc0A44jr1o+z3BG8A3F7iCPd6+RGExs3YL2FqRj6W0h+Yydvcuij+odfMuHcBumqRFInAF+IzNSU9WwD4hbgMTLmgMqWbM69r+AexPlS0Ld8GYAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/particles/particle-2.png":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/particles/particle-2.png ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTItMjZUMTg6MzE6NDQrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTItMjZUMTg6MzE6NDQrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTEyLTI2VDE4OjMxOjQ0KzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmExNTEwMzEyLTEwNDUtNGJlNS05NDkzLWQ5ZmRhYzBhMWNhYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZhNmY4NzRlLTIwOTktMGI0Mi04OWFkLTUyOWU3M2EyZTU2MiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjk4NmNlODAxLTY3MzktNDFkYi04MTZlLTZkYTJlMDVlZDMwYSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTg2Y2U4MDEtNjczOS00MWRiLTgxNmUtNmRhMmUwNWVkMzBhIiBzdEV2dDp3aGVuPSIyMDE4LTEyLTI2VDE4OjMxOjQ0KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTE1MTAzMTItMTA0NS00YmU1LTk0OTMtZDlmZGFjMGExY2FiIiBzdEV2dDp3aGVuPSIyMDE4LTEyLTI2VDE4OjMxOjQ0KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6gIYR3AAABTElEQVQ4ja3TPUscURTG8V/GVUujWGgKG8EE7GwsFLSSWE9nl88xrZ/FylqLRf0AorAkTWwUERGbgYCLbLGbwjN4HfbFhT3Vc87z3D+Xe2a+fD0+PMCaydXfDEsTBMJyhvMJQ88baGEDKzG8wdEYkPT57tHK0MMJumGs+fwbf0+yXZyUedHLYvCEqyT8E40RwEbkqroq8+IJsmR4gXboBWyNgG5hPnQ7zqtD2zhL+m3MDQDOhV/VWZkX1YU+QOEaj6GnsTcAuh++yF+nZh1aLa0X/TpWa5lV/EjzZV700kAdCg/ePrP0VlOhp6KvqlXmxUMd0A8KTbyGXsRm6M3ohd/sd3gQ9EWyTezgG3aT2UXkPg2FSzyHnsUvzET/HH7fGgbt+ri06cQ79f4HjgWFO/ypzX7jdtihUVDeltEJ3TFgOeNC/3n/GprRD63/4qlNWYiwMj4AAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/particles/particle-3.png":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/particles/particle-3.png ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTItMjZUMTg6MzI6MjIrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTItMjZUMTg6MzI6MjIrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTEyLTI2VDE4OjMyOjIyKzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY1OTM5MGZlLWFkMDgtNDI0NS1hMGY2LWI2NzA0ZWQ2ZmIyYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjQzYzkyYTRiLTg2NTktMDY0OS04ZmZjLWU1MjkyZTcxZTZmZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA3YjZmNjhmLTUwNTctNGVkZi1iZmU4LTJmYjM0Y2U1MmFmYyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDdiNmY2OGYtNTA1Ny00ZWRmLWJmZTgtMmZiMzRjZTUyYWZjIiBzdEV2dDp3aGVuPSIyMDE4LTEyLTI2VDE4OjMyOjIyKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjU5MzkwZmUtYWQwOC00MjQ1LWEwZjYtYjY3MDRlZDZmYjJhIiBzdEV2dDp3aGVuPSIyMDE4LTEyLTI2VDE4OjMyOjIyKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vh1RiAAACL0lEQVRIiZ3VwUtVQRQG8J+Xa4sXlNUiEoKwIrLSilL0LWwbbfsTgjYt7n+itA6iddEu2lqUYlF5QQQpRQisFhlCufCJtZh5vvH5nvn84MDcMzPfOTP3nG+6agPj2uAMxnAa61jANFbTRXlZtNsvb+Pvx11k8fsIbuIG5vEWK21Z9yDvxp2EOEUXLkVbikEWOyG/isNxvIZHOIEqzsUA0Ie+zcGJ73iD+bwstnZk0nTnGR7gePx+iZlk/mQMcrnFyX5hCrN5WdS0WNCfEK/jY9P8DzzHwxh0I5k7JlxnsTk40d8q8/s4FceT0fZCBUPRKol/C0/SzM8mxBt49x9iWM/LYhLjwhWuRX+GsZS8mow/CdeyL+RlUcvLYgaPE3dvnbxX+PuEI03tl7gJPcl4o06eZj2ncbxOkfIsZEJ19EfHX6ExOsbm4MRJoQ/qPNMZRjQa44tQbgdBNeGZz8tiNcOFZMFBsz4qNNYOngyHEucOxesAoxoNuZSXxUqdPFW3exhuCrgnNgcnKriWuLZPn+G1UH4Eab2NArfs7Lp2GEqS+ZaXxbZKZljGM/xONlQieRGD9bQh7o7ku7KmIbnz+CzI7aggQmJGw8JDMRc3p9V0XeN0q5FnFznU8B4fhLqvamhNhgFcEcp1Cj9jInVMN+t5q8diK2Y5J4hZVUMaunA+Woo/mG0maveG1rEYrTcGuWj3G7CFF/UHohPyOlbwVJCKEaHxKviKV3lZLLfa9A+MnIZHfbAW9AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/particles/particle-4.png":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/particles/particle-4.png ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTItMjZUMTg6MzI6NTYrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTItMjZUMTg6MzI6NTYrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTEyLTI2VDE4OjMyOjU2KzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc2MTNiNWMzLWRjM2YtNGYyZS1iMjM3LTU5YTI1N2RiMzgyMyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU0MmM1OGQzLTk0Y2YtMTg0NC05ZjI2LWQyMTViNjQ5MDE0ZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjhiMDVlMWI0LWM5OTAtNDJiZC1iMWQ3LTk4OTNkZGY5OTk2MCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGIwNWUxYjQtYzk5MC00MmJkLWIxZDctOTg5M2RkZjk5OTYwIiBzdEV2dDp3aGVuPSIyMDE4LTEyLTI2VDE4OjMyOjU2KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzYxM2I1YzMtZGMzZi00ZjJlLWIyMzctNTlhMjU3ZGIzODIzIiBzdEV2dDp3aGVuPSIyMDE4LTEyLTI2VDE4OjMyOjU2KzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5UKmIcAAACI0lEQVRIia3WTUtVURQG4MdzFbqYRVkYlGVNoshw0CSMwAJHBRX0EwoqamiNmlbTiIL6ETVoEGIfRB/TMFGaaGFBQRpxCwU/arD38Wzl6i29LxxYZ5113nfvtTZr7Yau63+sgEbsRRf2oBVlTGECo3iHD5hdiaQaMnTjJDZW+V7GjvgcRQVP8KKaWDWRNpyPBP+KFpzFYTzA15VEOnAFzYlvAm8wEu1fWI+t6MQhIY3iwq7iNsZygoakJttwTUgFzOARnmNuhV2U0INTaIq+KdzMd5QlgecSgQpuYaCGgPh9IMZXoq8spLyUihxX1GAWdzFeg3wpxuN/eeG3R16ZsMXeJPihcDRXg9H4f45eNGVC8Vqic1KowVrwLPKIvAdzkRyv1a5BLcxHnhwHMuxKHCNrFMgxnNgdGTYnju91EvmW2JsyxbGF33USSXnKGaYTR7P6IOWZzhQnAbbUSaQtsX9k+Jg49tVJZH9ij2UYShzdii6wWuRjIsdQhkFFz9mMY2sU6VGc2AoGM6Hb9idBp4UpuBrsxpnkvR8zeWqe4nO0G3ER7f8p0I5Lihn1JfIu5H9OmGhT8b0FfUIXLdUgL8W4PkUPnML9yLtoaBFazOUkmGIyDgtDaBobVJ+MhDrckZzapSKEol3Azho7qIZx3IsLW0C1i8QkbuAITqh+W1mKn3iMV0IXXoTlrkTzeIm3Qko6hVS2Yp2Qsgl8wvv4zCy3gr/TBXWxkywiXgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/particles/particle-5.png":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/particles/particle-5.png ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTItMjZUMTg6MzM6MzIrMDY6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTItMjZUMTg6MzM6MzIrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTEyLTI2VDE4OjMzOjMyKzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE1MDZlZmU2LTgxMWYtNGQ1MS04YTJiLTkwOGJkMjQyMTI1NiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjlhZDI3Mzg5LWRhOTUtZTk0NS05NGRmLTJkYjQxNjQ2OTU5ZCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjE5MGYxMTU0LWViNTAtNDJhNS1hYWViLTYzOThhNThiZWU1NSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTkwZjExNTQtZWI1MC00MmE1LWFhZWItNjM5OGE1OGJlZTU1IiBzdEV2dDp3aGVuPSIyMDE4LTEyLTI2VDE4OjMzOjMyKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTUwNmVmZTYtODExZi00ZDUxLThhMmItOTA4YmQyNDIxMjU2IiBzdEV2dDp3aGVuPSIyMDE4LTEyLTI2VDE4OjMzOjMyKzA2OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5b2q0pAAABZElEQVQ4jZXTO0tcURQF4G8OkRTBP6CMtUWIQwpRG4MyTR5dMJBUESL4c3yAf0CLhDQiSRFJyBASRos8Ouso9pLKNGNx9tXjMI4zCy5377XXXtxzz961TrupBxbwIt4Twf3FF7zD5+6GWpfRJLbwqJd7ga9YxVFFpKI4j8MBTITmMHquGU1iF6OR/8c6ZoMbjXgzaoLbjV61TrtZww/MhOAUT/Hrhq9p4APGIm9jLmGxMDnHkz4m8BuPQyt6FxOWCtFWCG/Dn9BWWEryFVd4O4BJL+1CQr0gfg5hVB6/nlyddViMlEmSb6nCwyGM7hfxSZIHq8LLIYxeFfH3hJ2CWMHUACYP8KbItxM+yUMFd+Vha/QxaeBjaEXvfkIHr3EWhXEcYE0etnvxzGAjauOhPcMyOuX2z2PP1b7dhn94hhbXt7+F6eKY/dAObasi7nQJjjCHJp7Le1iXN/4Y3/Ae+/IvucQFWgZK+Q0xPHMAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/team/destk1.jpg":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/team/destk1.jpg ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/destk1-aba0d9c7ede3292a1d75c2039ac4aff5.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/team/destk2.jpg":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/team/destk2.jpg ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/destk2-61c0d8784399543eb5109db1cf874a5f.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/agency/team/destk3.jpg":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/assets/image/agency/team/destk3.jpg ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/destk3-1b905bc9af4fd4937cb8abe23075419a.jpg";

/***/ }),

/***/ "../../node_modules/common/src/components/Accordion/accordion.style.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/Accordion/accordion.style.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: AccordionWrapper, AccordionItemWrapper, OpenIcon, CloseIcon, AccordionTitleWrapper, AccordionItemButtonWrapper, AccordionBodyWrapper, IconWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionWrapper", function() { return AccordionWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemWrapper", function() { return AccordionItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenIcon", function() { return OpenIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTitleWrapper", function() { return AccordionTitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemButtonWrapper", function() { return AccordionItemButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionBodyWrapper", function() { return AccordionBodyWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-accessible-accordion */ "react-accessible-accordion");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__);


var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
var AccordionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"]).withConfig({
  displayName: "accordionstyle__AccordionWrapper",
  componentId: "sc-1inv165-0"
})([""]);
var AccordionItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItem"]).withConfig({
  displayName: "accordionstyle__AccordionItemWrapper",
  componentId: "sc-1inv165-1"
})([""]);
var OpenIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "accordionstyle__OpenIcon",
  componentId: "sc-1inv165-2"
})([""]);
var CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "accordionstyle__CloseIcon",
  componentId: "sc-1inv165-3"
})(["opacity:0;"]);
var AccordionTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemHeading"]).withConfig({
  displayName: "accordionstyle__AccordionTitleWrapper",
  componentId: "sc-1inv165-4"
})(["> div{display:flex;align-items:center;cursor:pointer;position:relative;&[aria-expanded='false']{", "{opacity:0;}", "{opacity:1;}}}&:focus{outline:none;}*{flex-grow:1;}"], OpenIcon, CloseIcon);
var AccordionItemButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemButton"]).withConfig({
  displayName: "accordionstyle__AccordionItemButtonWrapper",
  componentId: "sc-1inv165-5"
})([""]);
var AccordionBodyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionItemPanel"]).withConfig({
  displayName: "accordionstyle__AccordionBodyWrapper",
  componentId: "sc-1inv165-6"
})(["animation:0.35s ", " ease-in;&.accordion__body--hidden{animation:0.35s ", " ease-in;}"], fadeIn, fadeIn);
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "accordionstyle__IconWrapper",
  componentId: "sc-1inv165-7"
})(["margin-left:30px;width:40px;position:relative;", ",", "{position:absolute;top:50%;right:0;transform:translateY(-50%);transition:0.25s ease-in-out;}"], OpenIcon, CloseIcon);

/***/ }),

/***/ "../../node_modules/common/src/components/Accordion/index.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/Accordion/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: Accordion, AccordionItem, AccordionTitle, AccordionBody, IconWrapper, OpenIcon, CloseIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTitle", function() { return AccordionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionBody", function() { return AccordionBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "../../node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _accordion_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.style */ "../../node_modules/common/src/components/Accordion/accordion.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return _accordion_style__WEBPACK_IMPORTED_MODULE_3__["IconWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenIcon", function() { return _accordion_style__WEBPACK_IMPORTED_MODULE_3__["OpenIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return _accordion_style__WEBPACK_IMPORTED_MODULE_3__["CloseIcon"]; });

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\components\\Accordion\\index.js";





var Accordion = function Accordion(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$allowZeroExpande = _ref.allowZeroExpanded,
      allowZeroExpanded = _ref$allowZeroExpande === void 0 ? true : _ref$allowZeroExpande;
  // Add all classs to an array
  var addAllClasses = ['reusecore__accordion']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionWrapper"], {
    allowZeroExpanded: allowZeroExpanded,
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children);
};

var AccordionItem = function AccordionItem(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      expanded = _ref2.expanded;
  // Add all classs to an array
  var addAllClasses = ['accordion__item']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionItemWrapper"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, children);
};

var AccordionTitle = function AccordionTitle(_ref3) {
  var className = _ref3.className,
      children = _ref3.children;
  // Add all classs to an array
  var addAllClasses = ['accordion__header']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionTitleWrapper"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionItemButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, children));
};

var AccordionBody = function AccordionBody(_ref4) {
  var className = _ref4.className,
      children = _ref4.children;
  // Add all classs to an array
  var addAllClasses = ['accordion__body']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_accordion_style__WEBPACK_IMPORTED_MODULE_3__["AccordionBodyWrapper"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, children);
};

Accordion.propTypes = {
  /** ClassName of the Accordion. Default class is reusecore__accordion*/
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
AccordionItem.propTypes = {
  /** ClassName of the AccordionItem. Default class is accordion__item */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
AccordionTitle.propTypes = {
  /** ClassName of the AccordionTitle. Default class is accordion__header */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
AccordionBody.propTypes = {
  /** ClassName of the AccordionBody. Default class is accordion__body */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Used to render any component */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};


/***/ }),

/***/ "../../node_modules/common/src/components/FeatureBlock/featureBlock.style.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/FeatureBlock/featureBlock.style.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: IconWrapper, ContentWrapper, ButtonWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);

 // FeatureBlock wrapper style

var FeatureBlockWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__FeatureBlockWrapper",
  componentId: "sc-1pllarm-0"
})(["&.icon_left{display:flex;.icon__wrapper{flex-shrink:0;}}&.icon_right{display:flex;flex-direction:row-reverse;.content__wrapper{text-align:right;}.icon__wrapper{flex-shrink:0;}}", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["overflow"]); // Icon wrapper style

var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__IconWrapper",
  componentId: "sc-1pllarm-1"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["overflow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"]); // Content wrapper style

var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__ContentWrapper",
  componentId: "sc-1pllarm-2"
})(["", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["textAlign"]); // Button wrapper style

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featureBlockstyle__ButtonWrapper",
  componentId: "sc-1pllarm-3"
})(["", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"]);

/* harmony default export */ __webpack_exports__["default"] = (FeatureBlockWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/FeatureBlock/index.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/FeatureBlock/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _featureBlock_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./featureBlock.style */ "../../node_modules/common/src/components/FeatureBlock/featureBlock.style.js");


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\components\\FeatureBlock\\index.js";




var FeatureBlock = function FeatureBlock(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      title = _ref.title,
      button = _ref.button,
      description = _ref.description,
      iconPosition = _ref.iconPosition,
      additionalContent = _ref.additionalContent,
      wrapperStyle = _ref.wrapperStyle,
      iconStyle = _ref.iconStyle,
      contentStyle = _ref.contentStyle,
      btnWrapperStyle = _ref.btnWrapperStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "icon", "title", "button", "description", "iconPosition", "additionalContent", "wrapperStyle", "iconStyle", "contentStyle", "btnWrapperStyle"]);

  // Add all classs to an array
  var addAllClasses = ['feature__block']; // Add icon position class

  if (iconPosition) {
    addAllClasses.push("icon_".concat(iconPosition));
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // check icon value and add


  var Icon = icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "icon__wrapper"
  }, iconStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), icon);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), Icon, title || description || button ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["ContentWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "content__wrapper"
  }, contentStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), title, description, button && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_featureBlock_style__WEBPACK_IMPORTED_MODULE_4__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "button__wrapper"
  }, btnWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), button)), additionalContent) : '');
};

FeatureBlock.propTypes = {
  /** ClassName of the FeatureBlock */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** title prop contain a react component. You can use our Heading component from reusecore */
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** description prop contain a react component. You can use our Text component from reusecore */
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** button prop contain a react component. You can use our Button component from reusecore */
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set icon position of the FeatureBlock */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['top', 'left', 'right']),

  /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
   * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** iconStyle prop contain these style system props: display, width, height, alignItems, justifyContent,
   * position, space, fontSize, color, borders, overflow, borderColor, boxShadow and borderRadius. */
  iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** contentStyle prop contain these style system props: width, textAlign and space. */
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
   * flexDirection and justifyContent. */
  btnWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
FeatureBlock.defaultProps = {
  iconPosition: 'top'
};
/* harmony default export */ __webpack_exports__["default"] = (FeatureBlock);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glide.style.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/GlideCarousel/glide.style.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: GlideSlideWrapper, ButtonControlWrapper, ButtonWrapper, BulletControlWrapper, BulletButton, DefaultBtn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlideWrapper", function() { return GlideSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonControlWrapper", function() { return ButtonControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletControlWrapper", function() { return BulletControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletButton", function() { return BulletButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBtn", function() { return DefaultBtn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);

 // Glide wrapper style

var GlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__GlideWrapper",
  componentId: "sc-1df9bf1-0"
})(["", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]); // Glide slide wrapper style

var GlideSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "glidestyle__GlideSlideWrapper",
  componentId: "sc-1df9bf1-1"
})(["", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"]); // Button wrapper style

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__ButtonWrapper",
  componentId: "sc-1df9bf1-2"
})(["display:inline-block;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["top"], styled_system__WEBPACK_IMPORTED_MODULE_1__["left"], styled_system__WEBPACK_IMPORTED_MODULE_1__["right"], styled_system__WEBPACK_IMPORTED_MODULE_1__["bottom"]); // ButtonControlWrapper style

var ButtonControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__ButtonControlWrapper",
  componentId: "sc-1df9bf1-3"
})(["", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["top"], styled_system__WEBPACK_IMPORTED_MODULE_1__["left"], styled_system__WEBPACK_IMPORTED_MODULE_1__["right"], styled_system__WEBPACK_IMPORTED_MODULE_1__["bottom"]); // BulletControlWrapper style

var BulletControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "glidestyle__BulletControlWrapper",
  componentId: "sc-1df9bf1-4"
})(["", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexWrap"]); // BulletButton style

var BulletButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "glidestyle__BulletButton",
  componentId: "sc-1df9bf1-5"
})(["cursor:pointer;width:10px;height:10px;margin:4px;border:0;padding:0;outline:none;border-radius:50%;background-color:#D6D6D6;&:hover,&.glide__bullet--active{background-color:#869791;}", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"]); // default button style

var DefaultBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "glidestyle__DefaultBtn",
  componentId: "sc-1df9bf1-6"
})(["cursor:pointer;margin:10px 3px;"]);

/* harmony default export */ __webpack_exports__["default"] = (GlideWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/GlideCarousel/glideSlide.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");
var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\components\\GlideCarousel\\glideSlide.js";


 // Glide Slide wrapper component

var GlideSlide = function GlideSlide(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_2__["GlideSlideWrapper"], {
    className: "glide__slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children);
};

GlideSlide.propTypes = {
  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (GlideSlide);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/index.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/GlideCarousel/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "@glidejs/glide");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\components\\GlideCarousel\\index.js";






var GlideCarousel = function GlideCarousel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      options = _ref.options,
      controls = _ref.controls,
      prevButton = _ref.prevButton,
      nextButton = _ref.nextButton,
      prevWrapper = _ref.prevWrapper,
      nextWrapper = _ref.nextWrapper,
      bullets = _ref.bullets,
      numberOfBullets = _ref.numberOfBullets,
      buttonWrapperStyle = _ref.buttonWrapperStyle,
      bulletWrapperStyle = _ref.bulletWrapperStyle,
      bulletButtonStyle = _ref.bulletButtonStyle,
      carouselSelector = _ref.carouselSelector;
  // Add all classs to an array
  var addAllClasses = ['glide']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop


  var totalBullets = [];

  for (var i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default.a(carouselSelector ? "#".concat(carouselSelector) : '#glide', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options));
    glide.mount();
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "glide__track",
    "data-glide-el": "track",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "glide__slides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, children)), controls && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__controls",
    "data-glide-el": "controls"
  }, buttonWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevWrapper, {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), prevButton ? prevButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Prev")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, nextWrapper, {
    className: "glide__next--area",
    "data-glide-dir": ">",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), nextButton ? nextButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Next"))), bullets && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__bullets",
    "data-glide-el": "controls[nav]"
  }, bulletWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, totalBullets.map(function (index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index,
      className: "glide__bullet",
      "data-glide-dir": "=".concat(index)
    }, bulletButtonStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }));
  }))));
};

GlideCarousel.propTypes = {
  /** className of the GlideCarousel. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** You can add your custom glid options using this prop. */
  options: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Hide || show controls nav. */
  controls: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Hide || show bullets nav. */
  bullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** This prop only take your slider / carousel / testimonials data length. */
  numberOfBullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** bulletWrapperStyle is a bullet control wrapper style object prop.
   * It's contain display, space, alignItems,
   * justifyContent and flexWrap style-system prop.
   */
  bulletWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** buttonWrapperStyle is a button control wrapper style object prop.
   * It's contain same as buttonWrapperStyle style-system prop and
   * position, left, right, top and bottom.
   */
  buttonWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** prevWrapper is a previous button wrapper style object prop.
   * It's contain display, space, bg, borders, boxShadow, borderRadius,
   * position, top, left, right and bottom style-system prop.
   */
  prevWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** nextWrapper is a next button wrapper style object prop.
   * It's contain same as prevWrapper style-system prop.
   */
  nextWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Set previous button for glide carousel. */
  prevButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** Set next button for glide carousel. */
  nextButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** bulletButtonStyle is a bullet button style object prop.
   * It's contain  display, width, height, space,
   * bg, borders, boxShadow and borderRadius style-system prop.
   */
  bulletButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
}; // GlideCarousel default props

GlideCarousel.defaultProps = {
  controls: true,
  bullets: false
};
/* harmony default export */ __webpack_exports__["default"] = (GlideCarousel);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var HamburgMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "hamburgMenustyle__HamburgMenuWrapper",
  componentId: "sc-12m1tps-0"
})(["border:0;background:transparent;width:44px;height:30px;cursor:pointer;", " ", " ", " ", " ", " ", " ", " > span{display:block;width:100%;height:2px;margin:4px 0;float:right;background-color:", ";transition:all 0.3s ease;&:first-child{margin-top:0;}&:last-child{width:calc(100% - 10px);margin-bottom:0;}}&:focus,&:hover{outline:none;> span{&:last-child{width:100%;}}}&:focus{> span{&:first-child{transform:rotate(45deg);transform-origin:8px 50%;}&:nth-child(2){display:none;}&:last-child{width:100%;transform:rotate(-45deg);transform-origin:9px 50%;}}}"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["border"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], function (props) {
  return props.barColor ? props.barColor : '#10ac84';
});
HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenuWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/index.js":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/HamburgMenu/index.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburgMenu.style */ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js");


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\components\\HamburgMenu\\index.js";




var HamburgMenu = function HamburgMenu(_ref) {
  var className = _ref.className,
      wrapperStyle = _ref.wrapperStyle,
      barColor = _ref.barColor,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "wrapperStyle", "barColor"]);

  // Add all classs to an array
  var addAllClasses = ['hamburgMenu__bar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, {
    barColor: barColor,
    "aria-label": "hamburgMenu"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

HamburgMenu.propTypes = {
  /** ClassName of the Hamburg menu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** barColor allow to change hambrug menu's bar color. */
  barColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** wrapperStyle prop allow to change Hamburg menu bg color, width, height, space, boxShadow, border and borderRadius.*/
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/ScrollSpyMenu/index.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/ScrollSpyMenu/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\components\\ScrollSpyMenu\\index.js";







var ScrollSpyMenu = function ScrollSpyMenu(_ref) {
  var className = _ref.className,
      menuItems = _ref.menuItems,
      drawerClose = _ref.drawerClose,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "menuItems", "drawerClose"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_7__["DrawerContext"]),
      dispatch = _useContext.dispatch; // empty array for scrollspy items


  var scrollItems = []; // convert menu path to scrollspy items

  menuItems.forEach(function (item) {
    scrollItems.push(item.path.slice(1));
  }); // Add all classs to an array

  var addAllClasses = ['scrollspy__menu']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Close drawer when click on menu item


  var toggleDrawer = function toggleDrawer() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: scrollItems,
    className: addAllClasses.join(' '),
    drawerClose: drawerClose
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), menuItems.map(function (menu, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: "menu-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, menu.staticLink ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: menu.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, menu.label)) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, drawerClose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      onClick: toggleDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, menu.label) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, menu.label)));
  }));
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current'
};
/* harmony default export */ __webpack_exports__["default"] = (ScrollSpyMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/index.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/UI/Container/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "../../node_modules/common/src/components/UI/Container/style.js");
var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\components\\UI\\Container\\index.js";



var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fullWidth = _ref.fullWidth,
      noGutter = _ref.noGutter,
      mobileGutter = _ref.mobileGutter,
      width = _ref.width;
  // Add all classs to an array
  var addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/style.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/components/UI/Container/style.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ContainerWrapper",
  componentId: "sc-1gre7ok-0"
})(["margin-left:auto;margin-right:auto;", ";", ";@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:", ";width:100%;}@media (max-width:768px){", ";}"], function (props) {
  return props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;max-width:none !important;"]);
}, function (props) {
  return props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:0;padding-right:0;"]) || Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;"]);
}, function (props) {
  return props.width || '1170px';
}, function (props) {
  return props.mobileGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;"]);
});
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/AboutUsSection/aboutUsSection.style.js":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/AboutUsSection/aboutUsSection.style.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var AboutUsSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "aboutUsSectionstyle__AboutUsSectionWrapper",
  componentId: "nk8ra5-0"
})(["padding:80px 0 50px;overflow:hidden;@media (max-width:990px){padding:60px 0 40px 0;}.col{align-self:center;}.group-gallery{box-shadow:none;display:flex;flex-wrap:wrap;.col1{width:calc(60% - 30px);margin-right:30px;}.col2{width:calc(40% - 30px);align-self:center;margin-right:30px;}img{max-width:100%;height:auto;margin-bottom:30px;object-fit:contain;box-shadow:0px 0px 250px 0px rgba(39,79,117,0.1);}}.feature__block{align-items:center;margin-bottom:14px;.icon__wrapper{color:", ";margin-right:10px;}.content__wrapper{h2{margin-bottom:0;}}}.reusecore__button{margin-top:36px;transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'));
/* harmony default export */ __webpack_exports__["default"] = (AboutUsSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/AboutUsSection/index.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/AboutUsSection/index.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Card */ "../../node_modules/reusecore/src/elements/Card/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _aboutUsSection_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aboutUsSection.style */ "../../node_modules/common/src/containers/Agency/AboutUsSection/aboutUsSection.style.js");
/* harmony import */ var _data_Agency__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/Agency */ "../../node_modules/common/src/data/Agency/index.js");
/* harmony import */ var _assets_image_agency_group_grupo1_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/image/agency/group/grupo1.jpg */ "../../node_modules/common/src/assets/image/agency/group/grupo1.jpg");
/* harmony import */ var _assets_image_agency_group_grupo1_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_group_grupo1_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_image_agency_group_grupo2_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/image/agency/group/grupo2.jpg */ "../../node_modules/common/src/assets/image/agency/group/grupo2.jpg");
/* harmony import */ var _assets_image_agency_group_grupo2_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_group_grupo2_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_agency_group_grupo3_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/image/agency/group/grupo3.jpg */ "../../node_modules/common/src/assets/image/agency/group/grupo3.jpg");
/* harmony import */ var _assets_image_agency_group_grupo3_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_group_grupo3_jpg__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\AboutUsSection\\index.js";
















var AboutUsSection = function AboutUsSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      description = _ref.description,
      textArea = _ref.textArea,
      featureTitle = _ref.featureTitle,
      btnStyle = _ref.btnStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_aboutUsSection_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "AboutUsSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col"
  }, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "group-gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "col1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    top: true,
    delay: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _assets_image_agency_group_grupo1_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "Feature Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    left: true,
    delay: 60,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _assets_image_agency_group_grupo3_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "Feature Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "col2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bottom: true,
    delay: 90,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: _assets_image_agency_group_grupo2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "Feature Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col"
  }, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "Voc\xEA no seu m\xE1ximo sempre!"
    }, title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })),
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "Qualidade de vida em um clique."
    }, description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), _data_Agency__WEBPACK_IMPORTED_MODULE_12__["default"].aboutus.map(function (feature, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "feature_point-".concat(index),
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: feature.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }),
      iconPosition: "left",
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: feature.title
      }, featureTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "SAIBA MAIS"
  }, btnStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }))))));
};

AboutUsSection.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
AboutUsSection.defaultProps = {
  // About us section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap"
  },
  // About us section col default style
  col: {
    width: [1, "100%", "50%"]
  },
  // About us section text area default style
  textArea: {
    maxWidth: "490px",
    pl: "40px"
  },
  // About us section title default style
  title: {
    fontSize: ["26px", "26px", "30px", "40px"],
    lineHeight: "1.5",
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "30px"
  },
  // About us section description default style
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "33px"
  },
  // feature title default style
  featureTitle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#343d48",
    lineHeight: "1.5",
    mb: "8px",
    letterSpacing: "-0.020em"
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AboutUsSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/BannerSection/bannerSection.style.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/BannerSection/bannerSection.style.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: DiscountLabel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountLabel", function() { return DiscountLabel; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_agency_agency_banner_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/agency/agency-banner.png */ "../../node_modules/common/src/assets/image/agency/agency-banner.png");
/* harmony import */ var _assets_image_agency_agency_banner_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_agency_banner_png__WEBPACK_IMPORTED_MODULE_2__);



var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "bannerSectionstyle__BannerWrapper",
  componentId: "sc-1a3jkiu-0"
})(["padding-top:210px;padding-bottom:160px;background-image:url(", ");background-size:cover;background-position:center;background-repeat:no-repeat;overflow:hidden;@media only screen and (min-width:1367px){min-height:100vh;}@media (max-width:990px){padding-top:150px;padding-bottom:100px;}@media only screen and (max-width:480px){background:none;padding-top:130px;padding-bottom:60px;}.particle{position:absolute;width:50%;height:100%;top:0;left:0;overflow:hidden;@media (max-width:990px){display:none;}@media only screen and (max-width:480px){width:100%;}}.row{position:relative;z-index:1;}.button__wrapper{margin-top:40px;.reusecore__button{&:first-child{transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}}}"], _assets_image_agency_agency_banner_png__WEBPACK_IMPORTED_MODULE_2___default.a);
var DiscountLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "bannerSectionstyle__DiscountLabel",
  componentId: "sc-1a3jkiu-1"
})(["display:inline-block;border-radius:4em;padding:7px 25px;box-shadow:0px 4px 50px 0px rgba(22,53,76,0.08);margin-bottom:30px;background-color:", ";@media (max-width:767px){padding:7px 10px;}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));

/* harmony default export */ __webpack_exports__["default"] = (BannerWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/BannerSection/index.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/BannerSection/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _Agency_Particle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Agency/Particle */ "../../node_modules/common/src/containers/Agency/Particle/index.js");
/* harmony import */ var _bannerSection_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bannerSection.style */ "../../node_modules/common/src/containers/Agency/BannerSection/bannerSection.style.js");

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\BannerSection\\index.js";











var BannerSection = function BannerSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      title = _ref.title,
      btnStyle = _ref.btnStyle,
      description = _ref.description,
      discountText = _ref.discountText,
      discountAmount = _ref.discountAmount,
      outlineBtnStyle = _ref.outlineBtnStyle;

  var ButtonGroup = function ButtonGroup() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "SAIBA MAIS"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "VEJA FUNCIONANDO",
      variant: "textButton",
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "flaticon-next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })
    }, outlineBtnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bannerSection_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Agency_Particle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col"
  }, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "Amor, trabalho e sabedoria s\xE3o as fontes da vida, deveriam tamb\xE9m govern\xE1-la. W.Reich"
    }, title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })),
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "Uma empresa saud\xE1vel que cuida das pessoas colhe melhores resultados. Nossos especialistas apoiam suas emo\xE7\xF5es para que voc\xEA viva com qualidade e fa\xE7a o melhor na vida, carreira e lideran\xE7a."
    }, description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })),
    button: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })))));
};

BannerSection.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  contentStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  discountText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  discountAmount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  outlineBtnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center"
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: ["100%", "70%", "60%", "50%"]
  },
  title: {
    fontSize: ["26px", "34px", "42px", "43x"],
    fontWeight: "200",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px"],
    lineHeight: "1.31"
  },
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "2.1",
    mb: "0"
  },
  btnStyle: {
    minWidth: ["120px", "156px"],
    fontSize: "14px",
    fontWeight: "500"
  },
  outlineBtnStyle: {
    minWidth: ["130px", "156px"],
    fontSize: "14px",
    fontWeight: "500",
    color: "#0f2137",
    p: "5px 10px"
  },
  discountAmount: {
    fontSize: "14px",
    color: "#10AC84",
    mb: 0,
    as: "span",
    mr: "0.4em"
  },
  discountText: {
    fontSize: "14px",
    color: "#0f2137",
    mb: 0,
    as: "span"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BannerSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/BlogSection/blogSection.style.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/BlogSection/blogSection.style.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var BlogSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "blogSectionstyle__BlogSectionWrapper",
  componentId: "dzi48v-0"
})(["padding:80px 0;overflow:hidden;@media (max-width:990px){padding:60px 0;}@media (max-width:767px){padding:40px 0;}.feature__block{&.blog__post{border-radius:5px;overflow:hidden;position:relative;width:calc(100% / 3 - 24px);height:350px;margin:0 12px;transition:all 0.3s ease;@media only screen and (max-width:1200px){height:400px;}@media only screen and (max-width:991px){width:calc(100% / 2 - 24px);margin-bottom:24px;&:first-child{width:100%;}}@media only screen and (max-width:767px){width:calc(100% - 24px);}.icon__wrapper{position:absolute;bottom:0;left:0;width:100%;height:100%;img{width:100%;height:100%;object-fit:cover;}}.content__wrapper{opacity:0;visibility:hidden;position:absolute;bottom:0;left:0;width:100%;height:100%;padding:25px;display:flex;flex-direction:column;justify-content:flex-end;background-color:rgba(0,0,0,0.9);background:linear-gradient(transparent,rgba(0,0,0,0.5));transition:all 0.3s ease;a{transform:translateY(50px);transition:all 0.3s ease;}p{transform:translateY(50px);transition:all 0.35s ease;}}&:hover{.content__wrapper{opacity:1;visibility:visible;a{transform:translateY(0);}p{transform:translateY(0);}}}&:first-child{.content__wrapper{@media (max-width:990px){opacity:1;visibility:visible;a{transform:translateY(0);}p{transform:translateY(0);}}}}}}"]);
/* harmony default export */ __webpack_exports__["default"] = (BlogSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/BlogSection/index.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/BlogSection/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Link */ "../../node_modules/reusecore/src/elements/Link/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _data_Agency__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/Agency */ "../../node_modules/common/src/data/Agency/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _blogSection_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blogSection.style */ "../../node_modules/common/src/containers/Agency/BlogSection/blogSection.style.js");

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\BlogSection\\index.js";












var BlogSection = function BlogSection(_ref) {
  var row = _ref.row,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      blogTitle = _ref.blogTitle,
      blogMeta = _ref.blogMeta;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_blogSection_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "blogSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "ESPECIALISTAS"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Conhe\xE7a nossa gama de profissionais aguardando seu agendamento."
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), _data_Agency__WEBPACK_IMPORTED_MODULE_9__["default"].blog.map(function (post, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: "post_key-".concat(index),
      id: "post_id-".concat(post.id),
      className: "blog__post",
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
        src: post.thumbnail_url,
        alt: "Blog Image ".concat(post.id),
        className: "blog__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }),
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Link__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        href: post.postLink
      }, blogTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), post.title),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: post.date
      }, blogMeta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    });
  }))));
}; // BlogSection style props


BlogSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  blogTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  blogMeta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // BlogSection default style

BlogSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "56px"]
  },
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#10ac84",
    mb: "10px"
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0"
  },
  // Blog post row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-12px",
    mr: "-12px"
  },
  // Blog post title default style
  blogTitle: {
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#ffffff",
    lineHeight: "1.5",
    mb: "10px",
    letterSpacing: "-0.020em"
  },
  // Blog post description default style
  blogMeta: {
    fontSize: "16px",
    lineHeight: "1",
    color: "rgba(255, 255, 255, 0.5)",
    mb: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BlogSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/CopyrightsSection/copyrightSection.style.js":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/CopyrightsSection/copyrightSection.style.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var CopyrightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "copyrightSectionstyle__CopyrightWrapper",
  componentId: "far9s5-0"
})(["ul{display:flex;align-items:center;li{margin:0 12px;&:first-child{margin-left:0;}&:last-child{margin-right:0;}a{color:#20201d;}}&:hover{li{a{&:not(:hover){opacity:0.4;}}}}}p{color:#20201d;font-size:16px;margin:30px 0 0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (CopyrightWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/CopyrightsSection/index.js":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/CopyrightsSection/index.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var _copyrightSection_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copyrightSection.style */ "../../node_modules/common/src/containers/Agency/CopyrightsSection/copyrightSection.style.js");
/* harmony import */ var _data_Agency___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/Agency/ */ "../../node_modules/common/src/data/Agency/index.js");
var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\CopyrightsSection\\index.js";






var CopyrightSection = function CopyrightSection() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_copyrightSection_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "copyright_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, _data_Agency___WEBPACK_IMPORTED_MODULE_4__["default"].social_profile.map(function (profile, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: "profile_key_".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: profile.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: "Copyrights 2020 @OnSite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CopyrightSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/FaqSection/faqSection.style.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/FaqSection/faqSection.style.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var FaqSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "faqSectionstyle__FaqSectionWrapper",
  componentId: "sc-1z0ypfo-0"
})(["padding:80px 0;overflow:hidden;@media (max-width:990px){padding:40px 0 60px 0;}@media (max-width:767px){padding:20px 0 40px 0;}.reusecore__accordion{max-width:820px;margin:0 auto;border:1px solid ", ";border-radius:5px;box-shadow:0px 0px 30px 0px rgba(25,61,101,0.05);.accordion__item{border-top:0;border-bottom:1px solid ", ";&:last-child{border-bottom:0;}.accordion__header{padding:20px 30px;}.accordion__body{padding:5px 30px 20px;}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#ebebeb'));
/* harmony default export */ __webpack_exports__["default"] = (FaqSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/FaqSection/index.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/FaqSection/index.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Accordion */ "../../node_modules/common/src/components/Accordion/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons-kit/entypo/plus */ "react-icons-kit/entypo/plus");
/* harmony import */ var react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit/entypo/minus */ "react-icons-kit/entypo/minus");
/* harmony import */ var react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _faqSection_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faqSection.style */ "../../node_modules/common/src/containers/Agency/FaqSection/faqSection.style.js");
/* harmony import */ var _data_Agency__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/Agency */ "../../node_modules/common/src/data/Agency/index.js");

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\FaqSection\\index.js";













var FaqSection = function FaqSection(_ref) {
  var sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      titleStyle = _ref.titleStyle,
      descriptionStyle = _ref.descriptionStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_faqSection_style__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "faqSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "FAQ"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Perguntas Frequentes"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_7__["Accordion"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, _data_Agency__WEBPACK_IMPORTED_MODULE_12__["default"].faq.map(function (faqItem, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionItem"], {
      key: "accordion_key-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionTitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: faqItem.title
    }, titleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_7__["IconWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_7__["OpenIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
      icon: react_icons_kit_entypo_minus__WEBPACK_IMPORTED_MODULE_10__["minus"],
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_7__["CloseIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
      icon: react_icons_kit_entypo_plus__WEBPACK_IMPORTED_MODULE_9__["plus"],
      size: 18,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: faqItem.description
    }, descriptionStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })))));
  }))))));
}; // FaqSection style props


FaqSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // FaqSection default style

FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "56px"]
  },
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#10ac84",
    mb: "10px"
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0"
  },
  // accordion title default style
  titleStyle: {
    fontSize: ["16px", "19px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0"
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: "15px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "0"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FaqSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/Footer/footer.style.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/Footer/footer.style.js ***!
  \******************************************************************************************************************************/
/*! exports provided: List, ListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_agency_footer_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/agency/footer-bg.png */ "../../node_modules/common/src/assets/image/agency/footer-bg.png");
/* harmony import */ var _assets_image_agency_footer_bg_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_footer_bg_png__WEBPACK_IMPORTED_MODULE_2__);



var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "sc-2sstb0-0"
})(["padding:80px 0;margin-top:40px;background-image:url(", ");background-repeat:no-repeat;background-position:center 50px;border-top:1px solid #efefef;overflow:hidden;@media (max-width:990px){padding-bottom:30px;}@media (max-width:767px){padding-bottom:10px;}"], _assets_image_agency_footer_bg_png__WEBPACK_IMPORTED_MODULE_2___default.a);
var List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "sc-2sstb0-1"
})([""]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "sc-2sstb0-2"
})(["a{color:", ";font-size:14px;line-height:36px;transition:all 0.2s ease;&:hover,&:focus{outline:0;text-decoration:none;color:", ";}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', 'rgba(52, 61, 72, 0.8)'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.quoteText', '#343d48'));

/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/Footer/index.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/Footer/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.style */ "../../node_modules/common/src/containers/Agency/Footer/footer.style.js");
/* harmony import */ var _assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/image/agency/logo.png */ "../../node_modules/common/src/assets/image/agency/logo.png");
/* harmony import */ var _assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_Agency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/Agency */ "../../node_modules/common/src/data/Agency/index.js");

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\Footer\\index.js";












var Footer = function Footer(_ref) {
  var row = _ref.row,
      col = _ref.col,
      colOne = _ref.colOne,
      colTwo = _ref.colTwo,
      titleStyle = _ref.titleStyle,
      logoStyle = _ref.logoStyle,
      textStyle = _ref.textStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "footerSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colOne, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "#",
    logoSrc: _assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    title: "Agency",
    logoStyle: logoStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "meuapoio.Inc"
  }, textStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "48 9999 8888"
  }, textStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, colTwo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), _data_Agency__WEBPACK_IMPORTED_MODULE_11__["default"].menuWidget.map(function (widget) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: widget.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: widget.title
    }, titleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["List"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, widget.menuItems.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
        key: "list__item-".concat(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: item.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "ListItem",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, item.text)));
    })));
  })))));
}; // Footer style props


Footer.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colOne: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  colTwo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // Footer default style

Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-4px",
    mr: "-4px"
  },
  // Footer col one style
  colOne: {
    width: ["100%", "30%", "35%", "23%"],
    mt: [0, "13px"],
    mb: ["30px", 0],
    pl: ["15px", 0],
    pr: ["15px", "15px", 0]
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "70%", "65%", "77%"],
    flexBox: true,
    flexWrap: "wrap"
  },
  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "25%"],
    pl: "15px",
    pr: "15px",
    mb: "30px"
  },
  // widget title default style
  titleStyle: {
    color: "#343d48",
    fontSize: "16px",
    fontWeight: "700"
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    mb: "15px"
  },
  // widget text default style
  textStyle: {
    color: "#0f2137",
    fontSize: "16px",
    mb: "10px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/LoginModal/index.js":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/LoginModal/index.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-tabs */ "rc-tabs");
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-tabs/lib/TabContent */ "rc-tabs/lib/TabContent");
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-tabs/lib/ScrollableInkTabBar */ "rc-tabs/lib/ScrollableInkTabBar");
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Input */ "../../node_modules/reusecore/src/elements/Input/index.js");
/* harmony import */ var reusecore_src_elements_Checkbox_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Checkbox/index */ "../../node_modules/reusecore/src/elements/Checkbox/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _loginModal_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loginModal.style */ "../../node_modules/common/src/containers/Agency/LoginModal/loginModal.style.js");
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rc-tabs/assets/index.css */ "../../node_modules/rc-tabs/assets/index.css");
/* harmony import */ var rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_assets_index_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/image/agency/logo.png */ "../../node_modules/common/src/assets/image/agency/logo.png");
/* harmony import */ var _assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_image_agency_login_bg_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../assets/image/agency/login-bg.jpg */ "../../node_modules/common/src/assets/image/agency/login-bg.jpg");
/* harmony import */ var _assets_image_agency_login_bg_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_login_bg_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_image_agency_google_icon_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../assets/image/agency/google-icon.jpg */ "../../node_modules/common/src/assets/image/agency/google-icon.jpg");
/* harmony import */ var _assets_image_agency_google_icon_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_google_icon_jpg__WEBPACK_IMPORTED_MODULE_17__);

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\LoginModal\\index.js";


















var LoginModal = function LoginModal(_ref) {
  var row = _ref.row,
      col = _ref.col,
      btnStyle = _ref.btnStyle,
      logoStyle = _ref.logoStyle,
      titleStyle = _ref.titleStyle,
      contentWrapper = _ref.contentWrapper,
      outlineBtnStyle = _ref.outlineBtnStyle,
      descriptionStyle = _ref.descriptionStyle,
      googleButtonStyle = _ref.googleButtonStyle;

  var LoginButtonGroup = function LoginButtonGroup() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "default",
      title: "ENTRAR"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "Esqueci minha senha",
      variant: "textButton"
    }, outlineBtnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })));
  };

  var SignupButtonGroup = function SignupButtonGroup() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "default",
      title: "REGISTRAR"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })));
  };

  var PerfilButtonGroup = function PerfilButtonGroup() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "default",
      title: "PERFIL"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_loginModal_style__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col imageCol"
  }, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "patternImage",
    src: _assets_image_agency_login_bg_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "Login Banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col tabCol"
  }, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: _assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15___default.a
  }, logoStyle, {
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
    defaultActiveKey: "loginForm",
    renderTabBar: function renderTabBar() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      });
    },
    renderTabContent: function renderTabContent() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
    tab: "LOGIN",
    key: "loginForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Bem Vindo!"
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Insira seus dados pessoais para entrar."
  }, descriptionStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "email",
    isMaterial: true,
    label: "Endere\xE7o de E-mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "password",
    isMaterial: true,
    label: "Senha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Checkbox_index__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "remember",
    htmlFor: "remember",
    labelText: "Lembrar login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoginButtonGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPane"], {
    tab: "REGISTRO",
    key: "registerForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Bem Vindo!"
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Insira seus dados pessoais para se cadastrar"
  }, descriptionStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isMaterial: true,
    label: "Nome completo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "email",
    isMaterial: true,
    label: "Endere\xE7o de E-mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "password",
    isMaterial: true,
    label: "Senha",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SignupButtonGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }))))))));
}; // LoginModal style props


LoginModal.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  hintTextStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  contentWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  descriptionStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  googleButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // LoginModal default style

LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap"
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2]
  },
  // Default logo size
  logoStyle: {
    width: "200px",
    height: "auto",
    ml: "15px"
  },
  // Title default style
  titleStyle: {
    fontSize: ["22px", "36px", "50px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
    mt: "35px",
    mb: "10px"
  },
  // Description default style
  descriptionStyle: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "-0.025em",
    mb: "23px",
    ml: "1px"
  },
  // Content wrapper style
  contentWrapper: {
    pt: ["32px", "56px"],
    pl: ["17px", "32px", "38px", "40px", "56px"],
    pr: "32px",
    pb: ["32px", "56px"]
  },
  // Default button style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500"
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#10ac84"
  },
  // Google button style
  googleButtonStyle: {
    bg: "#ffffff",
    color: "#343D48"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/LoginModal/loginModal.style.js":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/LoginModal/loginModal.style.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var LoginModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "loginModalstyle__LoginModalWrapper",
  componentId: "w6ud9i-0"
})(["width:80%;margin:71px auto;border-radius:5px;overflow:hidden;background-color:", ";.col{position:relative;.patternImage{position:absolute;width:100%;height:100%;object-fit:cover;}@media only screen and (max-width:991px){width:100%;&.imageCol{display:none;}}}.reusecore__button{background-color:transparent;&.default{background-color:", ";transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}}.rc-tabs{border:0;max-width:360px;margin:30px 0 0;@media only screen and (max-width:991px){max-width:100%;}.rc-tabs-bar{margin-left:15px;}.rc-tabs-nav-container{padding:0;.rc-tabs-tab-prev,.rc-tabs-tab-next{display:none;}.rc-tabs-nav-scroll,.rc-tabs-nav{width:100%;.rc-tabs-tab{width:50%;margin-right:0;padding:13px 0;text-align:center;}}}.rc-tabs-tabpane{padding-left:15px;padding-bottom:15px;padding-right:15px;@media (min-width:1200px){min-height:560px;}}.google-login__btn{width:100%;font-size:15px;font-weight:700;margin-bottom:45px;box-shadow:0 4px 15px rgba(0,0,0,0.1);.btn-icon{position:relative;left:-22px;img{width:21px;height:auto;}}}.reusecore__input{margin-bottom:30px;&.is-material{&.is-focus{label{color:", ";top:-12px;}.highlight{background-color:", ";}}}label{font-weight:400;font-size:14px;color:rgba(0,0,0,0.6);top:15px;}}.reusecore__checkbox{margin:0 0 35px;label{.reusecore__field-label{font-size:13px;font-weight:400;}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#10ac84'));
/* harmony default export */ __webpack_exports__["default"] = (LoginModalWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/Navbar/index.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/Navbar/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Navbar */ "../../node_modules/reusecore/src/elements/Navbar/index.js");
/* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Drawer */ "../../node_modules/reusecore/src/elements/Drawer/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var _components_HamburgMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/HamburgMenu */ "../../node_modules/common/src/components/HamburgMenu/index.js");
/* harmony import */ var _components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ScrollSpyMenu */ "../../node_modules/common/src/components/ScrollSpyMenu/index.js");
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar.style */ "../../node_modules/common/src/containers/Agency/Navbar/navbar.style.js");
/* harmony import */ var _SearchPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SearchPanel */ "../../node_modules/common/src/containers/Agency/SearchPanel/index.js");
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../LoginModal */ "../../node_modules/common/src/containers/Agency/LoginModal/index.js");
/* harmony import */ var _CopyrightsSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../CopyrightsSection */ "../../node_modules/common/src/containers/Agency/CopyrightsSection/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/image/agency/logo.png */ "../../node_modules/common/src/assets/image/agency/logo.png");
/* harmony import */ var _assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var _data_Agency___WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../data/Agency/ */ "../../node_modules/common/src/data/Agency/index.js");

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\Navbar\\index.js";
















 // Default close button for modal

var CloseModalButton = function CloseModalButton() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "modalCloseBtn",
    variant: "fab",
    onClick: function onClick() {
      return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])();
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-plus-symbol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  });
}; // Alt close button for modal


var CloseModalButtonAlt = function CloseModalButtonAlt() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "modalCloseBtn alt",
    variant: "fab",
    onClick: function onClick() {
      return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])();
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-plus-symbol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  });
};

var Navbar = function Navbar(_ref) {
  var navbarStyle = _ref.navbarStyle,
      logoStyle = _ref.logoStyle;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_16__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // Search modal handler


  var handleSearchModal = function handleSearchModal() {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])({
      config: {
        className: "search-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0
        }
      },
      component: _SearchPanel__WEBPACK_IMPORTED_MODULE_11__["default"],
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false
    });
  }; // Authentication modal handler


  var handleLoginModal = function handleLoginModal() {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])({
      config: {
        className: "login-modal",
        disableDragging: true,
        default: {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0
        }
      },
      component: _LoginModal__WEBPACK_IMPORTED_MODULE_12__["default"],
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false
    });
  }; // Toggle drawer


  var toggleHandler = function toggleHandler() {
    dispatch({
      type: "TOGGLE"
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, navbarStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_navbar_style__WEBPACK_IMPORTED_MODULE_10__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "#",
    logoSrc: _assets_image_agency_logo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    title: "Agency",
    logoStyle: logoStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "textButton",
    onClick: handleSearchModal,
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-magnifying-glass",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "textButton",
    onClick: function onClick() {
      return window.open("http://meuappoio.com.br:8080/login", "_self");
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: "420px",
    placement: "right",
    drawerHandler: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    menuItems: _data_Agency___WEBPACK_IMPORTED_MODULE_17__["default"].menuItems,
    drawerClose: true,
    offset: -100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CopyrightsSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })))));
}; // Navbar style props


Navbar.propTypes = {
  navbarStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
Navbar.defaultProps = {
  // Default navbar style
  navbarStyle: {
    minHeight: "70px"
  },
  // Default logo size
  logoStyle: {
    width: "150px",
    height: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/Navbar/navbar.style.js":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/Navbar/navbar.style.js ***!
  \******************************************************************************************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "navbarstyle__Container",
  componentId: "sc-1lcoqtm-0"
})(["margin-left:auto;margin-right:auto;padding-left:25px;padding-right:25px;display:flex;width:100%;align-items:center;justify-content:space-between;@media (min-width:320px){padding-left:25px;padding-right:23px;}@media (min-width:768px){max-width:750px;}@media (min-width:992px){max-width:970px;}@media (min-width:1200px){max-width:1170px;}"]);


/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/Particle/index.js":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/Particle/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_agency_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/image/agency/particles/particle-1.png */ "../../node_modules/common/src/assets/image/agency/particles/particle-1.png");
/* harmony import */ var _assets_image_agency_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_agency_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/image/agency/particles/particle-2.png */ "../../node_modules/common/src/assets/image/agency/particles/particle-2.png");
/* harmony import */ var _assets_image_agency_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_agency_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/image/agency/particles/particle-3.png */ "../../node_modules/common/src/assets/image/agency/particles/particle-3.png");
/* harmony import */ var _assets_image_agency_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_agency_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/image/agency/particles/particle-4.png */ "../../node_modules/common/src/assets/image/agency/particles/particle-4.png");
/* harmony import */ var _assets_image_agency_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_agency_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/image/agency/particles/particle-5.png */ "../../node_modules/common/src/assets/image/agency/particles/particle-5.png");
/* harmony import */ var _assets_image_agency_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\Particle\\index.js";










var ParticlesComponent = function ParticlesComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_particles_js__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "particle",
    params: {
      particles: {
        number: {
          value: 7,
          density: {
            enable: true,
            value_area: 800
          }
        },
        shape: {
          type: ['images'],
          images: [{
            src: "".concat(_assets_image_agency_particles_particle_1_png__WEBPACK_IMPORTED_MODULE_2___default.a),
            width: 25,
            height: 25
          }, {
            src: "".concat(_assets_image_agency_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3___default.a),
            width: 18,
            height: 18
          }, {
            src: "".concat(_assets_image_agency_particles_particle_3_png__WEBPACK_IMPORTED_MODULE_4___default.a),
            width: 32,
            height: 32
          }, {
            src: "".concat(_assets_image_agency_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5___default.a),
            width: 41,
            height: 41
          }, {
            src: "".concat(_assets_image_agency_particles_particle_5_png__WEBPACK_IMPORTED_MODULE_6___default.a),
            width: 22,
            height: 22
          }, {
            src: "".concat(_assets_image_agency_particles_particle_2_png__WEBPACK_IMPORTED_MODULE_3___default.a),
            width: 22,
            height: 22
          }, {
            src: "".concat(_assets_image_agency_particles_particle_4_png__WEBPACK_IMPORTED_MODULE_5___default.a),
            width: 22,
            height: 22
          }]
        },
        opacity: {
          value: 0.17626369048095938,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 10,
          random: false
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: false,
          straight: false,
          bounce: true,
          attract: {
            enable: true,
            rotateX: 100,
            rotateY: 400
          }
        }
      },
      retina_detect: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ParticlesComponent);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/SearchPanel/index.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/SearchPanel/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Input */ "../../node_modules/reusecore/src/elements/Input/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_kit_ionicons_iosSearchStrong__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit/ionicons/iosSearchStrong */ "react-icons-kit/ionicons/iosSearchStrong");
/* harmony import */ var react_icons_kit_ionicons_iosSearchStrong__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_iosSearchStrong__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _searchPanel_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searchPanel.style */ "../../node_modules/common/src/containers/Agency/SearchPanel/searchPanel.style.js");

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\SearchPanel\\index.js";









var SearchPanel = function SearchPanel(_ref) {
  var titleStyle = _ref.titleStyle,
      hintStyle = _ref.hintStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_searchPanel_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Painel de pesquisa"
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    inputType: "email",
    iconPosition: "right",
    placeholder: "Digite o que deseja procurar",
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
      icon: react_icons_kit_ionicons_iosSearchStrong__WEBPACK_IMPORTED_MODULE_7__["iosSearchStrong"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Exemplo: \u201CPsic\xF3logos\u201D"
  }, hintStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
}; // SearchPanel style props


SearchPanel.propTypes = {
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  hintTextStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // SearchPanel default style

SearchPanel.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: ["24px", "30px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
    mb: "30px"
  },
  // hint default style
  hintStyle: {
    fontSize: "15px",
    fontWeight: "400",
    color: "rgba(32, 32, 29, 0.55)",
    letterSpacing: "-0.025em",
    mt: "17px",
    ml: ["15px", "30px"],
    mb: "0"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SearchPanel);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/SearchPanel/searchPanel.style.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/SearchPanel/searchPanel.style.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SearchPanelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "searchPanelstyle__SearchPanelWrapper",
  componentId: "qs3m78-0"
})(["max-width:600px;width:100%;margin:0 auto;padding:0 15px;.reusecore__input{.field-wrapper{input{border:0;border-radius:5px;height:70px;box-shadow:0 3px 20px rgba(35,49,90,0.08);color:#20201d;font-size:16px;font-weight:400;padding-left:39px;padding-right:80px;&:placholder{color:rgba(32,32,29,0.5);}}.input-icon{width:80px;height:100%;> div{svg{width:28px;height:28px;path{fill:#20201d;}}}}}}"]);
/* harmony default export */ __webpack_exports__["default"] = (SearchPanelWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/TeamSection/index.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/TeamSection/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _data_Agency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/Agency */ "../../node_modules/common/src/data/Agency/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _teamSection_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teamSection.style */ "../../node_modules/common/src/containers/Agency/TeamSection/teamSection.style.js");

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\TeamSection\\index.js";











var TeamSection = function TeamSection(_ref) {
  var row = _ref.row,
      col = _ref.col,
      sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      memberName = _ref.memberName,
      designation = _ref.designation,
      contentStyle = _ref.contentStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_teamSection_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "teamSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "PROFISSIONAIS EM DESTAQUE"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), _data_Agency__WEBPACK_IMPORTED_MODULE_8__["default"].teamMember.map(function (member, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "col"
    }, col, {
      key: "team_key-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "member-".concat(member.id),
      className: "team__member",
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
        src: member.thumbnail_url,
        alt: "Team member photo ".concat(member.id),
        className: "member__photo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }),
      contentStyle: contentStyle,
      title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: member.name
      }, memberName, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })),
      description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: member.designation
      }, designation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_teamSection_style__WEBPACK_IMPORTED_MODULE_10__["SocialLinks"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, member.social_links.map(function (social, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          key: "profile_id-".concat(index),
          className: social,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        });
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }))));
}; // TeamSection style props


TeamSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  memberName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  designation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // TeamSection default style

TeamSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "56px"]
  },
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#10ac84",
    mb: "10px"
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0"
  },
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    pl: "15px",
    pr: "15px",
    mb: "30px"
  },
  // Team member content default style
  contentStyle: {
    textAlign: "center",
    mt: "25px"
  },
  // Team member memberName default style
  memberName: {
    fontSize: ["18px", "18px", "16px", "20px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    mb: "8px",
    letterSpacing: "-0.020em"
  },
  // Team member description default style
  designation: {
    fontSize: ["15px", "16px", "14px", "17px"],
    lineHeight: "1",
    color: "rgba(15, 33, 55, 0.6)",
    mb: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TeamSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/TeamSection/teamSection.style.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/TeamSection/teamSection.style.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: SocialLinks, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinks", function() { return SocialLinks; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var TeamSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "teamSectionstyle__TeamSectionWrapper",
  componentId: "sc-1gx64sg-0"
})(["padding:80px 0;overflow:hidden;@media (max-width:990px){padding:60px 0;}.team__member{height:2 50px;.icon__wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;}}"]);
var SocialLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "teamSectionstyle__SocialLinks",
  componentId: "sc-1gx64sg-1"
})(["margin-top:12px;> button{margin:3px;cursor:pointer;width:30px;height:24px;line-height:20px;background-color:transparent;border-radius:3px;border:1px solid rgba(15,33,55,0.26);color:#0f2137;transition:all 0.2s ease;&:hover,&:focus{outline:none;&.flaticon-facebook-logo{color:#ffffff;border-color:#3c5a99;background-color:#3c5a99;}&.flaticon-twitter-logo-silhouette{color:#ffffff;border-color:#1da1f2;background-color:#1da1f2;}&.flaticon-instagram{color:#ffffff;border-color:#fb3958;background-color:#fb3958;}&.flaticon-dribble-logo{color:#ffffff;border-color:#ea4c89;background-color:#ea4c89;}}}"]);

/* harmony default export */ __webpack_exports__["default"] = (TeamSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/TestimonialSection/index.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/TestimonialSection/index.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _data_Agency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/Agency */ "../../node_modules/common/src/data/Agency/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _components_GlideCarousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var _components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _testimonialSection_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./testimonialSection.style */ "../../node_modules/common/src/containers/Agency/TestimonialSection/testimonialSection.style.js");

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\TestimonialSection\\index.js";













var TestimonialSection = function TestimonialSection(_ref) {
  var sectionHeader = _ref.sectionHeader,
      sectionTitle = _ref.sectionTitle,
      sectionSubTitle = _ref.sectionSubTitle,
      btnWrapperStyle = _ref.btnWrapperStyle,
      commentStyle = _ref.commentStyle,
      nameStyle = _ref.nameStyle,
      btnStyle = _ref.btnStyle,
      designationStyle = _ref.designationStyle;
  // Glide js options
  var glideOptions = {
    type: "carousel",
    autoplay: 5000,
    perView: 1,
    animationDuration: 700
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "testimonialSection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "DEPOIMENTOS"
  }, sectionSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Confira a opini\xE3o dos clientes:"
  }, sectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    options: glideOptions,
    buttonWrapperStyle: btnWrapperStyle,
    nextButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "flaticon-next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }),
      variant: "textButton"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })),
    prevButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "flaticon-left-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }),
      variant: "textButton"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, _data_Agency__WEBPACK_IMPORTED_MODULE_8__["default"].testimonial.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonialSection_style__WEBPACK_IMPORTED_MODULE_12__["TextWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-quotes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.comment
    }, commentStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.name
    }, nameStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.designation
    }, designationStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })))));
  })))));
}; // TestimonialSection style props


TestimonialSection.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  btnWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  nameStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  commentStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  designationStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // TestimonialSection default style

TestimonialSection.defaultProps = {
  // section header default style
  sectionHeader: {
    pt: "30px",
    mb: "56px"
  },
  // sub section default style
  sectionSubTitle: {
    textAlign: "center",
    fontSize: "18px",
    letterSpacing: "0.08em",
    fontWeight: "700",
    color: "#10ac84",
    mb: "10px"
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0"
  },
  // client comment style
  commentStyle: {
    color: "#343d48",
    fontWeight: "300",
    fontSize: ["20px", "24px"],
    lineHeight: "1.67",
    mb: "47px"
  },
  // client name style
  nameStyle: {
    as: "h3",
    color: "#343d48",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "30px",
    mb: 0
  },
  // client designation style
  designationStyle: {
    as: "h5",
    color: "rgba(52, 61, 72, 0.8)",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "30px",
    mb: 0
  },
  // glide slider nav controls style
  btnWrapperStyle: {
    position: "absolute",
    bottom: "62px",
    left: "12px"
  },
  // next / prev btn style
  btnStyle: {
    minWidth: "auto",
    minHeight: "auto",
    mr: "13px",
    fontSize: "16px",
    color: "#343d484d"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TestimonialSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/TestimonialSection/testimonialSection.style.js":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/TestimonialSection/testimonialSection.style.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: TextWrapper, ImageWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var TestimonialSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "testimonialSectionstyle__TestimonialSectionWrapper",
  componentId: "sc-1xvqdwk-0"
})(["margin:80px 0 0;text-align:center;background-color:#f6f7fb;background:linear-gradient(transparent 50%,#f6f7fb);overflow:hidden;@media (max-width:990px){margin:0px 0 0;}.glide{.glide__slides{}max-width:999px;.glide__controls{.reusecore__button{&:hover{color:", ";}}}}.glide__controls{@media (max-width:767px){width:100%;left:0;text-align:center;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.quoteText", "#343d48"));
var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialSectionstyle__TextWrapper",
  componentId: "sc-1xvqdwk-1"
})(["max-width:100%;margin-right:auto;align-self:flex-end;margin-bottom:120px;position:center;padding-left:120px;@media (max-width:767px){text-align:center;}i{color:rgba(52,61,72,0.07);font-size:70px;position:absolute;top:-40px;left:0;z-index:-1;}"]);
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "testimonialSectionstyle__ImageWrapper",
  componentId: "sc-1xvqdwk-2"
})(["@media only screen and (max-width:480px){display:none;}"]);

/* harmony default export */ __webpack_exports__["default"] = (TestimonialSectionWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/WorkHistory/index.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/WorkHistory/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Card */ "../../node_modules/reusecore/src/elements/Card/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_FeatureBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/FeatureBlock */ "../../node_modules/common/src/components/FeatureBlock/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _workHistory_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./workHistory.style */ "../../node_modules/common/src/containers/Agency/WorkHistory/workHistory.style.js");

var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\containers\\Agency\\WorkHistory\\index.js";













var WorkHistory = function WorkHistory(_ref) {
  var row = _ref.row,
      col = _ref.col,
      cardStyle = _ref.cardStyle,
      title = _ref.title,
      description = _ref.description,
      btnStyle = _ref.btnStyle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_workHistory_style__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "workHistorySection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "row"
  }, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col"
  }, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FeatureBlock__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "A confian\xE7a, dedica\xE7\xE3o e conhecimento necess\xE1rios para te levar \xE0 melhor vers\xE3o de voc\xEA"
    }, title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })),
    description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: "Se ainda n\xE3o se convenceu, veja mais sobre nossas qualidades!"
    }, description, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })),
    button: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      title: "Saiba mais"
    }, btnStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "col"
  }, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_workHistory_style__WEBPACK_IMPORTED_MODULE_12__["CounterUpArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "card"
  }, cardStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: "Descontos para empresas conveniadas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "card"
  }, cardStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: "Profissionais qualificados",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "card"
  }, cardStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_4___default.a, {
    start: 0,
    end: 100,
    duration: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), "%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: "seguro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Card__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "card"
  }, cardStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: "E muito mais!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Fa\xE7a parte da nossa hist\xF3ria"))))))));
}; // WorkHistory style props


WorkHistory.propTypes = {
  sectionHeader: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  sectionSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  cardStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // WorkHistory default style

WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // WorkHistory section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center"
  },
  // Card default style
  cardStyle: {
    p: ["20px 20px", "30px 20px", "30px 20px", "53px 40px"],
    borderRadius: "10px",
    boxShadow: "0px 8px 20px 0px rgba(16, 66, 97, 0.07)"
  },
  // WorkHistory section title default style
  title: {
    fontSize: ["26px", "26px", "30px", "40px"],
    lineHeight: "1.5",
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "20px"
  },
  // WorkHistory section description default style
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "33px"
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (WorkHistory);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/WorkHistory/workHistory.style.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/WorkHistory/workHistory.style.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: CounterUpArea, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterUpArea", function() { return CounterUpArea; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var WorkHistoryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "workHistorystyle__WorkHistoryWrapper",
  componentId: "u77lzh-0"
})(["padding:70px 0 80px;overflow:hidden;@media (max-width:990px){padding:50px 0 60px 0;}.feature__block{padding-right:132px;@media only screen and (max-width:1200px){padding-right:32px;}@media only screen and (max-width:991px){padding-right:0;margin-bottom:0;}@media only screen and (max-width:767px){padding-right:0;margin-bottom:40px;}.reusecore__button{transition:all 0.3s ease;&:hover{box-shadow:0px 9px 20px -5px rgba(16,172,132,0.57);}}}"]);
var CounterUpArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "workHistorystyle__CounterUpArea",
  componentId: "u77lzh-1"
})(["display:flex;flex-wrap:wrap;padding-left:20px;@media only screen and (max-width:1200px){padding-left:0;}@media only screen and (max-width:991px){padding-right:0;margin-left:-25px;}@media only screen and (max-width:480px){margin-left:0;}.card{width:calc(50% - 25px);margin-left:25px;margin-bottom:27px;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:box-shadow 0.3s ease-in-out;@media (max-width:767px){width:calc(50% - 13px);&:nth-child(2n + 1){margin-left:0;}}&:hover{box-shadow:0px 16px 35px 0px rgba(16,66,97,0.1);}h3{font-size:60px;font-weight:300;margin:0 0 20px;color:", ";@media (max-width:990px){font-size:40px;}@media (max-width:767px){margin-bottom:10px;}}p{color:", ";font-size:16px;font-weight:500;margin-bottom:7px;@media (max-width:990px){font-size:14px;text-align:center;}}a{color:", ";font-weight:500;font-size:15px;text-decoration:underline;margin-top:7px;@media (max-width:1190px){font-size:14px;text-align:center;}}&:nth-child(even){position:relative;top:22px;}&:last-child{box-shadow:none;border-radius:5px;border:2px dashed ", ";}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.headingColor', '#0f2137'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.headingColor', '#0f2137'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.linkColor', '#2b9eff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#ebebeb'));

/* harmony default export */ __webpack_exports__["default"] = (WorkHistoryWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Agency/agency.style.js":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/containers/Agency/agency.style.js ***!
  \***********************************************************************************************************************/
/*! exports provided: GlobalStyle, AgencyWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyWrapper", function() { return AgencyWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body {\n    font-family: 'Roboto', sans-serif;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Roboto', sans-serif;\n  }\n  section {\n    position: relative;\n  }\n  /* Drawer menu style */\n  .drawer {\n    .drawer-content-wrapper {\n      @media only screen and (max-width: 480px) {\n        width: 320px !important;\n      }\n      .reusecore-drawer__close {\n        position: absolute;\n        top: 20px;\n        right: 30px;\n        > button {\n          box-shadow: 0px 8px 38px 0px rgba(16, 172, 132, 0.5);\n          transition: all 0.3s ease;\n          svg {\n            width: 22px;\n            height: 22px;\n          }\n          &:hover {\n            opacity: 0.9;\n          }\n        }\n      }\n      .scrollspy__menu {\n        padding: 60px 71px;\n        max-height: 505px;\n        overflow-x: auto;\n        @media only screen and (max-width: 320px) {\n          max-height: 380px;\n        }\n        li {\n          margin: 35px 0;\n          &:first-child {\n            margin-top: 0;\n          }\n          &:last-child {\n            margin-bottom: 0;\n          }\n          a {\n            display: block;\n            color: #20201d;\n            font-size: 22px;\n            font-weight: 400;\n            transition: all 0.3s ease;\n            &:hover {\n              color: ", ";\n            }\n          }\n          &.is-current {\n            a {\n              color: ", ";\n              position: relative;\n              &:before {\n                content: '';\n                display: block;\n                width: 8px;\n                height: 8px;\n                border-radius: 50%;\n                background-color: ", ";\n                position: absolute;\n                top: calc(50% - 8px / 2);\n                left: -20px;\n              }\n            }\n          }\n        }\n      }\n      .copyright_section {\n        width: 100%;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        padding-left: 71px;\n        padding-bottom: 56px;\n        background-color: ", ";\n      }\n    }\n  }\n  /* Modal default style */\n  button.modalCloseBtn {\n    color: ", " !important;\n    &.alt {\n      background-color: ", " !important;\n      box-shadow: 0 8px 38px rgba(16, 172, 132, 0.5) !important;\n    }\n  }\n  .reuseModalHolder {\n    border: 0 !important;\n    background-color: transparent !important;\n    &.search-modal,\n    &.video-modal {\n      background-color: rgba(255, 255, 255, 0.96) !important;\n      overflow-y: auto !important;\n      .innerRndComponent {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        iframe {\n          max-width: 700px !important;\n          max-height: 380px !important;\n          width: 100% !important;\n          height: 100% !important;\n          border-radius: 5px !important;\n        }\n      }\n    }\n    &.demo_switcher_modal {\n      border: 0 !important;\n      background-color: rgba(16, 30, 77, 0.8) !important;\n      .innerRndComponent {\n        border-radius: 8px !important;\n      }\n    }\n    &.video-modal {\n      background-color: transparent !important;\n    }\n    .innerRndComponent {\n      padding-right: 0 !important;\n    }\n  }\n  .reuseModalCloseBtn {\n    cursor: pointer !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* agency global style */

var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#10ac84'));
/* agency wrapper style */

var AgencyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "agencystyle__AgencyWrapper",
  componentId: "nn8djx-0"
})(["overflow:hidden;.reusecore__navbar{width:100%;position:fixed;left:0;top:0;transition:all 0.3s ease;.reusecore__button{color:", ";font-size:18px;@media only screen and (max-width:480px){color:", ";}}.hamburgMenu__bar{margin-left:8px;> span{background-color:", ";@media only screen and (max-width:480px){background-color:", ";}}}}.sticky-nav-active{.reusecore__navbar{background-color:", ";box-shadow:0 0 20px rgba(0,0,0,0.1);padding:15px auto;.reusecore__button{color:", ";}.hamburgMenu__bar > span{background-color:", ";}}}", " ", " ", " ", " ", " ", ""], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#10ac84'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#10ac84'), styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"]);
GlobalStyle.displayName = 'GlobalStyle';
AgencyWrapper.displayName = 'AgencyWrapper';


/***/ }),

/***/ "../../node_modules/common/src/contexts/DrawerContext.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/contexts/DrawerContext.js ***!
  \***************************************************************************************************************/
/*! exports provided: DrawerContext, DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\common\\src\\contexts\\DrawerContext.js";

var initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

var DrawerContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var DrawerProvider = function DrawerProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DrawerContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "../../node_modules/common/src/data/Agency/index.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/data/Agency/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_image_agency_blog_coach_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/image/agency/blog/coach.jpg */ "../../node_modules/common/src/assets/image/agency/blog/coach.jpg");
/* harmony import */ var _assets_image_agency_blog_coach_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_coach_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_agency_blog_gestor_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/agency/blog/gestor.jpg */ "../../node_modules/common/src/assets/image/agency/blog/gestor.jpg");
/* harmony import */ var _assets_image_agency_blog_gestor_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_gestor_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_agency_blog_psicologa_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/agency/blog/psicologa.jpg */ "../../node_modules/common/src/assets/image/agency/blog/psicologa.jpg");
/* harmony import */ var _assets_image_agency_blog_psicologa_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_blog_psicologa_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_agency_team_destk1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/agency/team/destk1.jpg */ "../../node_modules/common/src/assets/image/agency/team/destk1.jpg");
/* harmony import */ var _assets_image_agency_team_destk1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_destk1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_image_agency_team_destk2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/agency/team/destk2.jpg */ "../../node_modules/common/src/assets/image/agency/team/destk2.jpg");
/* harmony import */ var _assets_image_agency_team_destk2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_destk2_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_agency_team_destk3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/agency/team/destk3.jpg */ "../../node_modules/common/src/assets/image/agency/team/destk3.jpg");
/* harmony import */ var _assets_image_agency_team_destk3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_team_destk3_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/agency/client/denny.png */ "../../node_modules/common/src/assets/image/agency/client/denny.png");
/* harmony import */ var _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/agency/client/menny.png */ "../../node_modules/common/src/assets/image/agency/client/menny.png");
/* harmony import */ var _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7__);








var data = {
  menuItems: [{
    label: "Especialistas",
    path: "#blogSection",
    offset: "100"
  }, {
    label: "Nossas Vantagens",
    path: "#AboutUsSection",
    offset: "80"
  }, {
    label: "Histórico empresarial",
    path: "#workHistorySection",
    offset: "100"
  }, {
    label: "Depoimentos",
    path: "#testimonialSection",
    offset: "100"
  }, {
    label: "Profissionais em destaque",
    path: "#teamSection",
    offset: "67"
  }, {
    label: "FAQ",
    path: "#faqSection",
    offset: "100"
  }],
  aboutus: [{
    id: 1,
    title: "Possibilidade de atendimento a qualquer hora.",
    icon: "flaticon-next"
  }, {
    id: 2,
    title: "A maior e melhor variedade de profissionais para te atender.",
    icon: "flaticon-next"
  }, {
    id: 3,
    title: "O melhor custo-beneficio do mercado.",
    icon: "flaticon-next"
  }, {
    id: 4,
    title: "Convênio com empresas",
    icon: "flaticon-next"
  }, {
    id: 5,
    title: "Comece sua evolução agora mesmo.",
    icon: "flaticon-next"
  }],
  features: [{
    /*
    id: 1,
    icon: "flaticon-flask",
    title: "Search Optimization",
    description:
      "By using Search Engine Optimization, You will get more Clients",
    },
    {
    id: 2,
    icon: "flaticon-pencil-case",
    title: "Ui/UX Design",
    description:
      "We provide the best UI/UX Design by following the latest trends of the market .",
    },
    {
    id: 3,
    icon: "flaticon-ruler",
    title: "Wireframing Task",
    description:
      "We respect our customer opinions and deals with them with perfect wireframing ",
    },
    {
    id: 4,
    icon: "flaticon-startup",
    title: "Business Solutions",
    description:
      "We are commited to provide proper business solutions with reasonable pricing",
    },
    {
    id: 5,
    icon: "flaticon-briefing",
    title: "Business Analysis",
    description:
      "A day to day report about your ongoing business for proper understanding",
    },
    {
    id: 6,
    icon: "flaticon-creative",
    title: "Content Management",
    description:
      "Proper Content Management is important to find out the real clients for your agencies",
    */
  }],
  qualityFeature: [{
    id: 1,
    icon: "flaticon-flask",
    title: "Search Optimization",
    description: "By using Search Engine Optimization, You will get more Clients."
  }, {
    id: 2,
    icon: "flaticon-pencil-case",
    title: "Wireframing Task",
    description: "We respect our customer opinions and deals with them with perfect wireframing."
  }, {
    id: 3,
    icon: "flaticon-ruler",
    title: "Ui/Ux Design",
    description: "We provide the best UI/UX Design by following the latest trends of the market ."
  }, {
    id: 4,
    icon: "flaticon-briefing",
    title: "Content Writting",
    description: "Proper Content Management is important to find out the real clients for your agencies ."
  }],
  blog: [{
    id: 1,
    title: "Coaches",
    thumbnail_url: _assets_image_agency_blog_coach_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
    postLink: "#1"
  }, {
    id: 2,
    title: "Educadores financeiros",
    thumbnail_url: _assets_image_agency_blog_gestor_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    postLink: "#2"
  }, {
    id: 3,
    title: "Psicólogos",
    thumbnail_url: _assets_image_agency_blog_psicologa_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    postLink: "#3"
  }],
  teamMember: [{
    id: 1,
    name: "Fernando Lopes",
    thumbnail_url: _assets_image_agency_team_destk1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    designation: "Coach",
    social_links: []
  }, {
    id: 2,
    name: "Gabriela Defoe",
    thumbnail_url: _assets_image_agency_team_destk2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    designation: "Gestora Financeira",
    social_links: []
  }, {
    id: 3,
    name: "Amanda Nante",
    thumbnail_url: _assets_image_agency_team_destk3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    designation: "Psicóloga",
    social_links: []
  }],
  testimonial: [{
    id: 1,
    name: "D. B.",
    designation: "Tanoshi",
    comment: "Supreendeu o quanto melhorou a qualidade de vida e produtividade dos meus funcionários ",
    avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }, {
    id: 2,
    name: "M. N.",
    designation: "Rdc",
    comment: "Consegui chegar em um patamar incrível da minha vida."
  }, {
    id: 3,
    name: "J. N.",
    designation: "Ferraz metalurgica",
    comment: "A variedade de profissionais me surpreendeu muito",
    avatar_url: _assets_image_agency_client_denny_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }, {
    id: 4,
    name: "M. G.",
    designation: "Laboratório Amigovida ",
    comment: "Foi uma experiência incrível e transformadora.",
    avatar_url: _assets_image_agency_client_menny_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }],
  faq: [{
    id: 1,
    expend: true,
    title: "Como funciona?",
    description: "É simples, basta escolher um profissional da área desejada, agendar um horário e realizar sua consulta "
  }, {
    id: 2,
    title: "Não existe consultas presenciais?",
    description: "Não, apenas consultas virtuais, justamente para poderem ser realizadas a qualquer hora e qualquer lugar e com qualquer profissional. "
  }, {
    id: 3,
    title: "Houve um imprevisto de ultima hora, posso cancelar?",
    description: "Felizmente sim, voce pode cancelar sua consulta, desde que tenha ao menos 1 hora de antecedencia, caso contrário será cobrado uma taxa de 15 reais para remarcar."
  }],
  menuWidget: [{
    id: 1,
    title: "Meu atendimento",
    menuItems: [{
      id: 1,
      url: "#1",
      text: "Especialidades"
    }, {
      id: 2,
      url: "#2",
      text: "Termos de uso do profissional"
    }, {
      id: 3,
      url: "#3",
      text: "Horários"
    }, {
      id: 4,
      url: "#4",
      text: "Valores"
    }, {
      id: 5,
      url: "#5",
      text: "Cadastro"
    }]
  }, {
    id: 2,
    title: "Clientes",
    menuItems: [{
      id: 1,
      url: "#1",
      text: "Perguntas Frequentes"
    }, {
      id: 2,
      url: "#2",
      text: "Politica de privacidade"
    }, {
      id: 3,
      url: "#2",
      text: "Causas tratadas"
    }, {
      id: 4,
      url: "#4",
      text: "Depoimentos"
    }]
  }, {
    id: 3,
    title: "Sobre nós",
    menuItems: [{
      id: 1,
      url: "#1",
      text: "Quem somos"
    }, {
      id: 2,
      url: "#2",
      text: "Trabalhe conosco"
    }, {
      id: 3,
      url: "#3",
      text: "Contato"
    }, {
      id: 4,
      url: "#4",
      text: "Imprensa"
    }]
  }, {
    id: 4,
    title: "Especialistas",
    menuItems: [{
      id: 1,
      url: "#1",
      text: "Coaches"
    }, {
      id: 2,
      url: "#2",
      text: "Educadores financeiros"
    }, {
      id: 3,
      url: "#3",
      text: "Psicólogos"
    }]
  }],
  social_profile: [{
    id: 1,
    icon: "flaticon-facebook-logo",
    link: "#1"
  }, {
    id: 2,
    icon: "flaticon-twitter-logo-silhouette",
    link: "#2"
  }, {
    id: 3,
    icon: "flaticon-instagram",
    link: "#3"
  }, {
    id: 4,
    icon: "flaticon-tumblr-logo",
    link: "#4"
  }, {
    id: 5,
    icon: "flaticon-dribble-logo",
    link: "#5"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "../../node_modules/common/src/theme/agency/colors.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/theme/agency/colors.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  transparent: 'transparent',
  labelColor: '#767676',
  lightBorder: '#f1f4f6',
  inactiveField: '#f2f2f2',
  inactiveButton: '#b7dbdd',
  inactiveIcon: '#EBEBEB',
  primaryHover: '#006b70',
  secondary: '#ff5b60',
  secondaryHover: '#FF282F',
  yellow: '#fdb32a',
  yellowHover: '#F29E02',
  borderColor: '#dadada',
  black: '#000000',
  white: '#ffffff',
  primary: '#10ac84',
  headingColor: '#0f2137',
  quoteText: '#343d48',
  textColor: 'rgba(52, 61, 72, 0.8)',
  linkColor: '#2b9eff'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "../../node_modules/common/src/theme/agency/index.js":
/*!***********************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/common/src/theme/agency/index.js ***!
  \***********************************************************************************************************/
/*! exports provided: agencyTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agencyTheme", function() { return agencyTheme; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "../../node_modules/common/src/theme/agency/colors.js");

var agencyTheme = {
  breakpoints: [480, 768, 990, 1220],
  space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
  fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  fonts: {
    roboto: '"Roboto", sans-serif'
  },
  borders: [0, '1px solid', '2px solid', '4px solid'],
  radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, '50%'],
  colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"],
  colorStyles: {
    primary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover
      }
    },
    secondary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warning: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    error: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    primaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover
      }
    },
    secondaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warningWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    errorWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      padding: 0,
      height: 'auto',
      backgroundColor: "".concat(_colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent)
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  }
};

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/next/dist/client/link.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "../../node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/next/dist/client/router.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!**********************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/next/dist/client/with-router.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!***************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/next/link.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../../node_modules/next/router.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/next/router.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "../../node_modules/next/dist/client/router.js")


/***/ }),

/***/ "../../node_modules/rc-tabs/assets/index.css":
/*!***************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/rc-tabs/assets/index.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/reusecore/node_modules/rc-drawer/assets/index.css":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/node_modules/rc-drawer/assets/index.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Animation/index.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Animation/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: AnimSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimSpinner", function() { return AnimSpinner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
var AnimSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 1s linear infinite;"], spinner);


/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Box/index.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Box/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Box\\index.js";





var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('div')(_base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Box'), function (props) {
  return props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])({
    display: 'flex'
  }, styled_system__WEBPACK_IMPORTED_MODULE_5__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_5__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_5__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('FlexBox'));
});

var Box = function Box(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BoxWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);
Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,

  /** Using this props we can convert our Box Component to a Flex Container or Component */
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main']),
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  flex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderTop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRight: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))])
};
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/button.style.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Button/button.style.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");





var ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "ntq24p-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('heights.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('widths.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radius.0', '3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.2', '8'), styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["buttonStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["sizeStyle"], _base__WEBPACK_IMPORTED_MODULE_4__["base"]); // prop types can also be added from the style functions

ButtonStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/index.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Button/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.style */ "../../node_modules/reusecore/src/elements/Button/button.style.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "../../node_modules/reusecore/src/elements/Loader/index.js");


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Button\\index.js";





var Button = function Button(_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon,
      disabled = _ref.disabled,
      iconPosition = _ref.iconPosition,
      onClick = _ref.onClick,
      loader = _ref.loader,
      loaderColor = _ref.loaderColor,
      isMaterial = _ref.isMaterial,
      isLoading = _ref.isLoading,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  var buttonIcon = isLoading !== false ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, loader ? loader : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loaderColor: loaderColor || '#30C56D',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })) : icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, icon); // set icon position

  var position = iconPosition || 'right';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), position === 'left' && buttonIcon, title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, title), position === 'right' && buttonIcon);
};

Button.propTypes = {
  /** ClassName of the button */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Add icon */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add loader */
  loader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add Material effect */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** If true button will be disabled */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'warning', 'error', 'primaryWithBg', 'secondaryWithBg', 'warningWithBg', 'errorWithBg']),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Card/index.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Card/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Card\\index.js";






var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('div')(_base__WEBPACK_IMPORTED_MODULE_8__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_6__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_6__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundImage"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundSize"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundPosition"], styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundRepeat"], styled_system__WEBPACK_IMPORTED_MODULE_6__["opacity"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__["cards"], Object(_base__WEBPACK_IMPORTED_MODULE_8__["themed"])('Card'));

var Card = function Card(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), children);
};

Card.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
}, styled_system__WEBPACK_IMPORTED_MODULE_6__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["borderRadius"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundImage"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundPosition"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["backgroundRepeat"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_6__["opacity"].propTypes, _theme_customVariant__WEBPACK_IMPORTED_MODULE_7__["cards"].propTypes);
Card.defaultProps = {
  boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)'
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Checkbox/checkbox.style.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Checkbox/checkbox.style.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var CheckBoxStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "checkboxstyle__CheckBoxStyle",
  componentId: "zx7hai-0"
})(["display:inline-flex;.reusecore__field-label{color:", ";font-size:", "px;font-weight:", ";}&.label_left{label{display:flex;align-items:center;.reusecore__field-label{margin-right:", "px;}}}&.label_right{label{display:flex;flex-direction:row-reverse;align-items:center;.reusecore__field-label{margin-left:", "px;}}}input[type='checkbox']{&.checkbox{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;pointer-events:none;&:checked + div{border-color:", ";background-color:", ";&::after{opacity:1;visibility:visible;transform:rotate(45deg) scale(1);}}}+ div{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:3px;border:1px solid ", ";position:relative;transition:all 0.3s ease;&::after{content:'';width:4px;height:10px;transform:rotate(45deg) scale(0.8);border-bottom:2px solid ", ";border-right:2px solid ", ";position:absolute;top:0;opacity:0;visibility:hidden;transition-property:opacity,visibility;transition-duration:0.3s;}}}", ""], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#dadada'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), _base__WEBPACK_IMPORTED_MODULE_2__["base"]); // prop types can also be added from the style functions

CheckBoxStyle.propTypes = {};
CheckBoxStyle.displayName = 'CheckBoxStyle';
/* harmony default export */ __webpack_exports__["default"] = (CheckBoxStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Checkbox/index.js":
/*!*******************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Checkbox/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "../../node_modules/reusecore/src/hooks/index.js");
/* harmony import */ var _checkbox_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox.style */ "../../node_modules/reusecore/src/elements/Checkbox/checkbox.style.js");



var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Checkbox\\index.js";





var CheckBox = function CheckBox(_ref) {
  var className = _ref.className,
      isChecked = _ref.isChecked,
      labelText = _ref.labelText,
      value = _ref.value,
      id = _ref.id,
      htmlFor = _ref.htmlFor,
      labelPosition = _ref.labelPosition,
      isMaterial = _ref.isMaterial,
      disabled = _ref.disabled,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["className", "isChecked", "labelText", "value", "id", "htmlFor", "labelPosition", "isMaterial", "disabled"]);

  // use toggle hooks
  var _useToggle = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useToggle"])(isChecked),
      _useToggle2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useToggle, 2),
      toggleValue = _useToggle2[0],
      toggleHandler = _useToggle2[1]; // Add all classs to an array


  var addAllClasses = ['reusecore__checkbox']; // Add label position class

  if (labelPosition) {
    addAllClasses.push("label_".concat(labelPosition));
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // label control


  var LabelField = labelText && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "reusecore__field-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, labelText);
  var position = labelPosition || 'right';
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_checkbox_style__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: htmlFor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, position === 'left' || position === 'right' ? LabelField : '', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "checkbox",
    className: "checkbox",
    id: id,
    value: value,
    checked: toggleValue,
    onChange: toggleHandler,
    disabled: disabled
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })));
};

CheckBox.propTypes = {
  /** ClassName of the Checkbox */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** labelText of the checkbox field */
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Note: id and htmlFor must be same.
   */
  htmlFor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),

  /** Set checkbox id in number || string */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),

  /** value of the checkbox field */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /** labelText of the checkbox field */
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['right', 'left']),

  /** Checkbox toggle state based on isChecked prop */
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /** disabled of the checkbox field */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/** Checkbox default proptype */

CheckBox.defaultProps = {
  isChecked: false,
  labelText: 'Checkbox label',
  labelPosition: 'right',
  disabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (CheckBox);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Drawer/index.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Drawer/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "../../node_modules/reusecore/node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Drawer\\index.js";





var Drawer = function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_drawer__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onMaskClick: toggleHandler,
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, closeButton), children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, drawerHandler));
};

Drawer.propTypes = {
  /** ClassName of the Drawer */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set drawer width. Default value is 300px. */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set drawer position left || right || top || bottom. */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right', 'top', 'bottom']),

  /** drawerHandler could be button, icon, string or any component */
  drawerHandler: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element.isRequired
};
Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Heading/index.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Heading/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Heading\\index.js";





var HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p')(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Heading'));

var Heading = function Heading(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HeadingWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);
Heading.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Image/index.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Image/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Image\\index.js";




var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('img')({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_5__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])('Image'));

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["src", "alt"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: src,
    alt: alt
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);
Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/index.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Input/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.style */ "../../node_modules/reusecore/src/elements/Input/input.style.js");




var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Input\\index.js";




var Input = function Input(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      inputType = _ref.inputType,
      isMaterial = _ref.isMaterial,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      passwordShowHide = _ref.passwordShowHide,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["label", "value", "onBlur", "onFocus", "onChange", "inputType", "isMaterial", "icon", "iconPosition", "passwordShowHide", "className"]);

  // use toggle hooks
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    toggle: false,
    focus: false,
    value: ''
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // toggle function


  var handleToggle = function handleToggle() {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      toggle: !state.toggle
    }));
  }; // add focus class


  var handleOnFocus = function handleOnFocus(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: true
    }));
    onFocus(event);
  }; // remove focus class


  var handleOnBlur = function handleOnBlur(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: false
    }));
    onBlur(event);
  }; // handle input value


  var handleOnChange = function handleOnChange(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      value: event.target.value
    }));
    onChange(event.target.value);
  }; // get input focus class


  var getInputFocusClass = function getInputFocusClass() {
    if (state.focus === true || state.value !== '') {
      return 'is-focus';
    } else {
      return '';
    }
  }; // init variable


  var inputElement, htmlFor; // Add all classs to an array

  var addAllClasses = ['reusecore__input']; // Add is-material class

  if (isMaterial) {
    addAllClasses.push('is-material');
  } // Add icon position class if input element has icon


  if (icon && iconPosition) {
    addAllClasses.push("icon-".concat(iconPosition));
  } // Add new class


  if (className) {
    addAllClasses.push(className);
  } // if lable is not empty


  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  } // Label position


  var LabelPosition = isMaterial === true ? 'bottom' : 'top'; // Label field

  var LabelField = label && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: htmlFor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, label); // Input type check

  switch (inputType) {
    case 'textarea':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }));
      break;

    case 'password':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: state.toggle ? 'password' : 'text',
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), passwordShowHide && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["EyeButton"], {
        onClick: handleToggle,
        className: state.toggle ? 'eye' : 'eye-closed',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      })));
      break;

    default:
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: inputType,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })), icon && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "input-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, icon));
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "".concat(addAllClasses.join(' '), " ").concat(getInputFocusClass()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, LabelPosition === 'top' && LabelField, inputElement, isMaterial && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), LabelPosition === 'bottom' && LabelField);
};
/** Inout prop type checking. */


Input.propTypes = {
  /** className of the Input component. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** Set input label value. */
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** The input value, required for a controlled component. */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['string', 'number']),

  /** Make default input into material style input. */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Password show hide icon button prop [*only for password field]. */
  passwordShowHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Set input type of the input element. Default type is text. */
  inputType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['text', 'email', 'password', 'number', 'textarea']),

  /** Add icon in input field. This prop will not work with password
   * and textarea field.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /** Set input field icon position. Default position is 'left'. */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['left', 'right']),

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/** Inout default type. */

Input.defaultProps = {
  inputType: 'text',
  isMaterial: false,
  iconPosition: 'left',
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/input.style.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Input/input.style.js ***!
  \**********************************************************************************************************************/
/*! exports provided: EyeButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeButton", function() { return EyeButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var InputField = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "inputstyle__InputField",
  componentId: "sc-8lywy0-0"
})(["position:relative;.field-wrapper{position:relative;}&.icon-left,&.icon-right{.field-wrapper{display:flex;align-items:center;> .input-icon{position:absolute;top:0;bottom:auto;display:flex;align-items:center;justify-content:center;width:34px;height:40px;}}}&.icon-left{.field-wrapper{> .input-icon{left:0;right:auto;}> input{padding-left:34px;}}}&.icon-right{.field-wrapper{> .input-icon{left:auto;right:0;}> input{padding-right:34px;}}}label{display:block;color:", ";font-size:", "px;font-weight:", ";margin-bottom:", "px;transition:0.2s ease all;}textarea,input{font-size:16px;padding:11px;display:block;width:100%;color:", ";box-shadow:none;border-radius:4px;box-sizing:border-box;border:1px solid ", ";transition:border-color 0.2s ease;&:focus{outline:none;border-color:", ";}}textarea{min-height:150px;}&.is-material{label{position:absolute;left:0;top:10px;}input,textarea{border-radius:0;border-top:0;border-left:0;border-right:0;padding-left:0;padding-right:0;}textarea{min-height:40px;padding-bottom:0;}.highlight{position:absolute;height:1px;top:auto;left:50%;bottom:0;width:0;pointer-events:none;transition:all 0.2s ease;}&.icon-left,&.icon-right{.field-wrapper{flex-direction:row-reverse;> .input-icon{width:auto;}> input{flex:1;}}}&.icon-left{.field-wrapper{> input{padding-left:20px;}}label{top:-15px;font-size:12px;}}&.icon-right{.field-wrapper{> input{padding-right:20px;}}}&.is-focus{input{border-color:", ";}label{top:-16px;font-size:12px;color:", ";}.highlight{width:100%;height:2px;background-color:", ";left:0;}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.labelColor', '#767676'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#028489'));
var EyeButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "inputstyle__EyeButton",
  componentId: "sc-8lywy0-1"
})(["width:43px;height:40px;border:0;padding:0;margin:0;top:0;right:0;position:absolute;outline:none;cursor:pointer;box-shadow:none;display:flex;align-items:center;justify-content:center;background-color:transparent;> span{width:12px;height:12px;display:block;border:solid 1px ", ";border-radius:75% 15%;transform:rotate(45deg);position:relative;&:before{content:'';display:block;width:4px;height:4px;border-radius:50%;left:3px;top:3px;position:absolute;border:solid 1px ", ";}}&.eye-closed{> span{&:after{content:'';display:block;width:1px;height:20px;left:calc(50% - 1px / 2);top:-4px;position:absolute;background-color:", ";transform:rotate(-12deg);}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.textColor', '#484848'));

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Link/index.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Link/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Link\\index.js";




var LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('a')({
  textDecoration: 'none'
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Link'));

var Link = function Link(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LinkWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Link);
Link.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"].propTypes);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/index.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Loader/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.style */ "../../node_modules/reusecore/src/elements/Loader/loader.style.js");


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Loader\\index.js";




var Loader = function Loader(_ref) {
  var loaderColor = _ref.loaderColor,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loader_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

Loader.propTypes = {
  /** ClassName of the Loader */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set loader width in number || string */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set loader height in number || string */
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set color for loader */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Loader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/loader.style.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Loader/loader.style.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Animation */ "../../node_modules/reusecore/src/elements/Animation/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");






var LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "sc-6byg9m-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], function (props) {
  return props.loaderColor ? props.loaderColor : '#000000';
}, _Animation__WEBPACK_IMPORTED_MODULE_4__["AnimSpinner"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], _base__WEBPACK_IMPORTED_MODULE_5__["base"]); // prop types can also be added from the style functions

LoaderStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/index.js":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Navbar/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.style */ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js");


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Navbar\\index.js";




var Navbar = function Navbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      navbarStyle = _ref.navbarStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "navbarStyle"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__navbar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), children);
};

Navbar.propTypes = {
  /** ClassName of the Navbar. Default class is reusecore__navbar*/
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render menu, logo, button or any component that
   * you want to show in navbar. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  space: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRadius: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  boxShadow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/** Navbar default proptype */

Navbar.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js":
/*!************************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Navbar/navbar.style.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var NavbarStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "navbarstyle__NavbarStyle",
  componentId: "i4x6b2-0"
})(["display:flex;align-items:center;min-height:56px;padding:10px 16px;", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"]);
NavbarStyle.displayName = 'NavbarStyle';
/* harmony default export */ __webpack_exports__["default"] = (NavbarStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Text/index.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/Text/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\Text\\index.js";





var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p')(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Text'));

var Text = function Text(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TextWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);
Text.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/UI/Logo/index.js":
/*!******************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/UI/Logo/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Link */ "../../node_modules/reusecore/src/elements/Link/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Image */ "../../node_modules/reusecore/src/elements/Image/index.js");


var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\node_modules\\reusecore\\src\\elements\\UI\\Logo\\index.js";






var Logo = function Logo(_ref) {
  var logoWrapperStyle = _ref.logoWrapperStyle,
      logoStyle = _ref.logoStyle,
      titleStyle = _ref.titleStyle,
      withAchor = _ref.withAchor,
      anchorProps = _ref.anchorProps,
      logoSrc = _ref.logoSrc,
      title = _ref.title,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, logoWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), withAchor ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, anchorProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

Logo.propTypes = {
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  logoWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  withAchor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  anchorProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/base.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/elements/base.js ***!
  \*********************************************************************************************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/** this is our Base Component every components must be Extend it */

var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};
var base = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(function () {
  return {
    boxSizing: 'border-box'
  };
}, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["order"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
base.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes);

/***/ }),

/***/ "../../node_modules/reusecore/src/hooks/index.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/hooks/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: useToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle */ "../../node_modules/reusecore/src/hooks/toggle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useToggle", function() { return _toggle__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../../node_modules/reusecore/src/hooks/toggle/index.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/hooks/toggle/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (initialValue) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var toggler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return setValue(function (value) {
      return !value;
    });
  });
  return [value, toggler];
});

/***/ }),

/***/ "../../node_modules/reusecore/src/theme/customVariant.js":
/*!***************************************************************************************************************!*\
  !*** C:/Users/wesle/Downloads/superpropslanding/SuperProps/node_modules/reusecore/src/theme/customVariant.js ***!
  \***************************************************************************************************************/
/*! exports provided: cards, buttonStyle, colorStyle, sizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeStyle", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

var buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
var colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
var sizeStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
var cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'cards'
});


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_theme_agency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/theme/agency */ "../../node_modules/common/src/theme/agency/index.js");
/* harmony import */ var common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/assets/css/style */ "../../node_modules/common/src/assets/css/style.js");
/* harmony import */ var common_src_containers_Agency_agency_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/containers/Agency/agency.style */ "../../node_modules/common/src/containers/Agency/agency.style.js");
/* harmony import */ var common_src_containers_Agency_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/containers/Agency/Navbar */ "../../node_modules/common/src/containers/Agency/Navbar/index.js");
/* harmony import */ var common_src_containers_Agency_BannerSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/containers/Agency/BannerSection */ "../../node_modules/common/src/containers/Agency/BannerSection/index.js");
/* harmony import */ var common_src_containers_Agency_AboutUsSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/containers/Agency/AboutUsSection */ "../../node_modules/common/src/containers/Agency/AboutUsSection/index.js");
/* harmony import */ var common_src_containers_Agency_WorkHistory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/containers/Agency/WorkHistory */ "../../node_modules/common/src/containers/Agency/WorkHistory/index.js");
/* harmony import */ var common_src_containers_Agency_BlogSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/containers/Agency/BlogSection */ "../../node_modules/common/src/containers/Agency/BlogSection/index.js");
/* harmony import */ var common_src_containers_Agency_TestimonialSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/containers/Agency/TestimonialSection */ "../../node_modules/common/src/containers/Agency/TestimonialSection/index.js");
/* harmony import */ var common_src_containers_Agency_TeamSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/containers/Agency/TeamSection */ "../../node_modules/common/src/containers/Agency/TeamSection/index.js");
/* harmony import */ var common_src_containers_Agency_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/src/containers/Agency/Footer */ "../../node_modules/common/src/containers/Agency/Footer/index.js");
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var common_src_containers_Agency_FaqSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/containers/Agency/FaqSection */ "../../node_modules/common/src/containers/Agency/FaqSection/index.js");
var _jsxFileName = "C:\\Users\\wesle\\Downloads\\superpropslanding\\SuperProps\\packages\\landing\\pages\\index.js";








 //import FeatureSection from "common/src/containers/Agency/FeatureSection";






{
  /*import VideoSection from 'common/src/containers/Agency/VideoSection';
  import NewsletterSection from 'common/src/containers/Agency/NewsletterSection';
  import QualitySection from "common/src/containers/Agency/QualitySection";*/
}



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: common_src_theme_agency__WEBPACK_IMPORTED_MODULE_4__["agencyTheme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Meu Appoio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#10ac84",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "Meu Appoio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_5__["ResetCSS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_agency_style__WEBPACK_IMPORTED_MODULE_6__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_agency_style__WEBPACK_IMPORTED_MODULE_6__["AgencyWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_15__["DrawerProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_BannerSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_BlogSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_AboutUsSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_WorkHistory__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_TestimonialSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_TeamSection__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_FaqSection__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Agency_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wesle\Downloads\superpropslanding\SuperProps\packages\landing\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@glidejs/glide":
/*!*********************************!*\
  !*** external "@glidejs/glide" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "@redq/reuse-modal":
/*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "rc-tabs":
/*!**************************!*\
  !*** external "rc-tabs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs");

/***/ }),

/***/ "rc-tabs/lib/ScrollableInkTabBar":
/*!**************************************************!*\
  !*** external "rc-tabs/lib/ScrollableInkTabBar" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/ScrollableInkTabBar");

/***/ }),

/***/ "rc-tabs/lib/TabContent":
/*!*****************************************!*\
  !*** external "rc-tabs/lib/TabContent" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/TabContent");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-accessible-accordion":
/*!*********************************************!*\
  !*** external "react-accessible-accordion" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/entypo/minus":
/*!***********************************************!*\
  !*** external "react-icons-kit/entypo/minus" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/minus");

/***/ }),

/***/ "react-icons-kit/entypo/plus":
/*!**********************************************!*\
  !*** external "react-icons-kit/entypo/plus" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/plus");

/***/ }),

/***/ "react-icons-kit/ionicons/iosSearchStrong":
/*!***********************************************************!*\
  !*** external "react-icons-kit/ionicons/iosSearchStrong" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/iosSearchStrong");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map