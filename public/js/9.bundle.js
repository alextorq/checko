webpackJsonp([9],{

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(573)
/* template */
var __vue_template__ = __webpack_require__(574)
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

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(563)
/* template */
var __vue_template__ = __webpack_require__(578)
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
Component.options.__file = "resources/js/views/Frontend/Offers/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e169ef70", Component.options)
  } else {
    hotAPI.reload("data-v-e169ef70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ComponentsF_OffersPost__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ComponentsF_OffersPost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ComponentsF_OffersPost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ComponentsF_OffersForm__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ComponentsF_OffersForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ComponentsF_OffersForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Frontend_Copyright__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Frontend_Copyright___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Frontend_Copyright__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Frontend_Pagination__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Frontend_Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Frontend_Pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Frontend_Preloader__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Frontend_Preloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Frontend_Preloader__);
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
      posts: {},
      allPost: {},
      loading: true
    };
  },
  computed: {
    userAuth: function userAuth() {
      return this.$store.getters.userLoginStatus;
    }
  },
  methods: {
    loadPage: function loadPage(page) {
      var _this = this;

      if (page in this.allPost) {
        this.posts = this.allPost[page];
        return;
      }

      this.loading = true;
      axios.get('frontend/offers/all', {
        params: {
          page: page
        }
      }).then(function (responce) {
        _this.posts = Object.freeze(responce.data);
        _this.allPost[page] = Object.freeze(responce.data);
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    },
    refresh: function refresh() {
      this.allPost = {};
      this.loadPage(this.posts.current_page || 1);
    }
  },
  components: {
    offer: __WEBPACK_IMPORTED_MODULE_0_ComponentsF_OffersPost___default.a,
    offerForm: __WEBPACK_IMPORTED_MODULE_1_ComponentsF_OffersForm___default.a,
    copyright: __WEBPACK_IMPORTED_MODULE_2__components_Frontend_Copyright___default.a,
    pagination: __WEBPACK_IMPORTED_MODULE_3__components_Frontend_Pagination___default.a,
    preloader: __WEBPACK_IMPORTED_MODULE_4__components_Frontend_Preloader___default.a
  },
  props: {
    urlPage: {
      required: false,
      type: Number,
      "default": 1
    }
  },
  created: function created() {
    this.loadPage(this.urlPage);
  }
});

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(565)
/* template */
var __vue_template__ = __webpack_require__(569)
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
Component.options.__file = "resources/js/components/Frontend/OffersPost/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29141288", Component.options)
  } else {
    hotAPI.reload("data-v-29141288", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ComponentsF_Avatar__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ComponentsF_Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ComponentsF_Avatar__);
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
  name: "offer_post",
  data: function data() {
    return {
      likes: [],
      userLiked: false
    };
  },
  computed: {
    dateFormat: function dateFormat() {
      var formatDate = this.$store.getters.getDateFormatDefault.value;
      return __WEBPACK_IMPORTED_MODULE_0_moment___default()(this.post.created_at).format(formatDate);
    },
    likeCount: function likeCount() {
      return this.likes.length || '';
    },
    userAlreadyLike: function userAlreadyLike() {
      this.userLiked = this.likes.includes(this.$store.getters.userID);
      return {
        liked: this.userLiked
      };
    }
  },
  methods: {
    like: function like() {
      var _this = this;

      if (!this.$store.getters.userLoginStatus) {
        this.$notify({
          duration: 3000,
          type: 'warning',
          text: 'Only auth user can like'
        });
        return;
      }

      axios.post("/frontend/offers/like/".concat(this.post.post_id)).then(function () {
        if (!_this.likes.includes(_this.$store.getters.userID)) {
          _this.likes.push(_this.$store.getters.userID);
        } else {
          var index = _this.likes.findIndex(function (id) {
            return id === _this.$store.getters.userID;
          });

          _this.likes.splice(index, 1);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    }
  },
  components: {
    Avatar: __WEBPACK_IMPORTED_MODULE_1_ComponentsF_Avatar___default.a
  },
  created: function created() {
    var stringArray = this.post.likes ? this.post.likes.users_id.split(',') : [];
    var string = stringArray.filter(function (el) {
      return !!el;
    });
    this.likes = string.map(function (el) {
      return +el;
    });
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(567)
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
Component.options.__file = "resources/js/components/Frontend/Avatar/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73989084", Component.options)
  } else {
    hotAPI.reload("data-v-73989084", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 567:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index",
  computed: {
    avatarStatus: function avatarStatus() {
      return !!this.user.avatar;
    },
    userInitials: function userInitials() {
      var userWord = this.user.name.split(' ');
      var userInitials = [];
      userInitials.push(userWord[0].split('')[0]);

      if (userWord.length > 1) {
        userInitials.push(userWord[1].split('')[0]);
      }

      return userInitials.join('');
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "user_avatar" }, [
    _vm.avatarStatus
      ? _c("span", {
          staticClass: "avatar-wrapper image",
          style: { backgroundImage: "url(" + _vm.user.avatar + ")" }
        })
      : _c("span", { staticClass: "avatar-wrapper" }, [
          _vm._v("\n        " + _vm._s(_vm.userInitials) + "\n    ")
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-73989084", module.exports)
  }
}

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "offer__item" }, [
    _c(
      "div",
      { staticClass: "meta" },
      [
        _c("Avatar", { attrs: { user: _vm.post.author } }),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "user_name" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.post.author.name) +
                "\n            "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "date" }, [
            _vm._v(
              "\n                " + _vm._s(_vm.dateFormat) + "\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "like_button",
            class: _vm.userAlreadyLike,
            on: { click: _vm.like }
          },
          [
            _c("span", { staticClass: "icon" }, [
              _c("svg", [
                _c("use", {
                  attrs: { "xlink:href": "/images/sprites.svg#sprite-like" }
                })
              ])
            ]),
            _vm._v("\n            " + _vm._s(_vm.likeCount))
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("p", [_vm._v(_vm._s(_vm.post.content))])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-29141288", module.exports)
  }
}

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(571)
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
Component.options.__file = "resources/js/components/Frontend/OffersForm/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-024ce440", Component.options)
  } else {
    hotAPI.reload("data-v-024ce440", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 571:
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index",
  data: function data() {
    return {
      list: [],
      content: ''
    };
  },
  methods: {
    send: function send() {
      var _this = this;

      axios.post('/frontend/offers/create', {
        content: this.content
      }).then(function (responce) {
        _this.content = '';

        _this.$emit('send');
      })["catch"](function () {
        console.log;
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "offer-form-wrapper" }, [
    _c("h2", [_vm._v("To offer")]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "Сюда нужно написать текст, вроде того, что если вы не нашли своей проблемы среди вопросов,\n        то вы можете  задать свой вопрос, и мы ответим на него в течениии стольки-то. на английскойм текст нужен\n    "
      )
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { action: "/frontend/offers/create", method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.send($event)
          }
        }
      },
      [
        _c("label", [
          _c("div", { staticClass: "icon-wrapper" }, [
            _c("span", { staticClass: "icon" }, [
              _c("svg", [
                _c("use", {
                  attrs: { "xlink:href": "/images/sprites.svg#sprite-comment" }
                })
              ])
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Offer")])
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.content,
                expression: "content"
              }
            ],
            attrs: { name: "content", cols: "30", rows: "10" },
            domProps: { value: _vm.content },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.content = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "button", attrs: { type: "submit" } }, [
          _vm._v("TO OFFER")
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-024ce440", module.exports)
  }
}

/***/ }),

/***/ 573:
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

/***/ 574:
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

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(576)
/* template */
var __vue_template__ = __webpack_require__(577)
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
Component.options.__file = "resources/js/components/Frontend/Pagination/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3788882", Component.options)
  } else {
    hotAPI.reload("data-v-e3788882", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 576:
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
function findGetParameter(parameterName) {
  var result = null,
      tmp = [];
  location.search.substr(1).split("&").forEach(function (item) {
    tmp = item.split("=");
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "pagination",
  data: function data() {
    return {
      page: '',
      max: 5,
      showMoreNext: false,
      showMorePrev: false
    };
  },
  computed: {
    renderPages: function renderPages() {
      var pagerCount = this.max;
      var halfPagerCount = (pagerCount - 1) / 2;
      var currentPage = Number(this.page);
      var pageCount = Number(this.allPage);
      var showPrevMore = false;
      var showNextMore = false;

      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true;
        }

        if (currentPage < pageCount - halfPagerCount) {
          showNextMore = true;
        }
      }

      var array = [];

      if (showPrevMore && !showNextMore) {
        var startPage = pageCount - (pagerCount - 2);

        for (var i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (var _i = 2; _i < pagerCount; _i++) {
          array.push(_i);
        }
      } else if (showPrevMore && showNextMore) {
        var offset = Math.floor(pagerCount / 2) - 1;

        for (var _i2 = currentPage - offset; _i2 <= currentPage + offset; _i2++) {
          array.push(_i2);
        }
      } else {
        for (var _i3 = 2; _i3 < pageCount; _i3++) {
          array.push(_i3);
        }
      }

      this.showMorePrev = showPrevMore;
      this.showMoreNext = showNextMore;
      return array;
    }
  },
  methods: {
    changePage: function changePage(page) {
      if (this.page !== page) {
        this.page = page;
        this.changeURL();
        this.$emit('change_page', this.page);
      }
    },
    nextPage: function nextPage() {
      if (this.page !== this.allPage) {
        this.page = this.page + 1;
        this.changeURL();
        this.$emit('change_page', this.page);
      }
    },
    prevPage: function prevPage() {
      if (this.page !== 1) {
        this.page = this.page - 1;
        this.changeURL();
        this.$emit('change_page', this.page);
      }
    },
    showMorePrevFun: function showMorePrevFun() {
      this.page = this.page - Math.floor(this.page / 2);
      this.changeURL();
      this.$emit('change_page', this.page);
    },
    showMoreNextFun: function showMoreNextFun() {
      this.page += Math.floor((this.allPage - this.page) / 2);
      this.changeURL();
      this.$emit('change_page', this.page);
    },
    changeURL: function changeURL() {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?urlPage=' + this.page;
      window.history.pushState({
        path: newurl
      }, '', newurl);
    },
    historyPushDetect: function historyPushDetect() {
      var _this = this;

      window.onpopstate = function (event) {
        if (event.state) {
          _this.page = +findGetParameter('urlPage');

          _this.$emit('change_page', _this.page);
        }
      };
    }
  },
  watch: {
    currentPage: function currentPage(newVal) {
      this.page = newVal;
    }
  },
  props: {
    allPage: {
      required: true,
      type: Number,
      "default": 1
    },
    currentPage: {
      required: true,
      type: Number,
      "default": 1
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.onpopstate = null;
  },
  created: function created() {
    this.historyPushDetect();
    this.page = this.currentPage;
  }
});

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.allPage > 1
    ? _c(
        "ul",
        { staticClass: "pagination" },
        [
          _c(
            "li",
            {
              staticClass: "prev-arrow pagination_arrow",
              on: { click: _vm.prevPage }
            },
            [_c("div", { staticClass: "arrow" })]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              class: { active: _vm.page === 1 },
              on: {
                click: function($event) {
                  return _vm.changePage(1)
                }
              }
            },
            [_vm._v("1\n    ")]
          ),
          _vm._v(" "),
          _vm.showMorePrev
            ? _c("li", { on: { click: _vm.showMorePrevFun } }, [
                _vm._v("\n        ...\n    ")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.renderPages, function(i) {
            return _c(
              "li",
              {
                class: { active: _vm.page === i },
                on: {
                  click: function($event) {
                    return _vm.changePage(i)
                  }
                }
              },
              [_vm._v(_vm._s(i) + "\n    ")]
            )
          }),
          _vm._v(" "),
          _vm.showMoreNext
            ? _c("li", { on: { click: _vm.showMoreNextFun } }, [
                _vm._v("\n        ...\n    ")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "li",
            {
              class: { active: _vm.page === _vm.allPage },
              on: {
                click: function($event) {
                  return _vm.changePage(_vm.allPage)
                }
              }
            },
            [_vm._v(_vm._s(_vm.allPage) + "\n    ")]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "next-arrow pagination_arrow",
              on: { click: _vm.nextPage }
            },
            [_c("div", { staticClass: "arrow" })]
          )
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e3788882", module.exports)
  }
}

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "default-content offer-page" },
      [
        _c("preloader", { attrs: { active: _vm.loading } }),
        _vm._v(" "),
        _c("h1", [_vm._v("Offers")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Сюда нужно написать текст, предложите свои пожелания замечание,\n            нам очень важно ваше мнение, чтобы сделать наш сервис лучше\n        "
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "offers__list" },
          [
            _c(
              "transition-group",
              { attrs: { name: "list" } },
              _vm._l(_vm.posts.data, function(post) {
                return _c("offer", { key: post.post_id, attrs: { post: post } })
              }),
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("pagination", {
          attrs: {
            "current-page": _vm.posts.current_page,
            "all-page": _vm.posts.last_page
          },
          on: { change_page: _vm.loadPage }
        }),
        _vm._v(" "),
        _vm.userAuth
          ? _c("offerForm", { on: { send: _vm.refresh } })
          : _vm._e(),
        _vm._v(" "),
        _c("copyright")
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
    require("vue-hot-reload-api")      .rerender("data-v-e169ef70", module.exports)
  }
}

/***/ })

});