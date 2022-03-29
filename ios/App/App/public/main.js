(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 66224:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\r\n    <ion-header class=\"ion-no-border\">\r\n      <ion-toolbar color=\"cgreen\">\r\n        <ion-text>\r\n          <ion-title class=\"ion-text-center ion-text-capitalize\" *ngIf=\"currentUser\">{{ currentUser?.displayName }}</ion-title>\r\n        </ion-text>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item class=\"clabel bg_transp\">\r\n          <ion-icon color=\"cgreen\" class=\"ion-margin\" name=\"notifications\" slot=\"start\"></ion-icon>\r\n          <ion-label color=\"success\">Notifications</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"clabel bg_transp\">\r\n          <ion-icon color=\"cgreen\" class=\"ion-margin\" name=\"chatbox\" slot=\"start\"></ion-icon>\r\n          <ion-label color=\"success\">Messages</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"clabel bg_transp\">\r\n          <ion-icon color=\"cgreen\" class=\"ion-margin\" name=\"bookmark\" slot=\"start\"></ion-icon>\r\n          <ion-label color=\"success\">Favoris</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"clabel bg_transp\" routerLink=\"/gerer\" (click)=\"gestion()\">\r\n          <ion-icon color=\"cgreen\" class=\"ion-margin\" name=\"construct\" slot=\"start\"></ion-icon>\r\n          <ion-label color=\"success\">Gestion</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"clabel bg_transp\" routerLink=\"/dashboard\" *ngIf=\"currentUser?.role==='Admin'\" (click)=\"closeMenu()\">\r\n          <ion-icon color=\"cgreen\" class=\"ion-margin\" name=\"people\" slot=\"start\"></ion-icon>\r\n          <ion-label color=\"success\">Dashboard</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"clabel bg_transp\" routerLink=\"/good-practices\" (click)=\"closeMenu()\">\r\n          <ion-icon color=\"cgreen\" class=\"ion-margin\" name=\"heart\" slot=\"start\"></ion-icon>\r\n          <ion-label color=\"success\">Les bonnes pratiques</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"clabel bg_transp\" routerLink=\"/about\" (click)=\"closeMenu()\">\r\n          <ion-icon color=\"cgreen\" class=\"ion-margin\" name=\"information-circle\" slot=\"start\"></ion-icon>\r\n          <ion-label color=\"success\">A propos</ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"clabel bg_transp\">\r\n          <ion-icon color=\"cgreen\" name=\"color-palette\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label color=\"success\">Theme sombre</ion-label>\r\n          <ion-toggle color=\"cgreen\" class=\"ion-padding\" id=\"themeToggle\"></ion-toggle>\r\n        </ion-item>\r\n        <ion-item class=\"clabel bg_transp\" *ngIf=\"currentUser\">\r\n          <ion-icon color=\"danger\" class=\"ion-margin\" name=\"power\" slot=\"start\"></ion-icon>\r\n          <ion-label color=\"danger\" expand=\"block\" (click)=\"signOut()\">Deconnecter</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 3810:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/edit-child/edit-child.component.html ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"cgreen\" class=\"bg_transp\" lines=\"none\">\n    <ion-text>\n      <ion-label>\n        Modifier la maladie : <b>{{ child?.get('title') }}</b>\n      </ion-label>\n    </ion-text>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"modalDismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n        <span>fermer</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"bg_transp ion-padding\">\n    <form #data=\"ngForm\" (ngSubmit)=\"editChild(data)\">\n      <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\n        <ion-label position=\"floating\">N° de chapitre</ion-label>\n        <ion-input name=\"title\" maxlength=\"57\" [value]=\"child?.get('chapitre')\" ngModel required></ion-input>\n      </ion-item>\n      <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\n        <ion-label position=\"floating\">Nom de la maladie</ion-label>\n        <ion-input name=\"title\" maxlength=\"57\" [value]=\"child?.get('title')\" ngModel required></ion-input>\n      </ion-item>\n      <ion-label>Description de la maladie</ion-label>\n      <ion-textarea name=\"description\" maxlength=\"57\" [value]=\"child?.get('description')\" ngModel required>\n      </ion-textarea>\n      <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\n      <ion-card>\n        <img [src]=\"child?.get('image')\" />\n      </ion-card>\n      <input id=\"inputImage\" class=\"ion-hide\" type=\"file\" accept=\"image/png, image/jpeg\" required />\n      <ion-button (click)=\"chooseImage()\" color=\"cgreen\" expand=\"block\">\n        <ion-icon name=\"camera\"></ion-icon>\n        <span class=\"ion-margin\">photo</span>\n      </ion-button>\n      <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\n      <audio controls [src]=\"child?.get('audio')\"></audio>\n      <input id=\"inputAudio\" class=\"ion-hide\" type=\"file\" accept=\"audio/*\" required />\n      <ion-button (click)=\"chooseAudio()\" color=\"cgreen\" expand=\"block\">\n        <ion-icon name=\"musical-notes\"></ion-icon>\n        <span class=\"ion-margin\">audio</span>\n      </ion-button>\n      <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\n      <ion-button color=\"cgreen\" expand=\"block\" type=\"submit\">\n        <ion-icon name=\"save\"></ion-icon>\n        <span class=\"ion-margin\">mettre à jour</span>\n      </ion-button>\n    </form>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 28460:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/edit-cim/edit-cim.component.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"cgreen\" class=\"bg_transp\" lines=\"none\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"modalDismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n        <span>annuler</span>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Modifier le CIM</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"bg_transp ion-padding\">\n    <form #data=\"ngForm\" (ngSubmit)=\"updateCIM(data)\">\n      <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\n        <ion-label position=\"floating\">N° du chapitre</ion-label>\n        <ion-input type=\"number\" name=\"chapitre\" maxlength=\"2\" value=\"{{ cim?.get('chapitre') }}\" ngModel required></ion-input>\n      </ion-item>\n      <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\n        <ion-label position=\"floating\">Nom du CIM</ion-label>\n        <ion-input name=\"title\" maxlength=\"57\" value=\"{{ cim?.get('title') }}\" ngModel required></ion-input>\n      </ion-item>\n      <ion-img src=\"{{ cim?.get('image') }}\" alt=\"image du CIM\" required></ion-img>\n      <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\n      <input id=\"inputImage\" class=\"ion-hide\" type=\"file\" accept=\"image/png, image/jpeg\" required />\n      <ion-button (click)=\"chooseImage()\" color=\"cgreen\" expand=\"block\">\n        <ion-icon name=\"camera\"></ion-icon>\n        <span class=\"ion-margin\">photo</span>\n      </ion-button>\n      <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\n      <audio controls src=\"{{ cim?.get('audio') }}\" required></audio>\n      <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\n      <input id=\"inputAudio\" class=\"ion-hide\" type=\"file\" accept=\"audio/*\" required />\n      <ion-button (click)=\"chooseAudio()\" color=\"cgreen\" expand=\"block\">\n        <ion-icon name=\"musical-notes\"></ion-icon>\n        <span class=\"ion-margin\">audio</span>\n      </ion-button>\n      <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\n      <ion-button color=\"cgreen\" expand=\"block\" type=\"submit\">\n        <ion-icon name=\"save\"></ion-icon>\n        <span class=\"ion-margin\">enregistrer</span>\n      </ion-button>\n      <ion-item class=\"bg_transp\" lines=\"none\"></ion-item>\n      <ion-button color=\"danger\" expand=\"block\" type=\"reset\">\n        <ion-icon name=\"close\"></ion-icon>\n        <span class=\"ion-margin\">annuler</span>\n      </ion-button>\n    </form>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 38521:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/edit-remedes/edit-remedes.component.html ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border bg_trans\">\n  <ion-toolbar color=\"cgreen\" class=\"bg_transp\" lines=\"none\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n        <span color=\"danger\" class=\"ion-margin\">fermer</span>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Modification du remèdes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #data=\"ngForm\" (ngSubmit)=\"editRemedy(data)\" enctype=\"multipart/form-data\">\n\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\n      <ion-label position=\"floating\">Choississez la categorie</ion-label>\n      <ion-select id=\"cim\" (ionChange)=\"cimChanged(data)\" name=\"cim\" ngModel required>\n        <ion-select-option *ngFor=\"let cim of cimList\" value=\"{{ cim[0] }}\">{{ cim[1]?.title }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\" *ngIf=\"cimSelected\">\n      <ion-card-subtitle><strong>Vous avez choisi la categorie : </strong>\n        <p>{{ cimSelected }}</p>\n      </ion-card-subtitle>\n    </ion-item>\n\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\n      <ion-label position=\"floating\">Choississez la maladie</ion-label>\n      <ion-select id=\"child\" (ionChange)=\"childChanged(data)\" name=\"children\" ngModel required>\n        <ion-select-option *ngFor=\"let child of children\" value=\"{{ child[0] }}\">{{ child[1]?.title }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\" *ngIf=\"illnessSelected\">\n      <ion-card-subtitle><strong>Vous avez choisi la maladie : </strong>\n        <p>{{ illnessSelected }}</p>\n      </ion-card-subtitle>\n    </ion-item>\n\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\n      <ion-label position=\"floating\">Nom</ion-label>\n      <ion-input type=\"text\" name=\"nom\" placeholder=\"Nom du médicament...\" maxlength=\"24\" [value]=\"remedy?.get('nom')\" ngModel required></ion-input>\n    </ion-item>\n\n    <ion-item class=\"bg_transp ion-margin\" lines=\"none\">\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-input type=\"text\" name=\"description\" placeholder=\"Mode d'emploi du medicament\" [value]=\"remedy?.get('description')\" ngModel maxlength=\"57\" required></ion-input>\n    </ion-item>\n\n    <img [src]=\"remedy?.get('image')\" [alt]=\"remedy?.get('nom')\" />\n\n    <input class=\"ion-hide\" id=\"audioInput\" type=\"file\" accept=\"audio/*\">\n    <ion-button id=\"imageBtn\" class=\"ion-margin\" expand=\"block\" color=\"cgreen\">\n      <ion-icon name=\"camera\" class=\"ion-margin\"></ion-icon>\n      Image\n    </ion-button>\n\n    <audio controls [src]=\"remedy?.get('audio')\"></audio>\n\n    <input id=\"imageInput\" class=\"ion-hide\" type=\"file\" accept=\"image/png, image/jpeg\">\n    <ion-button id=\"audioBtn\" class=\"ion-margin\" expand=\"block\" color=\"cgreen\">\n      <ion-icon name=\"musical-notes-outline\" class=\"ion-margin\"></ion-icon>\n      Audio\n    </ion-button>\n    <ion-button class=\"ion-margin\" color=\"cgreen\" expand=\"block\" type=\"submit\">mettre à jour</ion-button>\n\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ 94689:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/search/search.component.html ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"cgreen\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"modalDismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n        <span>fermer</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item color=\"cgreen\" lines=\"none\">\n    <ion-searchbar color=\"light\" showCancelButton=\"focus\" cancelButtonText=\"Annuler\" placeholder=\"Rechercher...\"\n      [(ngModel)]=\"searchText\" animated focus></ion-searchbar>\n  </ion-item>\n  <ion-button (click)=\"search(searchText)\" color=\"light\" expand=\"block\">\n    <ion-icon name=\"search\"></ion-icon>\n    <span>chercher</span>\n  </ion-button>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let result of results | filter:searchText\">\n      <ion-item>\n        <ion-avatar>\n          <img [src]=\"result?.image\" />\n        </ion-avatar>\n        <ion-card-subtitle class=\"ion-margin\">{{ result?.nom }}</ion-card-subtitle>\n      </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 68438:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cim_cim_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cim/cim.module */ 24374)).then(m => m.CimPageModule)
    },
    {
        path: 'gerer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 33644)).then(m => m.TabsPageModule)
    },
    {
        path: 'children',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_children_children_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/children/children.module */ 78251)).then(m => m.ChildrenPageModule)
    },
    {
        path: 'sign-in',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sign-in_sign-in_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sign-in/sign-in.module */ 88211)).then(m => m.SignInPageModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sign-up_sign-up_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sign-up/sign-up.module */ 57460)).then(m => m.SignUpPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 79668)).then(m => m.ProfilePageModule)
    },
    {
        path: 'sign-up-pharma',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sign-up-pharma_sign-up-pharma_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sign-up-pharma/sign-up-pharma.module */ 86774)).then(m => m.SignUpPharmaPageModule)
    },
    {
        path: 'details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pipes_include_pipe_ts-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_details_details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/details/details.module */ 50889)).then(m => m.DetailsPageModule)
    },
    {
        path: 'remedes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_remedes_remedes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/remedes/remedes.module */ 85121)).then(m => m.RemedesPageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 82047)).then(m => m.AboutPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 7945)).then(m => m.DashboardPageModule)
    },
    {
        path: 'remede-infos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pipes_include_pipe_ts-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_remede-infos_remede-infos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/remede-infos/remede-infos.module */ 67270)).then(m => m.RemedeInfosPageModule)
    },
    {
        path: 'good-practices',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_good-practices_good-practices_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/good-practices/good-practices.module */ 13519)).then(m => m.GoodPracticesPageModule)
    },
    {
        path: 'add-cim',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_add-cim_add-cim_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-cim/add-cim.module */ 13436)).then(m => m.AddCimPageModule)
    },
    {
        path: 'cim-content',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cim-content_cim-content_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cim-content/cim-content.module */ 93451)).then(m => m.CimContentPageModule)
    },
    {
        path: 'add-child',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_add-child_add-child_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/add-child/add-child.module */ 46501)).then(m => m.AddChildPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 36104:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 66224);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var _services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/remede-service.service */ 32132);



/* eslint-disable @typescript-eslint/dot-notation */





let AppComponent = class AppComponent {
    constructor(appService, menu, router) {
        this.appService = appService;
        this.menu = menu;
        this.router = router;
    }
    ngOnInit() {
        this.appService.initFirebaseAuth();
        this.getUser();
        const toggle = document.getElementById('themeToggle');
        toggle.addEventListener('ionChange', (event) => {
            document.body.classList.toggle('dark', event['detail'].checked);
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const currentUser = JSON.parse(localStorage.getItem('user'));
            console.log(currentUser);
            if (currentUser) {
                const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), '/Users/', currentUser.uid);
                const snapDoc = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(docRef);
                this.currentUser = snapDoc.data();
                console.log(this.currentUser);
            }
            else {
                console.log('No user found');
            }
        });
    }
    closeMenu() {
        this.menu.close();
    }
    signOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.appService.signOut();
        });
    }
    gestion() {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser) {
            this.router.navigateByUrl('/gerer');
        }
        else {
            this.router.navigateByUrl('/sign-in');
        }
        this.menu.close();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_remede_service_service__WEBPACK_IMPORTED_MODULE_3__.RemedeServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 92014:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 68438);
/* harmony import */ var _components_edit_cim_edit_cim_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/edit-cim/edit-cim.component */ 33664);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 36104);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/app */ 11576);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 41251);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ 75656);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ 44783);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/storage */ 9243);
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/functions */ 60639);
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/messaging */ 57420);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _components_edit_remedes_edit_remedes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-remedes/edit-remedes.component */ 6645);
/* harmony import */ var _components_edit_child_edit_child_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-child/edit-child.component */ 22329);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ 97404);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ 98996);





















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _components_edit_cim_edit_cim_component__WEBPACK_IMPORTED_MODULE_1__.EditCimComponent, _components_edit_remedes_edit_remedes_component__WEBPACK_IMPORTED_MODULE_4__.EditRemedesComponent, _components_edit_child_edit_child_component__WEBPACK_IMPORTED_MODULE_5__.EditChildComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__.SearchComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__.Ng2SearchPipeModule,
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_14__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_14__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase)),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__.getAuth)()),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.getFirestore)()),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_17__.getStorage)()),
            (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_18__.provideFunctions)(() => (0,_angular_fire_functions__WEBPACK_IMPORTED_MODULE_18__.getFunctions)()),
            (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_19__.provideMessaging)(() => (0,_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_19__.getMessaging)())],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 22329:
/*!***************************************************************!*\
  !*** ./src/app/components/edit-child/edit-child.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditChildComponent": () => (/* binding */ EditChildComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_child_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-child.component.html */ 3810);
/* harmony import */ var _edit_child_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-child.component.scss */ 11365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ 85645);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);



/* eslint-disable @typescript-eslint/dot-notation */






let EditChildComponent = class EditChildComponent {
    constructor(appService, modalController, router) {
        this.appService = appService;
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.child = yield this.appService.getChild(this.cim, this.uid);
        });
    }
    chooseImage() {
        const inputImage = document.getElementById('inputImage');
        inputImage.click();
        inputImage.addEventListener('change', (e) => {
            this.updateImage(e.target['files'][0]);
        });
    }
    chooseAudio() {
        const inputAudio = document.getElementById('inputAudio');
        inputAudio.click();
        inputAudio.addEventListener('change', (e) => {
            this.updateAudio(e.target['files'][0]);
        });
    }
    updateImage(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
            const imagePath = `Files/images/cim/${image.name}`;
            const newImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(), imagePath);
            const imageSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytesResumable)(newImageRef, image);
            const publicImageUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(newImageRef);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `CIM/${this.cim}/Children/${this.uid}`), {
                image: publicImageUrl,
            });
            this.child = yield this.appService.getChild(this.cim, this.uid);
            this.appService.dismissLoading();
        });
    }
    updateAudio(audio) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.appService.presentLoadingDefault('En cours de chargement, veuillez patienter...');
            const audioPath = `Files/audio/cim/${audio.name}`;
            const newAudioRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(), audioPath);
            const audioSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytesResumable)(newAudioRef, audio);
            const publicAudioUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(newAudioRef);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `CIM/${this.cim}/Children/${this.uid}`), {
                audio: publicAudioUrl,
            });
            this.child = yield this.appService.getChild(this.cim, this.uid);
            this.appService.dismissLoading();
        });
    }
    editChild(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (data.valid) {
                this.appService.presentLoadingDefault('Mise en jour de la maladie, veuillez patienter...');
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `CIM/${this.cim}/Children/${this.uid}`), {
                    chapitre: data.value.chapitre,
                    title: data.value.title,
                    description: data.value.description,
                });
                data.reset();
                this.appService.dismissLoading();
                this.appService.presentToast('Mise en jour de la maladie effectuée avec succèss', 'light');
                // this.router.navigate(['cim-content', {
                //   uid: this.uid
                // }]);
            }
            else {
                this.appService.presentToast('Veuillez renseigner correctement tous les champs', 'danger');
            }
        });
    }
    modalDismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss({
                dismissed: true
            });
        });
    }
};
EditChildComponent.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__.RemedeServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
EditChildComponent.propDecorators = {
    cim: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    uid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
EditChildComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-edit-child',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_child_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_child_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditChildComponent);



/***/ }),

/***/ 33664:
/*!***********************************************************!*\
  !*** ./src/app/components/edit-cim/edit-cim.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCimComponent": () => (/* binding */ EditCimComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_cim_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-cim.component.html */ 28460);
/* harmony import */ var _edit_cim_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-cim.component.scss */ 67308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ 85645);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);



/* eslint-disable @typescript-eslint/dot-notation */





let EditCimComponent = class EditCimComponent {
    constructor(appService, modalController) {
        this.appService = appService;
        this.modalController = modalController;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.cim = yield yield this.appService.getCIM(this.uid);
        });
    }
    chooseImage() {
        const inputImage = document.getElementById('inputImage');
        inputImage.click();
        inputImage.addEventListener('change', (e) => {
            this.updateImage(e.target['files'][0]);
        });
    }
    chooseAudio() {
        const inputAudio = document.getElementById('inputAudio');
        inputAudio.click();
        inputAudio.addEventListener('change', (e) => {
            this.updateAudio(e.target['files'][0]);
        });
    }
    updateImage(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.appService.presentLoadingDefault('Chargement...');
            const imagePath = `Files/images/cim/${file.name}`;
            const newImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(), imagePath);
            const imageSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytesResumable)(newImageRef, file);
            const publicImageUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(newImageRef);
            const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `CIM/${this.cim.id}`), {
                image: publicImageUrl
            });
            this.appService.dismissLoading();
        });
    }
    updateAudio(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.appService.presentLoadingDefault('Chargement...');
            const audioPath = `Files/audio/cim/${file.name}`;
            const newAudioRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(), audioPath);
            const audioSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytesResumable)(newAudioRef, file);
            const publicAudioUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(newAudioRef);
            const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `CIM/${this.cim.id}`), {
                audio: publicAudioUrl
            });
            this.appService.dismissLoading();
        });
    }
    updateCIM(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (data.valid) {
                this.appService.presentLoadingDefault('Ajout du CIM, veuillez patienter...');
                const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), `CIM/${this.cim.id}`), {
                    title: data.value.title,
                    chapitre: data.value.chapitre
                });
                this.appService.dismissLoading();
                this.appService.presentToast('CIM mise à jour avec succèss', 'light');
            }
            else {
                this.appService.presentToast('Veuillez renseigner correctement tous les champs', 'danger');
            }
        });
    }
    modalDismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss({
                dismissed: true
            });
        });
    }
};
EditCimComponent.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_4__.RemedeServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
EditCimComponent.propDecorators = {
    uid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
EditCimComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-cim',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_cim_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_cim_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditCimComponent);



/***/ }),

/***/ 6645:
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-remedes/edit-remedes.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRemedesComponent": () => (/* binding */ EditRemedesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_remedes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-remedes.component.html */ 38521);
/* harmony import */ var _edit_remedes_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-remedes.component.scss */ 42292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 21286);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ 85645);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);
/* harmony import */ var _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/pharma-service.service */ 3519);



/* eslint-disable max-len */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/dot-notation */








let EditRemedesComponent = class EditRemedesComponent {
    constructor(appService, pharmaService, modalController, router) {
        this.appService = appService;
        this.pharmaService = pharmaService;
        this.modalController = modalController;
        this.router = router;
        this.cimList = [];
        this.children = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.appService.presentLoadingDefault('Veuillez patienter...');
            this.remedy = yield this.pharmaService.getActivatedRemedy(this.uid);
            this.cim = this.remedy.get('cim');
            this.child = this.remedy.get('children');
            this.getCim();
            this.cimSelected = yield this.getCimValue(this.cim);
            this.illnessSelected = yield this.getChildValue(this.cim, this.child);
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
            imageInput.addEventListener('change', (e) => {
                this.uploadImage(e.target['files'][0]);
            });
            audioInput.addEventListener('change', (e) => {
                this.uploadAudio(e.target['files'][0]);
            });
        });
    }
    getCimValue(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.appService.getCIM(uid);
            return result.get('title');
        });
    }
    getChildValue(cim, child) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.appService.getChild(cim, child);
            return result.get('title');
        });
    }
    getCim() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), 'CIM'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)('chapitre'));
            const querySnapshot = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);
            querySnapshot.forEach((data) => {
                this.cimList.push([data.id, data.data()]);
            });
            this.appService.dismissLoading();
        });
    }
    cimChanged(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.cim = null;
            this.child = null;
            this.cimSelected = yield this.getCimValue(data.value.cim);
            const child = document.getElementById('child');
            child.setAttribute('value', '');
            this.appService.presentLoadingDefault('Veuillez patienter...');
            this.getChildren(data.value.cim);
        });
    }
    childChanged(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.illnessSelected = yield this.getChildValue(data.value.cim, data.value.child);
        });
    }
    getChildren(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.children = [];
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `CIM/${uid}/Children`), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)('chapitre'));
            const querySnapshot = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);
            yield querySnapshot.forEach((document) => {
                this.children.push([document.id, document.data()]);
            });
            this.appService.dismissLoading();
        });
    }
    uploadImage(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.appService.presentLoadingDefault('Veuillez patienter...');
            const imagePath = `Pharmacopees/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid}/Files/images/${image.name}`;
            const newImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(), imagePath);
            const imageSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(newImageRef, image);
            const publicImageUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(newImageRef);
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Remedes/${this.remedy.id}`), {
                image: publicImageUrl
            });
            this.remedy = yield this.pharmaService.getActivatedRemedy(this.uid);
            this.appService.dismissLoading();
        });
    }
    uploadAudio(audio) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.appService.presentLoadingDefault('Veuillez patienter...');
            const audioPath = `Pharmacopees/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)().currentUser.uid}/Files/audio/${audio.name}`;
            const newAudioRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getStorage)(), audioPath);
            const audioSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.uploadBytesResumable)(newAudioRef, audio);
            const publicAudioUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_4__.getDownloadURL)(newAudioRef);
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Remedes/${this.remedy.id}`), {
                audio: publicAudioUrl
            });
            this.remedy = yield this.pharmaService.getActivatedRemedy(this.uid);
            this.appService.dismissLoading();
        });
    }
    editRemedy(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.cim && this.child) {
                data.value.cim = this.cim;
                data.value.children = this.child;
            }
            const cim = data.value.cim;
            const child = data.value.children;
            if (data.value.cim &&
                data.value.children &&
                data.value.nom &&
                data.value.description) {
                this.appService.presentLoadingDefault('Ajout du remède en cours, veuillez patienter...');
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(), `Remedes/${this.remedy.id}`), data.value);
                this.appService.dismissLoading();
                this.appService.presentToast('Mise en jour effectuée avec success', 'light');
            }
            else {
                this.appService.presentToast('Veuillez renseigner correctement tous champs', 'danger');
            }
        });
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true
        });
    }
};
EditRemedesComponent.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_5__.RemedeServiceService },
    { type: _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_6__.PharmaServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
EditRemedesComponent.propDecorators = {
    uid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
EditRemedesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-edit-remedes',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_remedes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_remedes_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditRemedesComponent);



/***/ }),

/***/ 97404:
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search.component.html */ 94689);
/* harmony import */ var _search_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.scss */ 76068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/remede-service.service */ 32132);
/* harmony import */ var _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pharma-service.service */ 3519);







let SearchComponent = class SearchComponent {
    constructor(appService, pharmaService, modalController) {
        this.appService = appService;
        this.pharmaService = pharmaService;
        this.modalController = modalController;
        this.results = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.pharmaService.findRemedes();
            result.forEach((remedes) => {
                this.results.push(remedes.data());
            });
        });
    }
    modalDismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss();
        });
    }
    search(searchText) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: src_app_services_remede_service_service__WEBPACK_IMPORTED_MODULE_2__.RemedeServiceService },
    { type: _services_pharma_service_service__WEBPACK_IMPORTED_MODULE_3__.PharmaServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-search',
        template: _D_Projects_RemedesAncestraux_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SearchComponent);



/***/ }),

/***/ 3519:
/*!****************************************************!*\
  !*** ./src/app/services/pharma-service.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PharmaServiceService": () => (/* binding */ PharmaServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 21286);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ 85645);

/* eslint-disable max-len */





let PharmaServiceService = class PharmaServiceService {
    constructor(router) {
        this.router = router;
    }
    createPharma(uid, value, file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const imagePath = `Pharmacopees/${(0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)().currentUser.uid}/Files/images/${file.name}`;
            const newImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)(), imagePath);
            const imageSnapshot = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(newImageRef, file).then((state) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                const publicImageUrl = yield (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(newImageRef);
                value.image = publicImageUrl;
                yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), 'Pharmacopees', uid), value);
            }));
            this.router.navigateByUrl('/gerer');
        });
    }
    getPharma(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), `Pharmacopees/${uid}`));
            if (docRef.get('status') === 'desactivated') {
                return null;
            }
            else {
                return yield docRef;
            }
        });
    }
    getOwnerInfos(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), `Users/${uid}`));
            return yield docRef;
        });
    }
    getIllnessRemedies(cim, child) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), 'Remedes'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('state', '==', 'activated'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('cim', '==', cim), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('children', '==', child));
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(q);
        });
    }
    /**
     *Get a remedy by its id
     *
     * @param {string} uid
     * @return {*}
     * @memberof PharmaServiceService
     */
    getActivatedRemedy(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), 'Remedes', uid);
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);
        });
    }
    getMyRemedies(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), 'Remedes'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('state', '==', 'activated'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('pharmacopee', '==', uid));
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(docRef);
        });
    }
    /**
     *Get remedy for a specified user.
     *
     * @param {string} userUid
     * @return {*}
     * @memberof PharmaServiceService
     */
    getRemedes(userUid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), `Remedes`), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('state', '==', 'activated'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('pharmacopee', '==', userUid));
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(q);
        });
    }
    getRemedesFromCIM(uid, remedeRef) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), `CIM/${remedeRef.cim}/Children/${remedeRef.children}/Remedes/${uid}`));
        });
    }
    /**
     *When searching for remedies
     *
     * @return {*}
     * @memberof PharmaServiceService
     */
    findRemedes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), 'Remedes'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('state', '==', 'activated'));
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(docRef);
        });
    }
};
PharmaServiceService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
PharmaServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PharmaServiceService);



/***/ }),

/***/ 32132:
/*!****************************************************!*\
  !*** ./src/app/services/remede-service.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemedeServiceService": () => (/* binding */ RemedeServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 21286);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ 24372);
/* harmony import */ var src_environments_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/models */ 46431);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/share */ 98950);

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */









let RemedeServiceService = class RemedeServiceService {
    constructor(router, menu, toastCtrl, loadingCtrl) {
        this.router = router;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = new src_environments_models__WEBPACK_IMPORTED_MODULE_2__.User();
        this.auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(this.auth, (user) => {
            if (user) {
                const uid = user.uid;
                return uid;
            }
            else {
                return false;
            }
        });
    }
    getUser(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), `/Users/${uid}`);
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);
        });
    }
    /**
     *Method that returns all CIM
     *
     * @return {*}  {Promise<DocumentData>}
     * @memberof RemedeServiceService
     */
    getActivatedCIM() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), 'CIM'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('state', '==', 'activated'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)('chapitre'));
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(q);
        });
    }
    getCIM(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), 'CIM', uid);
            const docSnap = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);
            return docSnap;
        });
    }
    getListCIM() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), 'CIM'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)('chapitre'));
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(q);
        });
    }
    getChild(cim, child) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const childRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), `CIM/${cim}/Children/${child}`);
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(childRef);
        });
    }
    shareRemedy(remedy) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const children = yield this.getChild(remedy === null || remedy === void 0 ? void 0 : remedy.get('cim'), remedy === null || remedy === void 0 ? void 0 : remedy.get('children'));
            yield _capacitor_share__WEBPACK_IMPORTED_MODULE_3__.Share.share({
                title: 'Le saviez - vous ?',
                text: `${remedy === null || remedy === void 0 ? void 0 : remedy.get('nom')} est très efficace dans le traitement de(s) : ${children === null || children === void 0 ? void 0 : children.get('title')}.\n Photo de la maladie : ${children === null || children === void 0 ? void 0 : children.get('image')}.\n Photo du remede : `,
                url: `${remedy.get('image')}`,
                dialogTitle: 'Partager avec : ',
            });
        });
    }
    getChildren(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), `CIM/${uid}/Children`), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)('chapitre'));
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(docRef);
        });
    }
    getActivatedChildren(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), `CIM/${uid}/Children`), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('state', '==', 'activated'));
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(docRef);
        });
    }
    /**
     *Method to sign in / up with google auth provieder.
     *You don't so need to provide any password
     *
     * @memberof RemedeServiceService
     */
    signWithGoogle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider();
            yield (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup)(this.auth, provider)
                .then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                this.user.userName = user.email;
                this.user.displayName = user.displayName;
                this.user.photoURL = user.photoURL;
                this.setCurrentUser(user);
                const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.db, `${user.uid}`);
                const docSnap = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);
                if (docSnap.exists) {
                    console.log('User already exists', docSnap.data());
                    this.presentToast(`Bienvenue ${docSnap.data().userName}`, 'light');
                }
                else {
                    console.log('No user found > dhvcjh');
                    yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.db, 'Users', user.uid), {
                        displayName: user.displayName,
                        userName: user.email,
                        photoURL: user.photoURL,
                        state: this.user.state,
                        created: firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.Timestamp.now()
                    }, { merge: true }).then((results) => {
                        this.router.navigateByUrl('profile', { skipLocationChange: true }).then(() => this.router.navigate(['']));
                        console.log('User added successfully...', results);
                        // window.location.reload();
                    }).catch((error) => {
                        console.log('Unable to add user: ' + error.message);
                    });
                }
            })).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider.credentialFromError(error);
            });
        });
    }
    /**
     * When the user is logged in, its data will be stored
     * in the localStorage
     *
     * @param user
     * @return any
     * @memberof RemedeServiceService
     */
    setCurrentUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    getDocument() {
        return this.document;
    }
    setDocument(child) {
        this.document = child;
    }
    setPath(uid) {
        this.child = uid;
    }
    getPath() {
        return this.child;
    }
    like(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), `Remedes/${uid}`), {
                likes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayUnion)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)().currentUser.uid),
                dislikes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayRemove)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)().currentUser.uid)
            });
        });
    }
    dislike(uid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(), `Remedes/${uid}`), {
                dislikes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayUnion)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)().currentUser.uid),
                likes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayRemove)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)().currentUser.uid),
            });
        });
    }
    signOut() {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)());
        localStorage.removeItem('user');
        this.menu.close();
        // this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
        // this.router.navigate(['profile']));
        window.location.reload();
    }
    authStateObserver(user) {
        if (user) {
            return user;
            // We save the Firebase Messaging Device token and enable notifications.
            // saveMessagingDeviceToken();
        }
        else {
            // User is signed out!
            // Hide user's profile and sign-out button.
            return user;
        }
    }
    presentToast(infos, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: infos,
                position: 'top',
                color: state,
                duration: 3130
            });
            yield toast.present();
        });
    }
    initFirebaseAuth() {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)((0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(), this.authStateObserver);
    }
    presentLoadingDefault(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: `<b>${message}</b>`,
            });
            yield this.loading.present();
        });
    }
    dismissLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.dismiss();
        });
    }
};
RemedeServiceService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
RemedeServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], RemedeServiceService);



/***/ }),

/***/ 41251:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 39112);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    firebase: {
        projectId: 'remedes-ancestraux',
        appId: '1:73585650502:web:5e454e42e44fb1bb87d347',
        storageBucket: 'remedes-ancestraux.appspot.com',
        locationId: 'us-central',
        apiKey: 'AIzaSyDW-Nm2wQznLHTPEbwsaWwco8ANdCuftfg',
        authDomain: 'remedes-ancestraux.firebaseapp.com',
        messagingSenderId: '73585650502',
        measurementId: 'G-HL3QDCQCH8',
    },
    production: false
};
const client = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(environment.firebase);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 46431:
/*!************************************!*\
  !*** ./src/environments/models.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "Remede": () => (/* binding */ Remede),
/* harmony export */   "Config": () => (/* binding */ Config)
/* harmony export */ });
class User {
    constructor() {
        // eslint-disable-next-line max-len
        this.photoURL = 'https://firebasestorage.googleapis.com/v0/b/remedes-ancestraux.appspot.com/o/Files%2Fimages%2Fface_medical.png?alt=media&token=7cf12a11-185d-4ef4-a9fd-f34c97e012e0';
        this.state = 'activated';
    }
}
class Remede {
    constructor(cim, child, description, image, audio) {
        this.cim = cim;
        this.child = child;
        this.description = description;
        this.image = image;
        this.audio = audio;
    }
}
class Config {
}


/***/ }),

/***/ 3422:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 92014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 41251);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		65429,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		89115,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		83969,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		25882,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		34548,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		68751,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		430,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		48762,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		36232,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		82541,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		91446,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		60298,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		29171,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		41502,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		88899,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		89396,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5194,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		69491,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		19420,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		40978,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		78860,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		11389,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		11526,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		51872,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		88040,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		76326,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		94614,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		94513,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		81673,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		3596,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		77415,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		51391,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		96219,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		37363,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		76266,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		38939,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2482,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		78906,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7743,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		21872,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		84541,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		84160,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		31580,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		20530,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		71167,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		55869,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		6056,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 11365:
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-child/edit-child.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNoaWxkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 67308:
/*!*************************************************************!*\
  !*** ./src/app/components/edit-cim/edit-cim.component.scss ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNpbS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 42292:
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-remedes/edit-remedes.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXJlbWVkZXMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 76068:
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3422)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map