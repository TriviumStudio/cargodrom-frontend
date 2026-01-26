"use strict";
(self["webpackChunkcargodrom_frontend"] = self["webpackChunkcargodrom_frontend"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 78444:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 83767);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class AuthGuard {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate(route, state) {
    const isAuthenticated = this.auth.isAuthenticated();
    if (!isAuthenticated) {
      const currentState = {
        returnUrl: state.url
      };
      this.router.navigate(['/login'], {
        queryParams: currentState
      });
      // this.router.navigate(['/pages/dashboard']);
      return false;
    }
    return isAuthenticated;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 57044:
/*!*****************************************************************!*\
  !*** ./src/app/pages/components/currency/currency.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrencyComponent: () => (/* binding */ CurrencyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);


class CurrencyComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function CurrencyComponent_Factory(t) {
      return new (t || CurrencyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurrencyComponent,
      selectors: [["app-currency"]],
      inputs: {
        name: "name",
        code: "code",
        rate: "rate"
      },
      decls: 7,
      vars: 5,
      consts: [[1, "currency", 2, "margin", "auto 0"]],
      template: function CurrencyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0)(1, "span")(2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.name, " (", ctx.code, ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.rate));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 16708:
/*!*************************************************************!*\
  !*** ./src/app/pages/components/header/header.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services */ 43273);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 12587);
/* harmony import */ var _services_urrency_currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/сurrency/currency.service */ 69110);
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages.service */ 11152);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../currency/currency.component */ 57044);










function HeaderComponent_ng_container_64_app_currency_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-currency", 59);
  }
  if (rf & 2) {
    const cur_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", cur_r4.code)("code", cur_r4.char)("rate", cur_r4.currency);
  }
}
function HeaderComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_ng_container_64_app_currency_1_Template, 1, 3, "app-currency", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const cur_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", cur_r4.currency);
  }
}
function HeaderComponent_div_70_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 66)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r9.value);
  }
}
function HeaderComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, ">>");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, HeaderComponent_div_70_div_7_Template, 5, 2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", row_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", row_r7.items);
  }
}
function HeaderComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.numberOfNewMessages);
  }
}
class HeaderComponent {
  // @ViewChild('currencyDialog') currencyDialog!: TemplateRef<void>;
  constructor(systemService, matDialog, currencyService, messageService, pageService) {
    this.systemService = systemService;
    this.matDialog = matDialog;
    this.currencyService = currencyService;
    this.messageService = messageService;
    this.pageService = pageService;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    // isVisiblePopap = false;
    this.currencyList = [];
    this.currencySummary = {};
    this.numberOfNewMessages = 0;
    this.logoUrl$ = this.pageService.getLogoLink();
  }
  ngOnInit() {
    // this.updateCurrency();
    this.subscribeCurrency();
    this.subscribeSummary();
    this.getNewMessage();
  }
  subscribeCurrency() {
    this.currencyService.currencies$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe(currencies => {
      this.currencyList = currencies;
      console.log('currencies', currencies);
    });
  }
  subscribeSummary() {
    this.currencyService.summary$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe(summary => {
      this.currencySummary = summary;
      console.log('summary', summary);
    });
  }
  getNewMessage() {
    this.messageService.messageGetNew().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._destroy$)).subscribe(mes => {
      this.numberOfNewMessages = mes.length;
      console.log('new message', mes);
    });
  }
  updateCurrency() {
    this.currencyService.refresh();
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_urrency_currency_service__WEBPACK_IMPORTED_MODULE_1__.CurrencyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_pages_service__WEBPACK_IMPORTED_MODULE_2__.BrandingService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 84,
      vars: 5,
      consts: [[1, "header"], [1, "main-menu"], ["href", "/erp", 1, "logo"], ["routerLink", "./dashboard", "routerLinkActive", "sel", 1, "item", "dashboard"], ["width", "18", "height", "18", "viewBox", "0 0 18 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6.49988 0H1.5C0.67157 0 0 0.67157 0 1.5V9.5C0 10.3284 0.67157 11 1.5 11H6.49988C7.32831 11 7.99988 10.3284 7.99988 9.5V1.5C7.99988 0.67157 7.32831 0 6.49988 0ZM6.99988 9.5C6.99988 9.7757 6.77557 10 6.49988 10H1.5C1.2243 10 1 9.7757 1 9.5V1.5C1 1.2243 1.2243 1 1.5 1H6.49988C6.77557 1 6.99988 1.2243 6.99988 1.5V9.5ZM16.4999 0H11.5C10.6716 0 10 0.67157 10 1.5V5.5C10 6.32843 10.6716 7 11.5 7H16.4999C17.3283 7 17.9999 6.32843 17.9999 5.5V1.5C17.9999 0.67157 17.3283 0 16.4999 0ZM16.9999 5.5C16.9999 5.7757 16.7756 6 16.4999 6H11.5C11.2243 6 11 5.7757 11 5.5V1.5C11 1.2243 11.2243 1 11.5 1H16.4999C16.7756 1 16.9999 1.2243 16.9999 1.5V5.5ZM16.4999 9.00006H11.5C10.6716 9.00006 10 9.67163 10 10.5001V16.5C10 17.3284 10.6716 18 11.5 18H16.4999C17.3283 18 17.9999 17.3284 17.9999 16.5V10.5001C17.9999 9.67163 17.3283 9.00006 16.4999 9.00006ZM16.9999 16.5C16.9999 16.7757 16.7756 17 16.4999 17H11.5C11.2243 17 11 16.7757 11 16.5V10.5001C11 10.2244 11.2243 10.0001 11.5 10.0001H16.4999C16.7756 10.0001 16.9999 10.2244 16.9999 10.5001V16.5ZM6.49988 13.0001H1.5C0.67157 13.0001 0 13.6716 0 14.5001V16.5C0 17.3284 0.67157 18 1.5 18H6.49988C7.32831 18 7.99988 17.3284 7.99988 16.5V14.5001C7.99988 13.6716 7.32831 13.0001 6.49988 13.0001ZM6.99988 16.5C6.99988 16.7757 6.77557 17 6.49988 17H1.5C1.2243 17 1 16.7757 1 16.5V14.5001C1 14.2244 1.2243 14.0001 1.5 14.0001H6.49988C6.77557 14.0001 6.99988 14.2244 6.99988 14.5001V16.5Z", "fill", "#B4C3EB"], ["routerLink", "./request", "routerLinkActive", "sel", 1, "item", "request"], ["width", "26", "height", "26", "viewBox", "0 0 26 26", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M19.2748 18H6.72498C5.22253 18 3.99988 16.7773 3.99988 15.2749V12.5C3.99988 12.2236 4.22351 12 4.49988 12C4.77625 12 4.99988 12.2236 4.99988 12.5V15.2749C4.99988 16.2261 5.7738 17 6.72498 17H19.2748C20.226 17 20.9999 16.2261 20.9999 15.2749V12.5C20.9999 12.2236 21.2235 12 21.4999 12C21.7762 12 21.9999 12.2236 21.9999 12.5V15.2749C21.9999 16.7773 20.7772 18 19.2748 18Z", "fill", "#B4C3EB"], ["d", "M12.9999 12C12.8661 12 12.7382 11.9463 12.6439 11.8516L9.46179 8.62988C7.51599 6.65918 7.51599 3.45361 9.46179 1.48291C10.4066 0.526856 11.663 0 12.9999 0C14.3368 0 15.5931 0.526855 16.538 1.48291C18.4838 3.45361 18.4838 6.65918 16.538 8.62988L13.3558 11.8516C13.2616 11.9463 13.1337 12 12.9999 12ZM12.9999 1C11.9325 1 10.9286 1.4209 10.1737 2.18604C8.61023 3.76855 8.61023 6.34424 10.1737 7.92676L12.9999 10.7886L15.826 7.92676C17.3895 6.34424 17.3895 3.76855 15.826 2.18604C15.0712 1.4209 14.0673 1 12.9999 1Z", "fill", "#B4C3EB"], ["d", "M12.9999 6C13.5522 6 13.9999 5.55229 13.9999 5C13.9999 4.44772 13.5522 4 12.9999 4C12.4476 4 11.9999 4.44772 11.9999 5C11.9999 5.55229 12.4476 6 12.9999 6Z", "fill", "#B4C3EB"], ["routerLink", "./bit", "routerLinkActive", "sel", 1, "item", "bit"], ["width", "18", "height", "20", "viewBox", "0 0 18 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M-0.00012207 4V16C-0.00012207 17.5786 3.77136 18 5.99988 18C5.99988 19.5786 9.77136 20 11.9999 20C14.2284 20 17.9999 19.5786 17.9999 18V2C17.9999 0.421387 14.2284 0 11.9999 0C9.77136 0 5.99988 0.421387 5.99988 2C3.77136 2 -0.00012207 2.42139 -0.00012207 4ZM5.99988 3V5C3.03699 5 1.20886 4.36084 1.00671 4C1.20886 3.63916 3.03699 3 5.99988 3ZM6.99988 3.18878C8.27325 3.80511 10.4894 4 11.9999 4C13.5103 4 15.7265 3.80511 16.9999 3.18878V6C16.8632 6.33545 15.0219 7 11.9999 7C8.98633 7 7.14856 6.33948 6.99988 5.9823V3.18878ZM16.9999 7.18878V10C16.8632 10.3354 15.0219 11 11.9999 11C8.98633 11 7.14856 10.3395 6.99988 9.9823V7.18878C8.27325 7.80511 10.4894 8 11.9999 8C13.5103 8 15.7265 7.80511 16.9999 7.18878ZM16.9999 14C16.8632 14.3354 15.0219 15 11.9999 15C8.98633 15 7.14856 14.3395 6.99988 13.9823V11.1888C8.27325 11.8051 10.4894 12 11.9999 12C13.5103 12 15.7265 11.8051 16.9999 11.1888V14ZM16.9999 2.0177V2.02393C16.8512 2.33948 15.0134 3 11.9999 3C9.03699 3 7.20886 2.36084 7.00671 2C7.20886 1.63916 9.03699 1 11.9999 1C15.0134 1 16.8512 1.66052 16.9999 2.0177ZM6.99988 17.9823V15.1888C8.27325 15.8051 10.4894 16 11.9999 16C13.5103 16 15.7265 15.8051 16.9999 15.1888V18C16.8632 18.3354 15.0219 19 11.9999 19C8.98633 19 7.14856 18.3395 6.99988 17.9823ZM0.999878 13.1888C2.27325 13.8051 4.48944 14 5.99988 14V17C2.98633 17 1.14856 16.3395 0.999878 15.9823V13.1888ZM0.999878 9.18878C2.27325 9.80511 4.48944 10 5.99988 10V13C2.98633 13 1.14856 12.3395 0.999878 11.9823V9.18878ZM0.999878 5.18878C2.27325 5.80511 4.48944 6 5.99988 6V9C2.98633 9 1.14856 8.33948 0.999878 7.9823V5.18878Z", "fill", "#B4C3EB"], ["routerLink", "./order/transportation", "routerLinkActive", "sel", 1, "item", "order"], ["d", "M15.2128 18H2.78699C1.25037 18 -0.00012207 16.7495 -0.00012207 15.2129V9.5C-0.00012207 9.22363 0.223511 9 0.499878 9C0.776245 9 0.999878 9.22363 0.999878 9.5V15.2129C0.999878 16.1982 1.80164 17 2.78699 17H15.2128C16.1981 17 16.9999 16.1982 16.9999 15.2129V9.5C16.9999 9.22363 17.2235 9 17.4999 9C17.7762 9 17.9999 9.22363 17.9999 9.5V15.2129C17.9999 16.7495 16.7494 18 15.2128 18Z", "fill", "#B4C3EB"], ["d", "M5.49988 11C5.37195 11 5.24402 10.9512 5.14636 10.8535L3.14636 8.85352C2.95105 8.6582 2.95105 8.3418 3.14636 8.14648C3.34167 7.95117 3.65808 7.95117 3.85339 8.14648L5.85339 10.1465C6.04871 10.3418 6.04871 10.6582 5.85339 10.8535C5.75574 10.9512 5.62781 11 5.49988 11Z", "fill", "#B4C3EB"], ["d", "M5.49988 11C5.37195 11 5.24402 10.9512 5.14636 10.8535C4.95105 10.6582 4.95105 10.3418 5.14636 10.1465L7.14636 8.14648C7.34167 7.95117 7.65808 7.95117 7.85339 8.14648C8.04871 8.3418 8.04871 8.6582 7.85339 8.85352L5.85339 10.8535C5.75574 10.9512 5.62781 11 5.49988 11Z", "fill", "#B4C3EB"], ["d", "M5.49988 7C5.37195 7 5.24402 6.95117 5.14636 6.85352L3.14636 4.85352C2.95105 4.6582 2.95105 4.3418 3.14636 4.14648C3.34167 3.95117 3.65808 3.95117 3.85339 4.14648L5.85339 6.14648C6.04871 6.3418 6.04871 6.6582 5.85339 6.85352C5.75574 6.95117 5.62781 7 5.49988 7Z", "fill", "#B4C3EB"], ["d", "M5.49988 7C5.37195 7 5.24402 6.95117 5.14636 6.85352C4.95105 6.6582 4.95105 6.3418 5.14636 6.14648L7.14636 4.14648C7.34167 3.95117 7.65808 3.95117 7.85339 4.14648C8.04871 4.3418 8.04871 4.6582 7.85339 4.85352L5.85339 6.85352C5.75574 6.95117 5.62781 7 5.49988 7Z", "fill", "#B4C3EB"], ["d", "M5.49988 3C5.37195 3 5.24402 2.95117 5.14636 2.85352L3.14636 0.853516C2.95105 0.658203 2.95105 0.341797 3.14636 0.146484C3.34167 -0.0488281 3.65808 -0.0488281 3.85339 0.146484L5.85339 2.14648C6.04871 2.3418 6.04871 2.6582 5.85339 2.85352C5.75574 2.95117 5.62781 3 5.49988 3Z", "fill", "#B4C3EB"], ["d", "M5.49988 3C5.37195 3 5.24402 2.95117 5.14636 2.85352C4.95105 2.6582 4.95105 2.3418 5.14636 2.14648L7.14636 0.146484C7.34167 -0.0488281 7.65808 -0.0488281 7.85339 0.146484C8.04871 0.341797 8.04871 0.658203 7.85339 0.853516L5.85339 2.85352C5.75574 2.95117 5.62781 3 5.49988 3Z", "fill", "#B4C3EB"], ["d", "M14.4999 3C14.3719 3 14.244 2.95117 14.1464 2.85352L12.1464 0.853516C11.951 0.658203 11.951 0.341797 12.1464 0.146484C12.3417 -0.0488281 12.6581 -0.0488281 12.8534 0.146484L14.8534 2.14648C15.0487 2.3418 15.0487 2.6582 14.8534 2.85352C14.7557 2.95117 14.6278 3 14.4999 3Z", "fill", "#B4C3EB"], ["d", "M10.4999 3C10.3719 3 10.244 2.95117 10.1464 2.85352C9.95105 2.6582 9.95105 2.3418 10.1464 2.14648L12.1464 0.146484C12.3417 -0.0488281 12.6581 -0.0488281 12.8534 0.146484C13.0487 0.341797 13.0487 0.658203 12.8534 0.853516L10.8534 2.85352C10.7557 2.95117 10.6278 3 10.4999 3Z", "fill", "#B4C3EB"], ["d", "M14.4999 7C14.3719 7 14.244 6.95117 14.1464 6.85352L12.1464 4.85352C11.951 4.6582 11.951 4.3418 12.1464 4.14648C12.3417 3.95117 12.6581 3.95117 12.8534 4.14648L14.8534 6.14648C15.0487 6.3418 15.0487 6.6582 14.8534 6.85352C14.7557 6.95117 14.6278 7 14.4999 7Z", "fill", "#B4C3EB"], ["d", "M10.4999 7C10.3719 7 10.244 6.95117 10.1464 6.85352C9.95105 6.6582 9.95105 6.3418 10.1464 6.14648L12.1464 4.14648C12.3417 3.95117 12.6581 3.95117 12.8534 4.14648C13.0487 4.3418 13.0487 4.6582 12.8534 4.85352L10.8534 6.85352C10.7557 6.95117 10.6278 7 10.4999 7Z", "fill", "#B4C3EB"], ["d", "M14.4999 11C14.3719 11 14.244 10.9512 14.1464 10.8535L12.1464 8.85352C11.951 8.6582 11.951 8.3418 12.1464 8.14648C12.3417 7.95117 12.6581 7.95117 12.8534 8.14648L14.8534 10.1465C15.0487 10.3418 15.0487 10.6582 14.8534 10.8535C14.7557 10.9512 14.6278 11 14.4999 11Z", "fill", "#B4C3EB"], ["d", "M10.4999 11C10.3719 11 10.244 10.9512 10.1464 10.8535C9.95105 10.6582 9.95105 10.3418 10.1464 10.1465L12.1464 8.14648C12.3417 7.95117 12.6581 7.95117 12.8534 8.14648C13.0487 8.3418 13.0487 8.6582 12.8534 8.85352L10.8534 10.8535C10.7557 10.9512 10.6278 11 10.4999 11Z", "fill", "#B4C3EB"], ["routerLink", "./tariff", "routerLinkActive", "sel", 1, "item", "tariff"], ["width", "16", "height", "18", "viewBox", "0 0 16 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.9252 0H2.07458C0.930542 0 -0.00012207 0.930664 -0.00012207 2.07471V15.9253C-0.00012207 17.0693 0.930542 18 2.07458 18H13.9252C15.0692 18 15.9999 17.0693 15.9999 15.9253V2.07471C15.9999 0.930664 15.0692 0 13.9252 0ZM2.07458 1H13.9252C14.5179 1 14.9999 1.48193 14.9999 2.07471V5H0.999878V2.07471C0.999878 1.48193 1.48181 1 2.07458 1ZM13.9252 17H2.07458C1.48181 17 0.999878 16.5181 0.999878 15.9253V6H14.9999V15.9253C14.9999 16.5181 14.5179 17 13.9252 17ZM4.99988 8.5C4.99988 8.77637 4.77625 9 4.49988 9H3.49988C3.22351 9 2.99988 8.77637 2.99988 8.5C2.99988 8.22363 3.22351 8 3.49988 8H4.49988C4.77625 8 4.99988 8.22363 4.99988 8.5ZM8.99988 8.5C8.99988 8.77637 8.77625 9 8.49988 9H7.49988C7.22351 9 6.99988 8.77637 6.99988 8.5C6.99988 8.22363 7.22351 8 7.49988 8H8.49988C8.77625 8 8.99988 8.22363 8.99988 8.5ZM4.99988 11.5C4.99988 11.7764 4.77625 12 4.49988 12H3.49988C3.22351 12 2.99988 11.7764 2.99988 11.5C2.99988 11.2236 3.22351 11 3.49988 11H4.49988C4.77625 11 4.99988 11.2236 4.99988 11.5ZM8.99988 11.5C8.99988 11.7764 8.77625 12 8.49988 12H7.49988C7.22351 12 6.99988 11.7764 6.99988 11.5C6.99988 11.2236 7.22351 11 7.49988 11H8.49988C8.77625 11 8.99988 11.2236 8.99988 11.5ZM4.99988 14.5C4.99988 14.7764 4.77625 15 4.49988 15H3.49988C3.22351 15 2.99988 14.7764 2.99988 14.5C2.99988 14.2236 3.22351 14 3.49988 14H4.49988C4.77625 14 4.99988 14.2236 4.99988 14.5ZM8.99988 14.5C8.99988 14.7764 8.77625 15 8.49988 15H7.49988C7.22351 15 6.99988 14.7764 6.99988 14.5C6.99988 14.2236 7.22351 14 7.49988 14H8.49988C8.77625 14 8.99988 14.2236 8.99988 14.5ZM12.9999 8.5C12.9999 8.77637 12.7762 9 12.4999 9H11.4999C11.2235 9 10.9999 8.77637 10.9999 8.5C10.9999 8.22363 11.2235 8 11.4999 8H12.4999C12.7762 8 12.9999 8.22363 12.9999 8.5ZM12.9999 11.5C12.9999 11.7764 12.7762 12 12.4999 12H11.4999C11.2235 12 10.9999 11.7764 10.9999 11.5C10.9999 11.2236 11.2235 11 11.4999 11H12.4999C12.7762 11 12.9999 11.2236 12.9999 11.5ZM12.9999 14.5C12.9999 14.7764 12.7762 15 12.4999 15H11.4999C11.2235 15 10.9999 14.7764 10.9999 14.5C10.9999 14.2236 11.2235 14 11.4999 14H12.4999C12.7762 14 12.9999 14.2236 12.9999 14.5Z", "fill", "#B4C3EB"], ["routerLink", "./contractor", "routerLinkActive", "sel", 1, "item", "contractor"], ["width", "19", "height", "18", "viewBox", "0 0 19 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16.9999 13.0506V11.7256C16.9999 10.2227 15.7772 9 14.2743 9H9.99988V6.94946C11.6915 6.70422 12.9999 5.25848 12.9999 3.5C12.9999 1.57031 11.4296 0 9.49988 0C7.57019 0 5.99988 1.57031 5.99988 3.5C5.99988 5.25848 7.30823 6.70422 8.99988 6.94946V9H4.72546C3.22253 9 1.99988 10.2227 1.99988 11.7256V13.0506C0.860168 13.2829 -0.00012207 14.2928 -0.00012207 15.5C-0.00012207 16.8784 1.12146 18 2.49988 18C3.8783 18 4.99988 16.8784 4.99988 15.5C4.99988 14.2928 4.13959 13.2829 2.99988 13.0506V11.7256C2.99988 10.7739 3.7738 10 4.72546 10H8.99988V13.0506C7.86017 13.2829 6.99988 14.2928 6.99988 15.5C6.99988 16.8784 8.12146 18 9.49988 18C10.8783 18 11.9999 16.8784 11.9999 15.5C11.9999 14.2928 11.1396 13.2829 9.99988 13.0506V10H14.2743C15.226 10 15.9999 10.7739 15.9999 11.7256V13.0506C14.8602 13.2829 13.9999 14.2928 13.9999 15.5C13.9999 16.8784 15.1215 18 16.4999 18C17.8783 18 18.9999 16.8784 18.9999 15.5C18.9999 14.2928 18.1396 13.2829 16.9999 13.0506ZM6.99988 3.5C6.99988 2.12158 8.12146 1 9.49988 1C10.8783 1 11.9999 2.12158 11.9999 3.5C11.9999 4.87842 10.8783 6 9.49988 6C8.12146 6 6.99988 4.87842 6.99988 3.5ZM3.99988 15.5C3.99988 16.3271 3.32703 17 2.49988 17C1.67273 17 0.999878 16.3271 0.999878 15.5C0.999878 14.6729 1.67273 14 2.49988 14C3.32703 14 3.99988 14.6729 3.99988 15.5ZM10.9999 15.5C10.9999 16.3271 10.327 17 9.49988 17C8.67273 17 7.99988 16.3271 7.99988 15.5C7.99988 14.6729 8.67273 14 9.49988 14C10.327 14 10.9999 14.6729 10.9999 15.5ZM16.4999 17C15.6727 17 14.9999 16.3271 14.9999 15.5C14.9999 14.6729 15.6727 14 16.4999 14C17.327 14 17.9999 14.6729 17.9999 15.5C17.9999 16.3271 17.327 17 16.4999 17Z", "fill", "#4B66AD"], ["routerLink", "./report", "routerLinkActive", "sel", 1, "item", "report"], ["d", "M15.9252 0H2.07458C0.930542 0 -0.00012207 0.930664 -0.00012207 2.07471V15.9253C-0.00012207 17.0693 0.930542 18 2.07458 18H15.9252C17.0692 18 17.9999 17.0693 17.9999 15.9253V2.07471C17.9999 0.930664 17.0692 0 15.9252 0ZM16.9999 15.9253C16.9999 16.5181 16.5179 17 15.9252 17H2.07458C1.48181 17 0.999878 16.5181 0.999878 15.9253V2.07471C0.999878 1.48193 1.48181 1 2.07458 1H15.9252C16.5179 1 16.9999 1.48193 16.9999 2.07471V15.9253ZM5.99988 4.5C5.99988 4.77637 5.77625 5 5.49988 5H3.49988C3.22351 5 2.99988 4.77637 2.99988 4.5C2.99988 4.22363 3.22351 4 3.49988 4H5.49988C5.77625 4 5.99988 4.22363 5.99988 4.5ZM5.99988 7.5C5.99988 7.77637 5.77625 8 5.49988 8H3.49988C3.22351 8 2.99988 7.77637 2.99988 7.5C2.99988 7.22363 3.22351 7 3.49988 7H5.49988C5.77625 7 5.99988 7.22363 5.99988 7.5ZM5.99988 10.5C5.99988 10.7764 5.77625 11 5.49988 11H3.49988C3.22351 11 2.99988 10.7764 2.99988 10.5C2.99988 10.2236 3.22351 10 3.49988 10H5.49988C5.77625 10 5.99988 10.2236 5.99988 10.5ZM5.99988 13.5C5.99988 13.7764 5.77625 14 5.49988 14H3.49988C3.22351 14 2.99988 13.7764 2.99988 13.5C2.99988 13.2236 3.22351 13 3.49988 13H5.49988C5.77625 13 5.99988 13.2236 5.99988 13.5ZM14.9999 4.5C14.9999 4.77637 14.7762 5 14.4999 5H8.49988C8.22351 5 7.99988 4.77637 7.99988 4.5C7.99988 4.22363 8.22351 4 8.49988 4H14.4999C14.7762 4 14.9999 4.22363 14.9999 4.5ZM14.9999 7.5C14.9999 7.77637 14.7762 8 14.4999 8H8.49988C8.22351 8 7.99988 7.77637 7.99988 7.5C7.99988 7.22363 8.22351 7 8.49988 7H14.4999C14.7762 7 14.9999 7.22363 14.9999 7.5ZM14.9999 10.5C14.9999 10.7764 14.7762 11 14.4999 11H8.49988C8.22351 11 7.99988 10.7764 7.99988 10.5C7.99988 10.2236 8.22351 10 8.49988 10H14.4999C14.7762 10 14.9999 10.2236 14.9999 10.5ZM14.9999 13.5C14.9999 13.7764 14.7762 14 14.4999 14H8.49988C8.22351 14 7.99988 13.7764 7.99988 13.5C7.99988 13.2236 8.22351 13 8.49988 13H14.4999C14.7762 13 14.9999 13.2236 14.9999 13.5Z", "fill", "#B4C3EB"], ["routerLink", "./customer", "routerLinkActive", "sel", 1, "item", "client"], ["d", "M13.9999 17.5C13.9999 17.7764 13.7762 18 13.4999 18C13.2235 18 12.9999 17.7764 12.9999 17.5C12.9999 15.5703 11.2054 14 8.99988 14C6.79431 14 4.99988 15.5703 4.99988 17.5C4.99988 17.7764 4.77625 18 4.49988 18C4.22351 18 3.99988 17.7764 3.99988 17.5C3.99988 15.0186 6.24304 13 8.99988 13C11.7567 13 13.9999 15.0186 13.9999 17.5ZM8.99988 9C4.03748 9 -0.00012207 12.813 -0.00012207 17.5C-0.00012207 17.7764 0.223511 18 0.499878 18C0.776245 18 0.999878 17.7764 0.999878 17.5C0.999878 13.3643 4.58875 10 8.99988 10C13.411 10 16.9999 13.3643 16.9999 17.5C16.9999 17.7764 17.2235 18 17.4999 18C17.7762 18 17.9999 17.7764 17.9999 17.5C17.9999 12.813 13.9623 9 8.99988 9ZM4.99988 4C4.99988 1.79443 6.79431 0 8.99988 0C11.2054 0 12.9999 1.79443 12.9999 4C12.9999 6.20557 11.2054 8 8.99988 8C6.79431 8 4.99988 6.20557 4.99988 4ZM5.99988 4C5.99988 5.6543 7.34558 7 8.99988 7C10.6542 7 11.9999 5.6543 11.9999 4C11.9999 2.3457 10.6542 1 8.99988 1C7.34558 1 5.99988 2.3457 5.99988 4Z", "fill", "#B4C3EB"], ["routerLink", "./guide", "routerLinkActive", "sel", 1, "item", "guide"], ["d", "M17.4999 0H0.499878C0.223511 0 -0.00012207 0.223633 -0.00012207 0.5V17.5C-0.00012207 17.7764 0.223511 18 0.499878 18H17.4999C17.7762 18 17.9999 17.7764 17.9999 17.5V0.5C17.9999 0.223633 17.7762 0 17.4999 0ZM3.99988 1V17H2.99988V1H3.99988ZM0.999878 1H1.99988V17H0.999878V1ZM16.9999 17H4.99988V1H16.9999V17ZM7.99988 4.5C7.99988 4.22363 8.22351 4 8.49988 4H12.4999C12.7762 4 12.9999 4.22363 12.9999 4.5C12.9999 4.77637 12.7762 5 12.4999 5H8.49988C8.22351 5 7.99988 4.77637 7.99988 4.5ZM7.99988 6.5C7.99988 6.22363 8.22351 6 8.49988 6H10.4999C10.7762 6 10.9999 6.22363 10.9999 6.5C10.9999 6.77637 10.7762 7 10.4999 7H8.49988C8.22351 7 7.99988 6.77637 7.99988 6.5ZM11.9999 8.5C11.9999 8.77637 11.7762 9 11.4999 9H8.49988C8.22351 9 7.99988 8.77637 7.99988 8.5C7.99988 8.22363 8.22351 8 8.49988 8H11.4999C11.7762 8 11.9999 8.22363 11.9999 8.5Z", "fill", "#B4C3EB"], [1, "div", 2, "min-width", "15px"], [1, "triger", 3, "matMenuTriggerFor", "click"], [4, "ngFor", "ngForOf"], ["panelClass", "ssss", 1, "currencys-popap-menu", 2, "display", "none"], ["animals", "matMenu"], [1, "currencys-popap"], [1, "title"], ["class", "currencys", 4, "ngFor", "ngForOf"], ["routerLink", "./message", "routerLinkActive", "sel", 1, "fn", "msg"], ["width", "22", "height", "25", "viewBox", "0 0 22 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M19.329 3H2.67096C1.19586 3 0 4.1958 0 5.67096V16.329C0 17.8041 1.19586 19 2.67096 19H5V25L11 19H19.329C20.8042 19 22 17.8041 22 16.329V5.67096C22 4.1958 20.8042 3 19.329 3ZM21 16.329C21 17.2504 20.2504 18 19.329 18H11H10.5858L10.2929 18.2928L6 22.5858V19V18H5H2.67096C1.74957 18 1 17.2504 1 16.329V5.67096C1 4.74957 1.74957 4 2.67096 4H19.329C20.2504 4 21 4.74957 21 5.67096V16.329ZM8 11C8 11.5523 7.55231 12 7 12C6.44769 12 6 11.5523 6 11C6 10.4477 6.44769 10 7 10C7.55231 10 8 10.4477 8 11ZM12 11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11C10 10.4477 10.4477 10 11 10C11.5523 10 12 10.4477 12 11ZM16 11C16 11.5523 15.5523 12 15 12C14.4478 12 14 11.5523 14 11C14 10.4477 14.4478 10 15 10C15.5523 10 16 10.4477 16 11Z", "fill", "white"], [4, "ngIf"], ["routerLink", "./settings", "routerLinkActive", "sel", 1, "fn", "config"], ["width", "22", "height", "22", "viewBox", "0 0 22 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M21.8553 9.21893C21.8176 8.98718 21.6408 8.80255 21.4107 8.75494L18.9736 8.25024L18.5824 7.30591L19.9486 5.22626C20.0775 5.02991 20.0721 4.77448 19.9349 4.58386C19.2357 3.61157 18.3881 2.7641 17.4158 2.06476C17.3171 1.99377 17.201 1.95807 17.0847 1.95807C16.9764 1.95807 16.8681 1.98895 16.7735 2.05109L14.6938 3.41724L13.7496 3.02606L13.2449 0.589111C13.1973 0.35907 13.0128 0.182068 12.7809 0.144348C12.1929 0.048645 11.5937 0 10.9999 0C10.406 0 9.80688 0.0485229 9.21887 0.144348C8.987 0.182068 8.80243 0.358887 8.75482 0.588989L8.25006 3.02606L7.30579 3.41724L5.2262 2.05121C5.13153 1.98901 5.02313 1.95807 4.91492 1.95807C4.79865 1.95807 4.68256 1.99377 4.5838 2.06482C3.61145 2.7641 2.76398 3.61163 2.06458 4.58386C1.92749 4.77454 1.92206 5.03003 2.05103 5.22626L3.41705 7.30597L3.02594 8.25031L0.588806 8.75494C0.358765 8.80261 0.181885 8.98712 0.144165 9.21899C0.0484008 9.80695 -0.00012207 10.4062 -0.00012207 11C-0.00012207 11.5938 0.0484008 12.193 0.144226 12.7809C0.181946 13.0128 0.358765 13.1974 0.588806 13.245L3.02594 13.7498L3.41711 14.694L2.05109 16.7737C1.92212 16.9699 1.92749 17.2254 2.0647 17.4161C2.76398 18.3883 3.61151 19.2358 4.5838 19.9351C4.68256 20.0062 4.79871 20.0419 4.91504 20.0419C5.02325 20.0419 5.13159 20.011 5.2262 19.9488L7.30585 18.5828L8.25018 18.9739L8.75488 21.4109C8.80255 21.641 8.98706 21.8179 9.21887 21.8556C9.80682 21.9514 10.4061 22 10.9999 22C11.5938 22 12.1929 21.9515 12.7808 21.8556C13.0126 21.8179 13.1973 21.6411 13.2448 21.4109L13.7496 18.9739L14.6939 18.5827L16.7736 19.9488C16.8682 20.011 16.9766 20.0419 17.0849 20.0419C17.2012 20.0419 17.3173 20.0062 17.416 19.9352C18.3884 19.2358 19.2359 18.3882 19.9351 17.4161C20.0721 17.2254 20.0776 16.97 19.9487 16.7737L18.5827 14.694L18.9738 13.7497L21.4109 13.245C21.6408 13.1973 21.8177 13.0128 21.8555 12.781C21.9513 12.1934 21.9999 11.5941 21.9999 11C21.9999 10.4059 21.9512 9.8067 21.8553 9.21893ZM20.9119 12.3271L18.771 12.7705L18.2525 12.8779L18.0499 13.3671L17.6588 14.3114L17.4562 14.8005L17.7469 15.243L18.9469 17.07C18.4065 17.7767 17.777 18.4062 17.0699 18.947L15.243 17.7469L14.8004 17.4562L14.3112 17.6588L13.3669 18.05L12.8778 18.2526L12.7704 18.7711L12.327 20.912C11.887 20.9705 11.442 21 10.9999 21C10.5582 21 10.1131 20.9704 9.67273 20.9119L9.22937 18.7711L9.12201 18.2526L8.63281 18.05L7.68848 17.6589L7.19934 17.4563L6.75684 17.7469L4.92993 18.947C4.22302 18.4064 3.59332 17.7767 3.05292 17.0699L4.25293 15.243L4.54358 14.8005L4.341 14.3113L3.94983 13.3671L3.74725 12.8779L3.22876 12.7705L1.08789 12.3271C1.02942 11.887 0.999878 11.4418 0.999878 11C0.999878 10.5582 1.02942 10.113 1.08783 9.67279L3.2287 9.22955L3.74719 9.12219L3.94977 8.633L4.34094 7.68866L4.54358 7.19952L4.25287 6.75696L3.05286 4.92993C3.59344 4.22296 4.22302 3.59351 4.92987 3.05298L6.75677 4.25305L7.19928 4.5437L7.68848 4.34113L8.63275 3.94995L9.12195 3.74731L9.22931 3.22888L9.67267 1.08801C10.1129 1.02954 10.558 1 10.9999 1C11.4413 1 11.8865 1.02954 12.327 1.08801L12.7703 3.22882L12.8777 3.74731L13.3668 3.94995L14.3111 4.34106L14.8003 4.54376L15.2429 4.25305L17.0698 3.05298C17.7768 3.59363 18.4063 4.22314 18.9467 4.92999L17.7466 6.7569L17.4559 7.19946L17.6586 7.68866L18.0497 8.63293L18.2524 9.12207L18.7708 9.22943L20.9117 9.67285C20.9703 10.113 20.9999 10.5582 20.9999 11C20.9999 11.442 20.9703 11.8871 20.9119 12.3271ZM12.9999 11C12.9999 12.1046 12.1044 13 10.9999 13C9.89526 13 8.99988 12.1046 8.99988 11C8.99988 9.89545 9.89526 9 10.9999 9C12.1044 9 12.9999 9.89545 12.9999 11Z", "fill", "white"], ["routerLink", "/logout", 1, "fn", "logout"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M19.9999 10C19.9999 15.5228 15.5227 20 9.99988 20C4.47705 20 -0.00012207 15.5228 -0.00012207 10C-0.00012207 5.90033 2.46942 2.38135 5.99988 0.837646V1.94965C3.0415 3.42578 0.999878 6.47522 0.999878 10C0.999878 14.9626 5.03723 19 9.99988 19C14.9625 19 18.9999 14.9626 18.9999 10C18.9999 6.47522 16.9583 3.42578 13.9999 1.94965V0.837646C17.5303 2.38135 19.9999 5.90033 19.9999 10ZM9.99988 10C10.5521 10 10.9999 9.55231 10.9999 9V0H8.99988V9C8.99988 9.55231 9.44757 10 9.99988 10Z", "fill", "#B4C3EB"], ["style", "cursor: pointer; display: flex;", 3, "name", "code", "rate", 4, "ngIf"], [2, "cursor", "pointer", "display", "flex", 3, "name", "code", "rate"], [1, "currencys"], [1, "subtitle"], [1, "text"], ["target", "_blank", 1, "link", 3, "href"], [1, "currencys-list"], ["class", "currency", 4, "ngFor", "ngForOf"], [1, "currency"], [1, "name"], [1, "value"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "svg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "path", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u0414\u0430\u0448\u0431\u043E\u0430\u0440\u0434");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "path", 8)(11, "path", 9)(12, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u0417\u0430\u043F\u0440\u043E\u0441\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "svg", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "path", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u0421\u0442\u0430\u0432\u043A\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "svg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "path", 15)(23, "path", 16)(24, "path", 17)(25, "path", 18)(26, "path", 19)(27, "path", 20)(28, "path", 21)(29, "path", 22)(30, "path", 23)(31, "path", 24)(32, "path", 25)(33, "path", 26)(34, "path", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\u0417\u0430\u043A\u0430\u0437\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "svg", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "path", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\u0422\u0430\u0440\u0438\u0444\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "svg", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "path", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0438");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "svg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "path", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\u041E\u0442\u0447\u0435\u0442\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "svg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "path", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "svg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "path", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_63_listener() {
            return ctx.updateCurrency();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, HeaderComponent_ng_container_64_Template, 2, 1, "ng-container", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-menu", 43, 44)(67, "div", 45)(68, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, HeaderComponent_div_70_Template, 8, 3, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "span", 48)(72, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "svg", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "path", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, HeaderComponent_span_75_Template, 2, 1, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "span", 52)(77, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "svg", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "path", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "a", 55)(81, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "svg", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "path", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.currencyList);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.currencySummary == null ? null : ctx.currencySummary.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.currencySummary == null ? null : ctx.currencySummary.rows);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.numberOfNewMessages >= 1);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _currency_currency_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyComponent],
      styles: [".currencys-popap[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  flex-direction: column;\n}\n.currencys-popap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  background-color: var(--header_menu, #4B66AD);\n  color: white;\n  padding: 15px 15px 10px;\n  font-weight: bold;\n  font-size: 13px;\n}\n.currencys-popap[_ngcontent-%COMP%]   .currencys[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n.currencys-popap[_ngcontent-%COMP%]   .currencys[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: 5px;\n  padding-bottom: 1px;\n  border-bottom: 1px solid #4b66ad;\n  font-weight: bold;\n}\n.currencys-popap[_ngcontent-%COMP%]   .currencys[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.currencys-popap[_ngcontent-%COMP%]   .currencys[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  pointer-events: all;\n  color: var(--header_menu, #4B66AD);\n  text-decoration: none;\n  width: 45px;\n  display: flex;\n  align-items: center;\n}\n.currencys-popap[_ngcontent-%COMP%]   .currencys[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  margin-left: 5px;\n  width: 18px;\n  height: 18px;\n  background-image: url('globe.svg');\n}\n.currencys-popap[_ngcontent-%COMP%]   .currencys[_ngcontent-%COMP%]   .currencys-list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.currencys-popap[_ngcontent-%COMP%]   .currencys[_ngcontent-%COMP%]   .currencys-list[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 71px;\n  flex-direction: column;\n  gap: 5px;\n}\n.currencys-popap[_ngcontent-%COMP%]   .currencys[_ngcontent-%COMP%]   .currencys-list[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #606a74;\n  line-height: 10px;\n  margin-top: 6px;\n}\n.currencys-popap[_ngcontent-%COMP%]   .currencys[_ngcontent-%COMP%]   .currencys-list[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #2c3640;\n  font-weight: bold;\n}\n.currencys-popap[_ngcontent-%COMP%]   .currencys[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQUU7RUFDRSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFBSTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBRU47QUFETTtFQUNFLGtCQUFBO0FBR1I7QUFETTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQURNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQUdSO0FBQUk7RUFDRSxhQUFBO0FBRU47QUFBTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBRVI7QUFEUTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBR1Y7QUFEUTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUdWO0FBRUU7RUFDRSxtQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnJlbmN5cy1wb3BhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLnRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJfbWVudSwgIzRCNjZBRCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgXG4gIH1cbiAgLmN1cnJlbmN5cyB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjY2YWQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIC50ZXh0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgICAgLmxpbmsge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICBjb2xvcjogdmFyKC0taGVhZGVyX21lbnUsICM0QjY2QUQpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmxpbms6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2dsb2JlLnN2Z1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmN1cnJlbmN5cy1saXN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyBnYXA6IDE1cHg7XG4gICAgICAuY3VycmVuY3kge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtaW4td2lkdGg6IDcxcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogNXB4O1xuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjNjA2YTc0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgfVxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgIGNvbG9yOiAjMmMzNjQwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jdXJyZW5jeXM6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9390:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesRoutingModule: () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.component */ 45816);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.guard */ 78444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





const routes = [{
  path: '',
  component: _pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent,
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
  children: [{
    path: 'bit',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_modules_bit_bit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/bit/bit.module */ 57076)).then(m => m.BitModule)
  }, {
    path: 'tariff',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_modules_tariff_tariff_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/tariff/tariff.module */ 66106)).then(m => m.TariffModule)
  }, {
    path: 'report',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_modules_report_report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/report/report.module */ 1082)).then(m => m.ReportModule)
  }, {
    path: 'dashboard',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_modules_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/dashboard/dashboard.module */ 88484)).then(m => m.DashboardModule)
  }, {
    path: 'message',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_classes_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_modules_message_message_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/message/message.module */ 27260)).then(m => m.MessageModule)
  }, {
    path: 'guide',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_modules_guide_guide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/guide/guide.module */ 85064)).then(m => m.GuideModule)
  }, {
    path: 'order',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_classes_index_ts"), __webpack_require__.e("src_app_pages_modules_order_order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/order/order.module */ 45860)).then(m => m.OrderModule)
  }, {
    path: 'customer',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_classes_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_modules_customer_customer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/customer/customer.module */ 20562)).then(m => m.CustomerModule)
  }, {
    path: 'request',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_classes_index_ts"), __webpack_require__.e("default-src_app_pages_components_contractor_contractor_component_ts-src_app_pages_services_ci-9bc48a"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_modules_request_request_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/request/request.module */ 6308)).then(m => m.RequestModule)
  }, {
    path: 'contractor',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_classes_index_ts"), __webpack_require__.e("default-src_app_pages_components_contractor_contractor_component_ts-src_app_pages_services_ci-9bc48a"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_modules_contractor_contractor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/contractor/contractor.module */ 30236)).then(m => m.ContractorModule)
  }, {
    path: 'settings',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_classes_index_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_modules_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/settings/settings.module */ 58440)).then(m => m.SettingsModule)
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }]
}, {
  path: '',
  // canActivate: [UserGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_modules_public_public_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/public/public.module */ 21792)).then(m => m.PublicModule)
}, {
  path: '',
  // canActivate: [UserGuard],
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../auth/auth.module */ 60841)).then(m => m.AuthModule)
},
// { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
{
  path: 'rate',
  redirectTo: 'request-rates/5191ebbc0ba015a608f285b78b524449'
}, {
  path: 'rate_request/:uid',
  redirectTo: 'request-rates/:uid'
}, {
  path: '**',
  redirectTo: 'dashboard'
}];
class PagesRoutingModule {
  static {
    this.ɵfac = function PagesRoutingModule_Factory(t) {
      return new (t || PagesRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: PagesRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 45816:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesComponent: () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/loader.service */ 51798);
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.service */ 11152);
/* harmony import */ var _services_navigation_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/navigation-history.service */ 91646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 16708);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);







class PagesComponent {
  constructor(loaderService, cdRef,
  // ← Добавляем
  pageService, navigationHistoryService) {
    this.loaderService = loaderService;
    this.cdRef = cdRef;
    this.pageService = pageService;
    this.navigationHistoryService = navigationHistoryService;
    this.colors$ = this.pageService.getColors();
  }
  ngOnInit() {
    this.isLoading$ = this.loaderService.isLoading$;
    // Если сервис сразу эмитит значение, можно вручную запустить проверку
    this.cdRef.detectChanges();
  }
  static {
    this.ɵfac = function PagesComponent_Factory(t) {
      return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_pages_service__WEBPACK_IMPORTED_MODULE_1__.BrandingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_navigation_history_service__WEBPACK_IMPORTED_MODULE_2__.NavigationHistoryService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: PagesComponent,
      selectors: [["app-pages"]],
      decls: 5,
      vars: 4,
      consts: [[1, "content"], [1, "user-module"]],
      template: function PagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-header")(4, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.colors$));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
      styles: ["@charset \"UTF-8\";\n.main mat-date-range-input .mat-date-range-input-separator-hidden {\n  opacity: 1 !important;\n  margin: 0 2px 0 0;\n  color: #606A74;\n}\n\n.main .border-on .mat-date-range-input-separator {\n  color: var(--accent, #DB563B);\n}\n\n.main .data .mat-date-range-input-container input {\n  display: block;\n  font-size: 13px;\n}\n\n.main .data .mat-date-range-input {\n  height: 12.5px;\n  margin-right: 5px;\n}\n\n.main .data .mat-date-range-input-container {\n  height: 12.5px;\n}\n\n.main .data .mat-date-range-input-start-wrapper {\n  width: 66px;\n  height: 12.5px;\n  overflow: inherit;\n  line-height: 13px;\n}\n\n.main .data .mat-date-range-input-end-wrapper {\n  width: 66px;\n  height: 12.5px;\n  line-height: 13px;\n}\n\n.main .data .mat-date-range-input-separator {\n  height: 12.5px;\n  margin: 0 2px 0 1px;\n}\n\n.main .data .mat-date-range-input input {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 13px;\n  line-height: 13px;\n  cursor: pointer;\n  height: 12.5px;\n  background-color: inherit;\n}\n\ndiv.mat-calendar-body-cell-content {\n  border-radius: 6px;\n}\n\ndiv.mat-calendar-body-selected, .mat-calendar-body-cell.selected .mat-calendar-body-cell-content {\n  background: var(--accent, #DB563B);\n}\n\n.mat-calendar-body-in-range::before {\n  background: #83909E;\n}\n\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: gray;\n}\n\n.hoverr {\n  display: flex;\n}\n\n.placer .template {\n  visibility: hidden; /* \u0421\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E */\n  opacity: 0; /* \u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u043A\u0440\u044B\u0442 */\n  max-width: 0; /* \u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 0 */\n  margin-left: 0; /* \u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0441\u0442\u0443\u043F */\n  overflow: hidden; /* \u041E\u0431\u0440\u0435\u0437\u0430\u0435\u0442 \u0432\u0441\u0435, \u0447\u0442\u043E \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u0437\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u044B */\n  transition: opacity 2s ease, max-width 1s ease, margin-left 1s ease, visibility 0s 1s;\n  text-wrap: nowrap;\n}\n\n.hoverr:hover .template {\n  visibility: visible; /* \u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0432\u0438\u0434\u0438\u043C\u044B\u043C */\n  opacity: 1; /* \u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u043C */\n  max-width: 200px; /* \u0428\u0438\u0440\u0438\u043D\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F 200px */\n  margin-left: 24px; /* \u041E\u0442\u0441\u0442\u0443\u043F \u0441\u043B\u0435\u0432\u0430 */\n  transition: opacity 2s ease, max-width 1s ease, margin-left 1s ease, visibility 0s 0s;\n}\n\n.additional .w100 {\n  min-width: 100%;\n}\n\n.additional .select-filter-main {\n  display: none;\n}\n\n.additional mat-form-field.mat-form-field-appearance-outline .mat-form-field-outline > * {\n  background: white;\n}\n\n.main .select-filter-additional {\n  display: none;\n}\n\n.main .mat-mdc-select-value-text {\n  font-size: 13px;\n  line-height: 13px;\n}\n\n.main .value-selected .mat-mdc-select-value-text {\n  color: var(--accent, #DB563B);\n}\n\n.main .mat-select {\n  font-family: \"regular\", \"arial\", \"sans-serif\";\n}\n\n.placer .search-filter {\n  display: none;\n}\n\n.edit-form .ru .form-block .form-row .form-item input {\n  background: transparent;\n}\n\n.edit-form .ru .form-block .form-row .form-item textarea {\n  background: transparent;\n}\n\n.edit-form .en .form-block .form-row .form-item .bg {\n  background: #F7F9FC;\n  border: 1px solid #E0E5EB;\n}\n\n.edit-form .en .form-block .form-row .form-item .form-label {\n  display: flex;\n  justify-content: space-between;\n}\n\n.edit-form .en .form-block .form-row .form-item .form-label span {\n  font-weight: 900;\n  display: flex;\n}\n\n.edit-form .en .form-block .form-row .form-item .form-label span::before {\n  display: flex;\n  justify-content: center;\n  margin-right: 3px;\n  content: \"\";\n  background: url('pic-triangle-warning.svg') no-repeat;\n  width: 10px;\n  height: 10px;\n  position: relative;\n}\n\n.edit-form .ru .form-block .form-row .form-block-title {\n  color: #606A74;\n}\n\nh1.mat-dialog-title {\n  font-size: 26px;\n  line-height: 30px;\n  color: var(--header_menu, #4B66AD);\n  text-decoration: none;\n}\n\n.mat-dialog-actions button.save {\n  background: var(--accent, #DB563B);\n  color: #fff;\n}\n\n.mat-dialog-actions button.download {\n  background: var(--header_menu, #4B66AD);\n  color: #fff;\n}\n\n.mat-dialog-actions button.cancel {\n  background: #606A74;\n  color: #fff;\n}\n\n.table-list .td-block-line {\n  max-height: 50%;\n}\n\n.sort-dir-asc::after {\n  left: 2px;\n}\n\n.sort-dir-desc::after {\n  left: 2px;\n}\n\n.edit-form .radio-btn input:checked .radio-btn {\n  border: red solid 1px;\n}\n\n.radio-btn :checked + span {\n  border-color: var(--accent, #DB563B);\n}\n\n.table-list .mat-mdc-table {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLDZCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQVFGOztBQU5BO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFFQSxzQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EseUJBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0FBTUY7O0FBSEE7RUFDRSxrQ0FBQTtBQU1GOztBQUpBO0VBQ0UsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLHNCQUFBO0FBUUY7O0FBSkE7RUFDRSxhQUFBO0FBT0Y7O0FBSkE7RUFDRSxrQkFBQSxFQUFBLGdDQUFBO0VBQ0EsVUFBQSxFQUFBLGtCQUFBO0VBQ0EsWUFBQSxFQUFBLHVCQUFBO0VBQ0EsY0FBQSxFQUFBLHFCQUFBO0VBQ0EsZ0JBQUEsRUFBQSx5Q0FBQTtFQUNBLHFGQUFBO0VBQ0EsaUJBQUE7QUFPRjs7QUFKQTtFQUNFLG1CQUFBLEVBQUEsK0JBQUE7RUFDQSxVQUFBLEVBQUEsa0NBQUE7RUFDQSxnQkFBQSxFQUFBLDRCQUFBO0VBQ0EsaUJBQUEsRUFBQSxpQkFBQTtFQUNBLHFGQUFBO0FBT0Y7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0FBTUY7O0FBSkE7RUFDRSxpQkFBQTtBQU9GOztBQUpBO0VBQ0UsYUFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTEE7RUFDRSw2QkFBQTtBQVFGOztBQURBO0VBQ0UsNkNBQUE7QUFJRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFzREE7RUFDRSx1QkFBQTtBQW5ERjs7QUFzREE7RUFDRSx1QkFBQTtBQW5ERjs7QUFzREE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBbkRGOztBQXNEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQW5ERjs7QUFzREE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFuREY7O0FBcURBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBbkRGOztBQXNEQTtFQUNFLGNBQUE7QUFuREY7O0FBd0RBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtBQXJERjs7QUF3REE7RUFDRSxrQ0FBQTtFQUNBLFdBQUE7QUFyREY7O0FBdURBO0VBQ0UsdUNBQUE7RUFDQSxXQUFBO0FBcERGOztBQXNEQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQW5ERjs7QUF3REE7RUFDRSxlQUFBO0FBckRGOztBQXlEQTtFQUNFLFNBQUE7QUF0REY7O0FBd0RBO0VBQ0UsU0FBQTtBQXJERjs7QUEwREE7RUFDRSxxQkFBQTtBQXZERjs7QUEwREE7RUFDRSxvQ0FBQTtBQXZERjs7QUEyREE7RUFFRSxzQ0FBQTtBQXpERiIsInNvdXJjZXNDb250ZW50IjpbIi8vw5HCgcORwoLDkMK4w5DCu8OQwrggw5DCtMOQwrvDkcKPIMORwoTDkMK4w5DCu8ORwozDkcKCw5HCgMOQwrAtw5DCv8OQwrXDkcKAw5DCuMOQwr7DkMK0IMOQwrIgw5DCvMOQwrXDkMK5w5DCvSDDkcKEw5DCuMOQwrvDkcKMw5HCgsORwoDDkMKww5HChVxuLm1haW4gbWF0LWRhdGUtcmFuZ2UtaW5wdXQgLm1hdC1kYXRlLXJhbmdlLWlucHV0LXNlcGFyYXRvci1oaWRkZW57XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDJweCAwIDA7XG4gIGNvbG9yOiAjNjA2QTc0O1xufVxuLm1haW4gLmJvcmRlci1vbiAubWF0LWRhdGUtcmFuZ2UtaW5wdXQtc2VwYXJhdG9ye1xuICBjb2xvcjogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7XG59XG4ubWFpbiAuZGF0YSAubWF0LWRhdGUtcmFuZ2UtaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluIC5kYXRhIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dCB7XG4gIGhlaWdodDogMTIuNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5tYWluIC5kYXRhIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEyLjVweDtcbn1cbi5tYWluIC5kYXRhIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1zdGFydC13cmFwcGVye1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiAxMi41cHg7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMTNweDtcbn1cbi5tYWluIC5kYXRhIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1lbmQtd3JhcHBlcntcbiAgd2lkdGg6IDY2cHg7XG4gIGhlaWdodDogMTIuNXB4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbn1cbi5tYWluIC5kYXRhIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1zZXBhcmF0b3J7XG4gIGhlaWdodDogMTIuNXB4O1xuICBtYXJnaW46IDAgMnB4IDAgMXB4O1xufVxuLm1haW4gLmRhdGEgLm1hdC1kYXRlLXJhbmdlLWlucHV0IGlucHV0e1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaGVpZ2h0OiAxMi41cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbmRpdi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnR7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuZGl2Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkLC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLnNlbGVjdGVkIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnR7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xufVxuLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjODM5MDlFO1xufVxuLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLy/DkcKBw5HCgsOQwrjDkMK7w5DCuCDDkMK0w5DCu8ORwo8gw5DCusOQwr3DkMK+w5DCv8OQwrrDkMK4IMORwojDkMKww5DCscOQwrvDkMK+w5DCvSDDkMK0w5DCu8ORwo8gw5DCuMOQwrzDkMK/w5DCvsORwoDDkcKCw5DCsFxuLmhvdmVyciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wbGFjZXIgLnRlbXBsYXRlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyAgIC8qIMOQwqHDkMK6w5HCgMORwovDkMKyw5DCsMOQwrXDkcKCIMORwo3DkMK7w5DCtcOQwrzDkMK1w5DCvcORwoIgw5DCuMOQwrfDkMK9w5DCsMORwofDkMKww5DCu8ORwozDkMK9w5DCviAqL1xuICBvcGFjaXR5OiAwOyAgICAgICAgICAgLyogw5DCrcOQwrvDkMK1w5DCvMOQwrXDkMK9w5HCgiDDkcKBw5DCusORwoDDkcKLw5HCgiAqL1xuICBtYXgtd2lkdGg6IDA7ICAgICAgICAgLyogw5DCncOQwrDDkcKHw5DCsMOQwrvDkcKMw5DCvcOQwrDDkcKPIMORwojDkMK4w5HCgMOQwrjDkMK9w5DCsCAwICovXG4gIG1hcmdpbi1sZWZ0OiAwOyAgICAgICAvKiDDkMKdw5DCsMORwofDkMKww5DCu8ORwozDkMK9w5HCi8OQwrkgw5DCvsORwoLDkcKBw5HCgsORwoPDkMK/ICovXG4gIG92ZXJmbG93OiBoaWRkZW47ICAgICAvKiDDkMKew5DCscORwoDDkMK1w5DCt8OQwrDDkMK1w5HCgiDDkMKyw5HCgcOQwrUsIMORwofDkcKCw5DCviDDkMKyw5HCi8ORwoXDkMK+w5DCtMOQwrjDkcKCIMOQwrfDkMKwIMOQwr/DkcKAw5DCtcOQwrTDkMK1w5DCu8ORwosgKi9cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBlYXNlLCBtYXgtd2lkdGggMXMgZWFzZSwgbWFyZ2luLWxlZnQgMXMgZWFzZSwgdmlzaWJpbGl0eSAwcyAxcztcbiAgdGV4dC13cmFwOiBub3dyYXA7XG59XG5cbi5ob3ZlcnI6aG92ZXIgLnRlbXBsYXRlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgIC8qIMOQwq3DkMK7w5DCtcOQwrzDkMK1w5DCvcORwoIgw5HCgcORwoLDkMKww5DCvcOQwr7DkMKyw5DCuMORwoLDkcKBw5HCjyDDkMKyw5DCuMOQwrTDkMK4w5DCvMORwovDkMK8ICovXG4gIG9wYWNpdHk6IDE7ICAgICAgICAgICAvKiDDkMKtw5DCu8OQwrXDkMK8w5DCtcOQwr3DkcKCIMORwoHDkcKCw5DCsMOQwr3DkMK+w5DCssOQwrjDkcKCw5HCgcORwo8gw5DCv8ORwoDDkMK+w5DCt8ORwoDDkMKww5HCh8OQwr3DkcKLw5DCvCAqL1xuICBtYXgtd2lkdGg6IDIwMHB4OyAgICAgLyogw5DCqMOQwrjDkcKAw5DCuMOQwr3DkMKwIMORwoHDkcKCw5DCsMOQwr3DkMK+w5DCssOQwrjDkcKCw5HCgcORwo8gMjAwcHggKi9cbiAgbWFyZ2luLWxlZnQ6IDI0cHg7ICAgIC8qIMOQwp7DkcKCw5HCgcORwoLDkcKDw5DCvyDDkcKBw5DCu8OQwrXDkMKyw5DCsCAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzIGVhc2UsIG1heC13aWR0aCAxcyBlYXNlLCBtYXJnaW4tbGVmdCAxcyBlYXNlLCB2aXNpYmlsaXR5IDBzIDBzO1xufVxuXG4vL8ORwoHDkcKCw5DCuMOQwrvDkMK4IMOQwrTDkMK7w5HCjyDDkcKEw5DCuMOQwrvDkcKMw5HCgsORwoDDkMK+w5DCsiDDkcKBw5DCtcOQwrvDkMK1w5DCusORwoLDkMK+w5HCgMOQwr7DkMKyKMOQwrIgw5DCt8OQwrDDkMKyw5DCuMORwoHDkMK4w5DCvMOQwr7DkcKBw5HCgsOQwrggw5DCvsORwoIgw5DCvMOQwrXDkcKBw5HCgsOQwrAgw5HCgMOQwrDDkMK3w5DCvcORwovDkMK5IMOQwrTDkMK4w5DCt8OQwrDDkMK5w5DCvSlcbi8vw5DCsiDDkMK0w5DCvsOQwr8uw5HChMOQwrjDkMK7w5HCjMORwoLDkcKAw5DCsMORwoVcbi5hZGRpdGlvbmFsIC53MTAwe1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4uYWRkaXRpb25hbCAuc2VsZWN0LWZpbHRlci1tYWluIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5hZGRpdGlvbmFsIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSA+ICoge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi8vw5DCsiDDkMK+w5HCgcOQwr3DkMK+w5DCsi7DkcKEw5DCuMOQwrvDkcKMw5HCgsORwoDDkMKww5HChVxuLm1haW4gLnNlbGVjdC1maWx0ZXItYWRkaXRpb25hbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWFpbiAubWF0LW1kYy1zZWxlY3QtdmFsdWUtdGV4dHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcblxufVxuLm1haW4gLnZhbHVlLXNlbGVjdGVkIC5tYXQtbWRjLXNlbGVjdC12YWx1ZS10ZXh0e1xuICBjb2xvcjogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7XG5cbn1cbi8vIC5tYWluIC5tYXQtc2VsZWN0LWFycm93e1xuLy8gICBjb2xvcjogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7XG5cbi8vIH1cbi5tYWluIC5tYXQtc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJywgJ2FyaWFsJywgJ3NhbnMtc2VyaWYnO1xufVxuXG4vL1xuLnBsYWNlciAuc2VhcmNoLWZpbHRlcntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5cblxuXG4vLyAubWF0LWNoZWNrYm94LnRlc3RjbGFzcyBsYWJlbCBzcGFue1xuLy8gICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5tYXQtY2hlY2tib3gudGVzdGNsYXNzIGxhYmVsIHtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI0UwRTVFQjtcbi8vICAgYmFja2dyb3VuZDogI0Y3RjlGQztcbi8vICAgd2lkdGg6IDE4cHg7XG4vLyAgIGhlaWdodDogMThweDtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyB9XG5cbi8vIC5tYXQtY2hlY2tib3gudGVzdGNsYXNzIGxhYmVsOjphZnRlciB7XG4vLyAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBiYWNrZ3JvdW5kOiAjRjdGOUZDO1xuLy8gICB3aWR0aDogOHB4O1xuLy8gICBoZWlnaHQ6IDhweDtcbi8vICAgbWFyZ2luOiAwIDtcbi8vICAgcGFkZGluZzogMDtcbi8vIH1cblxuLy8gLm1hdC1jaGVja2JveC50ZXN0Y2xhc3MubWF0LWNoZWNrYm94LWNoZWNrZWQgbGFiZWw6OmFmdGVye1xuLy8gICBjb250ZW50OiBcIlwiO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LCAgI0RCNTYzQik7XG4vLyAgIHdpZHRoOiA4cHg7XG4vLyAgIGhlaWdodDogOHB4O1xuLy8gICBtYXJnaW46IDAgO1xuLy8gICBwYWRkaW5nOiAwO1xuXG4vLyB9XG5cbi8vIC5tYXQtY2hlY2tib3gudGVzdGNsYXNzLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIGxhYmVsOjphZnRlcntcbi8vICAgY29udGVudDogXCJcIjtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCwgICNEQjU2M0IpO1xuLy8gICB3aWR0aDogMTBweDtcbi8vICAgaGVpZ2h0OiAzcHg7XG4vLyAgIG1hcmdpbjogMCA7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyB9XG5cbi8vw5DCv8OQwrXDkcKAw5DCtcOQwrLDkMK+w5DCtCDDkMK3w5DCsMOQwr/DkcKAw5DCvsORwoHDkMK+w5DCslxuLmVkaXQtZm9ybSAucnUgLmZvcm0tYmxvY2sgLmZvcm0tcm93IC5mb3JtLWl0ZW0gaW5wdXR7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZWRpdC1mb3JtIC5ydSAuZm9ybS1ibG9jayAuZm9ybS1yb3cgLmZvcm0taXRlbSB0ZXh0YXJlYXtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5lZGl0LWZvcm0gLmVuIC5mb3JtLWJsb2NrIC5mb3JtLXJvdyAuZm9ybS1pdGVtIC5iZ3tcbiAgYmFja2dyb3VuZDogI0Y3RjlGQztcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTVFQjtcbn1cblxuLmVkaXQtZm9ybSAuZW4gLmZvcm0tYmxvY2sgLmZvcm0tcm93IC5mb3JtLWl0ZW0gLmZvcm0tbGFiZWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmVkaXQtZm9ybSAuZW4gLmZvcm0tYmxvY2sgLmZvcm0tcm93IC5mb3JtLWl0ZW0gLmZvcm0tbGFiZWwgc3BhbntcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5lZGl0LWZvcm0gLmVuIC5mb3JtLWJsb2NrIC5mb3JtLXJvdyAuZm9ybS1pdGVtIC5mb3JtLWxhYmVsIHNwYW46OmJlZm9yZXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuXG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3BpYy10cmlhbmdsZS13YXJuaW5nLnN2Zykgbm8tcmVwZWF0IDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZWRpdC1mb3JtIC5ydSAuZm9ybS1ibG9jayAuZm9ybS1yb3cgLmZvcm0tYmxvY2stdGl0bGV7XG4gIGNvbG9yOiAjNjA2QTc0O1xufVxuXG4vL8OQwrzDkMKww5HCgiDDkMK0w5DCuMOQwrDDkMK7w5DCvsOQwrNcblxuaDEubWF0LWRpYWxvZy10aXRsZXtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6IHZhcigtLWhlYWRlcl9tZW51LCAjNEI2NkFEKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIGJ1dHRvbi5zYXZle1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWF0LWRpYWxvZy1hY3Rpb25zIGJ1dHRvbi5kb3dubG9hZHtcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyX21lbnUsICM0QjY2QUQpO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tYXQtZGlhbG9nLWFjdGlvbnMgYnV0dG9uLmNhbmNlbHtcbiAgYmFja2dyb3VuZDogIzYwNkE3NDtcbiAgY29sb3I6ICNmZmY7XG59XG5cblxuLy/DkMKyw5HCi8ORwoDDkMKww5DCssOQwr3DkMK4w5DCssOQwrDDkcKOIMOQwrLDkcKLw5HCgcOQwr7DkcKCw5HCgyDDkMK3w5DCsMOQwrPDkMK+w5DCu8OQwr7DkMKyw5DCusOQwr7DkMKyIMOQwr/DkMK+w5DCtMORwoHDkcKCw5DCvsOQwrvDkMKxw5HChsOQwr7DkMKyIMOQwrIgw5HCgsOQwrDDkMKxw5DCu8OQwrjDkcKGw5DCsMORwoVcbi50YWJsZS1saXN0IC50ZC1ibG9jay1saW5lIHtcbiAgbWF4LWhlaWdodDogNTAlO1xufVxuXG4vL8OQwrLDkcKLw5HCgMOQwrDDkMKyw5DCvcOQwrjDkMKyw5DCsMORwo4gw5HCgcORwoLDkcKAw5DCtcOQwrvDkMK+w5HCh8OQwrrDkcKDIMORwoHDkMK+w5HCgMORwoLDkMK4w5HCgMOQwr7DkMKyw5DCusOQwrhcbi5zb3J0LWRpci1hc2M6OmFmdGVyIHtcbiAgbGVmdDogMnB4O1xufVxuLnNvcnQtZGlyLWRlc2M6OmFmdGVyIHtcbiAgbGVmdDogMnB4O1xufVxuXG5cbi8vXG4uZWRpdC1mb3JtIC5yYWRpby1idG4gaW5wdXQ6Y2hlY2tlZCAucmFkaW8tYnRue1xuICBib3JkZXI6IHJlZCBzb2xpZCAxcHg7XG59XG5cbi5yYWRpby1idG4gOmNoZWNrZWQgKyBzcGFuIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQsICAjREI1NjNCKTtcbn1cblxuXG4udGFibGUtbGlzdCAubWF0LW1kYy10YWJsZXtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzgzOTA5RTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLDAuMSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 98423:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesModule: () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 9390);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ 45816);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 16708);
/* harmony import */ var _components_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/currency/currency.component */ 57044);
/* harmony import */ var _places_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./places/test-page/test-page.component */ 46244);
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-list/table-list.component */ 19647);
/* harmony import */ var _table_components_base_table_base_table_componet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/components/base-table/base-table.componet */ 81437);
/* harmony import */ var _table_components_base_table_customers_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table/components/base-table/customers-table.component */ 23941);
/* harmony import */ var _services_navigation_history_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/navigation-history.service */ 91646);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ 93887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);











class PagesModule {
  static {
    this.ɵfac = function PagesModule_Factory(t) {
      return new (t || PagesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      providers: [_services_navigation_history_service__WEBPACK_IMPORTED_MODULE_8__.NavigationHistoryService // Сервис будет доступен в рамках PagesModule
      ],
      imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](PagesModule, {
    declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_1__.PagesComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyComponent,
    // EmployeeRegisterComponent,
    _table_components_base_table_base_table_componet__WEBPACK_IMPORTED_MODULE_6__.BaseTableComponent, _table_components_base_table_customers_table_component__WEBPACK_IMPORTED_MODULE_7__.CustomersTableComponent, _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_5__.TableList, _places_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_4__.TestPage],
    imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule]
  });
})();

/***/ }),

/***/ 11152:
/*!****************************************!*\
  !*** ./src/app/pages/pages.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandingService: () => (/* binding */ BrandingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ 43273);





/**
 * Сервис для работы с настройками приложения (брендинг, темы, настройки страниц)
 */
class BrandingService {
  constructor(settingsService) {
    this.settingsService = settingsService;
    this.baseLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? 'https://cargodrom.com/' : 'https://dev.cargodrom.com/';
    // Subject для хранения ссылки на логотип
    this.logoLinkSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    // Subject для хранения CSS переменных цветов
    this.colorsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    // Public observables для подписки на изменения
    this.logoLink$ = this.logoLinkSubject.asObservable();
    this.colors$ = this.colorsSubject.asObservable();
    this.init();
  }
  /**
   * Инициализация сервиса - загрузка настроек
   */
  init() {
    this.getSettings();
  }
  /**
   * Получить полную ссылку на логотип как Observable
   * @returns {Observable<string>} - Observable с полной ссылкой на логотип
   */
  getLogoLink() {
    return this.logoLink$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(logoLink => logoLink !== '' ? this.baseLink + logoLink : ''));
  }
  /**
   * Получить полную ссылку на логотип как синхронное значение
   * @returns {string} - Текущая полная ссылка на логотип
   */
  getLogoLinkSync() {
    const logoLink = this.logoLinkSubject.value;
    return logoLink !== '' ? this.baseLink + logoLink : '';
  }
  /**
   * Получить CSS переменные цветов как Observable
   * @returns {Observable<string>} - Observable с CSS переменными для применения в стилях
   */
  getColors() {
    return this.colors$;
  }
  /**
   * Получить CSS переменные цветов как синхронное значение
   * @returns {string} - Текущие CSS переменные в виде строки
   */
  getColorsSync() {
    return this.colorsSubject.value;
  }
  /**
   * Загрузка настроек с сервера
   */
  getSettings() {
    this.settingsService.settingsGet().subscribe({
      next: data => {
        // Обработка логотипа
        if (data.branding_logo && data.branding_logo !== '') {
          this.logoLinkSubject.next(data.branding_logo);
        }
        // Обработка цветов
        if (data.branding_colors) {
          // const cssVariables = this.convertColorsToCssVariables(data.branding_colors);
          const cssVariables = data.branding_logo && data.branding_logo !== '' ? this.convertColorsToCssVariables(data.branding_colors) + ` --logo_url:url(${this.getLogoLinkSync()}); --bg_size: cover;` : this.convertColorsToCssVariables(data.branding_colors);
          this.colorsSubject.next(cssVariables);
        }
        console.log('Branding service initialized:', {
          logoLink: this.logoLinkSubject.value,
          colors: this.colorsSubject.value
        });
      },
      error: err => {
        console.error('Ошибка загрузки настроек:', err);
      }
    });
  }
  /**
   * Конвертация объекта цветов в строку CSS переменных
   * @param {Object} colors - Объект с цветами (ключ-значение)
   * @returns {string} - Строка с CSS переменными для применения в атрибуте style
   */
  convertColorsToCssVariables(colors) {
    const cssVariables = [];
    Object.entries(colors).forEach(([key, value]) => {
      if (value && typeof value === 'string') {
        // Преобразуем ключ в kebab-case для CSS переменных
        const cssVarName = `--user-brend_${key.replace(/_/g, '_')}`;
        cssVariables.push(`${cssVarName}: ${value};`);
      }
    });
    return cssVariables.join(' ');
  }
  /**
   * Метод для ручного обновления логотипа
   * @param {string} newLogoLink - Новая ссылка на логотип (относительный путь)
   */
  updateLogoLink(newLogoLink) {
    this.logoLinkSubject.next(newLogoLink);
  }
  /**
   * Метод для ручного обновления цветов
   * @param {Object} colors - Новый объект с цветами
   */
  updateColors(colors) {
    const cssVariables = this.convertColorsToCssVariables(colors);
    this.colorsSubject.next(cssVariables);
  }
  /**
   * Получить все текущие настройки синхронно
   * @returns {Object} - Объект с текущими настройками
   */
  getCurrentSettings() {
    return {
      logoLink: this.getLogoLinkSync(),
      colors: this.getColorsSync()
    };
  }
  static {
    this.ɵfac = function BrandingService_Factory(t) {
      return new (t || BrandingService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: BrandingService,
      factory: BrandingService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 46244:
/*!***************************************************************!*\
  !*** ./src/app/pages/places/test-page/test-page.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestPage: () => (/* binding */ TestPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _table_list_table_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../table-list/table-list.service */ 31607);
/* harmony import */ var _table_components_base_table_customers_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../table/components/base-table/customers-table.component */ 23941);



class TestPage {
  constructor(tableList) {
    this.tableList = tableList;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function TestPage_Factory(t) {
      return new (t || TestPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_table_list_table_list_service__WEBPACK_IMPORTED_MODULE_0__.TableListService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TestPage,
      selectors: [["app-test-page"]],
      decls: 1,
      vars: 0,
      template: function TestPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-customers-table");
        }
      },
      dependencies: [_table_components_base_table_customers_table_component__WEBPACK_IMPORTED_MODULE_1__.CustomersTableComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 69110:
/*!*************************************************************!*\
  !*** ./src/app/pages/services/сurrency/currency.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrencyService: () => (/* binding */ CurrencyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19240);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_api_services_system_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services/system.service */ 43812);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader.service */ 51798);





class CurrencyService {
  constructor(systemService, loaderService) {
    this.systemService = systemService;
    this.loaderService = loaderService;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this._currencies$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    this.currencies$ = this._currencies$.asObservable();
    this._summary$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.summary$ = this._summary$.asObservable();
    this.initCurrencyUpdates();
  }
  initCurrencyUpdates() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(600000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.loadCurrencyData()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe();
  }
  loadCurrencyData() {
    return this.loaderService.wrapRequests({
      currencies: this.systemService.systemCurrency()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(response => {
      const normalizedResponse = this.normalizeResponse(response.currencies);
      this._currencies$.next(normalizedResponse.current);
      this._summary$.next(normalizedResponse.summary);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      console.error('Currency update error', err);
      return [];
    }),
    // Явно указываем тип void для завершения цепочки
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => []));
  }
  normalizeResponse(response) {
    return {
      current: response?.current ?? [],
      summary: response?.summary ?? {
        title: '',
        rows: []
      }
    };
  }
  getCurrencies() {
    return this._currencies$.getValue();
  }
  getSummary() {
    return this._summary$.getValue();
  }
  refresh() {
    this.loadCurrencyData().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroy$)).subscribe();
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  static {
    this.ɵfac = function CurrencyService_Factory(t) {
      return new (t || CurrencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_api_services_system_service__WEBPACK_IMPORTED_MODULE_0__.SystemService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
      token: CurrencyService,
      factory: CurrencyService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 19647:
/*!**********************************************************!*\
  !*** ./src/app/pages/table-list/table-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableList: () => (/* binding */ TableList)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class TableList {
  static {
    this.ɵfac = function TableList_Factory(t) {
      return new (t || TableList)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TableList,
      selectors: [["app-table-list"]],
      decls: 0,
      vars: 0,
      template: function TableList_Template(rf, ctx) {},
      styles: ["@charset \"UTF-8\";\n.table-list {\n  display: grid;\n  width: 100%;\n}\n\n/* \u0413\u0440\u0438\u0434 \u0434\u043B\u044F header */\n.head {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));\n}\n\n.head .column {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));\n}\n\n.head .sub-column {\n  display: grid;\n  place-items: center;\n}\n\n/* \u0413\u0440\u0438\u0434 \u0434\u043B\u044F body */\n.body {\n  display: grid;\n}\n\n.row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));\n}\n\n.row .column {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));\n}\n\n.row .sub-column {\n  display: grid;\n  place-items: start;\n}\n\n.content {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGFibGUtbGlzdC90YWJsZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0Esb0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSx1REFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVEQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQSxrQkFBQTtBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVEQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdURBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogw5DCk8ORwoDDkMK4w5DCtCDDkMK0w5DCu8ORwo8gaGVhZGVyICovXG4uaGVhZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5oZWFkIC5jb2x1bW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDAsIDFmcikpO1xufVxuXG4uaGVhZCAuc3ViLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIMOQwpPDkcKAw5DCuMOQwrQgw5DCtMOQwrvDkcKPIGJvZHkgKi9cbi5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5yb3cgLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5yb3cgLnN1Yi1jb2x1bW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogc3RhcnQ7XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 31607:
/*!********************************************************!*\
  !*** ./src/app/pages/table-list/table-list.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableListService: () => (/* binding */ TableListService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services */ 43273);




class TableListService {
  constructor(location, contractorService, requestService, customerService, orderService, settingsSertvice, messageService) {
    this.location = location;
    this.contractorService = contractorService;
    this.requestService = requestService;
    this.customerService = customerService;
    this.orderService = orderService;
    this.settingsSertvice = settingsSertvice;
    this.messageService = messageService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.tables = {
      rate_final: {
        path: 'pages/request/details/final',
        rows: params => this.requestService.requestRateFinalList(params),
        columns: params => this.requestService.requestRateListParam(params)
      },
      rate_transporter: {
        path: 'pages/request/details/transporter',
        rows: params => this.requestService.requestRateTransporterList(params),
        columns: params => this.requestService.requestRateListParam(params)
      },
      rate_custom: {
        path: 'pages/request/details/custom',
        rows: params => this.requestService.requestRateCustomsList(params),
        columns: params => this.requestService.requestRateListParam(params)
      },
      rate_point: {
        path: 'pages/request/details/point',
        rows: params => this.requestService.requestRatePointList(params),
        columns: params => this.requestService.requestRateListParam(params)
      },
      rate_other: {
        path: 'pages/request/details/other',
        rows: params => this.requestService.requestRateOtherList(params),
        columns: params => this.requestService.requestRateListParam(params)
      },
      test: {
        path: 'pages/test',
        rows: params => this.requestService.requestList(params),
        columns: params => this.requestService.requestListParam(params)
      },
      request: {
        path: 'pages/request',
        rows: params => this.requestService.requestList(params),
        columns: params => this.requestService.requestListParam(params)
      },
      contractor: {
        path: 'pages/contractor',
        rows: params => this.contractorService.contractorList(params),
        columns: params => this.contractorService.contractorListParam(params)
      },
      customer: {
        path: 'pages/customer',
        rows: params => this.customerService.customerList(params),
        columns: params => this.customerService.customerListParam(params)
      },
      order: {
        path: 'pages/order/transportation',
        rows: params => this.orderService.orderList(params),
        columns: params => this.orderService.orderListParam(params)
      },
      message: {
        path: 'pages/message',
        rows: params => this.messageService.messageList(params),
        columns: params => this.messageService.messageListParam(params)
      }
      // settings_filters: {
      //   path: 'pages/settings/table-filter/',
      //   rows: (params) => this.settingsSertvice.settingsFilterList(params),
      //   columns: (params) => this.getTableFiltersListParam(params)
      // },
    };
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getCurrentTableKey() {
    const currentPath = this.location.path();
    // Ищем первую таблицу, чей path содержится в текущем URL
    const found = Object.entries(this.tables).find(([_, config]) => currentPath.includes(config.path));
    return found?.[0] ?? null;
  }
  getTableMethod(method, params) {
    const tableKey = this.getCurrentTableKey() ?? 'request';
    const table = this.tables[tableKey];
    if (!table) {
      throw new Error(`Table configuration not found for key: ${tableKey}`);
    }
    const methodFn = table[method];
    if (typeof methodFn !== 'function') {
      throw new Error(`Method ${method} is not a function in table: ${tableKey}`);
    }
    return methodFn(params);
  }
  getRows(params) {
    return this.getTableMethod('rows', params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
  }
  getParam(params) {
    return this.getTableMethod('columns', params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroy$));
  }
  static {
    this.ɵfac = function TableListService_Factory(t) {
      return new (t || TableListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.ContractorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.MessageService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: TableListService,
      factory: TableListService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 81437:
/*!**************************************************************************!*\
  !*** ./src/app/pages/table/components/base-table/base-table.componet.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseTableComponent: () => (/* binding */ BaseTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
// base-table.component.ts



function BaseTableComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subCol_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", subCol_r5.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCol_r5.title, " ");
  }
}
function BaseTableComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaseTableComponent_div_2_div_1_Template, 2, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", column_r3.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r3 == null ? null : column_r3.items);
  }
}
function BaseTableComponent_div_4_div_1_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0, a1) {
  return {
    $implicit: a0,
    column: a1
  };
};
function BaseTableComponent_div_4_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaseTableComponent_div_4_div_1_div_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subCol_r10 = ctx.$implicit;
    const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", subCol_r10.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.columnTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, row_r6, subCol_r10));
  }
}
function BaseTableComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaseTableComponent_div_4_div_1_div_1_Template, 2, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", column_r8.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r8 == null ? null : column_r8.items);
  }
}
function BaseTableComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BaseTableComponent_div_4_div_1_Template, 2, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.columns);
  }
}
function BaseTableComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0414\u0430\u043D\u043D\u044B\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class BaseTableComponent {
  constructor() {
    this.columns = [];
    this.rows = [];
  }
  static {
    this.ɵfac = function BaseTableComponent_Factory(t) {
      return new (t || BaseTableComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BaseTableComponent,
      selectors: [["app-base-table"]],
      contentQueries: function BaseTableComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.columnTemplate = _t.first);
        }
      },
      inputs: {
        columns: "columns",
        rows: "rows"
      },
      decls: 6,
      vars: 3,
      consts: [[1, "table-container"], [1, "table-header"], ["class", "header-cell", 3, "width", 4, "ngFor", "ngForOf"], [1, "table-body"], ["class", "table-row", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "header-cell"], [1, "table-row"], ["class", "table-cell", 3, "width", 4, "ngFor", "ngForOf"], [1, "table-cell"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "empty-state"]],
      template: function BaseTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BaseTableComponent_div_2_Template, 2, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BaseTableComponent_div_4_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BaseTableComponent_div_5_Template, 2, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rows);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rows || ctx.rows.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
      styles: [".table-container[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  overflow: hidden;\n  font-family: Arial, sans-serif;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f5f5f5;\n  font-weight: bold;\n}\n\n.header-cell[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-right: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.table-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid #ddd;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background-color: #f9f9f9;\n}\n\n.table-cell[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-right: 1px solid #ddd;\n  display: flex;\n  flex-grow: 1;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGFibGUvY29tcG9uZW50cy9iYXNlLXRhYmxlL2Jhc2UtdGFibGUuY29tcG9uZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUFSOztBQUdNO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFBUjs7QUFHTTtFQUNFLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBUjs7QUFHTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFSOztBQUdNO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBQVI7O0FBR007RUFDRSx5QkFBQTtBQUFSOztBQUdNO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBUjs7QUFHTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBUiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICAudGFibGUtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXItY2VsbCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cblxuICAgICAgLnRhYmxlLWJvZHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAudGFibGUtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG5cbiAgICAgIC50YWJsZS1yb3c6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgfVxuXG4gICAgICAudGFibGUtY2VsbCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cblxuICAgICAgLmVtcHR5LXN0YXRlIHtcbiAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 23941:
/*!********************************************************************************!*\
  !*** ./src/app/pages/table/components/base-table/customers-table.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomersTableComponent: () => (/* binding */ CustomersTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _api_services_customer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api/services/customer.service */ 44165);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/header/header.component */ 16708);
/* harmony import */ var _base_table_componet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-table.componet */ 81437);





function CustomersTableComponent_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CustomersTableComponent_ng_template_4_ng_container_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const row_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.openSettings(row_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u2699\uFE0F \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function CustomersTableComponent_ng_template_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const row_r1 = ctx_r10.$implicit;
    const column_r2 = ctx_r10.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \uD83D\uDCDE ", row_r1[column_r2.field] || "-", " ");
  }
}
function CustomersTableComponent_ng_template_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const row_r1 = ctx_r11.$implicit;
    const column_r2 = ctx_r11.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u2709\uFE0F ", row_r1[column_r2.field] || "-", " ");
  }
}
function CustomersTableComponent_ng_template_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const row_r1 = ctx_r12.$implicit;
    const column_r2 = ctx_r12.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r1[column_r2.field] || "-", " ");
  }
}
function CustomersTableComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CustomersTableComponent_ng_template_4_ng_container_1_Template, 3, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CustomersTableComponent_ng_template_4_ng_container_2_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CustomersTableComponent_ng_template_4_ng_container_3_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CustomersTableComponent_ng_template_4_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r2 = ctx.column;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", column_r2.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "email");
  }
}
class CustomersTableComponent {
  constructor(customerService) {
    this.customerService = customerService;
    this.rows = [];
    this.columns = [];
  }
  ngOnInit() {
    this.loadColumns();
    this.loadRows();
  }
  loadColumns() {
    this.customerService.customerListParam().subscribe({
      next: schema => {
        this.columns = schema.table || [];
      },
      error: error => {
        console.error('Ошибка загрузки схемы таблицы:', error);
        this.columns = [];
      }
    });
  }
  loadRows() {
    this.customerService.customerList({}).subscribe({
      next: response => {
        this.rows = response.items || [];
      },
      error: error => {
        console.error('Ошибка загрузки клиентов:', error);
        this.rows = [];
      }
    });
  }
  openSettings(customer) {
    console.log('Настройки клиента:', customer);
  }
  static {
    this.ɵfac = function CustomersTableComponent_Factory(t) {
      return new (t || CustomersTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_api_services_customer_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CustomersTableComponent,
      selectors: [["app-customers-table"]],
      decls: 6,
      vars: 2,
      consts: [[1, "customers-table"], [3, "columns", "rows"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "settings-btn", 3, "click"]],
      template: function CustomersTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-base-table", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CustomersTableComponent_ng_template_4_Template, 5, 4, "ng-template");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx.columns)("rows", ctx.rows);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _base_table_componet__WEBPACK_IMPORTED_MODULE_2__.BaseTableComponent],
      styles: [".customers-table[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #333;\n}\n\n.settings-btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #ddd;\n  background: white;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 12px;\n}\n\n.settings-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGFibGUvY29tcG9uZW50cy9iYXNlLXRhYmxlL2N1c3RvbWVycy10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ007RUFDRSxZQUFBO0FBQVI7O0FBR007RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFBUjs7QUFHTTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFBUjs7QUFHTTtFQUNFLG1CQUFBO0FBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5jdXN0b21lcnMtdGFibGUge1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG5cbiAgICAgIC5zZXR0aW5ncy1idG4ge1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5zZXR0aW5ncy1idG46aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map