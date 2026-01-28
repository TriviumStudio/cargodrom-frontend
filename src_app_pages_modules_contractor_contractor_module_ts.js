"use strict";
(self["webpackChunkcargodrom_frontend"] = self["webpackChunkcargodrom_frontend"] || []).push([["src_app_pages_modules_contractor_contractor_module_ts"],{

/***/ 49153:
/*!************************************************!*\
  !*** ./src/app/api/custom_models/transport.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransportSubKinds: () => (/* binding */ TransportSubKinds)
/* harmony export */ });
const TransportSubKinds = ['avia_lcl', 'avia_fcl', 'road_lcl', 'road_fcl', 'road_adr', 'road_ref', 'sea_teus', 'sea_lcl', 'sea_sp', 'rw_teus', 'rw_lcl', 'rw_sp'];

/***/ }),

/***/ 30734:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/components/contact-editor/contact-editor.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactEditorComponent: () => (/* binding */ ContactEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants */ 51360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/focus-first-invalid.directive */ 87683);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material/directives/phone-mask.directive */ 23541);
/* harmony import */ var _responsibility_responsibility_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../responsibility/responsibility.component */ 49718);











function ContactEditorComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function ContactEditorComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function ContactEditorComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function ContactEditorComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function ContactEditorComponent_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function ContactEditorComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function ContactEditorComponent_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function ContactEditorComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function ContactEditorComponent_ng_container_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function ContactEditorComponent_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function ContactEditorComponent_ng_template_75_mat_error_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ContactEditorComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ContactEditorComponent_ng_template_75_mat_error_0_Template, 2, 0, "mat-error", 26);
  }
  if (rf & 2) {
    const field_r14 = ctx.field;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r11.contactForm.controls[field_r14].hasError("required") && ctx_r11.contactForm.controls[field_r14].touched);
  }
}
function ContactEditorComponent_ng_template_77_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ContactEditorComponent_ng_template_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ContactEditorComponent_ng_template_77_span_0_Template, 2, 0, "span", 27);
  }
  if (rf & 2) {
    const field_r16 = ctx.field;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.isRequiredField(field_r16));
  }
}
const _c0 = function () {
  return {
    field: "name"
  };
};
const _c1 = function () {
  return {
    field: "position"
  };
};
const _c2 = function () {
  return {
    field: "place"
  };
};
const _c3 = function () {
  return {
    field: "phone"
  };
};
const _c4 = function () {
  return {
    field: "mobile_phone"
  };
};
const _c5 = function () {
  return {
    field: "email"
  };
};
const _c6 = function () {
  return {
    field: "skype"
  };
};
const _c7 = function () {
  return {
    field: "telegram"
  };
};
const _c8 = function () {
  return {
    field: "whatsapp"
  };
};
const _c9 = function () {
  return {
    field: "wechat"
  };
};
const _c10 = function (a0) {
  return {
    "display": a0
  };
};
class ContactEditorComponent {
  constructor(fb) {
    this.fb = fb;
    this.countries = [];
    this.requiredFields = [];
    this.requiredDirection = false;
    this.unknownCountry = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__.unknownCountry;
    this.homeCountry = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__.unknownCountry;
    this.showResponsibilities = false;
    this.onChange = value => {};
    this.onTouched = () => {};
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.touched = false;
    this.contactForm = this.fb.group({
      id: [],
      contractor_id: [],
      name: [''],
      // name_f: ['', [Validators.required]],
      // name_i: ['', [Validators.required]],
      // name_o: ['', [Validators.required]],
      position: [''],
      phone: [''],
      mobile_phone: ['', []],
      email: [''],
      skype: ['', []],
      whatsapp: ['', []],
      telegram: ['', []],
      wechat: ['', []],
      // responsible_direction: [{}],
      place: [''],
      // responsible_param: fb.group({
      //   import: [{}, []],
      //   export: [{}, []],
      //   local: [[], []],
      //   responsible_param1:[[],[]]
      // }),
      direction: [[]]
    });
  }
  writeValue(contact) {
    this.contactForm.patchValue(contact);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  ngOnInit() {
    this.contactForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(value => this.onChange(value));
    this.contactForm.statusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(() => {
      if (!this.touched) {
        this.onTouched();
        this.touched = true;
      }
    });
    this.applyRequiredValidators();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnChanges(changes) {
    if (changes['homeCountryId']) {
      if (typeof this.homeCountryId === 'number') {
        this.homeCountry = this.countries.find(country => country.id === this.homeCountryId) || src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__.unknownCountry;
      }
    }
    // Следим за изменениями requiredFields
    if (changes['requiredFields'] && !changes['requiredFields'].firstChange) {
      this.clearAllRequiredValidators();
      this.applyRequiredValidators();
    }
  }
  validate(control) {
    return control.value && this.contactForm.valid ? null : {
      contact: true
    };
  }
  clearAllRequiredValidators() {
    // Убираем валидатор required со всех полей
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      if (control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)) {
        control.clearValidators();
        control.updateValueAndValidity();
      }
    });
  }
  applyRequiredValidators() {
    // Применяем required только к указанным полям
    console.log('this.requiredFields', this.requiredFields);
    this.requiredFields?.forEach(fieldName => {
      const control = this.contactForm.get(fieldName);
      if (control) {
        control.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
        control.updateValueAndValidity();
      } else {
        console.warn(`Поле ${fieldName} не найдено в форме`);
      }
    });
    // const directionControl = this.contactForm.get('direction');
    // if(directionControl && this.requiredDirection){
    //   directionControl.setValidators([responsibilityValidator()]);
    //   directionControl.updateValueAndValidity();
    //   console.log(this.contactForm.get('direction'));
    // }
  }

  isRequiredField(field) {
    const control = this.contactForm.get(field);
    return control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required) ?? false;
  }
  static {
    this.ɵfac = function ContactEditorComponent_Factory(t) {
      return new (t || ContactEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ContactEditorComponent,
      selectors: [["app-contact-editor"]],
      inputs: {
        countries: "countries",
        homeCountryId: "homeCountryId",
        requiredFields: "requiredFields",
        requiredDirection: "requiredDirection"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: ContactEditorComponent
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALIDATORS,
        useExisting: ContactEditorComponent,
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
      decls: 79,
      vars: 38,
      consts: [[1, "form-block", 3, "formGroup"], ["type", "hidden", "formControlName", "id"], ["type", "hidden", "formControlName", "contractor_id"], [1, "form-item-layout"], [1, "form-item"], [1, "form-label"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-data"], ["type", "text", "name", "name", "formControlName", "name", "placeholder", "\u2014"], ["type", "text", "name", "position", "formControlName", "position", "placeholder", "\u2014"], ["type", "text", "name", "place", "formControlName", "place", "placeholder", "\u2014"], ["type", "text", "name", "phone", "formControlName", "phone", "placeholder", "\u2014", "appPhoneMask", ""], ["type", "text", "name", "mobile_phone", "formControlName", "mobile_phone", "placeholder", "\u2014", "appPhoneMask", ""], ["type", "text", "name", "email", "formControlName", "email", "placeholder", "\u2014", "required", ""], ["type", "text", "name", "skype", "formControlName", "skype", "placeholder", "\u2014"], ["type", "text", "name", "telegram", "formControlName", "telegram", "placeholder", "\u2014"], ["type", "text", "name", "whatsapp", "formControlName", "whatsapp", "placeholder", "\u2014"], ["type", "text", "name", "wechat", "formControlName", "wechat", "placeholder", "\u2014"], [1, "options"], [1, "lnk"], [1, "ttl"], [1, "link", "show", 3, "ngClass", "click"], [1, "lnk-data", 3, "ngStyle"], ["formControlName", "direction", 3, "countries", "requiredDirection"], ["inputError", ""], ["inputLabelReq", ""], [4, "ngIf"], ["class", "req", 4, "ngIf"], [1, "req"]],
      template: function ContactEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 1)(2, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u0424\u0418\u041E: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ContactEditorComponent_ng_container_7_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4)(11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ContactEditorComponent_ng_container_13_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 3)(17, "div", 4)(18, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u043C\u0435\u0441\u0442\u043E\u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0444\u0438\u0441\u0430: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ContactEditorComponent_ng_container_20_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 4)(24, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u043E\u0444\u0438\u0441\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ContactEditorComponent_ng_container_26_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 4)(30, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ContactEditorComponent_ng_container_32_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 4)(36, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "e-mail: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, ContactEditorComponent_ng_container_38_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 3)(42, "div", 4)(43, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "skype: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, ContactEditorComponent_ng_container_45_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 4)(49, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "telegram: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, ContactEditorComponent_ng_container_51_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 4)(55, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "whatsapp: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, ContactEditorComponent_ng_container_57_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 4)(61, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "WeChat: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, ContactEditorComponent_ng_container_63_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 18)(67, "div", 19)(68, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "\u0417\u043E\u043D\u0430 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ContactEditorComponent_Template_div_click_70_listener() {
            return ctx.showResponsibilities = !ctx.showResponsibilities;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "app-responsibility", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, ContactEditorComponent_ng_template_75_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, ContactEditorComponent_ng_template_77_Template, 1, 1, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.contactForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](27, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](28, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](30, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](31, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](32, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](33, _c7));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](34, _c8));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](35, _c9));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.showResponsibilities ? "hide" : "show");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.showResponsibilities ? "\u0421\u043A\u0440\u044B\u0442\u044C" : "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](36, _c10, ctx.showResponsibilities ? "block" : "none"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("countries", ctx.countries)("requiredDirection", ctx.requiredDirection);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_1__.FocusFirstInvalidDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_2__.PhoneMaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _responsibility_responsibility_component__WEBPACK_IMPORTED_MODULE_3__.ResponsibilityComponent],
      styles: [".options[_ngcontent-%COMP%] {\n  margin-top: 37px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9jb250YWN0LWVkaXRvci9jb250YWN0LWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uc3tcbiAgbWFyZ2luLXRvcDogMzdweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 60772:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/components/contractor-editor/contractor-editor.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContractorEditorComponent: () => (/* binding */ ContractorEditorComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_cargodrom_frontend_cargodrom_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../environments/environment */ 45312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 5342);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 52575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _api_services_contractor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../api/services/contractor.service */ 90174);
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/country.service */ 98533);
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/city.service */ 84854);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-select/ng-select */ 62223);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/focus-first-invalid.directive */ 87683);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../material/components/editor-header/editor-header.component */ 67157);
/* harmony import */ var _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../material/directives/phone-mask.directive */ 23541);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rating/rating.component */ 164);
/* harmony import */ var _contact_editor_contact_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contact-editor/contact-editor.component */ 30734);




















function ContractorEditorComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_div_89_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_div_89_ng_template_6_Template(rf, ctx) {}
function ContractorEditorComponent_div_89_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
const _c0 = function () {
  return {
    field: "carrier_id"
  };
};
function ContractorEditorComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " \u0430\u0433\u0435\u043D\u0442: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ContractorEditorComponent_div_89_ng_container_3_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 9)(5, "ng-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ContractorEditorComponent_div_89_ng_template_6_Template, 0, 0, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ContractorEditorComponent_div_89_ng_container_7_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](185);
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("closeOnSelect", false)("multiple", true)("items", ctx_r20.transportCarrier)("placeholder", (ctx_r20.contractorForm.value.carrier_id == null ? null : ctx_r20.contractorForm.value.carrier_id.length) > 0 ? "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u043E \u044D\u043B.: " + ctx_r20.contractorForm.value.carrier_id.length : "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](9, _c0));
  }
}
function ContractorEditorComponent_div_90_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_div_90_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
const _c1 = function () {
  return {
    field: "svh_id"
  };
};
function ContractorEditorComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " \u043A\u043E\u0434 \u0441\u0432\u0445: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ContractorEditorComponent_div_90_ng_container_3_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 9)(5, "ng-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ContractorEditorComponent_div_90_Template_ng_select_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r44.onSvhChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, ContractorEditorComponent_div_90_ng_container_6_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](185);
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r21.filteredDirectionPoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c1));
  }
}
function ContractorEditorComponent_ng_container_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_template_97_Template(rf, ctx) {}
function ContractorEditorComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_div_106_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_div_106_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 60)(2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const format_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", format_r51.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](format_r51.name);
  }
}
function ContractorEditorComponent_div_106_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
const _c2 = function () {
  return {
    field: "request_format_id"
  };
};
function ContractorEditorComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " \u0424\u043E\u0440\u043C\u0430\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0430: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ContractorEditorComponent_div_106_ng_container_2_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ContractorEditorComponent_div_106_label_3_Template, 5, 2, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, ContractorEditorComponent_div_106_ng_container_4_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](185);
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](183);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r27.requestFormats);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c2));
  }
}
function ContractorEditorComponent_ng_container_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_ng_container_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](0);
  }
}
function ContractorEditorComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 46)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ContractorEditorComponent_div_165_Template_span_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r55);
      const i_r53 = restoredCtx.index;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r54.removeContact(i_r53));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "app-contact-editor", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r53 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E \u2116", i_r53 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("homeCountryId", ctx_r30.contractorForm.controls["country_id"].value)("countries", ctx_r30.countries)("formControlName", i_r53)("requiredFields", ctx_r30.requiredContactFields)("requiredDirection", ctx_r30.requiredDirection);
  }
}
function ContractorEditorComponent_mat_error_171_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ContractorEditorComponent_button_178_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ContractorEditorComponent_button_178_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r56.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function ContractorEditorComponent_ng_template_182_mat_error_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ContractorEditorComponent_ng_template_182_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, ContractorEditorComponent_ng_template_182_mat_error_0_Template, 2, 0, "mat-error", 48);
  }
  if (rf & 2) {
    const field_r58 = ctx.field;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r34.contractorForm.controls[field_r58].hasError("required") && ctx_r34.contractorForm.controls[field_r58].touched);
  }
}
function ContractorEditorComponent_ng_template_184_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ContractorEditorComponent_ng_template_184_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, ContractorEditorComponent_ng_template_184_span_0_Template, 2, 0, "span", 63);
  }
  if (rf & 2) {
    const field_r60 = ctx.field;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r36.isRequiredField(field_r60));
  }
}
const _c3 = function () {
  return {
    field: "type_id"
  };
};
const _c4 = function () {
  return {
    field: "language_id"
  };
};
const _c5 = function () {
  return {
    name: "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439",
    id: "en"
  };
};
const _c6 = function () {
  return {
    name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    id: "ru"
  };
};
const _c7 = function (a0, a1) {
  return [a0, a1];
};
const _c8 = function () {
  return {
    field: "name"
  };
};
const _c9 = function () {
  return {
    field: "ind"
  };
};
const _c10 = function () {
  return {
    field: "country_id"
  };
};
const _c11 = function () {
  return {
    field: "city_id"
  };
};
const _c12 = function () {
  return {
    field: "address"
  };
};
const _c13 = function () {
  return {
    field: "phone"
  };
};
const _c14 = function () {
  return {
    field: "web"
  };
};
const _c15 = function () {
  return {
    field: "counterparty_id"
  };
};
const _c16 = function () {
  return {
    field: "association_id"
  };
};
const _c17 = function () {
  return {
    field: "tax_id"
  };
};
const _c18 = function () {
  return {
    field: "currency"
  };
};
class ContractorEditorComponent {
  // change$ = new Subject<string|undefined>();
  constructor(route, contractorService, countryService, cityService, fb, snackBar, router, location, systemService, transportService, directionService) {
    this.route = route;
    this.contractorService = contractorService;
    this.countryService = countryService;
    this.cityService = cityService;
    this.fb = fb;
    this.snackBar = snackBar;
    this.router = router;
    this.location = location;
    this.systemService = systemService;
    this.transportService = transportService;
    this.directionService = directionService;
    this.carrierFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl();
    this.isNavigateAfterSave = true;
    this.contractor = {};
    this.isEditMode = false;
    this.associations = [];
    this.contractorTypes = [];
    this.filteredContractorTypes = [];
    this.transportCarrier = [];
    this.filteredTransportCarrier = [];
    this.countries = [];
    this.filteredCountries = [];
    this.cities = [];
    this.filteredCitys = [];
    this.directionPoint = [];
    this.filteredDirectionPoint = [];
    this.counterpartys = [];
    this.filteredCounterpartys = [];
    this.snackBarWithShortDuration = {
      duration: 1000
    };
    this.snackBarWithLongDuration = {
      duration: 3000
    };
    this.requestFormats = [];
    this.production = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production;
    this.title = '';
    this.taxSystems = [];
    this.filteredTaxs = [];
    this.requiredContactFields = [];
    this.requiredDirection = false;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this.customSearchFn = (term, item) => {
      // Получаем значения из других контролов формы
      const selectedCityId = this.contractorForm?.get('city_id')?.value;
      const selectedCountryId = this.contractorForm?.get('country_id')?.value;
      // Все условия должны выполняться одновременно
      let isValid = true;
      // 1. Фильтрация по поисковому термину (name)
      if (term) {
        isValid = isValid && item.name.toLowerCase().includes(term.toLowerCase());
      }
      // 2. Фильтрация по city_id (если выбран)
      if (selectedCityId) {
        isValid = isValid && item.city_id === selectedCityId;
      }
      // 3. Фильтрация по country_id (если выбран)
      if (selectedCountryId) {
        isValid = isValid && item.country_id === selectedCountryId;
      }
      return isValid;
    };
    this.contractorForm = this.fb.group({
      id: [''],
      address: [''],
      name: [''],
      ind: [''],
      phone: [''],
      web: [''],
      rating_nps: [{
        value: 0,
        disabled: true
      }],
      user_rating_nps: [{
        value: 0,
        disabled: true
      }],
      contacts: fb.array([], []),
      association_id: [[]],
      tax_id: [undefined],
      // type_id: [undefined, [Validators.required]],
      type_id: [],
      language_id: [undefined],
      country_id: [],
      city_id: [],
      svh_id: [],
      request_format_id: [''],
      // exclude_from_trade: [false]
      allow_trade: [false],
      counterparty_id: [],
      // carrier_name:[,[]],
      carrier_id: [[], []],
      currency: [, []]
    });
    // this.change$
    // .pipe(
    //   debounceTime(1000),
    //   distinctUntilChanged(),
    // )
    // .subscribe((e) => {
    //   this.getTransportCarrier(e)
    // });
  }

  test(i, c) {
    console.log(i, c);
  }
  isRequiredField(field) {
    const control = this.contractorForm.get(field);
    return control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required) ?? false;
  }
  onSearchChange(event) {
    const searchText = event.target.value.toLowerCase();
    this.filteredTransportCarrier = this.transportCarrier.filter(carrier => carrier.full_name.toLowerCase().includes(searchText));
  }
  displayName(item) {
    return item ? item.full_name : '';
  }
  ngOnInit() {
    this.initialization_chooseModeForm();
    this.initialization_getDatas();
    // this.initialization_subscribeForm();
    this.getFormParam();
  }
  initialization_chooseModeForm() {
    const segments = this.route.snapshot.url.map(s => s.path);
    this.isEditMode = segments[0] !== 'add';
    this.title = this.isEditMode ? 'Информация о подрядчике' : 'Добавление подрядчика';
  }
  initialization_getDatas() {
    var _this = this;
    return (0,_home_runner_work_cargodrom_frontend_cargodrom_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([_this.getContractorTypes(), _this.getTransportCarrier(), _this.getCountries(), _this.getCities(), _this.getDirectionPoint(), _this.getCounterparty(), _this.getTaxSystems(), _this.getAssociations(), _this.getRequestFormats(), _this.getCurrency()]));
        // После завершения всех запросов проверяем режим редактирования
        if (_this.isEditMode) {
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(_this.getContractor()); // Преобразуем Observable в Promise
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    })();
  }
  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  // onChange(query: string|undefined) {
  //   this.change$.next(query);
  // }
  goBack() {
    this.location.back();
  }
  goToContractor(id) {
    this.router.navigate(['..', id]);
  }
  removeContact(i) {
    this.contacts.removeAt(i);
    this.contractorForm.markAsTouched();
  }
  addContact() {
    this.contacts.push(this.fb.control({
      contractor_id: this.contractor.id
    }));
    this.contractorForm.markAsTouched();
  }
  get contacts() {
    return this.contractorForm.get('contacts');
  }
  save() {
    console.log(this.contractorForm);
    if (!this.contractorForm.valid) {
      this.snackBar.open('Не все поля заполнены корректно', undefined, this.snackBarWithLongDuration);
      return;
    }
    const body = this.contractorForm.value;
    if (typeof this.contractor.id === 'number') {
      this.updateContractor(body);
    } else {
      this.createContractor(body);
    }
  }
  remove() {
    this.snackBar.open("Удаление подрядчика...", "Отменить", this.snackBarWithLongDuration).afterDismissed().subscribe(res => {
      if (!res.dismissedByAction) {
        this.removeContractor();
      }
    });
  }
  get assocAsText() {
    const ids = this.contractorForm.controls['association_id'].value || [];
    return ids.map(id => this.associations.find(a => a.id === id)?.name).join(', ');
  }
  onContractorTypeChange(e) {
    console.log(e);
    if (e?.contact_required) {
      this.contractorForm.get('type_id').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]);
    } else {
      this.contractorForm.get('type_id').setValidators([]);
      // this.contractorForm.get('type_id')!.clearValidators;
    }
  }

  onCountryChange(country) {
    if (country) {
      this.contractorForm.controls['city_id'].reset();
      this.updateFilteredCityList();
      this.updateDirectionPointList();
    }
  }
  onCityChange(city) {
    if (city) {
      this.patchCountryControl(city?.country_id);
      this.updateDirectionPointList();
    }
  }
  onSvhChange(svh) {
    console.log(svh);
    if (svh) {
      this.contractorForm.patchValue({
        country_id: svh.country_id,
        city_id: svh.city_id
      });
      this.updateFilteredCityList();
    }
  }
  updateFilteredCityList() {
    const countryId = this.contractorForm.value.country_id;
    this.filteredCitys = countryId ? this.cities.filter(item => item.country_id == countryId) : this.cities;
  }
  updateDirectionPointList() {
    const countryId = this.contractorForm.value.country_id;
    const cityId = this.contractorForm.value.city_id;
    if (cityId) {
      this.filteredDirectionPoint = this.directionPoint.filter(item => item.city_id == cityId);
    } else if (countryId) {
      this.filteredDirectionPoint = this.directionPoint.filter(item => item.country_id == countryId);
    } else {
      // this.filteredDirectionPoint=this.directionPoint;
    }
    // this.filteredDirectionPoint = countryId || cityId
    // ? this.directionPoint.filter(item =>
    //   item.country_id == countryId || countryId
    //   &&
    //   item.city_id == cityId || cityId)
    // : this.directionPoint
  }

  patchCountryControl(country_id) {
    this.contractorForm.patchValue({
      country_id: country_id
    });
  }
  onCounterpartyChange(counterparty) {
    if (counterparty.id == 12 && this.filteredDirectionPoint.length < 1) {
      this.snackBar.open(`Отсутствуют СВХ, измените место нахождения или тип подрядчика`, undefined, this.snackBarWithLongDuration);
      this.filteredDirectionPoint = this.directionPoint;
    }
  }
  canSave() {
    return this.contractorForm.valid;
  }
  updateContractor(body) {
    console.log(body);
    this.contractorService.contractorUpdate({
      body
    }).pipe().subscribe({
      next: () => {
        if (this.isNavigateAfterSave) {
          this.goBack();
        }
        this.snackBar.open(`Подрядчик сохранен`, undefined, this.snackBarWithShortDuration);
      },
      error: err => this.snackBar.open(`Ошибка сохранения подрядчика: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  createContractor(body) {
    console.log(body);
    this.contractorService.contractorCreate({
      body
    }).pipe().subscribe({
      next: ({
        id
      }) => {
        if (this.isNavigateAfterSave) {
          this.goBack();
        } else {
          this.goToContractor(id);
        }
        this.snackBar.open(`Подрядчик создан`, undefined, this.snackBarWithShortDuration);
      },
      error: err => this.snackBar.open(`Ошибка создания подрядчика: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  removeContractor() {
    const body = {
      id: this.contractor.id
    };
    this.contractorService.contractorDelete({
      body
    }).subscribe({
      next: () => {
        this.snackBar.open('Подрядчик удален', undefined, this.snackBarWithShortDuration);
        this.goBack();
      },
      error: err => this.snackBar.open(`Ошибка сохранения подрядчика: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  // onTransportCarrierChange(i:any){
  //   this.contractorForm.patchValue({
  //     carrier_id:i.id
  //   })
  // }
  getTransportCarrier() {
    return this.transportService.transportCarrier().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(transportCarrier => {
      this.transportCarrier = transportCarrier;
      this.filteredTransportCarrier = transportCarrier;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$));
  }
  getCounterparty() {
    return this.systemService.systemCounterparty().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(counterpartys => {
      this.filteredCounterpartys = counterpartys;
      this.counterpartys = counterpartys;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$));
  }
  getAssociations() {
    return this.systemService.systemAssociation().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(associations => {
      this.associations = associations;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$));
  }
  getContractorTypes() {
    return this.contractorService.contractorType().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(contractorTypes => {
      this.contractorTypes = contractorTypes;
      this.filteredContractorTypes = contractorTypes;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$));
  }
  getTaxSystems() {
    return this.systemService.systemTaxSystem().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(taxSystems => {
      this.filteredTaxs = taxSystems ? taxSystems : [];
      this.taxSystems = taxSystems ? taxSystems : [];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$));
  }
  getCountries() {
    return this.countryService.getCountries().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(countries => {
      this.filteredCountries = countries;
      this.countries = countries;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$));
  }
  getCities() {
    return this.directionService.directionCity().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(cities => {
      this.cities = cities;
      this.filteredCitys = cities;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$));
  }
  getDirectionPoint() {
    return this.directionService.directionPoint({
      transport_kind_id: 1
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(directionPoint => {
      this.directionPoint = directionPoint;
      this.filteredDirectionPoint = directionPoint;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$));
  }
  getRequestFormats() {
    return this.contractorService.contractorRequestFormat().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(formats => {
      this.requestFormats = formats;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$));
  }
  // private getCities(countryId: number) {
  //   this.cityService.getCities(countryId)
  //     .subscribe(cities => {
  //       this.filteredCitys = cities;
  //       this.cities = cities;
  //     } );
  // }
  getContractor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.contractorService.contractorInfo({
      id
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(contractor => {
      console.log('инициализация едитора', contractor);
      if (!contractor) {
        throw {
          error: {
            error_message: `Подрядчик не существует`
          }
        };
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(contractor => {
      this.contractor = contractor;
      const contactsControls = this.contacts;
      // Обновляем contractor_id для каждого контакта
      this.contractor.contacts?.forEach(contact => {
        contact.contractor_id = contractor.id;
        contactsControls.push(this.fb.control(contact));
      });
      // Патчим форму значениями подрядчика
      this.contractorForm.patchValue(this.contractor);
      // Если указан country_id, загружаем города
      // if (typeof contractor.country_id === 'number') {
      //   this.getCities(contractor.country_id);
      // }
      this.updateFilteredCityList();
      this.updateDirectionPointList();
      // Устанавливаем имя для заголовка
      this.nameForHeader = contractor.name;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(err => {
      this.snackBar.open(`Подрядчик не найден: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
      this.goBack();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.throwError)(() => err); // Пробрасываем ошибку дальше
    }));
  }

  getCurrency() {
    return this.systemService.systemCurrency().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(currencyList => {
      this.currencyList = currencyList.current;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$));
  }
  getFormParam(body) {
    this.contractorService.contractorParam({
      body: body
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(formParams => {
      this.formParams = formParams;
      console.log('getFormParam body', body);
      console.log('getFormParam formParams', formParams.required);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$)).subscribe({
      next: () => {
        this.applyRequiredValidators();
        if (!body) this.subscribeDependentFields();
      },
      error: err => this.snackBar.open(`Ошибка сохранения подрядчика: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  applyRequiredValidators() {
    console.log('valid', this.formParams, this.contractorForm);
    this.requiredContactFields = [];
    this.requiredDirection = false;
    this.formParams.required?.forEach(required_item => {
      const control = this.contractorForm.get(required_item.field);
      if (required_item.parent == 'contacts') {
        this.requiredContactFields.push(required_item.field);
      } else if (required_item.parent == 'contacts/direction') {
        this.requiredDirection = true;
      } else if (control && !required_item.parent) {
        control.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required);
        control.updateValueAndValidity();
      }
    });
  }
  subscribeDependentFields() {
    this.formParams.dependent_fields?.forEach(dependent_field => {
      this.contractorForm.get(dependent_field)?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(1500), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._destroy$)).subscribe(value => {
        const body = {
          dependent_fields: this.formParams.dependent_fields?.map(dependent_field => ({
            field: dependent_field,
            value: this.contractorForm.value[dependent_field]
          }))
        };
        // const body = this.formParams.dependent_fields?.map((dependent_field:any) => ({dependent_fields: [{field: dependent_field, value: this.contractorForm.value[dependent_field]}]}));
        this.getFormParam(body);
      });
    });
  }
  static {
    this.ɵfac = function ContractorEditorComponent_Factory(t) {
      return new (t || ContractorEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_api_services_contractor_service__WEBPACK_IMPORTED_MODULE_2__.ContractorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_country_service__WEBPACK_IMPORTED_MODULE_3__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_city_service__WEBPACK_IMPORTED_MODULE_4__.CityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_24__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_5__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_5__.TransportService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_5__.DirectionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: ContractorEditorComponent,
      selectors: [["app-contractor-editor"]],
      decls: 186,
      vars: 112,
      consts: [[3, "title", "isEditMode", "name", "backLink", "save", "remove"], ["focusFirstInvalid", "", 1, "edit-form", 3, "formGroup", "submit"], [1, "form-block"], [1, "form-row"], [1, "form-item-layout"], [1, "form-data", "form-item", "torg"], ["type", "checkbox", "formControlName", "allow_trade"], [1, "form-item"], [1, "form-label"], [1, "form-data"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["formControlName", "type_id", "bindLabel", "name", "bindValue", "id", 1, "custom", 3, "items", "change"], ["formControlName", "language_id", "bindLabel", "name", "bindValue", "id", 1, "custom", 3, "items"], ["type", "hidden", "formControlName", "id"], ["type", "text", "name", "name", "formControlName", "name", "placeholder", "\u2014"], ["type", "text", "name", "ind", "formControlName", "ind", "placeholder", "\u2014"], ["formControlName", "country_id", "bindLabel", "name", "bindValue", "id", 1, "custom", 3, "items", "change"], ["formControlName", "city_id", "bindLabel", "name", "bindValue", "id", 1, "custom", 3, "items", "change"], [1, "form-item", "w50"], ["type", "text", "name", "address", "formControlName", "address", "placeholder", "\u2014"], ["type", "text", "name", "phone", "formControlName", "phone", "placeholder", "\u2014", "appPhoneMask", ""], ["type", "text", "name", "web", "formControlName", "web", "placeholder", "\u2014"], ["formControlName", "counterparty_id", "bindLabel", "name", "bindValue", "id", 1, "custom", 3, "items", "change"], ["class", "form-item", 4, "ngIf"], ["formControlName", "association_id", "bindLabel", "name", "bindValue", "id", 1, "custom", 3, "items", "multiple", "placeholder", "closeOnSelect"], ["ng-multi-label-tmp", ""], ["formControlName", "tax_id", "bindLabel", "name", "bindValue", "id", 1, "custom", 3, "items"], ["class", "form-row sep", 4, "ngIf"], [1, "form-item", 2, "width", "100px"], ["formControlName", "currency", "bindLabel", "code", "bindValue", "id", 1, "custom", 3, "items"], [1, "form-block-title"], [1, "form-row-sm"], [1, "title"], ["name", "rating_nps", "formControlName", "rating_nps"], [1, "link"], ["href", "#"], ["name", "user_rating_nps", "formControlName", "user_rating_nps"], [1, "data", "flags"], [1, "plus"], [1, "minus"], [1, "neutral"], [1, "data"], [1, "win"], [1, "fail"], ["formArrayName", "contacts"], ["class", "user-item", 4, "ngFor", "ngForOf"], [1, "user-item"], [1, "btn", "v", "add", 3, "click"], [4, "ngIf"], [1, "hdr", "ftr"], [1, "fn"], ["type", "submit", 1, "btn", "v", "save"], ["class", "btn v del", 3, "click", 4, "ngIf"], [1, "btn", "v", "cancel", 3, "click"], ["inputError", ""], ["inputLabelReq", ""], ["formControlName", "carrier_id", "bindLabel", "full_name", "bindValue", "id", 1, "custom", 3, "closeOnSelect", "multiple", "items", "placeholder"], ["formControlName", "svh_id", "bindLabel", "name", "bindValue", "id", 1, "custom", 3, "items", "change"], [1, "form-row", "sep"], [4, "ngFor", "ngForOf"], ["type", "radio", "formControlName", "request_format_id", 3, "value"], [1, "btn", "v", "del", 3, "click"], [3, "homeCountryId", "countries", "formControlName", "requiredFields", "requiredDirection"], ["class", "req", 4, "ngIf"], [1, "req"]],
      template: function ContractorEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-editor-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("save", function ContractorEditorComponent_Template_app_editor_header_save_0_listener() {
            return ctx.save();
          })("remove", function ContractorEditorComponent_Template_app_editor_header_remove_0_listener() {
            return ctx.remove();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("submit", function ContractorEditorComponent_Template_form_submit_1_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "input", 6)(8, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A \u0442\u043E\u0440\u0433\u043E\u0432");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "div", 8)(13, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 7)(15, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, " \u0412\u0438\u0434 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, ContractorEditorComponent_ng_container_17_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 9)(19, "ng-select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ContractorEditorComponent_Template_ng_select_change_19_listener($event) {
            return ctx.onContractorTypeChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, ContractorEditorComponent_ng_container_20_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 7)(22, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, " \u044F\u0437\u044B\u043A \u043E\u0431\u0449\u0435\u043D\u0438\u044F: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, ContractorEditorComponent_ng_container_24_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "ng-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, ContractorEditorComponent_ng_container_27_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 4)(31, "div", 7)(32, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, " \u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, ContractorEditorComponent_ng_container_34_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](36, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](37, ContractorEditorComponent_ng_container_37_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 7)(39, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, " \u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 (\u0418\u041D\u041D, Rec \u2116 \u0438 \u043F\u0440.): ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, ContractorEditorComponent_ng_container_41_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](43, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, ContractorEditorComponent_ng_container_44_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "div", 7)(46, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, " \u0421\u0442\u0440\u0430\u043D\u0430 \u043D\u0430\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](48, ContractorEditorComponent_ng_container_48_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "div", 9)(50, "ng-select", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ContractorEditorComponent_Template_ng_select_change_50_listener($event) {
            return ctx.onCountryChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](51, ContractorEditorComponent_ng_container_51_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 7)(53, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, " \u0433\u043E\u0440\u043E\u0434: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, ContractorEditorComponent_ng_container_55_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "div", 9)(57, "ng-select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ContractorEditorComponent_Template_ng_select_change_57_listener($event) {
            return ctx.onCityChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](58, ContractorEditorComponent_ng_container_58_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 4)(60, "div", 18)(61, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, " \u0430\u0434\u0440\u0435\u0441: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](63, ContractorEditorComponent_ng_container_63_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](65, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, ContractorEditorComponent_ng_container_66_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "div", 7)(68, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69, " \u043E\u0431\u0449\u0438\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](70, ContractorEditorComponent_ng_container_70_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](72, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](73, ContractorEditorComponent_ng_container_73_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "div", 7)(75, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76, " \u0441\u0430\u0439\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](77, ContractorEditorComponent_ng_container_77_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](79, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](80, ContractorEditorComponent_ng_container_80_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "div", 4)(82, "div", 7)(83, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84, " \u0422\u0438\u043F \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](85, ContractorEditorComponent_ng_container_85_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "div", 9)(87, "ng-select", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ContractorEditorComponent_Template_ng_select_change_87_listener($event) {
            return ctx.onCounterpartyChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](88, ContractorEditorComponent_ng_container_88_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](89, ContractorEditorComponent_div_89_Template, 8, 10, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](90, ContractorEditorComponent_div_90_Template, 7, 7, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div", 7)(92, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](93, " \u0447\u043B\u0435\u043D\u0441\u0442\u0432\u043E \u0432 \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u044F\u0445: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, ContractorEditorComponent_ng_container_94_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "div", 9)(96, "ng-select", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](97, ContractorEditorComponent_ng_template_97_Template, 0, 0, "ng-template", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](98, ContractorEditorComponent_ng_container_98_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "div", 7)(100, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101, " \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0430\u043B\u043E\u0433\u043E\u043E\u0431\u043B\u043E\u0436\u0435\u043D\u0438\u044F: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](102, ContractorEditorComponent_ng_container_102_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](104, "ng-select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](105, ContractorEditorComponent_ng_container_105_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](106, ContractorEditorComponent_div_106_Template, 5, 7, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "div", 3)(108, "div", 28)(109, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](110, " \u0412\u0430\u043B\u044E\u0442\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0432\u043E\u043A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](111, ContractorEditorComponent_ng_container_111_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](113, "ng-select", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](114, ContractorEditorComponent_ng_container_114_Template, 1, 0, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](116, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "div", 2)(118, "div", 31)(119, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](120, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435:");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](121, "app-rating", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "div", 34)(123, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](124, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](125, "div", 31)(126, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](127, "\u041C\u043E\u044F \u043E\u0446\u0435\u043D\u043A\u0430 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](128, "app-rating", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](129, "div", 34)(130, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](131, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "div", 31)(133, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](134, "\u041E\u0442\u0437\u044B\u0432\u044B \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u043E\u043C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "div", 37)(136, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](137);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](139);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](141);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "div", 34)(143, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](144, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](145, "div", 31)(146, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](147, "\u0412\u0441\u0435\u0433\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043E\u043A:");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](148, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](149);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "div", 34)(151, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](152, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "div", 31)(154, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](155, " % \u0432\u044B\u0438\u0433\u0440\u0430\u043D\u043D\u044B\u0445 \u0442\u043E\u0440\u0433\u043E\u0432:");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "div", 37)(157, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](158);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](159, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](160);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](161, "div", 34)(162, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](163, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](164, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](165, ContractorEditorComponent_div_165_Template, 6, 6, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "div", 46)(167, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](168);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](169, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ContractorEditorComponent_Template_span_click_169_listener() {
            return ctx.addContact();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](170, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](171, ContractorEditorComponent_mat_error_171_Template, 2, 0, "mat-error", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](173, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "div", 50)(175, "button", 51)(176, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](177, "\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](178, ContractorEditorComponent_button_178_Template, 3, 0, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](179, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ContractorEditorComponent_Template_button_click_179_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](180, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](181, "\u043E\u0442\u043C\u0435\u043D\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](182, ContractorEditorComponent_ng_template_182_Template, 1, 1, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](184, ContractorEditorComponent_ng_template_184_Template, 1, 1, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](183);
          const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](185);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", ctx.title)("isEditMode", ctx.isEditMode)("name", ctx.nameForHeader)("backLink", "contractor");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.contractorForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](81, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.contractorTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](82, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](83, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](86, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](84, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](85, _c6)));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](89, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](90, _c8));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](91, _c8));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](92, _c9));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](93, _c9));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](94, _c10));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.countries);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](95, _c10));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](96, _c11));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.filteredCitys);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](97, _c11));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](98, _c12));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](99, _c12));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](100, _c13));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](101, _c13));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](102, _c14));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](103, _c14));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](104, _c15));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.counterpartys);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](105, _c15));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.contractorForm.value.counterparty_id != 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.contractorForm.value.counterparty_id == 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](106, _c16));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.associations)("multiple", true)("placeholder", (ctx.contractorForm.value.association_id == null ? null : ctx.contractorForm.value.association_id.length) > 0 ? "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u043E \u044D\u043B.: " + ctx.contractorForm.value.association_id.length : "\u2014")("closeOnSelect", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](107, _c16));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](108, _c17));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.taxSystems);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](109, _c17));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.contractorForm.value.allow_trade);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r35)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](110, _c18));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.currencyList);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r33)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](111, _c18));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.contractor.review_positive_count);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.contractor.review_negative_count);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.contractor.review_neutral_count);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.contractor.order_count);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.contractor.trade_success_count);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.contractor.trade_fail_count);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.contacts.controls);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E \u2116", ctx.contacts.length + 1, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.contacts.errors == null ? null : ctx.contacts.errors["required"]) && (ctx.contractorForm.touched || ctx.contractorForm.dirty));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isEditMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgTemplateOutlet, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__.NgMultiLabelTemplateDirective, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_6__.FocusFirstInvalidDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatError, _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_7__.EditorHeaderComponent, _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_8__.PhoneMaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormArrayName, _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__.RatingComponent, _contact_editor_contact_editor_component__WEBPACK_IMPORTED_MODULE_10__.ContactEditorComponent],
      styles: [".edit-form .torg {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\nng-select.ng-select-container {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9jb250cmFjdG9yLWVkaXRvci9jb250cmFjdG9yLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWZvcm0gLnRvcmd7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbm5nLXNlbGVjdC5uZy1zZWxlY3QtY29udGFpbmVye1xuICBoZWlnaHQ6IDQwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 164:
/*!*************************************************************!*\
  !*** ./src/app/pages/components/rating/rating.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingComponent: () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);



const _c0 = function (a0) {
  return {
    "sel": a0
  };
};
function RatingComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingComponent_span_3_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.setScore(i_r2 + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const star_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, star_r1));
  }
}
const _c1 = function (a0) {
  return {
    "disabled": a0
  };
};
class RatingComponent {
  constructor() {
    this.total = 10;
    this.units = 'NPS';
    this.score = 0;
    this.stars = new Array(this.total).fill(false);
    this.isDisabled = false;
    this.touched = false;
    this.onChange = value => {};
    this.onTouched = () => {};
  }
  ngOnInit() {}
  writeValue(score) {
    this.score = +score;
    this.fillStars();
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
  getAsText() {
    return `${this.score}/${this.total} ${this.units}`;
  }
  setScore(score) {
    if (this.isDisabled) {
      return;
    }
    this.score = score;
    this.fillStars();
    this.onChange(this.score);
    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
  }
  fillStars() {
    for (let i = 0; i < this.total; i++) {
      this.stars[i] = i < this.score;
    }
  }
  static {
    this.ɵfac = function RatingComponent_Factory(t) {
      return new (t || RatingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RatingComponent,
      selectors: [["app-rating"]],
      inputs: {
        total: "total",
        units: "units"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: RatingComponent
      }])],
      decls: 4,
      vars: 7,
      consts: [[1, "data"], [1, "stars", 3, "ngClass"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]],
      template: function RatingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RatingComponent_span_3_Template, 1, 3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.score, "/", ctx.total, " ", ctx.units, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isDisabled));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stars);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
      styles: ["[_nghost-%COMP%] {\n  flex-grow: 1;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.stars[_ngcontent-%COMP%]:not(.disabled)    > span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleC1ncm93OiAxO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnN0YXJzOm5vdCguZGlzYWJsZWQpID4gc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4399:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/components/responsibility-matrix/responsibility-matrix.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsibilityMatrixComponent: () => (/* binding */ ResponsibilityMatrixComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_api_custom_models_transport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/custom_models/transport */ 49153);
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants */ 51360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);










function ResponsibilityMatrixComponent_table_0_div_4_ng_template_3_Template(rf, ctx) {}
function ResponsibilityMatrixComponent_table_0_div_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\u0432 \u043E\u0434\u043D\u0443 \u0441\u0442\u0440\u0430\u043D\u0443");
  }
}
function ResponsibilityMatrixComponent_table_0_div_4_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\u0432 \u0434\u0432\u0435 \u0441\u0442\u0440\u0430\u043D\u044B");
  }
}
function ResponsibilityMatrixComponent_table_0_div_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0432 ", ctx_r10.targetCountries.length, " \u0441\u0442\u0440\u0430\u043D\u044B");
  }
}
function ResponsibilityMatrixComponent_table_0_div_4_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0432 ", ctx_r11.targetCountries.length, " \u0441\u0442\u0440\u0430\u043D");
  }
}
function ResponsibilityMatrixComponent_table_0_div_4_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0432 ", ctx_r12.targetCountries.length, " \u0441\u0442\u0440\u0430\u043D");
  }
}
function ResponsibilityMatrixComponent_table_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ResponsibilityMatrixComponent_table_0_div_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ResponsibilityMatrixComponent_table_0_div_4_ng_template_4_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ResponsibilityMatrixComponent_table_0_div_4_ng_template_5_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ResponsibilityMatrixComponent_table_0_div_4_ng_template_6_Template, 1, 1, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ResponsibilityMatrixComponent_table_0_div_4_ng_template_7_Template, 1, 1, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ResponsibilityMatrixComponent_table_0_div_4_ng_template_8_Template, 1, 1, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u0437 ", ctx_r1.homeCountry.name_from, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngPlural", ctx_r1.targetCountries.length);
  }
}
function ResponsibilityMatrixComponent_table_0_div_5_ng_template_3_Template(rf, ctx) {}
function ResponsibilityMatrixComponent_table_0_div_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\u0438\u0437 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u044B");
  }
}
function ResponsibilityMatrixComponent_table_0_div_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\u0438\u0437 \u0434\u0432\u0443\u0445 \u0441\u0442\u0440\u0430\u043D");
  }
}
function ResponsibilityMatrixComponent_table_0_div_5_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0438\u0437 ", ctx_r16.targetCountries.length, " \u0441\u0442\u0440\u0430\u043D");
  }
}
function ResponsibilityMatrixComponent_table_0_div_5_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0438\u0437 ", ctx_r17.targetCountries.length, " \u0441\u0442\u0440\u0430\u043D");
  }
}
function ResponsibilityMatrixComponent_table_0_div_5_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0438\u0437 ", ctx_r18.targetCountries.length, " \u0441\u0442\u0440\u0430\u043D");
  }
}
function ResponsibilityMatrixComponent_table_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ResponsibilityMatrixComponent_table_0_div_5_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ResponsibilityMatrixComponent_table_0_div_5_ng_template_4_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ResponsibilityMatrixComponent_table_0_div_5_ng_template_5_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ResponsibilityMatrixComponent_table_0_div_5_ng_template_6_Template, 1, 1, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ResponsibilityMatrixComponent_table_0_div_5_ng_template_7_Template, 1, 1, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ResponsibilityMatrixComponent_table_0_div_5_ng_template_8_Template, 1, 1, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 ", ctx_r2.homeCountry.name_to, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngPlural", ctx_r2.targetCountries.length);
  }
}
function ResponsibilityMatrixComponent_table_0_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", country_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", country_r19.name, " ");
  }
}
function ResponsibilityMatrixComponent_table_0_th_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 21)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label")(6, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityMatrixComponent_table_0_th_16_Template_mat_checkbox_change_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const kind_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.allChangeForKind(kind_r20.kind, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const kind_r20 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", kind_r20.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", kind_r20.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](kind_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r5.allCheckedForKind(kind_r20.kind))("indeterminate", !ctx_r5.allCompleteForKind(kind_r20.kind));
  }
}
function ResponsibilityMatrixComponent_table_0_tr_17_td_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "label")(2, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityMatrixComponent_table_0_tr_17_td_10_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const kind_r26 = restoredCtx.$implicit;
      const country_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.changeForCountryAndKind(country_r23.id, kind_r26.kind, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const kind_r26 = ctx.$implicit;
    const country_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", kind_r26.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r25.checkedForCountryAndKind(country_r23.id, kind_r26.kind));
  }
}
function ResponsibilityMatrixComponent_table_0_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 23)(1, "td", 2)(2, "div")(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResponsibilityMatrixComponent_table_0_tr_17_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);
      const country_r23 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.removeCountry(country_r23.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 25)(7, "label")(8, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityMatrixComponent_table_0_tr_17_Template_mat_checkbox_change_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);
      const country_r23 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.allChangeForCountry(country_r23.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ResponsibilityMatrixComponent_table_0_tr_17_td_10_Template, 4, 2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r23 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r6.allCheckedForCountry(country_r23.id))("indeterminate", !ctx_r6.allCompleteForCountry(country_r23.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.kinds);
  }
}
function ResponsibilityMatrixComponent_table_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 1)(1, "tbody")(2, "tr")(3, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ResponsibilityMatrixComponent_table_0_div_4_Template, 10, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ResponsibilityMatrixComponent_table_0_div_5_Template, 10, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ResponsibilityMatrixComponent_table_0_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.country = $event);
    })("ngModelChange", function ResponsibilityMatrixComponent_table_0_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.doFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-autocomplete", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("optionSelected", function ResponsibilityMatrixComponent_table_0_Template_mat_autocomplete_optionSelected_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.addCountry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ResponsibilityMatrixComponent_table_0_mat_option_9_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 8)(11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0412\u0441\u0435 \u0432\u0438\u0434\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label")(14, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityMatrixComponent_table_0_Template_mat_checkbox_change_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r38.allChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ResponsibilityMatrixComponent_table_0_th_16_Template, 8, 5, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ResponsibilityMatrixComponent_table_0_tr_17_Template, 11, 4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.type === "export");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.type === "import");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.country)("matAutocomplete", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx_r0.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.filteredCountries);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.allChecked())("indeterminate", !ctx_r0.allComplete());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.kinds);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.targetCountries);
  }
}
class ResponsibilityMatrixComponent {
  constructor() {
    this.countries = [];
    this.homeCountry = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__.unknownCountry;
    this.type = 'export';
    this.onChange = value => {};
    this.onTouched = () => {};
    this.filteredCountries = [];
    this.kinds = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_1__.transportSubKindTable;
    this.responsibilities = {};
    this.targetCountries = [];
    this.disabled = false;
  }
  ngOnChanges(changes) {
    const homeCountryChange = changes['homeCountry'];
    if (homeCountryChange) {
      if (this.homeCountry) {
        const homeCountryId = this.homeCountry.id;
        delete this.responsibilities[homeCountryId];
        this.targetCountries = this.targetCountries.filter(({
          id
        }) => id !== homeCountryId);
      }
    }
  }
  writeValue(responsibilityParam) {
    this.responsibilities = responsibilityParam || {};
    this.targetCountries = Object.keys(this.responsibilities).filter(countryId => Number(countryId) !== this.homeCountry.id).map(countryId => this.getCountryById(countryId)).sort(byName);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  doFilter(country) {
    this.filteredCountries = this.countries.filter(c => {
      const value = typeof country === 'string' ? country : country.name;
      return c.name.toLowerCase().includes(value.toLowerCase()) && !(c.id in this.responsibilities && c.id === this.homeCountry.id);
    });
  }
  displayFn(country) {
    return country && country.name ? country.name : '';
  }
  addCountry() {
    this.targetCountries.push(this.country);
    console.log(this.targetCountries);
    this.targetCountries.sort(byName);
    this.responsibilities[this.country.id] = [];
    this.country = undefined;
    this.valueChanged();
  }
  getCountryById(id) {
    return this.countries.find(country => country.id === Number(id));
  }
  removeCountry(countryId) {
    const index = this.targetCountries.findIndex(({
      id
    }) => id === Number(countryId));
    if (index >= 0) {
      this.targetCountries.splice(index, 1);
    }
    delete this.responsibilities[countryId];
    this.valueChanged();
  }
  allChecked() {
    const countChecked = this.getCountChecked();
    return this.targetCountries.length > 0 && countChecked === this.targetCountries.length * src_app_api_custom_models_transport__WEBPACK_IMPORTED_MODULE_0__.TransportSubKinds.length;
  }
  allComplete() {
    const countChecked = this.getCountChecked();
    return countChecked === 0 || countChecked === this.targetCountries.length * src_app_api_custom_models_transport__WEBPACK_IMPORTED_MODULE_0__.TransportSubKinds.length;
  }
  getCountChecked() {
    return this.targetCountries.map(({
      id
    }) => this.responsibilities[id].length).reduce((sum, count) => sum + count, 0);
  }
  allChange({
    checked
  }) {
    this.targetCountries.forEach(({
      id
    }) => this.responsibilities[id] = checked ? [...src_app_api_custom_models_transport__WEBPACK_IMPORTED_MODULE_0__.TransportSubKinds] : []);
    this.valueChanged();
  }
  allCheckedForKind(kind) {
    return this.targetCountries.length > 0 && this.getCheckedForKind(kind) === this.targetCountries.length;
  }
  allCompleteForKind(kind) {
    const checked = this.getCheckedForKind(kind);
    return checked === 0 || checked === this.targetCountries.length;
  }
  getCheckedForKind(kind) {
    return this.targetCountries.map(({
      id
    }) => this.responsibilities[id].includes(kind)).reduce((sum, checked) => checked ? sum + 1 : sum, 0);
  }
  allChangeForKind(kind, {
    checked
  }) {
    this.targetCountries.forEach(({
      id
    }) => {
      const kinds = this.responsibilities[id];
      if (checked) {
        if (!kinds.includes(kind)) {
          kinds.push(kind);
        }
      } else {
        this.responsibilities[id] = kinds.filter(aKind => aKind !== kind);
      }
    });
    this.valueChanged();
  }
  allCheckedForCountry(countryId) {
    const kinds = this.responsibilities[countryId];
    return kinds.length === src_app_api_custom_models_transport__WEBPACK_IMPORTED_MODULE_0__.TransportSubKinds.length;
  }
  allCompleteForCountry(countryId) {
    const kinds = this.responsibilities[countryId];
    return kinds.length === src_app_api_custom_models_transport__WEBPACK_IMPORTED_MODULE_0__.TransportSubKinds.length || kinds.length === 0;
  }
  allChangeForCountry(countryId, {
    checked
  }) {
    if (checked) {
      this.responsibilities[countryId] = [...src_app_api_custom_models_transport__WEBPACK_IMPORTED_MODULE_0__.TransportSubKinds];
    } else {
      this.responsibilities[countryId] = [];
    }
    this.valueChanged();
  }
  checkedForCountryAndKind(countryId, kind) {
    const kinds = this.responsibilities[countryId];
    return kinds.includes(kind);
  }
  changeForCountryAndKind(countryId, kind, {
    checked
  }) {
    const kinds = this.responsibilities[countryId];
    if (checked) {
      kinds.push(kind);
    } else {
      this.responsibilities[countryId] = kinds.filter(aKind => kind !== aKind);
    }
    this.valueChanged();
  }
  valueChanged() {
    const value = {
      ...this.responsibilities
    };
    delete value[this.homeCountry.id];
    this.onChange(value);
    this.onTouched();
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  static {
    this.ɵfac = function ResponsibilityMatrixComponent_Factory(t) {
      return new (t || ResponsibilityMatrixComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ResponsibilityMatrixComponent,
      selectors: [["app-responsibility-matrix"]],
      inputs: {
        countries: "countries",
        homeCountry: "homeCountry",
        type: "type"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: ResponsibilityMatrixComponent
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "t1", 4, "ngIf"], [1, "t1"], [1, "name"], [4, "ngIf"], ["type", "text", "placeholder", "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0443 \u0438\u043B\u0438 \u0440\u0435\u0433\u0438\u043E\u043D...", "matInput", "", 3, "ngModel", "matAutocomplete", "ngModelChange"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "all", "bg", "s", "e"], [1, "l"], [1, "show-all", 3, "checked", "indeterminate", "change"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngFor", "ngForOf"], [3, "ngPlural"], ["ngPluralCase", "=0"], ["ngPluralCase", "=1"], ["ngPluralCase", "=2"], ["ngPluralCase", "few"], ["ngPluralCase", "many"], ["ngPluralCase", "other"], [3, "value"], [3, "ngClass"], [1, "ico", 3, "ngClass"], [1, "row"], [1, "del", 3, "click"], [1, "bg", "s", "e"], [1, "show-all", 3, "checked", "change"]],
      template: function ResponsibilityMatrixComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ResponsibilityMatrixComponent_table_0_Template, 18, 10, "table", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.disabled);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgPlural, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgPluralCase, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteTrigger, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}
const byName = (a, b) => a.name.localeCompare(b.name);

/***/ }),

/***/ 93540:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/components/responsibility-row/responsibility-row.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsibilityRowComponent: () => (/* binding */ ResponsibilityRowComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants */ 51360);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_api_custom_models_transport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/custom_models/transport */ 49153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);






function ResponsibilityRowComponent_table_0_th_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 7)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label")(6, "mat-checkbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityRowComponent_table_0_th_12_Template_mat_checkbox_change_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const kind_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onKindChange(kind_r2.kind, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const kind_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", kind_r2.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", kind_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](kind_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.isKindChecked(kind_r2.kind));
  }
}
function ResponsibilityRowComponent_table_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 1)(1, "tbody")(2, "tr")(3, "th", 2)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 3)(7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0412\u0441\u0435 \u0432\u0438\u0434\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label")(10, "mat-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityRowComponent_table_0_Template_mat_checkbox_change_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onAllChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ResponsibilityRowComponent_table_0_th_12_Template, 8, 4, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438 \u0432\u043D\u0443\u0442\u0440\u0438 ", ctx_r0.homeCountry.name_from, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.allChecked())("indeterminate", !ctx_r0.allComplete());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.kinds);
  }
}
class ResponsibilityRowComponent {
  constructor() {
    this.homeCountry = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__.unknownCountry;
    this.onChange = value => {};
    this.onTouched = () => {};
    this.kinds = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__.transportSubKindTable;
    this.local = [];
    this.disabled = false;
  }
  writeValue(local) {
    this.local = local || [];
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  allChecked() {
    return this.local.length === src_app_api_custom_models_transport__WEBPACK_IMPORTED_MODULE_1__.TransportSubKinds.length;
  }
  allComplete() {
    const kinds = this.local;
    return kinds.length === src_app_api_custom_models_transport__WEBPACK_IMPORTED_MODULE_1__.TransportSubKinds.length || kinds.length === 0;
  }
  onAllChange({
    checked
  }) {
    if (checked) {
      this.local = [...src_app_api_custom_models_transport__WEBPACK_IMPORTED_MODULE_1__.TransportSubKinds];
    } else {
      this.local = [];
    }
    this.valueChanged();
  }
  isKindChecked(kind) {
    const kinds = this.local;
    return kinds.includes(kind);
  }
  onKindChange(kind, {
    checked
  }) {
    const kinds = this.local;
    if (checked) {
      kinds.push(kind);
    } else {
      this.local = kinds.filter(aKind => kind !== aKind);
    }
    this.valueChanged();
  }
  valueChanged() {
    this.onChange(this.local);
    this.onTouched();
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  static {
    this.ɵfac = function ResponsibilityRowComponent_Factory(t) {
      return new (t || ResponsibilityRowComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ResponsibilityRowComponent,
      selectors: [["app-responsibility-row"]],
      inputs: {
        homeCountry: "homeCountry"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: ResponsibilityRowComponent
      }])],
      decls: 1,
      vars: 1,
      consts: [["class", "t1", 4, "ngIf"], [1, "t1"], [1, "name"], [1, "all", "bg", "s", "e"], [1, "l"], [1, "show-all", 3, "checked", "indeterminate", "change"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "ico", 3, "ngClass"], [1, "show-all", 3, "checked", "change"]],
      template: function ResponsibilityRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ResponsibilityRowComponent_table_0_Template, 13, 4, "table", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.disabled);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckbox],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 49718:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/components/responsibility/responsibility.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsibilityComponent: () => (/* binding */ ResponsibilityComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants */ 51360);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services_transport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services/transport.service */ 45230);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 62223);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);










function ResponsibilityComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 14)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label")(6, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityComponent_th_18_Template_mat_checkbox_change_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const kind_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.allChangeForKind(kind_r2.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const kind_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.setClassIcon(kind_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.setClassIcon(kind_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](kind_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.allCheckedForKind(kind_r2.id))("indeterminate", !ctx_r0.allCompleteForKind(kind_r2.id));
  }
}
function ResponsibilityComponent_tr_19_td_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14)(1, "label")(2, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityComponent_tr_19_td_10_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const kind_r8 = restoredCtx.$implicit;
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.changeForCountryAndKind(i_r6, kind_r8.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const kind_r8 = ctx.$implicit;
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r7.setClassIcon(kind_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r7.checkedForCountryAndKind(i_r6, kind_r8.id));
  }
}
function ResponsibilityComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 16)(1, "td")(2, "div", 17)(3, "ng-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityComponent_tr_19_Template_ng_select_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.valueChanged());
    })("ngModelChange", function ResponsibilityComponent_tr_19_Template_ng_select_ngModelChange_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const direction_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](direction_r5.direction_departure = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ng-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityComponent_tr_19_Template_ng_select_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.valueChanged());
    })("ngModelChange", function ResponsibilityComponent_tr_19_Template_ng_select_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const direction_r5 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](direction_r5.direction_arrival = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResponsibilityComponent_tr_19_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const i_r6 = restoredCtx.index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.removeDirection(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 20)(7, "label")(8, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityComponent_tr_19_Template_mat_checkbox_change_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const i_r6 = restoredCtx.index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.allChangeForCountry(i_r6, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ResponsibilityComponent_tr_19_td_10_Template, 4, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const direction_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", direction_r5.direction_departure)("items", ctx_r1.allCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", direction_r5.direction_arrival)("items", ctx_r1.allCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.allCheckedForCountry(i_r6))("indeterminate", !ctx_r1.allCompleteForCountry(i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.kinds);
  }
}
class ResponsibilityComponent {
  constructor(transportService, snackBar) {
    this.transportService = transportService;
    this.snackBar = snackBar;
    this.countries = [];
    this.homeCountry = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__.unknownCountry;
    this.type = 'export';
    this.requiredDirection = false;
    this.onChange = value => {};
    this.onTouched = () => {};
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.allCountry = [];
    this.filteredCountries = [];
    this.transportSubKindsLength = 0;
    this.directions = [];
    this.snackBarWithShortDuration = {
      duration: 1000
    };
    this.snackBarWithLongDuration = {
      duration: 3000
    };
  }
  ngOnInit() {
    this.getTransportSubKind();
    this.allCountry = [...this.countries, {
      id: 0,
      name: 'Любая'
    }];
    this.directions.forEach(dir => {
      if (!dir.direction_arrival) {
        dir.direction_arrival = 0;
      }
      if (!dir.direction_departure) {
        dir.direction_departure = 0;
      }
    });
  }
  ngOnChanges(changes) {}
  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  writeValue(responsibilityParam) {
    console.log('writeValue', responsibilityParam);
    this.directions.push(...responsibilityParam);
    if (this.directions.length === 0) {
      this.addDirection();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setClassIcon(kind) {
    let classIcon = '';
    if (kind.kind_id === 1) classIcon = 'air';
    if (kind.kind_id === 2) classIcon = 'road';
    if (kind.kind_id === 3) classIcon = 'rail';
    if (kind.kind_id === 4) classIcon = 'sea';
    return classIcon;
  }
  // setClassTh(){
  // }
  addDirection() {
    this.directions.push({
      direction_departure: 0,
      direction_arrival: 0,
      direction_items: []
    });
    console.log(this.directions);
    this.valueChanged();
  }
  removeDirection(countryId) {
    this.directions.splice(countryId, 1);
    this.valueChanged();
  }
  allChecked() {
    const countChecked = this.getCountChecked();
    // return this.directions.length > 0 && countChecked === this.directions.length * TransportSubKinds.length;
    return this.directions.length > 0 && countChecked === this.directions.length * this.transportSubKindsLength;
  }
  allComplete() {
    const countChecked = this.getCountChecked();
    // return countChecked === 0 || countChecked === this.directions.length * TransportSubKinds.length;
    return countChecked === 0 || countChecked === this.directions.length * this.transportSubKindsLength;
  }
  getCountChecked() {
    return this.directions.map(e => e.direction_items.length).reduce((sum, count) => sum + count, 0);
  }
  allChange({
    checked
  }) {
    // this.directions.forEach(( e) => e.direction_items = checked ? [...TransportSubKinds] : []);
    this.directions.forEach(e => e.direction_items = checked ? this.allTransportSubKinds : []);
    this.valueChanged();
  }
  allCheckedForKind(kind) {
    return this.directions.length > 0 && this.getCheckedForKind(kind) === this.directions.length;
  }
  allCompleteForKind(kind) {
    const checked = this.getCheckedForKind(kind);
    return checked === 0 || checked === this.directions.length;
  }
  getCheckedForKind(kind) {
    return this.directions.map(e => e.direction_items?.includes(kind)).reduce((sum, checked) => checked ? sum + 1 : sum, 0);
  }
  allChangeForKind(kind, {
    checked
  }) {
    this.directions.forEach(e => {
      const kinds = e.direction_items;
      if (checked) {
        if (!kinds?.includes(kind)) {
          kinds?.push(kind);
        }
      } else {
        e.direction_items = kinds?.filter(aKind => aKind !== kind);
      }
    });
    this.valueChanged();
  }
  allCheckedForCountry(i) {
    const kinds = this.directions[i].direction_items;
    // return kinds?.length === TransportSubKinds.length;
    return this.transportSubKindsLength === kinds?.length;
  }
  allCompleteForCountry(i) {
    const kinds = this.directions[i].direction_items;
    // return kinds?.length === TransportSubKinds.length || kinds?.length === 0;
    return kinds?.length === this.transportSubKindsLength || kinds?.length === 0;
  }
  allChangeForCountry(i, {
    checked
  }) {
    if (checked) {
      // this.directions[i].direction_items = [...TransportSubKinds];
      this.directions[i].direction_items = this.allTransportSubKinds;
    } else {
      this.directions[i].direction_items = [];
    }
    this.valueChanged();
  }
  checkedForCountryAndKind(i, kind) {
    const kinds = this.directions[i].direction_items;
    return kinds ? kinds.includes(kind) : false;
  }
  changeForCountryAndKind(i, kind, {
    checked
  }) {
    const kinds = this.directions[i].direction_items;
    if (checked) {
      kinds?.push(kind);
    } else {
      this.directions[i].direction_items = kinds?.filter(aKind => kind !== aKind);
    }
    this.valueChanged();
  }
  valueChanged() {
    const value = [...this.directions];
    this.onChange(value);
    this.onTouched();
    console.log(123123123);
  }
  // Приватные методы
  // получаем перевозчиков(airline and airline iata)
  getTransportSubKind() {
    this.transportService.transportSubKind().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(transportCarrier => {
      console.log(transportCarrier);
      if (!transportCarrier) {
        throw {
          error: {
            error_message: `Перевозчиков не существует`
          }
        };
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe({
      next: transportCarrier => {
        const sorted = transportCarrier.sort((user1, user2) => user1['kind_id'] > user2['kind_id'] ? 1 : -1);
        this.kinds = sorted;
        this.transportSubKindsLength = this.kinds.length;
        let test = [];
        sorted.forEach(i => {
          test.push(i.id);
        });
        this.allTransportSubKinds = test;
        console.log(this.allTransportSubKinds);
      },
      error: err => {
        this.snackBar.open(`Ошибка запроса перевозчиков: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  static {
    this.ɵfac = function ResponsibilityComponent_Factory(t) {
      return new (t || ResponsibilityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_api_services_transport_service__WEBPACK_IMPORTED_MODULE_1__.TransportService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ResponsibilityComponent,
      selectors: [["app-responsibility"]],
      inputs: {
        countries: "countries",
        homeCountry: "homeCountry",
        type: "type",
        requiredDirection: "requiredDirection"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: ResponsibilityComponent
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 24,
      vars: 4,
      consts: [[1, "t1"], [1, "name", "pm0"], [1, "table-header"], [1, "tab-title"], [1, "tab-subtitles"], [1, "subtitle"], [1, "all", "bg"], [1, "l"], [1, "show-all", "testclass", 3, "checked", "indeterminate", "change"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "user-item"], [1, "form-block-title"], [1, "btn", "v", "add", 3, "click"], [3, "ngClass"], [1, "ico", 3, "ngClass"], [1, "row"], [1, "dir-block"], ["required", "", "bindLabel", "name", "bindValue", "id", 1, "custom", 2, "width", "100%", "margin-right", "10px", 3, "ngModel", "items", "change", "ngModelChange"], [1, "btn-del", 3, "click"], [1, "bg", "s", "e"], [1, "show-all", "testclass", 3, "checked", "change"]],
      template: function ResponsibilityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0)(1, "tbody")(2, "tr")(3, "th", 1)(4, "div", 2)(5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 4)(8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0421\u0442\u0440\u0430\u043D\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0421\u0442\u0440\u0430\u043D\u0430 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 6)(13, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0412\u0441\u0435 \u0432\u0438\u0434\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label")(16, "mat-checkbox", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ResponsibilityComponent_Template_mat_checkbox_change_16_listener($event) {
            return ctx.allChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ResponsibilityComponent_th_18_Template, 8, 5, "th", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ResponsibilityComponent_tr_19_Template, 11, 7, "tr", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11)(21, "div", 12)(22, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResponsibilityComponent_Template_span_click_22_listener() {
            return ctx.addDirection();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.allChecked())("indeterminate", !ctx.allComplete());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.kinds);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.directions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
      styles: [".mw50 {\n  max-width: 45%;\n}\n\n.btn-del {\n  display: flex;\n  min-width: 16px;\n  min-height: 16px;\n  background: url('pic-btn-del-gray.svg') no-repeat 50% 50%;\n  cursor: pointer;\n}\n\n.dir-block {\n  display: flex;\n  justify-content: space-between;\n  max-width: 330px;\n}\n\n.t1 .pm0 {\n  padding: 0;\n  margin: 0;\n  vertical-align: baseline;\n}\n\n.t1 .name .table-header {\n  height: 99px;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.t1 .name .tab-title {\n  height: 50%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border-bottom: 1px solid #9ca6b1;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.t1 .name .tab-subtitles {\n  width: 100%;\n  height: 50%;\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n\n.t1 .name .tab-subtitles .subtitle {\n  width: 148.5px;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 13px;\n  line-height: 15px;\n  font-weight: normal;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.t1 .name .tab-subtitles .subtitle:first-child {\n  border-right: 1px solid #9ca6b1;\n  width: 140px;\n}\n\nth.all.bg + th.air {\n  border-left: 1px solid #9ca6b1;\n}\n\nth.all.bg {\n  border-left: 1px solid #9ca6b1;\n}\n\nth.road {\n  background: #778490;\n}\n\nth.air + th.road {\n  border-left: 1px solid #9ca6b1;\n}\n\nth.road + th.rail {\n  border-left: 1px solid #9ca6b1;\n}\n\nth.sea {\n  background: #778490;\n}\n\nth.rail + th.sea {\n  border-left: 1px solid #9ca6b1;\n}\n\n.bg.s.e + td.air {\n  border-left: 1px solid #e0e5eb;\n}\n\n.t1 .row td.road {\n  background-color: #f7f9fc;\n}\n\ntd.air + td.road {\n  border-left: 1px solid #e0e5eb;\n}\n\ntd.road + td.rail {\n  border-left: 1px solid #e0e5eb;\n}\n\n.t1 .row td.sea {\n  background: #f7f9fc;\n}\n\ntd.rail + td.sea {\n  border-left: 1px solid #e0e5eb;\n}\n\n.t1 td {\n  padding: 15px 5px 12px;\n}\n\n.t1 th {\n  padding: 8px 5px 13px;\n}\n\n.t1 .e {\n  padding-right: 10px;\n}\n\n.t1 .s {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9yZXNwb25zaWJpbGl0eS9yZXNwb25zaWJpbGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5REFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBbURBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtBQWhERjs7QUFtREE7RUFDRSxZQUFBO0VBRUEsU0FBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSw4QkFBQTtBQW5ERjs7QUFzREE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUVBLFNBQUE7RUFDQSxVQUFBO0VBRUEsZ0NBQUE7RUFFQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdkRGOztBQTJEQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUVBLFNBQUE7RUFDQSxVQUFBO0FBMURGOztBQTZEQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBRUEsU0FBQTtFQUNBLFVBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBN0RGOztBQStEQTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtBQTVERjs7QUFtRUE7RUFDRSw4QkFBQTtBQWhFRjs7QUFtRUE7RUFDRSw4QkFBQTtBQWhFRjs7QUFtRUE7RUFDRSxtQkFBQTtBQWhFRjs7QUFrRUE7RUFDRSw4QkFBQTtBQS9ERjs7QUFxRUE7RUFDRSw4QkFBQTtBQWxFRjs7QUFxRUE7RUFDRSxtQkFBQTtBQWxFRjs7QUFvRUE7RUFDRSw4QkFBQTtBQWpFRjs7QUF3RUE7RUFDRSw4QkFBQTtBQXJFRjs7QUF3RUE7RUFDRSx5QkFBQTtBQXJFRjs7QUF1RUE7RUFDRSw4QkFBQTtBQXBFRjs7QUEwRUE7RUFDRSw4QkFBQTtBQXZFRjs7QUEwRUE7RUFDRSxtQkFBQTtBQXZFRjs7QUF5RUE7RUFDRSw4QkFBQTtBQXRFRjs7QUF5RUE7RUFDRSxzQkFBQTtBQXRFRjs7QUF5RUE7RUFDRSxxQkFBQTtBQXRFRjs7QUF5RUE7RUFDRSxtQkFBQTtBQXRFRjs7QUF3RUE7RUFDRSxrQkFBQTtBQXJFRiIsInNvdXJjZXNDb250ZW50IjpbIi5tdzUwe1xuICBtYXgtd2lkdGg6IDQ1JTtcbn1cblxuLmJ0bi1kZWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMTZweDtcbiAgbWluLWhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLWRlbC1ncmF5LnN2Zykgbm8tcmVwZWF0IDUwJSA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRpci1ibG9ja3tcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xufVxuXG4vLyAubWF0LWNoZWNrYm94LnRlc3RjbGFzcyBsYWJlbCBzcGFue1xuLy8gICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5tYXQtY2hlY2tib3gudGVzdGNsYXNzIGxhYmVsIHtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI0UwRTVFQjtcbi8vICAgYmFja2dyb3VuZDogI0Y3RjlGQztcbi8vICAgd2lkdGg6IDE4cHg7XG4vLyAgIGhlaWdodDogMThweDtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyB9XG5cbi8vIC5tYXQtY2hlY2tib3gudGVzdGNsYXNzIGxhYmVsOjphZnRlciB7XG4vLyAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBiYWNrZ3JvdW5kOiAjRjdGOUZDO1xuLy8gICB3aWR0aDogOHB4O1xuLy8gICBoZWlnaHQ6IDhweDtcbi8vICAgbWFyZ2luOiAwIDtcbi8vICAgcGFkZGluZzogMDtcbi8vIH1cblxuLy8gLm1hdC1jaGVja2JveC50ZXN0Y2xhc3MubWF0LWNoZWNrYm94LWNoZWNrZWQgbGFiZWw6OmFmdGVye1xuLy8gICBjb250ZW50OiBcIlwiO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7XG4vLyAgIHdpZHRoOiA4cHg7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBtYXJnaW46IDAgO1xuLy8gICBwYWRkaW5nOiAwO1xuXG4vLyB9XG5cbi8vIC5tYXQtY2hlY2tib3gudGVzdGNsYXNzLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIGxhYmVsOjphZnRlcntcbi8vICAgY29udGVudDogXCJcIjtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuLy8gICB3aWR0aDogMTBweDtcbi8vICAgaGVpZ2h0OiAzcHg7XG4vLyAgIG1hcmdpbjogMCA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyB9XG5cbi50MSAucG0we1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLnQxIC5uYW1lIC50YWJsZS1oZWFkZXJ7XG4gIGhlaWdodDogOTlweDtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50MSAubmFtZSAudGFiLXRpdGxle1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWNhNmIxO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4udDEgLm5hbWUgLnRhYi1zdWJ0aXRsZXN7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnQxIC5uYW1lIC50YWItc3VidGl0bGVzIC5zdWJ0aXRsZXtcbiAgd2lkdGg6IDE0OC41cHg7XG4gIGhlaWdodDogMTAwJTtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50MSAubmFtZSAudGFiLXN1YnRpdGxlcyAuc3VidGl0bGU6Zmlyc3QtY2hpbGR7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5Y2E2YjE7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuXG50aC5haXJ7XG5cbn1cbnRoLmFsbC5iZyt0aC5haXJ7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzljYTZiMTtcbn1cblxudGguYWxsLmJne1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5Y2E2YjE7XG59XG5cbnRoLnJvYWR7XG4gIGJhY2tncm91bmQ6ICM3Nzg0OTA7XG59XG50aC5haXIgKyB0aC5yb2Fke1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5Y2E2YjE7XG59XG5cbnRoLnJhaWx7XG5cbn1cbnRoLnJvYWQrdGgucmFpbHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOWNhNmIxO1xufVxuXG50aC5zZWF7XG4gIGJhY2tncm91bmQ6ICM3Nzg0OTA7XG59XG50aC5yYWlsK3RoLnNlYXtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOWNhNmIxO1xufVxuXG5cbnRkLmFpcntcblxufVxuLmJnLnMuZSt0ZC5haXJ7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTVlYjtcbn1cblxuLnQxIC5yb3cgdGQucm9hZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYztcbn1cbnRkLmFpciArIHRkLnJvYWR7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTVlYjtcbn1cblxudGQucmFpbHtcblxufVxudGQucm9hZCt0ZC5yYWlse1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGU1ZWI7XG59XG5cbi50MSAucm93IHRkLnNlYXtcbiAgYmFja2dyb3VuZDogI2Y3ZjlmYztcbn1cbnRkLnJhaWwrdGQuc2Vhe1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGU1ZWI7XG59XG5cbi50MSB0ZCB7XG4gIHBhZGRpbmc6IDE1cHggNXB4IDEycHg7XG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50MSB0aCB7XG4gIHBhZGRpbmc6IDhweCA1cHggMTNweDtcbn1cblxuLnQxIC5lIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi50MSAucyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 60816:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/components/trade-direction/trade-direction.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TradeDirectionComponent: () => (/* binding */ TradeDirectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);



function TradeDirectionComponent_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label")(1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TradeDirectionComponent_label_4_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onChange(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const direction_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", direction_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](direction_r1.label);
  }
}
class TradeDirectionComponent {
  constructor() {
    this.directions = [{
      value: 'all',
      label: 'Все',
      checked: false
    }, {
      value: 'import',
      label: 'Импорт',
      checked: false
    }, {
      value: 'export',
      label: 'Экспорт',
      checked: false
    }, {
      value: 'local',
      label: 'Перевозки внутри страны',
      checked: false
    }];
    this.onChangeFn = value => {};
    this.onTouchedFn = () => {};
  }
  ngOnInit() {}
  writeValue(value) {
    if (!Array.isArray(value)) {
      return;
    }
    this.directions.forEach(direction => {
      direction.checked = value.includes(direction.value);
    });
    this.directions[0].checked = this.directions.slice(1).every(r => r.checked);
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedFn = fn;
  }
  onChange(i) {
    if (i === 0) {
      const checked = !this.directions[0].checked;
      this.directions.forEach(r => r.checked = checked);
    } else {
      this.directions[i].checked = !this.directions[i].checked;
      this.directions[0].checked = this.directions.slice(1).every(direction => direction.checked);
    }
    const value = this.directions.slice(1).filter(direction => direction.checked).map(r => r.value);
    this.onChangeFn(value);
  }
  static {
    this.ɵfac = function TradeDirectionComponent_Factory(t) {
      return new (t || TradeDirectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TradeDirectionComponent,
      selectors: [["app-trade-direction"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: TradeDirectionComponent
      }])],
      decls: 5,
      vars: 1,
      consts: [[1, "form-item-layout", "padd", "sep"], [1, "req"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "checked", "change"]],
      template: function TradeDirectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0437\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TradeDirectionComponent_label_4_Template, 5, 2, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.directions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 30236:
/*!***************************************************************!*\
  !*** ./src/app/pages/modules/contractor/contractor.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContractorModule: () => (/* binding */ ContractorModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _components_contractor_contractor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/contractor/contractor.component */ 16580);
/* harmony import */ var _components_contractor_editor_contractor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/contractor-editor/contractor-editor.component */ 60772);
/* harmony import */ var _components_contact_editor_contact_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contact-editor/contact-editor.component */ 30734);
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/rating/rating.component */ 164);
/* harmony import */ var _components_trade_direction_trade_direction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/trade-direction/trade-direction.component */ 60816);
/* harmony import */ var _components_responsibility_responsibility_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/responsibility/responsibility.component */ 49718);
/* harmony import */ var _components_responsibility_matrix_responsibility_matrix_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/responsibility-matrix/responsibility-matrix.component */ 4399);
/* harmony import */ var _components_responsibility_row_responsibility_row_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/responsibility-row/responsibility-row.component */ 93540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);












const routes = [{
  path: '',
  component: _components_contractor_contractor_component__WEBPACK_IMPORTED_MODULE_1__.ContractorComponent,
  title: 'Подрядчики'
}, {
  path: 'add',
  component: _components_contractor_editor_contractor_editor_component__WEBPACK_IMPORTED_MODULE_2__.ContractorEditorComponent,
  title: 'Добавление подрядчика'
}, {
  path: 'edit/:id',
  component: _components_contractor_editor_contractor_editor_component__WEBPACK_IMPORTED_MODULE_2__.ContractorEditorComponent,
  title: 'Редактирование подрядчика'
}];
class ContractorModule {
  static {
    this.ɵfac = function ContractorModule_Factory(t) {
      return new (t || ContractorModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: ContractorModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ContractorModule, {
    declarations: [_components_contractor_contractor_component__WEBPACK_IMPORTED_MODULE_1__.ContractorComponent, _components_contractor_editor_contractor_editor_component__WEBPACK_IMPORTED_MODULE_2__.ContractorEditorComponent, _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__.RatingComponent, _components_contact_editor_contact_editor_component__WEBPACK_IMPORTED_MODULE_3__.ContactEditorComponent, _components_trade_direction_trade_direction_component__WEBPACK_IMPORTED_MODULE_5__.TradeDirectionComponent, _components_responsibility_matrix_responsibility_matrix_component__WEBPACK_IMPORTED_MODULE_7__.ResponsibilityMatrixComponent, _components_responsibility_row_responsibility_row_component__WEBPACK_IMPORTED_MODULE_8__.ResponsibilityRowComponent, _components_responsibility_responsibility_component__WEBPACK_IMPORTED_MODULE_6__.ResponsibilityComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modules_contractor_contractor_module_ts.js.map