"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_write-message_write-message_module_ts"],{

/***/ 51748:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/write-message/write-message.page.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"cgreen\"class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"light\" defaultHref=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar class=\"ion-margin\" slot=\"start\">\r\n      <img [src]=\"toUser?.get('photoURL')\" />\r\n    </ion-avatar>\r\n    <ion-title slot=\"start\" color=\"light\">{{ toUser?.get('displayName') }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-textarea type=\"text\" maxlength=\"255\" [(ngModel)]=\"message\" placeholder=\"Message\" required></ion-textarea>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon color=\"cgreen\" name=\"camera\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"sendMessage()\">\r\n        <ion-icon color=\"cgreen\" name=\"send\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 78787:
/*!*********************************************************************!*\
  !*** ./src/app/pages/write-message/write-message-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WriteMessagePageRoutingModule": () => (/* binding */ WriteMessagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _write_message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./write-message.page */ 95302);




const routes = [
    {
        path: '',
        component: _write_message_page__WEBPACK_IMPORTED_MODULE_0__.WriteMessagePage
    }
];
let WriteMessagePageRoutingModule = class WriteMessagePageRoutingModule {
};
WriteMessagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WriteMessagePageRoutingModule);



/***/ }),

/***/ 65670:
/*!*************************************************************!*\
  !*** ./src/app/pages/write-message/write-message.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WriteMessagePageModule": () => (/* binding */ WriteMessagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _write_message_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./write-message-routing.module */ 78787);
/* harmony import */ var _write_message_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write-message.page */ 95302);







let WriteMessagePageModule = class WriteMessagePageModule {
};
WriteMessagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _write_message_routing_module__WEBPACK_IMPORTED_MODULE_0__.WriteMessagePageRoutingModule
        ],
        declarations: [_write_message_page__WEBPACK_IMPORTED_MODULE_1__.WriteMessagePage]
    })
], WriteMessagePageModule);



/***/ }),

/***/ 95302:
/*!***********************************************************!*\
  !*** ./src/app/pages/write-message/write-message.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WriteMessagePage": () => (/* binding */ WriteMessagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_write_message_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./write-message.page.html */ 51748);
/* harmony import */ var _write_message_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write-message.page.scss */ 56934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/messaging */ 4464);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);



/* eslint-disable max-len */




let WriteMessagePage = class WriteMessagePage {
    constructor(appService, activeRoute) {
        this.appService = appService;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.to = this.activeRoute.snapshot.paramMap.get('to');
            this.toUser = yield this.appService.getUser(this.to);
            this.initMessage();
        });
    }
    sendMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.message !== undefined) {
                console.log(this.message);
                this.message = undefined;
            }
            else {
                this.appService.presentToast('Le message est vide', 'danger');
            }
        });
    }
    initMessage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const messaging = (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_2__.getMessaging)();
            (0,firebase_messaging__WEBPACK_IMPORTED_MODULE_2__.getToken)(messaging, { vapidKey: 'AAAAESIL60Y:APA91bF4jJQ5MhsyJiOmw7QIoF69ACc7o9rmH29F3JDLkkJznSpsCbmc9j3mDM4M-N_Bd7PzLcKV8BENMluW77kZ81vRBy5GIMHmm5AXVkloBzTK78ap1bkgOyh5-fY5fq-Ebh5bbSsT' })
                .then((currentToken) => {
                if (currentToken) {
                    // Send the token to your server and update the UI if necessary
                    // ...
                    console.log('Token : ', currentToken);
                }
                else {
                    // Show permission request UI
                    console.log('My custom error message : No registration token available. Request permission to generate one.');
                    // ...
                }
            }).catch((err) => {
                console.log('My Error message : An error occurred while retrieving token. ', err);
                // ...
            });
        });
    }
};
WriteMessagePage.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__.RemedeServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
WriteMessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-write-message',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_write_message_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_write_message_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WriteMessagePage);



/***/ }),

/***/ 56934:
/*!*************************************************************!*\
  !*** ./src/app/pages/write-message/write-message.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3cml0ZS1tZXNzYWdlLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_write-message_write-message_module_ts.js.map