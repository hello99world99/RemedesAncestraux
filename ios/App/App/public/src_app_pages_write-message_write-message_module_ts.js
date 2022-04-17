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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"cgreen\"class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"light\" defaultHref=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-avatar class=\"ion-margin\" slot=\"start\">\r\n      <img [src]=\"toUser?.get('photoURL')\" />\r\n    </ion-avatar>\r\n    <ion-title slot=\"start\" color=\"light\">{{ toUser?.get('displayName') }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list *ngFor=\"let mes of messages\">\r\n    <ion-card style=\"width: 90%;\" class=\"ion-padding ion-float-right\" *ngIf=\"mes?.get('from') === currentUser?.id\">\r\n      <ion-card-title>{{ mes?.get('message') }}</ion-card-title>\r\n      <ion-card-subtitle>\r\n        {{ mes?.get('created')?.toDate() | date }}\r\n      </ion-card-subtitle>\r\n    </ion-card>\r\n\r\n    <!-- Check if the message is text or image -->\r\n    <ion-card style=\"width: 90%;\" color=\"light\" class=\"ion-padding ion-float-left\" *ngIf=\"mes?.get('from') === toUser?.id\">\r\n      <ion-card-title *ngIf=\"mes?.get('type') === 'text'\">{{ mes?.get('message') }}</ion-card-title>\r\n      <img [src]=\"mes?.get('message')\" *ngIf=\"mes?.get('type') === 'img'\"/>\r\n      <ion-card-subtitle>\r\n        {{ mes?.get('created')?.toDate() | date }}\r\n      </ion-card-subtitle>\r\n    </ion-card>\r\n  </ion-list>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-list *ngIf=\"skeleton\">\r\n    <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9]\">\r\n      <ion-thumbnail slot=\"start\" class=\"ion-margin\">\r\n        <ion-skeleton-text animated></ion-skeleton-text>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h3>\r\n          <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\r\n        </h3>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-textarea type=\"text\" maxlength=\"255\" [(ngModel)]=\"message\" placeholder=\"Message\" required></ion-textarea>\r\n    <!-- Element is hidden by default -->\r\n    <ion-item class=\"ion-hide\">\r\n      <input type=\"file\" id=\"imagePicker\" accept=\"image/png, image/jpeg\" />\r\n    </ion-item>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button id=\"submitImage\">\r\n        <ion-icon color=\"cgreen\" name=\"camera\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button (click)=\"sendMessage()\">\r\n        <ion-icon color=\"cgreen\" name=\"send\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_write_message_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./write-message.page.html */ 51748);
/* harmony import */ var _write_message_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write-message.page.scss */ 56934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 21286);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ 85645);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);



/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable max-len */






let WriteMessagePage = class WriteMessagePage {
    constructor(appService, activeRoute) {
        this.appService = appService;
        this.activeRoute = activeRoute;
        this.messages = [];
        this.skeleton = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.to = this.activeRoute.snapshot.paramMap.get('to');
            this.toUser = yield this.appService.getUser(this.to);
            this.currentUser = yield this.appService.getUser((0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid);
            const imageInput = document.getElementById('imagePicker');
            const imageButtonElement = document.getElementById('submitImage');
            imageButtonElement.addEventListener('click', () => {
                imageInput.click();
            });
            imageInput.addEventListener('change', (e) => {
                this.sendImage(e.target['files'][0]);
            });
            yield this.getMessages();
        });
    }
    getMessages() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.messages = [];
            const messagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Messages/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid}/Users/${(_a = this.toUser) === null || _a === void 0 ? void 0 : _a.id}/Conversations`), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)('created'));
            const result = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(messagesRef);
            result.forEach((data) => {
                this.messages.push(data);
            });
            this.skeleton = false;
        });
    }
    sendMessage() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.message !== undefined) {
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Messages/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid}/Users/${(_a = this.toUser) === null || _a === void 0 ? void 0 : _a.id}/Conversations`), {
                    from: (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid,
                    to: (_b = this.toUser) === null || _b === void 0 ? void 0 : _b.id,
                    message: this.message,
                    state: 'activated',
                    type: 'text',
                    created: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()
                });
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Messages/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid}/Users/${(_c = this.toUser) === null || _c === void 0 ? void 0 : _c.id}`), (_d = this.toUser) === null || _d === void 0 ? void 0 : _d.data(), { merge: true });
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Messages/${(_e = this.toUser) === null || _e === void 0 ? void 0 : _e.id}/Users/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid}/Conversations`), {
                    from: (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid,
                    to: (_f = this.toUser) === null || _f === void 0 ? void 0 : _f.id,
                    message: this.message,
                    state: 'activated',
                    type: 'text',
                    created: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()
                });
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Messages/${(_g = this.toUser) === null || _g === void 0 ? void 0 : _g.id}/Users/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid}`), (_h = this.currentUser) === null || _h === void 0 ? void 0 : _h.data(), { merge: true });
                this.message = yield undefined;
            }
            else {
                yield this.appService.presentToast('Le message est vide', 'danger');
            }
            yield this.getMessages();
        });
    }
    sendImage(image) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.appService.presentLoadingDefault('Chargement de l\'image, veuillez patienter...');
            const filePath = `Files/images/messages/${image.name}`;
            const newImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(), filePath);
            const fileSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(newImageRef, image);
            const publicImageUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(newImageRef);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Messages/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid}/Users/${(_a = this.toUser) === null || _a === void 0 ? void 0 : _a.id}/Conversations`), {
                from: (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid,
                to: (_b = this.toUser) === null || _b === void 0 ? void 0 : _b.id,
                message: publicImageUrl,
                state: 'activated',
                type: 'img',
                created: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()
            });
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Messages/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid}/Users/${(_c = this.toUser) === null || _c === void 0 ? void 0 : _c.id}`), (_d = this.toUser) === null || _d === void 0 ? void 0 : _d.data(), { merge: true });
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Messages/${(_e = this.toUser) === null || _e === void 0 ? void 0 : _e.id}/Users/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid}/Conversations`), {
                from: (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid,
                to: (_f = this.toUser) === null || _f === void 0 ? void 0 : _f.id,
                message: publicImageUrl,
                state: 'activated',
                type: 'img',
                created: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.serverTimestamp)()
            });
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Messages/${(_g = this.toUser) === null || _g === void 0 ? void 0 : _g.id}/Users/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid}`), (_h = this.currentUser) === null || _h === void 0 ? void 0 : _h.data(), { merge: true });
            yield this.getMessages();
            this.appService.dismissLoading();
        });
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.ngOnInit();
            yield event.target.complete();
        });
    }
};
WriteMessagePage.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_5__.RemedeServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
WriteMessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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