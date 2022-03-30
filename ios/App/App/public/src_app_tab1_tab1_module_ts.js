"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 35211:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tab1.page.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"cgreen\"class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"light\" routerLink=\"/\">\r\n        <ion-icon name=\"caret-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-text>\r\n      <ion-label size=\"medium\" *ngIf=\"pharma\">{{ pharma.nom }}</ion-label>\r\n    </ion-text>\r\n  </ion-toolbar>\r\n  <!-- <ion-item color=\"cgreen\" lines=\"none\">\r\n    <ion-searchbar color=\"light\" showCancelButton=\"focus\" cancelButtonText=\"Annuler\" placeholder=\"Rechercher...\"\r\n      [(ngModel)]=\"searchRemedy\" animated focus></ion-searchbar>\r\n  </ion-item> -->\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card *ngIf=\"pharma\" class=\"ion-padding bg_transp\">\r\n    <ion-button class=\"ion-margin\" color=\"cgreen\" expand=\"block\" (click)=\"addRemede()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n      <span>Ajouter une remède</span>\r\n    </ion-button>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col color=\"lgreen\" *ngFor=\"let remedy of remedies\" size=\"6\" class=\"ion-align-self-start\">\r\n          <ion-card-subtitle class=\"ion-text-center\">{{ remedy?.get('nom') }}</ion-card-subtitle>\r\n          <img [src]=\"remedy?.get('image')\">\r\n          <ion-button color=\"cgreen\" expand=\"block\" (click)=\"editRemedy(remedy?.id)\">\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n            <span>modifier</span>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"container\" class=\"ion-padding\" *ngIf=\"!pharma\">\r\n    <span>Aucune pharmacopée trouvée à votre compte</span>\r\n    <ion-button color=\"cgreen\" (click)=\"installPharma()\" expand=\"block\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n      <span>installer une pharmacopée</span>\r\n    </ion-button>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 10923:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 76082);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 84592:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 76082);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 31110);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 10923);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 98996);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page],
    })
], Tab1PageModule);



/***/ }),

/***/ 76082:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab1.page.html */ 35211);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 28443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 21286);
/* harmony import */ var _components_edit_remedes_edit_remedes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/edit-remedes/edit-remedes.component */ 6645);
/* harmony import */ var _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pharma-service.service */ 3519);
/* harmony import */ var _services_remede_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/remede-service.service */ 32132);



/* eslint-disable object-shorthand */







let Tab1Page = class Tab1Page {
    constructor(loadingCtrl, router, pharmaService, appService, modalController) {
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.pharmaService = pharmaService;
        this.appService = appService;
        this.modalController = modalController;
        this.remedies = [];
        this.currentUser = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser;
        this.appService.presentLoadingDefault('Veuillez patienter...');
        this.getPharma();
        this.getAllRemedes();
    }
    installPharma() {
        this.router.navigateByUrl('/sign-up-pharma');
    }
    getPharma() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const pharmaRef = this.pharmaService.getPharma(this.currentUser.uid);
            this.pharma = (yield pharmaRef).data();
            this.appService.dismissLoading();
        });
    }
    /**
     *Get all remedies for current user
     *
     * @memberof Tab1Page
     */
    getAllRemedes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.pharmaService.getMyRemedies(this.currentUser.uid);
            result.forEach((data) => {
                this.remedies.push(data);
            });
        });
    }
    addRemede() {
        this.router.navigateByUrl('/remedes');
    }
    editRemedy(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_edit_remedes_edit_remedes_component__WEBPACK_IMPORTED_MODULE_3__.EditRemedesComponent,
                componentProps: {
                    uid: uid
                }
            });
            return yield modal.present();
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_4__.PharmaServiceService },
    { type: _services_remede_service_service__WEBPACK_IMPORTED_MODULE_5__.RemedeServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab1',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 28443:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-content .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFBSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map