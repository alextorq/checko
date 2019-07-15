webpackJsonp([8],{

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(627)
/* template */
var __vue_template__ = __webpack_require__(631)
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
Component.options.__file = "resources/js/components/Frontend/Settings/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63dc0b78", Component.options)
  } else {
    hotAPI.reload("data-v-63dc0b78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SwitchButton__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SwitchButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__SwitchButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Select__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Select__);
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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "List",
  computed: {
    settingsDateFormat: function settingsDateFormat() {
      return this.$store.getters.getDateFormat;
    },
    settingsDateFormatDefault: function settingsDateFormatDefault() {
      return this.$store.getters.getDateFormatDefault;
    },
    getProgressDisplay: function getProgressDisplay() {
      return this.$store.getters.getProgressDisplay;
    },
    settingsProgressDisplayDefault: function settingsProgressDisplayDefault() {
      return this.$store.getters.getProgressDisplayDefault;
    },
    getNewListForComplete: function getNewListForComplete() {
      return this.$store.getters.getNewListForComplete;
    },
    getOrderCreateSettingDefault: function getOrderCreateSettingDefault() {
      return this.$store.getters.getOrderCreateSetting;
    }
  },
  methods: {
    updateSettings: function updateSettings(payload) {
      this.$store.dispatch('updateSettings', payload);
    }
  },
  components: {
    SwitchButton: __WEBPACK_IMPORTED_MODULE_0__SwitchButton___default.a,
    AppSelect: __WEBPACK_IMPORTED_MODULE_1__Select___default.a
  }
});

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(629)
/* template */
var __vue_template__ = __webpack_require__(630)
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
Component.options.__file = "resources/js/components/Frontend/SwitchButton/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77e833aa", Component.options)
  } else {
    hotAPI.reload("data-v-77e833aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 629:
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
  name: "checkbox",
  data: function data() {
    return {
      status: false
    };
  },
  computed: {
    selected: function selected() {
      return {
        selected: this.status
      };
    }
  },
  methods: {
    update: function update() {
      this.$emit('update', {
        value: this.status,
        nameSetting: this.name
      });
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    default_value: {
      type: Boolean,
      "default": false,
      required: false
    }
  },
  created: function created() {
    this.status = this.default_value;
  }
});

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "switch-button", class: _vm.selected }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.status,
          expression: "status"
        }
      ],
      staticClass: "input-button",
      attrs: { type: "checkbox" },
      domProps: {
        checked: Array.isArray(_vm.status)
          ? _vm._i(_vm.status, null) > -1
          : _vm.status
      },
      on: {
        change: [
          function($event) {
            var $$a = _vm.status,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && (_vm.status = $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  (_vm.status = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
              }
            } else {
              _vm.status = $$c
            }
          },
          _vm.update
        ]
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-77e833aa", module.exports)
  }
}

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ul", { staticClass: "settings-menu settings general-settings" }, [
    _c(
      "li",
      { staticClass: "settings-menu__item" },
      [
        _vm._v("\n        Date format\n        "),
        _c("AppSelect", {
          attrs: {
            list: _vm.settingsDateFormat,
            default_value: _vm.settingsDateFormatDefault,
            name: "dateFormat"
          },
          on: { change: _vm.updateSettings }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "li",
      { staticClass: "settings-menu__item" },
      [
        _vm._v("\n        Progress display\n        "),
        _c("AppSelect", {
          attrs: {
            list: _vm.getProgressDisplay,
            name: "progressDisplay",
            default_value: _vm.settingsProgressDisplayDefault
          },
          on: { change: _vm.updateSettings }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "li",
      { staticClass: "settings-menu__item" },
      [
        _vm._v("\n        Add new items to the end of the list\n        "),
        _c("SwitchButton", {
          attrs: {
            default_value: _vm.getOrderCreateSettingDefault,
            name: "addToEndList"
          },
          on: { update: _vm.updateSettings }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-63dc0b78", module.exports)
  }
}

/***/ })

});