"use strict";
(self["webpackChunkcargodrom_frontend"] = self["webpackChunkcargodrom_frontend"] || []).push([["main"],{

/***/ 4540:
/*!*************************************************!*\
  !*** ./src/app/adapters/custom-date.adapter.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomDateAdapter: () => (/* binding */ CustomDateAdapter)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class CustomDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.NativeDateAdapter {
  getFirstDayOfWeek() {
    return 1; // Понедельник
  }

  format(date, displayFormat) {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${this._to2digit(day)}.${this._to2digit(month)}.${year}`;
    }
    return super.format(date, displayFormat);
  }
  _to2digit(n) {
    return ('00' + n).slice(-2);
  }
  static {
    this.ɵfac = /*@__PURE__*/function () {
      let ɵCustomDateAdapter_BaseFactory;
      return function CustomDateAdapter_Factory(t) {
        return (ɵCustomDateAdapter_BaseFactory || (ɵCustomDateAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CustomDateAdapter)))(t || CustomDateAdapter);
      };
    }();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CustomDateAdapter,
      factory: CustomDateAdapter.ɵfac
    });
  }
}

/***/ }),

/***/ 7942:
/*!******************************************!*\
  !*** ./src/app/api/api-configuration.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiConfiguration: () => (/* binding */ ApiConfiguration)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

/**
 * Global configuration
 */
class ApiConfiguration {
  constructor() {
    this.rootUrl = 'https://dev.cargodrom.com/api/1.0';
  }
  static {
    this.ɵfac = function ApiConfiguration_Factory(t) {
      return new (t || ApiConfiguration)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiConfiguration,
      factory: ApiConfiguration.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 442:
/*!*************************************!*\
  !*** ./src/app/api/base-service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseService: () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-configuration */ 7942);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



/**
 * Base class for services
 */
class BaseService {
  constructor(config, http) {
    this.config = config;
    this.http = http;
    this._rootUrl = '';
  }
  /**
   * Returns the root url for all operations in this service. If not set directly in this
   * service, will fallback to `ApiConfiguration.rootUrl`.
   */
  get rootUrl() {
    return this._rootUrl || this.config.rootUrl;
  }
  /**
   * Sets the root URL for API operations in this service.
   */
  set rootUrl(rootUrl) {
    this._rootUrl = rootUrl;
  }
  static {
    this.ɵfac = function BaseService_Factory(t) {
      return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_0__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BaseService,
      factory: BaseService.ɵfac
    });
  }
}

/***/ }),

/***/ 9522:
/*!****************************************!*\
  !*** ./src/app/api/request-builder.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestBuilder: () => (/* binding */ RequestBuilder)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* tslint:disable */
/* eslint-disable */

/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
class ParameterCodec {
  encodeKey(key) {
    return encodeURIComponent(key);
  }
  encodeValue(value) {
    return encodeURIComponent(value);
  }
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  decodeValue(value) {
    return decodeURIComponent(value);
  }
}
const ParameterCodecInstance = new ParameterCodec();
/**
 * Base class for a parameter
 */
class Parameter {
  constructor(name, value, options, defaultStyle, defaultExplode) {
    this.name = name;
    this.value = value;
    this.options = options;
    this.options = options || {};
    if (this.options.style === null || this.options.style === undefined) {
      this.options.style = defaultStyle;
    }
    if (this.options.explode === null || this.options.explode === undefined) {
      this.options.explode = defaultExplode;
    }
  }
  serializeValue(value, separator = ',') {
    if (value === null || value === undefined) {
      return '';
    } else if (value instanceof Array) {
      return value.map(v => this.serializeValue(v).split(separator).join(encodeURIComponent(separator))).join(separator);
    } else if (typeof value === 'object') {
      const array = [];
      for (const key of Object.keys(value)) {
        let propVal = value[key];
        if (propVal !== null && propVal !== undefined) {
          propVal = this.serializeValue(propVal).split(separator).join(encodeURIComponent(separator));
          if (this.options.explode) {
            array.push(`${key}=${propVal}`);
          } else {
            array.push(key);
            array.push(propVal);
          }
        }
      }
      return array.join(separator);
    } else {
      return String(value);
    }
  }
}
/**
 * A parameter in the operation path
 */
class PathParameter extends Parameter {
  constructor(name, value, options) {
    super(name, value, options, 'simple', false);
  }
  append(path) {
    let value = this.value;
    if (value === null || value === undefined) {
      value = '';
    }
    let prefix = this.options.style === 'label' ? '.' : '';
    let separator = this.options.explode ? prefix === '' ? ',' : prefix : ',';
    let alreadySerialized = false;
    if (this.options.style === 'matrix') {
      // The parameter name is just used as prefix, except in some cases...
      prefix = `;${this.name}=`;
      if (this.options.explode && typeof value === 'object') {
        prefix = ';';
        if (value instanceof Array) {
          // For arrays we have to repeat the name for each element
          value = value.map(v => `${this.name}=${this.serializeValue(v, ';')}`);
          value = value.join(';');
          alreadySerialized = true;
        } else {
          // For objects we have to put each the key / value pairs
          value = this.serializeValue(value, ';');
          alreadySerialized = true;
        }
      }
    }
    value = prefix + (alreadySerialized ? value : this.serializeValue(value, separator));
    // Replace both the plain variable and the corresponding variant taking in the prefix and explode into account
    path = path.replace(`{${this.name}}`, value);
    path = path.replace(`{${prefix}${this.name}${this.options.explode ? '*' : ''}}`, value);
    return path;
  }
  // @ts-ignore
  serializeValue(value, separator = ',') {
    var result = typeof value === 'string' ? encodeURIComponent(value) : super.serializeValue(value, separator);
    result = result.replace(/%3D/g, '=');
    result = result.replace(/%3B/g, ';');
    result = result.replace(/%2C/g, ',');
    return result;
  }
}
/**
 * A parameter in the query
 */
class QueryParameter extends Parameter {
  constructor(name, value, options) {
    super(name, value, options, 'form', true);
  }
  append(params) {
    if (this.value instanceof Array) {
      // Array serialization
      if (this.options.explode) {
        for (const v of this.value) {
          params = params.append(this.name, this.serializeValue(v));
        }
      } else {
        const separator = this.options.style === 'spaceDelimited' ? ' ' : this.options.style === 'pipeDelimited' ? '|' : ',';
        return params.append(this.name, this.serializeValue(this.value, separator));
      }
    } else if (this.value !== null && typeof this.value === 'object') {
      // Object serialization
      if (this.options.style === 'deepObject') {
        // Append a parameter for each key, in the form `name[key]`
        for (const key of Object.keys(this.value)) {
          const propVal = this.value[key];
          if (propVal !== null && propVal !== undefined) {
            params = params.append(`${this.name}[${key}]`, this.serializeValue(propVal));
          }
        }
      } else if (this.options.explode) {
        // Append a parameter for each key without using the parameter name
        for (const key of Object.keys(this.value)) {
          const propVal = this.value[key];
          if (propVal !== null && propVal !== undefined) {
            params = params.append(key, this.serializeValue(propVal));
          }
        }
      } else {
        // Append a single parameter whose values are a comma-separated list of key,value,key,value...
        const array = [];
        for (const key of Object.keys(this.value)) {
          const propVal = this.value[key];
          if (propVal !== null && propVal !== undefined) {
            array.push(key);
            array.push(propVal);
          }
        }
        params = params.append(this.name, this.serializeValue(array));
      }
    } else if (this.value !== null && this.value !== undefined) {
      // Plain value
      params = params.append(this.name, this.serializeValue(this.value));
    }
    return params;
  }
}
/**
 * A parameter in the HTTP request header
 */
class HeaderParameter extends Parameter {
  constructor(name, value, options) {
    super(name, value, options, 'simple', false);
  }
  append(headers) {
    if (this.value !== null && this.value !== undefined) {
      if (this.value instanceof Array) {
        for (const v of this.value) {
          headers = headers.append(this.name, this.serializeValue(v));
        }
      } else {
        headers = headers.append(this.name, this.serializeValue(this.value));
      }
    }
    return headers;
  }
}
/**
 * Helper to build http requests from parameters
 */
class RequestBuilder {
  constructor(rootUrl, operationPath, method) {
    this.rootUrl = rootUrl;
    this.operationPath = operationPath;
    this.method = method;
    this._path = new Map();
    this._query = new Map();
    this._header = new Map();
  }
  /**
   * Sets a path parameter
   */
  path(name, value, options) {
    this._path.set(name, new PathParameter(name, value, options || {}));
  }
  /**
   * Sets a query parameter
   */
  query(name, value, options) {
    this._query.set(name, new QueryParameter(name, value, options || {}));
  }
  /**
   * Sets a header parameter
   */
  header(name, value, options) {
    this._header.set(name, new HeaderParameter(name, value, options || {}));
  }
  /**
   * Sets the body content, along with the content type
   */
  body(value, contentType = 'application/json') {
    if (value instanceof Blob) {
      this._bodyContentType = value.type;
    } else {
      this._bodyContentType = contentType;
    }
    if (this._bodyContentType === 'application/x-www-form-urlencoded' && value !== null && typeof value === 'object') {
      // Handle URL-encoded data
      const pairs = [];
      for (const key of Object.keys(value)) {
        let val = value[key];
        if (!(val instanceof Array)) {
          val = [val];
        }
        for (const v of val) {
          const formValue = this.formDataValue(v);
          if (formValue !== null) {
            pairs.push([key, formValue]);
          }
        }
      }
      this._bodyContent = pairs.map(p => `${encodeURIComponent(p[0])}=${encodeURIComponent(p[1])}`).join('&');
    } else if (this._bodyContentType === 'multipart/form-data') {
      // Handle multipart form data
      const formData = new FormData();
      if (value !== null && value !== undefined) {
        for (const key of Object.keys(value)) {
          const val = value[key];
          if (val instanceof Array) {
            for (const v of val) {
              const toAppend = this.formDataValue(v);
              if (toAppend !== null) {
                formData.append(key, toAppend);
              }
            }
          } else {
            const toAppend = this.formDataValue(val);
            if (toAppend !== null) {
              formData.set(key, toAppend);
            }
          }
        }
      }
      this._bodyContent = formData;
    } else {
      // The body is the plain content
      this._bodyContent = value;
    }
  }
  formDataValue(value) {
    if (value === null || value === undefined) {
      return null;
    }
    if (value instanceof Blob) {
      return value;
    }
    if (typeof value === 'object') {
      return JSON.stringify(value);
    }
    return String(value);
  }
  /**
   * Builds the request with the current set parameters
   */
  build(options) {
    options = options || {};
    // Path parameters
    let path = this.operationPath;
    for (const pathParam of this._path.values()) {
      path = pathParam.append(path);
    }
    const url = this.rootUrl + path;
    // Query parameters
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: ParameterCodecInstance
    });
    for (const queryParam of this._query.values()) {
      httpParams = queryParam.append(httpParams);
    }
    // Header parameters
    let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
    if (options.accept) {
      httpHeaders = httpHeaders.append('Accept', options.accept);
    }
    for (const headerParam of this._header.values()) {
      httpHeaders = headerParam.append(httpHeaders);
    }
    // Request content headers
    if (this._bodyContentType && !(this._bodyContent instanceof FormData)) {
      httpHeaders = httpHeaders.set('Content-Type', this._bodyContentType);
    }
    // Perform the request
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest(this.method.toUpperCase(), url, this._bodyContent, {
      params: httpParams,
      headers: httpHeaders,
      responseType: options.responseType,
      reportProgress: options.reportProgress,
      context: options.context
    });
  }
}

/***/ }),

/***/ 3273:
/*!*********************************!*\
  !*** ./src/app/api/services.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CargoService: () => (/* reexport safe */ _services_cargo_service__WEBPACK_IMPORTED_MODULE_0__.CargoService),
/* harmony export */   CompanyService: () => (/* reexport safe */ _services_company_service__WEBPACK_IMPORTED_MODULE_1__.CompanyService),
/* harmony export */   ContractorService: () => (/* reexport safe */ _services_contractor_service__WEBPACK_IMPORTED_MODULE_2__.ContractorService),
/* harmony export */   CustomerService: () => (/* reexport safe */ _services_customer_service__WEBPACK_IMPORTED_MODULE_3__.CustomerService),
/* harmony export */   DataService: () => (/* reexport safe */ _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService),
/* harmony export */   DirectionService: () => (/* reexport safe */ _services_direction_service__WEBPACK_IMPORTED_MODULE_5__.DirectionService),
/* harmony export */   FileService: () => (/* reexport safe */ _services_file_service__WEBPACK_IMPORTED_MODULE_6__.FileService),
/* harmony export */   MessageService: () => (/* reexport safe */ _services_message_service__WEBPACK_IMPORTED_MODULE_7__.MessageService),
/* harmony export */   OrderService: () => (/* reexport safe */ _services_order_service__WEBPACK_IMPORTED_MODULE_8__.OrderService),
/* harmony export */   RequestService: () => (/* reexport safe */ _services_request_service__WEBPACK_IMPORTED_MODULE_9__.RequestService),
/* harmony export */   SettingsService: () => (/* reexport safe */ _services_settings_service__WEBPACK_IMPORTED_MODULE_10__.SettingsService),
/* harmony export */   SystemService: () => (/* reexport safe */ _services_system_service__WEBPACK_IMPORTED_MODULE_11__.SystemService),
/* harmony export */   TransportService: () => (/* reexport safe */ _services_transport_service__WEBPACK_IMPORTED_MODULE_12__.TransportService),
/* harmony export */   UserService: () => (/* reexport safe */ _services_user_service__WEBPACK_IMPORTED_MODULE_13__.UserService)
/* harmony export */ });
/* harmony import */ var _services_cargo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/cargo.service */ 2871);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/company.service */ 2804);
/* harmony import */ var _services_contractor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/contractor.service */ 174);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/customer.service */ 4165);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data.service */ 8065);
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/direction.service */ 518);
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/file.service */ 9795);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/message.service */ 8204);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/order.service */ 9623);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/request.service */ 3358);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/settings.service */ 3424);
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/system.service */ 3812);
/* harmony import */ var _services_transport_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/transport.service */ 5230);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service */ 2270);















/***/ }),

/***/ 2871:
/*!***********************************************!*\
  !*** ./src/app/api/services/cargo.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CargoService: () => (/* binding */ CargoService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Груз
 */
class CargoService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `cargoPackage()` */
  static {
    this.CargoPackagePath = '/cargo_package';
  }
  /**
   * Вид упаковки.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cargoPackage()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargoPackage$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CargoService.CargoPackagePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Вид упаковки.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cargoPackage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargoPackage(params, context) {
    return this.cargoPackage$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `cargoType()` */
  static {
    this.CargoTypePath = '/cargo_type';
  }
  /**
   * Вид груза.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cargoType()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargoType$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CargoService.CargoTypePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Вид груза.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cargoType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cargoType(params, context) {
    return this.cargoType$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function CargoService_Factory(t) {
      return new (t || CargoService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: CargoService,
      factory: CargoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2804:
/*!*************************************************!*\
  !*** ./src/app/api/services/company.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyService: () => (/* binding */ CompanyService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Работа с компаниями
 */
class CompanyService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `companyList()` */
  static {
    this.CompanyListPath = '/company_list';
  }
  /**
   * Компания: список.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyList()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyListPath, 'get');
    if (params) {
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Компания: список.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyList(params, context) {
    return this.companyList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyInfo()` */
  static {
    this.CompanyInfoPath = '/company_info';
  }
  /**
   * Компания: данные.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Компания: данные.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyInfo(params, context) {
    return this.companyInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyCreate()` */
  static {
    this.CompanyCreatePath = '/company_create';
  }
  /**
   * Компания: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Компания: добавление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCreate(params, context) {
    return this.companyCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyUpdate()` */
  static {
    this.CompanyUpdatePath = '/company_update';
  }
  /**
   * Компания: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Компания: обновление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyUpdate(params, context) {
    return this.companyUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyDelete()` */
  static {
    this.CompanyDeletePath = '/company_delete';
  }
  /**
   * Компания: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Компания: удаление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDelete(params, context) {
    return this.companyDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyDepartmentList()` */
  static {
    this.CompanyDepartmentListPath = '/company_department_list';
  }
  /**
   * Подразделения: список.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyDepartmentList()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyDepartmentList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyDepartmentListPath, 'get');
    if (params) {
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Подразделения: список.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyDepartmentList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyDepartmentList(params, context) {
    return this.companyDepartmentList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyDepartmentInfo()` */
  static {
    this.CompanyDepartmentInfoPath = '/company_department_info';
  }
  /**
   * Подразделения: данные.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyDepartmentInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyDepartmentInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyDepartmentInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Подразделения: данные.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyDepartmentInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyDepartmentInfo(params, context) {
    return this.companyDepartmentInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyDepartmentCreate()` */
  static {
    this.CompanyDepartmentCreatePath = '/company_department_create';
  }
  /**
   * Подразделения: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyDepartmentCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyDepartmentCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Подразделения: добавление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyDepartmentCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentCreate(params, context) {
    return this.companyDepartmentCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyDepartmentUpdate()` */
  static {
    this.CompanyDepartmentUpdatePath = '/company_department_update';
  }
  /**
   * Подразделения: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyDepartmentUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyDepartmentUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Подразделения: обновление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyDepartmentUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentUpdate(params, context) {
    return this.companyDepartmentUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyDepartmentDelete()` */
  static {
    this.CompanyDepartmentDeletePath = '/company_department_delete';
  }
  /**
   * Подразделения: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyDepartmentDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyDepartmentDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Подразделения: удаление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyDepartmentDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyDepartmentDelete(params, context) {
    return this.companyDepartmentDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyPositionList()` */
  static {
    this.CompanyPositionListPath = '/company_position_list';
  }
  /**
   * Должности: список.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyPositionList()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyPositionList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyPositionListPath, 'get');
    if (params) {
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Должности: список.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyPositionList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyPositionList(params, context) {
    return this.companyPositionList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyPositionInfo()` */
  static {
    this.CompanyPositionInfoPath = '/company_position_info';
  }
  /**
   * Должности: данные.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyPositionInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyPositionInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyPositionInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Должности: данные.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyPositionInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyPositionInfo(params, context) {
    return this.companyPositionInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyPositionCreate()` */
  static {
    this.CompanyPositionCreatePath = '/company_position_create';
  }
  /**
   * Должности: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyPositionCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyPositionCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Должности: добавление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyPositionCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionCreate(params, context) {
    return this.companyPositionCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyPositionUpdate()` */
  static {
    this.CompanyPositionUpdatePath = '/company_position_update';
  }
  /**
   * Должности: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyPositionUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyPositionUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Должности: обновление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyPositionUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionUpdate(params, context) {
    return this.companyPositionUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyPositionDelete()` */
  static {
    this.CompanyPositionDeletePath = '/company_position_delete';
  }
  /**
   * Должности: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyPositionDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyPositionDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Должности: удаление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyPositionDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyPositionDelete(params, context) {
    return this.companyPositionDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyEmployeeList()` */
  static {
    this.CompanyEmployeeListPath = '/company_employee_list';
  }
  /**
   * Сотрудники: список.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyEmployeeList()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyEmployeeList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyEmployeeListPath, 'get');
    if (params) {
      rb.query('department_id', params.department_id, {});
      rb.query('position_id', params.position_id, {});
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сотрудники: список.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyEmployeeList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyEmployeeList(params, context) {
    return this.companyEmployeeList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyEmployeeInfo()` */
  static {
    this.CompanyEmployeeInfoPath = '/company_employee_info';
  }
  /**
   * Сотрудники: данные.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyEmployeeInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyEmployeeInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyEmployeeInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сотрудники: данные.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyEmployeeInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyEmployeeInfo(params, context) {
    return this.companyEmployeeInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyEmployeeCreate()` */
  static {
    this.CompanyEmployeeCreatePath = '/company_employee_create';
  }
  /**
   * Сотрудники: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyEmployeeCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyEmployeeCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сотрудники: добавление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyEmployeeCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeCreate(params, context) {
    return this.companyEmployeeCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyEmployeeUpdate()` */
  static {
    this.CompanyEmployeeUpdatePath = '/company_employee_update';
  }
  /**
   * Сотрудники: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyEmployeeUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyEmployeeUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сотрудники: обновление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyEmployeeUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeUpdate(params, context) {
    return this.companyEmployeeUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `companyEmployeeDelete()` */
  static {
    this.CompanyEmployeeDeletePath = '/company_employee_delete';
  }
  /**
   * Сотрудники: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyEmployeeDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CompanyService.CompanyEmployeeDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сотрудники: удаление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyEmployeeDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyEmployeeDelete(params, context) {
    return this.companyEmployeeDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function CompanyService_Factory(t) {
      return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: CompanyService,
      factory: CompanyService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 174:
/*!****************************************************!*\
  !*** ./src/app/api/services/contractor.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContractorService: () => (/* binding */ ContractorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Работа с контрагентами
 */
class ContractorService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `contractorList()` */
  static {
    this.ContractorListPath = '/contractor_list';
  }
  /**
   * Список контрагентов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorList()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorListPath, 'get');
    if (params) {
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('filter', params.filter, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
      rb.query('bidding_request_id', params.bidding_request_id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список контрагентов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorList(params, context) {
    return this.contractorList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorListParam()` */
  static {
    this.ContractorListParamPath = '/contractor_list_param';
  }
  /**
   * Параметры вывода контрагентов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorListParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorListParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorListParamPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Параметры вывода контрагентов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorListParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorListParam(params, context) {
    return this.contractorListParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorInfo()` */
  static {
    this.ContractorInfoPath = '/contractor_info';
  }
  /**
   * Данные контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Данные контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorInfo(params, context) {
    return this.contractorInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorCreate()` */
  static {
    this.ContractorCreatePath = '/contractor_create';
  }
  /**
   * Добавление контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Добавление контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorCreate(params, context) {
    return this.contractorCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorUpdate()` */
  static {
    this.ContractorUpdatePath = '/contractor_update';
  }
  /**
   * Обновление контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Обновление контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorUpdate(params, context) {
    return this.contractorUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorDelete()` */
  static {
    this.ContractorDeletePath = '/contractor_delete';
  }
  /**
   * Удаление контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Удаление контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorDelete(params, context) {
    return this.contractorDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorContactList()` */
  static {
    this.ContractorContactListPath = '/contractor_contact_list';
  }
  /**
   * Список контактов контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorContactList()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorContactList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorContactListPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список контактов контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorContactList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorContactList(params, context) {
    return this.contractorContactList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorContactInfo()` */
  static {
    this.ContractorContactInfoPath = '/contractor_contact_info';
  }
  /**
   * Данные контакта контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorContactInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorContactInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorContactInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Данные контакта контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorContactInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorContactInfo(params, context) {
    return this.contractorContactInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorContactCreate()` */
  static {
    this.ContractorContactCreatePath = '/contractor_contact_create';
  }
  /**
   * Добавление контакта контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorContactCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorContactCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Добавление контакта контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorContactCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactCreate(params, context) {
    return this.contractorContactCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorContactUpdate()` */
  static {
    this.ContractorContactUpdatePath = '/contractor_contact_update';
  }
  /**
   * Обновление контакта контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorContactUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorContactUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Обновление контакта контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorContactUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactUpdate(params, context) {
    return this.contractorContactUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorContactDelete()` */
  static {
    this.ContractorContactDeletePath = '/contractor_contact_delete';
  }
  /**
   * Удаление контакта контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorContactDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorContactDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Удаление контакта контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorContactDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorContactDelete(params, context) {
    return this.contractorContactDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorRequestFormat()` */
  static {
    this.ContractorRequestFormatPath = '/contractor_request_format';
  }
  /**
   * Форматы отправки запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorRequestFormat()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorRequestFormat$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorRequestFormatPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Форматы отправки запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorRequestFormat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorRequestFormat(params, context) {
    return this.contractorRequestFormat$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorType()` */
  static {
    this.ContractorTypePath = '/contractor_type';
  }
  /**
   * Вид подрядчика.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorType()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorType$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorTypePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Вид подрядчика.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorType(params, context) {
    return this.contractorType$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorExport()` */
  static {
    this.ContractorExportPath = '/contractor_export';
  }
  /**
   * Экспорт контрагентов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorExport()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorExport$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorExportPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Экспорт контрагентов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorExport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorExport(params, context) {
    return this.contractorExport$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorImportTemplate()` */
  static {
    this.ContractorImportTemplatePath = '/contractor_import_template';
  }
  /**
   * Шаблон экспорта контрагентов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorImportTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorImportTemplate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorImportTemplatePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Шаблон экспорта контрагентов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorImportTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorImportTemplate(params, context) {
    return this.contractorImportTemplate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorImport()` */
  static {
    this.ContractorImportPath = '/contractor_import';
  }
  /**
   * Импорт контрагентов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorImport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorImport$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorImportPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Импорт контрагентов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorImport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  contractorImport(params, context) {
    return this.contractorImport$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorImportConfirm()` */
  static {
    this.ContractorImportConfirmPath = '/contractor_import_confirm';
  }
  /**
   * Подтверждение импорта контрагентов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorImportConfirm()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorImportConfirm$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorImportConfirmPath, 'get');
    if (params) {
      rb.query('import_key', params.import_key, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Подтверждение импорта контрагентов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorImportConfirm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorImportConfirm(params, context) {
    return this.contractorImportConfirm$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `contractorImportResult()` */
  static {
    this.ContractorImportResultPath = '/contractor_import_result';
  }
  /**
   * Получение файла с результатами обработки импорта в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `contractorImportResult()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorImportResult$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, ContractorService.ContractorImportResultPath, 'get');
    if (params) {
      rb.query('import_key', params.import_key, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Получение файла с результатами обработки импорта в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `contractorImportResult$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  contractorImportResult(params, context) {
    return this.contractorImportResult$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function ContractorService_Factory(t) {
      return new (t || ContractorService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: ContractorService,
      factory: ContractorService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4165:
/*!**************************************************!*\
  !*** ./src/app/api/services/customer.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerService: () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Работа с клиентами
 */
class CustomerService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `customerList()` */
  static {
    this.CustomerListPath = '/customer_list';
  }
  /**
   * Список клиентов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerList()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerListPath, 'get');
    if (params) {
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('filter', params.filter, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список клиентов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerList(params, context) {
    return this.customerList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerListParam()` */
  static {
    this.CustomerListParamPath = '/customer_list_param';
  }
  /**
   * Параметры вывода клиентов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerListParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerListParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerListParamPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Параметры вывода клиентов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerListParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerListParam(params, context) {
    return this.customerListParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerInfo()` */
  static {
    this.CustomerInfoPath = '/customer_info';
  }
  /**
   * Данные клиента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Данные клиента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerInfo(params, context) {
    return this.customerInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerCreate()` */
  static {
    this.CustomerCreatePath = '/customer_create';
  }
  /**
   * Добавление клиента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Добавление клиента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerCreate(params, context) {
    return this.customerCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerUpdate()` */
  static {
    this.CustomerUpdatePath = '/customer_update';
  }
  /**
   * Обновление клиента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Обновление клиента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerUpdate(params, context) {
    return this.customerUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerDelete()` */
  static {
    this.CustomerDeletePath = '/customer_delete';
  }
  /**
   * Удаление клиента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Удаление клиента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerDelete(params, context) {
    return this.customerDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerFiles()` */
  static {
    this.CustomerFilesPath = '/customer_files';
  }
  /**
   * Список файлов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerFiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerFiles$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerFilesPath, 'get');
    if (params) {
      rb.query('item_id', params.item_id, {});
      rb.query('var', params.var, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список файлов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerFiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerFiles(params, context) {
    return this.customerFiles$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerFileCreate()` */
  static {
    this.CustomerFileCreatePath = '/customer_file_create';
  }
  /**
   * Файлы: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerFileCreate()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customerFileCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerFileCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Файлы: добавление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerFileCreate$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  customerFileCreate(params, context) {
    return this.customerFileCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerFileDelete()` */
  static {
    this.CustomerFileDeletePath = '/customer_file_delete';
  }
  /**
   * Файлы: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerFileDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerFileDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerFileDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Файлы: удаление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerFileDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerFileDelete(params, context) {
    return this.customerFileDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerGroupList()` */
  static {
    this.CustomerGroupListPath = '/customer_group_list';
  }
  /**
   * Группы: список.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerGroupList()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerGroupList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerGroupListPath, 'get');
    if (params) {
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Группы: список.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerGroupList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerGroupList(params, context) {
    return this.customerGroupList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerGroupInfo()` */
  static {
    this.CustomerGroupInfoPath = '/customer_group_info';
  }
  /**
   * Группы: данные.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerGroupInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerGroupInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerGroupInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Группы: данные.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerGroupInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerGroupInfo(params, context) {
    return this.customerGroupInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerGroupCreate()` */
  static {
    this.CustomerGroupCreatePath = '/customer_group_create';
  }
  /**
   * Группы: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerGroupCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerGroupCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerGroupCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Группы: добавление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerGroupCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerGroupCreate(params, context) {
    return this.customerGroupCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerGroupUpdate()` */
  static {
    this.CustomerGroupUpdatePath = '/customer_group_update';
  }
  /**
   * Группы: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerGroupUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerGroupUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerGroupUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Группы: обновление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerGroupUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerGroupUpdate(params, context) {
    return this.customerGroupUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerGroupDelete()` */
  static {
    this.CustomerGroupDeletePath = '/customer_group_delete';
  }
  /**
   * Группы: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerGroupDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerGroupDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerGroupDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Группы: удаление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerGroupDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerGroupDelete(params, context) {
    return this.customerGroupDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerExport()` */
  static {
    this.CustomerExportPath = '/customer_export';
  }
  /**
   * Экспорт клиентов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerExport()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerExport$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerExportPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Экспорт клиентов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerExport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerExport(params, context) {
    return this.customerExport$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerImportTemplate()` */
  static {
    this.CustomerImportTemplatePath = '/customer_import_template';
  }
  /**
   * Шаблон экспорта клиентов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerImportTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerImportTemplate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerImportTemplatePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Шаблон экспорта клиентов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerImportTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerImportTemplate(params, context) {
    return this.customerImportTemplate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerImport()` */
  static {
    this.CustomerImportPath = '/customer_import';
  }
  /**
   * Импорт контрагентов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerImport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerImport$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerImportPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Импорт контрагентов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerImport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  customerImport(params, context) {
    return this.customerImport$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerImportConfirm()` */
  static {
    this.CustomerImportConfirmPath = '/customer_import_confirm';
  }
  /**
   * Подтверждение импорта клиентов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerImportConfirm()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerImportConfirm$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerImportConfirmPath, 'get');
    if (params) {
      rb.query('import_key', params.import_key, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Подтверждение импорта клиентов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerImportConfirm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerImportConfirm(params, context) {
    return this.customerImportConfirm$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `customerImportResult()` */
  static {
    this.CustomerImportResultPath = '/customer_import_result';
  }
  /**
   * Получение файла с результатами обработки импорта в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerImportResult()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerImportResult$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, CustomerService.CustomerImportResultPath, 'get');
    if (params) {
      rb.query('import_key', params.import_key, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Получение файла с результатами обработки импорта в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `customerImportResult$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerImportResult(params, context) {
    return this.customerImportResult$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function CustomerService_Factory(t) {
      return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: CustomerService,
      factory: CustomerService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8065:
/*!**********************************************!*\
  !*** ./src/app/api/services/data.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Справочная информация
 */
class DataService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `dataInfo()` */
  static {
    this.DataInfoPath = '/data_info';
  }
  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dataInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DataService.DataInfoPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dataInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataInfo(params, context) {
    return this.dataInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `dataMake()` */
  static {
    this.DataMakePath = '/data_make';
  }
  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dataMake()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataMake$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DataService.DataMakePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dataMake$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataMake(params, context) {
    return this.dataMake$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `dataUpdate()` */
  static {
    this.DataUpdatePath = '/data_update';
  }
  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dataUpdate()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DataService.DataUpdatePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dataUpdate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataUpdate(params, context) {
    return this.dataUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `dataDelete()` */
  static {
    this.DataDeletePath = '/data_delete';
  }
  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dataDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DataService.DataDeletePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dataDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dataDelete(params, context) {
    return this.dataDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 518:
/*!***************************************************!*\
  !*** ./src/app/api/services/direction.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectionService: () => (/* binding */ DirectionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Работа с направлениями
 */
class DirectionService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `directionType()` */
  static {
    this.DirectionTypePath = '/direction_type';
  }
  /**
   * Направления перевозок.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionType()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionType$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DirectionService.DirectionTypePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Направления перевозок.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionType(params, context) {
    return this.directionType$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `directionCountry()` */
  static {
    this.DirectionCountryPath = '/direction_country';
  }
  /**
   * Список стран.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionCountry()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCountry$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DirectionService.DirectionCountryPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список стран.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionCountry$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCountry(params, context) {
    return this.directionCountry$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `directionCountryInfo()` */
  static {
    this.DirectionCountryInfoPath = '/direction_country_info';
  }
  /**
   * Данные запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionCountryInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCountryInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DirectionService.DirectionCountryInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Данные запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionCountryInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCountryInfo(params, context) {
    return this.directionCountryInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `directionCity()` */
  static {
    this.DirectionCityPath = '/direction_city';
  }
  /**
   * Список городов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionCity()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCity$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DirectionService.DirectionCityPath, 'get');
    if (params) {
      rb.query('country_id', params.country_id, {});
      rb.query('search', params.search, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список городов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionCity$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCity(params, context) {
    return this.directionCity$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `directionCityInfo()` */
  static {
    this.DirectionCityInfoPath = '/direction_city_info';
  }
  /**
   * Данные запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionCityInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCityInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DirectionService.DirectionCityInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Данные запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionCityInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionCityInfo(params, context) {
    return this.directionCityInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `directionPoint()` */
  static {
    this.DirectionPointPath = '/direction_point';
  }
  /**
   * Список точек (аэропорт/порт/станция).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionPoint()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionPoint$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DirectionService.DirectionPointPath, 'get');
    if (params) {
      rb.query('country_id', params.country_id, {});
      rb.query('city_id', params.city_id, {});
      rb.query('transport_kind_id', params.transport_kind_id, {});
      rb.query('search', params.search, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список точек (аэропорт/порт/станция).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionPoint$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionPoint(params, context) {
    return this.directionPoint$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `directionBorder()` */
  static {
    this.DirectionBorderPath = '/direction_border';
  }
  /**
   * Список границ.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionBorder()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionBorder$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DirectionService.DirectionBorderPath, 'get');
    if (params) {
      rb.query('country_id', params.country_id, {});
      rb.query('search', params.search, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список границ.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionBorder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionBorder(params, context) {
    return this.directionBorder$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `directionFlight()` */
  static {
    this.DirectionFlightPath = '/direction_flight';
  }
  /**
   * Типы рейсов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionFlight()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionFlight$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DirectionService.DirectionFlightPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Типы рейсов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionFlight$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionFlight(params, context) {
    return this.directionFlight$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `directionRoute()` */
  static {
    this.DirectionRoutePath = '/direction_route';
  }
  /**
   * Список маршрутов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `directionRoute()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionRoute$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, DirectionService.DirectionRoutePath, 'get');
    if (params) {
      rb.query('kind_id', params.kind_id, {});
      rb.query('departure_country_id', params.departure_country_id, {});
      rb.query('departure_city_id', params.departure_city_id, {});
      rb.query('departure_point_id', params.departure_point_id, {});
      rb.query('arrival_country_id', params.arrival_country_id, {});
      rb.query('arrival_city_id', params.arrival_city_id, {});
      rb.query('arrival_point_id', params.arrival_point_id, {});
      rb.query('route_type', params.route_type, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список маршрутов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `directionRoute$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  directionRoute(params, context) {
    return this.directionRoute$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function DirectionService_Factory(t) {
      return new (t || DirectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: DirectionService,
      factory: DirectionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9795:
/*!**********************************************!*\
  !*** ./src/app/api/services/file.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileService: () => (/* binding */ FileService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Работа с файлами
 */
class FileService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `fileList()` */
  static {
    this.FileListPath = '/file_list';
  }
  /**
   * Список файлов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileList()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, FileService.FileListPath, 'get');
    if (params) {
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('item_id', params.item_id, {});
      rb.query('component', params.component, {});
      rb.query('var', params.var, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список файлов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileList(params, context) {
    return this.fileList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `fileInfo()` */
  static {
    this.FileInfoPath = '/file_info';
  }
  /**
   * Файл: данные.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, FileService.FileInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Файл: данные.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileInfo(params, context) {
    return this.fileInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `fileCreate()` */
  static {
    this.FileCreatePath = '/file_create';
  }
  /**
   * Файлы: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileCreate()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  fileCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, FileService.FileCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Файлы: добавление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileCreate$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  fileCreate(params, context) {
    return this.fileCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `fileUpdate()` */
  static {
    this.FileUpdatePath = '/file_update';
  }
  /**
   * Файлы: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileUpdate()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  fileUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, FileService.FileUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Файлы: обновление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileUpdate$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  fileUpdate(params, context) {
    return this.fileUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `fileDelete()` */
  static {
    this.FileDeletePath = '/file_delete';
  }
  /**
   * Файлы: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fileDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, FileService.FileDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Файлы: удаление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fileDelete(params, context) {
    return this.fileDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `fileDownload()` */
  static {
    this.FileDownloadPath = '/file_download';
  }
  /**
   * Файл: получить.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileDownload()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileDownload$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, FileService.FileDownloadPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Файл: получить.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileDownload$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileDownload(params, context) {
    return this.fileDownload$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function FileService_Factory(t) {
      return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: FileService,
      factory: FileService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8204:
/*!*************************************************!*\
  !*** ./src/app/api/services/message.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Сообщения
 */
class MessageService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `messageList()` */
  static {
    this.MessageListPath = '/message_list';
  }
  /**
   * Сообщения.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageList()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, MessageService.MessageListPath, 'get');
    if (params) {
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сообщения.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageList(params, context) {
    return this.messageList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `messageListParam()` */
  static {
    this.MessageListParamPath = '/message_list_param';
  }
  /**
   * Параметры вывода клиентов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageListParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageListParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, MessageService.MessageListParamPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Параметры вывода клиентов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageListParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageListParam(params, context) {
    return this.messageListParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `messageFormParam()` */
  static {
    this.MessageFormParamPath = '/message_form_param';
  }
  /**
   * Параметры для форм.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageFormParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageFormParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, MessageService.MessageFormParamPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Параметры для форм.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageFormParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageFormParam(params, context) {
    return this.messageFormParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `messageSave()` */
  static {
    this.MessageSavePath = '/message_save';
  }
  /**
   * Сохранение сообщения.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageSave$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, MessageService.MessageSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сохранение сообщения.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageSave(params, context) {
    return this.messageSave$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `messageSetRead()` */
  static {
    this.MessageSetReadPath = '/message_set_read';
  }
  /**
   * Установка статуса прочтения.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageSetRead()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageSetRead$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, MessageService.MessageSetReadPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Установка статуса прочтения.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageSetRead$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageSetRead(params, context) {
    return this.messageSetRead$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `messageGetNew()` */
  static {
    this.MessageGetNewPath = '/message_get_new';
  }
  /**
   * Получить новые сообщения.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageGetNew()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageGetNew$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, MessageService.MessageGetNewPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Получить новые сообщения.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageGetNew$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messageGetNew(params, context) {
    return this.messageGetNew$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `messageDelete()` */
  static {
    this.MessageDeletePath = '/message_delete';
  }
  /**
   * Удаление сообщения.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messageDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, MessageService.MessageDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Удаление сообщения.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messageDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  messageDelete(params, context) {
    return this.messageDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function MessageService_Factory(t) {
      return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: MessageService,
      factory: MessageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9623:
/*!***********************************************!*\
  !*** ./src/app/api/services/order.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Работа с заказами
 */
class OrderService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `orderListParam()` */
  static {
    this.OrderListParamPath = '/order_list_param';
  }
  /**
   * Параметры вывода запросов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderListParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderListParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, OrderService.OrderListParamPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Параметры вывода запросов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderListParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderListParam(params, context) {
    return this.orderListParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `orderFormParam()` */
  static {
    this.OrderFormParamPath = '/order_form_param';
  }
  /**
   * Параметры для форм.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderFormParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderFormParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, OrderService.OrderFormParamPath, 'get');
    if (params) {
      rb.query('kind_id', params.kind_id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Параметры для форм.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderFormParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderFormParam(params, context) {
    return this.orderFormParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `orderList()` */
  static {
    this.OrderListPath = '/order_list';
  }
  /**
   * Список заказов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderList()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, OrderService.OrderListPath, 'get');
    if (params) {
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('filter', params.filter, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список заказов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderList(params, context) {
    return this.orderList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `orderInfo()` */
  static {
    this.OrderInfoPath = '/order_info';
  }
  /**
   * Данны по заказу.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, OrderService.OrderInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Данны по заказу.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderInfo(params, context) {
    return this.orderInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `orderMakeFromOffer()` */
  static {
    this.OrderMakeFromOfferPath = '/order_make_from_offer';
  }
  /**
   * Создание заказа на основе КП.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderMakeFromOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderMakeFromOffer$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, OrderService.OrderMakeFromOfferPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Создание заказа на основе КП.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderMakeFromOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderMakeFromOffer(params, context) {
    return this.orderMakeFromOffer$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `orderMake()` */
  static {
    this.OrderMakePath = '/order_make';
  }
  /**
   * Создание заказа.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderMake()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderMake$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, OrderService.OrderMakePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Создание заказа.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderMake$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderMake(params, context) {
    return this.orderMake$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `orderUpdate()` */
  static {
    this.OrderUpdatePath = '/order_update';
  }
  /**
   * Редактирование заказа.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, OrderService.OrderUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Редактирование заказа.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderUpdate(params, context) {
    return this.orderUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `orderDelete()` */
  static {
    this.OrderDeletePath = '/order_delete';
  }
  /**
   * Удаление заказа.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, OrderService.OrderDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Удаление заказа.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderDelete(params, context) {
    return this.orderDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3358:
/*!*************************************************!*\
  !*** ./src/app/api/services/request.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestService: () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Запросы
 */
class RequestService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `requestList()` */
  static {
    this.RequestListPath = '/request_list';
  }
  /**
   * Список запросов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestList()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestListPath, 'get');
    if (params) {
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('filter', params.filter, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список запросов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestList(params, context) {
    return this.requestList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestListParam()` */
  static {
    this.RequestListParamPath = '/request_list_param';
  }
  /**
   * Параметры вывода запросов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestListParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestListParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestListParamPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Параметры вывода запросов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestListParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestListParam(params, context) {
    return this.requestListParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestInfo()` */
  static {
    this.RequestInfoPath = '/request_info';
  }
  /**
   * Данные запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Данные запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestInfo(params, context) {
    return this.requestInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestCreate()` */
  static {
    this.RequestCreatePath = '/request_create';
  }
  /**
   * Запросы: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Запросы: добавление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestCreate(params, context) {
    return this.requestCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestUpdate()` */
  static {
    this.RequestUpdatePath = '/request_update';
  }
  /**
   * Запросы: обновление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Запросы: обновление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestUpdate(params, context) {
    return this.requestUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestDelete()` */
  static {
    this.RequestDeletePath = '/request_delete';
  }
  /**
   * Удаление запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Удаление запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestDelete(params, context) {
    return this.requestDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestFiles()` */
  static {
    this.RequestFilesPath = '/request_files';
  }
  /**
   * Список файлов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestFiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestFiles$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestFilesPath, 'get');
    if (params) {
      rb.query('item_id', params.item_id, {});
      rb.query('var', params.var, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Список файлов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestFiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestFiles(params, context) {
    return this.requestFiles$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestFileCreate()` */
  static {
    this.RequestFileCreatePath = '/request_file_create';
  }
  /**
   * Файлы: добавление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestFileCreate()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  requestFileCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestFileCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Файлы: добавление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestFileCreate$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  requestFileCreate(params, context) {
    return this.requestFileCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestFileDelete()` */
  static {
    this.RequestFileDeletePath = '/request_file_delete';
  }
  /**
   * Файлы: удаление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestFileDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestFileDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestFileDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Файлы: удаление.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestFileDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestFileDelete(params, context) {
    return this.requestFileDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestContractorSelectGet()` */
  static {
    this.RequestContractorSelectGetPath = '/request_contractor_select_get';
  }
  /**
   * Получение ID контрагентов выбранных для отправки запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestContractorSelectGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestContractorSelectGet$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestContractorSelectGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Получение ID контрагентов выбранных для отправки запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestContractorSelectGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestContractorSelectGet(params, context) {
    return this.requestContractorSelectGet$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestContractorSelectUpdate()` */
  static {
    this.RequestContractorSelectUpdatePath = '/request_contractor_select_update';
  }
  /**
   * Обновление выбора контрагента для отправки запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestContractorSelectUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestContractorSelectUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestContractorSelectUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Обновление выбора контрагента для отправки запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestContractorSelectUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestContractorSelectUpdate(params, context) {
    return this.requestContractorSelectUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestSaveBidding()` */
  static {
    this.RequestSaveBiddingPath = '/request_save_bidding';
  }
  /**
   * Проверка и сохранение выбора контрагентов для отправки запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestSaveBidding()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestSaveBidding$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestSaveBiddingPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Проверка и сохранение выбора контрагентов для отправки запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestSaveBidding$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestSaveBidding(params, context) {
    return this.requestSaveBidding$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestEmployeeSelectGet()` */
  static {
    this.RequestEmployeeSelectGetPath = '/request_employee_select_get';
  }
  /**
   * Получение ID сотрудников выбранных для отправки запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestEmployeeSelectGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestEmployeeSelectGet$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestEmployeeSelectGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Получение ID сотрудников выбранных для отправки запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestEmployeeSelectGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestEmployeeSelectGet(params, context) {
    return this.requestEmployeeSelectGet$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestEmployeeSelectUpdate()` */
  static {
    this.RequestEmployeeSelectUpdatePath = '/request_employee_select_update';
  }
  /**
   * Обновление выбора сотрудников для отправки запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestEmployeeSelectUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestEmployeeSelectUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestEmployeeSelectUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Обновление выбора сотрудников для отправки запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestEmployeeSelectUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestEmployeeSelectUpdate(params, context) {
    return this.requestEmployeeSelectUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestSaveEmployeeBidding()` */
  static {
    this.RequestSaveEmployeeBiddingPath = '/request_save_employee_bidding';
  }
  /**
   * Проверка и сохранение выбора контрагентов для отправки запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestSaveEmployeeBidding()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestSaveEmployeeBidding$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestSaveEmployeeBiddingPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Проверка и сохранение выбора контрагентов для отправки запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestSaveEmployeeBidding$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestSaveEmployeeBidding(params, context) {
    return this.requestSaveEmployeeBidding$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestStatus()` */
  static {
    this.RequestStatusPath = '/request_status';
  }
  /**
   * Статусы запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestStatus$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestStatusPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Статусы запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestStatus(params, context) {
    return this.requestStatus$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestStatusCrm()` */
  static {
    this.RequestStatusCrmPath = '/request_status_crm';
  }
  /**
   * Статусы CRM.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestStatusCrm()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestStatusCrm$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestStatusCrmPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Статусы CRM.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestStatusCrm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestStatusCrm(params, context) {
    return this.requestStatusCrm$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestType()` */
  static {
    this.RequestTypePath = '/request_type';
  }
  /**
   * Вид запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestType()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestType$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestTypePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Вид запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestType(params, context) {
    return this.requestType$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestServices()` */
  static {
    this.RequestServicesPath = '/request_services';
  }
  /**
   * Услуги включаемые в ставку.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestServices()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestServices$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestServicesPath, 'get');
    if (params) {
      rb.query('kind_id', params.kind_id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Услуги включаемые в ставку.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestServices$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestServices(params, context) {
    return this.requestServices$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestServicesAdditional()` */
  static {
    this.RequestServicesAdditionalPath = '/request_services_additional';
  }
  /**
   * Дополнительные услуги включаемые в ставку.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestServicesAdditional()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestServicesAdditional$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestServicesAdditionalPath, 'get');
    if (params) {
      rb.query('kind_id', params.kind_id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Дополнительные услуги включаемые в ставку.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestServicesAdditional$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestServicesAdditional(params, context) {
    return this.requestServicesAdditional$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestIncoterms()` */
  static {
    this.RequestIncotermsPath = '/request_incoterms';
  }
  /**
   * Условие поставки (Incoterms).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestIncoterms()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestIncoterms$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestIncotermsPath, 'get');
    if (params) {
      rb.query('kind_id', params.kind_id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Условие поставки (Incoterms).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestIncoterms$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestIncoterms(params, context) {
    return this.requestIncoterms$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestExport()` */
  static {
    this.RequestExportPath = '/request_export';
  }
  /**
   * Экспорт запросов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestExport()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestExport$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestExportPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Экспорт запросов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestExport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestExport(params, context) {
    return this.requestExport$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestImportTemplate()` */
  static {
    this.RequestImportTemplatePath = '/request_import_template';
  }
  /**
   * Шаблон экспорта запросов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestImportTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestImportTemplate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestImportTemplatePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Шаблон экспорта запросов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestImportTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestImportTemplate(params, context) {
    return this.requestImportTemplate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestImport()` */
  static {
    this.RequestImportPath = '/request_import';
  }
  /**
   * Импорт запросов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestImport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestImport$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestImportPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Импорт запросов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestImport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestImport(params, context) {
    return this.requestImport$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestImportConfirm()` */
  static {
    this.RequestImportConfirmPath = '/request_import_confirm';
  }
  /**
   * Подтверждение импорта запросов в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestImportConfirm()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestImportConfirm$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestImportConfirmPath, 'get');
    if (params) {
      rb.query('import_key', params.import_key, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Подтверждение импорта запросов в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestImportConfirm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestImportConfirm(params, context) {
    return this.requestImportConfirm$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestImportResult()` */
  static {
    this.RequestImportResultPath = '/request_import_result';
  }
  /**
   * Получение файла с результатами обработки импорта в XLSX.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestImportResult()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestImportResult$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestImportResultPath, 'get');
    if (params) {
      rb.query('import_key', params.import_key, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Получение файла с результатами обработки импорта в XLSX.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestImportResult$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestImportResult(params, context) {
    return this.requestImportResult$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestTranslate()` */
  static {
    this.RequestTranslatePath = '/request_translate';
  }
  /**
   * Данные перевода запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestTranslate()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestTranslate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestTranslatePath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Данные перевода запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestTranslate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestTranslate(params, context) {
    return this.requestTranslate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestTranslateSave()` */
  static {
    this.RequestTranslateSavePath = '/request_translate_save';
  }
  /**
   * Сохранение перевода запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestTranslateSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestTranslateSave$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestTranslateSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сохранение перевода запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestTranslateSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestTranslateSave(params, context) {
    return this.requestTranslateSave$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRates()` */
  static {
    this.RequestRatesPath = '/request_rates';
  }
  /**
   * Ставки по запросу от контрагента (форма добавления ставок).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRates()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRates$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRatesPath, 'get');
    if (params) {
      rb.query('uid', params.uid, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ставки по запросу от контрагента (форма добавления ставок).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRates(params, context) {
    return this.requestRates$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRatesSave()` */
  static {
    this.RequestRatesSavePath = '/request_rates_save';
  }
  /**
   * Ставки по запросу от контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRatesSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRatesSave$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRatesSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ставки по запросу от контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRatesSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRatesSave(params, context) {
    return this.requestRatesSave$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateFormParam()` */
  static {
    this.RequestRateFormParamPath = '/request_rate_form_param';
  }
  /**
   * Параметры для форм.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateFormParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateFormParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateFormParamPath, 'get');
    if (params) {
      rb.query('request_id', params.request_id, {});
      rb.query('method', params.method, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Параметры для форм.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateFormParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateFormParam(params, context) {
    return this.requestRateFormParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateListParam()` */
  static {
    this.RequestRateListParamPath = '/request_rate_list_param';
  }
  /**
   * Параметры вывода запросов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateListParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateListParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateListParamPath, 'get');
    if (params) {
      rb.query('request_id', params.request_id, {});
      rb.query('method', params.method, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Параметры вывода запросов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateListParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateListParam(params, context) {
    return this.requestRateListParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateDelete()` */
  static {
    this.RequestRateDeletePath = '/request_rate_delete';
  }
  /**
   * Удаление ставки запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Удаление ставки запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateDelete(params, context) {
    return this.requestRateDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateDouble()` */
  static {
    this.RequestRateDoublePath = '/request_rate_double';
  }
  /**
   * Дублирование ставок запроса.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateDouble()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateDouble$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateDoublePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Дублирование ставок запроса.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateDouble$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateDouble(params, context) {
    return this.requestRateDouble$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateCustomsList()` */
  static {
    this.RequestRateCustomsListPath = '/request_rate_customs_list';
  }
  /**
   * Ставки запроса До границы .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateCustomsList()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateCustomsList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateCustomsListPath, 'get');
    if (params) {
      rb.query('request_id', params.request_id, {});
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('filter', params.filter, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ставки запроса До границы .
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateCustomsList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateCustomsList(params, context) {
    return this.requestRateCustomsList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateCustomsSave()` */
  static {
    this.RequestRateCustomsSavePath = '/request_rate_customs_save';
  }
  /**
   * Ставка запроса До границы.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateCustomsSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateCustomsSave$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateCustomsSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ставка запроса До границы.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateCustomsSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateCustomsSave(params, context) {
    return this.requestRateCustomsSave$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRatePointList()` */
  static {
    this.RequestRatePointListPath = '/request_rate_point_list';
  }
  /**
   * Ставки запроса Складские (СВХ).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRatePointList()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRatePointList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRatePointListPath, 'get');
    if (params) {
      rb.query('request_id', params.request_id, {});
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('filter', params.filter, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ставки запроса Складские (СВХ).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRatePointList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRatePointList(params, context) {
    return this.requestRatePointList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRatePointSave()` */
  static {
    this.RequestRatePointSavePath = '/request_rate_point_save';
  }
  /**
   * Ставки запроса Складские (СВХ).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRatePointSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRatePointSave$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRatePointSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ставки запроса Складские (СВХ).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRatePointSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRatePointSave(params, context) {
    return this.requestRatePointSave$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateTransporterList()` */
  static {
    this.RequestRateTransporterListPath = '/request_rate_transporter_list';
  }
  /**
   * Ставки запроса Вывоз.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateTransporterList()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateTransporterList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateTransporterListPath, 'get');
    if (params) {
      rb.query('request_id', params.request_id, {});
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('filter', params.filter, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ставки запроса Вывоз.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateTransporterList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateTransporterList(params, context) {
    return this.requestRateTransporterList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateTransporterSave()` */
  static {
    this.RequestRateTransporterSavePath = '/request_rate_transporter_save';
  }
  /**
   * Ставка запроса Вывоз.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateTransporterSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateTransporterSave$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateTransporterSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ставка запроса Вывоз.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateTransporterSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateTransporterSave(params, context) {
    return this.requestRateTransporterSave$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateFinalList()` */
  static {
    this.RequestRateFinalListPath = '/request_rate_final_list';
  }
  /**
   * Ставки итоговые.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateFinalList()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateFinalList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateFinalListPath, 'get');
    if (params) {
      rb.query('request_id', params.request_id, {});
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ставки итоговые.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateFinalList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateFinalList(params, context) {
    return this.requestRateFinalList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateFinaleDelete()` */
  static {
    this.RequestRateFinaleDeletePath = '/request_rate_finale_delete';
  }
  /**
   * Удаление финальные пересечения ставок.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateFinaleDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateFinaleDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateFinaleDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Удаление финальные пересечения ставок.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateFinaleDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateFinaleDelete(params, context) {
    return this.requestRateFinaleDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateOtherList()` */
  static {
    this.RequestRateOtherListPath = '/request_rate_other_list';
  }
  /**
   * Ставки запроса Другие.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateOtherList()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateOtherList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateOtherListPath, 'get');
    if (params) {
      rb.query('request_id', params.request_id, {});
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
      rb.query('filter', params.filter, {});
      rb.query('sort', params.sort, {
        "style": "form",
        "explode": false
      });
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ставки запроса Другие.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateOtherList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestRateOtherList(params, context) {
    return this.requestRateOtherList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestRateOtherSave()` */
  static {
    this.RequestRateOtherSavePath = '/request_rate_other_save';
  }
  /**
   * Ставки запроса Другие.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestRateOtherSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateOtherSave$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestRateOtherSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ставки запроса Другие.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestRateOtherSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestRateOtherSave(params, context) {
    return this.requestRateOtherSave$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferList()` */
  static {
    this.RequestOfferListPath = '/request_offer_list';
  }
  /**
   * Коммерческие предложения.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferList()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferListPath, 'get');
    if (params) {
      rb.query('request_id', params.request_id, {});
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Коммерческие предложения.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferList(params, context) {
    return this.requestOfferList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferMake()` */
  static {
    this.RequestOfferMakePath = '/request_offer_make';
  }
  /**
   * Создание КП.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferMake()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferMake$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferMakePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Создание КП.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferMake$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferMake(params, context) {
    return this.requestOfferMake$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferInfo()` */
  static {
    this.RequestOfferInfoPath = '/request_offer_info';
  }
  /**
   * Данны по КП.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferInfo$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferInfoPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Данны по КП.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferInfo(params, context) {
    return this.requestOfferInfo$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferSave()` */
  static {
    this.RequestOfferSavePath = '/request_offer_save';
  }
  /**
   * Редактирование КП.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferSave$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Редактирование КП.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferSave(params, context) {
    return this.requestOfferSave$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferDelete()` */
  static {
    this.RequestOfferDeletePath = '/request_offer_delete';
  }
  /**
   * Удаление КП.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Удаление КП.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferDelete(params, context) {
    return this.requestOfferDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferTxt()` */
  static {
    this.RequestOfferTxtPath = '/request_offer_txt';
  }
  /**
   * Скачивание КП в формате TXT.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferTxt()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferTxt$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferTxtPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Скачивание КП в формате TXT.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferTxt$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferTxt(params, context) {
    return this.requestOfferTxt$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferPdf()` */
  static {
    this.RequestOfferPdfPath = '/request_offer_pdf';
  }
  /**
   * Скачивание КП в формате PDF.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferPdf()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferPdf$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferPdfPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Скачивание КП в формате PDF.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferPdf$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferPdf(params, context) {
    return this.requestOfferPdf$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferCalc()` */
  static {
    this.RequestOfferCalcPath = '/request_offer_calc';
  }
  /**
   * Расчет профита КП.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferCalc()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferCalc$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferCalcPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Расчет профита КП.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferCalc$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferCalc(params, context) {
    return this.requestOfferCalc$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferDelRate()` */
  static {
    this.RequestOfferDelRatePath = '/request_offer_del_rate';
  }
  /**
   * Удаление ставки из КП.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferDelRate()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferDelRate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferDelRatePath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('rate_id', params.rate_id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Удаление ставки из КП.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferDelRate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferDelRate(params, context) {
    return this.requestOfferDelRate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferCopy()` */
  static {
    this.RequestOfferCopyPath = '/request_offer_copy';
  }
  /**
   * Копирование КП.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferCopy()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferCopy$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferCopyPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Копирование КП.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferCopy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferCopy(params, context) {
    return this.requestOfferCopy$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferSend()` */
  static {
    this.RequestOfferSendPath = '/request_offer_send';
  }
  /**
   * Отправка КП.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferSend()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferSend$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferSendPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Отправка КП.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferSend$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  requestOfferSend(params, context) {
    return this.requestOfferSend$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferStatuses()` */
  static {
    this.RequestOfferStatusesPath = '/request_offer_statuses';
  }
  /**
   * Статусы КП.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferStatuses()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferStatuses$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferStatusesPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Статусы КП.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferStatuses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferStatuses(params, context) {
    return this.requestOfferStatuses$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `requestOfferSetStatus()` */
  static {
    this.RequestOfferSetStatusPath = '/request_offer_set_status';
  }
  /**
   * Установка статуса КП.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `requestOfferSetStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferSetStatus$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, RequestService.RequestOfferSetStatusPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('status_id', params.status_id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Установка статуса КП.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `requestOfferSetStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  requestOfferSetStatus(params, context) {
    return this.requestOfferSetStatus$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function RequestService_Factory(t) {
      return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: RequestService,
      factory: RequestService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3424:
/*!**************************************************!*\
  !*** ./src/app/api/services/settings.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsService: () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Настройки
 */
class SettingsService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `settingsGet()` */
  static {
    this.SettingsGetPath = '/settings_get';
  }
  /**
   * Чтение настроек.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingsGet$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SettingsService.SettingsGetPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Чтение настроек.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `settingsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingsGet(params, context) {
    return this.settingsGet$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `settingsUpdate()` */
  static {
    this.SettingsUpdatePath = '/settings_update';
  }
  /**
   * Сохранение настроек.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingsUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  settingsUpdate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SettingsService.SettingsUpdatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сохранение настроек.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `settingsUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  settingsUpdate(params, context) {
    return this.settingsUpdate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `settingsFilterList()` */
  static {
    this.SettingsFilterListPath = '/settings_filter_list';
  }
  /**
   * Фильтры.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingsFilterList()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingsFilterList$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SettingsService.SettingsFilterListPath, 'get');
    if (params) {
      rb.query('table', params.table, {});
      rb.query('start', params.start, {});
      rb.query('count', params.count, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Фильтры.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `settingsFilterList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingsFilterList(params, context) {
    return this.settingsFilterList$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `settingsFilterFormParam()` */
  static {
    this.SettingsFilterFormParamPath = '/settings_filter_form_param';
  }
  /**
   * Параметры для форм.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingsFilterFormParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingsFilterFormParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SettingsService.SettingsFilterFormParamPath, 'get');
    if (params) {
      rb.query('table', params.table, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Параметры для форм.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `settingsFilterFormParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  settingsFilterFormParam(params, context) {
    return this.settingsFilterFormParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `settingsFilterSave()` */
  static {
    this.SettingsFilterSavePath = '/settings_filter_save';
  }
  /**
   * Сохранение фильтра.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingsFilterSave()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  settingsFilterSave$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SettingsService.SettingsFilterSavePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сохранение фильтра.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `settingsFilterSave$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  settingsFilterSave(params, context) {
    return this.settingsFilterSave$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `settingsFilterSaveOrder()` */
  static {
    this.SettingsFilterSaveOrderPath = '/settings_filter_save_order';
  }
  /**
   * Сохранение порядка фильтров.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingsFilterSaveOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  settingsFilterSaveOrder$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SettingsService.SettingsFilterSaveOrderPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сохранение порядка фильтров.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `settingsFilterSaveOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  settingsFilterSaveOrder(params, context) {
    return this.settingsFilterSaveOrder$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `settingsFilterDelete()` */
  static {
    this.SettingsFilterDeletePath = '/settings_filter_delete';
  }
  /**
   * Удаление фильтров.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `settingsFilterDelete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  settingsFilterDelete$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SettingsService.SettingsFilterDeletePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Удаление фильтров.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `settingsFilterDelete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  settingsFilterDelete(params, context) {
    return this.settingsFilterDelete$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function SettingsService_Factory(t) {
      return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: SettingsService,
      factory: SettingsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3812:
/*!************************************************!*\
  !*** ./src/app/api/services/system.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemService: () => (/* binding */ SystemService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Системный справочник данных
 */
class SystemService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `systemTaxSystem()` */
  static {
    this.SystemTaxSystemPath = '/system_tax_system';
  }
  /**
   * Система налогооблажения.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemTaxSystem()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemTaxSystem$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SystemService.SystemTaxSystemPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Система налогооблажения.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemTaxSystem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemTaxSystem(params, context) {
    return this.systemTaxSystem$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `systemCurrency()` */
  static {
    this.SystemCurrencyPath = '/system_currency';
  }
  /**
   * Валюта.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemCurrency()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemCurrency$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SystemService.SystemCurrencyPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Валюта.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemCurrency$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemCurrency(params, context) {
    return this.systemCurrency$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `systemHeadPosition()` */
  static {
    this.SystemHeadPositionPath = '/system_head_position';
  }
  /**
   * Должности руководителей.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemHeadPosition()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemHeadPosition$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SystemService.SystemHeadPositionPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Должности руководителей.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemHeadPosition$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemHeadPosition(params, context) {
    return this.systemHeadPosition$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `systemServices()` */
  static {
    this.SystemServicesPath = '/system_services';
  }
  /**
   * Виды услуг.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemServices()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemServices$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SystemService.SystemServicesPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Виды услуг.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemServices$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemServices(params, context) {
    return this.systemServices$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `systemBusiness()` */
  static {
    this.SystemBusinessPath = '/system_business';
  }
  /**
   * Отрасль деятельности.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemBusiness()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemBusiness$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SystemService.SystemBusinessPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Отрасль деятельности.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemBusiness$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemBusiness(params, context) {
    return this.systemBusiness$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `systemCounterparty()` */
  static {
    this.SystemCounterpartyPath = '/system_counterparty';
  }
  /**
   * Тип контрагента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemCounterparty()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemCounterparty$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SystemService.SystemCounterpartyPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Тип контрагента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemCounterparty$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemCounterparty(params, context) {
    return this.systemCounterparty$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `systemInteraction()` */
  static {
    this.SystemInteractionPath = '/system_interaction';
  }
  /**
   * Взаимодействие.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemInteraction()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemInteraction$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SystemService.SystemInteractionPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Взаимодействие.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemInteraction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemInteraction(params, context) {
    return this.systemInteraction$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `systemContactSource()` */
  static {
    this.SystemContactSourcePath = '/system_contact_source';
  }
  /**
   * Источник контакта.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemContactSource()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemContactSource$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SystemService.SystemContactSourcePath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Источник контакта.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemContactSource$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemContactSource(params, context) {
    return this.systemContactSource$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `systemCustomerStatus()` */
  static {
    this.SystemCustomerStatusPath = '/system_customer_status';
  }
  /**
   * Статус клиента.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemCustomerStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemCustomerStatus$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SystemService.SystemCustomerStatusPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Статус клиента.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemCustomerStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemCustomerStatus(params, context) {
    return this.systemCustomerStatus$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `systemAssociation()` */
  static {
    this.SystemAssociationPath = '/system_association';
  }
  /**
   * Рейтинг подрядчиков.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemAssociation()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemAssociation$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SystemService.SystemAssociationPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Рейтинг подрядчиков.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemAssociation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemAssociation(params, context) {
    return this.systemAssociation$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `systemRating()` */
  static {
    this.SystemRatingPath = '/system_rating';
  }
  /**
   * Ассоциации подрядчиков.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `systemRating()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemRating$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, SystemService.SystemRatingPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Ассоциации подрядчиков.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `systemRating$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  systemRating(params, context) {
    return this.systemRating$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function SystemService_Factory(t) {
      return new (t || SystemService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: SystemService,
      factory: SystemService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5230:
/*!***************************************************!*\
  !*** ./src/app/api/services/transport.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransportService: () => (/* binding */ TransportService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Транспорт
 */
class TransportService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `transportKind()` */
  static {
    this.TransportKindPath = '/transport_kind';
  }
  /**
   * Вид перевозки.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transportKind()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportKind$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, TransportService.TransportKindPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Вид перевозки.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `transportKind$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportKind(params, context) {
    return this.transportKind$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `transportSubKind()` */
  static {
    this.TransportSubKindPath = '/transport_sub_kind';
  }
  /**
   * Подвиды перевозки.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transportSubKind()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportSubKind$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, TransportService.TransportSubKindPath, 'get');
    if (params) {
      rb.query('kind_id', params.kind_id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Подвиды перевозки.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `transportSubKind$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportSubKind(params, context) {
    return this.transportSubKind$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `transportType()` */
  static {
    this.TransportTypePath = '/transport_type';
  }
  /**
   * Тип транспорта.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transportType()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportType$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, TransportService.TransportTypePath, 'get');
    if (params) {
      rb.query('kind_id', params.kind_id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Тип транспорта.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `transportType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportType(params, context) {
    return this.transportType$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `transportLoading()` */
  static {
    this.TransportLoadingPath = '/transport_loading';
  }
  /**
   * Способы загрузки.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transportLoading()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportLoading$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, TransportService.TransportLoadingPath, 'get');
    if (params) {
      rb.query('kind_id', params.kind_id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Способы загрузки.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `transportLoading$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportLoading(params, context) {
    return this.transportLoading$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `transportBody()` */
  static {
    this.TransportBodyPath = '/transport_body';
  }
  /**
   * Типы кузовов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transportBody()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportBody$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, TransportService.TransportBodyPath, 'get');
    if (params) {
      rb.query('kind_id', params.kind_id, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Типы кузовов.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `transportBody$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportBody(params, context) {
    return this.transportBody$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `transportCarrier()` */
  static {
    this.TransportCarrierPath = '/transport_carrier';
  }
  /**
   * Перевозчики.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transportCarrier()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportCarrier$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, TransportService.TransportCarrierPath, 'get');
    if (params) {
      rb.query('kind_id', params.kind_id, {});
      rb.query('name', params.name, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Перевозчики.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `transportCarrier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportCarrier(params, context) {
    return this.transportCarrier$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `transportRoute()` */
  static {
    this.TransportRoutePath = '/transport_route';
  }
  /**
   * Маршрут.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transportRoute()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportRoute$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, TransportService.TransportRoutePath, 'get');
    if (params) {
      rb.query('kind_id', params.kind_id, {});
      rb.query('carrier_id', params.carrier_id, {});
      rb.query('country_id_departure', params.country_id_departure, {});
      rb.query('country_id_arrival', params.country_id_arrival, {});
      rb.query('city_id_departure', params.city_id_departure, {});
      rb.query('city_id_arrival', params.city_id_arrival, {});
      rb.query('point_id_departure', params.point_id_departure, {});
      rb.query('point_id_arrival', params.point_id_arrival, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Маршрут.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `transportRoute$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportRoute(params, context) {
    return this.transportRoute$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `transportPointAction()` */
  static {
    this.TransportPointActionPath = '/transport_point_action';
  }
  /**
   * Тип операции.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `transportPointAction()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportPointAction$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, TransportService.TransportPointActionPath, 'get');
    if (params) {
      rb.query('direction', params.direction, {});
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Тип операции.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `transportPointAction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  transportPointAction(params, context) {
    return this.transportPointAction$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function TransportService_Factory(t) {
      return new (t || TransportService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: TransportService,
      factory: TransportService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2270:
/*!**********************************************!*\
  !*** ./src/app/api/services/user.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 442);
/* harmony import */ var _request_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-builder */ 9522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-configuration */ 7942);
/* tslint:disable */
/* eslint-disable */







/**
 * Авторизация пользователей
 */
class UserService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(config, http) {
    super(config, http);
  }
  /** Path part for operation `userCreate()` */
  static {
    this.UserCreatePath = '/user_create';
  }
  /**
   * Регистрация пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userCreate$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Регистрация пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userCreate(params, context) {
    return this.userCreate$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userSendCode()` */
  static {
    this.UserSendCodePath = '/user_send_code';
  }
  /**
   * Отправка кода для регистрации пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSendCode()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSendCode$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserSendCodePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Отправка кода для регистрации пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSendCode$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSendCode(params, context) {
    return this.userSendCode$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userConfirm()` */
  static {
    this.UserConfirmPath = '/user_confirm';
  }
  /**
   * Подтверждение регистрация пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userConfirm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userConfirm$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserConfirmPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Подтверждение регистрация пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userConfirm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userConfirm(params, context) {
    return this.userConfirm$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userSendResetCode()` */
  static {
    this.UserSendResetCodePath = '/user_send_reset_code';
  }
  /**
   * Отправка кода для сброса пароля пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSendResetCode()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSendResetCode$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserSendResetCodePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Отправка кода для сброса пароля пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSendResetCode$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSendResetCode(params, context) {
    return this.userSendResetCode$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userResetPassword()` */
  static {
    this.UserResetPasswordPath = '/user_reset_password';
  }
  /**
   * Сброс пароля.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userResetPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userResetPassword$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserResetPasswordPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сброс пароля.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userResetPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userResetPassword(params, context) {
    return this.userResetPassword$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userCreateInvite()` */
  static {
    this.UserCreateInvitePath = '/user_create_invite';
  }
  /**
   * Создание приглашения для сотрудника.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userCreateInvite()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userCreateInvite$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserCreateInvitePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Создание приглашения для сотрудника.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userCreateInvite$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userCreateInvite(params, context) {
    return this.userCreateInvite$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userRegisterInvite()` */
  static {
    this.UserRegisterInvitePath = '/user_register_invite';
  }
  /**
   * Установка логина и пароля.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userRegisterInvite()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userRegisterInvite$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserRegisterInvitePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Установка логина и пароля.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userRegisterInvite$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userRegisterInvite(params, context) {
    return this.userRegisterInvite$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userUpdatePassword()` */
  static {
    this.UserUpdatePasswordPath = '/user_update_password';
  }
  /**
   * Смена логина и пароля.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userUpdatePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userUpdatePassword$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserUpdatePasswordPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Смена логина и пароля.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userUpdatePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userUpdatePassword(params, context) {
    return this.userUpdatePassword$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userInviteData()` */
  static {
    this.UserInviteDataPath = '/user_invite_data';
  }
  /**
   * Данные по приглашению.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userInviteData()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userInviteData$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserInviteDataPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Данные по приглашению.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userInviteData$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userInviteData(params, context) {
    return this.userInviteData$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userLogin()` */
  static {
    this.UserLoginPath = '/user_login';
  }
  /**
   * Авторизация пользователя по паролю.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userLogin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userLogin$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserLoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Авторизация пользователя по паролю.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userLogin(params, context) {
    return this.userLogin$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userLogout()` */
  static {
    this.UserLogoutPath = '/user_logout';
  }
  /**
   * Выход пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userLogout()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userLogout$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserLogoutPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Выход пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userLogout$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userLogout(params, context) {
    return this.userLogout$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userUpdateToken()` */
  static {
    this.UserUpdateTokenPath = '/user_update_token';
  }
  /**
   * Обновление токена доступа.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userUpdateToken()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userUpdateToken$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserUpdateTokenPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Обновление токена доступа.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userUpdateToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userUpdateToken(params, context) {
    return this.userUpdateToken$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userSaveTableParam()` */
  static {
    this.UserSaveTableParamPath = '/user_save_table_param';
  }
  /**
   * Сохранение параметров вывода таблицы.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSaveTableParam()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSaveTableParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserSaveTableParamPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сохранение параметров вывода таблицы.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSaveTableParam$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSaveTableParam(params, context) {
    return this.userSaveTableParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userResetTableParam()` */
  static {
    this.UserResetTableParamPath = '/user_reset_table_param';
  }
  /**
   * Сброс параметров вывода таблицы.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userResetTableParam()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userResetTableParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserResetTableParamPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сброс параметров вывода таблицы.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userResetTableParam$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userResetTableParam(params, context) {
    return this.userResetTableParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userGetParam()` */
  static {
    this.UserGetParamPath = '/user_get_param';
  }
  /**
   * Получение параметров пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userGetParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  userGetParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserGetParamPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Получение параметров пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userGetParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userGetParam(params, context) {
    return this.userGetParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userSaveParam()` */
  static {
    this.UserSaveParamPath = '/user_save_param';
  }
  /**
   * Сохранение параметров пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userSaveParam()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSaveParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserSaveParamPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Сохранение параметров пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userSaveParam$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userSaveParam(params, context) {
    return this.userSaveParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  /** Path part for operation `userFormParamParam()` */
  static {
    this.UserFormParamParamPath = '/user_form_param_param';
  }
  /**
   * Параметры для формы параметров пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userFormParamParam()` instead.
   *
   * This method doesn't expect any request body.
   */
  userFormParamParam$Response(params, context) {
    const rb = new _request_builder__WEBPACK_IMPORTED_MODULE_1__.RequestBuilder(this.rootUrl, UserService.UserFormParamParamPath, 'get');
    if (params) {}
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(r => r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => {
      return r;
    }));
  }
  /**
   * Параметры для формы параметров пользователя.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `userFormParamParam$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userFormParamParam(params, context) {
    return this.userFormParamParam$Response(params, context).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(r => r.body));
  }
  static {
    this.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_2__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _auth_user_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/user.guard */ 8037);
/* harmony import */ var _auth_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/components/logout/logout.component */ 5494);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/components/login/login.component */ 3592);
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/components/register/register.component */ 2196);
/* harmony import */ var _auth_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/components/confirm/confirm.component */ 3260);
/* harmony import */ var _pages_components_request_rate_request_rate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/components/request-rate/request-rate.component */ 4074);
/* harmony import */ var _pages_components_employee_register_employee_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/components/employee-register/employee-register.component */ 7684);
/* harmony import */ var _auth_components_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/components/password-recovery/password-recovery.component */ 1268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);











const config = {
  useHash: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload' // Позволяет перезагружать страницу при переходе на тот же URL
};

const routes = [{
  path: 'pages',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 8423)).then(m => m.PagesModule)
  // canActivate: [AuthGuard]
}, {
  path: 'password_recovery',
  component: _auth_components_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_7__.PasswordRecoveryComponent,
  canActivate: [_auth_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard],
  title: 'Востановление пароля'
}, {
  path: 'rate_request/:uid',
  component: _pages_components_request_rate_request_rate_component__WEBPACK_IMPORTED_MODULE_5__.RequestRateComponent,
  title: 'Rates'
}, {
  path: 'employee_register/:uid',
  component: _pages_components_employee_register_employee_register_component__WEBPACK_IMPORTED_MODULE_6__.EmployeeRegisterComponent,
  title: 'Employee Register'
}, {
  path: 'login',
  component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
  canActivate: [_auth_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard],
  title: 'Вход в систему'
}, {
  path: 'logout',
  component: _auth_components_logout_logout_component__WEBPACK_IMPORTED_MODULE_1__.LogoutComponent,
  title: 'Выход из системы'
}, {
  path: 'register',
  component: _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
  canActivate: [_auth_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard],
  title: 'Регистрация в системе'
}, {
  path: 'confirm',
  component: _auth_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmComponent,
  canActivate: [_auth_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard],
  title: 'Код подтверждения'
}, {
  path: 'confirm/:uid',
  component: _auth_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmComponent,
  canActivate: [_auth_user_guard__WEBPACK_IMPORTED_MODULE_0__.UserGuard],
  title: 'Код подтверждения'
}, {
  path: '',
  redirectTo: 'pages',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'pages'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, config), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/services/user.service */ 2270);
/* harmony import */ var _app_pages_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/pages/services/loader.service */ 1798);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




class AppComponent {
  // isLoading$ = this.loaderService.isLoading$;
  constructor(userService, loaderService) {
    this.userService = userService;
    this.loaderService = loaderService;
    this.title = 'cargodrom-frontend';
  }
  ngOnInit() {}
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_pages_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
      styles: ["@charset \"UTF-8\";\n.demo app-header, .demo app-table-sunheader-file, .demo app-editor-header, .demo .subheader.component {\n  position: static;\n}\n.demo app-request app-table-filter, .demo app-contractor app-table-filter, .demo app-client app-table-filter {\n  position: static;\n}\n\napp-header, app-table-sunheader-file, app-editor-header, .subheader.component {\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n}\n\napp-table-sunheader-file, app-editor-header, .subheader.component {\n  top: 56px;\n}\napp-table-sunheader-file .subheader, app-editor-header .subheader, .subheader.component .subheader {\n  border-top: 1px solid var(--header_menu, #4B66AD);\n}\n\napp-request-details .subheader.component {\n  border-top: 1px solid #4B66AD;\n}\n\napp-request app-table-filter, app-contractor app-table-filter, app-client app-table-filter {\n  position: sticky;\n  top: 114.5px;\n  left: 0;\n  right: 0;\n  z-index: 100;\n}\napp-request app-table-filter .filter, app-contractor app-table-filter .filter, app-client app-table-filter .filter {\n  background-color: var(--background, #f7f9fc);\n  border-bottom: 1px solid var(--line, #E0E5EB);\n}\n\napp-settings {\n  min-height: 100vh;\n}\n\ntable .column {\n  box-sizing: border-box;\n  flex-grow: 1;\n}\n\nng-scrollbar.ng-scrollbar {\n  --scrollbar-size: 8px;\n  --scrollbar-thumb-color: #6200ee;\n  --scrollbar-track-color: #f1f1f1;\n  --scrollbar-border-radius: 4px;\n}\n\n.scrollbar-control {\n  background-color: red;\n}\n\ntable a.link {\n  color: var(--text, rgba(0, 0, 0, 0.87));\n}\n\n.table-form {\n  --mat-table-background-color:#83909E;\n}\n.table-form .table {\n  width: 100%;\n}\n\ntable th .td-block-line {\n  background-color: #83909E;\n}\ntable th .td-block-line .column {\n  position: relative;\n}\ntable th .td-block-line .resize-handle {\n  top: 0;\n  bottom: -1px;\n}\n\ntable .mdc-data-table__header-cell {\n  overflow: visible;\n}\n\n.table-list .td-block .column {\n  position: relative;\n}\n\n.table-list .resize-handle {\n  position: absolute;\n  right: -1.5px;\n  width: 3px;\n  top: -9px;\n  bottom: -7px;\n  background-color: inherit;\n  cursor: col-resize;\n  pointer-events: none;\n  z-index: 10;\n}\n.table-list .resize-handle_end {\n  cursor: col-resize;\n  position: absolute;\n  left: -2px;\n  width: 3px;\n  top: 0;\n  bottom: 0;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.table-list.resize .resize-handle, .table-list.resize .resize-handle_end {\n  background-color: var(--accent, #DB563B);\n  pointer-events: all;\n}\n.table-list.resize .resize-handle_end::before, .table-list.resize .resize-handle::before {\n  content: \"\";\n  position: absolute;\n  left: -5px;\n  right: -5px;\n  top: 7px;\n  bottom: 7px;\n  background-color: var(--accent, #DB563B);\n  border-radius: 3px;\n}\n.table-list.resize table thead .column {\n  overflow: visible;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.mat-mdc-dialog-container form.edit-form {\n  margin: 20px;\n}\n\n.no-layout {\n  display: contents;\n}\n\n.loader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10000;\n}\n\n.cdk-overlay-container mat-snack-bar-container.mdc-snackbar.centered-snackbar {\n  margin-top: 50vh;\n}\n\n.table-list thead .column {\n  height: 36px;\n}\n\n.table-list tbody .column {\n  overflow: hidden;\n}\n\n.table-list .td-block .column {\n  align-items: center;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 16px;\n}\n\n.table-list .mat-mdc-select {\n  background-color: inherit;\n  border: none;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 16px;\n  max-width: 150px;\n}\n.table-list .mat-mdc-select .mat-mdc-select-trigger {\n  padding: 0;\n}\n\nmat-form-field.mat-mdc-form-field {\n  width: 100%;\n  height: 40px;\n}\nmat-form-field.mat-mdc-form-field .mat-mdc-text-field-wrapper,\nmat-form-field.mat-mdc-form-field .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex,\nmat-form-field.mat-mdc-form-field .mat-mdc-form-field-flex .mat-mdc-form-field-infix {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\nmat-form-field.mat-mdc-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\nmat-form-field.mat-mdc-form-field .mdc-notched-outline__leading,\nmat-form-field.mat-mdc-form-field .mdc-notched-outline__notch,\nmat-form-field.mat-mdc-form-field .mdc-notched-outline__trailing {\n  border: none !important; /* \u0423\u0431\u0438\u0440\u0430\u0435\u043C \u0440\u0430\u043C\u043A\u0438 */\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQWFkO0VBQ0UsZ0JBQUE7QUFYSjtBQWNFO0VBQ0UsZ0JBQUE7QUFaSjs7QUFnQkE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUFiRjs7QUFlQTtFQUlFLFNBQUE7QUFmRjtBQVlFO0VBQ0UsaURBQUE7QUFWSjs7QUFjQTtFQUNFLDZCQUFBO0FBWEY7O0FBZUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFaSjtBQWFJO0VBQ0UsNENBQUE7RUFDQSw2Q0FBQTtBQVhOOztBQWlCQTtFQUNFLGlCQUFBO0FBZEY7O0FBdUNBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBcENGOztBQXNDQTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FBbkNGOztBQXFDQTtFQUNFLHFCQUFBO0FBbENGOztBQW9DQTtFQUNFLHVDQUFBO0FBakNGOztBQXFDQTtFQUNFLG9DQUFBO0FBbENGO0FBbUNFO0VBQ0UsV0FBQTtBQWpDSjs7QUFxQ0E7RUFDRSx5QkFBQTtBQWxDRjtBQW1DRTtFQUNFLGtCQUFBO0FBakNKO0FBbUNFO0VBQ0UsTUFBQTtFQUNBLFlBQUE7QUFqQ0o7O0FBb0NBO0VBQ0UsaUJBQUE7QUFqQ0Y7O0FBbUNBO0VBQ0Usa0JBQUE7QUFoQ0Y7O0FBb0NFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQWpDSjtBQW1DQztFQUNHLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBakNKOztBQXFDRTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7QUFsQ0o7QUFvQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQWxDSjtBQW9DRTtFQUNFLGlCQUFBO0FBbENKOztBQXNDQTtFQUNFLGVBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsWUFBQTtBQW5DRjs7QUF3Q0E7RUFDRSxpQkFBQTtBQXJDRjs7QUE2Q0E7RUFDRSxlQUFBO0VBQWlCLE1BQUE7RUFBUSxPQUFBO0VBQ3pCLFdBQUE7RUFBYSxZQUFBO0VBQ2Isb0NBQUE7RUFDQSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsbUJBQUE7RUFDeEMsY0FBQTtBQXJDRjs7QUF1Q0E7RUFDRSxnQkFBQTtBQXBDRjs7QUF3Q0E7RUFDRSxZQUFBO0FBckNGOztBQXVDQTtFQUNFLGdCQUFBO0FBcENGOztBQXVDQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFwQ0Y7O0FBdUNBO0VBSUUseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXZDRjtBQStCRTtFQUNFLFVBQUE7QUE3Qko7O0FBMEZBO0VBRUUsV0FBQTtFQUFhLFlBQUE7QUF2RmY7QUF3RkU7OztFQUdFLFNBQUE7RUFBVyxVQUFBO0VBQVksWUFBQTtBQXBGM0I7QUFzRkU7RUFDRSxhQUFBO0FBcEZKO0FBc0ZFOzs7RUFHRSx1QkFBQSxFQUFBLGtCQUFBO0FBcEZKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLXJlcXVlc3QtZGV0YWlsc3tcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gfVxuLy8gLnJlcXVlc3QtZGV0YWlscy1jb21wb25lbnR7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuLy8gfVxuXG5cblxuLmRlbW97XG4gIGFwcC1oZWFkZXIsIGFwcC10YWJsZS1zdW5oZWFkZXItZmlsZSwgYXBwLWVkaXRvci1oZWFkZXIsIC5zdWJoZWFkZXIuY29tcG9uZW50e1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgYXBwLXJlcXVlc3QsIGFwcC1jb250cmFjdG9yLCBhcHAtY2xpZW50e1xuICBhcHAtdGFibGUtZmlsdGVye1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbn1cbn1cbmFwcC1oZWFkZXIsIGFwcC10YWJsZS1zdW5oZWFkZXItZmlsZSwgYXBwLWVkaXRvci1oZWFkZXIsIC5zdWJoZWFkZXIuY29tcG9uZW50e1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xufVxuYXBwLXRhYmxlLXN1bmhlYWRlci1maWxlLCBhcHAtZWRpdG9yLWhlYWRlciwgLnN1YmhlYWRlci5jb21wb25lbnR7XG4gIC5zdWJoZWFkZXJ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhlYWRlcl9tZW51LCM0QjY2QUQpO1xuICB9XG4gIHRvcDogNTZweDtcbn1cbmFwcC1yZXF1ZXN0LWRldGFpbHMgLnN1YmhlYWRlci5jb21wb25lbnR7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNEI2NkFEO1xufVxuXG5hcHAtcmVxdWVzdCwgYXBwLWNvbnRyYWN0b3IsIGFwcC1jbGllbnR7XG4gIGFwcC10YWJsZS1maWx0ZXJ7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDExNC41cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgLmZpbHRlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQsICNmN2Y5ZmMpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpbmUsICNFMEU1RUIpO1xuICAgIH1cbiAgfVxufVxuXG5cbmFwcC1zZXR0aW5nc3tcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi8vIC5oZWFkZXIsLnN1YmhlYWRlcntcbi8vICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICB0b3A6IDA7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gICB6LWluZGV4OiAxMDAwO1xuLy8gfVxuLy8gLnN1YmhlYWRlcntcbi8vICAgdG9wOiA1NnB4O1xuLy8gICBib3JkZXItdG9wOiAxcHggc29saWQgIzRCNjZBRDtcbi8vIH1cbi8vIC5jb250ZW50e1xuLy8gICBtYXJnaW4tdG9wOiAxMTVweDtcbi8vICAgLnVzZXItbW9kdWxle1xuLy8gICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuLy8gICB9XG4vLyB9XG4vLyBhcHAtcmVxdWVzdC1lZGl0b3IsIGFwcC1jb250cmFjdG9yLWVkaXRvciwgYXBwLWNsaWVudC1lZGl0b3J7XG4vLyAgIG1hcmdpbi10b3A6IDQwcHg7ICBcbi8vIH1cblxuXG50YWJsZSAuY29sdW1ue1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LWdyb3c6IDE7XG59XG5uZy1zY3JvbGxiYXIubmctc2Nyb2xsYmFyICB7XG4gIC0tc2Nyb2xsYmFyLXNpemU6IDhweDtcbiAgLS1zY3JvbGxiYXItdGh1bWItY29sb3I6ICM2MjAwZWU7XG4gIC0tc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAjZjFmMWYxO1xuICAtLXNjcm9sbGJhci1ib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uc2Nyb2xsYmFyLWNvbnRyb2x7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbnRhYmxlIGEubGlua3tcbiAgY29sb3I6IHZhcigtLXRleHQsIHJnYmEoMCwgMCwgMCwgMC44NykpO1xufVxuXG5cbi50YWJsZS1mb3Jte1xuICAtLW1hdC10YWJsZS1iYWNrZ3JvdW5kLWNvbG9yOiM4MzkwOUU7XG4gIC50YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG50YWJsZSB0aCAudGQtYmxvY2stbGluZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzOTA5RTtcbiAgLmNvbHVtbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnJlc2l6ZS1oYW5kbGV7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogLTFweDtcbiAgfVxufVxudGFibGUgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLnRhYmxlLWxpc3QgLnRkLWJsb2NrIC5jb2x1bW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YWJsZS1saXN0e1xuICAucmVzaXplLWhhbmRsZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0xLjVweDtcbiAgICB3aWR0aDogM3B4O1xuICAgIHRvcDogLTlweDtcbiAgICBib3R0b206IC03cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAucmVzaXplLWhhbmRsZV9lbmQge1xuICAgIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTJweDtcbiAgICB3aWR0aDogM3B4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbn1cbi50YWJsZS1saXN0LnJlc2l6ZSB7XG4gIC5yZXNpemUtaGFuZGxlLCAucmVzaXplLWhhbmRsZV9lbmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgfVxuICAucmVzaXplLWhhbmRsZV9lbmQ6OmJlZm9yZSwucmVzaXplLWhhbmRsZTo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNXB4O1xuICAgIHJpZ2h0OiAtNXB4O1xuICAgIHRvcDogN3B4O1xuICAgIGJvdHRvbTogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuICB0YWJsZSB0aGVhZCAuY29sdW1ue1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG59XG5cbmJ1dHRvbntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LW1kYy1kaWFsb2ctY29udGFpbmVyIGZvcm0uZWRpdC1mb3Jte1xuICBtYXJnaW46IDIwcHg7XG4gIC8vIG1hcmdpbjogMjBweCBhdXRvO1xuICAvLyB3aWR0aDogOTglO1xufVxuXG4ubm8tbGF5b3V0IHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG4vLyB0ZC52ZXJ0aWNhbGx5IC50ZC1ibG9ja3tcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4vLyB9XG5cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbi5jZGstb3ZlcmxheS1jb250YWluZXIgbWF0LXNuYWNrLWJhci1jb250YWluZXIubWRjLXNuYWNrYmFyLmNlbnRlcmVkLXNuYWNrYmFyIHtcbiAgbWFyZ2luLXRvcDogNTB2aDtcbn1cblxuLy9UQUJMRXNcbi50YWJsZS1saXN0IHRoZWFkIC5jb2x1bW57XG4gIGhlaWdodDogMzZweDtcbn1cbi50YWJsZS1saXN0IHRib2R5IC5jb2x1bW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFibGUtbGlzdCAudGQtYmxvY2sgLmNvbHVtbntcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbi8vIG1hdC1zZWxlY3RzIGFuZCBtYXQtb3B0aW9ucyBpbiB0YWJsZVxuLnRhYmxlLWxpc3QgLm1hdC1tZGMtc2VsZWN0IHtcbiAgLm1hdC1tZGMtc2VsZWN0LXRyaWdnZXJ7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogMTUwcHg7XG5cbiAgLy8gLm1hdC1tZGMtc2VsZWN0LXRyaWdnZXIgeyBwYWRkaW5nOiAwOyB9XG4gIC8vIC5tYXQtbWRjLXNlbGVjdC12YWx1ZS10ZXh0IHsgdGV4dC13cmFwOiBhdXRvOyB9XG59XG4vLyAudGFibGUtbGlzdCAudGQtYmxvY2sgLmNvbHVtbiBtYXQtc2VsZWN0Lm1hdC1tZGMtc2VsZWN0IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICBmb250LXdlaWdodDogNDAwO1xuLy8gICBmb250LXNpemU6IDEzcHg7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuXG4vLyAgIC5tYXQtbWRjLXNlbGVjdC10cmlnZ2VyIHsgcGFkZGluZzogMDsgfVxuLy8gICAubWF0LW1kYy1zZWxlY3QtdmFsdWUtdGV4dCB7IHRleHQtd3JhcDogYXV0bzsgfVxuLy8gfVxuXG5cblxuXG5cblxuLy9tYXQtZm9ybS1maWVsZFxuLy8gbWF0LWZvcm0tZmllbGQubWF0LW1kYy1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWRjLXRleHQtZmllbGQtLW91dGxpbmVkIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjlGQzsgLyogw5HChMOQwr7DkMK9ICovXG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDsgLyogw5HCgcOQwrrDkcKAw5HCg8OQwrPDkMK7w5DCtcOQwr3DkMK4w5DCtSDDkcKDw5DCs8OQwrvDkMK+w5DCsiAqL1xuLy8gfVxuXG4vLyBtYXQtZm9ybS1maWVsZC5tYXQtbWRjLWZvcm0tZmllbGQgLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcnsgZGlzcGxheTogbm9uZTt9XG4vLyBtYXQtZm9ybS1maWVsZC5tYXQtbWRjLWZvcm0tZmllbGQgLm1kYy1ub3RjaGVkLW91dGxpbmVfX2xlYWRpbmcsXG4vLyBtYXQtZm9ybS1maWVsZC5tYXQtbWRjLWZvcm0tZmllbGQgLm1kYy1ub3RjaGVkLW91dGxpbmVfX25vdGNoLFxuLy8gbWF0LWZvcm0tZmllbGQubWF0LW1kYy1mb3JtLWZpZWxkIC5tZGMtbm90Y2hlZC1vdXRsaW5lX190cmFpbGluZyB7XG4vLyAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyAvKiDDkMKjw5DCscOQwrjDkcKAw5DCsMOQwrXDkMK8IMORwoDDkMKww5DCvMOQwrrDkMK4ICovXG4vLyB9XG5cbi8vIG1hdC1mb3JtLWZpZWxkLm1hdC1tZGMtZm9ybS1maWVsZCAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4eyBoZWlnaHQ6IDQwcHg7fVxuLy8gbWF0LWZvcm0tZmllbGQubWF0LW1kYy1mb3JtLWZpZWxke1xuLy8gICBiYWNrZ3JvdW5kOiAjRjdGOUZDO1xuLy8gICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgzNiwgNDUsIDY3LCAwLjA4KTtcbi8vIH1cblxuLy8gbWF0LWZvcm0tZmllbGQubWF0LW1kYy1mb3JtLWZpZWxkIHtcbi8vICAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJywgJ2FyaWFsJywgJ3NhbnMtc2VyaWYnO1xuLy8gICBiYWNrZ3JvdW5kOiAjRjdGOUZDO1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCO1xuLy8gICBjb2xvcjogIzJDMzY0MDtcbi8vICAgZm9udC1zaXplOiAxNXB4O1xuLy8gICBsaW5lLWhlaWdodDogMTVweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgcGFkZGluZzogMTFweCAxM3B4IDlweDtcbi8vIH1cblxuXG5tYXQtZm9ybS1maWVsZC5tYXQtbWRjLWZvcm0tZmllbGQge1xuICAvL2JhY2tncm91bmQ6ICNGN0Y5RkM7IGJvcmRlcjogMXB4IHNvbGlkICNFMEU1RUI7IGJvcmRlci1yYWRpdXM6IDZweDsgd2lkdGg6IDEwMCU7IGhlaWdodDogNDBweDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgcGFkZGluZzogMTFweCAxM3B4IDlweDtcbiAgd2lkdGg6IDEwMCU7IGhlaWdodDogNDBweDtcbiAgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyLFxuICAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIgLm1hdC1tZGMtZm9ybS1maWVsZC1mbGV4LFxuICAubWF0LW1kYy1mb3JtLWZpZWxkLWZsZXggLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5tZGMtbm90Y2hlZC1vdXRsaW5lX19sZWFkaW5nLFxuICAubWRjLW5vdGNoZWQtb3V0bGluZV9fbm90Y2gsXG4gIC5tZGMtbm90Y2hlZC1vdXRsaW5lX190cmFpbGluZyB7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7IC8qIMOQwqPDkMKxw5DCuMORwoDDkMKww5DCtcOQwrwgw5HCgMOQwrDDkMK8w5DCusOQwrggKi9cbiAgfVxufVxuXG5cbi8vIC8vbWF0LXNlbGVjdCBmaWx0ZXJcbi8vIC5maWx0ZXIgLm1haW4gbWF0LXNlbGVjdC5tYXQtbWRjLXNlbGVjdHtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICBoZWlnaHQ6IDEycHg7XG4vLyAgIC5tYXQtbWRjLXNlbGVjdC10cmlnZ2VyIHtcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICB9XG4vLyB9XG4vLyAvL21hdC1zZWxlY3QgcGFnaW5hdG9yXG4vLyBhcHAtcGFnaW5hdG9yIG1hdC1zZWxlY3QubWF0LW1kYy1zZWxlY3Qge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggMHB4IHJnYmEoMzYsIDQ1LCA2NywgMC4wOCk7XG4vLyAgIGJvcmRlcjogbm9uZTtcbiAgXG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgIGZvbnQtc2l6ZTogMTNweDtcbi8vICAgbGluZS1oZWlnaHQ6IDEycHg7XG4vLyAgIGNvbG9yOiAjNjA2QTc0O1xuLy8gICB3aWR0aDogYXV0bztcbi8vICAgbWluLXdpZHRoOiAxNjVweDtcblxuXG4vLyB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAvLyAubWF0LW1kYy1jaGVja2JveCB7XG4vLyAvLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIC8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gLy8gICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuLy8gLy8gICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCOyAgLyogw5DCoMOQwrDDkMK8w5DCusOQwrAgw5HCh8OQwrXDkMK6w5DCscOQwr7DkMK6w5HCgcOQwrAgKi9cbi8vIC8vICAgYmFja2dyb3VuZDogI0Y3RjlGQzsgIC8qIMOQwqTDkMK+w5DCvSDDkcKHw5DCtcOQwrrDkMKxw5DCvsOQwrrDkcKBw5DCsCAqL1xuLy8gLy8gICB3aWR0aDogMThweDsgIC8qIMOQwqjDkMK4w5HCgMOQwrjDkMK9w5DCsCDDkcKHw5DCtcOQwrrDkMKxw5DCvsOQwrrDkcKBw5DCsCAqL1xuLy8gLy8gICBoZWlnaHQ6IDE4cHg7ICAvKiDDkMKSw5HCi8ORwoHDkMK+w5HCgsOQwrAgw5HCh8OQwrXDkMK6w5DCscOQwr7DkMK6w5HCgcOQwrAgKi9cbi8vIC8vICAgZGlzcGxheTogZmxleDtcbi8vIC8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAvLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAvLyB9XG5cbi8vIC8qIMOQwqHDkMK6w5HCgMORwovDkMKyw5DCsMOQwrXDkMK8IMOQwrPDkMKww5DCu8OQwr7DkcKHw5DCusORwoMgKi9cbi8vIC5tYXQtbWRjLWNoZWNrYm94LWNoZWNrZWQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJrLXBhdGgge1xuLy8gICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4vLyB9XG5cblxuLy8gLy8gLm1hdC1tZGMtY2hlY2tib3ggLm1kYy1mb3JtLWZpZWxke1xuLy8gLy8gICBkaXNwbGF5OiBub25lO1xuLy8gLy8gfVxuXG4vLyAubWF0LW1kYy1jaGVja2JveC1jaGVja2VkIC5tZGMtZm9ybS1maWVsZCAubWRjLWNoZWNrYm94IHtcbi8vICAgY29udGVudDogXCJcIjtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB3aWR0aDogOXB4OyAgIC8qIMOQwqjDkMK4w5HCgMOQwrjDkMK9w5DCsCDDkMK6w5DCssOQwrDDkMK0w5HCgMOQwrDDkcKCw5DCsCAqL1xuLy8gICBoZWlnaHQ6IDlweDsgIC8qIMOQwpLDkcKLw5HCgcOQwr7DkcKCw5DCsCDDkMK6w5DCssOQwrDDkMK0w5HCgMOQwrDDkcKCw5DCsCAqL1xuLy8gICB0b3A6IDUwJTsgICAgIC8qIMOQwqbDkMK1w5DCvcORwoLDkcKAw5DCuMORwoDDkMK+w5DCssOQwrDDkMK9w5DCuMOQwrUgw5DCv8OQwr4gw5DCssOQwrXDkcKAw5HCgsOQwrjDkMK6w5DCsMOQwrvDkMK4ICovXG4vLyAgIGxlZnQ6IDUwJTsgICAgLyogw5DCpsOQwrXDkMK9w5HCgsORwoDDkMK4w5HCgMOQwr7DkMKyw5DCsMOQwr3DkMK4w5DCtSDDkMK/w5DCviDDkMKzw5DCvsORwoDDkMK4w5DCt8OQwr7DkMK9w5HCgsOQwrDDkMK7w5DCuCAqL1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgIC8qIMOQwqbDkMK1w5DCvcORwoLDkcKAw5DCuMORwoDDkcKDw5DCtcOQwrwgw5HCjcOQwrvDkMK1w5DCvMOQwrXDkMK9w5HCgiAqL1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgIC8qIMOQwqbDkMKyw5DCtcORwoIgw5DCusOQwrLDkMKww5DCtMORwoDDkMKww5HCgsOQwrAgKi9cbi8vICAgYm9yZGVyLXJhZGl1czogMDsgIC8qIMOQwqPDkMKxw5DCuMORwoDDkMKww5DCtcOQwrwgw5HCgcOQwrrDkcKAw5HCg8OQwrPDkMK7w5DCtcOQwr3DkMK4w5DCtSwgw5HCh8ORwoLDkMK+w5DCscORwosgw5DCusOQwrLDkMKww5DCtMORwoDDkMKww5HCgiDDkMKxw5HCi8OQwrsgw5HCg8OQwrPDkMK7w5DCvsOQwrLDkcKLw5DCvCAqL1xuLy8gfVxuXG4vLyAvKiDDkMKfw5DCvsOQwrfDkMK4w5HChsOQwrjDkMK+w5DCvcOQwrjDkcKAw5DCvsOQwrLDkMKww5DCvcOQwrjDkMK1IMOQwrrDkMKyw5DCsMOQwrTDkcKAw5DCsMORwoLDkMKwICovXG5cblxuLy8gLm1hdC1tZGMtY2hlY2tib3gtY2hlY2tlZCAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kOjphZnRlciB7XG4vLyAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgd2lkdGg6IDlweDsgICAvKiDDkMKow5DCuMORwoDDkMK4w5DCvcOQwrAgw5DCusOQwrLDkMKww5DCtMORwoDDkMKww5HCgsOQwrAgKi9cbi8vICAgaGVpZ2h0OiA5cHg7ICAvKiDDkMKSw5HCi8ORwoHDkMK+w5HCgsOQwrAgw5DCusOQwrLDkMKww5DCtMORwoDDkMKww5HCgsOQwrAgKi9cbi8vICAgdG9wOiA1MCU7ICAgICAvKiDDkMKmw5DCtcOQwr3DkcKCw5HCgMOQwrjDkcKAw5DCvsOQwrLDkMKww5DCvcOQwrjDkMK1IMOQwr/DkMK+IMOQwrLDkMK1w5HCgMORwoLDkMK4w5DCusOQwrDDkMK7w5DCuCAqL1xuLy8gICBsZWZ0OiA1MCU7ICAgIC8qIMOQwqbDkMK1w5DCvcORwoLDkcKAw5DCuMORwoDDkMK+w5DCssOQwrDDkMK9w5DCuMOQwrUgw5DCv8OQwr4gw5DCs8OQwr7DkcKAw5DCuMOQwrfDkMK+w5DCvcORwoLDkMKww5DCu8OQwrggKi9cbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICAvKiDDkMKmw5DCtcOQwr3DkcKCw5HCgMOQwrjDkcKAw5HCg8OQwrXDkMK8IMORwo3DkMK7w5DCtcOQwrzDkMK1w5DCvcORwoIgKi9cbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICAvKiDDkMKmw5DCssOQwrXDkcKCIMOQwrrDkMKyw5DCsMOQwrTDkcKAw5DCsMORwoLDkMKwICovXG4vLyAgIGJvcmRlci1yYWRpdXM6IDA7ICAvKiDDkMKjw5DCscOQwrjDkcKAw5DCsMOQwrXDkMK8IMORwoHDkMK6w5HCgMORwoPDkMKzw5DCu8OQwrXDkMK9w5DCuMOQwrUsIMORwofDkcKCw5DCvsOQwrHDkcKLIMOQwrrDkMKyw5DCsMOQwrTDkcKAw5DCsMORwoIgw5DCscORwovDkMK7IMORwoPDkMKzw5DCu8OQwr7DkMKyw5HCi8OQwrwgKi9cbi8vIH1cblxuLy8gLyogw5DCoMOQwrDDkMK8w5DCusOQwrAgw5DCuCDDkcKEw5DCvsOQwr0gw5HCh8OQwrXDkMK6w5DCscOQwr7DkMK6w5HCgcOQwrAgw5DCv8ORwoDDkMK4IMOQwr3DkMKww5DCssOQwrXDkMK0w5DCtcOQwr3DkMK4w5DCuCAqL1xuLy8gLm1hdC1tZGMtY2hlY2tib3g6aG92ZXIgLm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNFMEU1RUI7IC8qIMOQwqbDkMKyw5DCtcORwoIgw5HChMOQwr7DkMK9w5DCsCDDkMK/w5HCgMOQwrggw5DCvcOQwrDDkMKyw5DCtcOQwrTDkMK1w5DCvcOQwrjDkMK4ICovXG4vLyB9XG5cbi8vIC5tYXQtbWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwICFpbXBvcnRhbnQ7IC8qIMOQwpfDkMK1w5DCu8OQwrXDkMK9w5HCi8OQwrkgw5HChMOQwr7DkMK9ICovXG4vLyB9XG5cbi8vIC5tYXQtbWRjLWNoZWNrYm94LWNoZWNrZWQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJrLXBhdGgge1xuLy8gICBzdHJva2U6IGJsYWNrICFpbXBvcnRhbnQ7IC8qIMOQwpHDkMK1w5DCu8OQwrDDkcKPIMOQwrPDkMKww5DCu8OQwr7DkcKHw5DCusOQwrAgKi9cbi8vIH1cblxuLy8gLm1hdC1tZGMtY2hlY2tib3g6aG92ZXIgLm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCB7XG4vLyAgIG9wYWNpdHk6IDAuNiAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAubWF0LW1kYy1jaGVja2JveCB7XG4vLyAgIC0tbWRjLWNoZWNrYm94LWRpc2FibGVkLXNlbGVjdGVkLWljb24tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IC8qIMOQwqbDkMKyw5DCtcORwoIgw5DCuMOQwrrDkMK+w5DCvcOQwrrDkMK4IMOQwrTDkMK7w5HCjyDDkMKyw5HCi8OQwrHDkcKAw5DCsMOQwr3DkMK9w5DCvsOQwrPDkMK+IMORwofDkMK1w5DCusOQwrHDkMK+w5DCusORwoHDkMKwIMOQwrIgZGlzYWJsZWQgw5HCgcOQwr7DkcKBw5HCgsOQwr7DkcKPw5DCvcOQwrjDkMK4ICovXG4vLyAgIC0tbWRjLWNoZWNrYm94LWRpc2FibGVkLXVuc2VsZWN0ZWQtaWNvbi1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgLyogw5DCpsOQwrLDkMK1w5HCgiDDkMK4w5DCusOQwr7DkMK9w5DCusOQwrggw5DCtMOQwrvDkcKPIMOQwr3DkMK1w5DCssORwovDkMKxw5HCgMOQwrDDkMK9w5DCvcOQwr7DkMKzw5DCviDDkcKHw5DCtcOQwrrDkMKxw5DCvsOQwrrDkcKBw5DCsCDDkMKyIGRpc2FibGVkIMORwoHDkMK+w5HCgcORwoLDkMK+w5HCj8OQwr3DkMK4w5DCuCAqL1xuLy8gICAtLW1kYy1jaGVja2JveC1zZWxlY3RlZC1jaGVja21hcmstY29sb3I6ICNmZmY7IC8qIMOQwqbDkMKyw5DCtcORwoIgw5DCs8OQwrDDkMK7w5DCvsORwofDkMK6w5DCuCDDkMKyIMOQwrLDkcKLw5DCscORwoDDkMKww5DCvcOQwr3DkMK+w5DCvCDDkcKHw5DCtcOQwrrDkMKxw5DCvsOQwrrDkcKBw5DCtSAqL1xuLy8gICAtLW1kYy1jaGVja2JveC1zZWxlY3RlZC1mb2N1cy1pY29uLWNvbG9yOiBibHVlOyAvKiDDkMKmw5DCssOQwrXDkcKCIMOQwrjDkMK6w5DCvsOQwr3DkMK6w5DCuCDDkMKyw5HCi8OQwrHDkcKAw5DCsMOQwr3DkMK9w5DCvsOQwrPDkMK+IMORwofDkMK1w5DCusOQwrHDkMK+w5DCusORwoHDkMKwIMOQwr/DkcKAw5DCuCDDkcKEw5DCvsOQwrrDkcKDw5HCgcOQwrUgKi9cbi8vICAgLS1tZGMtY2hlY2tib3gtc2VsZWN0ZWQtaG92ZXItaWNvbi1jb2xvcjogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7IC8qIMOQwqbDkMKyw5DCtcORwoIgw5DCuMOQwrrDkMK+w5DCvcOQwrrDkMK4IMOQwrLDkcKLw5DCscORwoDDkMKww5DCvcOQwr3DkMK+w5DCs8OQwr4gw5HCh8OQwrXDkMK6w5DCscOQwr7DkMK6w5HCgcOQwrAgw5DCv8ORwoDDkMK4IMOQwr3DkMKww5DCssOQwrXDkMK0w5DCtcOQwr3DkMK4w5DCuCAqL1xuLy8gICAtLW1kYy1jaGVja2JveC1zZWxlY3RlZC1pY29uLWNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTsgLyogw5DCpsOQwrLDkMK1w5HCgiDDkMK4w5DCusOQwr7DkMK9w5DCusOQwrggw5DCtMOQwrvDkcKPIMOQwrLDkcKLw5DCscORwoDDkMKww5DCvcOQwr3DkMK+w5DCs8OQwr4gw5HCh8OQwrXDkMK6w5DCscOQwr7DkMK6w5HCgcOQwrAgKi9cbi8vICAgLS1tZGMtY2hlY2tib3gtc2VsZWN0ZWQtcHJlc3NlZC1pY29uLWNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTsgLyogw5DCpsOQwrLDkMK1w5HCgiDDkMK4w5DCusOQwr7DkMK9w5DCusOQwrggw5DCssORwovDkMKxw5HCgMOQwrDDkMK9w5DCvcOQwr7DkMKzw5DCviDDkcKHw5DCtcOQwrrDkMKxw5DCvsOQwrrDkcKBw5DCsCDDkMK/w5HCgMOQwrggw5DCvcOQwrDDkMK2w5DCsMORwoLDkMK4w5DCuCAqL1xuLy8gICAtLW1kYy1jaGVja2JveC11bnNlbGVjdGVkLWZvY3VzLWljb24tY29sb3I6ICMyMTIxMjE7IC8qIMOQwqbDkMKyw5DCtcORwoIgw5DCuMOQwrrDkMK+w5DCvcOQwrrDkMK4IMOQwrTDkMK7w5HCjyDDkMK9w5DCtcOQwrLDkcKLw5DCscORwoDDkMKww5DCvcOQwr3DkMK+w5DCs8OQwr4gw5HCh8OQwrXDkMK6w5DCscOQwr7DkMK6w5HCgcOQwrAgw5DCv8ORwoDDkMK4IMORwoTDkMK+w5DCusORwoPDkcKBw5DCtSAqL1xuLy8gICAtLW1kYy1jaGVja2JveC11bnNlbGVjdGVkLWhvdmVyLWljb24tY29sb3I6ICMyMTIxMjE7IC8qIMOQwqbDkMKyw5DCtcORwoIgw5DCuMOQwrrDkMK+w5DCvcOQwrrDkMK4IMOQwrTDkMK7w5HCjyDDkMK9w5DCtcOQwrLDkcKLw5DCscORwoDDkMKww5DCvcOQwr3DkMK+w5DCs8OQwr4gw5HCh8OQwrXDkMK6w5DCscOQwr7DkMK6w5HCgcOQwrAgw5DCv8ORwoDDkMK4IMOQwr3DkMKww5DCssOQwrXDkMK0w5DCtcOQwr3DkMK4w5DCuCAqL1xuLy8gICAtLW1kYy1jaGVja2JveC11bnNlbGVjdGVkLWljb24tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IC8qIMOQwqbDkMKyw5DCtcORwoIgw5DCuMOQwrrDkMK+w5DCvcOQwrrDkMK4IMOQwrTDkMK7w5HCjyDDkMK9w5DCtcOQwrLDkcKLw5DCscORwoDDkMKww5DCvcOQwr3DkMK+w5DCs8OQwr4gw5HCh8OQwrXDkMK6w5DCscOQwr7DkMK6w5HCgcOQwrAgKi9cbi8vICAgLS1tZGMtY2hlY2tib3gtdW5zZWxlY3RlZC1wcmVzc2VkLWljb24tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IC8qIMOQwqbDkMKyw5DCtcORwoIgw5DCuMOQwrrDkMK+w5DCvcOQwrrDkMK4IMOQwrTDkMK7w5HCjyDDkMK9w5DCtcOQwrLDkcKLw5DCscORwoDDkMKww5DCvcOQwr3DkMK+w5DCs8OQwr4gw5HCh8OQwrXDkMK6w5DCscOQwr7DkMK6w5HCgcOQwrAgw5DCv8ORwoDDkMK4IMOQwr3DkMKww5DCtsOQwrDDkcKCw5DCuMOQwrggKi9cbi8vICAgLS1tZGMtY2hlY2tib3gtc2VsZWN0ZWQtZm9jdXMtc3RhdGUtbGF5ZXItY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpOyAvKiDDkMKmw5DCssOQwrXDkcKCIMORwoHDkMK7w5DCvsORwo8gw5HChMOQwr7DkMK6w5HCg8ORwoHDkMKwIMOQwrTDkMK7w5HCjyDDkMKyw5HCi8OQwrHDkcKAw5DCsMOQwr3DkMK9w5DCvsOQwrPDkMK+IMORwofDkMK1w5DCusOQwrHDkMK+w5DCusORwoHDkMKwICovXG4vLyAgIC0tbWRjLWNoZWNrYm94LXNlbGVjdGVkLWhvdmVyLXN0YXRlLWxheWVyLWNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTsgLyogw5DCpsOQwrLDkMK1w5HCgiDDkcKBw5DCu8OQwr7DkcKPIMOQwr3DkMKww5DCssOQwrXDkMK0w5DCtcOQwr3DkMK4w5HCjyDDkMK0w5DCu8ORwo8gw5DCssORwovDkMKxw5HCgMOQwrDDkMK9w5DCvcOQwr7DkMKzw5DCviDDkcKHw5DCtcOQwrrDkMKxw5DCvsOQwrrDkcKBw5DCsCAqL1xuLy8gICAtLW1kYy1jaGVja2JveC1zZWxlY3RlZC1wcmVzc2VkLXN0YXRlLWxheWVyLWNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTsgLyogw5DCpsOQwrLDkMK1w5HCgiDDkcKBw5DCu8OQwr7DkcKPIMOQwr3DkMKww5DCtsOQwrDDkcKCw5DCuMORwo8gw5DCtMOQwrvDkcKPIMOQwrLDkcKLw5DCscORwoDDkMKww5DCvcOQwr3DkMK+w5DCs8OQwr4gw5HCh8OQwrXDkMK6w5DCscOQwr7DkMK6w5HCgcOQwrAgKi9cbi8vICAgLS1tZGMtY2hlY2tib3gtdW5zZWxlY3RlZC1mb2N1cy1zdGF0ZS1sYXllci1jb2xvcjogYmxhY2s7IC8qIMOQwqbDkMKyw5DCtcORwoIgw5HCgcOQwrvDkMK+w5HCjyDDkcKEw5DCvsOQwrrDkcKDw5HCgcOQwrAgw5DCtMOQwrvDkcKPIMOQwr3DkMK1w5DCssORwovDkMKxw5HCgMOQwrDDkMK9w5DCvcOQwr7DkMKzw5DCviDDkcKHw5DCtcOQwrrDkMKxw5DCvsOQwrrDkcKBw5DCsCAqL1xuLy8gICAtLW1kYy1jaGVja2JveC11bnNlbGVjdGVkLWhvdmVyLXN0YXRlLWxheWVyLWNvbG9yOiBibGFjazsgLyogw5DCpsOQwrLDkMK1w5HCgiDDkcKBw5DCu8OQwr7DkcKPIMOQwr3DkMKww5DCssOQwrXDkMK0w5DCtcOQwr3DkMK4w5HCjyDDkMK0w5DCu8ORwo8gw5DCvcOQwrXDkMKyw5HCi8OQwrHDkcKAw5DCsMOQwr3DkMK9w5DCvsOQwrPDkMK+IMORwofDkMK1w5DCusOQwrHDkMK+w5DCusORwoHDkMKwICovXG4vLyAgIC0tbWRjLWNoZWNrYm94LXVuc2VsZWN0ZWQtcHJlc3NlZC1zdGF0ZS1sYXllci1jb2xvcjogYmxhY2s7IC8qIMOQwqbDkMKyw5DCtcORwoIgw5HCgcOQwrvDkMK+w5HCjyDDkMK9w5DCsMOQwrbDkMKww5HCgsOQwrjDkcKPIMOQwrTDkMK7w5HCjyDDkMK9w5DCtcOQwrLDkcKLw5DCscORwoDDkMKww5DCvcOQwr3DkMK+w5DCs8OQwr4gw5HCh8OQwrXDkMK6w5DCscOQwr7DkMK6w5HCgcOQwrAgKi9cbi8vIH1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.module */ 841);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.interceptor */ 5245);
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.interceptor */ 8678);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/ru */ 7566);
/* harmony import */ var _page_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-title.service */ 4265);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-scrollbar */ 4091);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader/loader.component */ 7220);
/* harmony import */ var _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/loader.interceptor */ 4933);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ 3887);



















class AppModule {
  constructor() {
    (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_10__["default"]);
  }
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
        useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_7__.LoadingInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
        useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_4__.TokenInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
        useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_3__.ErrorInterceptor,
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.LOCALE_ID,
        useValue: 'ru'
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.TitleStrategy,
        useClass: _page_title_service__WEBPACK_IMPORTED_MODULE_5__.PageTitleService
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_17__.NgScrollbarModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, ngx_scrollbar__WEBPACK_IMPORTED_MODULE_17__.NgScrollbarModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule]
  });
})();

/***/ }),

/***/ 841:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../material/material.module */ 551);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 3592);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ 2196);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logout/logout.component */ 5494);
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/confirm/confirm.component */ 3260);
/* harmony import */ var _components_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/password-recovery/password-recovery.component */ 1268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);











class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(t) {
      return new (t || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__.LogoutComponent, _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmComponent, _components_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_5__.PasswordRecoveryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
  });
})();

/***/ }),

/***/ 3260:
/*!**************************************************************!*\
  !*** ./src/app/auth/components/confirm/confirm.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmComponent: () => (/* binding */ ConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _material_services_popup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material/services/popup.service */ 1784);
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register.service */ 3344);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ 3273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);









function ConfirmComponent_p_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u043E\u0447\u043D\u044B\u0439 \u043A\u043E\u0434 \u043A\u043E\u0434 \u0435\u0449\u0435 \u0440\u0430\u0437, \u0447\u0435\u0440\u0435\u0437 ", ctx_r0.formattedTime, "");
  }
}
function ConfirmComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmComponent_p_27_Template_p_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.reSendCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/register"];
};
class ConfirmComponent {
  constructor(route, fb, router, popup, register, userService) {
    this.route = route;
    this.fb = fb;
    this.router = router;
    this.popup = popup;
    this.register = register;
    this.userService = userService;
    this.loading = false;
    this.remainingTime = 120; // 2 минуты
    this.checkForm = this.fb.group({
      code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    if (!this.uid) {
      this.router.navigate(['/register']);
    }
    this.startTimer();
  }
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  restartTimer() {
    // Сбросить оставшееся время и перезапустить таймер
    this.remainingTime = 120; // 2 минуты
    clearInterval(this.timer); // остановить старый таймер
    this.startTimer(); // начать новый таймер
  }

  get formattedTime() {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  onSubmitCode() {
    if (this.remainingTime > 0) {
      alert("Код отправлен!");
    } else {
      alert("Время истекло!");
    }
  }
  startTimer() {
    this.timer = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }
  doCheck() {
    if (!this.checkForm.valid) {
      let err = {
        'error': {
          'error_message': 'Все поля обязательны к заполнению'
        }
      };
      this.popup.error(err);
      return;
    }
    this.loading = true;
    const uid = this.uid;
    const code = this.checkForm.controls['code'].value;
    this.register.confirm({
      uid,
      code
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.loading = false)).subscribe({
      next: id => this.processResult(id),
      error: err => this.popup.error(err)
    });
  }
  processResult(id) {
    this.id = id; // вдруг пригодится потом
    this.router.navigate(['/login']);
  }
  reSendCode() {
    this.userService.userSendCode({
      body: {
        uid: this.uid
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(data => {})).subscribe({
      next: data => {
        this.restartTimer();
      },
      error: err => {}
    });
  }
  static {
    this.ɵfac = function ConfirmComponent_Factory(t) {
      return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_material_services_popup_service__WEBPACK_IMPORTED_MODULE_0__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_register_service__WEBPACK_IMPORTED_MODULE_1__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ConfirmComponent,
      selectors: [["app-confirm"]],
      decls: 30,
      vars: 5,
      consts: [[1, "content"], [1, "user-module"], [1, "auth-bg"], [1, "auth-form"], [1, "hdr"], [1, "logo"], [1, "sep"], [1, "back", 3, "routerLink"], [1, "fm-body"], [3, "formGroup", "ngSubmit"], [1, "form-row", "inline", "sp"], [1, "form-item"], [1, "form-label"], [1, "form-input"], ["type", "text", "formControlName", "code", "value", "", "placeholder", "\u2014"], ["type", "submit", 2, "display", "none"], [1, "btn", "alt", 3, "click"], [1, "form-row", "inline"], [4, "ngIf"], ["style", "cursor: pointer; color: var(--accent,  #DB563B);", 3, "click", 4, "ngIf"], [2, "cursor", "pointer", "color", "var(--accent,  #DB563B)", 3, "click"]],
      template: function ConfirmComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 5)(6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u043E\u0434\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "form", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ConfirmComponent_Template_form_ngSubmit_10_listener() {
            return ctx.doCheck();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " \u0414\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u0431\u044B\u043B \u0432\u044B\u0441\u043B\u0430\u043D \u043F\u0440\u043E\u0432\u0435\u0440\u043E\u0447\u043D\u044B\u0439 \u043A\u043E\u0434. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u0434 \u0432 \u043F\u043E\u043B\u0435 \u043D\u0438\u0436\u0435.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " \u0415\u0441\u043B\u0438 \u043F\u0438\u0441\u044C\u043C\u043E \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u0438 \u0435\u0433\u043E \u043D\u0435\u0442 \u0432 \u0441\u043F\u0430\u043C\u0435, \u0442\u043E \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043E\u0447\u043D\u044B\u0439 \u043A\u043E\u0434:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfirmComponent_Template_span_click_23_listener() {
            return ctx.doCheck();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u041F\u043E\u0434\u0432\u0435\u0440\u0434\u0438\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ConfirmComponent_p_26_Template, 2, 1, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ConfirmComponent_p_27_Template, 2, 0, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.checkForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.remainingTime !== 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.remainingTime === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3592:
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth.service */ 3767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _material_services_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../material/services/popup.service */ 1784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2587);








const _c0 = function () {
  return ["/password_recovery"];
};
const _c1 = function () {
  return ["/register"];
};
class LoginComponent {
  constructor(fb, auth, router, popup, dialog, route) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.popup = popup;
    this.dialog = dialog;
    this.route = route;
    this.loading = false;
    this.passwordVisible = false;
    this.loginForm = this.fb.group({
      login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  ngOnInit() {}
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  doLogin() {
    console.log(this.loginForm.valid);
    if (!this.loginForm.valid) {
      let err = {
        'error': {
          'error_message': 'Не заполнены обязательные поля'
        }
      };
      this.popup.error(err);
      return;
    }
    this.loading = true;
    const login = this.loginForm.controls['login'].value;
    const password = this.loginForm.controls['password'].value;
    this.auth.login(login, password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.loading = false)).subscribe({
      next: () => this.processLogin(),
      error: err => this.popup.error(err)
    });
  }
  processLogin() {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'];
    if (returnUrl) {
      this.router.navigateByUrl(returnUrl);
    } else {
      this.router.navigate(['/pages']);
    }
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_material_services_popup_service__WEBPACK_IMPORTED_MODULE_1__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 42,
      vars: 8,
      consts: [[1, "content"], [1, "user-module"], [1, "auth-bg"], [1, "auth-form"], [1, "hdr"], [1, "logo"], [1, "fm-body"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-row", "inline"], [1, "form-item"], [1, "form-label"], [1, "form-input"], ["type", "text", "name", "login", "formControlName", "login", "placeholder", "\u2014", "autocomplete", "off"], ["name", "password", "formControlName", "password", "placeholder", "\u2014", "autocomplete", "off", 3, "type"], ["type", "button", 3, "click"], [1, "forgot", 3, "routerLink"], [1, "helper"], [1, "btn", 3, "click"], [1, "form-hr"], [1, "desc"], [1, "btn", "alt", 3, "routerLink"], ["type", "submit", 2, "display", "none"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6)(7, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
            return ctx.doLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u041B\u043E\u0433\u0438\u043D:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9)(15, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u041F\u0430\u0440\u043E\u043B\u044C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() {
            return ctx.togglePasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "span", 15)(23, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u0412\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 9)(28, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_28_listener() {
            return ctx.doLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\u0412\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 8)(32, "div", 9)(33, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0441\u0438\u0441\u0442\u0435\u043C\u0435,");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " \u043F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u0431\u044B\u0441\u0442\u0440\u0443\u044E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 9)(38, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.passwordVisible ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.passwordVisible ? "btn-password password-visible" : " btn-password toggle-password");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
      styles: ["@charset \"UTF-8\";\n.form-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #666;\n}\n\n.btn-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  \n\n  color: transparent !important;\n  font-size: 0 !important;\n  \n\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-size: contain;\n  background-color: #666; \n\n}\n\n.toggle-password[_ngcontent-%COMP%] {\n  mask-image: url('pic-btn-eye-open.svg');\n  -webkit-mask-image: url('pic-btn-eye-open.svg');\n}\n\n.password-visible[_ngcontent-%COMP%] {\n  mask-image: url('pic-btn-eye-close.svg');\n  -webkit-mask-image: url('pic-btn-eye-close.svg');\n}\n\n.toggle-password[_ngcontent-%COMP%]:hover, .password-visible[_ngcontent-%COMP%]:hover {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGtCQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUEsRUFBQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsdUNBQUE7RUFDQSwrQ0FBQTtBQUVKOztBQUNFO0VBQ0Usd0NBQUE7RUFDQSxnREFBQTtBQUVKOztBQUNFO0VBQ0Usc0JBQUE7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWlucHV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAudG9nZ2xlLXBhc3N3b3JkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxuXG4gIC5idG4tcGFzc3dvcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAvKiDDkMKiw5DCtcOQwrrDkcKBw5HCgiDDkMK3w5DCsMOQwrzDkMK1w5DCvcORwo/DkMK1w5DCvCDDkMK9w5DCsCDDkMK4w5DCusOQwr7DkMK9w5DCusORwoMgKi9cbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDAgIWltcG9ydGFudDtcbiAgICAvKiDDkMKjw5DCv8ORwoDDkMKww5DCssOQwrvDkMK1w5DCvcOQwrjDkMK1IMORwobDkMKyw5DCtcORwoLDkMK+w5DCvCDDkcKHw5DCtcORwoDDkMK1w5DCtyDDkMK8w5DCsMORwoHDkMK6w5HCgyAqL1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1hc2stc2l6ZTogY29udGFpbjtcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjsgLyogw5DCpsOQwrLDkMK1w5HCgiDDkMK4w5DCusOQwr7DkMK9w5DCusOQwrggKi9cbiAgfVxuXG4gIC50b2dnbGUtcGFzc3dvcmQge1xuICAgIG1hc2staW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1leWUtb3Blbi5zdmcpO1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLWV5ZS1vcGVuLnN2Zyk7XG4gIH1cblxuICAucGFzc3dvcmQtdmlzaWJsZSB7XG4gICAgbWFzay1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLWV5ZS1jbG9zZS5zdmcpO1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLWV5ZS1jbG9zZS5zdmcpO1xuICB9XG5cbiAgLnRvZ2dsZS1wYXNzd29yZDpob3ZlciwgLnBhc3N3b3JkLXZpc2libGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5494:
/*!************************************************************!*\
  !*** ./src/app/auth/components/logout/logout.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutComponent: () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth.service */ 3767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




class LogoutComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  ngOnInit() {
    this.auth.logout().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.delay)(1000)).subscribe(() => this.router.navigateByUrl('/'));
  }
  static {
    this.ɵfac = function LogoutComponent_Factory(t) {
      return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      decls: 9,
      vars: 0,
      consts: [[1, "content"], [1, "user-module"], [1, "auth-bg"], [1, "auth-form"], [1, "hdr"], [1, "logo"], [1, "sep"]],
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 5)(6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1268:
/*!**********************************************************************************!*\
  !*** ./src/app/auth/components/password-recovery/password-recovery.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordRecoveryComponent: () => (/* binding */ PasswordRecoveryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 3767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _material_services_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../material/services/popup.service */ 1784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ 3273);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);











function PasswordRecoveryComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PasswordRecoveryComponent_form_7_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.getCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u041B\u043E\u0433\u0438\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9)(8, "div", 10)(9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PasswordRecoveryComponent_form_7_Template_span_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.getCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u0434 \u0434\u043B\u044F \u0441\u043C\u0435\u043D\u043D\u044B \u043F\u0430\u0440\u043E\u043B\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.getCodeForm);
  }
}
function PasswordRecoveryComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PasswordRecoveryComponent_form_8_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onResetPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u041B\u043E\u0433\u0438\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 10)(8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u041A\u043E\u0434:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 18)(13, "div", 10)(14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PasswordRecoveryComponent_form_8_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.togglePasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 10)(20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PasswordRecoveryComponent_form_8_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.togglePasswordVisibility());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 9)(26, "div", 10)(27, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PasswordRecoveryComponent_form_8_Template_span_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.onResetPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.resetPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.passwordVisible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r1.passwordVisible ? "btn-password password-visible" : " btn-password toggle-password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r1.passwordVisible ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r1.passwordVisible ? "btn-password password-visible" : " btn-password toggle-password");
  }
}
class PasswordRecoveryComponent {
  constructor(fb, auth, router, popup, dialog, route, userService, snackBar) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.popup = popup;
    this.dialog = dialog;
    this.route = route;
    this.userService = userService;
    this.snackBar = snackBar;
    this.snackBarWithShortDuration = {
      duration: 1000
    };
    this.snackBarWithLongDuration = {
      duration: 3000
    };
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.loading = false;
    this.passwordVisible = false;
    this.getCodeForm = this.fb.group({
      login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
    this.resetPasswordForm = this.fb.group({
      login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      uid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  ngOnInit() {}
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  getCode() {
    this.userService.userSendResetCode({
      body: this.getCodeForm.value
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(services => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe({
      next: e => {
        this.snackBar.open(`Код отправлен на вашу почту`, undefined, this.snackBarWithShortDuration);
        this.resetPasswordForm.patchValue({
          login: this.getCodeForm.value.login,
          uid: e.uid
          // code: event.CODE.toString(),
        });
      },

      error: err => {
        this.snackBar.open(`Ошибка отправки проверочного кода: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
      }
    });
    // .subscribe((event: any) => {
    //   console.log(event);
    //   this.resetPasswordForm.patchValue({
    //     login: this.getCodeForm.value.login,
    //     uid: event.uid,
    //     // code: event.CODE.toString(),
    //   })
    // });
  }

  onResetPassword() {
    // this.resetPasswordForm.patchValue({
    //   code: this.resetPasswordForm.value.code.toString()
    // })
    this.userService.userResetPassword({
      body: this.resetPasswordForm.value
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(services => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe({
      next: e => {
        this.snackBar.open(`Пароль успешно изменен`, undefined, this.snackBarWithShortDuration);
        this.router.navigate(['/login']);
      },
      error: err => {
        this.snackBar.open(`Ошибка изменения пароля: ` + err.error.error_message, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  static {
    this.ɵfac = function PasswordRecoveryComponent_Factory(t) {
      return new (t || PasswordRecoveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_material_services_popup_service__WEBPACK_IMPORTED_MODULE_1__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PasswordRecoveryComponent,
      selectors: [["app-password-recovery"]],
      decls: 9,
      vars: 2,
      consts: [[1, "content"], [1, "user-module"], [1, "auth-bg"], [1, "auth-form"], [1, "hdr"], [1, "logo"], [1, "fm-body"], ["autocomplete", "off", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-row", "inline"], [1, "form-item"], [1, "form-label"], [1, "form-input"], ["formControlName", "login", "type", "text", "name", "login", "placeholder", "\u2014", "autocomplete", "off"], [1, "btn", 3, "click"], ["type", "submit", 2, "display", "none"], ["formControlName", "login", "type", "text", "name", "login", "placeholder", "\u2014", "autocomplete", "off", "readonly", ""], ["formControlName", "code", "type", "text", "name", "login", "placeholder", "\u2014", "autocomplete", "off"], [1, "form-row", "inline", "sp"], ["autocomplete", "off", "formControlName", "password", "placeholder", "", 3, "type"], ["type", "button", 3, "click"], ["autocomplete", "off", "formControlName", "confirm_password", "placeholder", "", 3, "type"]],
      template: function PasswordRecoveryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PasswordRecoveryComponent_form_7_Template, 13, 1, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PasswordRecoveryComponent_form_8_Template, 31, 7, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.resetPasswordForm.value.uid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.value.uid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
      styles: ["@charset \"UTF-8\";\n.form-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.btn-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: red;\n  width: 20px;\n  height: 20px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  \n\n  color: transparent !important;\n  font-size: 0 !important;\n  \n\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-size: contain;\n  background-color: #666; \n\n}\n\n.toggle-password[_ngcontent-%COMP%] {\n  mask-image: url('pic-btn-eye-open.svg');\n  -webkit-mask-image: url('pic-btn-eye-open.svg');\n}\n\n.password-visible[_ngcontent-%COMP%] {\n  mask-image: url('pic-btn-eye-close.svg');\n  -webkit-mask-image: url('pic-btn-eye-close.svg');\n}\n\n.toggle-password[_ngcontent-%COMP%]:hover, .password-visible[_ngcontent-%COMP%]:hover {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9jb21wb25lbnRzL3Bhc3N3b3JkLXJlY292ZXJ5L3Bhc3N3b3JkLXJlY292ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFBO0FBRUY7O0FBWUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUEsRUFBQSxnQkFBQTtBQVRKOztBQVlFO0VBQ0UsdUNBQUE7RUFDQSwrQ0FBQTtBQVRKOztBQVlFO0VBQ0Usd0NBQUE7RUFDQSxnREFBQTtBQVRKOztBQVlFO0VBQ0Usc0JBQUE7QUFUSiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4gIC8vIC50b2dnbGUtcGFzc3dvcmQge1xuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICByaWdodDogMTBweDtcbiAgLy8gICB0b3A6IDUwJTtcbiAgLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC8vICAgYmFja2dyb3VuZDogbm9uZTtcbiAgLy8gICBib3JkZXI6IG5vbmU7XG4gIC8vICAgY3Vyc29yOiBwb2ludGVyO1xuICAvLyAgIGNvbG9yOiAjNjY2O1xuICAvLyB9XG5cbiAgLmJ0bi1wYXNzd29yZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJlZDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgLyogw5DCosOQwrXDkMK6w5HCgcORwoIgw5DCt8OQwrDDkMK8w5DCtcOQwr3DkcKPw5DCtcOQwrwgw5DCvcOQwrAgw5DCuMOQwrrDkMK+w5DCvcOQwrrDkcKDICovXG4gICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwICFpbXBvcnRhbnQ7XG4gICAgLyogw5DCo8OQwr/DkcKAw5DCsMOQwrLDkMK7w5DCtcOQwr3DkMK4w5DCtSDDkcKGw5DCssOQwrXDkcKCw5DCvsOQwrwgw5HCh8OQwrXDkcKAw5DCtcOQwrcgw5DCvMOQwrDDkcKBw5DCusORwoMgKi9cbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hc2stcG9zaXRpb246IGNlbnRlcjtcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7IC8qIMOQwqbDkMKyw5DCtcORwoIgw5DCuMOQwrrDkMK+w5DCvcOQwrrDkMK4ICovXG4gIH1cblxuICAudG9nZ2xlLXBhc3N3b3JkIHtcbiAgICBtYXNrLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tZXllLW9wZW4uc3ZnKTtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1leWUtb3Blbi5zdmcpO1xuICB9XG5cbiAgLnBhc3N3b3JkLXZpc2libGUge1xuICAgIG1hc2staW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1leWUtY2xvc2Uuc3ZnKTtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1leWUtY2xvc2Uuc3ZnKTtcbiAgfVxuXG4gIC50b2dnbGUtcGFzc3dvcmQ6aG92ZXIsIC5wYXNzd29yZC12aXNpYmxlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2196:
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../validators */ 40);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/register.service */ 3344);
/* harmony import */ var _material_services_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../material/services/popup.service */ 1784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2587);









const _c0 = function () {
  return ["/auth"];
};
class RegisterComponent {
  constructor(fb, router, register, popup, dialog) {
    this.fb = fb;
    this.router = router;
    this.register = register;
    this.popup = popup;
    this.dialog = dialog;
    this.loading = false;
    this.registerForm = this.fb.group({
      company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      fio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      inn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _validators__WEBPACK_IMPORTED_MODULE_0__.innValidator]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _validators__WEBPACK_IMPORTED_MODULE_0__.emailValidator]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      password_confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
  }
  ngOnInit() {}
  checkAllFieldsFilled() {
    // Проверяем, что все поля формы заполнены
    return Object.keys(this.registerForm.controls).every(field => {
      const control = this.registerForm.get(field);
      return control?.value !== '';
    });
  }
  formatPhone(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    // Ограничиваем длину номера (например, 11 цифр для России)
    if (value.length > 11) {
      value = value.substring(0, 11);
    }
    value = '+7' + value.substring(1);
    this.registerForm.get('phone')?.setValue(value, {
      emitEvent: false
    }); // Обновляем форму
  }

  get _email() {
    return this.registerForm.get('email');
  }
  get _inn() {
    return this.registerForm.get('inn');
  }
  doRegister() {
    console.log(this.registerForm);
    console.log(this.registerForm.valid);
    if (!this.checkAllFieldsFilled()) {
      let err = {
        'error': {
          'error_message': 'Все поля обязательны к заполнению'
        }
      };
      this.popup.error(err);
      return;
    }
    // if ( !this.registerForm.valid ) {
    //   let err = {
    //     'error': {
    //       'error_message': 'Все поля обязательны к заполнению'
    //     }
    //   }
    //   this.popup.error(err);
    //   return;
    // }
    let error_message = [];
    if (this._email?.errors?.['email']) {
      error_message.push('E-mail введен не верно');
    }
    if (this._inn?.errors?.['inn']) {
      error_message.push('ИНН введен не верно');
    }
    if (error_message.length > 0) {
      let err = {
        'error': {
          'error_message': error_message
        }
      };
      this.popup.error(err);
      return;
    }
    this.loading = true;
    const company = this.registerForm.controls['company'].value;
    const fio = this.registerForm.controls['fio'].value;
    const phone = this.registerForm.controls['phone'].value;
    const inn = this.registerForm.controls['inn'].value;
    const email = this.registerForm.controls['email'].value;
    const password = this.registerForm.controls['password'].value;
    const password_confirm = this.registerForm.controls['password_confirm'].value;
    this.register.save({
      company,
      fio,
      phone,
      inn,
      email,
      password,
      password_confirm
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.loading = false)).subscribe({
      next: uid => this.processConfirm(uid),
      error: err => this.popup.error(err)
    });
  }
  processConfirm(uid) {
    this.router.navigate(['/confirm/' + uid]);
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_register_service__WEBPACK_IMPORTED_MODULE_1__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_material_services_popup_service__WEBPACK_IMPORTED_MODULE_2__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 58,
      vars: 3,
      consts: [[1, "content"], [1, "user-module"], [1, "auth-bg"], [1, "auth-form"], [1, "hdr"], [1, "logo"], [1, "sep"], [1, "back", 3, "routerLink"], [1, "fm-body"], [3, "formGroup", "ngSubmit"], [1, "form-row", "sp"], [1, "form-item"], [1, "form-label"], [1, "form-input"], ["type", "text", "formControlName", "company", "value", "", "placeholder", "\u2014"], [1, "form-row", "inline", "sp"], ["type", "text", "formControlName", "fio", "value", "", "placeholder", "\u2014"], ["type", "text", "formControlName", "phone", "value", "", "placeholder", "\u2014", 3, "input"], ["type", "text", "formControlName", "inn", "value", "", "placeholder", "\u2014"], ["type", "text", "formControlName", "email", "value", "", "placeholder", "\u2014"], ["type", "password", "formControlName", "password", "value", "", "placeholder", ""], ["type", "password", "formControlName", "password_confirm", "value", "", "placeholder", ""], [1, "form-row", "inline"], ["type", "submit", 2, "display", "none"], [1, "btn", "alt", 3, "click"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 5)(6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8)(10, "form", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_10_listener() {
            return ctx.doRegister();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438::");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15)(18, "div", 11)(19, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043B\u0438\u0446\u043E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 11)(24, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 13)(27, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_27_listener($event) {
            return ctx.formatPhone($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 15)(29, "div", 11)(30, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "\u0418\u041D\u041D:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 11)(35, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "E-mail:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 15)(40, "div", 11)(41, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 11)(46, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_54_listener() {
            return ctx.doRegister();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Submit");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.registerForm);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3767:
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../api/services/user.service */ 2270);



const TOKEN_INFO_KEY = 'com.cargodrom.token-info';
class AuthService {
  constructor(userService) {
    this.userService = userService;
    this.storage = window.localStorage; // window.sessionStorage;
    this.loadTokenFromStorage();
  }
  login(login, password) {
    return this.userService.userLogin({
      body: {
        login,
        password
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(res => this.tokenInfo = res), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.saveTokenToStorage()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => undefined));
  }
  isAuthenticated() {
    this.loadTokenFromStorage();
    return typeof this.tokenInfo?.token !== 'undefined';
  }
  logout() {
    this.tokenInfo = undefined;
    this.removeTokenFromLocalStorage();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined);
  }
  getToken() {
    return this.tokenInfo?.token;
  }
  loadTokenFromStorage() {
    const tokenInfoString = this.storage.getItem(TOKEN_INFO_KEY);
    if (!tokenInfoString) {
      this.tokenInfo = undefined;
      return;
    }
    try {
      const tokenInfo = JSON.parse(tokenInfoString);
      if (tokenInfo) {
        this.tokenInfo = tokenInfo;
      }
    } catch (e) {
      console.log(`unable to load token from local storage`, e);
    }
  }
  saveTokenToStorage() {
    this.storage.setItem(TOKEN_INFO_KEY, JSON.stringify(this.tokenInfo));
  }
  removeTokenFromLocalStorage() {
    this.storage.removeItem(TOKEN_INFO_KEY);
  }
  isTokenExpired() {
    if (this.tokenInfo?.token_expire) {
      try {
        const expireDate = new Date(this.tokenInfo?.token_expire);
        const now = new Date();
        return expireDate.getTime() - now.getTime() < 10000;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  refreshToken() {
    const body = {
      refresh_token: this.tokenInfo.refresh_token
    };
    return this.userService.userUpdateToken({
      body
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(res => this.tokenInfo = res), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(() => this.saveTokenToStorage()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(() => undefined));
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3344:
/*!***************************************************!*\
  !*** ./src/app/auth/services/register.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterService: () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/services/user.service */ 2270);



class RegisterService {
  constructor(userService) {
    this.userService = userService;
  }
  save(body) {
    return this.userService.userCreate({
      body
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.uid));
  }
  confirm(body) {
    return this.userService.userConfirm({
      body
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.id));
  }
  static {
    this.ɵfac = function RegisterService_Factory(t) {
      return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: RegisterService,
      factory: RegisterService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8037:
/*!************************************!*\
  !*** ./src/app/auth/user.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserGuard: () => (/* binding */ UserGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 3767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class UserGuard {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate(route, state) {
    const isAuthenticated = this.auth.isAuthenticated();
    if (isAuthenticated) {
      this.router.navigate(['/pages']);
      return false;
    }
    return !isAuthenticated;
  }
  static {
    this.ɵfac = function UserGuard_Factory(t) {
      return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserGuard,
      factory: UserGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5245:
/*!**************************************!*\
  !*** ./src/app/error.interceptor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/services/auth.service */ 3767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




class ErrorInterceptor {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(e => {
      if (e.status === 401) {
        const currentState = {
          returnUrl: this.router.url
        };
        this.auth.logout().subscribe(() => this.router.navigate(['/login'], {
          queryParams: currentState
        }));
      } else if (e.status === 403) {
        const currentState = {
          returnUrl: this.router.url
        };
        this.auth.logout().subscribe(() => this.router.navigate(['/pages'], {
          queryParams: currentState
        }));
      } else {}
      throw e;
    }));
  }
  static {
    this.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 4933:
/*!****************************************************!*\
  !*** ./src/app/interceptors/loader.interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingInterceptor: () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _loader_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader/loader.service */ 6780);




class LoadingInterceptor {
  constructor(loadingService) {
    this.loadingService = loadingService;
  }
  intercept(req, next) {
    this.loadingService.show();
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.loadingService.hide()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
      this.loadingService.hide();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err);
    }));
  }
  static {
    this.ɵfac = function LoadingInterceptor_Factory(t) {
      return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: LoadingInterceptor,
      factory: LoadingInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 7220:
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.service */ 6780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
// loader.component.ts
class LoaderComponent {
  constructor(loadingService) {
    this.loadingService = loadingService;
    this.isLoading = false;
    this.debugInfo = '';
  }
  ngOnInit() {
    console.log('[LoaderComponent] Component initialized');
    this.subscription = this.loadingService.isLoading$.subscribe(loading => {
      console.log(`[LoaderComponent] Loading state changed: ${loading}`);
      this.isLoading = loading;
      this.debugInfo = `Active: ${loading}`;
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-global-loader"]],
      decls: 1,
      vars: 1,
      consts: [["class", "global-loader", 4, "ngIf"], [1, "global-loader"], [1, "spinner"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 2, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".global-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n  transition: opacity 0.3s ease;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #3498db;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiLmdsb2JhbC1sb2FkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMzNDk4ZGI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6780:
/*!******************************************!*\
  !*** ./src/app/loader/loader.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class LoaderService {
  constructor() {
    this.activeRequests = 0;
    this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }
  show() {
    this.activeRequests++;
    if (this.activeRequests === 1) {
      this.isLoadingSubject.next(true);
    }
  }
  hide() {
    if (this.activeRequests > 0) this.activeRequests--;
    if (this.activeRequests === 0) {
      setTimeout(() => {
        if (this.activeRequests === 0) {
          this.isLoadingSubject.next(false);
        }
      }, 100); // Задержка скрытия
    }
  }

  static {
    this.ɵfac = function LoaderService_Factory(t) {
      return new (t || LoaderService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoaderService,
      factory: LoaderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7157:
/*!******************************************************************************!*\
  !*** ./src/app/material/components/editor-header/editor-header.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorHeaderComponent: () => (/* binding */ EditorHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var src_app_pages_services_navigation_history_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/services/navigation-history.service */ 1646);




function EditorHeaderComponent_a_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function EditorHeaderComponent_a_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.name);
  }
}
function EditorHeaderComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorHeaderComponent_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditorHeaderComponent_a_2_div_2_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EditorHeaderComponent_a_2_div_3_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isEditMode);
  }
}
function EditorHeaderComponent_a_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function EditorHeaderComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorHeaderComponent_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditorHeaderComponent_a_3_div_2_Template, 4, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isEditMode);
  }
}
function EditorHeaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0417\u0430\u043F\u0440\u043E\u0441 \u2116", ctx_r2.request == null ? null : ctx_r2.request.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.request == null ? null : ctx_r2.request.rate_contractor_name, " ");
  }
}
function EditorHeaderComponent_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorHeaderComponent_div_7_span_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function EditorHeaderComponent_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorHeaderComponent_div_7_span_5_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.goCalc());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0440\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function EditorHeaderComponent_div_7_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorHeaderComponent_div_7_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.onRemove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function EditorHeaderComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditorHeaderComponent_div_7_span_1_Template, 3, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorHeaderComponent_div_7_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.onSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EditorHeaderComponent_div_7_span_5_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EditorHeaderComponent_div_7_span_6_Template, 3, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorHeaderComponent_div_7_Template_span_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u043E\u0442\u043C\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isSend);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isEditMode && ctx_r3.isCalck);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isEditMode);
  }
}
const _c0 = [[["", "btns", ""]]];
const _c1 = ["[btns]"];
class EditorHeaderComponent {
  constructor(location, navigationHistoryService) {
    this.location = location;
    this.navigationHistoryService = navigationHistoryService;
    this.title = '';
    this.isEditMode = false;
    this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.calc = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isCalck = false;
    this.content = false;
    this.request = {};
    this.send = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isSend = false;
    this.backLink = '';
  }
  ngOnInit() {}
  onSave() {
    this.save.emit();
  }
  onRemove() {
    this.remove.emit();
  }
  goBack() {
    // this.location.back();
    this.navigationHistoryService.back(this.backLink);
  }
  goCalc() {
    this.calc.emit();
  }
  onSend() {
    this.send.emit();
  }
  static {
    this.ɵfac = function EditorHeaderComponent_Factory(t) {
      return new (t || EditorHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_pages_services_navigation_history_service__WEBPACK_IMPORTED_MODULE_0__.NavigationHistoryService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EditorHeaderComponent,
      selectors: [["app-editor-header"]],
      inputs: {
        title: "title",
        isEditMode: "isEditMode",
        name: "name",
        isCalck: "isCalck",
        content: "content",
        request: "request",
        isSend: "isSend",
        backLink: "backLink"
      },
      outputs: {
        save: "save",
        remove: "remove",
        calc: "calc",
        send: "send"
      },
      ngContentSelectors: _c1,
      decls: 8,
      vars: 4,
      consts: [[1, "subheader"], [1, "placer"], ["class", "title", 3, "click", 4, "ngIf"], ["class", "title", "style", "color:#DB563B", 3, "click", 4, "ngIf"], ["class", "title", "style", "border-left: 1px solid #C3CCD6; padding-left: 24px;", 4, "ngIf"], [1, "div", 2, "margin", "0 auto", "width", "1px"], ["class", "fn", 4, "ngIf"], [1, "title", 3, "click"], ["class", "req-fields", 4, "ngIf"], [1, "req-fields"], [1, "req"], [1, "title", 2, "color", "#DB563B", 3, "click"], [1, "title", 2, "border-left", "1px solid #C3CCD6", "padding-left", "24px"], [1, "fn"], ["class", "btn v send", 3, "click", 4, "ngIf"], [1, "btn", "v", "save", 3, "click"], ["class", "btn v calc", 3, "click", 4, "ngIf"], ["class", "btn v del", 3, "click", 4, "ngIf"], [1, "btn", "v", "cancel", 3, "click"], [1, "btn", "v", "send", 3, "click"], [1, "btn", "v", "calc", 3, "click"], [1, "btn", "v", "del", 3, "click"]],
      template: function EditorHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditorHeaderComponent_a_2_Template, 4, 3, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EditorHeaderComponent_a_3_Template, 3, 2, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditorHeaderComponent_div_4_Template, 4, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EditorHeaderComponent_div_7_Template, 10, 3, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.content);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.content);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.content);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.content);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2105:
/*!**********************************************************************!*\
  !*** ./src/app/material/components/paginator/paginator.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginatorComponent: () => (/* binding */ PaginatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 4646);






function PaginatorComponent_ng_container_1_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const limit_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", limit_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u043E ", limit_r12, "");
  }
}
function PaginatorComponent_ng_container_1_a_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginatorComponent_ng_container_1_a_8_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.goToPage(ctx_r13.prevPage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaginatorComponent_ng_container_1_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginatorComponent_ng_container_1_a_9_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.goToPage(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaginatorComponent_ng_container_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ". . .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaginatorComponent_ng_container_1_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginatorComponent_ng_container_1_a_11_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.goToPage(ctx_r17.prevPrevPage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.userPage(ctx_r5.prevPrevPage));
  }
}
function PaginatorComponent_ng_container_1_a_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginatorComponent_ng_container_1_a_12_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.goToPage(ctx_r19.prevPage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.userPage(ctx_r6.prevPage));
  }
}
function PaginatorComponent_ng_container_1_a_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginatorComponent_ng_container_1_a_15_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.goToPage(ctx_r21.nextPage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.userPage(ctx_r7.nextPage));
  }
}
function PaginatorComponent_ng_container_1_a_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginatorComponent_ng_container_1_a_16_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.goToPage(ctx_r23.nextNextPage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.userPage(ctx_r8.nextNextPage));
  }
}
function PaginatorComponent_ng_container_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ". . .");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaginatorComponent_ng_container_1_a_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginatorComponent_ng_container_1_a_18_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.goToPage(ctx_r25.lastPage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.userPage(ctx_r10.lastPage));
  }
}
function PaginatorComponent_ng_container_1_a_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginatorComponent_ng_container_1_a_19_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.goToPage(ctx_r27.nextPage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PaginatorComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaginatorComponent_ng_container_1_Template_mat_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.newCountSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginatorComponent_ng_container_1_mat_option_3_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaginatorComponent_ng_container_1_a_8_Template, 1, 0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PaginatorComponent_ng_container_1_a_9_Template, 2, 0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaginatorComponent_ng_container_1_span_10_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PaginatorComponent_ng_container_1_a_11_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaginatorComponent_ng_container_1_a_12_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PaginatorComponent_ng_container_1_a_15_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PaginatorComponent_ng_container_1_a_16_Template, 2, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PaginatorComponent_ng_container_1_span_17_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PaginatorComponent_ng_container_1_a_18_Template, 2, 1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PaginatorComponent_ng_container_1_a_19_Template, 1, 0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.limits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B: ", ctx_r0.first, " - ", ctx_r0.last, " \u0438\u0437 ", ctx_r0.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userPage(ctx_r0.currentPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage < ctx_r0.lastPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage < ctx_r0.lastPage - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage < ctx_r0.lastPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage < ctx_r0.lastPage - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentPage < ctx_r0.lastPage);
  }
}
class PaginatorComponent {
  constructor() {
    this.total = 0;
    this.count = 0;
    this.start = 0;
    this.limits = [10, 50, 100];
    this.startChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.countChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  ngOnChanges(changes) {}
  get first() {
    return this.start + 1;
  }
  get last() {
    return Math.min(this.start + this.count, this.total);
  }
  get currentPage() {
    return Math.ceil(this.start / this.count);
  }
  get prevPage() {
    return this.currentPage - 1;
  }
  get nextPage() {
    return this.currentPage + 1;
  }
  get nextNextPage() {
    return this.currentPage + 2;
  }
  get prevPrevPage() {
    return this.currentPage - 2;
  }
  get lastPage() {
    return Math.ceil(this.total / this.count) - 1;
  }
  goToPage(page) {
    this.startChange.emit(page * this.count);
  }
  newCountSelected(count) {
    this.countChange.emit(+count);
  }
  userPage(page) {
    return page + 1;
  }
  static {
    this.ɵfac = function PaginatorComponent_Factory(t) {
      return new (t || PaginatorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginatorComponent,
      selectors: [["app-paginator"]],
      inputs: {
        total: "total",
        count: "count",
        start: "start",
        limits: "limits"
      },
      outputs: {
        startChange: "startChange",
        countChange: "countChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 1,
      consts: [[1, "table-footer"], [4, "ngIf"], [1, "limit"], [2, "width", "180px", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "note"], [1, "pages"], [1, "navigator"], ["class", "item arrow left icon icon-control-rewind", 3, "click", 4, "ngIf"], ["class", "item first icon icon-control-start", 3, "click", 4, "ngIf"], ["class", "dot", 4, "ngIf"], ["class", "item", 3, "click", 4, "ngIf"], [1, "item", "sel"], ["class", "item last icon icon-control-end", 3, "click", 4, "ngIf"], ["class", "item arrow right icon icon-control-forward", 3, "click", 4, "ngIf"], [3, "value"], [1, "item", "arrow", "left", "icon", "icon-control-rewind", 3, "click"], [1, "item", "first", "icon", "icon-control-start", 3, "click"], [1, "dot"], [1, "item", 3, "click"], [1, "item", "last", "icon", "icon-control-end", 3, "click"], [1, "item", "arrow", "right", "icon", "icon-control-forward", 3, "click"]],
      template: function PaginatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginatorComponent_ng_container_1_Template, 20, 16, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.total != 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_select__WEBPACK_IMPORTED_MODULE_3__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatOption],
      styles: [".invisible {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWF0ZXJpYWwvY29tcG9uZW50cy9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZpc2libGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 5353:
/*!****************************************************************************!*\
  !*** ./src/app/material/components/popup-dialog/popup-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupDialogComponent: () => (/* binding */ PopupDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function PopupDialogComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 6);
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", message_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
class PopupDialogComponent {
  constructor(sanitizer, data) {
    this.sanitizer = sanitizer;
    this.data = data;
    this.trustedMessages = data.messages.map(message => this.sanitizer.bypassSecurityTrustHtml(message));
  }
  ngOnInit() {}
  static {
    this.ɵfac = function PopupDialogComponent_Factory(t) {
      return new (t || PopupDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopupDialogComponent,
      selectors: [["app-popup-dialog"]],
      decls: 8,
      vars: 2,
      consts: [["mat-dialog-title", ""], ["mat-dialog-close", "", 1, "close"], ["mat-dialog-content", ""], [3, "innerHTML", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", "", 1, "mat-button"], [3, "innerHTML"]],
      template: function PopupDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupDialogComponent_p_4_Template, 1, 1, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trustedMessages);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions],
      styles: [".mat-dialog-container {\n  padding: 0;\n  background: #fff;\n  min-width: 500px;\n  line-height: 1.3em;\n  position: relative;\n}\n\n.mat-dialog-title {\n  font-size: 24px;\n  padding: 32px 32px;\n  margin: 0;\n  font-weight: 700;\n}\n\n.close {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 20px;\n  height: 20px;\n  background: url(\"/assets/pic-close.svg\") no-repeat center center;\n  cursor: pointer;\n}\n\n.close:hover {\n  opacity: 0.6;\n}\n\n.mat-dialog-content {\n  margin: 0;\n  font-size: 15px;\n  padding: 32px;\n  background: #F7F9FC;\n  border-top: 1px solid #E0E5EB;\n  border-bottom: 1px solid #E0E5EB;\n}\n\n.mat-dialog-content > :first-child {\n  margin-top: 0;\n}\n\n.mat-dialog-content > :last-child {\n  margin-bottom: 0;\n}\n\n.mat-dialog-actions {\n  padding: 32px;\n  margin: 0;\n}\n\n.mat-dialog-actions .mat-button {\n  cursor: pointer;\n  font-size: 15px;\n  color: #FFFFFF;\n  background: var(--accent, #DB563B);\n  box-shadow: 0px 2px 8px rgba(44, 54, 64, 0.13);\n  border-radius: 6px;\n  padding: 13px 16px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWF0ZXJpYWwvY29tcG9uZW50cy9wb3B1cC1kaWFsb2cvcG9wdXAtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdFQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtBQUlGOztBQUZBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0FBTUY7O0FBSkE7RUFDRSxnQkFBQTtBQU9GOztBQUxBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFRRjs7QUFOQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVNGIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWluLXdpZHRoOiA1MDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMzJweCAzMnB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9waWMtY2xvc2Uuc3ZnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jbG9zZTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMzJweDtcbiAgYmFja2dyb3VuZDogI0Y3RjlGQztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMEU1RUI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuLm1hdC1kaWFsb2ctY29udGVudCA+IDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDBcbn1cbi5tYXQtZGlhbG9nLWNvbnRlbnQgPiA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBcbn1cbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBwYWRkaW5nOiAzMnB4O1xuICBtYXJnaW46IDA7XG59XG4ubWF0LWRpYWxvZy1hY3Rpb25zIC5tYXQtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSg0NCwgNTQsIDY0LCAwLjEzKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxM3B4IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 9323:
/*!****************************************************************!*\
  !*** ./src/app/material/directives/focus-initial.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusInitialDirective: () => (/* binding */ FocusInitialDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FocusInitialDirective {
  constructor(element) {
    this.element = element;
  }
  ngAfterViewInit() {
    this.element.nativeElement.focus();
  }
  static {
    this.ɵfac = function FocusInitialDirective_Factory(t) {
      return new (t || FocusInitialDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FocusInitialDirective,
      selectors: [["", "appFocusInitial", ""]]
    });
  }
}

/***/ }),

/***/ 3541:
/*!*************************************************************!*\
  !*** ./src/app/material/directives/phone-mask.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhoneMaskDirective: () => (/* binding */ PhoneMaskDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class PhoneMaskDirective {
  constructor(el) {
    this.el = el;
    this.input = el.nativeElement;
  }
  getInputNumbersValue() {
    // Return stripped input value — just numbers
    return this.input.value.replace(/\D/g, '');
  }
  onPhonePaste(e) {
    const input = this.input;
    const inputNumbersValue = this.getInputNumbersValue();
    const pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
        return;
      }
    }
  }
  onPhoneInput(e) {
    const input = this.input;
    let inputNumbersValue = this.getInputNumbersValue();
    const selectionStart = input.selectionStart;
    let formattedInputValue = "";
    if (!inputNumbersValue) {
      input.value = "";
      return;
    }
    if (input.value.length != selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
        // Attempt to input non-numeric symbol
        input.value = inputNumbersValue;
      }
      return;
    }
    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9") {
        inputNumbersValue = "7" + inputNumbersValue;
      }
      const firstSymbols = inputNumbersValue[0] == "8" ? "+7" : "+7";
      formattedInputValue = input.value = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  }
  onPhoneBlur(e) {
    const input = this.input;
    const inputNumbersValue = this.getInputNumbersValue();
    if (["7"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue.length < 11) {
        input.value = '';
      }
    } else {
      if (inputNumbersValue.length < 16) {
        input.value = '';
      }
    }
  }
  onPhoneKeyDown(e) {
    const input = this.input;
    // Clear input after remove last symbol
    var inputValue = input.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      input.value = "";
    }
  }
  static {
    this.ɵfac = function PhoneMaskDirective_Factory(t) {
      return new (t || PhoneMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PhoneMaskDirective,
      selectors: [["input", "appPhoneMask", ""]],
      hostBindings: function PhoneMaskDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function PhoneMaskDirective_paste_HostBindingHandler($event) {
            return ctx.onPhonePaste($event);
          })("input", function PhoneMaskDirective_input_HostBindingHandler($event) {
            return ctx.onPhoneInput($event);
          })("blur", function PhoneMaskDirective_blur_HostBindingHandler($event) {
            return ctx.onPhoneBlur($event);
          })("keydown", function PhoneMaskDirective_keydown_HostBindingHandler($event) {
            return ctx.onPhoneKeyDown($event);
          });
        }
      }
    });
  }
}

/***/ }),

/***/ 551:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 9771);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button-toggle */ 9864);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _adapters_custom_date_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adapters/custom-date.adapter */ 4540);
/* harmony import */ var _components_popup_dialog_popup_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/popup-dialog/popup-dialog.component */ 5353);
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/paginator/paginator.component */ 2105);
/* harmony import */ var _components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/editor-header/editor-header.component */ 7157);
/* harmony import */ var _directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/focus-initial.directive */ 9323);
/* harmony import */ var _directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/phone-mask.directive */ 3541);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);



// Material Modules















// CDK Modules
 // <-- Добавьте этот импорт

// DateAdapter Configuration


// Components & Directives







class MaterialModule {
  static {
    this.ɵfac = function MaterialModule_Factory(t) {
      return new (t || MaterialModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.DateAdapter,
        useClass: _adapters_custom_date_adapter__WEBPACK_IMPORTED_MODULE_0__.CustomDateAdapter,
        deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_DATE_LOCALE]
      }],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
      // Material Modules
      _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__.DragDropModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__.OverlayModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule,
      // Re-export all Material modules
      _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__.DragDropModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__.OverlayModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MaterialModule, {
    declarations: [_components_popup_dialog_popup_dialog_component__WEBPACK_IMPORTED_MODULE_1__.PopupDialogComponent, _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__.PaginatorComponent, _components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_3__.EditorHeaderComponent, _directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_4__.FocusInitialDirective, _directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_5__.PhoneMaskDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
    // Material Modules
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__.DragDropModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__.OverlayModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule],
    exports: [
    // Re-export all Material modules
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTableModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_26__.DragDropModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_27__.OverlayModule,
    // Your custom components & directives
    _components_popup_dialog_popup_dialog_component__WEBPACK_IMPORTED_MODULE_1__.PopupDialogComponent, _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__.PaginatorComponent, _components_editor_header_editor_header_component__WEBPACK_IMPORTED_MODULE_3__.EditorHeaderComponent, _directives_focus_initial_directive__WEBPACK_IMPORTED_MODULE_4__.FocusInitialDirective, _directives_phone_mask_directive__WEBPACK_IMPORTED_MODULE_5__.PhoneMaskDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule]
  });
})();

/***/ }),

/***/ 1784:
/*!****************************************************!*\
  !*** ./src/app/material/services/popup.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupService: () => (/* binding */ PopupService)
/* harmony export */ });
/* harmony import */ var _components_popup_dialog_popup_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/popup-dialog/popup-dialog.component */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);



class PopupService {
  constructor(dialog) {
    this.dialog = dialog;
  }
  alert(arr) {
    const data = {
      title: arr.title ? arr.title : 'Сообщение системы',
      messages: Array.isArray(arr.message) ? arr.message : [arr.error.message]
    };
    this.dialog.open(_components_popup_dialog_popup_dialog_component__WEBPACK_IMPORTED_MODULE_0__.PopupDialogComponent, {
      data
    });
  }
  error(arr) {
    let errors;
    if (arr.error.error_message_description) {
      errors = {
        title: arr.error.error_message ? arr.error.error_message : arr.title ? arr.title : 'Сообщение системы',
        messages: Array.isArray(arr.error.error_message_description) ? arr.error.error_message_description : [arr.error.error_message_description]
      };
    } else {
      errors = {
        title: arr.title ? arr.title : 'Сообщение системы',
        messages: Array.isArray(arr.error.error_message) ? arr.error.error_message : [arr.error.error_message]
      };
    }
    const data = errors;
    this.dialog.open(_components_popup_dialog_popup_dialog_component__WEBPACK_IMPORTED_MODULE_0__.PopupDialogComponent, {
      data
    });
  }
  note(str) {
    let arr = {
      'message': str
    };
    this.alert(arr);
  }
  static {
    this.ɵfac = function PopupService_Factory(t) {
      return new (t || PopupService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PopupService,
      factory: PopupService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4265:
/*!***************************************!*\
  !*** ./src/app/page-title.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageTitleService: () => (/* binding */ PageTitleService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);



class PageTitleService extends _angular_router__WEBPACK_IMPORTED_MODULE_0__.TitleStrategy {
  constructor(title) {
    super();
    this.title = title;
  }
  updateTitle(routerState) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title} - Cargodrom`);
    }
  }
  static {
    this.ɵfac = function PageTitleService_Factory(t) {
      return new (t || PageTitleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PageTitleService,
      factory: PageTitleService.ɵfac
    });
  }
}

/***/ }),

/***/ 7684:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/components/employee-register/employee-register.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeRegisterComponent: () => (/* binding */ EmployeeRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _material_services_popup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../material/services/popup.service */ 1784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ 3273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);









function EmployeeRegisterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0421\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class EmployeeRegisterComponent {
  constructor(fb, router, popup, dialog, userSevrice, route) {
    this.fb = fb;
    this.router = router;
    this.popup = popup;
    this.dialog = dialog;
    this.userSevrice = userSevrice;
    this.route = route;
    this.loading = false;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.hasOldPassword = false;
    this.isEditMode = true;
    this.registerForm = this.fb.group({
      uid: [, []],
      login: ['', []],
      old_password: ['', []],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      password_confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  ngOnInit() {
    const segments = this.route.snapshot.url.map(s => s.path);
    this.uid = segments[1];
    this.registerForm.patchValue({
      uid: this.uid
    });
    this.isEditMode = segments[0] === 'employee_register' ? false : true;
    if (this.isEditMode) {
      this.getUserData();
    }
  }
  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  doRegister() {
    console.log(this.registerForm);
    console.log(this.registerForm.valid);
    let error_message = [];
    // if ( this._email?.errors?.['email'] ) {
    //   error_message.push('E-mail введен не верно');
    // }
    // if ( this._inn?.errors?.['inn']  ) {
    //   error_message.push('ИНН введен не верно');
    // }
    if (error_message.length > 0) {
      let err = {
        'error': {
          'error_message': error_message
        }
      };
      this.popup.error(err);
      return;
    }
    this.loading = true;
    this.registerUser();
    // this.register.save( { this.registerForm.value } )
    //   .pipe(
    //     finalize(() => this.loading = false)
    //   ).subscribe({
    //   next: ( uid ) => this.processConfirm(uid),
    //   error: err => this.popup.error(err)
    // });
  }

  processConfirm(uid) {
    this.router.navigate(['/confirm/' + uid]);
  }
  getUserData() {
    this.userSevrice.userInviteData({
      body: {
        uid: this.uid
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(data => this.hasOldPassword = data.has_old_password), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe({
      next: data => {
        console.log(data);
        this.registerForm.patchValue({
          login: data.login
        });
      },
      error: err => {}
    });
  }
  registerUser() {
    const body = this.registerForm.value;
    this.userSevrice.userRegisterInvite({
      body
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe({
      next: data => {},
      error: err => {}
    });
  }
  static {
    this.ɵfac = function EmployeeRegisterComponent_Factory(t) {
      return new (t || EmployeeRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_material_services_popup_service__WEBPACK_IMPORTED_MODULE_0__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: EmployeeRegisterComponent,
      selectors: [["app-employee-register"]],
      decls: 40,
      vars: 2,
      consts: [[1, "content"], [1, "user-module"], [1, "auth-bg"], [1, "auth-form"], [1, "hdr"], [1, "logo"], [1, "sep"], [1, "fm-body"], [3, "formGroup", "ngSubmit"], ["class", "form-row inline sp", 4, "ngIf"], [1, "form-row", "inline", "sp"], [1, "form-item"], [1, "form-label"], [1, "req"], [1, "form-input"], ["type", "password", "formControlName", "password", "value", "", "placeholder", "\u2014"], ["type", "password", "formControlName", "password_confirm", "value", "", "placeholder", ""], ["type", "text", "formControlName", "login", "value", "", "placeholder", ""], [1, "form-row", "inline"], ["type", "submit", 2, "display", "none"], [1, "btn", "alt", 3, "click"], ["type", "password", "formControlName", "old_password", "value", "", "placeholder", "\u2014"]],
      template: function EmployeeRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 5)(6, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "form", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EmployeeRegisterComponent_Template_form_ngSubmit_10_listener() {
            return ctx.doRegister();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EmployeeRegisterComponent_div_11_Template, 6, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u041F\u0430\u0440\u043E\u043B\u044C: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10)(21, "div", 11)(22, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10)(29, "div", 11)(30, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u041B\u043E\u0433\u0438\u043D: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeeRegisterComponent_Template_span_click_38_listener() {
            return ctx.doRegister();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasOldPassword);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1132:
/*!***********************************************************************!*\
  !*** ./src/app/pages/components/rate-editor/rate-editor.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RateEditorComponent: () => (/* binding */ RateEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _services_calculations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/calculations.service */ 1911);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ 3273);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 9771);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 1034);



















const _c0 = ["deleteRateDialogRef"];
const _c1 = function (a0) {
  return {
    "active-rate": a0
  };
};
function RateEditorComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateEditorComponent_div_16_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const i_r16 = restoredCtx.index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.onChangeRate(i_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rate_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, i_r16 === ctx_r0.currentRateNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Rate #", i_r16 + 1, " (", rate_r15 == null ? null : rate_r15.carrier_name, ") ");
  }
}
function RateEditorComponent_mat_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const route_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", route_r19.iata);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](route_r19.iata);
  }
}
function RateEditorComponent_mat_option_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelectionChange", function RateEditorComponent_mat_option_55_Template_mat_option_onSelectionChange_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const route_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.onRouteChange(route_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const route_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", route_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](route_r20.name);
  }
}
function RateEditorComponent_mat_option_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", day_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", day_r23.day, " ");
  }
}
function RateEditorComponent_mat_option_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const transportRoute_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", transportRoute_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", transportRoute_r24.code, " ");
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 76)(2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chargeModel_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", chargeModel_r30.requare === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chargeModel_r30.name);
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 77)(2, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chargeModel_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", chargeModel_r30.requare)("disabled", chargeModel_r30.requare);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chargeModel_r30.name);
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84)(1, "div", 18)(2, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_3_div_12_Template_input_ngModelChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46);
      const chargeValue_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5).$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r44.calck(chargeValue_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chargeModel_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chargeModel_r30.unit);
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chargeModel_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chargeModel_r30.unit);
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "div", 18)(3, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_3_Template_input_ngModelChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      const chargeValue_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r49.calck(chargeValue_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 84)(7, "div", 18)(8, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_3_Template_input_ngModelChange_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      const chargeValue_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r52.calck(chargeValue_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_3_div_12_Template, 5, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_3_div_13_Template, 5, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u2550");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 84)(17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const chargeModel_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Min ", ctx_r36.rateChar, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r36.rateChar, "/", chargeModel_r30.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chargeModel_r30.unit !== "kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chargeModel_r30.unit === "kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r36.rateChar);
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84)(1, "div", 18)(2, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_div_1_Template_input_ngModelChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);
      const chargeValue_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5).$implicit;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r59.calck(chargeValue_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Fix ", ctx_r55.rateChar, ":");
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84)(1, "div", 18)(2, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_div_9_Template_input_ngModelChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64);
      const chargeValue_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5).$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r62.calck(chargeValue_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chargeModel_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chargeModel_r30.unit);
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chargeModel_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chargeModel_r30.unit);
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_div_1_Template, 5, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_span_2_Template, 2, 0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 84)(4, "div", 18)(5, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_Template_input_ngModelChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69);
      const chargeValue_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r67.calck(chargeValue_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_div_9_Template, 5, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_div_10_Template, 5, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u2550");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 84)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const chargeModel_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chargeModel_r30.field_fix);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chargeModel_r30.field_fix);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r37.rateChar, "/", chargeModel_r30.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chargeModel_r30.unit !== "kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chargeModel_r30.unit === "kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r37.rateChar);
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 95)(1, "div", 96)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 84)(5, "div", 18)(6, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_5_Template_input_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r73);
      const chargeValue_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r71.calckCost(chargeValue_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r38.rateChar);
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 80)(1, "div", 84)(2, "div", 18)(3, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_6_Template_input_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r76);
      const chargeValue_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r74.calckCost(chargeValue_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r39.rateChar);
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_label_1_Template, 5, 2, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_label_2_Template, 5, 3, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_3_Template, 21, 6, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_4_Template, 18, 7, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_5_Template, 9, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_div_6_Template, 6, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chargeModel_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !chargeModel_r30.requare);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chargeModel_r30.requare);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chargeModel_r30.field_min && !chargeModel_r30.field_comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !chargeModel_r30.field_min && !chargeModel_r30.field_comment && chargeModel_r30.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !chargeModel_r30.field_min && chargeModel_r30.field_comment && !chargeModel_r30.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !chargeModel_r30.field_min && !chargeModel_r30.field_comment && !chargeModel_r30.unit);
  }
}
function RateEditorComponent_div_94_div_4_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RateEditorComponent_div_94_div_4_2_ng_template_0_div_0_Template, 7, 6, "div", 70);
  }
  if (rf & 2) {
    const chargeValue_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chargeValue_r27.value.select);
  }
}
function RateEditorComponent_div_94_div_4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RateEditorComponent_div_94_div_4_2_ng_template_0_Template, 1, 1, "ng-template", 69);
  }
  if (rf & 2) {
    const chargeModel_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", chargeModel_r30.field_name);
  }
}
function RateEditorComponent_div_94_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RateEditorComponent_div_94_div_4_2_Template, 1, 1, null, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chargeValue_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r28)("ngSwitch", chargeValue_r27.value.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r25.chargeModel);
  }
}
function RateEditorComponent_div_94_div_8_2_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 101)(1, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 102)(3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 84)(7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const chargeModel_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chargeModel_r82.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r85.rateChar);
  }
}
function RateEditorComponent_div_94_div_8_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RateEditorComponent_div_94_div_8_2_ng_template_0_div_0_Template, 11, 2, "div", 100);
  }
  if (rf & 2) {
    const chargeValue_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !chargeValue_r79.value.select);
  }
}
function RateEditorComponent_div_94_div_8_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RateEditorComponent_div_94_div_8_2_ng_template_0_Template, 1, 1, "ng-template", 69);
  }
  if (rf & 2) {
    const chargeModel_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", chargeModel_r82.field_name);
  }
}
function RateEditorComponent_div_94_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 99)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RateEditorComponent_div_94_div_8_2_Template, 1, 1, null, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chargeValue_r79 = ctx.$implicit;
    const i_r80 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r80)("ngSwitch", chargeValue_r79.value.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r26.chargeModel);
  }
}
function RateEditorComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "The rate includes following charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RateEditorComponent_div_94_div_4_Template, 3, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 64)(6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Additional charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RateEditorComponent_div_94_div_8_Template, 3, 3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.charges.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.charges.controls);
  }
}
function RateEditorComponent_div_95_div_4_2_ng_template_0_div_0_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 76)(2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chargeModel_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", chargeModel_r93.requare === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chargeModel_r93.name);
  }
}
function RateEditorComponent_div_95_div_4_2_ng_template_0_div_0_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 77)(2, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chargeModel_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", chargeModel_r93.requare)("disabled", chargeModel_r93.requare);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chargeModel_r93.name);
  }
}
function RateEditorComponent_div_95_div_4_2_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RateEditorComponent_div_95_div_4_2_ng_template_0_div_0_label_1_Template, 5, 2, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RateEditorComponent_div_95_div_4_2_ng_template_0_div_0_label_2_Template, 5, 3, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const chargeModel_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !chargeModel_r93.requare);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chargeModel_r93.requare);
  }
}
function RateEditorComponent_div_95_div_4_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RateEditorComponent_div_95_div_4_2_ng_template_0_div_0_Template, 3, 2, "div", 70);
  }
  if (rf & 2) {
    const chargeValue_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chargeValue_r90.value.select);
  }
}
function RateEditorComponent_div_95_div_4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RateEditorComponent_div_95_div_4_2_ng_template_0_Template, 1, 1, "ng-template", 69);
  }
  if (rf & 2) {
    const chargeModel_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", chargeModel_r93.field_name);
  }
}
function RateEditorComponent_div_95_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RateEditorComponent_div_95_div_4_2_Template, 1, 1, null, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chargeValue_r90 = ctx.$implicit;
    const i_r91 = ctx.index;
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r91)("ngSwitch", chargeValue_r90.value.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r88.chargeModel);
  }
}
function RateEditorComponent_div_95_div_8_2_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 101)(1, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 102)(3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chargeModel_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](chargeModel_r106.name);
  }
}
function RateEditorComponent_div_95_div_8_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RateEditorComponent_div_95_div_8_2_ng_template_0_div_0_Template, 6, 1, "div", 100);
  }
  if (rf & 2) {
    const chargeValue_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !chargeValue_r103.value.select);
  }
}
function RateEditorComponent_div_95_div_8_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RateEditorComponent_div_95_div_8_2_ng_template_0_Template, 1, 1, "ng-template", 69);
  }
  if (rf & 2) {
    const chargeModel_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", chargeModel_r106.field_name);
  }
}
function RateEditorComponent_div_95_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RateEditorComponent_div_95_div_8_2_Template, 1, 1, null, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const chargeValue_r103 = ctx.$implicit;
    const i_r104 = ctx.index;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r104)("ngSwitch", chargeValue_r103.value.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r89.chargeModel);
  }
}
function RateEditorComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60)(1, "div", 104)(2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "The rate includes following charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RateEditorComponent_div_95_div_4_Template, 3, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 105)(6, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Additional charges");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RateEditorComponent_div_95_div_8_Template, 3, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.charges.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.charges.controls);
  }
}
function RateEditorComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 109)(1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.rateForm.value.total_cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.rateChar);
  }
}
function RateEditorComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 112)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total, ", ctx_r12.rateCode, ":");
  }
}
function RateEditorComponent_ng_template_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Delete rate?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "After deletion, restoration will not be possible");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 116)(5, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", true);
  }
}
class RateEditorComponent {
  constructor(calculationsService, fb, transportService, snackBar, dialog, contractorService, directionService) {
    this.calculationsService = calculationsService;
    this.fb = fb;
    this.transportService = transportService;
    this.snackBar = snackBar;
    this.dialog = dialog;
    this.contractorService = contractorService;
    this.directionService = directionService;
    this.removeRate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.addRate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.indexRateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.duplicateRate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onChange = value => {};
    this.onTouched = () => {};
    this.touched = false;
    this.snackBarWithShortDuration = {
      duration: 4000
    };
    this.snackBarWithLongDuration = {
      duration: 8000
    };
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.transportCarrier = [];
    this.transportRoute = [];
    this.contractorList = [];
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
    this.isSelectedDate = event => {
      // const dayOfWeek = new Date(event).getDay(); // 0 - воскресенье, 1 - понедельник, 2 - вторник, и т.д.
      // if (dayOfWeek === 2) { // 2 - вторник
      //   return "disabled-date"; // Класс для недоступных дат
      // }
      const date = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(event, 'yyyy-MM-dd', 'en-US');
      return this.rateForm.value.nearest_flight?.find(x => x == date) ? "selected" : '';
    };
    this.rateForm = this.fb.group({
      carrier_desc: [, []],
      carrier_name: [, []],
      comment: [, []],
      departure_schedule: [[], []],
      id: [, []],
      nearest_flight: [[], []],
      num: [, []],
      profit_include: [true, []],
      rate_type: ['nodetail', []],
      // route_id: [,[]],
      route_name: ['', []],
      total_cost: [, []],
      transit_time: this.fb.group({
        transit_time_from: [, []],
        transit_time_to: [, []]
      }),
      currency: [, []],
      values: fb.array([
        // this.fb.group({
        //   comment: [,[]],
        //   cost: [,[]],
        //   field: [,[]],
        //   fix: [,[]],
        //   min: [,[]],
        //   price: [,[]],
        //   select: [,[]],
        //   value: [,[]],
        // })
      ], [])
    });
  }
  // Методы ЖЦ
  ngOnInit() {
    this.getTransportCarrier();
    this.getTransportRoute();
    this.chargeModel.forEach(i => {
      this.charges.push(this.fb.group({
        comment: [, []],
        cost: [, []],
        field: [i.field_name, []],
        fix: [, []],
        min: [, []],
        price: [, []],
        select: [i.status, []],
        value: [i.unit === 'kg' ? this.weight : 1, []]
      }));
      this.rateForm.markAsTouched();
    });
    this.rateForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(value => {
      this.onChange(value);
    });
    this.rateForm.statusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(() => {
      if (!this.touched) {
        this.onTouched();
        this.touched = true;
      }
    });
    if (this.rateForm.value.currency == null) {
      this.rateForm.patchValue({
        currency: this.request.currency
      });
    }
    this.rateForm.markAsTouched();
  }
  ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  get rateChar() {
    const i = this.currency?.find(r => r.id === this.rateForm.value.currency);
    return i?.char ? i.char : '?';
  }
  get rateCode() {
    const i = this.currency?.find(r => r.id === this.rateForm.value.currency);
    return i?.code ? i.code : '?';
  }
  ngOnChanges(changes) {
    if (this.rateForm.value.rate_type === 'detail') this.calckTotalCost();
  }
  // ControlValueAccessor
  writeValue(contact) {
    this.rateForm.patchValue(contact);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  validate(control) {
    return control.value && this.rateForm.valid ? null : {
      contact: true
    };
  }
  // Rates
  onDeleteRate() {
    if (!this.deleteRateDialogRef) {
      return;
    }
    this.dialog.open(this.deleteRateDialogRef).afterClosed().subscribe(res => {
      if (res) {
        this.removeRate.emit();
      }
    });
  }
  onAddRate() {
    this.addRate.emit();
  }
  onChangeRate(i) {
    this.indexRateChange.emit(i);
  }
  onDuplicateRate() {
    this.duplicateRate.emit();
  }
  // Charges
  addCharge() {
    this.charges.push(this.fb.group({
      comment: [, []],
      cost: [, []],
      field: [, []],
      fix: [, []],
      min: [, []],
      price: [, []],
      select: [false, []],
      value: [, []]
    }));
    this.rateForm.markAsTouched();
  }
  get charges() {
    return this.rateForm.get('values');
  }
  // Публичные методы
  onRouteChange(route) {
    this.rateForm.patchValue({
      // route_id: route.id,
      // route_name: route.name,
      transit_time: {
        transit_time_from: route.days_min,
        transit_time_to: route.days_max
      }
    });
  }
  filterRote() {
    const filterRoute = this.transportRoute?.filter(option => option.name.toLowerCase().replaceAll(' ', '').includes(this.rateForm.value.route_name?.toLowerCase().replaceAll(' ', '')));
    return filterRoute.length == 0 ? [] : filterRoute;
  }
  filterIata() {
    const filterIata = this.transportCarrier?.filter(option => option.iata.toLowerCase().replaceAll(' ', '').includes(this.rateForm.value.carrier_name?.toLowerCase().replaceAll(' ', '')));
    return filterIata.length == 0 ? [] : filterIata;
  }
  returnAirlineName(iata) {
    let name = '';
    this.transportCarrier.forEach(i => {
      if (iata?.toLowerCase() == i.iata?.toLowerCase()) {
        name = i.name;
      }
      ;
    });
    return name;
  }
  returnAirlineIata(id) {
    let name = '';
    this.transportCarrier.forEach(i => {
      if (id == i.id) {
        name = i.iata;
      }
      ;
    });
    return id === undefined ? ' ? ' : name;
  }
  onRateTypeChange() {
    this.charges.controls.forEach(e => {
      e.controls['comment'].reset();
      e.controls['cost'].reset();
      e.controls['fix'].reset();
      e.controls['min'].reset();
      e.controls['price'].reset();
    });
    this.rateForm.controls['total_cost'].reset();
  }
  //Calck
  calck(control) {
    const costValue = this.calculationsService.calculateRate(control.value.price, control.value.value, {
      min: control.value.min,
      fix: control.value.fix
    });
    control.patchValue({
      cost: costValue
    });
  }
  // calck(control: any) {
  //   let costValue: number;
  //   if (control.value.min) {
  //     costValue = control.value.min < control.value.price * control.value.value 
  //     ? control.value.price * control.value.value 
  //     : control.value.min;
  //   } else if (control.value.fix) {
  //     costValue = (control.value.price * control.value.value) + control.value.fix;
  //   } else {
  //     costValue = control.value.price * control.value.value;
  //   }
  //   // Округляем до двух знаков после запятой
  //   const roundedCost = parseFloat(costValue.toFixed(2));
  //   control.patchValue({ cost: roundedCost });
  // }
  // calck(control:any){
  //   if(control.value.min){
  //     control.patchValue({
  //       cost: control.value.min<control.value.price * control.value.value?control.value.price * control.value.value:control.value.min
  //     });
  //   } else if(control.value.fix) {
  //     control.patchValue({cost: (control.value.price * control.value.value)+control.value.fix});
  //   } else {
  //     control.patchValue({cost: control.value.price * control.value.value});
  //   }
  // }
  calckCost(control) {
    control.patchValue({
      value: control.value.cost,
      price: 1
    });
  }
  calckTotalCost() {
    // let cost=0;
    let cost = [];
    // this.rateForm.value.values.forEach((v:any)=>{
    //   if(v.select)cost=cost+v.cost
    // });
    this.rateForm.value.values.forEach(v => {
      if (v.select) {
        cost.push(v.cost);
      }
    });
    let sum = this.calculationsService.calculateSum(cost);
    this.rateForm.patchValue({
      total_cost: sum
    });
  }
  // Datepicker multy
  returnSelectDateText() {
    let text = '';
    let dateOnj = [];
    this.rateForm.value.nearest_flight?.forEach(e => {
      const date = new Date(e);
      const dateTest = {
        day: date.toLocaleString('en-US', {
          day: 'numeric'
        }),
        mount: date.toLocaleString('en-US', {
          month: 'short'
        }),
        date: e
      };
      dateOnj?.push(dateTest);
    });
    const sortedArray = dateOnj.sort((a, b) => new Date(a.date) > new Date(b.date) ? 1 : -1);
    sortedArray?.forEach((i, index) => {
      let ind = index + 1;
      if (sortedArray[ind]?.mount === i.mount) {
        text = text + i.day + ',';
      } else {
        text = text + i.day + ' ' + i.mount + (sortedArray.length == ind ? '' : ', ');
      }
    });
    return text;
  }
  selectDate(event, calendar) {
    console.log(event, calendar);
    const date = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(event, 'yyyy-MM-dd', 'en-US');
    if (this.rateForm.value.nearest_flight === null) this.rateForm.value.nearest_flight = [];
    const index = this.rateForm.value.nearest_flight.findIndex(x => x == date);
    if (index < 0) {
      this.rateForm.value.nearest_flight.push(date);
      const dayOfWeek = new Date(event).getDay();
      // const istestDate=!this.rateForm.value.departure_schedule?.find((x:any) => x == dayOfWeek)
      const istestDate = this.rateForm.value.departure_schedule?.find(x => {
        if (dayOfWeek == 0 && x == 7) {
          x = 0;
          return x == dayOfWeek;
        } else {
          return x == dayOfWeek;
        }
      });
      // const istestDate=dayOfWeek!=0
      //   ?this.rateForm.value.departure_schedule?.find((x:any) => x == dayOfWeek)
      //   :this.rateForm.value.departure_schedule?.find((x:any) => 0 == dayOfWeek)
      if (!istestDate) {
        this.snackBar.open(`Выбранная дата не соответсвтвует дням недели`, undefined, {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['centered-snackbar'] // Кастомный класс для стилизации
        });
      }
    } else {
      this.rateForm.value.nearest_flight.splice(index, 1);
    }
    calendar.updateTodaysDate();
  }
  // Приватные методы
  // получаем перевозчиков(airline and airline iata controls)
  getTransportCarrier() {
    this.transportService.transportCarrier({
      kind_id: this.requestKindId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(transportCarrier => {
      if (!transportCarrier) {
        throw {
          error: {
            error_message: `Перевозчиков не существует`
          }
        };
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe({
      next: transportCarrier => {
        this.transportCarrier = transportCarrier;
      },
      error: err => {
        this.snackBar.open(`${err.error.error_message}: ` + err.error.error_message_description, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  // получаем маршруты(route)
  getTransportRoute() {
    this.directionService.directionRoute({
      kind_id: this.requestKindId,
      arrival_city_id: this.request.arrival_city_id,
      departure_country_id: this.request.departure_country_id
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(transportRoute => {
      if (!transportRoute) {
        throw {
          error: {
            error_message: `Маршрутов не существует`
          }
        };
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe({
      next: transportRoute => {
        this.transportRoute = transportRoute;
      },
      error: err => {
        this.snackBar.open(`${err.error.error_message}: ` + err.error.error_message_description, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  static {
    this.ɵfac = function RateEditorComponent_Factory(t) {
      return new (t || RateEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_calculations_service__WEBPACK_IMPORTED_MODULE_0__.CalculationsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.TransportService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.ContractorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.DirectionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RateEditorComponent,
      selectors: [["app-rate-editor"]],
      viewQuery: function RateEditorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.deleteRateDialogRef = _t.first);
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
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: RateEditorComponent
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALIDATORS,
        useExisting: RateEditorComponent,
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 110,
      vars: 18,
      consts: [[3, "formGroup"], [1, "form-row", "bg"], [1, "rate-block-title"], [1, "form-row-title", "color-blue"], [1, "radio"], ["type", "radio", "value", "detail", "formControlName", "rate_type", 3, "change"], ["type", "radio", "value", "nodetail", "formControlName", "rate_type", 3, "change"], [1, "rate_labels"], ["class", "rate_label", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "btn-add-rate", "rate_labels-btns", 3, "click"], [1, "icon-btn-plus"], [1, "btn-dup-rate", "rate_labels-btns", 3, "click"], [1, "btn-del-rate", "rate_labels-btns", 3, "click"], [1, "icon-btn-del"], [1, "form-row", "rate"], [1, "form-item-layout"], [1, "form-item", "i10"], [1, "form-label"], [1, "form-data"], [1, "kg"], ["type", "text", "readonly", "", 3, "value"], [1, "form-item"], ["type", "text", "formControlName", "carrier_desc", 3, "readonly", "value"], [1, "form-item", 2, "width", "105px"], ["type", "text", "formControlName", "carrier_name", 2, "text-transform", "uppercase", 3, "matAutocomplete"], ["autoActiveFirstOption", ""], ["carrier_name", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "route_name", 2, "text-transform", "uppercase", 3, "matAutocomplete"], ["route", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [1, "form-data", "departure-schedule"], ["appearance", "outline", 1, "ui-select"], ["formControlName", "departure_schedule", "multiple", ""], [1, "calendar", 3, "matMenuTriggerFor"], [1, "calendar-value"], [1, "calendar-icon"], ["menu", "matMenu"], [3, "click"], [3, "dateClass", "selectedChange"], ["calendar", ""], ["formGroupName", "transit_time", 1, "form-item", "w110"], ["type", "number", "formControlName", "transit_time_from"], ["type", "number", "formControlName", "transit_time_to"], [1, "form-item", "w110"], ["formControlName", "currency"], ["class", "charges", 4, "ngIf"], [1, "total"], ["class", "total-detail", 4, "ngIf"], ["class", "total-nodetail", 4, "ngIf"], ["type", "checkbox", "formControlName", "profit_include"], [1, "charges-title"], [1, "form-item-layout", 2, "margin-top", "40px", "width", "100%"], [1, "form-item", "charges-values", 2, "width", "100%"], [1, "form-data", 2, "width", "100%"], ["type", "text", "formControlName", "comment", "placeholder", "Your Comment...", 1, "values-input", 2, "max-width", "100%"], ["deleteRateDialogRef", ""], [1, "rate_label", 3, "ngClass", "click"], [3, "value"], [3, "value", "onSelectionChange"], [1, "charges"], [2, "width", "70%", "padding-right", "40px", "border-right", "1px dashed #E0E5EB", "margin-right", "40px"], [1, "form-block-sub-title"], ["formArrayName", "values", 4, "ngFor", "ngForOf"], [2, "width", "30%"], ["formArrayName", "values", "class", "additional", 4, "ngFor", "ngForOf"], ["formArrayName", "values"], [3, "formGroupName", "ngSwitch"], [4, "ngFor", "ngForOf"], [3, "ngSwitchCase"], ["class", "included-fees", 4, "ngIf"], [1, "included-fees"], ["style", "display: flex;", 4, "ngIf"], ["class", "input-box", 4, "ngIf"], ["class", "input-box", "style", "width: 70%;", 4, "ngIf"], [2, "display", "flex"], ["type", "checkbox", "formControlName", "select", 3, "checked"], ["type", "checkbox", 3, "checked", "disabled"], [2, "cursor", "auto"], [1, "charges-title", 2, "color", "#83909E", "cursor", "auto"], [1, "input-box"], [1, "form-item", "charges-values", "br"], [1, "unit"], ["type", "number", "formControlName", "min", 1, "values-input", 3, "ngModelChange"], [1, "form-item", "charges-values"], ["type", "number", "formControlName", "price", 1, "values-input", 3, "ngModelChange"], [1, "cross"], ["class", "form-item charges-values", 4, "ngIf"], [1, "equal"], ["type", "number", "readonly", "", "formControlName", "cost", 1, "values-input"], ["type", "number", "formControlName", "value", 1, "values-input", 3, "ngModelChange"], ["type", "number", "readonly", "", "formControlName", "value", 1, "values-input"], ["style", "text-align: center; margin: 0 5px; width: 11px; box-sizing: border-box;", 4, "ngIf"], ["type", "number", "formControlName", "fix", 1, "values-input", 3, "ngModelChange"], [2, "text-align", "center", "margin", "0 5px", "width", "11px", "box-sizing", "border-box"], [1, "input-box", 2, "width", "70%"], [1, "form-item", 2, "margin-right", "10px"], ["type", "text", "formControlName", "comment"], ["type", "number", "formControlName", "cost", 1, "values-input", 3, "change"], ["formArrayName", "values", 1, "additional"], ["class", "list-charges", 4, "ngIf"], [1, "list-charges"], ["type", "checkbox", "formControlName", "select"], ["type", "number", "formControlName", "cost", 1, "values-input"], [2, "width", "50%", "border-right", "1px dashed #E0E5EB"], [2, "width", "50%", "padding-left", "40px"], [1, "form-block-sub-title", "additional"], [4, "ngIf"], [2, "color", "#83909E", "cursor", "auto"], [1, "total-detail"], [1, ""], [1, "color-red"], [1, "total-nodetail"], ["type", "number", "formControlName", "total_cost", 1, "total-cost"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", "mat-dialog-close", ""]],
      template: function RateEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Rates");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 4)(6, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RateEditorComponent_Template_input_change_6_listener() {
            return ctx.onRateTypeChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "With Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 4)(11, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RateEditorComponent_Template_input_change_11_listener() {
            return ctx.onRateTypeChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "With single Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RateEditorComponent_div_16_Template, 2, 5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateEditorComponent_Template_button_click_17_listener() {
            return ctx.onAddRate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Add Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateEditorComponent_Template_button_click_20_listener() {
            return ctx.onDuplicateRate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Duplicate Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateEditorComponent_Template_button_click_23_listener() {
            return ctx.onDeleteRate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Delete Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Chargeable weight:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 18)(32, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "kg ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 21)(36, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Airline:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 23)(41, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Airline (iata):");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-autocomplete", 25, 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, RateEditorComponent_mat_option_47_Template, 2, 2, "mat-option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 21)(49, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Route:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mat-autocomplete", 25, 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, RateEditorComponent_mat_option_55_Template, 2, 2, "mat-option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 21)(57, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "The departure schedule:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 31)(60, "mat-form-field", 32)(61, "mat-select", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, RateEditorComponent_mat_option_62_Template, 2, 2, "mat-option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 21)(64, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "The nearest flight etd:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 18)(67, "button", 34)(68, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "mat-menu", null, 37)(73, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RateEditorComponent_Template_div_click_73_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "mat-calendar", 39, 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedChange", function RateEditorComponent_Template_mat_calendar_selectedChange_74_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r113);
            const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](75);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.selectDate($event, _r7));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 15)(77, "div", 41)(78, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Transit time from:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 41)(83, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Transit time to:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "input", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 44)(88, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Currency:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 18)(91, "mat-form-field", 32)(92, "mat-select", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, RateEditorComponent_mat_option_93_Template, 2, 2, "mat-option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, RateEditorComponent_div_94_Template, 9, 2, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](95, RateEditorComponent_div_95_Template, 9, 2, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, RateEditorComponent_div_97_Template, 7, 2, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](98, RateEditorComponent_div_98_Template, 4, 1, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "input", 50)(101, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Profit is included");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 52)(105, "div", 53)(106, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "input", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, RateEditorComponent_ng_template_108_Template, 9, 1, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](46);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](54);
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](72);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.rateForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.rates);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.weight);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", ctx.returnAirlineName(ctx.rateForm.value.carrier_name) != "")("value", ctx.returnAirlineName(ctx.rateForm.value.carrier_name));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filterIata());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filterRote());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.daysOfTheWeek);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.returnSelectDateText());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dateClass", ctx.isSelectedDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currency);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rateForm.value.rate_type === "detail");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rateForm.value.rate_type === "nodetail");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rateForm.value.rate_type === "detail");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rateForm.value.rate_type === "nodetail");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatCalendar, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4074:
/*!*************************************************************************!*\
  !*** ./src/app/pages/components/request-rate/request-rate.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestRateComponent: () => (/* binding */ RequestRateComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3900);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ 3273);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _rate_editor_rate_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rate-editor/rate-editor.component */ 1132);









function RequestRateComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cargo readiness:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.request == null ? null : ctx_r0.request.cargo_readiness);
  }
}
function RequestRateComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Conditions of carriage:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.request == null ? null : ctx_r1.request.cargo_condition_carriage, " ");
  }
}
function RequestRateComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.request == null ? null : ctx_r2.request.comment);
  }
}
function RequestRateComponent_div_102_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestRateComponent_div_102_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const documentsFile_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.getFile(documentsFile_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const documentsFile_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", documentsFile_r7 == null ? null : documentsFile_r7.file_name, " ");
  }
}
function RequestRateComponent_div_102_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestRateComponent_div_102_div_5_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const cargoFile_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.getFile(cargoFile_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cargoFile_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cargoFile_r10 == null ? null : cargoFile_r10.file_name, " ");
  }
}
function RequestRateComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Attached Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, RequestRateComponent_div_102_div_4_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, RequestRateComponent_div_102_div_5_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.request == null ? null : ctx_r3.request.documents_file);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.request == null ? null : ctx_r3.request.cargo_file);
  }
}
const _c0 = function (a0) {
  return {
    "dn": a0
  };
};
function RequestRateComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "app-rate-editor", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("removeRate", function RequestRateComponent_div_104_Template_app_rate_editor_removeRate_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const i_r14 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.removeRate(i_r14));
    })("addRate", function RequestRateComponent_div_104_Template_app_rate_editor_addRate_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.addRate());
    })("indexRateChange", function RequestRateComponent_div_104_Template_app_rate_editor_indexRateChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.indexRateChange($event));
    })("duplicateRate", function RequestRateComponent_div_104_Template_app_rate_editor_duplicateRate_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.duplicateRate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, i_r14 !== ctx_r4.currentRateNumber))("formControlName", i_r14)("requestKindId", ctx_r4.request.transport_kind_id)("rates", ctx_r4.requestForm.value.rates)("currentRateNumber", ctx_r4.currentRateNumber)("chargeModel", ctx_r4.chargeModel)("weight", ctx_r4.request.cargo_places_paid_weight)("request", ctx_r4.request)("currency", ctx_r4.currencyList);
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
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
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
      this.rates.push(this.fb.control({}));
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
    this.systemService.systemCurrency().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(currencyList => {}), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe({
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
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(file => {
      // if (!file) {
      //   throw ({ error: { error_message: `Запрос не существует` } });
      // }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe({
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
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(rates => {
      console.log('getRequestRates', rates);
      if (!rates) throw {
        error: {
          error_message: `Запрос не существует`
        }
      };
      // this.rates.push(this.fb.control({}));
      rates.rates?.forEach(e => {
        this.addRate();
        this.requestForm.patchValue(rates);
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe({
      next: rates => {
        this.chargeModel = rates.charges;
        this.request = rates;
      },
      error: err => {
        this.snackBar.open(`${err.error.error_message}: ` + err.error.error_message_description, undefined, this.snackBarWithShortDuration);
      }
    });
  }
  //сохраняем рейты
  saveRequestRates() {
    console.log(this.requestForm.value);
    this.requestService.requestRatesSave({
      body: this.requestForm.value
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
      console.log(res);
      if (!res) {
        throw {
          error: {
            error_message: `Ошибка сохранения`
          }
        };
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe({
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
      return new (t || RequestRateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.FileService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.SystemService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RequestRateComponent,
      selectors: [["app-request-rate"]],
      decls: 109,
      vars: 36,
      consts: [[1, "logo-box"], [1, "edit-form", "title"], [1, "time-add"], [1, "edit-form", 3, "formGroup"], [1, "form-block"], [1, "form-row", "df"], [1, "form-col"], [1, "form-col-title"], [1, "form-item-layout"], [1, "form-item"], [1, "form-label"], [1, "form-data"], [1, "transport-point"], [1, "copy-map"], [1, "btn-copy", 3, "click"], ["title", "Open dispatch address in Google maps", "target", "_blank", 1, "btn-map", 3, "href"], ["title", "Open destination address in Google maps", "target", "_blank", 1, "btn-map", 3, "href"], ["class", "form-item", 4, "ngIf"], [1, "details-total"], [1, "space"], [1, "sup"], ["class", "form-item-layout", 4, "ngIf"], [1, "form-col", 2, "display", "flex", "flex-direction", "column"], ["readonly", "", 2, "border", "none", "flex-grow", "1"], ["class", "form-row", 4, "ngIf"], ["formArrayName", "rates", 1, "form-row", "rate"], [4, "ngFor", "ngForOf"], [1, "form-row", "bg", 2, "display", "flex", "justify-content", "end"], ["type", "submit", 1, "btn-save-rates", 3, "click"], [1, "icon-btn-save-rates"], [1, "form-row"], [1, "form-row-title"], [1, "comment"], [1, "form-item-layout", "wrap"], ["class", "file-box", 3, "click", 4, "ngFor", "ngForOf"], [1, "file-box", 3, "click"], [3, "ngClass", "formControlName", "requestKindId", "rates", "currentRateNumber", "chargeModel", "weight", "request", "currency", "removeRate", "addRate", "indexRateChange", "duplicateRate"]],
      template: function RequestRateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Date: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 3)(9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Route of Transportation");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Dispatch");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11)(19, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 13)(24, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestRateComponent_Template_button_click_24_listener() {
            return ctx.copyDispatchText();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Copy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " On map ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 8)(29, "div", 9)(30, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Destination");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 11)(33, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 13)(38, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestRateComponent_Template_button_click_38_listener() {
            return ctx.copyDestinationText();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Copy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " On map ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 6)(43, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Cargo Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 8)(46, "div", 9)(47, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Type of cargo:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 11)(50, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 9)(53, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Cargo name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 11)(56, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, RequestRateComponent_div_59_Template, 6, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 9)(61, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Incoterms");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 11)(64, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 8)(67, "div", 9)(68, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Details total:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 11)(71, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " pcs ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " m");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "sup", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " kg");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](90, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, " kg/m");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "sup", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, RequestRateComponent_div_95_Template, 7, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 22)(97, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Dimensions");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "textarea", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](101, RequestRateComponent_div_101_Template, 5, 1, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](102, RequestRateComponent_div_102_Template, 6, 2, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, RequestRateComponent_div_104_Template, 2, 11, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 27)(106, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestRateComponent_Template_button_click_106_listener() {
            return ctx.saveRequestRates();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, " Send Rates ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Rate Request # ", ctx.request == null ? null : ctx.request.id, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.time_add);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.requestForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", ctx.request == null ? null : ctx.request.departure_country_name, ", ", ctx.request == null ? null : ctx.request.departure_city_name, ", ", ctx.request == null ? null : ctx.request.departure_address, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.departure_point_name);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate4"]("href", "https://www.google.com/maps/search/?api=1&query=", ctx.request == null ? null : ctx.request.departure_country_name, ",", ctx.request == null ? null : ctx.request.departure_city_name, ",", ctx.request == null ? null : ctx.request.departure_address, ",", ctx.request == null ? null : ctx.request.departure_point_name, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", ctx.request == null ? null : ctx.request.arrival_country_name, ", ", ctx.request == null ? null : ctx.request.arrival_city_name, ", ", ctx.request == null ? null : ctx.request.arrival_address, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.arrival_point_name);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate4"]("href", "https://www.google.com/maps/search/?api=1&query=", ctx.request == null ? null : ctx.request.arrival_country_name, ",", ctx.request == null ? null : ctx.request.arrival_city_name, ",", ctx.request == null ? null : ctx.request.arrival_address, ",", ctx.request == null ? null : ctx.request.arrival_point_name, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.cargo_type_name);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.cargo_description);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.request == null ? null : ctx.request.cargo_readiness);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.request == null ? null : ctx.request.incoterms_name, " ", ctx.request == null ? null : ctx.request.incoterms_city_name, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.request == null ? null : ctx.request.cargo_places_count, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.request == null ? null : ctx.request.cargo_places_volume, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.request == null ? null : ctx.request.cargo_places_weight, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](90, 33, ctx.request == null ? null : ctx.request.cargo_places_density, "1.0-1"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.request == null ? null : ctx.request.cargo_condition_carriage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.request == null ? null : ctx.request.cargo_dimensions);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.request == null ? null : ctx.request.comment);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.request == null ? null : ctx.request.documents_file == null ? null : ctx.request.documents_file.length) > 0 || (ctx.request == null ? null : ctx.request.cargo_file == null ? null : ctx.request.cargo_file.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.rates.controls);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _rate_editor_rate_editor_component__WEBPACK_IMPORTED_MODULE_2__.RateEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe],
      styles: ["@charset \"UTF-8\";\n.w110 {\n  flex-grow: 0;\n  max-width: 110px;\n}\n\n.logo-box {\n  height: 80px;\n  background: #fff;\n  border: 1px solid #c3ccd6;\n  border-right: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.logo-box div {\n  background-image: url('logo-full.svg');\n  background-size: auto;\n  background-repeat: no-repeat;\n  width: 1280px;\n  height: 44px;\n  margin: 18px auto;\n}\n\n.form-block .form-item-layout + .form-item-layout {\n  margin-top: 40px;\n}\n\ndiv {\n  text-rendering: optimizeLegibility;\n}\n\n.edit-form {\n  width: 1280px;\n}\n\n.edit-form.title {\n  font-size: 26px;\n  line-height: 30px;\n  font-weight: bold;\n  color: #2C3640;\n  display: flex;\n  justify-content: space-between;\n}\n\n.time-add {\n  text-transform: none;\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: normal;\n  color: #606A74;\n}\n\n.time-add span {\n  font-weight: bold;\n  color: #2C3640;\n  font-size: 14px;\n}\n\n.form-col .form-label {\n  text-transform: none;\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: normal;\n  margin-bottom: 15px;\n}\n\n.details-total {\n  text-wrap: nowrap;\n}\n\n.details-total span {\n  font-size: 15px;\n  font-weight: normal;\n}\n\n.space {\n  margin: 0 7px;\n  color: #606A74;\n  font-size: 17px;\n}\n\n.details-total sup {\n  font-size: 10px;\n}\n\n.df {\n  display: flex;\n}\n\n.form-col {\n  flex-grow: 1;\n  border-right: 1px solid #C3CCD6;\n  margin: -40px 0 -40px 0;\n  width: 0;\n  max-width: 381px;\n  padding: 40px;\n  font-weight: bold;\n  color: #2C3640;\n}\n\n.form-col:first-child {\n  margin-left: -40px;\n}\n\n.form-col:last-child {\n  margin-right: -40px;\n  border-right: 0;\n}\n\n.form-block .form-col .form-block-sub-title + .form-item-layout {\n  margin-top: 25px;\n}\n\n.form-col textarea {\n  background: none;\n  height: 150px;\n  border: none;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  line-height: 30px;\n  resize: none;\n}\n\n.form-col .form-col-title {\n  color: var(--header_menu, #4B66AD);\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  padding-bottom: 25px;\n}\n\ndiv.mat-calendar-body-selected, .mat-calendar-body-cell.selected .mat-calendar-body-cell-content {\n  background: var(--accent, #DB563B);\n  border-radius: 6px;\n}\n\n.mat-calendar-body-cell.disabled-date {\n  pointer-events: none; /* \u041E\u0442\u043A\u043B\u044E\u0447\u0430\u0435\u043C \u043A\u043B\u0438\u043A\u0438 */\n}\n\n.disabled-date .mat-calendar-body-cell-content {\n  color: #ccc; /* \u0421\u0435\u0440\u044B\u0439 \u0446\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 */\n  text-decoration: line-through; /* \u041F\u0435\u0440\u0435\u0447\u0435\u0440\u043A\u0438\u0432\u0430\u0435\u043C \u0442\u0435\u043A\u0441\u0442 */\n}\n\n.form-row .form-row-title {\n  color: #2C3640;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  padding-bottom: 25px;\n}\n\n.form-row .color-blue {\n  color: var(--header_menu, #4B66AD);\n}\n\n.file-box {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  border-radius: 6px;\n  height: 15px;\n  padding: 10px 10px;\n  margin-right: 5px;\n  margin-bottom: 15px;\n  color: var(--accent, #DB563B);\n  text-wrap: nowrap;\n  cursor: pointer;\n  background: url('pic-btn-download.svg') no-repeat;\n  background-position: left;\n  padding-left: 35px;\n  background-position: 10px;\n}\n\n.file-box:hover {\n  opacity: 0.7;\n}\n\n.wrap {\n  flex-wrap: wrap;\n}\n\n.radio {\n  margin-left: 20px;\n  margin-bottom: 25px;\n}\n\n.comment {\n  color: #2C3640;\n}\n\n.rate-block-title {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 20px;\n}\n\n.rate_labels {\n  height: 45px;\n  margin-bottom: -40px;\n  display: flex;\n}\n\n.rate_label {\n  justify-content: center;\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  min-width: 130px;\n  border-right: 1px solid #C3CCD6;\n  border-top: 1px solid #C3CCD6;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.rate_label:first-child {\n  border-left: 1px solid #C3CCD6;\n}\n\n.active-rate {\n  background-color: white;\n  color: #2C3640;\n  font-weight: bold;\n  font-size: 17px;\n  line-height: 17px;\n}\n\n.rate_labels-btns {\n  border: none;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 80%;\n  margin: 5px 0 5px 5px;\n  border-radius: 6px;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.btn-add-rate {\n  background-color: var(--accent, #DB563B);\n}\n\n.btn-dup-rate {\n  background-color: var(--header_menu, #4B66AD);\n}\n\n.btn-del-rate {\n  background-color: black;\n}\n\n.icon-btn-plus {\n  background-image: url('pic-btn-plus.svg');\n  background-repeat: no-repeat;\n  width: 10px;\n  height: 10px;\n  margin-right: 5px;\n}\n\n.icon-btn-del {\n  background-image: url('pic-btn-del.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 15px;\n  height: 15px;\n  margin-right: 5px;\n}\n\n.kg {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.mat-primary .mat-pseudo-checkbox-checked, .mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: var(--accent, #DB563B);\n}\n\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: var(--accent, #DB563B);\n}\n\n.calendar-icon {\n  background-image: url('pic-btn-calendar.svg');\n  width: 15px;\n  height: 15px;\n  background-repeat: no-repeat;\n}\n\n.calendar {\n  background: #F7F9FC;\n  border: 1px solid #E0E5EB;\n  color: #2C3640;\n  font-size: 15px;\n  border-radius: 6px;\n  width: 206px;\n  box-sizing: border-box;\n  padding: 11px 13px 9px;\n  height: 39.88px;\n  display: flex;\n  cursor: pointer;\n}\n\n.calendar-value {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  width: 100%;\n}\n\n.departure-schedule mat-form-field.mat-form-field-appearance-outline .mat-select-arrow {\n  background: url('pic-btn-calendar.svg') no-repeat;\n  width: 15px;\n  height: 15px;\n}\n\n.drop-calendar {\n  width: 30rem;\n}\n\n.mat-menu-panel {\n  width: 206px;\n}\n\n.charges {\n  display: flex;\n  margin-top: 40px;\n  padding-top: 40px;\n  border-top: 1px solid #E0E5EB;\n  margin-bottom: 40px;\n  padding-bottom: 40px;\n  border-bottom: 1px solid #E0E5EB;\n}\n\n.included-fees {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 25px;\n}\n\n.list-charges {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 25px;\n}\n\n.form-block [type=checkbox]:checked + i + span {\n  font-weight: bold;\n  font-size: 17px;\n}\n\n.form-block [type=checkbox] + i + span {\n  color: #2C3640;\n}\n\n.charges-values .form-data {\n  display: flex;\n  text-wrap: nowrap;\n  align-items: baseline;\n}\n\n.unit {\n  width: 55px;\n  display: block;\n  margin-left: 5px;\n}\n\n.charges-values:last-child .unit {\n  width: 10px;\n}\n\n.total {\n  display: flex;\n  gap: 40px;\n  align-items: center;\n}\n\n.total .total-detail {\n  display: flex;\n  gap: 5px;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 22px;\n  color: #2C3640;\n}\n\n.total .total-nodetail {\n  display: flex;\n  gap: 5px;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 22px;\n  color: #2C3640;\n  align-items: baseline;\n}\n\n.total-nodetail .total-cost {\n  background: #F7F9FC;\n  border: 1px solid #E0E5EB;\n  color: #2C3640;\n  border-radius: 6px;\n  padding: 11px 7px 9px;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 22px;\n  max-width: 70px;\n  text-align: end;\n}\n\n.color-red {\n  color: var(--accent, #DB563B);\n}\n\n.form-block .total [type=checkbox]:checked + i + span {\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.dn {\n  display: none;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n.form-block .charges input[type=number], .form-block select, .form-item-layout input[type=number] {\n  font-family: \"regular\", \"arial\", \"sans-serif\";\n  background: #F7F9FC;\n  border: 1px solid #E0E5EB;\n  color: #2C3640;\n  font-size: 15px;\n  line-height: 15px;\n  border-radius: 6px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 11px 10px 9px;\n  text-align: end;\n}\n\n.form-block input[type=number][readonly], .form-block select[readonly], .form-block textarea[readonly] {\n  background: transparent;\n  border: 1px dashed #C3CCD6;\n  color: #2C3640;\n}\n\n.charges-values {\n  flex-grow: 0;\n}\n\n.charges-values .values-input {\n  max-width: 75px;\n}\n\n.additional .form-data {\n  width: 75px;\n}\n\n.input-box {\n  display: flex;\n  align-items: baseline;\n}\n\n.cross {\n  background-image: url('pic-btn-cancel-black.svg');\n  background-size: contain;\n  width: 10px;\n  height: 10px;\n  margin: 0 10px;\n}\n\n.equal {\n  color: black;\n  margin-right: 10px;\n}\n\n.br {\n  border-right: 1px solid #E0E5EB;\n  padding-right: 10px;\n  margin-right: 10px;\n}\n\n.transport-point {\n  margin-top: 15px;\n  font-weight: normal;\n}\n\n.copy-map {\n  display: flex;\n  align-items: baseline;\n  margin-top: 15px;\n}\n\n.btn-copy {\n  background-image: url('pic-btn-copy.svg');\n  background-repeat: no-repeat;\n  background-color: white;\n  border: none;\n  color: var(--accent, #DB563B);\n  width: 70px;\n  cursor: pointer;\n  padding: 0;\n  height: 20px;\n}\n\n.btn-map {\n  background-image: url('pic-btn-map.svg');\n  background-repeat: no-repeat;\n  background-color: white;\n  border: none;\n  color: var(--accent, #DB563B);\n  width: 90px;\n  text-decoration: none;\n  display: flex;\n  padding-left: 18px;\n  font-weight: normal;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  height: 20px;\n}\n\n.form-block-sub-title {\n  margin-bottom: 40px;\n}\n\n.btn-save-rates {\n  background-color: var(--accent, #DB563B);\n  border: none;\n  border-radius: 6px;\n  padding: 10px;\n  color: white;\n  display: flex;\n  width: 120px;\n  cursor: pointer;\n}\n\n.icon-btn-save-rates {\n  background-image: url('pic-btn-send-white.svg');\n  background-repeat: no-repeat;\n  width: 20px;\n  height: 15px;\n  display: block;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9yZXF1ZXN0LXJhdGUvcmVxdWVzdC1yYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUloQjtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUZGOztBQU1BO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBSkY7O0FBTUE7RUFDRSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQU1BO0VBQ0Usa0NBQUE7QUFIRjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQURGOztBQUdBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUVFLGVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLG9CQUFBLEVBQUEsb0JBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUEsRUFBQSxzQkFBQTtFQUNBLDZCQUFBLEVBQUEsd0JBQUE7QUFLRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQ0FBQTtBQU1GOztBQUhBO0VBQ0UseUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBTUY7O0FBSkE7RUFDRSxZQUFBO0FBT0Y7O0FBSkE7RUFDRSxlQUFBO0FBT0Y7O0FBSkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxjQUFBO0FBUUY7O0FBbUNBO0VBQ0UsYUFBQTtFQUFlLHFCQUFBO0VBQ2YsbUJBQUE7QUEvQkY7O0FBbUNBO0VBQ0UsWUFBQTtFQUFlLG9CQUFBO0VBQXVCLGFBQUE7QUE5QnhDOztBQWdDQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFBZSxtQkFBQTtFQUNmLFlBQUE7RUFBYyxnQkFBQTtFQUNkLCtCQUFBO0VBQWtDLDZCQUFBO0VBQ2xDLGlCQUFBO0VBQ0EsZUFBQTtBQTNCRjs7QUE2QkE7RUFBeUIsOEJBQUE7QUF6QnpCOztBQTBCQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQW9CLGVBQUE7RUFBa0IsaUJBQUE7QUFyQnhDOztBQXdCQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFyQkY7O0FBdUJBO0VBQ0Usd0NBQUE7QUFwQkY7O0FBc0JBO0VBQ0UsNkNBQUE7QUFuQkY7O0FBcUJBO0VBQ0UsdUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UseUNBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFsQkY7O0FBb0JBO0VBQ0Usd0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWpCRjs7QUFxQkE7RUFDRSxhQUFBO0VBQWdCLG1CQUFBO0VBQ2hCLFFBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usa0NBQUE7QUFqQkY7O0FBbUJBO0VBQ0UsNkJBQUE7QUFoQkY7O0FBa0JBO0VBQ0UsNkNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBZkY7O0FBaUJBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWRGOztBQWdCQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQWJGOztBQWVBO0VBQ0UsaURBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQWJGOztBQWtCQTtFQUNFLFlBQUE7QUFmRjs7QUFpQkE7RUFDRSxZQUFBO0FBZEY7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQWZGOztBQWtCQTtFQUNFLGFBQUE7RUFBaUIscUJBQUE7RUFBd0IsOEJBQUE7RUFDekMsV0FBQTtFQUFjLG1CQUFBO0FBWmhCOztBQWNBO0VBQ0UsYUFBQTtFQUFnQixxQkFBQTtFQUF3Qiw4QkFBQTtFQUN4QyxXQUFBO0VBQWMsbUJBQUE7QUFSaEI7O0FBWUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFURjs7QUFXQTtFQUNFLGNBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBUkY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBUEY7O0FBWUE7RUFDRSxXQUFBO0FBVEY7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBVkY7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVZGOztBQVlBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQVRGOztBQVdBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVVBO0VBQ0UsNkJBQUE7QUFQRjs7QUFTQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQU5GOztBQWdCQTtFQUNFLGFBQUE7QUFiRjs7QUE2QkE7O0VBRUUsd0JBQUE7QUExQkY7O0FBNEJBO0VBQ0UsMEJBQUE7QUF6QkY7O0FBMkJBO0VBQ0UsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBeEJGOztBQTJCQTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBeEJGOztBQTZCQTtFQUVFLFlBQUE7QUEzQkY7O0FBa0NBO0VBQ0UsZUFBQTtBQS9CRjs7QUFpQ0E7RUFDRSxXQUFBO0FBOUJGOztBQXNDQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQW5DRjs7QUF1Q0E7RUFDRSxpREFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUFjLFlBQUE7RUFDZCxjQUFBO0FBbkNGOztBQXFDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBbENGOztBQW9DQTtFQUNFLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFqQ0Y7O0FBd0NBO0VBQ0UsbUJBQUE7QUFyQ0Y7O0FBeUNBO0VBQ0Usd0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXRDRjs7QUF3Q0E7RUFDRSwrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFyQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY2FyZ28taW5mb3tcbi8vICAgZmxleC1ncm93OiAxO1xuLy8gICBib3JkZXI6IHNvbGlkIHJlZCAxcHg7XG4vLyB9XG4udzExMHtcbiAgZmxleC1ncm93OiAwO1xuICBtYXgtd2lkdGg6IDExMHB4O1xufVxuXG5cbi5sb2dvLWJveHtcbiAgLy8gd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzY2NkNjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbi5sb2dvLWJveCBkaXZ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvbG9nby1mdWxsLnN2ZykgO1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMjgwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luOiAxOHB4IGF1dG87XG59XG5cblxuLmZvcm0tYmxvY2sgLmZvcm0taXRlbS1sYXlvdXQgKyAuZm9ybS1pdGVtLWxheW91dCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5kaXZ7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHlcbn1cbi5lZGl0LWZvcm0ge1xuICB3aWR0aDogMTI4MHB4Oztcbn1cbi5lZGl0LWZvcm0udGl0bGUge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyQzM2NDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xufVxuLnRpbWUtYWRkIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNjA2QTc0O1xufVxuLnRpbWUtYWRkIHNwYW57XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzJDMzY0MDtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG59XG4uZm9ybS1jb2wgIC5mb3JtLWxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kZXRhaWxzLXRvdGFse1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbn1cbi5kZXRhaWxzLXRvdGFsIHNwYW57XG5cbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnNwYWNle1xuICBtYXJnaW46IDAgN3B4O1xuICBjb2xvcjogIzYwNkE3NDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLmRldGFpbHMtdG90YWwgc3Vwe1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5kZntcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZvcm0tY29se1xuICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDM0NDRDY7XG4gIG1hcmdpbjogLTQwcHggMCAtNDBweCAwO1xuICB3aWR0aDogMDtcbiAgbWF4LXdpZHRoOiAzODFweDtcbiAgcGFkZGluZzogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMkMzNjQwO1xuICBcbn1cbi5mb3JtLWNvbDpmaXJzdC1jaGlsZHtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xufVxuLmZvcm0tY29sOmxhc3QtY2hpbGR7XG4gIG1hcmdpbi1yaWdodDogLTQwcHg7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cblxuXG5cbi5mb3JtLWJsb2NrIC5mb3JtLWNvbCAuZm9ybS1ibG9jay1zdWItdGl0bGUgKyAuZm9ybS1pdGVtLWxheW91dCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5mb3JtLWNvbCB0ZXh0YXJlYXtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uZm9ybS1jb2wgLmZvcm0tY29sLXRpdGxle1xuICBjb2xvcjogdmFyKC0taGVhZGVyX21lbnUsICM0QjY2QUQpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5kaXYubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLnNlbGVjdGVkIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwuZGlzYWJsZWQtZGF0ZXtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIMOQwp7DkcKCw5DCusOQwrvDkcKOw5HCh8OQwrDDkMK1w5DCvCDDkMK6w5DCu8OQwrjDkMK6w5DCuCAqL1xufVxuLmRpc2FibGVkLWRhdGUgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudHtcbiAgY29sb3I6ICNjY2M7IC8qIMOQwqHDkMK1w5HCgMORwovDkMK5IMORwobDkMKyw5DCtcORwoIgw5HCgsOQwrXDkMK6w5HCgcORwoLDkMKwICovXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyAvKiDDkMKfw5DCtcORwoDDkMK1w5HCh8OQwrXDkcKAw5DCusOQwrjDkMKyw5DCsMOQwrXDkMK8IMORwoLDkMK1w5DCusORwoHDkcKCICovXG59XG5cbi5mb3JtLXJvdyAuZm9ybS1yb3ctdGl0bGV7XG4gIGNvbG9yOiAjMkMzNjQwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG4uZm9ybS1yb3cgLmNvbG9yLWJsdWV7XG4gIGNvbG9yOiB2YXIoLS1oZWFkZXJfbWVudSwgIzRCNjZBRCk7XG59XG5cbi5maWxlLWJveHtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7XG4gIHRleHQtd3JhcDogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1kb3dubG9hZC5zdmcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4O1xufVxuLmZpbGUtYm94OmhvdmVye1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi53cmFwe1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yYWRpb3tcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uY29tbWVudHtcbiAgY29sb3I6ICMyQzM2NDA7XG59XG5cbi8vIC5mb3JtLXJvdyAubWF0LXRhYi1ncm91cCB7XG4vLyAgIG1hcmdpbjogMCAtNDBweDtcbi8vICAgbWF4LXdpZHRoOiAxMTQycHggO1xuLy8gfVxuXG4vLyAuZm9ybS1yb3cgLm1hdC10YWItaGVhZGVye1xuLy8gICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDI1MHB4O1xuLy8gfVxuXG4vLyAuZm9ybS1yb3cgLm1hdC10YWItbGFiZWx7XG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNDM0NDRDY7XG4vLyAgIGJvcmRlci1ib3R0b206IDA7XG4vLyAgIGJvcmRlci1yaWdodDogMDtcbi8vIH1cbi8vIC5mb3JtLXJvdyAubWF0LXRhYi1sYWJlbDpsYXN0LWNoaWxke1xuLy8gICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQzNDQ0Q2O1xuLy8gfVxuXG4vLyAuZm9ybS1yb3cgLm1hdC10YWItYm9keS13cmFwcGVye1xuLy8gICBwYWRkaW5nOiA0MHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XG4vLyB9XG5cbi8vIC5mb3JtLXJvdyAubWF0LWluay1iYXJ7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIC5mb3JtLXJvdyAubWF0LXRhYi1sYWJlbDpmb2N1czpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbi8vICAgb3BhY2l0eTogMTtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyB9XG5cbi8vIC5mb3JtLXJvdyAubWF0LXRhYi1sYWJlbC1hY3RpdmV7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gfVxuXG4vL3JhdGUgYmxvY2sgYW5kIGlucHV0IGRldGFpbCBtb2Rcbi5yYXRlLWJsb2NrLXRpdGxle1xuICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi8vIHJhdGUgbGFiZWxzXG4ucmF0ZV9sYWJlbHN7XG4gIGhlaWdodDogNDVweDsgIG1hcmdpbi1ib3R0b206IC00MHB4OyAgZGlzcGxheTogZmxleDtcbn1cbi5yYXRlX2xhYmVse1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG4gIHBhZGRpbmc6IDAgNXB4O1xuICBcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlOyBtaW4td2lkdGg6IDEzMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQzNDQ0Q2OyAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDM0NDRDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmF0ZV9sYWJlbDpmaXJzdC1jaGlsZHsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQzNDQ0Q2O31cbi5hY3RpdmUtcmF0ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMkMzNjQwO1xuICBmb250LXdlaWdodDogYm9sZDsgIGZvbnQtc2l6ZTogMTdweDsgIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuLy8gcmF0ZSBsYWJlbHMtYnRuXG4ucmF0ZV9sYWJlbHMtYnRuc3tcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogODAlO1xuICBtYXJnaW46IDVweCAwIDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4tYWRkLXJhdGV7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xufVxuLmJ0bi1kdXAtcmF0ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyX21lbnUsICM0QjY2QUQpO1xufVxuLmJ0bi1kZWwtcmF0ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4vLyByYXRlIGxhYmVscy1idG4gaWNvbnNcbi5pY29uLWJ0bi1wbHVze1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tcGx1cy5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5pY29uLWJ0bi1kZWx7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGljLWJ0bi1kZWwuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLy9DSEFSR0VBQkxFIFdFSUdIVFxuLmtnIHtcbiAgZGlzcGxheTogZmxleDsgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuLy9USEUgREVQQVJUVVJFIFNDSEVEVUxFOlxuLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7XG59XG4ubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7XG59XG4uY2FsZW5kYXItaWNvbntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLWNhbGVuZGFyLnN2Zyk7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY2FsZW5kYXJ7XG4gIGJhY2tncm91bmQ6ICNGN0Y5RkM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEU1RUI7XG4gIGNvbG9yOiAjMkMzNjQwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgd2lkdGg6IDIwNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMXB4IDEzcHggOXB4O1xuICBoZWlnaHQ6IDM5Ljg4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYWxlbmRhci12YWx1ZXtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRlcGFydHVyZS1zY2hlZHVsZSBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tY2FsZW5kYXIuc3ZnKSBuby1yZXBlYXQ7XG5cbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cbi8vVEhFIE5FQVJFU1QgRkxJR0hUIEVURDpcblxuXG4uZHJvcC1jYWxlbmRhcntcbiAgd2lkdGg6MzByZW1cbn1cbi5tYXQtbWVudS1wYW5lbHtcbiAgd2lkdGg6IDIwNnB4O1xufVxuXG4vLyAgQ2hhcmdlc1xuLmNoYXJnZXN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UwRTVFQjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTBFNUVCO1xufVxuXG4uaW5jbHVkZWQtZmVlc3tcbiAgZGlzcGxheTogZmxleDsgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7ICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlOyAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5saXN0LWNoYXJnZXN7XG4gIGRpc3BsYXk6IGZsZXg7ICBhbGlnbi1pdGVtczogYmFzZWxpbmU7ICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlOyAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi8vY2hhcmdlcyBjaGV4Ym94XG5cbi5mb3JtLWJsb2NrIFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGkgKyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5mb3JtLWJsb2NrICBbdHlwZT1cImNoZWNrYm94XCJdICsgaSArIHNwYW4ge1xuICBjb2xvcjogIzJDMzY0MDtcbn1cbi8vY2hhcmdlcyB2YWx1ZXNcbi5jaGFyZ2VzLXZhbHVlcyAuZm9ybS1kYXRhe1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuLnVuaXR7XG4gIHdpZHRoOiA1NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5saXN0LWNoYXJnZXMgLnVuaXR7XG4gIC8vIG1hcmdpbi1yaWdodDogODBweDtcbn1cbi5jaGFyZ2VzLXZhbHVlczpsYXN0LWNoaWxkIC51bml0e1xuICB3aWR0aDogMTBweDtcbn1cblxuLy90b3RhbCBjb3N0XG4udG90YWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDo0MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG4udG90YWwgLnRvdGFsLWRldGFpbHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjMkMzNjQwO1xufVxuLnRvdGFsIC50b3RhbC1ub2RldGFpbHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjMkMzNjQwO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4udG90YWwtbm9kZXRhaWwgLnRvdGFsLWNvc3R7XG4gIGJhY2tncm91bmQ6ICNGN0Y5RkM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEU1RUI7XG4gIGNvbG9yOiAjMkMzNjQwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDExcHggN3B4IDlweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1heC13aWR0aDogNzBweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmNvbG9yLXJlZHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xufVxuLmZvcm0tYmxvY2sgLnRvdGFsIFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgaSArIHNwYW4ge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cblxuXG5cblxuXG5cblxuLmRue1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLmZvcm0tYmxvY2sgLmNoYXJnZXMgaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgLmZvcm0tYmxvY2sgc2VsZWN0ICwgLmZvcm0taXRlbS1sYXlvdXQgaW5wdXRbdHlwZT1cIm51bWJlclwiXXtcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJywgJ2FyaWFsJywgJ3NhbnMtc2VyaWYnO1xuICBiYWNrZ3JvdW5kOiAjRjdGOUZDO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTBFNUVCO1xuICBjb2xvcjogIzJDMzY0MDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTFweCAxMHB4IDlweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uZm9ybS1ibG9jayBpbnB1dFt0eXBlPVwibnVtYmVyXCJdW3JlYWRvbmx5XSwgLmZvcm0tYmxvY2sgc2VsZWN0W3JlYWRvbmx5XSwgLmZvcm0tYmxvY2sgdGV4dGFyZWFbcmVhZG9ubHldIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjQzNDQ0Q2O1xuICBjb2xvcjogIzJDMzY0MDtcbn1cblxuXG5cbi5jaGFyZ2VzLXZhbHVlc3tcbiAgLy8gd2lkdGg6IDEyNXB4O1xuICBmbGV4LWdyb3c6IDA7XG5cbn1cbi8vIC5jaGFyZ2VzLXZhbHVlczpsYXN0LWNoaWxke1xuLy8gICB3aWR0aDogODBweDtcbi8vIH1cblxuLmNoYXJnZXMtdmFsdWVzIC52YWx1ZXMtaW5wdXR7XG4gIG1heC13aWR0aDogNzVweDtcbn1cbi5hZGRpdGlvbmFsIC5mb3JtLWRhdGF7XG4gIHdpZHRoOiA3NXB4O1xufVxuLy8gLmNoYXJnZXMtdmFsdWVzIC52YWx1ZXMtaW5wdXQ6Zmlyc3QtY2hpbGR7XG4vLyAgIG1hcmdpbi1yaWdodDogMHB4O1xuLy8gfVxuXG5cblxuLmlucHV0LWJveHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuXG59XG4vLyBjcm9zcyBhbmQgZXF1YWxcbi5jcm9zc3tcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLWNhbmNlbC1ibGFjay5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAxMHB4OyAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5lcXVhbHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5icntcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0UwRTVFQjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udHJhbnNwb3J0LXBvaW50e1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uY29weS1tYXB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmJ0bi1jb3B5e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tY29weS5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7XG4gIHdpZHRoOiA3MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMjBweDtcbn1cbi5idG4tbWFwe1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BpYy1idG4tbWFwLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgd2lkdGg6IDkwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbn1cblxuXG5cblxuXG4uZm9ybS1ibG9jay1zdWItdGl0bGV7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi8vICBidG4gc2F2ZSByYXRlc1xuLmJ0bi1zYXZlLXJhdGVze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaWNvbi1idG4tc2F2ZS1yYXRlc3tcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9waWMtYnRuLXNlbmQtd2hpdGUuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 1911:
/*!********************************************************!*\
  !*** ./src/app/pages/services/calculations.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalculationsService: () => (/* binding */ CalculationsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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

/***/ }),

/***/ 1798:
/*!**************************************************!*\
  !*** ./src/app/pages/services/loader.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class LoaderService {
  constructor() {
    this.activeRequests = [];
    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    this.isLoading$ = this.isLoading.asObservable();
  }
  // Основной метод для обработки объекта с запросами
  wrapRequests(requestsObject) {
    // Добавляем все ключи в активные запросы
    const requestKeys = Object.keys(requestsObject);
    this.addRequests(requestKeys);
    // Создаем обернутые observables с автоматическим удалением ключей
    const wrappedRequests = {};
    for (const key of requestKeys) {
      wrappedRequests[key] = requestsObject[key].pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.removeRequest(key)));
    }
    // Возвращаем forkJoin с обернутыми запросами
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)(wrappedRequests);
  }
  addRequests(keys) {
    this.activeRequests = [...this.activeRequests, ...keys];
    this.updateLoadingState();
    // console.log('Added requests:', keys);
  }

  removeRequest(key) {
    this.activeRequests = this.activeRequests.filter(k => k !== key);
    this.updateLoadingState();
    // console.log('Removed request:', key);
  }

  updateLoadingState() {
    const shouldBeLoading = this.activeRequests.length > 0;
    if (shouldBeLoading !== this.isLoading.value) {
      this.isLoading.next(shouldBeLoading);
    }
    // console.log('Current active requests:', this.activeRequests);
  }

  static {
    this.ɵfac = function LoaderService_Factory(t) {
      return new (t || LoaderService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: LoaderService,
      factory: LoaderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1646:
/*!**************************************************************!*\
  !*** ./src/app/pages/services/navigation-history.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationHistoryService: () => (/* binding */ NavigationHistoryService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class NavigationHistoryService {
  constructor(router) {
    this.router = router;
    this.history = [];
    this.maxHistoryLength = 50;
    this.setupNavigationTracking();
  }
  setupNavigationTracking() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)).subscribe(event => {
      this.addToHistory(event.urlAfterRedirects);
      this.printHistoryToConsole();
    });
  }
  addToHistory(fullUrl) {
    if (!this.isPagesModuleUrl(fullUrl)) {
      return;
    }
    // Получаем путь без query параметров для сравнения
    const pathWithoutParams = this.removeQueryParams(fullUrl);
    // Проверяем, не является ли этот путь дублем последней записи (без учета query параметров)
    if (this.isSamePath(pathWithoutParams)) {
      // Обновляем последнюю запись с новыми query параметрами
      this.updateLastEntry(fullUrl);
      return;
    }
    // Если путь изменился - добавляем новую запись
    const navigationEntry = {
      url: fullUrl,
      timestamp: new Date()
    };
    this.history.push(navigationEntry);
    if (this.history.length > this.maxHistoryLength) {
      this.history.shift();
    }
  }
  isPagesModuleUrl(url) {
    return url.startsWith('/pages') || url === '/pages';
  }
  removeQueryParams(url) {
    return url.split('?')[0];
  }
  isSamePath(currentPath) {
    if (this.history.length === 0) return false;
    const lastEntry = this.history[this.history.length - 1];
    const lastEntryPath = this.removeQueryParams(lastEntry.url);
    return lastEntryPath === currentPath;
  }
  updateLastEntry(newUrl) {
    if (this.history.length > 0) {
      this.history[this.history.length - 1].url = newUrl;
      this.history[this.history.length - 1].timestamp = new Date();
    }
  }
  printHistoryToConsole() {
    console.log('📜 Navigation History Array:', this.history);
  }
  /**
   * Возвращает на предыдущую страницу
   * @param fallbackUrl - альтернативный URL, используется только если история пустая
   */
  back(fallbackUrl) {
    if (this.history.length > 1) {
      // Удаляем текущую страницу из истории
      this.history.pop();
      // Получаем предыдущую страницу
      const previousEntry = this.history[this.history.length - 1];
      this.router.navigateByUrl(previousEntry.url);
    } else if (this.history.length === 1) {
      // Если в истории только одна запись - удаляем ее и переходим на fallback
      this.history.pop();
      this.router.navigateByUrl(fallbackUrl);
    } else {
      // Если история полностью пустая - используем fallback
      this.router.navigateByUrl(fallbackUrl);
    }
  }
  /**
   * Получить всю историю навигации
   */
  getHistory() {
    return [...this.history];
  }
  /**
   * Получить последнюю запись в истории
   */
  getLastEntry() {
    return this.history.length > 0 ? this.history[this.history.length - 1] : null;
  }
  /**
   * Очистить историю навигации
   */
  clearHistory() {
    this.history = [];
    console.log('🗑️ Navigation history cleared');
  }
  /**
   * Получить количество записей в истории
   */
  getHistoryLength() {
    return this.history.length;
  }
  static {
    this.ɵfac = function NavigationHistoryService_Factory(t) {
      return new (t || NavigationHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NavigationHistoryService,
      factory: NavigationHistoryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8872:
/*!*******************************************************!*\
  !*** ./src/app/shared/directives/directive.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectivesModule: () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var _iframe_style_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iframe-style.directive */ 3310);
/* harmony import */ var _icon_color_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon-color.directive */ 3949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class DirectivesModule {
  static {
    this.ɵfac = function DirectivesModule_Factory(t) {
      return new (t || DirectivesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: DirectivesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DirectivesModule, {
    declarations: [_iframe_style_directive__WEBPACK_IMPORTED_MODULE_0__.IframeStyleDirective, _icon_color_directive__WEBPACK_IMPORTED_MODULE_1__.IconColorDirective],
    exports: [_iframe_style_directive__WEBPACK_IMPORTED_MODULE_0__.IframeStyleDirective, _icon_color_directive__WEBPACK_IMPORTED_MODULE_1__.IconColorDirective]
  });
})();

/***/ }),

/***/ 3949:
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/icon-color.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconColorDirective: () => (/* binding */ IconColorDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class IconColorDirective {
  constructor(el) {
    this.el = el;
    this.color = 'currentColor';
  }
  ngOnInit() {
    this.applyStyles();
  }
  applyStyles() {
    const element = this.el.nativeElement;
    // Устанавливаем CSS переменную
    element.style.setProperty('--icon-color', this.color);
    // Добавляем класс для применения стилей
    element.classList.add('icon-colored');
  }
  static {
    this.ɵfac = function IconColorDirective_Factory(t) {
      return new (t || IconColorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: IconColorDirective,
      selectors: [["", "appIconColor", ""]],
      inputs: {
        color: ["appIconColor", "color"]
      }
    });
  }
}

/***/ }),

/***/ 3310:
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/iframe-style.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IframeStyleDirective: () => (/* binding */ IframeStyleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class IframeStyleDirective {
  constructor(element) {
    this.element = element;
    this.styleString = '';
    this.isIframeLoaded = false;
    this.resizeObserver = null;
    this.mutationObserver = null;
    this.lastHeight = 0;
    this.element.nativeElement.addEventListener('load', () => {
      console.log('iframe loaded');
      this.isIframeLoaded = true;
      this.inject();
      this.setupHeightObserver();
    });
  }
  ngOnChanges(changes) {
    console.log('ngOnChanges called', this.styleString);
    if (changes.styleString) {
      this.styleString = changes.styleString.currentValue;
    }
    if (this.isIframeLoaded && this.styleString) {
      console.log('injecting styles');
      this.inject();
    }
  }
  inject() {
    const iframe = this.element.nativeElement;
    const doc = iframe.contentDocument;
    if (!doc) return;
    // 1. Добавляем CSS переменные в :root
    let style = doc.getElementById('dynamic-iframe-styles');
    if (!style) {
      style = doc.createElement('style');
      style.id = 'dynamic-iframe-styles';
      doc.head.appendChild(style);
    }
    // 2. Переопределяем стили у div с классом "content"
    style.textContent = `
      :root { ${this.styleString} }
      
      div.content {
        ${this.styleString} !important;
      }
      
      .content {
        ${this.styleString} !important;
      }
    `;
    // 3. Принудительно применяем стили к элементу и добавляем класс
    const contentDiv = doc.querySelector('div.content');
    if (contentDiv) {
      const divElement = contentDiv;
      // Парсим строку стилей и применяем каждое свойство
      this.styleString.split(';').forEach(style => {
        const [property, value] = style.split(':');
        if (property && value) {
          divElement.style.setProperty(property.trim(), value.trim());
        }
      });
      // Добавляем класс к элементу
      divElement.classList.add('demo-page'); // замените 'your-class-name' на нужный класс
    }

    console.log('styles injected and applied to .content div, class added');
  }
  setupHeightObserver() {
    const iframe = this.element.nativeElement;
    const doc = iframe.contentDocument;
    if (!doc) return;
    const userModuleDiv = doc.querySelector('div.user-module');
    if (!userModuleDiv) {
      console.warn('div.user-module not found in iframe');
      return;
    }
    // Функция обновления высоты iframe
    const updateIframeHeight = () => {
      const userModuleHeight = userModuleDiv.scrollHeight;
      const newHeight = userModuleHeight + 1; // +1px как ты просил
      // Обновляем только если высота изменилась
      if (this.lastHeight !== newHeight) {
        this.lastHeight = newHeight;
        iframe.style.height = newHeight + 'px';
        console.log('Iframe height updated:', newHeight);
      }
    };
    // 1. ResizeObserver для отслеживания изменений размера
    if ('ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => {
        updateIframeHeight();
      });
      this.resizeObserver.observe(userModuleDiv);
    }
    // 2. MutationObserver для отслеживания изменений DOM
    this.mutationObserver = new MutationObserver(() => {
      updateIframeHeight();
    });
    this.mutationObserver.observe(userModuleDiv, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
    // Также отслеживаем изменения во всем документе
    this.mutationObserver.observe(doc.body, {
      childList: true,
      subtree: true
    });
    // Первоначальная установка высоты
    setTimeout(() => updateIframeHeight(), 100);
    // Также обновляем при изменении окна
    iframe.contentWindow?.addEventListener('resize', updateIframeHeight);
  }
  ngOnDestroy() {
    // Очищаем observers при уничтожении директивы
    this.resizeObserver?.disconnect();
    this.mutationObserver?.disconnect();
  }
  static {
    this.ɵfac = function IframeStyleDirective_Factory(t) {
      return new (t || IframeStyleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: IframeStyleDirective,
      selectors: [["iframe", "appIframeStyle", ""]],
      inputs: {
        styleString: ["appIframeStyle", "styleString"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
}

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ui.module */ 9421);
/* harmony import */ var _directives_directive_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/directive.module */ 8872);
/* harmony import */ var _cargodrom_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cargodrom/material/material.module */ 551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _directives_directive_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _cargodrom_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _directives_directive_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _cargodrom_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _directives_directive_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _cargodrom_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule, _directives_directive_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule, _cargodrom_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule]
  });
})();

/***/ }),

/***/ 268:
/*!***************************************************************!*\
  !*** ./src/app/shared/ui/autocomplete/autocomplete.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutocompleteModule: () => (/* binding */ AutocompleteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class AutocompleteModule {
  static {
    this.ɵfac = function AutocompleteModule_Factory(t) {
      return new (t || AutocompleteModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AutocompleteModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutocompleteModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
})();

/***/ }),

/***/ 6926:
/*!*********************************************!*\
  !*** ./src/app/shared/ui/cdk/cdk.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdkModule: () => (/* binding */ CdkModule)
/* harmony export */ });
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ 4250);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup/popup.component */ 5884);
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel/panel.component */ 3176);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class CdkModule {
  static {
    this.ɵfac = function CdkModule_Factory(t) {
      return new (t || CdkModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: CdkModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkModule, {
    declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent, _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__.PanelComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _popup_popup_component__WEBPACK_IMPORTED_MODULE_1__.PopupComponent, _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__.PanelComponent]
  });
})();

/***/ }),

/***/ 4250:
/*!**********************************************************!*\
  !*** ./src/app/shared/ui/cdk/layout/layout.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function LayoutComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_div_0_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onBackdropClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
const _c0 = ["*"];
class LayoutComponent {
  constructor() {
    this.show = false;
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onEscape() {
    this.close();
  }
  close() {
    this.closed.emit();
  }
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  static {
    this.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      hostBindings: function LayoutComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function LayoutComponent_keydown_escape_HostBindingHandler() {
            return ctx.onEscape();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        show: "show"
      },
      outputs: {
        closed: "closed"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [["class", "layout-backdrop", 3, "click", 4, "ngIf"], [1, "layout-backdrop", 3, "click"], [1, "layout-content"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LayoutComponent_div_0_Template, 3, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".layout-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n\n.layout-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  max-width: 90vw;\n  max-height: 90vh;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2Nkay9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDUwO1xufVxuXG4ubGF5b3V0LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIG1heC13aWR0aDogOTB2dztcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3176:
/*!********************************************************!*\
  !*** ./src/app/shared/ui/cdk/panel/panel.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelComponent: () => (/* binding */ PanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function PanelComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_div_2_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onBackdropClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_div_2_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onContentClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-bottom", ctx_r0.placement === "bottom")("dropdown-top", ctx_r0.placement === "top");
  }
}
const _c0 = [[["", "trigger", ""]], [["", "content", ""]]];
const _c1 = ["[trigger]", "[content]"];
class PanelComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.isOpen = false;
    this.preferredPlacement = 'bottom';
    this.closeOnBackdropClick = true;
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.placement = 'bottom';
    this.resizeObserver = null;
  }
  ngAfterViewInit() {
    this.setupResizeObserver();
  }
  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  setupResizeObserver() {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        if (this.isOpen) {
          this.updatePanelPosition();
        }
      });
      const container = this.elementRef.nativeElement.querySelector('.panel-container');
      if (container) {
        this.resizeObserver.observe(container);
      }
    }
  }
  updatePanelPosition() {
    const container = this.elementRef.nativeElement.querySelector('.panel-container');
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const panelHeight = 320; // Примерная высота панели
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    if (this.preferredPlacement === 'bottom' && spaceBelow >= panelHeight) {
      this.placement = 'bottom';
    } else if (this.preferredPlacement === 'top' && spaceAbove >= panelHeight) {
      this.placement = 'top';
    } else if (spaceBelow >= panelHeight) {
      this.placement = 'bottom';
    } else if (spaceAbove >= panelHeight) {
      this.placement = 'top';
    } else {
      this.placement = spaceBelow >= spaceAbove ? 'bottom' : 'top';
    }
  }
  onDocumentClick(event) {
    if (!this.isOpen || !this.closeOnBackdropClick) return;
    const target = event.target;
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.closePanel();
    }
  }
  onWindowChange() {
    if (this.isOpen) {
      this.updatePanelPosition();
    }
  }
  closePanel() {
    this.closed.emit();
  }
  onBackdropClick(event) {
    if (this.closeOnBackdropClick) {
      this.closePanel();
    }
  }
  onContentClick(event) {
    event.stopPropagation();
  }
  static {
    this.ɵfac = function PanelComponent_Factory(t) {
      return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelComponent,
      selectors: [["app-panel"]],
      hostBindings: function PanelComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("scroll", function PanelComponent_scroll_HostBindingHandler() {
            return ctx.onWindowChange();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function PanelComponent_resize_HostBindingHandler() {
            return ctx.onWindowChange();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        isOpen: "isOpen",
        preferredPlacement: "preferredPlacement",
        closeOnBackdropClick: "closeOnBackdropClick"
      },
      outputs: {
        closed: "closed"
      },
      ngContentSelectors: _c1,
      decls: 3,
      vars: 1,
      consts: [[1, "panel-container"], ["class", "panel-dropdown", 3, "dropdown-bottom", "dropdown-top", 4, "ngIf"], [1, "panel-dropdown"], [1, "panel-backdrop", 3, "click"], [1, "panel-content", 3, "click"]],
      template: function PanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelComponent_div_2_Template, 4, 4, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".panel-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.panel-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 1050;\n}\n.panel-dropdown.dropdown-bottom[_ngcontent-%COMP%] {\n  top: 100%;\n  margin-top: 8px;\n}\n.panel-dropdown.dropdown-bottom[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n}\n.panel-dropdown.dropdown-top[_ngcontent-%COMP%] {\n  bottom: 100%;\n  margin-bottom: 8px;\n}\n.panel-dropdown.dropdown-top[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.2s ease-out;\n}\n\n.panel-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: transparent;\n  z-index: -1;\n}\n\n.panel-content[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  padding: 16px;\n  z-index: 1051;\n  border: 1px solid #e0e0e0;\n}\n.panel-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-bottom: none;\n  border-right: none;\n  transform: rotate(45deg);\n}\n.dropdown-bottom[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]::before {\n  top: -6px;\n  left: 20px;\n  border-top: none;\n  border-left: none;\n  transform: rotate(45deg);\n}\n.dropdown-top[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]::before {\n  bottom: -6px;\n  left: 20px;\n  border-bottom: none;\n  border-right: none;\n  transform: rotate(-135deg);\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 480px) {\n  .panel-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .panel-content[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .panel-content[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .panel-dropdown.dropdown-bottom[_ngcontent-%COMP%], .panel-dropdown.dropdown-top[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 16px;\n    right: 16px;\n    margin: 0;\n  }\n  .panel-dropdown.dropdown-bottom[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%], .panel-dropdown.dropdown-top[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%] {\n    animation: fadeIn 0.2s ease-out;\n  }\n  .panel-dropdown.dropdown-bottom[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 16px;\n  }\n  .panel-dropdown.dropdown-top[_ngcontent-%COMP%] {\n    bottom: auto;\n    top: 16px;\n  }\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n      transform: scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2Nkay9wYW5lbC9wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0Usa0NBQUE7QUFDTjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBREo7QUFHSTtFQUNFLGdDQUFBO0FBRE47O0FBTUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBSEY7QUFNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUpKO0FBT0U7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQUxKO0FBUUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQU5KOztBQVdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFSRjtFQVVBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBUkY7QUFDRjtBQVdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFURjtFQVdBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBVEY7QUFDRjtBQWFBO0VBQ0U7SUFDRSxlQUFBO0VBWEY7RUFjQTtJQUNFLGFBQUE7RUFaRjtFQWNFO0lBQ0UsYUFBQTtFQVpKO0VBaUJFO0lBRUUsZUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQWhCSjtFQWtCSTtJQUNFLCtCQUFBO0VBaEJOO0VBb0JFO0lBQ0UsU0FBQTtJQUNBLFlBQUE7RUFsQko7RUFxQkU7SUFDRSxZQUFBO0lBQ0EsU0FBQTtFQW5CSjtFQXVCQTtJQUNFO01BQ0UsVUFBQTtNQUNBLHNCQUFBO0lBckJGO0lBdUJBO01BQ0UsVUFBQTtNQUNBLG1CQUFBO0lBckJGO0VBQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFuZWwtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDUwO1xuICBcbiAgJi5kcm9wZG93bi1ib3R0b20ge1xuICAgIHRvcDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgXG4gICAgLnBhbmVsLWNvbnRlbnQge1xuICAgICAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4ycyBlYXNlLW91dDtcbiAgICB9XG4gIH1cbiAgXG4gICYuZHJvcGRvd24tdG9wIHtcbiAgICBib3R0b206IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIFxuICAgIC5wYW5lbC1jb250ZW50IHtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVVcCAwLjJzIGVhc2Utb3V0O1xuICAgIH1cbiAgfVxufVxuXG4ucGFuZWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucGFuZWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBwYWRkaW5nOiAxNnB4O1xuICB6LWluZGV4OiAxMDUxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBcbiAgLy8gw5DCocORwoLDkcKAw5DCtcOQwrvDkMK6w5DCsC3DkcKDw5DCusOQwrDDkMK3w5DCsMORwoLDkMK1w5DCu8ORwoxcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4gIFxuICAuZHJvcGRvd24tYm90dG9tICY6OmJlZm9yZSB7XG4gICAgdG9wOiAtNnB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi10b3AgJjo6YmVmb3JlIHtcbiAgICBib3R0b206IC02cHg7XG4gICAgbGVmdDogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgfVxufVxuXG4vLyDDkMKQw5DCvcOQwrjDkMK8w5DCsMORwobDkMK4w5DCuFxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vLyDDkMKQw5DCtMOQwrDDkMK/w5HCgsOQwrjDkMKyw5DCvcOQwr7DkcKBw5HCgsORwoxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAucGFuZWwtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5wYW5lbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLnBhbmVsLWRyb3Bkb3duIHtcbiAgICAmLmRyb3Bkb3duLWJvdHRvbSxcbiAgICAmLmRyb3Bkb3duLXRvcCB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBsZWZ0OiAxNnB4O1xuICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBcbiAgICAgIC5wYW5lbC1jb250ZW50IHtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4ycyBlYXNlLW91dDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgJi5kcm9wZG93bi1ib3R0b20ge1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAmLmRyb3Bkb3duLXRvcCB7XG4gICAgICBib3R0b206IGF1dG87XG4gICAgICB0b3A6IDE2cHg7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5884:
/*!********************************************************!*\
  !*** ./src/app/shared/ui/cdk/popup/popup.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupComponent: () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/layout.component */ 4250);



const _c0 = ["*"];
class PopupComponent {
  constructor() {
    this.show = false;
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  onEscape() {
    this.close();
  }
  close() {
    this.closed.emit();
  }
  onBackdropClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  static {
    this.ɵfac = function PopupComponent_Factory(t) {
      return new (t || PopupComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PopupComponent,
      selectors: [["app-popup"]],
      hostBindings: function PopupComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.escape", function PopupComponent_keydown_escape_HostBindingHandler() {
            return ctx.onEscape();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        show: "show"
      },
      outputs: {
        closed: "closed"
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 1,
      consts: [[3, "show", "closed"], [1, "popup-content", 3, "click"]],
      template: function PopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function PopupComponent_Template_app_layout_closed_0_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupComponent_Template_div_click_1_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", ctx.show);
        }
      },
      dependencies: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent],
      styles: [".popup-content[_ngcontent-%COMP%] {\n  padding: 0;\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2Nkay9wb3B1cC9wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDMwMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2188:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/ui/color-picker/color-picker-demo/color-picker-demo.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorPickerDemoComponent: () => (/* binding */ ColorPickerDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_color_chrome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color/chrome */ 2020);





const _c0 = ["container"];
const _c1 = function (a0) {
  return {
    "background-color": a0
  };
};
function ColorPickerDemoComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerDemoComponent_div_3_div_5_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const col_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.currentColor = col_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, col_r3));
  }
}
function ColorPickerDemoComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerDemoComponent_div_3_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.closePicker());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6)(3, "color-chrome", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorChange", function ColorPickerDemoComponent_div_3_Template_color_chrome_colorChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.currentColor = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorPickerDemoComponent_div_3_div_5_Template, 1, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerDemoComponent_div_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.apply());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-top", ctx_r1.placement === "top")("dropdown-bottom", ctx_r1.placement === "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r1.currentColor)("disableAlpha", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.history);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r1.currentColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.currentColor == ctx_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.currentColor == ctx_r1.color ? "\u0426\u0432\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u0435\u043D" : "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C", " ");
  }
}
const _c2 = function (a0) {
  return {
    "--input-color": a0
  };
};
class ColorPickerDemoComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.placeholder = 'Выберите цвет';
    this.disabled = false;
    this.preferredPlacement = 'bottom';
    this.standartColor = '';
    this.color = '#000000';
    this.currentColor = '#000000';
    this.isOpen = false;
    this.placement = 'bottom';
    this.history = [];
    this.resizeObserver = null;
    this.onChange = () => {};
    this.onTouched = () => {};
  }
  ngOnInit() {
    if (this.standartColor != '') this.history.push(this.standartColor);
    if (this.color != '') this.currentColor = this.color;
  }
  ngAfterViewInit() {
    this.setupResizeObserver();
  }
  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  // Публичный метод для вызова onTouched
  handleTouched() {
    this.onTouched();
  }
  setupResizeObserver() {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        if (this.isOpen) {
          this.updateDropdownPosition();
        }
      });
      this.resizeObserver.observe(this.container.nativeElement);
    }
  }
  updateDropdownPosition() {
    if (!this.container) return;
    const containerElement = this.container.nativeElement;
    const rect = containerElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const dropdownHeight = 320;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    if (this.preferredPlacement === 'bottom' && spaceBelow >= dropdownHeight) {
      this.placement = 'bottom';
    } else if (this.preferredPlacement === 'top' && spaceAbove >= dropdownHeight) {
      this.placement = 'top';
    } else if (spaceBelow >= dropdownHeight) {
      this.placement = 'bottom';
    } else if (spaceAbove >= dropdownHeight) {
      this.placement = 'top';
    } else {
      this.placement = spaceBelow >= spaceAbove ? 'bottom' : 'top';
    }
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!this.isOpen || !target) return;
    const clickedInside = target.closest('.color-picker-container');
    if (!clickedInside) {
      this.closePicker();
    }
  }
  onWindowChange() {
    if (this.isOpen) {
      this.updateDropdownPosition();
    }
  }
  writeValue(value) {
    if (value && this.isValidColor(value)) {
      this.color = value;
      this.currentColor = value;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  togglePicker() {
    if (this.disabled) return;
    if (!this.isOpen) {
      this.updateDropdownPosition();
    }
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.handleTouched();
    }
  }
  closePicker() {
    this.isOpen = false;
  }
  apply() {
    this.onColorChange(this.currentColor);
  }
  onColorChange(colorEvent) {
    if (colorEvent && colorEvent != this.color) {
      this.addColorInHistory(this.color);
      this.color = colorEvent;
      this.onChange(this.color);
    }
  }
  addColorInHistory(color) {
    // Проверяем, что цвет не равен первому элементу И не содержится в истории
    if (this.history[0] != color && !this.history.includes(color)) this.history.splice(1, 0, color); // Добавляет color на позицию с индексом 1
    // Удалем последний элемент из истории если история больше 9
    if (this.history.length > 9) this.history.pop();
  }
  isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
  }
  static {
    this.ɵfac = function ColorPickerDemoComponent_Factory(t) {
      return new (t || ColorPickerDemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColorPickerDemoComponent,
      selectors: [["app-color-picker-demo"]],
      viewQuery: function ColorPickerDemoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      hostBindings: function ColorPickerDemoComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerDemoComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("scroll", function ColorPickerDemoComponent_scroll_HostBindingHandler() {
            return ctx.onWindowChange();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("resize", function ColorPickerDemoComponent_resize_HostBindingHandler() {
            return ctx.onWindowChange();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        placeholder: "placeholder",
        disabled: "disabled",
        preferredPlacement: "preferredPlacement",
        standartColor: "standartColor"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ColorPickerDemoComponent),
        multi: true
      }])],
      decls: 4,
      vars: 7,
      consts: [[1, "color-picker-container"], ["container", ""], ["type", "text", "readonly", "", 1, "color-input", 3, "value", "placeholder", "click", "blur"], ["class", "picker-dropdown", 3, "dropdown-top", "dropdown-bottom", 4, "ngIf"], [1, "picker-dropdown"], [1, "picker-backdrop", 3, "click"], [1, "picker-content"], [3, "color", "disableAlpha", "colorChange"], [2, "display", "flex", "margin", "0 auto", "gap", "5px"], ["style", "width: 12px; height: 12px; border-radius: 50%;", 3, "style", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "close-btn", "apply-btn", 3, "disabled", "click"], [2, "width", "12px", "height", "12px", "border-radius", "50%", 3, "click"]],
      template: function ColorPickerDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPickerDemoComponent_Template_input_click_2_listener() {
            return ctx.togglePicker();
          })("blur", function ColorPickerDemoComponent_Template_input_blur_2_listener() {
            return ctx.handleTouched();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorPickerDemoComponent_div_3_Template, 8, 13, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx.color));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.color)("placeholder", ctx.placeholder);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_color_chrome__WEBPACK_IMPORTED_MODULE_3__.ChromeComponent],
      styles: [".color-picker-container[_ngcontent-%COMP%]::before {\n  display: block;\n  width: 40px;\n  height: 10px;\n  content: \"\";\n  background-color: var(--input-color);\n  border: 1px solid #C3CCD6;\n  position: absolute;\n  top: 15px;\n  left: 13px;\n}\n\n.color-picker-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 200px;\n}\n.color-picker-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #dcdfe6;\n  border-radius: 6px;\n  padding: 8px 12px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-height: 40px;\n}\n.input-wrapper[_ngcontent-%COMP%]:hover {\n  border-color: #c0c4cc;\n}\n.input-wrapper.focused[_ngcontent-%COMP%] {\n  border-color: #409eff;\n  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);\n}\n.input-wrapper[_ngcontent-%COMP%]:has(.color-input:disabled) {\n  background-color: #f5f7fa;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n\n.color-preview[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  border: 1px solid #e0e0e0;\n  margin-right: 10px;\n  flex-shrink: 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.color-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  flex: 1;\n  cursor: pointer;\n  font-size: 14px;\n  color: #606266;\n}\n.color-input[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n}\n.color-input[_ngcontent-%COMP%]::placeholder {\n  color: #c0c4cc;\n}\n\n.dropdown-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #c0c4cc;\n  transition: transform 0.3s ease;\n  font-size: 12px;\n}\n.dropdown-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.input-wrapper[_ngcontent-%COMP%]:hover   .dropdown-icon[_ngcontent-%COMP%] {\n  color: #909399;\n}\n\n.picker-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 1050;\n}\n.picker-dropdown.dropdown-bottom[_ngcontent-%COMP%] {\n  top: 100%;\n  margin-top: 8px;\n}\n.picker-dropdown.dropdown-bottom[_ngcontent-%COMP%]   .picker-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.2s ease-out;\n}\n.picker-dropdown.dropdown-top[_ngcontent-%COMP%] {\n  bottom: 100%;\n  margin-bottom: 8px;\n}\n.picker-dropdown.dropdown-top[_ngcontent-%COMP%]   .picker-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.2s ease-out;\n}\n\n.picker-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: transparent;\n  z-index: -1;\n}\n\n.picker-content[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  padding: 16px;\n  z-index: 1051;\n  border: 1px solid #e0e0e0;\n}\n.picker-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-bottom: none;\n  border-right: none;\n  transform: rotate(45deg);\n}\n.dropdown-bottom[_ngcontent-%COMP%]   .picker-content[_ngcontent-%COMP%]::before {\n  top: -6px;\n  left: 20px;\n  border-top: none;\n  border-left: none;\n  transform: rotate(45deg);\n}\n.dropdown-top[_ngcontent-%COMP%]   .picker-content[_ngcontent-%COMP%]::before {\n  bottom: -6px;\n  left: 20px;\n  border-bottom: none;\n  border-right: none;\n  transform: rotate(-135deg);\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 12px;\n  padding: 8px 16px;\n  background: #409eff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  font-size: 14px;\n  font-weight: 500;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #337ecc;\n}\n.close-btn[_ngcontent-%COMP%]:active {\n  background: #2a6cb3;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n  color-chrome .chrome-picker {\n  width: 100% !important;\n  box-shadow: none !important;\n  border-radius: 0 !important;\n}\n  color-chrome .chrome-picker .chrome-body {\n  padding: 14px 6px 12px;\n}\n  color-chrome .flexbox-fix:last-child {\n  border-bottom: none !important;\n}\n  color-chrome .chrome-color {\n  display: none;\n}\n  color-chrome .chrome-fields .chrome-field:nth-child(4) {\n  display: none;\n}\n\n@media (max-width: 480px) {\n  .color-picker-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .picker-content[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .picker-content[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .picker-dropdown.dropdown-bottom[_ngcontent-%COMP%], .picker-dropdown.dropdown-top[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 16px;\n    right: 16px;\n    margin: 0;\n  }\n  .picker-dropdown.dropdown-bottom[_ngcontent-%COMP%]   .picker-content[_ngcontent-%COMP%], .picker-dropdown.dropdown-top[_ngcontent-%COMP%]   .picker-content[_ngcontent-%COMP%] {\n    animation: fadeIn 0.2s ease-out;\n  }\n  .picker-dropdown.dropdown-bottom[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 16px;\n  }\n  .picker-dropdown.dropdown-top[_ngcontent-%COMP%] {\n    bottom: auto;\n    top: 16px;\n  }\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n      transform: scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n}\n.apply-btn[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n  text-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXItZGVtby9jb2xvci1waWNrZXItZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UscUJBQUE7QUFDSjtBQUVFO0VBQ0UscUJBQUE7RUFDQSw2Q0FBQTtBQUFKO0FBR0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURKOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRkY7QUFJRTtFQUNFLG1CQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7QUFISjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQUpGO0FBTUU7RUFDRSx5QkFBQTtBQUpKOztBQVFBO0VBQ0UsY0FBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUFMRjtBQU9FO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFMSjtBQU9JO0VBQ0Usa0NBQUE7QUFMTjtBQVNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBUEo7QUFTSTtFQUNFLGdDQUFBO0FBUE47O0FBWUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBVEY7QUFZRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQVZKO0FBYUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQVhKO0FBY0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQVpKOztBQWdCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBYkY7QUFlRTtFQUNFLG1CQUFBO0FBYko7QUFnQkU7RUFDRSxtQkFBQTtBQWRKOztBQW1CQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBaEJGO0VBa0JBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBaEJGO0FBQ0Y7QUFtQkE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQWpCRjtFQW1CQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQWpCRjtBQUNGO0FBc0JFO0VBQ0Usc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBcEJKO0FBcUJJO0VBQ0Usc0JBQUE7QUFuQk47QUFzQkU7RUFDRSw4QkFBQTtBQXBCSjtBQXNCRztFQUNDLGFBQUE7QUFwQko7QUFzQkU7RUFDRSxhQUFBO0FBcEJKOztBQXlCQTtFQUNFO0lBQ0UsZUFBQTtFQXRCRjtFQXlCQTtJQUNFLGFBQUE7RUF2QkY7RUF5QkU7SUFDRSxhQUFBO0VBdkJKO0VBNEJFO0lBRUUsZUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQTNCSjtFQTZCSTtJQUNFLCtCQUFBO0VBM0JOO0VBK0JFO0lBQ0UsU0FBQTtJQUNBLFlBQUE7RUE3Qko7RUFnQ0U7SUFDRSxZQUFBO0lBQ0EsU0FBQTtFQTlCSjtFQWtDQTtJQUNFO01BQ0UsVUFBQTtNQUNBLHNCQUFBO0lBaENGO0lBa0NBO01BQ0UsVUFBQTtNQUNBLG1CQUFBO0lBaENGO0VBQ0Y7QUFDRjtBQXFDQTtFQUNFLHVDQUFBO0VBQ0Esd0NBQUE7QUFuQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItcGlja2VyLWNvbnRhaW5lcjo6YmVmb3Jle1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgY29udGVudDogJyc7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0MzQ0NENjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDEzcHg7XG5cbn1cbi5jb2xvci1waWNrZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgaW5wdXR7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG59XG5cbi5pbnB1dC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZGZlNjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgbWluLWhlaWdodDogNDBweDtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICNjMGM0Y2M7XG4gIH1cblxuICAmLmZvY3VzZWQge1xuICAgIGJvcmRlci1jb2xvcjogIzQwOWVmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg2NCwgMTU4LCAyNTUsIDAuMik7XG4gIH1cblxuICAmOmhhcyguY29sb3ItaW5wdXQ6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZhO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG59XG5cbi5jb2xvci1wcmV2aWV3IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uY29sb3ItaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmbGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2MDYyNjY7XG4gIFxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYzBjNGNjO1xuICB9XG59XG5cbi5kcm9wZG93bi1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgY29sb3I6ICNjMGM0Y2M7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgXG4gICYucm90YXRlZCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxufVxuXG4uaW5wdXQtd3JhcHBlcjpob3ZlciAuZHJvcGRvd24taWNvbiB7XG4gIGNvbG9yOiAjOTA5Mzk5O1xufVxuXG4ucGlja2VyLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA1MDtcbiAgXG4gICYuZHJvcGRvd24tYm90dG9tIHtcbiAgICB0b3A6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIFxuICAgIC5waWNrZXItY29udGVudCB7XG4gICAgICBhbmltYXRpb246IHNsaWRlRG93biAwLjJzIGVhc2Utb3V0O1xuICAgIH1cbiAgfVxuICBcbiAgJi5kcm9wZG93bi10b3Age1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgXG4gICAgLnBpY2tlci1jb250ZW50IHtcbiAgICAgIGFuaW1hdGlvbjogc2xpZGVVcCAwLjJzIGVhc2Utb3V0O1xuICAgIH1cbiAgfVxufVxuXG4ucGlja2VyLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnBpY2tlci1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHotaW5kZXg6IDEwNTE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIFxuICAvLyDDkMKhw5HCgsORwoDDkMK1w5DCu8OQwrrDkMKwLcORwoPDkMK6w5DCsMOQwrfDkMKww5HCgsOQwrXDkMK7w5HCjFxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi1ib3R0b20gJjo6YmVmb3JlIHtcbiAgICB0b3A6IC02cHg7XG4gICAgbGVmdDogMjBweDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLXRvcCAmOjpiZWZvcmUge1xuICAgIGJvdHRvbTogLTZweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICB9XG59XG5cbi5jbG9zZS1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJhY2tncm91bmQ6ICM0MDllZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzM3ZWNjO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMyYTZjYjM7XG4gIH1cbn1cblxuLy8gw5DCkMOQwr3DkMK4w5DCvMOQwrDDkcKGw5DCuMOQwrhcbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gw5DCocORwoLDkMK4w5DCu8OQwrggw5DCtMOQwrvDkcKPIGNvbG9yLWNocm9tZSDDkMK6w5DCvsOQwrzDkMK/w5DCvsOQwr3DkMK1w5DCvcORwoLDkMKwXG46Om5nLWRlZXAgY29sb3ItY2hyb21lIHtcbiAgLmNocm9tZS1waWNrZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAuY2hyb21lLWJvZHl7XG4gICAgICBwYWRkaW5nOiAxNHB4IDZweCAxMnB4O1xuICAgIH1cbiAgfVxuICAuZmxleGJveC1maXg6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gICAuY2hyb21lLWNvbG9ye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNocm9tZS1maWVsZHMgLmNocm9tZS1maWVsZDpudGgtY2hpbGQoNCl7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4vLyDDkMKQw5DCtMOQwrDDkMK/w5HCgsOQwrjDkMKyw5DCvcOQwr7DkcKBw5HCgsORwoxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29sb3ItcGlja2VyLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAucGlja2VyLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8vIMOQwqHDkMK6w5HCgMORwovDkMKyw5DCsMOQwrXDkMK8IMORwoHDkcKCw5HCgMOQwrXDkMK7w5DCusORwoMgw5DCvcOQwrAgw5DCvMOQwr7DkMKxw5DCuMOQwrvDkcKMw5DCvcORwovDkcKFXG4gICAgfVxuICB9XG4gIFxuICAucGlja2VyLWRyb3Bkb3duIHtcbiAgICAmLmRyb3Bkb3duLWJvdHRvbSxcbiAgICAmLmRyb3Bkb3duLXRvcCB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBsZWZ0OiAxNnB4O1xuICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBcbiAgICAgIC5waWNrZXItY29udGVudCB7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICYuZHJvcGRvd24tYm90dG9tIHtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIGJvdHRvbTogMTZweDtcbiAgICB9XG4gICAgXG4gICAgJi5kcm9wZG93bi10b3Age1xuICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgdG9wOiAxNnB4O1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLmFwcGx5LWJ0biB7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 128:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/ui/color-picker/color-picker-standart/color-picker-standart.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorPickerStandartComponent: () => (/* binding */ ColorPickerStandartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_color_chrome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color/chrome */ 2020);
/* harmony import */ var _cdk_panel_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cdk/panel/panel.component */ 3176);






const _c0 = function (a0) {
  return {
    "background-color": a0
  };
};
function ColorPickerStandartComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColorPickerStandartComponent_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const col_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.currentColor = col_r1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, col_r1));
  }
}
const _c1 = function (a0) {
  return {
    "--input-color": a0
  };
};
class ColorPickerStandartComponent {
  constructor() {
    this.placeholder = 'Выберите цвет';
    this.disabled = false;
    this.preferredPlacement = 'bottom';
    this.standartColor = '';
    this.color = '#000000';
    this.currentColor = '#000000';
    this.isOpen = false;
    this.history = [];
    this.onChange = () => {};
    this.onTouched = () => {};
  }
  ngOnInit() {
    if (this.standartColor != '') this.history.push(this.standartColor);
    if (this.color != '') this.currentColor = this.color;
  }
  writeValue(value) {
    if (value && this.isValidColor(value)) {
      this.color = value;
      this.currentColor = value;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  handleTouched() {
    this.onTouched();
  }
  togglePicker() {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.handleTouched();
    }
  }
  closePicker() {
    this.isOpen = false;
  }
  apply() {
    this.onColorChange(this.currentColor);
  }
  onColorChange(colorEvent) {
    if (colorEvent && colorEvent != this.color) {
      this.addColorInHistory(this.color);
      this.color = colorEvent;
      this.onChange(this.color);
    }
  }
  addColorInHistory(color) {
    if (this.history[0] != color && !this.history.includes(color)) {
      this.history.splice(1, 0, color);
    }
    if (this.history.length > 9) this.history.pop();
  }
  isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
  }
  static {
    this.ɵfac = function ColorPickerStandartComponent_Factory(t) {
      return new (t || ColorPickerStandartComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ColorPickerStandartComponent,
      selectors: [["app-color-picker-standart"]],
      inputs: {
        placeholder: "placeholder",
        disabled: "disabled",
        preferredPlacement: "preferredPlacement",
        standartColor: "standartColor"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => ColorPickerStandartComponent),
        multi: true
      }])],
      decls: 9,
      vars: 17,
      consts: [[3, "isOpen", "preferredPlacement", "closed"], ["trigger", "", 1, "color-picker-trigger"], ["type", "text", "readonly", "", 1, "color-input", 3, "value", "placeholder", "click", "blur"], ["content", ""], [3, "color", "disableAlpha", "colorChange"], [1, "color-history"], ["class", "history-color", 3, "style", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "close-btn", "apply-btn", 3, "disabled", "click"], [1, "history-color", 3, "click"]],
      template: function ColorPickerStandartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-panel", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function ColorPickerStandartComponent_Template_app_panel_closed_0_listener() {
            return ctx.closePicker();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColorPickerStandartComponent_Template_input_click_2_listener() {
            return ctx.togglePicker();
          })("blur", function ColorPickerStandartComponent_Template_input_blur_2_listener() {
            return ctx.handleTouched();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "color-chrome", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("colorChange", function ColorPickerStandartComponent_Template_color_chrome_colorChange_4_listener($event) {
            return ctx.currentColor = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ColorPickerStandartComponent_div_6_Template, 1, 4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColorPickerStandartComponent_Template_button_click_7_listener() {
            return ctx.apply();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isOpen", ctx.isOpen)("preferredPlacement", ctx.preferredPlacement);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx.color));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.color)("placeholder", ctx.placeholder);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.currentColor)("disableAlpha", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.history);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.currentColor));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.currentColor == ctx.color);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentColor == ctx.color ? "\u0426\u0432\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u0435\u043D" : "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ngx_color_chrome__WEBPACK_IMPORTED_MODULE_4__.ChromeComponent, _cdk_panel_panel_component__WEBPACK_IMPORTED_MODULE_0__.PanelComponent],
      styles: [".color-picker-trigger[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 200px;\n}\n.color-picker-trigger[_ngcontent-%COMP%]::before {\n  display: block;\n  width: 40px;\n  height: 10px;\n  content: \"\";\n  background-color: var(--input-color);\n  border: 1px solid #C3CCD6;\n  position: absolute;\n  top: 15px;\n  left: 13px;\n  z-index: 1;\n}\n.color-picker-trigger[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 60px;\n  width: 100%;\n  border: 1px solid #dcdfe6;\n  border-radius: 6px;\n  padding: 8px 12px 8px 60px;\n  background: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  min-height: 40px;\n  font-size: 14px;\n  color: #606266;\n}\n.color-picker-trigger[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  border-color: #c0c4cc;\n}\n.color-picker-trigger[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--header_menu);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n  outline: none;\n}\n.color-picker-trigger[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f7fa;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.color-picker-trigger[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #c0c4cc;\n}\n\n.color-history[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 12px auto 0;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n\n.history-color[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.35);\n}\n.history-color[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  border-color: #409eff;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 12px;\n  padding: 8px 16px;\n  background: #409eff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  font-size: 14px;\n  font-weight: 500;\n}\n.close-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #337ecc;\n}\n.close-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  background: #2a6cb3;\n}\n.close-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.apply-btn[_ngcontent-%COMP%] {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n  text-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\n}\n\n  color-chrome .chrome-picker {\n  width: 100% !important;\n  box-shadow: none !important;\n  border-radius: 0 !important;\n}\n  color-chrome .chrome-picker .chrome-body {\n  padding: 14px 6px 12px;\n}\n  color-chrome .flexbox-fix:last-child {\n  border-bottom: none !important;\n}\n  color-chrome .chrome-color {\n  display: none;\n}\n  color-chrome .chrome-fields .chrome-field:nth-child(4) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3VpL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXItc3RhbmRhcnQvY29sb3ItcGlja2VyLXN0YW5kYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBSjtBQUVJO0VBQ0UscUJBQUE7QUFBTjtBQUdJO0VBQ0UsZ0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7QUFETjtBQUlJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFGTjtBQUtJO0VBQ0UsY0FBQTtBQUhOOztBQVFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFMRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSx1Q0FBQTtBQUxGO0FBT0U7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0FBTEo7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU5GO0FBUUU7RUFDRSxtQkFBQTtBQU5KO0FBU0U7RUFDRSxtQkFBQTtBQVBKO0FBVUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFZQTtFQUNFLHVDQUFBO0VBQ0Esd0NBQUE7QUFURjs7QUFjRTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQVhKO0FBYUk7RUFDRSxzQkFBQTtBQVhOO0FBZUU7RUFDRSw4QkFBQTtBQWJKO0FBZ0JFO0VBQ0UsYUFBQTtBQWRKO0FBaUJFO0VBQ0UsYUFBQTtBQWZKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLXBpY2tlci10cmlnZ2VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgXG4gICY6OmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzNDQ0Q2O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTNweDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICBpbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RmZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDhweCAxMnB4IDhweCA2MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNjA2MjY2O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYzBjNGNjO1xuICAgIH1cbiAgICBcbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGVhZGVyX21lbnUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZhO1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG4gICAgXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICNjMGM0Y2M7XG4gICAgfVxuICB9XG59XG5cbi5jb2xvci1oaXN0b3J5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMnB4IGF1dG8gMDtcbiAgZ2FwOiA1cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmhpc3RvcnktY29sb3Ige1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGJvcmRlci1jb2xvcjogIzQwOWVmZjtcbiAgfVxufVxuXG4uY2xvc2UtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjNDA5ZWZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogIzMzN2VjYztcbiAgfVxuXG4gICY6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmE2Y2IzO1xuICB9XG4gIFxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxufVxuXG4uYXBwbHktYnRuIHtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4vLyDDkMKhw5HCgsOQwrjDkMK7w5DCuCDDkMK0w5DCu8ORwo8gY29sb3ItY2hyb21lIMOQwrrDkMK+w5DCvMOQwr/DkMK+w5DCvcOQwrXDkMK9w5HCgsOQwrBcbjo6bmctZGVlcCBjb2xvci1jaHJvbWUge1xuICAuY2hyb21lLXBpY2tlciB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgIFxuICAgIC5jaHJvbWUtYm9keSB7XG4gICAgICBwYWRkaW5nOiAxNHB4IDZweCAxMnB4O1xuICAgIH1cbiAgfVxuICBcbiAgLmZsZXhib3gtZml4Omxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmNocm9tZS1jb2xvciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmNocm9tZS1maWVsZHMgLmNocm9tZS1maWVsZDpudGgtY2hpbGQoNCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7236:
/*!***************************************************************!*\
  !*** ./src/app/shared/ui/color-picker/color-picker.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorPickerModule: () => (/* binding */ ColorPickerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _color_picker_demo_color_picker_demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-picker-demo/color-picker-demo.component */ 2188);
/* harmony import */ var _lib_ngx_color_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-color.module */ 3803);
/* harmony import */ var _lib_ngx_color_picker_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ngx-color-picker.module */ 5132);
/* harmony import */ var _color_picker_standart_color_picker_standart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color-picker-standart/color-picker-standart.component */ 128);
/* harmony import */ var _cdk_cdk_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cdk/cdk.module */ 6926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);







class ColorPickerModule {
  static {
    this.ɵfac = function ColorPickerModule_Factory(t) {
      return new (t || ColorPickerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: ColorPickerModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _lib_ngx_color_module__WEBPACK_IMPORTED_MODULE_1__.NgxColorModule, _lib_ngx_color_picker_module__WEBPACK_IMPORTED_MODULE_2__.NgxColorPickerModule, _cdk_cdk_module__WEBPACK_IMPORTED_MODULE_4__.CdkModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ColorPickerModule, {
    declarations: [_color_picker_demo_color_picker_demo_component__WEBPACK_IMPORTED_MODULE_0__.ColorPickerDemoComponent, _color_picker_standart_color_picker_standart_component__WEBPACK_IMPORTED_MODULE_3__.ColorPickerStandartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _lib_ngx_color_module__WEBPACK_IMPORTED_MODULE_1__.NgxColorModule, _lib_ngx_color_picker_module__WEBPACK_IMPORTED_MODULE_2__.NgxColorPickerModule, _cdk_cdk_module__WEBPACK_IMPORTED_MODULE_4__.CdkModule],
    exports: [_color_picker_demo_color_picker_demo_component__WEBPACK_IMPORTED_MODULE_0__.ColorPickerDemoComponent, _color_picker_standart_color_picker_standart_component__WEBPACK_IMPORTED_MODULE_3__.ColorPickerStandartComponent]
  });
})();

/***/ }),

/***/ 5132:
/*!***********************************************************************!*\
  !*** ./src/app/shared/ui/color-picker/lib/ngx-color-picker.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxColorPickerModule: () => (/* binding */ NgxColorPickerModule)
/* harmony export */ });
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-color-picker */ 6245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class NgxColorPickerModule {
  static {
    this.ɵfac = function NgxColorPickerModule_Factory(t) {
      return new (t || NgxColorPickerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgxColorPickerModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__.ColorPickerModule, ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__.ColorPickerModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxColorPickerModule, {
    imports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__.ColorPickerModule],
    exports: [ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__.ColorPickerModule]
  });
})();

/***/ }),

/***/ 3803:
/*!****************************************************************!*\
  !*** ./src/app/shared/ui/color-picker/lib/ngx-color.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxColorModule: () => (/* binding */ NgxColorModule)
/* harmony export */ });
/* harmony import */ var ngx_color_alpha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-color/alpha */ 6398);
/* harmony import */ var ngx_color_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-color/block */ 5969);
/* harmony import */ var ngx_color_chrome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color/chrome */ 2020);
/* harmony import */ var ngx_color_circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color/circle */ 8158);
/* harmony import */ var ngx_color_compact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color/compact */ 1749);
/* harmony import */ var ngx_color_github__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color/github */ 2167);
/* harmony import */ var ngx_color_hue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-color/hue */ 4808);
/* harmony import */ var ngx_color_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color/material */ 7729);
/* harmony import */ var ngx_color_photoshop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-color/photoshop */ 7314);
/* harmony import */ var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-color/sketch */ 7734);
/* harmony import */ var ngx_color_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-color/slider */ 6733);
/* harmony import */ var ngx_color_swatches__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-color/swatches */ 2762);
/* harmony import */ var ngx_color_twitter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-color/twitter */ 5543);
/* harmony import */ var ngx_color_shade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-color/shade */ 5385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
 // <color-alpha-picker></color-alpha-picker>
 // <color-block></color-block>
 // <color-chrome></color-chrome>
 // <color-circle></color-circle>
 // <color-compact></color-compact>
 // <color-github></color-github>
 // <color-hue-picker></color-hue-picker>
 // <color-material></color-material>
 // <color-photoshop></color-photoshop>
 // <color-sketch></color-sketch>
 // <color-slider></color-slider>
 // <color-swatches></color-swatches>
 // <color-twitter></color-twitter>
 // <color-shade-picker></color-shade-picker>

class NgxColorModule {
  static {
    this.ɵfac = function NgxColorModule_Factory(t) {
      return new (t || NgxColorModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgxColorModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [ngx_color_alpha__WEBPACK_IMPORTED_MODULE_1__.ColorAlphaModule, ngx_color_block__WEBPACK_IMPORTED_MODULE_2__.ColorBlockModule, ngx_color_chrome__WEBPACK_IMPORTED_MODULE_3__.ColorChromeModule, ngx_color_circle__WEBPACK_IMPORTED_MODULE_4__.ColorCircleModule, ngx_color_compact__WEBPACK_IMPORTED_MODULE_5__.ColorCompactModule, ngx_color_github__WEBPACK_IMPORTED_MODULE_6__.ColorGithubModule, ngx_color_hue__WEBPACK_IMPORTED_MODULE_7__.ColorHueModule, ngx_color_material__WEBPACK_IMPORTED_MODULE_8__.ColorMaterialModule, ngx_color_photoshop__WEBPACK_IMPORTED_MODULE_9__.ColorPhotoshopModule, ngx_color_sketch__WEBPACK_IMPORTED_MODULE_10__.ColorSketchModule, ngx_color_slider__WEBPACK_IMPORTED_MODULE_11__.ColorSliderModule, ngx_color_swatches__WEBPACK_IMPORTED_MODULE_12__.ColorSwatchesModule, ngx_color_twitter__WEBPACK_IMPORTED_MODULE_13__.ColorTwitterModule, ngx_color_shade__WEBPACK_IMPORTED_MODULE_14__.ColorShadeModule, ngx_color_alpha__WEBPACK_IMPORTED_MODULE_1__.ColorAlphaModule, ngx_color_block__WEBPACK_IMPORTED_MODULE_2__.ColorBlockModule, ngx_color_chrome__WEBPACK_IMPORTED_MODULE_3__.ColorChromeModule, ngx_color_circle__WEBPACK_IMPORTED_MODULE_4__.ColorCircleModule, ngx_color_compact__WEBPACK_IMPORTED_MODULE_5__.ColorCompactModule, ngx_color_github__WEBPACK_IMPORTED_MODULE_6__.ColorGithubModule, ngx_color_hue__WEBPACK_IMPORTED_MODULE_7__.ColorHueModule, ngx_color_material__WEBPACK_IMPORTED_MODULE_8__.ColorMaterialModule, ngx_color_photoshop__WEBPACK_IMPORTED_MODULE_9__.ColorPhotoshopModule, ngx_color_sketch__WEBPACK_IMPORTED_MODULE_10__.ColorSketchModule, ngx_color_slider__WEBPACK_IMPORTED_MODULE_11__.ColorSliderModule, ngx_color_swatches__WEBPACK_IMPORTED_MODULE_12__.ColorSwatchesModule, ngx_color_twitter__WEBPACK_IMPORTED_MODULE_13__.ColorTwitterModule, ngx_color_shade__WEBPACK_IMPORTED_MODULE_14__.ColorShadeModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxColorModule, {
    imports: [ngx_color_alpha__WEBPACK_IMPORTED_MODULE_1__.ColorAlphaModule, ngx_color_block__WEBPACK_IMPORTED_MODULE_2__.ColorBlockModule, ngx_color_chrome__WEBPACK_IMPORTED_MODULE_3__.ColorChromeModule, ngx_color_circle__WEBPACK_IMPORTED_MODULE_4__.ColorCircleModule, ngx_color_compact__WEBPACK_IMPORTED_MODULE_5__.ColorCompactModule, ngx_color_github__WEBPACK_IMPORTED_MODULE_6__.ColorGithubModule, ngx_color_hue__WEBPACK_IMPORTED_MODULE_7__.ColorHueModule, ngx_color_material__WEBPACK_IMPORTED_MODULE_8__.ColorMaterialModule, ngx_color_photoshop__WEBPACK_IMPORTED_MODULE_9__.ColorPhotoshopModule, ngx_color_sketch__WEBPACK_IMPORTED_MODULE_10__.ColorSketchModule, ngx_color_slider__WEBPACK_IMPORTED_MODULE_11__.ColorSliderModule, ngx_color_swatches__WEBPACK_IMPORTED_MODULE_12__.ColorSwatchesModule, ngx_color_twitter__WEBPACK_IMPORTED_MODULE_13__.ColorTwitterModule, ngx_color_shade__WEBPACK_IMPORTED_MODULE_14__.ColorShadeModule],
    exports: [ngx_color_alpha__WEBPACK_IMPORTED_MODULE_1__.ColorAlphaModule, ngx_color_block__WEBPACK_IMPORTED_MODULE_2__.ColorBlockModule, ngx_color_chrome__WEBPACK_IMPORTED_MODULE_3__.ColorChromeModule, ngx_color_circle__WEBPACK_IMPORTED_MODULE_4__.ColorCircleModule, ngx_color_compact__WEBPACK_IMPORTED_MODULE_5__.ColorCompactModule, ngx_color_github__WEBPACK_IMPORTED_MODULE_6__.ColorGithubModule, ngx_color_hue__WEBPACK_IMPORTED_MODULE_7__.ColorHueModule, ngx_color_material__WEBPACK_IMPORTED_MODULE_8__.ColorMaterialModule, ngx_color_photoshop__WEBPACK_IMPORTED_MODULE_9__.ColorPhotoshopModule, ngx_color_sketch__WEBPACK_IMPORTED_MODULE_10__.ColorSketchModule, ngx_color_slider__WEBPACK_IMPORTED_MODULE_11__.ColorSliderModule, ngx_color_swatches__WEBPACK_IMPORTED_MODULE_12__.ColorSwatchesModule, ngx_color_twitter__WEBPACK_IMPORTED_MODULE_13__.ColorTwitterModule, ngx_color_shade__WEBPACK_IMPORTED_MODULE_14__.ColorShadeModule]
  });
})();

/***/ }),

/***/ 9421:
/*!****************************************!*\
  !*** ./src/app/shared/ui/ui.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiModule: () => (/* binding */ UiModule)
/* harmony export */ });
/* harmony import */ var _color_picker_color_picker_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-picker/color-picker.module */ 7236);
/* harmony import */ var _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete/autocomplete.module */ 268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class UiModule {
  static {
    this.ɵfac = function UiModule_Factory(t) {
      return new (t || UiModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: UiModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_color_picker_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.ColorPickerModule, _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__.AutocompleteModule, _color_picker_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.ColorPickerModule, _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__.AutocompleteModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiModule, {
    imports: [_color_picker_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.ColorPickerModule, _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__.AutocompleteModule],
    exports: [_color_picker_color_picker_module__WEBPACK_IMPORTED_MODULE_0__.ColorPickerModule, _autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__.AutocompleteModule]
  });
})();

/***/ }),

/***/ 8678:
/*!**************************************!*\
  !*** ./src/app/token.interceptor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenInterceptor: () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/services/auth.service */ 3767);
/* harmony import */ var _api_api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/api-configuration */ 7942);




class TokenInterceptor {
  constructor(auth, apiConfig) {
    this.auth = auth;
    this.apiUrl = apiConfig.rootUrl;
  }
  intercept(request, next) {
    if (this.requestNotNeedToken(request)) {
      return next.handle(request);
    }
    if (!this.auth.isTokenExpired()) {
      return next.handle(this.injectToken(request));
    }
    if (!this.refreshTokenSubject) {
      this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
      this.auth.refreshToken().subscribe(() => {
        this.refreshTokenSubject.next();
        this.refreshTokenSubject.complete();
        this.refreshTokenSubject = undefined;
      });
    }
    return this.refreshTokenSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => next.handle(this.injectToken(request))));
  }
  injectToken(request) {
    const token = this.auth.getToken();
    if (token && request.url.startsWith(this.apiUrl)) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
    }
    return request;
  }
  requestNotNeedToken(request) {
    const whiteList = ['/user_update_token', '/user_logout'];
    return whiteList.some(path => request.url.endsWith(path));
  }
  static {
    this.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_api_configuration__WEBPACK_IMPORTED_MODULE_1__.ApiConfiguration));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 40:
/*!*************************************!*\
  !*** ./src/app/validators/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emailValidator: () => (/* reexport safe */ _pattern_validator__WEBPACK_IMPORTED_MODULE_0__.emailValidator),
/* harmony export */   innValidator: () => (/* reexport safe */ _pattern_validator__WEBPACK_IMPORTED_MODULE_0__.innValidator),
/* harmony export */   patternValidator: () => (/* reexport safe */ _pattern_validator__WEBPACK_IMPORTED_MODULE_0__.patternValidator)
/* harmony export */ });
/* harmony import */ var _pattern_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pattern-validator */ 1505);


/***/ }),

/***/ 1505:
/*!*************************************************!*\
  !*** ./src/app/validators/pattern-validator.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emailValidator: () => (/* binding */ emailValidator),
/* harmony export */   innValidator: () => (/* binding */ innValidator),
/* harmony export */   patternValidator: () => (/* binding */ patternValidator)
/* harmony export */ });
function patternValidator(cause, pattern) {
  return control => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const allowed = pattern.test(control.value);
    return allowed ? null : {
      [cause]: true
    };
  };
}
const innValidator = patternValidator('inn', /^([0-9]{10,12})$/);
const emailValidator = patternValidator('email', /^[a-z\.\-_0-9]+@[a-z\.\-_0-9]+\.[a-z]{2,}$/i);
function isEmptyInputValue(value) {
  return value == null || (typeof value === 'string' || Array.isArray(value)) && value.length === 0;
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiUrl: 'https://dev.cargodrom.com/api/1.0'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map