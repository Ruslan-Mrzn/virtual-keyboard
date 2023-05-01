/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capsModeKeys": () => (/* binding */ capsModeKeys),
/* harmony export */   "fifthRowKeys": () => (/* binding */ fifthRowKeys),
/* harmony export */   "fifthRowKeysCodes": () => (/* binding */ fifthRowKeysCodes),
/* harmony export */   "firstRowKeys": () => (/* binding */ firstRowKeys),
/* harmony export */   "firstRowKeysCodes": () => (/* binding */ firstRowKeysCodes),
/* harmony export */   "fourthRowKeys": () => (/* binding */ fourthRowKeys),
/* harmony export */   "fourthRowKeysCodes": () => (/* binding */ fourthRowKeysCodes),
/* harmony export */   "secondRowKeys": () => (/* binding */ secondRowKeys),
/* harmony export */   "secondRowKeysCodes": () => (/* binding */ secondRowKeysCodes),
/* harmony export */   "shiftModeKeys": () => (/* binding */ shiftModeKeys),
/* harmony export */   "shiftModeKeysActiveValues": () => (/* binding */ shiftModeKeysActiveValues),
/* harmony export */   "shiftModeKeysInactiveValues": () => (/* binding */ shiftModeKeysInactiveValues),
/* harmony export */   "thirdRowKeys": () => (/* binding */ thirdRowKeys),
/* harmony export */   "thirdRowKeysCodes": () => (/* binding */ thirdRowKeysCodes)
/* harmony export */ });
var firstRowKeysCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
var firstRowKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
var secondRowKeysCodes = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
var secondRowKeys = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'];
var thirdRowKeysCodes = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
var thirdRowKeys = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
var fourthRowKeysCodes = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
var fourthRowKeys = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift'];
var fifthRowKeysCodes = ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
var fifthRowKeys = ['Control', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
var capsModeKeys = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'];
var shiftModeKeys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash'];
var shiftModeKeysActiveValues = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?'];
var shiftModeKeysInactiveValues = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', "'", ',', '.', '/'];


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createKeyboardRow": () => (/* binding */ createKeyboardRow),
/* harmony export */   "renderKeyboardKey": () => (/* binding */ renderKeyboardKey)
/* harmony export */ });
var renderKeyboardKey = function renderKeyboardKey(key, rowKeys, rowKeysCodes, keyboardSettings, capsModeKeys) {
  var keyboardKey = document.createElement('button');
  keyboardKey.classList.add('keyboard-key');
  if (key === 'Backspace' || key === 'Tab' || key === 'CapsLock' || key === 'Enter' || key === 'Shift' || key === ' ') keyboardKey.classList.add('flex-grow');
  if (key === 'CapsLock' && keyboardSettings.capsMode) keyboardKey.classList.add('power-on');
  keyboardKey.dataset.key = rowKeysCodes[rowKeys.indexOf(key)];
  keyboardKey.textContent = key;
  if (key === 'ArrowUp') keyboardKey.textContent = '↑';
  if (key === 'ArrowLeft') keyboardKey.textContent = '←';
  if (key === 'ArrowDown') keyboardKey.textContent = '↓';
  if (key === 'ArrowRight') keyboardKey.textContent = '→';
  if (capsModeKeys.some(function (keyCode) {
    return rowKeysCodes[rowKeys.indexOf(key)] === keyCode;
  }) && keyboardSettings.capsMode) keyboardKey.textContent = key.toUpperCase();
  rowKeys.splice(rowKeys.indexOf(key), 1, '');
  return keyboardKey;
};
var createKeyboardRow = function createKeyboardRow() {
  var row = document.createElement('div');
  row.classList.add('keyboard-row');
  return row;
};


/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/styles.scss */ "./src/sass/styles.scss");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants */ "./src/utils/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var keyboardSettings;
if (localStorage.getItem('keyboardSettings')) {
  keyboardSettings = JSON.parse(localStorage.getItem('keyboardSettings'));
}
if (!localStorage.getItem('keyboardSettings')) {
  keyboardSettings = {
    capsMode: false
  };
  localStorage.setItem('keyboardSettings', JSON.stringify(keyboardSettings));
}
var _document = document,
  body = _document.body;
var output = document.createElement('textarea');
output.classList.add('output');
body.append(output);
var keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
body.append(keyboard);
var info = document.createElement('p');
info.classList.add('info');
info.textContent = "\n  \u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0432 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 Windows.\n  \u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u044F\u0437\u044B\u043A\u0430 \u043D\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043E\n";
body.append(info);
var shiftAndCapsMode = {};
var copyedFirstRowKeys = _toConsumableArray(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.firstRowKeys);
var copyedSecondRowKeys = _toConsumableArray(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.secondRowKeys);
var copyedThirdRowKeys = _toConsumableArray(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.thirdRowKeys);
var copyedFourthRowKeys = _toConsumableArray(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.fourthRowKeys);
var copyedFifthRowKeys = _toConsumableArray(_utils_constants__WEBPACK_IMPORTED_MODULE_2__.fifthRowKeys);

/* First Row */
var keyboardFirstRow = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createKeyboardRow)();
_utils_constants__WEBPACK_IMPORTED_MODULE_2__.firstRowKeys.forEach(function (key) {
  keyboardFirstRow.append((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.renderKeyboardKey)(key, copyedFirstRowKeys, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.firstRowKeysCodes, keyboardSettings, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys));
});
/* ============================================== */

/* Second Row */
var keyboardSecondRow = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createKeyboardRow)();
_utils_constants__WEBPACK_IMPORTED_MODULE_2__.secondRowKeys.forEach(function (key) {
  keyboardSecondRow.append((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.renderKeyboardKey)(key, copyedSecondRowKeys, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.secondRowKeysCodes, keyboardSettings, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys));
});
/* ============================================== */

/* Third Row */
var keyboardThirdRow = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createKeyboardRow)();
_utils_constants__WEBPACK_IMPORTED_MODULE_2__.thirdRowKeys.forEach(function (key) {
  keyboardThirdRow.append((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.renderKeyboardKey)(key, copyedThirdRowKeys, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.thirdRowKeysCodes, keyboardSettings, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys));
});
/* ============================================== */

/* Fourth Row */
var keyboardFourthRow = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createKeyboardRow)();
_utils_constants__WEBPACK_IMPORTED_MODULE_2__.fourthRowKeys.forEach(function (key) {
  keyboardFourthRow.append((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.renderKeyboardKey)(key, copyedFourthRowKeys, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.fourthRowKeysCodes, keyboardSettings, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys));
});
/* ============================================== */

/* Fifth Row */
var keyboardFifthRow = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createKeyboardRow)();
_utils_constants__WEBPACK_IMPORTED_MODULE_2__.fifthRowKeys.forEach(function (key) {
  keyboardFifthRow.append((0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.renderKeyboardKey)(key, copyedFifthRowKeys, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.fifthRowKeysCodes, keyboardSettings, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys));
});
/* ============================================== */

keyboard.append(keyboardFirstRow);
keyboard.append(keyboardSecondRow);
keyboard.append(keyboardThirdRow);
keyboard.append(keyboardFourthRow);
keyboard.append(keyboardFifthRow);
document.addEventListener('keydown', function (e) {
  document.querySelector('.output').focus();
  if (_utils_constants__WEBPACK_IMPORTED_MODULE_2__.shiftModeKeys.some(function (keyCode) {
    return keyCode === e.code;
  })) {
    e.preventDefault();
    var _key = document.querySelector("[data-key=".concat(e.code, "]"));
    output.setRangeText("".concat(_key.textContent), output.selectionStart, output.selectionEnd, 'end');
  }
  if (e.key === 'Shift') {
    shiftAndCapsMode[e.key] = true;
    _utils_constants__WEBPACK_IMPORTED_MODULE_2__.shiftModeKeys.forEach(function (keyCode, index) {
      var key = document.querySelector("[data-key=".concat(keyCode, "]"));
      key.textContent = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.shiftModeKeysActiveValues[index];
    });
    _utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys.forEach(function (keyCode) {
      var key = document.querySelector("[data-key=".concat(keyCode, "]"));
      var currentText = key.textContent;
      if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
      if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
    });
  }
  if (e.code === 'CapsLock') {
    if (!e.repeat) {
      shiftAndCapsMode[e.key] = true;
      keyboardSettings.capsMode = !keyboardSettings.capsMode;
      localStorage.setItem('keyboardSettings', JSON.stringify(keyboardSettings));
      document.querySelector("[data-key=".concat(e.code, "]")).classList.toggle('power-on');
      _utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys.forEach(function (keyCode) {
        var key = document.querySelector("[data-key=".concat(keyCode, "]"));
        var currentText = key.textContent;
        if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
        if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
      });
    }
  }
  if (shiftAndCapsMode.Shift && shiftAndCapsMode.CapsLock) {
    _utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys.forEach(function (keyCode) {
      var key = document.querySelector("[data-key=".concat(keyCode, "]"));
      var currentText = key.textContent;
      if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
      if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
    });
  }
  if (_utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys.some(function (keyCode) {
    return keyCode === e.code;
  })) {
    e.preventDefault();
    var _key2 = document.querySelector("[data-key=".concat(e.code, "]"));
    output.setRangeText("".concat(_key2.textContent), output.selectionStart, output.selectionEnd, 'end');
  }
  if (e.code === 'Tab') {
    e.preventDefault();
    output.setRangeText('    ', output.selectionStart, output.selectionEnd, 'end');
  }
  if (e.code === 'AltLeft' || e.code === 'AltRight') {
    e.preventDefault();
  }
  var key = document.querySelector("[data-key=".concat(e.code, "]"));
  if (key) key.classList.add('active');
});
document.addEventListener('keyup', function (e) {
  var keyboardKey = document.querySelector("[data-key=".concat(e.code, "]"));
  if (keyboardKey) keyboardKey.classList.remove('active');
  if (e.key === 'CapsLock') {
    shiftAndCapsMode[e.key] = false;
  }
  if (e.key === 'Shift') {
    shiftAndCapsMode[e.key] = false;
    _utils_constants__WEBPACK_IMPORTED_MODULE_2__.shiftModeKeys.forEach(function (keyCode, index) {
      var key = document.querySelector("[data-key=".concat(keyCode, "]"));
      key.textContent = _utils_constants__WEBPACK_IMPORTED_MODULE_2__.shiftModeKeysInactiveValues[index];
    });
    _utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys.forEach(function (keyCode) {
      var key = document.querySelector("[data-key=".concat(keyCode, "]"));
      var currentText = key.textContent;
      if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
      if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
    });
  }
  if (shiftAndCapsMode.Shift) {
    _utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys.forEach(function (keyCode) {
      var key = document.querySelector("[data-key=".concat(keyCode, "]"));
      var currentText = key.textContent;
      if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
      if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
    });
  }
  if (!shiftAndCapsMode.Shift) {
    _utils_constants__WEBPACK_IMPORTED_MODULE_2__.capsModeKeys.forEach(function (keyCode) {
      var key = document.querySelector("[data-key=".concat(keyCode, "]"));
      var currentText = key.textContent;
      if (keyboardSettings.capsMode) key.textContent = currentText.toLocaleUpperCase();
      if (!keyboardSettings.capsMode) key.textContent = currentText.toLocaleLowerCase();
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map