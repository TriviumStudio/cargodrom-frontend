"use strict";
(self["webpackChunkcargodrom_frontend"] = self["webpackChunkcargodrom_frontend"] || []).push([["src_app_pages_modules_message_message_module_ts"],{

/***/ 34436:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/components/message-editor/message-editor.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageEditorComponent: () => (/* binding */ MessageEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/services/mySetting.service */ 37901);
/* harmony import */ var src_app_pages_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/services/loader.service */ 51798);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
















function MessageEditorComponent_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.name);
  }
}
function MessageEditorComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function MessageEditorComponent_div_40_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.name);
  }
}
function MessageEditorComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8)(4, "mat-select", 23)(5, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MessageEditorComponent_div_40_mat_option_7_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.companys);
  }
}
function MessageEditorComponent_div_41_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.name);
  }
}
function MessageEditorComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0438: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8)(4, "mat-select", 24)(5, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MessageEditorComponent_div_41_mat_option_7_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.contractors);
  }
}
class MessageEditorComponent {
  constructor(dialogRef, fb, settingsSertvice, snackBar, route, mySettingService, router, loader, companyService, contractorService, massegeService, data) {
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.settingsSertvice = settingsSertvice;
    this.snackBar = snackBar;
    this.route = route;
    this.mySettingService = mySettingService;
    this.router = router;
    this.loader = loader;
    this.companyService = companyService;
    this.contractorService = contractorService;
    this.massegeService = massegeService;
    this.data = data;
    this.isEditMode = false;
    this.title = '';
    this.contractors = [];
    this.companys = [];
    this.users = [];
    this.messageStatus = [];
    this.snackBarWithShortDuration = {
      duration: 2000
    };
    this.snackBarWithLongDuration = {
      duration: 4000
    };
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.form = this.fb.group({
      id: [, []],
      subject: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      text: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      data: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      to_user_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      to_company_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      to_contractor_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      status: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      to: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
  }
  onToChange() {
    this.form.controls['to_user_id'].reset();
    this.form.controls['to_contractor_id'].reset();
    this.form.controls['to_contractor_id'].reset();
  }
  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnInit() {
    console.log('popap data', this.data);
    this.getData();
    if (this.data) {
      this.isEditMode = true;
      console.log('edit mode', this.data);
      this.form.patchValue(this.data.message);
    } else {
      console.log('create mode');
      this.isEditMode = false;
    }
  }
  getData() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)({
      companys: this.companyService.companyList(),
      contractors: this.contractorService.contractorList(),
      message_status: this.massegeService.messageFormParam()
      //users: this.directionService.directionCity({ country_id:this.currentRequest.arrival_country_id }),
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(({
      companys,
      contractors,
      message_status
    }) => ({
      companys: companys.items ? companys.items.map(({
        id,
        name
      }) => ({
        id,
        name
      })) : [],
      contractors: contractors.items ? contractors.items.map(({
        id,
        name
      }) => ({
        id,
        name
      })) : [],
      message_status: message_status.status ? message_status.status : []
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(schema => {
      console.log(schema);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy$)).subscribe({
      next: ({
        companys,
        contractors,
        message_status
      }) => {
        this.companys = companys;
        this.contractors = contractors;
        this.messageStatus = message_status;
      },
      error: err => {
        this.snackBar.open(`Ошибка загрузки данных: ${err.message}`, 'Закрыть');
      }
    });
  }
  saveMessage() {
    console.log(this.form);
    this.massegeService.messageSave({
      body: this.form.value
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy$)).subscribe({
      next: schema => {
        this.snackBar.open(`Сообщение сохраннено`, undefined, this.snackBarWithShortDuration);
      },
      error: err => {
        this.snackBar.open(`Ошибка сохранения сообщения: ${{
          err
        }}`, undefined, this.snackBarWithShortDuration);
      },
      complete: () => {
        this.onCancel();
      }
    });
  }
  onCancel() {
    this.dialogRef.close({
      reload_table: true
    });
  }
  onSubmit() {
    this.saveMessage();
  }
  static {
    this.ɵfac = function MessageEditorComponent_Factory(t) {
      return new (t || MessageEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_1__.MySettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_pages_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.ContractorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MessageEditorComponent,
      selectors: [["app-message-editor"]],
      decls: 45,
      vars: 8,
      consts: [[1, "cross", 2, "position", "absolute", "right", "14px", "top", "14px", "background", "inherit", "background-image", "url(../../../../assets/pic-btn-cancel-black.svg)", "height", "14px", "width", "14px", "z-index", "2", 3, "click"], ["mat-dialog-title", "", 2, "padding", "0 40px 10px"], [2, "padding", "0", "width", "30vw"], [3, "formGroup", "ngSubmit"], [1, "form-block"], [1, "form-row", "bg", 2, "display", "flex", "flex-direction", "column", "gap", "25px", "padding", "20px 40px"], [1, "form-item", 2, "width", "300px"], [1, "form-label"], [1, "form-data"], ["matInput", "", "type", "text", "formControlName", "subject"], [1, "form-item"], ["formControlName", "text", 2, "height", "150px"], ["formControlName", "status"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-item-layout"], [1, "form-item", 2, "max-width", "170px"], ["formControlName", "to", 3, "selectionChange"], [3, "value"], ["class", "form-item", 4, "ngIf"], ["align", "end", 2, "padding", "20px 40px"], ["mat-raised-button", "", 2, "background", "var(--accent,  #DB563B)", "color", "white", "margin-right", "auto", 3, "click"], ["type", "text", "formControlName", "to_user_id"], ["formControlName", "to_company_id"], ["formControlName", "to_contractor_id"]],
      template: function MessageEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessageEditorComponent_Template_button_click_0_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u041D\u043E\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-dialog-content", 2)(4, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function MessageEditorComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u0442\u0435\u043C\u0430: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10)(13, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "textarea", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 6)(18, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u0441\u0442\u0430\u0442\u0443\u0441: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 8)(21, "mat-select", 12)(22, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, MessageEditorComponent_mat_option_24_Template, 2, 2, "mat-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15)(26, "div", 16)(27, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u043F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 8)(30, "mat-select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function MessageEditorComponent_Template_mat_select_selectionChange_30_listener() {
            return ctx.onToChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, MessageEditorComponent_div_39_Template, 5, 0, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, MessageEditorComponent_div_40_Template, 8, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, MessageEditorComponent_div_41_Template, 8, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-dialog-actions", 20)(43, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessageEditorComponent_Template_button_click_43_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.messageStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.value.to == 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.value.to == "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.form.value.to == "3");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogActions, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 9644:
/*!**********************************************************!*\
  !*** ./src/app/pages/components/message/message.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagePage: () => (/* binding */ MessagePage)
/* harmony export */ });
/* harmony import */ var src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/classes */ 56825);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64334);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/filter/services/filter.service */ 50535);
/* harmony import */ var _message_editor_message_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message-editor/message-editor.component */ 34436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../material/components/paginator/paginator.component */ 32105);
/* harmony import */ var _filter_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../filter/table-filter/table-filter.component */ 87359);
/* harmony import */ var _table_subheader_file_subheader_file_subheader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table-subheader/file-subheader/file-subheader.component */ 71543);



















function MessagePage_ng_container_5_ng_template_1_th_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](col_r3.title);
  }
}
function MessagePage_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function MessagePage_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_div_3_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const miniCol_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const colIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r17.startResize($event, miniCol_r12, ctx_r17.columnsData[colIndex_r4]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MessagePage_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MessagePage_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const miniCol_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.sort(miniCol_r12.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MessagePage_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_div_3_Template, 1, 0, "div", 21);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", miniColIndex_r13 !== col_r3.items.length - 1 && col_r3.items[miniColIndex_r13 + 1].title);
  }
}
function MessagePage_ng_container_5_ng_template_1_th_0_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function MessagePage_ng_container_5_ng_template_1_th_0_ng_container_4_div_2_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const colIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.startResize($event, ctx_r26.columnsData[colIndex_r4 - 1].items[ctx_r26.columnsData[colIndex_r4 - 1].items.length - 1], ctx_r26.columnsData[colIndex_r4 - 1]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MessagePage_ng_container_5_ng_template_1_th_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MessagePage_ng_container_5_ng_template_1_th_0_ng_container_4_div_1_Template, 4, 8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MessagePage_ng_container_5_ng_template_1_th_0_ng_container_4_div_2_Template, 1, 0, "div", 18);
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
function MessagePage_ng_container_5_ng_template_1_th_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 13)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MessagePage_ng_container_5_ng_template_1_th_0_div_2_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MessagePage_ng_container_5_ng_template_1_th_0_ng_container_4_Template, 3, 2, "ng-container", 15);
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
function MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 28);
  }
  if (rf & 2) {
    const miniCol_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", ctx_r35.getVal(item_r31, miniCol_r33.field), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45);
      const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r43.navigateOnDetails(item_r31.id, item_r31.tabs[0]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const miniCol_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r36.getVal(item_r31, miniCol_r33.field), " ");
  }
}
function MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 31)(2, "div", 31)(3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", item_r31.kso.k.active ? "" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", item_r31.kso.s.active ? "" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", item_r31.kso.o.active ? "" : "red");
  }
}
function MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_4_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r49.navigateOnClient(item_r31.customer_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const miniCol_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r38.getVal(item_r31, miniCol_r33.field), " ");
  }
}
function MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div");
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r39.getTypeClass(item_r31.transport_kind_id));
  }
}
function MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_6_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_6_mat_option_1_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59);
      const status_r56 = restoredCtx.$implicit;
      const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      item_r31.status_crm_id = status_r56.id;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r57.updateRequest(item_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", status_r56.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", status_r56.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", status_r56.name, " ");
  }
}
function MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_6_mat_option_1_Template, 2, 4, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", ctx_r40.tableRequest_returnColorCrmStatus(item_r31.status_crm_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r31.status_crm_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r40.requestCrmStatuses);
  }
}
function MessagePage_ng_container_5_ng_template_1_td_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_1_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_2_Template, 2, 1, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_3_Template, 4, 3, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_4_Template, 2, 1, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_5_Template, 1, 2, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MessagePage_ng_container_5_ng_template_1_td_1_div_2_ng_template_6_Template, 2, 4, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const miniCol_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](miniCol_r33.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("width", miniCol_r33.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", miniCol_r33.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "id");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "kso");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "customer_name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "transport_kind_id");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "status_crm_name");
  }
}
function MessagePage_ng_container_5_ng_template_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MessagePage_ng_container_5_ng_template_1_td_1_div_2_Template, 7, 10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const col_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](item_r31 == null ? null : item_r31.row_class);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("min-width", col_r3.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", col_r3.items);
  }
}
function MessagePage_ng_container_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MessagePage_ng_container_5_ng_template_1_th_0_Template, 5, 10, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MessagePage_ng_container_5_ng_template_1_td_1_Template, 3, 5, "td", 12);
  }
}
function MessagePage_ng_container_5_ng_template_2_th_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MessagePage_ng_container_5_ng_template_2_th_0_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r69.onCancelColumnWidth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MessagePage_ng_container_5_ng_template_2_th_0_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MessagePage_ng_container_5_ng_template_2_th_0_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r71.onSaveColumnWidth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MessagePage_ng_container_5_ng_template_2_th_0_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MessagePage_ng_container_5_ng_template_2_th_0_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r73.updateColumnSize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043A\u043E\u043B\u043E\u043D\u043E\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MessagePage_ng_container_5_ng_template_2_th_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MessagePage_ng_container_5_ng_template_2_th_0_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r75.onResetColumnWidth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MessagePage_ng_container_5_ng_template_2_th_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-menu", null, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, MessagePage_ng_container_5_ng_template_2_th_0_button_4_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MessagePage_ng_container_5_ng_template_2_th_0_button_5_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MessagePage_ng_container_5_ng_template_2_th_0_button_6_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, MessagePage_ng_container_5_ng_template_2_th_0_button_7_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function MessagePage_ng_container_5_ng_template_2_th_0_Template_div_mousedown_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r78);
      const colIndex_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r77.startResize($event, ctx_r77.columnsData[colIndex_r4 - 1].items[ctx_r77.columnsData[colIndex_r4 - 1].items.length - 1], ctx_r77.columnsData[colIndex_r4 - 1]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r62.isResizeColumnMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r62.isResizeColumnMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r62.isResizeColumnMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r62.isTableFixedWidth);
  }
}
const _c0 = function (a1) {
  return ["edit", a1];
};
function MessagePage_ng_container_5_ng_template_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](client_r80 == null ? null : client_r80.row_class);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, client_r80.id));
  }
}
function MessagePage_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MessagePage_ng_container_5_ng_template_2_th_0_Template, 9, 5, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MessagePage_ng_container_5_ng_template_2_td_1_Template, 2, 5, "td", 36);
  }
}
function MessagePage_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MessagePage_ng_container_5_ng_template_1_Template, 2, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MessagePage_ng_container_5_ng_template_2_Template, 2, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matColumnDef", col_r3.column)("ngSwitch", col_r3.column);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "settings");
  }
}
function MessagePage_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 44);
  }
}
function MessagePage_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 45);
  }
}
const _c1 = function () {
  return {
    title: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",
    subtitle: "\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
  };
};
class MessagePage extends src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__.Table {
  // @ViewChild(NgScrollbar) scrollbar!: NgScrollbar;
  constructor(sanitizer, requestService, filterService, dialog, snackBar, route, router, userService, messageService) {
    super(route, router, dialog, snackBar, filterService, userService);
    this.sanitizer = sanitizer;
    this.requestService = requestService;
    this.messageService = messageService;
    this.sortField = 'id';
    // params:any;
    this.trackById = (_index, request) => request.id;
    // this.importMetods = {
    //   import: this.requestService.requestImport.bind(this.requestService),
    //   import_res: this.requestService.requestImportResult.bind(this.requestService),
    //   import_con: this.requestService.requestImportConfirm.bind(this.requestService),
    // }
  }
  // updateContent() {
  //     this.scrollbar.update();
  // }
  ngOnInit() {
    super.ngOnInit();
    this.resizeMetod = 'message_list';
    // const currentUrl = this.router.url;
    // const segments = currentUrl.split('/').filter((segment) => segment !== '');
    // console.log('segments',segments);
    // if(segments[2]=='add'){
    //   this.openMessage();
    // } else if(segments[2]=='edit') {
    //   this.openEditor(segments[3])
    // }
    // this.subscribeRouterEvent();
  }
  // openEditor(mes_id: number | string): void {
  //   this.rows$
  //   .pipe(
  //     filter(rows => rows && rows.length > 0),
  //     take(1)
  //   )
  //   .subscribe(rows => {
  //     const foundElement = rows.find(row => row.id == mes_id);
  //     this.openMessage(foundElement);
  //   });
  // }
  openMessage(message) {
    // Открываем диалоговое окно (AddPopupComponent) и передаем в него данные
    const dialogRef = this.dialog.open(_message_editor_message_editor_component__WEBPACK_IMPORTED_MODULE_2__.MessageEditorComponent, message ? {
      data: {
        message
      }
    } : undefined);
    // Подписываемся на событие закрытия диалога
    dialogRef.afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(result => {
      // this.router.navigate(['pages/message'])
      if (result.reload_table) this.loadRows();
    });
  }
  // private subscribeRouterEvent() {
  //   this.router.events
  //   .pipe(
  //     filter(event => event instanceof NavigationEnd),
  //     takeUntil(this.destroy$)
  //   )
  //   .subscribe(() => {
  //     let isChildRouteActive = this.router.url.includes('/message/edit/') || this.router.url.includes('/message/add');
  //     if(isChildRouteActive) this.openMessage();
  //   });
  // }
  load(params) {
    // this.params=params;
    return this.messageService.messageList(params);
  }
  loadFilterSchemaTest() {
    return this.messageService.messageListParam().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(val => val));
  }
  // protected override loadFilterSchema<T>(): Observable<SearchFilterSchema> {
  //   return this.requestService.requestListSearch().pipe(map(val => val as SearchFilterSchema));
  // }
  exportData(param) {
    return this.requestService.requestExport(param);
  }
  importData(body) {
    return this.requestService.requestImport({
      body
    });
  }
  importDataConfirm(body) {
    return this.requestService.requestImportConfirm({
      import_key: body.import_key
    });
  }
  importResult(body) {
    return this.requestService.requestImportResult({
      import_key: body.import_key
    });
  }
  importTemplate() {
    return this.requestService.requestImportTemplate(this.filter);
  }
  // getVal(obj: any, path: string): any {
  //   if (!path?.includes('/')) {
  //     const value = obj[path] !== undefined ? obj[path] : null;
  //     return this.transformClientValue(value,obj);
  //   };
  //   const keys = path?.split('/');
  //   for (const key of keys) {
  //     if (obj && obj.hasOwnProperty(key)) {
  //         obj = obj[key];
  //     } else {
  //       return null;
  //     }
  //   }
  //   const result = obj !== undefined ? obj : null;
  //   return this.transformClientValue(result,obj);
  // }
  // private transformClientValue(value: any, obj:any): SafeHtml {
  //   if (typeof value === 'string') {
  //     return value.replace(
  //       /\[urlclient\](.*?)\[\/urlclient\]/ig,
  //       `<a class="link" target="_blank" href="/#/pages/customer/edit/${obj.customer_id}">$1</a>`
  //     );
  //   }
  //   return value;
  // }
  // getVal(obj: any, path: string): any {
  //   if (!path?.includes('/')) {
  //     return obj[path] !== undefined ? obj[path] : null;
  //   };
  //   const keys = path?.split('/');
  //   for (const key of keys) {
  //     if (obj && obj.hasOwnProperty(key)) {
  //         obj = obj[key];
  //     } else {
  //       return null; // Если ключ не найден, возвращаем null
  //     }
  //   }
  //   return obj !== undefined ? obj : null; // Проверка на undefined
  // }
  navigateOnDetails(requestId, tab) {
    console.log(tab);
    if (tab) {
      let link;
      if (tab == 'custom') {
        link = 'customs';
      } else if (tab == 'svh') {
        link = 'point';
      } else {
        link = tab;
      }
      this.router.navigate(['request/details', link, requestId]);
    } else {
      this.snackBar.open(`Ошибка, рейты недоступны`, undefined, this.snackBarWithShortDuration);
    }
  }
  navigateOnClient(clientId) {
    this.router.navigate(['customer/edit', clientId]);
  }
  updateRequest(request) {
    const body = {
      status_crm_id: request.status_crm_id,
      id: request.id
    };
    this.requestService.requestUpdate({
      body
    }).pipe().subscribe({
      next: () => {
        this.snackBar.open(`Статус CRM успешно изменён`, undefined, this.snackBarWithShortDuration);
      },
      error: err => {
        this.snackBar.open(`Ошибка редактирования CRM статуса запроса: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  tableRequest_returnColorCrmStatus(value) {
    if (!this.requestCrmStatuses) return '';
    const obj = this.requestCrmStatuses.find(obj => obj.id === value);
    return obj?.color || '';
  }
  getTypeClass(kind_id) {
    let classSpec = '';
    if (kind_id === 1) classSpec = 'type avia';
    if (kind_id === 2) classSpec = 'type road';
    if (kind_id === 3) classSpec = 'type rw';
    if (kind_id === 4) classSpec = 'type sea';
    return classSpec;
  }
  static {
    this.ɵfac = function MessagePage_Factory(t) {
      return new (t || MessagePage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.MessageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: MessagePage,
      selectors: [["message-page"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 15,
      consts: [[1, "request-component"], [3, "titles", "addPopap", "openAddPopap"], [1, "table-list"], ["mat-table", "", "multiTemplateDataRows", "", 1, "sticky-header", 3, "dataSource"], [3, "matColumnDef", "ngSwitch", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "total", "count", "start", "limits", "startChange", "countChange"], [3, "matColumnDef", "ngSwitch"], [3, "ngSwitchDefault"], [3, "ngSwitchCase"], ["mat-header-cell", "", 3, "minWidth", "class", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "minWidth", "class", 4, "matCellDef"], ["mat-header-cell", ""], ["class", "td-block-title", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "td-block-title"], ["class", "column", 3, "width", "class", 4, "ngIf"], ["class", "resize-handle_end", 3, "mousedown", 4, "ngIf"], [1, "column"], [1, "col-content", 3, "ngClass", "click"], ["class", "resize-handle", 3, "mousedown", 4, "ngIf"], [1, "resize-handle", 3, "mousedown"], [1, "resize-handle_end", 3, "mousedown"], ["mat-cell", ""], [1, "td-block"], ["class", "column", 3, "width", "class", "ngSwitch", 4, "ngFor", "ngForOf"], [1, "column", 3, "ngSwitch"], [1, "col-content", 3, "innerHTML"], [1, "link", 3, "click"], [1, "kso-block"], [1, "kso-item", 3, "ngClass"], ["panelWidth", "140px", 3, "value"], ["class", "table_options", 3, "value", "color", "click", 4, "ngFor", "ngForOf"], [1, "table_options", 3, "value", "click"], ["mat-header-cell", "", "class", "setting", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "setting", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", 1, "setting"], [1, "setting-link", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["class", "table-settings", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 1, "table-settings", 3, "click"], ["mat-cell", "", 1, "setting"], ["title", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", 1, "link-pic", "link-edit", "ico", "ico-pencil", "fn-link", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function MessagePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "app-table-sunheader-file", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("openAddPopap", function MessagePage_Template_app_table_sunheader_file_openAddPopap_1_listener() {
            return ctx.openMessage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-table-filter");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "table", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, MessagePage_ng_container_5_Template, 3, 3, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MessagePage_tr_6_Template, 1, 0, "tr", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, MessagePage_tr_7_Template, 1, 0, "tr", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-paginator", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("startChange", function MessagePage_Template_app_paginator_startChange_8_listener($event) {
            return ctx.onStartChange($event);
          })("countChange", function MessagePage_Template_app_paginator_countChange_8_listener($event) {
            return ctx.onCountChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("titles", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c1))("addPopap", true);
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
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchDefault, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRow, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuTrigger, _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__.PaginatorComponent, _filter_table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_5__.TableFilterComponent, _table_subheader_file_subheader_file_subheader_component__WEBPACK_IMPORTED_MODULE_6__.TableSubheaderFileComponent],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 27260:
/*!*********************************************************!*\
  !*** ./src/app/pages/modules/message/message.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageModule: () => (/* binding */ MessageModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _components_message_message_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/message/message.page */ 9644);
/* harmony import */ var _components_message_editor_message_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/message-editor/message-editor.component */ 34436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: '',
  component: _components_message_message_page__WEBPACK_IMPORTED_MODULE_1__.MessagePage,
  title: 'Сообщения'
}];
class MessageModule {
  static {
    this.ɵfac = function MessageModule_Factory(t) {
      return new (t || MessageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MessageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MessageModule, {
    declarations: [_components_message_message_page__WEBPACK_IMPORTED_MODULE_1__.MessagePage, _components_message_editor_message_editor_component__WEBPACK_IMPORTED_MODULE_2__.MessageEditorComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modules_message_message_module_ts.js.map