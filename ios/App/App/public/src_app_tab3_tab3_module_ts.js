"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 10334:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab3/tab3.page.html ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"cgreen\" class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"light\" routerLink=\"/\">\r\n        <ion-icon name=\"caret-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{ pharma$?.get('nom') }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card color=\"light\" class=\"ion-margin\">\r\n    <form class=\"container\" #data=\"ngForm\" (ngSubmit)=\"updatePharma(data)\">\r\n      <ion-item class=\"bg_transp\">\r\n        <ion-label color=\"cgreen\" position=\"floating\">Nom de la pharmacopée</ion-label>\r\n        <ion-input name=\"nom\" placeholder=\"Nom de la pharmacopée\" maxlength=\"24\" [value]=\"pharma$?.get('nom')\" ngModel\r\n          required></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"bg_transp\">\r\n        <ion-label color=\"cgreen\" position=\"floating\">Adresse</ion-label>\r\n        <ion-input type=\"text\" name=\"adresse\" placeholder=\"Adresse\" maxlength=\"19\" [value]=\"pharma$?.get('adresse')\"\r\n          ngModel required></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"bg_transp\">\r\n        <ion-label color=\"cgreen\" position=\"floating\">Numéro de téléphone</ion-label>\r\n        <ion-input type=\"tel\" name=\"telephone\" placeholder=\"Ex : +223 00 11 22 33\" [value]=\"pharma$?.get('telephone')\"\r\n          maxlength=\"19\" ngModel required></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"bg_transp\">\r\n        <ion-label color=\"cgreen\" position=\"floating\">Email</ion-label>\r\n        <ion-input type=\"email\" name=\"email\" placeholder=\"Ex : johndoe@gmail.com\" maxlength=\"24\"\r\n          [value]=\"pharma$?.get('email')\" ngModel required></ion-input>\r\n      </ion-item>\r\n      <ion-card *ngIf=\"pharma$\">\r\n        <img [src]=\"pharma$?.get('image')\" />\r\n      </ion-card>\r\n      <ion-item class=\"ion-hide\">\r\n        <input id=\"imageInput\" class=\"ion-hide\" type=\"file\" accept=\"image/jpeg, image/png\"/>\r\n      </ion-item>\r\n      <ion-button class=\"ion-margin\" (click)=\"chooseImage()\" expand=\"block\" color=\"cgreen\">\r\n        <ion-icon name=\"camera\" class=\"ion-margin\"></ion-icon>\r\n        photo\r\n      </ion-button>\r\n      <ion-button class=\"ion-margin\" expand=\"block\" color=\"cgreen\" type=\"submit\">\r\n        <ion-icon name=\"save\"></ion-icon>\r\n        <span class=\"ion-margin\">mettre à jour</span>\r\n      </ion-button>\r\n    </form>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 39126:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 27072);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 87084:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 27072);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 31110);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 39126);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 27072:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab3.page.html */ 10334);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 44170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 21286);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ 85645);
/* harmony import */ var _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/pharma-service.service */ 3519);
/* harmony import */ var _services_remede_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/remede-service.service */ 32132);



/* eslint-disable @typescript-eslint/dot-notation */






let Tab3Page = class Tab3Page {
    constructor(appService, pharmaService) {
        this.appService = appService;
        this.pharmaService = pharmaService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getPharma();
        });
    }
    getPharma() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.pharma$ = yield this.pharmaService.getPharma((0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid);
        });
    }
    chooseImage() {
        const imageInput = document.getElementById('imageInput');
        imageInput.click();
        imageInput.addEventListener('change', (e) => {
            this.updateImage(e.target['files'][0]);
        });
    }
    updateImage(image) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
            const imagePath = `Files/images/cim/${image.name}`;
            const newImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(), imagePath);
            const imageSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(newImageRef, image);
            const publicImageUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(newImageRef);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Pharmacopees/${(_a = this.pharma$) === null || _a === void 0 ? void 0 : _a.id}`), {
                image: publicImageUrl,
            });
            yield this.getPharma();
            yield this.appService.dismissLoading();
        });
    }
    updatePharma(data) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data.value);
            if (data.valid) {
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Pharmacopees/${(_a = this.pharma$) === null || _a === void 0 ? void 0 : _a.id}`), data.value);
                this.getPharma();
                yield this.appService.presentToast('<b>Mise en jour de la pharmacopée ajoutée avec succèss...</b>', 'light');
            }
            else {
                this.appService.presentToast('<b>Veuillez renseigner correctement tous les champs...</b>', 'danger');
            }
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_remede_service_service__WEBPACK_IMPORTED_MODULE_6__.RemedeServiceService },
    { type: _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_5__.PharmaServiceService }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab3',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 44170:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map