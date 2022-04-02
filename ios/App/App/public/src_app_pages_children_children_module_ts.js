"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_children_children_module_ts"],{

/***/ 62002:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/children/children.page.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header style=\"background-image: url('{{ cim?.data()?.image }}'); background-size: cover;\"\r\n  class=\"ion-no-border bg_trans\">\r\n  <ion-toolbar class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"light\" defaultHref=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\r\n  <ion-item class=\"ion-text-center bg_transp bg_trans ion-no-padding\" lines=\"none\">\r\n    <ion-text class=\"text-bold bg_transp\">{{ cim?.get('title') }}</ion-text>\r\n  </ion-item>\r\n  <ion-card class=\"ion-text-center bg_transp bg_trans ion-no-padding\">\r\n    <audio controls [src]=\"cim?.get('audio')\"></audio>\r\n  </ion-card>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list *ngFor=\"let child of children\">\r\n    <ion-card color=\"light\" button=\"true\">\r\n      <ion-card-content (click)=\"showDetails(child[1]?.id)\">\r\n        <img class=\"children-image\" [src]=\"child[1]?.get('image')\" />\r\n        <ion-title class=\"ion-text-center\" size=\"small\">{{ child[1]?.get('title') }}</ion-title>\r\n      </ion-card-content>\r\n      <ion-card-subtitle class=\"ion-text-center ion-margin\">{{ child[0] }} remèdes proposés</ion-card-subtitle>\r\n      <ion-buttons>\r\n        <ion-button>\r\n          <ion-icon name=\"bookmark\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"cgreen\">\r\n          <ion-icon name=\"bookmark\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-card>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 15381:
/*!***********************************************************!*\
  !*** ./src/app/pages/children/children-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenPageRoutingModule": () => (/* binding */ ChildrenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _children_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./children.page */ 97927);




const routes = [
    {
        path: '',
        component: _children_page__WEBPACK_IMPORTED_MODULE_0__.ChildrenPage
    }
];
let ChildrenPageRoutingModule = class ChildrenPageRoutingModule {
};
ChildrenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChildrenPageRoutingModule);



/***/ }),

/***/ 78251:
/*!***************************************************!*\
  !*** ./src/app/pages/children/children.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenPageModule": () => (/* binding */ ChildrenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _children_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./children-routing.module */ 15381);
/* harmony import */ var _children_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./children.page */ 97927);







let ChildrenPageModule = class ChildrenPageModule {
};
ChildrenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _children_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChildrenPageRoutingModule
        ],
        declarations: [_children_page__WEBPACK_IMPORTED_MODULE_1__.ChildrenPage]
    })
], ChildrenPageModule);



/***/ }),

/***/ 97927:
/*!*************************************************!*\
  !*** ./src/app/pages/children/children.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenPage": () => (/* binding */ ChildrenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_children_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./children.page.html */ 62002);
/* harmony import */ var _children_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./children.page.scss */ 99816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ 36104);
/* harmony import */ var src_app_services_pharma_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/pharma-service.service */ 3519);



/* eslint-disable object-shorthand */





let ChildrenPage = class ChildrenPage {
    constructor(appService, pharmaService, activeRoute, app, router) {
        this.appService = appService;
        this.pharmaService = pharmaService;
        this.activeRoute = activeRoute;
        this.app = app;
        this.router = router;
        this.children = [];
        this.remedesCount = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
            this.uid = this.activeRoute.snapshot.paramMap.get('uid');
            this.cim = yield this.appService.getCIM(this.uid);
            yield this.getChildren();
        });
    }
    getChildren() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const querySnapshot = yield this.appService.getActivatedChildren(this.uid);
            yield querySnapshot.forEach((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const remedies = yield this.pharmaService.getRemedyByIllnessAndState(data === null || data === void 0 ? void 0 : data.id);
                this.children.push([remedies.size, data]);
            }));
            this.appService.dismissLoading();
        });
    }
    showDetails(uid) {
        this.router.navigate(['details', {
                cim: this.uid,
                child: uid
            }]);
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.ngOnInit();
            yield this.app.ngOnInit();
            yield event.target.complete();
        });
    }
};
ChildrenPage.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__.RemedeServiceService },
    { type: src_app_services_pharma_service_service__WEBPACK_IMPORTED_MODULE_4__.PharmaServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ChildrenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-children',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_children_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_children_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChildrenPage);



/***/ }),

/***/ 99816:
/*!***************************************************!*\
  !*** ./src/app/pages/children/children.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.bg_trans {\n  background-color: rgba(34, 139, 34, 0.5);\n}\n\n.children-image {\n  width: 100%;\n  border-radius: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkcmVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDSSx3Q0FBQTtBQUNKOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoiY2hpbGRyZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYmdfdHJhbnN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAxMzksIDM0LCAwLjUpO1xyXG59XHJcblxyXG4uY2hpbGRyZW4taW1hZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTlweDtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_children_children_module_ts.js.map