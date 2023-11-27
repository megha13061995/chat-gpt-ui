"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-decode-numeric-character-reference";
exports.ids = ["vendor-chunks/micromark-util-decode-numeric-character-reference"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeNumericCharacterReference: () => (/* binding */ decodeNumericCharacterReference)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/values.js\");\n\n/**\n * Turn the number (in string form as either hexa- or plain decimal) coming from\n * a numeric character reference into a character.\n *\n * Sort of like `String.fromCodePoint(Number.parseInt(value, base))`, but makes\n * non-characters and control characters safe.\n *\n * @param {string} value\n *   Value to decode.\n * @param {number} base\n *   Numeric base.\n * @returns {string}\n *   Character.\n */ function decodeNumericCharacterReference(value, base) {\n    const code = Number.parseInt(value, base);\n    if (// C0 except for HT, LF, FF, CR, space.\n    code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.ht || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.vt || code > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.cr && code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space || // Control character (DEL) of C0, and C1 controls.\n    code > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde && code < 160 || // Lone high surrogates and low surrogates.\n    code > 55295 && code < 57344 || // Noncharacters.\n    code > 64975 && code < 65008 || /* eslint-disable no-bitwise */ (code & 65535) === 65535 || (code & 65535) === 65534 || /* eslint-enable no-bitwise */ // Out of range\n    code > 1114111) {\n        return micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.values.replacementCharacter;\n    }\n    return String.fromCodePoint(code);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLW51bWVyaWMtY2hhcmFjdGVyLXJlZmVyZW5jZS9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBRW5EOzs7Ozs7Ozs7Ozs7O0NBYUMsR0FDTSxTQUFTRSxnQ0FBZ0NDLEtBQUssRUFBRUMsSUFBSTtJQUN6RCxNQUFNQyxPQUFPQyxPQUFPQyxRQUFRLENBQUNKLE9BQU9DO0lBRXBDLElBQ0UsdUNBQXVDO0lBQ3ZDQyxPQUFPTCx3REFBS0EsQ0FBQ1EsRUFBRSxJQUNmSCxTQUFTTCx3REFBS0EsQ0FBQ1MsRUFBRSxJQUNoQkosT0FBT0wsd0RBQUtBLENBQUNVLEVBQUUsSUFBSUwsT0FBT0wsd0RBQUtBLENBQUNXLEtBQUssSUFDdEMsa0RBQWtEO0lBQ2pETixPQUFPTCx3REFBS0EsQ0FBQ1ksS0FBSyxJQUFJUCxPQUFPLE9BQzlCLDJDQUEyQztJQUMxQ0EsT0FBTyxTQUFVQSxPQUFPLFNBQ3pCLGlCQUFpQjtJQUNoQkEsT0FBTyxTQUFVQSxPQUFPLFNBRXpCLDZCQUQ2QixHQUM1QkEsQ0FBQUEsT0FBTyxLQUFLLE1BQU8sU0FDcEIsQ0FBQ0EsT0FBTyxLQUFLLE1BQU8sU0FDcEIsNEJBQTRCLEdBQzVCLGVBQWU7SUFDZkEsT0FBTyxTQUNQO1FBQ0EsT0FBT0oseURBQU1BLENBQUNZLG9CQUFvQjtJQUNwQztJQUVBLE9BQU9DLE9BQU9DLGFBQWEsQ0FBQ1Y7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWdwdC8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1kZWNvZGUtbnVtZXJpYy1jaGFyYWN0ZXItcmVmZXJlbmNlL2Rldi9pbmRleC5qcz9kOGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29kZXMsIHZhbHVlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG4vKipcbiAqIFR1cm4gdGhlIG51bWJlciAoaW4gc3RyaW5nIGZvcm0gYXMgZWl0aGVyIGhleGEtIG9yIHBsYWluIGRlY2ltYWwpIGNvbWluZyBmcm9tXG4gKiBhIG51bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZSBpbnRvIGEgY2hhcmFjdGVyLlxuICpcbiAqIFNvcnQgb2YgbGlrZSBgU3RyaW5nLmZyb21Db2RlUG9pbnQoTnVtYmVyLnBhcnNlSW50KHZhbHVlLCBiYXNlKSlgLCBidXQgbWFrZXNcbiAqIG5vbi1jaGFyYWN0ZXJzIGFuZCBjb250cm9sIGNoYXJhY3RlcnMgc2FmZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVmFsdWUgdG8gZGVjb2RlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJhc2VcbiAqICAgTnVtZXJpYyBiYXNlLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgQ2hhcmFjdGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlTnVtZXJpY0NoYXJhY3RlclJlZmVyZW5jZSh2YWx1ZSwgYmFzZSkge1xuICBjb25zdCBjb2RlID0gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCBiYXNlKVxuXG4gIGlmIChcbiAgICAvLyBDMCBleGNlcHQgZm9yIEhULCBMRiwgRkYsIENSLCBzcGFjZS5cbiAgICBjb2RlIDwgY29kZXMuaHQgfHxcbiAgICBjb2RlID09PSBjb2Rlcy52dCB8fFxuICAgIChjb2RlID4gY29kZXMuY3IgJiYgY29kZSA8IGNvZGVzLnNwYWNlKSB8fFxuICAgIC8vIENvbnRyb2wgY2hhcmFjdGVyIChERUwpIG9mIEMwLCBhbmQgQzEgY29udHJvbHMuXG4gICAgKGNvZGUgPiBjb2Rlcy50aWxkZSAmJiBjb2RlIDwgMTYwKSB8fFxuICAgIC8vIExvbmUgaGlnaCBzdXJyb2dhdGVzIGFuZCBsb3cgc3Vycm9nYXRlcy5cbiAgICAoY29kZSA+IDU1XzI5NSAmJiBjb2RlIDwgNTdfMzQ0KSB8fFxuICAgIC8vIE5vbmNoYXJhY3RlcnMuXG4gICAgKGNvZGUgPiA2NF85NzUgJiYgY29kZSA8IDY1XzAwOCkgfHxcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG4gICAgKGNvZGUgJiA2NV81MzUpID09PSA2NV81MzUgfHxcbiAgICAoY29kZSAmIDY1XzUzNSkgPT09IDY1XzUzNCB8fFxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tYml0d2lzZSAqL1xuICAgIC8vIE91dCBvZiByYW5nZVxuICAgIGNvZGUgPiAxXzExNF8xMTFcbiAgKSB7XG4gICAgcmV0dXJuIHZhbHVlcy5yZXBsYWNlbWVudENoYXJhY3RlclxuICB9XG5cbiAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KGNvZGUpXG59XG4iXSwibmFtZXMiOlsiY29kZXMiLCJ2YWx1ZXMiLCJkZWNvZGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlIiwidmFsdWUiLCJiYXNlIiwiY29kZSIsIk51bWJlciIsInBhcnNlSW50IiwiaHQiLCJ2dCIsImNyIiwic3BhY2UiLCJ0aWxkZSIsInJlcGxhY2VtZW50Q2hhcmFjdGVyIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js\n");

/***/ })

};
;