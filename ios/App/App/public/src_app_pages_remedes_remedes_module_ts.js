"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_remedes_remedes_module_ts"],{

/***/ 7797:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/remedes/remedes.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\r\n  <ion-header class=\"ion-no-border bg_trans\">\r\n    <ion-toolbar color=\"cgreen\" class=\"bg_transp\" lines=\"none\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Ajout de Remèdes</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <form #data=\"ngForm\" (ngSubmit)=\"addRemede(data)\" enctype=\"multipart/form-data\">\r\n\r\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\r\n      <ion-label position=\"floating\">Choississez la categorie</ion-label>\r\n      <ion-select (ionChange)=\"cimChanged(data)\" name=\"cim\" ngModel required>\r\n        <ion-select-option *ngFor=\"let cim of cimList\" value=\"{{ cim[0] }}@{{ cim[1].title}}\">{{ cim[1]?.title }}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\" *ngIf=\"cimSelected\">\r\n      <ion-text><strong>Vous avez choisi la categorie : </strong>\r\n        <p>{{ cimSelected }}</p>\r\n      </ion-text>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\r\n      <ion-label position=\"floating\">Choississez la maladie</ion-label>\r\n      <ion-select id=\"child\" (ionChange)=\"childChanged(data)\" name=\"child\" ngModel required>\r\n        <ion-select-option *ngFor=\"let child of children\" value=\"{{ child[0] }}@{{ child[1].title}}\">{{ child[1]?.title }}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\" *ngIf=\"illnessSelected\">\r\n      <ion-text><strong>Vous avez choisi la maladie : </strong>\r\n        <p>{{ illnessSelected }}</p>\r\n      </ion-text>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\r\n      <ion-label position=\"floating\">Nom</ion-label>\r\n      <ion-input type=\"text\" name=\"nom\" placeholder=\"Nom du médicament...\" maxlength=\"24\" ngModel required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\r\n      <ion-label position=\"floating\">Description</ion-label>\r\n      <ion-input type=\"text\" name=\"description\" placeholder=\"Mode d'emploi du medicament\" ngModel required></ion-input>\r\n    </ion-item>\r\n\r\n    <input id=\"imageInput\" class=\"ion-hide\" type=\"file\" accept=\"image/png, image/jpeg\" required>\r\n    <ion-button id=\"imageBtn\" class=\"ion-margin\" expand=\"block\" color=\"cgreen\">\r\n      <ion-icon name=\"camera\" class=\"ion-margin\"></ion-icon>\r\n      Image\r\n    </ion-button>\r\n    <input class=\"ion-hide\" id=\"audioInput\" type=\"file\" accept=\"audio/*\" required>\r\n    <ion-button id=\"audioBtn\" class=\"ion-margin\" expand=\"block\" color=\"cgreen\">\r\n      <ion-icon name=\"musical-notes-outline\" class=\"ion-margin\"></ion-icon>\r\n      Audio\r\n    </ion-button>\r\n    <ion-button class=\"ion-margin\" color=\"cgreen\" expand=\"block\" type=\"submit\">Publier</ion-button>\r\n    <ion-button class=\"ion-margin\" color=\"danger\" expand=\"block\" type=\"reset\">Annuler</ion-button>\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 23309:
/*!*********************************************************!*\
  !*** ./src/app/pages/remedes/remedes-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemedesPageRoutingModule": () => (/* binding */ RemedesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _remedes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remedes.page */ 53886);




const routes = [
    {
        path: '',
        component: _remedes_page__WEBPACK_IMPORTED_MODULE_0__.RemedesPage
    }
];
let RemedesPageRoutingModule = class RemedesPageRoutingModule {
};
RemedesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RemedesPageRoutingModule);



/***/ }),

/***/ 85121:
/*!*************************************************!*\
  !*** ./src/app/pages/remedes/remedes.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemedesPageModule": () => (/* binding */ RemedesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _remedes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remedes-routing.module */ 23309);
/* harmony import */ var _remedes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remedes.page */ 53886);







let RemedesPageModule = class RemedesPageModule {
};
RemedesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _remedes_routing_module__WEBPACK_IMPORTED_MODULE_0__.RemedesPageRoutingModule
        ],
        declarations: [_remedes_page__WEBPACK_IMPORTED_MODULE_1__.RemedesPage]
    })
], RemedesPageModule);



/***/ }),

/***/ 53886:
/*!***********************************************!*\
  !*** ./src/app/pages/remedes/remedes.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemedesPage": () => (/* binding */ RemedesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_remedes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./remedes.page.html */ 7797);
/* harmony import */ var _remedes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remedes.page.scss */ 29017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ 21286);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ 85645);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);



/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/dot-notation */






let RemedesPage = class RemedesPage {
    constructor(loadingCtrl, appService) {
        this.loadingCtrl = loadingCtrl;
        this.appService = appService;
        this.cimList = [];
        this.children = [];
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)();
    }
    ngOnInit() {
        this.presentLoadingDefault('Veuillez patienter...');
        this.getCim();
        const imageInput = document.getElementById('imageInput');
        const imageBtn = document.getElementById('imageBtn');
        imageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            imageInput.click();
        });
        const audioInput = document.getElementById('audioInput');
        const audioBtn = document.getElementById('audioBtn');
        audioBtn.addEventListener('click', (e) => {
            e.preventDefault();
            audioInput.click();
        });
    }
    getCim() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.db, 'CIM'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('chapitre'));
            const querySnapshot = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);
            querySnapshot.forEach((data) => {
                this.cimList.push([data.id, data.data()]);
            });
            this.loading.dismiss();
        });
    }
    cimChanged(data) {
        const convert = data.value.cim.split('@');
        this.cimSelected = convert[1];
        const child = document.getElementById('child');
        child.setAttribute('value', '');
        this.presentLoadingDefault('Veuillez patienter...');
        this.getChildren(convert[0]);
    }
    childChanged(data) {
        const convert = data.value.child.split('@');
        this.illnessSelected = convert[1];
    }
    getChildren(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.children = [];
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.db, 'CIM/' + uid + '/Children'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('chapitre'));
            const querySnapshot = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(q);
            yield querySnapshot.forEach((document) => {
                this.children.push([document.id, document.data()]);
            });
            this.loading.dismiss();
        });
    }
    addRemede(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (data.valid) {
                this.presentLoadingDefault('Ajout du remède en cours, veuillez patienter...');
                const cim = data.value.cim.split('@')[0];
                const child = data.value.child.split('@')[0];
                const imageInput = document.getElementById('imageInput');
                const audioInput = document.getElementById('audioInput');
                const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `CIM/${cim}/Children/${child}/Remedes`), {
                    pharmacopee: (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)().currentUser.uid,
                    cim: cim,
                    children: child,
                    nom: data.value.nom,
                    description: data.value.description,
                    state: 'activated',
                    likes: [],
                    dislikes: [],
                    created: firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.now()
                });
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `Pharmacopees/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)().currentUser.uid}/Remedes/${docRef.id}`), {
                    cim: cim,
                    children: child,
                    created: firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.Timestamp.now()
                });
                const imagePath = `Pharmacopees/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)().currentUser.uid}/Files/${imageInput['files'][0].name}`;
                const newImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(), imagePath);
                const imageSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(newImageRef, imageInput['files'][0]).then((state) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    const publicImageUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(newImageRef);
                    yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `/CIM/${cim}/Children/${child}/Remedes/${docRef.id}`), {
                        image: publicImageUrl
                    }, { merge: true });
                }));
                const audioPath = `Pharmacopees/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)().currentUser.uid}/Files/${audioInput['files'][0].name}`;
                const newAudioRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(), audioPath);
                const audioSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(newAudioRef, audioInput['files'][0]).then((state) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    const publicAudioUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(newAudioRef);
                    yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `CIM/${cim}/Children/${child}/Remedes/${docRef.id}`), {
                        audio: publicAudioUrl
                    }, { merge: true });
                }));
                data.reset();
                this.loading.dismiss();
                this.appService.presentToast('Remèdes ajouté avec succèss', 'light');
            }
            else {
                this.appService.presentToast('Veuillez renseigner correctement tous champs', 'danger');
            }
        });
    }
    presentLoadingDefault(infos) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: infos,
            });
            yield this.loading.present();
        });
    }
};
RemedesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_5__.RemedeServiceService }
];
RemedesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-remedes',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_remedes_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_remedes_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RemedesPage);



/***/ }),

/***/ 29017:
/*!*************************************************!*\
  !*** ./src/app/pages/remedes/remedes.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1lZGVzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_remedes_remedes_module_ts.js.map