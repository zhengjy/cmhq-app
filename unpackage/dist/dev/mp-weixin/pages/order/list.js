(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/list"],{

/***/ 171:
/*!*************************************************************************************!*\
  !*** D:/develop/git_workspace/web/cmhq-app/main.js?{"page":"pages%2Forder%2Flist"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _list = _interopRequireDefault(__webpack_require__(/*! ./pages/order/list.vue */ 172));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 172:
/*!******************************************************************!*\
  !*** D:/develop/git_workspace/web/cmhq-app/pages/order/list.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_6546c710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=6546c710& */ 173);
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ 175);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=css& */ 177);
/* harmony import */ var _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_6546c710___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_6546c710___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _list_vue_vue_type_template_id_6546c710___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/order/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 173:
/*!*************************************************************************************************!*\
  !*** D:/develop/git_workspace/web/cmhq-app/pages/order/list.vue?vue&type=template&id=6546c710& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_6546c710___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=template&id=6546c710& */ 174);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_6546c710___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_6546c710___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_6546c710___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_6546c710___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 174:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/develop/git_workspace/web/cmhq-app/pages/order/list.vue?vue&type=template&id=6546c710& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uTabs: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-tabs/u-tabs */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-tabs/u-tabs.vue */ 323))
    },
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 331))
    },
    uLoadmore: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-loadmore/u-loadmore */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-loadmore/u-loadmore")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-loadmore/u-loadmore.vue */ 341))
    },
    uEmpty: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-empty/u-empty */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-empty/u-empty")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-empty/u-empty.vue */ 349))
    },
    uPopup: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-popup/u-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-popup/u-popup.vue */ 294))
    },
    login: function () {
      return __webpack_require__.e(/*! import() | components/login/login */ "components/login/login").then(__webpack_require__.bind(null, /*! @/components/login/login.vue */ 302))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.dataList && _vm.dataList.length > 0
  var l0 = g0
    ? _vm.__map(_vm.dataList, function (item, index) {
        var $orig = _vm.__get_orig(item)
        var g1 = _vm.$uti.dateFormat(item.createTime, "yyyy-MM-dd hh:mm:ss")
        var a0 = {
          height: "60rpx",
          width: "180rpx",
          margin: "0",
        }
        var a1 =
          item.state == 1
            ? {
                height: "60rpx",
                width: "180rpx",
                margin: "0",
                "margin-left": "20rpx",
              }
            : null
        var a2 =
          item.orPayMoney != item.orReceivableMoney
            ? {
                height: "60rpx",
                width: "220rpx",
                margin: "0",
                "margin-left": "20rpx",
                color: "#f9ae3d",
              }
            : null
        return {
          $orig: $orig,
          g1: g1,
          a0: a0,
          a1: a1,
          a2: a2,
        }
      })
    : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 175:
/*!*******************************************************************************************!*\
  !*** D:/develop/git_workspace/web/cmhq-app/pages/order/list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=script&lang=js& */ 176);
/* harmony import */ var _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 176:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/develop/git_workspace/web/cmhq-app/pages/order/list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var login = function login() {
  Promise.all(/*! require.ensure | pages/login/login */[__webpack_require__.e("common/vendor"), __webpack_require__.e("pages/login/login")]).then((function () {
    return resolve(__webpack_require__(/*! ../../pages/login/login.vue */ 315));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    login: login
  },
  data: function data() {
    return {
      isLogin: false,
      tabList: [{
        name: '全部'
      }, {
        name: '已取件',
        orderState: '1,2'
      }, {
        name: '运输中',
        wuliuState: '1,2'
      }, {
        name: '已完成',
        wuliuState: '3'
      }, {
        name: '已取消',
        isCancel: '1'
      }],
      current: 0,
      isload: true,
      page: 1,
      rows: 10,
      dataList: [],
      status: 'loading'
    };
  },
  onLoad: function onLoad() {
    var that = this;
    that.isLogin = that.$us.checkLogin();
    if (that.isLogin) {
      that.getList();
    }
    console.log('是否登陆', that.isLogin);
  },
  onShow: function onShow() {
    var that = this;
    that.isLogin = that.$us.checkLogin();
  },
  methods: {
    difference: function difference(item) {
      var that = this;
      that.$http.post('Order/PayOrderDifference', {
        userGuid: that.$us.getId(),
        orId: item.id
      }, function (res) {
        if (res.StatusCode == 1) {
          that.weChatPay(res.Data);
        } else {
          that.$uti.alert(res.Message);
        }
      }, '加载中...');
    },
    weChatPay: function weChatPay(data) {
      var that = this;
      uni.requestPayment({
        provider: 'wxpay',
        nonceStr: data.nonceStr,
        package: data.package,
        paySign: data.paySign,
        signType: data.signType,
        timeStamp: data.timeStamp,
        success: function success(res) {
          console.log('success:' + JSON.stringify(res));
          uni.showToast({
            title: '支付成功！',
            duration: 2000
          });
          setTimeout(function () {
            that.reload();
          }, 1000);
        },
        fail: function fail(err) {
          console.log('fail:' + JSON.stringify(err));
          uni.showToast({
            title: '已取消支付！',
            icon: 'none',
            duration: 2000
          });
        }
      });
    },
    traces: function traces(item) {
      var that = this;
      that.$http.get('courierOrder/queryCourierTrack', {
        id: item.id
      }, function (res) {
        if (res.code == 'success') {
          uni.setStorageSync('orTraces', res.data);
          that.$uti.toPage('/pages/order/logistics', {});
          console.log('物流信息', res.data);
        } else {
          that.$uti.alert(res.Message);
          that.isload = false;
          that.status = 'nomore';
        }
      });
    },
    cancelOrder: function cancelOrder(item) {
      var that = this;
      that.$uti.confirm('您确定取消订单吗？', function (res) {
        that.$http.post('Order/CancelOrder', {
          userGuid: that.$us.getId(),
          orId: item.id
        }, function (res) {
          that.$uti.alert(res.Message);
          if (res.StatusCode == 1) {
            that.reload();
          }
        }, '取消中...');
      });
    },
    click: function click(e) {
      console.log(e);
      this.current = e.index;
      this.reload();
    },
    loginClose: function loginClose() {
      var that = this;
      that.isLogin = that.$us.checkLogin();
      if (that.isLogin) {
        that.getList();
      }
    },
    reload: function reload() {
      this.dataList = [];
      this.page = 1;
      this.isload = true;
      this.getList();
    },
    getList: function getList() {
      var that = this;
      if (!that.isload) {
        that.$uti.alert('没有更多数据了');
        return;
      }
      that.status = 'loading';
      that.$http.get('courierOrder/list', {
        orderState: that.tabList[that.current].orderState,
        wuliuState: that.tabList[that.current].wuliuState,
        isCancel: that.tabList[that.current].isCancel,
        pageNo: that.page,
        pageSize: that.rows
      }, function (res) {
        if (res.code == 'success') {
          if (that.page * 10 < res.data.total) {
            that.status = 'loadmore';
            that.page++;
          } else {
            that.isload = false;
            that.status = 'nomore';
          }
          console.info("courierOrder ", res.data.items);
          res.data.items.forEach(function (item) {
            item.statusText = '';
            item.statusText = that.getStatus(item.orderState, item.wuliuState);

            // var name = that.$cfg.logList.find(_ => _.key == 'SF');
            // if (name && name.name)
            // 	item.orShipperName = name.name;

            that.dataList.push(item);
          });
          console.log('订单列表', that.dataList);
        } else {
          that.$uti.alert(res.Message);
          that.isload = false;
          that.status = 'nomore';
        }
      });
    },
    getStatus: function getStatus(orderState, wuliuState) {
      var status = '';
      switch (wuliuState) {
        case 1:
          status = '运输中';
          break;
        case 2:
          status = '派件中';
          break;
        case 3:
          status = '已签收';
          break;
        case 4:
          status = '异常';
          break;
      }
      if (status != '') {
        return status;
      }
      switch (orderState) {
        case 0:
          status = '待取件';
          break;
        case 1:
          status = '已调派';
          break;
        case 2:
          status = '已取件';
          break;
        case 3:
          status = '已取消';
          break;
      }
      return status;
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.reload();
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  onReachBottom: function onReachBottom() {
    this.getList();
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 177:
/*!***************************************************************************************************!*\
  !*** D:/develop/git_workspace/web/cmhq-app/pages/order/list.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../dev_tool/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=style&index=0&lang=css& */ 178);
/* harmony import */ var _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_dev_tool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 178:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/develop/git_workspace/web/cmhq-app/pages/order/list.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[171,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/list.js.map