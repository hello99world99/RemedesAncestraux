"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_favorites_favorites_module_ts"],{

/***/ 46618:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/favorites/cim/cim.component.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list class=\"ion-no-padding\" *ngFor=\"let cim of cimList\">\n  <ion-item-sliding>\n    <ion-item color=\"light\" (click)=\"showChildren(cim?.id)\">\n      <ion-avatar class=\"ion-margin\" slot=\"start\">\n        <img [src]=\"cim?.get('image')\" />\n      </ion-avatar>\n      <ion-label>{{ cim?.get('title') }}</ion-label>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option color=\"light\" (click)=\"removeFromFavorite(cim)\"><ion-icon color=\"danger\" name=\"heart-dislike\"></ion-icon></ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n");

/***/ }),

/***/ 40591:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/favorites/illness/illness.component.html ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  illness works!\n</p>\n");

/***/ }),

/***/ 12632:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/favorites/remedy/remedy.component.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card>\n  <ion-list *ngFor=\"let remedy of remedies\">\n    <ion-card color=\"light\" class=\"ion-margin-bottom ion-padding\">\n      <ion-card-header>\n        <ion-title class=\"ion-text-center\">{{ remedy?.get('nom') }}</ion-title>\n      </ion-card-header>\n      <ion-card-content>\n        <img [src]=\"remedy?.get('image')\" />\n        <ion-card-subtitle class=\"ion-text-center\">{{ remedy?.get('pharmaName') }}</ion-card-subtitle>\n      </ion-card-content>\n      <ion-button color=\"cgreen\" expand=\"block\" (click)=\"showDetails(remedy)\">\n        <ion-icon name=\"eye\"></ion-icon>\n        <span class=\"ion-margin\">voir</span>\n      </ion-button>\n    </ion-card>\n  </ion-list>\n</ion-card>\n");

/***/ }),

/***/ 68439:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/favorites/favorites.page.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"cgreen\"class=\"bg_transp\" lines=\"none\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"light\" routerLink=\"/\">\n        <ion-icon name=\"caret-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\">Mes favoris</ion-title>\n  </ion-toolbar>\n  <ion-segment color=\"cgreen\" (ionChange)=\"segmentChanged($event)\" value=\"cim\" scrollable>\n    <ion-segment-button value=\"cim\">\n      <ion-label>CIM</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"illness\">\n      <ion-label>Maladies</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"remedy\">\n      <ion-label>Remèdes</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n  <app-cim *ngIf=\"segmentValue === 'cim'\"></app-cim>\n  <app-illness *ngIf=\"segmentValue === 'illness'\"></app-illness>\n  <app-remedy *ngIf=\"segmentValue === 'remedy'\"></app-remedy>\n</ion-content>\n");

/***/ }),

/***/ 48334:
/*!***********************************************************!*\
  !*** ./src/app/components/favorites/cim/cim.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CimComponent": () => (/* binding */ CimComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cim_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cim.component.html */ 46618);
/* harmony import */ var _cim_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cim.component.scss */ 11310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/remede-service.service */ 32132);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);



/* eslint-disable object-shorthand */



let CimComponent = class CimComponent {
    constructor(appService, router) {
        this.appService = appService;
        this.router = router;
        this.cimList = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.cimList = yield this.appService.getFavoritesCim();
        });
    }
    showChildren(uid) {
        this.router.navigate(['children', {
                uid: uid
            }]);
    }
    removeFromFavorite(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.appService.removeFromFavorite(data);
            this.cimList = yield this.appService.getFavoritesCim();
        });
    }
};
CimComponent.ctorParameters = () => [
    { type: _services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__.RemedeServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CimComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cim',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cim_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cim_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CimComponent);



/***/ }),

/***/ 22145:
/*!*******************************************************************!*\
  !*** ./src/app/components/favorites/illness/illness.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IllnessComponent": () => (/* binding */ IllnessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_illness_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./illness.component.html */ 40591);
/* harmony import */ var _illness_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./illness.component.scss */ 14520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let IllnessComponent = class IllnessComponent {
    constructor() { }
    ngOnInit() { }
};
IllnessComponent.ctorParameters = () => [];
IllnessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-illness',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_illness_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_illness_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IllnessComponent);



/***/ }),

/***/ 74700:
/*!*****************************************************************!*\
  !*** ./src/app/components/favorites/remedy/remedy.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemedyComponent": () => (/* binding */ RemedyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_remedy_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./remedy.component.html */ 12632);
/* harmony import */ var _remedy_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remedy.component.scss */ 55447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/pharma-service.service */ 3519);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);






let RemedyComponent = class RemedyComponent {
    constructor(pharmaService, router) {
        this.pharmaService = pharmaService;
        this.router = router;
        this.remedies = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.remedies = yield this.pharmaService.getFavoritesRemedy();
        });
    }
    showDetails(remedy) {
        this.router.navigate(['/remede-infos', {
                uid: remedy === null || remedy === void 0 ? void 0 : remedy.id
            }]);
    }
};
RemedyComponent.ctorParameters = () => [
    { type: _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_2__.PharmaServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
RemedyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-remedy',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_remedy_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_remedy_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RemedyComponent);



/***/ }),

/***/ 56266:
/*!*************************************************************!*\
  !*** ./src/app/pages/favorites/favorites-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageRoutingModule": () => (/* binding */ FavoritesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.page */ 2442);




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_0__.FavoritesPage
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ 66519:
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPageModule": () => (/* binding */ FavoritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-routing.module */ 56266);
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page */ 2442);
/* harmony import */ var src_app_components_favorites_cim_cim_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/favorites/cim/cim.component */ 48334);
/* harmony import */ var src_app_components_favorites_illness_illness_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/favorites/illness/illness.component */ 22145);
/* harmony import */ var src_app_components_favorites_remedy_remedy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/favorites/remedy/remedy.component */ 74700);










let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesPageRoutingModule
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_1__.FavoritesPage, src_app_components_favorites_cim_cim_component__WEBPACK_IMPORTED_MODULE_2__.CimComponent, src_app_components_favorites_illness_illness_component__WEBPACK_IMPORTED_MODULE_3__.IllnessComponent, src_app_components_favorites_remedy_remedy_component__WEBPACK_IMPORTED_MODULE_4__.RemedyComponent]
    })
], FavoritesPageModule);



/***/ }),

/***/ 2442:
/*!***************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoritesPage": () => (/* binding */ FavoritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./favorites.page.html */ 68439);
/* harmony import */ var _favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.page.scss */ 52828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/remede-service.service */ 32132);



/* eslint-disable @typescript-eslint/dot-notation */


let FavoritesPage = class FavoritesPage {
    constructor(appService) {
        this.appService = appService;
        this.segmentValue = 'cim';
        this.cim = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.cim = yield this.appService.getFavoritesCim();
            console.log('cim : ', this.cim);
        });
    }
    segmentChanged(event) {
        this.segmentValue = event.target['value'];
    }
};
FavoritesPage.ctorParameters = () => [
    { type: _services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__.RemedeServiceService }
];
FavoritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-favorites',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favorites_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_favorites_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavoritesPage);



/***/ }),

/***/ 11310:
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/cim/cim.component.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaW0uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 14520:
/*!*********************************************************************!*\
  !*** ./src/app/components/favorites/illness/illness.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbGxuZXNzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 55447:
/*!*******************************************************************!*\
  !*** ./src/app/components/favorites/remedy/remedy.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1lZHkuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 52828:
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvcml0ZXMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_favorites_favorites_module_ts.js.map