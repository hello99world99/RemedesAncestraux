"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sign-up-pharma_sign-up-pharma_module_ts"],{

/***/ 2350:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/sign-up-pharma/sign-up-pharma.page.html ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Ajouter une pharmacopée</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-margin\">\r\n    <form class=\"container\" #data=\"ngForm\" (ngSubmit)=\"createPharma(data)\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nom de la pharmacopée</ion-label>\r\n        <ion-input name=\"nom\" placeholder=\"Nom de la pharmacopée\" maxlength=\"24\" ngModel required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Adresse</ion-label>\r\n        <ion-input type=\"text\"name=\"adresse\" placeholder=\"Adresse\" maxlength=\"19\" ngModel required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Numéro de téléphone</ion-label>\r\n        <ion-input type=\"tel\" name=\"telephone\" placeholder=\"Ex : +223 00 11 22 33\" maxlength=\"19\" ngModel required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input type=\"email\" name=\"email\" placeholder=\"Ex : johndoe@gmail.com\" maxlength=\"24\" ngModel required></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"ion-hide\">\r\n        <input id=\"imageInput\" name=\"image\" class=\"ion-hide\" type=\"file\" accept=\"image/jpeg, image/png\" ngModel required/>\r\n      </ion-item>\r\n      <ion-button class=\"ion-margin\" (click)=\"chooseImage()\" expand=\"block\" color=\"cgreen\">\r\n        <ion-icon name=\"camera\" class=\"ion-margin\"></ion-icon>\r\n        Ajouter\r\n      </ion-button>\r\n      <ion-button class=\"ion-margin\" expand=\"block\" color=\"cgreen\" type=\"submit\">Ajouter</ion-button>\r\n      <ion-button class=\"ion-margin\" expand=\"block\" color=\"danger\" type=\"reset\">Annuler</ion-button>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 52752:
/*!***********************************************************************!*\
  !*** ./src/app/pages/sign-up-pharma/sign-up-pharma-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPharmaPageRoutingModule": () => (/* binding */ SignUpPharmaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _sign_up_pharma_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-pharma.page */ 54704);




const routes = [
    {
        path: '',
        component: _sign_up_pharma_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPharmaPage
    }
];
let SignUpPharmaPageRoutingModule = class SignUpPharmaPageRoutingModule {
};
SignUpPharmaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpPharmaPageRoutingModule);



/***/ }),

/***/ 86774:
/*!***************************************************************!*\
  !*** ./src/app/pages/sign-up-pharma/sign-up-pharma.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPharmaPageModule": () => (/* binding */ SignUpPharmaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _sign_up_pharma_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-pharma-routing.module */ 52752);
/* harmony import */ var _sign_up_pharma_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-pharma.page */ 54704);







let SignUpPharmaPageModule = class SignUpPharmaPageModule {
};
SignUpPharmaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sign_up_pharma_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPharmaPageRoutingModule
        ],
        declarations: [_sign_up_pharma_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPharmaPage]
    })
], SignUpPharmaPageModule);



/***/ }),

/***/ 54704:
/*!*************************************************************!*\
  !*** ./src/app/pages/sign-up-pharma/sign-up-pharma.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPharmaPage": () => (/* binding */ SignUpPharmaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sign_up_pharma_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sign-up-pharma.page.html */ 2350);
/* harmony import */ var _sign_up_pharma_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-pharma.page.scss */ 83977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);



/* eslint-disable @typescript-eslint/dot-notation */




let SignUpPharmaPage = class SignUpPharmaPage {
    constructor(appService, loadingCtrl) {
        this.appService = appService;
        this.loadingCtrl = loadingCtrl;
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();
    }
    ngOnInit() {
        this.getUser();
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if (currentUser) {
                const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(this.db, 'Users', currentUser.uid);
                const snapDoc = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(docRef);
                this.currentUser = snapDoc.data();
            }
        });
    }
    chooseImage() {
        const imageInput = document.getElementById('imageInput');
        imageInput.click();
        console.log(imageInput);
    }
    createPharma(data) {
        if (data.valid) {
            this.presentLoadingDefault('Création de la pharmacopée, veuillez patienter...');
            data.value.created = firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.now();
            const image = document.getElementById('imageInput');
            const currentUser = JSON.parse(localStorage.getItem('user'));
            this.appService.createPharma(currentUser.uid, data.value, image['files'][0]);
            data.reset();
            this.loading.dismiss();
            this.appService.presentToast('<b>Pharmacopée ajoutée avec succèss...</b>', 'light');
        }
        else {
            this.appService.presentToast('<b>Veuillez renseigner tous les champs...</b>', 'danger');
        }
    }
    presentLoadingDefault(infos) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: infos,
            });
            yield this.loading.present();
        });
    }
};
SignUpPharmaPage.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__.RemedeServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
SignUpPharmaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sign-up-pharma',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sign_up_pharma_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sign_up_pharma_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignUpPharmaPage);



/***/ }),

/***/ 83977:
/*!***************************************************************!*\
  !*** ./src/app/pages/sign-up-pharma/sign-up-pharma.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-content .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtcGhhcm1hLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQUoiLCJmaWxlIjoic2lnbi11cC1waGFybWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sign-up-pharma_sign-up-pharma_module_ts.js.map