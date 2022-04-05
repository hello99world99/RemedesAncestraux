"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_messages_messages_module_ts"],{

/***/ 13543:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/messages/messages.page.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"cgreen\" class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"light\" routerLink=\"/\">\r\n        <ion-icon name=\"caret-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">Messages</ion-title>\r\n  </ion-toolbar>\r\n  <ion-item color=\"cgreen\" lines=\"none\">\r\n    <ion-searchbar color=\"light\" showCancelButton=\"focus\" cancelButtonText=\"Annuler\" placeholder=\"Rechercher...\"\r\n      [(ngModel)]=\"searchMessage\" animated focus></ion-searchbar>\r\n  </ion-item>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list class=\"ion-no-padding\" *ngFor=\"let user of users\">\r\n    <ion-item color=\"light\" (click)=\"writeMessage(user?.id)\">\r\n      <ion-avatar class=\"ion-margin\">\r\n        <img [src]=\"user?.get('image')\" />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <b>{{ user?.get('userName') }}</b>\r\n        <p>{{ user?.get('displayName') }}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list *ngIf=\"skeleton\">\r\n    <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9]\">\r\n      <ion-thumbnail slot=\"start\" class=\"ion-margin\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n        </h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"cgreen\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ 46962:
/*!***********************************************************!*\
  !*** ./src/app/pages/messages/messages-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageRoutingModule": () => (/* binding */ MessagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.page */ 25668);




const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_0__.MessagesPage
    }
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MessagesPageRoutingModule);



/***/ }),

/***/ 36586:
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPageModule": () => (/* binding */ MessagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages-routing.module */ 46962);
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page */ 25668);







let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_0__.MessagesPageRoutingModule
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_1__.MessagesPage]
    })
], MessagesPageModule);



/***/ }),

/***/ 25668:
/*!*************************************************!*\
  !*** ./src/app/pages/messages/messages.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesPage": () => (/* binding */ MessagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_messages_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./messages.page.html */ 13543);
/* harmony import */ var _messages_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.page.scss */ 44452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);



/* eslint-disable max-len */



let MessagesPage = class MessagesPage {
    constructor(appService, router) {
        this.appService = appService;
        this.router = router;
        this.users = [];
        this.skeleton = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getUsers();
        });
    }
    getUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.users = [];
            const results = yield this.appService.getMessages();
            results.forEach((data) => {
                this.users.push(data);
            });
            this.skeleton = false;
        });
    }
    writeMessage(uid) {
        this.router.navigate(['write-message', {
                to: uid
            }]);
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.ngOnInit();
            yield event.target.complete();
        });
    }
};
MessagesPage.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__.RemedeServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
MessagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-messages',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_messages_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_messages_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MessagesPage);



/***/ }),

/***/ 44452:
/*!***************************************************!*\
  !*** ./src/app/pages/messages/messages.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_messages_messages_module_ts.js.map