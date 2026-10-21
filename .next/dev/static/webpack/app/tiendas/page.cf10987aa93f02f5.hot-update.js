/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tiendas/page",{

/***/ "(app-pages-browser)/./src/modules/marketplace/components/stores/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/marketplace/components/stores/index.ts ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/modules/marketplace/data/stores-data.ts":
/*!*****************************************************!*\
  !*** ./src/modules/marketplace/data/stores-data.ts ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/modules/marketplace/pages/store-page.tsx":
/*!******************************************************!*\
  !*** ./src/modules/marketplace/pages/store-page.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StorePage: () => (/* binding */ StorePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home */ \"(app-pages-browser)/./src/modules/marketplace/components/home/index.ts\");\n/* harmony import */ var _components_stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/stores */ \"(app-pages-browser)/./src/modules/marketplace/components/stores/index.ts\");\n/* harmony import */ var _components_stores__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_stores__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_stores_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/stores-data */ \"(app-pages-browser)/./src/modules/marketplace/data/stores-data.ts\");\n/* harmony import */ var _data_stores_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_stores_data__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ StorePage auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction StorePage() {\n    _s();\n    const [cartCount, setCartCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"zentrall-home relative min-w-0 bg-[var(--color-fondo)] text-[var(--color-texto)]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home__WEBPACK_IMPORTED_MODULE_2__.SmoothScroll, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USUARIO\\\\Downloads\\\\zentrall-home\\\\src\\\\modules\\\\marketplace\\\\pages\\\\store-page.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-x-0 top-0 z-40\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USUARIO\\\\Downloads\\\\zentrall-home\\\\src\\\\modules\\\\marketplace\\\\pages\\\\store-page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                cartCount: cartCount\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USUARIO\\\\Downloads\\\\zentrall-home\\\\src\\\\modules\\\\marketplace\\\\pages\\\\store-page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        \"aria-hidden\": true,\n                        className: \"pointer-events-none relative z-10 -mt-px h-[2px] bg-[var(--color-fondo)]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Downloads\\\\zentrall-home\\\\src\\\\modules\\\\marketplace\\\\pages\\\\store-page.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_stores__WEBPACK_IMPORTED_MODULE_3__.StoresHero, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Downloads\\\\zentrall-home\\\\src\\\\modules\\\\marketplace\\\\pages\\\\store-page.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_stores__WEBPACK_IMPORTED_MODULE_3__.StoresSlideshow, {\n                        stores: _data_stores_data__WEBPACK_IMPORTED_MODULE_4__.AFFILIATED_STORES\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USUARIO\\\\Downloads\\\\zentrall-home\\\\src\\\\modules\\\\marketplace\\\\pages\\\\store-page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USUARIO\\\\Downloads\\\\zentrall-home\\\\src\\\\modules\\\\marketplace\\\\pages\\\\store-page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home__WEBPACK_IMPORTED_MODULE_2__.Footer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USUARIO\\\\Downloads\\\\zentrall-home\\\\src\\\\modules\\\\marketplace\\\\pages\\\\store-page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USUARIO\\\\Downloads\\\\zentrall-home\\\\src\\\\modules\\\\marketplace\\\\pages\\\\store-page.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(StorePage, \"feQnAgJ4xuQEL4xAWdwJWbUKk5o=\");\n_c = StorePage;\nvar _c;\n$RefreshReg$(_c, \"StorePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9tb2R1bGVzL21hcmtldHBsYWNlL3BhZ2VzL3N0b3JlLXBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWlDO0FBS0w7QUFDdUM7QUFDWDtBQUVqRCxTQUFTTzs7SUFDZCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0MscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDUiwwREFBWUE7Ozs7OzBCQUdiLDhEQUFDTztnQkFBSUMsV0FBVTs7Ozs7OzBCQUVmLDhEQUFDVCxvREFBTUE7Z0JBQUNNLFdBQVdBOzs7Ozs7MEJBRW5CLDhEQUFDSTs7a0NBQ0MsOERBQUNGO3dCQUNDRyxhQUFXO3dCQUNYRixXQUFVOzs7Ozs7a0NBR1osOERBQUNQLDBEQUFVQTs7Ozs7a0NBQ1gsOERBQUNDLCtEQUFlQTt3QkFBQ1MsUUFBUVIsZ0VBQWlCQTs7Ozs7Ozs7Ozs7OzBCQUU1Qyw4REFBQ0wsb0RBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBeEJnQk07S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNVQVJJT1xcRG93bmxvYWRzXFx6ZW50cmFsbC1ob21lXFxzcmNcXG1vZHVsZXNcXG1hcmtldHBsYWNlXFxwYWdlc1xcc3RvcmUtcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvb3RlcixcclxuICBIZWFkZXIsXHJcbiAgU21vb3RoU2Nyb2xsLFxyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWVcIjtcclxuaW1wb3J0IHsgU3RvcmVzSGVybywgU3RvcmVzU2xpZGVzaG93IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc3RvcmVzXCI7XHJcbmltcG9ydCB7IEFGRklMSUFURURfU1RPUkVTIH0gZnJvbSBcIi4uL2RhdGEvc3RvcmVzLWRhdGFcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdG9yZVBhZ2UoKSB7XHJcbiAgY29uc3QgW2NhcnRDb3VudCwgc2V0Q2FydENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ6ZW50cmFsbC1ob21lIHJlbGF0aXZlIG1pbi13LTAgYmctW3ZhcigtLWNvbG9yLWZvbmRvKV0gdGV4dC1bdmFyKC0tY29sb3ItdGV4dG8pXVwiPlxyXG4gICAgICA8U21vb3RoU2Nyb2xsIC8+XHJcblxyXG4gICAgICB7LyogQmFycmEgZGUgYW51bmNpb3M6IGZsb3RhIHNvYnJlIGVsIGhlcm8geSBzZSB2YSBjb24gZWwgc2Nyb2xsICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCB0b3AtMCB6LTQwXCI+PC9kaXY+XHJcbiAgICAgIHsvKiBIZWFkZXI6IGZpeGVkLCBhY29tcGHDsWEgc2llbXByZSBhbCBzY3JvbGwgKi99XHJcbiAgICAgIDxIZWFkZXIgY2FydENvdW50PXtjYXJ0Q291bnR9IC8+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBhcmlhLWhpZGRlblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSByZWxhdGl2ZSB6LTEwIC1tdC1weCBoLVsycHhdIGJnLVt2YXIoLS1jb2xvci1mb25kbyldXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8U3RvcmVzSGVybyAvPlxyXG4gICAgICAgIDxTdG9yZXNTbGlkZXNob3cgc3RvcmVzPXtBRkZJTElBVEVEX1NUT1JFU30gLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9vdGVyIiwiSGVhZGVyIiwiU21vb3RoU2Nyb2xsIiwiU3RvcmVzSGVybyIsIlN0b3Jlc1NsaWRlc2hvdyIsIkFGRklMSUFURURfU1RPUkVTIiwiU3RvcmVQYWdlIiwiY2FydENvdW50Iiwic2V0Q2FydENvdW50IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImFyaWEtaGlkZGVuIiwic3RvcmVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/modules/marketplace/pages/store-page.tsx\n"));

/***/ })

});