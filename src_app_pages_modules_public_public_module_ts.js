"use strict";
(self["webpackChunkcargodrom_frontend"] = self["webpackChunkcargodrom_frontend"] || []).push([["src_app_pages_modules_public_public_module_ts"],{

/***/ 51132:
/*!***********************************************************************!*\
  !*** ./src/app/pages/components/rate-editor/rate-editor.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateEditorComponent: () => (/* binding */ RateEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _services_calculations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/calculations.service */ 41911);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/focus-first-invalid.directive */ 87683);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 31034);




















const _c0 = ["deleteRateDialogRef"];
const _c1 = function (a0) {
  return {
    "active-rate": a0
  };
};
function RateEditorComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RateEditorComponent_div_16_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const i_r17 = restoredCtx.index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.onChangeRate(i_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rate_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, i_r17 === ctx_r0.currentRateNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" Rate #", i_r17 + 1, " (", rate_r16 == null ? null : rate_r16.carrier_name, ") ");
  }
}
function RateEditorComponent_mat_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const route_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", route_r20.iata);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](route_r20.iata);
  }
}
function RateEditorComponent_mat_option_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSelectionChange", function RateEditorComponent_mat_option_55_Template_mat_option_onSelectionChange_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const route_r21 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.onRouteChange(route_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const route_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", route_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](route_r21.name);
  }
}
function RateEditorComponent_mat_option_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", day_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", day_r24.day, " ");
  }
}
function RateEditorComponent_mat_option_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currencyItem_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", currencyItem_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", currencyItem_r25.code, " ");
  }
}
function RateEditorComponent_div_101_div_4_div_1_div_7_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81)(1, "div", 18)(2, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function RateEditorComponent_div_101_div_4_div_1_div_7_div_12_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.calculateCharge(chargeValue_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r35.getChargeUnit(chargeValue_r28.value.field));
  }
}
function RateEditorComponent_div_101_div_4_div_1_div_7_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r36.getChargeUnit(chargeValue_r28.value.field));
  }
}
function RateEditorComponent_div_101_div_4_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 77)(1, "div", 78)(2, "div", 18)(3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function RateEditorComponent_div_101_div_4_div_1_div_7_Template_input_input_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r42.calculateCharge(chargeValue_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 81)(7, "div", 18)(8, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function RateEditorComponent_div_101_div_4_div_1_div_7_Template_input_input_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r45.calculateCharge(chargeValue_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, RateEditorComponent_div_101_div_4_div_1_div_7_div_12_Template, 5, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, RateEditorComponent_div_101_div_4_div_1_div_7_div_13_Template, 5, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u2550");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 81)(17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Min ", ctx_r31.rateChar, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r31.rateChar, "/", ctx_r31.getChargeUnit(chargeValue_r28.value.field), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r31.getChargeUnit(chargeValue_r28.value.field) !== "kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r31.getChargeUnit(chargeValue_r28.value.field) === "kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r31.rateChar);
  }
}
function RateEditorComponent_div_101_div_4_div_1_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81)(1, "div", 18)(2, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function RateEditorComponent_div_101_div_4_div_1_div_8_div_1_Template_input_input_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54);
      const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r52.calculateCharge(chargeValue_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Fix ", ctx_r48.rateChar, ":");
  }
}
function RateEditorComponent_div_101_div_4_div_1_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RateEditorComponent_div_101_div_4_div_1_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81)(1, "div", 18)(2, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function RateEditorComponent_div_101_div_4_div_1_div_8_div_9_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r57);
      const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r55.calculateCharge(chargeValue_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r50.getChargeUnit(chargeValue_r28.value.field));
  }
}
function RateEditorComponent_div_101_div_4_div_1_div_8_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r51.getChargeUnit(chargeValue_r28.value.field));
  }
}
function RateEditorComponent_div_101_div_4_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RateEditorComponent_div_101_div_4_div_1_div_8_div_1_Template, 5, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RateEditorComponent_div_101_div_4_div_1_div_8_span_2_Template, 2, 0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 81)(4, "div", 18)(5, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function RateEditorComponent_div_101_div_4_div_1_div_8_Template_input_input_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62);
      const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r60.calculateCharge(chargeValue_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RateEditorComponent_div_101_div_4_div_1_div_8_div_9_Template, 5, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RateEditorComponent_div_101_div_4_div_1_div_8_div_10_Template, 5, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u2550");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 81)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r32.hasFix(chargeValue_r28.value.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r32.hasFix(chargeValue_r28.value.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r32.rateChar, "/", ctx_r32.getChargeUnit(chargeValue_r28.value.field), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r32.getChargeUnit(chargeValue_r28.value.field) !== "kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r32.getChargeUnit(chargeValue_r28.value.field) === "kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r32.rateChar);
  }
}
function RateEditorComponent_div_101_div_4_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 81)(5, "div", 18)(6, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function RateEditorComponent_div_101_div_4_div_1_div_9_Template_input_input_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r66);
      const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r64.calculateCostDirectly(chargeValue_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r33.rateChar);
  }
}
function RateEditorComponent_div_101_div_4_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 77)(1, "div", 81)(2, "div", 18)(3, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function RateEditorComponent_div_101_div_4_div_1_div_10_Template_input_input_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
      const chargeValue_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r67.calculateCostDirectly(chargeValue_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r34.rateChar);
  }
}
function RateEditorComponent_div_101_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71)(1, "div", 72)(2, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 74)(4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, RateEditorComponent_div_101_div_4_div_1_div_7_Template, 21, 6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, RateEditorComponent_div_101_div_4_div_1_div_8_Template, 18, 7, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RateEditorComponent_div_101_div_4_div_1_div_9_Template, 9, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RateEditorComponent_div_101_div_4_div_1_div_10_Template, 6, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r29 = ctx_r70.index;
    const chargeValue_r28 = ctx_r70.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", chargeValue_r28.value.select);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r30.getChargeTitle(chargeValue_r28.value.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.hasMin(chargeValue_r28.value.field) && !ctx_r30.hasComment(chargeValue_r28.value.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r30.hasMin(chargeValue_r28.value.field) && !ctx_r30.hasComment(chargeValue_r28.value.field) && ctx_r30.getChargeUnit(chargeValue_r28.value.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r30.hasMin(chargeValue_r28.value.field) && ctx_r30.hasComment(chargeValue_r28.value.field) && !ctx_r30.getChargeUnit(chargeValue_r28.value.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r30.hasMin(chargeValue_r28.value.field) && !ctx_r30.hasComment(chargeValue_r28.value.field) && !ctx_r30.getChargeUnit(chargeValue_r28.value.field));
  }
}
function RateEditorComponent_div_101_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RateEditorComponent_div_101_div_4_div_1_Template, 11, 7, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chargeValue_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", chargeValue_r28.value.select);
  }
}
function RateEditorComponent_div_101_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71)(1, "div", 97)(2, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 98)(4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 81)(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r72 = ctx_r74.index;
    const chargeValue_r71 = ctx_r74.$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r73.getChargeTitle(chargeValue_r71.value.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r73.rateChar);
  }
}
function RateEditorComponent_div_101_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RateEditorComponent_div_101_div_8_div_1_Template, 12, 3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chargeValue_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !chargeValue_r71.value.select);
  }
}
function RateEditorComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "The rate includes following charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, RateEditorComponent_div_101_div_4_Template, 2, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 67)(6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Additional charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, RateEditorComponent_div_101_div_8_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r10.charges.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r10.charges.controls);
  }
}
function RateEditorComponent_div_102_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71)(1, "div", 72)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 74)(4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r78 = ctx_r80.index;
    const chargeValue_r77 = ctx_r80.$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", chargeValue_r77.value.select);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r79.getChargeTitle(chargeValue_r77.value.field));
  }
}
function RateEditorComponent_div_102_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RateEditorComponent_div_102_div_4_div_1_Template, 7, 3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chargeValue_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", chargeValue_r77.value.select);
  }
}
function RateEditorComponent_div_102_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71)(1, "div", 97)(2, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 98)(4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r82 = ctx_r84.index;
    const chargeValue_r81 = ctx_r84.$implicit;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r83.getChargeTitle(chargeValue_r81.value.field));
  }
}
function RateEditorComponent_div_102_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RateEditorComponent_div_102_div_8_div_1_Template, 7, 2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chargeValue_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !chargeValue_r81.value.select);
  }
}
function RateEditorComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63)(1, "div", 100)(2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "The rate includes following charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, RateEditorComponent_div_102_div_4_Template, 2, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 101)(6, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Additional charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, RateEditorComponent_div_102_div_8_Template, 2, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.charges.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.charges.controls);
  }
}
function RateEditorComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 103)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.rateForm.value.total_cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r12.rateChar);
  }
}
function RateEditorComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 105)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total, ", ctx_r13.rateCode, ":");
  }
}
function RateEditorComponent_ng_template_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Delete rate?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "After deletion, restoration will not be possible");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 109)(5, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", true);
  }
}
class RateEditorComponent {
  constructor(fb, calculationsService, transportService, directionService, snackBar, dialog) {
    this.fb = fb;
    this.calculationsService = calculationsService;
    this.transportService = transportService;
    this.directionService = directionService;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.chargeModel = [];
    this.removeRate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.addRate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.indexRateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.duplicateRate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.transportCarrier = [];
    this.transportRoute = [];
    this.daysOfTheWeek = [{
      day: 'Monday',
      id: 1,
      date_id: 1
    }, {
      day: 'Tuesday',
      id: 2,
      date_id: 2
    }, {
      day: 'Wednesday',
      id: 3,
      date_id: 3
    }, {
      day: 'Thursday',
      id: 4,
      date_id: 4
    }, {
      day: 'Friday',
      id: 5,
      date_id: 5
    }, {
      day: 'Saturday',
      id: 6,
      date_id: 6
    }, {
      day: 'Sunday',
      id: 7,
      date_id: 0
    }];
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.touched = false;
    // Эти методы должны быть объявлены для ControlValueAccessor
    this.onChange = () => {};
    this.onTouched = () => {};
    this.dateClass = event => {
      const date = event.toISOString().split('T')[0];
      const dates = this.rateForm.value.nearest_flight || [];
      return dates.find(d => d === date) ? "selected" : "";
    };
    this.rateForm = this.createForm();
  }
  ngOnInit() {
    this.initializeForm();
    this.loadTransportData();
    this.setupFormSubscriptions();
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  ngOnChanges(changes) {
    if (changes['weight'] && this.weight) {
      this.updateWeightDependentCharges();
    }
    if (this.rateForm.value.rate_type === 'detail') {
      this.calculateTotalCost();
    }
  }
  // ControlValueAccessor implementation
  writeValue(value) {
    if (value) {
      this.rateForm.patchValue(value, {
        emitEvent: false
      });
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  validate(control) {
    return this.rateForm.valid ? null : {
      rateForm: true
    };
  }
  // Public properties
  get charges() {
    return this.rateForm.get('values');
  }
  get rateChar() {
    const currency = this.currency?.find(c => c.id === this.rateForm.value.currency);
    return currency?.char || '?';
  }
  get rateCode() {
    const currency = this.currency?.find(c => c.id === this.rateForm.value.currency);
    return currency?.code || '?';
  }
  // Public methods
  onDeleteRate() {
    if (!this.deleteRateDialogRef) return;
    this.dialog.open(this.deleteRateDialogRef).afterClosed().subscribe(res => {
      if (res) this.removeRate.emit();
    });
  }
  onAddRate() {
    this.addRate.emit();
  }
  onChangeRate(index) {
    this.indexRateChange.emit(index);
  }
  onDuplicateRate() {
    this.duplicateRate.emit();
  }
  onRateTypeChange() {
    this.resetChargeValues();
  }
  onRouteChange(route) {
    this.rateForm.patchValue({
      transit_time: {
        transit_time_from: route.days_min,
        transit_time_to: route.days_max
      }
    });
  }
  calculateCharge(control) {
    const value = control.value;
    // Если есть min или fix, рассчитываем cost даже при нулевом price
    let costValue = 0;
    if (value.min !== null && value.min !== undefined && value.min > 0) {
      // Расчет с минимальной стоимостью
      const calculatedCost = (value.price || 0) * (value.value || 0);
      costValue = Math.max(value.min, calculatedCost);
    } else if (value.fix !== null && value.fix !== undefined && value.fix > 0) {
      // Расчет с фиксированной надбавкой
      costValue = (value.price || 0) * (value.value || 0) + value.fix;
    } else if (value.price !== null && value.price !== undefined && value.price > 0) {
      // Стандартный расчет
      costValue = value.price * (value.value || 0);
    } else {
      // Если только cost введен напрямую
      costValue = value.cost || 0;
    }
    // Округляем до 2 знаков
    costValue = parseFloat(costValue.toFixed(2));
    control.patchValue({
      cost: costValue
    }, {
      emitEvent: false
    });
    this.calculateTotalCost();
  }
  // calculateCharge(control: any): void {
  //   const costValue = this.calculationsService.calculateRate(
  //     control.value.price,
  //     control.value.value,
  //     { min: control.value.min, fix: control.value.fix }
  //   );
  //   control.patchValue({ cost: costValue }, { emitEvent: false });
  //   this.calculateTotalCost();
  // }
  calculateCostDirectly(control) {
    control.patchValue({
      value: control.value.cost,
      price: 1
    }, {
      emitEvent: false
    });
  }
  filterIata() {
    const searchTerm = this.rateForm.value.carrier_name?.toLowerCase().replace(/\s/g, '') || '';
    return this.transportCarrier?.filter(option => option.iata?.toLowerCase().replace(/\s/g, '').includes(searchTerm)) || [];
  }
  filterRoutes() {
    const searchTerm = this.rateForm.value.route_name?.toLowerCase().replace(/\s/g, '') || '';
    return this.transportRoute?.filter(option => option.name.toLowerCase().replace(/\s/g, '').includes(searchTerm)) || [];
  }
  getAirlineName(iata) {
    const carrier = this.transportCarrier.find(c => c.iata?.toLowerCase() === iata?.toLowerCase());
    return iata == '' ? '' : carrier?.name || '';
  }
  // Private methods
  createForm() {
    return this.fb.group({
      carrier_desc: [''],
      carrier_name: [''],
      comment: [''],
      departure_schedule: [[]],
      id: [null],
      nearest_flight: [[]],
      num: [null],
      profit_include: [true],
      rate_type: ['nodetail'],
      route_name: [''],
      total_cost: [0],
      transit_time: this.fb.group({
        transit_time_from: [null],
        transit_time_to: [null]
      }),
      currency: [null],
      values: this.fb.array([]),
      valid_time: ['']
    });
  }
  initializeForm() {
    this.initializeCharges();
    if (this.request?.currency) {
      this.rateForm.patchValue({
        currency: this.request.currency
      });
    }
  }
  initializeCharges() {
    this.charges.clear();
    // Получаем существующие значения из данных (если есть)
    const existingValues = this.rateForm.value.values || [];
    this.chargeModel.forEach(charge => {
      // Ищем существующее значение для этого поля
      const existingValue = existingValues.find(v => v.field === charge.field_name);
      const selectValue = existingValue?.select ?? (charge.requare || charge.status);
      const initialValue = charge.unit === 'kg' ? this.weight : existingValue?.value ?? 1;
      const chargeGroup = this.fb.group({
        field: [charge.field_name],
        select: [selectValue],
        price: [existingValue?.price || null],
        min: [existingValue?.min || null],
        fix: [existingValue?.fix || null],
        value: [initialValue],
        cost: [existingValue?.cost || null],
        comment: [existingValue?.comment || null]
      });
      // Подписываемся на изменения для пересчета
      chargeGroup.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(() => {
        if (this.rateForm.value.rate_type === 'detail') {
          this.calculateTotalCost();
        }
      });
      this.charges.push(chargeGroup);
    });
  }
  // private initializeCharges(): void {
  //   this.charges.clear();
  //   this.chargeModel.forEach(charge => {
  //     const selectValue = charge.requare || charge.status;
  //     const initialValue = charge.unit === 'kg' ? this.weight : 1;
  //     const chargeGroup = this.fb.group({
  //       field: [charge.field_name],
  //       select: [selectValue],
  //       price: [null],
  //       min: [null],
  //       fix: [null],
  //       value: [initialValue],
  //       cost: [null],
  //       comment: [null],
  //     });
  //     // Подписываемся на изменения для пересчета
  //     chargeGroup.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(() => {
  //       if (this.rateForm.value.rate_type === 'detail') {
  //         this.calculateTotalCost();
  //       }
  //     });
  //     this.charges.push(chargeGroup);
  //   });
  // }
  setupFormSubscriptions() {
    this.rateForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(value => {
      this.onChange(value);
      if (!this.touched) {
        this.onTouched();
        this.touched = true;
      }
    });
  }
  loadTransportData() {
    this.getTransportCarrier();
    this.getTransportRoute();
  }
  updateWeightDependentCharges() {
    this.charges.controls.forEach((control, index) => {
      const chargeModel = this.chargeModel[index];
      if (chargeModel?.unit === 'kg' && this.weight) {
        control.patchValue({
          value: this.weight
        }, {
          emitEvent: false
        });
      }
    });
  }
  calculateTotalCost() {
    const total = this.charges.controls.filter(control => control.value.select && control.value.cost).reduce((sum, control) => sum + (control.value.cost || 0), 0);
    // Округляем до 2 знаков после запятой
    const roundedTotal = parseFloat(total.toFixed(2));
    this.rateForm.patchValue({
      total_cost: roundedTotal
    }, {
      emitEvent: false
    });
  }
  // private calculateTotalCost(): void {
  //   const total = this.charges.controls
  //     .filter(control => control.value.select && control.value.cost)
  //     .reduce((sum, control) => sum + (control.value.cost || 0), 0);
  //   this.rateForm.patchValue({ total_cost: total }, { emitEvent: false });
  // }
  resetChargeValues() {
    this.charges.controls.forEach(control => {
      control.patchValue({
        comment: null,
        cost: null,
        fix: null,
        min: null,
        price: null
      }, {
        emitEvent: false
      });
    });
    this.rateForm.patchValue({
      total_cost: 0
    }, {
      emitEvent: false
    });
  }
  getTransportCarrier() {
    this.transportService.transportCarrier({
      kind_id: this.requestKindId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe({
      next: carriers => {
        this.transportCarrier = carriers || [];
      },
      error: err => {
        this.showError('Ошибка загрузки перевозчиков', err);
      }
    });
  }
  getTransportRoute() {
    this.directionService.directionRoute({
      kind_id: this.requestKindId,
      arrival_city_id: this.request?.arrival_city_id,
      departure_country_id: this.request?.departure_country_id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe({
      next: routes => {
        this.transportRoute = routes || [];
      },
      error: err => {
        this.showError('Ошибка загрузки маршрутов', err);
      }
    });
  }
  showError(message, err) {
    const errorMsg = err?.error?.error_message_description || err?.error?.error_message || 'Неизвестная ошибка';
    this.snackBar.open(`${message}: ${errorMsg}`, 'Закрыть', {
      duration: 5000
    });
  }
  // Добавьте эти методы в класс RateEditorComponent
  getChargeTitle(fieldName) {
    const charge = this.chargeModel.find(item => item.field_name === fieldName);
    return charge?.name || fieldName;
  }
  getChargeUnit(fieldName) {
    const charge = this.chargeModel.find(item => item.field_name === fieldName);
    return charge?.unit || '';
  }
  hasMin(fieldName) {
    const charge = this.chargeModel.find(item => item.field_name === fieldName);
    return charge?.field_min || false;
  }
  hasFix(fieldName) {
    const charge = this.chargeModel.find(item => item.field_name === fieldName);
    return charge?.field_fix || false;
  }
  hasComment(fieldName) {
    const charge = this.chargeModel.find(item => item.field_name === fieldName);
    return charge?.field_comment || false;
  }
  getSelectedDateText() {
    const dates = this.rateForm.value.nearest_flight || [];
    if (dates.length === 0) return '';
    const formattedDates = dates.map(date => {
      const dateObj = new Date(date);
      return {
        day: dateObj.getDate(),
        month: dateObj.toLocaleString('en-US', {
          month: 'short'
        }),
        date: date
      };
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    let result = '';
    formattedDates.forEach((date, index) => {
      const nextDate = formattedDates[index + 1];
      if (nextDate && nextDate.month === date.month) {
        result += date.day + ',';
      } else {
        result += date.day + ' ' + date.month + (index === formattedDates.length - 1 ? '' : ', ');
      }
    });
    return result;
  }
  onDateSelect(event, calendar) {
    const date = event.toISOString().split('T')[0];
    const currentDates = this.rateForm.value.nearest_flight || [];
    const index = currentDates.findIndex(d => d === date);
    if (index >= 0) {
      currentDates.splice(index, 1);
    } else {
      currentDates.push(date);
      // Проверка соответствия выбранной даты дням недели из departure_schedule
      const selectedDate = new Date(date);
      let dayOfWeek = selectedDate.getDay() == 0 ? 1 : selectedDate.getDay() + 1; // 0 - воскресенье, 1 - понедельник, etc.
      console.log('dayOfWeek', dayOfWeek);
      // Конвертируем воскресенье (0) в 7 для соответствия с нашим форматом
      // if (dayOfWeek === 0) {
      //   dayOfWeek = 7;
      // }
      console.log('dayOfWeek', dayOfWeek);
      const departureSchedule = this.rateForm.value.departure_schedule || [];
      const isDateInSchedule = departureSchedule.includes(dayOfWeek);
      if (!isDateInSchedule && departureSchedule.length > 0) {
        this.snackBar.open(`Выбранная дата не соответствует дням недели расписания`, undefined, {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['centered-snackbar']
        });
      }
    }
    this.rateForm.patchValue({
      nearest_flight: currentDates
    });
    calendar.updateTodaysDate();
  }
  onValidChange() {
    this.rateForm.patchValue({
      valid_time: (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(this.rateForm.value.valid_time, 'yyyy-MM-dd', 'en-US')
    });
  }
  static {
    this.ɵfac = function RateEditorComponent_Factory(t) {
      return new (t || RateEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_calculations_service__WEBPACK_IMPORTED_MODULE_0__.CalculationsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.TransportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.DirectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RateEditorComponent,
      selectors: [["app-rate-editor"]],
      viewQuery: function RateEditorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.deleteRateDialogRef = _t.first);
        }
      },
      inputs: {
        requestKindId: "requestKindId",
        rates: "rates",
        currentRateNumber: "currentRateNumber",
        chargeModel: "chargeModel",
        weight: "weight",
        request: "request",
        currency: "currency"
      },
      outputs: {
        removeRate: "removeRate",
        addRate: "addRate",
        indexRateChange: "indexRateChange",
        duplicateRate: "duplicateRate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: RateEditorComponent
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALIDATORS,
        useExisting: RateEditorComponent,
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 117,
      vars: 19,
      consts: [[3, "formGroup"], [1, "form-row", "bg"], [1, "rate-block-title"], [1, "form-row-title", "color-blue"], [1, "radio"], ["type", "radio", "value", "detail", "formControlName", "rate_type", 3, "change"], ["type", "radio", "value", "nodetail", "formControlName", "rate_type", 3, "change"], [1, "rate_labels"], ["class", "rate_label", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "btn-add-rate", "rate_labels-btns", 3, "click"], [1, "icon-btn-plus"], [1, "btn-dup-rate", "rate_labels-btns", 3, "click"], [1, "btn-del-rate", "rate_labels-btns", 3, "click"], [1, "icon-btn-del"], [1, "form-row", "rate"], [1, "form-item-layout"], [1, "form-item", "i10"], [1, "form-label"], [1, "form-data"], [1, "kg"], ["type", "text", "readonly", "", 3, "value"], [1, "form-item", 2, "width", "105px"], ["type", "text", "formControlName", "carrier_name", 2, "text-transform", "uppercase", 3, "matAutocomplete"], ["autoActiveFirstOption", ""], ["carrier_name", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-item"], ["type", "text", "formControlName", "carrier_desc", 3, "readonly", "value"], ["type", "text", "formControlName", "route_name", 2, "text-transform", "uppercase", 3, "matAutocomplete"], ["route", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [1, "form-data", "departure-schedule"], ["appearance", "outline", 1, "ui-select"], ["formControlName", "departure_schedule", "multiple", ""], [1, "calendar", 3, "matMenuTriggerFor"], [1, "calendar-value"], [1, "calendar-icon"], ["menu", "matMenu"], [3, "click"], [2, "width", "206px", 3, "dateClass", "selectedChange"], ["calendar", ""], ["formGroupName", "transit_time", 1, "form-item", "w110"], ["type", "number", "formControlName", "transit_time_from"], ["type", "number", "formControlName", "transit_time_to"], [1, "form-item", "w110"], ["formControlName", "currency"], [1, "form-item", 2, "width", "150px", "flex-grow", "0"], ["formControlName", "valid_time", 1, "data-piker", 3, "matDatepicker", "click", "dateChange"], ["picker", ""], ["class", "charges", 4, "ngIf"], [1, "total"], ["class", "total-detail", 4, "ngIf"], ["class", "total-nodetail", 4, "ngIf"], ["type", "checkbox", "formControlName", "profit_include"], [1, "charges-title"], [1, "form-item-layout", 2, "margin-top", "40px", "width", "100%"], [1, "form-item", "charges-values", 2, "width", "100%"], [1, "form-data", 2, "width", "100%"], ["type", "text", "formControlName", "comment", "placeholder", "Your Comment...", 1, "values-input", 2, "max-width", "100%"], ["deleteRateDialogRef", ""], [1, "rate_label", 3, "ngClass", "click"], [3, "value"], [3, "value", "onSelectionChange"], [1, "charges"], [2, "width", "70%", "padding-right", "30px", "border-right", "1px dashed #E0E5EB", "margin-right", "30px"], [1, "form-block-sub-title"], ["formArrayName", "values", 4, "ngFor", "ngForOf"], [2, "width", "30%"], ["formArrayName", "values", "class", "additional", 4, "ngFor", "ngForOf"], ["formArrayName", "values"], [3, "formGroupName", 4, "ngIf"], [3, "formGroupName"], [1, "included-fees"], [2, "display", "flex"], ["type", "checkbox", "formControlName", "select", 3, "checked"], ["class", "input-box", 4, "ngIf"], ["class", "input-box", "style", "width: 70%;", 4, "ngIf"], [1, "input-box"], [1, "form-item", "charges-values", "br"], [1, "unit"], ["type", "number", "formControlName", "min", 1, "values-input", 3, "input"], [1, "form-item", "charges-values"], ["type", "number", "formControlName", "price", 1, "values-input", 3, "input"], [1, "cross"], ["class", "form-item charges-values", 4, "ngIf"], [1, "equal"], ["type", "number", "readonly", "", "formControlName", "cost", 1, "values-input"], ["type", "number", "formControlName", "value", 1, "values-input", 3, "input"], ["type", "number", "readonly", "", "formControlName", "value", 1, "values-input"], ["style", "text-align: center; margin: 0 5px; width: 11px; box-sizing: border-box;", 4, "ngIf"], ["type", "number", "formControlName", "fix", 1, "values-input", 3, "input"], [2, "text-align", "center", "margin", "0 5px", "width", "11px", "box-sizing", "border-box"], [1, "input-box", 2, "width", "70%"], [1, "form-item", 2, "margin-right", "10px"], ["type", "text", "formControlName", "comment"], ["type", "number", "formControlName", "cost", 1, "values-input", 3, "input"], ["formArrayName", "values", 1, "additional"], [1, "list-charges"], ["type", "checkbox", "formControlName", "select"], ["type", "number", "formControlName", "cost", 1, "values-input"], [2, "width", "50%", "border-right", "1px dashed #E0E5EB"], [2, "width", "50%", "padding-left", "40px"], [1, "form-block-sub-title", "additional"], [1, "total-detail"], [1, "color-red"], [1, "total-nodetail"], ["type", "number", "formControlName", "total_cost", 1, "total-cost"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", ""]],
      template: function RateEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Rates");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 4)(6, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RateEditorComponent_Template_input_change_6_listener() {
            return ctx.onRateTypeChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "With Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 4)(11, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RateEditorComponent_Template_input_change_11_listener() {
            return ctx.onRateTypeChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "With single Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, RateEditorComponent_div_16_Template, 2, 5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RateEditorComponent_Template_button_click_17_listener() {
            return ctx.onAddRate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Add Rate ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RateEditorComponent_Template_button_click_20_listener() {
            return ctx.onDuplicateRate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Duplicate Rate ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RateEditorComponent_Template_button_click_23_listener() {
            return ctx.onDeleteRate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Delete Rate ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Chargeable weight:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 18)(32, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "kg ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 21)(36, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Airline (iata):");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-autocomplete", 23, 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, RateEditorComponent_mat_option_42_Template, 2, 2, "mat-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 26)(44, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Airline:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 26)(49, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Route:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-autocomplete", 23, 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, RateEditorComponent_mat_option_55_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 26)(57, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "The departure schedule:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 31)(60, "mat-form-field", 32)(61, "mat-select", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, RateEditorComponent_mat_option_62_Template, 2, 2, "mat-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 26)(64, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "The nearest flight etd:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 18)(67, "button", 34)(68, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-menu", null, 37)(73, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RateEditorComponent_Template_div_click_73_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "mat-calendar", 39, 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectedChange", function RateEditorComponent_Template_mat_calendar_selectedChange_74_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86);
            const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](75);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onDateSelect($event, _r7));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 15)(77, "div", 41)(78, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Transit time from:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 41)(83, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Transit time to:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "input", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 44)(88, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "\u0421urrency Rate:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 18)(91, "mat-form-field", 32)(92, "mat-select", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, RateEditorComponent_mat_option_93_Template, 2, 2, "mat-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 46)(95, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "The Rate available until:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 18)(98, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RateEditorComponent_Template_input_click_98_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86);
            const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](100);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r9.open());
          })("dateChange", function RateEditorComponent_Template_input_dateChange_98_listener() {
            return ctx.onValidChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "mat-datepicker", null, 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](101, RateEditorComponent_div_101_Template, 9, 2, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](102, RateEditorComponent_div_102_Template, 9, 2, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, RateEditorComponent_div_104_Template, 7, 2, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](105, RateEditorComponent_div_105_Template, 4, 1, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "input", 53)(108, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "span", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Profit is included");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 55)(112, "div", 56)(113, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "input", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](115, RateEditorComponent_ng_template_115_Template, 9, 1, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](41);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](54);
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](72);
          const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](100);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.rateForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.rates);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.weight);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filterIata());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.getAirlineName(ctx.rateForm.value.carrier_name) != "")("value", ctx.getAirlineName(ctx.rateForm.value.carrier_name));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filterRoutes());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.daysOfTheWeek);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getSelectedDateText());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dateClass", ctx.dateClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.currency);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.rateForm.value.rate_type === "detail");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.rateForm.value.rate_type === "nodetail");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.rateForm.value.rate_type === "detail");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.rateForm.value.rate_type === "nodetail");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_2__.FocusFirstInvalidDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatCalendar, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 84074:
/*!*************************************************************************!*\
  !*** ./src/app/pages/components/request-rate/request-rate.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestRateComponent: () => (/* binding */ RequestRateComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/focus-first-invalid.directive */ 87683);
/* harmony import */ var _rate_editor_rate_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rate-editor/rate-editor.component */ 51132);










function RequestRateComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Cargo readiness:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 11)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.request == null ? null : ctx_r0.request.cargo_readiness);
  }
}
function RequestRateComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Conditions of carriage:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.request == null ? null : ctx_r1.request.cargo_condition_carriage, " ");
  }
}
function RequestRateComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.request == null ? null : ctx_r2.request.comment);
  }
}
function RequestRateComponent_div_101_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestRateComponent_div_101_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const documentsFile_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.getFile(documentsFile_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const documentsFile_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", documentsFile_r7 == null ? null : documentsFile_r7.file_name, " ");
  }
}
function RequestRateComponent_div_101_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestRateComponent_div_101_div_5_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const cargoFile_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.getFile(cargoFile_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cargoFile_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cargoFile_r10 == null ? null : cargoFile_r10.file_name, " ");
  }
}
function RequestRateComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Attached Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RequestRateComponent_div_101_div_4_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, RequestRateComponent_div_101_div_5_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.request == null ? null : ctx_r3.request.documents_file);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.request == null ? null : ctx_r3.request.cargo_file);
  }
}
const _c0 = function (a0) {
  return {
    "dn": a0
  };
};
function RequestRateComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "app-rate-editor", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removeRate", function RequestRateComponent_div_103_Template_app_rate_editor_removeRate_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const i_r14 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.removeRate(i_r14));
    })("addRate", function RequestRateComponent_div_103_Template_app_rate_editor_addRate_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.addRate());
    })("indexRateChange", function RequestRateComponent_div_103_Template_app_rate_editor_indexRateChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.indexRateChange($event));
    })("duplicateRate", function RequestRateComponent_div_103_Template_app_rate_editor_duplicateRate_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.duplicateRate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, i_r14 !== ctx_r4.currentRateNumber))("formControlName", i_r14)("requestKindId", ctx_r4.request.transport_kind_id)("rates", ctx_r4.requestForm.value.rates)("currentRateNumber", ctx_r4.currentRateNumber)("chargeModel", ctx_r4.chargeModel)("weight", ctx_r4.request.cargo_places_paid_weight)("request", ctx_r4.request)("currency", ctx_r4.currencyList);
  }
}
class RequestRateComponent {
  //КОНСТРУКТОР
  constructor(route, fb, requestService, snackBar, fileSevice, systemService) {
    this.route = route;
    this.fb = fb;
    this.requestService = requestService;
    this.snackBar = snackBar;
    this.fileSevice = fileSevice;
    this.systemService = systemService;
    //ПЕРЕМЕННЫЕ
    this.id = 0;
    //снек бар
    this.snackBarWithShortDuration = {
      duration: 4000
    };
    this.snackBarWithLongDuration = {
      duration: 8000
    };
    //отписки
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    //переменные окружения
    this.production = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production;
    this.currentRateNumber = 0;
    this.chargeModel = [];
    this.transportCarrier = [];
    this.xlsxMimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    this.requestForm = this.fb.group({
      uid: [, []],
      rates: fb.array([], [])
    });
  }
  // Методы ЖЦ:
  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnInit() {
    const uid = this.route.snapshot.paramMap.get('uid');
    this.requestForm.patchValue({
      uid: uid
    });
    this.getRequestRates(uid);
    this.getCurrency();
  }
  //ВЛОЖЕННАЯ ФОРМА РЕДАКТИРОВАНИ РЕЙТОВ
  removeRate(i) {
    this.rates.removeAt(i);
    this.requestForm.markAsTouched();
    this.currentRateNumber = this.rates.length - 1;
    if (this.rates.length < 1) {
      this.addRate();
    }
  }
  addRate() {
    if (this.rates.length < 8) {
      this.rates.push(this.fb.control({
        currency: this.requestForm.value.rates[this.currentRateNumber]?.currency,
        valid_time: this.requestForm.value.rates[this.currentRateNumber]?.valid_time
      }));
      this.currentRateNumber = this.rates.length - 1;
      this.requestForm.markAsTouched();
    }
  }
  duplicateRate() {
    this.rates.push(this.fb.control(this.requestForm.value.rates[this.currentRateNumber]));
    this.requestForm.markAsTouched();
  }
  get rates() {
    return this.requestForm.get('rates');
  }
  // Публичные методы:
  indexRateChange(e) {
    this.currentRateNumber = e;
  }
  copyDispatchText() {
    window.navigator.clipboard.writeText(`${this.request.departure_country_name}, ${this.request.departure_city_name}, ${this.request.departure_address}, ${this.request.departure_point_name}`);
    this.snackBar.open(`Address copied: ` + `${this.request.departure_country_name}, ${this.request.departure_city_name}, ${this.request.departure_address}, ${this.request.departure_point_name}`, undefined, this.snackBarWithLongDuration);
  }
  copyDestinationText() {
    window.navigator.clipboard.writeText(`${this.request.arrival_country_name}, ${this.request.arrival_city_name}, ${this.request.arrival_address}, ${this.request.arrival_point_name}`);
    this.snackBar.open(`Address copied: ` + `${this.request.arrival_country_name}, ${this.request.arrival_city_name}, ${this.request.arrival_address}, ${this.request.arrival_point_name}`, undefined, this.snackBarWithLongDuration);
  }
  getCurrency() {
    this.systemService.systemCurrency().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(currencyList => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe({
      next: currencyList => {
        console.log('currencyList', currencyList);
        this.currencyList = currencyList.current;
      },
      error: err => {
        console.log('ошибка получения валют в хеадере');
      }
    });
  }
  // Приватные методы:
  getFile(id) {
    this.fileSevice.fileDownload({
      id: id
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(file => {
      // if (!file) {
      //   throw ({ error: { error_message: `Запрос не существует` } });
      // }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe({
      next: ({
        name,
        data
      }) => {
        const dataUri = `data:${this.xlsxMimeType};base64,${data}`;
        const a = document.createElement('a');
        a.href = dataUri;
        a.download = name;
        a.click();
      },
      error: err => {
        this.snackBar.open(`Ошибка получения документа: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  //получаем данные запроса и рейтов
  getRequestRates(uid) {
    this.requestService.requestRates({
      uid: uid
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(rates => {
      console.log('getRequestRates', rates);
      if (!rates) throw {
        error: {
          error_message: `Запрос не существует`
        }
      };
      if (!rates.rates) this.rates.push(this.fb.control({}));
      rates.rates?.forEach(e => {
        this.addRate();
        this.requestForm.patchValue(rates);
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe({
      next: rates => {
        this.chargeModel = rates.charges;
        this.request = rates;
      },
      error: err => {
        this.snackBar.open(`${err.error?.error_message}: ` + err.error?.error_message_description, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  //сохраняем рейты
  saveRequestRates() {
    console.log(this.requestForm.value);
    this.requestService.requestRatesSave({
      body: this.requestForm.value
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(res => {
      console.log(res);
      if (!res) {
        throw {
          error: {
            error_message: `Ошибка сохранения`
          }
        };
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe({
      next: res => {
        this.snackBar.open(this.requestForm.value.rates.length > 1 ? `Ваши предложения в количестве ${this.requestForm.value.rates.length}-х ставок были отправлены` : `Ставка была отправлена`, undefined, {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['centered-snackbar'] // Кастомный класс для стилизации
        });
        // this.snackBar.open(`Данные сохранены`, undefined, this.snackBarWithLongDuration);
      },

      error: err => {
        this.snackBar.open(`${err.error.error_message}: ` + err.error.error_message_description, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  static {
    this.ɵfac = function RequestRateComponent_Factory(t) {
      return new (t || RequestRateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.SystemService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: RequestRateComponent,
      selectors: [["app-request-rate"]],
      decls: 108,
      vars: 33,
      consts: [[1, "logo-box"], [1, "edit-form", "title"], [1, "time-add"], [1, "edit-form", 3, "formGroup"], [1, "form-block"], [1, "form-row", "df"], [1, "form-col"], [1, "form-col-title"], [1, "form-item-layout"], [1, "form-item"], [1, "form-label"], [1, "form-data"], [1, "transport-point"], [1, "copy-map"], [1, "btn-copy", 3, "click"], ["title", "Open dispatch address in Google maps", "target", "_blank", 1, "btn-map", 3, "href"], ["title", "Open destination address in Google maps", "target", "_blank", 1, "btn-map", 3, "href"], ["class", "form-item", 4, "ngIf"], [1, "details-total"], [1, "space"], [1, "sup"], ["class", "form-item-layout", 4, "ngIf"], [1, "form-col", 2, "display", "flex", "flex-direction", "column"], ["readonly", "", 2, "border", "none", "flex-grow", "1"], ["class", "form-row", 4, "ngIf"], ["formArrayName", "rates", 1, "form-row", "rate"], [4, "ngFor", "ngForOf"], [1, "form-row", "bg", 2, "display", "flex", "justify-content", "end"], ["type", "submit", 1, "btn-save-rates", 3, "click"], [1, "icon-btn-save-rates"], [1, "form-row"], [1, "form-row-title"], [1, "comment"], [1, "form-item-layout", "wrap"], ["class", "file-box", 3, "click", 4, "ngFor", "ngForOf"], [1, "file-box", 3, "click"], [3, "ngClass", "formControlName", "requestKindId", "rates", "currentRateNumber", "chargeModel", "weight", "request", "currency", "removeRate", "addRate", "indexRateChange", "duplicateRate"]],
      template: function RequestRateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Date: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 3)(9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Route of Transportation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Dispatch");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11)(19, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 13)(24, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestRateComponent_Template_button_click_24_listener() {
            return ctx.copyDispatchText();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Copy");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " On map ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 8)(29, "div", 9)(30, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Destination");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 11)(33, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 13)(38, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestRateComponent_Template_button_click_38_listener() {
            return ctx.copyDestinationText();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Copy");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, " On map ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 6)(43, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Cargo Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 8)(46, "div", 9)(47, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Type of cargo:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 11)(50, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 9)(53, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Cargo name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 11)(56, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, RequestRateComponent_div_59_Template, 6, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 9)(61, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Incoterms");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 11)(64, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 8)(67, "div", 9)(68, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Details total:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 11)(71, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, " pcs ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, " m");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "sup", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, " kg");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, " kg/m");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "sup", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, RequestRateComponent_div_94_Template, 7, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 22)(96, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Dimensions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "textarea", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](100, RequestRateComponent_div_100_Template, 5, 1, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](101, RequestRateComponent_div_101_Template, 6, 2, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](103, RequestRateComponent_div_103_Template, 2, 11, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 27)(105, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RequestRateComponent_Template_button_click_105_listener() {
            return ctx.saveRequestRates();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](106, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, " Send Rates ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Rate Request # ", ctx.request == null ? null : ctx.request.id, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.time_add);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.requestForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", ctx.request == null ? null : ctx.request.departure_country_name, ", ", ctx.request == null ? null : ctx.request.departure_city_name, ", ", ctx.request == null ? null : ctx.request.departure_address, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.departure_point_name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate4"]("href", "https://www.google.com/maps/search/?api=1&query=", ctx.request == null ? null : ctx.request.departure_country_name, ",", ctx.request == null ? null : ctx.request.departure_city_name, ",", ctx.request == null ? null : ctx.request.departure_address, ",", ctx.request == null ? null : ctx.request.departure_point_name, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", ctx.request == null ? null : ctx.request.arrival_country_name, ", ", ctx.request == null ? null : ctx.request.arrival_city_name, ", ", ctx.request == null ? null : ctx.request.arrival_address, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.arrival_point_name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate4"]("href", "https://www.google.com/maps/search/?api=1&query=", ctx.request == null ? null : ctx.request.arrival_country_name, ",", ctx.request == null ? null : ctx.request.arrival_city_name, ",", ctx.request == null ? null : ctx.request.arrival_address, ",", ctx.request == null ? null : ctx.request.arrival_point_name, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.cargo_type_name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.cargo_description);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.request == null ? null : ctx.request.cargo_readiness);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.request == null ? null : ctx.request.incoterms_name, " ", ctx.request == null ? null : ctx.request.incoterms_city_name, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.request == null ? null : ctx.request.cargo_places_count, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.request == null ? null : ctx.request.cargo_places_volume, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.request == null ? null : ctx.request.cargo_places_weight, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.request == null ? null : ctx.request.cargo_places_density, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.request == null ? null : ctx.request.cargo_condition_carriage);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.cargo_dimensions);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.request == null ? null : ctx.request.comment);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.request == null ? null : ctx.request.documents_file == null ? null : ctx.request.documents_file.length) > 0 || (ctx.request == null ? null : ctx.request.cargo_file == null ? null : ctx.request.cargo_file.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rates.controls);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_2__.FocusFirstInvalidDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _rate_editor_rate_editor_component__WEBPACK_IMPORTED_MODULE_3__.RateEditorComponent],
      styles: ["@charset \"UTF-8\";\n.w110 {\n  flex-grow: 0;\n  max-width: 110px;\n}\n\n.logo-box {\n  height: 80px;\n  background: #fff;\n  border: 1px solid #c3ccd6;\n  border-right: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.logo-box div {\n  background-image: url('logo-full.svg');\n  background-size: auto;\n  background-repeat: no-repeat;\n  width: 1280px;\n  height: 44px;\n  margin: 18px auto;\n}\n\n.form-block .form-item-layout + .form-item-layout {\n  margin-top: 40px;\n}\n\ndiv {\n  text-rendering: optimizeLegibility;\n}\n\n.edit-form {\n  width: 1280px;\n}\n\n.edit-form.title {\n  font-size: 26px;\n  line-height: 30px;\n  font-weight: bold;\n  color: #2C3640;\n  display: flex;\n  justify-content: space-between;\n}\n\n.time-add {\n  text-transform: none;\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: normal;\n  color: #606A74;\n}\n\n.time-add span {\n  font-weight: bold;\n  color: #2C3640;\n  font-size: 14px;\n}\n\n.form-col .form-label {\n  text-transform: none;\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: normal;\n  margin-bottom: 15px;\n}\n\n.details-total {\n  text-wrap: nowrap;\n}\n\n.details-total span {\n  font-size: 15px;\n  font-weight: normal;\n}\n\n.space {\n  margin: 0 7px;\n  color: #606A74;\n  font-size: 17px;\n}\n\n.details-total sup {\n  font-size: 10px;\n}\n\n.df {\n  display: flex;\n}\n\n.form-col {\n  flex-grow: 1;\n  border-right: 1px solid #C3CCD6;\n  margin: -40px 0 -40px 0;\n  width: 0;\n  max-width: 381px;\n  padding: 40px;\n  font-weight: bold;\n  color: #2C3640;\n}\n\n.form-col:first-child {\n  margin-left: -40px;\n}\n\n.form-col:last-child {\n  margin-right: -40px;\n  border-right: 0;\n}\n\n.form-block .form-col .form-block-sub-title + .form-item-layout {\n  margin-top: 25px;\n}\n\n.form-col textarea {\n  background: none;\n  height: 150px;\n  border: none;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  line-height: 30px;\n  resize: none;\n}\n\n.form-col .form-col-title {\n  color: var(--header_menu, #4B66AD);\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  padding-bottom: 25px;\n}\n\ndiv.mat-calendar-body-selected, .mat-calendar-body-cell.selected .mat-calendar-body-cell-content {\n  background: var(--accent, #DB563B);\n  border-radius: 6px;\n}\n\n.mat-calendar-body-cell.disabled-date {\n  pointer-events: none; /* \u041E\u0442\u043A\u043B\u044E\u0447\u0430\u0435\u043C \u043A\u043B\u0438\u043A\u0438 */\n}\n\n.disabled-date .mat-calendar-body-cell-content {\n  color: #ccc; /* \u0421\u0435\u0440\u044B\u0439 \u0446\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 */\n  text-decoration: line-through; /* \u041F\u0435\u0440\u0435\u0447\u0435\u0440\u043A\u0438\u0432\u0430\u0435\u043C \u0442\u0435\u043A\u0441\u0442 */\n}\n\n.form-row .form-row-title {\n  color: #2C3640;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  padding-bottom: 25px;\n}\n\n.form-row .color-blue {\n  color: var(--header_menu, #4B66AD);\n}\n\n.file-box {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border-radius: 6px;\n  height: 15px;\n  padding: 10px 10px;\n  margin-right: 5px;\n  margin-bottom: 15px;\n  color: var(--accent, #DB563B);\n  text-wrap: nowrap;\n  cursor: pointer;\n  background: url('pic-btn-download.svg') no-repeat;\n  background-position: left;\n  padding-left: 35px;\n  background-position: 10px;\n}\n\n.file-box:hover {\n  opacity: 0.7;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.radio {\n  margin-left: 20px;\n  margin-bottom: 25px;\n}\n\n.comment {\n  color: #2C3640;\n}\n\n.rate-block-title {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 20px;\n}\n\n.rate_labels {\n  height: 45px;\n  margin-bottom: -40px;\n  display: flex;\n}\n\n.rate_label {\n  justify-content: center;\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  min-width: 130px;\n  border-right: 1px solid #C3CCD6;\n  border-top: 1px solid #C3CCD6;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.rate_label:first-child {\n  border-left: 1px solid #C3CCD6;\n}\n\n.active-rate {\n  background-color: white;\n  color: #2C3640;\n  font-weight: bold;\n  font-size: 17px;\n  line-height: 17px;\n}\n\n.rate_labels-btns {\n  border: none;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 80%;\n  margin: 5px 0 5px 5px;\n  border-radius: 6px;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.btn-add-rate {\n  background-color: var(--accent, #DB563B);\n}\n\n.btn-dup-rate {\n  background-color: var(--header_menu, #4B66AD);\n}\n\n.btn-del-rate {\n  background-color: black;\n}\n\n.icon-btn-plus {\n  background-image: url('pic-btn-plus.svg');\n  background-repeat: no-repeat;\n  width: 10px;\n  height: 10px;\n  margin-right: 5px;\n}\n\n.icon-btn-del {\n  background-image: url('pic-btn-del.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 15px;\n  height: 15px;\n  margin-right: 5px;\n}\n\n.kg {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.mat-primary .mat-pseudo-checkbox-checked, .mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: var(--accent, #DB563B);\n}\n\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: var(--accent, #DB563B);\n}\n\n.calendar-icon {\n  background-image: url('pic-btn-calendar.svg');\n  width: 15px;\n  height: 15px;\n  background-repeat: no-repeat;\n}\n\n.calendar {\n  background: #F7F9FC;\n  border: 1px solid #E0E5EB;\n  color: #2C3640;\n  font-size: 15px;\n  border-radius: 6px;\n  width: 206px;\n  box-sizing: border-box;\n  padding: 11px 13px 9px;\n  height: 39.88px;\n  display: flex;\n  cursor: pointer;\n}\n\n.calendar-value {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  width: 100%;\n}\n\n.departure-schedule mat-form-field.mat-form-field-appearance-outline .mat-select-arrow {\n  background: url('pic-btn-calendar.svg') no-repeat;\n  width: 15px;\n  height: 15px;\n}\n\n.drop-calendar {\n  width: 30rem;\n}\n\n.mat-menu-panel {\n  width: 206px;\n}\n\n.charges {\n  display: flex;\n  margin-top: 40px;\n  padding-top: 40px;\n  border-top: 1px solid #E0E5EB;\n  margin-bottom: 40px;\n  padding-bottom: 40px;\n  border-bottom: 1px solid #E0E5EB;\n}\n\n.included-fees {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 25px;\n}\n\n.list-charges {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 25px;\n}\n\n.form-block [type=checkbox]:checked + i + span {\n  font-weight: bold;\n  font-size: 17px;\n}\n\n.form-block [type=checkbox] + i + span {\n  color: #2C3640;\n}\n\n.charges-values .form-data {\n  display: flex;\n  text-wrap: nowrap;\n  align-items: baseline;\n}\n\n.unit {\n  width: 55px;\n  display: block;\n  margin-left: 5px;\n}\n\n.charges-values:last-child .unit {\n  width: 10px;\n}\n\ninput[formcontrolname=value] + .unit {\n  width: 45px;\n}\n\n.total {\n  display: flex;\n  gap: 40px;\n  align-items: center;\n}\n\n.total .total-detail {\n  display: flex;\n  gap: 5px;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 22px;\n  color: #2C3640;\n}\n\n.total .total-nodetail {\n  display: flex;\n  gap: 5px;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 22px;\n  color: #2C3640;\n  align-items: baseline;\n}\n\n.total-nodetail .total-cost {\n  background: #F7F9FC;\n  border: 1px solid #E0E5EB;\n  color: #2C3640;\n  border-radius: 6px;\n  padding: 11px 7px 9px;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 22px;\n  max-width: 70px;\n  text-align: end;\n}\n\n.color-red {\n  color: var(--accent, #DB563B);\n}\n\n.form-block .total [type=checkbox]:checked + i + span {\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.dn {\n  display: none;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n.form-block .charges input[type=number], .form-block select, .form-item-layout input[type=number] {\n  font-family: \"regular\", \"arial\", \"sans-serif\";\n  background: #F7F9FC;\n  border: 1px solid #E0E5EB;\n  color: #2C3640;\n  font-size: 15px;\n  line-height: 15px;\n  border-radius: 6px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 11px 5px 9px;\n  text-align: end;\n}\n\n.form-block input[type=number][readonly], .form-block select[readonly], .form-block textarea[readonly] {\n  background: transparent;\n  border: 1px dashed #C3CCD6;\n  color: #2C3640;\n}\n\n.charges-values {\n  flex-grow: 0;\n}\n\n.charges-values .values-input {\n  max-width: 80px;\n}\n.charges-values .values-input[formControlName=cost] {\n  max-width: 110px;\n}\n.charges-values .values-input[formControlName=value] {\n  max-width: 90px;\n}\n\n.additional .form-data {\n  width: 75px;\n}\n\n.included-fees label {\n  display: flex;\n  width: 165px;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.input-box {\n  display: flex;\n  align-items: baseline;\n}\n\n.cross {\n  background-image: url('pic-btn-cancel-black.svg');\n  background-size: contain;\n  width: 10px;\n  height: 10px;\n  margin: 0 10px;\n}\n\n.equal {\n  color: black;\n  margin-right: 10px;\n}\n\n.br {\n  border-right: 1px solid #E0E5EB;\n  padding-right: 10px;\n  margin-right: 10px;\n}\n\n.transport-point {\n  margin-top: 15px;\n  font-weight: normal;\n}\n\n.copy-map {\n  display: flex;\n  align-items: baseline;\n  margin-top: 15px;\n}\n\n.btn-copy {\n  background-image: url('pic-btn-copy.svg');\n  background-repeat: no-repeat;\n  background-color: white;\n  border: none;\n  color: var(--accent, #DB563B);\n  width: 70px;\n  cursor: pointer;\n  padding: 0;\n  height: 20px;\n}\n\n.btn-map {\n  background-image: url('pic-btn-map.svg');\n  background-repeat: no-repeat;\n  background-color: white;\n  border: none;\n  color: var(--accent, #DB563B);\n  width: 90px;\n  text-decoration: none;\n  display: flex;\n  padding-left: 18px;\n  font-weight: normal;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  height: 20px;\n}\n\n.form-block-sub-title {\n  margin-bottom: 40px;\n}\n\n.btn-save-rates {\n  background-color: var(--accent, #DB563B);\n  border: none;\n  border-radius: 6px;\n  padding: 10px;\n  color: white;\n  display: flex;\n  width: 120px;\n  cursor: pointer;\n}\n\n.icon-btn-save-rates {\n  background-image: url('pic-btn-send-white.svg');\n  background-repeat: no-repeat;\n  width: 20px;\n  height: 15px;\n  display: block;\n  margin-right: 5px;\n}\n\n.charges input {\n  padding: 0;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9yZXF1ZXN0LXJhdGUvcmVxdWVzdC1yYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUloQjtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUZGOztBQU1BO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBSkY7O0FBTUE7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQU1BO0VBQ0Usa0NBQUE7QUFIRjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQURGOztBQUdBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUVFLGVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLG9CQUFBLEVBQUEsb0JBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUEsRUFBQSxzQkFBQTtFQUNBLDZCQUFBLEVBQUEsd0JBQUE7QUFLRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQ0FBQTtBQU1GOztBQUhBO0VBQ0UseUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBTUY7O0FBSkE7RUFDRSxZQUFBO0FBT0Y7O0FBSkE7RUFDRSxlQUFBO0FBT0Y7O0FBSkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxjQUFBO0FBUUY7O0FBbUNBO0VBQ0UsYUFBQTtFQUFlLHFCQUFBO0VBQ2YsbUJBQUE7QUEvQkY7O0FBbUNBO0VBQ0UsWUFBQTtFQUFlLG9CQUFBO0VBQXVCLGFBQUE7QUE5QnhDOztBQWdDQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFBZSxtQkFBQTtFQUNmLFlBQUE7RUFBYyxnQkFBQTtFQUNkLCtCQUFBO0VBQWtDLDZCQUFBO0VBQ2xDLGlCQUFBO0VBQ0EsZUFBQTtBQTNCRjs7QUE2QkE7RUFBeUIsOEJBQUE7QUF6QnpCOztBQTBCQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQW9CLGVBQUE7RUFBa0IsaUJBQUE7QUFyQnhDOztBQXdCQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFyQkY7O0FBdUJBO0VBQ0Usd0NBQUE7QUFwQkY7O0FBc0JBO0VBQ0UsNkNBQUE7QUFuQkY7O0FBcUJBO0VBQ0UsdUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UseUNBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFsQkY7O0FBb0JBO0VBQ0Usd0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWpCRjs7QUFxQkE7RUFDRSxhQUFBO0VBQWdCLG1CQUFBO0VBQ2hCLFFBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usa0NBQUE7QUFqQkY7O0FBbUJBO0VBQ0UsNkJBQUE7QUFoQkY7O0FBa0JBO0VBQ0UsNkNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBZkY7O0FBaUJBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWRGOztBQWdCQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWJGOztBQWVBO0VBQ0UsaURBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQWJGOztBQWtCQTtFQUNFLFlBQUE7QUFmRjs7QUFpQkE7RUFDRSxZQUFBO0FBZEY7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQWZGOztBQWtCQTtFQUNFLGFBQUE7RUFBaUIscUJBQUE7RUFBd0IsOEJBQUE7RUFDekMsV0FBQTtFQUFjLG1CQUFBO0FBWmhCOztBQWNBO0VBQ0UsYUFBQTtFQUFnQixxQkFBQTtFQUF3Qiw4QkFBQTtFQUN4QyxXQUFBO0VBQWMsbUJBQUE7QUFSaEI7O0FBWUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFURjs7QUFXQTtFQUNFLGNBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBUkY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBUEY7O0FBWUE7RUFDRSxXQUFBO0FBVEY7O0FBV0E7RUFDRSxXQUFBO0FBUkY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQVJGOztBQVVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVBGOztBQVNBO0VBQ0UsNkJBQUE7QUFORjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUxGOztBQWVBO0VBQ0UsYUFBQTtBQVpGOztBQTRCQTs7RUFFRSx3QkFBQTtBQXpCRjs7QUEyQkE7RUFDRSwwQkFBQTtBQXhCRjs7QUEwQkE7RUFDRSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUF2QkY7O0FBNEJBO0VBRUUsWUFBQTtBQTFCRjs7QUFpQ0E7RUFDRSxlQUFBO0FBOUJGO0FBK0JFO0VBQ0UsZ0JBQUE7QUE3Qko7QUErQkU7RUFDRSxlQUFBO0FBN0JKOztBQWdDQTtFQUNFLFdBQUE7QUE3QkY7O0FBK0JBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUE1QkY7O0FBcUNBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBbENGOztBQXNDQTtFQUNFLGlEQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQWMsWUFBQTtFQUNkLGNBQUE7QUFsQ0Y7O0FBb0NBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBakNGOztBQW9DQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWpDRjs7QUFvQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBakNGOztBQW9DQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBakNGOztBQW9DQTtFQUNFLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFqQ0Y7O0FBbUNBO0VBQ0Usd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWhDRjs7QUF1Q0E7RUFDRSxtQkFBQTtBQXBDRjs7QUF3Q0E7RUFDRSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBckNGOztBQXVDQTtFQUNFLCtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXBDRjs7QUEyQ0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUF4Q0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY2FyZ28taW5mb3tcbi8vICAgZmxleC1ncm93OiAxO1xuLy8gICBib3JkZXI6IHNvbGlkIHJlZCAxcHg7XG4vLyB9XG4udzExMHtcbiAgZmxleC1ncm93OiAwO1xuICBtYXgtd2lkdGg6IDExMHB4O1xufVxuXG5cbi5sb2dvLWJveHtcbiAgLy8gd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzY2NkNjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbi5sb2dvLWJveCBkaXZ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvbG9nby1mdWxsLnN2ZykgO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMjgwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luOiAxOHB4IGF1dG87XG59XG5cblxuLmZvcm0tYmxvY2sgLmZvcm0taXRlbS1sYXlvdXQgKyAuZm9ybS1pdGVtLWxheW91dCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5kaXZ7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHlcbn1cbi5lZGl0LWZvcm0ge1xuICB3aWR0aDogMTI4MHB4Oztcbn1cbi5lZGl0LWZvcm0udGl0bGUge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyQzM2NDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xufVxuLnRpbWUtYWRkIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNjA2QTc0O1xufVxuLnRpbWUtYWRkIHNwYW57XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzJDMzY0MDtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG59XG4uZm9ybS1jb2wgIC5mb3JtLWxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kZXRhaWxzLXRvdGFse1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbn1cbi5kZXRhaWxzLXRvdGFsIHNwYW57XG5cbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnNwYWNle1xuICBtYXJnaW46IDAgN3B4O1xuICBjb2xvcjogIzYwNkE3NDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLmRldGFpbHMtdG90YWwgc3Vwe1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5kZntcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZvcm0tY29se1xuICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDM0NDRDY7XG4gIG1hcmdpbjogLTQwcHggMCAtNDBweCAwO1xuICB3aWR0aDogMDtcbiAgbWF4LXdpZHRoOiAzODFweDtcbiAgcGFkZGluZzogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMkMzNjQwO1xuXG59XG4uZm9ybS1jb2w6Zmlyc3QtY2hpbGR7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cbi5mb3JtLWNvbDpsYXN0LWNoaWxke1xuICBtYXJnaW4tcmlnaHQ6IC00MHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG5cblxuXG4uZm9ybS1ibG9jayAuZm9ybS1jb2wgLmZvcm0tYmxvY2stc3ViLXRpdGxlICsgLmZvcm0taXRlbS1sYXlvdXQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uZm9ybS1jb2wgdGV4dGFyZWF7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmZvcm0tY29sIC5mb3JtLWNvbC10aXRsZXtcbiAgY29sb3I6IHZhcigtLWhlYWRlcl9tZW51LCAjNEI2NkFEKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuZGl2Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkLCAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC5zZWxlY3RlZCAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLmRpc2FibGVkLWRhdGV7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiDDkMKew5HCgsOQwrrDkMK7w5HCjsORwofDkMKww5DCtcOQwrwgw5DCusOQwrvDkMK4w5DCusOQwrggKi9cbn1cbi5kaXNhYmxlZC1kYXRlIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnR7XG4gIGNvbG9yOiAjY2NjOyAvKiDDkMKhw5DCtcORwoDDkcKLw5DCuSDDkcKGw5DCssOQwrXDkcKCIMORwoLDkMK1w5DCusORwoHDkcKCw5DCsCAqL1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgLyogw5DCn8OQwrXDkcKAw5DCtcORwofDkMK1w5HCgMOQwrrDkMK4w5DCssOQwrDDkMK1w5DCvCDDkcKCw5DCtcOQwrrDkcKBw5HCgiAqL1xufVxuXG4uZm9ybS1yb3cgLmZvcm0tcm93LXRpdGxle1xuICBjb2xvcjogIzJDMzY0MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuLmZvcm0tcm93IC5jb2xvci1ibHVle1xuICBjb2xvcjogdmFyKC0taGVhZGVyX21lbnUsICM0QjY2QUQpO1xufVxuXG4uZmlsZS1ib3h7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogMTVweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tZG93bmxvYWQuc3ZnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweDtcbn1cbi5maWxlLWJveDpob3ZlcntcbiAgb3BhY2l0eTogMC43O1xufVxuXG4ud3JhcHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucmFkaW97XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmNvbW1lbnR7XG4gIGNvbG9yOiAjMkMzNjQwO1xufVxuXG4vLyAuZm9ybS1yb3cgLm1hdC10YWItZ3JvdXAge1xuLy8gICBtYXJnaW46IDAgLTQwcHg7XG4vLyAgIG1heC13aWR0aDogMTE0MnB4IDtcbi8vIH1cblxuLy8gLmZvcm0tcm93IC5tYXQtdGFiLWhlYWRlcntcbi8vICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAyNTBweDtcbi8vIH1cblxuLy8gLmZvcm0tcm93IC5tYXQtdGFiLWxhYmVse1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjQzNDQ0Q2O1xuLy8gICBib3JkZXItYm90dG9tOiAwO1xuLy8gICBib3JkZXItcmlnaHQ6IDA7XG4vLyB9XG4vLyAuZm9ybS1yb3cgLm1hdC10YWItbGFiZWw6bGFzdC1jaGlsZHtcbi8vICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0MzQ0NENjtcbi8vIH1cblxuLy8gLmZvcm0tcm93IC5tYXQtdGFiLWJvZHktd3JhcHBlcntcbi8vICAgcGFkZGluZzogNDBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xuLy8gfVxuXG4vLyAuZm9ybS1yb3cgLm1hdC1pbmstYmFye1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyAuZm9ybS1yb3cgLm1hdC10YWItbGFiZWw6Zm9jdXM6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gfVxuXG4vLyAuZm9ybS1yb3cgLm1hdC10YWItbGFiZWwtYWN0aXZle1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgb3BhY2l0eTogMTtcbi8vIH1cblxuLy9yYXRlIGJsb2NrIGFuZCBpbnB1dCBkZXRhaWwgbW9kXG4ucmF0ZS1ibG9jay10aXRsZXtcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4vLyByYXRlIGxhYmVsc1xuLnJhdGVfbGFiZWxze1xuICBoZWlnaHQ6IDQ1cHg7ICBtYXJnaW4tYm90dG9tOiAtNDBweDsgIGRpc3BsYXk6IGZsZXg7XG59XG4ucmF0ZV9sYWJlbHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNXB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTsgbWluLXdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0MzQ0NENjsgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzNDQ0Q2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJhdGVfbGFiZWw6Zmlyc3QtY2hpbGR7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0MzQ0NENjt9XG4uYWN0aXZlLXJhdGV7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzJDMzY0MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7ICBmb250LXNpemU6IDE3cHg7ICBsaW5lLWhlaWdodDogMTdweDtcbn1cbi8vIHJhdGUgbGFiZWxzLWJ0blxuLnJhdGVfbGFiZWxzLWJ0bnN7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDgwJTtcbiAgbWFyZ2luOiA1cHggMCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuLWFkZC1yYXRle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbn1cbi5idG4tZHVwLXJhdGV7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcl9tZW51LCAjNEI2NkFEKTtcbn1cbi5idG4tZGVsLXJhdGV7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLy8gcmF0ZSBsYWJlbHMtYnRuIGljb25zXG4uaWNvbi1idG4tcGx1c3tcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLXBsdXMuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uaWNvbi1idG4tZGVse1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tZGVsLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi8vQ0hBUkdFQUJMRSBXRUlHSFRcbi5rZyB7XG4gIGRpc3BsYXk6IGZsZXg7ICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbn1cbi8vVEhFIERFUEFSVFVSRSBTQ0hFRFVMRTpcbi5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xufVxuLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xufVxuLmNhbGVuZGFyLWljb257XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1jYWxlbmRhci5zdmcpO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNhbGVuZGFye1xuICBiYWNrZ3JvdW5kOiAjRjdGOUZDO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCO1xuICBjb2xvcjogIzJDMzY0MDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAyMDZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTFweCAxM3B4IDlweDtcbiAgaGVpZ2h0OiAzOS44OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FsZW5kYXItdmFsdWV7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5kZXBhcnR1cmUtc2NoZWR1bGUgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLWNhbGVuZGFyLnN2Zykgbm8tcmVwZWF0O1xuXG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4vL1RIRSBORUFSRVNUIEZMSUdIVCBFVEQ6XG5cblxuLmRyb3AtY2FsZW5kYXJ7XG4gIHdpZHRoOjMwcmVtXG59XG4ubWF0LW1lbnUtcGFuZWx7XG4gIHdpZHRoOiAyMDZweDtcbn1cblxuLy8gIENoYXJnZXNcbi5jaGFyZ2Vze1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMEU1RUI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UwRTVFQjtcbn1cblxuLmluY2x1ZGVkLWZlZXN7XG4gIGRpc3BsYXk6IGZsZXg7ICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lOyAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTsgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ubGlzdC1jaGFyZ2Vze1xuICBkaXNwbGF5OiBmbGV4OyAgYWxpZ24taXRlbXM6IGJhc2VsaW5lOyAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTsgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4vL2NoYXJnZXMgY2hleGJveFxuXG4uZm9ybS1ibG9jayBbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBpICsgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uZm9ybS1ibG9jayAgW3R5cGU9XCJjaGVja2JveFwiXSArIGkgKyBzcGFuIHtcbiAgY29sb3I6ICMyQzM2NDA7XG59XG4vL2NoYXJnZXMgdmFsdWVzXG4uY2hhcmdlcy12YWx1ZXMgLmZvcm0tZGF0YXtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC13cmFwOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi51bml0e1xuICB3aWR0aDogNTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubGlzdC1jaGFyZ2VzIC51bml0e1xuICAvLyBtYXJnaW4tcmlnaHQ6IDgwcHg7XG59XG4uY2hhcmdlcy12YWx1ZXM6bGFzdC1jaGlsZCAudW5pdHtcbiAgd2lkdGg6IDEwcHg7XG59XG5pbnB1dFtmb3JtY29udHJvbG5hbWU9XCJ2YWx1ZVwiXSsudW5pdHtcbiAgd2lkdGg6IDQ1cHg7XG59XG5cbi8vdG90YWwgY29zdFxuLnRvdGFse1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6NDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuLnRvdGFsIC50b3RhbC1kZXRhaWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDo1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzJDMzY0MDtcbn1cbi50b3RhbCAudG90YWwtbm9kZXRhaWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDo1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzJDMzY0MDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLnRvdGFsLW5vZGV0YWlsIC50b3RhbC1jb3N0e1xuICBiYWNrZ3JvdW5kOiAjRjdGOUZDO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCO1xuICBjb2xvcjogIzJDMzY0MDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMXB4IDdweCA5cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXgtd2lkdGg6IDcwcHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5jb2xvci1yZWR7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbn1cbi5mb3JtLWJsb2NrIC50b3RhbCBbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGkgKyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5cblxuXG5cblxuXG5cbi5kbntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cbi5mb3JtLWJsb2NrIC5jaGFyZ2VzIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIC5mb3JtLWJsb2NrIHNlbGVjdCAsIC5mb3JtLWl0ZW0tbGF5b3V0IGlucHV0W3R5cGU9XCJudW1iZXJcIl17XG4gIGZvbnQtZmFtaWx5OiAncmVndWxhcicsICdhcmlhbCcsICdzYW5zLXNlcmlmJztcbiAgYmFja2dyb3VuZDogI0Y3RjlGQztcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTVFQjtcbiAgY29sb3I6ICMyQzM2NDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDExcHggNXB4IDlweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uZm9ybS1ibG9jayBpbnB1dFt0eXBlPVwibnVtYmVyXCJdW3JlYWRvbmx5XSwgLmZvcm0tYmxvY2sgc2VsZWN0W3JlYWRvbmx5XSwgLmZvcm0tYmxvY2sgdGV4dGFyZWFbcmVhZG9ubHldIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjQzNDQ0Q2O1xuICBjb2xvcjogIzJDMzY0MDtcbn1cblxuXG5cbi5jaGFyZ2VzLXZhbHVlc3tcbiAgLy8gd2lkdGg6IDEyNXB4O1xuICBmbGV4LWdyb3c6IDA7XG5cbn1cbi8vIC5jaGFyZ2VzLXZhbHVlczpsYXN0LWNoaWxke1xuLy8gICB3aWR0aDogODBweDtcbi8vIH1cblxuLmNoYXJnZXMtdmFsdWVzIC52YWx1ZXMtaW5wdXR7XG4gIG1heC13aWR0aDogODBweDtcbiAgJltmb3JtQ29udHJvbE5hbWU9XCJjb3N0XCJde1xuICAgIG1heC13aWR0aDogMTEwcHg7XG4gIH1cbiAgJltmb3JtQ29udHJvbE5hbWU9XCJ2YWx1ZVwiXXtcbiAgICBtYXgtd2lkdGg6IDkwcHg7XG4gIH1cbn1cbi5hZGRpdGlvbmFsIC5mb3JtLWRhdGF7XG4gIHdpZHRoOiA3NXB4O1xufVxuLmluY2x1ZGVkLWZlZXMgbGFiZWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxNjVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4vLyAuY2hhcmdlcy12YWx1ZXMgLnZhbHVlcy1pbnB1dDpmaXJzdC1jaGlsZHtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4vLyB9XG5cblxuXG4uaW5wdXQtYm94e1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5cbn1cbi8vIGNyb3NzIGFuZCBlcXVhbFxuLmNyb3Nze1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tY2FuY2VsLWJsYWNrLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDEwcHg7ICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmVxdWFse1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJye1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTBFNUVCO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50cmFuc3BvcnQtcG9pbnR7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5jb3B5LW1hcHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYnRuLWNvcHl7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1jb3B5LnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgd2lkdGg6IDcwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmJ0bi1tYXB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1tYXAuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuICB3aWR0aDogOTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG5cblxuXG5cbi5mb3JtLWJsb2NrLXN1Yi10aXRsZXtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLy8gIGJ0biBzYXZlIHJhdGVzXG4uYnRuLXNhdmUtcmF0ZXN7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pY29uLWJ0bi1zYXZlLXJhdGVze1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tc2VuZC13aGl0ZS5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cblxuXG5cblxuLmNoYXJnZXMgaW5wdXR7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 21792:
/*!*******************************************************!*\
  !*** ./src/app/pages/modules/public/public.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicModule: () => (/* binding */ PublicModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _components_rate_editor_rate_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/rate-editor/rate-editor.component */ 51132);
/* harmony import */ var _components_request_rate_request_rate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/request-rate/request-rate.component */ 84074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: 'request-rates/:uid',
  component: _components_request_rate_request_rate_component__WEBPACK_IMPORTED_MODULE_2__.RequestRateComponent,
  title: 'Rates'
}];
class PublicModule {
  static {
    this.ɵfac = function PublicModule_Factory(t) {
      return new (t || PublicModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: PublicModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PublicModule, {
    declarations: [_components_request_rate_request_rate_component__WEBPACK_IMPORTED_MODULE_2__.RequestRateComponent, _components_rate_editor_rate_editor_component__WEBPACK_IMPORTED_MODULE_1__.RateEditorComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 41911:
/*!********************************************************!*\
  !*** ./src/app/pages/services/calculations.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalculationsService: () => (/* binding */ CalculationsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class CalculationsService {
  constructor() {}
  /**
   * Вычисляет точную сумму чисел из массива
   * @param values Массив чисел или строковых представлений чисел
   * @returns Сумма с точностью до 2 знаков после запятой
   */
  calculateSum(values) {
    const numbers = this._convertToNumbers(values);
    const sum = numbers.reduce((acc, curr) => this._preciseAdd(acc, curr), 0);
    return this._roundToTwoDecimals(sum);
  }
  /**
   * Вычисляет произведение чисел из массива
   * @param values Массив чисел или строковых представлений чисел
   * @returns Произведение с точностью до 2 знаков после запятой
   */
  calculateProduct(values) {
    const numbers = this._convertToNumbers(values);
    // Если массив пустой или все значения нулевые - возвращаем 0
    if (numbers.length === 0 || numbers.every(num => num === 0)) {
      return 0;
    }
    const product = numbers.reduce((acc, curr) => this._preciseMultiply(acc, curr), 1);
    return this._roundToTwoDecimals(product);
  }
  /**
   * Расчет ставки с учетом минимального и фиксированного значений
   * @param price Базовое значение (цена)
   * @param value Множитель
   * @param options Опциональные параметры {min?: number, fix?: number}
   * @returns Результат расчета с точностью до 2 знаков после запятой
   */
  calculateRate(price, value, options = {}) {
    const numPrice = this._safeConvertToNumber(price);
    const numValue = this._safeConvertToNumber(value);
    const numMin = options.min !== undefined ? this._safeConvertToNumber(options.min) : undefined;
    const numFix = options.fix !== undefined ? this._safeConvertToNumber(options.fix) : undefined;
    // Если price или value равны 0 или не переданы - возвращаем 0
    if (numPrice === 0 || numValue === 0) {
      return 0;
    }
    let result = this._preciseMultiply(numPrice, numValue);
    // Применяем минимальное значение (если передано и не равно 0)
    if (numMin !== undefined && numMin !== 0 && result < numMin) {
      result = numMin;
    }
    // Применяем фиксированное значение (если передано и не равно 0)
    if (numFix !== undefined && numFix !== 0) {
      result = this._preciseAdd(result, numFix);
    }
    return this._roundToTwoDecimals(result);
  }
  // ========== ПРИВАТНЫЕ МЕТОДЫ ==========
  /**
   * Точное сложение чисел с плавающей запятой
   */
  _preciseAdd(a, b) {
    const aDecimals = (a.toString().split('.')[1] || '').length;
    const bDecimals = (b.toString().split('.')[1] || '').length;
    const maxDecimals = Math.max(aDecimals, bDecimals);
    const factor = Math.pow(10, maxDecimals);
    return (a * factor + b * factor) / factor;
  }
  /**
   * Точное умножение чисел с плавающей запятой
   */
  _preciseMultiply(a, b) {
    const aDecimals = (a.toString().split('.')[1] || '').length;
    const bDecimals = (b.toString().split('.')[1] || '').length;
    const factor = Math.pow(10, aDecimals + bDecimals);
    const aInt = a * Math.pow(10, aDecimals);
    const bInt = b * Math.pow(10, bDecimals);
    return aInt * bInt / factor;
  }
  /**
   * Округление до 2 знаков после запятой
   */
  _roundToTwoDecimals(num) {
    // Если число целое - возвращаем без дробной части
    if (Number.isInteger(num)) {
      return num;
    }
    return parseFloat((Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2));
  }
  /**
   * Конвертирует массив значений в массив чисел
   */
  _convertToNumbers(values) {
    return values.map(value => this._safeConvertToNumber(value));
  }
  /**
   * Безопасная конвертация в число с обработкой null/undefined/некорректных строк
   */
  _safeConvertToNumber(value) {
    if (value === null || value === undefined || value === '') {
      return 0;
    }
    // Если уже число - возвращаем как есть
    if (typeof value === 'number') {
      return value;
    }
    // Заменяем запятые на точки и удаляем пробелы
    const cleanedValue = value.toString().replace(/,/g, '.').replace(/\s/g, '');
    const num = parseFloat(cleanedValue);
    return isNaN(num) ? 0 : num;
  }
  static {
    this.ɵfac = function CalculationsService_Factory(t) {
      return new (t || CalculationsService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CalculationsService,
      factory: CalculationsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modules_public_public_module_ts.js.map