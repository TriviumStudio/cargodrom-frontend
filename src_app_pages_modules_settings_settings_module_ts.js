"use strict";
(self["webpackChunkcargodrom_frontend"] = self["webpackChunkcargodrom_frontend"] || []).push([["src_app_pages_modules_settings_settings_module_ts"],{

/***/ 47495:
/*!*******************************************************************!*\
  !*** ./src/app/pages/modules/settings/classes/settings-editor.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsEditor: () => (/* binding */ SettingsEditor)
/* harmony export */ });
/* harmony import */ var src_app_shared_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/sort-predicate */ 41990);
/* harmony import */ var src_app_shared_classes_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app//shared/classes/editor */ 29756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _api_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../api/services/company.service */ 12804);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);








class SettingsEditor extends src_app_shared_classes_editor__WEBPACK_IMPORTED_MODULE_1__.Editor {
  constructor(location, companyService, systemService, route, snackBar, router) {
    super(location, systemService, route, snackBar, router);
    this.companyService = companyService;
    this.employees = [];
    this.companies = [];
    this.departments = [];
    this.positions = [];
  }
  loadEmployees() {
    this.companyService.companyEmployeeList().subscribe(employees => {
      this.employees = employees ? employees.items : [];
    });
  }
  loadCompanies() {
    this.companyService.companyList().subscribe(companies => this.companies = companies ? companies.items.sort((0,src_app_shared_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('name', 'asc', 'case-insensitive')) : []);
  }
  loadDepartments() {
    this.companyService.companyDepartmentList().subscribe(departments => this.departments = departments ? departments.items.sort((0,src_app_shared_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('name', 'asc', 'case-insensitive')) : []);
  }
  loadPositions() {
    this.companyService.companyPositionList().subscribe(positions => this.positions = positions ? positions.items.sort((0,src_app_shared_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('name', 'asc', 'case-insensitive')) : []);
  }
  static {
    this.ɵfac = function SettingsEditor_Factory(t) {
      return new (t || SettingsEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_services_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: SettingsEditor,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
  }
}

/***/ }),

/***/ 65868:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/branding/branding.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandingComponent: () => (/* binding */ BrandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 52575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 91817);
/* harmony import */ var src_app_shared_classes_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/classes/base-component */ 80050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/services/mySetting.service */ 37901);
/* harmony import */ var src_app_pages_services_urrency_currency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/services/сurrency/currency.service */ 69110);
/* harmony import */ var _branding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branding.service */ 60388);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _shared_ui_color_picker_color_picker_standart_color_picker_standart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/ui/color-picker/color-picker-standart/color-picker-standart.component */ 30128);
/* harmony import */ var _shared_directives_iframe_style_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/directives/iframe-style.directive */ 53310);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/directives/focus-first-invalid.directive */ 87683);
















const _c0 = ["fileInput"];
const _c1 = ["fileNameInput"];
const _c2 = function (a0, a1, a2) {
  return {
    "background-color": a0,
    "color": a1,
    "margin-bottom": a2
  };
};
function BrandingComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BrandingComponent_div_21_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const p_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.currentPageType = p_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](2, _c2, ctx_r2.currentPageType == p_r4 ? "var(--background2)" : "var(--background)", ctx_r2.currentPageType == p_r4 ? "var(--text)" : "var(--text)", ctx_r2.currentPageType == p_r4 ? "-1px" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", p_r4, " ");
  }
}
function BrandingComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-color-picker-standart", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](col_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControlName", col_r7.id)("standartColor", col_r7.color);
  }
}
const _c3 = function (a0) {
  return {
    "display": a0
  };
};
class BrandingComponent extends src_app_shared_classes_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(fb, settingsSertvice, snackBar, route, mySettingService, router, systemService, currencyService, historyService, sanitizer) {
    super();
    this.fb = fb;
    this.settingsSertvice = settingsSertvice;
    this.snackBar = snackBar;
    this.route = route;
    this.mySettingService = mySettingService;
    this.router = router;
    this.systemService = systemService;
    this.currencyService = currencyService;
    this.historyService = historyService;
    this.sanitizer = sanitizer;
    this.selectedFile = null;
    this.base64String = null;
    this.pageTypes = ['Таблица', 'Форма'];
    this.currentPageType = 'Таблица';
    this.colors = [];
    this.canUndo = false;
    this.canRedo = false;
    this.tableLink = this.getSafeUrl('/#/request');
    this.formLink = this.getSafeUrl('/#/request/add');
    this.colorHistory = []; // История значений
    this.currentHistoryIndex = -1; // Текущая позиция в истории
    this.maxHistoryLength = 50; // Максимальная длина истории
    this.header = {
      fullLinks: [{
        name: 'Дашбоард',
        field: 'dashboard'
      }, {
        name: 'Запросы',
        field: 'request'
      }, {
        name: 'Ставки',
        field: 'bit'
      }, {
        name: 'Заказы',
        field: 'order'
      }, {
        name: 'Тарифы',
        field: 'tariff'
      }, {
        name: 'Подрядчики',
        field: 'contractor'
      }, {
        name: 'Отчеты',
        field: 'report'
      }, {
        name: 'Клиенты',
        field: 'customer'
      }, {
        name: 'Справочник',
        field: 'guide'
      }],
      currency: [{
        name: 'USD ($)',
        value: '69.3475'
      }, {
        name: 'EUR (€)',
        value: '80.3220'
      }, {
        name: 'CNY (Ұ)',
        value: '10.1193'
      }],
      link: ['mes', 'opt', 'off']
    };
    this.subheader = {};
    this.form = this.fb.group({
      branding_logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      branding_logo_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      branding_colors: this.createColorGroup()
    });
  }
  // Метод для создания группы цветов для каждой страницы
  createColorGroup() {
    return this.fb.group({
      header_menu: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      header_menu_text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      background: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      background2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      background3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      text2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      text3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      line: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      accent: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      accent_text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      event_positive: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      event_positive_text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      event_negative: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      event_negative_text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      event_neutral: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      event_neutral_text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
  }
  ngOnInit() {
    this.getSettings();
  }
  testLog(log) {
    console.log(log);
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      // Обновляем текстовое поле с именем файла
      this.fileNameInput.nativeElement.value = file.name;
      // Конвертируем в base64
      this.convertToBase64(file);
    }
  }
  convertToBase64(file) {
    const reader = new FileReader();
    reader.onload = e => {
      // e.target.result.name=this.fileNameInput.nativeElement.value;
      this.base64String = e.target.result;
      console.log('Base64 строка:', this.getPureBase64());
      // Здесь вы можете использовать base64String как нужно
      this.form.patchValue({
        branding_logo: this.getPureBase64(),
        branding_logo_name: this.fileNameInput.nativeElement.value
      });
    };
    reader.onerror = error => {
      console.error('Ошибка чтения файла:', error);
    };
    reader.readAsDataURL(file);
  }
  // Если нужно получить чистый base64 (без data:image/... префикса)
  getPureBase64() {
    if (this.base64String) {
      return this.base64String.split(',')[1];
    }
    return null;
  }
  clearFile() {
    this.selectedFile = null;
    this.base64String = null;
    this.fileNameInput.nativeElement.value = '';
    this.fileInput.nativeElement.value = '';
    // Сбрасываем значения в форме
    this.form.patchValue({
      branding_logo: '',
      branding_logo_name: ''
    });
  }
  getSettings() {
    this.settingsSertvice.settingsGet().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: data => {
        this.form.patchValue(data);
        console.log('getSettings', data);
        if (data.colors) this.colors = data.colors;
        if (data.branding_colors) this.originalColors = data.branding_colors;
        if (data.branding_logo_name) this.fileNameInput.nativeElement.value = data.branding_logo_name;
        // После загрузки настроек инициализируем историю и подписываемся на изменения
        this.initializeHistory();
        this.subscribeToColorChanges();
      },
      error: err => {
        this.snackBar.open(`Ошибка получения настроек: ${err}`, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  initializeHistory() {
    const initialColors = this.form.get('branding_colors')?.value;
    this.colorHistory = [JSON.parse(JSON.stringify(initialColors))]; // Глубокая копия
    this.currentHistoryIndex = 0;
    this.updateUndoRedoState();
    this.colorHistoryObj = this.transformArrayToObject(this.colorHistory);
  }
  subscribeToColorChanges() {
    this.form.get('branding_colors')?.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(1500),
    // Задержка для группировки быстрых изменений
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)((a, b) => JSON.stringify(a) === JSON.stringify(b)),
    // Только уникальные изменения
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(newColors => {
      console.log('newColors', newColors);
      this.addToHistory(newColors);
    });
  }
  transformArrayToObject(array) {
    const result = {};
    if (!array || array.length === 0) {
      return result;
    }
    // Проходим по всем объектам в массиве
    array.forEach(item => {
      // Проходим по всем ключам каждого объекта
      Object.keys(item).forEach(key => {
        // Если ключа еще нет в результате, создаем пустой массив
        if (!result[key]) {
          result[key] = [];
        }
        // Добавляем значение только если его еще нет в массиве
        if (!result[key].includes(item[key])) {
          result[key].push(item[key]);
        }
      });
    });
    return result;
  }
  addToHistory(colors) {
    // Если мы не в конце истории, обрезаем историю после текущей позиции
    if (this.currentHistoryIndex < this.colorHistory.length - 1) {
      this.colorHistory = this.colorHistory.slice(0, this.currentHistoryIndex + 1);
    }
    // Добавляем новое состояние (глубокая копия)
    this.colorHistory.push(JSON.parse(JSON.stringify(colors)));
    // Ограничиваем длину истории
    if (this.colorHistory.length > this.maxHistoryLength) {
      this.colorHistory.shift(); // Удаляем самый старый элемент
    } else {
      this.currentHistoryIndex++;
    }
    this.updateUndoRedoState();
    console.log('colorHistory', this.colorHistory);
    this.colorHistoryObj = this.transformArrayToObject(this.colorHistory);
    console.log('colorHistoryObj', this.colorHistoryObj);
  }
  // Кнопка "Назад"
  undo() {
    if (this.canUndo) {
      this.currentHistoryIndex--;
      const previousColors = this.colorHistory[this.currentHistoryIndex];
      // Временно отписываемся от изменений чтобы не добавить в историю
      const colorsControl = this.form.get('branding_colors');
      if (colorsControl) {
        colorsControl.patchValue(previousColors, {
          emitEvent: false
        });
      }
      this.updateUndoRedoState();
    }
  }
  // Кнопка "Повтор"
  redo() {
    if (this.canRedo) {
      this.currentHistoryIndex++;
      const nextColors = this.colorHistory[this.currentHistoryIndex];
      const colorsControl = this.form.get('branding_colors');
      if (colorsControl) {
        colorsControl.patchValue(nextColors, {
          emitEvent: false
        });
      }
      this.updateUndoRedoState();
    }
  }
  returnOriginalColors() {
    console.log(this.form.value.branding_colors, this.originalColors);
    this.form.get('branding_colors')?.patchValue(this.originalColors);
  }
  isColorsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  updateUndoRedoState() {
    this.canUndo = this.currentHistoryIndex > 0;
    this.canRedo = this.currentHistoryIndex < this.colorHistory.length - 1;
  }
  getCssVariablesString() {
    const colors = this.form.get('branding_colors')?.value;
    if (!colors) {
      return '';
    }
    const cssVariables = [];
    Object.entries(colors).forEach(([key, value]) => {
      if (value) {
        cssVariables.push(`--${key}: ${value};`);
      }
    });
    return cssVariables.join(' ');
  }
  postSettings() {
    let body;
    if (this.fileInput.nativeElement.value) {
      body = this.form.value;
    } else if (!this.fileInput.nativeElement.value && !this.fileNameInput.nativeElement.value) {
      body = this.form.value;
    } else {
      body = {
        branding_colors: this.form.value.branding_colors
      };
    }
    this.settingsSertvice.settingsUpdate({
      body: body
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe({
      next: data => {
        this.snackBar.open(`Настройки сохранены`, undefined, this.snackBarWithShortDuration);
      },
      error: err => {
        this.snackBar.open(`Ошибка получения массивов для селекторов формы: ${err}`, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  onSubmit() {
    this.postSettings();
  }
  getSafeUrl(path) {
    const fullUrl = this.returnFullLinkIframe(path);
    return this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
  }
  returnFullLinkIframe(link) {
    const baseUrl = window.location.href.split('/#')[0];
    return baseUrl + link;
  }
  static {
    this.ɵfac = function BrandingComponent_Factory(t) {
      return new (t || BrandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_2__.MySettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_pages_services_urrency_currency_service__WEBPACK_IMPORTED_MODULE_3__.CurrencyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_branding_service__WEBPACK_IMPORTED_MODULE_4__.FormHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.DomSanitizer));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: BrandingComponent,
      selectors: [["app-branding"]],
      viewQuery: function BrandingComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.fileNameInput = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
      decls: 42,
      vars: 18,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-block"], [1, "form-row"], [1, "form-block-sub-title"], [1, "info"], [1, "logo-input"], ["type", "text", "readonly", ""], ["fileNameInput", ""], ["type", "button", 1, "new-icon", "edit", "s16px", 2, "--icon-color", "var(--accent, #DB563B)", 3, "click"], ["type", "button", 1, "new-icon", "delet", "s16px", 2, "--icon-color", "var(--background3, #83909E)", 3, "click"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "brending-menu"], [1, "pages"], ["class", "page", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "btns"], ["type", "button", 2, "color", "var(--accent, #DB563B)", 3, "disabled", "click"], [1, "new-icon", "back", "s16px", 2, "--icon-color", "var(--accent, #DB563B)"], ["type", "button", 2, "color", "var(--background3, #83909E)", 3, "disabled", "click"], [1, "new-icon", "repeat", "s16px", 2, "--icon-color", "var(--background3, #83909E)"], [1, "new-icon", "cancel", "s14px", 2, "--icon-color", "var(--accent, #DB563B)"], [1, "brending-form"], [1, "demo"], ["scrolling", "no", "frameborder", "0", "title", "\u0414\u0435\u043C\u043E \u0442\u0430\u0431\u043B\u0438\u0446\u0430", 3, "src", "appIframeStyle"], ["scrolling", "no", "frameborder", "0", "title", "\u0414\u0435\u043C\u043E \u0444\u043E\u0440\u043C\u0430", 2, "pointer-events", "none", 3, "src", "appIframeStyle"], ["formGroupName", "branding_colors", 1, "inputs"], ["class", "form-item input", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "long", 2, "background-color", "var(--accent, #DB563B)", "color", "var(--accent_text, #FFFFFF)"], [1, "new-icon", "save", "s16px", 2, "--icon-color", "var(--accent_text, #FFFFFF)"], [1, "page", 3, "ngStyle", "click"], [1, "form-item", "input"], [1, "form-label"], [3, "formControlName", "standartColor"]],
      template: function BrandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function BrandingComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "\u0424\u0430\u0439\u043B \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 200 \u0442\u043E\u0447\u0435\u043A \u043F\u043E \u0432\u044B\u0441\u043E\u0442\u0435, \u0448\u0438\u0440\u0438\u043D\u0430 \u0431\u0443\u0434\u0435\u0442 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438. \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u044B: .PNG, .SVG, .JPG, .BMP, .GIF. \u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u043B\u0435\u0432\u043E\u043C \u0432\u0435\u0440\u0445\u043D\u0435\u043C \u0443\u0433\u043B\u0443 \u044D\u043A\u0440\u0430\u043D\u0430 \u0441\u043B\u0435\u0432\u0430 \u043E\u0442 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u044E.");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "input", 6, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BrandingComponent_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](13);
            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r1.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BrandingComponent_Template_button_click_11_listener() {
            return ctx.clearFile();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "input", 10, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function BrandingComponent_Template_input_change_12_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 2)(15, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u043E\u0432\u044B\u0445 \u0446\u0432\u0435\u0442\u043E\u0432");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0442\u0442\u0435\u043D\u043A\u0438 \u0434\u043B\u044F \u0430\u043A\u0446\u0435\u043D\u0442\u043D\u044B\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0432 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u043E\u0439 \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u0433\u0430\u043C\u043C\u044B. \u041C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u044B \u043C\u0430\u043A\u0435\u0442\u043E\u0432 \u043D\u0438\u0436\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u043A\u0430\u043A \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0433\u043B\u044F\u0434\u0435\u0442\u044C \u0441 \u043D\u043E\u0432\u044B\u043C\u0438 \u0446\u0432\u0435\u0442\u0430\u043C\u0438.");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 12)(20, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, BrandingComponent_div_21_Template, 2, 6, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 15)(23, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BrandingComponent_Template_button_click_23_listener() {
            return ctx.undo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BrandingComponent_Template_button_click_26_listener() {
            return ctx.redo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, " \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BrandingComponent_Template_button_click_29_listener() {
            return ctx.returnOriginalColors();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, " \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u043C\u0443 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 21)(33, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "iframe", 23)(35, "iframe", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, BrandingComponent_div_37_Template, 4, 3, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 2)(39, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.pageTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.canUndo);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx.canRedo);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.isColorsEqual(ctx.originalColors, ctx.form.value.branding_colors));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c3, ctx.currentPageType == "\u0422\u0430\u0431\u043B\u0438\u0446\u0430" ? "" : "none"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.tableLink, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeResourceUrl"])("appIframeStyle", ctx.getCssVariablesString());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c3, ctx.currentPageType == "\u0424\u043E\u0440\u043C\u0430" ? "" : "none"));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.formLink, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeResourceUrl"])("appIframeStyle", ctx.getCssVariablesString());
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.colors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _shared_ui_color_picker_color_picker_standart_color_picker_standart_component__WEBPACK_IMPORTED_MODULE_5__.ColorPickerStandartComponent, _shared_directives_iframe_style_directive__WEBPACK_IMPORTED_MODULE_6__.IframeStyleDirective, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_7__.FocusFirstInvalidDirective],
      styles: [".brending-menu[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid #C3CCD6;\n  gap: 40px;\n}\n.brending-menu[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%] {\n  display: flex;\n  width: 45%;\n  flex-grow: 1;\n}\n.brending-menu[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: 1px solid #C3CCD6;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 22px;\n  cursor: pointer;\n  border-bottom: none;\n}\n.brending-menu[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\n  display: flex;\n  width: 715px;\n  min-width: 715px;\n  padding: 0 40px;\n  box-sizing: border-box;\n  gap: 40px;\n}\n.brending-menu[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  width: 170px;\n  flex-grow: 1;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  background-color: inherit;\n  padding: 12px 0;\n}\n.brending-menu[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .new-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.brending-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n}\n.brending-form[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 45%;\n  flex-grow: 1;\n}\n.brending-form[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.brending-form[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .brending-form[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   app-request[_ngcontent-%COMP%], .brending-form[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   app-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  zoom: 0.4;\n  border: 1px solid var(--line, #E0E5EB);\n}\n.brending-form[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n  display: flex;\n  width: 715px;\n  padding: 0 40px;\n  box-sizing: border-box;\n  gap: 20px 40px;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  align-content: flex-start;\n}\n.brending-form[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  width: 184px;\n  flex-grow: 0;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n@media (max-width: 1750px) {\n  .brending-form[_ngcontent-%COMP%]   .inputs[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .brending-form[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%] {\n    width: 1px;\n  }\n  .brending-form[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .brending-form[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   app-request[_ngcontent-%COMP%], .brending-form[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]   app-header[_ngcontent-%COMP%] {\n    width: 100%;\n    zoom: 0.55;\n  }\n}\n.form-row[_ngcontent-%COMP%]:not(:last-child) {\n  gap: 24px;\n  display: flex;\n  flex-direction: column;\n}\n.form-row[_ngcontent-%COMP%]:not(:last-child)   .info[_ngcontent-%COMP%] {\n  width: 720px;\n  padding-left: 16px;\n  border-left: 2px solid #DB563B;\n  color: #606A74;\n  box-sizing: content-box;\n}\n\n.color[_ngcontent-%COMP%] {\n  position: relative;\n}\n.color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 90px;\n}\n\n.color[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 12px;\n  margin: auto 0;\n  top: calc(50% - 6px);\n  left: 16px;\n  background-color: var(--input-color);\n  border: 1px solid #E0E5EB;\n}\n\nmat-option[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n\nmat-option[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-left: 74px;\n}\n\n.logo-input[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 720px;\n  width: 50%;\n  cursor: pointer;\n}\n\n.logo-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 38px;\n  display: block;\n  position: absolute;\n  background-color: white;\n}\n.logo-input[_ngcontent-%COMP%]   button.edit[_ngcontent-%COMP%] {\n  right: 41px;\n  top: 1px;\n  border-right: 1px solid #E0E5EB;\n  border-left: 1px solid #E0E5EB;\n}\n.logo-input[_ngcontent-%COMP%]   button.delet[_ngcontent-%COMP%] {\n  right: 1px;\n  top: 1px;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n.demo[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  width: 720px;\n  height: 384px;\n  border: 1px solid #C3CCD6;\n}\n.demo[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 21px;\n  background-color: var(--header_menu);\n}\n.demo[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--header_menu_text);\n}\n\n.sony[_ngcontent-%COMP%] {\n  background-image: url(\"https://dev.cargodrom.com//content/branding/327.fe3cfe712b34f56b042054f9665bec7d/logo.jpg\");\n  width: 100px;\n  height: 100px;\n  background-position: center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL2JyYW5kaW5nL2JyYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7QUFBRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRU47QUFDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0o7QUFBSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQWMsWUFBQTtFQUNkLGVBQUE7RUFBaUIsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0IsaUJBQUE7RUFDdkQseUJBQUE7RUFDQSxlQUFBO0FBTU47QUFMTTtFQUNFLGlCQUFBO0FBT1I7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFLRjtBQUpFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFNSjtBQUxJO0VBQUssV0FBQTtFQUFhLFlBQUE7QUFTdEI7QUFSSTtFQUFnQyxXQUFBO0VBQWEsd0JBQUE7RUFBQSxtQkFBQTtFQUFxQixTQUFBO0VBQVksc0NBQUE7QUFjbEY7QUFYRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUVBLGVBQUE7RUFDQSxxQkFBQTtFQUF1Qix5QkFBQTtBQWEzQjtBQVpJO0VBQU8sWUFBQTtFQUFjLFlBQUE7RUFBYyx3QkFBQTtFQUFBLG1CQUFBO0FBaUJ2Qzs7QUFkQTtFQUdJO0lBQ0UsV0FBQTtFQWVKO0VBWkU7SUFDRSxVQUFBO0VBY0o7RUFiSTtJQUNFLFdBQUE7SUFFQSxVQUFBO0VBY047QUFDRjtBQVZBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVlGO0FBWEU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWFKOztBQVRBO0VBQ0Usa0JBQUE7QUFZRjtBQVhFO0VBQ0Usa0JBQUE7QUFhSjs7QUFUQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBWUY7O0FBVEE7RUFDRSxPQUFBO0FBWUY7O0FBVkE7RUFDRSxpQkFBQTtBQWFGOztBQVZBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBYUY7O0FBZ0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQWJKO0FBZUU7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7QUFiSjtBQWVFO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBYko7O0FBaUJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQWRGO0FBZUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FBYko7QUFjSTtFQUNFLDhCQUFBO0FBWk47O0FBa0JBO0VBQ0Usa0hBQUE7RUFDQSxZQUFBO0VBQWMsYUFBQTtFQUNkLDJCQUFBO0VBQ0Esc0JBQUE7QUFkRiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJyZW5kaW5nLW1lbnV7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICB3aWR0aDogMTAwJTsgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzNDQ0Q2OyBcbiAgZ2FwOjQwcHg7XG4gIC5wYWdlc3tcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICB3aWR0aDogNDUlO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICAucGFnZXtcbiAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDM0NDRDY7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuICAuYnRuc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA3MTVweDtcbiAgICBtaW4td2lkdGg6IDcxNXB4O1xuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGdhcDogNDBweDtcbiAgICBidXR0b257XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDE3MHB4OyBmbGV4LWdyb3c6IDE7XG4gICAgICBmb250LXNpemU6IDEzcHg7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC13ZWlnaHQ6IDQwMDsgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgLm5ldy1pY29ue1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5icmVuZGluZy1mb3Jte1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDo0MHB4O1xuICAuZGVtb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgc3ZneyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvO31cbiAgICBpZnJhbWUsIGFwcC1yZXF1ZXN0LCBhcHAtaGVhZGVye3dpZHRoOiAxMDAlOyBoZWlnaHQ6IGZpdC1jb250ZW50OyB6b29tOiAwLjQ7ICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLCNFMEU1RUIpO31cblxuICB9XG4gIC5pbnB1dHN7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgd2lkdGg6IDcxNXB4O1xuICAgIHBhZGRpbmc6IDAgNDBweDsgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXG4gICAgZ2FwOiAyMHB4IDQwcHg7IFxuICAgIFxuICAgIGZsZXgtd3JhcDogd3JhcDsgXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC5pbnB1dHt3aWR0aDogMTg0cHg7IGZsZXgtZ3JvdzogMDsgaGVpZ2h0OiBmaXQtY29udGVudDt9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNzUwcHgpIHtcbiAgLmJyZW5kaW5nLWZvcm17XG4gICAgXG4gICAgLmlucHV0c3tcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgXG4gICAgfVxuICAgIC5kZW1ve1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGlmcmFtZSwgYXBwLXJlcXVlc3QsIGFwcC1oZWFkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBoZWlnaHQ6IDg3MHB4O1xuICAgICAgICB6b29tOiAwLjU1O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmZvcm0tcm93Om5vdCg6bGFzdC1jaGlsZCl7XG4gIGdhcDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLmluZm97XG4gICAgd2lkdGg6IDcyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNEQjU2M0I7XG4gICAgY29sb3I6ICM2MDZBNzQ7XG4gICAgYm94LXNpemluZzpjb250ZW50LWJveDtcbiAgfVxufVxuXG4uY29sb3J7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaW5wdXR7XG4gICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICB9XG4gIFxufVxuLmNvbG9yOjpiZWZvcmV7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW46IGF1dG8gMCA7XG4gIHRvcDogY2FsYyg1MCUgLSA2cHgpO1xuICBsZWZ0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEU1RUI7XG4gIFxufVxubWF0LW9wdGlvbiAuY29sb3I6OmJlZm9yZXtcbiAgbGVmdDowXG59XG5tYXQtb3B0aW9uIC5jb2xvciBkaXZ7XG4gIG1hcmdpbi1sZWZ0OiA3NHB4O1xufVxuXG4ubG9nby1pbnB1dHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDcyMHB4O1xuICB3aWR0aDogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vIC5sb2dvLWlucHV0OjphZnRlciwgLmxvZ28taW5wdXQ6OmJlZm9yZXtcbi8vICAgY29udGVudDogJyc7XG4vLyAgIHdpZHRoOiA0MHB4O1xuLy8gICBoZWlnaHQ6IDM4cHg7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyB9XG4vLyAubG9nby1pbnB1dDo6YWZ0ZXJ7XG4vLyAgIHJpZ2h0OiAxcHg7XG4vLyAgIHRvcDoxcHg7XG4vLyAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4vLyAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1kZWwtZ3JheS5zdmcpO1xuLy8gfVxuLy8gLmxvZ28taW5wdXQ6OmJlZm9yZXtcbi8vICAgcmlnaHQ6IDQxcHg7XG4vLyAgIHRvcDoxcHg7XG4vLyAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFMEU1RUI7XG4vLyAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0UwRTVFQjtcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLWVkaXQuc3ZnKTtcbi8vIH1cblxuLmxvZ28taW5wdXR7XG4gIGJ1dHRvbntcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIGJ1dHRvbi5lZGl0e1xuICAgIHJpZ2h0OiA0MXB4O1xuICAgIHRvcDoxcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTVFQjtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFMEU1RUI7XG4gIH1cbiAgYnV0dG9uLmRlbGV0e1xuICAgIHJpZ2h0OiAxcHg7XG4gICAgdG9wOjFweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7IFxuICB9XG59XG5cbi5kZW1vIC5wYWdle1xuICB3aWR0aDogNzIwcHg7XG4gIGhlaWdodDogMzg0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDM0NDRDY7XG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcl9tZW51KTtcbiAgICAubmFtZXtcbiAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJfbWVudV90ZXh0KTtcbiAgICB9XG4gIH1cbiAgXG59XG5cbi5zb255e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZGV2LmNhcmdvZHJvbS5jb20vL2NvbnRlbnQvYnJhbmRpbmcvMzI3LmZlM2NmZTcxMmIzNGY1NmIwNDIwNTRmOTY2NWJlYzdkL2xvZ28uanBnJyk7XG4gIHdpZHRoOiAxMDBweDsgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 60388:
/*!********************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/branding/branding.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormHistoryService: () => (/* binding */ FormHistoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class FormHistoryService {
  constructor() {
    this.history = [];
    this.currentIndex = -1;
    this.maxHistoryLength = 50;
  }
  // Добавить состояние в историю
  pushState(form) {
    const formData = this.getFormData(form);
    // Удаляем все состояния после текущего индекса (если мы откатились назад и делаем новое изменение)
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }
    this.history.push({
      formData: JSON.parse(JSON.stringify(formData)),
      timestamp: new Date()
    });
    // Ограничиваем размер истории
    if (this.history.length > this.maxHistoryLength) {
      this.history.shift();
    }
    this.currentIndex = this.history.length - 1;
  }
  // Отменить изменение
  undo(form) {
    if (this.canUndo()) {
      this.currentIndex--;
      this.applyState(form, this.history[this.currentIndex].formData);
      return true;
    }
    return false;
  }
  // Повторить изменение
  redo(form) {
    if (this.canRedo()) {
      this.currentIndex++;
      this.applyState(form, this.history[this.currentIndex].formData);
      return true;
    }
    return false;
  }
  canUndo() {
    return this.currentIndex > 0;
  }
  canRedo() {
    return this.currentIndex < this.history.length - 1;
  }
  clearHistory() {
    this.history = [];
    this.currentIndex = -1;
  }
  getFormData(form) {
    return form.getRawValue();
  }
  applyState(form, formData) {
    form.patchValue(formData, {
      emitEvent: false
    });
  }
  static {
    this.ɵfac = function FormHistoryService_Factory(t) {
      return new (t || FormHistoryService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FormHistoryService,
      factory: FormHistoryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 80344:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/client-group-editor/client-group-editor.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientGroupEditorComponent: () => (/* binding */ ClientGroupEditorComponent)
/* harmony export */ });
/* harmony import */ var _classes_settings_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/settings-editor */ 47495);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _api_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../api/services/customer.service */ 44165);
/* harmony import */ var _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../material/components/editor-header/editor-header.component */ 67157);
/* harmony import */ var _material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../material/directives/focus-initial.directive */ 19323);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/directives/focus-first-invalid.directive */ 87683);












function ClientGroupEditorComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ClientGroupEditorComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientGroupEditorComponent_span_30_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ClientGroupEditorComponent_ng_template_34_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().name;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.getError(name_r6));
  }
}
function ClientGroupEditorComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ClientGroupEditorComponent_ng_template_34_div_0_Template, 2, 1, "div", 24);
  }
  if (rf & 2) {
    const name_r6 = ctx.name;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.isFormSubmitted && ctx_r3.hasError(name_r6));
  }
}
const _c0 = function () {
  return {
    name: "name"
  };
};
class ClientGroupEditorComponent extends _classes_settings_editor__WEBPACK_IMPORTED_MODULE_0__.SettingsEditor {
  constructor(fb, snackBar, companyService, systemService, route, location, router, customerService) {
    super(location, companyService, systemService, route, snackBar, router);
    this.fb = fb;
    this.customerService = customerService;
    this.entity = 'Группа клиентов';
    this.editTitle = 'Информация о группе клиентов';
    this.newTitle = 'Добавление группы клиентов';
    this.savedMessage = `${this.entity} сохранена`;
    this.removedMessage = `${this.entity} удалена`;
    this.createdMessage = `${this.entity} создана`;
    this.notFoundMessage = `${this.entity} не найдена`;
    this.form = this.fb.group({
      id: [''],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
  }
  create(params) {
    return this.customerService.customerGroupCreate(params);
  }
  read(params) {
    return this.customerService.customerGroupInfo(params);
  }
  update(params) {
    return this.customerService.customerGroupUpdate(params);
  }
  delete(params) {
    return this.customerService.customerGroupDelete(params);
  }
  getNameForHeader(body) {
    return body.name;
  }
  static {
    this.ɵfac = function ClientGroupEditorComponent_Factory(t) {
      return new (t || ClientGroupEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_api_services_customer_service__WEBPACK_IMPORTED_MODULE_2__.CustomerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ClientGroupEditorComponent,
      selectors: [["app-client-group-editor"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
      decls: 36,
      vars: 9,
      consts: [[3, "title", "isEditMode", "name", "backLink", "save", "remove"], [1, "edit-form"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-placer"], [1, "form-items"], ["data-id", "group_0", 1, "form-group"], [1, "form-group-title"], [1, "form-item", "form-inline-group"], [1, "form-title"], ["type", "hidden", "formControlName", "id"], [1, "form-data"], [1, "form-group-row"], [1, "form-item"], [1, "req"], [1, "form-input"], ["type", "text", "formControlName", "name", "required", "", "appFocusInitial", "", 1, "text-control"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "form-button-placer"], ["type", "submit", 1, "hidden"], [1, "btn", "v", "save", "button", "ico", "ico-floppy-disk2", 3, "click"], ["class", "btn v del button", 3, "click", 4, "ngIf"], [1, "btn", "v", "cancel", "button", "gray", 3, "click"], ["error", ""], [1, "btn", "v", "del", "button", 3, "click"], ["class", "error", 4, "ngIf"], [1, "error"]],
      template: function ClientGroupEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-editor-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("save", function ClientGroupEditorComponent_Template_app_editor_header_save_0_listener() {
            return ctx.save();
          })("remove", function ClientGroupEditorComponent_Template_app_editor_header_remove_0_listener() {
            return ctx.remove();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ClientGroupEditorComponent_Template_form_ngSubmit_2_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div")(9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 8)(11, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 8)(16, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u044B:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 10)(21, "div")(22, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ClientGroupEditorComponent_ng_container_24_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientGroupEditorComponent_Template_span_click_27_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ClientGroupEditorComponent_span_30_Template, 3, 0, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ClientGroupEditorComponent_Template_span_click_31_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "\u041E\u0442\u043C\u0435\u043D\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ClientGroupEditorComponent_ng_template_34_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx.title)("isEditMode", ctx.isEditMode)("name", ctx.nameForHeader)("backLink", "/settings/client-group");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isEditMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_3__.EditorHeaderComponent, _material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_4__.FocusInitialDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_5__.FocusFirstInvalidDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 20772:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/client-group/client-group.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientGroupComponent: () => (/* binding */ ClientGroupComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/classes */ 56825);
/* harmony import */ var src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/filter/services/filter.service */ 50535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../material/components/paginator/paginator.component */ 32105);











const _c0 = function (a0) {
  return {
    "odd": a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
function ClientGroupComponent_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 7)(1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientGroupComponent_tr_10_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const group_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.confirmRemove(group_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const isOdd_r4 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, isOdd_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](group_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, group_r3.id));
  }
}
function ClientGroupComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 14)(8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u0414\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", true);
  }
}
class ClientGroupComponent extends src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__.Table {
  constructor(customerService, dialog, snackBar, route, router, filter, userService) {
    super(route, router, dialog, snackBar, filter, userService);
    this.customerService = customerService;
    this.removedMessage = `Группа клиентов удалена`;
    this.sortField = 'name';
  }
  ngOnInit() {
    super.ngOnInit();
    this.loadRows();
  }
  load(params) {
    return this.customerService.customerGroupList(params);
  }
  delete(params) {
    return this.customerService.customerGroupDelete(params);
  }
  static {
    this.ɵfac = function ClientGroupComponent_Factory(t) {
      return new (t || ClientGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ClientGroupComponent,
      selectors: [["app-client-group"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 7,
      consts: [[1, "main-table", "fix-head", "table-4e6cc9770d169fc6e17fab7fb0968f9b"], [1, "col", "column-sortable", 3, "ngClass", "click"], [1, "sorting-indicator"], [2, "width", "40px"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "total", "count", "start", "limits", "startChange", "countChange"], ["removeDialogRef", ""], [3, "ngClass"], [1, "col"], [1, "col", "min"], ["title", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", 1, "link-pic", "link-edit", "ico", "ico-pencil", "fn-link", 3, "routerLink"], ["title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 1, "link-pic", "link-del", "ico", "ico-cross2", "fn-link", 3, "click"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", ""]],
      template: function ClientGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientGroupComponent_Template_th_click_3_listener() {
            return ctx.sort("name");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ClientGroupComponent_tr_10_Template, 6, 7, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "app-paginator", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("startChange", function ClientGroupComponent_Template_app_paginator_startChange_11_listener($event) {
            return ctx.onStartChange($event);
          })("countChange", function ClientGroupComponent_Template_app_paginator_countChange_11_listener($event) {
            return ctx.onCountChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ClientGroupComponent_ng_template_12_Template, 12, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.getSortClass("name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("title", ctx.getColTitle("name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rows);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("total", ctx.total)("count", ctx.count)("start", ctx.start)("limits", ctx.limits);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_3__.PaginatorComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", ".main-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  box-shadow: 0 2px 8px rgba(36, 45, 67, 0.08);\n}\n\n.main-table.hide-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.main-table.hide-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.main-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #83909E;\n  border-left: 1px solid #83909E;\n  text-align: left;\n  color: #fff;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 13px;\n  padding: 18px 24px 16px;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E0E5EB;\n  padding: 12px 24px 10px;\n  border-right: 0;\n  border-left: 0;\n}\n\n.main-table[_ngcontent-%COMP%]   td.col[_ngcontent-%COMP%] {\n  border: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td.min[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.main-table[_ngcontent-%COMP%]   td.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main-table[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background: #F7F9FC;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pic[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: top;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pic.no-text[_ngcontent-%COMP%] {\n  font-size: 0;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-edit[_ngcontent-%COMP%] {\n  background: url('pic-btn-edit.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-del[_ngcontent-%COMP%] {\n  background: url('pic-btn-del-gray.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-txt[_ngcontent-%COMP%]:before {\n  content: \"TXT\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pdf[_ngcontent-%COMP%]:before {\n  content: \"PDF\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-show[_ngcontent-%COMP%] {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-hide[_ngcontent-%COMP%] {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n  opacity: 0.2;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-view[_ngcontent-%COMP%] {\n  background: url('pic-btn-show.svg') no-repeat 0 2px;\n  display: inline-block;\n  padding-left: 24px;\n  text-decoration: none;\n  color: #2C3640;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9tYWluLXRhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSwyREFBQTtBQUhGOztBQU1BO0VBQ0UsK0RBQUE7QUFIRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSwyREFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLDJEQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsbURBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgzNiwgNDUsIDY3LCAwLjA4KTtcbn1cblxuLm1haW4tdGFibGUuaGlkZS1oZWFkZXIgdGgge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYWluLXRhYmxlLmhpZGUtaGVhZGVyIHRoICoge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWFpbi10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQ6ICM4MzkwOUU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzgzOTA5RTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIHBhZGRpbmc6IDE4cHggMjRweCAxNnB4O1xufVxuXG4ubWFpbi10YWJsZSB0aC5jb2x1bW4tc29ydGFibGUge31cblxuLm1haW4tdGFibGUgdGguY29sdW1uLXNvcnRhYmxlIC5zb3J0aW5nLWluZGljYXRvciB7fVxuXG4ubWFpbi10YWJsZSB0ZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEU1RUI7XG4gIHBhZGRpbmc6IDEycHggMjRweCAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5taW4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tYWluLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTVFQjtcbn1cblxuLm1haW4tdGFibGUgdGQucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1haW4tdGFibGUgdGQuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi10YWJsZSAub2RkPnRkIHtcbiAgYmFja2dyb3VuZDogI0Y3RjlGQztcbn1cblxuLm1haW4tdGFibGUgLmxpbmstcGljIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1waWMubm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZWRpdCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tZWRpdC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZGVsIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1kZWwtZ3JheS5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmZuLWxpbmsge31cblxuLm1haW4tdGFibGUgLmxpbmstdHh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiVFhUXCI7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1wZGY6YmVmb3JlIHtcbiAgY29udGVudDogXCJQREZcIjtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXNob3cge1xuICBmb250LXNpemU6IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tc2hvdy5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstaGlkZSB7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1zaG93LnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXZpZXcge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLXNob3cuc3ZnJykgbm8tcmVwZWF0IDAgMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJDMzY0MDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 89660:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/company-editor/company-editor.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyEditorComponent: () => (/* binding */ CompanyEditorComponent)
/* harmony export */ });
/* harmony import */ var _classes_settings_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../classes/settings-editor */ 47495);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../validators */ 50040);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _api_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../api/services/company.service */ 12804);
/* harmony import */ var _api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../api/services */ 43273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../material/components/editor-header/editor-header.component */ 67157);
/* harmony import */ var _material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../material/directives/focus-initial.directive */ 19323);
/* harmony import */ var _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../material/directives/phone-mask.directive */ 23541);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/directives/focus-first-invalid.directive */ 87683);

















function CompanyEditorComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function CompanyEditorComponent_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function CompanyEditorComponent_ng_container_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function CompanyEditorComponent_ng_container_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function CompanyEditorComponent_mat_option_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const employee_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", employee_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", employee_r16.name_f, " ", employee_r16.name_i, " ", employee_r16.name_o, " ");
  }
}
function CompanyEditorComponent_mat_option_185_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const employee_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", employee_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", employee_r17.name_f, " ", employee_r17.name_i, " ", employee_r17.name_o, " ");
  }
}
function CompanyEditorComponent_mat_option_202_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const system_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", system_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](system_r18.name);
  }
}
function CompanyEditorComponent_mat_option_235_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currency_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", currency_r19.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", currency_r19.name, " ");
  }
}
function CompanyEditorComponent_ng_container_302_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function CompanyEditorComponent_ng_container_311_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function CompanyEditorComponent_mat_option_346_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const employee_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", employee_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", employee_r20.name_f, " ", employee_r20.name_i, " ", employee_r20.name_o, " ");
  }
}
function CompanyEditorComponent_mat_option_444_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const taxSystem_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", taxSystem_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", taxSystem_r21.name, " ");
  }
}
function CompanyEditorComponent_mat_option_454_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currency_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", currency_r22.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", currency_r22.name, " ");
  }
}
function CompanyEditorComponent_span_460_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CompanyEditorComponent_span_460_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r23.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function CompanyEditorComponent_ng_template_464_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().name;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r26.getError(name_r25));
  }
}
function CompanyEditorComponent_ng_template_464_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, CompanyEditorComponent_ng_template_464_div_0_Template, 2, 1, "div", 135);
  }
  if (rf & 2) {
    const name_r25 = ctx.name;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r15.isFormSubmitted && ctx_r15.hasError(name_r25));
  }
}
const _c0 = function () {
  return {
    name: "name"
  };
};
const _c1 = function () {
  return {
    name: "inn"
  };
};
const _c2 = function () {
  return {
    name: "phone"
  };
};
const _c3 = function () {
  return {
    name: "email"
  };
};
const _c4 = function () {
  return {
    name: "noresident_phone"
  };
};
const _c5 = function () {
  return {
    name: "noresident_email"
  };
};
class CompanyEditorComponent extends _classes_settings_editor__WEBPACK_IMPORTED_MODULE_0__.SettingsEditor {
  constructor(fb, snackBar, companyService, systemService, route, location, router) {
    super(location, companyService, systemService, route, snackBar, router);
    this.fb = fb;
    this.entity = 'Организация';
    this.editTitle = 'Информация об организации';
    this.newTitle = 'Добавление организации';
    this.savedMessage = `${this.entity} сохранен`;
    this.removedMessage = `${this.entity} удален`;
    this.createdMessage = `${this.entity} создан`;
    this.notFoundMessage = `${this.entity} не найден`;
    this.form = this.fb.group({
      id: ['', []],
      tax_system: ['', []],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      name_short: ['', []],
      jur_address: ['', []],
      post_address: ['', []],
      inn: ['', [_validators__WEBPACK_IMPORTED_MODULE_1__.innValidator]],
      kpp: ['', []],
      ogrn: ['', []],
      okpo: ['', []],
      email: ['', [_validators__WEBPACK_IMPORTED_MODULE_1__.emailValidator]],
      phone: ['', []],
      website: ['', []],
      skype: ['', []],
      responsible_person_id: ['', []],
      responsible_person_position: ['', []],
      responsible_person_base: ['', []],
      responsible_person_fio: ['', []],
      chief_accountant_id: ['', []],
      bank_name: ['', []],
      bank_rs: ['', []],
      bank_ks: ['', []],
      bank_bik: ['', []],
      bank_kpp: ['', []],
      bank_currency: ['', []],
      noresident_name: ['', []],
      noresident_address: ['', []],
      noresident_phone: ['', []],
      noresident_email: ['', [_validators__WEBPACK_IMPORTED_MODULE_1__.emailValidator]],
      noresident_skype: ['', []],
      noresident_website: ['', []],
      noresident_signatory_id: ['', []],
      noresident_signatory_position: ['', []],
      noresident_signatory_fio: ['', []],
      noresident_bank_name: ['', []],
      noresident_bank_address: ['', []],
      noresident_bank_currency: ['', []],
      noresident_bank_rs: ['', []],
      noresident_bank_rs_name: ['', []],
      noresident_bank_swift: ['', []],
      noresident_bank_im: ['', []],
      base_currency: ['']
    });
  }
  ngOnInit() {
    super.ngOnInit();
    this.loadTaxSystems();
    this.loadCurrencies();
    this.loadEmployees();
  }
  create(params) {
    return this.companyService.companyCreate(params);
  }
  read(params) {
    return this.companyService.companyInfo(params);
  }
  update(params) {
    return this.companyService.companyUpdate(params);
  }
  delete(params) {
    return this.companyService.companyDelete(params);
  }
  getNameForHeader(body) {
    return body.name;
  }
  static {
    this.ɵfac = function CompanyEditorComponent_Factory(t) {
      return new (t || CompanyEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_api_services_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_api_services__WEBPACK_IMPORTED_MODULE_3__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: CompanyEditorComponent,
      selectors: [["app-company-editor"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
      decls: 466,
      vars: 31,
      consts: [[3, "title", "isEditMode", "name", "backLink", "save", "remove"], [1, "edit-form"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-placer"], [1, "form-items"], ["data-id", "group_0", 1, "form-group"], [1, "form-group-title"], ["data-id", "title_0", 1, "form-sub-title"], ["data-id", "group_inline_1", 1, "form-item", "form-inline-group"], [1, "form-title"], [1, "form-data"], [1, "form-group-row"], ["data-id", "var_name", 1, "form-item", 2, "width", "50%"], [1, "req"], [1, "form-input"], ["type", "hidden", "formControlName", "id", 1, "text-control"], ["type", "text", "formControlName", "name", "required", "", "appFocusInitial", "", 1, "text-control"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-id", "var_name_short", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "name_short", 1, "text-control"], ["data-id", "group_inline_2", 1, "form-item", "form-inline-group"], ["data-id", "var_jur_address", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "jur_address", 1, "text-control"], ["data-id", "var_post_address", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "post_address", 1, "text-control"], ["data-id", "group_inline_3", 1, "form-item", "form-inline-group"], ["data-id", "var_inn", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "inn", 1, "text-control"], ["data-id", "var_kpp", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "kpp", 1, "text-control"], ["data-id", "var_ogrn", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "ogrn", 1, "text-control"], ["data-id", "var_okpo", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "okpo", 1, "text-control"], ["data-id", "group_inline_4", 1, "form-item", "form-inline-group"], ["data-id", "var_phone", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "phone", "appPhoneMask", "", 1, "text-control"], ["data-id", "var_email", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "email", 1, "text-control"], ["data-id", "var_website", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "website", 1, "text-control"], ["data-id", "var_skype", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "skype", 1, "text-control"], ["data-id", "line_0", 1, "form-line"], ["data-id", "title_1", 1, "form-sub-title"], ["data-id", "group_inline_5", 1, "form-item", "form-inline-group"], ["data-id", "var_responsible_person_fio", 1, "form-item", 2, "width", "50%"], ["appearance", "outline", 1, "ui-select", 2, "margin-bottom", "0px", "margin-top", "0px", "margin-right", "0px", "width", "100%"], ["formControlName", "responsible_person_id"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["data-id", "var_responsible_person_position", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "responsible_person_position", 1, "text-control"], ["data-id", "group_inline_6", 1, "form-item", "form-inline-group"], ["data-id", "var_responsible_person_base", 1, "form-item", 2, "width", "100%"], ["type", "text", "formControlName", "responsible_person_base", 1, "text-control"], ["data-id", "line_1", 1, "form-line"], ["data-id", "title_2", 1, "form-sub-title"], ["data-id", "group_inline_7", 1, "form-item", "form-inline-group"], ["data-id", "var_chief_accountant_fio", 1, "form-item", 2, "width", "100%"], ["formControlName", "chief_accountant_id"], ["appearance", "outline", 1, "ui-select", 2, "width", "100%"], ["formControlName", "tax_system"], ["data-id", "line_2", 1, "form-line"], ["data-id", "title_3", 1, "form-sub-title"], ["data-id", "group_inline_8", 1, "form-item", "form-inline-group"], ["data-id", "var_bank_name", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "bank_name", 1, "text-control"], ["data-id", "var_bank_rs", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "bank_rs", 1, "text-control"], ["data-id", "var_bank_currency", 1, "form-item", 2, "width", "25%"], ["formControlName", "bank_currency"], ["data-id", "group_inline_9", 1, "form-item", "form-inline-group"], ["data-id", "var_bank_ks", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "bank_ks", 1, "text-control"], ["data-id", "var_bank_bik", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "bank_bik", 1, "text-control"], ["data-id", "var_bank_kpp", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "bank_kpp", 1, "text-control"], ["data-id", "group_10", 1, "form-group"], ["data-id", "title_4", 1, "form-sub-title"], ["data-id", "group_inline_11", 1, "form-item", "form-inline-group"], ["data-id", "var_noresident_name", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "noresident_name", 1, "text-control"], ["data-id", "var_noresident_address", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "noresident_address", 1, "text-control"], ["data-id", "group_inline_12", 1, "form-item", "form-inline-group"], ["data-id", "var_noresident_phone", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "noresident_phone", "appPhoneMask", "", 1, "text-control"], ["data-id", "var_noresident_email", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "noresident_email", 1, "text-control"], ["data-id", "var_noresident_website", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "noresident_website", 1, "text-control"], ["data-id", "var_noresident_skype", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "noresident_skype", 1, "text-control"], ["data-id", "line_3", 1, "form-line"], ["data-id", "title_5", 1, "form-sub-title"], ["data-id", "group_inline_13", 1, "form-item", "form-inline-group"], ["data-id", "var_noresident_signatory_fio", 1, "form-item", 2, "width", "50%"], ["formControlName", "noresident_signatory_id"], ["data-id", "var_noresident_signatory_position", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "noresident_signatory_position", 1, "text-control"], ["data-id", "line_4", 1, "form-line"], ["data-id", "title_6", 1, "form-sub-title"], ["data-id", "group_inline_14", 1, "form-item", "form-inline-group"], ["data-id", "var_noresident_bank_name", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "noresident_bank_name", 1, "text-control"], ["data-id", "var_noresident_bank_address", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "noresident_bank_address", 1, "text-control"], ["data-id", "group_inline_15", 1, "form-item", "form-inline-group"], [1, "width_50", "form-group-row"], ["data-id", "var_noresident_bank_rs", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "noresident_bank_rs", 1, "text-control"], ["data-id", "var_noresident_bank_currency", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "noresident_bank_currency", 1, "text-control"], ["data-id", "var_noresident_bank_rs_name", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "noresident_bank_rs_name", 1, "text-control"], ["data-id", "group_inline_16", 1, "form-item", "form-inline-group"], ["data-id", "var_noresident_bank_swift", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "noresident_bank_swift", 1, "text-control"], ["data-id", "var_noresident_bank_im", 1, "form-item", 2, "width", "50%"], ["type", "text", "formControlName", "noresident_bank_im", 1, "text-control"], ["data-id", "group_17", 1, "form-group"], ["data-id", "group_inline_18", 1, "form-item", "form-inline-group"], ["data-id", "var_tax_system", 1, "form-item", 2, "width", "50%"], ["data-id", "var_base_currency", 1, "form-item", 2, "width", "50%"], ["formControlName", "base_currency"], [1, "form-button-placer"], ["type", "submit", 1, "hidden"], [1, "btn", "v", "save", "button", "ico", "ico-floppy-disk2", 3, "click"], ["class", "btn v del button", 3, "click", 4, "ngIf"], [1, "btn", "v", "cancel", "button", "gray", 3, "click"], ["error", ""], [3, "value"], [1, "btn", "v", "del", "button", 3, "click"], ["class", "error", 4, "ngIf"], [1, "error"]],
      template: function CompanyEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-editor-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("save", function CompanyEditorComponent_Template_app_editor_header_save_0_listener() {
            return ctx.save();
          })("remove", function CompanyEditorComponent_Template_app_editor_header_remove_0_listener() {
            return ctx.remove();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function CompanyEditorComponent_Template_form_ngSubmit_2_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0434\u043B\u044F \u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u043E\u0432 \u0420\u0424");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div")(9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 9)(17, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u043D\u043E\u0435:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 10)(22, "div")(23, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 15)(25, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, CompanyEditorComponent_ng_container_26_Template, 1, 0, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 18)(28, "div", 9)(29, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "\u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u043E\u0435:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 10)(32, "div")(33, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 10)(38, "div", 11)(39, "div", 21)(40, "div", 9)(41, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "\u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 10)(44, "div")(45, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 23)(48, "div", 9)(49, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "\u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 10)(52, "div")(53, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 10)(58, "div", 11)(59, "div", 26)(60, "div", 9)(61, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, "\u0418\u041D\u041D:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 10)(64, "div")(65, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, CompanyEditorComponent_ng_container_67_Template, 1, 0, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 28)(69, "div", 9)(70, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "\u041A\u041F\u041F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 10)(73, "div")(74, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](75, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 30)(77, "div", 9)(78, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "\u041E\u0413\u0420\u041D:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 10)(81, "div")(82, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](83, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div", 32)(85, "div", 9)(86, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "\u041E\u041A\u041F\u041E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 10)(89, "div")(90, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](91, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](93, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "div", 10)(95, "div", 11)(96, "div", 35)(97, "div", 9)(98, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, "\u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 10)(101, "div")(102, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](103, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](104, CompanyEditorComponent_ng_container_104_Template, 1, 0, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "div", 37)(106, "div", 9)(107, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, "e-mail:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div", 10)(110, "div")(111, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](112, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](113, CompanyEditorComponent_ng_container_113_Template, 1, 0, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "div", 39)(115, "div", 9)(116, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117, "\u0432\u0435\u0431\u0441\u0430\u0439\u0442:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "div", 10)(119, "div")(120, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](121, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "div", 41)(123, "div", 9)(124, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, "Skype:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "div", 10)(127, "div")(128, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](129, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](130, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](132, "\u041B\u0438\u0446\u043E, \u0438\u043C\u0435\u044E\u0449\u0435\u0435 \u043F\u0440\u0430\u0432\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](134, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "div", 10)(136, "div", 11)(137, "div", 46)(138, "div", 9)(139, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140, "\u0424.\u0418.\u041E.:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "div", 10)(142, "div")(143, "div", 14)(144, "mat-form-field", 47)(145, "mat-select", 48)(146, "mat-option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](147, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](148, CompanyEditorComponent_mat_option_148_Template, 2, 4, "mat-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "div", 51)(150, "div", 9)(151, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](152, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "div", 10)(154, "div")(155, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](156, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](158, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "div", 10)(160, "div", 11)(161, "div", 54)(162, "div", 9)(163, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](164, "\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "div", 10)(166, "div")(167, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](168, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](169, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](170, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](173, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](174, "div", 10)(175, "div", 11)(176, "div", 59)(177, "div", 9)(178, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](179, "\u0424.\u0418.\u041E.:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](180, "div", 10)(181, "mat-form-field", 47)(182, "mat-select", 60)(183, "mat-option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](184, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](185, CompanyEditorComponent_mat_option_185_Template, 2, 4, "mat-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](186, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](187, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](188, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0430\u043B\u043E\u0433\u043E\u043E\u0431\u043B\u0430\u0436\u0435\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](189, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](190, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](191, "div", 10)(192, "div", 11)(193, "div", 59)(194, "div", 9)(195, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](196, "\u0432\u0438\u0434:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](197, "div", 10)(198, "mat-form-field", 61)(199, "mat-select", 62)(200, "mat-option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](201, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](202, CompanyEditorComponent_mat_option_202_Template, 2, 2, "mat-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](203, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](204, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](205, "\u0411\u0430\u043D\u043A");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](206, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](207, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](208, "div", 10)(209, "div", 11)(210, "div", 66)(211, "div", 9)(212, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](213, "\u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0430\u043D\u043A\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](214, "div", 10)(215, "div")(216, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](217, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](218, "div", 68)(219, "div", 9)(220, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](221, "\u0440\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](222, "div", 10)(223, "div")(224, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](225, "input", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](226, "div", 70)(227, "div", 9)(228, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](229, "\u0432\u0430\u043B\u044E\u0442\u0430 \u0441\u0447\u0435\u0442\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](230, "div", 10)(231, "mat-form-field", 47)(232, "mat-select", 71)(233, "mat-option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](234, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](235, CompanyEditorComponent_mat_option_235_Template, 2, 2, "mat-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](236, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](237, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](238, "div", 10)(239, "div", 11)(240, "div", 73)(241, "div", 9)(242, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](243, "\u041A\u043E\u0440\u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0442\u0441\u043A\u0438\u0439 \u0441\u0447\u0435\u0442:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](244, "div", 10)(245, "div")(246, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](247, "input", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](248, "div", 75)(249, "div", 9)(250, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](251, "\u0431\u0438\u043A:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](252, "div", 10)(253, "div")(254, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](255, "input", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](256, "div", 77)(257, "div", 9)(258, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](259, "\u041A\u041F\u041F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](260, "div", 10)(261, "div")(262, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](263, "input", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](264, "div", 79)(265, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](266, "\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0434\u043B\u044F \u041D\u0415\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u043E\u0432 \u0420\u0424");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](267, "div")(268, "div", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](269, "Company");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](270, "div", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](271, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](272, "div", 10)(273, "div", 11)(274, "div", 82)(275, "div", 9)(276, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](277, "full name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](278, "div", 10)(279, "div")(280, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](281, "input", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](282, "div", 84)(283, "div", 9)(284, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](285, "address:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](286, "div", 10)(287, "div")(288, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](289, "input", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](290, "div", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](291, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](292, "div", 10)(293, "div", 11)(294, "div", 87)(295, "div", 9)(296, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](297, "phone / fax:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](298, "div", 10)(299, "div")(300, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](301, "input", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](302, CompanyEditorComponent_ng_container_302_Template, 1, 0, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](303, "div", 89)(304, "div", 9)(305, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](306, "e-mail:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](307, "div", 10)(308, "div")(309, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](310, "input", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](311, CompanyEditorComponent_ng_container_311_Template, 1, 0, "ng-container", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](312, "div", 91)(313, "div", 9)(314, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](315, "Website:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](316, "div", 10)(317, "div")(318, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](319, "input", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](320, "div", 93)(321, "div", 9)(322, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](323, "Skype:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](324, "div", 10)(325, "div")(326, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](327, "input", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](328, "div", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](329, "div", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](330, "Signatory");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](331, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](332, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](333, "div", 10)(334, "div", 11)(335, "div", 98)(336, "div", 9)(337, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](338, "full name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](339, "div", 10)(340, "div")(341, "div", 14)(342, "mat-form-field", 47)(343, "mat-select", 99)(344, "mat-option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](345, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](346, CompanyEditorComponent_mat_option_346_Template, 2, 4, "mat-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](347, "div", 100)(348, "div", 9)(349, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](350, "position:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](351, "div", 10)(352, "div")(353, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](354, "input", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](355, "div", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](356, "div", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](357, "Banking Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](358, "div", 104);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](359, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](360, "div", 10)(361, "div", 11)(362, "div", 105)(363, "div", 9)(364, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](365, "bank name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](366, "div", 10)(367, "div")(368, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](369, "input", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](370, "div", 107)(371, "div", 9)(372, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](373, "bank address:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](374, "div", 10)(375, "div")(376, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](377, "input", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](378, "div", 109);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](379, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](380, "div", 10)(381, "div", 11)(382, "div", 110)(383, "div", 111)(384, "div", 9)(385, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](386, "account Number:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](387, "div", 10)(388, "div")(389, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](390, "input", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](391, "div", 113)(392, "div", 9)(393, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](394, "account currency:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](395, "div", 10)(396, "div")(397, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](398, "input", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](399, "div", 115)(400, "div", 9)(401, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](402, "account name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](403, "div", 10)(404, "div")(405, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](406, "input", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](407, "div", 117);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](408, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](409, "div", 10)(410, "div", 11)(411, "div", 118)(412, "div", 9)(413, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](414, "swift code:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](415, "div", 10)(416, "div")(417, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](418, "input", 119);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](419, "div", 120)(420, "div", 9)(421, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](422, "intermediary bank:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](423, "div", 10)(424, "div")(425, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](426, "input", 121);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](427, "div", 122)(428, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](429, "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](430, "div")(431, "div", 123);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](432, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](433, "div", 10)(434, "div", 11)(435, "div", 124)(436, "div", 9)(437, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](438, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0430\u043B\u043E\u0433\u043E\u043E\u0431\u043B\u043E\u0436\u0435\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](439, "div", 10)(440, "mat-form-field", 47)(441, "mat-select", 62)(442, "mat-option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](443, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](444, CompanyEditorComponent_mat_option_444_Template, 2, 2, "mat-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](445, "div", 125)(446, "div", 9)(447, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](448, "\u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0432\u0430\u043B\u044E\u0442\u0430 \u0441\u0447\u0435\u0442\u043E\u0432:");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](449, "div", 10)(450, "mat-form-field", 47)(451, "mat-select", 126)(452, "mat-option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](453, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](454, CompanyEditorComponent_mat_option_454_Template, 2, 2, "mat-option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](455, "div", 127);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](456, "input", 128);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](457, "span", 129);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CompanyEditorComponent_Template_span_click_457_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](458, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](459, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](460, CompanyEditorComponent_span_460_Template, 3, 0, "span", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](461, "span", 131);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CompanyEditorComponent_Template_span_click_461_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](462, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](463, "\u041E\u0442\u043C\u0435\u043D\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](464, CompanyEditorComponent_ng_template_464_Template, 1, 1, "ng-template", null, 132, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](465);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx.title)("isEditMode", ctx.isEditMode)("name", ctx.nameForHeader)("backLink", "/settings/company");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](25, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](26, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](27, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](28, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.employees);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.employees);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.taxSystems);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.currencies);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](67);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](29, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](30, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.employees);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](98);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.taxSystems);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.currencies);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isEditMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_4__.EditorHeaderComponent, _material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_5__.FocusInitialDirective, _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_6__.PhoneMaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_7__.FocusFirstInvalidDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 55660:
/*!********************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/company/company.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyComponent: () => (/* binding */ CompanyComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/classes */ 56825);
/* harmony import */ var src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/filter/services/filter.service */ 50535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _api_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../api/services/company.service */ 12804);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../material/components/paginator/paginator.component */ 32105);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);













const _c0 = function (a0) {
  return {
    "odd": a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
function CompanyComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 9)(1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td")(13, "form", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 16)(19, "div")(20, "div", 17)(21, "label", 18)(22, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CompanyComponent_tr_31_Template_input_ngModelChange_22_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const company_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.onGeneralChange($event, company_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "span", 21)(25, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "a", 25)(29, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CompanyComponent_tr_31_Template_span_click_33_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const company_r5 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.confirmRemove(company_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const company_r5 = ctx.$implicit;
    const isOdd_r6 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, isOdd_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](company_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", company_r5.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](company_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](company_r5.inn);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](company_r5.responsible_person_fio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", company_r5.general === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, company_r5.id));
  }
}
function CompanyComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 32)(8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u0414\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", true);
  }
}
function CompanyComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const employee_r11 = ctx.employee;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" ", employee_r11 == null ? null : employee_r11.name_f, " ", employee_r11 == null ? null : employee_r11.name_i, " ", employee_r11 == null ? null : employee_r11.name_o, "\n");
  }
}
class CompanyComponent extends src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__.Table {
  constructor(companyService, dialog, snackBar, route, router, filter, userService) {
    super(route, router, dialog, snackBar, filter, userService);
    this.companyService = companyService;
    this.removedMessage = `Компания удалена`;
    this.sortField = 'name';
  }
  ngOnInit() {
    super.ngOnInit();
    this.loadRows();
  }
  load(params) {
    console.log('Company');
    return this.companyService.companyList(params);
  }
  delete(params) {
    return this.companyService.companyDelete(params);
  }
  onGeneralChange(general, company) {
    const body = {
      ...company,
      general: general ? 1 : 0
    };
    this.companyService.companyUpdate({
      body
    }).subscribe({
      next: () => this.loadRows(),
      error: err => this.snackBar.open(`Ошибка: ` + err?.error?.error_message, undefined, this.snackBarWithLongDuration)
    });
  }
  static {
    this.ɵfac = function CompanyComponent_Factory(t) {
      return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_services_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CompanyComponent,
      selectors: [["app-company"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 37,
      vars: 17,
      consts: [[1, "main-table", "fix-head", "table-00bea6b89e723964a80f4b0d828e09b7"], [1, "col", "column-sortable", 3, "ngClass", "click"], [1, "sorting-indicator"], [1, "col", "column-sortable"], [1, "right", 2, "width", "150px"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "total", "count", "start", "limits", "startChange", "countChange"], ["removeDialogRef", ""], ["fio", ""], [3, "ngClass"], [1, "col"], [1, "form"], [1, "form-placer"], [1, "form-items"], ["data-id", "main", 1, "form-item"], [1, "form-title"], [1, "form-data"], [1, "form-input"], [1, "switch", "outer"], ["type", "checkbox", "name", "general", 3, "ngModel", "ngModelChange"], [1, "switcher"], ["data-on", "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F", "data-off", "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0433\u043B\u0430\u0432\u043D\u043E\u0439", 1, "bg"], [1, "thumb"], ["data-on", "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F", "data-off", "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0433\u043B\u0430\u0432\u043D\u043E\u0439", 1, "switch-title"], [1, "col", "min", "right"], ["data-href", "/erp/settings/company?id=2&act=save_txt", "title", "TXT", 1, "link-pic", "ajax", "link-txt", "fn-link"], ["data-href", "/erp/settings/company?id=2&act=save_pdf", "title", "PDF", 1, "link-pic", "ajax", "link-pdf", "fn-link"], ["data-href", "/erp/settings/company?id=2&act=switch_show&show=1", "title", "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C", 1, "link-pic", "ajax", "notext", "fn-link", "link-hide"], ["title", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", 1, "link-pic", "link-edit", "ico", "ico-pencil", "fn-link", 3, "routerLink"], ["title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 1, "link-pic", "link-del", "ico", "ico-cross2", "fn-link", 3, "click"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", ""]],
      template: function CompanyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CompanyComponent_Template_th_click_3_listener() {
            return ctx.sort("name");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CompanyComponent_Template_th_click_7_listener() {
            return ctx.sort("phone");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CompanyComponent_Template_th_click_11_listener() {
            return ctx.sort("email");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "E-mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CompanyComponent_Template_th_click_15_listener() {
            return ctx.sort("inn");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\u0418\u041D\u041D");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CompanyComponent_Template_th_click_19_listener() {
            return ctx.sort("responsible_person_fio");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 3)(24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CompanyComponent_Template_th_click_26_listener() {
            return ctx.sort("general");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "th", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, CompanyComponent_tr_31_Template, 34, 12, "tr", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "app-paginator", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("startChange", function CompanyComponent_Template_app_paginator_startChange_32_listener($event) {
            return ctx.onStartChange($event);
          })("countChange", function CompanyComponent_Template_app_paginator_countChange_32_listener($event) {
            return ctx.onCountChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, CompanyComponent_ng_template_33_Template, 12, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, CompanyComponent_ng_template_35_Template, 1, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("inn"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("inn"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("responsible_person_fio"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("responsible_person_id"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("general"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("general"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.rows);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("total", ctx.total)("count", ctx.count)("start", ctx.start)("limits", ctx.limits);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__.PaginatorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", ".main-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  box-shadow: 0 2px 8px rgba(36, 45, 67, 0.08);\n}\n\n.main-table.hide-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.main-table.hide-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.main-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #83909E;\n  border-left: 1px solid #83909E;\n  text-align: left;\n  color: #fff;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 13px;\n  padding: 18px 24px 16px;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E0E5EB;\n  padding: 12px 24px 10px;\n  border-right: 0;\n  border-left: 0;\n}\n\n.main-table[_ngcontent-%COMP%]   td.col[_ngcontent-%COMP%] {\n  border: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td.min[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.main-table[_ngcontent-%COMP%]   td.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main-table[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background: #F7F9FC;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pic[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: top;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pic.no-text[_ngcontent-%COMP%] {\n  font-size: 0;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-edit[_ngcontent-%COMP%] {\n  background: url('pic-btn-edit.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-del[_ngcontent-%COMP%] {\n  background: url('pic-btn-del-gray.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-txt[_ngcontent-%COMP%]:before {\n  content: \"TXT\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pdf[_ngcontent-%COMP%]:before {\n  content: \"PDF\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-show[_ngcontent-%COMP%] {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-hide[_ngcontent-%COMP%] {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n  opacity: 0.2;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-view[_ngcontent-%COMP%] {\n  background: url('pic-btn-show.svg') no-repeat 0 2px;\n  display: inline-block;\n  padding-left: 24px;\n  text-decoration: none;\n  color: #2C3640;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9tYWluLXRhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSwyREFBQTtBQUhGOztBQU1BO0VBQ0UsK0RBQUE7QUFIRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSwyREFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLDJEQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsbURBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgzNiwgNDUsIDY3LCAwLjA4KTtcbn1cblxuLm1haW4tdGFibGUuaGlkZS1oZWFkZXIgdGgge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYWluLXRhYmxlLmhpZGUtaGVhZGVyIHRoICoge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWFpbi10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQ6ICM4MzkwOUU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzgzOTA5RTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIHBhZGRpbmc6IDE4cHggMjRweCAxNnB4O1xufVxuXG4ubWFpbi10YWJsZSB0aC5jb2x1bW4tc29ydGFibGUge31cblxuLm1haW4tdGFibGUgdGguY29sdW1uLXNvcnRhYmxlIC5zb3J0aW5nLWluZGljYXRvciB7fVxuXG4ubWFpbi10YWJsZSB0ZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEU1RUI7XG4gIHBhZGRpbmc6IDEycHggMjRweCAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5taW4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tYWluLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTVFQjtcbn1cblxuLm1haW4tdGFibGUgdGQucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1haW4tdGFibGUgdGQuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi10YWJsZSAub2RkPnRkIHtcbiAgYmFja2dyb3VuZDogI0Y3RjlGQztcbn1cblxuLm1haW4tdGFibGUgLmxpbmstcGljIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1waWMubm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZWRpdCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tZWRpdC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZGVsIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1kZWwtZ3JheS5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmZuLWxpbmsge31cblxuLm1haW4tdGFibGUgLmxpbmstdHh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiVFhUXCI7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1wZGY6YmVmb3JlIHtcbiAgY29udGVudDogXCJQREZcIjtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXNob3cge1xuICBmb250LXNpemU6IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tc2hvdy5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstaGlkZSB7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1zaG93LnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXZpZXcge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLXNob3cuc3ZnJykgbm8tcmVwZWF0IDAgMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJDMzY0MDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 43856:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/department-editor/department-editor.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentEditorComponent: () => (/* binding */ DepartmentEditorComponent)
/* harmony export */ });
/* harmony import */ var _classes_settings_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../classes/settings-editor */ 47495);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _api_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../api/services/company.service */ 12804);
/* harmony import */ var _api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../api/services */ 43273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../material/components/editor-header/editor-header.component */ 67157);
/* harmony import */ var _material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../material/directives/focus-initial.directive */ 19323);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/directives/focus-first-invalid.directive */ 87683);
/* harmony import */ var _department_employee_department_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../department-employee/department-employee.component */ 62624);













function DepartmentEditorComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}
function DepartmentEditorComponent_app_department_employee_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-department-employee", 24);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("departmentId", ctx_r1.departmentId);
  }
}
function DepartmentEditorComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DepartmentEditorComponent_span_31_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function DepartmentEditorComponent_ng_template_35_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().name;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r8.getError(name_r7));
  }
}
function DepartmentEditorComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, DepartmentEditorComponent_ng_template_35_div_0_Template, 2, 1, "div", 26);
  }
  if (rf & 2) {
    const name_r7 = ctx.name;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.isFormSubmitted && ctx_r4.hasError(name_r7));
  }
}
const _c0 = function () {
  return {
    name: "name"
  };
};
class DepartmentEditorComponent extends _classes_settings_editor__WEBPACK_IMPORTED_MODULE_0__.SettingsEditor {
  constructor(fb, snackBar, route, companyService, systemService, location, router) {
    super(location, companyService, systemService, route, snackBar, router);
    this.fb = fb;
    this.entity = 'Подразделение';
    this.editTitle = 'Информация о подразделении';
    this.newTitle = 'Добавление подразделения';
    this.savedMessage = `${this.entity} сохранено`;
    this.removedMessage = `${this.entity} удалено`;
    this.createdMessage = `${this.entity} создано`;
    this.notFoundMessage = `${this.entity} не найдено`;
    this.form = this.fb.group({
      id: [''],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.isEditMode) {
      this.departmentId = Number(this.route.snapshot.paramMap.get('id'));
    }
  }
  create(params) {
    return this.companyService.companyDepartmentCreate(params);
  }
  read(params) {
    return this.companyService.companyDepartmentInfo(params);
  }
  update(params) {
    return this.companyService.companyDepartmentUpdate(params);
  }
  delete(params) {
    return this.companyService.companyDepartmentDelete(params);
  }
  getNameForHeader(body) {
    return body.name;
  }
  static {
    this.ɵfac = function DepartmentEditorComponent_Factory(t) {
      return new (t || DepartmentEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_api_services_company_service__WEBPACK_IMPORTED_MODULE_1__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_api_services__WEBPACK_IMPORTED_MODULE_2__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: DepartmentEditorComponent,
      selectors: [["app-department-editor"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
      decls: 37,
      vars: 10,
      consts: [[3, "title", "isEditMode", "name", "backLink", "save", "remove"], [1, "edit-form"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-placer"], [1, "form-items"], [1, "form-group"], [1, "form-group-title"], ["type", "hidden", "formControlName", "id"], [1, "form-item", "form-inline-group"], [1, "form-title"], [1, "form-data"], [1, "form-group-row"], [1, "form-item"], [1, "req"], [1, "form-input"], ["type", "text", "formControlName", "name", "required", "", "appFocusInitial", "", 1, "text-control"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "departmentId", 4, "ngIf"], [1, "form-button-placer"], ["type", "submit", 1, "hidden"], [1, "btn", "v", "save", "button", "ico", "ico-floppy-disk2", 3, "click"], ["class", "btn v del button", 3, "click", 4, "ngIf"], [1, "btn", "v", "cancel", "button", "gray", 3, "click"], ["error", ""], [3, "departmentId"], [1, "btn", "v", "del", "button", 3, "click"], ["class", "error", 4, "ngIf"], [1, "error"]],
      template: function DepartmentEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-editor-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("save", function DepartmentEditorComponent_Template_app_editor_header_save_0_listener() {
            return ctx.save();
          })("remove", function DepartmentEditorComponent_Template_app_editor_header_remove_0_listener() {
            return ctx.remove();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function DepartmentEditorComponent_Template_form_ngSubmit_2_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 9)(16, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10)(21, "div")(22, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, DepartmentEditorComponent_ng_container_24_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, DepartmentEditorComponent_app_department_employee_25_Template, 1, 1, "app-department-employee", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DepartmentEditorComponent_Template_span_click_28_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, DepartmentEditorComponent_span_31_Template, 3, 0, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DepartmentEditorComponent_Template_span_click_32_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "\u041E\u0442\u043C\u0435\u043D\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, DepartmentEditorComponent_ng_template_35_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx.title)("isEditMode", ctx.isEditMode)("name", ctx.nameForHeader)("backLink", "/settings/department");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.departmentId);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isEditMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_3__.EditorHeaderComponent, _material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_4__.FocusInitialDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_5__.FocusFirstInvalidDirective, _department_employee_department_employee_component__WEBPACK_IMPORTED_MODULE_6__.DepartmentEmployeeComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", ".main-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  box-shadow: 0 2px 8px rgba(36, 45, 67, 0.08);\n}\n\n.main-table.hide-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.main-table.hide-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.main-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #83909E;\n  border-left: 1px solid #83909E;\n  text-align: left;\n  color: #fff;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 13px;\n  padding: 18px 24px 16px;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E0E5EB;\n  padding: 12px 24px 10px;\n  border-right: 0;\n  border-left: 0;\n}\n\n.main-table[_ngcontent-%COMP%]   td.col[_ngcontent-%COMP%] {\n  border: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td.min[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.main-table[_ngcontent-%COMP%]   td.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main-table[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background: #F7F9FC;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pic[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: top;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pic.no-text[_ngcontent-%COMP%] {\n  font-size: 0;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-edit[_ngcontent-%COMP%] {\n  background: url('pic-btn-edit.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-del[_ngcontent-%COMP%] {\n  background: url('pic-btn-del-gray.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-txt[_ngcontent-%COMP%]:before {\n  content: \"TXT\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pdf[_ngcontent-%COMP%]:before {\n  content: \"PDF\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-show[_ngcontent-%COMP%] {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-hide[_ngcontent-%COMP%] {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n  opacity: 0.2;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-view[_ngcontent-%COMP%] {\n  background: url('pic-btn-show.svg') no-repeat 0 2px;\n  display: inline-block;\n  padding-left: 24px;\n  text-decoration: none;\n  color: #2C3640;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9tYWluLXRhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSwyREFBQTtBQUhGOztBQU1BO0VBQ0UsK0RBQUE7QUFIRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSwyREFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLDJEQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsbURBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgzNiwgNDUsIDY3LCAwLjA4KTtcbn1cblxuLm1haW4tdGFibGUuaGlkZS1oZWFkZXIgdGgge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYWluLXRhYmxlLmhpZGUtaGVhZGVyIHRoICoge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWFpbi10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQ6ICM4MzkwOUU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzgzOTA5RTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIHBhZGRpbmc6IDE4cHggMjRweCAxNnB4O1xufVxuXG4ubWFpbi10YWJsZSB0aC5jb2x1bW4tc29ydGFibGUge31cblxuLm1haW4tdGFibGUgdGguY29sdW1uLXNvcnRhYmxlIC5zb3J0aW5nLWluZGljYXRvciB7fVxuXG4ubWFpbi10YWJsZSB0ZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEU1RUI7XG4gIHBhZGRpbmc6IDEycHggMjRweCAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5taW4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tYWluLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTVFQjtcbn1cblxuLm1haW4tdGFibGUgdGQucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1haW4tdGFibGUgdGQuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi10YWJsZSAub2RkPnRkIHtcbiAgYmFja2dyb3VuZDogI0Y3RjlGQztcbn1cblxuLm1haW4tdGFibGUgLmxpbmstcGljIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1waWMubm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZWRpdCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tZWRpdC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZGVsIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1kZWwtZ3JheS5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmZuLWxpbmsge31cblxuLm1haW4tdGFibGUgLmxpbmstdHh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiVFhUXCI7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1wZGY6YmVmb3JlIHtcbiAgY29udGVudDogXCJQREZcIjtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXNob3cge1xuICBmb250LXNpemU6IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tc2hvdy5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstaGlkZSB7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1zaG93LnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXZpZXcge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLXNob3cuc3ZnJykgbm8tcmVwZWF0IDAgMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJDMzY0MDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 62624:
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/department-employee/department-employee.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentEmployeeComponent: () => (/* binding */ DepartmentEmployeeComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/classes */ 56825);
/* harmony import */ var src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/filter/services/filter.service */ 50535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services/company.service */ 12804);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);












function DepartmentEmployeeComponent_thead_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "thead")(1, "tr")(2, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DepartmentEmployeeComponent_thead_4_Template_th_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.sort("num"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DepartmentEmployeeComponent_thead_4_Template_th_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.sort("fio"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u0424.\u0418.\u041E.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DepartmentEmployeeComponent_thead_4_Template_th_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.sort("position_name"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DepartmentEmployeeComponent_thead_4_Template_th_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.sort("department_leader"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th", 14)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u0420\u0435\u0434.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.getSortClass("num"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("title", ctx_r0.getColTitle("num"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.getSortClass("fio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("title", ctx_r0.getColTitle("fio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.getSortClass("position_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("title", ctx_r0.getColTitle("position_name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r0.getSortClass("department_leader"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("title", ctx_r0.getColTitle("department_leader"));
  }
}
const _c0 = function (a0) {
  return {
    "odd": a0
  };
};
const _c1 = function (a2) {
  return ["../..", "employee", a2];
};
function DepartmentEmployeeComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 15)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "div", 16)(9, "div", 17)(10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 20)(13, "div")(14, "div", 21)(15, "label", 22)(16, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DepartmentEmployeeComponent_tr_6_Template_input_ngModelChange_16_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const employee_r9 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.onDepartmentLeaderChange(employee_r9, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "span", 25)(19, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DepartmentEmployeeComponent_tr_6_Template_span_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const employee_r9 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.confirmRemove(employee_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const employee_r9 = ctx.$implicit;
    const isOdd_r10 = ctx.odd;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, isOdd_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", employee_r9.name_f, " ", employee_r9.name_i, " ", employee_r9.name_o, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](employee_r9.position_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", employee_r9.department_leader === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c1, employee_r9.id));
  }
}
function DepartmentEmployeeComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 33)(8, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u0414\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", data_r15.name_f, " ", data_r15.name_i, " ", data_r15.name_o, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", true);
  }
}
const _c2 = function () {
  return ["../../employee", "add"];
};
const _c3 = function (a0) {
  return {
    department_id: a0
  };
};
class DepartmentEmployeeComponent extends src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__.Table {
  constructor(companyService, dialog, snackBar, route, router, filter, userService) {
    super(route, router, dialog, snackBar, filter, userService);
    this.companyService = companyService;
    this.removedMessage = `Сотрудник удален`;
    this.sortField = 'fio';
    this.nameField = 'fio';
    this.registerAlias('fio', ['name_f', 'name_i', 'name_o']);
  }
  load(params) {
    const queryParams = {
      ...params,
      department_id: this.departmentId
    };
    return this.companyService.companyEmployeeList(queryParams);
  }
  delete(params) {
    return this.companyService.companyEmployeeDelete(params);
  }
  onDepartmentLeaderChange(employee, isLeader) {
    const body = {
      ...employee,
      department_leader: isLeader ? 1 : 0
    };
    this.companyService.companyEmployeeUpdate({
      body
    }).subscribe(() => this.loadRows());
  }
  static {
    this.ɵfac = function DepartmentEmployeeComponent_Factory(t) {
      return new (t || DepartmentEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: DepartmentEmployeeComponent,
      selectors: [["app-department-employee"]],
      inputs: {
        departmentId: "departmentId"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 7,
      consts: [[1, "form-group"], [1, "form-group-title"], [1, "main-table", "fix-head", "table-61c20c0f4c8ddffee3f3624545fe9ea4"], [4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "odd"], ["colspan", "5"], [1, "btn", "add-item-text", 3, "routerLink", "queryParams"], ["removeDialogRef", ""], [1, "col", "column-sortable", 2, "width", "1px", 3, "ngClass", "click"], [1, "sorting-indicator"], [1, "column-sortable", 2, "width", "250px", 3, "ngClass", "click"], [1, "column-sortable", 3, "ngClass", "click"], [1, "column-sortable", 2, "width", "300px", 3, "ngClass", "click"], [2, "width", "65px"], [3, "ngClass"], [1, "form-placer"], [1, "form-items"], ["data-id", "main", 1, "form-item"], [1, "form-title"], [1, "form-data"], [1, "form-input"], [1, "switch", "outer"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "switcher"], ["data-on", "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F", "data-off", "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u043C", 1, "bg"], [1, "thumb"], ["data-on", "\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F", "data-off", "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u043C", 1, "switch-title"], [1, "col", "min"], ["title", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", 1, "link-pic", "link-edit", "ico", "ico-pencil", "fn-link", 3, "routerLink"], ["title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 1, "link-pic", "link-del", "ico", "ico-cross2", "fn-link", 3, "click"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", ""]],
      template: function DepartmentEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DepartmentEmployeeComponent_thead_4_Template, 18, 8, "thead", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DepartmentEmployeeComponent_tr_6_Template, 24, 12, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "tr", 5)(8, "td", 6)(9, "a", 7)(10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DepartmentEmployeeComponent_ng_template_12_Template, 12, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.rows.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rows);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c3, ctx.departmentId));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
      styles: [".form-group[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL2RlcGFydG1lbnQtZW1wbG95ZWUvZGVwYXJ0bWVudC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", ".main-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  box-shadow: 0 2px 8px rgba(36, 45, 67, 0.08);\n}\n\n.main-table.hide-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.main-table.hide-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.main-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #83909E;\n  border-left: 1px solid #83909E;\n  text-align: left;\n  color: #fff;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 13px;\n  padding: 18px 24px 16px;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E0E5EB;\n  padding: 12px 24px 10px;\n  border-right: 0;\n  border-left: 0;\n}\n\n.main-table[_ngcontent-%COMP%]   td.col[_ngcontent-%COMP%] {\n  border: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td.min[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.main-table[_ngcontent-%COMP%]   td.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main-table[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background: #F7F9FC;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pic[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: top;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pic.no-text[_ngcontent-%COMP%] {\n  font-size: 0;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-edit[_ngcontent-%COMP%] {\n  background: url('pic-btn-edit.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-del[_ngcontent-%COMP%] {\n  background: url('pic-btn-del-gray.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-txt[_ngcontent-%COMP%]:before {\n  content: \"TXT\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pdf[_ngcontent-%COMP%]:before {\n  content: \"PDF\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-show[_ngcontent-%COMP%] {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-hide[_ngcontent-%COMP%] {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n  opacity: 0.2;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-view[_ngcontent-%COMP%] {\n  background: url('pic-btn-show.svg') no-repeat 0 2px;\n  display: inline-block;\n  padding-left: 24px;\n  text-decoration: none;\n  color: #2C3640;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9tYWluLXRhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSwyREFBQTtBQUhGOztBQU1BO0VBQ0UsK0RBQUE7QUFIRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSwyREFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLDJEQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsbURBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgzNiwgNDUsIDY3LCAwLjA4KTtcbn1cblxuLm1haW4tdGFibGUuaGlkZS1oZWFkZXIgdGgge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYWluLXRhYmxlLmhpZGUtaGVhZGVyIHRoICoge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWFpbi10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQ6ICM4MzkwOUU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzgzOTA5RTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIHBhZGRpbmc6IDE4cHggMjRweCAxNnB4O1xufVxuXG4ubWFpbi10YWJsZSB0aC5jb2x1bW4tc29ydGFibGUge31cblxuLm1haW4tdGFibGUgdGguY29sdW1uLXNvcnRhYmxlIC5zb3J0aW5nLWluZGljYXRvciB7fVxuXG4ubWFpbi10YWJsZSB0ZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEU1RUI7XG4gIHBhZGRpbmc6IDEycHggMjRweCAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5taW4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tYWluLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTVFQjtcbn1cblxuLm1haW4tdGFibGUgdGQucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1haW4tdGFibGUgdGQuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi10YWJsZSAub2RkPnRkIHtcbiAgYmFja2dyb3VuZDogI0Y3RjlGQztcbn1cblxuLm1haW4tdGFibGUgLmxpbmstcGljIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1waWMubm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZWRpdCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tZWRpdC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZGVsIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1kZWwtZ3JheS5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmZuLWxpbmsge31cblxuLm1haW4tdGFibGUgLmxpbmstdHh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiVFhUXCI7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1wZGY6YmVmb3JlIHtcbiAgY29udGVudDogXCJQREZcIjtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXNob3cge1xuICBmb250LXNpemU6IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tc2hvdy5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstaGlkZSB7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1zaG93LnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXZpZXcge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLXNob3cuc3ZnJykgbm8tcmVwZWF0IDAgMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJDMzY0MDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 68674:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/department/department.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepartmentComponent: () => (/* binding */ DepartmentComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/classes */ 56825);
/* harmony import */ var src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/filter/services/filter.service */ 50535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _api_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../api/services/company.service */ 12804);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../material/components/paginator/paginator.component */ 32105);












const _c0 = function (a0) {
  return {
    "col": a0
  };
};
function DepartmentComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DepartmentComponent_th_3_Template_th_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const col_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.sort(col_r4.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    const isFirst_r5 = ctx.first;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, isFirst_r5))("ngClass", ctx_r0.getSortClass(col_r4.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx_r0.getColTitle(col_r4.field));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](col_r4.title);
  }
}
const _c1 = function (a0) {
  return {
    "odd": a0
  };
};
const _c2 = function (a2) {
  return ["..", "employee", a2];
};
const _c3 = function () {
  return ["..", "employee", "add"];
};
const _c4 = function (a0) {
  return {
    department_id: a0
  };
};
const _c5 = function () {
  return [];
};
const _c6 = function (a0) {
  return [a0];
};
function DepartmentComponent_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 9)(1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td")(11, "a", 12)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td", 13)(15, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DepartmentComponent_tr_9_Template_span_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const department_r8 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.confirmRemove(department_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const department_r8 = ctx.$implicit;
    const isOdd_r9 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, isOdd_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](department_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](department_r8.count_position);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](department_r8.count_user);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c2, department_r8.leader_user_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", department_r8.leader_user, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](14, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c4, department_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](17, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c6, department_r8.id));
  }
}
function DepartmentComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 19)(8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u0414\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", true);
  }
}
class DepartmentComponent extends src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__.Table {
  constructor(companyService, dialog, snackBar, route, router, filter, userService) {
    super(route, router, dialog, snackBar, filter, userService);
    this.companyService = companyService;
    this.columns = [{
      field: 'name',
      title: 'Название подразделения'
    }, {
      field: 'count_position',
      title: 'Должностей'
    }, {
      field: 'count_user',
      title: 'Сотрудников'
    }, {
      field: 'leader_user',
      title: 'Руководитель подразделения'
    }];
    this.sortField = this.columns[0].field;
    this.nameField = 'name';
    this.removedMessage = `Подразделение удалено`;
  }
  load(params) {
    return this.companyService.companyDepartmentList(params);
  }
  delete(params) {
    return this.companyService.companyDepartmentDelete(params);
  }
  ngOnInit() {
    super.ngOnInit();
    this.loadRows();
  }
  static {
    this.ɵfac = function DepartmentComponent_Factory(t) {
      return new (t || DepartmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_services_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: DepartmentComponent,
      selectors: [["app-department"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 6,
      consts: [[1, "main-table", "fix-head", "table-065dcf359d0addbf0d3ed4570559e2c1"], ["class", "column-sortable", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [2, "width", "134px"], [1, "right", 2, "width", "80px"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "total", "count", "start", "limits", "startChange", "countChange"], ["removeDialogRef", ""], [1, "column-sortable", 3, "ngClass", "click"], [1, "sorting-indicator"], [3, "ngClass"], [1, "col"], [1, "link-view", 3, "routerLink"], [1, "btn", "add-item-text", 3, "routerLink", "queryParams"], [1, "col", "min", "right"], ["title", "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C", 1, "link-pic", "ajax", "notext", "fn-link", "link-hide", 3, "routerLink"], ["title", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", 1, "link-pic", "link-edit", "ico", "ico-pencil", "fn-link", 3, "routerLink"], ["title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 1, "link-pic", "link-del", "ico", "ico-cross2", "fn-link", 3, "click"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", ""]],
      template: function DepartmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DepartmentComponent_th_3_Template, 4, 6, "th", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DepartmentComponent_tr_9_Template, 19, 20, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "app-paginator", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("startChange", function DepartmentComponent_Template_app_paginator_startChange_10_listener($event) {
            return ctx.onStartChange($event);
          })("countChange", function DepartmentComponent_Template_app_paginator_countChange_10_listener($event) {
            return ctx.onCountChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, DepartmentComponent_ng_template_11_Template, 12, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.rows);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("total", ctx.total)("count", ctx.count)("start", ctx.start)("limits", ctx.limits);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__.PaginatorComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", ".main-table {\n  border-collapse: collapse;\n  width: 100%;\n  box-shadow: 0 2px 8px rgba(36, 45, 67, 0.08);\n}\n\n.main-table.hide-header th {\n  padding: 0px;\n}\n\n.main-table.hide-header th * {\n  display: none;\n}\n\n.main-table th {\n  background: #83909E;\n  border-left: 1px solid #83909E;\n  text-align: left;\n  color: #fff;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 13px;\n  padding: 18px 24px 16px;\n}\n\n.main-table td {\n  background: #fff;\n  border: 1px solid #E0E5EB;\n  padding: 12px 24px 10px;\n  border-right: 0;\n  border-left: 0;\n}\n\n.main-table td.col {\n  border: 1px solid #E0E5EB;\n}\n\n.main-table td.min {\n  white-space: nowrap;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.main-table td:first-child {\n  border-left: 1px solid #E0E5EB;\n}\n\n.main-table td:last-child {\n  border-right: 1px solid #E0E5EB;\n}\n\n.main-table td.right {\n  text-align: right;\n}\n\n.main-table td.center {\n  text-align: center;\n}\n\n.main-table .odd > td {\n  background: #F7F9FC;\n}\n\n.main-table .link-pic {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: top;\n}\n\n.main-table .link-pic.no-text {\n  font-size: 0;\n}\n\n.main-table .link-edit {\n  background: url('pic-btn-edit.svg') no-repeat center center;\n}\n\n.main-table .link-del {\n  background: url('pic-btn-del-gray.svg') no-repeat center center;\n}\n\n.main-table .link-txt:before {\n  content: \"TXT\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table .link-pdf:before {\n  content: \"PDF\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table .link-show {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n}\n\n.main-table .link-hide {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n  opacity: 0.2;\n}\n\n.main-table .link-view {\n  background: url('pic-btn-show.svg') no-repeat 0 2px;\n  display: inline-block;\n  padding-left: 24px;\n  text-decoration: none;\n  color: #2C3640;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9tYWluLXRhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSwyREFBQTtBQUhGOztBQU1BO0VBQ0UsK0RBQUE7QUFIRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSwyREFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLDJEQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsbURBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgzNiwgNDUsIDY3LCAwLjA4KTtcbn1cblxuLm1haW4tdGFibGUuaGlkZS1oZWFkZXIgdGgge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYWluLXRhYmxlLmhpZGUtaGVhZGVyIHRoICoge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWFpbi10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQ6ICM4MzkwOUU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzgzOTA5RTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIHBhZGRpbmc6IDE4cHggMjRweCAxNnB4O1xufVxuXG4ubWFpbi10YWJsZSB0aC5jb2x1bW4tc29ydGFibGUge31cblxuLm1haW4tdGFibGUgdGguY29sdW1uLXNvcnRhYmxlIC5zb3J0aW5nLWluZGljYXRvciB7fVxuXG4ubWFpbi10YWJsZSB0ZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEU1RUI7XG4gIHBhZGRpbmc6IDEycHggMjRweCAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5taW4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tYWluLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTVFQjtcbn1cblxuLm1haW4tdGFibGUgdGQucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1haW4tdGFibGUgdGQuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi10YWJsZSAub2RkPnRkIHtcbiAgYmFja2dyb3VuZDogI0Y3RjlGQztcbn1cblxuLm1haW4tdGFibGUgLmxpbmstcGljIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1waWMubm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZWRpdCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tZWRpdC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZGVsIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1kZWwtZ3JheS5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmZuLWxpbmsge31cblxuLm1haW4tdGFibGUgLmxpbmstdHh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiVFhUXCI7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1wZGY6YmVmb3JlIHtcbiAgY29udGVudDogXCJQREZcIjtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXNob3cge1xuICBmb250LXNpemU6IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tc2hvdy5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstaGlkZSB7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1zaG93LnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXZpZXcge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLXNob3cuc3ZnJykgbm8tcmVwZWF0IDAgMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJDMzY0MDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 49116:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/employee-editor/employee-editor.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeEditorComponent: () => (/* binding */ EmployeeEditorComponent)
/* harmony export */ });
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../validators */ 50040);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _classes_settings_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/settings-editor */ 47495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _api_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../api/services/company.service */ 12804);
/* harmony import */ var _api_services_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../api/services/system.service */ 43812);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../material/components/editor-header/editor-header.component */ 67157);
/* harmony import */ var _material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../material/directives/focus-initial.directive */ 19323);
/* harmony import */ var _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../material/directives/phone-mask.directive */ 23541);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/directives/focus-first-invalid.directive */ 87683);



















function EmployeeEditorComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function EmployeeEditorComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function EmployeeEditorComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function EmployeeEditorComponent_mat_option_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const company_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", company_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", company_r15.name, " ");
  }
}
function EmployeeEditorComponent_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function EmployeeEditorComponent_mat_option_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const department_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", department_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](department_r16.name);
  }
}
function EmployeeEditorComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function EmployeeEditorComponent_mat_option_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const position_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", position_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", position_r17.name, " ");
  }
}
function EmployeeEditorComponent_ng_container_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function EmployeeEditorComponent_ng_container_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function EmployeeEditorComponent_ng_container_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainer"](0);
  }
}
function EmployeeEditorComponent_span_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmployeeEditorComponent_span_150_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.registerUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function EmployeeEditorComponent_span_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmployeeEditorComponent_span_154_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function EmployeeEditorComponent_ng_template_158_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().name;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r23.getError(name_r22));
  }
}
function EmployeeEditorComponent_ng_template_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, EmployeeEditorComponent_ng_template_158_div_0_Template, 2, 1, "div", 53);
  }
  if (rf & 2) {
    const name_r22 = ctx.name;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r14.isFormSubmitted && ctx_r14.hasError(name_r22));
  }
}
const _c0 = function () {
  return {
    name: "name_f"
  };
};
const _c1 = function () {
  return {
    name: "name_i"
  };
};
const _c2 = function () {
  return {
    name: "name_o"
  };
};
const _c3 = function () {
  return {
    name: "company_id"
  };
};
const _c4 = function () {
  return {
    name: "department_id"
  };
};
const _c5 = function () {
  return {
    name: "position_id"
  };
};
const _c6 = function () {
  return {
    name: "email"
  };
};
const _c7 = function () {
  return {
    name: "phone"
  };
};
class EmployeeEditorComponent extends _classes_settings_editor__WEBPACK_IMPORTED_MODULE_1__.SettingsEditor {
  constructor(fb, snackBar, route, companyService, systemService, location, router, userSevrice) {
    super(location, companyService, systemService, route, snackBar, router);
    this.fb = fb;
    this.userSevrice = userSevrice;
    this.entity = 'Сотрудник';
    this.editTitle = 'Информация о сотруднике';
    this.newTitle = 'Добавление сотрудника';
    this.savedMessage = `${this.entity} сохранен`;
    this.removedMessage = `${this.entity} удален`;
    this.createdMessage = `${this.entity} создан`;
    this.notFoundMessage = `${this.entity} не найден`;
    this.form = this.fb.group({
      id: [''],
      name_f: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      name_i: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      name_o: [''],
      birth_date: [''],
      company_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      department_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      position_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      employment_date: [''],
      dismissal_date: [''],
      email: ['', [_validators__WEBPACK_IMPORTED_MODULE_0__.emailValidator]],
      phone: [''],
      skype: ['']
    });
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.isEditMode) {
      const departmentId = this.route.snapshot.queryParamMap.get('department_id');
      if (departmentId) {
        this.form.patchValue({
          department_id: Number(departmentId)
        });
      }
    }
    this.loadCompanies();
    this.loadDepartments();
    this.loadPositions();
  }
  create(params) {
    return this.companyService.companyEmployeeCreate(params);
  }
  read(params) {
    return this.companyService.companyEmployeeInfo(params);
  }
  update(params) {
    return this.companyService.companyEmployeeUpdate(params);
  }
  delete(params) {
    return this.companyService.companyEmployeeDelete(params);
  }
  getNameForHeader(body) {
    return `${body.name_f} ${body.name_i} ${body.name_o}`;
  }
  registerUser() {
    if (!this.data.id) {
      return;
    }
    this.userSevrice.userCreateInvite({
      body: {
        id: this.data.id
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(data => {})).subscribe({
      next: data => {
        this.snackBar.open(`Приглашение отправленнно `, undefined, this.snackBarWithShortDuration);
      },
      error: err => {
        this.snackBar.open(`Ошибка при отправке приглашения : ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  static {
    this.ɵfac = function EmployeeEditorComponent_Factory(t) {
      return new (t || EmployeeEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_api_services_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_api_services_system_service__WEBPACK_IMPORTED_MODULE_3__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_4__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: EmployeeEditorComponent,
      selectors: [["app-employee-editor"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
      decls: 160,
      vars: 35,
      consts: [[3, "title", "isEditMode", "name", "isSend", "backLink", "save", "remove", "send"], [1, "edit-form"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-placer"], [1, "form-items"], [1, "form-group"], [1, "form-group-title"], ["type", "hidden", "formControlName", "id"], [1, "form-item", "form-inline-group"], [1, "form-title"], [1, "form-data"], [1, "form-group-row"], [1, "form-item", 2, "width", "25%"], [1, "req"], [1, "form-input"], ["type", "text", "formControlName", "name_f", "appFocusInitial", "", "required", "", 1, "text-control"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "formControlName", "name_i", "required", "", 1, "text-control"], ["data-id", "var_name_o", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "name_o", 1, "text-control"], ["type", "date", "formControlName", "birth_date", 1, "text-control"], ["data-id", "group_inline_2", 1, "form-item", "form-inline-group"], ["data-id", "var_company_id", 1, "form-item", 2, "width", "50%"], ["appearance", "outline", 1, "ui-select"], ["formControlName", "company_id"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["data-id", "var_department_id", 1, "form-item", 2, "width", "50%"], ["appearance", "outline", 1, "full-width", "ui-select"], ["formControlName", "department_id"], ["data-id", "group_inline_3", 1, "form-item", "form-inline-group"], [1, "form-item", 2, "width", "50%"], ["formControlName", "position_id"], [1, "width_50", "form-group-row"], ["type", "date", "formControlName", "employment_date", 1, "text-control"], ["type", "date", "formControlName", "dismissal_date", 1, "text-control"], ["data-id", "group_inline_4", 1, "form-item", "form-inline-group"], ["type", "text", "formControlName", "email", 1, "text-control"], ["data-id", "var_phone", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "phone", "appPhoneMask", "", 1, "text-control"], ["data-id", "var_skype", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "skype", 1, "text-control"], [1, "width_25"], [1, "form-button-placer"], ["type", "submit", 1, "hidden"], ["class", "btn v send  button", 3, "click", 4, "ngIf"], [1, "btn", "v", "save", "button", "ico", "ico-floppy-disk2", 3, "click"], ["class", "btn v del button", 3, "click", 4, "ngIf"], [1, "btn", "v", "cancel", "button", "gray", 3, "click"], ["error", ""], [3, "value"], [1, "btn", "v", "send", "button", 3, "click"], [1, "btn", "v", "del", "button", 3, "click"], ["class", "error", 4, "ngIf"], [1, "error"]],
      template: function EmployeeEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-editor-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("save", function EmployeeEditorComponent_Template_app_editor_header_save_0_listener() {
            return ctx.save();
          })("remove", function EmployeeEditorComponent_Template_app_editor_header_remove_0_listener() {
            return ctx.remove();
          })("send", function EmployeeEditorComponent_Template_app_editor_header_send_0_listener() {
            return ctx.registerUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function EmployeeEditorComponent_Template_form_ngSubmit_2_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 9)(16, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 10)(21, "div")(22, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, EmployeeEditorComponent_ng_container_24_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 12)(26, "div", 9)(27, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "\u0418\u043C\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 10)(32, "div")(33, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, EmployeeEditorComponent_ng_container_35_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 18)(37, "div", 9)(38, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 10)(41, "div")(42, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](43, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, EmployeeEditorComponent_ng_container_44_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 12)(46, "div", 9)(47, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 10)(50, "div")(51, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](52, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](54, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 10)(56, "div", 11)(57, "div", 22)(58, "div", 9)(59, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 10)(64, "mat-form-field", 23)(65, "mat-select", 24)(66, "mat-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, EmployeeEditorComponent_mat_option_68_Template, 2, 2, "mat-option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](69, EmployeeEditorComponent_ng_container_69_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 27)(71, "div", 9)(72, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, "\u041F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 10)(77, "mat-form-field", 28)(78, "mat-select", 29)(79, "mat-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](81, EmployeeEditorComponent_mat_option_81_Template, 2, 2, "mat-option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](82, EmployeeEditorComponent_ng_container_82_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](84, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 10)(86, "div", 11)(87, "div", 31)(88, "div", 9)(89, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "div", 10)(94, "mat-form-field", 28)(95, "mat-select", 32)(96, "mat-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](98, EmployeeEditorComponent_mat_option_98_Template, 2, 2, "mat-option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](99, EmployeeEditorComponent_ng_container_99_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "div", 33)(101, "div", 31)(102, "div", 9)(103, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "\u0414\u0430\u0442\u0430 \u0442\u0440\u0443\u0434\u043E\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "div", 10)(106, "div")(107, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](108, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](109, "div", 31)(110, "div", 9)(111, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](112, "\u0414\u0430\u0442\u0430 \u0443\u0432\u043E\u043B\u044C\u043D\u0435\u043D\u0438\u044F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "div", 10)(114, "div")(115, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](116, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](118, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "div", 10)(120, "div", 11)(121, "div", 12)(122, "div", 9)(123, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](124, "E-mail:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "div", 10)(126, "div")(127, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](128, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](129, EmployeeEditorComponent_ng_container_129_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "div", 38)(131, "div", 9)(132, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](133, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "div", 10)(135, "div")(136, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](137, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](138, EmployeeEditorComponent_ng_container_138_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "div", 40)(140, "div", 9)(141, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](142, "Skype:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](143, "div", 10)(144, "div")(145, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](146, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](147, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](148, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](149, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](150, EmployeeEditorComponent_span_150_Template, 3, 0, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmployeeEditorComponent_Template_span_click_151_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](153, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](154, EmployeeEditorComponent_span_154_Template, 3, 0, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EmployeeEditorComponent_Template_span_click_155_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](157, "\u041E\u0442\u043C\u0435\u043D\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](158, EmployeeEditorComponent_ng_template_158_Template, 1, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](159);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", ctx.title)("isEditMode", ctx.isEditMode)("name", ctx.nameForHeader)("isSend", true)("backLink", "/settings/employee");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](27, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](28, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](29, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.companies);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](30, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.departments);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](31, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.positions);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](32, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](33, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngTemplateOutlet", _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](34, _c7));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.data.has_password && ctx.isEditMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isEditMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgTemplateOutlet, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_5__.EditorHeaderComponent, _material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_6__.FocusInitialDirective, _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_7__.PhoneMaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_8__.FocusFirstInvalidDirective],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 16042:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/employee/employee.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeComponent: () => (/* binding */ EmployeeComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/classes */ 56825);
/* harmony import */ var src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/filter/services/filter.service */ 50535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _api_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../api/services/company.service */ 12804);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../material/components/paginator/paginator.component */ 32105);












const _c0 = function (a0) {
  return {
    "odd": a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
function EmployeeComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 8)(1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td", 10)(17, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeComponent_tr_34_Template_span_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const employee_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.confirmRemove(employee_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const employee_r3 = ctx.$implicit;
    const isOdd_r4 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c0, isOdd_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", employee_r3.name_f, " ", employee_r3.name_i, " ", employee_r3.name_o, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](employee_r3.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](employee_r3.department_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](employee_r3.position_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](employee_r3.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](employee_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 11, employee_r3.birth_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c1, employee_r3.id));
  }
}
function EmployeeComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 16)(8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u0414\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", data_r7.name_f, " ", data_r7.name_i, " ", data_r7.name_o, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", true);
  }
}
class EmployeeComponent extends src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__.Table {
  // override nameField = 'fio' as const;
  constructor(companyService, dialog, snackBar, route, router, filter, userService) {
    super(route, router, dialog, snackBar, filter, userService);
    this.companyService = companyService;
    this.trackById = (_index, employee) => employee.id;
    this.removedMessage = `Сотрудник удален`;
    this.sortField = 'fio';
    this.registerAlias('fio', ['name_f', 'name_i', 'name_o']);
  }
  ngOnInit() {
    super.ngOnInit();
    this.loadRows();
  }
  load(params) {
    console.log(1234);
    return this.companyService.companyEmployeeList(params);
  }
  delete(params) {
    return this.companyService.companyEmployeeDelete(params);
  }
  static {
    this.ɵfac = function EmployeeComponent_Factory(t) {
      return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_services_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: EmployeeComponent,
      selectors: [["app-employee"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 38,
      vars: 20,
      consts: [[1, "main-table", "fix-head", "table-98a02492513816a6438bbd36fc9458a2"], [1, "col", "column-sortable", 3, "ngClass", "click"], [1, "sorting-indicator"], [1, "column-sortable", 3, "ngClass", "click"], [1, "right", 2, "width", "80px"], [3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "total", "count", "start", "limits", "startChange", "countChange"], ["removeDialogRef", ""], [3, "ngClass"], [1, "col"], [1, "col", "min", "right"], ["title", "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C", 1, "link-pic", "ajax", "notext", "fn-link", "link-hide"], ["title", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", 1, "link-pic", "link-edit", "ico", "ico-pencil", "fn-link", 3, "routerLink"], ["title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 1, "link-pic", "link-del", "ico", "ico-cross2", "fn-link", 3, "click"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", ""]],
      template: function EmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeComponent_Template_th_click_3_listener() {
            return ctx.sort("fio");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u0424.\u0418.\u041E.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeComponent_Template_th_click_7_listener() {
            return ctx.sort("company_name");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeComponent_Template_th_click_11_listener() {
            return ctx.sort("department_name");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u041F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeComponent_Template_th_click_15_listener() {
            return ctx.sort("position_name");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeComponent_Template_th_click_19_listener() {
            return ctx.sort("phone");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "th", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeComponent_Template_th_click_23_listener() {
            return ctx.sort("email");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "E-mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "th", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmployeeComponent_Template_th_click_27_listener() {
            return ctx.sort("birth_date");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434.");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "th", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, EmployeeComponent_tr_34_Template, 21, 17, "tr", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "app-paginator", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("startChange", function EmployeeComponent_Template_app_paginator_startChange_35_listener($event) {
            return ctx.onStartChange($event);
          })("countChange", function EmployeeComponent_Template_app_paginator_countChange_35_listener($event) {
            return ctx.onCountChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, EmployeeComponent_ng_template_36_Template, 12, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("fio"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("fio"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("company_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("company_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("department_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("department_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("position_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("position_name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("birth_date"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("birth_date"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.rows)("ngForTrackBy", ctx.trackById);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("total", ctx.total)("count", ctx.count)("start", ctx.start)("limits", ctx.limits);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__.PaginatorComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", ".main-table {\n  border-collapse: collapse;\n  width: 100%;\n  box-shadow: 0 2px 8px rgba(36, 45, 67, 0.08);\n}\n\n.main-table.hide-header th {\n  padding: 0px;\n}\n\n.main-table.hide-header th * {\n  display: none;\n}\n\n.main-table th {\n  background: #83909E;\n  border-left: 1px solid #83909E;\n  text-align: left;\n  color: #fff;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 13px;\n  padding: 18px 24px 16px;\n}\n\n.main-table td {\n  background: #fff;\n  border: 1px solid #E0E5EB;\n  padding: 12px 24px 10px;\n  border-right: 0;\n  border-left: 0;\n}\n\n.main-table td.col {\n  border: 1px solid #E0E5EB;\n}\n\n.main-table td.min {\n  white-space: nowrap;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.main-table td:first-child {\n  border-left: 1px solid #E0E5EB;\n}\n\n.main-table td:last-child {\n  border-right: 1px solid #E0E5EB;\n}\n\n.main-table td.right {\n  text-align: right;\n}\n\n.main-table td.center {\n  text-align: center;\n}\n\n.main-table .odd > td {\n  background: #F7F9FC;\n}\n\n.main-table .link-pic {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: top;\n}\n\n.main-table .link-pic.no-text {\n  font-size: 0;\n}\n\n.main-table .link-edit {\n  background: url('pic-btn-edit.svg') no-repeat center center;\n}\n\n.main-table .link-del {\n  background: url('pic-btn-del-gray.svg') no-repeat center center;\n}\n\n.main-table .link-txt:before {\n  content: \"TXT\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table .link-pdf:before {\n  content: \"PDF\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table .link-show {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n}\n\n.main-table .link-hide {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n  opacity: 0.2;\n}\n\n.main-table .link-view {\n  background: url('pic-btn-show.svg') no-repeat 0 2px;\n  display: inline-block;\n  padding-left: 24px;\n  text-decoration: none;\n  color: #2C3640;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9tYWluLXRhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSwyREFBQTtBQUhGOztBQU1BO0VBQ0UsK0RBQUE7QUFIRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSwyREFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLDJEQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsbURBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgzNiwgNDUsIDY3LCAwLjA4KTtcbn1cblxuLm1haW4tdGFibGUuaGlkZS1oZWFkZXIgdGgge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYWluLXRhYmxlLmhpZGUtaGVhZGVyIHRoICoge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWFpbi10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQ6ICM4MzkwOUU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzgzOTA5RTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIHBhZGRpbmc6IDE4cHggMjRweCAxNnB4O1xufVxuXG4ubWFpbi10YWJsZSB0aC5jb2x1bW4tc29ydGFibGUge31cblxuLm1haW4tdGFibGUgdGguY29sdW1uLXNvcnRhYmxlIC5zb3J0aW5nLWluZGljYXRvciB7fVxuXG4ubWFpbi10YWJsZSB0ZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEU1RUI7XG4gIHBhZGRpbmc6IDEycHggMjRweCAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5taW4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tYWluLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTVFQjtcbn1cblxuLm1haW4tdGFibGUgdGQucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1haW4tdGFibGUgdGQuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi10YWJsZSAub2RkPnRkIHtcbiAgYmFja2dyb3VuZDogI0Y3RjlGQztcbn1cblxuLm1haW4tdGFibGUgLmxpbmstcGljIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1waWMubm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZWRpdCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tZWRpdC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZGVsIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1kZWwtZ3JheS5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmZuLWxpbmsge31cblxuLm1haW4tdGFibGUgLmxpbmstdHh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiVFhUXCI7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1wZGY6YmVmb3JlIHtcbiAgY29udGVudDogXCJQREZcIjtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXNob3cge1xuICBmb250LXNpemU6IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tc2hvdy5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstaGlkZSB7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1zaG93LnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXZpZXcge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLXNob3cuc3ZnJykgbm8tcmVwZWF0IDAgMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJDMzY0MDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 31488:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/filter-list/filter-list.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterListComponent: () => (/* binding */ FilterListComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
/* harmony import */ var _popap_table_filter_editor_popap_table_filter_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popap-table_filter-editor/popap-table_filter-editor.component */ 77632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/loader.service */ 51798);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var src_app_pages_table_list_table_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/table-list/table-list.service */ 31607);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/services/mySetting.service */ 37901);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
















function FilterListComponent_div_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const column_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", column_r2.title, " ");
  }
}
function FilterListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FilterListComponent_div_2_ng_template_1_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](column_r2 == null ? null : column_r2.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", column_r2.field);
  }
}
function FilterListComponent_div_3_div_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r5[column_r7.field], " ");
  }
}
function FilterListComponent_div_3_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function FilterListComponent_div_3_div_1_ng_template_2_Template_mat_checkbox_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.onFilterShowChange(row_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", row_r5.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r5.show ? "\u0424\u0438\u043B\u044C\u0442\u0440 \u0432\u043A\u043B\u044E\u0447\u0435\u043D" : "\u0424\u0438\u043B\u044C\u0442\u0440 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D", " ");
  }
}
function FilterListComponent_div_3_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterListComponent_div_3_div_1_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.openFilterEditor(row_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilterListComponent_div_3_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function FilterListComponent_div_3_div_1_ng_template_4_Template_div_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.onDragHandleMouseEnter($event));
    })("mouseleave", function FilterListComponent_div_3_div_1_ng_template_4_Template_div_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.onDragHandleMouseLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilterListComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FilterListComponent_div_3_div_1_ng_template_1_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FilterListComponent_div_3_div_1_ng_template_2_Template, 2, 2, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FilterListComponent_div_3_div_1_ng_template_3_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, FilterListComponent_div_3_div_1_ng_template_4_Template, 3, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](column_r7 == null ? null : column_r7.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", column_r7.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "move");
  }
}
function FilterListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FilterListComponent_div_3_div_1_Template, 5, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](row_r5.show ? "" : "no-active_filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkDragData", row_r5)("cdkDragDisabled", ctx_r1.dragDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.columns);
  }
}
class FilterListComponent {
  constructor(fb, loaderService, contractorService, customerService, requestService, transportService, directionService, orderService, route, tableService, router, settingsSertvice, dialog, mySettingService, snackBar) {
    this.fb = fb;
    this.loaderService = loaderService;
    this.contractorService = contractorService;
    this.customerService = customerService;
    this.requestService = requestService;
    this.transportService = transportService;
    this.directionService = directionService;
    this.orderService = orderService;
    this.route = route;
    this.tableService = tableService;
    this.router = router;
    this.settingsSertvice = settingsSertvice;
    this.dialog = dialog;
    this.mySettingService = mySettingService;
    this.snackBar = snackBar;
    this.snackBarWithShortDuration = {
      duration: 2000
    };
    this.snackBarWithLongDuration = {
      duration: 4000
    };
    this.isEditMode = false;
    this.rows = [];
    this.columns = paramSettingsTableFilter;
    this.displayedColumns = this.columns.map(c => c.field);
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.dragDisabled = true;
  }
  // NG ON
  ngOnInit() {
    // В компоненте или в сервисе
    this.subscribeTableRows();
    this.getTableRows();
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
        this.getTableRows();
      }
    });
  }
  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  openFilterEditor(filter) {
    // Открываем диалоговое окно (AddPopupComponent) и передаем в него данные
    const dialogRef = this.dialog.open(_popap_table_filter_editor_popap_table_filter_editor_component__WEBPACK_IMPORTED_MODULE_0__.AddPopupComponent, {
      // width: '500px',  // Можно настроить ширину по желанию
      data: {
        // table: this.route.snapshot.params['table'],  // Если нужно, можно раскомментировать
        // filter: JSON.parse(JSON.stringify(filter))  // Глубокое копирование, чтобы избежать изменений исходного объекта
        filter: filter
      }
    });
    // Подписываемся на событие закрытия диалога
    dialogRef.afterClosed().subscribe(result => {
      console.log('close dialog');
      this.getTableRows(); // Обновляем данные таблицы после закрытия
    });
  }

  onDeletefilter(id) {
    this.deleteFilter(id);
  }
  // getTableColumns(param:any){
  //   this.tableService.getParam(param).pipe(
  //     takeUntil(this._destroy$)
  //   ).subscribe(columns => {
  //     this.columns=columns.param1;
  //     this.displayedColumns= this.columns.map((c:any) => c.field);
  //   })
  // }
  // getTableRows(){
  //   const segments = this.route.snapshot.url.map(s => s.path);
  //   console.log(segments);
  //   this.settingsSertvice.settingsFilterList({table:segments[1]}).pipe(
  //     takeUntil(this._destroy$)
  //   ).subscribe(rows => {
  //     if(rows.items != undefined) this.rows=rows.items;
  //     console.log(rows);
  //   })
  // }
  getTableRows() {
    const segments = this.route.snapshot.url.map(s => s.path);
    this.mySettingService.loadTableRows(segments[1]);
    // const segments = this.route.snapshot.url.map(s => s.path);
    // console.log(segments);
    // this.settingsSertvice.settingsFilterList({table:segments[1]}).pipe(
    //   takeUntil(this._destroy$)
    // ).subscribe(rows => {
    //   if(rows.items != undefined) this.rows=rows.items;
    //   console.log(rows);
    // })
  }

  subscribeTableRows() {
    // В компоненте
    this.mySettingService.getTableRows$().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroy$)).subscribe(rows => {
      this.rows = rows;
      console.log(rows);
      // Дополнительная обработка если нужно
    });
  }
  // Новые методы для управления перетаскиванием
  onDragHandleMouseEnter(event) {
    this.dragDisabled = false;
    event.stopPropagation();
  }
  onDragHandleMouseLeave(event) {
    this.dragDisabled = true;
    event.stopPropagation();
  }
  drop(event) {
    const newRows = [...this.rows];
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.moveItemInArray)(newRows, event.previousIndex, event.currentIndex);
    this.rows = newRows;
    this.saveFilterSequenc();
  }
  // drop(event: CdkDragDrop<string[]>) {
  //   const newRows = [...this.rows];
  //   moveItemInArray(newRows, event.previousIndex, event.currentIndex);
  //   this.rows = newRows; // Присваиваем новый массив
  // }
  onFilterShowChange(filter) {
    filter.show = !filter.show;
    const param = {
      id: filter.id,
      show: filter.show
    };
    this.saveFilter(param);
  }
  saveFilterSequenc() {
    let ids = [];
    this.rows.forEach(element => {
      ids.push(element.id);
    });
    this.settingsSertvice.settingsFilterSaveOrder({
      body: {
        ids: ids
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroy$)).subscribe({
      next: data => {
        this.snackBar.open(`Последовательность фильтиров сохраннена`, undefined, this.snackBarWithShortDuration);
      },
      error: err => {
        this.snackBar.open(`Ошибка сохранения последовательности фильтров: ${{
          err
        }}`, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  deleteFilter(id) {
    this.settingsSertvice.settingsFilterDelete({
      body: {
        id: [id]
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroy$)).subscribe({
      next: data => {
        this.snackBar.open(`Фильтр удален`, undefined, this.snackBarWithShortDuration);
      },
      error: err => {
        this.snackBar.open(`Ошибка удаления фильтра: ${{
          err
        }}`, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  saveFilter(param) {
    this.settingsSertvice.settingsFilterSave({
      body: param
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroy$)).subscribe({
      next: schema => {
        this.snackBar.open(`Фильтр сохраннен`, undefined, this.snackBarWithShortDuration);
      },
      error: err => {
        this.snackBar.open(`Ошибка сохранения фильтра: ${{
          err
        }}`, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  static {
    this.ɵfac = function FilterListComponent_Factory(t) {
      return new (t || FilterListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.ContractorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.TransportService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.DirectionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_pages_table_list_table_list_service__WEBPACK_IMPORTED_MODULE_3__.TableListService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_4__.MySettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: FilterListComponent,
      selectors: [["app-settings-filter-list"]],
      decls: 4,
      vars: 2,
      consts: [["cdkDropList", "", 1, "flex-table", 3, "cdkDropListDropped"], [1, "flex-row", "header"], ["class", "flex-cell", 3, "class", "ngSwitch", 4, "ngFor", "ngForOf"], ["class", "flex-row draggable-row body", "cdkDrag", "", "cdkDragBoundary", ".flex-table", 3, "class", "cdkDragData", "cdkDragDisabled", 4, "ngFor", "ngForOf"], [1, "flex-cell", 3, "ngSwitch"], [3, "ngSwitchDefault"], ["cdkDrag", "", "cdkDragBoundary", ".flex-table", 1, "flex-row", "draggable-row", "body", 3, "cdkDragData", "cdkDragDisabled"], [3, "ngSwitchCase"], [1, "switcher", 3, "checked", "change"], [1, "icon", "edit", 3, "click"], ["cdkDragHandle", "", 1, "drag-handle", 3, "mouseenter", "mouseleave"], [1, "move-icon"]],
      template: function FilterListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cdkDropListDropped", function FilterListComponent_Template_div_cdkDropListDropped_0_listener($event) {
            return ctx.drop($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FilterListComponent_div_2_Template, 2, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FilterListComponent_div_3_Template, 2, 5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.rows);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchDefault, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckbox, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.CdkDragHandle],
      styles: [".flex-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border: 1px solid #e0e0e0;\n  overflow: hidden;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 16px;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #e0e0e0;\n}\n.flex-row.no-active_filter[_ngcontent-%COMP%] {\n  background: #F7F9FC;\n}\n.flex-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.flex-row.header[_ngcontent-%COMP%] {\n  background-color: #83909E;\n  color: white;\n}\n.flex-row[_ngcontent-%COMP%]   .flex-cell[_ngcontent-%COMP%]:nth-child(1) {\n  width: 20%;\n}\n.flex-row[_ngcontent-%COMP%]   .flex-cell[_ngcontent-%COMP%]:nth-child(2) {\n  width: 35%;\n}\n.flex-row[_ngcontent-%COMP%]   .flex-cell[_ngcontent-%COMP%]:nth-child(3) {\n  width: 20%;\n}\n.flex-row[_ngcontent-%COMP%]   .flex-cell[_ngcontent-%COMP%]:nth-child(4) {\n  width: 20%;\n}\n.flex-row[_ngcontent-%COMP%]   .flex-cell[_ngcontent-%COMP%]:nth-child(5) {\n  width: 10%;\n}\n.flex-row[_ngcontent-%COMP%]   .flex-cell[_ngcontent-%COMP%]:nth-child(6) {\n  min-width: 40px;\n}\n\n.flex-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  min-height: 48px;\n  box-sizing: border-box;\n}\n\n.body[_ngcontent-%COMP%]   .flex-cell.border[_ngcontent-%COMP%] {\n  border-left: 1px solid #E0E5EB;\n  border-right: 1px solid #E0E5EB;\n}\n\n.draggable-row[_ngcontent-%COMP%] {\n  background: white;\n}\n.draggable-row.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.draggable-row.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.draggable-row.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.drag-handle[_ngcontent-%COMP%] {\n  cursor: move;\n  color: #666;\n  display: flex;\n}\n.drag-handle[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.drag-handle[_ngcontent-%COMP%]   .move-icon[_ngcontent-%COMP%] {\n  background-image: url('pic-btn-matrix.svg');\n  width: 14px;\n  height: 14px;\n  display: block;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL2ZpbHRlci1saXN0L2ZpbHRlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0FBN0NGO0FBOENFO0VBQ0UsbUJBQUE7QUE1Q0o7QUErQ0U7RUFDRSxtQkFBQTtBQTdDSjtBQWdERTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQTlDSjtBQWlERTtFQUF3QixVQUFBO0FBOUMxQjtBQStDRTtFQUF3QixVQUFBO0FBNUMxQjtBQTZDRTtFQUF3QixVQUFBO0FBMUMxQjtBQTJDRTtFQUF3QixVQUFBO0FBeEMxQjtBQXlDRTtFQUF3QixVQUFBO0FBdEMxQjtBQXVDRTtFQUF3QixlQUFBO0FBcEMxQjs7QUF3Q0E7RUFFRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUF0Q0Y7O0FBd0NBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQXJDRjs7QUF3Q0E7RUFDRSxpQkFBQTtBQXJDRjtBQTBDRTtFQUNFLHFIQUFBO0FBeENKO0FBNENFO0VBQ0UsVUFBQTtBQTFDSjtBQTRDRTtFQUNFLHNEQUFBO0FBMUNKOztBQThDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQTNDRjtBQTRDRTtFQUNFLFdBQUE7QUExQ0o7QUE2Q0U7RUFDRSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBM0NKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmRyYWctaGFuZGxlIHtcbi8vICAgY3Vyc29yOiBtb3ZlO1xuLy8gICBwYWRkaW5nOiA4cHg7XG4vLyAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICB1c2VyLXNlbGVjdDogbm9uZTtcblxuLy8gICAmOmhvdmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuLy8gICB9XG4vLyB9XG5cbi8vIC5kcmFnZ2FibGUtcm93IHtcblxuICAgIFxuLy8gLy8gICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIFxuLy8gICAmOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbi8vICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuXG4vLyAgIH1cbi8vIH1cblxuLy8gLmNkay1kcmFnLXByZXZpZXcge1xuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4vLyAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4vLyAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICBvcGFjaXR5OiAwLjk7XG4vLyB9XG5cbi8vIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4vLyAgIG9wYWNpdHk6IDAuMztcbi8vICAgYmFja2dyb3VuZDogI2NjYztcblxuLy8gfVxuXG4vLyAuY2RrLWRyYWctYW5pbWF0aW5nIHtcbi8vICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuLy8gfVxuXG5cbi5mbGV4LXRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uZmxleC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgJi5uby1hY3RpdmVfZmlsdGVye1xuICAgIGJhY2tncm91bmQ6ICNGN0Y5RkM7XG4gIH1cbiAgXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuICBcbiAgJi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MzkwOUU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuZmxleC1jZWxsOm50aC1jaGlsZCgxKXt3aWR0aDogMjAlO31cbiAgLmZsZXgtY2VsbDpudGgtY2hpbGQoMil7d2lkdGg6IDM1JTt9XG4gIC5mbGV4LWNlbGw6bnRoLWNoaWxkKDMpe3dpZHRoOiAyMCU7fVxuICAuZmxleC1jZWxsOm50aC1jaGlsZCg0KXt3aWR0aDogMjAlO31cbiAgLmZsZXgtY2VsbDpudGgtY2hpbGQoNSl7d2lkdGg6IDEwJTt9XG4gIC5mbGV4LWNlbGw6bnRoLWNoaWxkKDYpe21pbi13aWR0aDogNDBweDt9XG4gIFxufVxuXG4uZmxleC1jZWxsIHtcbiAgLy8gZmxleDogMTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmJvZHkgLmZsZXgtY2VsbC5ib3JkZXJ7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0UwRTVFQjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTVFQiA7XG59XG5cbi5kcmFnZ2FibGUtcm93IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIC8vIGN1cnNvcjogbW92ZTtcbiAgLy8gJjpob3ZlciB7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgLy8gfVxuICAmLmNkay1kcmFnLXByZXZpZXcge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cbiAgJi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAmLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG59XG5cbi5kcmFnLWhhbmRsZSB7XG4gIGN1cnNvcjogbW92ZTtcbiAgY29sb3I6ICM2NjY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG5cbiAgLm1vdmUtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLW1hdHJpeC5zdmcpO1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}
const paramSettingsTableFilter = [{
  title: 'Наименование фильтра',
  field: 'name',
  subcolumns: [{
    value: 'value'
  }]
}, {
  title: 'Тип фильтра',
  field: 'type_text',
  subcolumns: [{
    value: 'value'
  }]
}, {
  title: 'Место',
  field: 'place_text',
  subcolumns: [{
    value: 'value'
  }]
}, {
  title: 'Статус',
  field: 'status',
  subcolumns: [{
    value: 'value'
  }]
}, {
  title: '',
  field: 'move',
  class: 'border',
  subcolumns: [{
    value: 'value'
  }]
}, {
  title: '',
  field: 'btn',
  subcolumns: [{
    value: 'value'
  }]
}];

/***/ }),

/***/ 63006:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/general-settings/general-settings.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralSettingsComponent: () => (/* binding */ GeneralSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/services/mySetting.service */ 37901);
/* harmony import */ var src_app_pages_services_urrency_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/services/сurrency/currency.service */ 69110);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/directives/focus-first-invalid.directive */ 87683);













function GeneralSettingsComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.name);
  }
}
function GeneralSettingsComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.name);
  }
}
function GeneralSettingsComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r7.id)("disabled", item_r7.id == ctx_r2.form.value.currency_2 || item_r7.id == ctx_r2.form.value.currency_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.name);
  }
}
function GeneralSettingsComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r8.id)("disabled", item_r8.id == ctx_r3.form.value.currency_1 || item_r8.id == ctx_r3.form.value.currency_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
  }
}
function GeneralSettingsComponent_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r9.id)("disabled", item_r9.id == ctx_r4.form.value.currency_2 || item_r9.id == ctx_r4.form.value.currency_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r9.name, " ");
  }
}
class GeneralSettingsComponent {
  constructor(fb, settingsSertvice, snackBar, route, mySettingService, router, systemService, currencyService) {
    this.fb = fb;
    this.settingsSertvice = settingsSertvice;
    this.snackBar = snackBar;
    this.route = route;
    this.mySettingService = mySettingService;
    this.router = router;
    this.systemService = systemService;
    this.currencyService = currencyService;
    this.language = [];
    this.currency = [];
    this.timezone = [];
    this.snackBarWithShortDuration = {
      duration: 2000
    };
    this.snackBarWithLongDuration = {
      duration: 4000
    };
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.form = this.fb.group({
      lang: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      timezone: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      currency_1: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      currency_2: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      currency_3: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
    });
  }
  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnInit() {
    this.getSettings();
    this.initCurrencySubscription();
  }
  initCurrencySubscription() {
    this.currencyService.currencies$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe(currencies => {
      this.currency = currencies;
      // Если нужно обновить форму после получения валют
      // this.updateFormWithCurrencies();
    });
  }

  getSettings() {
    this.settingsSertvice.settingsGet().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe({
      next: data => {
        if (data.language) this.language = data.language;
        if (data.timezone_list) this.timezone = data.timezone_list;
        this.form.patchValue(data);
        console.log(data);
      },
      error: err => {
        this.snackBar.open(`Ошибка получения настроек: ${err}`, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  onSubmit() {
    this.postSettings();
  }
  postSettings() {
    this.settingsSertvice.settingsUpdate({
      body: this.form.value
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe({
      next: data => {
        this.snackBar.open(`Настройки сохранены`, undefined, this.snackBarWithShortDuration);
      },
      error: err => {
        this.snackBar.open(`Ошибка получения массивов для селекторов формы: ${err}`, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  static {
    this.ɵfac = function GeneralSettingsComponent_Factory(t) {
      return new (t || GeneralSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_1__.MySettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_pages_services_urrency_currency_service__WEBPACK_IMPORTED_MODULE_2__.CurrencyService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: GeneralSettingsComponent,
      selectors: [["app-general-settings"]],
      decls: 49,
      vars: 6,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-block"], [1, "form-row"], [1, "form-item-layout", 2, "width", "75%"], [1, "form-item", 2, "width", "67%"], [1, "form-label"], [1, "form-data"], ["formControlName", "timezone"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-item", 2, "width", "33%"], ["formControlName", "lang"], ["formControlName", "currency_1"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["formControlName", "currency_2"], ["formControlName", "currency_3"], ["type", "submit", 1, "save", "long"], [3, "value"], [3, "value", "disabled"]],
      template: function GeneralSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function GeneralSettingsComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "mat-select", 7)(9, "mat-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, GeneralSettingsComponent_mat_option_11_Template, 2, 2, "mat-option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10)(13, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u044F\u0437\u044B\u043A \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 6)(16, "mat-select", 11)(17, "mat-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, GeneralSettingsComponent_mat_option_19_Template, 2, 2, "mat-option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 2)(21, "div", 3)(22, "div", 10)(23, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u0432\u0430\u043B\u044E\u0442\u0430 \u21161:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 6)(26, "mat-select", 12)(27, "mat-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, GeneralSettingsComponent_mat_option_29_Template, 2, 3, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 10)(31, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\u0432\u0430\u043B\u044E\u0442\u0430 \u21162:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 6)(34, "mat-select", 14)(35, "mat-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, GeneralSettingsComponent_mat_option_37_Template, 2, 3, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 10)(39, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\u0432\u0430\u043B\u044E\u0442\u0430 \u21163:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 6)(42, "mat-select", 15)(43, "mat-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, GeneralSettingsComponent_mat_option_45_Template, 2, 3, "mat-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 2)(47, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.timezone);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.language);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.currency);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.currency);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.currency);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_3__.FocusFirstInvalidDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 54992:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/notifications/notifications.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsComponent: () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/services/mySetting.service */ 37901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/directives/focus-first-invalid.directive */ 87683);











function NotificationsComponent_mat_checkbox_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NotificationsComponent_mat_checkbox_6_Template_mat_checkbox_change_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onEventChange($event, item_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](ctx_r0.isEventSelected(item_r2.id) ? "font-weight: bold;" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r0.isEventSelected(item_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.name);
  }
}
function NotificationsComponent_mat_checkbox_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NotificationsComponent_mat_checkbox_11_Template_mat_checkbox_change_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.onTypeChange($event, item_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r1.isTypeSelected(item_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.name);
  }
}
class NotificationsComponent {
  constructor(fb, settingsSertvice, snackBar, route, mySettingService, router, systemService) {
    this.fb = fb;
    this.settingsSertvice = settingsSertvice;
    this.snackBar = snackBar;
    this.route = route;
    this.mySettingService = mySettingService;
    this.router = router;
    this.systemService = systemService;
    this.events = [];
    this.types = [];
    this.snackBarWithShortDuration = {
      duration: 2000
    };
    this.snackBarWithLongDuration = {
      duration: 4000
    };
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.form = this.fb.group({
      notify_type: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      notify_event: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
  }
  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnInit() {
    // this.getCurrency();
    this.getSettings();
  }
  onSubmit() {
    this.postSettings();
  }
  getSettings() {
    this.settingsSertvice.settingsGet().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe({
      next: data => {
        if (data.notify_events_list) this.events = data.notify_events_list;
        if (data.notify_types_list) this.types = data.notify_types_list;
        this.form.patchValue(data);
        console.log(data);
      },
      error: err => {
        this.snackBar.open(`Ошибка получения настроек: ${{
          err
        }}`, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  postSettings() {
    this.settingsSertvice.settingsUpdate({
      body: this.form.value
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe({
      next: data => {
        this.snackBar.open(`Настройки сохраннены`, undefined, this.snackBarWithShortDuration);
      },
      error: err => {
        this.snackBar.open(`Ошибка получения массивов для селекторов формы: ${{
          err
        }}`, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  // Методы для управления чекбоксами
  onEventChange(event, id) {
    const eventsArray = this.form.get('notify_event')?.value;
    if (event.checked) {
      // Добавляем id, если его нет в массиве
      if (!eventsArray.includes(id)) {
        this.form.get('notify_event')?.setValue([...eventsArray, id]);
      }
    } else {
      // Удаляем id из массива
      this.form.get('notify_event')?.setValue(eventsArray.filter(item => item !== id));
    }
  }
  onTypeChange(event, id) {
    const typesArray = this.form.get('notify_type')?.value;
    if (event.checked) {
      // Добавляем id, если его нет в массиве
      if (!typesArray.includes(id)) {
        this.form.get('notify_type')?.setValue([...typesArray, id]);
      }
    } else {
      // Удаляем id из массива
      this.form.get('notify_type')?.setValue(typesArray.filter(item => item !== id));
    }
  }
  // Проверка, выбран ли чекбокс
  isEventSelected(id) {
    return this.form.get('notify_event')?.value.includes(id);
  }
  isTypeSelected(id) {
    return this.form.get('notify_type')?.value.includes(id);
  }
  static {
    this.ɵfac = function NotificationsComponent_Factory(t) {
      return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_1__.MySettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.SystemService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NotificationsComponent,
      selectors: [["app-notifications"]],
      decls: 19,
      vars: 3,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-block"], [1, "form-row"], [1, "form-block-title", 2, "margin-bottom", "40px", "padding", "0"], [1, "form-item-layout", 2, "flex-wrap", "wrap", "gap", "20px 0"], ["style", "width: 25%;", 3, "style", "checked", "change", 4, "ngFor", "ngForOf"], [1, "form-item-layout", 2, "flex-wrap", "wrap"], ["style", "width: 25%;", 3, "checked", "change", 4, "ngFor", "ngForOf"], [1, "form-item-layout"], ["type", "submit", 1, "save", "long"], [2, "width", "25%", 3, "checked", "change"]],
      template: function NotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NotificationsComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NotificationsComponent_mat_checkbox_6_Template, 2, 4, "mat-checkbox", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2)(8, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u0421\u043F\u043E\u0441\u043E\u0431 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, NotificationsComponent_mat_checkbox_11_Template, 2, 2, "mat-checkbox", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 2)(13, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0442\u0430\u0440\u0438\u0444\u043E\u0432");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 2)(17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.events);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.types);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_2__.FocusFirstInvalidDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 98136:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/personal-settings/personal-settings.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalSettingsComponent: () => (/* binding */ PersonalSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../material/directives/focus-initial.directive */ 19323);
/* harmony import */ var _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../material/directives/phone-mask.directive */ 23541);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/directives/focus-first-invalid.directive */ 87683);






class PersonalSettingsComponent {
  constructor(fb, snackBar) {
    this.fb = fb;
    this.snackBar = snackBar;
    this.form = fb.group({
      fio: [''],
      email: [''],
      phone: ['']
    });
  }
  ngOnInit() {
    this.loadPersonalSettings();
  }
  loadPersonalSettings() {
    this.sorry();
  }
  save() {
    this.sorry();
  }
  sorry() {
    this.snackBar.open(`Sorry, No API for personal settings implemented yet`, undefined, {
      duration: 1000
    });
  }
  static {
    this.ɵfac = function PersonalSettingsComponent_Factory(t) {
      return new (t || PersonalSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PersonalSettingsComponent,
      selectors: [["app-personal-settings"]],
      decls: 37,
      vars: 1,
      consts: [[1, "form", 3, "formGroup"], [1, "form-placer", "simple"], [1, "form-items"], ["data-id", "title_0", 1, "form-sub-title"], ["data-id", "group_inline_0", 1, "form-item", "form-inline-group"], [1, "form-title"], [1, "form-data"], [1, "form-group-row"], ["data-id", "var_fio", 1, "form-item", 2, "width", "50%"], [1, "form-input"], ["type", "text", "formControlName", "fio", "appFocusInitial", "", 1, "text-control"], ["data-id", "var_phone", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "phone", "appPhoneMask", "", 1, "text-control"], ["data-id", "var_email", 1, "form-item", 2, "width", "25%"], ["type", "text", "formControlName", "email", 1, "text-control"], [1, "form-button-placer"], [1, "btn", "v", "save", "button", "ico", "ico-floppy-disk2", 3, "click"]],
      template: function PersonalSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 5)(11, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u0424\u0418\u041E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "div")(15, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11)(18, "div", 5)(19, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 6)(22, "div")(23, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 13)(26, "div", 5)(27, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "E-mail:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 6)(30, "div")(31, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 15)(34, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PersonalSettingsComponent_Template_span_click_34_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      dependencies: [_material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_0__.FocusInitialDirective, _material_directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_1__.PhoneMaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_2__.FocusFirstInvalidDirective],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 77632:
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/popap-table_filter-editor/popap-table_filter-editor.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddPopupComponent: () => (/* binding */ AddPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/services/mySetting.service */ 37901);
/* harmony import */ var src_app_pages_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/services/loader.service */ 51798);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/directives/focus-first-invalid.directive */ 87683);


















function AddPopupComponent_div_12_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r3.name);
  }
}
function AddPopupComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0442\u0438\u043F \u043F\u043E\u043B\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u0430: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 8)(4, "mat-select", 17)(5, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AddPopupComponent_div_12_mat_option_7_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.filterTypes);
  }
}
function AddPopupComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.name);
  }
}
class AddPopupComponent {
  constructor(dialogRef, fb, settingsSertvice, snackBar, route, mySettingService, router, loader, data) {
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.settingsSertvice = settingsSertvice;
    this.snackBar = snackBar;
    this.route = route;
    this.mySettingService = mySettingService;
    this.router = router;
    this.loader = loader;
    this.data = data;
    this.filterTypes = [];
    this.filterPlaces = [];
    this.snackBarWithShortDuration = {
      duration: 2000
    };
    this.snackBarWithLongDuration = {
      duration: 4000
    };
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.form = this.fb.group({
      id: [, []],
      table: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      name: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      type: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      // field: [ , [Validators.required]],
      show: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      place: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
    });
  }
  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  ngOnInit() {
    console.log('popap data', this.data);
    this.form.patchValue(this.data.filter);
    this.tableNameDefinition();
    this.getData();
  }
  get currentPlace() {
    return this.filterPlaces.find(el => {
      return el.id == this.form.value.place;
    });
  }
  get currentType() {
    return this.filterTypes.find(el => {
      return el.id == this.form.value.type;
    });
  }
  get filteredPlace() {
    return this.filterPlaces.filter(el => {
      if (el.id == 'header') {
        return this.table.header && this.currentType?.header;
      } else {
        return true;
      }
    });
  }
  saveFilter(param) {
    console.log(param);
    this.settingsSertvice.settingsFilterSave({
      body: param
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe({
      next: schema => {
        this.snackBar.open(`Фильтр сохраннен`, undefined, this.snackBarWithShortDuration);
      },
      error: err => {
        this.snackBar.open(`Ошибка сохранения фильтра: ${{
          err
        }}`, undefined, this.snackBarWithShortDuration);
      },
      complete: () => {
        this.onCancel();
      }
    });
  }
  tableNameDefinition() {
    const currentUrl = this.router.url;
    const segments = currentUrl.split('/').filter(segment => segment !== '');
    const lastSegment = segments[segments.length - 1];
    console.log(lastSegment);
    this.form.patchValue({
      table: lastSegment
    });
  }
  getData() {
    this.loader.wrapRequests({
      // Указываем явный тип для возвращаемого значения
      opt: this.settingsSertvice.settingsFilterFormParam({
        table: this.form.value.table
      })
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(schema => {
      console.log(schema);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe({
      next: data => {
        // Соответственно меняем тип здесь
        this.filterTypes = data.opt.types;
        this.filterPlaces = data.opt.places;
        this.table = data.opt.tables.find(el => {
          return el.id == this.form.value.table;
        });
      },
      error: err => {
        this.snackBar.open(`Ошибка получения массивов для селекторов формы: ${err}`, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  onCancel() {
    this.dialogRef.close();
    console.log(123);
  }
  onSubmit() {
    this.saveFilter(this.form.value);
  }
  static {
    this.ɵfac = function AddPopupComponent_Factory(t) {
      return new (t || AddPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_pages_services_mySetting_service__WEBPACK_IMPORTED_MODULE_1__.MySettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_pages_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AddPopupComponent,
      selectors: [["app-add-popup"]],
      decls: 28,
      vars: 4,
      consts: [[1, "cross", 2, "position", "absolute", "right", "14px", "top", "14px", "background", "inherit", "background-image", "url(../../../../assets/pic-btn-cancel-black.svg)", "height", "14px", "width", "14px", "z-index", "2", 3, "click"], ["mat-dialog-title", "", 2, "padding", "0 40px 10px"], [2, "padding", "0", "width", "25vw"], [3, "formGroup", "ngSubmit"], [1, "form-block"], [1, "form-row", "bg", 2, "display", "flex", "flex-direction", "column", "gap", "25px", "padding", "20px 40px"], [1, "form-item"], [1, "form-label"], [1, "form-data"], ["matInput", "", "type", "text", "formControlName", "name"], ["class", "form-item", 4, "ngIf"], ["formControlName", "place"], ["value", ""], [4, "ngFor", "ngForOf"], ["formControlName", "show", 1, "switcher"], ["align", "end", 2, "padding", "20px 40px"], ["mat-raised-button", "", 2, "background", "var(--accent,  #DB563B)", "color", "white", "margin-right", "auto", 3, "click"], ["formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function AddPopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPopupComponent_Template_button_click_0_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-dialog-content", 2)(4, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AddPopupComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u043D\u0430\u0438\u043C\u0435\u043D\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u0430: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AddPopupComponent_div_12_Template, 8, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u043C\u0435\u0441\u0442\u043E: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8)(17, "mat-select", 11)(18, "mat-option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "-- \u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E --");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AddPopupComponent_ng_container_20_Template, 3, 2, "ng-container", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 6)(22, "div", 8)(23, "mat-checkbox", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-dialog-actions", 15)(26, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPopupComponent_Template_button_click_26_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.data.filter.type_fixed);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredPlace);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.form.value.show ? "\u0424\u0438\u043B\u044C\u0442\u0440 \u0432\u043A\u043B\u044E\u0447\u0435\u043D" : "\u0424\u0438\u043B\u044C\u0442\u0440 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_3__.FocusFirstInvalidDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 22436:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/position-editor/position-editor.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PositionEditorComponent: () => (/* binding */ PositionEditorComponent)
/* harmony export */ });
/* harmony import */ var _classes_settings_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../classes/settings-editor */ 47495);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _api_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../api/services/company.service */ 12804);
/* harmony import */ var _api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../api/services */ 43273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../material/components/editor-header/editor-header.component */ 67157);
/* harmony import */ var _material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../material/directives/focus-initial.directive */ 19323);
/* harmony import */ var _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/directives/focus-first-invalid.directive */ 87683);













function PositionEditorComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function PositionEditorComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th")(1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label")(5, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PositionEditorComponent_th_39_Template_mat_checkbox_change_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const col_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.onChangeCheckboxCol($event, col_r6.field));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", col_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("indeterminate", ctx_r1.isIndeterminateCol(col_r6.field))("ngClass", ctx_r1.isIndeterminateCol(col_r6.field) ? "mat-mdc-checkbox-indeterminate" : "")("checked", ctx_r1.isCheckedCol(col_r6.field));
  }
}
function PositionEditorComponent_ng_container_41_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label")(1, "mat-checkbox", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PositionEditorComponent_ng_container_41_label_6_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const rule_r13 = restoredCtx.$implicit;
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.onChangeCheckboxRow($event, rule_r13, row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rule_r13 = ctx.$implicit;
    const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r11.isCheckedRow(row_r9.value.values, rule_r13))("indeterminate", ctx_r11.isIndeterminateRow(row_r9.value.values, rule_r13))("ngClass", ctx_r11.isIndeterminateRow(row_r9.value.values, rule_r13) ? "mat-mdc-checkbox-indeterminate" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r11.data.permission.rule[rule_r13], " ");
  }
}
function PositionEditorComponent_ng_container_41_td_7_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label")(1, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionEditorComponent_ng_container_41_td_7_label_5_Template_input_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const rule_r21 = restoredCtx.$implicit;
      const col_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.onChangeRadioBtnRow(row_r9, col_r18.field, rule_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rule_r21 = ctx.$implicit;
    const col_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", col_r18.field)("value", rule_r21);
  }
}
function PositionEditorComponent_ng_container_41_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td")(1, "div", 20)(2, "div", 21)(3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PositionEditorComponent_ng_container_41_td_7_label_5_Template, 3, 2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", row_r9.value.rules);
  }
}
function PositionEditorComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr", 34)(2, "td")(3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionEditorComponent_ng_container_41_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.loge());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PositionEditorComponent_ng_container_41_label_6_Template, 3, 4, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PositionEditorComponent_ng_container_41_td_7_Template, 6, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r9.value.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", row_r9.value.rules);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.data == null ? null : ctx_r2.data.permission == null ? null : ctx_r2.data.permission.columns);
  }
}
function PositionEditorComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionEditorComponent_span_47_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function PositionEditorComponent_ng_template_52_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().name;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r33.getError(name_r32));
  }
}
function PositionEditorComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PositionEditorComponent_ng_template_52_div_0_Template, 2, 1, "div", 40);
  }
  if (rf & 2) {
    const name_r32 = ctx.name;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.isFormSubmitted && ctx_r5.hasError(name_r32));
  }
}
const _c0 = function () {
  return {
    name: "name"
  };
};
class PositionEditorComponent extends _classes_settings_editor__WEBPACK_IMPORTED_MODULE_0__.SettingsEditor {
  // permissionSchema:any={
  //   columns: [
  //     {name: "Запросы", field:'request'},
  //     {name: "Ставки", field:'rate'},
  //     {name: "Заказы", field:'order'},
  //     {name: "Тарифы", field:'tariff'},
  //     {name: "Подрядчики", field:'contractor'},
  //     {name: "Отчеты", field:'report'},
  //     {name: "Клиенты", field:'customer'},
  //     {name: "Справочник", field:'data'},
  //   ],
  //   row:[
  //     {
  //       name:'Просмотр',
  //       rules: ["all","dep","self"],
  //       value:{
  //         request:'self',
  //         rate:'self',
  //         order:'dep',
  //         tariff:'all',
  //         contractor:'dep',
  //         report:'dep',
  //         customer:'all',
  //         data:'dep',
  //       }
  //     },
  //     {
  //       name: 'Редактирование',
  //       rules: ["all","dep","self"],
  //       value:{
  //         request:'self',
  //         rate:'all',
  //         order:'dep',
  //         tariff:'all',
  //         contractor:'',
  //         report:'',
  //         customer:'',
  //         data:'dep',
  //       }
  //     },
  //     {
  //       name:'Удаление',
  //       rules: ["all","dep","self"],
  //       value:{
  //         request:'',
  //         rate:'self',
  //         order:'',
  //         tariff:'dep',
  //         contractor:'',
  //         report:'all',
  //         customer:'',
  //         data:'all',
  //       }
  //     },
  //     {
  //       name:'Создание',
  //       rules: ["all"],
  //       value:{
  //         request:'',
  //         rate:'',
  //         order:'',
  //         tariff:'all',
  //         contractor:'all',
  //         report:'all',
  //         customer:'all',
  //         data:'all',
  //       }
  //     },
  //     {
  //       name:'Экспорт',
  //       rules: ["all"],
  //       value:{
  //         request:'',
  //         rate:'all',
  //         order:'all',
  //         tariff:'all',
  //         contractor:'all',
  //         report:'',
  //         customer:'',
  //         data:'',
  //       }
  //     },
  //   ],
  //   rule: {
  //     all: "Все элементы",
  //     dep: "Своего отдела",
  //     self: "Только свои",
  //   }
  // }
  constructor(fb, snackBar, companyService, systemService, route, location, router) {
    super(location, companyService, systemService, route, snackBar, router);
    this.fb = fb;
    this.entity = 'Должность';
    this.editTitle = 'Информация о должности';
    this.newTitle = 'Добавление должности';
    this.savedMessage = `${this.entity} сохранена`;
    this.removedMessage = `${this.entity} удалена`;
    this.createdMessage = `${this.entity} создана`;
    this.notFoundMessage = `${this.entity} не найдена`;
    this.form = this.fb.group({
      id: [''],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      permission: this.fb.array([this.createRow()])
    });
  }
  // override ngOnInit(): void {
  //   super.ngOnInit();  // Вызов ngOnInit родительского класса
  //   console.log('ngOnInit from ChildComponent');
  //   // Логика дочернего компонента
  //   this.loadRowsData(this.permissionSchema.row);  // Вызов метода родительского класса
  // }
  patchForm() {
    this.form.patchValue({
      id: this.data.id,
      name: this.data.name
    });
    this.loadRowsData(this.data.permission.row);
  }
  create(params) {
    return this.companyService.companyPositionCreate(params);
  }
  read(params) {
    return this.companyService.companyPositionInfo(params);
  }
  update(params) {
    return this.companyService.companyPositionUpdate(params);
  }
  delete(params) {
    return this.companyService.companyPositionDelete(params);
  }
  getNameForHeader(body) {
    return body.name;
  }
  loge() {
    console.log(this.form.value);
  }
  get permission() {
    return this.form.get('permission');
  }
  createRow() {
    return this.fb.group({
      name: ['', []],
      rules: [[], []],
      field: [''],
      values: this.fb.group({
        request: ['', []],
        rate: ['', []],
        order: ['', []],
        tariff: ['', []],
        contractor: ['', []],
        report: ['', []],
        customer: ['', []],
        data: ['', []]
      })
    });
  }
  loadRowsData(rowsData) {
    console.log('loadRowsData', rowsData);
    // Очищаем текущие строки
    while (this.permission.length) {
      this.permission.removeAt(0);
    }
    // Добавляем новые строки на основе данных
    rowsData.forEach(row => {
      const rowGroup = this.fb.group({
        name: [row.name],
        field: [row.field],
        rules: [row.rules],
        values: this.fb.group(row.values)
      });
      this.permission.push(rowGroup);
    });
  }
  isCheckedRow(obj, rule) {
    return Object.values(obj).every(value => value == rule);
  }
  isIndeterminateRow(obj, rule) {
    const values = Object.values(obj);
    // Если все значения true, возвращаем false
    if (values.every(value => value == rule)) {
      return false;
    }
    // Если хотя бы одно значение true, возвращаем true
    return values.some(value => value == rule);
  }
  onChangeCheckboxRow({
    checked
  }, rule, row) {
    const newValue = checked ? rule : '';
    row.controls.values.patchValue({
      request: newValue,
      rate: newValue,
      order: newValue,
      tariff: newValue,
      contractor: newValue,
      report: newValue,
      customer: newValue,
      data: newValue
    });
  }
  onChangeRadioBtnRow(row, field, rule) {
    if (row.value.values[field] === rule) {
      row.controls.values.patchValue({
        [field]: ''
      });
    }
  }
  //FullPermission Checkbox
  onChangeCheckboxFullPermission({
    checked
  }) {
    const newValue = checked ? 'all' : '';
    this.permission.controls.forEach(row => {
      row.controls.values.patchValue({
        request: newValue,
        rate: newValue,
        order: newValue,
        tariff: newValue,
        contractor: newValue,
        report: newValue,
        customer: newValue,
        data: newValue
      });
    });
  }
  isIndeterminateFullPermission() {
    const arr = [];
    this.permission.controls.forEach(row => {
      arr.push(this.isCheckedRow(row.value.values, 'all'));
    });
    if (arr.every(value => value === true)) {
      return false;
    }
    ;
    return arr.some(value => value === true);
  }
  isCheckedFullPermission() {
    const arr = [];
    this.permission.controls.forEach(row => {
      arr.push(this.isCheckedRow(row.value.values, 'all'));
    });
    return arr.every(element => element === true);
  }
  //col checkbox
  onChangeCheckboxCol({
    checked
  }, field) {
    const newValue = checked ? 'all' : '';
    this.permission.controls.forEach(row => {
      row.controls.values.patchValue({
        [field]: newValue
      });
    });
  }
  isIndeterminateCol(field) {
    if (this.permission.value.every(value => value.values[field] === 'all')) {
      return false;
    }
    ;
    return this.permission.value.some(value => value.values[field] === 'all');
  }
  isCheckedCol(field) {
    return this.permission.value.every(value => value.values[field] === 'all');
  }
  static {
    this.ɵfac = function PositionEditorComponent_Factory(t) {
      return new (t || PositionEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_api_services_company_service__WEBPACK_IMPORTED_MODULE_1__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_api_services__WEBPACK_IMPORTED_MODULE_2__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: PositionEditorComponent,
      selectors: [["app-position-editor"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
      decls: 54,
      vars: 16,
      consts: [[3, "title", "isEditMode", "name", "backLink", "save", "remove"], [1, "edit-form"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-placer"], [1, "form-items"], ["data-id", "group_0", 1, "form-group"], [1, "form-group-title"], [1, "form-item", "form-inline-group"], [1, "form-title"], ["type", "hidden", "formControlName", "id"], [1, "form-data"], [1, "form-group-row"], [1, "form-item"], [1, "req"], [1, "form-input"], ["type", "text", "formControlName", "name", "required", "", "appFocusInitial", "", 1, "text-control"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-id", "group_1", 1, "form-group"], [1, "form-group-title", 2, "margin-top", "24px"], ["formArrayName", "permission", 1, "table-list"], [1, "td-block"], [1, "column"], [2, "display", "flex", "align-items", "center", "margin", "auto 0"], [3, "indeterminate", "ngClass", "checked", "change"], [4, "ngFor", "ngForOf"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "form-button-placer"], ["type", "submit", 1, "hidden"], [1, "btn", "v", "save", "button", "ico", "ico-floppy-disk2", 3, "click"], ["class", "btn v del button", 3, "click", 4, "ngIf"], [1, "btn", "v", "cancel", "button", "gray", 3, "click"], [1, "form", 3, "formGroup"], ["error", ""], [3, "formGroupName"], ["formGroupName", "values"], [1, "td-block", 3, "click"], [3, "checked", "indeterminate", "ngClass", "change"], [2, "color", "white"], ["type", "radio", 3, "formControlName", "value", "click"], [1, "btn", "v", "del", "button", 3, "click"], ["class", "error", 4, "ngIf"], [1, "error"]],
      template: function PositionEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-editor-header", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("save", function PositionEditorComponent_Template_app_editor_header_save_0_listener() {
            return ctx.save();
          })("remove", function PositionEditorComponent_Template_app_editor_header_remove_0_listener() {
            return ctx.remove();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function PositionEditorComponent_Template_form_ngSubmit_2_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u041E\u0431\u0449\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div")(9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 8)(11, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 8)(16, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 10)(21, "div")(22, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, PositionEditorComponent_ng_container_24_Template, 1, 0, "ng-container", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 3)(26, "div", 4)(27, "div", 17)(28, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "table", 19)(31, "thead")(32, "tr")(33, "th")(34, "div", 20)(35, "div", 21)(36, "label", 22)(37, "mat-checkbox", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PositionEditorComponent_Template_mat_checkbox_change_37_listener($event) {
            return ctx.onChangeCheckboxFullPermission($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, PositionEditorComponent_th_39_Template, 6, 4, "th", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, PositionEditorComponent_ng_container_41_Template, 8, 4, "ng-container", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionEditorComponent_Template_span_click_44_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, PositionEditorComponent_span_47_Template, 3, 0, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PositionEditorComponent_Template_span_click_48_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "\u041E\u0442\u043C\u0435\u043D\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "form", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, PositionEditorComponent_ng_template_52_Template, 1, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx.title)("isEditMode", ctx.isEditMode)("name", ctx.nameForHeader)("backLink", "/settings/position");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("indeterminate", ctx.isIndeterminateFullPermission())("ngClass", ctx.isIndeterminateFullPermission() ? "mat-mdc-checkbox-indeterminate" : "")("checked", ctx.isCheckedFullPermission());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "\u041F\u043E\u043B\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.permission == null ? null : ctx.data.permission.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.permission.controls);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isEditMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _material_components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_3__.EditorHeaderComponent, _material_directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_4__.FocusInitialDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName, _shared_directives_focus_first_invalid_directive__WEBPACK_IMPORTED_MODULE_5__.FocusFirstInvalidDirective],
      styles: ["tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 320px;\n}\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   .column[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child   .column[_ngcontent-%COMP%] {\n  margin: 0;\n  flex-direction: column;\n  align-items: normal;\n  color: #2C3640;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 22px;\n}\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   .column[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child   .column[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: 14px;\n}\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   .column[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child   .column[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  background-color: white;\n  border-top: 1px solid #E0E5EB;\n  border-left: 1px solid #E0E5EB;\n  border-bottom: 1px solid #E0E5EB;\n}\n\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  gap: 5px;\n}\ntr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .td-block[_ngcontent-%COMP%] {\n  height: 64px;\n  min-width: 60px;\n}\n\ntr[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  flex-direction: column;\n  gap: 15px;\n  margin: 0 auto;\n}\n\n.form-placer[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.form-placer[_ngcontent-%COMP%]   [type=radio][_ngcontent-%COMP%]    + i[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\ntable.table-list[_ngcontent-%COMP%] {\n  width: 100%;\n  border-spacing: inherit;\n  box-shadow: 0 2px 8px rgba(36, 45, 67, 0.08);\n}\ntable.table-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .td-block[_ngcontent-%COMP%] {\n  padding: 20px 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9jb21wb25lbnRzL3Bvc2l0aW9uLWVkaXRvci9wb3NpdGlvbi1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFBRTtFQUNFLFNBQUE7RUFDQSxzQkFBQTtFQUF3QixtQkFBQTtFQUN4QixjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFHSjtBQURJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUdOO0FBQUk7RUFDRSxpQkFBQTtBQUVOOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFRTtFQUNFLFFBQUE7QUFDSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNFLHNCQUFBO0VBRUEsU0FBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUlFLGlCQUFBO0FBSkY7QUFDRTtFQUNFLFNBQUE7QUFDSjs7QUFJQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0FBREY7QUFHRTtFQUNFLGlCQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyJ0ciB0ZDpmaXJzdC1jaGlsZCAsdHIgdGg6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMzIwcHg7XG4gIC5jb2x1bW4ge1xuICAgIG1hcmdpbjogMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogbm9ybWFsO1xuICAgIGNvbG9yOiAjMkMzNjQwO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gICAgbGFiZWx7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG5cbiAgICB9XG4gICAgbWF0LWNoZWNrYm94e1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICB9XG59XG50ciB0aDpmaXJzdC1jaGlsZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTBFNUVCO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFMEU1RUI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFNUVCO1xufVxudHIgdGgge1xuICAuY29sdW1ue1xuICAgIGdhcDo1cHg7XG4gIH1cbiAgLnRkLWJsb2Nre1xuICAgIGhlaWdodDogNjRweDtcbiAgICBtaW4td2lkdGg6IDYwcHg7XG4gIH1cbn1cblxudHIgLmNvbHVtbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5mb3JtLXBsYWNlciAge1xuICBbdHlwZT1cInJhZGlvXCJdICsgaXtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbnRhYmxlLnRhYmxlLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDM2LCA0NSwgNjcsIDAuMDgpO1xuXG4gIHRib2R5IHRkIC50ZC1ibG9ja3tcbiAgICBwYWRkaW5nOiAyMHB4IDhweDtcbiAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 26776:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/modules/settings/components/position/position.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PositionComponent: () => (/* binding */ PositionComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/classes */ 56825);
/* harmony import */ var src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/filter/services/filter.service */ 50535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _api_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../api/services/company.service */ 12804);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../material/components/paginator/paginator.component */ 32105);












const _c0 = function (a0) {
  return {
    "odd": a0
  };
};
const _c1 = function (a0) {
  return [a0];
};
function PositionComponent_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 7)(1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PositionComponent_tr_10_Template_span_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const position_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.confirmRemove(position_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const position_r3 = ctx.$implicit;
    const isOdd_r4 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, isOdd_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](position_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, position_r3.id));
  }
}
function PositionComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " \u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 14)(8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u0414\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", true);
  }
}
class PositionComponent extends src_app_shared_classes__WEBPACK_IMPORTED_MODULE_0__.Table {
  constructor(companyService, dialog, snackBar, route, router, filter, userService) {
    super(route, router, dialog, snackBar, filter, userService);
    this.companyService = companyService;
    this.removedMessage = `Должность удалена`;
    this.sortField = 'name';
  }
  load(params) {
    console.log(123);
    return this.companyService.companyPositionList(params);
  }
  delete(params) {
    return this.companyService.companyPositionDelete(params);
  }
  ngOnInit() {
    super.ngOnInit();
    this.loadRows();
  }
  static {
    this.ɵfac = function PositionComponent_Factory(t) {
      return new (t || PositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_services_company_service__WEBPACK_IMPORTED_MODULE_2__.CompanyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: PositionComponent,
      selectors: [["app-position"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 14,
      vars: 7,
      consts: [[1, "main-table", "fix-head", "table-4e6cc9770d169fc6e17fab7fb0968f9b"], [1, "col", "column-sortable", 3, "ngClass", "click"], [1, "sorting-indicator"], [2, "width", "40px"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "total", "count", "start", "limits", "startChange", "countChange"], ["removeDialogRef", ""], [3, "ngClass"], [1, "col"], [1, "col", "min"], ["title", "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", 1, "link-pic", "link-edit", "ico", "ico-pencil", "fn-link", 3, "routerLink"], ["title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 1, "link-pic", "link-del", "ico", "ico-cross2", "fn-link", 3, "click"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", ""]],
      template: function PositionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 0)(1, "thead")(2, "tr")(3, "th", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PositionComponent_Template_th_click_3_listener() {
            return ctx.sort("name");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PositionComponent_tr_10_Template, 6, 7, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "app-paginator", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("startChange", function PositionComponent_Template_app_paginator_startChange_11_listener($event) {
            return ctx.onStartChange($event);
          })("countChange", function PositionComponent_Template_app_paginator_countChange_11_listener($event) {
            return ctx.onCountChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, PositionComponent_ng_template_12_Template, 12, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getSortClass("name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("title", ctx.getColTitle("name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.rows);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("total", ctx.total)("count", ctx.count)("start", ctx.start)("limits", ctx.limits);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _material_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__.PaginatorComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */", ".main-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  box-shadow: 0 2px 8px rgba(36, 45, 67, 0.08);\n}\n\n.main-table.hide-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.main-table.hide-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.main-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #83909E;\n  border-left: 1px solid #83909E;\n  text-align: left;\n  color: #fff;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 13px;\n  padding: 18px 24px 16px;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #E0E5EB;\n  padding: 12px 24px 10px;\n  border-right: 0;\n  border-left: 0;\n}\n\n.main-table[_ngcontent-%COMP%]   td.col[_ngcontent-%COMP%] {\n  border: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td.min[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #E0E5EB;\n}\n\n.main-table[_ngcontent-%COMP%]   td.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.main-table[_ngcontent-%COMP%]   td.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main-table[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background: #F7F9FC;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pic[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  vertical-align: top;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pic.no-text[_ngcontent-%COMP%] {\n  font-size: 0;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-edit[_ngcontent-%COMP%] {\n  background: url('pic-btn-edit.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-del[_ngcontent-%COMP%] {\n  background: url('pic-btn-del-gray.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-txt[_ngcontent-%COMP%]:before {\n  content: \"TXT\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-pdf[_ngcontent-%COMP%]:before {\n  content: \"PDF\";\n  color: var(--accent, #DB563B);\n  font-size: 11px;\n  line-height: 11px;\n  margin-top: 13px;\n  display: inline-block;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-show[_ngcontent-%COMP%] {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-hide[_ngcontent-%COMP%] {\n  font-size: 0;\n  background: url('pic-btn-show.svg') no-repeat center center;\n  opacity: 0.2;\n}\n\n.main-table[_ngcontent-%COMP%]   .link-view[_ngcontent-%COMP%] {\n  background: url('pic-btn-show.svg') no-repeat 0 2px;\n  display: inline-block;\n  padding-left: 24px;\n  text-decoration: none;\n  color: #2C3640;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9tYWluLXRhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSw4QkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSwyREFBQTtBQUhGOztBQU1BO0VBQ0UsK0RBQUE7QUFIRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSwyREFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLDJEQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0UsbURBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgzNiwgNDUsIDY3LCAwLjA4KTtcbn1cblxuLm1haW4tdGFibGUuaGlkZS1oZWFkZXIgdGgge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYWluLXRhYmxlLmhpZGUtaGVhZGVyIHRoICoge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWFpbi10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQ6ICM4MzkwOUU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzgzOTA5RTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIHBhZGRpbmc6IDE4cHggMjRweCAxNnB4O1xufVxuXG4ubWFpbi10YWJsZSB0aC5jb2x1bW4tc29ydGFibGUge31cblxuLm1haW4tdGFibGUgdGguY29sdW1uLXNvcnRhYmxlIC5zb3J0aW5nLWluZGljYXRvciB7fVxuXG4ubWFpbi10YWJsZSB0ZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEU1RUI7XG4gIHBhZGRpbmc6IDEycHggMjRweCAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZC5taW4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5tYWluLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4ubWFpbi10YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTVFQjtcbn1cblxuLm1haW4tdGFibGUgdGQucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1haW4tdGFibGUgdGQuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbi10YWJsZSAub2RkPnRkIHtcbiAgYmFja2dyb3VuZDogI0Y3RjlGQztcbn1cblxuLm1haW4tdGFibGUgLmxpbmstcGljIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1waWMubm8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZWRpdCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tZWRpdC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstZGVsIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1kZWwtZ3JheS5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmZuLWxpbmsge31cblxuLm1haW4tdGFibGUgLmxpbmstdHh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiVFhUXCI7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWFpbi10YWJsZSAubGluay1wZGY6YmVmb3JlIHtcbiAgY29udGVudDogXCJQREZcIjtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXNob3cge1xuICBmb250LXNpemU6IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tc2hvdy5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLm1haW4tdGFibGUgLmxpbmstaGlkZSB7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1zaG93LnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5tYWluLXRhYmxlIC5saW5rLXZpZXcge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLXNob3cuc3ZnJykgbm8tcmVwZWF0IDAgMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzJDMzY0MDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 27729:
/*!*******************************************************************!*\
  !*** ./src/app/pages/modules/settings/settings-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsRoutingModule: () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _components_company_editor_company_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/company-editor/company-editor.component */ 89660);
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/company/company.component */ 55660);
/* harmony import */ var _components_department_editor_department_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/department-editor/department-editor.component */ 43856);
/* harmony import */ var _components_department_department_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/department/department.component */ 68674);
/* harmony import */ var _components_employee_editor_employee_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/employee-editor/employee-editor.component */ 49116);
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/employee/employee.component */ 16042);
/* harmony import */ var _components_personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/personal-settings/personal-settings.component */ 98136);
/* harmony import */ var _components_position_editor_position_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/position-editor/position-editor.component */ 22436);
/* harmony import */ var _components_position_position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/position/position.component */ 26776);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings.component */ 96917);
/* harmony import */ var _components_client_group_client_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/client-group/client-group.component */ 20772);
/* harmony import */ var _components_client_group_editor_client_group_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/client-group-editor/client-group-editor.component */ 80344);
/* harmony import */ var _components_filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/filter-list/filter-list.component */ 31488);
/* harmony import */ var _components_general_settings_general_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/general-settings/general-settings.component */ 63006);
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/notifications/notifications.component */ 54992);
/* harmony import */ var _components_branding_branding_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/branding/branding.component */ 65868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);



















const routes = [{
  path: '',
  component: _settings_component__WEBPACK_IMPORTED_MODULE_9__.SettingsComponent,
  children: [{
    path: '',
    redirectTo: 'company',
    pathMatch: 'full'
  }, {
    path: 'department',
    component: _components_department_department_component__WEBPACK_IMPORTED_MODULE_3__.DepartmentComponent,
    pathMatch: 'full',
    title: 'Подразделения'
  }, {
    path: 'position',
    component: _components_position_position_component__WEBPACK_IMPORTED_MODULE_8__.PositionComponent,
    pathMatch: 'full',
    title: 'Должности'
  }, {
    path: 'employee',
    component: _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_5__.EmployeeComponent,
    pathMatch: 'full',
    title: 'Сотрудники'
  }, {
    path: 'company',
    component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_1__.CompanyComponent,
    pathMatch: 'full',
    title: 'Компании'
  }, {
    path: 'personal',
    component: _components_personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_6__.PersonalSettingsComponent,
    pathMatch: 'full',
    title: 'Личные настройки'
  }, {
    path: 'client-group',
    component: _components_client_group_client_group_component__WEBPACK_IMPORTED_MODULE_10__.ClientGroupComponent,
    pathMatch: 'full',
    title: 'Группы клиентов'
  }, {
    path: 'table-filter/:table',
    component: _components_filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_12__.FilterListComponent,
    pathMatch: 'full',
    title: 'Фильтры на формах'
  }, {
    path: 'general-settings',
    component: _components_general_settings_general_settings_component__WEBPACK_IMPORTED_MODULE_13__.GeneralSettingsComponent,
    pathMatch: 'full',
    title: 'Общие настройки'
  }, {
    path: 'branding',
    component: _components_branding_branding_component__WEBPACK_IMPORTED_MODULE_15__.BrandingComponent,
    pathMatch: 'full',
    title: 'Брендирование'
  }, {
    path: 'notifications',
    component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__.NotificationsComponent,
    pathMatch: 'full',
    title: 'Уведомления'
  }, {
    path: 'mailings',
    component: _components_filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_12__.FilterListComponent,
    pathMatch: 'full',
    title: 'Рассылки'
  }]
}, {
  path: 'position/add',
  component: _components_position_editor_position_editor_component__WEBPACK_IMPORTED_MODULE_7__.PositionEditorComponent,
  pathMatch: 'full',
  title: 'Добавление должности'
}, {
  path: 'position/:id',
  component: _components_position_editor_position_editor_component__WEBPACK_IMPORTED_MODULE_7__.PositionEditorComponent,
  pathMatch: 'full',
  title: 'Редактирование должности'
}, {
  path: 'department/add',
  component: _components_department_editor_department_editor_component__WEBPACK_IMPORTED_MODULE_2__.DepartmentEditorComponent,
  pathMatch: 'full',
  title: 'Добавление подразделения'
}, {
  path: 'department/:id',
  component: _components_department_editor_department_editor_component__WEBPACK_IMPORTED_MODULE_2__.DepartmentEditorComponent,
  pathMatch: 'full',
  title: 'Редактирование подразделения'
}, {
  path: 'employee/add',
  component: _components_employee_editor_employee_editor_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeEditorComponent,
  pathMatch: 'full',
  title: 'Добавление сотрудника'
}, {
  path: 'employee/:id',
  component: _components_employee_editor_employee_editor_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeEditorComponent,
  pathMatch: 'full',
  title: 'Редактирование сотрудника'
}, {
  path: 'company/add',
  component: _components_company_editor_company_editor_component__WEBPACK_IMPORTED_MODULE_0__.CompanyEditorComponent,
  pathMatch: 'full',
  title: 'Добавление компании'
}, {
  path: 'company/:id',
  component: _components_company_editor_company_editor_component__WEBPACK_IMPORTED_MODULE_0__.CompanyEditorComponent,
  pathMatch: 'full',
  title: 'Редактирование компании'
}, {
  path: 'client-group/add',
  component: _components_client_group_editor_client_group_editor_component__WEBPACK_IMPORTED_MODULE_11__.ClientGroupEditorComponent,
  pathMatch: 'full',
  title: 'Добавление группы клиентов'
}, {
  path: 'client-group/:id',
  component: _components_client_group_editor_client_group_editor_component__WEBPACK_IMPORTED_MODULE_11__.ClientGroupEditorComponent,
  pathMatch: 'full',
  title: 'Редактирование группы клиентов'
}
// {
//   path: 'table-filter/:table/add',
//   component: FilterListComponent,
//   pathMatch: 'full',
//   title: 'Фильтры на формах',
// },
// {
//   path: 'table-filter/:table/:id',
//   component: FilterListComponent,
//   pathMatch: 'full',
//   title: 'Фильтры на формах',
// },
];

class SettingsRoutingModule {
  static {
    this.ɵfac = function SettingsRoutingModule_Factory(t) {
      return new (t || SettingsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
      type: SettingsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](SettingsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();

/***/ }),

/***/ 96917:
/*!**************************************************************!*\
  !*** ./src/app/pages/modules/settings/settings.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_mySetting_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/mySetting.service */ 37901);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);







const _c0 = function (a0) {
  return [a0, "add"];
};
function SettingsComponent_ng_container_17_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r2.activeMenuItem == null ? null : ctx_r2.activeMenuItem.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.activeMenuItem == null ? null : ctx_r2.activeMenuItem.addButtonTitle);
  }
}
function SettingsComponent_ng_container_17_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_ng_container_17_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.openPopap(ctx_r4.activeMenuItem == null ? null : ctx_r4.activeMenuItem.popap));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.activeMenuItem == null ? null : ctx_r3.activeMenuItem.addButtonTitle, " ");
  }
}
function SettingsComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SettingsComponent_ng_container_17_a_1_Template, 3, 4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SettingsComponent_ng_container_17_button_2_Template, 2, 1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r0.activeMenuItem == null ? null : ctx_r0.activeMenuItem.addPopap));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.activeMenuItem == null ? null : ctx_r0.activeMenuItem.addPopap);
  }
}
const _c1 = function (a0) {
  return [a0];
};
function SettingsComponent_div_20_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, item_r8.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8.title);
  }
}
const _c2 = function (a0) {
  return {
    "open": a0
  };
};
const _c3 = function (a0) {
  return {
    "display": a0
  };
};
function SettingsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_div_20_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const group_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.toggleGroup(group_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SettingsComponent_div_20_a_7_Template, 2, 4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c2, group_r6.expanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", group_r6.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c3, group_r6.expanded ? "" : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r6.items);
  }
}
class SettingsComponent {
  constructor(router, activatedRoute, mySettingService, dialog) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.mySettingService = mySettingService;
    this.dialog = dialog;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.settings = [];
    this.routerEventSubscription = router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroy$)).subscribe(s => {
      if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        this.detectMenuItemAndGroup();
      }
    });
  }
  ngOnInit() {
    this.mySettingService.loadMenuGroups().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroy$)).subscribe({
      next: () => {
        this.settings = this.mySettingService.getMenuGroups();
        this.detectMenuItemAndGroup();
      },
      error: err => console.error('Ошибка загрузки меню настроек', err)
    });
  }
  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
    // this.routerEventSubscription.unsubscribe();
  }

  openPopap(popap) {
    // this.dialog.open(popap, {data: { table: 'test',}
    //   // width: '500px',
    //   // data: { table: this.route.snapshot.params['table'],filter:filter }
    // });
    // Открываем диалоговое окно (AddPopupComponent) и передаем в него данные
    const dialogRef = this.dialog.open(popap);
    // Подписываемся на событие закрытия диалога
    dialogRef.afterClosed().subscribe(result => {
      // this.getTableRows();  // Обновляем данные таблицы после закрытия
      if (result) {
        this.mySettingService.loadTableRows(result);
      }
    });
  }
  toggleGroup(group) {
    group.expanded = !group.expanded;
  }
  detectMenuItemAndGroup() {
    for (const group of this.settings) {
      for (const item of group.items) {
        const urlTree = this.router.createUrlTree([item.link], {
          relativeTo: this.activatedRoute
        });
        const isActive = this.router.isActive(urlTree, {
          paths: 'subset',
          matrixParams: 'ignored',
          queryParams: 'ignored',
          fragment: 'ignored'
        });
        if (isActive) {
          this.activeMenuItem = item;
          this.activeMenuGroup = group;
          this.activeMenuGroup.expanded = true;
          return;
        }
      }
    }
  }
  static {
    this.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mySetting_service__WEBPACK_IMPORTED_MODULE_0__.MySettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 23,
      vars: 8,
      consts: [[1, "subheader"], [1, "placer"], [1, "title"], [1, "break-crumbs"], [1, "item-crumbs"], [1, "del-crumbs"], [3, "routerLink"], [1, "div"], [4, "ngIf"], [1, "settings"], [1, "left", "side-menu"], ["class", "menu-group", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "settings-page"], ["class", "btn add", 3, "routerLink", 4, "ngIf"], ["class", "btn add", "type", "button", 3, "click", 4, "ngIf"], [1, "btn", "add", 3, "routerLink"], ["type", "button", 1, "btn", "add", 3, "click"], [1, "menu-group", 3, "ngClass"], [1, "group-name", 3, "click"], [1, "ico", 3, "ngClass"], [1, "name"], [1, "chevron"], [1, "group-items", 3, "ngStyle"], ["class", "menu-item", "routerLinkActive", "open", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "open", 1, "menu-item", 3, "routerLink"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 4)(14, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SettingsComponent_ng_container_17_Template, 3, 2, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9)(19, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SettingsComponent_div_20_Template, 8, 9, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.activeMenuItem == null ? null : ctx.activeMenuItem.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.activeMenuGroup == null ? null : ctx.activeMenuGroup.title, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, ctx.activeMenuItem == null ? null : ctx.activeMenuItem.link));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.activeMenuItem == null ? null : ctx.activeMenuItem.title, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeMenuItem == null ? null : ctx.activeMenuItem.canAdd);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.settings);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive],
      styles: [".settings {\n  display: flex;\n  flex-grow: 1;\n}\n\n.settings .left.side-menu {\n  width: 320px;\n  flex-shrink: 0;\n}\n\n.settings .settings-page {\n  flex-grow: 1;\n  padding: 20px 20px 20px;\n}\n\n.settings .settings-page .table-footer {\n  padding: 20px 0 0;\n}\n\n.side-menu {\n  background: var(--header_menu, #4B66AD);\n  color: var(--header_menu_text, #FFFFFF);\n}\n\n.side-menu a {\n  color: var(--header_menu_text, #FFFFFF);\n  text-decoration: none;\n}\n\n.side-menu .menu-group {\n  box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--header_menu_text) 17%, transparent);\n}\n.side-menu .menu-group:not(.open):hover {\n  opacity: 0.6;\n}\n\n.side-menu .group-name {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.side-menu .group-name .ico {\n  width: 56px;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.side-menu .group-name .name {\n  flex-grow: 1;\n}\n\n.side-menu .group-name .chevron {\n  width: 56px;\n  height: 56px;\n  background: url('settings-arrow-down.svg') no-repeat center center;\n}\n\n.side-menu .menu-group.open .group-name .ico svg path {\n  fill: #fff;\n}\n\n.side-menu .menu-group.open .group-name .chevron {\n  transform: rotate(180deg);\n}\n\n.side-menu .menu-group.open .group-name + .group-items {\n  display: block;\n}\n\n.side-menu .group-items {\n  /*display: none;*/\n  padding: 0 0 7px 48px;\n}\n\n.side-menu .menu-item {\n  display: block;\n  font-size: 13px;\n  line-height: 16px;\n  padding: 8px 10px 7px 8px;\n  border-radius: 6px 0 0 6px;\n  cursor: pointer;\n}\n\n.side-menu .menu-item + .menu-item {\n  margin-top: 3px;\n}\n\n.side-menu .menu-item.open {\n  background: var(--background, #fff);\n  color: var(--header_menu, #4B66AD);\n}\n\n.menu-group .ico {\n  opacity: 0.5;\n}\n.menu-group.open {\n  background: color-mix(in srgb, var(--header_menu) 83%, white);\n}\n.menu-group.open .ico {\n  opacity: 1;\n}\n\n.settings-common {\n  background-image: url('general-settings.svg');\n}\n\n.settings-company-structure {\n  background-image: url('organization-structure.svg');\n}\n\n.settings-directory {\n  background-image: url('directories.svg');\n}\n\n.settings-table-filter {\n  background-image: url('pic-filter-w.svg');\n}\n\n.settings-system {\n  background-image: url('system.svg');\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbW9kdWxlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSx1Q0FBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBRUUsdUZBQUE7QUFBRjtBQUNFO0VBQW1CLFlBQUE7QUFFckI7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrRUFBQTtBQURGOztBQVlBO0VBQ0UsVUFBQTtBQVRGOztBQVlBO0VBQ0UseUJBQUE7QUFURjs7QUFZQTtFQUNFLGNBQUE7QUFURjs7QUFZQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFURjs7QUFZQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQVRGOztBQVlBO0VBQ0UsZUFBQTtBQVRGOztBQVlBO0VBQ0UsbUNBQUE7RUFDQSxrQ0FBQTtBQVRGOztBQWFFO0VBQU0sWUFBQTtBQVRSO0FBVUU7RUFDRSw2REFBQTtBQVJKO0FBU0k7RUFBSyxVQUFBO0FBTlQ7O0FBU0E7RUFBbUIsNkNBQUE7QUFMbkI7O0FBTUE7RUFBOEIsbURBQUE7QUFGOUI7O0FBR0E7RUFBc0Isd0NBQUE7QUFDdEI7O0FBQUE7RUFBd0IseUNBQUE7QUFJeEI7O0FBSEE7RUFBa0IsbUNBQUE7QUFPbEIiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5zZXR0aW5ncyAubGVmdC5zaWRlLW1lbnUge1xuICB3aWR0aDogMzIwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uc2V0dGluZ3MgLnNldHRpbmdzLXBhZ2Uge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4O1xufVxuXG4uc2V0dGluZ3MgLnNldHRpbmdzLXBhZ2UgLnRhYmxlLWZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHggMCAwO1xufVxuXG4uc2lkZS1tZW51IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyX21lbnUsICM0QjY2QUQpO1xuICBjb2xvcjogdmFyKC0taGVhZGVyX21lbnVfdGV4dCwgI0ZGRkZGRiApO1xufVxuXG4uc2lkZS1tZW51IGEge1xuICBjb2xvcjogdmFyKC0taGVhZGVyX21lbnVfdGV4dCwgI0ZGRkZGRiApO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaWRlLW1lbnUgLm1lbnUtZ3JvdXAge1xuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVCNzdDMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWhlYWRlcl9tZW51X3RleHQpIDE3JSwgdHJhbnNwYXJlbnQpO1xuICAmOm5vdCgub3Blbik6aG92ZXJ7b3BhY2l0eTogMC42O31cbn1cblxuLnNpZGUtbWVudSAuZ3JvdXAtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG59XG5cbi5zaWRlLW1lbnUgLmdyb3VwLW5hbWUgLmljbyB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cblxuXG4uc2lkZS1tZW51IC5ncm91cC1uYW1lIC5uYW1lIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uc2lkZS1tZW51IC5ncm91cC1uYW1lIC5jaGV2cm9uIHtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc2V0dGluZ3MtYXJyb3ctZG93bi5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbn1cblxuLnNpZGUtbWVudSAubWVudS1ncm91cC5vcGVuIHtcbiAgLy8gYmFja2dyb3VuZDogdmFyKC0taGVhZGVyX21lbnUsICM1Qjc3QzEpO1xuICAvLyBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcbiAgXG59XG5cbi5zaWRlLW1lbnUgLm1lbnUtZ3JvdXAub3BlbiAuZ3JvdXAtbmFtZSAuaWNvIHt9XG5cbi5zaWRlLW1lbnUgLm1lbnUtZ3JvdXAub3BlbiAuZ3JvdXAtbmFtZSAuaWNvIHN2ZyBwYXRoIHtcbiAgZmlsbDogI2ZmZjtcbn1cblxuLnNpZGUtbWVudSAubWVudS1ncm91cC5vcGVuIC5ncm91cC1uYW1lIC5jaGV2cm9uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLnNpZGUtbWVudSAubWVudS1ncm91cC5vcGVuIC5ncm91cC1uYW1lKy5ncm91cC1pdGVtcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2lkZS1tZW51IC5ncm91cC1pdGVtcyB7XG4gIC8qZGlzcGxheTogbm9uZTsqL1xuICBwYWRkaW5nOiAwIDAgN3B4IDQ4cHg7XG59XG5cbi5zaWRlLW1lbnUgLm1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMTBweCA3cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHggMCAwIDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lkZS1tZW51IC5tZW51LWl0ZW0rLm1lbnUtaXRlbSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLnNpZGUtbWVudSAubWVudS1pdGVtLm9wZW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLCAjZmZmICk7XG4gIGNvbG9yOiB2YXIoLS1oZWFkZXJfbWVudSwgIzRCNjZBRCk7XG59XG5cbi5tZW51LWdyb3VwIHtcbiAgLmljb3sgb3BhY2l0eTogMC41IH07XG4gICYub3BlbiB7IFxuICAgIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1oZWFkZXJfbWVudSkgODMlLCB3aGl0ZSk7XG4gICAgLmljb3tvcGFjaXR5OiAxfSBcbiAgfTtcbn1cbi5zZXR0aW5ncy1jb21tb24geyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zZXR0aW5ncy1tZW51L2dlbmVyYWwtc2V0dGluZ3Muc3ZnJyk7IH0vL8OQwr7DkMKxw5HCicOQwrjDkMK1IMOQwr3DkMKww5HCgcORwoLDkcKAw5DCvsOQwrnDkMK6w5DCuFxuLnNldHRpbmdzLWNvbXBhbnktc3RydWN0dXJlIHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvc2V0dGluZ3MtbWVudS9vcmdhbml6YXRpb24tc3RydWN0dXJlLnN2ZycpOyB9Ly/DkcKBw5HCgsORwoDDkcKDw5DCusORwoLDkcKDw5HCgMOQwrAgw5DCvsORwoDDkMKzw5DCsMOQwr3DkMK4w5DCt8OQwrDDkcKGw5DCuMOQwrlcbi5zZXR0aW5ncy1kaXJlY3RvcnkgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zZXR0aW5ncy1tZW51L2RpcmVjdG9yaWVzLnN2ZycpOyB9Ly/DkcKBw5DCv8ORwoDDkMKww5DCssOQwr7DkcKHw5DCvcOQwrjDkMK6XG4uc2V0dGluZ3MtdGFibGUtZmlsdGVyeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9zZXR0aW5ncy1tZW51L3BpYy1maWx0ZXItdy5zdmcnKTsgfS8vw5HChMOQwrjDkMK7w5HCjMORwoLDkcKAw5HCiyDDkMK9w5DCsCDDkcKEw5DCvsORwoDDkMK8w5DCsMORwoVcbi5zZXR0aW5ncy1zeXN0ZW17IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3NldHRpbmdzLW1lbnUvc3lzdGVtLnN2ZycpOyB9Ly/DkcKBw5DCuMORwoHDkcKCw5DCtcOQwrzDkMKwXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 58440:
/*!***********************************************************!*\
  !*** ./src/app/pages/modules/settings/settings.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsModule: () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _cargodrom_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cargodrom/material/material.module */ 20551);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-routing.module */ 27729);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component */ 96917);
/* harmony import */ var _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/employee/employee.component */ 16042);
/* harmony import */ var _components_position_position_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/position/position.component */ 26776);
/* harmony import */ var _components_department_department_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/department/department.component */ 68674);
/* harmony import */ var _components_position_editor_position_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/position-editor/position-editor.component */ 22436);
/* harmony import */ var _components_department_editor_department_editor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/department-editor/department-editor.component */ 43856);
/* harmony import */ var _components_employee_editor_employee_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/employee-editor/employee-editor.component */ 49116);
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/company/company.component */ 55660);
/* harmony import */ var _components_company_editor_company_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/company-editor/company-editor.component */ 89660);
/* harmony import */ var _components_department_employee_department_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/department-employee/department-employee.component */ 62624);
/* harmony import */ var _components_personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/personal-settings/personal-settings.component */ 98136);
/* harmony import */ var _components_client_group_client_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/client-group/client-group.component */ 20772);
/* harmony import */ var _components_client_group_editor_client_group_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/client-group-editor/client-group-editor.component */ 80344);
/* harmony import */ var _table_components_simple_table_grid_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../table/components/simple-table/grid-table.component */ 5395);
/* harmony import */ var _components_filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/filter-list/filter-list.component */ 31488);
/* harmony import */ var _components_popap_table_filter_editor_popap_table_filter_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/popap-table_filter-editor/popap-table_filter-editor.component */ 77632);
/* harmony import */ var _components_general_settings_general_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/general-settings/general-settings.component */ 63006);
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/notifications/notifications.component */ 54992);
/* harmony import */ var _components_branding_branding_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/branding/branding.component */ 65868);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37580);

























class SettingsModule {
  static {
    this.ɵfac = function SettingsModule_Factory(t) {
      return new (t || SettingsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
      type: SettingsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _cargodrom_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule,
      // PagesModule,
      src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](SettingsModule, {
    declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent, _components_employee_employee_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeComponent, _components_position_position_component__WEBPACK_IMPORTED_MODULE_4__.PositionComponent, _components_department_department_component__WEBPACK_IMPORTED_MODULE_5__.DepartmentComponent, _components_position_editor_position_editor_component__WEBPACK_IMPORTED_MODULE_6__.PositionEditorComponent, _components_department_editor_department_editor_component__WEBPACK_IMPORTED_MODULE_7__.DepartmentEditorComponent, _components_employee_editor_employee_editor_component__WEBPACK_IMPORTED_MODULE_8__.EmployeeEditorComponent, _components_company_company_component__WEBPACK_IMPORTED_MODULE_9__.CompanyComponent, _components_company_editor_company_editor_component__WEBPACK_IMPORTED_MODULE_10__.CompanyEditorComponent, _components_department_employee_department_employee_component__WEBPACK_IMPORTED_MODULE_11__.DepartmentEmployeeComponent, _components_personal_settings_personal_settings_component__WEBPACK_IMPORTED_MODULE_12__.PersonalSettingsComponent, _components_client_group_client_group_component__WEBPACK_IMPORTED_MODULE_13__.ClientGroupComponent, _components_client_group_editor_client_group_editor_component__WEBPACK_IMPORTED_MODULE_14__.ClientGroupEditorComponent, _components_filter_list_filter_list_component__WEBPACK_IMPORTED_MODULE_16__.FilterListComponent, _table_components_simple_table_grid_table_component__WEBPACK_IMPORTED_MODULE_15__.GridTableComponent, _components_popap_table_filter_editor_popap_table_filter_editor_component__WEBPACK_IMPORTED_MODULE_17__.AddPopupComponent, _components_general_settings_general_settings_component__WEBPACK_IMPORTED_MODULE_18__.GeneralSettingsComponent, _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_19__.NotificationsComponent, _components_branding_branding_component__WEBPACK_IMPORTED_MODULE_20__.BrandingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _cargodrom_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule,
    // PagesModule,
    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__.SharedModule]
  });
})();

/***/ }),

/***/ 5395:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/table/components/simple-table/grid-table.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridTableComponent: () => (/* binding */ GridTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 50854);
// grid-table.component.ts




const _c0 = ["cellTemplates"];
function GridTableComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](column_r2.headerClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r2.title, " ");
  }
}
function GridTableComponent_div_3_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c1 = function (a0) {
  return {
    $implicit: a0
  };
};
function GridTableComponent_div_3_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridTableComponent_div_3_div_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.getTemplateForField(column_r6.field))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, row_r3));
  }
}
function GridTableComponent_div_3_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r3[column_r6.field], " ");
  }
}
function GridTableComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridTableComponent_div_3_div_1_ng_container_1_Template, 2, 4, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridTableComponent_div_3_div_1_ng_template_2_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](column_r6.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getTemplateForField(column_r6.field))("ngIfElse", _r8);
  }
}
function GridTableComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridTableComponent_div_3_div_1_Template, 4, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-template-columns", ctx_r1.gridTemplateColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("no-active", !row_r3.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragData", row_r3)("cdkDragDisabled", !ctx_r1.dragEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.columns);
  }
}
const _c2 = ["*"];
class GridTableComponent {
  constructor() {
    this.columns = [];
    this.rows = [];
    this.dragEnabled = false;
    this.dragHandleField = 'move';
    this.rowDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.filterShowChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.editRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.deleteRow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  get gridTemplateColumns() {
    return this.columns.map(col => col.width || '1fr').join(' ');
  }
  getTemplateForField(field) {
    const template = this.cellTemplates.find(t => {
      // @ts-ignore
      return t._declarationTContainer.localNames?.[0] === field;
    });
    return template || null;
  }
  onDrop(event) {
    this.rowDropped.emit(event);
  }
  onFilterShow(row) {
    this.filterShowChange.emit(row);
  }
  onEdit(row) {
    this.editRow.emit(row);
  }
  onDelete(id) {
    this.deleteRow.emit(id);
  }
  static {
    this.ɵfac = function GridTableComponent_Factory(t) {
      return new (t || GridTableComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GridTableComponent,
      selectors: [["app-grid-table"]],
      contentQueries: function GridTableComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cellTemplates = _t);
        }
      },
      inputs: {
        columns: "columns",
        rows: "rows",
        dragEnabled: "dragEnabled",
        dragHandleField: "dragHandleField"
      },
      outputs: {
        rowDropped: "rowDropped",
        filterShowChange: "filterShowChange",
        editRow: "editRow",
        deleteRow: "deleteRow"
      },
      ngContentSelectors: _c2,
      decls: 5,
      vars: 4,
      consts: [["cdkDropList", "", 1, "grid-table", 3, "cdkDropListDropped"], [1, "grid-header"], ["class", "grid-header-cell", 3, "class", 4, "ngFor", "ngForOf"], ["class", "grid-row", "cdkDrag", "", 3, "grid-template-columns", "no-active", "cdkDragData", "cdkDragDisabled", 4, "ngFor", "ngForOf"], [1, "grid-header-cell"], ["cdkDrag", "", 1, "grid-row", 3, "cdkDragData", "cdkDragDisabled"], ["class", "grid-cell", 3, "class", 4, "ngFor", "ngForOf"], [1, "grid-cell"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function GridTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function GridTableComponent_Template_div_cdkDropListDropped_0_listener($event) {
            return ctx.onDrop($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridTableComponent_div_2_Template, 2, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GridTableComponent_div_3_Template, 2, 7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-template-columns", ctx.gridTemplateColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDrag],
      styles: ["\n\n.grid-table[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  border: 1px solid #e0e0e0;\n  background-color: white;\n}\n\n.grid-header[_ngcontent-%COMP%] {\n  display: grid;\n  font-weight: bold;\n  background-color: #83909E;\n  color: white;\n  font-size: 13px;\n  line-height: 13px;\n}\n\n.grid-header-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  min-height: 48px;\n  box-sizing: border-box;\n}\n\n.grid-row[_ngcontent-%COMP%] {\n  display: grid;\n  border-bottom: 1px solid #e0e0e0;\n  background-color: white;\n}\n.grid-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.grid-row.no-active[_ngcontent-%COMP%] {\n  background: #F7F9FC;\n}\n.grid-row.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background: white;\n}\n.grid-row.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.grid-row.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.grid-cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n  min-height: 48px;\n  box-sizing: border-box;\n}\n.grid-cell.border[_ngcontent-%COMP%] {\n  border-left: 1px solid #E0E5EB;\n  border-right: 1px solid #E0E5EB;\n}\n\n.drag-handle[_ngcontent-%COMP%] {\n  cursor: move;\n  color: #666;\n  display: flex;\n  align-items: center;\n}\n.drag-handle[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.drag-handle[_ngcontent-%COMP%]   .move-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  display: block;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGFibGUvY29tcG9uZW50cy9zaW1wbGUtdGFibGUvZ3JpZC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7QUFBSjtBQUdFO0VBQ0UscUhBQUE7RUFHQSxpQkFBQTtBQUhKO0FBTUU7RUFDRSxVQUFBO0FBSko7QUFPRTtFQUNFLHNEQUFBO0FBTEo7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFORjtBQVFFO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQU5KOztBQVVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVNFO0VBQ0UsV0FBQTtBQVBKO0FBVUU7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVRKIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ3JpZC10YWJsZS5jb21wb25lbnQuc2NzcyAqL1xuLmdyaWQtdGFibGUge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ncmlkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODM5MDlFO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG59XG5cbi5ncmlkLWhlYWRlci1jZWxsIHtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZ3JpZC1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIFxuICAmOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbiAgXG4gICYubm8tYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOUZDO1xuICB9XG4gIFxuICAmLmNkay1kcmFnLXByZXZpZXcge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgXG4gICYuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gICYuY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH1cbn1cblxuLmdyaWQtY2VsbCB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgXG4gICYuYm9yZGVyIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFMEU1RUI7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTVFQjtcbiAgfVxufVxuXG4uZHJhZy1oYW5kbGUge1xuICBjdXJzb3I6IG1vdmU7XG4gIGNvbG9yOiAjNjY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC5tb3ZlLWljb24ge1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tbWF0cml4LnN2ZycpO1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 80050:
/*!**************************************************!*\
  !*** ./src/app/shared/classes/base-component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseComponent: () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class BaseComponent {
  constructor() {
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.snackBarWithShortDuration = {
      duration: 2000
    };
    this.snackBarWithLongDuration = {
      duration: 4000
    };
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function BaseComponent_Factory(t) {
      return new (t || BaseComponent)();
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: BaseComponent
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modules_settings_settings_module_ts.js.map