webpackJsonp([7],{

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(596)
/* template */
var __vue_template__ = __webpack_require__(645)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/Frontend/404/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fbd69dd", Component.options)
  } else {
    hotAPI.reload("data-v-3fbd69dd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NotFound"
});

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "not-found-wrapper" }, [
    _c("div", { staticClass: "not-found" }, [
      _c("img", { attrs: { src: "/images/404/404.svg", alt: "not found" } }),
      _vm._v(" "),
      _c("h1", [_vm._v("Page not found")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Maecenas dignissim laoreet lectus id pulvinar.\n            Nunc facilisis suscipit arcu in efficitur.\n            Sed vitae eros quis lorem auctor pellentesque.\n            Nunc sollicitudin pellentesque sem eget viverra.\n        "
        )
      ]),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "button" },
        [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Go to main")])],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3fbd69dd", module.exports)
  }
}

/***/ })

});