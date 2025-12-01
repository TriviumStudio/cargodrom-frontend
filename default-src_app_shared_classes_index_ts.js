"use strict";
(self["webpackChunkcargodrom_frontend"] = self["webpackChunkcargodrom_frontend"] || []).push([["default-src_app_shared_classes_index_ts"],{

/***/ 56825:
/*!*****************************************!*\
  !*** ./src/app/shared/classes/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Table: () => (/* reexport safe */ _table__WEBPACK_IMPORTED_MODULE_0__.Table)
/* harmony export */ });
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ 86209);


/***/ }),

/***/ 86209:
/*!*****************************************!*\
  !*** ./src/app/shared/classes/table.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Table: () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 79439);
/* harmony import */ var src_app_pages_table_list_table_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/table-list/table-list.service */ 31607);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/filter/services/filter.service */ 50535);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ 43273);









const _c0 = ["removeDialogRef"];
const _c1 = ["exportDialogRef"];
const _c2 = ["importDialogRef"];
const _c3 = ["saveBiddingRef"];
const _c4 = ["translateRef"];
const _c5 = ["file"];
class Table {
  constructor(route, router, dialog, snackBar, filterService, userService) {
    this.route = route;
    this.router = router;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.filterService = filterService;
    this.userService = userService;
    this.rowsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.rows$ = this.rowsSubject.asObservable();
    this.snackBarWithShortDuration = {
      duration: 1000
    };
    this.snackBarWithLongDuration = {
      duration: 5000
    };
    this.column = [];
    this.sortableColumns = [];
    this.isBiddingMode = false;
    this.isRateDetailsMode = false;
    this.isResizeColumnMode = false;
    this.resizeMetod = '';
    this.isResizing = false;
    this.resizingColumn = null;
    this.resizingColumnBlock = null;
    this.startX = 0;
    this.startWidth = 0;
    this.startWidthBlock = 0;
    this.detailsMethod = '';
    this.arrRowsId = [];
    this.quantityContractors = 0;
    this.currentQuantityContractors = 0;
    this.currentRequest = {};
    this.contractorsSelectedForRequest = [];
    this.requestId = 0;
    this.columnsData = [];
    this.isRowsLoad = false;
    this.requestCrmStatuses = [];
    this.isTableFixedWidth = false;
    this.xlsxMimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    this.removedMessage = 'Запись удалена';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.rows = [];
    this.fullTotal = 0;
    this.total = 0;
    this.start = 0;
    this.limits = [10, 25, 50, 100];
    this.count = this.limits[0];
    this.sortDir = 'asc';
    this.aliases = new Map();
    this.tableService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_pages_table_list_table_list_service__WEBPACK_IMPORTED_MODULE_0__.TableListService);
  }
  ngOnInit() {
    const segments = this.route.snapshot.url.map(s => s.path);
    this.isBiddingMode = segments[0] === 'bidding';
    this.isRateDetailsMode = segments[0] === 'details';
    if (this.isRateDetailsMode || this.isBiddingMode) {
      if (this.isRateDetailsMode) this.detailsMethod = segments[1];
      this.requestId = Number(this.route.snapshot.paramMap.get('id')); //TODO:предлать все на paramMap.get в похожих случаях
      this.getRequestInfo(this.requestId);
    }
    this.filterService.onApply().subscribe(filter => {
      this.onFilterChange(filter);
    });
    this.getListParam();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getVal(obj, path) {
    if (!path?.includes('/')) {
      const value = obj[path] !== undefined ? obj[path] : null;
      return this.transformClientValue(value, obj);
    }
    ;
    const keys = path?.split('/');
    for (const key of keys) {
      if (obj && obj.hasOwnProperty(key)) {
        obj = obj[key];
      } else {
        return null;
      }
    }
    ;
    const result = obj !== undefined ? obj : null;
    return this.transformClientValue(result, obj);
  }
  transformClientValue(value, obj) {
    if (typeof value === 'string') {
      const baseUrl = window.location.href.split('/#')[0];
      return value.replace(/\[urlclient\](.*?)\[\/urlclient\]/ig, `<a class="link" target="_blank" href="${baseUrl}/#/customer/edit/${obj.customer_id}">$1</a>`);
    }
    return value;
  }
  // private transformClientValue(value: any, obj:any) {
  //   if (typeof value === 'string') {
  //     return value.replace(
  //       /\[urlclient\](.*?)\[\/urlclient\]/ig,
  //       `<a class="link" target="_blank" href="/#/pages/customer/edit/${obj.customer_id}">$1</a>`
  //     );
  //   }
  //   return value;
  // }
  loadRows() {
    const sortCol = this.getSort();
    // let params: any = { start: this.start, count: this.count, ...this.filter ,city_id:['3',1,3] };
    let params = {
      start: this.start,
      count: this.count,
      filter: JSON.stringify(this.filter)
    };
    if (this.isRateDetailsMode) {
      params = {
        ...params,
        request_id: this.requestId,
        method: this.detailsMethod
      };
    } else if (this.isBiddingMode) {
      params = {
        ...params,
        bidding_request_id: this.requestId
      };
    } else {
      params = {
        ...params,
        sort: JSON.stringify(sortCol)
      };
    }
    console.log(params);
    // let params:any;
    // if(this.isRateDetailsMode){
    //   params= { request_id:this.requestId, method: this.detailsMethod, start: this.start, count: this.count, ...this.filter };
    // } else if(this.isBiddingMode)  {
    //   params= { request_id:this.requestId, start: this.start, count: this.count, ...this.filter };
    // } else {
    //   params= { start: this.start, count: this.count, sort: JSON.stringify(sortCol) as unknown as SortColumn<T>[], ...this.filter  };
    // }
    // let params = this.isRateDetailsMode
    //   ? { request_id:this.requestId, method: this.detailsMethod, start: this.start, count: this.count, ...this.filter }
    //   : { start: this.start, count: this.count, sort: JSON.stringify(sortCol) as unknown as SortColumn<T>[], ...this.filter  };
    this.load(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$))
    // this.tableService.getRows(params)
    .subscribe(rows => {
      console.log('rows', rows);
      this.rows = rows ? rows.items : [];
      // Отправляем данные в BehaviorSubject
      this.rowsSubject.next(rows.items);
      this.total = rows.total;
      this.fullTotal = rows.full_total ? rows.full_total : 0;
      if (this.isBiddingMode) {
        this.arrRowsId = [];
        rows.items.forEach(element => {
          this.arrRowsId.push(element.id);
        });
        this.getContractorsSelectRequest();
      }
      this.isRowsLoad = true;
    });
  }
  delete(params) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)();
  }
  loadFilterSchema() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
      header: [],
      main: [],
      additional: []
    });
  }
  getIntParamSafely(queryParamMap, name, fallback) {
    const value = queryParamMap.get(name);
    if (value != null) {
      const intValue = parseInt(value, 10);
      return intValue;
    }
    return fallback;
  }
  getIntEnumParamSafely(queryParamMap, name, values, fallback) {
    const value = queryParamMap.get(name);
    if (value != null) {
      const intValue = parseInt(value, 10);
      return values.includes(intValue) ? intValue : fallback;
    }
    return fallback;
  }
  getEnumParamSafely(queryParamMap, name, values, fallback) {
    const value = queryParamMap.get(name);
    if (value != null && values.includes(value)) {
      return value;
    }
    return fallback;
  }
  getStringParamSafely(queryParamMap, name, fallback) {
    const value = queryParamMap.get(name);
    if (value != null) {
      return value;
    }
    return fallback;
  }
  getJsonParamSafely(queryParamMap, name, fallback) {
    const value = queryParamMap.get(name);
    if (value != null) {
      try {
        const json = JSON.parse(value);
        return json;
      } catch (e) {
        return fallback;
      }
    }
    return fallback;
  }
  onStartChange(newStart) {
    this.router.navigate(['.'], {
      queryParams: {
        start: newStart
      },
      queryParamsHandling: 'merge',
      relativeTo: this.route
    });
  }
  onCountChange(newCount) {
    this.router.navigate(['.'], {
      queryParams: {
        count: newCount,
        start: 0
      },
      queryParamsHandling: 'merge',
      relativeTo: this.route
    });
  }
  onFilterChange(filter) {
    const filterWithNonEmptyValue = {};
    for (const key in filter) {
      const value = filter[key];
      if (value != null && value !== '') {
        if (!Array.isArray(value) || value.length > 0) {
          filterWithNonEmptyValue[key] = value;
        }
      }
    }
    const hasKeys = Object.keys(filterWithNonEmptyValue).length > 0;
    this.router.navigate(['.'], {
      queryParams: {
        start: 0,
        filter: hasKeys ? JSON.stringify(filterWithNonEmptyValue) : null
      },
      queryParamsHandling: 'merge',
      relativeTo: this.route
    });
  }
  sort(field) {
    if (!this.isResizeColumnMode) {
      if (Array.isArray(this.sortableColumns) && !this.sortableColumns.includes(field)) {
        return;
      }
      this.start = 0;
      if (this.sortField === field) {
        this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortDir = 'asc';
        this.sortField = field;
      }
      this.router.navigate(['.'], {
        queryParams: {
          sortCol: this.sortField,
          sortDir: this.sortDir,
          start: this.start
        },
        queryParamsHandling: 'merge',
        relativeTo: this.route
      });
    }
  }
  getSortClass(field) {
    if (!this.isResizeColumnMode) {
      if (this.sortField === field) {
        return this.sortDir === 'asc' ? 'column-sortable sort-dir-asc' : 'column-sortable sort-dir-desc';
      } else if (this.isSortable(field)) {
        return 'column-sortable';
      }
    }
    return '';
  }
  isSortable(name) {
    return Array.isArray(this.sortableColumns) && this.sortableColumns.includes(name);
  }
  confirmRemove(row) {
    this.dialog.open(this.removeDialogRef, {
      data: row
    }).afterClosed().subscribe(res => {
      if (res) {
        this.remove(row);
      }
    });
  }
  remove(row) {
    const body = {
      id: row.id
    };
    this.delete({
      body
    }).subscribe({
      next: () => {
        this.snackBar.open(this.removedMessage, undefined, this.snackBarWithShortDuration);
        this.loadRows();
      },
      error: err => this.snackBar.open(`Ошибка удаления: ` + err?.error?.error_message, undefined, {
        duration: 1000
      })
    });
  }
  getColTitle(field) {
    if (Array.isArray(this.sortableColumns) && !this.sortableColumns.includes(field)) {
      return '';
    }
    if (field === this.sortField) {
      return this.sortDir === 'asc' ? 'сортировать по убыванию' : 'сортировать по возрастанию';
    }
    return 'сортировать по возрастанию';
  }
  getSort() {
    const sortCol = [];
    const sortField = this.sortField;
    if (this.aliases.has(sortField)) {
      const fields = this.aliases.get(sortField);
      sortCol.push(...fields.map(field => ({
        field,
        dir: this.sortDir
      })));
    } else {
      sortCol.push({
        field: this.sortField,
        dir: this.sortDir
      });
    }
    if (this.nameField && this.nameField !== this.sortField) {
      const name = this.nameField;
      if (this.aliases.has(name)) {
        const fields = this.aliases.get(name);
        sortCol.push(...fields.map(field => ({
          field,
          dir: 'asc'
        })));
      } else {
        sortCol.push({
          field: this.nameField,
          dir: 'asc'
        });
      }
    }
    return sortCol;
  }
  registerAlias(alias, fields) {
    this.aliases.set(alias, fields);
  }
  exportData(param) {
    return rxjs__WEBPACK_IMPORTED_MODULE_9__.NEVER;
  }
  importData(body) {
    return rxjs__WEBPACK_IMPORTED_MODULE_9__.NEVER;
  }
  importDataConfirm(body) {
    return rxjs__WEBPACK_IMPORTED_MODULE_9__.NEVER;
  }
  importResult(body) {
    return rxjs__WEBPACK_IMPORTED_MODULE_9__.NEVER;
  }
  importTemplate() {
    return rxjs__WEBPACK_IMPORTED_MODULE_9__.NEVER;
  }
  requestContractorSelectGet(id) {
    return rxjs__WEBPACK_IMPORTED_MODULE_9__.NEVER;
  }
  requestContractorSelectUpdate(body) {
    return rxjs__WEBPACK_IMPORTED_MODULE_9__.NEVER;
  }
  requestSaveBidding(body) {
    return rxjs__WEBPACK_IMPORTED_MODULE_9__.NEVER;
  }
  requestInfo(id) {
    return rxjs__WEBPACK_IMPORTED_MODULE_9__.NEVER;
  }
  loadFilterSchemaTest(par) {
    return rxjs__WEBPACK_IMPORTED_MODULE_9__.NEVER;
  }
  confirmExport() {
    if (!this.exportDialogRef) {
      return;
    }
    this.dialog.open(this.exportDialogRef).afterClosed().subscribe(res => {
      if (res) {
        this.exportFile();
      }
    });
  }
  doImport(file) {
    if (!this.importDialogRef) {
      return;
    }
    const fileName = file.name;
    const reader = new FileReader();
    reader.addEventListener('load', event => {
      if (typeof event.target?.result === 'string') {
        const base64URL = event.target?.result;
        const suffix = `;base64,`;
        const index = base64URL.indexOf(suffix);
        const data = base64URL.substring(index + suffix.length);
        const payload = {
          data,
          name: fileName
        };
        this.importData(payload).subscribe({
          // next: ({ import_key, text }) => {
          next: e => {
            const text = e.text;
            const res = e.result;
            const import_key = e.import_key;
            this.dialog.open(this.importDialogRef, {
              data: {
                ...payload,
                text,
                res
              }
            }).afterClosed().subscribe(res => {
              if (res === 2) {
                this.importResult({
                  import_key
                }).subscribe({
                  next: ({
                    name,
                    data
                  }) => {
                    const dataUri = `data:${this.xlsxMimeType};base64,${data}`;
                    const a = document.createElement('a');
                    a.href = dataUri;
                    a.download = name;
                    a.click();
                    this.snackBar.open('Файл с результатами обработки успешно скачен', undefined, this.snackBarWithShortDuration);
                    // this.onStartChange(0);
                    // this.resetPage();
                  },

                  error: err => this.snackBar.open(`Не удалось скачать файл с результатами обработки: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
                });
              }
              if (res === 1) {
                this.importDataConfirm({
                  import_key
                }).subscribe({
                  next: () => {
                    this.snackBar.open('Данные импортированы успешно', undefined, this.snackBarWithShortDuration);
                    // this.onStartChange(0);
                    this.resetPage();
                  },
                  error: err => this.snackBar.open(`Не удалось импортировать данные: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
                });
              }
            });
          },
          error: err => this.snackBar.open(`Не удалось импортировать данные: ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
        });
      }
    }, false);
    reader.addEventListener('error', () => this.snackBar.open(`Ошибка чтения файла ${fileName} `, undefined, this.snackBarWithShortDuration), false);
    reader.readAsDataURL(file);
  }
  exportFile() {
    this.exportData({
      start: this.start,
      count: this.count,
      sort: JSON.stringify(this.getSort()),
      ...this.filter
    }).subscribe({
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
      error: err => this.snackBar.open(`Не удалось экспортировать данные: ` + err.error?.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  exportFileTemplate() {
    this.importTemplate().subscribe({
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
      error: err => this.snackBar.open(`Не удалось экспортировать данные: ` + err.error?.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  importFile() {
    const input = this.file?.nativeElement;
    if (input) {
      input.value = '';
      input.click();
    }
  }
  selectFileForImport() {
    const files = this.file?.nativeElement.files;
    const file = files?.[0];
    if (file?.name.endsWith('.xls')) {
      this.snackBar.open('Требуется Excel файл в формате .xlsx', undefined, this.snackBarWithShortDuration);
      return;
    }
    if (file?.size && file.size > 2 * 1024 * 1024) {
      this.snackBar.open('Слишком большой файл', undefined, this.snackBarWithShortDuration);
      return;
    }
    this.doImport(file);
  }
  resetPage() {
    this.router.navigate([]);
  }
  getContractorsSelectRequest() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.requestContractorSelectGet(id).subscribe({
      next: contractors => {
        if (contractors) {
          this.quantityContractors = contractors.length;
          this.contractorsSelectedForRequest = [];
          this.rows.forEach(row => {
            contractors.forEach(contractor => {
              if (row.id === contractor.contractor_id) {
                this.contractorsSelectedForRequest.push(contractor.contractor_id);
              }
            });
          });
        } else {
          this.quantityContractors = 0;
        }
      },
      complete: () => this.currentQuantityContractors = this.contractorsSelectedForRequest.length,
      error: err => this.snackBar.open(`Не получилось ID контрагентов выбранных для отправки запроса ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  updateContractorSelectRequest(contractorId, {
    checked
  }) {
    const requestId = Number(this.route.snapshot.paramMap.get('id'));
    const check = checked ? true : false;
    this.requestContractorSelectUpdate({
      id: requestId,
      contractor_id: [contractorId],
      checked: check
    }).subscribe({
      next: e => {
        this.getContractorsSelectRequest();
      },
      error: err => this.snackBar.open(`Не получилось изменить список контракторов выбравших запрос ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  updateAllContractorSelectRequest({
    checked
  }) {
    const requestId = Number(this.route.snapshot.paramMap.get('id'));
    const check = checked ? true : false;
    this.requestContractorSelectUpdate({
      id: requestId,
      contractor_id: this.arrRowsId,
      checked: check
    }).subscribe({
      next: e => {
        if (!check) {
          this.contractorsSelectedForRequest = [];
        }
        this.getContractorsSelectRequest();
      },
      error: err => this.snackBar.open(`Не получилось изменить список контракторов выбравших запрос ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  saveTrueContractorSelectRequest() {
    const requestId = Number(this.route.snapshot.paramMap.get('id'));
    this.requestSaveBidding({
      id: requestId,
      confirm: true
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(res => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: answer => {
        this.snackBar.open(`Торги для выбранных подрядчиков успешно начаты `, undefined, this.snackBarWithLongDuration);
      },
      error: err => {
        this.snackBar.open(`Ошибка добавления подрядчиков в торги ` + err.error.error_message, undefined, this.snackBarWithLongDuration);
      }
    });
  }
  saveContractorSelectRequest() {
    const requestId = Number(this.route.snapshot.paramMap.get('id'));
    this.requestSaveBidding({
      id: requestId,
      confirm: false
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: answer => {
        // if(answer.need_translate){
        //   this.dialog.open(this.translateRef!).afterClosed().subscribe(res => {
        //     if(res) this.router.navigate(['/pages/request/edit/translate', this.requestId]);
        //   })
        // } else {
        //   this.saveTrueContractorSelectRequest();
        // }
        this.saveTrueContractorSelectRequest();
      },
      error: err => {
        this.dialog.open(this.saveBiddingRef, {
          data: {
            err
          }
        }).afterClosed().subscribe(res => {
          if (res) {
            this.saveTrueContractorSelectRequest();
          } else {
            this.router.navigate([], {
              queryParams: {}
            });
          }
        });
      }
    });
  }
  isCheck(id) {
    return this.contractorsSelectedForRequest.includes(id);
  }
  isAllCheck() {
    const filteredArray = this.rows.filter(item => item.bidding_send === false);
    const count = filteredArray.length;
    return this.rows.length > 0 && this.currentQuantityContractors === count;
  }
  isIndeterminate() {
    const filteredArray = this.rows.filter(item => item.bidding_send === false);
    const count = filteredArray.length;
    return this.rows.length > 0 && this.currentQuantityContractors < count && this.currentQuantityContractors > 0;
  }
  getRequestInfo(id) {
    this.requestInfo(id).subscribe({
      next: request => {
        console.log('request', request);
        this.currentRequest = request;
        if (this.isBiddingMode) {
          this.filterService.value["country_departure_id"] = this.currentRequest.departure_country_id;
          this.filterService.value["country_arrival_id"] = this.currentRequest.arrival_country_id;
          this.filterService.value["specialization"] = [this.currentRequest.transport_kind_id];
          this.filterService.value["allow_trade"] = 1;
          this.filterService.apply();
        }
      },
      error: err => this.snackBar.open(`Ошибка получения данных запроса ` + err.error.error_message, undefined, this.snackBarWithShortDuration)
    });
  }
  getListParam() {
    const param = this.isRateDetailsMode ? {
      request_id: this.requestId,
      method: this.detailsMethod
    } : null;
    this.loadFilterSchemaTest(param).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(schema => {
      console.log('schema', schema);
      if (this.isBiddingMode) {
        schema.table.unshift({
          column: 'checkbox',
          width: '50px',
          items: [{
            field: '',
            title: '',
            width: '100%'
          }]
        });
      }
      this.isTableFixedWidth = !schema.table_width_set;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
      next: schema => {
        this.sortField = schema.sort[0]?.field;
        this.sortDir = schema.sort[0]?.dir;
        this.filterService.setSearchFilterSchema(schema.search);
        schema.table.forEach(col => {
          this.column?.push(col.column);
        });
        schema.sort?.forEach(sor => {
          this.sortableColumns?.push(sor.field);
        });
        this.columnsData = schema.table;
        if (schema.status) {
          this.requestCrmStatuses = schema.status;
        }
        this.subscribeRouteQueryParamMap();
      },
      error: err => this.snackBar.open(`Ошибка получения параметров вывода таблицы ` + err?.error?.error_message, undefined, this.snackBarWithShortDuration),
      complete: () => {
        // this.subscribeRouteQueryParamMap();
      }
    });
  }
  subscribeRouteQueryParamMap() {
    this.route.queryParamMap.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(queryParamMap => {
      // console.log(queryParamMap.params.translate);
      if (queryParamMap.params.translate) {
        this.saveContractorSelectRequest();
      }
      this.start = this.getIntParamSafely(queryParamMap, 'start', this.start);
      this.count = this.getIntEnumParamSafely(queryParamMap, 'count', this.limits, this.count);
      this.sortField = this.getStringParamSafely(queryParamMap, 'sortCol', this.sortField);
      this.sortDir = this.getEnumParamSafely(queryParamMap, 'sortDir', ['asc', 'desc'], this.sortDir);
      this.filter = this.getJsonParamSafely(queryParamMap, 'filter', {});
      this.filterService.setValue(this.filter);
      this.loadRows();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe();
  }
  startResize(event, column, colBlock) {
    this.isResizing = true;
    this.resizingColumn = column;
    this.resizingColumnBlock = colBlock;
    this.startX = event.pageX;
    this.startWidth = column.width ? parseInt(column.width, 10) : 100; // Начальная ширина
    this.startWidthBlock = colBlock.width ? parseInt(column.width, 10) : 100;
    event.preventDefault();
  }
  onMouseMove(event) {
    if (!this.isResizing || !this.resizingColumn) return;
    const width = this.startWidth + (event.pageX - this.startX);
    const widthBlock = this.startWidthBlock + (event.pageX - this.startX);
    this.resizingColumn.width = `${width}px`;
    this.resizingColumnBlock.width = `${widthBlock}px`;
  }
  onMouseUp() {
    if (this.isResizing) {
      this.isResizing = false;
    }
    ;
    this.resizingColumn = null;
    this.resizingColumnBlock = null;
  }
  updateColumnSize() {
    const td = this.isRateDetailsMode ? document.querySelectorAll('div.table-list.rate table tbody tr:first-child td.mat-mdc-cell') : document.querySelectorAll('table tbody tr:first-child td.mat-mdc-cell');
    if (!td) {
      return;
    }
    ;
    td.forEach((col, columnIndex) => {
      this.columnsData[columnIndex].width = `${col.offsetWidth}px`;
      const miniColArr = col.querySelectorAll('div.column');
      if (!miniColArr) {
        return;
      }
      ;
      miniColArr.forEach((miniCol, miniColumnIndex) => {
        this.columnsData[columnIndex].items[miniColumnIndex].width = `${miniCol.offsetWidth}px`;
      });
    });
    this.isResizeColumnMode = !this.isResizeColumnMode;
    this.isTableFixedWidth = false;
  }
  // updateColumnSize(){
  //   const result = Array.from(
  //     this.isRateDetailsMode
  //     ?document.querySelectorAll('div.table-list.rate table thead tr th')
  //     :document.querySelectorAll('table thead tr th'),
  //     (th:any, columnIndex:number) => {
  //       if(this.columnsData[columnIndex]){
  //         // console.log(th.querySelectorAll('div.column'));
  //         th.querySelectorAll('div.column').forEach((col:any, miniColumnIndex:number) => {
  //           console.log(col, miniColumnIndex);
  //       });
  //         if(!this.isRateDetailsMode){
  //           if(columnIndex===0){
  //           this.columnsData[columnIndex].width=`${th.offsetWidth-1}px`;
  //           }else{
  //             this.columnsData[columnIndex].width=`${th.offsetWidth}px`;
  //           }
  //         } else {
  //           this.columnsData[columnIndex].width=`${th.offsetWidth}px`;
  //         }
  //       }
  //     }
  //   );
  //   this.isResizeColumnMode=!this.isResizeColumnMode;
  //   this.isTableFixedWidth=false;
  // }
  onSaveColumnWidth() {
    this.userService.userSaveTableParam({
      body: {
        method: this.resizeMetod,
        param: this.columnsData
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(() => {
      this.isResizeColumnMode = false;
    });
  }
  onResetColumnWidth() {
    this.userService.userResetTableParam({
      body: {
        method: this.resizeMetod
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(() => {
      this.onCancelColumnWidth();
    });
  }
  onCancelColumnWidth() {
    location.reload();
  }
  static {
    this.ɵfac = function Table_Factory(t) {
      return new (t || Table)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_filter_services_filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.UserService));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
      type: Table,
      viewQuery: function Table_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c5, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.removeDialogRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.exportDialogRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.importDialogRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.saveBiddingRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.translateRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
        }
      },
      hostBindings: function Table_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mousemove", function Table_mousemove_HostBindingHandler($event) {
            return ctx.onMouseMove($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"])("mouseup", function Table_mouseup_HostBindingHandler() {
            return ctx.onMouseUp();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
        }
      }
    });
  }
}

/***/ }),

/***/ 79439:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/never.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NEVER: () => (/* binding */ NEVER),
/* harmony export */   never: () => (/* binding */ never)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 43942);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ 54318);


const NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(_util_noop__WEBPACK_IMPORTED_MODULE_1__.noop);
function never() {
  return NEVER;
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_classes_index_ts.js.map