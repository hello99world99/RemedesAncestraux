"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_add-cim_add-cim_module_ts"],{

/***/ 16346:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/add-cim/add-cim.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"cgreen\" class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-text>\r\n      <ion-label>\r\n        Ajouter un CIM (Classement International des Maladies)\r\n      </ion-label>\r\n    </ion-text>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"bg_transp ion-padding\">\r\n    <form #data=\"ngForm\" (ngSubmit)=\"addCIM(data)\">\r\n      <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\r\n        <ion-label position=\"floating\">Nom du CIM</ion-label>\r\n        <ion-input name=\"title\" maxlength=\"57\" ngModel required></ion-input>\r\n      </ion-item>\r\n      <input id=\"inputImage\" class=\"ion-hide\" type=\"file\" accept=\"image/png, image/jpeg\" required />\r\n      <ion-button (click)=\"chooseImage()\" color=\"cgreen\" expand=\"block\">\r\n        <ion-icon name=\"camera\"></ion-icon>\r\n        <span class=\"ion-margin\">photo</span>\r\n      </ion-button>\r\n      <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\r\n      <input id=\"inputAudio\" class=\"ion-hide\" type=\"file\" accept=\"audio/*\" required />\r\n      <ion-button (click)=\"chooseAudio()\" color=\"cgreen\" expand=\"block\">\r\n        <ion-icon name=\"musical-notes\"></ion-icon>\r\n        <span class=\"ion-margin\">audio</span>\r\n      </ion-button>\r\n      <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\r\n      <ion-button color=\"cgreen\" expand=\"block\" type=\"submit\">\r\n        <ion-icon name=\"save\"></ion-icon>\r\n        <span class=\"ion-margin\">enregistrer</span></ion-button>\r\n      <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\r\n      <ion-button color=\"danger\" expand=\"block\" type=\"reset\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n        <span class=\"ion-margin\">annuler</span>\r\n      </ion-button>\r\n    </form>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 65359:
/*!*********************************************************!*\
  !*** ./src/app/pages/add-cim/add-cim-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCimPageRoutingModule": () => (/* binding */ AddCimPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_cim_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-cim.page */ 32250);




const routes = [
    {
        path: '',
        component: _add_cim_page__WEBPACK_IMPORTED_MODULE_0__.AddCimPage
    }
];
let AddCimPageRoutingModule = class AddCimPageRoutingModule {
};
AddCimPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddCimPageRoutingModule);



/***/ }),

/***/ 13436:
/*!*************************************************!*\
  !*** ./src/app/pages/add-cim/add-cim.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCimPageModule": () => (/* binding */ AddCimPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _add_cim_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-cim-routing.module */ 65359);
/* harmony import */ var _add_cim_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-cim.page */ 32250);







let AddCimPageModule = class AddCimPageModule {
};
AddCimPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_cim_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddCimPageRoutingModule
        ],
        declarations: [_add_cim_page__WEBPACK_IMPORTED_MODULE_1__.AddCimPage]
    })
], AddCimPageModule);



/***/ }),

/***/ 32250:
/*!***********************************************!*\
  !*** ./src/app/pages/add-cim/add-cim.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCimPage": () => (/* binding */ AddCimPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_cim_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-cim.page.html */ 16346);
/* harmony import */ var _add_cim_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-cim.page.scss */ 2875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ 85645);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);



/* eslint-disable @typescript-eslint/dot-notation */




let AddCimPage = class AddCimPage {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
    }
    chooseImage() {
        const inputImage = document.getElementById('inputImage');
        inputImage.click();
    }
    chooseAudio() {
        const inputAudio = document.getElementById('inputAudio');
        inputAudio.click();
    }
    addCIM(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const inputImage = document.getElementById('inputImage');
            const inputAudio = document.getElementById('inputAudio');
            const image = inputImage['files'][0];
            const audio = inputAudio['files'][0];
            if (data.valid && image && audio) {
                this.appService.presentLoadingDefault('Ajout du CIM, veuillez patienter...');
                const audioPath = `Files/audio/cim/${audio.name}`;
                const newAudioRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(), audioPath);
                const audioSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytesResumable)(newAudioRef, audio);
                const publicAudioUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(newAudioRef);
                const imagePath = `Files/images/cim/${image.name}`;
                const newImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(), imagePath);
                const imageSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytesResumable)(newImageRef, image);
                const publicImageUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(newImageRef);
                const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), 'CIM'), {
                    chapitre: 99,
                    title: data.value.title,
                    image: publicImageUrl,
                    audio: publicAudioUrl,
                    state: 'activated'
                });
                data.reset();
                this.appService.dismissLoading();
                this.appService.presentToast('CIM ajouté avec succèss', 'light');
            }
            else {
                this.appService.presentToast('Veuillez renseigner correctement tous les champs', 'danger');
            }
        });
    }
};
AddCimPage.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__.RemedeServiceService }
];
AddCimPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-cim',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_cim_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_cim_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddCimPage);



/***/ }),

/***/ 2875:
/*!*************************************************!*\
  !*** ./src/app/pages/add-cim/add-cim.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2ltLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_add-cim_add-cim_module_ts.js.map