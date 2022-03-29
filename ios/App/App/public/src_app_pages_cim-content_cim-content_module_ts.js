"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cim-content_cim-content_module_ts"],{

/***/ 75062:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/cim-content/cim-content.page.html ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"cgreen\" class=\"bg_transp\" lines=\"none\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-text>\n      <ion-label size=\"medium\">{{ cim?.get('title') }}</ion-label>\n    </ion-text>\n  </ion-toolbar>\n  <ion-card color=\"cgreen\">\n    <ion-button class=\"ion-margin\" (click)=\"addNewChild(cim?.id)\" color=\"light\" expand=\"block\">\n      <ion-icon icon=\"add\"></ion-icon>\n      <span class=\"ion-margin\">Ajouter</span>\n    </ion-button>\n  </ion-card>\n</ion-header>\n\n<ion-content>\n  <!-- activated -->\n\n  <ion-list class=\"bg_transp ion-no-margin ion-no-padding\" *ngFor=\"let child of children\">\n    <ion-item-sliding *ngIf=\"child?.get('state') === 'activated'\">\n      <ion-item color=\"light\" class=\"bg_transp ion-no-margin ion-no-padding\">\n        <ion-avatar class=\"ion-margin\" slot=\"start\">\n          <img [src]=\"child?.get('image')\" />\n        </ion-avatar>\n        <ion-label>\n          <p>{{ child?.get('title') }}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"start\">\n        <ion-item-option (click)=\"desactivateChild(child?.id)\">\n          <ion-icon name=\"trash\"></ion-icon>\n          <span>supprimer</span>\n        </ion-item-option>\n      </ion-item-options>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"cgreen\" (click)=\"editChild(child?.id)\">\n          <ion-icon name=\"create\"></ion-icon>\n          <span>modifier</span>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <!-- desactivated cim -->\n\n    <ion-item-sliding color=\"warning\" *ngIf=\"child?.get('state') === 'desactivated'\">\n      <ion-item (click)=\"editChild(child?.id)\" color=\"danger\" class=\"bg_transp ion-no-margin ion-no-padding\">\n        <ion-avatar class=\"ion-margin\" slot=\"start\">\n          <img [src]=\"child?.get('image')\" />\n        </ion-avatar>\n        <ion-label>\n          <p>{{ child?.get('title') }}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"cgreen\" (click)=\"activateChild(child?.id)\">\n          <ion-icon name=\"reload\"></ion-icon>\n          <span>activer</span>\n        </ion-item-option>\n      </ion-item-options>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"cgreen\" (click)=\"editChild(child?.id)\">\n          <ion-icon name=\"create\"></ion-icon>\n          <span>modifier</span>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 94593:
/*!*****************************************************************!*\
  !*** ./src/app/pages/cim-content/cim-content-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CimContentPageRoutingModule": () => (/* binding */ CimContentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _cim_content_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cim-content.page */ 86641);




const routes = [
    {
        path: '',
        component: _cim_content_page__WEBPACK_IMPORTED_MODULE_0__.CimContentPage
    }
];
let CimContentPageRoutingModule = class CimContentPageRoutingModule {
};
CimContentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CimContentPageRoutingModule);



/***/ }),

/***/ 93451:
/*!*********************************************************!*\
  !*** ./src/app/pages/cim-content/cim-content.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CimContentPageModule": () => (/* binding */ CimContentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _cim_content_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cim-content-routing.module */ 94593);
/* harmony import */ var _cim_content_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cim-content.page */ 86641);







let CimContentPageModule = class CimContentPageModule {
};
CimContentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cim_content_routing_module__WEBPACK_IMPORTED_MODULE_0__.CimContentPageRoutingModule
        ],
        declarations: [_cim_content_page__WEBPACK_IMPORTED_MODULE_1__.CimContentPage]
    })
], CimContentPageModule);



/***/ }),

/***/ 86641:
/*!*******************************************************!*\
  !*** ./src/app/pages/cim-content/cim-content.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CimContentPage": () => (/* binding */ CimContentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cim_content_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cim-content.page.html */ 75062);
/* harmony import */ var _cim_content_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cim-content.page.scss */ 88742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var src_app_components_edit_child_edit_child_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/edit-child/edit-child.component */ 22329);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);



/* eslint-disable object-shorthand */






let CimContentPage = class CimContentPage {
    constructor(appService, activeRoute, router, modalController) {
        this.appService = appService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.modalController = modalController;
        this.children = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.uid = this.activeRoute.snapshot.paramMap.get('uid');
            this.cim = yield this.appService.getCIM(this.uid);
            this.getChildren(this.uid);
        });
    }
    addNewChild(uid) {
        this.router.navigate(['add-child', {
                uid: uid
            }]);
    }
    getChildren(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.children = [];
            const result = yield this.appService.getChildren(uid);
            result.forEach((child) => {
                this.children.push(child);
            });
        });
    }
    activateChild(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const childRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `CIM/${this.uid}/Children/${uid}`);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(childRef, {
                state: 'activated',
            }).then((result) => {
                this.appService.presentToast('Maladie reactivaté avec succèss', 'light');
                this.getChildren(this.uid);
            });
        });
    }
    desactivateChild(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const cimRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `CIM/${this.uid}/Children/${uid}`);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(cimRef, {
                state: 'desactivated',
            }).then((result) => {
                this.appService.presentToast('Maladie supprimé avec succèss', 'light');
                this.getChildren(this.uid);
            });
        });
    }
    editChild(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_edit_child_edit_child_component__WEBPACK_IMPORTED_MODULE_3__.EditChildComponent,
                cssClass: 'light',
                swipeToClose: true,
                componentProps: {
                    cim: this.uid,
                    uid: uid
                }
            });
            return yield modal.present();
        });
    }
};
CimContentPage.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__.RemedeServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
CimContentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cim-content',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cim_content_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cim_content_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CimContentPage);



/***/ }),

/***/ 88742:
/*!*********************************************************!*\
  !*** ./src/app/pages/cim-content/cim-content.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaW0tY29udGVudC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cim-content_cim-content_module_ts.js.map