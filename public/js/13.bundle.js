webpackJsonp([13],{

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(615)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(617)
/* template */
var __vue_template__ = __webpack_require__(618)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7eb71b46"
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
Component.options.__file = "resources/js/views/Frontend/Term/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7eb71b46", Component.options)
  } else {
    hotAPI.reload("data-v-7eb71b46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(616);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("55d7354e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7eb71b46\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7eb71b46\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 617:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "index"
});

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "heroimage__about" }, [
      _c("div", { staticClass: "container" }, [
        _c("h1", [_vm._v("\n            Terms of Service\n        ")]),
        _vm._v(" "),
        _c("div", [
          _c("p", [
            _vm._v(
              '\n            By using the Checko.me and Checko.me Premium web site ("Service") and Checko.me Premium alone ("Premium Service"), you are agreeing to be bound by the following terms and conditions ("Terms").\n            '
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v('\n            User account ("Account")\n            ')
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n            To use the Premium Service you need to sign up for an Account using your username and a valid email address.\n            One Account may be used by one person. One person may have more than one Account.\n            Multi-user Accounts are groups of single Accounts gathered under one Account, which acts as an administrator of the group.\n            "
            )
          ]),
          _vm._v("\n\n            Your activity\n            "),
          _c("p", [
            _vm._v(
              "\n            You are responsible for all the activity and content associated with your Account.\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n            Checko.me claims no intellectual property rights over the material you provide to the Service. Your profile and materials uploaded remain yours.\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n            You are responsible for keeping your password to the Premium Service safe at all times. Checko.me will not be held liable for any damage from your failure to comply with this security obligation.\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n            You are responsible for using the Service in a legal manner and you must not violate any laws in your jurisdiction (including but not limited to copyright laws).\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n            In the event that Checko.me, in its sole discretion, considers that you are making any illegal and/or unauthorized use of the Service, and/or your use of the Service is in breach of these Terms, Checko.me reserves the right to take any action that it deems necessary, including terminating without notice your Account and, in the case of illegal use, instigating legal proceedings.\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n            You have the right to terminate using the Premium Service and cancel your account. You can cancel your account at any time by clicking on the Account link in the global navigation bar at the top of the screen. The Account screen provides a simple, no questions asked two-click instant cancellation process. All of your Content may be immediately deleted from the Service upon cancellation.\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n            Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Checko.me customer, employee, member, or officer may result in immediate account termination.\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n            You understand that the technical processing and transmission of the Service, including your content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.\n            "
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n            If your bandwidth usage significantly exceeds the average bandwidth usage (as determined solely by Checko.me) of other Account holders, Checko.me reserves the right to immediately disable your account.\n            "
            )
          ]),
          _vm._v(
            "\n\n            Payments / Billing\n\n            Checko.me is using an authorized reseller (Fastspring) to sell Accounts.\n\n            You may need an active PayPal account or a valid credit card to buy from our authorized resellers.\n\n            The Premium Service is billed in advance on a monthly or yearly basis and is non-refundable once your account has been charged. There are no refunds or credits for partial use of the service. If the user has not entered his payment data after 14 days the account will be disabled. The contract agreement will be cancelled retroactively, the user will not be charged. Once the account is locked the data may be deleted in due course. The contract runs for an indefinite period.\n\n            You may only upgrade to a higher plan with the same or longer billing cycle. You may upgrade at any time and if you do, you will be charged the full price of the new payment plan in the next billing cycle if you are billed monthly. If you are billed annually you will be refunded a pro-month rata of your old payment plan and charged a pro-month rata of your new payment plan.\n\n            You may downgrade or cancel at any time. If you downgrade or cancel, you will be responsible for all the charges already incurred - Checko.me doesn't offer pro-rata refunds.\n\n            Downgrading your Service may cause the loss of content, features, or capacity of your Account. Checko.me does not accept any liability for such loss.If you are an EU (European Union) citizen, you will be charged the VAT tax. If you are a company based in EU and have an EU-registered valid VAT-number, you will not be charged the VAT tax. The prices don't include the VAT tax.\n\n            If you cancel the Service before the end of your payment cycle, your cancellation will take effect at the end of the payment cycle and you will not be charged again.\n\n\n            Service\n\n            Checko.me may suspend the Service for any reason whatsoever, including but not limited to, repairs, planned maintenance or upgrades, and will not be liable to you for any such suspension.\n\n            Checko.me reserves the right to make any changes to the Service or to discontinue any aspect or feature of the Service without notice, and will not be liable to you for any such change.\n\n            Checko.me, in its sole discretion, has the right to suspend or terminate your Account and refuse any and all current or future use of the Service, for any reason at any time.\n\n            Such termination of the Service will result in the deactivation or deletion of your Account or your access to your Account, and the forfeiture and relinquishment of all Content in your Account.\n\n            Checko.me reserves the right to refuse service to anyone for any reason at any time.\n\n            You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by Checko.me.\n\n            Disclaimer of Warranties, Limitation of Liabilities\n\n            Checho.me does not warrant for the website and the service it is providing. Checko.me disclaims any warranty of title, merchantability, non-infringement, or fitness for a particular purpose. the service and the website are distributed on the \"as is\" basis without warranties of any kind, either expressed or implied. You agree to use the Service at your own risk.\n\n            Checko.me is not responsible for any delay or failure in performance due to Force Majeure or other occurrences that are beyond Checho.me's reasonable control. Checko.me is not responsible for short, temporary and accidental suspension of the Service, as the result of the circumstances which Checko.me could not foresee or suspect.\n\n            In no event shall Cheko.me or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Checko.me's Internet site, even if Checko.me or a Checko.me authorized representative has been notified orally or in writing of the possibility of such damage.\n\n            The Customer recognizes that Checko.me does not own or control other networks, information and systems outside of its own network, nor is Checko.me responsible for performance or non-performance within such networks.\n\n            Final\n\n            The most current version of the Terms is available at any time\n        "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7eb71b46", module.exports)
  }
}

/***/ })

});