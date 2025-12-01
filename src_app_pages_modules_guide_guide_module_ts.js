"use strict";
(self["webpackChunkcargodrom_frontend"] = self["webpackChunkcargodrom_frontend"] || []).push([["src_app_pages_modules_guide_guide_module_ts"],{

/***/ 15640:
/*!***********************************************************!*\
  !*** ./src/app/pages/components/guide/guide.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuideComponent: () => (/* binding */ GuideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class GuideComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function GuideComponent_Factory(t) {
      return new (t || GuideComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GuideComponent,
      selectors: [["app-guide"]],
      decls: 2,
      vars: 0,
      template: function GuideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "guide works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 85064:
/*!*****************************************************!*\
  !*** ./src/app/pages/modules/guide/guide.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuideModule: () => (/* binding */ GuideModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _components_guide_guide_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/guide/guide.component */ 15640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





const routes = [{
  path: '',
  component: _components_guide_guide_component__WEBPACK_IMPORTED_MODULE_1__.GuideComponent,
  title: 'Справочник'
}];
class GuideModule {
  static {
    this.ɵfac = function GuideModule_Factory(t) {
      return new (t || GuideModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: GuideModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GuideModule, {
    declarations: [_components_guide_guide_component__WEBPACK_IMPORTED_MODULE_1__.GuideComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modules_guide_guide_module_ts.js.map