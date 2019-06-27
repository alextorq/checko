webpackJsonp([1],{

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(621)
/* template */
var __vue_template__ = __webpack_require__(622)
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
Component.options.__file = "resources/js/views/Frontend/FormRegistration/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96785164", Component.options)
  } else {
    hotAPI.reload("data-v-96785164", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(619)
/* template */
var __vue_template__ = __webpack_require__(620)
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
Component.options.__file = "resources/js/components/Frontend/FormInput/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00b2e637", Component.options)
  } else {
    hotAPI.reload("data-v-00b2e637", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 619:
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FormInput",
  data: function data() {
    return {};
  },
  computed: {
    pathToIcon: function pathToIcon() {
      return "<use  xlink:href=\"/images/sprites.svg#sprite-".concat(this.icon, "\"></use>");
    },
    focus: function focus() {
      return {
        focus: !!this.value,
        error: !!this.errors.length
      };
    }
  },
  methods: {
    validate: function validate() {
      if (this.required) {
        if (!this.value) {
          this.$emit('error', {
            action: true,
            filed: 'empty',
            name: "".concat(this.name),
            message: "The ".concat(this.label, " field is required.")
          });
        } else {
          this.$emit('error', {
            action: false,
            filed: 'empty',
            name: "".concat(this.name),
            message: ''
          });
        }
      }

      if (this.min) {
        this.minValidate();
      }

      if (this.email) {
        this.emailValidate(this.min);
      }
    },
    minValidate: function minValidate() {
      if (this.value.length < this.min) {
        if (!!this.value) {
          this.$emit('error', {
            action: true,
            filed: 'length',
            name: this.name,
            message: "min chars is ".concat(this.min)
          });
        }
      } else {
        this.$emit('error', {
          action: false,
          filed: 'length',
          name: this.name,
          message: ''
        });
      }
    },
    emailValidate: function emailValidate() {
      var rex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!rex.test(this.value) && this.value) {
        this.$emit('error', {
          action: true,
          filed: 'email',
          name: this.name,
          message: 'Е-mail fail. Please type in your correct e-mail.'
        });
      } else {
        this.$emit('error', {
          action: false,
          filed: 'email',
          name: this.name,
          message: ''
        });
      }
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    min: {
      type: Number,
      required: false
    },
    value: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: false
    },
    errors: {
      type: Array,
      "default": function _default() {
        return [];
      },
      required: false
    },
    email: {
      type: Boolean,
      required: false
    }
  }
});

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-item", class: _vm.focus }, [
    _vm.icon
      ? _c("span", { staticClass: "icon" }, [
          _c("svg", { domProps: { innerHTML: _vm._s(_vm.pathToIcon) } })
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      attrs: { type: "text", name: _vm.name, id: _vm.name },
      domProps: { value: _vm.value },
      on: {
        keyup: _vm.validate,
        input: function($event) {
          return _vm.$emit("input", $event.target.value)
        }
      }
    }),
    _vm._v(" "),
    _c("label", { attrs: { for: _vm.name } }, [
      _vm._v("\n        " + _vm._s(_vm.label) + "\n    ")
    ]),
    _vm._v(" "),
    _c("span", { staticClass: "correct-icon" }, [
      _c("span", { staticClass: "correct" }, [
        _c(
          "svg",
          {
            staticStyle: { "enable-background": "new 0 0 16.8 10.9" },
            attrs: {
              version: "1.1",
              id: "Слой_1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 16.8 10.9",
              "xml:space": "preserve"
            }
          },
          [
            _c("path", {
              staticClass: "st1",
              attrs: {
                d:
                  "M14.4,0.5L9.6,6.1C9.5,6.2,9.4,6.4,9.2,6.5l-0.9,1L6.1,4.8l0,0L2.4,0.5C1.9-0.1,1-0.2,0.5,0.3\n            c-0.6,0.5-0.6,1.3-0.1,1.9l7,8.2c0.4,0.4,0.9,0.6,1.4,0.4c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0\n            c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0-0.1c0,0,0,0,0,0\n            l7.1-8.2c0.5-0.6,0.4-1.4-0.1-1.9C15.8-0.2,14.9-0.1,14.4,0.5z"
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "incorrect" }, [
        _c(
          "svg",
          {
            staticStyle: { "enable-background": "new 0 0 26.5 26.5" },
            attrs: {
              version: "1.1",
              id: "Слой_1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 26.5 26.5",
              "xml:space": "preserve"
            }
          },
          [
            _c("path", {
              staticClass: "st1",
              attrs: {
                d:
                  "M15.4,13.2L26,2.6C26.6,2,26.6,1,26,0.4c-0.6-0.6-1.5-0.6-2.1,0L13.2,11.1L2.6,0.4C2-0.1,1-0.1,0.4,0.4\n                    C-0.1,1-0.1,2,0.4,2.6l10.7,10.7L0.4,23.9c-0.6,0.6-0.6,1.5,0,2.1s1.5,0.6,2.1,0l10.7-10.7L23.9,26c0.6,0.6,1.5,0.6,2.1,0\n                    c0.6-0.6,0.6-1.5,0-2.1L15.4,13.2z"
              }
            })
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "error-message" },
      _vm._l(_vm.errors, function(error) {
        return _c("li", [
          error.message
            ? _c("span", [_vm._v(_vm._s(error.message))])
            : _c("span", [_vm._v(" " + _vm._s(error))])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00b2e637", module.exports)
  }
}

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ComponentsF_FormInput__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ComponentsF_FormInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ComponentsF_FormInput__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ComponentsF_FormInput_password__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ComponentsF_FormInput_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ComponentsF_FormInput_password__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FormRegistration",
  data: function data() {
    return {
      form: {
        name: {
          value: '',
          errors: [],
          serverErrors: []
        },
        email: {
          value: '',
          errors: [],
          serverErrors: []
        },
        password: {
          value: '',
          errors: [],
          serverErrors: []
        },
        password_confirmation: {
          value: '',
          errors: [],
          serverErrors: []
        }
      }
    };
  },
  computed: {
    nameError: function nameError() {
      return this.form.name.errors.concat(this.form.name.serverErrors);
    },
    emailError: function emailError() {
      return this.form.email.errors.concat(this.form.email.serverErrors);
    },
    passwordError: function passwordError() {
      return this.form.password.errors.concat(this.form.password.serverErrors);
    },
    password_confirmationError: function password_confirmationError() {
      return this.form.password_confirmation.errors.concat(this.form.password_confirmation.serverErrors);
    }
  },
  methods: {
    errorUpdate: function errorUpdate(error) {
      this.clearError(error.name);
      var errors = this.form[error.name].errors;
      var fieldError = error.filed;
      var errorIndex = -1;
      errors.forEach(function (item, index) {
        if (item.filed === fieldError) {
          errorIndex = index;
        }
      });
      var statusSearch = !!(errorIndex + 1);

      if (error.action && !statusSearch) {
        errors.push(error);
      } else {
        if (statusSearch && !error.action) {
          errors.splice(errorIndex, 1);
        }
      }
    },
    validate: function validate() {
      for (var filed in this.form) {
        if (this.$refs[filed]) {
          this.$refs[filed].validate();
        }
      }

      for (var _filed in this.form) {
        _filed = this.form[_filed];
        var errors = _filed.errors;

        if (errors.length) {
          return false;
        }
      }

      return true;
    },
    clearError: function clearError(name) {
      if (!name) {
        for (var filed in this.form) {
          filed = this.form[filed];
          filed.serverErrors = [];
        }
      } else {
        var _filed2 = this.form[name];
        _filed2.serverErrors = [];
      }
    },
    send: function send() {
      var _this = this;

      if (this.validate()) {
        axios.post('/register', {
          name: this.form.name.value,
          email: this.form.email.value,
          password: this.form.password.value,
          password_confirmation: this.form.password_confirmation.value
        }).then(function (responce) {
          _this.$store.commit('updateUser', responce.data);

          _this.$router.push({
            name: 'CheckList'
          });
        })["catch"](function (error) {
          if (error.response.status === 422) {
            _this.showErrors(error.response.data.errors);
          }
        });
      }
    },
    showErrors: function showErrors(errors) {
      for (var error in errors) {
        var _this$form$error$serv;

        var errorMessages = errors[error];

        (_this$form$error$serv = this.form[error].serverErrors).push.apply(_this$form$error$serv, _toConsumableArray(errorMessages));
      }
    }
  },
  components: {
    inputForm: __WEBPACK_IMPORTED_MODULE_0_ComponentsF_FormInput___default.a,
    inputFormPassword: __WEBPACK_IMPORTED_MODULE_1_ComponentsF_FormInput_password___default.a
  }
});

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-registration-wrapper" }, [
    _c(
      "form",
      {
        attrs: { action: "/", method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.send($event)
          }
        }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("inputForm", {
          ref: "name",
          attrs: {
            name: "name",
            label: "Username",
            icon: "user",
            required: true,
            errors: _vm.nameError,
            min: 4
          },
          on: { error: _vm.errorUpdate },
          model: {
            value: _vm.form.name.value,
            callback: function($$v) {
              _vm.$set(_vm.form.name, "value", $$v)
            },
            expression: "form.name.value"
          }
        }),
        _vm._v(" "),
        _c("inputForm", {
          ref: "email",
          attrs: {
            name: "email",
            label: "Е-mail",
            icon: "mail",
            required: true,
            errors: _vm.emailError,
            email: true
          },
          on: { error: _vm.errorUpdate },
          model: {
            value: _vm.form.email.value,
            callback: function($$v) {
              _vm.$set(_vm.form.email, "value", $$v)
            },
            expression: "form.email.value"
          }
        }),
        _vm._v(" "),
        _c("inputFormPassword", {
          ref: "password",
          attrs: {
            name: "password",
            label: "Password",
            min: 8,
            icon: "password",
            required: true,
            errors: _vm.passwordError
          },
          on: { error: _vm.errorUpdate },
          model: {
            value: _vm.form.password.value,
            callback: function($$v) {
              _vm.$set(_vm.form.password, "value", $$v)
            },
            expression: "form.password.value"
          }
        }),
        _vm._v(" "),
        _c("inputFormPassword", {
          ref: "password_confirmation",
          attrs: {
            name: "password_confirmation",
            label: "Repeat password",
            min: 8,
            icon: "password",
            required: true,
            repeat: _vm.form.password.value,
            errors: _vm.password_confirmationError
          },
          on: { error: _vm.errorUpdate },
          model: {
            value: _vm.form.password_confirmation.value,
            callback: function($$v) {
              _vm.$set(_vm.form.password_confirmation, "value", $$v)
            },
            expression: "form.password_confirmation.value"
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex-row jcb aic" },
          [
            _c("button", { staticClass: "button" }, [_vm._v("SING UP")]),
            _vm._v(" "),
            _c("router-link", { attrs: { to: "/login" } }, [
              _vm._v("I have an account")
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [
      _vm._v("Sign up and start your "),
      _c("span", [_vm._v("7 day free trial")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-96785164", module.exports)
  }
}

/***/ })

});