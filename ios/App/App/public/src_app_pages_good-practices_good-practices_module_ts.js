"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_good-practices_good-practices_module_ts"],{

/***/ 40057:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/good-practices/good-practices.page.html ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"cgreen\" class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button routerLink=\"/\">\r\n        <ion-icon name=\"caret-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-text>\r\n      <ion-label>Les bonnes pratiques pour rester en bonne santé</ion-label>\r\n    </ion-text>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 82633:
/*!***********************************************************************!*\
  !*** ./src/app/pages/good-practices/good-practices-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoodPracticesPageRoutingModule": () => (/* binding */ GoodPracticesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _good_practices_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./good-practices.page */ 43233);




const routes = [
    {
        path: '',
        component: _good_practices_page__WEBPACK_IMPORTED_MODULE_0__.GoodPracticesPage
    }
];
let GoodPracticesPageRoutingModule = class GoodPracticesPageRoutingModule {
};
GoodPracticesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GoodPracticesPageRoutingModule);



/***/ }),

/***/ 13519:
/*!***************************************************************!*\
  !*** ./src/app/pages/good-practices/good-practices.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoodPracticesPageModule": () => (/* binding */ GoodPracticesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _good_practices_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./good-practices-routing.module */ 82633);
/* harmony import */ var _good_practices_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./good-practices.page */ 43233);







let GoodPracticesPageModule = class GoodPracticesPageModule {
};
GoodPracticesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _good_practices_routing_module__WEBPACK_IMPORTED_MODULE_0__.GoodPracticesPageRoutingModule
        ],
        declarations: [_good_practices_page__WEBPACK_IMPORTED_MODULE_1__.GoodPracticesPage]
    })
], GoodPracticesPageModule);



/***/ }),

/***/ 43233:
/*!*************************************************************!*\
  !*** ./src/app/pages/good-practices/good-practices.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoodPracticesPage": () => (/* binding */ GoodPracticesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_good_practices_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./good-practices.page.html */ 40057);
/* harmony import */ var _good_practices_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./good-practices.page.scss */ 48861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let GoodPracticesPage = class GoodPracticesPage {
    constructor() { }
    ngOnInit() {
    }
};
GoodPracticesPage.ctorParameters = () => [];
GoodPracticesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-good-practices',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_good_practices_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_good_practices_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GoodPracticesPage);



/***/ }),

/***/ 48861:
/*!***************************************************************!*\
  !*** ./src/app/pages/good-practices/good-practices.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb29kLXByYWN0aWNlcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_good-practices_good-practices_module_ts.js.map