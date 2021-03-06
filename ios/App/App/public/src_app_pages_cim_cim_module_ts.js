"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cim_cim_module_ts"],{

/***/ 6450:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/cim/cim.page.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-button slot=\"start\" (click)=\"openMenu()\">\r\n        <ion-icon color=\"light\" slot=\"icon-only\" ios=\"menu\" md=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-avatar class=\"ion-margin profil\" (click)='login()' slot=\"end\" *ngIf=\"currentUser\">\r\n      <img src=\"{{ currentUser?.photoURL }}\" />\r\n    </ion-avatar>\r\n    <ion-avatar class=\"ion-margin profil\" (click)='login()' slot=\"end\" *ngIf=\"!currentUser\">\r\n      <img src=\"{../../assets/files/images/default_profil.png\" />\r\n    </ion-avatar>\r\n  </ion-toolbar>\r\n  <ion-item color=\"cgreen\" class=\"ion-text-center ion-no-margin\" lines=\"none\">\r\n    <ion-title color=\"light\">Remèdes Traditionnels</ion-title>\r\n  </ion-item>\r\n  <ion-button expand=\"block\" color=\"light\" (click)=\"showSearch()\">\r\n    <ion-icon name=\"search\"></ion-icon>\r\n    <span class=\"ion-margin\">rechercher</span>\r\n  </ion-button>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list class=\"ion-no-padding\" *ngFor=\"let cim of cimList\">\r\n    <ion-item-sliding>\r\n      <ion-item color=\"light\" (click)=\"showChildren(cim?.id)\">\r\n        <ion-avatar class=\"ion-margin\" slot=\"start\">\r\n          <img [src]=\"cim?.get('image')\" />\r\n        </ion-avatar>\r\n        <ion-label>{{ cim?.get('title') }}</ion-label>\r\n        <ion-badge slot=\"end\" color=\"light\">\r\n          <ion-text>\r\n            <b>{{ cim?.get('likes')?.length }}</b>\r\n          </ion-text>\r\n        </ion-badge>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"light\" (click)=\"addToFavorite(cim)\">\r\n          <ion-icon color=\"cgreen\" name=\"heart\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf=\"skeleton\">\r\n    <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9]\">\r\n      <ion-thumbnail slot=\"start\" class=\"ion-margin\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n        </h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ 11417:
/*!*************************************************!*\
  !*** ./src/app/pages/cim/cim-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CimPageRoutingModule": () => (/* binding */ CimPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _cim_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cim.page */ 53400);




const routes = [
    {
        path: '',
        component: _cim_page__WEBPACK_IMPORTED_MODULE_0__.CimPage
    }
];
let CimPageRoutingModule = class CimPageRoutingModule {
};
CimPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CimPageRoutingModule);



/***/ }),

/***/ 24374:
/*!*****************************************!*\
  !*** ./src/app/pages/cim/cim.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CimPageModule": () => (/* binding */ CimPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _cim_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cim-routing.module */ 11417);
/* harmony import */ var _cim_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cim.page */ 53400);







let CimPageModule = class CimPageModule {
};
CimPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cim_routing_module__WEBPACK_IMPORTED_MODULE_0__.CimPageRoutingModule
        ],
        declarations: [_cim_page__WEBPACK_IMPORTED_MODULE_1__.CimPage]
    })
], CimPageModule);



/***/ }),

/***/ 53400:
/*!***************************************!*\
  !*** ./src/app/pages/cim/cim.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CimPage": () => (/* binding */ CimPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cim_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cim.page.html */ 6450);
/* harmony import */ var _cim_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cim.page.scss */ 47328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/search/search.component */ 97404);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.component */ 36104);



/* eslint-disable object-shorthand */







let CimPage = class CimPage {
    constructor(menu, appService, app, modalController, router) {
        this.menu = menu;
        this.appService = appService;
        this.app = app;
        this.modalController = modalController;
        this.router = router;
        this.skeleton = true;
    }
    ngOnInit() {
        // this.appService.presentLoadingDefault('Chargement des contenues, veuillez patienter...');
        this.getUser();
        this.getListCIM();
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if (currentUser) {
                const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), '/Users/', currentUser.uid);
                const snapDoc = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(docRef);
                this.currentUser = snapDoc.data();
            }
        });
    }
    /**
     *Method to get all CIM from remedy service
     *
     * @memberof CimPage
     */
    getListCIM() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.cimList = [];
            const querySnapshot = yield this.appService.getActivatedCIM();
            querySnapshot.forEach((data) => {
                this.cimList.push(data);
            });
            this.skeleton = false;
            // this.appService.dismissLoading();
        });
    }
    addToFavorite(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.appService.addFavorite(data);
            yield this.getListCIM();
        });
    }
    showChildren(uid) {
        // this.appService.setDocument(child);
        this.router.navigate(['children', {
                uid: uid
            }]);
    }
    login() {
        if (this.currentUser) {
            this.router.navigateByUrl('/profile');
        }
        else {
            this.router.navigateByUrl('/sign-in');
        }
    }
    openMenu() {
        this.menu.open();
    }
    showSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_3__.SearchComponent,
                initialBreakpoint: 0.9,
                breakpoints: [0, 0.9, 1]
            });
            return yield modal.present();
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.ngOnInit();
            yield this.app.ngOnInit();
            yield event.target.complete();
        });
    }
};
CimPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__.RemedeServiceService },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
CimPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cim',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cim_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cim_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CimPage);



/***/ }),

/***/ 47328:
/*!*****************************************!*\
  !*** ./src/app/pages/cim/cim.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: #228B22;\n}\n\nion-searchbar {\n  padding: 8px;\n}\n\n.profil {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0MsWUFBQTtBQUNEOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImNpbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6ICMyMjhCMjI7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXJ7XHJcblx0cGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4ucHJvZmlse1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cim_cim_module_ts.js.map