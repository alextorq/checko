webpackJsonp([8],{

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(596)
/* template */
var __vue_template__ = __webpack_require__(597)
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

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(584)
/* template */
var __vue_template__ = __webpack_require__(585)
/* template functional */
var __vue_template_functional__ = true
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
Component.options.__file = "resources/js/components/Frontend/Copyright/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85364150", Component.options)
  } else {
    hotAPI.rerender("data-v-85364150", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 584:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "copyright"
});

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

var render = function(_h, _vm) {
  var _c = _vm._c
  return _c("section", { staticClass: "copyright" }, [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "default-content" },
        [
          _c("router-link", { attrs: { to: "/pages/term-of-services" } }, [
            _vm._v("Term |")
          ]),
          _vm._v(" "),
          _c("router-link", { attrs: { to: "/pages/privacy" } }, [
            _vm._v(" Privacy | ")
          ]),
          _vm._v(" "),
          _c("span", [_vm._v(" © 2019 checko.me")])
        ],
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
    require("vue-hot-reload-api")      .rerender("data-v-85364150", module.exports)
  }
}

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Frontend_Copyright__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Frontend_Copyright___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Frontend_Copyright__);
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
  name: "index",
  data: function data() {
    return {
      info: {}
    };
  },
  components: {
    copyright: __WEBPACK_IMPORTED_MODULE_0__components_Frontend_Copyright___default.a
  },
  props: ['page'],
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      axios.post('/frontend/pages/' + vm.page).then(function (responce) {
        vm.info = Object.freeze(responce.data);
        document.title = responce.data.pagetitle;
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this = this;

    axios.post('/frontend/pages/' + to.params.page).then(function (responce) {
      _this.info = Object.freeze(responce.data);
      document.title = responce.data.pagetitle;
      setTimeout(function () {
        window.scrollTo({
          top: 0,
          left: 100,
          behavior: 'smooth'
        });
      }, 20);
    });
    next();
  }
});

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "text-default" },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "default-content" }, [
          _c("h1", [_vm._v(_vm._s(_vm.info.pagetitle))]),
          _vm._v(" "),
          _c("div", { domProps: { innerHTML: _vm._s(_vm.info.content) } })
        ])
      ]),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("copyright")
  }
]
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