"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_children_children_module_ts"],{

/***/ 62002:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/children/children.page.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header style=\"background-image: url({{document[1].image}}); background-size: cover;\" class=\"ion-no-border bg_trans\">\r\n\r\n  <ion-toolbar class=\"bg_transp\" lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\r\n  <ion-item class=\"ion-text-center bg_transp bg_trans ion-no-padding\" lines=\"none\">\r\n    <ion-text class=\"text-bold bg_transp\">{{ document[1].title }}</ion-text>\r\n  </ion-item>\r\n  <ion-card class=\"ion-text-center bg_transp bg_trans ion-no-padding\">\r\n    <audio controls src=\"{{ document[1]?.audio }}\"></audio>\r\n  </ion-card>\r\n\r\n</ion-header>\r\n\r\n<ion-content color=\"#333\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"ion-margin\" size=\"11\" *ngFor=\"let child of children\">\r\n\r\n        <ion-card button=\"true\" color=\"lgreen\" class=\"ion-no-padding\" (click)=\"showDetails(child[0])\">\r\n          <ion-card-content class=\"ion-no-margin\">\r\n            <img class=\"children-image\" src=\"{{ child[1].image }}\" />\r\n          </ion-card-content>\r\n          <ion-card-title class=\"ion-text-center\" size=\"small\">{{ child[1].title }}</ion-card-title>\r\n          <ion-card-subtitle class=\"ion-text-center ion-margin\">{{ child[0] | count: remedesCount }} remèdes proposés</ion-card-subtitle>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 15381:
/*!***********************************************************!*\
  !*** ./src/app/pages/children/children-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenPageRoutingModule": () => (/* binding */ ChildrenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _children_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./children.page */ 97927);




const routes = [
    {
        path: '',
        component: _children_page__WEBPACK_IMPORTED_MODULE_0__.ChildrenPage
    }
];
let ChildrenPageRoutingModule = class ChildrenPageRoutingModule {
};
ChildrenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChildrenPageRoutingModule);



/***/ }),

/***/ 78251:
/*!***************************************************!*\
  !*** ./src/app/pages/children/children.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenPageModule": () => (/* binding */ ChildrenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _children_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./children-routing.module */ 15381);
/* harmony import */ var _children_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./children.page */ 97927);
/* harmony import */ var src_app_pipes_count_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/count.pipe */ 26539);








let ChildrenPageModule = class ChildrenPageModule {
};
ChildrenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _children_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChildrenPageRoutingModule
        ],
        declarations: [_children_page__WEBPACK_IMPORTED_MODULE_1__.ChildrenPage, src_app_pipes_count_pipe__WEBPACK_IMPORTED_MODULE_2__.CountPipe]
    })
], ChildrenPageModule);



/***/ }),

/***/ 97927:
/*!*************************************************!*\
  !*** ./src/app/pages/children/children.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildrenPage": () => (/* binding */ ChildrenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_children_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./children.page.html */ 62002);
/* harmony import */ var _children_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./children.page.scss */ 99816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);








let ChildrenPage = class ChildrenPage {
    constructor(appService, loadingCtrl, router) {
        this.appService = appService;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.children = [];
        this.remedesCount = [];
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();
        this.presentLoadingDefault();
        this.document = this.appService.getDocument();
        this.getChildren();
    }
    ngOnInit() {
    }
    getChildren() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.db, 'CIM/' + this.document[0] + '/Children'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)('state', '==', 'activated'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)('chapitre'));
            const querySnapshot = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);
            yield querySnapshot.forEach((document) => {
                this.children.push([document.id, document.data()]);
            });
            this.children.forEach((child) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                const r = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.db, 'CIM/' + this.document[0] + '/Children/' + child[0] + '/Remedes'));
                const remedeSnapshot = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(r);
                yield remedeSnapshot.forEach((document) => {
                    this.remedesCount.push();
                });
            }));
            console.log(this.remedesCount);
            this.loading.dismiss();
        });
    }
    showDetails(uid) {
        const path = 'CIM/' + this.document[0] + '/Children/' + uid;
        this.appService.setPath(path);
        this.router.navigateByUrl('/details');
    }
    presentLoadingDefault() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: '<span>Veuillez patienter...</span>',
            });
            yield this.loading.present();
        });
    }
};
ChildrenPage.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__.RemedeServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ChildrenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-children',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_children_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_children_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChildrenPage);



/***/ }),

/***/ 26539:
/*!*************************************!*\
  !*** ./src/app/pipes/count.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountPipe": () => (/* binding */ CountPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let CountPipe = class CountPipe {
    transform(value, list) {
        let count = 0;
        for (const element of list) {
            console.log('element : ', element);
            if (element === value) {
                count += 1;
            }
        }
        console.log('Counter : ', count);
        return count;
    }
};
CountPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'count'
    })
], CountPipe);



/***/ }),

/***/ 99816:
/*!***************************************************!*\
  !*** ./src/app/pages/children/children.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.bg_trans {\n  background-color: rgba(34, 139, 34, 0.5);\n}\n\n.children-image {\n  height: 222px;\n  width: 100%;\n  border-radius: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkcmVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDSSx3Q0FBQTtBQUNKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImNoaWxkcmVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJnX3RyYW5ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMTM5LCAzNCwgMC41KTtcclxufVxyXG5cclxuLmNoaWxkcmVuLWltYWdle1xyXG4gIGhlaWdodDogMjIycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTlweDtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_children_children_module_ts.js.map