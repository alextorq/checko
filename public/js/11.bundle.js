webpackJsonp([11],{

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(562)
/* template */
var __vue_template__ = __webpack_require__(572)
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
Component.options.__file = "resources/js/views/Frontend/Settings/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56d5d358", Component.options)
  } else {
    hotAPI.reload("data-v-56d5d358", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Frontend_SettingsMenu__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Frontend_SettingsMenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Frontend_SettingsMenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Frontend_Settings_Breadcrumbs__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Frontend_Settings_Breadcrumbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Frontend_Settings_Breadcrumbs__);
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
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SettingsLayout",
  data: function data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    goToHome: function goToHome() {
      var hashCodeURI = Base64.encode(this.$store.getters.checkListId);
      this.$router.push({
        name: 'CheckList',
        params: {
          list_id: hashCodeURI
        }
      });
    }
  },
  components: {
    SettingsMenu: __WEBPACK_IMPORTED_MODULE_0__components_Frontend_SettingsMenu___default.a,
    Breadcrumbs: __WEBPACK_IMPORTED_MODULE_1__components_Frontend_Settings_Breadcrumbs___default.a
  }
});

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(564)
/* template */
var __vue_template__ = __webpack_require__(568)
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
Component.options.__file = "resources/js/components/Frontend/SettingsMenu/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39c88872", Component.options)
  } else {
    hotAPI.reload("data-v-39c88872", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuItem__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MenuItem__);
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
  name: "SettingsMenu",
  computed: {
    settings_routers: function settings_routers() {
      var parentRoute = this.$router.options.routes[0].children;
      var settingsRoute = parentRoute.find(function (item) {
        return item.path === '/settings';
      });
      return settingsRoute.children;
    },
    menuOpenStatus: function menuOpenStatus() {
      return {
        open: this.open
      };
    }
  },
  methods: {
    openMenu: function openMenu() {
      this.$emit('update:open', !this.open);
    }
  },
  components: {
    MenuItem: __WEBPACK_IMPORTED_MODULE_0__MenuItem___default.a
  },
  props: {
    open: {
      type: Boolean,
      required: true
    }
  }
});

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(566)
/* template */
var __vue_template__ = __webpack_require__(567)
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
Component.options.__file = "resources/js/components/Frontend/SettingsMenu/MenuItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49bf0f66", Component.options)
  } else {
    hotAPI.reload("data-v-49bf0f66", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "item",
  computed: {
    active: function active() {
      var currentPath = this.$route.name;
      var status = currentPath === this.item.name;
      return {
        active: status
      };
    }
  },
  methods: {
    selectMenu: function selectMenu() {
      this.$emit('selectMenu');
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "settings-menu__item",
      class: _vm.active,
      on: { click: _vm.selectMenu }
    },
    [
      _c("router-link", { attrs: { to: { name: _vm.item.name } } }, [
        _vm._v(_vm._s(_vm.item.meta.title))
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-49bf0f66", module.exports)
  }
}

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "settings-menu__wrapper", class: _vm.menuOpenStatus },
    [
      _c(
        "ul",
        { staticClass: "settings-menu__list" },
        _vm._l(_vm.settings_routers, function(route) {
          return _c("MenuItem", {
            key: route.name,
            attrs: { item: route },
            on: { selectMenu: _vm.openMenu }
          })
        }),
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-39c88872", module.exports)
  }
}

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "settings-layout" },
    [
      _c("SettingsMenu", {
        attrs: { open: _vm.menuOpen },
        on: {
          "update:open": function($event) {
            _vm.menuOpen = $event
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "settings-content__wrapper" },
        [
          _c("Breadcrump", {
            scopedSlots: _vm._u([
              {
                key: "left",
                fn: function() {
                  return [
                    _c(
                      "button",
                      {
                        staticClass: "menu-navigation-back",
                        on: {
                          click: function($event) {
                            _vm.menuOpen = !_vm.menuOpen
                          }
                        }
                      },
                      [_c("span", { staticClass: "arrow" })]
                    )
                  ]
                },
                proxy: true
              },
              {
                key: "right",
                fn: function() {
                  return [
                    _c(
                      "button",
                      {
                        staticClass: "settings-layout-close",
                        on: { click: _vm.goToHome }
                      },
                      [_c("span", { staticClass: "close-delete_2" })]
                    )
                  ]
                },
                proxy: true
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "transition",
            { attrs: { name: "slide-left" } },
            [_c("router-view")],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-56d5d358", module.exports)
  }
}

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(658)
/* template */
var __vue_template__ = __webpack_require__(659)
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
Component.options.__file = "resources/js/components/Frontend/Settings/Breadcrumbs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37bc25e6", Component.options)
  } else {
    hotAPI.reload("data-v-37bc25e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 658:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "breadcrumbs",
  computed: {
    path: function path() {
      return this.$route.meta.title;
    }
  }
});

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "breadcrumb-wrapper" },
    [
      _vm._t("left"),
      _vm._v(" "),
      _c("span", { staticClass: "route-path" }, [_vm._v(_vm._s(_vm.path))]),
      _vm._v(" "),
      _vm._t("right")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-37bc25e6", module.exports)
  }
}

/***/ })

});