"use strict";
(self["webpackChunkcargodrom_frontend"] = self["webpackChunkcargodrom_frontend"] || []).push([["src_app_pages_modules_tariff_tariff_module_ts"],{

/***/ 82826:
/*!*************************************************************!*\
  !*** ./src/app/pages/components/tariff/tariff.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TariffComponent: () => (/* binding */ TariffComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class TariffComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function TariffComponent_Factory(t) {
      return new (t || TariffComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TariffComponent,
      selectors: [["app-tariff"]],
      decls: 2,
      vars: 0,
      template: function TariffComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tariff works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 66106:
/*!*******************************************************!*\
  !*** ./src/app/pages/modules/tariff/tariff.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TariffModule: () => (/* binding */ TariffModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _components_tariff_tariff_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tariff/tariff.component */ 82826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





const routes = [{
  path: '',
  component: _components_tariff_tariff_component__WEBPACK_IMPORTED_MODULE_1__.TariffComponent,
  title: 'Тарифы'
}];
class TariffModule {
  static {
    this.ɵfac = function TariffModule_Factory(t) {
      return new (t || TariffModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: TariffModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TariffModule, {
    declarations: [_components_tariff_tariff_component__WEBPACK_IMPORTED_MODULE_1__.TariffComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modules_tariff_tariff_module_ts.js.map