self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\STORM\\Desktop\\React-js\\methamphetamine\\src\\components\\Acomplishments\\Acomplishments.js",
    _this = undefined;




var data = [{
  number: '6+',
  text: 'Finished Projects'
}, {
  number: '7',
  text: 'Programming Languages'
}, {
  number: 0,
  text: 'Work Experience'
}, {
  number: 'JS',
  text: 'Most Used Language'
}];

var Acomplishments = function Acomplishments() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      children: "Personal Achievements"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
      children: data.map(function (card, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
            children: "".concat(card.number)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
            children: card.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, _this);
};

_c = Acomplishments;
/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

var _c;

$RefreshReg$(_c, "Acomplishments");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiXSwibmFtZXMiOlsiZGF0YSIsIm51bWJlciIsInRleHQiLCJBY29tcGxpc2htZW50cyIsIm1hcCIsImNhcmQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQUVDLFFBQU0sRUFBRSxJQUFWO0FBQWdCQyxNQUFJLEVBQUU7QUFBdEIsQ0FEVyxFQUVYO0FBQUVELFFBQU0sRUFBRSxHQUFWO0FBQWVDLE1BQUksRUFBRTtBQUFyQixDQUZXLEVBR1g7QUFBRUQsUUFBTSxFQUFFLENBQVY7QUFBYUMsTUFBSSxFQUFFO0FBQW5CLENBSFcsRUFJWDtBQUFFRCxRQUFNLEVBQUUsSUFBVjtBQUFnQkMsTUFBSSxFQUFFO0FBQXRCLENBSlcsQ0FBYjs7QUFPQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsc0JBQ3JCLDhEQUFDLDZEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsZ0JBQ0dILElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNSLDhEQUFDLHNEQUFEO0FBQUEsa0NBQ0UsOERBQUMseURBQUQ7QUFBQSxnQ0FBWUQsSUFBSSxDQUFDSixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQywwREFBRDtBQUFBLHNCQUFVSSxJQUFJLENBQUNIO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQVVJLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFVRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHFCO0FBQUEsQ0FBdkI7O0tBQU1ILGM7QUFlTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMWI2YzA3MmVlNmQ1ZTU2OGZiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcbmltcG9ydCB7IEJveCwgQm94ZXMsIEJveE51bSwgQm94VGV4dCB9IGZyb20gJy4vQWNvbXBsaXNobWVudHNTdHlsZXMnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7IG51bWJlcjogJzYrJywgdGV4dDogJ0ZpbmlzaGVkIFByb2plY3RzJ30sXG4gIHsgbnVtYmVyOiAnNycsIHRleHQ6ICdQcm9ncmFtbWluZyBMYW5ndWFnZXMnLCB9LFxuICB7IG51bWJlcjogMCwgdGV4dDogJ1dvcmsgRXhwZXJpZW5jZScsIH0sXG4gIHsgbnVtYmVyOiAnSlMnLCB0ZXh0OiAnTW9zdCBVc2VkIExhbmd1YWdlJywgfVxuXTtcblxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoKSA9PiAoXG4gIDxTZWN0aW9uPlxuICAgIDxTZWN0aW9uVGl0bGU+UGVyc29uYWwgQWNoaWV2ZW1lbnRzPC9TZWN0aW9uVGl0bGU+XG4gICAgPEJveGVzPlxuICAgICAge2RhdGEubWFwKChjYXJkLCBpbmRleCkgPT4gKFxuICAgICAgICA8Qm94IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxCb3hOdW0+e2Ake2NhcmQubnVtYmVyfWB9PC9Cb3hOdW0+XG4gICAgICAgICAgPEJveFRleHQ+e2NhcmQudGV4dH08L0JveFRleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgPC9Cb3hlcz5cbiAgICA8U2VjdGlvbkRpdmlkZXIvPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50cztcbiJdLCJzb3VyY2VSb290IjoiIn0=