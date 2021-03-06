"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 45617:
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/dashboard/cim-section/cim-section.component.html ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card class=\"bg_transp\">\r\n  <ion-button class=\"ion-margin\" routerLink=\"/add-cim\" color=\"cgreen\" expand=\"block\">\r\n    <ion-icon icon=\"add\"></ion-icon>\r\n    <span class=\"ion-margin\">Ajouter</span>\r\n  </ion-button>\r\n\r\n  <ion-list class=\"bg_transp ion-no-margin ion-no-padding\" *ngFor=\"let cim of cimList\">\r\n    <ion-item-sliding *ngIf=\"cim[1]?.state === 'activated'\">\r\n      <ion-item (click)=\"viewContents(cim[0])\" color=\"light\" class=\"bg_transp ion-no-margin ion-no-padding\">\r\n        <ion-avatar class=\"ion-margin\" slot=\"start\">\r\n          <img src=\"{{ cim[1]?.image }}\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>{{ cim[1]?.title }}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option (click)=\"desactivateCIM(cim[0])\">\r\n          <ion-icon name=\"trash\"></ion-icon>\r\n          <span>supprimer</span>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"cgreen\" (click)=\"editCIM(cim[0])\">\r\n          <ion-icon name=\"create\"></ion-icon>\r\n          <span>modifier</span>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <!-- desactivated cim -->\r\n\r\n    <ion-item-sliding color=\"warning\" *ngIf=\"cim[1]?.state === 'desactivated'\">\r\n      <ion-item (click)=\"editCIM(cim[0])\" color=\"danger\" class=\"bg_transp ion-no-margin ion-no-padding\">\r\n        <ion-avatar class=\"ion-margin\" slot=\"start\">\r\n          <img src=\"{{ cim[1]?.image }}\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <p>{{ cim[1]?.title }}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option color=\"cgreen\" (click)=\"activateCIM(cim[0])\">\r\n          <ion-icon name=\"reload\"></ion-icon>\r\n          <span>activer</span>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"cgreen\" (click)=\"viewContents(cim[0])\">\r\n          <ion-icon name=\"create\"></ion-icon>\r\n          <span>maladies</span>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf=\"skeleton\">\r\n    <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9]\">\r\n      <ion-thumbnail slot=\"start\" class=\"ion-margin\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n        </h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-card>\r\n");

/***/ }),

/***/ 43950:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/dashboard/pharma-section/pharma-section.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card class=\"bg_transp\">\r\n  <ion-list class=\"ion-no-padding\" *ngFor=\"let pharma of pharmas\">\r\n    <!-- Pharmacop??e activated -->\r\n    <ion-item-sliding *ngIf=\"pharma?.get('state') === 'activated'\">\r\n      <ion-item color=\"light\">\r\n        <ion-avatar class=\"ion-margin\">\r\n          <img [src]=\"pharma?.get('image')\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <b>{{ pharma?.get('nom') }}</b>\r\n          <p>{{ pharma?.get('email') }}</p>\r\n          <p>{{ pharma?.get('telephone') }}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option color=\"danger\" (click)=\"desactivatePharma(pharma)\">desactivate</ion-item-option>\r\n      </ion-item-options>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"cgreen\" (click)=\"activatePharma(pharma)\">activate</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <!-- Pharmacop??es waiting -->\r\n    <ion-item-sliding *ngIf=\"pharma?.get('state') === 'waiting'\">\r\n      <ion-item color=\"warning\">\r\n        <ion-avatar class=\"ion-margin\">\r\n          <img [src]=\"pharma?.get('image')\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <b>{{ pharma?.get('nom') }}</b>\r\n          <p>{{ pharma?.get('email') }}</p>\r\n          <p>{{ pharma?.get('telephone') }}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option color=\"danger\" (click)=\"desactivatePharma(pharma)\">desactivate</ion-item-option>\r\n      </ion-item-options>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"cgreen\" (click)=\"activatePharma(pharma)\">activate</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <!-- Pharmacop??es desactivated -->\r\n    <ion-item-sliding *ngIf=\"pharma?.get('state') === 'desactivated'\">\r\n      <ion-item color=\"danger\">\r\n        <ion-avatar class=\"ion-margin\">\r\n          <img [src]=\"pharma?.get('image')\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <b>{{ pharma?.get('nom') }}</b>\r\n          <p>{{ pharma?.get('email') }}</p>\r\n          <p>{{ pharma?.get('telephone') }}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"cgreen\" (click)=\"activatePharma(pharma)\">activate</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf=\"skeleton\">\r\n    <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9]\">\r\n      <ion-thumbnail slot=\"start\" class=\"ion-margin\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n        </h3>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </h3>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n        </h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-card>\r\n");

/***/ }),

/***/ 39402:
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/dashboard/users-section/users-section.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card class=\"bg_transp\">\r\n  <ion-list *ngFor=\"let user of users\">\r\n    <ion-item-sliding *ngIf=\"user[1]?.state === 'activated'\">\r\n      <ion-item>\r\n        <ion-avatar class=\"ion-margin\">\r\n          <img src=\"{{ user[1]?.photoURL }}\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <b>{{ user[1]?.displayName }}</b>\r\n          <p>{{ user[1]?.userName }}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option color=\"danger\" (click)=\"desactivateUser(user[0])\">desactivate</ion-item-option>\r\n      </ion-item-options>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"cgreen\" (click)=\"activateUser(user[0])\">activate</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <ion-item-sliding *ngIf=\"user[1]?.state === 'desactivated'\">\r\n      <ion-item color=\"danger\">\r\n        <ion-avatar class=\"ion-margin\">\r\n          <img src=\"{{ user[1]?.photoURL }}\" />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <b>{{ user[1]?.displayName }}</b>\r\n          <p>{{ user[1]?.userName }}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option color=\"danger\" (click)=\"desactivateUser(user[0])\">desactivate</ion-item-option>\r\n      </ion-item-options>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"cgreen\" (click)=\"activateUser(user[0])\">activate</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf=\"skeleton\">\r\n    <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9]\">\r\n      <ion-thumbnail slot=\"start\" class=\"ion-margin\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n        </h3>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n        </h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-card>\r\n");

/***/ }),

/***/ 77818:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"cgreen\" class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button routerLink=\"/\">\r\n        <ion-icon color=\"light\" name=\"caret-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">Dashboard</ion-title>\r\n  </ion-toolbar>\r\n  <ion-segment color=\"cgreen\" position=\"fixed\" scrollable (ionChange)=\"segmentChanged($event)\" value=\"{{ tab }}\">\r\n    <ion-segment-button value=\"cim\">\r\n      <ion-label>cim</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"users\">\r\n      <ion-label>Users</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"pharma\">\r\n      <ion-label>Pharmacop??es</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- CIM tab content -->\r\n  <app-cim-section *ngIf=\"tab === 'cim'\"></app-cim-section>\r\n\r\n  <!-- Users tab content -->\r\n  <app-users-section *ngIf=\"tab === 'users'\"></app-users-section>\r\n\r\n  <!-- Pharma tab content -->\r\n  <app-pharma-section *ngIf=\"tab === 'pharma'\"></app-pharma-section>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 52469:
/*!***************************************************************************!*\
  !*** ./src/app/components/dashboard/cim-section/cim-section.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CimSectionComponent": () => (/* binding */ CimSectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cim_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cim-section.component.html */ 45617);
/* harmony import */ var _cim_section_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cim-section.component.scss */ 46648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);
/* harmony import */ var _editor_edit_cim_edit_cim_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../editor/edit-cim/edit-cim.component */ 83810);



/* eslint-disable object-shorthand */






let CimSectionComponent = class CimSectionComponent {
    constructor(modalController, appService, router) {
        this.modalController = modalController;
        this.appService = appService;
        this.router = router;
        this.cimList = [];
        this.skeleton = true;
    }
    ngOnInit() {
        this.getListCIM();
    }
    getListCIM() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.cimList = [];
            const querySnapshot = yield this.appService.getListCIM();
            querySnapshot.forEach((data) => {
                this.cimList.push([data.id, data.data()]);
            });
            this.skeleton = false;
        });
    }
    activateCIM(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const cimRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), 'CIM', uid);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(cimRef, {
                state: 'activated',
            }).then((result) => {
                this.appService.presentToast('CIM reactivat?? avec succ??ss', 'light');
                this.getListCIM();
            });
        });
    }
    desactivateCIM(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const cimRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), 'CIM', uid);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(cimRef, {
                state: 'desactivated',
            }).then((result) => {
                this.appService.presentToast('CIM supprim?? avec succ??ss', 'light');
                this.getListCIM();
            });
        });
    }
    editCIM(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _editor_edit_cim_edit_cim_component__WEBPACK_IMPORTED_MODULE_4__.EditCimComponent,
                cssClass: 'light',
                swipeToClose: true,
                componentProps: {
                    uid: uid
                }
            });
            return yield modal.present();
        });
    }
    viewContents(uid) {
        this.router.navigate(['cim-content', {
                uid: uid
            }]);
    }
};
CimSectionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__.RemedeServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
CimSectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cim-section',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cim_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cim_section_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CimSectionComponent);



/***/ }),

/***/ 88694:
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/pharma-section/pharma-section.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PharmaSectionComponent": () => (/* binding */ PharmaSectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pharma_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./pharma-section.component.html */ 43950);
/* harmony import */ var _pharma_section_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pharma-section.component.scss */ 35329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/pharma-service.service */ 3519);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);







let PharmaSectionComponent = class PharmaSectionComponent {
    constructor(pharmaService, appService) {
        this.pharmaService = pharmaService;
        this.appService = appService;
        this.pharmas = [];
        this.skeleton = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.getAllPharma();
        });
    }
    getAllPharma() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.pharmas = [];
            const results = yield this.pharmaService.getAllPharma();
            results.forEach((data) => {
                this.pharmas.push(data);
            });
            this.skeleton = false;
        });
    }
    desactivatePharma(pharma) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const cimRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), 'Pharmacopees', pharma === null || pharma === void 0 ? void 0 : pharma.id);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(cimRef, {
                state: 'desactivated',
            }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield this.getAllPharma();
                this.appService.presentToast('Pharmacop??e desactiv?? avec succ??ss', 'danger');
            }));
        });
    }
    activatePharma(pharma) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const cimRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), 'Pharmacopees', pharma === null || pharma === void 0 ? void 0 : pharma.id);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(cimRef, {
                state: 'activated',
            }).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield this.getAllPharma();
                this.appService.presentToast('Pharmacop??e reactivat?? avec succ??ss', 'light');
            }));
        });
    }
};
PharmaSectionComponent.ctorParameters = () => [
    { type: _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_2__.PharmaServiceService },
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__.RemedeServiceService }
];
PharmaSectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-pharma-section',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_pharma_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pharma_section_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PharmaSectionComponent);



/***/ }),

/***/ 15235:
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/users-section/users-section.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersSectionComponent": () => (/* binding */ UsersSectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_section_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./users-section.component.html */ 39402);
/* harmony import */ var _users_section_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-section.component.scss */ 85000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);






let UsersSectionComponent = class UsersSectionComponent {
    constructor(appService) {
        this.appService = appService;
        this.users = [];
        this.skeleton = true;
    }
    ngOnInit() {
        this.getUsers();
    }
    /**
     * Method to get all CIM from remedy service
     *
     * @memberof CimPage
     */
    getUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.users = [];
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), 'Users'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('displayName'));
            const querySnapshot = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);
            querySnapshot.forEach((data) => {
                this.users.push([data.id, data.data()]);
            });
            this.skeleton = false;
        });
    }
    activateUser(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `Users/${uid}`), {
                state: 'activated'
            });
            this.appService.presentToast('Utilisateur activ?? avec succ??ss', 'light');
            yield this.getUsers();
        });
    }
    desactivateUser(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `Users/${uid}`), {
                state: 'desactivated'
            });
            this.appService.presentToast('Utilisateur desactiv?? avec succ??ss', 'danger');
            yield this.getUsers();
        });
    }
};
UsersSectionComponent.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__.RemedeServiceService }
];
UsersSectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-users-section',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_section_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_users_section_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsersSectionComponent);



/***/ }),

/***/ 35376:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 55803);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 7945:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 35376);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 55803);
/* harmony import */ var src_app_components_dashboard_cim_section_cim_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/dashboard/cim-section/cim-section.component */ 52469);
/* harmony import */ var src_app_components_dashboard_users_section_users_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/dashboard/users-section/users-section.component */ 15235);
/* harmony import */ var src_app_components_dashboard_pharma_section_pharma_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/dashboard/pharma-section/pharma-section.component */ 88694);










let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule,
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage, src_app_components_dashboard_cim_section_cim_section_component__WEBPACK_IMPORTED_MODULE_2__.CimSectionComponent, src_app_components_dashboard_users_section_users_section_component__WEBPACK_IMPORTED_MODULE_3__.UsersSectionComponent, src_app_components_dashboard_pharma_section_pharma_section_component__WEBPACK_IMPORTED_MODULE_4__.PharmaSectionComponent]
    })
], DashboardPageModule);



/***/ }),

/***/ 55803:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard.page.html */ 77818);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 48365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let DashboardPage = class DashboardPage {
    constructor() {
        this.tab = 'cim';
    }
    ngOnInit() {
    }
    segmentChanged(tab) {
        this.tab = tab.detail.value;
    }
};
DashboardPage.ctorParameters = () => [];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 46648:
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboard/cim-section/cim-section.component.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaW0tc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 35329:
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/pharma-section/pharma-section.component.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaGFybWEtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 85000:
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/users-section/users-section.component.scss ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 48365:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map