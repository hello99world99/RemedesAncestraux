"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 43906:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/profile/profile.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"cgreen\" class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"light\" defaultHref=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form #data=\"ngForm\" (ngSubmit)=\"updateUser(data)\">\r\n    <ion-card class=\"ion-padding bg_transp\">\r\n      <ion-card-content>\r\n        <ion-card class=\"circle ion-margin-top ion-margin-bottom bg_transp\" lines=\"none\">\r\n            <img id=\"profileImage\" [src]=\"currentUser?.get('photoURL')\" />\r\n        </ion-card>\r\n        <ion-button id=\"submitImage\" expand=\"block\" color=\"cgreen\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n          modifier\r\n        </ion-button>\r\n\r\n        <!-- Element is hidden by default -->\r\n        <ion-item class=\"ion-hide\">\r\n          <input type=\"file\" id=\"imagePicker\" accept=\"image/png, image/jpeg\" />\r\n        </ion-item>\r\n          <ion-item class=\"ion-margin-top ion-margin-bottom bg_transp\" lines=\"none\">\r\n            <ion-label position=\"floating\">Nom complet</ion-label>\r\n            <ion-input name=\"displayName\" [value]=\"currentUser?.get('displayName')\" maxlength=\"19\" ngModel required></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"ion-margin-top ion-margin-bottom bg_transp\" lines=\"none\">\r\n            <ion-text>\r\n              <ion-label>Identifiant</ion-label>\r\n              <ion-card-subtitle>{{ currentUser?.get('userName') }}</ion-card-subtitle>\r\n            </ion-text>\r\n          </ion-item>\r\n          <ion-button type=\"submit\" expand=\"block\" color=\"cgreen\">\r\n            <ion-icon class=\"ion-margin\" name=\"save\"></ion-icon>\r\n            <span>mettre à jour</span>\r\n          </ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ 62212:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 67507);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 79668:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 62212);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 67507);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 67507:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 43906);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 74415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ 85645);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ 21286);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component */ 36104);



/* eslint-disable @typescript-eslint/dot-notation */






let ProfilePage = class ProfilePage {
    constructor(appService, app) {
        this.appService = appService;
        this.app = app;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
            const currentUser = JSON.parse(localStorage.getItem('user'));
            if (currentUser) {
                this.currentUser = yield this.appService.getUser(currentUser.uid);
            }
            const imageInput = document.getElementById('imagePicker');
            const imageButtonElement = document.getElementById('submitImage');
            imageButtonElement.addEventListener('click', () => {
                imageInput.click();
            });
            imageInput.addEventListener('change', (e) => {
                this.updateImage(e.target['files'][0]);
            });
            // this.appService.dismissLoading();
        });
    }
    updateImage(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.appService.presentLoadingDefault('Chargement de l\'image, veuillez patienter...');
            const filePath = `Files/images/profile/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)().currentUser.uid}/${image.name}`;
            const newImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(), filePath);
            const fileSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(newImageRef, image);
            const publicImageUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(newImageRef);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `Users/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)().currentUser.uid}`), {
                photoURL: publicImageUrl
            });
            this.app.ngOnInit();
            this.appService.dismissLoading();
            this.currentUser = yield this.appService.getUser(this.currentUser.id);
        });
    }
    ;
    updateUser(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (data.valid) {
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `Users/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)().currentUser.uid}`), {
                    displayName: data.value.displayName
                });
                this.app.ngOnInit();
                this.appService.presentToast('Mise en jour effectuée avec success', 'light');
            }
            else {
                this.appService.presentToast('Veuillez renseigner correctement tous les champs', 'danger');
            }
        });
    }
    ;
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__.RemedeServiceService },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 74415:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-cars ion-card-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUROIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIGlvbi1jYXJzIHtcclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map