"use strict";
(self["webpackChunkcargodrom_frontend"] = self["webpackChunkcargodrom_frontend"] || []).push([["common"],{

/***/ 37901:
/*!*****************************************************!*\
  !*** ./src/app/pages/services/mySetting.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MySettingsService: () => (/* binding */ MySettingsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);





/**
 * Сервис для работы с меню настроек приложения
 * Предоставляет методы для загрузки и управления структурой меню настроек
 */
class MySettingsService {
  constructor(apiSettingsService, route) {
    this.apiSettingsService = apiSettingsService;
    this.route = route;
    this._menuGroups = [];
    this._tableRows$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]); // Subject для хранения и передачи строк таблицы
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(); // Subject для отписки
  }
  /**
   * Возвращает текущие группы меню настроек
   * @returns Массив групп меню с их элементами
   */
  getMenuGroups() {
    return this._menuGroups;
  }
  /**
   * Загружает данные для меню настроек с сервера и инициализирует структуру меню
   * @returns Observable, который завершается после успешной загрузки и инициализации меню
   */
  loadMenuGroups() {
    return this.apiSettingsService.settingsFilterFormParam().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      this._menuGroups = this.buildMenuGroups(response.tables);
    }));
  }
  /**
   * Создает полную структуру меню настроек на основе данных с сервера
   * @param tables Массив таблиц, полученных с сервера, для раздела "Фильтры на формах"
   * @returns Полная структура меню настроек с статичными и динамическими разделами
   */
  buildMenuGroups(tables) {
    return [this.createCommonSettingsGroup(), this.createCompanyStructureGroup(), this.createSystemGroup(), this.createTableFiltersGroup(tables), this.createDirectoriesGroup()];
  }
  /**
   * Создает группу "Общие настройки"
   * @returns Группа меню с общими настройками приложения
   */
  createCommonSettingsGroup() {
    return {
      title: 'Общие настройки',
      cssClass: 'settings-common',
      expanded: false,
      items: [{
        title: 'Личные настройки',
        link: './personal'
      }, {
        title: 'Организации',
        link: './company',
        canAdd: true,
        addButtonTitle: 'Добавить организацию'
      }]
    };
  }
  /**
   * Создает группу "Структура организации"
   * @returns Группа меню с элементами структуры организации
   */
  createCompanyStructureGroup() {
    return {
      title: 'Структура организации',
      cssClass: 'settings-company-structure',
      expanded: false,
      items: [{
        title: 'Подразделения',
        link: './department',
        canAdd: true,
        addButtonTitle: 'Добавить подразделение'
      }, {
        title: 'Должности',
        link: './position',
        canAdd: true,
        addButtonTitle: 'Добавить должность'
      }, {
        title: 'Сотрудники',
        link: './employee',
        canAdd: true,
        addButtonTitle: 'Добавить сотрудника'
      }]
    };
  }
  /**
   * Создает группу "Система"
   * @returns Группа меню с элементами системы
   */
  createSystemGroup() {
    return {
      title: 'Система',
      cssClass: 'settings-system',
      expanded: false,
      items: [{
        title: 'Общие настройки',
        link: './general-settings',
        canAdd: false
        // addButtonTitle: 'Добавить подразделение'
      }, {
        title: 'Брендирование',
        link: './branding',
        canAdd: false
      }, {
        title: 'Уведомления',
        link: './notifications',
        canAdd: false
        // addButtonTitle: 'Добавить сотрудника'
      }
      // {
      //   title: 'Рассылки',
      //   link: './mailings',
      //   canAdd: false,
      //   // addButtonTitle: 'Добавить сотрудника'
      // }
      ]
    };
  }
  /**
   * Создает группу "Фильтры на формах" с динамическими элементами из API
   * @param tables Массив таблиц для преобразования в элементы меню
   * @returns Группа меню с фильтрами таблиц
   */
  createTableFiltersGroup(tables) {
    return {
      title: 'Фильтры на формах',
      cssClass: 'settings-table-filter',
      expanded: false,
      items: this.transformTablesToMenuItems(tables)
    };
  }
  /**
   * Создает группу "Справочники"
   * @returns Группа меню со справочниками системы
   */
  createDirectoriesGroup() {
    return {
      title: 'Справочники',
      cssClass: 'settings-directory',
      expanded: false,
      items: [{
        title: 'Группы клиентов',
        link: './client-group',
        canAdd: true,
        addButtonTitle: 'Добавить группу'
      }]
    };
  }
  /**
   * Преобразует массив таблиц из API в элементы меню
   * Обрабатывает формирование корректных URL и названий для множественного числа
   * @param tables Массив таблиц для преобразования
   * @returns Массив элементов меню для раздела фильтров таблиц
   */
  transformTablesToMenuItems(tables) {
    return tables.map(table => {
      // Формируем URL в множественном числе с обработкой исключений
      const pluralId = table.id;
      return {
        title: table.name,
        link: `./table-filter/${pluralId}`,
        canAdd: false
        // addButtonTitle: 'Добавить новый фильтр',
        // addPopap: true,
        // popap: AddPopupComponent,
      };
    });
  }
  // /**
  //  * Преобразует идентификатор таблицы в форму множественного числа
  //  * @param tableId Идентификатор таблицы в единственном числе
  //  * @returns Идентификатор таблицы во множественном числе
  //  */
  // private getPluralTableId(tableId: string): string {
  //   // Обработка специальных случаев
  //   if (tableId === 'customer') {
  //     return 'customers';
  //   }
  //   // Стандартное правило - добавление 's' в конец
  //   if (!tableId.endsWith('s')) {
  //     return tableId + 's';
  //   }
  //   return tableId;
  // }
  /**
   * Загружает строки таблицы и обновляет BehaviorSubject
   * @param tableName Название таблицы для загрузки
   */
  loadTableRows(tableName) {
    this.apiSettingsService.settingsFilterList({
      table: tableName
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroy$)).subscribe(rows => {
      if (rows.items != undefined) {
        this._tableRows$.next(rows.items);
      }
    });
  }
  /**
   * Возвращает Observable для подписки на изменения строк таблицы
   * @returns Observable с массивом строк таблицы
   */
  getTableRows$() {
    return this._tableRows$.asObservable();
  }
  /**
   * Обновляет данные в BehaviorSubject вручную
   * @param rows Новые данные для таблицы
   */
  updateTableRows(rows) {
    this._tableRows$.next(rows);
  }
  /**
   * Очищает ресурсы при уничтожении сервиса
   */
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this._tableRows$.complete();
  }
  static {
    this.ɵfac = function MySettingsService_Factory(t) {
      return new (t || MySettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: MySettingsService,
      factory: MySettingsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 29756:
/*!******************************************!*\
  !*** ./src/app/shared/classes/editor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Editor: () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/sort-predicate */ 41990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 36647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);







class Editor {
  constructor(location, systemService, route, snackBar, router) {
    this.location = location;
    this.systemService = systemService;
    this.route = route;
    this.snackBar = snackBar;
    this.router = router;
    this.isNavigateAfterSave = true;
    this.isEditMode = false;
    this.snackBarWithShortDuration = {
      duration: 1000
    };
    this.snackBarWithLongDuration = {
      duration: 5000
    };
    this.taxSystems = [];
    this.currencies = [];
    this.headPositions = [];
    this.businessKinds = [];
    this.filteredBusinessKinds = [];
    this.interactionKinds = [];
    this.contactSources = [];
    this.filteredContactSources = [];
    this.clientStatuses = [];
    this.filteredClientStatuses = [];
    this.clientKinds = [];
    this.filteredClientKinds = [];
    this.serviceKinds = [];
    this.isFormSubmitted = false;
    this.data = {};
    this.currentTitle = '';
  }
  ngOnInit() {
    this.detectEditMode();
    if (this.isEditMode) {
      this.id = this.getIdParam();
      this.load();
    }
    this.currentTitle = this.isEditMode ? this.editTitle : this.newTitle;
  }
  get title() {
    return this.currentTitle;
  }
  goBack() {
    this.location.back();
  }
  loadTaxSystems() {
    this.systemService.systemTaxSystem().subscribe(taxSystems => this.taxSystems = taxSystems ? taxSystems.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('name', 'asc', 'case-insensitive')) : []);
  }
  loadCurrencies() {
    this.systemService.systemCurrency().subscribe(currencies => this.currencies = currencies.current ? currencies.current.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('code', 'asc', 'case-insensitive')) : []);
    console.log(this.currencies);
  }
  loadHeadPositions() {
    this.systemService.systemHeadPosition().subscribe(positions => this.headPositions = positions ? positions.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('name', 'asc', 'case-insensitive')) : []);
  }
  loadBusinessKinds() {
    this.systemService.systemBusiness().subscribe(kinds => {
      this.filteredBusinessKinds = kinds ? kinds.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('num', 'asc', 'numeric')) : [];
      this.businessKinds = kinds ? kinds.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('num', 'asc', 'numeric')) : [];
    });
  }
  loadInteractionKinds() {
    this.systemService.systemInteraction().subscribe(kinds => this.interactionKinds = kinds ? kinds.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('num', 'asc', 'numeric')) : []);
  }
  loadContactSources() {
    this.systemService.systemContactSource().subscribe(kinds => {
      this.filteredContactSources = kinds ? kinds.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('name', 'asc', 'case-insensitive')) : [];
      this.contactSources = kinds ? kinds.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('name', 'asc', 'case-insensitive')) : [];
    });
  }
  loadClientStatuses() {
    this.systemService.systemCustomerStatus().subscribe(kinds => {
      this.filteredClientStatuses = kinds ? kinds.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('name', 'asc', 'case-insensitive')) : [];
      this.clientStatuses = kinds ? kinds.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('name', 'asc', 'case-insensitive')) : [];
    });
  }
  loadClientKinds() {
    this.systemService.systemCounterparty().subscribe(kinds => {
      this.clientKinds = kinds ? kinds.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('num', 'asc', 'numeric')) : [];
      this.filteredClientKinds = kinds ? kinds.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('num', 'asc', 'numeric')) : [];
    });
  }
  loadServiceKinds() {
    this.systemService.systemServices().subscribe(kinds => this.serviceKinds = kinds ? kinds.sort((0,_constants_sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField)('name', 'asc', 'case-insensitive')) : []);
  }
  hasError(controlName) {
    const control = this.form.get(controlName);
    return control.invalid;
  }
  getError(controlName) {
    const control = this.form.get(controlName);
    if (control.errors?.['required']) {
      return 'Поле обязательно';
    }
    if (control.errors?.['email']) {
      return 'Невалидный email';
    }
    if (control.errors?.['inn']) {
      return 'Неверный формат ИНН';
    }
    if (control.errors?.['mask']) {
      return 'Неверный формат';
    }
    return '';
  }
  showMessage(message) {
    this.snackBar.open(message, undefined, this.snackBarWithShortDuration);
  }
  showMessageAndGoBack(message) {
    this.showMessage(message);
    this.goBack();
  }
  showMessageAndSwitchToEditMode(message, id) {
    this.showMessage(message);
    this.router.navigate(['..', id], {
      replaceUrl: true,
      relativeTo: this.route
    });
  }
  showMessageAndReload(message) {
    this.showMessage(message);
    this.load();
  }
  showError(message, err) {
    if (typeof err?.error?.error_message === 'string') {
      const hasDescription = typeof err.error?.error_message_description === 'string';
      if (hasDescription) {
        this.snackBar.open(`${message}: ` + err.error?.error_message + ':' + err.error?.error_message_description, undefined, this.snackBarWithLongDuration);
      } else {
        this.snackBar.open(`${message}: ` + err.error?.error_message, undefined, this.snackBarWithLongDuration);
      }
    } else {
      this.snackBar.open(message, undefined, this.snackBarWithLongDuration);
    }
  }
  showErrorAndGoBack(err, message) {
    this.showError(message, err);
    this.goBack();
  }
  load() {
    const id = this.getIdParam();
    this.read({
      id
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
      // currently, when entity doesn't exist the service returns HTTP 200 with empty response body instead of HTTP 404
      // therefore we have to handle that case manually
      if (!data) {
        throw {
          error: {
            error_message: `запись не существует`
          }
        };
      }
    })).subscribe({
      next: data => {
        console.log(data);
        this.data = data;
        this.patchForm();
        this.nameForHeader = this.getNameForHeader(data);
      },
      error: err => this.showErrorAndGoBack(err, this.notFoundMessage)
    });
  }
  patchForm() {
    console.log('patchForm');
    this.form.patchValue(this.data);
  }
  save() {
    this.isFormSubmitted = true;
    if (!this.form.valid) {
      this.showError('Не все поля заполнены корректно');
      return;
    }
    const body = this.form.value;
    if (typeof this.data.id === 'number') {
      this.updateData(body);
    } else {
      this.createData(body);
    }
  }
  remove() {
    const body = {
      id: this.data.id
    };
    this.delete({
      body
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.afterDelete())).subscribe({
      next: () => this.showMessageAndGoBack(this.removedMessage),
      error: err => this.showError('Ошибка', err)
    });
  }
  afterCreate(body) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({
      id: body.id
    });
  }
  afterUpdate() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(undefined);
  }
  afterDelete() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(undefined);
  }
  createData(body) {
    this.create({
      body
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(body => this.afterCreate(body))).subscribe({
      next: ({
        id
      }) => {
        // this.showMessageAndSwitchToEditMode(this.createdMessage, id)
        if (this.isNavigateAfterSave) {
          this.showMessageAndGoBack(this.removedMessage);
        } else {
          this.showMessageAndSwitchToEditMode(this.createdMessage, id);
        }
      },
      error: err => this.showError(`Ошибка`, err)
    });
  }
  updateData(body) {
    this.update({
      body
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.afterUpdate())).subscribe({
      next: () => {
        if (this.isNavigateAfterSave) {
          this.showMessageAndGoBack(this.removedMessage);
        } else {
          this.showMessageAndReload(this.savedMessage);
        }
      },
      error: err => this.showError(`Ошибка`, err)
    });
  }
  detectEditMode() {
    const segments = this.route.snapshot.url.map(s => s.path);
    this.isEditMode = segments[0] !== 'add';
  }
  getIdParam() {
    return Number(this.route.snapshot.paramMap.get('id'));
  }
  static {
    this.ɵfac = function Editor_Factory(t) {
      return new (t || Editor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: Editor
    });
  }
}

/***/ }),

/***/ 51360:
/*!*******************************************!*\
  !*** ./src/app/shared/constants/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   byField: () => (/* reexport safe */ _sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byField),
/* harmony export */   byName: () => (/* reexport safe */ _sort_predicate__WEBPACK_IMPORTED_MODULE_0__.byName),
/* harmony export */   transportSubKindTable: () => (/* reexport safe */ _transport_sub_kind_table__WEBPACK_IMPORTED_MODULE_1__.transportSubKindTable),
/* harmony export */   unknownCountry: () => (/* reexport safe */ _unknown_country__WEBPACK_IMPORTED_MODULE_2__.unknownCountry)
/* harmony export */ });
/* harmony import */ var _sort_predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort-predicate */ 41990);
/* harmony import */ var _transport_sub_kind_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transport-sub-kind-table */ 9532);
/* harmony import */ var _unknown_country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unknown-country */ 83393);




/***/ }),

/***/ 41990:
/*!****************************************************!*\
  !*** ./src/app/shared/constants/sort-predicate.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   byField: () => (/* binding */ byField),
/* harmony export */   byName: () => (/* binding */ byName)
/* harmony export */ });
const byName = order => (a, b) => {
  const aName = a.name.toLocaleLowerCase();
  const bName = b.name.toLocaleLowerCase();
  const result = aName.localeCompare(bName);
  return order === 'asc' ? result : -result;
};
const byField = (field, order, type) => (a, b) => {
  let result = 0;
  if (type === 'numeric') {
    const aField = a[field];
    const bField = b[field];
    result = aField - bField;
  } else if (type === 'case-insensitive') {
    const aField = a[field].toLocaleLowerCase();
    const bField = b[field].toLocaleLowerCase();
    result = aField.localeCompare(bField);
  } else if (type === 'case-sensitive') {
    const aField = a[field];
    const bField = b[field];
    result = aField.localeCompare(bField);
  }
  return order === 'asc' ? result : -result;
};

/***/ }),

/***/ 9532:
/*!**************************************************************!*\
  !*** ./src/app/shared/constants/transport-sub-kind-table.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transportSubKindTable: () => (/* binding */ transportSubKindTable)
/* harmony export */ });
const transportSubKindTable = [{
  kind: 'avia_lcl',
  type: 'air',
  classes: ['s'],
  name: 'LCL'
}, {
  kind: 'avia_fcl',
  type: 'air',
  classes: ['e'],
  name: 'FCL'
}, {
  kind: 'road_lcl',
  type: 'road',
  classes: ['bg', 's'],
  name: 'LCL'
}, {
  kind: 'road_fcl',
  type: 'road',
  classes: ['bg'],
  name: 'FCL'
}, {
  kind: 'road_adr',
  type: 'road',
  classes: ['bg'],
  name: 'ADR'
}, {
  kind: 'road_ref',
  type: 'road',
  classes: ['bg'],
  name: 'REF'
}, {
  kind: 'sea_teus',
  type: 'sea',
  classes: ['s', 'e'],
  name: 'TEUS'
}, {
  kind: 'sea_lcl',
  type: 'sea',
  classes: ['e'],
  name: 'LCL'
}, {
  kind: 'sea_sp',
  type: 'sea',
  classes: ['e'],
  name: 'СП'
}, {
  kind: 'rw_teus',
  type: 'rail',
  classes: ['bg', 's'],
  name: 'TEUS'
}, {
  kind: 'rw_lcl',
  type: 'rail',
  classes: ['bg'],
  name: 'LCL'
}, {
  kind: 'rw_sp',
  type: 'rail',
  classes: ['bg', 'e'],
  name: 'СП'
}];

/***/ }),

/***/ 83393:
/*!*****************************************************!*\
  !*** ./src/app/shared/constants/unknown-country.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unknownCountry: () => (/* binding */ unknownCountry)
/* harmony export */ });
const unknownCountry = {
  id: 12345678,
  name: 'Неизвестная страна',
  name_from: 'Неизвестной страны',
  name_to: 'Неизвестную страну'
};

/***/ })

}]);
//# sourceMappingURL=common.js.map