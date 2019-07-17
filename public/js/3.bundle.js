webpackJsonp([3],{

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(628)
/* template */
var __vue_template__ = __webpack_require__(635)
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
Component.options.__file = "resources/js/components/Frontend/Settings/Account.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12a0507a", Component.options)
  } else {
    hotAPI.reload("data-v-12a0507a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(578)
/* template */
var __vue_template__ = __webpack_require__(579)
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
Component.options.__file = "resources/js/components/Frontend/FormInput/password.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63b834c6", Component.options)
  } else {
    hotAPI.reload("data-v-63b834c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 578:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index",
  data: function data() {
    return {
      type: 'password'
    };
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
            name: this.name,
            message: "The ".concat(this.label, " field is required.")
          });
        } else {
          this.$emit('error', {
            action: false,
            filed: 'empty',
            name: this.name,
            message: ''
          });
        }
      }

      if (this.repeat) {
        this.repeatValidate();
      }

      if (this.min) {
        this.minValidate(this.min);
      }
    },
    repeatValidate: function repeatValidate() {
      if (this.repeat !== this.value && this.value) {
        this.$emit('error', {
          action: true,
          filed: 'repeat',
          name: this.name,
          message: "the password not equal"
        });
      } else {
        this.$emit('error', {
          action: false,
          filed: 'repeat',
          name: this.name,
          message: ''
        });
      }
    },
    minValidate: function minValidate(min) {
      if (this.value.length < min && this.value) {
        this.$emit('error', {
          action: true,
          filed: 'length',
          name: this.name,
          message: "min chars is ".concat(min)
        });
      } else {
        this.$emit('error', {
          action: false,
          filed: 'length',
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
    min: {
      type: Number,
      required: false
    },
    value: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    repeat: {
      type: String,
      required: false
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
    autocomplete: {
      type: String,
      required: false
    }
  }
});

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-item password", class: _vm.focus }, [
    _vm.icon
      ? _c("span", { staticClass: "icon" }, [
          _c("svg", { domProps: { innerHTML: _vm._s(_vm.pathToIcon) } })
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      attrs: {
        type: _vm.type,
        name: _vm.name,
        id: _vm.name,
        autocomplete: _vm.autocomplete
      },
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
    _c(
      "span",
      {
        staticClass: "show-password",
        on: {
          mousedown: function($event) {
            _vm.type = "text"
          },
          mouseup: function($event) {
            _vm.type = "password"
          }
        }
      },
      [
        _c("svg", [
          _c("use", {
            attrs: { "xlink:href": "/images/sprites.svg#sprite-view" }
          })
        ])
      ]
    ),
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
    require("vue-hot-reload-api")      .rerender("data-v-63b834c6", module.exports)
  }
}

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormInput_password__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormInput_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FormInput_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NameInput__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NameInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__NameInput__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Avatar__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Avatar__);
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
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Account",
  data: function data() {
    return {
      form: {
        oldPassword: {
          value: '',
          errors: [],
          serverErrors: []
        },
        newPassword: {
          value: '',
          errors: [],
          serverErrors: []
        },
        newPassword_confirmation: {
          value: '',
          errors: [],
          serverErrors: []
        }
      }
    };
  },
  computed: {
    oldPasswordError: function oldPasswordError() {
      return this.form.oldPassword.errors.concat(this.form.oldPassword.serverErrors);
    },
    newPasswordError: function newPasswordError() {
      return this.form.newPassword.errors.concat(this.form.newPassword.serverErrors);
    },
    newPassword_confirmation: function newPassword_confirmation() {
      return this.form.newPassword_confirmation.errors.concat(this.form.newPassword_confirmation.serverErrors);
    },
    userName: function userName() {
      return this.$store.getters.userName;
    },
    userInitials: function userInitials() {
      return this.$store.getters.userInitials;
    },
    userLoginStatus: function userLoginStatus() {
      return this.$store.getters.userLoginStatus;
    },
    userEmail: function userEmail() {
      return this.$store.state.user.user.email;
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
        axios.post('/frontend/user/change_password', {
          oldPassword: this.form.oldPassword.value,
          newPassword: this.form.newPassword.value,
          newPassword_confirmation: this.form.newPassword_confirmation.value
        }).then(function () {
          _this.clearForm();

          _this.$notify({
            duration: 1000,
            type: 'success',
            text: 'Password is change'
          });
        })["catch"](function (error) {
          if (error.response.status === 422) {
            _this.showErrors(error.response.data.errors);
          } else {
            _this.$notify({
              duration: 1000,
              type: 'error',
              text: error.response.data.message
            });
          }
        });
      }
    },
    clearForm: function clearForm() {
      for (var filed in this.form) {
        if (this.form[filed]) {
          this.form[filed].value = '';
        }
      }
    },
    showErrors: function showErrors(errors) {
      for (var error in errors) {
        var _this$form$error$serv;

        var errorMessages = errors[error];

        (_this$form$error$serv = this.form[error].serverErrors).push.apply(_this$form$error$serv, _toConsumableArray(errorMessages));
      }
    },
    logout: function logout() {
      this.$store.dispatch('logout');
    }
  },
  components: {
    inputFormPassword: __WEBPACK_IMPORTED_MODULE_0__FormInput_password___default.a,
    nameInput: __WEBPACK_IMPORTED_MODULE_1__NameInput___default.a,
    Avatar: __WEBPACK_IMPORTED_MODULE_2__Avatar___default.a
  }
});

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(630)
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
Component.options.__file = "resources/js/components/Frontend/Settings/NameInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f2050dd6", Component.options)
  } else {
    hotAPI.reload("data-v-f2050dd6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 630:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NameInput",
  data: function data() {
    return {
      name: '',
      rules: {
        min: {
          required: true,
          value: 4
        }
      },
      errors: []
    };
  },
  computed: {
    focus: function focus() {
      return {
        focus: !!this.value,
        error: !!this.errors.length
      };
    }
  },
  methods: {
    focusInput: function focusInput() {
      this.$refs.name.focus();
    },
    validate: function validate() {
      if (!this.name) {
        if (!this.errors.includes('the name is required')) {
          this.errors.push('the name is required');
        }
      } else {
        if (this.errors.includes('the name is required')) {
          this.errors.splice(this.errors.indexOf('the name is required'), 1);
        }
      }

      if (this.rules.min.required) {
        this.minValidate();
      }
    },
    minValidate: function minValidate() {
      if (this.name.length < this.rules.min.value) {
        if (!!this.name) {
          if (!this.errors.includes("min chars is ".concat(this.rules.min.value))) {
            this.errors.push("min chars is ".concat(this.rules.min.value));
          }
        }
      } else {
        if (this.errors.includes("min chars is ".concat(this.rules.min.value))) {
          this.errors.splice(this.errors.indexOf("min chars is ".concat(this.rules.min.value)), 1);
        }
      }
    },
    changeName: function changeName() {
      var _this = this;

      if (this.errors.length < 1 && this.value !== this.name) {
        axios.post('/frontend/user/change_name', {
          name: this.name
        }).then(function () {
          _this.$notify({
            duration: 1000,
            type: 'success',
            text: 'Name is change'
          });

          _this.$store.commit('updateUserField', {
            field: 'name',
            value: _this.name
          });
        })["catch"](function (error) {
          _this.$notify({
            duration: 1000,
            type: 'error',
            text: error.response.data.message
          });
        });
      }
    }
  },
  created: function created() {
    this.name = this.value;
  },
  watch: {
    value: function value(val) {
      this.name = val;
    }
  },
  props: {
    value: {
      type: String,
      required: true
    }
  }
});

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "name-wrapper", class: _vm.focus }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model.trim",
          value: _vm.name,
          expression: "name",
          modifiers: { trim: true }
        }
      ],
      ref: "name",
      attrs: { type: "text", name: "name", size: _vm.name.length },
      domProps: { value: _vm.name },
      on: {
        keyup: _vm.validate,
        blur: [
          _vm.changeName,
          function($event) {
            return _vm.$forceUpdate()
          }
        ],
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.name = $event.target.value.trim()
        }
      }
    }),
    _vm._v(" "),
    _c("span", { staticClass: "icon", on: { click: _vm.focusInput } }, [
      _c("svg", [
        _c("use", {
          attrs: { "xlink:href": "/images/sprites.svg#sprite-edit" }
        })
      ])
    ]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "error-message" },
      _vm._l(_vm.errors, function(error) {
        return _c("li", [_c("span", [_vm._v(_vm._s(error))])])
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
    require("vue-hot-reload-api")      .rerender("data-v-f2050dd6", module.exports)
  }
}

/***/ }),

/***/ 632:
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
Component.options.__file = "resources/js/components/Frontend/Settings/Avatar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-239b039a", Component.options)
  } else {
    hotAPI.reload("data-v-239b039a", Component.options)
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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Avatar",
  data: function data() {
    return {
      selectedFile: null,
      errors: [],
      loading: false
    };
  },
  computed: {
    avatar: function avatar() {
      return this.$store.state.user.user.avatar;
    },
    avatarStatus: function avatarStatus() {
      return !!this.$store.state.user.user.avatar;
    },
    userInitials: function userInitials() {
      return this.$store.getters.userInitials;
    },
    loadingStyle: function loadingStyle() {
      return {
        loading: this.loading
      };
    }
  },
  methods: {
    onFileChanged: function onFileChanged(event) {
      this.selectedFile = event.target.files[0];
      this.onUpload();
      this.clearError();
    },
    onUpload: function onUpload() {
      var _this = this;

      var formData = new FormData();
      formData.append('avatar', this.selectedFile, this.selectedFile.name);
      this.loading = true;
      axios.post('/frontend/user/change_avatar', formData).then(function (response) {
        _this.updateUser(response.data);
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.showErrors(error.response.data.errors);
        } else {
          _this.$notify({
            duration: 1000,
            type: 'error',
            text: error.response.data.message
          });
        }
      })["finally"](function () {
        _this.loading = false;
      });
    },
    showErrors: function showErrors(errors) {
      var _this$errors;

      (_this$errors = this.errors).push.apply(_this$errors, _toConsumableArray(errors.avatar));
    },
    clearError: function clearError() {
      this.errors = [];
    },
    updateUser: function updateUser(avatar) {
      this.$store.commit('updateUserField', {
        field: 'avatar',
        value: avatar
      });
    }
  }
});

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "avatar-container", class: _vm.loadingStyle },
    [
      _c("span", { staticClass: "loading-icon" }, [
        _c("span", [
          _c("svg", [
            _c("use", {
              attrs: { "xlink:href": "/images/sprites.svg#sprite-circle" }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.avatarStatus === true
        ? _c(
            "div",
            {
              staticClass: "avatar-wrapper",
              style: { backgroundImage: "url(" + _vm.avatar + ")" }
            },
            [
              _c("input", {
                staticClass: "custom-file-input",
                attrs: {
                  type: "file",
                  name: "avatar",
                  accept: ".jpg, .jpeg, .png, .gif, .svg"
                },
                on: { change: _vm.onFileChanged }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "icon" }, [
                _c("svg", [
                  _c("use", {
                    attrs: { "xlink:href": "/images/sprites.svg#sprite-edit" }
                  })
                ])
              ])
            ]
          )
        : _c("div", { staticClass: "avatar-wrapper empty" }, [
            _vm._v("\n        " + _vm._s(_vm.userInitials) + "\n        "),
            _c("input", {
              staticClass: "custom-file-input",
              attrs: { type: "file", name: "avatar" },
              on: { change: _vm.onFileChanged }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "icon" }, [
              _c("svg", [
                _c("use", {
                  attrs: { "xlink:href": "/images/sprites.svg#sprite-edit" }
                })
              ])
            ])
          ]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "errors-list" },
        _vm._l(_vm.errors, function(error) {
          return _c("li", [_vm._v(_vm._s(error))])
        }),
        0
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
    require("vue-hot-reload-api")      .rerender("data-v-239b039a", module.exports)
  }
}

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "settings account" }, [
    _vm.userLoginStatus
      ? _c(
          "div",
          { staticClass: "account-info" },
          [
            _c("Avatar"),
            _vm._v(" "),
            _c("div", { staticClass: "info-wrapper" }, [
              _c(
                "div",
                { staticClass: "account-info__name" },
                [_c("nameInput", { attrs: { value: _vm.userName } })],
                1
              ),
              _vm._v(" "),
              _c("span", { staticClass: "account-info__email" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.userEmail) +
                    "\n            "
                )
              ])
            ])
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "form-title" }, [_vm._v("Change Password")]),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { method: "post", action: "/frontend/user/change_password" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.send($event)
          }
        }
      },
      [
        _c("inputFormPassword", {
          ref: "oldPassword",
          attrs: {
            name: "oldPassword",
            label: "Old password",
            min: 8,
            icon: "password",
            required: true,
            autocomplete: "current-password",
            errors: _vm.oldPasswordError
          },
          on: { error: _vm.errorUpdate },
          model: {
            value: _vm.form.oldPassword.value,
            callback: function($$v) {
              _vm.$set(_vm.form.oldPassword, "value", $$v)
            },
            expression: "form.oldPassword.value"
          }
        }),
        _vm._v(" "),
        _c("inputFormPassword", {
          ref: "newPassword",
          attrs: {
            name: "newPassword",
            label: "New password",
            min: 8,
            icon: "password",
            required: true,
            autocomplete: "new-password",
            errors: _vm.newPasswordError
          },
          on: { error: _vm.errorUpdate },
          model: {
            value: _vm.form.newPassword.value,
            callback: function($$v) {
              _vm.$set(_vm.form.newPassword, "value", $$v)
            },
            expression: "form.newPassword.value"
          }
        }),
        _vm._v(" "),
        _c("inputFormPassword", {
          ref: "newPassword_confirmation",
          attrs: {
            name: "newPassword_confirmation",
            label: "Repeat password",
            min: 8,
            icon: "password",
            required: true,
            repeat: _vm.form.newPassword.value,
            autocomplete: "new-password",
            errors: _vm.newPassword_confirmation
          },
          on: { error: _vm.errorUpdate },
          model: {
            value: _vm.form.newPassword_confirmation.value,
            callback: function($$v) {
              _vm.$set(_vm.form.newPassword_confirmation, "value", $$v)
            },
            expression: "form.newPassword_confirmation.value"
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "hidden", name: "username", autocomplete: "username" }
        }),
        _vm._v(" "),
        _c("button", { staticClass: "button", attrs: { type: "submit" } }, [
          _vm._v("Change")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("button", { staticClass: "logout", on: { click: _vm.logout } }, [
      _vm._v("Logout")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-12a0507a", module.exports)
  }
}

/***/ })

});