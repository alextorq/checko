webpackJsonp([5],{

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(633)
/* template */
var __vue_template__ = __webpack_require__(634)
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
Component.options.__file = "resources/js/views/Frontend/PageDefault/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bc212b7", Component.options)
  } else {
    hotAPI.reload("data-v-6bc212b7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 633:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index",
  data: function data() {
    return {
      info: {}
    };
  },
  props: ['page'],
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      axios.post('/frontend/pages/' + vm.page).then(function (responce) {
        vm.info = responce.data;
      });
    });
  }
});

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "main" }, [
    _c("div", { staticClass: "container" }, [
      _c("h1", [_vm._v(_vm._s(_vm.info.pagetitle))]),
      _vm._v(" "),
      _c("div", { domProps: { innerHTML: _vm._s(_vm.info.content) } })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6bc212b7", module.exports)
  }
}

/***/ })

});