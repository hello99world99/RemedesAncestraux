"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sign-up_sign-up_module_ts"],{

/***/ 78194:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/sign-up/sign-up.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar class='bg_transp' lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-card class=\"bg_transp\">\r\n    <ion-card-content class=\"bg_transp\">\r\n\r\n      <form class=\"ion-margin\" #data=\"ngForm\" (ngSubmit)=\"signInWithPhone(data)\" *ngIf=\"!confirmationResult\">\r\n        <ion-item class=\"bg_transp ion-no-padding\" lines=\"none\">\r\n          <ion-label position=\"floating\" color=\"warning\" autofocus>Prénom</ion-label>\r\n          <ion-input type=\"text\" name=\"firstName\" placeholder=\"Ex: John\" ngModel required></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"bg_transp ion-no-padding\" lines=\"none\">\r\n          <ion-label position=\"floating\" color=\"warning\">Nom</ion-label>\r\n          <ion-input type=\"text\" name=\"lastName\" placeholder=\"Ex: Doe\" ngModel required></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"bg_transp\" lines=\"none\">\r\n          <ion-label position=\"floating\" size=\"large\">Numéro de téléphone</ion-label>\r\n          <ion-input type=\"text\" name=\"phone\" ngModel required></ion-input>\r\n        </ion-item>\r\n        <ion-button color=\"cgreen\" type=\"submit\" expand=\"block\">S'inscrire</ion-button>\r\n        <div id='sign-in-button'></div>\r\n      </form>\r\n\r\n      <form #code=\"ngForm\" (ngSubmit)=\"checkConfirmationCode(code)\" *ngIf=\"confirmationResult\">\r\n        <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\r\n          <ion-label position=\"floating\">Code de verification</ion-label>\r\n          <ion-input type=\"text\" name=\"code\" placeholder=\"Code de verification\" ngModel autofocus></ion-input>\r\n        </ion-item>\r\n        <ion-button type=\"submit\" color=\"cgreen\" expand=\"block\" max=\"6\">Verifier</ion-button>\r\n      </form>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ 50637:
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageRoutingModule": () => (/* binding */ SignUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page */ 29568);




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ 57460:
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageModule": () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 50637);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 29568);







let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage]
    })
], SignUpPageModule);



/***/ }),

/***/ 29568:
/*!***********************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sign-up.page.html */ 78194);
/* harmony import */ var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page.scss */ 78865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 21286);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);
/* harmony import */ var src_environments_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/models */ 46431);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);











let SignUpPage = class SignUpPage {
    constructor(appService, toastCtrl, router) {
        this.appService = appService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
        this.user = new src_environments_models__WEBPACK_IMPORTED_MODULE_5__.User();
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();
    }
    ngOnInit() {
    }
    signInWithPhone(data) {
        this.auth.languageCode = 'fr';
        console.log(data.value);
        this.recaptchaVerifier = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.RecaptchaVerifier('sign-in-button', {
            size: 'invisible',
            callback: (response) => {
                console.log('Response : ', response);
                this.user.displayName = data.value.firstName + ' ' + data.value.lastName;
                this.user.userName = data.value.phone;
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            },
            'expired-callback': (error) => {
                // Response expired. Ask user to solve reCAPTCHA again.
                console.log('Expire error : ', error);
            }
        }, this.auth);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPhoneNumber)(this.auth, data.value.phone, this.recaptchaVerifier)
            .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            this.confirmationResult = confirmationResult;
            console.log('confirmation result : ', this.confirmationResult);
        }).catch((error) => {
            // Error; SMS not sent
            console.log('SMS not sent : ', error);
        });
    }
    checkConfirmationCode(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.confirmationResult.confirm(data.value.code).then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                // User signed in successfully.
                const user = result.user;
                this.presentToast();
                this.setCurrentUser(user);
                const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(this.db, `${user.uid}`);
                const docSnap = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);
                if (docSnap.exists) {
                    console.log('Bienvenue');
                }
                else {
                    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(this.db, 'Users', user.uid), {
                        displayName: this.user.displayName,
                        userName: this.user.userName,
                        photoURL: this.user.photoURL,
                        state: this.user.state,
                        created: firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.Timestamp.now()
                    }, { merge: true });
                }
                this.router.navigateByUrl('/');
            })).catch((error) => {
                // User couldn't sign in (bad verification code?)
                console.log('Error : ', error);
            });
        });
    }
    setCurrentUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `Bienvenu ${this.auth.currentUser.displayName}`,
                position: 'top',
                color: 'light',
                duration: 3130
            });
            yield toast.present();
            const { role } = yield toast.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
SignUpPage.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__.RemedeServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-sign-up',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignUpPage);



/***/ }),

/***/ 78865:
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-card ion-card-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFSIiwiZmlsZSI6InNpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sign-up_sign-up_module_ts.js.map