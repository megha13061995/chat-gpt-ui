"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-combine-extensions";
exports.ids = ["vendor-chunks/micromark-util-combine-extensions"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-combine-extensions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/micromark-util-combine-extensions/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   combineExtensions: () => (/* binding */ combineExtensions),\n/* harmony export */   combineHtmlExtensions: () => (/* binding */ combineHtmlExtensions)\n/* harmony export */ });\n/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-chunked */ \"(ssr)/./node_modules/micromark-util-chunked/dev/index.js\");\n/**\n * @typedef {import('micromark-util-types').Extension} Extension\n * @typedef {import('micromark-util-types').Handles} Handles\n * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension\n * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension\n */ \nconst hasOwnProperty = {}.hasOwnProperty;\n/**\n * Combine multiple syntax extensions into one.\n *\n * @param {Array<Extension>} extensions\n *   List of syntax extensions.\n * @returns {NormalizedExtension}\n *   A single combined extension.\n */ function combineExtensions(extensions) {\n    /** @type {NormalizedExtension} */ const all = {};\n    let index = -1;\n    while(++index < extensions.length){\n        syntaxExtension(all, extensions[index]);\n    }\n    return all;\n}\n/**\n * Merge `extension` into `all`.\n *\n * @param {NormalizedExtension} all\n *   Extension to merge into.\n * @param {Extension} extension\n *   Extension to merge.\n * @returns {undefined}\n */ function syntaxExtension(all, extension) {\n    /** @type {keyof Extension} */ let hook;\n    for(hook in extension){\n        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;\n        /** @type {Record<string, unknown>} */ const left = maybe || (all[hook] = {});\n        /** @type {Record<string, unknown> | undefined} */ const right = extension[hook];\n        /** @type {string} */ let code;\n        if (right) {\n            for(code in right){\n                if (!hasOwnProperty.call(left, code)) left[code] = [];\n                const value = right[code];\n                constructs(// @ts-expect-error Looks like a list.\n                left[code], Array.isArray(value) ? value : value ? [\n                    value\n                ] : []);\n            }\n        }\n    }\n}\n/**\n * Merge `list` into `existing` (both lists of constructs).\n * Mutates `existing`.\n *\n * @param {Array<unknown>} existing\n * @param {Array<unknown>} list\n * @returns {undefined}\n */ function constructs(existing, list) {\n    let index = -1;\n    /** @type {Array<unknown>} */ const before = [];\n    while(++index < list.length){\n        // @ts-expect-error Looks like an object.\n        ;\n        (list[index].add === \"after\" ? existing : before).push(list[index]);\n    }\n    (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_0__.splice)(existing, 0, 0, before);\n}\n/**\n * Combine multiple HTML extensions into one.\n *\n * @param {Array<HtmlExtension>} htmlExtensions\n *   List of HTML extensions.\n * @returns {HtmlExtension}\n *   A single combined HTML extension.\n */ function combineHtmlExtensions(htmlExtensions) {\n    /** @type {HtmlExtension} */ const handlers = {};\n    let index = -1;\n    while(++index < htmlExtensions.length){\n        htmlExtension(handlers, htmlExtensions[index]);\n    }\n    return handlers;\n}\n/**\n * Merge `extension` into `all`.\n *\n * @param {HtmlExtension} all\n *   Extension to merge into.\n * @param {HtmlExtension} extension\n *   Extension to merge.\n * @returns {undefined}\n */ function htmlExtension(all, extension) {\n    /** @type {keyof HtmlExtension} */ let hook;\n    for(hook in extension){\n        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;\n        const left = maybe || (all[hook] = {});\n        const right = extension[hook];\n        /** @type {keyof Handles} */ let type;\n        if (right) {\n            for(type in right){\n                // @ts-expect-error assume document vs regular handler are managed correctly.\n                left[type] = right[type];\n            }\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY29tYmluZS1leHRlbnNpb25zL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7OztDQUtDLEdBRTRDO0FBRTdDLE1BQU1DLGlCQUFpQixDQUFDLEVBQUVBLGNBQWM7QUFFeEM7Ozs7Ozs7Q0FPQyxHQUNNLFNBQVNDLGtCQUFrQkMsVUFBVTtJQUMxQyxnQ0FBZ0MsR0FDaEMsTUFBTUMsTUFBTSxDQUFDO0lBQ2IsSUFBSUMsUUFBUSxDQUFDO0lBRWIsTUFBTyxFQUFFQSxRQUFRRixXQUFXRyxNQUFNLENBQUU7UUFDbENDLGdCQUFnQkgsS0FBS0QsVUFBVSxDQUFDRSxNQUFNO0lBQ3hDO0lBRUEsT0FBT0Q7QUFDVDtBQUVBOzs7Ozs7OztDQVFDLEdBQ0QsU0FBU0csZ0JBQWdCSCxHQUFHLEVBQUVJLFNBQVM7SUFDckMsNEJBQTRCLEdBQzVCLElBQUlDO0lBRUosSUFBS0EsUUFBUUQsVUFBVztRQUN0QixNQUFNRSxRQUFRVCxlQUFlVSxJQUFJLENBQUNQLEtBQUtLLFFBQVFMLEdBQUcsQ0FBQ0ssS0FBSyxHQUFHRztRQUMzRCxvQ0FBb0MsR0FDcEMsTUFBTUMsT0FBT0gsU0FBVU4sQ0FBQUEsR0FBRyxDQUFDSyxLQUFLLEdBQUcsQ0FBQztRQUNwQyxnREFBZ0QsR0FDaEQsTUFBTUssUUFBUU4sU0FBUyxDQUFDQyxLQUFLO1FBQzdCLG1CQUFtQixHQUNuQixJQUFJTTtRQUVKLElBQUlELE9BQU87WUFDVCxJQUFLQyxRQUFRRCxNQUFPO2dCQUNsQixJQUFJLENBQUNiLGVBQWVVLElBQUksQ0FBQ0UsTUFBTUUsT0FBT0YsSUFBSSxDQUFDRSxLQUFLLEdBQUcsRUFBRTtnQkFDckQsTUFBTUMsUUFBUUYsS0FBSyxDQUFDQyxLQUFLO2dCQUN6QkUsV0FDRSxzQ0FBc0M7Z0JBQ3RDSixJQUFJLENBQUNFLEtBQUssRUFDVkcsTUFBTUMsT0FBTyxDQUFDSCxTQUFTQSxRQUFRQSxRQUFRO29CQUFDQTtpQkFBTSxHQUFHLEVBQUU7WUFFdkQ7UUFDRjtJQUNGO0FBQ0Y7QUFFQTs7Ozs7OztDQU9DLEdBQ0QsU0FBU0MsV0FBV0csUUFBUSxFQUFFQyxJQUFJO0lBQ2hDLElBQUloQixRQUFRLENBQUM7SUFDYiwyQkFBMkIsR0FDM0IsTUFBTWlCLFNBQVMsRUFBRTtJQUVqQixNQUFPLEVBQUVqQixRQUFRZ0IsS0FBS2YsTUFBTSxDQUFFO1FBQzVCLHlDQUF5Qzs7UUFDdkNlLENBQUFBLElBQUksQ0FBQ2hCLE1BQU0sQ0FBQ2tCLEdBQUcsS0FBSyxVQUFVSCxXQUFXRSxNQUFLLEVBQUdFLElBQUksQ0FBQ0gsSUFBSSxDQUFDaEIsTUFBTTtJQUNyRTtJQUVBTCw4REFBTUEsQ0FBQ29CLFVBQVUsR0FBRyxHQUFHRTtBQUN6QjtBQUVBOzs7Ozs7O0NBT0MsR0FDTSxTQUFTRyxzQkFBc0JDLGNBQWM7SUFDbEQsMEJBQTBCLEdBQzFCLE1BQU1DLFdBQVcsQ0FBQztJQUNsQixJQUFJdEIsUUFBUSxDQUFDO0lBRWIsTUFBTyxFQUFFQSxRQUFRcUIsZUFBZXBCLE1BQU0sQ0FBRTtRQUN0Q3NCLGNBQWNELFVBQVVELGNBQWMsQ0FBQ3JCLE1BQU07SUFDL0M7SUFFQSxPQUFPc0I7QUFDVDtBQUVBOzs7Ozs7OztDQVFDLEdBQ0QsU0FBU0MsY0FBY3hCLEdBQUcsRUFBRUksU0FBUztJQUNuQyxnQ0FBZ0MsR0FDaEMsSUFBSUM7SUFFSixJQUFLQSxRQUFRRCxVQUFXO1FBQ3RCLE1BQU1FLFFBQVFULGVBQWVVLElBQUksQ0FBQ1AsS0FBS0ssUUFBUUwsR0FBRyxDQUFDSyxLQUFLLEdBQUdHO1FBQzNELE1BQU1DLE9BQU9ILFNBQVVOLENBQUFBLEdBQUcsQ0FBQ0ssS0FBSyxHQUFHLENBQUM7UUFDcEMsTUFBTUssUUFBUU4sU0FBUyxDQUFDQyxLQUFLO1FBQzdCLDBCQUEwQixHQUMxQixJQUFJb0I7UUFFSixJQUFJZixPQUFPO1lBQ1QsSUFBS2UsUUFBUWYsTUFBTztnQkFDbEIsNkVBQTZFO2dCQUM3RUQsSUFBSSxDQUFDZ0IsS0FBSyxHQUFHZixLQUFLLENBQUNlLEtBQUs7WUFDMUI7UUFDRjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWdwdC8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1jb21iaW5lLWV4dGVuc2lvbnMvaW5kZXguanM/NzNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRXh0ZW5zaW9ufSBFeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuSGFuZGxlc30gSGFuZGxlc1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5IdG1sRXh0ZW5zaW9ufSBIdG1sRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLk5vcm1hbGl6ZWRFeHRlbnNpb259IE5vcm1hbGl6ZWRFeHRlbnNpb25cbiAqL1xuXG5pbXBvcnQge3NwbGljZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2h1bmtlZCdcblxuY29uc3QgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vKipcbiAqIENvbWJpbmUgbXVsdGlwbGUgc3ludGF4IGV4dGVuc2lvbnMgaW50byBvbmUuXG4gKlxuICogQHBhcmFtIHtBcnJheTxFeHRlbnNpb24+fSBleHRlbnNpb25zXG4gKiAgIExpc3Qgb2Ygc3ludGF4IGV4dGVuc2lvbnMuXG4gKiBAcmV0dXJucyB7Tm9ybWFsaXplZEV4dGVuc2lvbn1cbiAqICAgQSBzaW5nbGUgY29tYmluZWQgZXh0ZW5zaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUV4dGVuc2lvbnMoZXh0ZW5zaW9ucykge1xuICAvKiogQHR5cGUge05vcm1hbGl6ZWRFeHRlbnNpb259ICovXG4gIGNvbnN0IGFsbCA9IHt9XG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBleHRlbnNpb25zLmxlbmd0aCkge1xuICAgIHN5bnRheEV4dGVuc2lvbihhbGwsIGV4dGVuc2lvbnNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIGFsbFxufVxuXG4vKipcbiAqIE1lcmdlIGBleHRlbnNpb25gIGludG8gYGFsbGAuXG4gKlxuICogQHBhcmFtIHtOb3JtYWxpemVkRXh0ZW5zaW9ufSBhbGxcbiAqICAgRXh0ZW5zaW9uIHRvIG1lcmdlIGludG8uXG4gKiBAcGFyYW0ge0V4dGVuc2lvbn0gZXh0ZW5zaW9uXG4gKiAgIEV4dGVuc2lvbiB0byBtZXJnZS5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmZ1bmN0aW9uIHN5bnRheEV4dGVuc2lvbihhbGwsIGV4dGVuc2lvbikge1xuICAvKiogQHR5cGUge2tleW9mIEV4dGVuc2lvbn0gKi9cbiAgbGV0IGhvb2tcblxuICBmb3IgKGhvb2sgaW4gZXh0ZW5zaW9uKSB7XG4gICAgY29uc3QgbWF5YmUgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFsbCwgaG9vaykgPyBhbGxbaG9va10gOiB1bmRlZmluZWRcbiAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSAqL1xuICAgIGNvbnN0IGxlZnQgPSBtYXliZSB8fCAoYWxsW2hvb2tdID0ge30pXG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZH0gKi9cbiAgICBjb25zdCByaWdodCA9IGV4dGVuc2lvbltob29rXVxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCBjb2RlXG5cbiAgICBpZiAocmlnaHQpIHtcbiAgICAgIGZvciAoY29kZSBpbiByaWdodCkge1xuICAgICAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwobGVmdCwgY29kZSkpIGxlZnRbY29kZV0gPSBbXVxuICAgICAgICBjb25zdCB2YWx1ZSA9IHJpZ2h0W2NvZGVdXG4gICAgICAgIGNvbnN0cnVjdHMoXG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBMb29rcyBsaWtlIGEgbGlzdC5cbiAgICAgICAgICBsZWZ0W2NvZGVdLFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiB2YWx1ZSA/IFt2YWx1ZV0gOiBbXVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgYGxpc3RgIGludG8gYGV4aXN0aW5nYCAoYm90aCBsaXN0cyBvZiBjb25zdHJ1Y3RzKS5cbiAqIE11dGF0ZXMgYGV4aXN0aW5nYC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PHVua25vd24+fSBleGlzdGluZ1xuICogQHBhcmFtIHtBcnJheTx1bmtub3duPn0gbGlzdFxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gY29uc3RydWN0cyhleGlzdGluZywgbGlzdCkge1xuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge0FycmF5PHVua25vd24+fSAqL1xuICBjb25zdCBiZWZvcmUgPSBbXVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIExvb2tzIGxpa2UgYW4gb2JqZWN0LlxuICAgIDsobGlzdFtpbmRleF0uYWRkID09PSAnYWZ0ZXInID8gZXhpc3RpbmcgOiBiZWZvcmUpLnB1c2gobGlzdFtpbmRleF0pXG4gIH1cblxuICBzcGxpY2UoZXhpc3RpbmcsIDAsIDAsIGJlZm9yZSlcbn1cblxuLyoqXG4gKiBDb21iaW5lIG11bHRpcGxlIEhUTUwgZXh0ZW5zaW9ucyBpbnRvIG9uZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PEh0bWxFeHRlbnNpb24+fSBodG1sRXh0ZW5zaW9uc1xuICogICBMaXN0IG9mIEhUTUwgZXh0ZW5zaW9ucy5cbiAqIEByZXR1cm5zIHtIdG1sRXh0ZW5zaW9ufVxuICogICBBIHNpbmdsZSBjb21iaW5lZCBIVE1MIGV4dGVuc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVIdG1sRXh0ZW5zaW9ucyhodG1sRXh0ZW5zaW9ucykge1xuICAvKiogQHR5cGUge0h0bWxFeHRlbnNpb259ICovXG4gIGNvbnN0IGhhbmRsZXJzID0ge31cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGh0bWxFeHRlbnNpb25zLmxlbmd0aCkge1xuICAgIGh0bWxFeHRlbnNpb24oaGFuZGxlcnMsIGh0bWxFeHRlbnNpb25zW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBoYW5kbGVyc1xufVxuXG4vKipcbiAqIE1lcmdlIGBleHRlbnNpb25gIGludG8gYGFsbGAuXG4gKlxuICogQHBhcmFtIHtIdG1sRXh0ZW5zaW9ufSBhbGxcbiAqICAgRXh0ZW5zaW9uIHRvIG1lcmdlIGludG8uXG4gKiBAcGFyYW0ge0h0bWxFeHRlbnNpb259IGV4dGVuc2lvblxuICogICBFeHRlbnNpb24gdG8gbWVyZ2UuXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiBodG1sRXh0ZW5zaW9uKGFsbCwgZXh0ZW5zaW9uKSB7XG4gIC8qKiBAdHlwZSB7a2V5b2YgSHRtbEV4dGVuc2lvbn0gKi9cbiAgbGV0IGhvb2tcblxuICBmb3IgKGhvb2sgaW4gZXh0ZW5zaW9uKSB7XG4gICAgY29uc3QgbWF5YmUgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFsbCwgaG9vaykgPyBhbGxbaG9va10gOiB1bmRlZmluZWRcbiAgICBjb25zdCBsZWZ0ID0gbWF5YmUgfHwgKGFsbFtob29rXSA9IHt9KVxuICAgIGNvbnN0IHJpZ2h0ID0gZXh0ZW5zaW9uW2hvb2tdXG4gICAgLyoqIEB0eXBlIHtrZXlvZiBIYW5kbGVzfSAqL1xuICAgIGxldCB0eXBlXG5cbiAgICBpZiAocmlnaHQpIHtcbiAgICAgIGZvciAodHlwZSBpbiByaWdodCkge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIGFzc3VtZSBkb2N1bWVudCB2cyByZWd1bGFyIGhhbmRsZXIgYXJlIG1hbmFnZWQgY29ycmVjdGx5LlxuICAgICAgICBsZWZ0W3R5cGVdID0gcmlnaHRbdHlwZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbWJpbmVFeHRlbnNpb25zIiwiZXh0ZW5zaW9ucyIsImFsbCIsImluZGV4IiwibGVuZ3RoIiwic3ludGF4RXh0ZW5zaW9uIiwiZXh0ZW5zaW9uIiwiaG9vayIsIm1heWJlIiwiY2FsbCIsInVuZGVmaW5lZCIsImxlZnQiLCJyaWdodCIsImNvZGUiLCJ2YWx1ZSIsImNvbnN0cnVjdHMiLCJBcnJheSIsImlzQXJyYXkiLCJleGlzdGluZyIsImxpc3QiLCJiZWZvcmUiLCJhZGQiLCJwdXNoIiwiY29tYmluZUh0bWxFeHRlbnNpb25zIiwiaHRtbEV4dGVuc2lvbnMiLCJoYW5kbGVycyIsImh0bWxFeHRlbnNpb24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-combine-extensions/index.js\n");

/***/ })

};
;