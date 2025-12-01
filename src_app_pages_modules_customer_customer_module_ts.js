"use strict";
(self["webpackChunkcargodrom_frontend"] = self["webpackChunkcargodrom_frontend"] || []).push([["src_app_pages_modules_customer_customer_module_ts"],{

/***/ 29548:
/*!***************************************************************************!*\
  !*** ./src/app/pages/components/client-editor/client-editor.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientEditorComponent: () => (/* binding */ ClientEditorComponent)
/* harmony export */ });
/* harmony import */ var _validators_pattern_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../validators/pattern-validator */ 81505);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 52575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var src_app_shared_classes_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/classes/editor */ 29756);
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constants */ 51360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/city.service */ 84854);
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/country.service */ 98533);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/components/editor-header/editor-header.component */ 67157);
/* harmony import */ var _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../material/directives/phone-mask.directive */ 23541);
/* harmony import */ var _file_list_file_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../file-list/file-list.component */ 91580);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/services.component */ 84630);






















const _c0 = ["fileList"];
function ClientEditorComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function ClientEditorComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function ClientEditorComponent_mat_option_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ClientEditorComponent_mat_option_34_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53);
      const option_r51 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r52.onCountryChange(option_r51.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r51.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r51.name, " ");
  }
}
function ClientEditorComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u0421\u0442\u0440\u0430\u043D \u043D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_option_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ClientEditorComponent_mat_option_46_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56);
      const option_r54 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r55.onCountryChange(option_r54.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r54.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r54.name, " ");
  }
}
function ClientEditorComponent_mat_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u0413\u043E\u0440\u043E\u0434\u043E\u0432 \u043D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_error_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function ClientEditorComponent_mat_option_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pos_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", pos_r57.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](pos_r57.name);
  }
}
function ClientEditorComponent_ng_container_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function ClientEditorComponent_ng_container_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function ClientEditorComponent_ng_container_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function ClientEditorComponent_ng_container_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function ClientEditorComponent_ng_container_188_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function ClientEditorComponent_mat_option_231_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currency_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", currency_r58.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](currency_r58.name);
  }
}
function ClientEditorComponent_mat_error_232_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_ng_container_245_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainer"](0);
  }
}
function ClientEditorComponent_mat_option_258_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r59.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r59.name, " ");
  }
}
function ClientEditorComponent_mat_option_259_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u0413\u0440\u0443\u043F\u043F \u043D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_error_260_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_option_266_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", status_r60.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](status_r60.name);
  }
}
function ClientEditorComponent_mat_error_267_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_option_275_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r61.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r61.name, " ");
  }
}
function ClientEditorComponent_mat_option_276_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u0422\u0438\u043F\u043E\u0432 \u043D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_error_277_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_option_286_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r62.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r62.name, " ");
  }
}
function ClientEditorComponent_mat_option_287_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u0422\u0438\u043F\u043E\u0432 \u043D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_error_288_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_option_294_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const kind_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", kind_r63.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](kind_r63.name);
  }
}
function ClientEditorComponent_mat_error_295_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_option_303_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r64.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r64.name, " ");
  }
}
function ClientEditorComponent_mat_option_304_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u0422\u0438\u043F\u043E\u0432 \u043D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_error_305_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_option_322_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r65.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r65.name_i, " ");
  }
}
function ClientEditorComponent_mat_option_323_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_error_324_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_option_332_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", option_r66.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", option_r66.name_i, " ");
  }
}
function ClientEditorComponent_mat_option_333_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_mat_error_334_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ClientEditorComponent_ng_template_345_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().name;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r68.getError(name_r67));
  }
}
function ClientEditorComponent_ng_template_345_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ClientEditorComponent_ng_template_345_div_0_Template, 2, 1, "div", 83);
  }
  if (rf & 2) {
    const name_r67 = ctx.name;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r50.isFormSubmitted && ctx_r50.hasError(name_r67));
  }
}
const _c1 = function () {
  return {
    name: "name"
  };
};
const _c2 = function () {
  return {
    name: "name_full"
  };
};
const _c3 = function () {
  return {
    name: "inn"
  };
};
const _c4 = function () {
  return {
    name: "contact_fio"
  };
};
const _c5 = function () {
  return {
    name: "phone"
  };
};
const _c6 = function () {
  return {
    name: "email"
  };
};
const _c7 = function () {
  return {
    name: "document_contact_phone"
  };
};
const _c8 = function () {
  return {
    name: "delivery_contact_phone"
  };
};
const _c9 = function () {
  return {
    name: "accountant_phone"
  };
};
class ClientEditorComponent extends src_app_shared_classes_editor__WEBPACK_IMPORTED_MODULE_1__.Editor {
  constructor(fb, snackBar, route, systemService, location, router, customerService, companyService, cityService, countryService) {
    super(location, systemService, route, snackBar, router);
    this.fb = fb;
    this.customerService = customerService;
    this.companyService = companyService;
    this.cityService = cityService;
    this.countryService = countryService;
    this.entity = 'Клиент';
    this.editTitle = 'Информация о клиенте';
    this.newTitle = 'Добавление клиента';
    this.savedMessage = `${this.entity} сохранен`;
    this.removedMessage = `${this.entity} удален`;
    this.createdMessage = `${this.entity} создан`;
    this.notFoundMessage = `${this.entity} не найден`;
    this.countries = [];
    this.filteredCountries = [];
    this.cities = [];
    this.filteredCitys = [];
    this.clientGroups = [];
    this.filteredClientGroups = [];
    this.employees = [];
    this.filteredEmployeesForClient = [];
    this.filteredEmployeesForSale = [];
    this.documents = [];
    this.form = this.fb.group({
      id: [''],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      name_full: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      country_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      city_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      inn: ['', [_validators_pattern_validator__WEBPACK_IMPORTED_MODULE_0__.innValidator]],
      kpp: ['', []],
      ogrn: ['', []],
      okpo: ['', []],
      head_name: ['', []],
      head_position_id: ['', []],
      signature_fio: ['', []],
      signature_position: ['', []],
      signature_basis: ['', []],
      address_legal: ['', []],
      address_post: ['', []],
      contact_fio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      phone: ['', []],
      email: ['', [_validators_pattern_validator__WEBPACK_IMPORTED_MODULE_0__.emailValidator]],
      web: ['', []],
      group_id: ['', []],
      business_id: ['', []],
      interaction_id: ['', []],
      source_id: ['', []],
      status_id: ['', []],
      counterparty_id: ['', []],
      service_ids: [[], []],
      document_address: ['', []],
      document_path: ['', []],
      documents_path: ['', []],
      document_contact_fio: ['', []],
      document_contact_phone: ['', []],
      bank_name: ['', []],
      bank_bik: ['', []],
      bank_kpp: ['', []],
      bank_payment_account: ['', []],
      bank_correspondent_account: ['', []],
      // currency: ['', []],
      bank_currency_id: ['', []],
      accountant_fio: ['', []],
      accountant_phone: ['', []],
      delivery_address: ['', []],
      delivery_contact_fio: ['', []],
      delivery_contact_phone: ['', []],
      note: ['', []],
      warehouse_schedule: ['', []],
      manager_id: ['', []],
      manager_sale_id: ['', []]
    });
  }
  ngOnInit() {
    this.getCountries();
    this.loadHeadPositions();
    this.loadClientGroups();
    this.loadBusinessKinds();
    this.loadInteractionKinds();
    this.loadContactSources();
    this.loadClientStatuses();
    this.loadClientKinds();
    this.loadServiceKinds();
    this.loadEmployees();
    this.loadCurrencies();
    this.subscribeControl_CountryId();
    this.subscribeControl_CityId();
    this.subscribeControl_ClientGroupId();
    // this.subscribeControl_ClientStatusId();
    this.subscribeControl_ClientKindId();
    this.subscribeControl_BusinessKindId();
    this.subscribeControl_ContactSourceId();
    this.subscribeControl_EmployeeForClientId();
    this.subscribeControl_EmployeeForSaleId();
    setTimeout(() => super.ngOnInit(), 1500);
  }
  subscribeControl_CountryId() {
    this.form.get('country_id')?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(value => {
      if (typeof value === 'string') {
        this.filteredCountries = this.countries.filter(item => {
          return item.name && item.name.toLowerCase().includes(value.toLowerCase());
        });
        if (this.filteredCountries.length == 1) {
          if (this.filteredCountries[0].name?.toLowerCase() === value.toLowerCase()) {
            this.form.patchValue({
              country_id: this.filteredCountries[0].id
            });
            this.onCountryChange(this.filteredCountries[0].id);
          }
          ;
        }
        ;
      }
    });
  }
  subscribeControl_CityId() {
    this.form.get('city_id')?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(value => {
      if (typeof value === 'string') {
        this.filteredCitys = this.cities.filter(item => {
          return item.name && item.name.toLowerCase().includes(value.toLowerCase());
        });
        if (this.filteredCitys.length == 1) {
          if (this.filteredCitys[0].name?.toLowerCase() === value.toLowerCase()) {
            this.form.patchValue({
              city_id: this.filteredCitys[0].id
            });
          }
          ;
        }
        ;
      }
    });
  }
  subscribeControl_ClientGroupId() {
    this.form.get('group_id')?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(value => {
      if (typeof value === 'string') {
        this.filteredClientGroups = this.clientGroups.filter(item => {
          return item.name && item.name.toLowerCase().includes(value.toLowerCase());
        });
        if (this.filteredClientGroups.length == 1) {
          if (this.filteredClientGroups[0].name?.toLowerCase() === value.toLowerCase()) {
            this.form.patchValue({
              group_id: this.filteredClientGroups[0].id
            });
          }
          ;
        }
        ;
      }
    });
  }
  // subscribeControl_ClientStatusId(){
  //   this.form.get('status_id')?.valueChanges
  //   .pipe(
  //     debounceTime(1000),
  //     distinctUntilChanged(),
  //     // takeUntil(this._destroy$),
  //   )
  //   .subscribe((value: any) => {
  //     if(typeof value==='string'){
  //       this.filteredClientStatuses = this.clientStatuses.filter((item: any) => {
  //         return item.name && item.name.toLowerCase().includes(value.toLowerCase());
  //       });
  //       if(this.filteredClientStatuses.length==1){
  //         if(this.filteredClientStatuses[0].name?.toLowerCase()===value.toLowerCase()){
  //           this.form.patchValue({
  //             status_id: this.filteredClientStatuses[0].id,
  //           });
  //         };
  //       };
  //     }
  //   });
  // }
  subscribeControl_ClientKindId() {
    this.form.get('counterparty_id')?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(value => {
      if (typeof value === 'string') {
        this.filteredClientKinds = this.clientKinds.filter(item => {
          return item.name && item.name.toLowerCase().includes(value.toLowerCase());
        });
        if (this.filteredClientKinds.length == 1) {
          if (this.filteredClientKinds[0].name?.toLowerCase() === value.toLowerCase()) {
            this.form.patchValue({
              counterparty_id: this.filteredClientKinds[0].id
            });
          }
          ;
        }
        ;
      }
    });
  }
  subscribeControl_BusinessKindId() {
    this.form.get('business_id')?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(value => {
      if (typeof value === 'string') {
        this.filteredBusinessKinds = this.businessKinds.filter(item => {
          return item.name && item.name.toLowerCase().includes(value.toLowerCase());
        });
        if (this.filteredBusinessKinds.length == 1) {
          if (this.filteredBusinessKinds[0].name?.toLowerCase() === value.toLowerCase()) {
            this.form.patchValue({
              business_id: this.filteredBusinessKinds[0].id
            });
          }
          ;
        }
        ;
      }
    });
  }
  subscribeControl_ContactSourceId() {
    this.form.get('source_id')?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(value => {
      if (typeof value === 'string') {
        this.filteredContactSources = this.contactSources.filter(item => {
          return item.name && item.name.toLowerCase().includes(value.toLowerCase());
        });
        if (this.filteredContactSources.length == 1) {
          if (this.filteredContactSources[0].name?.toLowerCase() === value.toLowerCase()) {
            this.form.patchValue({
              source_id: this.filteredContactSources[0].id
            });
          }
          ;
        }
        ;
      }
    });
  }
  subscribeControl_EmployeeForClientId() {
    this.form.get('manager_id')?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(value => {
      if (typeof value === 'string') {
        this.filteredEmployeesForClient = this.employees.filter(item => {
          return item.name_i && item.name_i.toLowerCase().includes(value.toLowerCase());
        });
        if (this.filteredEmployeesForClient.length == 1) {
          if (this.filteredEmployeesForClient[0].name_i?.toLowerCase() === value.toLowerCase()) {
            this.form.patchValue({
              manager_id: this.filteredEmployeesForClient[0].id
            });
          }
          ;
        }
        ;
      }
    });
  }
  subscribeControl_EmployeeForSaleId() {
    this.form.get('manager_sale_id')?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(value => {
      if (typeof value === 'string') {
        this.filteredEmployeesForSale = this.employees.filter(item => {
          return item.name_i && item.name_i.toLowerCase().includes(value.toLowerCase());
        });
        if (this.filteredEmployeesForSale.length == 1) {
          if (this.filteredEmployeesForSale[0].name_i?.toLowerCase() === value.toLowerCase()) {
            this.form.patchValue({
              manager_sale_id: this.filteredEmployeesForSale[0].id
            });
          }
          ;
        }
        ;
      }
    });
  }
  displayFn_EmployeeForSaleId(id) {
    if (!this.employees) {
      return '';
    }
    const obj = this.employees.find(obj => obj.id === id);
    return obj?.name_i || '';
  }
  displayFn_EmployeeForClientId(id) {
    if (!this.employees) {
      return '';
    }
    const obj = this.employees.find(obj => obj.id === id);
    return obj?.name_i || '';
  }
  displayFn_ContactSourceId(id) {
    if (!this.contactSources) {
      return '';
    }
    const obj = this.contactSources.find(obj => obj.id === id);
    return obj?.name || '';
  }
  displayFn_BusinessKindId(id) {
    if (!this.businessKinds) {
      return '';
    }
    const obj = this.businessKinds.find(obj => obj.id === id);
    return obj?.name || '';
  }
  displayFn_ClientKindId(id) {
    if (!this.clientKinds) {
      return '';
    }
    const obj = this.clientKinds.find(obj => obj.id === id);
    return obj?.name || '';
  }
  displayFn_ClientStatusesId(id) {
    if (!this.clientStatuses) {
      return '';
    }
    const obj = this.clientStatuses.find(obj => obj.id === id);
    return obj?.name || '';
  }
  displayFn_ClientGroupId(id) {
    if (!this.clientGroups) {
      return '';
    }
    const obj = this.clientGroups.find(obj => obj.id === id);
    return obj?.name || '';
  }
  displayFn_CityId(id) {
    if (!this.cities) {
      return '';
    }
    const obj = this.cities.find(obj => obj.id === id);
    return obj?.name || '';
  }
  displayFn_CountryId(id) {
    if (!this.countries) {
      return '';
    }
    const obj = this.countries.find(obj => obj.id === id);
    return obj?.name || '';
  }
  afterRead(client) {
    this.getCities(client.country_id);
    this.documents = client.documents_file || [];
  }
  create(params) {
    return this.customerService.customerCreate(params);
  }
  afterCreate(body) {
    return this.fileList.create(body.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(() => ({
      id: body.id
    })));
  }
  read(params) {
    return this.customerService.customerInfo(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.tap)(client => this.afterRead(client)));
  }
  update(params) {
    return this.customerService.customerUpdate(params);
  }
  afterUpdate() {
    return this.fileList.update();
  }
  delete(params) {
    return this.customerService.customerDelete(params);
  }
  afterDelete() {
    return this.fileList.delete();
  }
  getNameForHeader(body) {
    return `${body.name}`;
  }
  getCountries() {
    this.countryService.getCountries().subscribe(countries => {
      this.filteredCountries = countries;
      this.countries = countries;
    });
  }
  getCities(countryId) {
    this.cityService.getCities(countryId).subscribe(cities => {
      this.filteredCitys = cities;
      this.cities = cities;
    });
  }
  loadEmployees() {
    this.companyService.companyEmployeeList().subscribe(employees => {
      this.employees = employees ? employees.items : [];
      this.filteredEmployeesForClient = employees ? employees.items : [];
      this.filteredEmployeesForSale = employees ? employees.items : [];
    });
  }
  onCountryChange(countryId) {
    this.form.controls['city_id'].reset(undefined);
    this.getCities(countryId);
  }
  loadClientGroups() {
    this.customerService.customerGroupList().subscribe(groups => {
      this.filteredClientGroups = groups.items ? groups.items.sort((0,src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__.byField)('name', 'asc', 'case-insensitive')) : [];
      this.clientGroups = groups.items ? groups.items.sort((0,src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__.byField)('name', 'asc', 'case-insensitive')) : [];
    });
  }
  onDocumentsPathChange(newPath) {
    this.form.patchValue({
      documents_path: newPath
    });
  }
  static {
    this.ɵfac = function ClientEditorComponent_Factory(t) {
      return new (t || ClientEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_city_service__WEBPACK_IMPORTED_MODULE_4__.CityService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_country_service__WEBPACK_IMPORTED_MODULE_5__.CountryService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: ClientEditorComponent,
      selectors: [["app-client-editor"]],
      viewQuery: function ClientEditorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.fileList = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
      decls: 347,
      vars: 83,
      consts: [[3, "title", "isEditMode", "name", "backLink", "save", "remove"], [1, "edit-form"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-block-title", 2, "padding", "0 0 25px 0"], [1, "form-block"], [1, "form-row"], [1, "form-item-layout"], [1, "form-item"], [1, "form-label"], [1, "req"], [1, "form-data"], ["type", "text", "formControlName", "name"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "formControlName", "name_full"], ["matInput", "", "type", "text", "formControlName", "country_id", 3, "matAutocomplete"], [3, "displayWith"], ["country_id", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["disabled", "", 4, "ngIf"], [4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "city_id", 3, "matAutocomplete"], ["city_id", "matAutocomplete"], ["type", "text", "formControlName", "inn"], ["type", "text", "formControlName", "kpp"], ["type", "text", "formControlName", "ogrn"], ["type", "text", "formControlName", "okpo"], [1, "form-block-title"], ["type", "text", "formControlName", "head_name"], ["appearance", "outline", 1, "ui-select"], ["formControlName", "head_position_id"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "signature_fio"], ["type", "text", "formControlName", "signature_position"], ["type", "text", "formControlName", "signature_basis"], ["component", "customer", "var", "documents_file", 3, "documents", "itemId", "documentsPath", "onDocumentsPathChange"], ["fileList", ""], ["type", "text", "formControlName", "address_legal"], ["type", "text", "formControlName", "address_post"], ["type", "text", "formControlName", "contact_fio"], ["type", "text", "formControlName", "phone", "appPhoneMask", ""], ["type", "text", "formControlName", "email"], ["type", "text", "formControlName", "web"], [1, "form-block-sub-title"], [1, "form-item", "w50"], ["type", "text", "formControlName", "document_address"], ["type", "text", "formControlName", "document_contact_fio"], ["type", "text", "formControlName", "document_contact_phone", "appPhoneMask", ""], ["type", "text", "formControlName", "delivery_address"], ["type", "text", "formControlName", "delivery_contact_fio"], ["type", "text", "formControlName", "delivery_contact_phone", "appPhoneMask", ""], ["type", "text", "formControlName", "warehouse_schedule"], ["type", "text", "formControlName", "bank_name"], ["type", "text", "formControlName", "bank_bik"], ["type", "text", "formControlName", "bank_kpp"], ["type", "text", "formControlName", "bank_payment_account"], ["type", "text", "formControlName", "bank_correspondent_account"], ["formControlName", "bank_currency_id"], ["type", "text", "formControlName", "accountant_fio"], ["type", "text", "formControlName", "accountant_phone", "appPhoneMask", ""], ["matInput", "", "type", "text", "formControlName", "group_id", 3, "matAutocomplete"], ["group_id", "matAutocomplete"], ["formControlName", "status_id"], ["matInput", "", "type", "text", "formControlName", "counterparty_id", 3, "matAutocomplete"], ["counterparty_id", "matAutocomplete"], ["matInput", "", "type", "text", "formControlName", "business_id", 3, "matAutocomplete"], ["business_id", "matAutocomplete"], ["formControlName", "interaction_id"], ["matInput", "", "type", "text", "formControlName", "source_id", 3, "matAutocomplete"], ["source_id", "matAutocomplete"], ["formControlName", "service_ids", 3, "services"], ["formControlName", "note"], ["matInput", "", "type", "text", "formControlName", "manager_id", 3, "matAutocomplete"], ["manager_id", "matAutocomplete"], ["matInput", "", "type", "text", "formControlName", "manager_sale_id", 3, "matAutocomplete"], ["manager_sale_id", "matAutocomplete"], [1, "form-button-right"], [1, "btn", "v", "save", 3, "click"], [1, "btn", "v", "del", 3, "click"], [1, "btn", "v", "cancel", 3, "click"], ["error", ""], [3, "value", "click"], ["disabled", ""], [3, "value"], ["class", "error", 4, "ngIf"], [1, "error"]],
      template: function ClientEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-editor-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("save", function ClientEditorComponent_Template_app_editor_header_save_0_listener() {
            return ctx.save();
          })("remove", function ClientEditorComponent_Template_app_editor_header_remove_0_listener() {
            return ctx.remove();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function ClientEditorComponent_Template_form_ngSubmit_2_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0440\u0430\u0442\u043A\u043E\u0435: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "\u2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, ClientEditorComponent_ng_container_15_Template, 1, 0, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 7)(17, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u043D\u043E\u0435: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "\u2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, ClientEditorComponent_ng_container_23_Template, 1, 0, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 6)(25, "div", 7)(26, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "\u0421\u0442\u0440\u0430\u043D\u0430 \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "\u2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "mat-autocomplete", 15, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, ClientEditorComponent_mat_option_34_Template, 2, 2, "mat-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, ClientEditorComponent_mat_option_35_Template, 2, 0, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, ClientEditorComponent_mat_error_36_Template, 2, 0, "mat-error", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 7)(38, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "\u0413\u043E\u0440\u043E\u0434 \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "\u2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "mat-autocomplete", 15, 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, ClientEditorComponent_mat_option_46_Template, 2, 2, "mat-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, ClientEditorComponent_mat_option_47_Template, 2, 0, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, ClientEditorComponent_mat_error_48_Template, 2, 0, "mat-error", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 5)(50, "div", 6)(51, "div", 7)(52, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "\u0418\u041D\u041D:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](56, ClientEditorComponent_ng_container_56_Template, 1, 0, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 7)(58, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "\u041A\u041F\u041F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](61, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 7)(63, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "\u041E\u0413\u0420\u041D:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 7)(68, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "\u041E\u041A\u041F\u041E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "div", 4)(75, "div", 5)(76, "div", 6)(77, "div", 7)(78, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0424\u0418\u041E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](81, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](82, "div", 7)(83, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "div", 10)(86, "mat-form-field", 28)(87, "mat-select", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](88, ClientEditorComponent_mat_option_88_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "div", 5)(90, "div", 6)(91, "div", 7)(92, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, "\u0424\u0418\u041E \u0443\u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0442\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](95, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "div", 7)(97, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0442\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](100, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](101, "div", 6)(102, "div", 7)(103, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](104, "\u041E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0442\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](106, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](107, "div", 5)(108, "app-file-list", 34, 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onDocumentsPathChange", function ClientEditorComponent_Template_app_file_list_onDocumentsPathChange_108_listener($event) {
            return ctx.onDocumentsPathChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](110, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](111, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u0438 \u0430\u0434\u0440\u0435\u0441\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "div", 4)(113, "div", 5)(114, "div", 6)(115, "div", 7)(116, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](119, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "div", 7)(121, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](122, "\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](123, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](124, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](125, "div", 6)(126, "div", 7)(127, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](128, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](129, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](130, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](131, ClientEditorComponent_ng_container_131_Template, 1, 0, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "div", 7)(133, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](136, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](137, ClientEditorComponent_ng_container_137_Template, 1, 0, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](138, "div", 7)(139, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](140, "E-mail:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](141, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](142, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](143, ClientEditorComponent_ng_container_143_Template, 1, 0, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](144, "div", 7)(145, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](146, "\u0421\u0430\u0439\u0442:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](147, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](148, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](149, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](150, "\u041A\u043E\u0440\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](151, "div", 5)(152, "div", 6)(153, "div", 43)(154, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](155, "\u0410\u0434\u0440\u0435\u0441 \u0434\u043B\u044F \u043A\u043E\u0440\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0446\u0438\u0438:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](156, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](157, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](158, "div", 7)(159, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](160, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](162, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](163, "div", 7)(164, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](165, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](167, "input", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](168, ClientEditorComponent_ng_container_168_Template, 1, 0, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](170, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0433\u0440\u0443\u0437\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](171, "div", 5)(172, "div", 6)(173, "div", 43)(174, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](175, "\u0410\u0434\u0440\u0435\u0441 \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0433\u0440\u0443\u0437\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](176, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](177, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](178, "div", 7)(179, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](180, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](181, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](182, "input", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](183, "div", 7)(184, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](185, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](186, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](187, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](188, ClientEditorComponent_ng_container_188_Template, 1, 0, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](189, "div", 6)(190, "div", 7)(191, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](192, "\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](193, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](194, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](195, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](196, "\u0424\u0438\u043D\u0430\u043D\u0441\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](197, "div", 4)(198, "div", 5)(199, "div", 6)(200, "div", 43)(201, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](202, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0430\u043D\u043A\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](203, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](204, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](205, "div", 7)(206, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](207, "\u0411\u0418\u041A \u0431\u0430\u043D\u043A\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](208, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](209, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](210, "div", 7)(211, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](212, "\u041A\u041F\u041F \u0431\u0430\u043D\u043A\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](213, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](214, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](215, "div", 6)(216, "div", 43)(217, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](218, "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](220, "input", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](221, "div", 7)(222, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](223, "\u041A\u043E\u0440\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](224, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](225, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](226, "div", 7)(227, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](228, "\u0412\u0430\u043B\u044E\u0442\u0430 \u0441\u0447\u0435\u0442\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "mat-form-field", 28)(230, "mat-select", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](231, ClientEditorComponent_mat_option_231_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](232, ClientEditorComponent_mat_error_232_Template, 2, 0, "mat-error", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](233, "div", 5)(234, "div", 6)(235, "div", 7)(236, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](237, "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](238, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](239, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](240, "div", 7)(241, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](242, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u0413\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](243, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](244, "input", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](245, ClientEditorComponent_ng_container_245_Template, 1, 0, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](246, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](247, "\u0421\u0432\u0435\u0434\u0435\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](248, "div", 4)(249, "div", 5)(250, "div", 6)(251, "div", 43)(252, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](253, "\u0413\u0440\u0443\u043F\u043F\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](254, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](255, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](256, "mat-autocomplete", 15, 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](258, ClientEditorComponent_mat_option_258_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](259, ClientEditorComponent_mat_option_259_Template, 2, 0, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](260, ClientEditorComponent_mat_error_260_Template, 2, 0, "mat-error", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](261, "div", 7)(262, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](263, "\u0421\u0442\u0430\u0442\u0443\u0441:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](264, "mat-form-field", 28)(265, "mat-select", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](266, ClientEditorComponent_mat_option_266_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](267, ClientEditorComponent_mat_error_267_Template, 2, 0, "mat-error", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](268, "div", 7)(269, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](270, "\u0422\u0438\u043F \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](271, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](272, "input", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](273, "mat-autocomplete", 15, 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](275, ClientEditorComponent_mat_option_275_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](276, ClientEditorComponent_mat_option_276_Template, 2, 0, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](277, ClientEditorComponent_mat_error_277_Template, 2, 0, "mat-error", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](278, "div", 6)(279, "div", 43)(280, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](281, "\u041E\u0442\u0440\u0430\u0441\u043B\u044C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](282, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](283, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](284, "mat-autocomplete", 15, 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](286, ClientEditorComponent_mat_option_286_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](287, ClientEditorComponent_mat_option_287_Template, 2, 0, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](288, ClientEditorComponent_mat_error_288_Template, 2, 0, "mat-error", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](289, "div", 7)(290, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](291, "\u0412\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](292, "mat-form-field", 28)(293, "mat-select", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](294, ClientEditorComponent_mat_option_294_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](295, ClientEditorComponent_mat_error_295_Template, 2, 0, "mat-error", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](296, "div", 7)(297, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](298, "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](299, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](300, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](301, "mat-autocomplete", 15, 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](303, ClientEditorComponent_mat_option_303_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](304, ClientEditorComponent_mat_option_304_Template, 2, 0, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](305, ClientEditorComponent_mat_error_305_Template, 2, 0, "mat-error", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](306, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](307, "app-services", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](308, "div", 5)(309, "div", 6)(310, "div", 43)(311, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](312, "\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](313, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](314, "textarea", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](315, "div", 7)(316, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](317, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](318, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](319, "input", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](320, "mat-autocomplete", 15, 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](322, ClientEditorComponent_mat_option_322_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](323, ClientEditorComponent_mat_option_323_Template, 2, 0, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](324, ClientEditorComponent_mat_error_324_Template, 2, 0, "mat-error", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](325, "div", 7)(326, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](327, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](328, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](329, "input", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](330, "mat-autocomplete", 15, 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](332, ClientEditorComponent_mat_option_332_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](333, ClientEditorComponent_mat_option_333_Template, 2, 0, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](334, ClientEditorComponent_mat_error_334_Template, 2, 0, "mat-error", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](335, "div", 75)(336, "span", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ClientEditorComponent_Template_span_click_336_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](337, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](338, "\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](339, "span", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ClientEditorComponent_Template_span_click_339_listener() {
            return ctx.remove();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](340, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](341, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](342, "span", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ClientEditorComponent_Template_span_click_342_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](343, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](344, "\u043E\u0442\u043C\u0435\u043D\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](345, ClientEditorComponent_ng_template_345_Template, 1, 1, "ng-template", null, 79, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](33);
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](45);
          const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](257);
          const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](274);
          const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](285);
          const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](302);
          const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](321);
          const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](331);
          const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](346);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", ctx.title)("isEditMode", ctx.isEditMode)("name", ctx.nameForHeader)("backLink", "customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r49)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](74, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r49)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](75, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matAutocomplete", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("displayWith", ctx.displayFn_CountryId.bind(ctx));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredCountries);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filteredCountries.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls["country_id"].hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matAutocomplete", _r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("displayWith", ctx.displayFn_CityId.bind(ctx));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredCitys);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filteredCitys.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls["city_id"].hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r49)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](76, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.headPositions);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("documents", ctx.documents)("itemId", ctx.id)("documentsPath", ctx.form.value.documents_path);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r49)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](77, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r49)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](78, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r49)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](79, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r49)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](80, _c7));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r49)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](81, _c8));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.currencies);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls["manager_id"].hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngTemplateOutlet", _r49)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](82, _c9));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matAutocomplete", _r21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("displayWith", ctx.displayFn_ClientGroupId.bind(ctx));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredClientGroups);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filteredClientGroups.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls["group_id"].hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.clientStatuses);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls["status_id"].hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matAutocomplete", _r27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("displayWith", ctx.displayFn_ClientKindId.bind(ctx));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredClientKinds);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filteredClientKinds.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls["counterparty_id"].hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matAutocomplete", _r31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("displayWith", ctx.displayFn_BusinessKindId.bind(ctx));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredBusinessKinds);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filteredBusinessKinds.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls["business_id"].hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.interactionKinds);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls["interaction_id"].hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matAutocomplete", _r37);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("displayWith", ctx.displayFn_ContactSourceId.bind(ctx));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredContactSources);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filteredContactSources.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls["source_id"].hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("services", ctx.serviceKinds);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matAutocomplete", _r41);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("displayWith", ctx.displayFn_EmployeeForClientId.bind(ctx));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredEmployeesForClient);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filteredEmployeesForClient.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls["manager_id"].hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matAutocomplete", _r45);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("displayWith", ctx.displayFn_EmployeeForSaleId.bind(ctx));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredEmployeesForSale);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.filteredEmployeesForSale.length == 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.form.controls["manager_sale_id"].hasError("required"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgTemplateOutlet, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocompleteTrigger, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_6__.EditorHeaderComponent, _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_7__.PhoneMaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _file_list_file_list_component__WEBPACK_IMPORTED_MODULE_8__.FileListComponent, _services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 97616:
/*!*************************************************************!*\
  !*** ./src/app/pages/components/client/client.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientComponent: () => (/* binding */ ClientComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/classes */ 56825);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/filter/services/filter.service */ 50535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _api_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../api/services/customer.service */ 44165);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../material/components/paginator/paginator.component */ 32105);
/* harmony import */ var _filter_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../filter/table-filter/table-filter.component */ 87359);
/* harmony import */ var _table_subheader_file_subheader_file_subheader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table-subheader/file-subheader/file-subheader.component */ 71543);
















function ClientComponent_ng_container_5_ng_template_1_th_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", col_r3.title, " ");
  }
}
function ClientComponent_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function ClientComponent_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_div_3_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const miniCol_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const colIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.startResize($event, miniCol_r12, ctx_r17.columnsData[colIndex_r4]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ClientComponent_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const miniCol_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.sort(miniCol_r12.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ClientComponent_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_div_3_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const miniCol_r12 = ctx_r24.$implicit;
    const miniColIndex_r13 = ctx_r24.index;
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](miniCol_r12.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", miniCol_r12.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r14.getSortClass(miniCol_r12.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("title", ctx_r14.getColTitle(miniCol_r12.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", miniCol_r12.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", miniColIndex_r13 !== col_r3.items.length - 1);
  }
}
function ClientComponent_ng_container_5_ng_template_1_th_0_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function ClientComponent_ng_container_5_ng_template_1_th_0_ng_container_4_div_2_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const colIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.startResize($event, ctx_r26.columnsData[colIndex_r4 - 1].items[ctx_r26.columnsData[colIndex_r4 - 1].items.length - 1], ctx_r26.columnsData[colIndex_r4 - 1]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ClientComponent_ng_container_5_ng_template_1_th_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ClientComponent_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_Template, 4, 8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ClientComponent_ng_container_5_ng_template_1_th_0_ng_container_4_div_2_Template, 1, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const miniCol_r12 = ctx.$implicit;
    const miniColIndex_r13 = ctx.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    const col_r3 = ctx_r29.$implicit;
    const colIndex_r4 = ctx_r29.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", miniCol_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", miniColIndex_r13 == col_r3.items.length - 1 && colIndex_r4 !== 0);
  }
}
function ClientComponent_ng_container_5_ng_template_1_th_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 13)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ClientComponent_ng_container_5_ng_template_1_th_0_div_2_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ClientComponent_ng_container_5_ng_template_1_th_0_ng_container_4_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](col_r3.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("min-width", col_r3.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](!col_r3.title ? "td-block" : "td-block-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", col_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](!col_r3.title ? "no-layout" : "td-block-line");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", col_r3.items);
  }
}
function ClientComponent_ng_container_5_ng_template_1_td_1_div_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const miniCol_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r34.getVal(item_r31, miniCol_r33.field));
  }
}
function ClientComponent_ng_container_5_ng_template_1_td_1_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "test");
  }
}
function ClientComponent_ng_container_5_ng_template_1_td_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ClientComponent_ng_container_5_ng_template_1_td_1_div_2_ng_template_1_Template, 2, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ClientComponent_ng_container_5_ng_template_1_td_1_div_2_ng_template_2_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const miniCol_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](miniCol_r33.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", miniCol_r33.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", miniCol_r33.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "test");
  }
}
function ClientComponent_ng_container_5_ng_template_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ClientComponent_ng_container_5_ng_template_1_td_1_div_2_Template, 3, 6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](col_r3.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("min-width", col_r3.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", col_r3.items);
  }
}
function ClientComponent_ng_container_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ClientComponent_ng_container_5_ng_template_1_th_0_Template, 5, 10, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ClientComponent_ng_container_5_ng_template_1_td_1_Template, 3, 5, "td", 12);
  }
}
function ClientComponent_ng_container_5_ng_template_2_th_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_ng_container_5_ng_template_2_th_0_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r46.onCancelColumnWidth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ClientComponent_ng_container_5_ng_template_2_th_0_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_ng_container_5_ng_template_2_th_0_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r48.onSaveColumnWidth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ClientComponent_ng_container_5_ng_template_2_th_0_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_ng_container_5_ng_template_2_th_0_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r50.updateColumnSize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043A\u043E\u043B\u043E\u043D\u043E\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ClientComponent_ng_container_5_ng_template_2_th_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_ng_container_5_ng_template_2_th_0_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r52.onResetColumnWidth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ClientComponent_ng_container_5_ng_template_2_th_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-menu", null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ClientComponent_ng_container_5_ng_template_2_th_0_button_4_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ClientComponent_ng_container_5_ng_template_2_th_0_button_5_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ClientComponent_ng_container_5_ng_template_2_th_0_button_6_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ClientComponent_ng_container_5_ng_template_2_th_0_button_7_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function ClientComponent_ng_container_5_ng_template_2_th_0_Template_div_mousedown_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55);
      const colIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r54.startResize($event, ctx_r54.columnsData[colIndex_r4 - 1].items[ctx_r54.columnsData[colIndex_r4 - 1].items.length - 1], ctx_r54.columnsData[colIndex_r4 - 1]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r39.isResizeColumnMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r39.isResizeColumnMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r39.isResizeColumnMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r39.isTableFixedWidth);
  }
}
const _c0 = function (a1) {
  return ["edit", a1];
};
function ClientComponent_ng_container_5_ng_template_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, client_r57.id));
  }
}
function ClientComponent_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ClientComponent_ng_container_5_ng_template_2_th_0_Template, 9, 5, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ClientComponent_ng_container_5_ng_template_2_td_1_Template, 2, 3, "td", 30);
  }
}
function ClientComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ClientComponent_ng_container_5_ng_template_1_Template, 2, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ClientComponent_ng_container_5_ng_template_2_Template, 2, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matColumnDef", col_r3.column)("ngSwitch", col_r3.column);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "settings");
  }
}
function ClientComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 38);
  }
}
function ClientComponent_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 39);
  }
}
const _c1 = function () {
  return {
    title: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
    subtitle: "\u043A\u043B\u0438\u0435\u043D\u0442"
  };
};
class ClientComponent extends src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__.Table {
  constructor(customerService, filterService, dialog, snackBar, route, router, userService) {
    super(route, router, dialog, snackBar, filterService, userService);
    this.customerService = customerService;
    this.sortField = 'name';
    this.trackById = (_index, client) => client.id;
    this.importMetods = {
      import: this.customerService.customerImport.bind(this.customerService),
      import_res: this.customerService.customerImportResult.bind(this.customerService),
      import_con: this.customerService.customerImportConfirm.bind(this.customerService)
    };
  }
  load(params) {
    this.params = params;
    console.log(params);
    return this.customerService.customerList(params);
  }
  loadFilterSchemaTest() {
    return this.customerService.customerListParam().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(val => val));
  }
  loadFilterSchema() {
    return this.customerService.customerList().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(val => val));
  }
  exportData() {
    return this.customerService.customerExport(this.params);
  }
  importData(body) {
    return this.customerService.customerImport({
      body
    });
  }
  importDataConfirm(body) {
    return this.customerService.customerImportConfirm({
      import_key: body.import_key
    });
  }
  importResult(body) {
    return this.customerService.customerImportResult({
      import_key: body.import_key
    });
  }
  importTemplate() {
    return this.customerService.customerImportTemplate(this.filter);
  }
  ngOnInit() {
    super.ngOnInit();
    this.resizeMetod = 'customer_list';
  }
  static {
    this.ɵfac = function ClientComponent_Factory(t) {
      return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_api_services_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ClientComponent,
      selectors: [["app-client"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 15,
      consts: [[1, "client-component"], [3, "titles", "importMetods", "export", "exportTemplate"], [1, "table-list"], ["mat-table", "", "multiTemplateDataRows", "", 1, "sticky-header", 3, "dataSource"], [3, "matColumnDef", "ngSwitch", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "total", "count", "start", "limits", "startChange", "countChange"], [3, "matColumnDef", "ngSwitch"], [3, "ngSwitchDefault"], [3, "ngSwitchCase"], ["mat-header-cell", "", 3, "minWidth", "class", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "minWidth", "class", 4, "matCellDef"], ["mat-header-cell", ""], ["class", "td-block-title", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "td-block-title"], ["class", "column", 3, "width", "class", 4, "ngIf"], ["class", "resize-handle_end", 3, "mousedown", 4, "ngIf"], [1, "column"], [1, "col-content", 3, "ngClass", "click"], ["class", "resize-handle", 3, "mousedown", 4, "ngIf"], [1, "resize-handle", 3, "mousedown"], [1, "resize-handle_end", 3, "mousedown"], ["mat-cell", ""], [1, "td-block"], ["class", "column", 3, "width", "class", "ngSwitch", 4, "ngFor", "ngForOf"], [1, "column", 3, "ngSwitch"], [1, "col-content"], ["mat-header-cell", "", "class", "setting", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "setting", 4, "matCellDef"], ["mat-header-cell", "", 1, "setting"], [1, "setting-link", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["class", "table-settings", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 1, "table-settings", 3, "click"], ["mat-cell", "", 1, "setting"], ["title", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", 1, "link-pic", "link-edit", "ico", "ico-pencil", "fn-link", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function ClientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "app-table-sunheader-file", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("export", function ClientComponent_Template_app_table_sunheader_file_export_1_listener() {
            return ctx.exportFile();
          })("exportTemplate", function ClientComponent_Template_app_table_sunheader_file_exportTemplate_1_listener() {
            return ctx.exportFileTemplate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-table-filter");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "table", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ClientComponent_ng_container_5_Template, 3, 3, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ClientComponent_tr_6_Template, 1, 0, "tr", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ClientComponent_tr_7_Template, 1, 0, "tr", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-paginator", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("startChange", function ClientComponent_Template_app_paginator_startChange_8_listener($event) {
            return ctx.onStartChange($event);
          })("countChange", function ClientComponent_Template_app_paginator_countChange_8_listener($event) {
            return ctx.onCountChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("titles", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c1))("importMetods", ctx.importMetods);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.isResizeColumnMode ? "resize" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](ctx.isTableFixedWidth ? "width:100%;max-width:100%" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.rows);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.columnsData);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.column);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.column);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("total", ctx.total)("count", ctx.count)("start", ctx.start)("limits", ctx.limits);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchDefault, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__.PaginatorComponent, _filter_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_5__.TableFilterComponent, _table_subheader_file_subheader_file_subheader_component__WEBPACK_IMPORTED_MODULE_6__.TableSubheaderFileComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 84630:
/*!*****************************************************************!*\
  !*** ./src/app/pages/components/services/services.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesComponent: () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);



function ServicesComponent_label_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesComponent_label_3_Template_label_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const kind_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggle(kind_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 3)(2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const kind_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "service-kind-", kind_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "service-kind-", kind_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.isChecked(kind_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](kind_r1.name);
  }
}
class ServicesComponent {
  constructor() {
    this.services = [];
    this.kinds = new Set();
    this.isDisabled = false;
    this.touched = false;
    this.onChange = value => {};
    this.onTouched = () => {};
  }
  ngOnInit() {}
  writeValue(kinds) {
    this.kinds = new Set(kinds);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.isDisabled = isDisabled;
  }
  isChecked(n) {
    return this.kinds.has(n);
  }
  toggle(n) {
    if (this.kinds.has(n)) {
      this.kinds.delete(n);
    } else {
      this.kinds.add(n);
    }
    const value = Array.from(this.kinds.values());
    this.onChange(value);
  }
  static {
    this.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      inputs: {
        services: "services"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: ServicesComponent
      }])],
      decls: 4,
      vars: 1,
      consts: [[1, "form-item-layout", "sep"], [3, "for", "click", 4, "ngFor", "ngForOf"], [3, "for", "click"], ["type", "checkbox", 3, "checked", "name"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u0438\u0434\u044B \u0443\u0441\u043B\u0443\u0433:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServicesComponent_label_3_Template, 5, 4, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 20562:
/*!***********************************************************!*\
  !*** ./src/app/pages/modules/customer/customer.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerModule: () => (/* binding */ CustomerModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _components_client_editor_client_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/client-editor/client-editor.component */ 29548);
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/client/client.component */ 97616);
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/services/services.component */ 84630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);







const routes = [{
  path: '',
  component: _components_client_client_component__WEBPACK_IMPORTED_MODULE_2__.ClientComponent,
  title: 'Клиенты'
}, {
  path: 'add',
  component: _components_client_editor_client_editor_component__WEBPACK_IMPORTED_MODULE_1__.ClientEditorComponent,
  title: 'Добавление клиента'
}, {
  path: 'edit/:id',
  component: _components_client_editor_client_editor_component__WEBPACK_IMPORTED_MODULE_1__.ClientEditorComponent,
  title: 'Редактирование клиента'
}];
class CustomerModule {
  static {
    this.ɵfac = function CustomerModule_Factory(t) {
      return new (t || CustomerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: CustomerModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CustomerModule, {
    declarations: [_components_client_client_component__WEBPACK_IMPORTED_MODULE_2__.ClientComponent, _components_client_editor_client_editor_component__WEBPACK_IMPORTED_MODULE_1__.ClientEditorComponent, _components_services_services_component__WEBPACK_IMPORTED_MODULE_3__.ServicesComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 84854:
/*!************************************************!*\
  !*** ./src/app/pages/services/city.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CityService: () => (/* binding */ CityService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _api_services_direction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/services/direction.service */ 90518);



class CityService {
  static {
    this.citiesKey = 'com.cargodrom.cities';
  }
  constructor(directionService) {
    this.directionService = directionService;
  }
  getCities(countryId) {
    return this.directionService.directionCity({
      country_id: countryId
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.startWith)(this.loadCitiesFromLocalStorage(countryId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(cities => cities ? cities : []), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(cities => this.saveCitiesToLocalStorage(countryId, cities)));
  }
  saveCitiesToLocalStorage(countryId, cities) {
    const key = this.makeLocalStorageKey(countryId);
    window.localStorage.setItem(key, JSON.stringify(cities));
  }
  loadCitiesFromLocalStorage(countryId) {
    const key = this.makeLocalStorageKey(countryId);
    const text = window.localStorage.getItem(key);
    let cities = [];
    if (!text) {
      return [];
    }
    try {
      cities = JSON.parse(text);
    } catch (e) {
      cities = [];
    }
    return cities;
  }
  makeLocalStorageKey(countryId) {
    return `${CityService.citiesKey}.${countryId}`;
  }
  static {
    this.ɵfac = function CityService_Factory(t) {
      return new (t || CityService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_services_direction_service__WEBPACK_IMPORTED_MODULE_0__.DirectionService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: CityService,
      factory: CityService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 98533:
/*!***************************************************!*\
  !*** ./src/app/pages/services/country.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryService: () => (/* binding */ CountryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _api_services_direction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../api/services/direction.service */ 90518);



class CountryService {
  static {
    this.countriesKey = 'com.cargodrom.countries';
  }
  constructor(directionService) {
    this.directionService = directionService;
  }
  getCountries() {
    return this.directionService.directionCountry().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.startWith)(this.loadCountriesFromLocalStorage()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(countries => this.saveCountriesToLocalStorage(countries)));
  }
  saveCountriesToLocalStorage(countries) {
    window.localStorage.setItem(CountryService.countriesKey, JSON.stringify(countries));
  }
  loadCountriesFromLocalStorage() {
    const text = window.localStorage.getItem(CountryService.countriesKey);
    let countries = [];
    if (!text) {
      return [];
    }
    try {
      countries = JSON.parse(text);
    } catch (e) {
      countries = [];
    }
    return countries;
  }
  static {
    this.ɵfac = function CountryService_Factory(t) {
      return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_services_direction_service__WEBPACK_IMPORTED_MODULE_0__.DirectionService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: CountryService,
      factory: CountryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modules_customer_customer_module_ts.js.map